;; Feedxcavator (a HTML to RSS converter)
;; (C) 2011 g/christensen (gchristnsn@gmail.com)

(defproject feedxcavator "0.1.0"
  :description "A HTML to RSS Converter"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure/tools.macro "0.1.1"]
                 [compojure "0.6.4"]
                 [enlive "1.0.0"]
                 [clj-time "0.3.3"]]
  :aot [feedxcavator.app_servlet
        feedxcavator.custom.atomid
        feedxcavator.custom.linkid]
  :dev-dependencies [[appengine-magic "0.4.6-SNAPSHOT"]])