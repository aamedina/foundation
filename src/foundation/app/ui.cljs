(ns foundation.app.ui)

(defprotocol IRender
  (-render [_]))

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

(defprotocol IBeforeClick
  (-before-click [_ e]))

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

(defprotocol IOnline
  (-online [_ e])
  (-offline [_ e]))

(defprotocol IParentNode
  (-parent-node [_]))

(defprotocol IWithChildren
  (-with-children [_]))

(defprotocol IFileDrop
  (-drop [_ e]))

(defprotocol IPostProcess
  (-post-process [_]))
