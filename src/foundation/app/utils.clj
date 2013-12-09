(ns foundation.app.utils
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
            [clojure.core.match :as m
             :refer [match match-let matchv defpred]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [riddley.walk :refer [walk-exprs macroexpand-all]]
            [riddley.compiler :refer [locals]]
            [clojure.core.match.protocols :refer :all]
            [clojure.core.async :refer [go chan <! >! <!!]]
            [clojure.core.reducers :as r]))

(defn scaffold [iface]
  (doseq [[iface methods]
          (->> iface .getMethods
               (map #(vector (.getName (.getDeclaringClass %))
                             (symbol (.getName %))
                             (count (.getParameterTypes %))))
               (group-by first))]
    (println (str "  " iface))
    (doseq [[_ name argcount] methods]
      (println
       (str "    "
            (list name
                  (into ['this] (take argcount (repeatedly gensym)))))))))

(defn all-dependencies
  [dependencies n]
  (loop [stack []
         unprocessed [n]
         processed {}]
    (if (empty? unprocessed)
      stack
      (let [i (peek unprocessed)
            status (processed i)]
        (case status
          :done (recur stack (pop unprocessed) processed)
          :seen-once (recur (conj stack i) (pop unprocessed)
                            (assoc processed i :done))
          (recur stack (into unprocessed (dependencies i))
                 (assoc processed i :seen-once)))))))

(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next root)))

(defn nodes
  [root]
  (for [loc (locs root)]
    (zip/node loc)))

(defn zip-with
  [f & colls]
  (apply map f colls))

(defn zip
  [& colls]
  (apply zip-with vector colls))

(defmacro resolve-sym
  [sym]
  (->> (all-ns)
       (map #(ns-resolve % sym))
       (remove nil?)
       distinct
       first))

(defn form-name
  [form]
  (when (and (seq? form) (symbol? (first form)))
    (name (first form))))

(core/defmulti compile-lazy form-name)

(core/defmethod compile-lazy "for"
  [[_ bindings & body]]
  `(for ~bindings ~@body))

(core/defmethod compile-lazy "let"
  [[_ bindings & body]]
  `(let ~bindings ~@body))

(core/defmethod compile-lazy "let*"
  [[_ bindings & body]]
  `(let ~bindings ~@body))

(core/defmethod compile-lazy "if"
  [[_ condition & body]]
  `(if ~condition ~@body))

(core/defmethod compile-lazy "str"
  [[_ arg & body]]
  `(cons ~arg ~@body))

(core/defmethod compile-lazy :default [form] form)

(defn make-lazy
  [cachesym name fdecl]
  (let [fargs# (mapv (fn [arg#]
                      (cond
                        (vector? arg#) (list arg# :seq)
                        :else arg#)) (first fdecl))
        nodes (loop [loc (zip/seq-zip (rest fdecl))]
                (cond
                  (zip/end? loc) (zip/root loc)
                  (and (seq? (zip/node loc))
                       (= name (first (zip/node loc))))
                  (recur (zip/next (zip/edit loc concat (list cachesym))))
                  (and (seq? (zip/node loc)) (seq (zip/node loc))
                       (not (identical? (zip/node loc) '())))
                  (recur (zip/next (zip/edit loc compile-lazy)))
                  :else (recur (zip/next loc))))]
    (list* fargs# nodes)))

(core/defmulti optimize-tagged (fn [param arg] (:tag (meta param))))

(core/defmethod optimize-tagged 'String
  [param arg]
  `(seq ~arg))

(core/defmethod optimize-tagged :default [tag arg] arg)

(declare defun lambda lambda* letfun)

(defmacro lambda*
  [& sigs]
  (let [name (if (symbol? (first sigs)) (first sigs) nil)
        sigs (if name (next sigs) sigs)
        sigs (cond
               (vector? (first sigs)) (list sigs)
               (seq? (first sigs)) sigs)
        sigs (partition-by #(count (first %)) sigs)
        cache (gensym)
        as-parametric
        (fn [sigs]
          (let [params# (zipmap (first (map first sigs))
                                (repeatedly (partial gensym "p__")))]
            `([~@(vals params#) ~cache]
                (lazy-seq
                  (let [val# (match [~@(map (fn [[param# arg#]]
                                              (optimize-tagged param# arg#))
                                            params#)]
                               ~@(mapcat make-lazy
                                         (repeat cache)
                                         (repeat name) sigs))]
                    val#)))))]
    `(fn ~name ~@(map as-parametric sigs))))

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
    `(lambda* ~name ~@(map psig sigs))))

(defmacro letfun
  [fnspecs & body]
  `(letfn* ~(vec (interleave (map first fnspecs)
                             (map #(cons `lambda %) fnspecs)))
           ~@body))

(defmacro defun
  [name & fdecls]
  `(do (declare ~name)
       (let [cache# (atom nil)
             mem# (atom {})
             cached-fn# (lambda cached-fn# ~@fdecls)
             mem-fn# (fn [args#]
                       (if-let [e# (find @mem# args#)]
                         (val e#)
                         (let [ret# (apply cached-fn# (conj args# cache#))]
                           (swap! mem# assoc args# ret#)
                           ret#)))]
         (defn ~name
           ([] (mem-fn# []))
           ([arg1#] (mem-fn# [arg1#]))
           ([arg1# arg2#] (mem-fn# [arg1# arg2#]))
           ([arg1# arg2# arg3#] (mem-fn# [arg1# arg2# arg3#]))
           ([arg1# arg2# arg3# & args#]
              (mem-fn# (into [arg1# arg2# arg3#] args#)))))))

(defn span
  [pred xs]
  ((juxt take-while drop-while) pred xs))

(defn break
  [pred xs]
  ((juxt take-while drop-while) (complement pred) xs))

(defn- reset-cache
  [method-cache method-table cached-hierarchy hierarchy]
  (swap! method-cache (fn [_] (deref method-table)))
  (swap! cached-hierarchy (fn [_] (deref hierarchy))))

(defn- prefers*
  [x y prefer-table]
  (let [xprefs (@prefer-table x)]
    (or
     (when (and xprefs (xprefs y))
       true)
     (loop [ps (parents y)]
       (when (pos? (count ps))
         (when (prefers* x (first ps) prefer-table)
           true)
         (recur (rest ps))))
     (loop [ps (parents x)]
       (when (pos? (count ps))
         (when (prefers* (first ps) y prefer-table)
           true)
         (recur (rest ps))))
     false)))

(defn- dominates
  [x y prefer-table]
  (or (prefers* x y prefer-table) (isa? x y)))

(defn- find-and-cache-best-method
  [name dispatch-val hierarchy method-table prefer-table method-cache
   cached-hierarchy]
  (let [best-entry
        (reduce
         (fn [be [k _ :as e]]
           (if (isa? @hierarchy dispatch-val k)
             (let [be2 (if (or (nil? be)
                               (dominates k (first be) prefer-table))
                         e
                         be)]
               (when-not (dominates (first be2) k prefer-table)
                 (throw (Exception.
                         (str "Multiple methods in multimethod '" name
                              "' match dispatch value: " dispatch-val " -> " k
                              " and " (first be2)
                              ", and neither is preferred"))))
               be2)
             be))
                nil @method-table)]
    (when best-entry
      (if (= @cached-hierarchy @hierarchy)
        (do
          (swap! method-cache assoc dispatch-val (second best-entry))
          (second best-entry))
        (do
          (reset-cache method-cache method-table cached-hierarchy hierarchy)
          (find-and-cache-best-method name dispatch-val hierarchy
                                      method-table prefer-table
                                      method-cache cached-hierarchy))))))

(defprotocol IMultiFn
  (-reset [mf])
  (-add-method [mf dispatch-val method])
  (-remove-method [mf dispatch-val])
  (-prefer-method [mf dispatch-val dispatch-val-y])
  (-get-method [mf dispatch-val])
  (-methods [mf])
  (-prefers [mf])
  (-dispatch [mf args]))

(defn do-dispatch
  [mf name dispatch-fn args]
  (let [dispatch-val (apply dispatch-fn args)
        target-fn (-get-method mf dispatch-val)]
    (when-not target-fn
      (throw (Exception. (str "No method in multimethod '"
                              name "' for dispatch value: " dispatch-val))))
    (apply target-fn args)))

(deftype MultiFn [name dispatch-fn default-dispatch-val hierarchy
                  method-table prefer-table method-cache cached-hierarchy]
  IMultiFn
  (-reset [mf]
    (swap! method-table (fn [mf] {}))
    (swap! method-cache (fn [mf] {}))
    (swap! prefer-table (fn [mf] {}))
    (swap! cached-hierarchy (fn [mf] nil))
    mf)
  (-add-method [mf dispatch-val method]
    (swap! method-table assoc dispatch-val method)
    (reset-cache method-cache method-table cached-hierarchy hierarchy)
    mf)
  (-remove-method [mf dispatch-val]
    (swap! method-table dissoc dispatch-val)
    (reset-cache method-cache method-table cached-hierarchy hierarchy)
    mf)
  (-get-method [mf dispatch-val]
    (when-not (= @cached-hierarchy @hierarchy)
      (reset-cache method-cache method-table cached-hierarchy hierarchy))
    (if-let [target-fn (@method-cache dispatch-val)]
      target-fn
      (if-let [target-fn (find-and-cache-best-method name dispatch-val
                                                     hierarchy method-table
                                                     prefer-table
                                                     method-cache
                                                     cached-hierarchy)]
        target-fn
        (@method-table default-dispatch-val))))
  (-prefer-method [mf dispatch-val-x dispatch-val-y]
    (when (prefers* dispatch-val-x dispatch-val-y prefer-table)
      (throw (Exception. (str "Preference conflict in multimethod '" name
                              "': " dispatch-val-y
                              " is already preferred to " dispatch-val-x))))
    (swap! prefer-table
           (fn [old]
             (assoc old dispatch-val-x
                    (conj (get old dispatch-val-x #{}) dispatch-val-y))))
    (reset-cache method-cache method-table cached-hierarchy hierarchy))
  (-methods [mf] @method-table)
  (-prefers [mf] @prefer-table)
  (-dispatch [mf args] (do-dispatch mf name dispatch-fn args))
  clojure.lang.IFn
  (invoke [mf a1] (-dispatch mf [a1]))
  (invoke [mf a1 a2] (-dispatch mf [a1 a2]))
  (invoke [mf a1 a2 a3] (-dispatch mf [a1 a2 a3]))
  (invoke [mf a1 a2 a3 a4] (-dispatch mf [a1 a2 a3 a4]))
  (invoke [mf a1 a2 a3 a4 a5] (-dispatch mf [a1 a2 a3 a4 a5]))
  (invoke [mf a1 a2 a3 a4 a5 a6] (-dispatch mf [a1 a2 a3 a4 a5 a6]))
  (invoke [mf a1 a2 a3 a4 a5 a6 a7] (-dispatch mf [a1 a2 a3 a4 a5 a6 a7]))
  (applyTo [mf args] (-dispatch mf args)))

(def -global-hierarchy (atom nil))

(defn get-global-hierarchy
  []
  (when (nil? @-global-hierarchy)
    (reset! -global-hierarchy (make-hierarchy)))
  -global-hierarchy)

(defmacro defspec
  [name & options]
  (let [docstring   (if (core/string? (first options))
                      (first options)
                      nil)
        options     (if (core/string? (first options))
                      (next options)
                      options)
        m           (if (map? (first options))
                      (first options)
                      {})
        options     (if (map? (first options))
                      (next options)
                      options)
        dispatch-fn (first options)
        options     (next options)
        m           (if docstring
                      (assoc m :doc docstring)
                      m)
        m           (if (meta name)
                      (conj (meta name) m)
                      m)
        options (apply core/hash-map options)
        default (core/get options :default :default)]
    `(do (declare ~name)
         (def ~(with-meta name m)
           (let [method-table# (atom {})
                 prefer-table# (atom {})
                 method-cache# (atom {})
                 cached-hierarchy# (atom {})
                 hierarchy#
                 (get ~options :hierarchy (get-global-hierarchy))]
             (MultiFn.  ~(core/name name) #(apply ~dispatch-fn %&)
                        ~default hierarchy#
                        method-table# prefer-table# method-cache#
                        cached-hierarchy#))))))

(defmacro defgeneric
  [multifn dispatch-val & fn-tail]
  `(-add-method ~(with-meta multifn {:tag 'MultiFn}) ~dispatch-val
                (fn ~@fn-tail)))
