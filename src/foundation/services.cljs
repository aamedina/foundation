(ns foundation.services
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [effect]]
            [foundation.behavior :as behavior]
            [foundation.templates :as tmpl]
            [foundation.models :as models]
            [foundation.rendering :as rendering]
            [foundation.app.message :as msg]
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

(defmethod effect [:init
                   #{[:dashboard]}
                   #{[:datagrid]} :vals]
  [message input-queue input]
  ;; (go (let [accounts (reify-model models/accounts {})]))
  (println (msg/path message) input))
