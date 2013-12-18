(ns foundation.test
  (:require [clojure.browser.repl]
            [clojure.string :as str]
            [foundation.app :as app]
            [foundation.test.behavior :as b]
            [foundation.app.message :as msg]
            [foundation.test.services :as services]
            [foundation.test.routes :as routes :refer [app-routes]]
            [cljs.core.async :refer [put!]])
  (:require-macros [secretary.macros :refer [defroute]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn ^:export -main []
  (let [app (app/build :root-id "content" :routes app-routes)]
    app))
