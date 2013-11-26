(ns cljs.core.logic.pldb
  (:refer-clojure :exclude [indexed? ==])
  (:require [cljs.core.logic :as l :refer [==]])
  (:require-macros [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all is pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc with-db with-dbs
                            db-rel]]))

;; ----------------------------------------

(def empty-db {})

(defn facts-for [dbs kname]
  (mapcat #(get-in % [kname ::unindexed]) dbs))

(defn facts-using-index [dbs kname index val]
  (mapcat #(get-in % [kname index val]) dbs))

;; ----------------------------------------
(defn rel-key [rel]
  (if (keyword? rel)
    rel
    (:rel-name (meta rel))))

(defn rel-indexes [rel]
  (:indexes (meta rel)))

(defn indexed? [v]
  (true? (:index (meta v))))


(defn contains-lvar? [x]
  (some l/lvar? (tree-seq coll? seq x)))

(defn ground? [s term]
  (not (contains-lvar? (l/walk* s term))))

(defn index-for-query [s q indexes]
  (let [indexable (map #(ground? s %)  q)
        triples (map vector (range) indexable indexes)]
    (first (for [[i indexable indexed] triples
                 :when (and indexable indexed)]
             i))))

;; ----------------------------------------

(defn db-fact [db rel & args]
  (let [key
        (rel-key rel)

        add-to-set
        (fn [current new]
          (conj (or current #{}) new))

        db-with-fact
        (update-in db [key ::unindexed] #(add-to-set %1 args))

        indexes-to-update
        
        (map vector (rel-indexes rel) (range) args)

        update-index-fn
        (fn [db [is-indexed index-num val]]
          (if is-indexed
            (update-in db [key index-num val] #(add-to-set %1 args))
            db))]
    (reduce update-index-fn db-with-fact indexes-to-update)))

(defn db-retraction [db rel & args]
  (let [key
        (rel-key rel)

        retract-args
        #(disj %1 args)

        db-without-fact
        (update-in db [key ::unindexed] retract-args)

        indexes-to-update ;; also a bit ugly
        (map vector (rel-indexes rel) (range) args)

        remove-from-index-fn
        (fn [db [is-indexed index-num val]]
          (if is-indexed
            (update-in db [key index-num val] retract-args)
            db))]

    (reduce remove-from-index-fn db-without-fact indexes-to-update)))

;; ----------------------------------------
(defn db-facts [base-db & facts]
  (reduce #(apply db-fact %1 %2) base-db facts))

(defn db [& facts]
  (apply db-facts empty-db facts))

(defn db-retractions [base-db & retractions]
  (reduce #(apply db-retraction %1 %2) base-db retractions))

(comment
  (db-rel orbits orbital body)
  (db-rel stars star)
  (def facts
    (db [orbits :mercury :sun]
        [orbits :venus :sun]
        [orbits :earth :sun]
        [orbits :mars :sun]
        [orbits :jupiter :sun]
        [orbits :saturn :sun]
        [orbits :uranus :sun]
        [orbits :neptune :sun]
        [stars :sun]
        [stars :alpha-centauri]
        [orbits :Bb :alpha-centauri]
        [orbits :moon :earth]))
  (with-db facts
    (doall (run* [q]
             (fresh [orbital body]
               (orbits orbital body)
               (== q orbital)))))
  (defn planeto
    [body]
    (fresh [star]
      (stars star)
      (orbits body star)))

  (with-db facts
    (run* [q]
      (planeto :earth)))

  (with-db facts
    (run* [q]
      (planeto :earth)
      (== q true)))

  (with-db facts
    (run* [q]
      (planeto :sun)
      (== q true)))

  (with-db facts
    (run* [q]
      (fresh [orbital]
        (planeto orbital)
        (== q orbital))))

  (with-db facts
    (run* [q]
      (planeto :Bb)))

  (defn satelliteo
    [body]
    (fresh [p]
      (orbits body p)
      (planeto p)))

  (with-db facts
    (run* [q]
      (satelliteo :sun)))

  (with-db facts
    (run* [q]
      (satelliteo :earth)))

  (with-db facts
    (run* [q]
      (satelliteo :moon))))
