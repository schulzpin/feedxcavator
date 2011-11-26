(ns feedxcavator.custom.linkid
  (:require [feedxcavator.api :as api])
  (:use feedxcavator.excavation))

(deftype LinkIDFilter []
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))
          doc-tree (api/make-enlive-resource response feed-settings)]
      (if doc-tree
        (let [headlines (-> (apply-selectors doc-tree feed-settings)
                            (filter-read-articles #(re-find #"\d{5,}" (:link %)) feed-settings))]
          (api/with-meta-from headlines ; pass meta to the result vector (needed by editor)
            ["application/rss+xml" (make-rss-feed headlines feed-settings)]))
        (throw (Exception. "Target page not found"))))))