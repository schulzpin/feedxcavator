;; Feedxcavator (a HTML to RSS converter)
;; (C) 2011 g/christensen (gchristnsn@gmail.com)

(ns feedxcavator.custom.digg
  (:require [feedxcavator.api :as api]
            [clojure.string :as str])
  (:use feedxcavator.excavation))

;; this custom excavator simply downloads an atom stream from digg.com and tries
;; to regex-replace all links to digg comment pages in it by story redirect links
;; selectors are ignored (headline selector text area should contain the "ignore" string)
(deftype DiggAtomCommentsBypasser []
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))]
      (if (= (:response-code response) 200)
        (let [content (slurp (:content response))]
          ["application/atom+xml" (str/replace
                                   content
                                   #"<link href=\"([^\"]*)\""
                                   (fn [match]
                                     (let [url (second match)
                                           story-id (second (re-find #"\/([^/]+)\?" url))]
                                       (str "<link href=\"http://digg.com/story/r/" story-id "\""))))])
        (throw (Exception. "Target page not found"))))))

;; replaces extracted links to digg comments pages by story redirect links
;; (this probably is not so useful, because we can get RSS streams for many news views in digg
;; such as top for 24 hrs.  and use the previous extractor with a such stream)
(defn bypass-comments [headlines]
  (for [h headlines]
    (assoc h :link (str "http://digg.com/story/r/" (re-find #"[^/]*$" (:link h))))))

(deftype DiggCommentsBypasser []
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))
          doc-tree (api/make-enlive-resource response feed-settings)]
      (if doc-tree
        (let [headlines (-> (apply-selectors doc-tree feed-settings)
                            (filter-read-articles feed-settings))]
          (api/with-meta-from headlines ; pass meta to the result vector (needed by editor)
            ["application/rss+xml" (make-rss-feed (bypass-comments headlines) feed-settings)]))
        (throw (Exception. "Target page not found"))))))