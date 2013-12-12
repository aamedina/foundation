(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.compiler :as comp]
            [clojure.core :as core]
            [clout.core :as clout]
            [inflections.core :as inflect]
            [clojure.xml :as xml]
            [clojure.pprint :refer [pprint]]
            [clojure.core.match :refer [match]]
            [clojure.repl :refer [doc]]
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


(defn readr
  [prompt exit-code]
  (let [input (clojure.main/repl-read prompt exit-code)]
    (if (= input ::tl)
      exit-code
      input)))

(defmacro local-context []
  (let [symbols (keys &env)]
    (zipmap (map (fn [sym] `(quote ~sym))
                 symbols)
            symbols)))


(defn contextual-eval
  [ctx expr]
  (eval `(let [~@(mapcat (fn [[k v]] [k `'~v]) ctx)]
           ~expr)))

(defmacro break []
  `(clojure.main/repl
    :prompt #(print "debug=>")
    :read readr
    :eval (partial contextual-eval (local-context))))

(defn div [n d] (break) (int (/ n d)))

(defn keys-apply
  [f ks m]
  (break)
  (let [only (select-keys m ks)]
    (break)
    (zipmap (keys only) (map f (vals only))))) 
