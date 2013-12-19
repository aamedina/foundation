(ns foundation.test.routes
  (:require [foundation.app.router :as router :include-macros true
             :refer [defroutes GET POST PUT DELETE ANY context]]
            [foundation.app.router :refer [route]]
            [foudnation.app.xhr :as xhr]
            [foundation.app.models :as m]
            [foundation.test.models :as models]
            [cljs.core.async :refer [<! >! put! take! chan]]
            [clojure.set :as set]
            [clojure.string :as str])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(declare simple-get)

(defroutes accounts
  (GET "/accounts" [] route)
  (GET "/accounts/:id" [id] route))

(defroutes campaigns
  (context "/accounts/:account-id" [account-id]
    (GET "/campaigns" [] route)
    (GET "/campaigns/:id" [id] route)
    (POST "/campaigns/:id" [id] route)
    (PUT "/campaigns/:id" [id] route)
    (DELETE "/campaigns/:id" [id] route)))

(defroutes line-items
  (context "/accounts/:account-id" [account-id]
    (GET "/line_items" [] route)
    (GET "/line_items/:id" [id] route)
    (POST "/line_items/:id" [id] route)
    (PUT "/line_items/:id" [id] route)
    (DELETE "/line_items/:id" [id] route)))

(defroutes promoted-accounts
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_accounts" [] route)
    (GET "/promoted_accounts/:id" [id] route)
    (POST "/promoted_accounts/:id" [id] route)
    (PUT "/promoted_accounts/:id" [id] route)
    (DELETE "/promoted_accounts/:id" [id] route)))

(defroutes promoted-tweets
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_tweets" [] route)
    (GET "/promoted_tweets/:id" [id] route)
    (POST "/promoted_tweets/:id" [id] route)
    (PUT "/promoted_tweets/:id" [id] route)
    (DELETE "/promoted_tweets/:id" [id] route)))

(defroutes promoted-products
  (context "/accounts/:account-id" [account-id]
    (GET "/promotable_users" [] route)
    (GET "/scoped_timeline" [] route))
  (GET "/statuses/scoped_timeline" [] simple-get))

(defroutes funding-instruments
  (context "/accounts/:account-id" [account-id]
    (GET "/funding_instruments/:id" [id] route))
  (GET "/bidding_rules" [] simple-get))

(defroutes targeting-criteria
  (context "/accounts/:account-id" [account-id]
    (GET "/targeting_criteria" [] route)
    (GET "/targeting_criteria/:id" [id] route)
    (POST "/targeting_criteria/:id" [id] route)
    (PUT "/targeting_criteria/:id" [id] route)
    (DELETE "/targeting_criteria/:id" [id] route)

    (GET "/targeting_criteria/tailored_audiences" [] simple-get)

    (GET "/reach_estimate" [id] simple-get)
    (GET "/brands_tv" [id] simple-get)
    (GET "/targeting_suggestions" [id] simple-get))
  
  (GET "/targeting_criteria/locations" [] simple-get)
  (GET "/targeting_criteria/interests" [] simple-get)
  (GET "/targeting_criteria/platforms" [] simple-get)
  (GET "/targeting_criteria/devices" [] simple-get)
  (GET "/targeting_criteria/tv_shows" [] simple-get)
  (GET "/targeting_criteria/tv_markets" [] simple-get)
  (GET "/targeting_criteria/platform_versions" [] simple-get))

(defroutes analytics
  (GET "/stats/accounts/:id" [id] route)
  (context "/stats/accounts/:account-id" [id]
    (GET "/campaigns" [] route)
    (GET "/campaigns/:id" [id] route)
    
    (GET "/line_items" [] route)
    (GET "/line_items/:id" [id] route)
    
    (GET "/promoted_accounts" [] route)
    (GET "/promoted_accounts/:id" [id] route)
    
    (GET "/promoted_tweets" [] route)
    (GET "/promoted_tweets/:id" [id] route)
    
    (GET "/funding_instruments" [] route)
    (GET "/funding_instruments/:id" [id] route)))

(defroutes app-routes
  (GET "/" [] route)
  accounts
  campaigns
  line-items
  promoted-accounts
  promoted-tweets
  funding-instruments
  targeting-criteria
  promoted-products
  analytics)

(defn simple-get
  [req query-params]
  (let [uri (str models/ads-api (:uri req)
                 (when (seq query-params)
                   (m/query-params query-params)))]
    (go (set (<! (xhr/GET uri))))))
