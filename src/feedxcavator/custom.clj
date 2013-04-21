(ns feedxcavator.custom
  (:require [feedxcavator.api :as api]
            [clojure.string :as str]
            [net.cgrand.enlive-html :as enlive])
  (:use clojure.tools.macro))

(def custom-template )

(defn custom-route []
  (if api/+public-deploy+
    (api/page-not-found)
    (api/html-page
     (api/render
      ;(enlive/transform
       (enlive/html-resource (api/get-resource-as-stream "custom.html"))))));)
