(ns foundation.app.render
  (:require [foundation.app.util :as util]
            [cljs.core.async :as async :refer [<! put! >! take! chan
                                               sliding-buffer alts!]]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d]
            [goog.events :as e]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]
                   [dommy.macros :refer [node sel sel1]])
  (:import [goog.ui IdGenerator]
           [goog.events EventHandler InputHandler FocusHandler KeyHandler
            MouseWheelHandler ActionEvent EventType KeyEvent ActionHandler
            FileDropHandler MouseWheelEvent OnlineHandler]))

(defmulti render (fn [renderer [op path _ _] pid id] [op path]))

(defn guid [] (.getNextUniqueId (IdGenerator/getInstance)))

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defprotocol IEventDelegate
  (-find-dispatches [_ e])
  (-dispatch-action [_ e])
  (-dispatch-key [_ e])
  (-dispatch-focus [_ e])
  (-dispatch-scroll [_ e])
  (-dispatch-drop [_ e])
  (-dispatch-online [_ e]))

(defn event-delegate
  [renderer]
  (if (and (seq @(:handlers renderer))
           (every? (fn [h] (not (.isDisposed h)))
                   (vals @(:handlers renderer))))
    @(:handlers renderer)
    (let [action-handler (ActionHandler. js/document)
          key-handler (KeyHandler. js/document)
          focus-handler (FocusHandler. js/document)
          file-drop-handler (FileDropHandler. js/document)
          scroll-handler (MouseWheelHandler. js/document)
          online-handler (OnlineHandler. js/document)
          handler (doto (EventHandler. renderer)
                    (.listen action-handler
                             ActionHandler.EventType.BEFOREACTION
                             (fn [e] (-dispatch-action renderer e)))
                    (.listen action-handler
                             ActionHandler.EventType.ACTION
                             (fn [e] (-dispatch-action renderer e)))
                    (.listen key-handler
                             KeyHandler.EventType.KEY
                             (fn [e] (-dispatch-key renderer e)))
                    (.listen focus-handler
                             FocusHandler.EventType.FOCUSIN
                             (fn [e] (-dispatch-focus renderer e)))
                    (.listen focus-handler
                             FocusHandler.EventType.FOCUSOUT
                             (fn [e] (-dispatch-focus renderer e)))
                    (.listen file-drop-handler
                             FileDropHandler.EventType.DROP
                             (fn [e] (-dispatch-drop renderer e)))
                    (.listen scroll-handler
                             MouseWheelHandler.EventType.MOUSEWHEEL
                             (fn [e] (-dispatch-scroll renderer e)))
                    (.listen online-handler
                             OnlineHandler.EventType.ONLINE
                             (fn [e] (-dispatch-online renderer e)))
                    (.listen online-handler
                             OnlineHandler.EventType.OFFLINE
                             (fn [e] (-dispatch-online renderer e))))]
      {:action action-handler
       :key key-handler
       :event handler
       :focus focus-handler
       :file file-drop-handler
       :online online-handler
       :scroll scroll-handler})))

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

(def refresh-queued false)

(defprotocol IRenderer
  (-get-id [_ path])
  (-parent-id [_ path])
  (-new-id [_ path] [_ path id])
  (-delete-id [_ path])
  (-on-destroy [_ path f])
  (-set-data [_ path data])
  (-get-data [_ path])
  (-drop-data [_ path]))

(defrecord Renderer [env render-fn handlers]
  Lifecycle
  (start [renderer]
    (let [handlers (reset! handlers (event-delegate renderer))
          render-fn (fn []
                      (set! refresh-queued false)
                      )]      
      (add-watch (:app-state renderer) :root
                 (fn [_ _ _ _]
                   (when-not refresh-queued
                     (set! refresh-queued true)
                     (if (exists? js/requestAnimationFrame)
                       (js/requestAnimationFrame render-fn)
                       (js/setTimeout render-fn 16)))))
      (render-fn)))
  
  (stop [this]
    (doseq [handler (vals @handlers)]
      (.dispose handler)))

  IEventDelegate
  (-find-dispatches [_ e])
  (-dispatch-action [_ e])
  (-dispatch-key [_ e])
  (-dispatch-focus [_ e])
  (-dispatch-scroll [_ e])
  (-dispatch-drop [_ e])
  (-dispatch-online [_ e])
  
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
     (->Renderer (atom {:id root-id}) render-fn (atom {}))))

(defmethod render :default
  [renderer [op path _ _] pid id]
  "Default render implementation. Implemented as a no-op and returns nil."
  (println [op path]))
