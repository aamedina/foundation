(ns foundation.app
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!
                                     sliding-buffer close!]]
            [cljs.core.match :as m]
            [clojure.set :as set]
            [clojure.string :as str]
            [foundation.app.render :as render]
            [foundation.app.message :as msg]
            [foundation.app.router :as r :refer [route]]
            [foundation.app.util :refer [log-group]]
            [foundation.app.data.tracking-map :as tm]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(declare system)

(defmulti transform
  (fn [state message]
    [(msg/type message) (msg/path message)]))

(defmethod transform :default [state message] state)

(defmulti derives
  (fn [state message input]
    [(msg/type message) (msg/path message)]))

(defmethod derives :default [state message inputs] state)

(defn matching-path?
  [path1 path2]
  (= (loop [a (vec (flatten path1))
            b (vec (flatten path2))]
       (match [(first a) (first b)]
         [[] []] :succeed
         [nil nil] :succeed
         [:** _] (if-not (seq (rest a)) :succeed :fail)
         [_ :**] (if-not (seq (rest b)) :succeed :fail)
         [:* _] (recur (vec (rest a)) (vec (rest b)))
         [_ :*] (recur (vec (rest a)) (vec (rest b)))
         :else (if (= (first a) (first b))
                 (recur (vec (rest a)) (vec (rest b)))
                 :fail)))
     :succeed))

(defn derives-dependencies
  []
  (reduce (fn [graph [[input-paths output-path input-spec] f]]
            (let [input-paths (if (map? input-paths)
                                (keys input-paths)
                                input-paths)]
              (reduce #(d/depend %1 output-path %2) graph input-paths)))
          (d/graph) (dissoc (methods derives) :default)))

(defn rendering-deltas
  [old new]
  (letfn [(make-delta [op path]
            (let [op (case op
                       :added :node-create
                       :updated (if (get-in new path)
                                  :node-update
                                  :node-destroy)
                       :removed :node-destroy)]
              (vector op path (get-in old path) (get-in new path))))]
    (reduce (fn [deltas [op paths :as delta]]
              (->> (map make-delta (repeat op) paths)
                   (into deltas)))
            [] (tm/changes new))))

(defn dependents
  [state message]
  (let [deps (derives-dependencies)
        nodes (d/nodes deps)
        path (msg/path message)
        node-for-path (first (filter #(matching-path? path %) nodes))]
    (->> (d/transitive-dependents deps node-for-path)
         (sort (d/topo-comparator deps))
         seq)))

(defn transform-phase
  [state message]
  (update-in state (into [:data-model] (msg/path message))
             transform message))

(defn derives-phase
  [new-state message deps]
  (reduce (fn [state [[input-paths output-path input-spec] f]]
            (if (contains? (set deps) output-path)
              (update-in state (into [:data-model] output-path)
                         f message
                         (reduce (fn [m input]
                                   (assoc m
                                     input (get-in (:data-model new-state)
                                                   input)))
                                 {} input-paths))
              state))
          new-state (dissoc (methods derives) :default)))

(defn transact-one
  ([state message]
     (let [in-transaction? (instance? tm/TrackingMap (:data-model state))
           state (-> (if in-transaction?
                       state
                       (assoc state
                         :data-model (tm/tracking-map (:data-model state))))
                     (assoc :input message)
                     (dissoc :effect))
           old-state state
           new-state (-> state
                         (transform-phase message)
                         (derives-phase message (dependents state message)))
           deltas (rendering-deltas (:data-model old-state)
                                    (:data-model new-state))]
       (-> (if in-transaction?
             new-state
             (assoc new-state
               :data-model (into {} (:data-model new-state))))
           (assoc :deltas deltas)))))

(defn transact-batch
  [state messages]
  (let [transaction (assoc state
                      :data-model (tm/tracking-map (:data-model state)))
        new-state (reduce transact-one transaction messages)]
    (assoc new-state
      :data-model (into {} (:data-model new-state)))))

(defn process-special-message
  [message]
  (let [topic (msg/path message)
        t (msg/type message)]
    (case topic
      [:router] (case t
                  :navigate
                  (let [messages (r/route {:router (:router system)
                                           :uri (:to-path message)
                                           :method :get
                                           :params {}})]
                    (doseq [message messages]
                      (put! (:input system) message)))
                  nil)
      [:renderer] nil
      nil)))

(defn input-queue
  [app-state]
  (let [input-queue (chan (sliding-buffer 32))]
    (go-loop []
      (let [input (<! input-queue)]
        (cond
          (and (vector? input)
               (= (count input) 1)
               (contains? #{[:router] [:renderer]} (msg/path (first input))))
          (process-special-message (first input))
          (and (vector? input)
               (= (count input) 1))
          (swap! app-state transact-one input)
          (and (vector? input)
               (> (count input) 1))
          (swap! app-state transact-batch input)
          :else (swap! app-state transact-one input)))
      (recur))
    input-queue))

(defn output-queue
  [app-state]
  (let [output-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output (fn [_ _ old new] (put! output-queue new)))
    output-queue))

(defrecord Dataflow [state input output deps renderer render-queue router]
  Lifecycle
  (start [df]
    (try (c/start-system df #{:router :renderer})
         (catch js/Error e
           (println e)))
    df)
  (stop [df]
    (c/stop-system df #{:router :renderer})
    df))

(defn build
  [& {:keys [root-id routes] :as config}]
  (let [app-state (atom {:data-model {}})
        input (input-queue app-state)
        output (output-queue app-state)
        renderer (render/renderer root-id)
        deps (derives-dependencies)
        df (c/start (map->Dataflow
                     {:state app-state
                      :input input
                      :output output
                      :deps deps
                      :renderer (c/using renderer
                                  {:input :input
                                   :app-state :state})
                      :router (c/using (r/router routes)
                                {:input :input
                                 :app-state :state})}))]
    (def system df)
    df))
