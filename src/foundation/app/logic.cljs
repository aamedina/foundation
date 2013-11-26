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
            [foundation.app.data.combinatorics :as math]
            [clojure.set :as set]
            [foundation.app.xhr :as xhr]
            [cljs.core.async :as a :refer [<! chan put!]]
            [cljs.core.async.impl.channels :as channels])
  (:require-macros [cljs.core.logic.macros :as l
                    :refer [run* fresh db-rel with-db matche conde]]
                   [cljs.core.logic.nominal.macros :as nom]
                   [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :refer [future defun]]))

(defn ^boolean chan? [x] (instance? channels/ManyToManyChannel x))

(def accounts
  (future (xhr/GET "http://192.241.130.213:8080/user/15/ads-api/accounts")))

(def campaigns
  (future
    (xhr/GET
     "http://192.241.130.213:8080/user/15/ads-api/accounts/6cq9e/campaigns")))

(def account-relation
  {:name js/String
   :currency js/String
   :timezone-switch-at [js/String :> js/Date]
   :created-at [js/String :> js/Date]
   :timezone js/String
   :id js/String})

(def campaign-relation
  {:name js/String
   :account-id js/String
   :start-time [js/String :> js/Date]
   :end-time [js/String :> js/Date]
   :total-budget-amount-local-micro js/Number
   :daily-budget-amount-local-micro js/Number
   :funding-instrument-id js/String
   :id js/String})

(comment  
  (let [c (first @campaigns)]
    (run* [q]
      (== q c))))

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
  proto/IWalkTerm
  (walk-term [^not-native v f]
    (into #{} (keys (proto/walk-term (.-hash_map v) f))))
  proto/IUnifyTerms
  (unify-terms [^not-native u ^not-native v ^not-native s]
    (println u v s)
    (when (set? v)
      (let [^not-native u (keys (.-hash_map u))
            ^not-native v (keys (.-hash_map v))]
        (reduce (fn [memo v] (proto/mplus memo (l/-inc v)))
                (for [p (math/permutations u)]
                  (l/unify s p v))))))
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

(comment
  (run* [q]
    (fresh [a b x y z]
      (== a #{:cat x y})
      (== b #{:dog :bird z})
      (== q (hash-set a)))))

(defn reifier-for
  [tag x]
  (fn [c v r a]
    (let [x (l/walk* r (l/walk* a x))]
      (when (symbol? x)
        (println `(~tag ~x))
        `(~tag ~x)))))

(defn =nom? [x] (l/predc x nom/nom? (reifier-for 'nom x)))
(defn =symbol? [x] (l/predc x symbol? (reifier-for 'sym x)))
(defn =fn [x e] `(~'fn ~(nom/tie x e)))
(defn =apply [e1 e2] `(~e1 ~e2))
(defn =if [c a b] `(~'if ~c ~a ~b))
(defn =fn? [x e out] (== out (=fn x e)))
(defn =applied? [e1 e2 out] (l/all (== out (=apply e1 e2)) (!= e1 'fn)))
(defn =if? [c a b out] (== out (=if c a b)))
(defn =infers [t1 t2] [t1 :> t2])
(defn =infers? [t1 t2 out] (== out (=infers t1 t2)))
(defn env [names bindings] ['env names bindings])
(defn =env? [names bindings out] (== out (env names bindings)))
(def empty-env (env '() '()))
(def =member? l/membero)
(def =cons l/conso)

(defn =env-plus
  [x v ein eout]
  (fresh [names-in bindings-in names-out bindings-out]
    (=env? names-in bindings-in ein)
    (=env? names-out bindings-out eout)
    (nom/hash x names-in)
    (=cons x names-in names-out)
    (=cons [x v] bindings-in bindings-out)))

(defn =in-env?
  [x v e]
  (fresh [name bindings]
    (=env? names bindings e)
    (=member? [x v] bindings)))

(comment
  (run* [q]
    (=nom? q))
  (run* [q]
    (=symbol? q))

  (run* [q]
    (nom/fresh [a b]
      (== (=fn a a)
          (=fn b b))))
  )


(defn =subst
  [e new a out]
  (conde [(=nom? e) (== e a) (== new out)]
         [(=nom? e) (!= e a) (== e out)]
         [(fresh [e1 e2 o1 o2]
            (=applied? e1 e2 e)
            (=applied? o1 o2 out)
            (=subst e1 new a o1)
            (=subst e2 new a o2))]
         [(fresh [e0 e0]
            (nom/fresh [c]
              (=fn? c e0 e)
              (=fn? c o0 out)
              (nom/hash c a)
              (nom/hash c new)
              (=subst s0 new a o0)))]))

(comment
  (run* [q]
    (nom/fresh [a b]
      (nom/hash a (=fn b a))))
  
  (run* [q]
    (fresh [s]
      (nom/fresh [a b c]
        (=subst (=fn a (=apply a b)) b a s)
        (== s (=fn c (=apply c b)))))))

(defn =infer-type
  [env expr type]
  (conde [(fresh [x]
            (=nom? x) (== expr x)
            (=in-env? x type env))]
         [(fresh [e0 tx t0 env0]
            (nom/fresh [x]
              (=fn? x e0 expr)
              (=infers? tx t0 type)
              (=env-plus x tx env env0)
              (=infer-type env0 e0 t0)))]
         [(fresh [e1 e2 t1 t2]
            (=applied? e1 e2 expr)
            (=infers? t2 type t1)
            (=infer-type env e1 t1)
            (=infer-type env e2 t2))]))

(comment
  (run* [q]
    (nom/fresh [x]
      (=infer-type empty-env (=fn x x) q))))

(def =nil? l/nilo)
(def =first l/firsto)
(def =rest l/resto)

(defn =concat
  [x y out]
  (conde [(=nil? x) (== y out)]
         [(fresh [a d result]
            (=first x a)
            (=rest x a)
            (=concat d y result)
            (=cons a result out))]))


