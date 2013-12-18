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

(defprotocol IComponent
  (-render [_]))

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

(defn focusable
  [component])

(defn clickable
  [component])

(defn key-target
  [component])

(defn mouse-target
  [component])

(defn resizable
  [component])

(defn scrollable
  [component])

(defn input
  [component])

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

(defrecord UIComponent [reified props children]
  Lifecycle
  (start [_]
    (cond-> reified
      (satisfies? IFocusable reified) focusable
      (satisfies? IClickable reified) clickable
      (satisfies? IKeyTarget reified) key-target
      (satisfies? IMouseTarget reified) mouse-target
      (satisfies? IResizeable reified) resizable
      (satisfies? IScrollable reified) scrollable
      (satisfies? IInput reified) input
      (satisfies? IInitState reified) init-state
      (satisfies? IShouldUpdate reified) should-update
      (satisfies? IWillMount reified) will-mount
      (satisfies? IDidMount reified) did-mount
      (satisfies? IWillUnmount reified) will-unmount
      (satisfies? IWillUpdate reified) will-update))
  (stop [_]))

(defrecord Renderer [input render dom components]
  Lifecycle
  (start [this]
    (c/start-system this components))
  (stop [this]
    (c/stop-system this components)))

(defn root
  [{:keys [input render] :as app}]
  (let []
    (map->Renderer
     {:state (atom (tm/tracking-map {}))
      :components (atom {})
      :input input
      :render render
      :app app})))
