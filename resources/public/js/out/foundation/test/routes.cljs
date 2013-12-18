(ns foundation.test.routes
  (:require [foundation.app.router :as router :include-macros true
             :refer [defroutes GET POST PUT DELETE ANY context]]
            [foundation.app.router :refer [route]]
            [clojure.set :as set]
            [clojure.string :as str]))

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
  (GET "/statuses/scoped_timeline" [] route))

(defroutes funding-instruments
  (context "/accounts/:account-id" [account-id]
    (GET "/funding_instruments/:id" [id]))
  (GET "/bidding_rules" []))

(defroutes targeting-criteria
  (context "/accounts/:account-id" [account-id]
    (GET "/targeting_criteria" [] route)
    (GET "/targeting_criteria/:id" [id] route)
    (POST "/targeting_criteria/:id" [id] route)
    (PUT "/targeting_criteria/:id" [id] route)
    (DELETE "/targeting_criteria/:id" [id] route)

    (GET "/targeting_criteria/tailored_audiences" [] route)

    (GET "/reach_estimate" [id] route)
    (GET "/brands_tv" [id] route)
    (GET "/targeting_suggestions" [id] route))
  
  (GET "/targeting_criteria/locations" [] route)
  (GET "/targeting_criteria/interests" [] route)
  (GET "/targeting_criteria/platforms" [] route)
  (GET "/targeting_criteria/devices" [] route)
  (GET "/targeting_criteria/tv_shows" [] route)
  (GET "/targeting_criteria/tv_markets" [] route)
  (GET "/targeting_criteria/platform_versions" [] route))

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

(defroutes app
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
