// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events.EventHandler');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events.FocusHandler');
goog.require('goog.events.InputHandler');
goog.require('goog.events');
goog.require('goog.events.MouseWheelHandler');
goog.require('goog.dom');
goog.require('dommy.core');
goog.require('goog.dom');
goog.require('goog.events.KeyHandler');
goog.require('goog.events.ActionEvent');
goog.require('goog.ui.IdGenerator');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('dommy.core');
foundation.app.ui.IComponent = (function (){var obj26370 = {};return obj26370;
})();
foundation.app.ui._render = (function _render(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IComponent$_render$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IComponent$_render$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._render[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._render["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComponent.-render",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._update = (function _update(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IComponent$_update$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IComponent$_update$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._update[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._update["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComponent.-update",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IDisposable = (function (){var obj26372 = {};return obj26372;
})();
foundation.app.ui._dispose = (function _dispose(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IDisposable$_dispose$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IDisposable$_dispose$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._dispose[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._dispose["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.-dispose",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IFocusable = (function (){var obj26374 = {};return obj26374;
})();
foundation.app.ui._focus = (function _focus(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IFocusable$_focus$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_focus$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._focus[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._focus["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-focus",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._blur = (function _blur(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IFocusable$_blur$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_blur$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._blur[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._blur["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-blur",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IKeyTarget = (function (){var obj26376 = {};return obj26376;
})();
foundation.app.ui._key = (function _key(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IKeyTarget$_key$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IKeyTarget$_key$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._key[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._key["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTarget.-key",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IClickable = (function (){var obj26378 = {};return obj26378;
})();
foundation.app.ui._click = (function _click(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IClickable$_click$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IClickable$_click$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._click[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._click["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IClickable.-click",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IMouseTarget = (function (){var obj26380 = {};return obj26380;
})();
foundation.app.ui._mouseover = (function _mouseover(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._mouseover[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._mouseover["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseover",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseout = (function _mouseout(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._mouseout[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._mouseout["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseout",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mousedown = (function _mousedown(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._mousedown[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._mousedown["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mousedown",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseup = (function _mouseup(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._mouseup[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._mouseup["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseup",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IScrollable = (function (){var obj26382 = {};return obj26382;
})();
foundation.app.ui._scroll = (function _scroll(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IScrollable$_scroll$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IScrollable$_scroll$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._scroll[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._scroll["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IScrollable.-scroll",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IHideable = (function (){var obj26384 = {};return obj26384;
})();
foundation.app.ui._hide = (function _hide(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IHideable$_hide$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_hide$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._hide[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._hide["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-hide",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._show = (function _show(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IHideable$_show$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_show$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._show[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._show["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-show",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.ISelect = (function (){var obj26386 = {};return obj26386;
})();
foundation.app.ui._set_selection = (function _set_selection(_,val){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$ISelect$_set_selection$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_set_selection$arity$2(_,val);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._set_selection[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._set_selection["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-set-selection",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui._select = (function _select(_,selection){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$ISelect$_select$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_select$arity$2(_,selection);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._select[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._select["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-select",_);
}
}
})().call(null,_,selection);
}
});
foundation.app.ui._selected = (function _selected(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$ISelect$_selected$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_selected$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._selected[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._selected["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-selected",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IInput = (function (){var obj26388 = {};return obj26388;
})();
foundation.app.ui._input = (function _input(_,e){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IInput$_input$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IInput$_input$arity$2(_,e);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._input[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._input["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-input",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._value = (function _value(_){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IInput$_value$arity$1;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IInput$_value$arity$1(_);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._value[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._value["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-value",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._set_value = (function _set_value(_,val){if((function (){var and__7831__auto__ = _;if(and__7831__auto__)
{return _.foundation$app$ui$IInput$_set_value$arity$2;
} else
{return and__7831__auto__;
}
})())
{return _.foundation$app$ui$IInput$_set_value$arity$2(_,val);
} else
{var x__8446__auto__ = (((_ == null))?null:_);return (function (){var or__7843__auto__ = (foundation.app.ui._set_value[goog.typeOf(x__8446__auto__)]);if(or__7843__auto__)
{return or__7843__auto__;
} else
{var or__7843__auto____$1 = (foundation.app.ui._set_value["_"]);if(or__7843__auto____$1)
{return or__7843__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-set-value",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.ui.render = (function render(component){return foundation.app.ui._render.call(null,component);
});
foundation.app.ui.component = (function component(component__$1){var id = foundation.app.ui.guid.call(null);return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"handler","handler",1706707644),(new goog.events.EventHandler(component__$1)));
});

//# sourceMappingURL=ui.js.map