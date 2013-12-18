// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events.EventHandler');
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
foundation.app.ui.IComponent = (function (){var obj21004 = {};return obj21004;
})();
foundation.app.ui._render = (function _render(_,parent){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IComponent$_render$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IComponent$_render$arity$2(_,parent);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._render[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._render["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComponent.-render",_);
}
}
})().call(null,_,parent);
}
});
foundation.app.ui.IDisposable = (function (){var obj21006 = {};return obj21006;
})();
foundation.app.ui._dispose = (function _dispose(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IDisposable$_dispose$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IDisposable$_dispose$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._dispose[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._dispose["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.-dispose",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IFocusable = (function (){var obj21008 = {};return obj21008;
})();
foundation.app.ui._focus = (function _focus(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IFocusable$_focus$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_focus$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._focus[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._focus["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-focus",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._blur = (function _blur(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IFocusable$_blur$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IFocusable$_blur$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._blur[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._blur["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFocusable.-blur",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IKeyTarget = (function (){var obj21010 = {};return obj21010;
})();
foundation.app.ui._keydown = (function _keydown(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IKeyTarget$_keydown$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IKeyTarget$_keydown$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._keydown[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._keydown["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTarget.-keydown",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._keyup = (function _keyup(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IKeyTarget$_keyup$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IKeyTarget$_keyup$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._keyup[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._keyup["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKeyTarget.-keyup",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IClickable = (function (){var obj21012 = {};return obj21012;
})();
foundation.app.ui._click = (function _click(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IClickable$_click$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IClickable$_click$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._click[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._click["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IClickable.-click",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IMouseTarget = (function (){var obj21014 = {};return obj21014;
})();
foundation.app.ui._mouseover = (function _mouseover(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseover$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._mouseover[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._mouseover["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseover",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseout = (function _mouseout(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseout$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._mouseout[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._mouseout["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseout",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mousedown = (function _mousedown(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mousedown$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._mousedown[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._mousedown["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mousedown",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._mouseup = (function _mouseup(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IMouseTarget$_mouseup$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._mouseup[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._mouseup["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMouseTarget.-mouseup",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IScrollable = (function (){var obj21016 = {};return obj21016;
})();
foundation.app.ui._scroll = (function _scroll(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IScrollable$_scroll$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IScrollable$_scroll$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._scroll[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._scroll["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IScrollable.-scroll",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui.IHideable = (function (){var obj21018 = {};return obj21018;
})();
foundation.app.ui._hide = (function _hide(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IHideable$_hide$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_hide$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._hide[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._hide["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-hide",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._show = (function _show(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IHideable$_show$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IHideable$_show$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._show[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._show["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHideable.-show",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.ISelect = (function (){var obj21020 = {};return obj21020;
})();
foundation.app.ui._set_selection = (function _set_selection(_,val){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$ISelect$_set_selection$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_set_selection$arity$2(_,val);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._set_selection[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._set_selection["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-set-selection",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui._select = (function _select(_,selection){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$ISelect$_select$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_select$arity$2(_,selection);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._select[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._select["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-select",_);
}
}
})().call(null,_,selection);
}
});
foundation.app.ui._selected = (function _selected(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$ISelect$_selected$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$ISelect$_selected$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._selected[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._selected["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelect.-selected",_);
}
}
})().call(null,_);
}
});
foundation.app.ui.IInput = (function (){var obj21022 = {};return obj21022;
})();
foundation.app.ui._input = (function _input(_,e){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IInput$_input$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IInput$_input$arity$2(_,e);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._input[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._input["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-input",_);
}
}
})().call(null,_,e);
}
});
foundation.app.ui._value = (function _value(_){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IInput$_value$arity$1;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IInput$_value$arity$1(_);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._value[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._value["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-value",_);
}
}
})().call(null,_);
}
});
foundation.app.ui._set_value = (function _set_value(_,val){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$ui$IInput$_set_value$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$ui$IInput$_set_value$arity$2(_,val);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.ui._set_value[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.ui._set_value["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInput.-set-value",_);
}
}
})().call(null,_,val);
}
});
foundation.app.ui.root = (function root(){return null;
});

//# sourceMappingURL=ui.js.map