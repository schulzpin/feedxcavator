(ns feedxcavator.excavation
  (:require [feedxcavator.api :as api]
            [clojure.string :as str]
            [clj-time.core :as tm]
            [clj-time.format :as fmt])
  (:use [ring.util.mime-type :only [ext-mime-type]]
         net.cgrand.enlive-html
         clojure.walk))

(def ^:const +xml-header+ "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n")

(defn fix-relative
  "Transforms relative URLs to absolute (may be needed by a feed reader for headline identification purposes)."
  [url feed-settings]
  (when (not (str/blank? url))
    (let [target-url (:target-url feed-settings)
          target-domain (re-find #"(http.?://)?([^/]+)/?" target-url)]
      (cond
       (.startsWith url "/") (str (second target-domain) (last target-domain) url)
       (= (.indexOf url "://") -1) (str target-url
                                        (when (not (.endsWith target-url "/")) "/")
                                        url)
       :default url))))

(defn apply-selectors
  "Applies CSS selectors from the feed settings to a HTML page content.
Returns list of hash-maps with extracted headline data (hash map keys correspond to the selector keys)."
  [doc-tree feed-settings]
  (let [selectors (:enlive-selectors feed-settings)]
    (letfn [(get-selector [key n] ; get selector fom a set numbered n, get the first selector otherwise
              (let [sel (selectors key)]
                (when sel
                  (let [sel (if (>= (dec (count sel)) n)
                              (get sel n)
                              (first sel))]
                    (postwalk #(if (symbol? %) (resolve %) %) sel)))))]
      (loop [n 0 selector-set (:headline selectors) headlines (transient [])]
        (let [headline-sel (first selector-set)]
          (if headline-sel
            (do
              (doseq [headline-html (select doc-tree headline-sel)]
                (letfn [(select-element [category] ; select an element from headline html                         
                          (first (select headline-html (get-selector category n))))
                        (get-content [selection] ; get the selected element content
                          (apply str (emit* (:content selection))))
                        (get-link [category attr] ; extract link from the selected element
                          (fix-relative (attr (:attrs (select-element category)))
                                        feed-settings))]
                  (let [headline-data {:title (get-content (select-element :title))
                                       :link (get-link :link :href)
                                       :summary (get-content (select-element :summary))
                                       :image (get-link :image :src)}]
                    (when (some #(not (str/blank? (second %))) headline-data)
                      (conj! headlines headline-data)))))
              (recur (inc n) (next selector-set) headlines))
            (let [headlines (persistent! headlines)]
              ;; because filter-read-articles function may filter out all headlines, metadata is the only
              ;; way to determine if selectors have selected nothing
              (if (seq headlines) 
                (with-meta headlines {:n-articles (count headlines)})
                (with-meta [] {:out-of-sync true})))))))))

(defn filter-read-articles
  "Filter out articles feedxcavator already seen on this feed (may produce unexpected results)."
  ([headlines feed-settings]
     (filter-read-articles headlines nil feed-settings))

  ;; id extractor may be useful in custom excavators if different full article link structure
  ;; is used in headlines
  ([headlines id-extractor feed-settings]
     (let [remember-recent (:remember-recent feed-settings)
           recent-article (:recent-article feed-settings)]
       (if (and (seq headlines) remember-recent)
         (let [id-extractor (or id-extractor (fn [h] (:link h)))
               feed-settings (assoc feed-settings :recent-article (id-extractor (first headlines)))]
           (api/store-feed! feed-settings)
           (take-while #(not= (id-extractor %) recent-article) headlines))
         headlines))))

(defmacro error-headline [feed title description & body]
  `(at ~feed
       ~title (content "Error")
       ~description
       (content "Probably Feedxcavator selectors are out of sync with the resource markup.")
       ~@body))

(defn make-atom-feed
  ([headlines feed-settings]
     (make-atom-feed headlines nil feed-settings))

  ([headlines headline-id-gen feed-settings]
     (let [updated (fmt/unparse (fmt/formatter "yyyy-MM-dd'T'HH:mm:ss'Z'") (tm/now))
           feed-w-head (at (xml-resource (api/get-resource-as-stream "atom.xml"))
                           [:feed] (set-attr :xml:base (api/sanitize (:target-url feed-settings)))
                           [:feed :> :id] (content (:target-url feed-settings))
                           [:feed :> :title] (content (:feed-title feed-settings))
                           [:feed :> :updated] (content updated))]
       (let [headline-id-gen (or headline-id-gen (fn [h] (:link h)))
             feed (if (:out-of-sync (meta headlines))
                    (error-headline feed-w-head
                                    [:feed :> :entry :> :title]
                                    [:feed :> :entry :> :summary]
                                    [:feed :> :entry :> :id] (content (:target-url feed-settings))
;;                                    [:feed :> :entry :> :updated] (content updated)
                                    [:feed :> :entry :> [:link (attr= :rel "alternate")]]
                                    (set-attr :href (:target-url feed-settings)))
                    (transform feed-w-head [:feed :> :entry]
                               (clone-for [headline headlines]
                                          [:id] (content (headline-id-gen headline))
                                          [:title] (content (:title headline))
                                          [:updated] (content updated)
                                          [:summary] (content (:summary headline))
                                          [[:link (attr= :rel "alternate")]] (set-attr :href (:link headline))
                                          [[:link (attr= :rel "enclosure")]]
                                          (when (:image headline)
                                            (do->
                                             (set-attr :type (ext-mime-type (:image headline)))
                                             (set-attr :href (:image headline)))))))]
      (apply str (cons +xml-header+ (emit* feed)))))))

(defn make-rss-feed 
  "Transform the list of hash-maps with extracted headline data to a RSS feed XML representation."
  [headlines feed-settings]
  (let [feed-w-head (at (xml-resource (api/get-resource-as-stream "rss.xml"))
                        [:rss] (set-attr :xml:base (api/sanitize (:target-url feed-settings)))
                        [:channel :> :link] (content (:target-url feed-settings))
                        [:channel :> :title] (content (:feed-title feed-settings))
                        [:channel :> :pubDate] (content (fmt/unparse (:rfc822 fmt/formatters) (tm/now))))]
    (let [feed (if (:out-of-sync (meta headlines))
                 (error-headline feed-w-head
                                 [:channel :> :item :> :title] 
                                 [:channel :> :item :> :description]
                                 [:channel :> :item :> :link] (content (:target-url feed-settings)))
                 (transform feed-w-head [:channel :> :item]
                            (clone-for [headline headlines]
                                       [:title] (content (:title headline))
                                       [:description] (content (:summary headline))
                                       [:link] (content (:link headline))
                                       [:enclosure] (when (:image headline)
                                                      (do->
                                                       (set-attr :url (:image headline))
                                                       (set-attr :type (ext-mime-type (:image headline))))))))]
      (apply str (cons +xml-header+ (emit* feed))))))

(defprotocol HTMLExcavator
  "HTML to feed conversion routine protocol"
  (excavate [this feed-settings]
    "Main excavation routine. Should return a vector with content type as the first vector element
and string feed data as the second."))

(deftype DefaultExcavator []
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))
          doc-tree (api/make-enlive-resource response feed-settings)]
      (if doc-tree
        (let [headlines (-> (apply-selectors doc-tree feed-settings)
                            (filter-read-articles feed-settings))]
          (api/with-meta-from headlines ; pass meta to the result vector (needed by editor)
            ["application/rss+xml" (make-rss-feed headlines feed-settings)]))
        (throw (Exception. "Target page not found"))))))

(defn perform-excavation 
  "Performs feed data extraction and conversion to RSS based on the given feed settings.
Custom excavator will be used if specified in the feed settings."
  [feed-settings]
  (let [custom-excavator (:custom-excavator feed-settings)
        namespace (when custom-excavator (last (re-find #"(.*?)\.[^.]+$" custom-excavator)))]
    (if (not (or (str/blank? custom-excavator) (str/blank? namespace)))
      (let [custom-params (:custom-params feed-settings)
            custom-params (if (str/blank? custom-params) [] (read-string custom-params))]
        (require (read-string namespace))
        (let [cons (last (.getDeclaredConstructors (resolve (read-string custom-excavator))))]
          (excavate (.newInstance cons (to-array custom-params)) feed-settings)))
      (excavate (DefaultExcavator.) feed-settings))))
