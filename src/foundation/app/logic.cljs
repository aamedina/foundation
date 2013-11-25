(ns foundation.app.logic
  (:refer-clojure :exclude [== set])
  (:require [cljs.core.logic :as l :refer [==]]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u]
            [cljs.core.logic.nominal :as nom]
            [cljs.core.logic.pldb :as db]
            [cljs.core.logic.protocols :as proto]
            [foundation.app.xhr :as xhr]
            [cljs.core.async :as a :refer [<! chan put!]]
            [cljs.core.async.impl.channels :as channels])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [run* fresh db-rel with-db]]
                   [cljs.core.logic.nominal.macros :as nom]
                   [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :refer [future]]))

(defn ^boolean chan? [x] (instance? channels/ManyToManyChannel x))

(def accounts
  (future (xhr/GET "http://192.241.130.213:8080/user/15/ads-api/accounts")))

(db-rel account name id)
(db-rel campaign name id account-id)
(db-rel line-item name id campaign-id account-id)

(def facts db/empty-db)

(run* [q]
  (fresh [x]
    (l/featurec x {:name q})
    (== x {:name "Adrian"})))

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

(deftype Set [left right]
  IPrintWithWriter
  (-pr-writer [coll writer opts]
    (-pr-writer right writer opts))
  Object
  (toString [coll] (str right)))

(defn set
  [coll]
  (let [^not-native in (seq coll)]
    (cond (nil? in) (Set. [] #{})
          (instance? IndexedSeq in)
          (let [arr (.-arr in)
                ret (areduce arr i ^not-native res (-as-transient #{})
                             (-conj! res (aget arr i)))]
            (-persistent! ^not-native ret)))))
