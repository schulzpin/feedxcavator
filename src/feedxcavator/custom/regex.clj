(ns feedxcavator.custom.regex
  (:require [feedxcavator.api :as api])
  (:use feedxcavator.excavation))

(deftype RegexFilter [rx]
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))
          doc-tree (api/make-enlive-resource response feed-settings)]
      (if doc-tree
        (let [headlines (-> (apply-selectors doc-tree feed-settings)
                            (filter-read-articles feed-settings))
              pattern (re-pattern rx)
              headlines (filter #(re-find pattern (:title %)) headlines)]
          (api/with-meta-from headlines ; pass meta to the result vector (needed by editor)
            ["application/rss+xml" (make-rss-feed headlines feed-settings)]))
        (throw (Exception. "Target page not found"))))))