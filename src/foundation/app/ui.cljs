(ns foundation.app.ui
  (:require [goog.events :as gevents]
            [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! take! put! >! chan close!]]
            [dommy.core :as dom]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d]
            [foundation.app.data.tracking-map :as tm])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.ui :refer [component]]
                   [dommy.macros :refer [node]])
  (:import [goog.ui IdGenerator]
           [goog.events EventHandler InputHandler FocusHandler KeyHandler
            MouseWheelHandler ActionEvent]))

(defprotocol IInitState
  (-init-state [_ owner]))

(defprotocol IShouldUpdate
  (-should-update [_ owner next-props next-state]))

(defprotocol IWillMount
  (-will-mount [_ owner]))

(defprotocol IDidMount
  (-did-mount [_ owner node]))

(defprotocol IWillUnmount
  (-will-unmount [_ owner]))

(defprotocol IWillUpdate
  (-will-update [_ owner next-props next-state]))

(defprotocol IDidUpdate
  (-did-update [_ owner prev-props prev-state root-node]))

(defprotocol IRender
  (-render [_ owner]))

(defprotocol IDisposable
  (-dispose [_]))

(defprotocol IFocusable
  (-focus [_ e])
  (-blur [_ e]))

(defprotocol IKeyTarget
  (-keydown [_ e])
  (-keyup [_ e]))

(defprotocol IResizeable
  (-resize [_ e]))

(defprotocol IClickable
  (-click [_ e]))

(defprotocol IMouseTarget
  (-mouseover [_ e])
  (-mouseout [_ e])
  (-mousedown [_ e])
  (-mouseup [_ e]))

(defprotocol IScrollable
  (-scroll [_ e]))

(defprotocol IHideable
  (-hide [_])
  (-show [_]))

(defprotocol ISelect
  (-set-selection [_ val])
  (-select [_ selection])
  (-selected [_]))

(defprotocol IInput
  (-input [_ e])
  (-value [_])
  (-set-value [_ val]))

(defn guid [] (.getNextUniqueId (IdGenerator/getInstance)))

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

(defn focusable
  [component root])

(defn clickable
  [component root])

(defn key-target
  [component root])

(defn mouse-target
  [component root])

(defn resizable
  [component root])

(defn scrollable
  [component root])

(defn input
  [component root])

(defn init-state
  [component])

(defn should-update
  [component])

(defn will-mount
  [component])

(defn did-mount
  [component])

(defn will-unmount
  [component])

(defn will-update
  [component])

(defn render
  [component])

(defrecord UIComponent [root reified props children]
  Lifecycle
  (start [_]
    (cond-> reified
      (satisfies? IFocusable reified) (focusable root)
      (satisfies? IClickable reified) (clickable root)
      (satisfies? IKeyTarget reified) (key-target root)
      (satisfies? IMouseTarget reified) (mouse-target root)
      (satisfies? IResizeable reified) (resizable root)
      (satisfies? IScrollable reified) (scrollable root)
      (satisfies? IInput reified) (input root)
      (satisfies? IInitState reified) init-state
      (satisfies? IShouldUpdate reified) should-update
      (satisfies? IWillMount reified) will-mount
      (satisfies? IDidMount reified) did-mount
      (satisfies? IWillUnmount reified) will-unmount
      (satisfies? IWillUpdate reified) will-update))
  (stop [_]))

(defrecord Renderer [handler app env components]
  Lifecycle
  (start [this]
    (c/start-system this components))
  (stop [this]
    (c/stop-system this components))

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

(def refresh-queued false)

(defn root
  [app f node]
  (let [handler (EventHandler.)
        root (map->Renderer
              {:state (atom (tm/tracking-map {}))
               :components (atom {})
               :app app
               :handler handler})
        rootf (fn []
                (set! refresh-queued false)
                (let [path []]
                  (-render (map->UIComponent
                            {:root root
                             :reified (f (:state app) path)
                             :props {}
                             :children []}) root)
                  node))]
    (c/start root)
    (add-watch (:state app) ::root
               (fn [_ _ _ _]
                 (when-not refresh-queued
                   (set! refresh-queued true)
                   (if (exists? js/requestAnimationFrame)
                     (js/requestAnimationFrame rootf)
                     (js/setTimeout rootf 16)))))
    (rootf)))
