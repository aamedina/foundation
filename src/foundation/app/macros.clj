(ns foundation.app.macros
  (:refer-clojure :exclude [future resolve])
  (:require [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.core :as core]
            [cljs.closure :as cljsc]
            [clojure.pprint :as pp :refer [pprint]]
            [clojure.tools.analyzer :as analyzer]))

(defmacro future
  [& body]
  `(let [future-state# (atom nil)
         promise#
         (reify
           cljs.core/IDeref
           (~'-deref [this#]
             (when-not (realized? this#)
               (cljs.core.async.macros/go-loop [x# (cljs.core.async/<!
                                                    (do ~@body))]
                 (if (foundation.app.logic/chan? x#)
                   (recur (cljs.core.async/<! x#))
                   (reset! future-state# x#))))
             (if-not (realized? this#)
               future-state#
               @future-state#))
           cljs.core/IPending
           (~'-realized? [this#]
             (boolean @future-state#))
           cljs.core/IPrintWithWriter
           (~'-pr-writer [coll# writer# opts#]
             (~'-pr-writer future-state# writer# opts#)))]
     @promise#
     promise#))

(defn simplify-env [_ {:keys [op] :as ast}]
  (let [env (:env ast)
        ast (if (= op :fn)
              (assoc ast :methods
                     (map #(simplify-env nil %) (:methods ast)))
              ast)]
    (assoc (dissoc ast :env)
      :env {:context (:context env)})))

(defn elide-children [_ ast]
  (dissoc ast :children))

(defn to-ast
  ([form] (to-ast 'cljs.user form))
  ([ns form]
     (let [env (assoc-in (ana/empty-env) [:ns :name] ns)]
       (binding [ana/*passes* [elide-children simplify-env ana/infer-type]]
         (ana/analyze env form)))))

(defn pr-ast
  [ast]
  (pprint ast))

(defmacro env []
  (let [env (zipmap (keys &env)
                    (map (fn [local]
                           {:num (.-idx local)
                            :sym (.-sym local)
                            :name (.-name local)
                            :tag (.-tag local)})
                         (vals &env)))]
    (pprint env)
    `(do ~env)))

(defmacro local-context
  []
  (let [symbols (-> &env :locals keys)]
    (zipmap (map (fn [sym] `(quote ~sym)) symbols) symbols)))

     ;; (with-meta  {:ast '~(to-ast &form)
     ;;              :name '~name
     ;;              :locals ~(local-context)
     ;;              :args 1})

(defmacro defun
  [name args & body]
  `(def ~name (fn ~args ~@body)))

(defun plus
  [a b]
  (let [c b]
    (+ a b)))
