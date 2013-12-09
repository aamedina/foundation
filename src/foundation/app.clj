(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [foundation.app.message :as msg]
            [clojure.math.combinatorics :as com]
            [clojure.core :as core]
            [hickory.core :refer :all]
            [hickory.zip :refer :all]
            [net.cgrand.enlive-html :as en]
            [hickory.select :as s]
            [garden.core :as g :refer [css]]
            [hiccup.core :refer [html h]]
            [hiccup.def :refer [defelem defhtml wrap-attrs]]
            [hiccup.util :refer [escape-html as-str to-uri url url-encode]]
            [clout.core :as clout]
            [inflections.core :as inflect]
            [clojure.xml :as xml]
            [clojure.pprint :refer [pprint]]
            [clojure.core.match :refer [match]]
            [clojure.repl :refer [doc]]
            [clojure.core.async :as a
             :refer [<! >! put! take! chan go go-loop sliding-buffer]]
            [clojure.zip :as zip]))

(defmulti transform (juxt msg/type msg/path))
(defmulti effect (juxt msg/type msg/path))
(defmulti derive identity)
(defmulti render identity)
(defmulti node-create msg/path)
(defmulti node-update (juxt msg/path :sel))
(defmulti node-destroy msg/path)
(defmulti transform-enable (juxt msg/type msg/path))
(defmulti transform-disable (juxt msg/type msg/path))

(declare transact-one since-t apply-deltas log-group new-app-model)

(defn input-queue
  [data-model]
  (let [input-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! input-queue)]
      (swap! data-model transact-one message)
      (recur (<! input-queue)))
    input-queue))

(defn effect-queue
  [data-model services-fn input-queue]
  (let [effect-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! effect-queue)]
      (services-fn message input-queue))
    effect-queue))

(defn app-model-queue
  [app-model input-queue render-fn]
  (let [render-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! render-queue)]
      (let [old-app-model @app-model
            new-app-model (swap! app-model apply-deltas (:deltas message))
            deltas (since-t new-app-model old-app-model)]
        (render-fn deltas input-queue))
      (recur (<! render-queue)))
    render-queue))

(defn consume-app-model
  [app render-fn]
  (let [app-model (atom new-app-model)]
    (app-model-queue (:app-model app) (:input app) render-fn)
    app-model))

(defprotocol DomMapper
  (get-id [this path])
  (get-parent-id [this path])
  (new-id! [this path] [this path v])
  (delete-id! [this path])
  (on-destroy! [this path f])
  (set-data! [this ks d])
  (drop-data! [this ks])
  (get-data [this ks]))

(defn run-on-destroy!
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
    (if (seq path) (get-in @env (conj path :id)) (:id @env)))
  (get-parent-id [this path]
    (when (seq path) (get-id this (vec (butlast path)))))
  (new-id! [this path] (new-id! this path (gensym)))
  (new-id! [this path v] (swap! env assoc-in (conj path :id) v) v)
  (delete-id! [this path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (on-destroy! [this path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (set-data! [this ks d] (swap! env assoc-in (concat [:_data] ks) d))
  (drop-data! [this ks]
    (swap! env update-in (concat [:_data] (butlast ks)) dissoc (last ks)))
  (get-data [this ks] (get-in @env (concat [:_data] ks))))

(defn resolve-method
  [op delta]
  (case op
    :node-create (node-create delta)
    :node-update (node-update delta)
    :node-destroy (node-destroy delta)
    :transform-enable (transform-enable delta)
    :transform-disable (transform-disable delta)
    nil))

(defn push-render-queue
  [root-id input-queue]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        push-render-queue (chan (sliding-buffer 10))]
    (go-loop [delta (<! push-render-queue)]
      (let [[op path] delta]
        (resolve-method op delta))
      (recur (<! push-render-queue)))
    push-render-queue))

(defn renderer
  [root-id]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        log-fn (fn [deltas] (log-group "Rendering Deltas" deltas))]
    (fn [deltas input-queue]
      (log-fn deltas)
      (doseq [d deltas]
        (let [[op path] d]
          (resolve-method op d))))))

(defn transact-one
  [data-model message]
  )

(defn rendering-deltas
  [state]
  (letfn [(delta [op path]
            [op path (get-in state (into [:new] path))])
          (delta-op [op path]           
            [(case op
               :node-create :transform-enable
               :node-destroy :transform-disable
               nil) path ])
          (deltas [deltas [k paths]]
            (case k
              :added (into deltas (map delta (repeat :node-create) paths))
              :updated (into deltas (map delta (repeat :node-update) paths))
              :removed (into deltas (map delta (repeat :node-destroy)
                                         paths))))]
    (reduce deltas [] (select-keys state [:added :updated :removed]))))

(defn derives
  [input]
  (->> (filter (fn [[dispatch f]]
                 (some (first dispatch) [input]))
               (methods derive))
       (map (fn [[dispatch f]]
              {:output (last dispatch)
               :input input
               :fn f}))))

(declare diff-phase)

(defn transform-phase
  [state]
  (let [message (get-in state [:context :message])]
    (diff-phase (update-in state
                           (into [:new] (msg/path message))
                           (partial transform message))
                (msg/path message))))

(defn diff-phase
  [state path]
  (let [[o n _] (diff (:old state) (:new state))]
    (cond
      (= o n) state
      (nil? o) (update-in state [:added] conj path)
      (and (map? o) (nil? n)) state
      (nil? n) (update-in state [:removed] conj path)
      :else (update-in state [:updated] conj path))))

(defn emit-phase
  [state]
  (assoc state :deltas (rendering-deltas (:change state))))

(defn derive-phase
  [state]
  (reduce (fn [state [t paths]]
            (if-let [derives (reduce merge (map derives paths))]
              (cond
                (contains? #{:added :updated} t)
                (reduce (fn [s {:keys [input output fn]}]
                          (diff-phase (update-in s (into [:new] output) fn)
                                      input))
                        state derives)
                (= t :removed)
                (reduce
                 (fn [s {:keys [input output fn]}]
                   (update-in s (into [:new] output) fn))
                 state derives)
                :else state)
              state))
          state (select-keys state [:added :removed :updated])))

(defn effect-phase [state]
  (effect (get-in state [:context :message])))

(defn state
  [message data-model]
  {:old data-model
   :new data-model
   :added #{}
   :removed #{}
   :updated #{}
   :deltas []
   :context {:message message}})

(defn run-dataflow
  ([message] (run-dataflow message {}))
  ([message data-model]
     (-> (state message data-model)
         transform-phase
         derive-phase
         ;; effect-phase
         ;; emit-phase
         )))

(defn lazy-run
  [n init-model message]
  (take n (iterate (comp :new (partial run-dataflow message)) {})))

(defmacro build
  []
  `(let [data-model# (atom {:data-model {}})
         render-queue# (render-queue data-model#)
         input-queue# (input-queue data-model# render-queue#)
         effect-queue# (effect-queue data-model# input-queue#)
         transform# ~(methods transform)
         effect# ~(set (methods effect))
         derive# ~(methods derive)
         rendering-config# ~(assoc {}
                              :node-create (methods node-create)
                              :node-update (methods node-update)
                              :node-destroy (methods node-destroy)
                              :transform-enable (methods transform-enable)
                              :transform-disable (methods transform-disable))
         description# {:transform transform# :effect effect# :derive derive#}
         dataflow# description#]
     {:state data-model#
      :description description#
      :dataflow dataflow#
      :input input-queue#
      :effect effect-queue#
      :render render-queue#
      :rendering-config rendering-config#}))

(defmethod render :node-create
  [[op path f :as delta] renderer]
  (let []))

(defmethod render :node-update
  [[op path f :as delta] renderer]
  [])

(defmethod render :node-destroy
  [[op path f :as delta] renderer]
  [])

(defmethod render :transform-enable
  [[op path f :as delta] renderer]
  [])

(defmethod render :transform-enable
  [[op path f :as delta] renderer]
  [])

(defprotocol IDom
  (-id [dom path])
  (-parent [dom path])
  (-children [dom path])
  (-append [dom parent child])
  (-prepend [dom parent child])
  (-listen [dom path event f])
  (-unlisten [dom path event])
  (-add-class [this path class])
  (-remove-class [this path class])
  (-add-attr [this path k v])
  (-remove-attr [this path k])
  (-remove [dom path])
  (-remove-children [dom path])
  (-sel [dom selector])
  (-sel1 [dom selector])
  (-diff [dom new-dom]))

(defn ns-qualify
  [x]
  (keyword (namespace ::dom) (name x)))

(def empty-node
  {:tag ""
   :attrs {}
   :content []})


(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next (zip/xml-zip root))))

(defn nodes
  [root]
  (for [loc (locs root)] (zip/node loc)))

(defn -path [p & ps] (into [p] (flatten ps)))

(defn selector
  [sel]
  (letfn [(re [k]
            (case k
              :tag #"(\w+)[\.#]\w+"
              :id #"#(\w+)"
              :class #"\.(\w+)"))
          (sel? [k {:keys [selector]}] (seq (re-seq (re k) selector)))
          (select [{:keys [selector] :as sel} k]
            (assoc sel k (last (flatten (re-seq (re k) selector)))))]
    (let [sel {:selector (name sel)}]
      (cond-> sel
              (sel? :tag sel) (select :tag)
              (sel? :id sel) (select :id)
              (sel? :class sel) (select :class)))))

(defrecord Dom [dom env]
  IDom
  (-id [this path]
    (if (seq path)
      (get-in env (conj path :id))
      (:id env)))
  (-parent [this path])
  (-children [this path])
  (-append [this path child]
    (assoc this
      :dom ((en/append child)
            (->> (-id this path) (str "#") keyword (-sel1 this)))
      :env (assoc-in env (conj path :id) (gensym))))
  (-prepend [this path child]
    (assoc this
      :dom ((en/prepend (-sel1 this path)) child)
      :env (assoc-in env (conj path :id) (gensym))))
  (-listen [this path event f])
  (-unlisten [this path event])
  (-remove [this path]
    (assoc this
      :env (update-in env (vec (butlast path)) dissoc (last path))))
  (-add-class [this path class]
    (assoc this
      :dom ((en/add-class class) (-sel1 this path))))
  (-remove-class [this path class]
    (assoc this
      :dom ((en/remove-class class) (-sel1 dom path))))
  (-add-attr [this path k v]
    (assoc this
      :dom ((en/set-attr k v) (-sel1 this path))))
  (-remove-attr [this path k]
    (assoc this
      :dom ((en/set-attr k nil) (-sel1 this path))))
  (-remove-children [this path])
  (-sel [this selector]
    (cond
      (vector? selector) (en/select dom selector)
      (string? selector) (en/select dom [(keyword selector)])
       (keyword? selector)  (en/select dom [selector])
      :else nil))
  (-sel1 [this selector]
    (first (-sel this selector)))
  (-diff [this new-dom]))

(defn dom
  [root-id]
  (let [root-node (assoc empty-node
                    :tag "div"
                    :attrs {:id root-id})]
    (Dom. root-node {:id root-id})))

(defmacro defmodel
  [name params {:keys [url views] :as conditions} & body]
  (let [compiled-route (->> (update-in (clout/route-compile url) [:keys] vec)
                            ((juxt keys vals))
                            (apply zipmap))
        conditions (select-keys conditions [:pre :post])
        m (dissoc conditions :pre :post)]
    `(do (def ~((comp symbol inflect/plural str) name)
           ~(assoc m
              :url compiled-route))
         (defn ~name
           ([{:keys [~@params] :as m#}] ~conditions
              (when (map? m#)
                (with-meta m# {:model ~(keyword name)})))
           ([~@params] ~conditions
              (with-meta (zipmap [~@(map keyword params)] ~params)
                {:model ~(keyword name)}))))))

(defmodel account [name id currency timezone]
  {:url "/accounts/:id"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defmulti column (juxt (comp :model meta) first))

(defmethod column [:account :name]
  [[attr v]]
  (html [:th {:id attr} "Name"]))

(defmethod column [:account :select-all]
  [[attr v]]
  (html [:th {:id attr} "Select All"]))

(defmethod column '[_ :id]
  [[attr v]]
  (html [:th {:id attr} "ID"]))

(defmethod column [:account :currency]
  [[attr v]]
  (html [:th {:id attr} "Currency"]))

(defmethod column [:account :timezone]
  [[attr v]]
  (html [:th {:id attr} "Timezone"]))

(defn attrs
  [model]
  (map #(with-meta (into [] %) (meta model)) model))

(def acct (apply account (repeat 4 "")))
