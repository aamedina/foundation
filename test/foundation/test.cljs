(ns foundation.test
  (:require [clojure.browser.repl]
            [clojure.string :as str]
            [foundation.app :as app]
            [foundation.app.util :refer [*debug*]]
            [foundation.app.router :refer [router *routes* navigate!]]
            [foundation.test.routes :as routes :refer [app]])
  (:require-macros [secretary.macros :refer [defroute]])
  (:import [goog Uri]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(def app-state (atom {}))

(defn ^:export -main []
  (binding [*routes* app]
    (navigate! js/document.location.href :method :get)))
