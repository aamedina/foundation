(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [clojure.core :as core]
            [hickory.core :refer :all]
            [hickory.zip :refer :all]
            [net.cgrand.enlive-html :as en]
            [hickory.select :as s]
            [garden.core :as g :refer [css]]
            [hiccup.core :refer [html h]]
            [hiccup.def :refer [defelem defhtml wrap-attrs]]
            [hiccup.util :refer [escape-html as-str to-uri url url-encode]]
            [clout.core :as clout]
            [inflections.core :as inflect]
            [clojure.xml :as xml]
            [clojure.pprint :refer [pprint]]
            [clojure.core.match :refer [match]]
            [clojure.repl :refer [doc]]
            [clojure.core.async :as a
             :refer [<! >! put! take! chan go go-loop sliding-buffer]]
            [clojure.zip :as zip]))

(defmacro defmodel
  [name params {:keys [url api] :as m} & body]
  (let [compiled-route (->> (update-in (clout/route-compile url) [:keys] vec)
                            ((juxt keys vals))
                            (apply zipmap))
        conditions (select-keys m [:pre :post])
        m (dissoc m :pre :post)]
    `(do (def ~((comp symbol inflect/plural str) name)
           ~(merge compiled-route (assoc m
                                    :url url
                                    :api api)))
         (defn ~name
           ([{:keys [~@params] :as m#}] ~conditions
              (when (map? m#)
                (with-meta m# {:model ~(keyword name)})))
           ([~@params] ~conditions
              (with-meta (zipmap [~@(map keyword params)] ~params)
                {:model ~(keyword name)}))))))

;; (defmulti column (juxt (comp :model meta) first))

;; (defmethod column [:account :name]
;;   [[attr v]]
;;   (html [:th {:id attr} "Name"]))

;; (defmethod column [:account :select-all]
;;   [[attr v]]
;;   (html [:th {:id attr} "Select All"]))

;; (defmethod column '[_ :id]
;;   [[attr v]]
;;   (html [:th {:id attr} "ID"]))

;; (defmethod column [:account :currency]
;;   [[attr v]]
;;   (html [:th {:id attr} "Currency"]))

;; (defmethod column [:account :timezone]
;;   [[attr v]]
;;   (html [:th {:id attr} "Timezone"]))

;; (defn attrs
;;   [model]
;;   (map #(with-meta (into [] %) (meta model)) model))

;; (def acct (apply account (repeat 4 "")))
