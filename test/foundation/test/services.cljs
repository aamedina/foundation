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

(defn get-resource
  [resource params query-params]
  )

(defmethod route [:get "/accounts"]
  [req]
  (go (->> [{msg/type :load msg/path [:datagrid :collection]
             :resource models/accounts
             :collection (<! (m/fetch models/accounts))}]
           (into init))))

(defmethod route [:get "/accounts/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/campaigns"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/campaigns/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/line_items"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/line_items/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/promoted_accounts"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/promoted_accounts/:id"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/promoted_tweets"]
  [req]
  (->> []
       (into init)))

(defmethod route [:get "/accounts/account-id/promoted_tweets/:id"]
  [req]
  (->> []
       (into init)))

(defn stats-request
  [model params granularity start-time end-time]
  (let [metrics (models/metrics model)]
    (xhr/GET (m/reify-url model params
                          {:granularity granularity
                           :start-time start-time
                           :end-time end-time}))))

(defmethod route [:get "/stats/accounts/:id"]
  [req]
  (go (let [account-id (get-in req [:params :id])]
        (stats-request models/account-stats {:id account-id}
                       "HOUR"
                       (models/start-time models/account-stats)
                       (models/end-time models/account-stats)))))

(defmethod route [:get "/stats/accounts/:account-id/campaigns/:id"]
  [req]
  (go (stats-request models/campaign-stats
                     {:account-id (get-in req [:params :account-id])
                      :id (get-in req [:params :id])}
                     "HOUR"
                     (models/start-time models/campaign-stats)
                     (models/end-time models/campaign-stats))))

(defmethod route [:get "/stats/accounts/:account-id/line_items/:id"]
  [req]
  (go (stats-request models/line-item-stats
                     {:account-id (get-in req [:params :account-id])
                      :id (get-in req [:params :id])}
                     "HOUR"
                     (models/start-time models/line-item-stats)
                     (models/end-time models/line-item-stats))))

(defmethod route [:get "/stats/accounts/:account-id/promoted_accounts/:id"]
  [req]
  (go (stats-request models/promoted-account-stats
                     {:account-id (get-in req [:params :account-id])
                      :id (get-in req [:params :id])}
                     "HOUR"
                     (models/start-time models/promoted-account-stats)
                     (models/end-time models/promoted-account-stats))))

(defmethod route [:get "/stats/accounts/:account-id/promoted_tweets/:id"]
  [req]
  (go (stats-request models/promoted-tweet-stats
                     {:account-id (get-in req [:params :account-id])
                      :id (get-in req [:params :id])}
                     "HOUR"
                     (models/start-time models/promoted-tweet-stats)
                     (models/end-time models/promoted-tweet-stats))))

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

