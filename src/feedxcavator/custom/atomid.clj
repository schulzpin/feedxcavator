(ns feedxcavator.custom.atomid
  (:import (java.security MessageDigest)
           (java.math BigInteger))
  (:require [feedxcavator.api :as api])
  (:use feedxcavator.excavation))

;; custom excavator which generates atom feed with headline IDs based on
;; the ID found in an article link and headline title text
;; does not implement article filtering

(defn headline-id-gen [headline]
  (let [md5 (doto (MessageDigest/getInstance "MD5")
              (.reset)
              (.update (.getBytes (str (re-find #"\d{5,}" (:link headline))
                                       (:title headline)))))]
    (.toString (new BigInteger 1 (.digest md5)) 16)))

(deftype TitleLinkIDAtom []
  HTMLExcavator
  (excavate [this feed-settings]
    (let [response (api/fetch-url (:target-url feed-settings))
          doc-tree (api/make-enlive-resource response feed-settings)]
      (if doc-tree
        (let [headlines (apply-selectors doc-tree feed-settings)]
          (api/with-meta-from headlines ; pass meta to the result vector (needed by editor)
            ["application/atom+xml" (make-atom-feed headlines headline-id-gen feed-settings)]))
        (throw (Exception. "Target page not found"))))))