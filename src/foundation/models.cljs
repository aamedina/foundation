(ns foundation.app.models
  (:require [goog.Uri.QueryData]
            [clojure.walk :as walk]
            [clojure.string :as str]
            [foundation.app.xhr :as xhr]
            [foundation.app.message :as msg]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [cljs.core.async :refer [<! chan put!]])
  (:require-macros [foundation.app :as app :refer [defmodel]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(defn subs-uri
  "Given a URI from the resource spec, replace the matched patterns with the
   proper param val whose key matches the match in uri."
  [uri & params]
  (let [params (if-not (map? (first params))
                 (apply hash-map params)
                 (first params))
        str (loop [matches (re-seq #":([\w-_]+)" uri) result uri]
              (if (empty? matches) result
                  (let [[token kw] (first matches) value
                        (get params (keyword kw))]
                    (recur (rest matches)
                           (clojure.string/replace result token
                                                   (str value))))))]
    (clojure.string/replace str #"/$" "")))

(defn query-params
  [kvs]
  (when (seq kvs)
    (->> (clojure.walk/stringify-keys kvs)
         (reduce (fn [m [k v]]
                   (assoc m (clojure.string/replace k #"-" "_") v)) {})
         ((juxt keys vals))
         (map clj->js)
         (apply goog.Uri.QueryData/createFromKeysValues)
         (str "?"))))

(defn reify-url
  [{:keys [url keys re api]}]
  (fn [model & kvs]
    (let [params (select-keys model keys)
          query-string (->> (select-keys model (:query-params model))
                            (merge (apply hash-map kvs))
                            (query-params))]
      (str api (subs-uri url params) query-string))))

(def ads-api "http://192.241.130.213:8080/user/15/ads-api")

(def rest-api "http://192.241.130.213:8080/user/15/rest-api")

(defmodel account [name id currency timezone]
  {:url "/accounts/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel campaign [name id currency timezone]
  {:url "/accounts/:account-id/campaigns/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel line-item [name id currency timezone]
  {:url "/accounts/:account-id/line_items/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel promoted-tweet [name id currency timezone]
  {:url "/accounts/:account-id/promoted_tweets/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel promoted-account [name id currency timezone]
  {:url "/accounts/:account-id/promoted_accounts/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel targeting-criteria [name id currency timezone]
  {:url "/accounts/:account-id/targeting_criteria/:id"
   :api "http://192.241.130.213:8080/user/15/ads-api"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmodel account-stats [start-time end-time granularity metrics]
  {:api "http://192.241.130.213:8080/user/15/ads-api"
   :url "/stats/accounts/:id"
   :query-params [:start-time :end-time :granularity :metrics]})

(defmodel campaign-stats [start-time end-time granularity metrics]
  {:api "http://192.241.130.213:8080/user/15/ads-api"
   :url "/stats/accounts/:account-id/campaigns/:id"
   :query-params [:start-time :end-time :granularity :metrics]
   :parent :campaigns})

(defmodel line-item-stats [start-time end-time granularity metrics]
  {:api "http://192.241.130.213:8080/user/15/ads-api"
   :url "/stats/accounts/:account-id/line_items/:id"
   :query-params [:start-time :end-time :granularity :metrics]
   :parent :line-items})

(defmodel promoted-account-stats [start-time end-time granularity metrics]
  {:api "http://192.241.130.213:8080/user/15/ads-api"
   :url "/stats/accounts/:account-id/promoted_tweets/:id"
   :query-params [:start-time :end-time :granularity :metrics]
   :parent :promoted-tweets})

(defmodel promoted-tweet-stats [start-time end-time granularity metrics]
  {:api "http://192.241.130.213:8080/user/15/ads-api"
   :url "/stats/accounts/:account-id/promoted_accounts/:id"
   :query-params [:start-time :end-time :granularity :metrics]
   :parent :promoted-accounts})

(def model-dependencies
  (-> (graph)
      (depend :campaigns :accounts)
      (depend :line-items :campaigns)
      (depend :promoted-accounts :line-items)
      (depend :promoted-tweets :line-items)))

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
