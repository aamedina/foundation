(ns foundation.test
  (:require [clojure.browser.repl]
            [clojure.string :as str]
            [foundation.test.behavior :as b]
            [foundation.app :as app]
            [foundation.app.message :as msg]
            [foundation.test.services :as services]
            [foundation.test.rendering :as render]
            [foundation.test.routes :as routes :refer [app-routes]]
            [cljs.core.async :refer [put!]])
  (:require-macros [secretary.macros :refer [defroute]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn ^:export -main []
  (let [app (app/build :root-id "content" :routes app-routes)]
    (put! (:input app)
          {msg/type :init msg/path [:datagrid :collection]})
    ;; (put! (:input app)
    ;;       {msg/type :add msg/path [:datagrid :collection]})
    ;; (put! (:input app)
    ;;       {msg/type :delete msg/path [:datagrid :collection]})
    app))
