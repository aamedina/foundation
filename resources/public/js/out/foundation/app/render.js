// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('goog.events.KeyEvent');
goog.require('cljs.core.async');
goog.require('goog.events.EventHandler');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events.FocusHandler');
goog.require('foundation.app.data.component');
goog.require('goog.events.InputHandler');
goog.require('goog.events.MouseWheelHandler');
goog.require('goog.events.ActionHandler');
goog.require('dommy.core');
goog.require('goog.events.KeyHandler');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('goog.events.MouseWheelEvent');
goog.require('foundation.app.data.dependency');
goog.require('goog.events.ActionEvent');
goog.require('goog.ui.IdGenerator');
goog.require('goog.events');
goog.require('goog.events.OnlineHandler');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('goog.events');
goog.require('foundation.app.data.dependency');
goog.require('dommy.core');
goog.require('goog.events.FileDropHandler');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__57626,pid,id){var vec__57627 = p__57626;var op = cljs.core.nth.call(null,vec__57627,0,null);var path = cljs.core.nth.call(null,vec__57627,1,null);var _ = cljs.core.nth.call(null,vec__57627,2,null);var ___$1 = cljs.core.nth.call(null,vec__57627,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj57629 = {};return obj57629;
})();
foundation.app.render._find_dispatches = (function _find_dispatches(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_find_dispatches$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_find_dispatches$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._find_dispatches[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._find_dispatches["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-find-dispatches",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_action = (function _dispatch_action(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_action$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_action$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_action[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_action["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-action",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_key = (function _dispatch_key(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_key$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_key$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_key[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_key["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-key",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_focus = (function _dispatch_focus(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_focus$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_focus$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_focus[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_focus["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-focus",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_scroll = (function _dispatch_scroll(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_scroll$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_scroll$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_scroll[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_scroll["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-scroll",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_drop = (function _dispatch_drop(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_drop$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_drop$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_drop[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_drop["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-drop",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_online = (function _dispatch_online(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_online$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_online$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_online[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_online["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-online",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render._dispatch_resize = (function _dispatch_resize(_,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_dispatch_resize$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_dispatch_resize$arity$2(_,e);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._dispatch_resize[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._dispatch_resize["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEventDelegate.-dispatch-resize",_);
}
}
})().call(null,_,e);
}
});
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__57630_SHARP_){return cljs.core.not.call(null,p1__57630_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__57632 = (new goog.events.EventHandler(renderer));G__57632.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__57632.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__57632,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__57632;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__57633_SHARP_){return cljs.core.get.call(null,n,p1__57633_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__57638 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__57639 = null;var count__57640 = 0;var i__57641 = 0;while(true){
if((i__57641 < count__57640))
{var f = cljs.core._nth.call(null,chunk__57639,i__57641);f.call(null);
{
var G__57642 = seq__57638;
var G__57643 = chunk__57639;
var G__57644 = count__57640;
var G__57645 = (i__57641 + 1);
seq__57638 = G__57642;
chunk__57639 = G__57643;
count__57640 = G__57644;
i__57641 = G__57645;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__57638);if(temp__4092__auto__)
{var seq__57638__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57638__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__57638__$1);{
var G__57646 = cljs.core.chunk_rest.call(null,seq__57638__$1);
var G__57647 = c__8952__auto__;
var G__57648 = cljs.core.count.call(null,c__8952__auto__);
var G__57649 = 0;
seq__57638 = G__57646;
chunk__57639 = G__57647;
count__57640 = G__57648;
i__57641 = G__57649;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__57638__$1);f.call(null);
{
var G__57650 = cljs.core.next.call(null,seq__57638__$1);
var G__57651 = null;
var G__57652 = 0;
var G__57653 = 0;
seq__57638 = G__57650;
chunk__57639 = G__57651;
count__57640 = G__57652;
i__57641 = G__57653;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.app.render.refresh_queued = false;
foundation.app.render.IRender = (function (){var obj57655 = {};return obj57655;
})();
foundation.app.render._render = (function _render(_){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRender$_render$arity$1;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRender$_render$arity$1(_);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._render[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._render["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.-render",_);
}
}
})().call(null,_);
}
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (_){return null;
}));
(foundation.app.render.IRender["null"] = true);
(foundation.app.render._render["null"] = (function (_){return null;
}));
foundation.app.render.IRenderer = (function (){var obj57657 = {};return obj57657;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path,id);
}
});
_new_id = function(_,path,id){
switch(arguments.length){
case 2:
return _new_id__2.call(this,_,path);
case 3:
return _new_id__3.call(this,_,path,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_new_id.cljs$core$IFn$_invoke$arity$2 = _new_id__2;
_new_id.cljs$core$IFn$_invoke$arity$3 = _new_id__3;
return _new_id;
})()
;
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-drop-data",_);
}
}
})().call(null,_,path);
}
});

/**
* @constructor
* @param {*} env
* @param {*} deps
* @param {*} render_fn
* @param {*} handlers
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (env,deps,render_fn,handlers,__meta,__extmap){
this.env = env;
this.deps = deps;
this.render_fn = render_fn;
this.handlers = handlers;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$ = true;
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_find_dispatches$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"action!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_key$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"key!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_focus$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"focus!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_scroll$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"scroll!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_drop$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"drop!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_online$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"online!");
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_resize$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;return cljs.core.println.call(null,"resize!");
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var handlers__$1 = cljs.core.reset_BANG_.call(null,self__.handlers,foundation.app.render.event_delegate.call(null,renderer__$1));var render_fns = cljs.core.methods$.call(null,foundation.app.render.render);var render_fn__$1 = ((function (handlers__$1,render_fns){
return (function (){foundation.app.render.refresh_queued = false;
var temp__4092__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1))));if(temp__4092__auto__)
{var deltas = temp__4092__auto__;foundation.app.render.log_fn.call(null,deltas);
var seq__57661 = cljs.core.seq.call(null,deltas);var chunk__57662 = null;var count__57663 = 0;var i__57664 = 0;while(true){
if((i__57664 < count__57663))
{var vec__57665 = cljs.core._nth.call(null,chunk__57662,i__57664);var op = cljs.core.nth.call(null,vec__57665,0,null);var path = cljs.core.nth.call(null,vec__57665,1,null);var _ = cljs.core.nth.call(null,vec__57665,2,null);var ___$1 = cljs.core.nth.call(null,vec__57665,3,null);var d = vec__57665;var temp__4092__auto___57700__$1 = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(temp__4092__auto___57700__$1))
{var f_57701 = temp__4092__auto___57700__$1;var id_57702 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_57703 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__57666_57704 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"removed","removed",2105740242),G__57666_57704))
{var seq__57667_57705 = cljs.core.seq.call(null,self__.deps);var chunk__57668_57706 = null;var count__57669_57707 = 0;var i__57670_57708 = 0;while(true){
if((i__57670_57708 < count__57669_57707))
{var dependent_57709 = cljs.core._nth.call(null,chunk__57668_57706,i__57670_57708);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57710 = seq__57667_57705;
var G__57711 = chunk__57668_57706;
var G__57712 = count__57669_57707;
var G__57713 = (i__57670_57708 + 1);
seq__57667_57705 = G__57710;
chunk__57668_57706 = G__57711;
count__57669_57707 = G__57712;
i__57670_57708 = G__57713;
continue;
}
} else
{var temp__4092__auto___57714__$2 = cljs.core.seq.call(null,seq__57667_57705);if(temp__4092__auto___57714__$2)
{var seq__57667_57715__$1 = temp__4092__auto___57714__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57667_57715__$1))
{var c__8952__auto___57716 = cljs.core.chunk_first.call(null,seq__57667_57715__$1);{
var G__57717 = cljs.core.chunk_rest.call(null,seq__57667_57715__$1);
var G__57718 = c__8952__auto___57716;
var G__57719 = cljs.core.count.call(null,c__8952__auto___57716);
var G__57720 = 0;
seq__57667_57705 = G__57717;
chunk__57668_57706 = G__57718;
count__57669_57707 = G__57719;
i__57670_57708 = G__57720;
continue;
}
} else
{var dependent_57721 = cljs.core.first.call(null,seq__57667_57715__$1);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57722 = cljs.core.next.call(null,seq__57667_57715__$1);
var G__57723 = null;
var G__57724 = 0;
var G__57725 = 0;
seq__57667_57705 = G__57722;
chunk__57668_57706 = G__57723;
count__57669_57707 = G__57724;
i__57670_57708 = G__57725;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"updated","updated",779473965),G__57666_57704))
{var seq__57671_57726 = cljs.core.seq.call(null,self__.deps);var chunk__57672_57727 = null;var count__57673_57728 = 0;var i__57674_57729 = 0;while(true){
if((i__57674_57729 < count__57673_57728))
{var dependent_57730 = cljs.core._nth.call(null,chunk__57672_57727,i__57674_57729);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57731 = seq__57671_57726;
var G__57732 = chunk__57672_57727;
var G__57733 = count__57673_57728;
var G__57734 = (i__57674_57729 + 1);
seq__57671_57726 = G__57731;
chunk__57672_57727 = G__57732;
count__57673_57728 = G__57733;
i__57674_57729 = G__57734;
continue;
}
} else
{var temp__4092__auto___57735__$2 = cljs.core.seq.call(null,seq__57671_57726);if(temp__4092__auto___57735__$2)
{var seq__57671_57736__$1 = temp__4092__auto___57735__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57671_57736__$1))
{var c__8952__auto___57737 = cljs.core.chunk_first.call(null,seq__57671_57736__$1);{
var G__57738 = cljs.core.chunk_rest.call(null,seq__57671_57736__$1);
var G__57739 = c__8952__auto___57737;
var G__57740 = cljs.core.count.call(null,c__8952__auto___57737);
var G__57741 = 0;
seq__57671_57726 = G__57738;
chunk__57672_57727 = G__57739;
count__57673_57728 = G__57740;
i__57674_57729 = G__57741;
continue;
}
} else
{var dependent_57742 = cljs.core.first.call(null,seq__57671_57736__$1);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57743 = cljs.core.next.call(null,seq__57671_57736__$1);
var G__57744 = null;
var G__57745 = 0;
var G__57746 = 0;
seq__57671_57726 = G__57743;
chunk__57672_57727 = G__57744;
count__57673_57728 = G__57745;
i__57674_57729 = G__57746;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",1106564210),G__57666_57704))
{var seq__57675_57747 = cljs.core.seq.call(null,self__.deps);var chunk__57676_57748 = null;var count__57677_57749 = 0;var i__57678_57750 = 0;while(true){
if((i__57678_57750 < count__57677_57749))
{var dependent_57751 = cljs.core._nth.call(null,chunk__57676_57748,i__57678_57750);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57752 = seq__57675_57747;
var G__57753 = chunk__57676_57748;
var G__57754 = count__57677_57749;
var G__57755 = (i__57678_57750 + 1);
seq__57675_57747 = G__57752;
chunk__57676_57748 = G__57753;
count__57677_57749 = G__57754;
i__57678_57750 = G__57755;
continue;
}
} else
{var temp__4092__auto___57756__$2 = cljs.core.seq.call(null,seq__57675_57747);if(temp__4092__auto___57756__$2)
{var seq__57675_57757__$1 = temp__4092__auto___57756__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57675_57757__$1))
{var c__8952__auto___57758 = cljs.core.chunk_first.call(null,seq__57675_57757__$1);{
var G__57759 = cljs.core.chunk_rest.call(null,seq__57675_57757__$1);
var G__57760 = c__8952__auto___57758;
var G__57761 = cljs.core.count.call(null,c__8952__auto___57758);
var G__57762 = 0;
seq__57675_57747 = G__57759;
chunk__57676_57748 = G__57760;
count__57677_57749 = G__57761;
i__57678_57750 = G__57762;
continue;
}
} else
{var dependent_57763 = cljs.core.first.call(null,seq__57675_57757__$1);foundation.app.render._render.call(null,f_57701.call(null,renderer__$1,d,pid_57703,id_57702));
{
var G__57764 = cljs.core.next.call(null,seq__57675_57757__$1);
var G__57765 = null;
var G__57766 = 0;
var G__57767 = 0;
seq__57675_57747 = G__57764;
chunk__57676_57748 = G__57765;
count__57677_57749 = G__57766;
i__57678_57750 = G__57767;
continue;
}
}
} else
{}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{}
}
}
}
} else
{}
{
var G__57768 = seq__57661;
var G__57769 = chunk__57662;
var G__57770 = count__57663;
var G__57771 = (i__57664 + 1);
seq__57661 = G__57768;
chunk__57662 = G__57769;
count__57663 = G__57770;
i__57664 = G__57771;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__57661);if(temp__4092__auto____$1)
{var seq__57661__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57661__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__57661__$1);{
var G__57772 = cljs.core.chunk_rest.call(null,seq__57661__$1);
var G__57773 = c__8952__auto__;
var G__57774 = cljs.core.count.call(null,c__8952__auto__);
var G__57775 = 0;
seq__57661 = G__57772;
chunk__57662 = G__57773;
count__57663 = G__57774;
i__57664 = G__57775;
continue;
}
} else
{var vec__57679 = cljs.core.first.call(null,seq__57661__$1);var op = cljs.core.nth.call(null,vec__57679,0,null);var path = cljs.core.nth.call(null,vec__57679,1,null);var _ = cljs.core.nth.call(null,vec__57679,2,null);var ___$1 = cljs.core.nth.call(null,vec__57679,3,null);var d = vec__57679;var temp__4092__auto___57776__$2 = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(temp__4092__auto___57776__$2))
{var f_57777 = temp__4092__auto___57776__$2;var id_57778 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_57779 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__57680_57780 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"removed","removed",2105740242),G__57680_57780))
{var seq__57681_57781 = cljs.core.seq.call(null,self__.deps);var chunk__57682_57782 = null;var count__57683_57783 = 0;var i__57684_57784 = 0;while(true){
if((i__57684_57784 < count__57683_57783))
{var dependent_57785 = cljs.core._nth.call(null,chunk__57682_57782,i__57684_57784);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57786 = seq__57681_57781;
var G__57787 = chunk__57682_57782;
var G__57788 = count__57683_57783;
var G__57789 = (i__57684_57784 + 1);
seq__57681_57781 = G__57786;
chunk__57682_57782 = G__57787;
count__57683_57783 = G__57788;
i__57684_57784 = G__57789;
continue;
}
} else
{var temp__4092__auto___57790__$3 = cljs.core.seq.call(null,seq__57681_57781);if(temp__4092__auto___57790__$3)
{var seq__57681_57791__$1 = temp__4092__auto___57790__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57681_57791__$1))
{var c__8952__auto___57792 = cljs.core.chunk_first.call(null,seq__57681_57791__$1);{
var G__57793 = cljs.core.chunk_rest.call(null,seq__57681_57791__$1);
var G__57794 = c__8952__auto___57792;
var G__57795 = cljs.core.count.call(null,c__8952__auto___57792);
var G__57796 = 0;
seq__57681_57781 = G__57793;
chunk__57682_57782 = G__57794;
count__57683_57783 = G__57795;
i__57684_57784 = G__57796;
continue;
}
} else
{var dependent_57797 = cljs.core.first.call(null,seq__57681_57791__$1);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57798 = cljs.core.next.call(null,seq__57681_57791__$1);
var G__57799 = null;
var G__57800 = 0;
var G__57801 = 0;
seq__57681_57781 = G__57798;
chunk__57682_57782 = G__57799;
count__57683_57783 = G__57800;
i__57684_57784 = G__57801;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"updated","updated",779473965),G__57680_57780))
{var seq__57685_57802 = cljs.core.seq.call(null,self__.deps);var chunk__57686_57803 = null;var count__57687_57804 = 0;var i__57688_57805 = 0;while(true){
if((i__57688_57805 < count__57687_57804))
{var dependent_57806 = cljs.core._nth.call(null,chunk__57686_57803,i__57688_57805);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57807 = seq__57685_57802;
var G__57808 = chunk__57686_57803;
var G__57809 = count__57687_57804;
var G__57810 = (i__57688_57805 + 1);
seq__57685_57802 = G__57807;
chunk__57686_57803 = G__57808;
count__57687_57804 = G__57809;
i__57688_57805 = G__57810;
continue;
}
} else
{var temp__4092__auto___57811__$3 = cljs.core.seq.call(null,seq__57685_57802);if(temp__4092__auto___57811__$3)
{var seq__57685_57812__$1 = temp__4092__auto___57811__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57685_57812__$1))
{var c__8952__auto___57813 = cljs.core.chunk_first.call(null,seq__57685_57812__$1);{
var G__57814 = cljs.core.chunk_rest.call(null,seq__57685_57812__$1);
var G__57815 = c__8952__auto___57813;
var G__57816 = cljs.core.count.call(null,c__8952__auto___57813);
var G__57817 = 0;
seq__57685_57802 = G__57814;
chunk__57686_57803 = G__57815;
count__57687_57804 = G__57816;
i__57688_57805 = G__57817;
continue;
}
} else
{var dependent_57818 = cljs.core.first.call(null,seq__57685_57812__$1);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57819 = cljs.core.next.call(null,seq__57685_57812__$1);
var G__57820 = null;
var G__57821 = 0;
var G__57822 = 0;
seq__57685_57802 = G__57819;
chunk__57686_57803 = G__57820;
count__57687_57804 = G__57821;
i__57688_57805 = G__57822;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",1106564210),G__57680_57780))
{var seq__57689_57823 = cljs.core.seq.call(null,self__.deps);var chunk__57690_57824 = null;var count__57691_57825 = 0;var i__57692_57826 = 0;while(true){
if((i__57692_57826 < count__57691_57825))
{var dependent_57827 = cljs.core._nth.call(null,chunk__57690_57824,i__57692_57826);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57828 = seq__57689_57823;
var G__57829 = chunk__57690_57824;
var G__57830 = count__57691_57825;
var G__57831 = (i__57692_57826 + 1);
seq__57689_57823 = G__57828;
chunk__57690_57824 = G__57829;
count__57691_57825 = G__57830;
i__57692_57826 = G__57831;
continue;
}
} else
{var temp__4092__auto___57832__$3 = cljs.core.seq.call(null,seq__57689_57823);if(temp__4092__auto___57832__$3)
{var seq__57689_57833__$1 = temp__4092__auto___57832__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57689_57833__$1))
{var c__8952__auto___57834 = cljs.core.chunk_first.call(null,seq__57689_57833__$1);{
var G__57835 = cljs.core.chunk_rest.call(null,seq__57689_57833__$1);
var G__57836 = c__8952__auto___57834;
var G__57837 = cljs.core.count.call(null,c__8952__auto___57834);
var G__57838 = 0;
seq__57689_57823 = G__57835;
chunk__57690_57824 = G__57836;
count__57691_57825 = G__57837;
i__57692_57826 = G__57838;
continue;
}
} else
{var dependent_57839 = cljs.core.first.call(null,seq__57689_57833__$1);foundation.app.render._render.call(null,f_57777.call(null,renderer__$1,d,pid_57779,id_57778));
{
var G__57840 = cljs.core.next.call(null,seq__57689_57833__$1);
var G__57841 = null;
var G__57842 = 0;
var G__57843 = 0;
seq__57689_57823 = G__57840;
chunk__57690_57824 = G__57841;
count__57691_57825 = G__57842;
i__57692_57826 = G__57843;
continue;
}
}
} else
{}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{}
}
}
}
} else
{}
{
var G__57844 = cljs.core.next.call(null,seq__57661__$1);
var G__57845 = null;
var G__57846 = 0;
var G__57847 = 0;
seq__57661 = G__57844;
chunk__57662 = G__57845;
count__57663 = G__57846;
i__57664 = G__57847;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});})(handlers__$1,render_fns))
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(foundation.app.render.refresh_queued))
{return null;
} else
{foundation.app.render.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(render_fn__$1);
} else
{return setTimeout(render_fn__$1,16);
}
}
}));
return render_fn__$1.call(null);
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__57693 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__57694 = null;var count__57695 = 0;var i__57696 = 0;while(true){
if((i__57696 < count__57695))
{var handler = cljs.core._nth.call(null,chunk__57694,i__57696);handler.dispose();
{
var G__57848 = seq__57693;
var G__57849 = chunk__57694;
var G__57850 = count__57695;
var G__57851 = (i__57696 + 1);
seq__57693 = G__57848;
chunk__57694 = G__57849;
count__57695 = G__57850;
i__57696 = G__57851;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__57693);if(temp__4092__auto__)
{var seq__57693__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57693__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__57693__$1);{
var G__57852 = cljs.core.chunk_rest.call(null,seq__57693__$1);
var G__57853 = c__8952__auto__;
var G__57854 = cljs.core.count.call(null,c__8952__auto__);
var G__57855 = 0;
seq__57693 = G__57852;
chunk__57694 = G__57853;
count__57695 = G__57854;
i__57696 = G__57855;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__57693__$1);handler.dispose();
{
var G__57856 = cljs.core.next.call(null,seq__57693__$1);
var G__57857 = null;
var G__57858 = 0;
var G__57859 = 0;
seq__57693 = G__57856;
chunk__57694 = G__57857;
count__57695 = G__57858;
i__57696 = G__57859;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8785__auto__){var self__ = this;
var this__8785__auto____$1 = this;var h__8639__auto__ = self__.__hash;if(!((h__8639__auto__ == null)))
{return h__8639__auto__;
} else
{var h__8639__auto____$1 = cljs.core.hash_imap.call(null,this__8785__auto____$1);self__.__hash = h__8639__auto____$1;
return h__8639__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8790__auto__,k__8791__auto__){var self__ = this;
var this__8790__auto____$1 = this;return cljs.core._lookup.call(null,this__8790__auto____$1,k__8791__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k57659,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k57659,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k57659,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k57659,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k57659,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k57659,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__57658){var self__ = this;
var this__8797__auto____$1 = this;var pred__57697 = cljs.core.keyword_identical_QMARK_;var expr__57698 = k__8798__auto__;if(cljs.core.truth_(pred__57697.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__57698)))
{return (new foundation.app.render.Renderer(G__57658,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__57697.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__57698)))
{return (new foundation.app.render.Renderer(self__.env,G__57658,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__57697.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__57698)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__57658,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__57697.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__57698)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__57658,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__57658),null));
}
}
}
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$ = true;
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_parent_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render._get_id.call(null,r__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;return foundation.app.render._new_id.call(null,r__$1,path,foundation.app.render.guid.call(null));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$3 = (function (_,path,id){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),id);
return id;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_delete_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;foundation.app.render.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_on_destroy$arity$3 = (function (_,path,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_set_data$arity$3 = (function (_,path,data){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path),data);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_drop_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,path)),cljs.core.dissoc,cljs.core.last.call(null,path));
});
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8804__auto__,writer__8805__auto__,opts__8806__auto__){var self__ = this;
var this__8804__auto____$1 = this;var pr_pair__8807__auto__ = (function (keyval__8808__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,cljs.core.pr_writer,""," ","",opts__8806__auto__,keyval__8808__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1016983990),self__.deps],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1016983990),self__.deps],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8786__auto__,other__8787__auto__){var self__ = this;
var this__8786__auto____$1 = this;if(cljs.core.truth_((function (){var and__8211__auto__ = other__8787__auto__;if(cljs.core.truth_(and__8211__auto__))
{return ((this__8786__auto____$1.constructor === other__8787__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8786__auto____$1,other__8787__auto__));
} else
{return and__8211__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__57658){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__57658,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deps","deps",1016983990),null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),null,new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),null], null), null),k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env,deps,render_fn,handlers){return (new foundation.app.render.Renderer(env,deps,render_fn,handlers));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__57660){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__57660),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__57660),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__57660),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__57660),null,cljs.core.dissoc.call(null,G__57660,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
});
foundation.app.render.push_render_queue = (function push_render_queue(renderer,input_queue){var render_queue = cljs.core.async.chan.call(null);var c__12187__auto___57938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_57921){var state_val_57922 = (state_57921[1]);if((state_val_57922 === 7))
{var inst_57916 = (state_57921[2]);var state_57921__$1 = (function (){var statearr_57923 = state_57921;(statearr_57923[7] = inst_57916);
return statearr_57923;
})();var statearr_57924_57939 = state_57921__$1;(statearr_57924_57939[2] = null);
(statearr_57924_57939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57922 === 6))
{var inst_57902 = (state_57921[8]);var inst_57904 = (state_57921[9]);var inst_57912 = foundation.app.render._parent_id.call(null,renderer,inst_57904);var inst_57913 = foundation.app.render._new_id.call(null,renderer,inst_57904);var inst_57914 = foundation.app.render.render.call(null,renderer,inst_57902,inst_57912,inst_57913);var state_57921__$1 = state_57921;var statearr_57925_57940 = state_57921__$1;(statearr_57925_57940[2] = inst_57914);
(statearr_57925_57940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57922 === 5))
{var inst_57902 = (state_57921[8]);var inst_57904 = (state_57921[9]);var inst_57907 = (state_57921[10]);var inst_57909 = foundation.app.render._parent_id.call(null,renderer,inst_57904);var inst_57910 = foundation.app.render.render.call(null,renderer,inst_57902,inst_57909,inst_57907);var state_57921__$1 = state_57921;var statearr_57926_57941 = state_57921__$1;(statearr_57926_57941[2] = inst_57910);
(statearr_57926_57941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57922 === 4))
{var inst_57902 = (state_57921[8]);var inst_57904 = (state_57921[9]);var inst_57907 = (state_57921[10]);var inst_57902__$1 = (state_57921[2]);var inst_57903 = cljs.core.nth.call(null,inst_57902__$1,0,null);var inst_57904__$1 = cljs.core.nth.call(null,inst_57902__$1,1,null);var inst_57905 = cljs.core.nth.call(null,inst_57902__$1,2,null);var inst_57906 = cljs.core.nth.call(null,inst_57902__$1,3,null);var inst_57907__$1 = foundation.app.render._get_id.call(null,renderer,inst_57904__$1);var state_57921__$1 = (function (){var statearr_57927 = state_57921;(statearr_57927[11] = inst_57903);
(statearr_57927[8] = inst_57902__$1);
(statearr_57927[12] = inst_57905);
(statearr_57927[9] = inst_57904__$1);
(statearr_57927[13] = inst_57906);
(statearr_57927[10] = inst_57907__$1);
return statearr_57927;
})();if(cljs.core.truth_(inst_57907__$1))
{var statearr_57928_57942 = state_57921__$1;(statearr_57928_57942[1] = 5);
} else
{var statearr_57929_57943 = state_57921__$1;(statearr_57929_57943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57922 === 3))
{var inst_57919 = (state_57921[2]);var state_57921__$1 = state_57921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57921__$1,inst_57919);
} else
{if((state_val_57922 === 2))
{var state_57921__$1 = state_57921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57921__$1,4,render_queue);
} else
{if((state_val_57922 === 1))
{var state_57921__$1 = state_57921;var statearr_57930_57944 = state_57921__$1;(statearr_57930_57944[2] = null);
(statearr_57930_57944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_57934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57934[0] = state_machine__12118__auto__);
(statearr_57934[1] = 1);
return statearr_57934;
});
var state_machine__12118__auto____1 = (function (state_57921){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_57921);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e57935){if((e57935 instanceof Object))
{var ex__12121__auto__ = e57935;var statearr_57936_57945 = state_57921;(statearr_57936_57945[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57946 = state_57921;
state_57921 = G__57946;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_57921){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_57921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_57937 = f__12188__auto__.call(null);(statearr_57937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___57938);
return statearr_57937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return render_queue;
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,foundation.app.render.log_fn);
});
var renderer__2 = (function (root_id,render_fn){return foundation.app.render.map__GT_Renderer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",1014004831),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)),new cljs.core.Keyword(null,"deps","deps",1016983990),cljs.core.atom.call(null,foundation.app.data.dependency.graph.call(null)),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),render_fn,new cljs.core.Keyword(null,"handlers","handlers",1015973339),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
renderer = function(root_id,render_fn){
switch(arguments.length){
case 1:
return renderer__1.call(this,root_id);
case 2:
return renderer__2.call(this,root_id,render_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$1 = renderer__1;
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
return renderer;
})()
;
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__57947,pid,id){var vec__57948 = p__57947;var op = cljs.core.nth.call(null,vec__57948,0,null);var path = cljs.core.nth.call(null,vec__57948,1,null);var _ = cljs.core.nth.call(null,vec__57948,2,null);var ___$1 = cljs.core.nth.call(null,vec__57948,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map