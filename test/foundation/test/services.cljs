(ns foundation.test.services
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [goog.date :as date]
            [clojure.set :as set]
            [foundation.app :as app]
            [foundation.app.message :as msg]
            [foundation.app.models :as m]
            [foundation.test.models :as models]
            [foundation.test.routes :refer [app-routes]]
            [foundation.app.router :refer [route]]
            [foundation.app.xhr :as xhr])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]))

(defn init [resource model stats]
  [{msg/type :init msg/path [:dashboard] :model model :stats stats}
   {msg/type :init msg/path [:datagrid] :resource resource}])

(defn get-route
  [path params]
  (app-routes {:uri path :method :get :params params}))

(defn get-stats
  [path params model]
  (app-routes {:uri path
               :method :get
               :params params
               :model model
               :query-params
               {:start-time (models/start-time models/campaign-stats)
                :end-time (models/end-time models/campaign-stats)
                :granularity "HOUR"}}))

(defmethod route [:get "/"]
  [req]
  [{msg/type :navigate msg/path [:router] :to-path "/accounts"}])

(defmethod route [:get "/accounts"]
  [req]
  (go (let [models (<! (m/fetch models/accounts))
            model (first models)
            stats (<! (get-stats (str "/stats" (:uri req) "/" (:id model))
                                 model
                                 models/account-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/accounts (first models) stats))))))

(defmethod route [:get "/accounts/:id"]
  [req]
  (go (let [id (get-in req [:params :id])
            models (<! (m/fetch models/accounts))
            model (set/select #(= (:id %) id) (set models))
            stats (<! (get-stats (str "/stats" (:uri req)) {}
                                 models/account-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/accounts model stats))))))

(defmethod route [:get "/accounts/:account-id/campaigns"]
  [req]
  (go (let [account-id (get-in req [:params :account-id])
            models (<! (m/fetch models/campaigns
                                :params {:account-id account-id}))
            model (first models)
            stats (<! (get-stats (str "/stats" (:uri req) "/" (:id model))
                                 model
                                 models/campaign-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/campaigns (first models) stats))))))

(defmethod route [:get "/accounts/:account-id/campaigns/:id"]
  [req]
  (go (let [id (get-in req [:params :id])
            account-id (get-in req [:params :account-id])
            models (<! (m/fetch models/campaigns
                                :params {:account-id account-id}))
            model (set/select #(= (:id %) id) (set models))
            stats (<! (get-stats (str "/stats" (:uri req)) {}
                                 models/campaign-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/campaigns model stats))))))

(defmethod route [:get "/accounts/:account-id/line_items"]
  [req]
  (go (let [account-id (get-in req [:params :account-id])
            campaign-id (get-in req [:params :campaign_ids])
            models (<! (m/fetch models/line-items
                                :params {:account-id account-id}
                                :query-params {:campaign-ids campaign-id}))
            model (first models)
            stats (<! (get-stats (str "/stats" (:uri req) "/" (:id model))
                                 model
                                 models/line-item-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/line-items (first models) stats))))))

(defmethod route [:get "/accounts/:account-id/line_items/:id"]
  [req]
  (go (let [id (get-in req [:params :id])
            account-id (get-in req [:params :account-id])
            campaign-id (get-in req [:params :campaign_ids])
            models (<! (m/fetch models/line-items
                                :params [:account-id account-id]
                                :query-params {:campaign-ids campaign-id}))
            model (set/select #(= (:id %) id) (set models))
            stats (<! (get-stats (str "/stats" (:uri req)) {}
                                 models/line-item-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/line-items model stats))))))

(defmethod route [:get "/accounts/:account-id/promoted_accounts"]
  [req]
  (go (let [account-id (get-in req [:params :account-id])
            models (<! (m/fetch models/promoted-accounts
                                :params {:account-id account-id}))
            model (first models)
            stats (<! (get-stats (str "/stats" (:uri req) "/" (:id model))
                                 model
                                 models/promoted-account-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/promoted-accounts (first models) stats))))))

(defmethod route [:get "/accounts/:account-id/promoted_accounts/:id"]
  [req]
  (go (let [id (get-in req [:params :id])
            account-id (get-in req [:params :id])
            models (<! (m/fetch models/promoted-accounts
                                :params {:account-id account-id}))
            model (set/select #(= (:id %) id) (set models))
            stats (<! (get-stats (str "/stats" (:uri req)) {}
                                 models/promoted-account-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/promoted-accounts model stats))))))

(defmethod route [:get "/accounts/:account-id/promoted_tweets"]
  [req]
  (go (let [account-id (get-in req [:params :account-id])
            models (<! (m/fetch models/promoted-tweets
                                :params {:account-id account-id}))
            model (first models)
            stats (<! (get-stats (str "/stats" (:uri req) "/" (:id model))
                                 model
                                 models/promoted-tweet-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/promoted-tweets (first models) stats))))))

(defmethod route [:get "/accounts/:account-id/promoted_tweets/:id"]
  [req]
  (go (let [id (get-in req [:params :id])
            account-id (get-in req [:params :account-id])
            models (<! (m/fetch models/promoted-tweets
                                :params {:account-id account-id}))
            model (set/select #(= (:id %) id) (set models))
            stats (<! (get-stats (str "/stats" (:uri req)) {}
                                 models/promoted-tweet-stats))]
        (->> [{msg/type :load msg/path [:datagrid :collection]
               :collection models}]
             (into (init models/promoted-tweets model stats))))))
