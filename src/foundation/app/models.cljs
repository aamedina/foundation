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

(defprotocol IModel
  (fetch [_]))

(defrecord Model [url api query-params])
