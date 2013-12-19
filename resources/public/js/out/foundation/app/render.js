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
goog.require('foundation.app.ui');
goog.require('goog.dom');
goog.require('dommy.core');
goog.require('goog.dom');
goog.require('dommy.template');
goog.require('goog.events.KeyHandler');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('dommy.template');
goog.require('goog.events.MouseWheelEvent');
goog.require('foundation.app.data.dependency');
goog.require('goog.events.ActionEvent');
goog.require('goog.ui.IdGenerator');
goog.require('goog.events');
goog.require('goog.events.OnlineHandler');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.ui');
goog.require('goog.events');
goog.require('foundation.app.data.dependency');
goog.require('dommy.core');
goog.require('goog.events.FileDropHandler');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__227235,pid,id){var vec__227236 = p__227235;var op = cljs.core.nth.call(null,vec__227236,0,null);var path = cljs.core.nth.call(null,vec__227236,1,null);var _ = cljs.core.nth.call(null,vec__227236,2,null);var ___$1 = cljs.core.nth.call(null,vec__227236,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj227238 = {};return obj227238;
})();
foundation.app.render._find_dispatches = (function _find_dispatches(_,t,e){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IEventDelegate$_find_dispatches$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IEventDelegate$_find_dispatches$arity$3(_,t,e);
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
})().call(null,_,t,e);
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__227239_SHARP_){return cljs.core.not.call(null,p1__227239_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__227241 = (new goog.events.EventHandler(renderer));G__227241.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__227241.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__227241,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__227241;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__227242_SHARP_){return cljs.core.get.call(null,n,p1__227242_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__227247 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__227248 = null;var count__227249 = 0;var i__227250 = 0;while(true){
if((i__227250 < count__227249))
{var f = cljs.core._nth.call(null,chunk__227248,i__227250);f.call(null);
{
var G__227251 = seq__227247;
var G__227252 = chunk__227248;
var G__227253 = count__227249;
var G__227254 = (i__227250 + 1);
seq__227247 = G__227251;
chunk__227248 = G__227252;
count__227249 = G__227253;
i__227250 = G__227254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227247);if(temp__4092__auto__)
{var seq__227247__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227247__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227247__$1);{
var G__227255 = cljs.core.chunk_rest.call(null,seq__227247__$1);
var G__227256 = c__8952__auto__;
var G__227257 = cljs.core.count.call(null,c__8952__auto__);
var G__227258 = 0;
seq__227247 = G__227255;
chunk__227248 = G__227256;
count__227249 = G__227257;
i__227250 = G__227258;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__227247__$1);f.call(null);
{
var G__227259 = cljs.core.next.call(null,seq__227247__$1);
var G__227260 = null;
var G__227261 = 0;
var G__227262 = 0;
seq__227247 = G__227259;
chunk__227248 = G__227260;
count__227249 = G__227261;
i__227250 = G__227262;
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
foundation.app.render.IRenderer = (function (){var obj227264 = {};return obj227264;
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
foundation.app.render.IRender = (function (){var obj227266 = {};return obj227266;
})();
foundation.app.render._render = (function _render(_,renderer){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRender$_render$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRender$_render$arity$2(_,renderer);
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
})().call(null,_,renderer);
}
});
foundation.app.render.extend_component = (function extend_component(component,renderer,event_type){foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null),component);
return component;
});
Element.prototype.cljs$core$IWithMeta$ = true;
Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (el,meta){var el__$1 = this;el__$1.meta = meta;
return el__$1;
});
Element.prototype.cljs$core$IMeta$ = true;
Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (el){var el__$1 = this;return el__$1.meta;
});
Element.prototype.foundation$app$render$IRender$ = true;
Element.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return x__$1;
});
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return dommy.template.__GT_node_like.call(null,x__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__227267 = x;var G__227267__$1 = (((function (){var G__227268 = x;if(G__227268)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227268.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__227268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__227268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__227268);
}
})())?foundation.app.render.extend_component.call(null,G__227267,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__227267);var G__227267__$2 = (((function (){var G__227269 = x;if(G__227269)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227269.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__227269.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__227269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__227269);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__227267__$1);var G__227267__$3 = (((function (){var G__227270 = x;if(G__227270)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227270.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__227270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__227270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__227270);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__227267__$2);var G__227267__$4 = (((function (){var G__227271 = x;if(G__227271)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227271.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__227271.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__227271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__227271);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__227267__$3);var G__227267__$5 = (((function (){var G__227272 = x;if(G__227272)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227272.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__227272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__227272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__227272);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__227267__$4);var G__227267__$6 = (((function (){var G__227273 = x;if(G__227273)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227273.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__227273.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__227273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__227273);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__227267__$5);var G__227267__$7 = (((function (){var G__227274 = x;if(G__227274)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227274.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__227274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__227274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__227274);
}
})())?foundation.app.render.extend_component.call(null,G__227267__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__227267__$6);var G__227267__$8 = (((function (){var G__227275 = x;if(G__227275)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227275.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__227275.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__227275);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__227275);
}
})())?foundation.app.ui._render.call(null,G__227267__$7):G__227267__$7);return G__227267__$8;
})();return cljs.core.with_meta.call(null,dom_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x], null));
}));
(foundation.app.render.IRender["null"] = true);
(foundation.app.render._render["null"] = (function (_,___$1){return null;
}));
foundation.app.render.sort_deps = (function sort_deps(deps,pid){return cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,cljs.core.deref.call(null,deps)),cljs.core.remove.call(null,cljs.core.nil_QMARK_,foundation.app.data.dependency.transitive_dependents.call(null,cljs.core.deref.call(null,deps),pid)));
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_find_dispatches$arity$3 = (function (renderer,event_type,e){var self__ = this;
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__227277_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__227277_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227281 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__227282 = null;var count__227283 = 0;var i__227284 = 0;while(true){
if((i__227284 < count__227283))
{var component = cljs.core._nth.call(null,chunk__227282,i__227284);console.log(component);
{
var G__227348 = seq__227281;
var G__227349 = chunk__227282;
var G__227350 = count__227283;
var G__227351 = (i__227284 + 1);
seq__227281 = G__227348;
chunk__227282 = G__227349;
count__227283 = G__227350;
i__227284 = G__227351;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227281);if(temp__4092__auto__)
{var seq__227281__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227281__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227281__$1);{
var G__227352 = cljs.core.chunk_rest.call(null,seq__227281__$1);
var G__227353 = c__8952__auto__;
var G__227354 = cljs.core.count.call(null,c__8952__auto__);
var G__227355 = 0;
seq__227281 = G__227352;
chunk__227282 = G__227353;
count__227283 = G__227354;
i__227284 = G__227355;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227281__$1);console.log(component);
{
var G__227356 = cljs.core.next.call(null,seq__227281__$1);
var G__227357 = null;
var G__227358 = 0;
var G__227359 = 0;
seq__227281 = G__227356;
chunk__227282 = G__227357;
count__227283 = G__227358;
i__227284 = G__227359;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_key$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227285 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__227286 = null;var count__227287 = 0;var i__227288 = 0;while(true){
if((i__227288 < count__227287))
{var component = cljs.core._nth.call(null,chunk__227286,i__227288);console.log(component);
{
var G__227360 = seq__227285;
var G__227361 = chunk__227286;
var G__227362 = count__227287;
var G__227363 = (i__227288 + 1);
seq__227285 = G__227360;
chunk__227286 = G__227361;
count__227287 = G__227362;
i__227288 = G__227363;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227285);if(temp__4092__auto__)
{var seq__227285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227285__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227285__$1);{
var G__227364 = cljs.core.chunk_rest.call(null,seq__227285__$1);
var G__227365 = c__8952__auto__;
var G__227366 = cljs.core.count.call(null,c__8952__auto__);
var G__227367 = 0;
seq__227285 = G__227364;
chunk__227286 = G__227365;
count__227287 = G__227366;
i__227288 = G__227367;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227285__$1);console.log(component);
{
var G__227368 = cljs.core.next.call(null,seq__227285__$1);
var G__227369 = null;
var G__227370 = 0;
var G__227371 = 0;
seq__227285 = G__227368;
chunk__227286 = G__227369;
count__227287 = G__227370;
i__227288 = G__227371;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_focus$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227289 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__227290 = null;var count__227291 = 0;var i__227292 = 0;while(true){
if((i__227292 < count__227291))
{var component = cljs.core._nth.call(null,chunk__227290,i__227292);console.log(component);
{
var G__227372 = seq__227289;
var G__227373 = chunk__227290;
var G__227374 = count__227291;
var G__227375 = (i__227292 + 1);
seq__227289 = G__227372;
chunk__227290 = G__227373;
count__227291 = G__227374;
i__227292 = G__227375;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227289);if(temp__4092__auto__)
{var seq__227289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227289__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227289__$1);{
var G__227376 = cljs.core.chunk_rest.call(null,seq__227289__$1);
var G__227377 = c__8952__auto__;
var G__227378 = cljs.core.count.call(null,c__8952__auto__);
var G__227379 = 0;
seq__227289 = G__227376;
chunk__227290 = G__227377;
count__227291 = G__227378;
i__227292 = G__227379;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227289__$1);console.log(component);
{
var G__227380 = cljs.core.next.call(null,seq__227289__$1);
var G__227381 = null;
var G__227382 = 0;
var G__227383 = 0;
seq__227289 = G__227380;
chunk__227290 = G__227381;
count__227291 = G__227382;
i__227292 = G__227383;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_scroll$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227293 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__227294 = null;var count__227295 = 0;var i__227296 = 0;while(true){
if((i__227296 < count__227295))
{var component = cljs.core._nth.call(null,chunk__227294,i__227296);console.log(component);
{
var G__227384 = seq__227293;
var G__227385 = chunk__227294;
var G__227386 = count__227295;
var G__227387 = (i__227296 + 1);
seq__227293 = G__227384;
chunk__227294 = G__227385;
count__227295 = G__227386;
i__227296 = G__227387;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227293);if(temp__4092__auto__)
{var seq__227293__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227293__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227293__$1);{
var G__227388 = cljs.core.chunk_rest.call(null,seq__227293__$1);
var G__227389 = c__8952__auto__;
var G__227390 = cljs.core.count.call(null,c__8952__auto__);
var G__227391 = 0;
seq__227293 = G__227388;
chunk__227294 = G__227389;
count__227295 = G__227390;
i__227296 = G__227391;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227293__$1);console.log(component);
{
var G__227392 = cljs.core.next.call(null,seq__227293__$1);
var G__227393 = null;
var G__227394 = 0;
var G__227395 = 0;
seq__227293 = G__227392;
chunk__227294 = G__227393;
count__227295 = G__227394;
i__227296 = G__227395;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_drop$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227297 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__227298 = null;var count__227299 = 0;var i__227300 = 0;while(true){
if((i__227300 < count__227299))
{var component = cljs.core._nth.call(null,chunk__227298,i__227300);console.log(component);
{
var G__227396 = seq__227297;
var G__227397 = chunk__227298;
var G__227398 = count__227299;
var G__227399 = (i__227300 + 1);
seq__227297 = G__227396;
chunk__227298 = G__227397;
count__227299 = G__227398;
i__227300 = G__227399;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227297);if(temp__4092__auto__)
{var seq__227297__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227297__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227297__$1);{
var G__227400 = cljs.core.chunk_rest.call(null,seq__227297__$1);
var G__227401 = c__8952__auto__;
var G__227402 = cljs.core.count.call(null,c__8952__auto__);
var G__227403 = 0;
seq__227297 = G__227400;
chunk__227298 = G__227401;
count__227299 = G__227402;
i__227300 = G__227403;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227297__$1);console.log(component);
{
var G__227404 = cljs.core.next.call(null,seq__227297__$1);
var G__227405 = null;
var G__227406 = 0;
var G__227407 = 0;
seq__227297 = G__227404;
chunk__227298 = G__227405;
count__227299 = G__227406;
i__227300 = G__227407;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_online$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227301 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__227302 = null;var count__227303 = 0;var i__227304 = 0;while(true){
if((i__227304 < count__227303))
{var component = cljs.core._nth.call(null,chunk__227302,i__227304);console.log(component);
{
var G__227408 = seq__227301;
var G__227409 = chunk__227302;
var G__227410 = count__227303;
var G__227411 = (i__227304 + 1);
seq__227301 = G__227408;
chunk__227302 = G__227409;
count__227303 = G__227410;
i__227304 = G__227411;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227301);if(temp__4092__auto__)
{var seq__227301__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227301__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227301__$1);{
var G__227412 = cljs.core.chunk_rest.call(null,seq__227301__$1);
var G__227413 = c__8952__auto__;
var G__227414 = cljs.core.count.call(null,c__8952__auto__);
var G__227415 = 0;
seq__227301 = G__227412;
chunk__227302 = G__227413;
count__227303 = G__227414;
i__227304 = G__227415;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227301__$1);console.log(component);
{
var G__227416 = cljs.core.next.call(null,seq__227301__$1);
var G__227417 = null;
var G__227418 = 0;
var G__227419 = 0;
seq__227301 = G__227416;
chunk__227302 = G__227417;
count__227303 = G__227418;
i__227304 = G__227419;
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
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_resize$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__227305 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__227306 = null;var count__227307 = 0;var i__227308 = 0;while(true){
if((i__227308 < count__227307))
{var component = cljs.core._nth.call(null,chunk__227306,i__227308);console.log(component);
{
var G__227420 = seq__227305;
var G__227421 = chunk__227306;
var G__227422 = count__227307;
var G__227423 = (i__227308 + 1);
seq__227305 = G__227420;
chunk__227306 = G__227421;
count__227307 = G__227422;
i__227308 = G__227423;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227305);if(temp__4092__auto__)
{var seq__227305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227305__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227305__$1);{
var G__227424 = cljs.core.chunk_rest.call(null,seq__227305__$1);
var G__227425 = c__8952__auto__;
var G__227426 = cljs.core.count.call(null,c__8952__auto__);
var G__227427 = 0;
seq__227305 = G__227424;
chunk__227306 = G__227425;
count__227307 = G__227426;
i__227308 = G__227427;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__227305__$1);console.log(component);
{
var G__227428 = cljs.core.next.call(null,seq__227305__$1);
var G__227429 = null;
var G__227430 = 0;
var G__227431 = 0;
seq__227305 = G__227428;
chunk__227306 = G__227429;
count__227307 = G__227430;
i__227308 = G__227431;
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
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var handlers__$1 = cljs.core.reset_BANG_.call(null,self__.handlers,foundation.app.render.event_delegate.call(null,renderer__$1));var render_fns = cljs.core.methods$.call(null,foundation.app.render.render);var render_fn__$1 = ((function (handlers__$1,render_fns){
return (function (deltas){var temp__4092__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,((function (handlers__$1,render_fns){
return (function (p__227309){var vec__227310 = p__227309;var op = cljs.core.nth.call(null,vec__227310,0,null);var path = cljs.core.nth.call(null,vec__227310,1,null);var _ = cljs.core.nth.call(null,vec__227310,2,null);var ___$1 = cljs.core.nth.call(null,vec__227310,3,null);var delta = vec__227310;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
{var deltas__$1 = temp__4092__auto__;foundation.app.render.log_fn.call(null,cljs.core.map.call(null,((function (deltas__$1,temp__4092__auto__,handlers__$1,render_fns){
return (function (p1__227276_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__227276_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__227311 = cljs.core.seq.call(null,deltas__$1);var chunk__227312 = null;var count__227313 = 0;var i__227314 = 0;while(true){
if((i__227314 < count__227313))
{var vec__227315 = cljs.core._nth.call(null,chunk__227312,i__227314);var vec__227316 = cljs.core.nth.call(null,vec__227315,0,null);var op = cljs.core.nth.call(null,vec__227316,0,null);var path = cljs.core.nth.call(null,vec__227316,1,null);var _ = cljs.core.nth.call(null,vec__227316,2,null);var ___$1 = cljs.core.nth.call(null,vec__227316,3,null);var d = vec__227316;var f = cljs.core.nth.call(null,vec__227315,1,null);var id_227432 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_227433 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__227317_227434 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__227317_227434))
{var seq__227318_227435 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_227433));var chunk__227319_227436 = null;var count__227320_227437 = 0;var i__227321_227438 = 0;while(true){
if((i__227321_227438 < count__227320_227437))
{var dep_227439 = cljs.core._nth.call(null,chunk__227319_227436,i__227321_227438);var dep_pid_227440 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227439);var temp__4092__auto___227441__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227439], null));if(cljs.core.truth_(temp__4092__auto___227441__$1))
{var old_content_227442 = temp__4092__auto___227441__$1;dommy.core.remove_BANG_.call(null,old_content_227442);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227439], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227439], null));
{
var G__227443 = seq__227318_227435;
var G__227444 = chunk__227319_227436;
var G__227445 = count__227320_227437;
var G__227446 = (i__227321_227438 + 1);
seq__227318_227435 = G__227443;
chunk__227319_227436 = G__227444;
count__227320_227437 = G__227445;
i__227321_227438 = G__227446;
continue;
}
} else
{var temp__4092__auto___227447__$1 = cljs.core.seq.call(null,seq__227318_227435);if(temp__4092__auto___227447__$1)
{var seq__227318_227448__$1 = temp__4092__auto___227447__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227318_227448__$1))
{var c__8952__auto___227449 = cljs.core.chunk_first.call(null,seq__227318_227448__$1);{
var G__227450 = cljs.core.chunk_rest.call(null,seq__227318_227448__$1);
var G__227451 = c__8952__auto___227449;
var G__227452 = cljs.core.count.call(null,c__8952__auto___227449);
var G__227453 = 0;
seq__227318_227435 = G__227450;
chunk__227319_227436 = G__227451;
count__227320_227437 = G__227452;
i__227321_227438 = G__227453;
continue;
}
} else
{var dep_227454 = cljs.core.first.call(null,seq__227318_227448__$1);var dep_pid_227455 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227454);var temp__4092__auto___227456__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227454], null));if(cljs.core.truth_(temp__4092__auto___227456__$2))
{var old_content_227457 = temp__4092__auto___227456__$2;dommy.core.remove_BANG_.call(null,old_content_227457);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227454], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227454], null));
{
var G__227458 = cljs.core.next.call(null,seq__227318_227448__$1);
var G__227459 = null;
var G__227460 = 0;
var G__227461 = 0;
seq__227318_227435 = G__227458;
chunk__227319_227436 = G__227459;
count__227320_227437 = G__227460;
i__227321_227438 = G__227461;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__227317_227434))
{var seq__227322_227462 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_227433));var chunk__227323_227463 = null;var count__227324_227464 = 0;var i__227325_227465 = 0;while(true){
if((i__227325_227465 < count__227324_227464))
{var dep_227466 = cljs.core._nth.call(null,chunk__227323_227463,i__227325_227465);var dep_pid_227467 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227466);var temp__4092__auto___227468__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_227467,dep_227466),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227468__$1))
{var dom_content_227469 = temp__4092__auto___227468__$1;var temp__4092__auto___227470__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227466], null));if(cljs.core.truth_(temp__4092__auto___227470__$2))
{var old_content_227471 = temp__4092__auto___227470__$2;dommy.core.replace_BANG_.call(null,old_content_227471,dom_content_227469);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227466], null),dom_content_227469);
} else
{}
{
var G__227472 = seq__227322_227462;
var G__227473 = chunk__227323_227463;
var G__227474 = count__227324_227464;
var G__227475 = (i__227325_227465 + 1);
seq__227322_227462 = G__227472;
chunk__227323_227463 = G__227473;
count__227324_227464 = G__227474;
i__227325_227465 = G__227475;
continue;
}
} else
{var temp__4092__auto___227476__$1 = cljs.core.seq.call(null,seq__227322_227462);if(temp__4092__auto___227476__$1)
{var seq__227322_227477__$1 = temp__4092__auto___227476__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227322_227477__$1))
{var c__8952__auto___227478 = cljs.core.chunk_first.call(null,seq__227322_227477__$1);{
var G__227479 = cljs.core.chunk_rest.call(null,seq__227322_227477__$1);
var G__227480 = c__8952__auto___227478;
var G__227481 = cljs.core.count.call(null,c__8952__auto___227478);
var G__227482 = 0;
seq__227322_227462 = G__227479;
chunk__227323_227463 = G__227480;
count__227324_227464 = G__227481;
i__227325_227465 = G__227482;
continue;
}
} else
{var dep_227483 = cljs.core.first.call(null,seq__227322_227477__$1);var dep_pid_227484 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227483);var temp__4092__auto___227485__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_227484,dep_227483),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227485__$2))
{var dom_content_227486 = temp__4092__auto___227485__$2;var temp__4092__auto___227487__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227483], null));if(cljs.core.truth_(temp__4092__auto___227487__$3))
{var old_content_227488 = temp__4092__auto___227487__$3;dommy.core.replace_BANG_.call(null,old_content_227488,dom_content_227486);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227483], null),dom_content_227486);
} else
{}
{
var G__227489 = cljs.core.next.call(null,seq__227322_227477__$1);
var G__227490 = null;
var G__227491 = 0;
var G__227492 = 0;
seq__227322_227462 = G__227489;
chunk__227323_227463 = G__227490;
count__227324_227464 = G__227491;
i__227325_227465 = G__227492;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__227317_227434))
{var temp__4092__auto___227493__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_227433,id_227432),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227493__$1))
{var dom_227494 = temp__4092__auto___227493__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_227432], null),dom_227494);
var temp__4090__auto___227495 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_227494);if(cljs.core.truth_(and__8211__auto__))
{var G__227326 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_227494));if(G__227326)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227326.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__227326.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__227326);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__227326);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_227494))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_227433], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_227433], null)));if(cljs.core.truth_(temp__4090__auto___227495))
{var parent_227496 = temp__4090__auto___227495;dommy.core.append_BANG_.call(null,parent_227496,dom_227494);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_227494);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_227432,pid_227433);
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
var G__227497 = seq__227311;
var G__227498 = chunk__227312;
var G__227499 = count__227313;
var G__227500 = (i__227314 + 1);
seq__227311 = G__227497;
chunk__227312 = G__227498;
count__227313 = G__227499;
i__227314 = G__227500;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__227311);if(temp__4092__auto____$1)
{var seq__227311__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227311__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227311__$1);{
var G__227501 = cljs.core.chunk_rest.call(null,seq__227311__$1);
var G__227502 = c__8952__auto__;
var G__227503 = cljs.core.count.call(null,c__8952__auto__);
var G__227504 = 0;
seq__227311 = G__227501;
chunk__227312 = G__227502;
count__227313 = G__227503;
i__227314 = G__227504;
continue;
}
} else
{var vec__227327 = cljs.core.first.call(null,seq__227311__$1);var vec__227328 = cljs.core.nth.call(null,vec__227327,0,null);var op = cljs.core.nth.call(null,vec__227328,0,null);var path = cljs.core.nth.call(null,vec__227328,1,null);var _ = cljs.core.nth.call(null,vec__227328,2,null);var ___$1 = cljs.core.nth.call(null,vec__227328,3,null);var d = vec__227328;var f = cljs.core.nth.call(null,vec__227327,1,null);var id_227505 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_227506 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__227329_227507 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__227329_227507))
{var seq__227330_227508 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_227506));var chunk__227331_227509 = null;var count__227332_227510 = 0;var i__227333_227511 = 0;while(true){
if((i__227333_227511 < count__227332_227510))
{var dep_227512 = cljs.core._nth.call(null,chunk__227331_227509,i__227333_227511);var dep_pid_227513 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227512);var temp__4092__auto___227514__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227512], null));if(cljs.core.truth_(temp__4092__auto___227514__$2))
{var old_content_227515 = temp__4092__auto___227514__$2;dommy.core.remove_BANG_.call(null,old_content_227515);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227512], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227512], null));
{
var G__227516 = seq__227330_227508;
var G__227517 = chunk__227331_227509;
var G__227518 = count__227332_227510;
var G__227519 = (i__227333_227511 + 1);
seq__227330_227508 = G__227516;
chunk__227331_227509 = G__227517;
count__227332_227510 = G__227518;
i__227333_227511 = G__227519;
continue;
}
} else
{var temp__4092__auto___227520__$2 = cljs.core.seq.call(null,seq__227330_227508);if(temp__4092__auto___227520__$2)
{var seq__227330_227521__$1 = temp__4092__auto___227520__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227330_227521__$1))
{var c__8952__auto___227522 = cljs.core.chunk_first.call(null,seq__227330_227521__$1);{
var G__227523 = cljs.core.chunk_rest.call(null,seq__227330_227521__$1);
var G__227524 = c__8952__auto___227522;
var G__227525 = cljs.core.count.call(null,c__8952__auto___227522);
var G__227526 = 0;
seq__227330_227508 = G__227523;
chunk__227331_227509 = G__227524;
count__227332_227510 = G__227525;
i__227333_227511 = G__227526;
continue;
}
} else
{var dep_227527 = cljs.core.first.call(null,seq__227330_227521__$1);var dep_pid_227528 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227527);var temp__4092__auto___227529__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227527], null));if(cljs.core.truth_(temp__4092__auto___227529__$3))
{var old_content_227530 = temp__4092__auto___227529__$3;dommy.core.remove_BANG_.call(null,old_content_227530);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227527], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227527], null));
{
var G__227531 = cljs.core.next.call(null,seq__227330_227521__$1);
var G__227532 = null;
var G__227533 = 0;
var G__227534 = 0;
seq__227330_227508 = G__227531;
chunk__227331_227509 = G__227532;
count__227332_227510 = G__227533;
i__227333_227511 = G__227534;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__227329_227507))
{var seq__227334_227535 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_227506));var chunk__227335_227536 = null;var count__227336_227537 = 0;var i__227337_227538 = 0;while(true){
if((i__227337_227538 < count__227336_227537))
{var dep_227539 = cljs.core._nth.call(null,chunk__227335_227536,i__227337_227538);var dep_pid_227540 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227539);var temp__4092__auto___227541__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_227540,dep_227539),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227541__$2))
{var dom_content_227542 = temp__4092__auto___227541__$2;var temp__4092__auto___227543__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227539], null));if(cljs.core.truth_(temp__4092__auto___227543__$3))
{var old_content_227544 = temp__4092__auto___227543__$3;dommy.core.replace_BANG_.call(null,old_content_227544,dom_content_227542);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227539], null),dom_content_227542);
} else
{}
{
var G__227545 = seq__227334_227535;
var G__227546 = chunk__227335_227536;
var G__227547 = count__227336_227537;
var G__227548 = (i__227337_227538 + 1);
seq__227334_227535 = G__227545;
chunk__227335_227536 = G__227546;
count__227336_227537 = G__227547;
i__227337_227538 = G__227548;
continue;
}
} else
{var temp__4092__auto___227549__$2 = cljs.core.seq.call(null,seq__227334_227535);if(temp__4092__auto___227549__$2)
{var seq__227334_227550__$1 = temp__4092__auto___227549__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227334_227550__$1))
{var c__8952__auto___227551 = cljs.core.chunk_first.call(null,seq__227334_227550__$1);{
var G__227552 = cljs.core.chunk_rest.call(null,seq__227334_227550__$1);
var G__227553 = c__8952__auto___227551;
var G__227554 = cljs.core.count.call(null,c__8952__auto___227551);
var G__227555 = 0;
seq__227334_227535 = G__227552;
chunk__227335_227536 = G__227553;
count__227336_227537 = G__227554;
i__227337_227538 = G__227555;
continue;
}
} else
{var dep_227556 = cljs.core.first.call(null,seq__227334_227550__$1);var dep_pid_227557 = foundation.app.render._parent_id.call(null,renderer__$1,dep_227556);var temp__4092__auto___227558__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_227557,dep_227556),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227558__$3))
{var dom_content_227559 = temp__4092__auto___227558__$3;var temp__4092__auto___227560__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227556], null));if(cljs.core.truth_(temp__4092__auto___227560__$4))
{var old_content_227561 = temp__4092__auto___227560__$4;dommy.core.replace_BANG_.call(null,old_content_227561,dom_content_227559);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_227556], null),dom_content_227559);
} else
{}
{
var G__227562 = cljs.core.next.call(null,seq__227334_227550__$1);
var G__227563 = null;
var G__227564 = 0;
var G__227565 = 0;
seq__227334_227535 = G__227562;
chunk__227335_227536 = G__227563;
count__227336_227537 = G__227564;
i__227337_227538 = G__227565;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__227329_227507))
{var temp__4092__auto___227566__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_227506,id_227505),renderer__$1);if(cljs.core.truth_(temp__4092__auto___227566__$2))
{var dom_227567 = temp__4092__auto___227566__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_227505], null),dom_227567);
var temp__4090__auto___227568 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_227567);if(cljs.core.truth_(and__8211__auto__))
{var G__227338 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_227567));if(G__227338)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__227338.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__227338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__227338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__227338);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_227567))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_227506], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_227506], null)));if(cljs.core.truth_(temp__4090__auto___227568))
{var parent_227569 = temp__4090__auto___227568;dommy.core.append_BANG_.call(null,parent_227569,dom_227567);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_227567);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_227505,pid_227506);
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
var G__227570 = cljs.core.next.call(null,seq__227311__$1);
var G__227571 = null;
var G__227572 = 0;
var G__227573 = 0;
seq__227311 = G__227570;
chunk__227312 = G__227571;
count__227313 = G__227572;
i__227314 = G__227573;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__227339){var map__227340 = p__227339;var map__227340__$1 = ((cljs.core.seq_QMARK_.call(null,map__227340))?cljs.core.apply.call(null,cljs.core.hash_map,map__227340):map__227340);var deltas = cljs.core.get.call(null,map__227340__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__227341 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__227342 = null;var count__227343 = 0;var i__227344 = 0;while(true){
if((i__227344 < count__227343))
{var handler = cljs.core._nth.call(null,chunk__227342,i__227344);handler.dispose();
{
var G__227574 = seq__227341;
var G__227575 = chunk__227342;
var G__227576 = count__227343;
var G__227577 = (i__227344 + 1);
seq__227341 = G__227574;
chunk__227342 = G__227575;
count__227343 = G__227576;
i__227344 = G__227577;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__227341);if(temp__4092__auto__)
{var seq__227341__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__227341__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__227341__$1);{
var G__227578 = cljs.core.chunk_rest.call(null,seq__227341__$1);
var G__227579 = c__8952__auto__;
var G__227580 = cljs.core.count.call(null,c__8952__auto__);
var G__227581 = 0;
seq__227341 = G__227578;
chunk__227342 = G__227579;
count__227343 = G__227580;
i__227344 = G__227581;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__227341__$1);handler.dispose();
{
var G__227582 = cljs.core.next.call(null,seq__227341__$1);
var G__227583 = null;
var G__227584 = 0;
var G__227585 = 0;
seq__227341 = G__227582;
chunk__227342 = G__227583;
count__227343 = G__227584;
i__227344 = G__227585;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k227279,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k227279,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k227279,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k227279,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k227279,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k227279,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__227278){var self__ = this;
var this__8797__auto____$1 = this;var pred__227345 = cljs.core.keyword_identical_QMARK_;var expr__227346 = k__8798__auto__;if(cljs.core.truth_(pred__227345.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__227346)))
{return (new foundation.app.render.Renderer(G__227278,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__227345.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__227346)))
{return (new foundation.app.render.Renderer(self__.env,G__227278,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__227345.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__227346)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__227278,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__227345.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__227346)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__227278,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__227278),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__227278){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__227278,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__227280){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__227280),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__227280),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__227280),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__227280),null,cljs.core.dissoc.call(null,G__227280,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__227586,pid,id){var vec__227587 = p__227586;var op = cljs.core.nth.call(null,vec__227587,0,null);var path = cljs.core.nth.call(null,vec__227587,1,null);var _ = cljs.core.nth.call(null,vec__227587,2,null);var ___$1 = cljs.core.nth.call(null,vec__227587,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map