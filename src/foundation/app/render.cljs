(ns foundation.app.render
  (:require [foundation.app.util :as util]
            [cljs.core.async :as async :refer [<! put! >! take! chan]]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]))

(defmulti render (fn [renderer [op path _ _] pid id] [op path]))

(defn guid [] (.getNextUniqueId (IdGenerator/getInstance)))

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defn node-seq
  [env]
  (tree-seq (constantly true)
            (fn [n]
              (map #(get n %) (remove #{:id :on-destroy :_data} (keys n))))
            env))

(defn run-on-destroy!
  [env]
  (let [nodes (node-seq env)]
    (doseq [f (mapcat :on-destroy nodes)]
      (f))))

(defprotocol IRenderer
  (-get-id [_ path])
  (-parent-id [_ path])
  (-new-id [_ path] [_ path id])
  (-delete-id [_ path])
  (-on-destroy [_ path f])
  (-set-data [_ path data])
  (-get-data [_ path])
  (-drop-data [_ path]))

(defrecord Renderer [env render-fn]
  Lifecycle
  (start [this]
    (println "Starting renderer ... ")
    ;; (c/start-system this components)
    )
  (stop [this]
    (println "Stopping renderer ... ")
    ;; (c/stop-system this components)
    )
  
  IRenderer
  (-get-id [_ path]
    (if (seq path)
      (get-in @env (conj path :id))
      (:id @env)))
  (-parent-id [r path]
    (when (seq path)
      (-get-id r (vec (butlast path)))))
  (-new-id [r path] (-new-id r path (guid)))
  (-new-id [_ path id] (swap! env assoc-in (conj path :id) id) id)
  (-delete-id [_ path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (-on-destroy [_ path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (-set-data [_ path data]
    (swap! env assoc-in (concat [:_data] path) data))
  (-get-data [_ path]
    (get-in @env (concat [:_data] path)))
  (-drop-data [_ path]
    (swap! env update-in
           (concat [:_data] (butlast path)) dissoc (last path))))

(defn push-render-queue
  [renderer input-queue]
  (let [render-queue (chan)]
    (go-loop []
      (let [delta (<! render-queue)
            [op path _ _ :as d] delta]
        (if-let [id (-get-id renderer path)]
          (render renderer delta (-parent-id renderer path) id)
          (render renderer delta (-parent-id renderer path)
                        (-new-id renderer path))))
      (recur))
    render-queue))

(defn renderer
  ([root-id]
     (renderer root-id log-fn))
  ([root-id render-fn]
     (->Renderer (atom {:id root-id}) render-fn)))

(defmethod render :default
  [renderer [op path _ _] pid id]
  "Default render implementation. Implemented as a no-op and returns nil."
  (println [op path]))
