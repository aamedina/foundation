(ns foundation.test
  (:require [clojure.browser.repl]
            [foundation.app :as app]
            [secretary.core :as sec])
  (:require-macros [secretary.macros :refer [defroute]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(def app-state (atom {}))

(defroute "/users/:id" {:keys [id]}
  (println (str "User: " id)))

(defn ^:export -main []
  (sec/dispatch! "/users/adrian"))
