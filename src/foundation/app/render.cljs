(ns foundation.app.render
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app.message :as msg]
            [foundation.app.util :as util]
            [foundation.app.dataflow :refer [matching-path?]]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(declare node-create node-update node-destroy transform-enable
         transform-destroy)

(defmulti node-create
  (fn [renderer [_ path _ _] input-queue parent-id id]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (if (contains? matching path)
        path
        (match [(vec (disj matching []))]
          [[[:**] [:*]]] [:**]
          [[[:**]]] [:**]
          [[[:*]]] [:*]
          :else :default)))))

(defmethod node-create :default [renderer delta input-queue & args] nil)

(defmulti node-update
  (fn [renderer [_ path _ _] input-queue parent-id]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (cond
        (contains? matching path) path
        (seq (disj matching [:**] [:*] []))
        (first (disj matching [:**] [:*] []))
        (seq matching) (first matching)
        :else :default))))

(defmethod node-update :default [& args] nil)

(defmulti node-destroy
  (fn [renderer [_ path _ _] input-queue id]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (cond
        (contains? matching path) path
        (seq (disj matching [:**] [:*] []))
        (first (disj matching [:**] [:*] []))
        (seq matching) (first matching)
        :else :default))))

(defmethod node-destroy :default [& args])

(defmulti transform-enable
  (fn [renderer [_ path _ _] id message]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (cond
        (contains? matching path) path
        (seq (disj matching [:**] [:*] []))
        (first (disj matching [:**] [:*] []))
        (seq matching) (first matching)
        :else :default))))

(defmethod transform-enable :default [& args] [])

(defmulti transform-disable (fn [renderer delta input-queue] (second delta)))

(defmethod transform-disable :default [renderer delta input-queue])

(defprotocol DomMapper
  (get-id [this path])
  (get-parent-id [this path])
  (new-id! [this path] [this path v]
    "Create a new id for this given path.
    Store this id in the renderer's environment.
    Returns the generated id. An id can be provided as a third
    argument.")
  (delete-id! [this path]
    "Delete this id and all information associated with it from the
    environment. This will also delete all ids and information
    associated with child nodes.")
  (on-destroy! [this path f]
    "Add a function to be called when the node at path is destroyed.")
  (set-data! [this ks d])
  (drop-data! [this ks])
  (get-data [this ks]))

(defn fix-id [s] (if-not (keyword? s) (keyword (str "#" s)) s))

(defn- run-on-destroy!
  [env]
  (let [nodes (tree-seq (constantly true)
                        (fn [n]
                          (map #(get n %) (remove #{:id :on-destroy :_data}
                                                  (keys n)))) env)]
    (doseq [f (mapcat :on-destroy nodes)]
      (f))))

(defrecord DomRenderer [env]
  DomMapper
  (get-id [this path]
    (if (seq path)
      (get-in @env (conj path :id))
      (:id @env)))
  (get-parent-id [this path]
    (when (seq path)
      (get-id this (vec (butlast path)))))
  (new-id! [this path]
    (new-id! this path (gensym)))
  (new-id! [this path v]
    (swap! env assoc-in (conj path :id) v)
    v)
  (delete-id! [this path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (on-destroy! [this path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (set-data! [this ks d]
    (swap! env assoc-in (concat [:_data] ks) d))
  (drop-data! [this ks]
    (swap! env update-in (concat [:_data] (butlast ks)) dissoc (last ks)))
  (get-data [this ks]
    (get-in @env (concat [:_data] ks))))

(defn push-render-queue
  [root-id input-queue]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        render-queue (chan)]
    (go-loop []
      (let [message (<! render-queue)
            [op path] message]
        (node-create renderer message input-queue))
      (recur))
    render-queue))

(defaction bind-event
  [e id f]
  [(fix-id id)] (events/listen e f))

(defaction attach-transform
  [renderer event id type path input-queue]
  (let [partial-message {msg/type type msg/path path}
        event-handler
        (fn [e]
          (doseq [message
                  (transform-enable renderer [type path] id partial-message)]
            (put! input-queue message)))]
    (bind-event event id event-handler)))
