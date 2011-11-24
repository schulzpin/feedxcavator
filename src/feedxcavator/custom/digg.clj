;; Feedxcavator (a HTML to RSS converter)
;; (C) 2011 g/christensen (gchristnsn@gmail.com)

;; an empty stub for a custom excavator for digg.com (may be will finished some time)
(ns feedxcavator.custom.digg
  (:require [feedxcavator.api :as api])
  (:use feedxcavator.excavation))

(deftype DiggExcavator [n-pages]
  HTMLExcavator
  (excavate [this feed-settings]
    ["text/plain" (str n-pages)]))
