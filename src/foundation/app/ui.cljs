(ns foundation.app.ui
  (:refer-clojure :exclude [-key -val])
  (:require [goog.events :as gevents]
            [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! take! put! >! chan close!]]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [dommy.macros :refer [node]])
  (:import [goog.ui IdGenerator]
           [goog.events EventHandler InputHandler FocusHandler KeyHandler
                        MouseWheelHandler ActionEvent]
           [goog.dom ViewportSizeMonitor]))

(defprotocol IComponent
  (-render [_])
  (-update [_]))

(defprotocol IDisposable
  (-dispose [_]))

(defprotocol IFocusable
  (-focus [_ e])
  (-blur [_ e]))

(defprotocol IKeyTarget
  (-key [_ e]))

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

(defn render
  [component]
  (-render component))

(defn component
  [component]
  (let [id (guid)]
    (assoc component
      :id id
      :handler (EventHandler. component))))
