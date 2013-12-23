(ns foundation.app.test
  (:require [simple-check.core :as s]
            [simple-check.generators :as gen]
            [cemerick.cljs.test :as t])
  (:require-macros [simple-check.properties :as prop]
                   [cemerick.cljs.test :refer [deftest run-tests]]
                   [simple-check.clojure-test :refer [defspec]]))

(def ascii (map char (range 65 (+ 65 26))))

(defn rand-str
  [size alphabet]
  (apply str (repeatedly size #(rand-nth alphabet))))

(def rand-sym #(symbol (rand-str %1 %2)))

(def rand-key #(keyword (rand-str %1 %2)))

(defn rand-vec
  [& generators]
  (into [] (map apply generators)))

(defn rand-map
  [size kgen vgen]
  (into {} (repeatedly size #(rand-vec kgen vgen))))

(defspec first-element-is-min-after-sorting
  (prop/for-all [v (gen/such-that gen/not-empty (gen/vector gen/int))]
    (= (apply min v)
       (first (sort v)))))
