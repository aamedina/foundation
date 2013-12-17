(ns test
  (:require [clojure.browser.repl]
            [foundation.app :as app]
            [foundation.app.xhr :as xhr]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [cemerick.cljs.test :as t])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :as m]
                   [cemerick.cljs.test
                    :refer [deftest run-tests is testing]]))

(enable-console-print!)

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
