(ns foundation.app.test
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app]
            [foundation.app.behavior :as behavior]
            [foundation.app.rendering :as rendering]
            [foundation.app.services :as services]
            [foundation.app.message :as msg]
            [foundation.app.templates :as tmpl]
            [foundation.app.models :as models]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [foundation.app.data.component :as c]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn init
  [app]
  (put! (:input (:app app)) {msg/type :init msg/path [:dashboard]})
  (put! (:input (:app app)) {msg/type :init msg/path [:datagrid]}))

(defn ^:export -main []
  (let [app (app/create-app "content")]
    (init app)))
