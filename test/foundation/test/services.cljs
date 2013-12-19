(ns foundation.test.services
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [goog.date :as date]
            [foundation.app :as app :refer [effect]]
            [foundation.app.message :as msg]
            [foundation.app.models :as m]
            [foundation.test.models :as models]
            [foundation.app.router :refer [route]]
            [foundation.app.xhr :as xhr])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]))

(def init
  [{msg/type :init msg/path [:dashboard]}
   {msg/type :init msg/path [:datagrid]}])

(defmethod route [:get "/"]
  [req]
  [{msg/type :navigate msg/path [:router] :to-path "/accounts"}])

(defmethod route [:get "/accounts"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/campaigns"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/campaigns/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/stats/accounts/:id"]
  [req]
  (go (let [account-id (get-in req [:params :id])]
        )))

;; (defmethod effect [:init #{[:dashboard]} :vals]
;;   [message input-queue input]
;;   (go (let [accounts
;;             (->> "http://192.241.130.213:8080/user/15/ads-api/bootstrap"
;;                  (xhr/GET)
;;                  (<!)
;;                  (sort-by :name))
;;             account (first accounts)]
;;         (>! input-queue
;;             {msg/type :load msg/path [:dashboard]
;;              :model account
;;              :account account
;;              :stats-model models/account-stats
;;              :granularity "HOUR"
;;              :metrics (get (models/metrics models/accounts) "Impressions")})
;;         (>! input-queue
;;             {msg/type :load msg/path [:datagrid]
;;              :account account
;;              :collection accounts
;;              :resource models/accounts}))))

;; (defmethod effect [:load #{[:dashboard] [:datagrid]} :single-val]
;;   [message input-queue input]
;;   (go (let [stats
;;             (<! (m/fetch (:stats-model input)
;;                          :params (:model input)
;;                          :query-params
;;                          (select-keys input
;;                                       [:start-time :end-time :granularity])))
;;             total-stats
;;             (<! (m/fetch (:stats-model input)
;;                          :params (:model input)
;;                          :query-params
;;                          (assoc (select-keys input [:start-time :end-time])
;;                            :granularity "TOTAL")))]
;;         (>! input-queue
;;             {msg/type :stats
;;              msg/path [:dashboard]
;;              :stats total-stats})
;;         (>! input-queue
;;             {msg/type :stats
;;              msg/path [:chart]
;;              :stats stats}))))

