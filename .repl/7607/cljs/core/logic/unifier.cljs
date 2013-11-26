(ns cljs.core.logic.unifier
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic.protocols :as proto
             :refer [queue walk-term take* -unwrap walk]]
            [cljs.core.logic :as l :refer [lcons reifyg fix-constraints
                                           empty-s -reify ==]])
  (:require-macros [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all is pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc]]))

;; ===========================================================================
;; Easy Unification

(defn- lvarq-sym? [s]
  (and (symbol? s) (= (first (str s)) \?)))

(defn- proc-lvar [lvar-expr store]
  (let [v (if-let [u (@store lvar-expr)]
            u
            (l/lvar lvar-expr false))]
    (swap! store assoc lvar-expr v)
    v))

(defn- lcons-expr? [expr]
  (and (seq? expr) (some '#{.} (set expr))))

(declare prep*)

(defn- replace-lvar [store]
  (fn [expr]
    (if (lvarq-sym? expr)
      (proc-lvar expr store)
      (if (lcons-expr? expr)
        (prep* expr store)
        expr))))

(defn- prep*
  ([expr store] (prep* expr store false false))
  ([expr store lcons?] (prep* expr store lcons? false))
  ([expr store lcons? last?]
     (let [expr (if (and last? (seq expr))
                  (first expr)
                  expr)]
       (cond
        (lvarq-sym? expr)
        (proc-lvar expr store)

        (seq? expr)
        (if (or lcons? (lcons-expr? expr))
          (let [[f & n] expr
                skip (= f '.)
                tail (prep* n store lcons? skip)]
            (if skip
              tail
              (lcons (prep* f store) tail)))
          (walk-term expr (replace-lvar store)))

        :else expr))))

(defn prep
  "Prep a quoted expression. All symbols preceded by ? will
  be replaced with logic vars."
  [expr]
  (let [lvars (atom {})
        prepped (cond
                 (lvarq-sym? expr) (proc-lvar expr lvars)

                 (lcons-expr? expr)
                 (prep* expr lvars true)

                 :else (walk-term expr (replace-lvar lvars)))]
    (if (satisfies? cljs.core/IMeta prepped)
      (with-meta prepped {::lvars (keys @lvars)})
      prepped)))

(defn queue-constraint [s c vs]
  (cond
   (vector? vs)
   (queue s (-unwrap (apply c (map #(l/lvar % false) vs))))

   (set? vs)
   (reduce (fn [s v] (queue s (-unwrap (c (l/lvar v false))))) s vs)

   (symbol? vs)
   (queue s (-unwrap (apply c (map #(l/lvar % false) (list vs)))))

   :else
   (throw
    (ex-info
     (str "Only symbol, set of symbols, or vector of symbols allowed "
          "on left hand side") {}))))

(defn queue-constraints [s [vs cs]]
  (let [cs (if-not (sequential? cs) [cs] cs)]
    (reduce (fn [s c] (queue-constraint s c vs)) s cs)))

(defn -unify* [init-s u w]
  (first
   (take*
    (fn []
      ((fresh [q]
         (== u w)
         (== q u)
         (fn [a] (fix-constraints a))
         (reifyg q))
       init-s)))))

(defn init-s [opts s]
  (let [s (reduce (fn [s [k v]] ((== k v) s)) s (:as opts))]
    (reduce queue-constraints
            (with-meta s {:reify-vars (fn [v rs] rs)})
            (:when opts))))

(defn unify*
  "Unify the terms ts."
  ([ts] (unify* {} ts))
  ([opts ts]
     (let [init-s (init-s opts empty-s)]       
       (-unify*
        (vary-meta init-s assoc :reify-vars false)
        (reduce #(-unify* init-s %1 %2) (butlast ts))
        (last ts)))))

(defn unifier*
  "Return the unifier that unifies terms ts.
  All terms in ts should prepped terms."
  ([ts] (unifier* {} ts))
  ([opts ts]
     (letfn [(-unifier* [s u w]
               (let [s (fix-constraints
                        (l/unify (with-meta s {:reify-vars false}) u w))]
                 (when s
                   (->> (:lvars opts)
                        (map (fn [sym] [sym (l/lvar sym false)]))
                        (filter (fn [[sym var]] (not= (walk s var) var)))
                        (map (fn [[sym var]] [sym (-reify s var)]))
                        (into {})))))]
       (let [init-s (init-s opts empty-s)]
         (reduce #(-unifier* init-s %1 %2) ts)))))

(defn unify
  "Unify the terms ts returning a the value that represents their
   unificaiton. Will prep the terms."
  ([ts] (unify {} ts))
  ([opts ts]
     (let [opts (if (contains? opts :as)
                  (assoc opts :as
                         (->> (:as opts)
                              (map (fn [[k v]] [(l/lvar k false) (prep v)]))
                              (into {})))
                  opts)]
       (unify* opts (map prep ts)))))

(defn unifier
  "Return the unifier for terms ts. Will prep the terms."
  ([ts] (unifier {} ts))
  ([opts ts]
     (let [opts (if (contains? opts :as)
                  (assoc opts :as
                         (->> (:as opts)
                              (map (fn [[k v]] [(l/lvar k false) (prep v)]))
                              (into {})))
                  opts)
           ts' (map prep ts)
           lvars (->> (concat ts' (map val (:as opts)))
                      (map #(-> % meta ::lvars))
                      (reduce into))]
       (unifier* (assoc opts :lvars lvars) (map prep ts)))))

