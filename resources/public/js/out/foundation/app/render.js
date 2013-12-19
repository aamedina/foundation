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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__89943,pid,id){var vec__89944 = p__89943;var op = cljs.core.nth.call(null,vec__89944,0,null);var path = cljs.core.nth.call(null,vec__89944,1,null);var _ = cljs.core.nth.call(null,vec__89944,2,null);var ___$1 = cljs.core.nth.call(null,vec__89944,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj89946 = {};return obj89946;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__89947_SHARP_){return cljs.core.not.call(null,p1__89947_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__89949 = (new goog.events.EventHandler(renderer));G__89949.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__89949.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__89949,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__89949;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__89950_SHARP_){return cljs.core.get.call(null,n,p1__89950_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__89955 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__89956 = null;var count__89957 = 0;var i__89958 = 0;while(true){
if((i__89958 < count__89957))
{var f = cljs.core._nth.call(null,chunk__89956,i__89958);f.call(null);
{
var G__89959 = seq__89955;
var G__89960 = chunk__89956;
var G__89961 = count__89957;
var G__89962 = (i__89958 + 1);
seq__89955 = G__89959;
chunk__89956 = G__89960;
count__89957 = G__89961;
i__89958 = G__89962;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89955);if(temp__4092__auto__)
{var seq__89955__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89955__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__89955__$1);{
var G__89963 = cljs.core.chunk_rest.call(null,seq__89955__$1);
var G__89964 = c__8952__auto__;
var G__89965 = cljs.core.count.call(null,c__8952__auto__);
var G__89966 = 0;
seq__89955 = G__89963;
chunk__89956 = G__89964;
count__89957 = G__89965;
i__89958 = G__89966;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__89955__$1);f.call(null);
{
var G__89967 = cljs.core.next.call(null,seq__89955__$1);
var G__89968 = null;
var G__89969 = 0;
var G__89970 = 0;
seq__89955 = G__89967;
chunk__89956 = G__89968;
count__89957 = G__89969;
i__89958 = G__89970;
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
foundation.app.render.IRender = (function (){var obj89972 = {};return obj89972;
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
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$1 = (function (r){var r__$1 = this;return dommy.template.__GT_node_like.call(null,r__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (_){return null;
}));
(foundation.app.render.IRender["null"] = true);
(foundation.app.render._render["null"] = (function (_){return null;
}));
foundation.app.render.sort_deps = (function sort_deps(deps,pid){return cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,cljs.core.deref.call(null,deps)),cljs.core.remove.call(null,cljs.core.nil_QMARK_,foundation.app.data.dependency.transitive_dependents.call(null,cljs.core.deref.call(null,deps),pid)));
});
foundation.app.render.IRenderer = (function (){var obj89974 = {};return obj89974;
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
return (function (deltas){var temp__4092__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,((function (handlers__$1,render_fns){
return (function (p__89978){var vec__89979 = p__89978;var op = cljs.core.nth.call(null,vec__89979,0,null);var path = cljs.core.nth.call(null,vec__89979,1,null);var _ = cljs.core.nth.call(null,vec__89979,2,null);var ___$1 = cljs.core.nth.call(null,vec__89979,3,null);var delta = vec__89979;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,f], null);
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,null], null);
} else
{return null;
}
}
});})(handlers__$1,render_fns))
,deltas));if(temp__4092__auto__)
{var deltas__$1 = temp__4092__auto__;foundation.app.render.log_fn.call(null,cljs.core.map.call(null,cljs.core.first,deltas__$1));
var seq__89980 = cljs.core.seq.call(null,deltas__$1);var chunk__89981 = null;var count__89982 = 0;var i__89983 = 0;while(true){
if((i__89983 < count__89982))
{var vec__89984 = cljs.core._nth.call(null,chunk__89981,i__89983);var vec__89985 = cljs.core.nth.call(null,vec__89984,0,null);var op = cljs.core.nth.call(null,vec__89985,0,null);var path = cljs.core.nth.call(null,vec__89985,1,null);var _ = cljs.core.nth.call(null,vec__89985,2,null);var ___$1 = cljs.core.nth.call(null,vec__89985,3,null);var d = vec__89985;var f = cljs.core.nth.call(null,vec__89984,1,null);var id_90015 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_90016 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__89986_90017 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__89986_90017))
{var seq__89987_90018 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_90016));var chunk__89988_90019 = null;var count__89989_90020 = 0;var i__89990_90021 = 0;while(true){
if((i__89990_90021 < count__89989_90020))
{var dep_90022 = cljs.core._nth.call(null,chunk__89988_90019,i__89990_90021);var dep_pid_90023 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90022);var temp__4092__auto___90024__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90022], null));if(cljs.core.truth_(temp__4092__auto___90024__$1))
{var old_content_90025 = temp__4092__auto___90024__$1;dommy.core.remove_BANG_.call(null,old_content_90025);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90022], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90022], null));
{
var G__90026 = seq__89987_90018;
var G__90027 = chunk__89988_90019;
var G__90028 = count__89989_90020;
var G__90029 = (i__89990_90021 + 1);
seq__89987_90018 = G__90026;
chunk__89988_90019 = G__90027;
count__89989_90020 = G__90028;
i__89990_90021 = G__90029;
continue;
}
} else
{var temp__4092__auto___90030__$1 = cljs.core.seq.call(null,seq__89987_90018);if(temp__4092__auto___90030__$1)
{var seq__89987_90031__$1 = temp__4092__auto___90030__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89987_90031__$1))
{var c__8952__auto___90032 = cljs.core.chunk_first.call(null,seq__89987_90031__$1);{
var G__90033 = cljs.core.chunk_rest.call(null,seq__89987_90031__$1);
var G__90034 = c__8952__auto___90032;
var G__90035 = cljs.core.count.call(null,c__8952__auto___90032);
var G__90036 = 0;
seq__89987_90018 = G__90033;
chunk__89988_90019 = G__90034;
count__89989_90020 = G__90035;
i__89990_90021 = G__90036;
continue;
}
} else
{var dep_90037 = cljs.core.first.call(null,seq__89987_90031__$1);var dep_pid_90038 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90037);var temp__4092__auto___90039__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90037], null));if(cljs.core.truth_(temp__4092__auto___90039__$2))
{var old_content_90040 = temp__4092__auto___90039__$2;dommy.core.remove_BANG_.call(null,old_content_90040);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90037], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90037], null));
{
var G__90041 = cljs.core.next.call(null,seq__89987_90031__$1);
var G__90042 = null;
var G__90043 = 0;
var G__90044 = 0;
seq__89987_90018 = G__90041;
chunk__89988_90019 = G__90042;
count__89989_90020 = G__90043;
i__89990_90021 = G__90044;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__89986_90017))
{var seq__89991_90045 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_90016));var chunk__89992_90046 = null;var count__89993_90047 = 0;var i__89994_90048 = 0;while(true){
if((i__89994_90048 < count__89993_90047))
{var dep_90049 = cljs.core._nth.call(null,chunk__89992_90046,i__89994_90048);var dep_pid_90050 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90049);var temp__4092__auto___90051__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_90050,dep_90049));if(cljs.core.truth_(temp__4092__auto___90051__$1))
{var dom_content_90052 = temp__4092__auto___90051__$1;var temp__4092__auto___90053__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90049], null));if(cljs.core.truth_(temp__4092__auto___90053__$2))
{var old_content_90054 = temp__4092__auto___90053__$2;dommy.core.replace_BANG_.call(null,old_content_90054,dom_content_90052);
} else
{}
dommy.core.set_attr_BANG_.call(null,dom_content_90052,new cljs.core.Keyword(null,"id","id",1013907597),dep_90049);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90049], null),dom_content_90052);
} else
{}
{
var G__90055 = seq__89991_90045;
var G__90056 = chunk__89992_90046;
var G__90057 = count__89993_90047;
var G__90058 = (i__89994_90048 + 1);
seq__89991_90045 = G__90055;
chunk__89992_90046 = G__90056;
count__89993_90047 = G__90057;
i__89994_90048 = G__90058;
continue;
}
} else
{var temp__4092__auto___90059__$1 = cljs.core.seq.call(null,seq__89991_90045);if(temp__4092__auto___90059__$1)
{var seq__89991_90060__$1 = temp__4092__auto___90059__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89991_90060__$1))
{var c__8952__auto___90061 = cljs.core.chunk_first.call(null,seq__89991_90060__$1);{
var G__90062 = cljs.core.chunk_rest.call(null,seq__89991_90060__$1);
var G__90063 = c__8952__auto___90061;
var G__90064 = cljs.core.count.call(null,c__8952__auto___90061);
var G__90065 = 0;
seq__89991_90045 = G__90062;
chunk__89992_90046 = G__90063;
count__89993_90047 = G__90064;
i__89994_90048 = G__90065;
continue;
}
} else
{var dep_90066 = cljs.core.first.call(null,seq__89991_90060__$1);var dep_pid_90067 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90066);var temp__4092__auto___90068__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_90067,dep_90066));if(cljs.core.truth_(temp__4092__auto___90068__$2))
{var dom_content_90069 = temp__4092__auto___90068__$2;var temp__4092__auto___90070__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90066], null));if(cljs.core.truth_(temp__4092__auto___90070__$3))
{var old_content_90071 = temp__4092__auto___90070__$3;dommy.core.replace_BANG_.call(null,old_content_90071,dom_content_90069);
} else
{}
dommy.core.set_attr_BANG_.call(null,dom_content_90069,new cljs.core.Keyword(null,"id","id",1013907597),dep_90066);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90066], null),dom_content_90069);
} else
{}
{
var G__90072 = cljs.core.next.call(null,seq__89991_90060__$1);
var G__90073 = null;
var G__90074 = 0;
var G__90075 = 0;
seq__89991_90045 = G__90072;
chunk__89992_90046 = G__90073;
count__89993_90047 = G__90074;
i__89994_90048 = G__90075;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__89986_90017))
{var temp__4092__auto___90076__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_90016,id_90015));if(cljs.core.truth_(temp__4092__auto___90076__$1))
{var dom_content_90077 = temp__4092__auto___90076__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_90015], null),dom_content_90077);
var temp__4090__auto___90078 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_90016], null));if(cljs.core.truth_(temp__4090__auto___90078))
{var parent_90079 = temp__4090__auto___90078;dommy.core.append_BANG_.call(null,parent_90079,dom_content_90077);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_content_90077);
}
dommy.core.set_attr_BANG_.call(null,dom_content_90077,new cljs.core.Keyword(null,"id","id",1013907597),id_90015);
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_90015,pid_90016);
} else
{}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{}
}
}
}
{
var G__90080 = seq__89980;
var G__90081 = chunk__89981;
var G__90082 = count__89982;
var G__90083 = (i__89983 + 1);
seq__89980 = G__90080;
chunk__89981 = G__90081;
count__89982 = G__90082;
i__89983 = G__90083;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__89980);if(temp__4092__auto____$1)
{var seq__89980__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89980__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__89980__$1);{
var G__90084 = cljs.core.chunk_rest.call(null,seq__89980__$1);
var G__90085 = c__8952__auto__;
var G__90086 = cljs.core.count.call(null,c__8952__auto__);
var G__90087 = 0;
seq__89980 = G__90084;
chunk__89981 = G__90085;
count__89982 = G__90086;
i__89983 = G__90087;
continue;
}
} else
{var vec__89995 = cljs.core.first.call(null,seq__89980__$1);var vec__89996 = cljs.core.nth.call(null,vec__89995,0,null);var op = cljs.core.nth.call(null,vec__89996,0,null);var path = cljs.core.nth.call(null,vec__89996,1,null);var _ = cljs.core.nth.call(null,vec__89996,2,null);var ___$1 = cljs.core.nth.call(null,vec__89996,3,null);var d = vec__89996;var f = cljs.core.nth.call(null,vec__89995,1,null);var id_90088 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_90089 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__89997_90090 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__89997_90090))
{var seq__89998_90091 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_90089));var chunk__89999_90092 = null;var count__90000_90093 = 0;var i__90001_90094 = 0;while(true){
if((i__90001_90094 < count__90000_90093))
{var dep_90095 = cljs.core._nth.call(null,chunk__89999_90092,i__90001_90094);var dep_pid_90096 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90095);var temp__4092__auto___90097__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90095], null));if(cljs.core.truth_(temp__4092__auto___90097__$2))
{var old_content_90098 = temp__4092__auto___90097__$2;dommy.core.remove_BANG_.call(null,old_content_90098);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90095], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90095], null));
{
var G__90099 = seq__89998_90091;
var G__90100 = chunk__89999_90092;
var G__90101 = count__90000_90093;
var G__90102 = (i__90001_90094 + 1);
seq__89998_90091 = G__90099;
chunk__89999_90092 = G__90100;
count__90000_90093 = G__90101;
i__90001_90094 = G__90102;
continue;
}
} else
{var temp__4092__auto___90103__$2 = cljs.core.seq.call(null,seq__89998_90091);if(temp__4092__auto___90103__$2)
{var seq__89998_90104__$1 = temp__4092__auto___90103__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89998_90104__$1))
{var c__8952__auto___90105 = cljs.core.chunk_first.call(null,seq__89998_90104__$1);{
var G__90106 = cljs.core.chunk_rest.call(null,seq__89998_90104__$1);
var G__90107 = c__8952__auto___90105;
var G__90108 = cljs.core.count.call(null,c__8952__auto___90105);
var G__90109 = 0;
seq__89998_90091 = G__90106;
chunk__89999_90092 = G__90107;
count__90000_90093 = G__90108;
i__90001_90094 = G__90109;
continue;
}
} else
{var dep_90110 = cljs.core.first.call(null,seq__89998_90104__$1);var dep_pid_90111 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90110);var temp__4092__auto___90112__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90110], null));if(cljs.core.truth_(temp__4092__auto___90112__$3))
{var old_content_90113 = temp__4092__auto___90112__$3;dommy.core.remove_BANG_.call(null,old_content_90113);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90110], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90110], null));
{
var G__90114 = cljs.core.next.call(null,seq__89998_90104__$1);
var G__90115 = null;
var G__90116 = 0;
var G__90117 = 0;
seq__89998_90091 = G__90114;
chunk__89999_90092 = G__90115;
count__90000_90093 = G__90116;
i__90001_90094 = G__90117;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__89997_90090))
{var seq__90002_90118 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_90089));var chunk__90003_90119 = null;var count__90004_90120 = 0;var i__90005_90121 = 0;while(true){
if((i__90005_90121 < count__90004_90120))
{var dep_90122 = cljs.core._nth.call(null,chunk__90003_90119,i__90005_90121);var dep_pid_90123 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90122);var temp__4092__auto___90124__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_90123,dep_90122));if(cljs.core.truth_(temp__4092__auto___90124__$2))
{var dom_content_90125 = temp__4092__auto___90124__$2;var temp__4092__auto___90126__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90122], null));if(cljs.core.truth_(temp__4092__auto___90126__$3))
{var old_content_90127 = temp__4092__auto___90126__$3;dommy.core.replace_BANG_.call(null,old_content_90127,dom_content_90125);
} else
{}
dommy.core.set_attr_BANG_.call(null,dom_content_90125,new cljs.core.Keyword(null,"id","id",1013907597),dep_90122);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90122], null),dom_content_90125);
} else
{}
{
var G__90128 = seq__90002_90118;
var G__90129 = chunk__90003_90119;
var G__90130 = count__90004_90120;
var G__90131 = (i__90005_90121 + 1);
seq__90002_90118 = G__90128;
chunk__90003_90119 = G__90129;
count__90004_90120 = G__90130;
i__90005_90121 = G__90131;
continue;
}
} else
{var temp__4092__auto___90132__$2 = cljs.core.seq.call(null,seq__90002_90118);if(temp__4092__auto___90132__$2)
{var seq__90002_90133__$1 = temp__4092__auto___90132__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90002_90133__$1))
{var c__8952__auto___90134 = cljs.core.chunk_first.call(null,seq__90002_90133__$1);{
var G__90135 = cljs.core.chunk_rest.call(null,seq__90002_90133__$1);
var G__90136 = c__8952__auto___90134;
var G__90137 = cljs.core.count.call(null,c__8952__auto___90134);
var G__90138 = 0;
seq__90002_90118 = G__90135;
chunk__90003_90119 = G__90136;
count__90004_90120 = G__90137;
i__90005_90121 = G__90138;
continue;
}
} else
{var dep_90139 = cljs.core.first.call(null,seq__90002_90133__$1);var dep_pid_90140 = foundation.app.render._parent_id.call(null,renderer__$1,dep_90139);var temp__4092__auto___90141__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_90140,dep_90139));if(cljs.core.truth_(temp__4092__auto___90141__$3))
{var dom_content_90142 = temp__4092__auto___90141__$3;var temp__4092__auto___90143__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90139], null));if(cljs.core.truth_(temp__4092__auto___90143__$4))
{var old_content_90144 = temp__4092__auto___90143__$4;dommy.core.replace_BANG_.call(null,old_content_90144,dom_content_90142);
} else
{}
dommy.core.set_attr_BANG_.call(null,dom_content_90142,new cljs.core.Keyword(null,"id","id",1013907597),dep_90139);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_90139], null),dom_content_90142);
} else
{}
{
var G__90145 = cljs.core.next.call(null,seq__90002_90133__$1);
var G__90146 = null;
var G__90147 = 0;
var G__90148 = 0;
seq__90002_90118 = G__90145;
chunk__90003_90119 = G__90146;
count__90004_90120 = G__90147;
i__90005_90121 = G__90148;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__89997_90090))
{var temp__4092__auto___90149__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_90089,id_90088));if(cljs.core.truth_(temp__4092__auto___90149__$2))
{var dom_content_90150 = temp__4092__auto___90149__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_90088], null),dom_content_90150);
var temp__4090__auto___90151 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_90089], null));if(cljs.core.truth_(temp__4090__auto___90151))
{var parent_90152 = temp__4090__auto___90151;dommy.core.append_BANG_.call(null,parent_90152,dom_content_90150);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_content_90150);
}
dommy.core.set_attr_BANG_.call(null,dom_content_90150,new cljs.core.Keyword(null,"id","id",1013907597),id_90088);
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_90088,pid_90089);
} else
{}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{}
}
}
}
{
var G__90153 = cljs.core.next.call(null,seq__89980__$1);
var G__90154 = null;
var G__90155 = 0;
var G__90156 = 0;
seq__89980 = G__90153;
chunk__89981 = G__90154;
count__89982 = G__90155;
i__89983 = G__90156;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__90006){var map__90007 = p__90006;var map__90007__$1 = ((cljs.core.seq_QMARK_.call(null,map__90007))?cljs.core.apply.call(null,cljs.core.hash_map,map__90007):map__90007);var deltas = cljs.core.get.call(null,map__90007__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__90008 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__90009 = null;var count__90010 = 0;var i__90011 = 0;while(true){
if((i__90011 < count__90010))
{var handler = cljs.core._nth.call(null,chunk__90009,i__90011);handler.dispose();
{
var G__90157 = seq__90008;
var G__90158 = chunk__90009;
var G__90159 = count__90010;
var G__90160 = (i__90011 + 1);
seq__90008 = G__90157;
chunk__90009 = G__90158;
count__90010 = G__90159;
i__90011 = G__90160;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__90008);if(temp__4092__auto__)
{var seq__90008__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90008__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__90008__$1);{
var G__90161 = cljs.core.chunk_rest.call(null,seq__90008__$1);
var G__90162 = c__8952__auto__;
var G__90163 = cljs.core.count.call(null,c__8952__auto__);
var G__90164 = 0;
seq__90008 = G__90161;
chunk__90009 = G__90162;
count__90010 = G__90163;
i__90011 = G__90164;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__90008__$1);handler.dispose();
{
var G__90165 = cljs.core.next.call(null,seq__90008__$1);
var G__90166 = null;
var G__90167 = 0;
var G__90168 = 0;
seq__90008 = G__90165;
chunk__90009 = G__90166;
count__90010 = G__90167;
i__90011 = G__90168;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k89976,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k89976,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89976,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89976,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89976,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k89976,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__89975){var self__ = this;
var this__8797__auto____$1 = this;var pred__90012 = cljs.core.keyword_identical_QMARK_;var expr__90013 = k__8798__auto__;if(cljs.core.truth_(pred__90012.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__90013)))
{return (new foundation.app.render.Renderer(G__89975,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__90012.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__90013)))
{return (new foundation.app.render.Renderer(self__.env,G__89975,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__90012.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__90013)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__89975,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__90012.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__90013)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__89975,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__89975),null));
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
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path),data);
} else
{return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747),new cljs.core.Keyword(null,"id","id",1013907597)], null),data);
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path));
} else
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747),new cljs.core.Keyword(null,"id","id",1013907597)], null));
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_drop_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,path)),cljs.core.dissoc,cljs.core.last.call(null,path));
} else
{return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.dissoc,cljs.core.last.call(null,path));
}
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__89975){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__89975,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__89977){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__89977),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__89977),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__89977),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__89977),null,cljs.core.dissoc.call(null,G__89977,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
});
foundation.app.render.push_render_queue = (function push_render_queue(renderer,input_queue){var render_queue = cljs.core.async.chan.call(null);var c__12187__auto___90247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_90230){var state_val_90231 = (state_90230[1]);if((state_val_90231 === 7))
{var inst_90225 = (state_90230[2]);var state_90230__$1 = (function (){var statearr_90232 = state_90230;(statearr_90232[7] = inst_90225);
return statearr_90232;
})();var statearr_90233_90248 = state_90230__$1;(statearr_90233_90248[2] = null);
(statearr_90233_90248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90231 === 6))
{var inst_90211 = (state_90230[8]);var inst_90213 = (state_90230[9]);var inst_90221 = foundation.app.render._parent_id.call(null,renderer,inst_90213);var inst_90222 = foundation.app.render._new_id.call(null,renderer,inst_90213);var inst_90223 = foundation.app.render.render.call(null,renderer,inst_90211,inst_90221,inst_90222);var state_90230__$1 = state_90230;var statearr_90234_90249 = state_90230__$1;(statearr_90234_90249[2] = inst_90223);
(statearr_90234_90249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90231 === 5))
{var inst_90211 = (state_90230[8]);var inst_90216 = (state_90230[10]);var inst_90213 = (state_90230[9]);var inst_90218 = foundation.app.render._parent_id.call(null,renderer,inst_90213);var inst_90219 = foundation.app.render.render.call(null,renderer,inst_90211,inst_90218,inst_90216);var state_90230__$1 = state_90230;var statearr_90235_90250 = state_90230__$1;(statearr_90235_90250[2] = inst_90219);
(statearr_90235_90250[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90231 === 4))
{var inst_90211 = (state_90230[8]);var inst_90216 = (state_90230[10]);var inst_90213 = (state_90230[9]);var inst_90211__$1 = (state_90230[2]);var inst_90212 = cljs.core.nth.call(null,inst_90211__$1,0,null);var inst_90213__$1 = cljs.core.nth.call(null,inst_90211__$1,1,null);var inst_90214 = cljs.core.nth.call(null,inst_90211__$1,2,null);var inst_90215 = cljs.core.nth.call(null,inst_90211__$1,3,null);var inst_90216__$1 = foundation.app.render._get_id.call(null,renderer,inst_90213__$1);var state_90230__$1 = (function (){var statearr_90236 = state_90230;(statearr_90236[11] = inst_90212);
(statearr_90236[8] = inst_90211__$1);
(statearr_90236[12] = inst_90215);
(statearr_90236[10] = inst_90216__$1);
(statearr_90236[9] = inst_90213__$1);
(statearr_90236[13] = inst_90214);
return statearr_90236;
})();if(cljs.core.truth_(inst_90216__$1))
{var statearr_90237_90251 = state_90230__$1;(statearr_90237_90251[1] = 5);
} else
{var statearr_90238_90252 = state_90230__$1;(statearr_90238_90252[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_90231 === 3))
{var inst_90228 = (state_90230[2]);var state_90230__$1 = state_90230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90230__$1,inst_90228);
} else
{if((state_val_90231 === 2))
{var state_90230__$1 = state_90230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90230__$1,4,render_queue);
} else
{if((state_val_90231 === 1))
{var state_90230__$1 = state_90230;var statearr_90239_90253 = state_90230__$1;(statearr_90239_90253[2] = null);
(statearr_90239_90253[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_90243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_90243[0] = state_machine__12118__auto__);
(statearr_90243[1] = 1);
return statearr_90243;
});
var state_machine__12118__auto____1 = (function (state_90230){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_90230);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e90244){if((e90244 instanceof Object))
{var ex__12121__auto__ = e90244;var statearr_90245_90254 = state_90230;(statearr_90245_90254[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e90244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__90255 = state_90230;
state_90230 = G__90255;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_90230){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_90230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_90246 = f__12188__auto__.call(null);(statearr_90246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___90247);
return statearr_90246;
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__90256,pid,id){var vec__90257 = p__90256;var op = cljs.core.nth.call(null,vec__90257,0,null);var path = cljs.core.nth.call(null,vec__90257,1,null);var _ = cljs.core.nth.call(null,vec__90257,2,null);var ___$1 = cljs.core.nth.call(null,vec__90257,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map