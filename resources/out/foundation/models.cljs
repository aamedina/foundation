(ns foundation.models
  (:require [foundation.app.data.dependency :as d :refer [graph depend]]
            [foundation.app.models])
  (:require-macros [foundation.app :as app :refer [defmodel]]))

(def ads-api "http://192.241.130.213:8080/user/15/ads-api")

(def rest-api "http://192.241.130.213:8080/user/15/rest-api")

(defmodel accounts
  {:url "/accounts/:id"
   :api `ads-api})

(defmodel campaigns
  {:url "/accounts/:account-id/campaigns/:id"
   :api `ads-api})

(defmodel line-items
  {:url "/accounts/:account-id/line_items/:id"
   :api `ads-api})

(defmodel promoted-tweets
  {:url "/accounts/:account-id/promoted_tweets/:id"
   :api `ads-api})

(defmodel promoted-accounts
  {:url "/accounts/:account-id/promoted_accounts/:id"
   :api `ads-api})

(defmodel targeting-criteria
  {:url "/accounts/:account-id/targeting_criteria/:id"
   :api `ads-api})

(defmodel account-stats
  {:url "/stats/accounts/:id"
   :api `ads-api
   :query-params [:start-time :end-time :granularity :metrics]})

(defmodel campaign-stats
  {:url "/stats/accounts/:account-id/campaigns/:id"
   :api `ads-api
   :query-params [:start-time :end-time :granularity :metrics]})

(defmodel line-item-stats
  {:url "/stats/accounts/:account-id/line_items/:id"
   :api `ads-api
   :query-params [:start-time :end-time :granularity :metrics]})

(defmodel promoted-account-stats
  {:url "/stats/accounts/:account-id/promoted_tweets/:id"
   :api `ads-api
   :query-params [:start-time :end-time :granularity :metrics]})

(defmodel promoted-tweet-stats
  {:url "/stats/accounts/:account-id/promoted_accounts/:id"
   :api `ads-api
   :query-params [:start-time :end-time :granularity :metrics]})

(def model-deps
  (-> (graph)
      (depend campaigns
              accounts)
      (depend line-items
              campaigns)
      (depend promoted-accounts
              line-items)
      (depend promoted-tweets
              line-items)
      (depend account-stats
              accounts)
      (depend campaign-stats
              campaigns)
      (depend line-item-stats
              line-items)
      (depend promoted-account-stats
              promoted-accounts)
      (depend promoted-tweet-stats
              promoted-tweets)))

(def empty-targeting-criteria
  {"UNORDERED_KEYWORD" #{}
   "FOLLOWERS_OF_USER" #{}
   "PHRASE_KEYWORD" #{}
   "EXACT_KEYWORD" #{}
   "NEGATIVE_PHRASE_KEYWORD" #{}
   "NEGATIVE_UNORDERED_KEYWORD" #{}
   "NEGATIVE_EXACT_KEYWORD" #{}
   "SIMILAR_TO_FOLLOWERS_OF_USER" #{}
   "INTEREST" #{}
   "LOCATION" #{}
   "PLATFORM" #{}
   "GENDER" #{}
   "TV_AD_TARGETING" #{}})
