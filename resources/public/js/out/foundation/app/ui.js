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
foundation.app.ui.IInitState = (function (){var obj33631 = {};return obj33631;
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
foundation.app.ui.IShouldUpdate = (function (){var obj33633 = {};return obj33633;
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
foundation.app.ui.IWillMount = (function (){var obj33635 = {};return obj33635;
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
foundation.app.ui.IDidMount = (function (){var obj33637 = {};return obj33637;
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
foundation.app.ui.IWillUnmount = (function (){var obj33639 = {};return obj33639;
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
foundation.app.ui.IWillUpdate = (function (){var obj33641 = {};return obj33641;
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
foundation.app.ui.IDidUpdate = (function (){var obj33643 = {};return obj33643;
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
foundation.app.ui.IRender = (function (){var obj33645 = {};return obj33645;
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
foundation.app.ui.IDisposable = (function (){var obj33647 = {};return obj33647;
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
foundation.app.ui.IFocusable = (function (){var obj33649 = {};return obj33649;
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
foundation.app.ui.IKeyTarget = (function (){var obj33651 = {};return obj33651;
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
foundation.app.ui.IResizeable = (function (){var obj33653 = {};return obj33653;
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
foundation.app.ui.IClickable = (function (){var obj33655 = {};return obj33655;
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
foundation.app.ui.IMouseTarget = (function (){var obj33657 = {};return obj33657;
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
foundation.app.ui.IScrollable = (function (){var obj33659 = {};return obj33659;
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
foundation.app.ui.IHideable = (function (){var obj33661 = {};return obj33661;
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
foundation.app.ui.ISelect = (function (){var obj33663 = {};return obj33663;
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
foundation.app.ui.IInput = (function (){var obj33665 = {};return obj33665;
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
foundation.app.ui.focusable = (function focusable(component,root){return null;
});
foundation.app.ui.clickable = (function clickable(component,root){return null;
});
foundation.app.ui.key_target = (function key_target(component,root){return null;
});
foundation.app.ui.mouse_target = (function mouse_target(component,root){return null;
});
foundation.app.ui.resizable = (function resizable(component,root){return null;
});
foundation.app.ui.scrollable = (function scrollable(component,root){return null;
});
foundation.app.ui.input = (function input(component,root){return null;
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
* @param {*} root
* @param {*} reified
* @param {*} props
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.ui.UIComponent = (function (root,reified,props,children,__meta,__extmap){
this.root = root;
this.reified = reified;
this.props = props;
this.children = children;
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
foundation.app.ui.UIComponent.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.ui.UIComponent.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__33669 = self__.reified;var G__33669__$1 = (((function (){var G__33670 = self__.reified;if(G__33670)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33670.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__33670.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__33670);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__33670);
}
})())?foundation.app.ui.focusable.call(null,G__33669,self__.root):G__33669);var G__33669__$2 = (((function (){var G__33671 = self__.reified;if(G__33671)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33671.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__33671.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__33671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__33671);
}
})())?foundation.app.ui.clickable.call(null,G__33669__$1,self__.root):G__33669__$1);var G__33669__$3 = (((function (){var G__33672 = self__.reified;if(G__33672)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33672.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__33672.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__33672);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__33672);
}
})())?foundation.app.ui.key_target.call(null,G__33669__$2,self__.root):G__33669__$2);var G__33669__$4 = (((function (){var G__33673 = self__.reified;if(G__33673)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33673.foundation$app$ui$IMouseTarget$;
}
})()))
{return true;
} else
{if((!G__33673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IMouseTarget,G__33673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IMouseTarget,G__33673);
}
})())?foundation.app.ui.mouse_target.call(null,G__33669__$3,self__.root):G__33669__$3);var G__33669__$5 = (((function (){var G__33674 = self__.reified;if(G__33674)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33674.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__33674.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__33674);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__33674);
}
})())?foundation.app.ui.resizable.call(null,G__33669__$4,self__.root):G__33669__$4);var G__33669__$6 = (((function (){var G__33675 = self__.reified;if(G__33675)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33675.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__33675.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__33675);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__33675);
}
})())?foundation.app.ui.scrollable.call(null,G__33669__$5,self__.root):G__33669__$5);var G__33669__$7 = (((function (){var G__33676 = self__.reified;if(G__33676)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33676.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__33676.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__33676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__33676);
}
})())?foundation.app.ui.input.call(null,G__33669__$6,self__.root):G__33669__$6);var G__33669__$8 = (((function (){var G__33677 = self__.reified;if(G__33677)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33677.foundation$app$ui$IInitState$;
}
})()))
{return true;
} else
{if((!G__33677.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInitState,G__33677);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInitState,G__33677);
}
})())?foundation.app.ui.init_state.call(null,G__33669__$7):G__33669__$7);var G__33669__$9 = (((function (){var G__33678 = self__.reified;if(G__33678)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33678.foundation$app$ui$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__33678.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IShouldUpdate,G__33678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IShouldUpdate,G__33678);
}
})())?foundation.app.ui.should_update.call(null,G__33669__$8):G__33669__$8);var G__33669__$10 = (((function (){var G__33679 = self__.reified;if(G__33679)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33679.foundation$app$ui$IWillMount$;
}
})()))
{return true;
} else
{if((!G__33679.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillMount,G__33679);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillMount,G__33679);
}
})())?foundation.app.ui.will_mount.call(null,G__33669__$9):G__33669__$9);var G__33669__$11 = (((function (){var G__33680 = self__.reified;if(G__33680)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33680.foundation$app$ui$IDidMount$;
}
})()))
{return true;
} else
{if((!G__33680.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IDidMount,G__33680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IDidMount,G__33680);
}
})())?foundation.app.ui.did_mount.call(null,G__33669__$10):G__33669__$10);var G__33669__$12 = (((function (){var G__33681 = self__.reified;if(G__33681)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33681.foundation$app$ui$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__33681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUnmount,G__33681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUnmount,G__33681);
}
})())?foundation.app.ui.will_unmount.call(null,G__33669__$11):G__33669__$11);var G__33669__$13 = (((function (){var G__33682 = self__.reified;if(G__33682)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__33682.foundation$app$ui$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__33682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUpdate,G__33682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWillUpdate,G__33682);
}
})())?foundation.app.ui.will_update.call(null,G__33669__$12):G__33669__$12);return G__33669__$13;
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
foundation.app.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k33667,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k33667,new cljs.core.Keyword(null,"root","root",1017410644)))
{return self__.root;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33667,new cljs.core.Keyword(null,"reified","reified",2101765546)))
{return self__.reified;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33667,new cljs.core.Keyword(null,"props","props",1120845026)))
{return self__.props;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33667,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k33667,else__8798__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__33666){var self__ = this;
var this__8802__auto____$1 = this;var pred__33683 = cljs.core.keyword_identical_QMARK_;var expr__33684 = k__8803__auto__;if(cljs.core.truth_(pred__33683.call(null,new cljs.core.Keyword(null,"root","root",1017410644),expr__33684)))
{return (new foundation.app.ui.UIComponent(G__33666,self__.reified,self__.props,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33683.call(null,new cljs.core.Keyword(null,"reified","reified",2101765546),expr__33684)))
{return (new foundation.app.ui.UIComponent(self__.root,G__33666,self__.props,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33683.call(null,new cljs.core.Keyword(null,"props","props",1120845026),expr__33684)))
{return (new foundation.app.ui.UIComponent(self__.root,self__.reified,G__33666,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33683.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__33684)))
{return (new foundation.app.ui.UIComponent(self__.root,self__.reified,self__.props,G__33666,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.ui.UIComponent(self__.root,self__.reified,self__.props,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__33666),null));
}
}
}
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.ui.UIComponent{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",1017410644),self__.root],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reified","reified",2101765546),self__.reified],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",1120845026),self__.props],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
foundation.app.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",1017410644),self__.root],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reified","reified",2101765546),self__.reified],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"props","props",1120845026),self__.props],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
foundation.app.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
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
foundation.app.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__33666){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.ui.UIComponent(self__.root,self__.reified,self__.props,self__.children,G__33666,self__.__extmap,self__.__hash));
});
foundation.app.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"root","root",1017410644),null,new cljs.core.Keyword(null,"reified","reified",2101765546),null,new cljs.core.Keyword(null,"props","props",1120845026),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.ui.UIComponent(self__.root,self__.reified,self__.props,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.ui.UIComponent.cljs$lang$type = true;
foundation.app.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.ui/UIComponent");
});
foundation.app.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.ui/UIComponent");
});
foundation.app.ui.__GT_UIComponent = (function __GT_UIComponent(root,reified,props,children){return (new foundation.app.ui.UIComponent(root,reified,props,children));
});
foundation.app.ui.map__GT_UIComponent = (function map__GT_UIComponent(G__33668){return (new foundation.app.ui.UIComponent(new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(G__33668),new cljs.core.Keyword(null,"reified","reified",2101765546).cljs$core$IFn$_invoke$arity$1(G__33668),new cljs.core.Keyword(null,"props","props",1120845026).cljs$core$IFn$_invoke$arity$1(G__33668),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__33668),null,cljs.core.dissoc.call(null,G__33668,new cljs.core.Keyword(null,"root","root",1017410644),new cljs.core.Keyword(null,"reified","reified",2101765546),new cljs.core.Keyword(null,"props","props",1120845026),new cljs.core.Keyword(null,"children","children",2673430897))));
});

/**
* @constructor
* @param {*} handler
* @param {*} app
* @param {*} dom
* @param {*} components
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.ui.Renderer = (function (handler,app,dom,components,__meta,__extmap){
this.handler = handler;
this.app = app;
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
foundation.app.ui.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k33687,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k33687,new cljs.core.Keyword(null,"handler","handler",1706707644)))
{return self__.handler;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33687,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33687,new cljs.core.Keyword(null,"dom","dom",1014003892)))
{return self__.dom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k33687,new cljs.core.Keyword(null,"components","components",566457992)))
{return self__.components;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k33687,else__8798__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.ui.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__33686){var self__ = this;
var this__8802__auto____$1 = this;var pred__33689 = cljs.core.keyword_identical_QMARK_;var expr__33690 = k__8803__auto__;if(cljs.core.truth_(pred__33689.call(null,new cljs.core.Keyword(null,"handler","handler",1706707644),expr__33690)))
{return (new foundation.app.ui.Renderer(G__33686,self__.app,self__.dom,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33689.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__33690)))
{return (new foundation.app.ui.Renderer(self__.handler,G__33686,self__.dom,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33689.call(null,new cljs.core.Keyword(null,"dom","dom",1014003892),expr__33690)))
{return (new foundation.app.ui.Renderer(self__.handler,self__.app,G__33686,self__.components,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__33689.call(null,new cljs.core.Keyword(null,"components","components",566457992),expr__33690)))
{return (new foundation.app.ui.Renderer(self__.handler,self__.app,self__.dom,G__33686,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.ui.Renderer(self__.handler,self__.app,self__.dom,self__.components,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__33686),null));
}
}
}
}
});
foundation.app.ui.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.ui.Renderer{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",1706707644),self__.handler],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",1014003892),self__.dom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",566457992),self__.components],null))], null),self__.__extmap));
});
foundation.app.ui.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.ui.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",1706707644),self__.handler],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",1014003892),self__.dom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",566457992),self__.components],null))], null),self__.__extmap));
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
foundation.app.ui.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__33686){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.ui.Renderer(self__.handler,self__.app,self__.dom,self__.components,G__33686,self__.__extmap,self__.__hash));
});
foundation.app.ui.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.ui.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",566457992),null,new cljs.core.Keyword(null,"dom","dom",1014003892),null,new cljs.core.Keyword(null,"app","app",1014001043),null,new cljs.core.Keyword(null,"handler","handler",1706707644),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.ui.Renderer(self__.handler,self__.app,self__.dom,self__.components,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.ui.Renderer.cljs$lang$type = true;
foundation.app.ui.Renderer.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.ui/Renderer");
});
foundation.app.ui.Renderer.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.ui/Renderer");
});
foundation.app.ui.__GT_Renderer = (function __GT_Renderer(handler,app,dom,components){return (new foundation.app.ui.Renderer(handler,app,dom,components));
});
foundation.app.ui.map__GT_Renderer = (function map__GT_Renderer(G__33688){return (new foundation.app.ui.Renderer(new cljs.core.Keyword(null,"handler","handler",1706707644).cljs$core$IFn$_invoke$arity$1(G__33688),new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__33688),new cljs.core.Keyword(null,"dom","dom",1014003892).cljs$core$IFn$_invoke$arity$1(G__33688),new cljs.core.Keyword(null,"components","components",566457992).cljs$core$IFn$_invoke$arity$1(G__33688),null,cljs.core.dissoc.call(null,G__33688,new cljs.core.Keyword(null,"handler","handler",1706707644),new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.Keyword(null,"dom","dom",1014003892),new cljs.core.Keyword(null,"components","components",566457992))));
});
foundation.app.ui.refresh_queued = false;
foundation.app.ui.root = (function root(app,f,node){var handler = (new goog.events.EventHandler());var root__$1 = foundation.app.ui.map__GT_Renderer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,foundation.app.data.tracking_map.tracking_map.call(null,cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"components","components",566457992),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));var rootf = ((function (handler,root__$1){
return (function (){foundation.app.ui.refresh_queued = false;
var path = cljs.core.PersistentVector.EMPTY;foundation.app.ui._render.call(null,foundation.app.ui.map__GT_UIComponent.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"root","root",1017410644),root__$1,new cljs.core.Keyword(null,"reified","reified",2101765546),f.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(app),path),new cljs.core.Keyword(null,"props","props",1120845026),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null)),root__$1);
return node;
});})(handler,root__$1))
;foundation.app.data.component.start.call(null,root__$1);
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword("foundation.app.ui","root","foundation.app.ui/root",3151026999),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(foundation.app.ui.refresh_queued))
{return null;
} else
{foundation.app.ui.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(rootf);
} else
{return setTimeout(rootf,16);
}
}
}));
return rootf.call(null);
});

//# sourceMappingURL=ui.js.map