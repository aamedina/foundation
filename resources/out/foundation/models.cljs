(ns foundation.models
  (:require [foundation.app.data.dependency :as d :refer [graph depend]]
            [foundation.app.models]
            [goog.date :as date]
            [clojure.string :as str]
            [cljs-time.format :as fmt]
            [cljs-time.core :as time]
            [cljs-time.coerce :as coerce])
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

(defmulti columns
  (fn [model] (when-let [n (:name model)] (keyword (name n)))))

(defmethod columns :default
  [model]
  [])

(defmethod columns :accounts
  [model]
  [{:name :select-all
    :content :select}
   {:name "ID"
    :key :id
    :content :account-toggle}
   {:name "Account"
    :key :name}
   {:name "Created At"
    :key :created-at}
   {:name "Timezone"
    :key :timezone}
   {:name "Currency"
    :key :currency}])

(defmethod columns :campaigns
  [model]
  [{:name :select-all
    :content :select}
   {:name "ID"
    :key :id
    :content :toggle}
   {:name "Campaign"
    :editor :text
    :key :name
    :content :default}
   {:key :paused
    :name "Status"
    :content :pause-button}
   {:key :funding-instrument-id
    :name "Funding Instrument"
    :content :funding-instrument}
   {:key :start-time
    :name "Start Time"
    :editor :date
    :content :date-picker}
   {:key :end-time
    :name "End Time"
    :editor :date
    :content :date-picker}
   {:key :total-budget-amount-local-micro
    :name "Total Budget"
    :content :total-budget
    :editor :text}
   {:name "Total Spent"
    :content :total-budget-spent}
   {:key :daily-budget-amount-local-micro
    :name "Daily Budget"
    :content :daily-budget
    :editor :text}
   {:name "Daily Spent"
    :content :daily-budget-spent}])

(defmethod columns :line-items
  [model & args]
  [{:key :select
    :name :select-all
    :content :select}
   {:key :id
    :name "ID"
    :content :toggle}
   {:name "Targeting"
    :content :targeting-toggle}
   {:key :placement-type
    :name "Line Item Type"}
   {:name "Status"
    :key :paused
    :content :pause-button}
   {:key :suggested-low-cpe-bid-local-micro
    :name "Low Bid"
    :content :low-bid}
   {:key :suggested-high-cpe-bid-local-micro
    :name "High Bid"
    :content :high-bid}
   {:key :bid-amount-local-micro
    :name "Bid"
    :content :bid
    :editor :text}
   {:key :goal-settings
    :name "Goal"}
   {:name "Spent"
    :content :currency}
   {:name "Impressions"
    :content :number}
   {:name "Engagements"
    :content :number}
   {:name "Clicks"
    :content :number}
   {:name "Retweets"
    :content :number}
   {:name "Replies"
    :content :number}
   {:name "eCPE"
    :content :currency}
   {:name "eCPM"
    :content :currency}])

(defmethod columns :promoted-tweets
  [model & args]
  [{:key :select
    :name :select-all
    :content :select}
   {:key :id
    :name "ID"
    :content :toggle}
   {:name "Tweet"
    :key :tweet-id
    :content :default}
   {:name "Spent"
    :content :number}
   {:name "Impressions"
    :content :number}
   {:name "Engagements"
    :content :number}
   {:name "Clicks"
    :content :number}
   {:name "Retweets"
    :content :number}
   {:name "Replies"
    :content :number}
   {:name "eCPE"
    :content :currency}
   {:name "eCPM"
    :content :currency}])

(defmethod columns :promoted-accounts
  [model & args]
  [{:name :select-all
    :content :select}
   {:key :id
    :name "ID"
    :content :toggle}
   {:name "Tweet"
    :key :tweet-id
    :content :default}
   {:name "Spent"
    :content :currency}
   {:name "Impressions"
    :content :number}
   {:name "Engagements"
    :content :number}
   {:name "Clicks"
    :content :number}
   {:name "Retweets"
    :content :number}
   {:name "Replies"
    :content :number}
   {:name "eCPE"
    :content :currency}
   {:name "eCPM"
    :content :currency}])

(def ^:dynamic *account* nil)

(def timezone-map
  {"America/Los_Angeles" 420
   "America/New_York" 240
   "Australia/Sydney" -600
   "Asia/Tokyo" -540})

(defn dst-f
  [begin end]
  (fn [date-like]
    (and (>= date-like (date/fromIsoString begin))
         (< date-like (date/fromIsoString end)))))

(def dst-map
  (hash-map 2010 (dst-f "2011-03-14T02:00:00" "2010-11-07T02:00:00")
            2011 (dst-f "2011-03-13T02:00:00" "2011-11-06T02:00:00")
            2012 (dst-f "2012-03-11T02:00:00" "2012-11-04T02:00:00")
            2013 (dst-f "2013-03-10T02:00:00" "2013-11-03T02:00:00")
            2014 (dst-f "2014-03-09T02:00:00" "2014-11-02T02:00:00")
            2015 (dst-f "2015-03-08T02:00:00" "2015-11-01T02:00:00")))

(def au-dst-map
  (hash-map 2012 (dst-f "2012-04-01T02:00:00" "2012-10-07T02:00:00")
            2013 (dst-f "2013-04-07T02:00:00" "2013-10-06T02:00:00")
            2014 (dst-f "2014-04-06T02:00:00" "2014-10-05T02:00:00")))

(def dst?
  (memoize
   (fn [d country]
     (let [dl d]
       (condp = country
         "America" ((get dst-map (.getYear dl)) dl)
         "Australia" ((get au-dst-map (.getYear dl)) dl)
         true)))))

(defn at-midnight
  [date]
  (apply time/date-midnight ((juxt time/year time/month time/day) date)))

(defmulti start-time
  (fn [model] (when-let [n (:name model)] (keyword (name n)))))

(defmethod start-time :default
  [model]
  (let [offset (get timezone-map (:time-zone *account*))
        country (first (str/split (:timezone *account*) #"/"))
        tz (if (dst? (time/ago (time/days 28)) country)
             offset
             (+ 60 offset))]
    (-> (time/from-now (time/minutes offset))
        (time/minus (time/days 28))
        (at-midnight)
        (#(fmt/unparse (fmt/formatters :date-time-no-ms) %)))))

(defmethod start-time :campaigns
  [model]
  (fmt/unparse (fmt/formatters :date-time-no-ms)
               (coerce/from-string (:start-time model))))

(defmulti end-time
  (fn [model] (when-let [n (:name model)] (keyword (name n)))))

(defmethod end-time :default
  [model]
  (if-let [start-time (date/fromIsoString (start-time model))]
    (fmt/unparse (fmt/formatters :date-time-no-ms)
                 (time/plus start-time (time/days 28)))
    (fmt/unparse (fmt/formatters :date-time-no-ms)
                 (time/today-at-midnight))))

(defmulti metrics
  (fn [model] (when-let [n (:name model)] (keyword (name n)))))

(defmethod metrics :default
  [model]
  {"Impressions" ["promoted_tweet_search_impressions"
                  "promoted_account_impressions"]
   "Engagements" ["promoted_tweet_search_engagements"
                  "promoted_tweet_timeline_engagements"]
   "Clicks" ["promoted_tweet_search_clicks"
             "promoted_tweet_timeline_clicks"]
   "Retweets" ["promoted_tweet_search_retweets"
               "promoted_tweet_timeline_retweets"]
   "Replies" ["promoted_tweet_search_replies"
              "promoted_tweet_timeline_replies"]
   "Follows" ["promoted_tweet_search_follows"
              "promoted_tweet_timeline_follows"]})

(defmethod metrics :promoted-tweets
  [model]
  (merge {"Impressions" ["promoted_tweet_search_impressions"]}
         (metrics :default)))

(defmethod metrics :promoted-accounts
  [model]
  (merge {"Impressions" ["promoted_tweet_search_impressions"]}
         (metrics :default)))
