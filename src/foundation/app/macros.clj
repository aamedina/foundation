(ns foundation.app.macros
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [clojure.java.io :as io]
            [clojure.core :as core]
            [clojure.repl :refer [doc]]
            [clojure.zip :as zip]
            [clojure.pprint :refer [pprint]]
            [clojure.math.combinatorics :as com]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.match :as m :refer [match]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [riddley.walk :refer [walk-exprs macroexpand-all]]
            [riddley.compiler :refer [locals]]
            [clojure.core.match.protocols :refer :all]))

(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next root)))

(defn nodes
  [root]
  (for [loc (locs root)]
    (zip/node loc)))

(defn reset
  []
  (refresh-all))

(defn zip-with
  [f & colls]
  (apply map f colls))

(defn zip
  [& colls]
  (apply zip-with vector colls))

(defprotocol IRange
  (-range [a] [a b]))

(extend-protocol IRange
  Number
  (-range
    ([a] (-range 0 a))
    ([a b] (when (number? b) (range a b))))
  Character
  (-range
    ([a] (-range (char 0) a))
    ([a b]
       (when (char? b)
         (for [i (range (int a) (inc (int b)))] (char i))))))

(extend-protocol IContainsRestPattern
  String
  (contains-rest-pattern? [this] true))

(defn seqable?
  [x]
  (or (nil? x)
      (seq? x)
      (coll? x)
      (string? x)))

(defn checked-seq
  ([coll]
     (if (seqable? coll)
       (seq coll)
       coll)))

(defn checked-vec
  ([coll]
     (if (string? coll)
       (vec coll)
       coll)))

(defmacro resolve-sym
  [sym]
  (->> (all-ns)
       (map #(ns-resolve % sym))
       (remove nil?)
       distinct
       first))

(defn recurs?
  [name form]
  (and (seq? form) (= name (first form))))

(defn form-name
  [form]
  (if (and (seq? form) (symbol? (first form)))
    (name (first form))))

(defmulti compile-lazy form-name)

(defmethod compile-lazy "for"
  [[_ bindings & body]]
  `(for ~bindings ~@(map compile-lazy body)))

(defmethod compile-lazy "let"
  [[_ bindings & body]]
  `(let ~bindings ~@(map compile-lazy body)))

(defmethod compile-lazy "let*"
  [[_ bindings & body]]
  `(let ~bindings ~@(map compile-lazy body)))

(defmethod compile-lazy "if"
  [[_ condition & body]]
  `(if ~condition ~@(map compile-lazy body)))

(defmethod compile-lazy "str"
  [[_ arg & body]]
  `(cons ~arg ~@(map compile-lazy body)))

(defmethod compile-lazy :default [form] form)

(defn make-lazy
  [fdecl]
  (let [fargs# (mapv (fn [arg#]
                      (cond
                        (vector? arg#) (list arg# :seq)
                        :else arg#)) (first fdecl))]
    (list fargs# (compile-lazy (first (rest fdecl))))))

(defn make-eager
  [fdecl]
  (let [fargs# (mapv (fn [arg#]
                      (cond
                        (vector? arg#) (list arg# :seq)
                        :else arg#)) (first fdecl))]
    (list fargs# (first (rest fdecl)))))

(defmulti optimize-tagged (fn [param arg] (:tag (meta param))))

(defmethod optimize-tagged 'String
  [param arg]
  `(seq ~arg))

(defmethod optimize-tagged :default [tag arg] arg)

(defn as-parametric
  [lazy? fdecls]
  (let [params# (zipmap (first (map first fdecls))
                        (repeatedly (partial gensym "p__")))]
    `([~@(vals params#)]
        (if ~lazy?
          (lazy-seq
            (match [~@(map (fn [[param# arg#]]
                             (optimize-tagged param# arg#)) params#)]
              ~@(mapcat make-lazy fdecls)))
          (match [~@(map (fn [[param# arg#]]
                           (optimize-tagged param# arg#)) params#)]
            ~@(mapcat make-eager fdecls))))))

(declare defun lambda lambda* letfun)

(defmacro lambda*
  [lazy? & sigs]
  (let [name (if (symbol? (first sigs)) (first sigs) nil)
        sigs (if name (next sigs) sigs)
        sigs (cond
               (vector? (first sigs)) (list sigs)
               (seq? (first sigs)) sigs)
        sigs (partition-by #(count (first %)) sigs)]
    (with-meta
      (if name
        (list* 'fn name (map (partial as-parametric lazy?) sigs))
        (list* 'fn (map (partial as-parametric lazy?) sigs)))
      (meta &form))))

(defmacro lambda
  [& sigs]
  (let [name (if (symbol? (first sigs)) (first sigs) nil)
        sigs (if name (next sigs) sigs)
        sigs (if (vector? (first sigs))
               (list sigs)
               (if (seq? (first sigs))
                 sigs))
        psig (fn* [sig]
               (let [[params & body] sig
                     body (list `(do ~@body))]
                 (list* params body)))]
    (let [lazy (list* 'lambda* true name (map psig sigs))
          eager (list* 'lambda* false name (map psig sigs))]
      lazy)))

(defmacro letfun
  [fnspecs & body]
  `(letfn* ~(vec (interleave (map first fnspecs)
                             (map #(cons `lambda* %) fnspecs)))
           ~@body))

(defmacro defun
  [name & fdecls]
  `(def ~name (lambda* ~name ~@fdecls)))

(defun fib-seq
  ([a b] a))

(defun odds
  ([[x & xs]] (if (odd? x) (cons x (odds xs)) (odds xs)))
  ([_] ()))

(defun sum
  ([xs] (sum 0 xs))
  ([acc [x & xs]] (sum (+ acc x) (seq xs)))
  ([acc _] acc))

(defun uppercase
  ([^String [x & xs]] (cons (str/upper-case x) (uppercase xs)))
  ([nil] ""))

(defun my-map
  ([f [x & xs]] (cons (f x) (my-map f xs)))
  ([_ _] ()))

(defn span
  [pred xs]
  ((juxt take-while drop-while) pred xs))

(defn break
  [pred xs]
  ((juxt take-while drop-while) (complement pred) xs))

(defn prefix?
  [s1 s2]
  (cond
    (identical? s1 s2) true
    (= s1 s2) true
    (and (nil? s1) (seq s2)) false
    (and (seq s1) (nil? s2)) true
    (identical? (first s1) (first s2)) (recur (seq (rest s1)) (seq (rest s2)))
    (= (first s1) (first s2)) (recur (seq (rest s1)) (seq (rest s2)))
    :else (recur (seq (rest s1)) (seq (rest s2)))))

(defn infix?
  [x xs])

(defn suffix?
  [x xs])
