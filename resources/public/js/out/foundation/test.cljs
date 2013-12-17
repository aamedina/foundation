(ns foundation.test
  (:require [clojure.browser.repl]
            [foundation.app :as app]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn ^:export -main []
  (println "Hello, world!"))
