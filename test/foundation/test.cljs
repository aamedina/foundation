(ns foundation.test
  (:require [clojure.browser.repl]
            [foundation.app :as app]
            [foundation.app.router :refer [router]]
            [foundation.test.routes :as routes :refer [app]])
  (:require-macros [secretary.macros :refer [defroute]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(def app-state (atom {}))

(defn ^:export -main []
  (.setEnabled router true))
