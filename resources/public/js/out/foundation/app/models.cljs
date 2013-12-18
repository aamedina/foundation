(ns foundation.app.models
  (:require [goog.Uri.QueryData]
            [clojure.walk :as walk]
            [clojure.string :as str]
            [foundation.app.xhr :as xhr]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [cljs.core.async :as a :refer [<! chan put!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

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
  [{:keys [url keys re api]} model kvs]
  (let [params (select-keys model keys)
        query-string
        (->> ((fnil select-keys {}) (:query-params model) model)
             (merge kvs)
             (query-params))]
    (str api (subs-uri url params) query-string)))

(defrecord Model [url api query-params name])

(defmulti fetch (fn [model & args]
                  (when-let [n (:name model)] (keyword (name n)))))

(defmethod fetch :default
  [model & {:keys [params query-params] :or {params {} query-params {}}}]
  (xhr/GET (apply reify-url model params [query-params]) params))

(defmulti create (fn [model params] (name model)))

(defmethod create :default
  [model & {:keys [params query-params] :or {params {} query-params {}}}]
  (xhr/POST (apply reify-url model params [query-params]) params))

(defmulti update (fn [model params] (name model)))

(defmethod update :default
  [model & {:keys [params query-params] :or {params {} query-params {}}}]
  (xhr/PUT (apply reify-url model params [query-params]) params))

(defmulti delete (fn [model params] (name model)))

(defmethod delete :default
  [model params & {:keys [query-params] :or {params {} query-params {}}}]
  (xhr/DELETE (apply reify-url model params [query-params]) params))
