(ns foundation.app.logic
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l :refer [== s# u# !=]]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u]
            [cljs.core.logic.nominal :as nom]
            [cljs.core.logic.pldb :as db]
            [cljs.core.logic.protocols :as proto]
            [cljs.core.rrb-vector :as fv]
            [cljs.core.rrb-vector.debug :as dv]
            [clojure.set :as set]
            [foundation.app.xhr :as xhr]
            [cljs.core.async :as a :refer [<! chan put!]]
            [cljs.core.async.impl.channels :as channels])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [run* fresh db-rel with-db matche conde]]
                   [cljs.core.logic.nominal.macros :as nom]
                   [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :refer [future]]))

(defn ^boolean chan? [x] (instance? channels/ManyToManyChannel x))

(def accounts
  (future (xhr/GET "http://192.241.130.213:8080/user/15/ads-api/accounts")))

(def account-relation
  {:name js/String
   :deleted js/Boolean
   :currency js/String
   :timezone-switch-at [js/String :> js/Date]
   :created-at [js/String :> js/Date]
   :timezone js/String
   :id js/String})

(db-rel account name id)
(db-rel campaign name id account-id)
(db-rel line-item name id campaign-id account-id)

(def facts db/empty-db)

(run* [q]
  (fresh [x]
    (l/featurec x {:name q})
    (== x {:name "Adrian"})))

(defprotocol IRecur
  (-recur [coll]))

(defn union
  [s1 s2])

(defn intersection
  [s1 s2])

(defn difference
  [s1 s2])

(defn project
  [xrel ks])

(defn rename
  [xrel kmap])

(defn index
  [xrel ks])

(defn join
  [xrel yrel])

(defn ^boolean subset?
  [s1 s2])

(defn ^boolean superset?
  [s1 s2])

(extend-type PersistentHashSet
  )

(defn geto
  [key env value]
  (matche [env]
    [ [ [ [key :- value] . _] ] ]
    [ [ [_ . ?rest] ] (geto key ?rest value) ]))

(defn typedo
  [context expr result-type]
  (conde [(geto expr context result-type)]
         [(matche [context expr result-type]
            [[_ [:apply ?f ?arg] _]
             (fresh [arg-type]
               (!= ?f ?arg)
               (typedo context ?arg arg-type)
               (typedo context ?f [arg-type :> result-type]))])]))


