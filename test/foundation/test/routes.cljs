(ns foundation.test.routes
  (:require [foundation.app.router :as router :include-macros true
             :refer [defroutes GET POST PUT DELETE ANY context]]
            [clojure.set :as set]
            [clojure.string :as str]))

(defmulti render (fn [req]
                   (println req)
                   (->> (replace (set/map-invert (:route-params req))
                                 (str/split (:uri req) #"/"))
                        (str/join "/")
                        (vector (:method req)))))

(defmethod render :default [req] (println req))

(defroutes accounts
  (GET "/accounts" [] render)
  (GET "/accounts/:id" [id] render))

(defroutes campaigns
  (context "/accounts/:account-id" [account-id]
    (GET "/campaigns" [] render)
    (GET "/campaigns/:id" [id] render)
    (POST "/campaigns/:id" [id] render)
    (PUT "/campaigns/:id" [id] render)
    (DELETE "/campaigns/:id" [id] render)))

(defroutes line-items
  (context "/accounts/:account-id" [account-id]
    (GET "/line_items" [] render)
    (GET "/line_items/:id" [id] render)
    (POST "/line_items/:id" [id] render)
    (PUT "/line_items/:id" [id] render)
    (DELETE "/line_items/:id" [id] render)))

(defroutes promoted-accounts
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_accounts" [] render)
    (GET "/promoted_accounts/:id" [id] render)
    (POST "/promoted_accounts/:id" [id] render)
    (PUT "/promoted_accounts/:id" [id] render)
    (DELETE "/promoted_accounts/:id" [id] render)))

(defroutes promoted-tweets
  (context "/accounts/:account-id" [account-id]
    (GET "/promoted_tweets" [] render)
    (GET "/promoted_tweets/:id" [id] render)
    (POST "/promoted_tweets/:id" [id] render)
    (PUT "/promoted_tweets/:id" [id] render)
    (DELETE "/promoted_tweets/:id" [id] render)))

(defroutes promoted-products
  (context "/accounts/:account-id" [account-id]
    (GET "/promotable_users" [] render)
    (GET "/scoped_timeline" [] render))
  (GET "/statuses/scoped_timeline" [] render))

(defroutes funding-instruments
  (context "/accounts/:account-id" [account-id]
    (GET "/funding_instruments/:id" [id]))
  (GET "/bidding_rules" []))

(defroutes targeting-criteria
  (context "/accounts/:account-id" [account-id]
    (GET "/targeting_criteria" [] render)
    (GET "/targeting_criteria/:id" [id] render)
    (POST "/targeting_criteria/:id" [id] render)
    (PUT "/targeting_criteria/:id" [id] render)
    (DELETE "/targeting_criteria/:id" [id] render)

    (GET "/targeting_criteria/tailored_audiences" [] render)

    (GET "/reach_estimate" [id] render)
    (GET "/brands_tv" [id] render)
    (GET "/targeting_suggestions" [id] render))
  
  (GET "/targeting_criteria/locations" [] render)
  (GET "/targeting_criteria/interests" [] render)
  (GET "/targeting_criteria/platforms" [] render)
  (GET "/targeting_criteria/devices" [] render)
  (GET "/targeting_criteria/tv_shows" [] render)
  (GET "/targeting_criteria/tv_markets" [] render)
  (GET "/targeting_criteria/platform_versions" [] render))

(defroutes analytics
  (GET "/stats/accounts/:id" [id] render)
  (context "/stats/accounts/:account-id" [id]
    (GET "/campaigns" [] render)
    (GET "/campaigns/:id" [id] render)
    
    (GET "/line_items" [] render)
    (GET "/line_items/:id" [id] render)
    
    (GET "/promoted_accounts" [] render)
    (GET "/promoted_accounts/:id" [id] render)
    
    (GET "/promoted_tweets" [] render)
    (GET "/promoted_tweets/:id" [id] render)
    
    (GET "/funding_instruments" [] render)
    (GET "/funding_instruments/:id" [id] render)))

(defroutes app
  (GET "/" [:as req] render)
  accounts
  campaigns
  line-items
  promoted-accounts
  promoted-tweets
  funding-instruments
  targeting-criteria
  promoted-products
  analytics)
