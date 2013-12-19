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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__120041,pid,id){var vec__120042 = p__120041;var op = cljs.core.nth.call(null,vec__120042,0,null);var path = cljs.core.nth.call(null,vec__120042,1,null);var _ = cljs.core.nth.call(null,vec__120042,2,null);var ___$1 = cljs.core.nth.call(null,vec__120042,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj120044 = {};return obj120044;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__120045_SHARP_){return cljs.core.not.call(null,p1__120045_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__120047 = (new goog.events.EventHandler(renderer));G__120047.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__120047.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__120047,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__120047;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__120048_SHARP_){return cljs.core.get.call(null,n,p1__120048_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__120053 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__120054 = null;var count__120055 = 0;var i__120056 = 0;while(true){
if((i__120056 < count__120055))
{var f = cljs.core._nth.call(null,chunk__120054,i__120056);f.call(null);
{
var G__120057 = seq__120053;
var G__120058 = chunk__120054;
var G__120059 = count__120055;
var G__120060 = (i__120056 + 1);
seq__120053 = G__120057;
chunk__120054 = G__120058;
count__120055 = G__120059;
i__120056 = G__120060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120053);if(temp__4092__auto__)
{var seq__120053__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120053__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120053__$1);{
var G__120061 = cljs.core.chunk_rest.call(null,seq__120053__$1);
var G__120062 = c__8952__auto__;
var G__120063 = cljs.core.count.call(null,c__8952__auto__);
var G__120064 = 0;
seq__120053 = G__120061;
chunk__120054 = G__120062;
count__120055 = G__120063;
i__120056 = G__120064;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__120053__$1);f.call(null);
{
var G__120065 = cljs.core.next.call(null,seq__120053__$1);
var G__120066 = null;
var G__120067 = 0;
var G__120068 = 0;
seq__120053 = G__120065;
chunk__120054 = G__120066;
count__120055 = G__120067;
i__120056 = G__120068;
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
foundation.app.render.IRenderer = (function (){var obj120070 = {};return obj120070;
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
foundation.app.render.IRender = (function (){var obj120072 = {};return obj120072;
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
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return dommy.template.__GT_node_like.call(null,x__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__120073 = x;var G__120073__$1 = (((function (){var G__120074 = x;if(G__120074)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120074.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__120074.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__120074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__120074);
}
})())?foundation.app.render.extend_component.call(null,G__120073,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__120073);var G__120073__$2 = (((function (){var G__120075 = x;if(G__120075)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120075.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__120075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__120075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__120075);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__120073__$1);var G__120073__$3 = (((function (){var G__120076 = x;if(G__120076)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120076.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__120076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__120076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__120076);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__120073__$2);var G__120073__$4 = (((function (){var G__120077 = x;if(G__120077)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120077.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__120077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__120077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__120077);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__120073__$3);var G__120073__$5 = (((function (){var G__120078 = x;if(G__120078)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120078.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__120078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__120078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__120078);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__120073__$4);var G__120073__$6 = (((function (){var G__120079 = x;if(G__120079)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120079.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__120079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__120079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__120079);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__120073__$5);var G__120073__$7 = (((function (){var G__120080 = x;if(G__120080)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120080.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__120080.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__120080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__120080);
}
})())?foundation.app.render.extend_component.call(null,G__120073__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__120073__$6);var G__120073__$8 = (((function (){var G__120081 = x;if(G__120081)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120081.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__120081.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__120081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__120081);
}
})())?foundation.app.ui._render.call(null,G__120073__$7):G__120073__$7);return G__120073__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__120082_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__120082_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__120086 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__120087 = null;var count__120088 = 0;var i__120089 = 0;while(true){
if((i__120089 < count__120088))
{var component = cljs.core._nth.call(null,chunk__120087,i__120089);console.log(component);
{
var G__120153 = seq__120086;
var G__120154 = chunk__120087;
var G__120155 = count__120088;
var G__120156 = (i__120089 + 1);
seq__120086 = G__120153;
chunk__120087 = G__120154;
count__120088 = G__120155;
i__120089 = G__120156;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120086);if(temp__4092__auto__)
{var seq__120086__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120086__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120086__$1);{
var G__120157 = cljs.core.chunk_rest.call(null,seq__120086__$1);
var G__120158 = c__8952__auto__;
var G__120159 = cljs.core.count.call(null,c__8952__auto__);
var G__120160 = 0;
seq__120086 = G__120157;
chunk__120087 = G__120158;
count__120088 = G__120159;
i__120089 = G__120160;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120086__$1);console.log(component);
{
var G__120161 = cljs.core.next.call(null,seq__120086__$1);
var G__120162 = null;
var G__120163 = 0;
var G__120164 = 0;
seq__120086 = G__120161;
chunk__120087 = G__120162;
count__120088 = G__120163;
i__120089 = G__120164;
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
var renderer__$1 = this;var seq__120090 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__120091 = null;var count__120092 = 0;var i__120093 = 0;while(true){
if((i__120093 < count__120092))
{var component = cljs.core._nth.call(null,chunk__120091,i__120093);console.log(component);
{
var G__120165 = seq__120090;
var G__120166 = chunk__120091;
var G__120167 = count__120092;
var G__120168 = (i__120093 + 1);
seq__120090 = G__120165;
chunk__120091 = G__120166;
count__120092 = G__120167;
i__120093 = G__120168;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120090);if(temp__4092__auto__)
{var seq__120090__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120090__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120090__$1);{
var G__120169 = cljs.core.chunk_rest.call(null,seq__120090__$1);
var G__120170 = c__8952__auto__;
var G__120171 = cljs.core.count.call(null,c__8952__auto__);
var G__120172 = 0;
seq__120090 = G__120169;
chunk__120091 = G__120170;
count__120092 = G__120171;
i__120093 = G__120172;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120090__$1);console.log(component);
{
var G__120173 = cljs.core.next.call(null,seq__120090__$1);
var G__120174 = null;
var G__120175 = 0;
var G__120176 = 0;
seq__120090 = G__120173;
chunk__120091 = G__120174;
count__120092 = G__120175;
i__120093 = G__120176;
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
var renderer__$1 = this;var seq__120094 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__120095 = null;var count__120096 = 0;var i__120097 = 0;while(true){
if((i__120097 < count__120096))
{var component = cljs.core._nth.call(null,chunk__120095,i__120097);console.log(component);
{
var G__120177 = seq__120094;
var G__120178 = chunk__120095;
var G__120179 = count__120096;
var G__120180 = (i__120097 + 1);
seq__120094 = G__120177;
chunk__120095 = G__120178;
count__120096 = G__120179;
i__120097 = G__120180;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120094);if(temp__4092__auto__)
{var seq__120094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120094__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120094__$1);{
var G__120181 = cljs.core.chunk_rest.call(null,seq__120094__$1);
var G__120182 = c__8952__auto__;
var G__120183 = cljs.core.count.call(null,c__8952__auto__);
var G__120184 = 0;
seq__120094 = G__120181;
chunk__120095 = G__120182;
count__120096 = G__120183;
i__120097 = G__120184;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120094__$1);console.log(component);
{
var G__120185 = cljs.core.next.call(null,seq__120094__$1);
var G__120186 = null;
var G__120187 = 0;
var G__120188 = 0;
seq__120094 = G__120185;
chunk__120095 = G__120186;
count__120096 = G__120187;
i__120097 = G__120188;
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
var renderer__$1 = this;var seq__120098 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__120099 = null;var count__120100 = 0;var i__120101 = 0;while(true){
if((i__120101 < count__120100))
{var component = cljs.core._nth.call(null,chunk__120099,i__120101);console.log(component);
{
var G__120189 = seq__120098;
var G__120190 = chunk__120099;
var G__120191 = count__120100;
var G__120192 = (i__120101 + 1);
seq__120098 = G__120189;
chunk__120099 = G__120190;
count__120100 = G__120191;
i__120101 = G__120192;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120098);if(temp__4092__auto__)
{var seq__120098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120098__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120098__$1);{
var G__120193 = cljs.core.chunk_rest.call(null,seq__120098__$1);
var G__120194 = c__8952__auto__;
var G__120195 = cljs.core.count.call(null,c__8952__auto__);
var G__120196 = 0;
seq__120098 = G__120193;
chunk__120099 = G__120194;
count__120100 = G__120195;
i__120101 = G__120196;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120098__$1);console.log(component);
{
var G__120197 = cljs.core.next.call(null,seq__120098__$1);
var G__120198 = null;
var G__120199 = 0;
var G__120200 = 0;
seq__120098 = G__120197;
chunk__120099 = G__120198;
count__120100 = G__120199;
i__120101 = G__120200;
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
var renderer__$1 = this;var seq__120102 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__120103 = null;var count__120104 = 0;var i__120105 = 0;while(true){
if((i__120105 < count__120104))
{var component = cljs.core._nth.call(null,chunk__120103,i__120105);console.log(component);
{
var G__120201 = seq__120102;
var G__120202 = chunk__120103;
var G__120203 = count__120104;
var G__120204 = (i__120105 + 1);
seq__120102 = G__120201;
chunk__120103 = G__120202;
count__120104 = G__120203;
i__120105 = G__120204;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120102);if(temp__4092__auto__)
{var seq__120102__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120102__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120102__$1);{
var G__120205 = cljs.core.chunk_rest.call(null,seq__120102__$1);
var G__120206 = c__8952__auto__;
var G__120207 = cljs.core.count.call(null,c__8952__auto__);
var G__120208 = 0;
seq__120102 = G__120205;
chunk__120103 = G__120206;
count__120104 = G__120207;
i__120105 = G__120208;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120102__$1);console.log(component);
{
var G__120209 = cljs.core.next.call(null,seq__120102__$1);
var G__120210 = null;
var G__120211 = 0;
var G__120212 = 0;
seq__120102 = G__120209;
chunk__120103 = G__120210;
count__120104 = G__120211;
i__120105 = G__120212;
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
var renderer__$1 = this;var seq__120106 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__120107 = null;var count__120108 = 0;var i__120109 = 0;while(true){
if((i__120109 < count__120108))
{var component = cljs.core._nth.call(null,chunk__120107,i__120109);console.log(component);
{
var G__120213 = seq__120106;
var G__120214 = chunk__120107;
var G__120215 = count__120108;
var G__120216 = (i__120109 + 1);
seq__120106 = G__120213;
chunk__120107 = G__120214;
count__120108 = G__120215;
i__120109 = G__120216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120106);if(temp__4092__auto__)
{var seq__120106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120106__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120106__$1);{
var G__120217 = cljs.core.chunk_rest.call(null,seq__120106__$1);
var G__120218 = c__8952__auto__;
var G__120219 = cljs.core.count.call(null,c__8952__auto__);
var G__120220 = 0;
seq__120106 = G__120217;
chunk__120107 = G__120218;
count__120108 = G__120219;
i__120109 = G__120220;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120106__$1);console.log(component);
{
var G__120221 = cljs.core.next.call(null,seq__120106__$1);
var G__120222 = null;
var G__120223 = 0;
var G__120224 = 0;
seq__120106 = G__120221;
chunk__120107 = G__120222;
count__120108 = G__120223;
i__120109 = G__120224;
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
var renderer__$1 = this;var seq__120110 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__120111 = null;var count__120112 = 0;var i__120113 = 0;while(true){
if((i__120113 < count__120112))
{var component = cljs.core._nth.call(null,chunk__120111,i__120113);console.log(component);
{
var G__120225 = seq__120110;
var G__120226 = chunk__120111;
var G__120227 = count__120112;
var G__120228 = (i__120113 + 1);
seq__120110 = G__120225;
chunk__120111 = G__120226;
count__120112 = G__120227;
i__120113 = G__120228;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120110);if(temp__4092__auto__)
{var seq__120110__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120110__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120110__$1);{
var G__120229 = cljs.core.chunk_rest.call(null,seq__120110__$1);
var G__120230 = c__8952__auto__;
var G__120231 = cljs.core.count.call(null,c__8952__auto__);
var G__120232 = 0;
seq__120110 = G__120229;
chunk__120111 = G__120230;
count__120112 = G__120231;
i__120113 = G__120232;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__120110__$1);console.log(component);
{
var G__120233 = cljs.core.next.call(null,seq__120110__$1);
var G__120234 = null;
var G__120235 = 0;
var G__120236 = 0;
seq__120110 = G__120233;
chunk__120111 = G__120234;
count__120112 = G__120235;
i__120113 = G__120236;
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
return (function (p__120114){var vec__120115 = p__120114;var op = cljs.core.nth.call(null,vec__120115,0,null);var path = cljs.core.nth.call(null,vec__120115,1,null);var _ = cljs.core.nth.call(null,vec__120115,2,null);var ___$1 = cljs.core.nth.call(null,vec__120115,3,null);var delta = vec__120115;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
var seq__120116 = cljs.core.seq.call(null,deltas__$1);var chunk__120117 = null;var count__120118 = 0;var i__120119 = 0;while(true){
if((i__120119 < count__120118))
{var vec__120120 = cljs.core._nth.call(null,chunk__120117,i__120119);var vec__120121 = cljs.core.nth.call(null,vec__120120,0,null);var op = cljs.core.nth.call(null,vec__120121,0,null);var path = cljs.core.nth.call(null,vec__120121,1,null);var _ = cljs.core.nth.call(null,vec__120121,2,null);var ___$1 = cljs.core.nth.call(null,vec__120121,3,null);var d = vec__120121;var f = cljs.core.nth.call(null,vec__120120,1,null);var id_120237 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_120238 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__120122_120239 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__120122_120239))
{var seq__120123_120240 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_120238));var chunk__120124_120241 = null;var count__120125_120242 = 0;var i__120126_120243 = 0;while(true){
if((i__120126_120243 < count__120125_120242))
{var dep_120244 = cljs.core._nth.call(null,chunk__120124_120241,i__120126_120243);var dep_pid_120245 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120244);var temp__4092__auto___120246__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120244], null));if(cljs.core.truth_(temp__4092__auto___120246__$1))
{var old_content_120247 = temp__4092__auto___120246__$1;dommy.core.remove_BANG_.call(null,old_content_120247);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120244], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120244], null));
{
var G__120248 = seq__120123_120240;
var G__120249 = chunk__120124_120241;
var G__120250 = count__120125_120242;
var G__120251 = (i__120126_120243 + 1);
seq__120123_120240 = G__120248;
chunk__120124_120241 = G__120249;
count__120125_120242 = G__120250;
i__120126_120243 = G__120251;
continue;
}
} else
{var temp__4092__auto___120252__$1 = cljs.core.seq.call(null,seq__120123_120240);if(temp__4092__auto___120252__$1)
{var seq__120123_120253__$1 = temp__4092__auto___120252__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120123_120253__$1))
{var c__8952__auto___120254 = cljs.core.chunk_first.call(null,seq__120123_120253__$1);{
var G__120255 = cljs.core.chunk_rest.call(null,seq__120123_120253__$1);
var G__120256 = c__8952__auto___120254;
var G__120257 = cljs.core.count.call(null,c__8952__auto___120254);
var G__120258 = 0;
seq__120123_120240 = G__120255;
chunk__120124_120241 = G__120256;
count__120125_120242 = G__120257;
i__120126_120243 = G__120258;
continue;
}
} else
{var dep_120259 = cljs.core.first.call(null,seq__120123_120253__$1);var dep_pid_120260 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120259);var temp__4092__auto___120261__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120259], null));if(cljs.core.truth_(temp__4092__auto___120261__$2))
{var old_content_120262 = temp__4092__auto___120261__$2;dommy.core.remove_BANG_.call(null,old_content_120262);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120259], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120259], null));
{
var G__120263 = cljs.core.next.call(null,seq__120123_120253__$1);
var G__120264 = null;
var G__120265 = 0;
var G__120266 = 0;
seq__120123_120240 = G__120263;
chunk__120124_120241 = G__120264;
count__120125_120242 = G__120265;
i__120126_120243 = G__120266;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__120122_120239))
{var seq__120127_120267 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_120238));var chunk__120128_120268 = null;var count__120129_120269 = 0;var i__120130_120270 = 0;while(true){
if((i__120130_120270 < count__120129_120269))
{var dep_120271 = cljs.core._nth.call(null,chunk__120128_120268,i__120130_120270);var dep_pid_120272 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120271);var temp__4092__auto___120273__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_120272,dep_120271),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120273__$1))
{var dom_content_120274 = temp__4092__auto___120273__$1;var temp__4092__auto___120275__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120271], null));if(cljs.core.truth_(temp__4092__auto___120275__$2))
{var old_content_120276 = temp__4092__auto___120275__$2;dommy.core.replace_BANG_.call(null,old_content_120276,dom_content_120274);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120271], null),dom_content_120274);
} else
{}
{
var G__120277 = seq__120127_120267;
var G__120278 = chunk__120128_120268;
var G__120279 = count__120129_120269;
var G__120280 = (i__120130_120270 + 1);
seq__120127_120267 = G__120277;
chunk__120128_120268 = G__120278;
count__120129_120269 = G__120279;
i__120130_120270 = G__120280;
continue;
}
} else
{var temp__4092__auto___120281__$1 = cljs.core.seq.call(null,seq__120127_120267);if(temp__4092__auto___120281__$1)
{var seq__120127_120282__$1 = temp__4092__auto___120281__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120127_120282__$1))
{var c__8952__auto___120283 = cljs.core.chunk_first.call(null,seq__120127_120282__$1);{
var G__120284 = cljs.core.chunk_rest.call(null,seq__120127_120282__$1);
var G__120285 = c__8952__auto___120283;
var G__120286 = cljs.core.count.call(null,c__8952__auto___120283);
var G__120287 = 0;
seq__120127_120267 = G__120284;
chunk__120128_120268 = G__120285;
count__120129_120269 = G__120286;
i__120130_120270 = G__120287;
continue;
}
} else
{var dep_120288 = cljs.core.first.call(null,seq__120127_120282__$1);var dep_pid_120289 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120288);var temp__4092__auto___120290__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_120289,dep_120288),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120290__$2))
{var dom_content_120291 = temp__4092__auto___120290__$2;var temp__4092__auto___120292__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120288], null));if(cljs.core.truth_(temp__4092__auto___120292__$3))
{var old_content_120293 = temp__4092__auto___120292__$3;dommy.core.replace_BANG_.call(null,old_content_120293,dom_content_120291);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120288], null),dom_content_120291);
} else
{}
{
var G__120294 = cljs.core.next.call(null,seq__120127_120282__$1);
var G__120295 = null;
var G__120296 = 0;
var G__120297 = 0;
seq__120127_120267 = G__120294;
chunk__120128_120268 = G__120295;
count__120129_120269 = G__120296;
i__120130_120270 = G__120297;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__120122_120239))
{var temp__4092__auto___120298__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_120238,id_120237),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120298__$1))
{var dom_120299 = temp__4092__auto___120298__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_120237], null),dom_120299);
var temp__4090__auto___120300 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_120299);if(cljs.core.truth_(and__8211__auto__))
{var G__120131 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_120299));if(G__120131)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120131.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__120131.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__120131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__120131);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_120299))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_120238], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_120238], null)));if(cljs.core.truth_(temp__4090__auto___120300))
{var parent_120301 = temp__4090__auto___120300;dommy.core.append_BANG_.call(null,parent_120301,dom_120299);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_120299);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_120237,pid_120238);
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
var G__120302 = seq__120116;
var G__120303 = chunk__120117;
var G__120304 = count__120118;
var G__120305 = (i__120119 + 1);
seq__120116 = G__120302;
chunk__120117 = G__120303;
count__120118 = G__120304;
i__120119 = G__120305;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__120116);if(temp__4092__auto____$1)
{var seq__120116__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120116__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120116__$1);{
var G__120306 = cljs.core.chunk_rest.call(null,seq__120116__$1);
var G__120307 = c__8952__auto__;
var G__120308 = cljs.core.count.call(null,c__8952__auto__);
var G__120309 = 0;
seq__120116 = G__120306;
chunk__120117 = G__120307;
count__120118 = G__120308;
i__120119 = G__120309;
continue;
}
} else
{var vec__120132 = cljs.core.first.call(null,seq__120116__$1);var vec__120133 = cljs.core.nth.call(null,vec__120132,0,null);var op = cljs.core.nth.call(null,vec__120133,0,null);var path = cljs.core.nth.call(null,vec__120133,1,null);var _ = cljs.core.nth.call(null,vec__120133,2,null);var ___$1 = cljs.core.nth.call(null,vec__120133,3,null);var d = vec__120133;var f = cljs.core.nth.call(null,vec__120132,1,null);var id_120310 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_120311 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__120134_120312 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__120134_120312))
{var seq__120135_120313 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_120311));var chunk__120136_120314 = null;var count__120137_120315 = 0;var i__120138_120316 = 0;while(true){
if((i__120138_120316 < count__120137_120315))
{var dep_120317 = cljs.core._nth.call(null,chunk__120136_120314,i__120138_120316);var dep_pid_120318 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120317);var temp__4092__auto___120319__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120317], null));if(cljs.core.truth_(temp__4092__auto___120319__$2))
{var old_content_120320 = temp__4092__auto___120319__$2;dommy.core.remove_BANG_.call(null,old_content_120320);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120317], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120317], null));
{
var G__120321 = seq__120135_120313;
var G__120322 = chunk__120136_120314;
var G__120323 = count__120137_120315;
var G__120324 = (i__120138_120316 + 1);
seq__120135_120313 = G__120321;
chunk__120136_120314 = G__120322;
count__120137_120315 = G__120323;
i__120138_120316 = G__120324;
continue;
}
} else
{var temp__4092__auto___120325__$2 = cljs.core.seq.call(null,seq__120135_120313);if(temp__4092__auto___120325__$2)
{var seq__120135_120326__$1 = temp__4092__auto___120325__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120135_120326__$1))
{var c__8952__auto___120327 = cljs.core.chunk_first.call(null,seq__120135_120326__$1);{
var G__120328 = cljs.core.chunk_rest.call(null,seq__120135_120326__$1);
var G__120329 = c__8952__auto___120327;
var G__120330 = cljs.core.count.call(null,c__8952__auto___120327);
var G__120331 = 0;
seq__120135_120313 = G__120328;
chunk__120136_120314 = G__120329;
count__120137_120315 = G__120330;
i__120138_120316 = G__120331;
continue;
}
} else
{var dep_120332 = cljs.core.first.call(null,seq__120135_120326__$1);var dep_pid_120333 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120332);var temp__4092__auto___120334__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120332], null));if(cljs.core.truth_(temp__4092__auto___120334__$3))
{var old_content_120335 = temp__4092__auto___120334__$3;dommy.core.remove_BANG_.call(null,old_content_120335);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120332], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120332], null));
{
var G__120336 = cljs.core.next.call(null,seq__120135_120326__$1);
var G__120337 = null;
var G__120338 = 0;
var G__120339 = 0;
seq__120135_120313 = G__120336;
chunk__120136_120314 = G__120337;
count__120137_120315 = G__120338;
i__120138_120316 = G__120339;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__120134_120312))
{var seq__120139_120340 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_120311));var chunk__120140_120341 = null;var count__120141_120342 = 0;var i__120142_120343 = 0;while(true){
if((i__120142_120343 < count__120141_120342))
{var dep_120344 = cljs.core._nth.call(null,chunk__120140_120341,i__120142_120343);var dep_pid_120345 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120344);var temp__4092__auto___120346__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_120345,dep_120344),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120346__$2))
{var dom_content_120347 = temp__4092__auto___120346__$2;var temp__4092__auto___120348__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120344], null));if(cljs.core.truth_(temp__4092__auto___120348__$3))
{var old_content_120349 = temp__4092__auto___120348__$3;dommy.core.replace_BANG_.call(null,old_content_120349,dom_content_120347);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120344], null),dom_content_120347);
} else
{}
{
var G__120350 = seq__120139_120340;
var G__120351 = chunk__120140_120341;
var G__120352 = count__120141_120342;
var G__120353 = (i__120142_120343 + 1);
seq__120139_120340 = G__120350;
chunk__120140_120341 = G__120351;
count__120141_120342 = G__120352;
i__120142_120343 = G__120353;
continue;
}
} else
{var temp__4092__auto___120354__$2 = cljs.core.seq.call(null,seq__120139_120340);if(temp__4092__auto___120354__$2)
{var seq__120139_120355__$1 = temp__4092__auto___120354__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120139_120355__$1))
{var c__8952__auto___120356 = cljs.core.chunk_first.call(null,seq__120139_120355__$1);{
var G__120357 = cljs.core.chunk_rest.call(null,seq__120139_120355__$1);
var G__120358 = c__8952__auto___120356;
var G__120359 = cljs.core.count.call(null,c__8952__auto___120356);
var G__120360 = 0;
seq__120139_120340 = G__120357;
chunk__120140_120341 = G__120358;
count__120141_120342 = G__120359;
i__120142_120343 = G__120360;
continue;
}
} else
{var dep_120361 = cljs.core.first.call(null,seq__120139_120355__$1);var dep_pid_120362 = foundation.app.render._parent_id.call(null,renderer__$1,dep_120361);var temp__4092__auto___120363__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_120362,dep_120361),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120363__$3))
{var dom_content_120364 = temp__4092__auto___120363__$3;var temp__4092__auto___120365__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120361], null));if(cljs.core.truth_(temp__4092__auto___120365__$4))
{var old_content_120366 = temp__4092__auto___120365__$4;dommy.core.replace_BANG_.call(null,old_content_120366,dom_content_120364);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_120361], null),dom_content_120364);
} else
{}
{
var G__120367 = cljs.core.next.call(null,seq__120139_120355__$1);
var G__120368 = null;
var G__120369 = 0;
var G__120370 = 0;
seq__120139_120340 = G__120367;
chunk__120140_120341 = G__120368;
count__120141_120342 = G__120369;
i__120142_120343 = G__120370;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__120134_120312))
{var temp__4092__auto___120371__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_120311,id_120310),renderer__$1);if(cljs.core.truth_(temp__4092__auto___120371__$2))
{var dom_120372 = temp__4092__auto___120371__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_120310], null),dom_120372);
var temp__4090__auto___120373 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_120372);if(cljs.core.truth_(and__8211__auto__))
{var G__120143 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_120372));if(G__120143)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__120143.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__120143.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__120143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__120143);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_120372))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_120311], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_120311], null)));if(cljs.core.truth_(temp__4090__auto___120373))
{var parent_120374 = temp__4090__auto___120373;dommy.core.append_BANG_.call(null,parent_120374,dom_120372);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_120372);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_120310,pid_120311);
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
var G__120375 = cljs.core.next.call(null,seq__120116__$1);
var G__120376 = null;
var G__120377 = 0;
var G__120378 = 0;
seq__120116 = G__120375;
chunk__120117 = G__120376;
count__120118 = G__120377;
i__120119 = G__120378;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__120144){var map__120145 = p__120144;var map__120145__$1 = ((cljs.core.seq_QMARK_.call(null,map__120145))?cljs.core.apply.call(null,cljs.core.hash_map,map__120145):map__120145);var deltas = cljs.core.get.call(null,map__120145__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__120146 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__120147 = null;var count__120148 = 0;var i__120149 = 0;while(true){
if((i__120149 < count__120148))
{var handler = cljs.core._nth.call(null,chunk__120147,i__120149);handler.dispose();
{
var G__120379 = seq__120146;
var G__120380 = chunk__120147;
var G__120381 = count__120148;
var G__120382 = (i__120149 + 1);
seq__120146 = G__120379;
chunk__120147 = G__120380;
count__120148 = G__120381;
i__120149 = G__120382;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__120146);if(temp__4092__auto__)
{var seq__120146__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__120146__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__120146__$1);{
var G__120383 = cljs.core.chunk_rest.call(null,seq__120146__$1);
var G__120384 = c__8952__auto__;
var G__120385 = cljs.core.count.call(null,c__8952__auto__);
var G__120386 = 0;
seq__120146 = G__120383;
chunk__120147 = G__120384;
count__120148 = G__120385;
i__120149 = G__120386;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__120146__$1);handler.dispose();
{
var G__120387 = cljs.core.next.call(null,seq__120146__$1);
var G__120388 = null;
var G__120389 = 0;
var G__120390 = 0;
seq__120146 = G__120387;
chunk__120147 = G__120388;
count__120148 = G__120389;
i__120149 = G__120390;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k120084,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k120084,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k120084,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k120084,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k120084,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k120084,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__120083){var self__ = this;
var this__8797__auto____$1 = this;var pred__120150 = cljs.core.keyword_identical_QMARK_;var expr__120151 = k__8798__auto__;if(cljs.core.truth_(pred__120150.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__120151)))
{return (new foundation.app.render.Renderer(G__120083,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__120150.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__120151)))
{return (new foundation.app.render.Renderer(self__.env,G__120083,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__120150.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__120151)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__120083,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__120150.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__120151)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__120083,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__120083),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__120083){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__120083,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__120085){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__120085),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__120085),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__120085),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__120085),null,cljs.core.dissoc.call(null,G__120085,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__120391,pid,id){var vec__120392 = p__120391;var op = cljs.core.nth.call(null,vec__120392,0,null);var path = cljs.core.nth.call(null,vec__120392,1,null);var _ = cljs.core.nth.call(null,vec__120392,2,null);var ___$1 = cljs.core.nth.call(null,vec__120392,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map