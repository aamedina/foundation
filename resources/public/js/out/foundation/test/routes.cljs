(ns foundation.test.routes
  (:require [foundation.app.router :as router :include-macros true
             :refer [defroutes GET POST PUT DELETE ANY context]]))

(defroutes accounts
  (GET "/accounts" [] "")
  (GET "/accounts/:id" [id] id))

(defroutes campaigns
  (context "/accounts/:account-id" [account-id]
    (GET "/campaigns" [] "")
    (GET "/campaigns/:id" [id] id)
    (POST "/campaigns/:id" [id] id)
    (PUT "/campaigns/:id" [id] id)
    (DELETE "/campaigns/:id" [id] id)))

(defroutes line-items
  (context "/accounts/:account-id" [account-id]
    (GET "/line_items?campaign_ids=:campaign-id" [campaign-id])
    (GET "/line_items/:id?campaign_ids=:campaign-id" [id] id)
    (POST "/line_items/:id?campaign_ids=:campaign-id" [id] id)
    (PUT "/line_items/:id?campaign_ids=:campaign-id" [id] id)
    (DELETE "/line_Items/:id?campaign_ids=:campaign-id" [id] id)))

(defroutes promoted-accounts
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_accounts" [] "")
    (GET "/promoted_accounts/:id" [id] id)
    (POST "/promoted_accounts/:id" [id] id)
    (PUT "/promoted_accounts/:id" [id] id)
    (DELETE "/promoted_accounts/:id" [id] id)))

(defroutes promoted-tweets
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_tweets" [] "")
    (GET "/promoted_tweets/:id" [id] id)
    (POST "/promoted_tweets/:id" [id] id)
    (PUT "/promoted_tweets/:id" [id] id)
    (DELETE "/promoted_tweets/:id" [id] id)))

(defroutes promoted-products
  (context "/accounts/:account-id" [account-id]
    (GET "/promotable_users" [])
    (GET "/scoped_timeline" []))
  (GET "/statuses/scoped_timeline" []))

(defroutes funding-instruments
  (context "/accounts/:account-id" [account-id]
    (GET "/funding_instruments/:id" [id]))
  (GET "/bidding_rules" []))

(defroutes targeting-criteria
  (context "/accounts/:account-id" [account-id]
    (GET "/targeting_criteria" [] "")
    (GET "/targeting_criteria/:id" [id] id)
    (POST "/targeting_criteria/:id" [id] id)
    (PUT "/targeting_criteria/:id" [id] id)
    (DELETE "/targeting_criteria/:id" [id] id)

    (GET "/targeting_criteria/tailored_audiences" [])

    (GET "/reach_estimate" [id])
    (GET "/brands_tv" [id])
    (GET "/targeting_suggestions" [id]))
  
  (GET "/targeting_criteria/locations" [])
  (GET "/targeting_criteria/interests" [])
  (GET "/targeting_criteria/platforms" [])
  (GET "/targeting_criteria/devices" [])
  (GET "/targeting_criteria/tv_shows" [])
  (GET "/targeting_criteria/tv_markets" [])
  (GET "/targeting_criteria/platform_versions" []))

(defroutes analytics
  (GET "/stats/accounts/:id" [id])
  (context "/stats/accounts/:account-id" [id]
    (GET "/campaigns" [])
    (GET "/campaigns/:id" [id])
    
    (GET "/line_items" [])
    (GET "/line_items/:id" [id])
    
    (GET "/promoted_accounts" [])
    (GET "/promoted_accounts/:id" [id])
    
    (GET "/promoted_tweets" [])
    (GET "/promoted_tweets/:id" [id])
    
    (GET "/funding_instruments" [])
    (GET "/funding_instruments/:id" [id])))

(defroutes app
  (GET "/" [] "hello")
  accounts
  campaigns
  line-items
  promoted-accounts
  promoted-tweets
  funding-instruments
  targeting-criteria
  promoted-products
  analytics)
