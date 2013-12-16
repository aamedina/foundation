(ns foundation.services
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [goog.date :as date]
            [foundation.app :as app :refer [effect]]
            [foundation.behavior :as behavior]
            [foundation.templates :as tmpl]
            [foundation.models :as models]
            [foundation.app.models :as m]
            [foundation.rendering :as rendering]
            [foundation.app.message :as msg]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [foundation.app.data.component :as c]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(defmethod effect [:init #{[:dashboard]} :vals]
  [message input-queue input]
  (go (let [accounts (<! (m/fetch models/accounts))
            account (first accounts)]
        (>! input-queue
            {msg/type :load msg/path [:dashboard]
             :model account
             :account account
             :stats-model models/account-stats
             :granularity "HOUR"
             :metrics (get (models/metrics models/accounts) "Impressions")})
        (>! input-queue
            {msg/type :load msg/path [:datagrid]
             :account account
             :collection accounts
             :resource models/accounts}))))

(defmethod effect [:load #{[:dashboard] [:datagrid]} :single-val]
  [message input-queue input]
  (go (let [stats
            (<! (m/fetch (:stats-model input)
                         :params (:model input)
                         :query-params
                         (select-keys input
                                      [:start-time :end-time :granularity])))
            total-stats
            (<! (m/fetch (:stats-model input)
                         :params (:model input)
                         :query-params
                         (assoc (select-keys input [:start-time :end-time])
                           :granularity "TOTAL")))]
        (>! input-queue
            {msg/type :stats
             msg/path [:dashboard]
             :stats total-stats})
        (>! input-queue
            {msg/type :stats
             msg/path [:chart]
             :stats stats}))))

;; (defmethod effect [:init
;;                    #{[:dashboard]}
;;                    #{[:datagrid]} :vals]
;;   [message input-queue input]
;;   (go (let [accounts (<! (m/fetch models/accounts))
;;             account (first accounts)]
;;         (>! input-queue
;;             {msg/type :load msg/path [:datagrid] :collection accounts})
;;         (>! input-queue
;;             {msg/type :load msg/path [:dashboard] :model account}))))
