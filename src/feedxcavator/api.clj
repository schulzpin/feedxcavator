;; Feedxcavator (a HTML to RSS converter)
;; (C) 2011 g/christensen (gchristnsn@gmail.com)

(ns feedxcavator.api
  (:import [com.google.appengine.api.memcache Expiration]
           [java.net URLEncoder])
  (:require [appengine-magic.core :as ae]
           [appengine-magic.services.datastore :as ds]
           [appengine-magic.services.user :as user]
           [appengine-magic.services.memcache :as cache]
           [net.cgrand.enlive-html :as enlive]
           [clojure.string :as str])
  (:use clojure.tools.macro
        [appengine-magic.services.url-fetch :only [fetch]]))

(def ^:const +public-deploy+
  "Constant to determine is it a public installation on GAE."
  false)

;; available in the context of request handler calls
(def ^:dynamic *servlet-context* "A servlet context instance." nil)
(def ^:dynamic *remote-addr* "Request remote address." nil)
(def ^:dynamic *app-host* "Application server host name (with protocol scheme)." nil)

;; we need some layer of abstraction, because the application may be ported to
;; a plain servlet container (for standalone usage) some time, although this have
;; no sense for Google Reader or Feedly without special measures
;; (forwarding through an external domain)

;; use :gae or :servlet (in case of a plain servlet container implementation, which
;; does not exist yet)
(def ^:const +platform+
  "The current underlying platform, :gae or :servlet"
  :gae)

;; recaptcha private key (needed only for public installations)
(def ^:const +re-private-key+ "")

(def ^:const +feed-url-base+ "/deliver?feed=")
(def ^:const +edit-url-base+ "/edit?feed=")
(def ^:const +delete-url-base+ "/delete?feed=")
(def ^:const +manager-url-base+ "/manage")

(defn peel-list [the-list]
  (let [first-arg (first the-list)]
    (if (list? first-arg) first-arg the-list)))

(defmacro defapi [fn-name doc [& args] & impl-kvs]
  (let [computed-args (peel-list (mexpand args))]
    `(defn ~fn-name ~doc [~@computed-args]
       ~@((apply hash-map impl-kvs) +platform+))))

;; data persistence ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro apply-cons [cons fields]
  (let [computed-fields (mexpand fields)]
    `(~cons ~@computed-fields)))
  
(defmacro defentity [name field-list]
  `(ds/defentity ~name [~@(mexpand `~field-list)]))

(defsymbolmacro feed-fields (^:key uuid
                             feed-title
                             target-url
                             charset
                             ^:clj selectors
                             ^:clj enlive-selectors
                             remember-recent
                             recent-article
                             custom-excavator
                             custom-params))

(defsymbolmacro selector-fields (headline title link summary image))                                 

(case +platform+
  :gae (defentity Feed feed-fields))

(defapi cons-feed
  "Constructs a feed settings entity struct-map."
  [feed-fields]
  :gae [ (apply-cons Feed. feed-fields) ])

(defmacro cons-feed-from-map
  "Constructs a feed settings entity struct-map from a hash-map with the same structure."
  [feed-settings]
  (let [gsettings-map (gensym)]
    `(let [~gsettings-map ~feed-settings]
       (cons-feed ~@(for [param `~(mexpand feed-fields)]
                      (list (keyword param) gsettings-map))))))

(defapi query-feed
  "Reads feed settings from database."
  [feed-id]
  :gae [ (ds/retrieve Feed feed-id) ])

(defapi get-all-feeds
  "Gets settings of all stored feeds."
  []
  :gae [ (ds/query :kind Feed) ])

(defapi store-feed!
  "Stores feed settings in database."
  [feed-settings]
  :gae [ (ds/save! feed-settings) ])

(defapi delete-feed!
  "Deletes the given feed."
  [feed-id]
  :gae [ (ds/delete! (ds/retrieve Feed feed-id)) ])


;; url fetching ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi fetch-url
  "Returns platform-specific response of url-fetching routine, params are also
platform-specific (use feedxcavator.api/+platform+ to detect the current platform).
Useful to retreive HTTP headers from a platform-specific response in custom excavators."
  [url & params]
  :gae [ (apply fetch (cons url (conj params :headers {"Accept-Charset" "*"}))) ])


(defapi make-enlive-resource
  "Transforms a platform-specific response obtained with fetch-url api
function to a format which is edible by enlive selection functions.
May return nil in case if this is not possible."
  [response feed-settings]
  :gae [(when (= (:response-code response) 200)
          (let [content-type ((:headers response) "Content-Type")
                charset (if content-type
                          (let [charset= (.indexOf content-type "charset=")]
                            (if (>= charset= 0)
                              (.substring content-type (+ charset= 8))
                              (:charset feed-settings)))
                          (:charset feed-settings))]
            (enlive/html-resource (java.io.InputStreamReader.
                                   (java.io.ByteArrayInputStream. (:content response))
                                   charset))))])

(defn- url-encode-utf8 [str]
  (URLEncoder/encode str "UTF-8"))

(defapi confirmation-valid?
  "Verify captcha."
  [response challenge]
  :gae [(or (not +public-deploy+)
            (let [params (str "response=" (url-encode-utf8 response)
                              "&challenge=" (url-encode-utf8 challenge)
                              "&remoteip=" (url-encode-utf8 feedxcavator.api/*remote-addr*)
                              "&privatekey=" +re-private-key+)
                  response (-> (fetch "http://www.google.com/recaptcha/api/verify"
                                      :method :post
                                      :payload (.getBytes params "UTF-8"))
                               :content
                               slurp)]
              (>= (.indexOf response "true") 0)))])
  
;; memcache ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; memcache is not used currently

(defapi cache-contains?
  "Check for value existence in memory cache."
  [key]
  :gae [ (cache/contains? key) ])

(defapi cache-get
  "Get value from memory cache."
  [key]
  :gae [ (cache/get key) ])

(defapi cache-put!
  "Put value to memory cache. Expires after 10 minutes."
  [key value]
  :gae [ (cache/put! key value :expiration (Expiration/byDeltaSeconds 600)) ])


;; initialization ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi perform-initialization
  "Performs platform-specific initialization."
  [handler]
  :gae [ (ae/def-appengine-app feedxcavator-app handler #_:war-root #_"d:/sandbox/clojure/feedxcavator/war") ])

;; authentication ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi user-admin?
  "Checks if logged in user is admin."
  [handler]
  :gae [ (user/user-admin?) ])

;; resources ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi get-resource-as-stream
  "Opens resource file as a stream."
  [path]
  :gae [ (ae/open-resource-stream path) ])

;; ring responses ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn permission-denied []
  {:status 403
   :headers {"Content-Type" "text/html"}
   :body "<h2>Permission denied</h2>"})

(defn page-not-found []
  {:status 404
   :headers {"Content-Type" "text/html"}
   :body "<h2>Page not found</h2>"})

(defn internal-server-error []
  {:status 505
   :headers {"Content-Type" "text/html"}
   :body "<h2>Internal server error</h2>"})

(defn page-found [content-type body]
  {:status 200
   :headers {"Content-Type" content-type,
             "Cache-Control" "no-cache"}
   :body body})

(defn html-page [body]
  {:status 200
   :headers {"Content-Type" "text/html"
             "Cache-Control" "no-cache"}
   :body body})

(defn text-page [body]
  {:status 200
   :headers {"Content-Type" "text/plain",
             "Cache-Control" "no-cache"}
   :body body})

(defn redirect-to
  [location]
  {:status 302
   :headers {"Location" location}})

;; misk ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defapi in-debug-env?
  "Was the application launched in debug environment?"
  []
  :gae [ (not= appengine-magic.core/appengine-environment-type :production) ])

(defmacro with-meta-from [obj recipient]
  `(with-meta ~recipient (meta ~obj)))

(defmacro alter-meta [obj & kv]
  `(let [obj# ~obj]
     (with-meta obj# (apply assoc (cons (meta obj#) ~kv)))))
                
(defn get-uuid
  "Get globally unique identifier."
  []
  (.replaceAll (str (java.util.UUID/randomUUID)) "-" ""))

(defn render
  "Transforms an enlive template to string."
  [nodeset]
  (apply str (enlive/emit* nodeset)))

(defn sanitize
  "Escape a string for insertion into HTML code."
  [content]
  (str/escape content {\< "&lt;" \> "&gt;" \" "&quot;"}))
