// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('cljs.core.async');
goog.require('goog.events.EventHandler');
goog.require('goog.events.FocusHandler');
goog.require('foundation.app.data.component');
goog.require('goog.events.InputHandler');
goog.require('goog.events');
goog.require('goog.events.MouseWheelHandler');
goog.require('goog.dom');
goog.require('dommy.core');
goog.require('goog.dom');
goog.require('foundation.app.data.tracking_map');
goog.require('goog.events.KeyHandler');
goog.require('foundation.app.data.component');
goog.require('foundation.app.data.dependency');
goog.require('goog.events.ActionEvent');
goog.require('goog.ui.IdGenerator');
goog.require('cljs.core.async');
goog.require('foundation.app.data.tracking_map');
goog.require('goog.events');
goog.require('foundation.app.data.dependency');
goog.require('dommy.core');
foundation.app.ui.IComponent = (function (){var obj32219 = {};return obj32219;
})();
foundation.app.ui._render = (function _render(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IComponent$_render$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IComponent$_render$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._render[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._render["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComponent.-render",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IInitState = (function (){var obj32221 = {};return obj32221;
})();
foundation.app.ui._init_state = (function _init_state(_,owner){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IInitState$_init_state$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IInitState$_init_state$arity$2(_,owner);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._init_state[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._init_state["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.-init-state",_);
}
}
})().call(null,_,owner);
}
});
foundation.app.ui.IShouldUpdate = (function (){var obj32223 = {};return obj32223;
})();
foundation.app.ui._should_update = (function _should_update(_,owner,next_props,next_state){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IShouldUpdate$_should_update$arity$4;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IShouldUpdate$_should_update$arity$4(_,owner,next_props,next_state);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._should_update[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._should_update["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.-should-update",_);
}
}
})().call(null,_,owner,next_props,next_state);
}
});
foundation.app.ui.IWillMount = (function (){var obj32225 = {};return obj32225;
})();
foundation.app.ui._will_mount = (function _will_mount(_,owner){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IWillMount$_will_mount$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IWillMount$_will_mount$arity$2(_,owner);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._will_mount[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._will_mount["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.-will-mount",_);
}
}
})().call(null,_,owner);
}
});
foundation.app.ui.IDidMount = (function (){var obj32227 = {};return obj32227;
})();
foundation.app.ui._did_mount = (function _did_mount(_,owner,node){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IDidMount$_did_mount$arity$3;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IDidMount$_did_mount$arity$3(_,owner,node);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._did_mount[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._did_mount["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.-did-mount",_);
}
}
})().call(null,_,owner,node);
}
});
foundation.app.ui.IWillUnmount = (function (){var obj32229 = {};return obj32229;
})();
foundation.app.ui._will_unmount = (function _will_unmount(_,owner){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IWillUnmount$_will_unmount$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IWillUnmount$_will_unmount$arity$2(_,owner);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._will_unmount[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._will_unmount["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.-will-unmount",_);
}
}
})().call(null,_,owner);
}
});
foundation.app.ui.IWillUpdate = (function (){var obj32231 = {};return obj32231;
})();
foundation.app.ui._will_update = (function _will_update(_,owner,next_props,next_state){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IWillUpdate$_will_update$arity$4;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IWillUpdate$_will_update$arity$4(_,owner,next_props,next_state);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._will_update[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._will_update["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.-will-update",_);
}
}
})().call(null,_,owner,next_props,next_state);
}
});
foundation.app.ui.IDidUpdate = (function (){var obj32233 = {};return obj32233;
})();
foundation.app.ui._did_update = (function _did_update(_,owner,prev_props,prev_state,root_node){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IDidUpdate$_did_update$arity$5;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IDidUpdate$_did_update$arity$5(_,owner,prev_props,prev_state,root_node);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._did_update[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._did_update["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.-did-update",_);
}
}
})().call(null,_,owner,prev_props,prev_state,root_node);
}
});
foundation.app.ui.IRender = (function (){var obj32235 = {};return obj32235;
})();
foundation.app.ui._render = (function _render(_,owner){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IRender$_render$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IRender$_render$arity$2(_,owner);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._render[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._render["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.-render",_);
}
}
})().call(null,_,owner);
}
});
foundation.app.ui.IDisposable = (function (){var obj32237 = {};return obj32237;
})();
foundation.app.ui._dispose = (function _dispose(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IDisposable$_dispose$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IDisposable$_dispose$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._dispose[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._dispose["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.-dispose",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IFocusable = (function (){var obj32239 = {};return obj32239;
})();
foundation.app.ui._focus = (function _focus(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IFocusable$_focus$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_focus$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._focus[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._focus["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-focus",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._blur = (function _blur(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IFocusable$_blur$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_blur$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._blur[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._blur["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-blur",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IKeyTarget = (function (){var obj32241 = {};return obj32241;
})();
foundation.app.ui._keydown = (function _keydown(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IKeyTarget$_keydown$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IKeyTarget$_keydown$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._keydown[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._keydown["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTarget.-keydown",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._keyup = (function _keyup(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IKeyTarget$_keyup$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IKeyTarget$_keyup$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._keyup[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._keyup["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTarget.-keyup",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IResizeable = (function (){var obj32243 = {};return obj32243;
})();
foundation.app.ui._resize = (function _resize(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IResizeable$_resize$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IResizeable$_resize$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._resize[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._resize["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IResizeable.-resize",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IClickable = (function (){var obj32245 = {};return obj32245;
})();
foundation.app.ui._click = (function _click(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IClickable$_click$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IClickable$_click$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._click[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._click["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IClickable.-click",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IMouseTarget = (function (){var obj32247 = {};return obj32247;
})();
foundation.app.ui._mouseover = (function _mouseover(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._mouseover[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._mouseover["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseover",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseout = (function _mouseout(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._mouseout[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._mouseout["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseout",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mousedown = (function _mousedown(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._mousedown[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._mousedown["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mousedown",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseup = (function _mouseup(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._mouseup[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._mouseup["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseup",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IScrollable = (function (){var obj32249 = {};return obj32249;
})();
foundation.app.ui._scroll = (function _scroll(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IScrollable$_scroll$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IScrollable$_scroll$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._scroll[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._scroll["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IScrollable.-scroll",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IHideable = (function (){var obj32251 = {};return obj32251;
})();
foundation.app.ui._hide = (function _hide(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IHideable$_hide$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_hide$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._hide[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._hide["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-hide",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._show = (function _show(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IHideable$_show$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_show$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._show[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._show["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-show",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.ISelect = (function (){var obj32253 = {};return obj32253;
})();
foundation.app.ui._set_selection = (function _set_selection(_,val){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$ISelect$_set_selection$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_set_selection$arity$2(_,val);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._set_selection[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._set_selection["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-set-selection",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui._select = (function _select(_,selection){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$ISelect$_select$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_select$arity$2(_,selection);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-select",_);
}
}
})().call(null,_,selection);
}
});
foundation.app.ui._selected = (function _selected(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$ISelect$_selected$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_selected$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._selected[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._selected["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-selected",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IInput = (function (){var obj32255 = {};return obj32255;
})();
foundation.app.ui._input = (function _input(_,e){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IInput$_input$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IInput$_input$arity$2(_,e);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._input[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._input["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-input",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._value = (function _value(_){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IInput$_value$arity$1;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IInput$_value$arity$1(_);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._value[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._value["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-value",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._set_value = (function _set_value(_,val){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$ui$IInput$_set_value$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$ui$IInput$_set_value$arity$2(_,val);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.ui._set_value[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.ui._set_value["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-set-value",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui.focusable = (function focusable(component){return null;
});
foundation.app.ui.clickable = (function clickable(component){return null;
});
foundation.app.ui.key_target = (function key_target(component){return null;
});
foundation.app.ui.mouse_target = (function mouse_target(component){return null;
});
foundation.app.ui.resizable = (function resizable(component){return null;
});
foundation.app.ui.scrollable = (function scrollable(component){return null;
});
foundation.app.ui.input = (function input(component){return null;
});
foundation.app.ui.init_state = (function init_state(component){return null;
});
foundation.app.ui.should_update = (function should_update(component){return null;
});
foundation.app.ui.will_mount = (function will_mount(component){return null;
});
foundation.app.ui.did_mount = (function did_mount(component){return null;
});
foundation.app.ui.will_unmount = (function will_unmount(component){return null;
});
foundation.app.ui.will_update = (function will_update(component){return null;
});
foundation.app.ui.render = (function render(component){return null;
});

/**
* @constructor
* @param {*} reified
* @param {*} props
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.ui.UIComponent = (function (reified,props,children,__meta,__extmap){
this.reified = reified;
this.props = props;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.ui.UIComponent.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.ui.UIComponent.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__32259 = self__.reified;var G__32259__$1 = (((function (){var G__32260 = self__.reified;if(G__32260)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32260.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__32260.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__32260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__32260);
}
})())?foundation.app.ui.focusable.call(null,G__32259):G__32259);var G__32259__$2 = (((function (){var G__32261 = self__.reified;if(G__32261)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32261.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__32261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__32261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__32261);
}
})())?foundation.app.ui.clickable.call(null,G__32259__$1):G__32259__$1);var G__32259__$3 = (((function (){var G__32262 = self__.reified;if(G__32262)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32262.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__32262.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__32262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__32262);
}
})())?foundation.app.ui.key_target.call(null,G__32259__$2):G__32259__$2);var G__32259__$4 = (((function (){var G__32263 = self__.reified;if(G__32263)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32263.foundation$app$ui$IMouseTarget$;
}
})()))
{return true;
} else
{if((!G__32263.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IMouseTarget,G__32263);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IMouseTarget,G__32263);
}
})())?foundation.app.ui.mouse_target.call(null,G__32259__$3):G__32259__$3);var G__32259__$5 = (((function (){var G__32264 = self__.reified;if(G__32264)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32264.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__32264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__32264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__32264);
}
})())?foundation.app.ui.resizable.call(null,G__32259__$4):G__32259__$4);var G__32259__$6 = (((function (){var G__32265 = self__.reified;if(G__32265)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32265.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__32265.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__32265);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__32265);
}
})())?foundation.app.ui.scrollable.call(null,G__32259__$5):G__32259__$5);var G__32259__$7 = (((function (){var G__32266 = self__.reified;if(G__32266)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32266.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__32266.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__32266);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__32266);
}
})())?foundation.app.ui.input.call(null,G__32259__$6):G__32259__$6);var G__32259__$8 = (((function (){var G__32267 = self__.reified;if(G__32267)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32267.foundation$app$ui$IInitState$;
}
})()))
{return true;
} else
{if((!G__32267.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInitState,G__32267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInitState,G__32267);
}
})())?foundation.app.ui.init_state.call(null,G__32259__$7):G__32259__$7);var G__32259__$9 = (((function (){var G__32268 = self__.reified;if(G__32268)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32268.foundation$app$ui$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__32268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IShouldUpdate,G__32268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IShouldUpdate,G__32268);
}
})())?foundation.app.ui.should_update.call(null,G__32259__$8):G__32259__$8);var G__32259__$10 = (((function (){var G__32269 = self__.reified;if(G__32269)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32269.foundation$app$ui$IWillMount$;
}
})()))
{return true;
} else
{if((!G__32269.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillMount,G__32269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillMount,G__32269);
}
})())?foundation.app.ui.will_mount.call(null,G__32259__$9):G__32259__$9);var G__32259__$11 = (((function (){var G__32270 = self__.reified;if(G__32270)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32270.foundation$app$ui$IDidMount$;
}
})()))
{return true;
} else
{if((!G__32270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IDidMount,G__32270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IDidMount,G__32270);
}
})())?foundation.app.ui.did_mount.call(null,G__32259__$10):G__32259__$10);var G__32259__$12 = (((function (){var G__32271 = self__.reified;if(G__32271)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32271.foundation$app$ui$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__32271.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUnmount,G__32271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUnmount,G__32271);
}
})())?foundation.app.ui.will_unmount.call(null,G__32259__$11):G__32259__$11);var G__32259__$13 = (((function (){var G__32272 = self__.reified;if(G__32272)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__32272.foundation$app$ui$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__32272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUpdate,G__32272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUpdate,G__32272);
}
})())?foundation.app.ui.will_update.call(null,G__32259__$12):G__32259__$12);return G__32259__$13;
});
foundation.app.ui.UIComponent.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8790__auto__){var self__ = this;
var this__8790__auto____$1 = this;var h__8644__auto__ = self__.__hash;if(!((h__8644__auto__ == null)))
{return h__8644__auto__;
} else
{var h__8644__auto____$1 = cljs.core.hash_imap.call(null,this__8790__auto____$1);self__.__hash = h__8644__auto____$1;
return h__8644__auto____$1;
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8795__auto__,k__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;return cljs.core._lookup.call(null,this__8795__auto____$1,k__8796__auto__,null);
});
foundation.app.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k32257,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k32257,new cljs.core.Keyword(null,"reified","reified",2101765546)))
{return self__.reified;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32257,new cljs.core.Keyword(null,"props","props",1120845026)))
{return self__.props;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32257,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32257,else__8798__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__32256){var self__ = this;
var this__8802__auto____$1 = this;var pred__32273 = cljs.core.keyword_identical_QMARK_;var expr__32274 = k__8803__auto__;if(cljs.core.truth_(pred__32273.call(null,new cljs.core.Keyword(null,"reified","reified",2101765546),expr__32274)))
{return (new foundation.app.ui.UIComponent(G__32256,self__.props,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32273.call(null,new cljs.core.Keyword(null,"props","props",1120845026),expr__32274)))
{return (new foundation.app.ui.UIComponent(self__.reified,G__32256,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32273.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__32274)))
{return (new foundation.app.ui.UIComponent(self__.reified,self__.props,G__32256,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.ui.UIComponent(self__.reified,self__.props,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__32256),null));
}
}
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.ui.UIComponent{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reified","reified",2101765546),self__.reified],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",1120845026),self__.props],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
foundation.app.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reified","reified",2101765546),self__.reified],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",1120845026),self__.props],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
foundation.app.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8791__auto__,other__8792__auto__){var self__ = this;
var this__8791__auto____$1 = this;if(cljs.core.truth_((function (){var and__8216__auto__ = other__8792__auto__;if(cljs.core.truth_(and__8216__auto__))
{return ((this__8791__auto____$1.constructor === other__8792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8791__auto____$1,other__8792__auto__));
} else
{return and__8216__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__32256){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.ui.UIComponent(self__.reified,self__.props,self__.children,G__32256,self__.__extmap,self__.__hash));
});
foundation.app.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"reified","reified",2101765546),null,new cljs.core.Keyword(null,"props","props",1120845026),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.ui.UIComponent(self__.reified,self__.props,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.ui.UIComponent.cljs$lang$type = true;
foundation.app.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.ui/UIComponent");
});
foundation.app.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.ui/UIComponent");
});
foundation.app.ui.__GT_UIComponent = (function __GT_UIComponent(reified,props,children){return (new foundation.app.ui.UIComponent(reified,props,children));
});
foundation.app.ui.map__GT_UIComponent = (function map__GT_UIComponent(G__32258){return (new foundation.app.ui.UIComponent(new cljs.core.Keyword(null,"reified","reified",2101765546).cljs$core$IFn$_invoke$arity$1(G__32258),new cljs.core.Keyword(null,"props","props",1120845026).cljs$core$IFn$_invoke$arity$1(G__32258),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__32258),null,cljs.core.dissoc.call(null,G__32258,new cljs.core.Keyword(null,"reified","reified",2101765546),new cljs.core.Keyword(null,"props","props",1120845026),new cljs.core.Keyword(null,"children","children",2673430897))));
});

/**
* @constructor
* @param {*} input
* @param {*} render
* @param {*} dom
* @param {*} components
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.ui.Renderer = (function (input,render,dom,components,__meta,__extmap){
this.input = input;
this.render = render;
this.dom = dom;
this.components = components;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.ui.Renderer.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.ui.Renderer.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.data.component.start_system.call(null,this$__$1,self__.components);
});
foundation.app.ui.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.data.component.stop_system.call(null,this$__$1,self__.components);
});
foundation.app.ui.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8790__auto__){var self__ = this;
var this__8790__auto____$1 = this;var h__8644__auto__ = self__.__hash;if(!((h__8644__auto__ == null)))
{return h__8644__auto__;
} else
{var h__8644__auto____$1 = cljs.core.hash_imap.call(null,this__8790__auto____$1);self__.__hash = h__8644__auto____$1;
return h__8644__auto____$1;
}
});
foundation.app.ui.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8795__auto__,k__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;return cljs.core._lookup.call(null,this__8795__auto____$1,k__8796__auto__,null);
});
foundation.app.ui.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k32277,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k32277,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32277,new cljs.core.Keyword(null,"render","render",4374279432)))
{return self__.render;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32277,new cljs.core.Keyword(null,"dom","dom",1014003892)))
{return self__.dom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32277,new cljs.core.Keyword(null,"components","components",566457992)))
{return self__.components;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32277,else__8798__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.ui.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__32276){var self__ = this;
var this__8802__auto____$1 = this;var pred__32279 = cljs.core.keyword_identical_QMARK_;var expr__32280 = k__8803__auto__;if(cljs.core.truth_(pred__32279.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__32280)))
{return (new foundation.app.ui.Renderer(G__32276,self__.render,self__.dom,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32279.call(null,new cljs.core.Keyword(null,"render","render",4374279432),expr__32280)))
{return (new foundation.app.ui.Renderer(self__.input,G__32276,self__.dom,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32279.call(null,new cljs.core.Keyword(null,"dom","dom",1014003892),expr__32280)))
{return (new foundation.app.ui.Renderer(self__.input,self__.render,G__32276,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32279.call(null,new cljs.core.Keyword(null,"components","components",566457992),expr__32280)))
{return (new foundation.app.ui.Renderer(self__.input,self__.render,self__.dom,G__32276,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.ui.Renderer(self__.input,self__.render,self__.dom,self__.components,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__32276),null));
}
}
}
}
});
foundation.app.ui.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.ui.Renderer{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",4374279432),self__.render],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",1014003892),self__.dom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",566457992),self__.components],null))], null),self__.__extmap));
});
foundation.app.ui.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.ui.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",4374279432),self__.render],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",1014003892),self__.dom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",566457992),self__.components],null))], null),self__.__extmap));
});
foundation.app.ui.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.ui.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8791__auto__,other__8792__auto__){var self__ = this;
var this__8791__auto____$1 = this;if(cljs.core.truth_((function (){var and__8216__auto__ = other__8792__auto__;if(cljs.core.truth_(and__8216__auto__))
{return ((this__8791__auto____$1.constructor === other__8792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8791__auto____$1,other__8792__auto__));
} else
{return and__8216__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.ui.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__32276){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.ui.Renderer(self__.input,self__.render,self__.dom,self__.components,G__32276,self__.__extmap,self__.__hash));
});
foundation.app.ui.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.ui.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",566457992),null,new cljs.core.Keyword(null,"render","render",4374279432),null,new cljs.core.Keyword(null,"dom","dom",1014003892),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.ui.Renderer(self__.input,self__.render,self__.dom,self__.components,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.ui.Renderer.cljs$lang$type = true;
foundation.app.ui.Renderer.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.ui/Renderer");
});
foundation.app.ui.Renderer.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.ui/Renderer");
});
foundation.app.ui.__GT_Renderer = (function __GT_Renderer(input,render,dom,components){return (new foundation.app.ui.Renderer(input,render,dom,components));
});
foundation.app.ui.map__GT_Renderer = (function map__GT_Renderer(G__32278){return (new foundation.app.ui.Renderer(new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__32278),new cljs.core.Keyword(null,"render","render",4374279432).cljs$core$IFn$_invoke$arity$1(G__32278),new cljs.core.Keyword(null,"dom","dom",1014003892).cljs$core$IFn$_invoke$arity$1(G__32278),new cljs.core.Keyword(null,"components","components",566457992).cljs$core$IFn$_invoke$arity$1(G__32278),null,cljs.core.dissoc.call(null,G__32278,new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"dom","dom",1014003892),new cljs.core.Keyword(null,"components","components",566457992))));
});
foundation.app.ui.root = (function root(p__32282){var map__32284 = p__32282;var map__32284__$1 = ((cljs.core.seq_QMARK_.call(null,map__32284))?cljs.core.apply.call(null,cljs.core.hash_map,map__32284):map__32284);var app = map__32284__$1;var render = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"render","render",4374279432));var input = cljs.core.get.call(null,map__32284__$1,new cljs.core.Keyword(null,"input","input",1114262332));return foundation.app.ui.map__GT_Renderer.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,foundation.app.data.tracking_map.tracking_map.call(null,cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"components","components",566457992),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"render","render",4374279432),render,new cljs.core.Keyword(null,"app","app",1014001043),app], null));
});

//# sourceMappingURL=ui.js.map