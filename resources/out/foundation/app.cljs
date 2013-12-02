(ns foundation.app
  (:require [clojure.browser.repl]
            [foundation.app.xhr :as xhr]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.core.logic :as l]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u]
            [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [clojure.zip :as zip])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [run* run fresh == != conde]]
                   [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :as am]))

(defn input-queue
  []
  (go-loop []))

(enable-console-print!)

(defn coll-zip
  [root]
  (zip/zipper coll?
              seq
              (fn [node children]
                (with-meta (into (empty node) children) (meta node)))
              root))

(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next (coll-zip root))))

(defn nodes
  [root]
  (for [loc (locs root)] (zip/node loc)))

(def api "http://192.241.130.213:8080/user/15/ads-api")

(def accounts
  {:url "/accounts/:id"})

(def campaigns
  {:url "/accounts/:account-id/campaigns/:id"})

(defn subs-uri
  ([model] (subs-uri model {}))
  ([{:keys [url]} kvs]
     (let [kvs (-> (map (comp re-pattern str)
                        (re-seq #":[A-Za-z][\w-_]+" url))
                   (zipmap (repeat ""))
                   (merge kvs))]
       (-> (reduce #(apply str/replace %1 %2) (str api url) kvs)
           (str/replace #"/$" "")
           (str/replace #"//" "/")))))

(defn ^:export -main
  []
  (go (let [account (first (<! (xhr/GET (str api (:url accounts)))))
            cs (<! (xhr/GET (subs-uri campaigns
                                      {:account-id (:id account)})))]
        cs)))
