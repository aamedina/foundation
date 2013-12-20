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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__333437,input_queue,pid,id){var vec__333438 = p__333437;var op = cljs.core.nth.call(null,vec__333438,0,null);var path = cljs.core.nth.call(null,vec__333438,1,null);var _ = cljs.core.nth.call(null,vec__333438,2,null);var ___$1 = cljs.core.nth.call(null,vec__333438,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj333440 = {};return obj333440;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__333441_SHARP_){return cljs.core.not.call(null,p1__333441_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__333443 = (new goog.events.EventHandler(renderer));G__333443.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__333443.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__333443,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__333443;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__333444_SHARP_){return cljs.core.get.call(null,n,p1__333444_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__333449 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__333450 = null;var count__333451 = 0;var i__333452 = 0;while(true){
if((i__333452 < count__333451))
{var f = cljs.core._nth.call(null,chunk__333450,i__333452);f.call(null);
{
var G__333453 = seq__333449;
var G__333454 = chunk__333450;
var G__333455 = count__333451;
var G__333456 = (i__333452 + 1);
seq__333449 = G__333453;
chunk__333450 = G__333454;
count__333451 = G__333455;
i__333452 = G__333456;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333449);if(temp__4092__auto__)
{var seq__333449__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333449__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333449__$1);{
var G__333457 = cljs.core.chunk_rest.call(null,seq__333449__$1);
var G__333458 = c__8952__auto__;
var G__333459 = cljs.core.count.call(null,c__8952__auto__);
var G__333460 = 0;
seq__333449 = G__333457;
chunk__333450 = G__333458;
count__333451 = G__333459;
i__333452 = G__333460;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__333449__$1);f.call(null);
{
var G__333461 = cljs.core.next.call(null,seq__333449__$1);
var G__333462 = null;
var G__333463 = 0;
var G__333464 = 0;
seq__333449 = G__333461;
chunk__333450 = G__333462;
count__333451 = G__333463;
i__333452 = G__333464;
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
foundation.app.render.IRenderer = (function (){var obj333466 = {};return obj333466;
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
foundation.app.render.IRender = (function (){var obj333468 = {};return obj333468;
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
foundation.app.render.extend_component = (function extend_component(component,renderer,event_type){foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY).call(null,foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null)),cljs.core.with_meta.call(null,component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",1014003892),foundation.app.render._render.call(null,foundation.app.ui._render.call(null,component),renderer)], null))));
return component;
});
Element.prototype.cljs$core$IWithMeta$ = true;
Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (el,meta){var el__$1 = this;el__$1.meta = meta;
return el__$1;
});
Element.prototype.cljs$core$IMeta$ = true;
Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (el){var el__$1 = this;return el__$1.meta;
});
DocumentFragment.prototype.cljs$core$IWithMeta$ = true;
DocumentFragment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (el,meta){var el__$1 = this;el__$1.meta = meta;
return el__$1;
});
DocumentFragment.prototype.cljs$core$IMeta$ = true;
DocumentFragment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (el){var el__$1 = this;return el__$1.meta;
});
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__333478 = x;var G__333478__$1 = (((function (){var G__333479 = x;if(G__333479)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333479.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__333479.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333479);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333479);
}
})())?foundation.app.render.extend_component.call(null,G__333478,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__333478);var G__333478__$2 = (((function (){var G__333480 = x;if(G__333480)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333480.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__333480.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333480);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__333478__$1);var G__333478__$3 = (((function (){var G__333481 = x;if(G__333481)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333481.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__333481.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333481);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333481);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__333478__$2);var G__333478__$4 = (((function (){var G__333482 = x;if(G__333482)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333482.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__333482.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333482);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333482);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__333478__$3);var G__333478__$5 = (((function (){var G__333483 = x;if(G__333483)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333483.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__333483.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333483);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__333478__$4);var G__333478__$6 = (((function (){var G__333484 = x;if(G__333484)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333484.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__333484.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__333484);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__333484);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__333478__$5);var G__333478__$7 = (((function (){var G__333485 = x;if(G__333485)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333485.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__333485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333485);
}
})())?foundation.app.render.extend_component.call(null,G__333478__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__333478__$6);var G__333478__$8 = (((function (){var G__333486 = x;if(G__333486)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333486.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__333486.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__333486);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__333486);
}
})())?foundation.app.ui._render.call(null,G__333478__$7):G__333478__$7);return G__333478__$8;
});
Element.prototype.foundation$app$render$IRender$ = true;
Element.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return x__$1;
});
(foundation.app.render.IRender["function"] = true);
(foundation.app.render._render["function"] = (function (f,renderer){return foundation.app.render._render.call(null,f.call(null),renderer);
}));
cljs.core.Keyword.prototype.foundation$app$render$IRender$ = true;
cljs.core.Keyword.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return document.querySelector(dommy.core.selector.call(null,x__$1));
});
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return dommy.template.__GT_node_like.call(null,x__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = foundation.app.render.bind_component_events.call(null,x,renderer);return cljs.core.with_meta.call(null,dom_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x], null));
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null));return cljs.core.filter.call(null,(function (x){var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(cljs.core.comp.call(null,new cljs.core.Keyword(null,"dom","dom",1014003892),cljs.core.meta).call(null,x).id)].join('')));return ((el.innerHTML === e.target.innerHTML)) || (dommy.core.descendant_QMARK_.call(null,e.target,el));
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__333491 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__333492 = null;var count__333493 = 0;var i__333494 = 0;while(true){
if((i__333494 < count__333493))
{var c = cljs.core._nth.call(null,chunk__333492,i__333494);var G__333495_333592 = c;var G__333495_333593__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__333497 = c;if(G__333497)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333497.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__333497.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333497);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__333495_333592,e):G__333495_333592);var G__333495_333594__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__333499 = c;if(G__333499)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333499.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__333499.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__333499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__333499);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__333495_333593__$1,e):G__333495_333593__$1);{
var G__333595 = seq__333491;
var G__333596 = chunk__333492;
var G__333597 = count__333493;
var G__333598 = (i__333494 + 1);
seq__333491 = G__333595;
chunk__333492 = G__333596;
count__333493 = G__333597;
i__333494 = G__333598;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333491);if(temp__4092__auto__)
{var seq__333491__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333491__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333491__$1);{
var G__333599 = cljs.core.chunk_rest.call(null,seq__333491__$1);
var G__333600 = c__8952__auto__;
var G__333601 = cljs.core.count.call(null,c__8952__auto__);
var G__333602 = 0;
seq__333491 = G__333599;
chunk__333492 = G__333600;
count__333493 = G__333601;
i__333494 = G__333602;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333491__$1);var G__333500_333603 = c;var G__333500_333604__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__333502 = c;if(G__333502)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333502.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__333502.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__333502);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__333500_333603,e):G__333500_333603);var G__333500_333605__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__333504 = c;if(G__333504)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333504.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__333504.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__333504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__333504);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__333500_333604__$1,e):G__333500_333604__$1);{
var G__333606 = cljs.core.next.call(null,seq__333491__$1);
var G__333607 = null;
var G__333608 = 0;
var G__333609 = 0;
seq__333491 = G__333606;
chunk__333492 = G__333607;
count__333493 = G__333608;
i__333494 = G__333609;
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
var renderer__$1 = this;var seq__333505 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__333506 = null;var count__333507 = 0;var i__333508 = 0;while(true){
if((i__333508 < count__333507))
{var c = cljs.core._nth.call(null,chunk__333506,i__333508);if((function (){var G__333509 = c;if(G__333509)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333509.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__333509.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333509);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333509);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__333610 = seq__333505;
var G__333611 = chunk__333506;
var G__333612 = count__333507;
var G__333613 = (i__333508 + 1);
seq__333505 = G__333610;
chunk__333506 = G__333611;
count__333507 = G__333612;
i__333508 = G__333613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333505);if(temp__4092__auto__)
{var seq__333505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333505__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333505__$1);{
var G__333614 = cljs.core.chunk_rest.call(null,seq__333505__$1);
var G__333615 = c__8952__auto__;
var G__333616 = cljs.core.count.call(null,c__8952__auto__);
var G__333617 = 0;
seq__333505 = G__333614;
chunk__333506 = G__333615;
count__333507 = G__333616;
i__333508 = G__333617;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333505__$1);if((function (){var G__333510 = c;if(G__333510)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333510.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__333510.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333510);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__333510);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__333618 = cljs.core.next.call(null,seq__333505__$1);
var G__333619 = null;
var G__333620 = 0;
var G__333621 = 0;
seq__333505 = G__333618;
chunk__333506 = G__333619;
count__333507 = G__333620;
i__333508 = G__333621;
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
var renderer__$1 = this;var seq__333511 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__333512 = null;var count__333513 = 0;var i__333514 = 0;while(true){
if((i__333514 < count__333513))
{var c = cljs.core._nth.call(null,chunk__333512,i__333514);if((function (){var G__333515 = c;if(G__333515)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333515.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__333515.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333515);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333515);
}
})())
{var G__333516_333622 = c;var G__333516_333623__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__333516_333622,e):G__333516_333622);var G__333516_333624__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__333516_333623__$1,e):G__333516_333623__$1);} else
{}
{
var G__333625 = seq__333511;
var G__333626 = chunk__333512;
var G__333627 = count__333513;
var G__333628 = (i__333514 + 1);
seq__333511 = G__333625;
chunk__333512 = G__333626;
count__333513 = G__333627;
i__333514 = G__333628;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333511);if(temp__4092__auto__)
{var seq__333511__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333511__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333511__$1);{
var G__333629 = cljs.core.chunk_rest.call(null,seq__333511__$1);
var G__333630 = c__8952__auto__;
var G__333631 = cljs.core.count.call(null,c__8952__auto__);
var G__333632 = 0;
seq__333511 = G__333629;
chunk__333512 = G__333630;
count__333513 = G__333631;
i__333514 = G__333632;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333511__$1);if((function (){var G__333517 = c;if(G__333517)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333517.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__333517.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333517);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__333517);
}
})())
{var G__333518_333633 = c;var G__333518_333634__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__333518_333633,e):G__333518_333633);var G__333518_333635__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__333518_333634__$1,e):G__333518_333634__$1);} else
{}
{
var G__333636 = cljs.core.next.call(null,seq__333511__$1);
var G__333637 = null;
var G__333638 = 0;
var G__333639 = 0;
seq__333511 = G__333636;
chunk__333512 = G__333637;
count__333513 = G__333638;
i__333514 = G__333639;
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
var renderer__$1 = this;var seq__333519 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__333520 = null;var count__333521 = 0;var i__333522 = 0;while(true){
if((i__333522 < count__333521))
{var c = cljs.core._nth.call(null,chunk__333520,i__333522);if((function (){var G__333523 = c;if(G__333523)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333523.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__333523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333523);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__333640 = seq__333519;
var G__333641 = chunk__333520;
var G__333642 = count__333521;
var G__333643 = (i__333522 + 1);
seq__333519 = G__333640;
chunk__333520 = G__333641;
count__333521 = G__333642;
i__333522 = G__333643;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333519);if(temp__4092__auto__)
{var seq__333519__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333519__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333519__$1);{
var G__333644 = cljs.core.chunk_rest.call(null,seq__333519__$1);
var G__333645 = c__8952__auto__;
var G__333646 = cljs.core.count.call(null,c__8952__auto__);
var G__333647 = 0;
seq__333519 = G__333644;
chunk__333520 = G__333645;
count__333521 = G__333646;
i__333522 = G__333647;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333519__$1);if((function (){var G__333524 = c;if(G__333524)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333524.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__333524.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333524);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__333524);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__333648 = cljs.core.next.call(null,seq__333519__$1);
var G__333649 = null;
var G__333650 = 0;
var G__333651 = 0;
seq__333519 = G__333648;
chunk__333520 = G__333649;
count__333521 = G__333650;
i__333522 = G__333651;
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
var renderer__$1 = this;var seq__333525 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__333526 = null;var count__333527 = 0;var i__333528 = 0;while(true){
if((i__333528 < count__333527))
{var c = cljs.core._nth.call(null,chunk__333526,i__333528);if((function (){var G__333529 = c;if(G__333529)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333529.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__333529.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__333529);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__333529);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__333652 = seq__333525;
var G__333653 = chunk__333526;
var G__333654 = count__333527;
var G__333655 = (i__333528 + 1);
seq__333525 = G__333652;
chunk__333526 = G__333653;
count__333527 = G__333654;
i__333528 = G__333655;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333525);if(temp__4092__auto__)
{var seq__333525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333525__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333525__$1);{
var G__333656 = cljs.core.chunk_rest.call(null,seq__333525__$1);
var G__333657 = c__8952__auto__;
var G__333658 = cljs.core.count.call(null,c__8952__auto__);
var G__333659 = 0;
seq__333525 = G__333656;
chunk__333526 = G__333657;
count__333527 = G__333658;
i__333528 = G__333659;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333525__$1);if((function (){var G__333530 = c;if(G__333530)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333530.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__333530.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__333530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__333530);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__333660 = cljs.core.next.call(null,seq__333525__$1);
var G__333661 = null;
var G__333662 = 0;
var G__333663 = 0;
seq__333525 = G__333660;
chunk__333526 = G__333661;
count__333527 = G__333662;
i__333528 = G__333663;
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
var renderer__$1 = this;var seq__333531 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__333532 = null;var count__333533 = 0;var i__333534 = 0;while(true){
if((i__333534 < count__333533))
{var c = cljs.core._nth.call(null,chunk__333532,i__333534);if((function (){var G__333535 = c;if(G__333535)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333535.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__333535.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333535);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333535);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__333664 = seq__333531;
var G__333665 = chunk__333532;
var G__333666 = count__333533;
var G__333667 = (i__333534 + 1);
seq__333531 = G__333664;
chunk__333532 = G__333665;
count__333533 = G__333666;
i__333534 = G__333667;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333531);if(temp__4092__auto__)
{var seq__333531__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333531__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333531__$1);{
var G__333668 = cljs.core.chunk_rest.call(null,seq__333531__$1);
var G__333669 = c__8952__auto__;
var G__333670 = cljs.core.count.call(null,c__8952__auto__);
var G__333671 = 0;
seq__333531 = G__333668;
chunk__333532 = G__333669;
count__333533 = G__333670;
i__333534 = G__333671;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333531__$1);if((function (){var G__333536 = c;if(G__333536)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333536.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__333536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__333536);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__333672 = cljs.core.next.call(null,seq__333531__$1);
var G__333673 = null;
var G__333674 = 0;
var G__333675 = 0;
seq__333531 = G__333672;
chunk__333532 = G__333673;
count__333533 = G__333674;
i__333534 = G__333675;
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
var renderer__$1 = this;var seq__333537 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__333538 = null;var count__333539 = 0;var i__333540 = 0;while(true){
if((i__333540 < count__333539))
{var c = cljs.core._nth.call(null,chunk__333538,i__333540);if((function (){var G__333541 = c;if(G__333541)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333541.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__333541.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333541);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__333676 = seq__333537;
var G__333677 = chunk__333538;
var G__333678 = count__333539;
var G__333679 = (i__333540 + 1);
seq__333537 = G__333676;
chunk__333538 = G__333677;
count__333539 = G__333678;
i__333540 = G__333679;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333537);if(temp__4092__auto__)
{var seq__333537__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333537__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333537__$1);{
var G__333680 = cljs.core.chunk_rest.call(null,seq__333537__$1);
var G__333681 = c__8952__auto__;
var G__333682 = cljs.core.count.call(null,c__8952__auto__);
var G__333683 = 0;
seq__333537 = G__333680;
chunk__333538 = G__333681;
count__333539 = G__333682;
i__333540 = G__333683;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__333537__$1);if((function (){var G__333542 = c;if(G__333542)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333542.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__333542.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333542);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__333542);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__333684 = cljs.core.next.call(null,seq__333537__$1);
var G__333685 = null;
var G__333686 = 0;
var G__333687 = 0;
seq__333537 = G__333684;
chunk__333538 = G__333685;
count__333539 = G__333686;
i__333540 = G__333687;
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
var renderer__$1 = this;var handlers__$1 = cljs.core.reset_BANG_.call(null,self__.handlers,foundation.app.render.event_delegate.call(null,renderer__$1));var render_fns = cljs.core.methods$.call(null,foundation.app.render.render);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(renderer__$1);var render_fn__$1 = ((function (handlers__$1,render_fns,input){
return (function (deltas){var temp__4092__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,((function (handlers__$1,render_fns,input){
return (function (p__333543){var vec__333544 = p__333543;var op = cljs.core.nth.call(null,vec__333544,0,null);var path = cljs.core.nth.call(null,vec__333544,1,null);var _ = cljs.core.nth.call(null,vec__333544,2,null);var ___$1 = cljs.core.nth.call(null,vec__333544,3,null);var delta = vec__333544;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,f], null);
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta,null], null);
} else
{return null;
}
}
});})(handlers__$1,render_fns,input))
,deltas));if(temp__4092__auto__)
{var deltas__$1 = temp__4092__auto__;foundation.app.render.log_fn.call(null,cljs.core.map.call(null,((function (deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (p1__333487_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__333487_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__333545 = cljs.core.seq.call(null,deltas__$1);var chunk__333546 = null;var count__333547 = 0;var i__333548 = 0;while(true){
if((i__333548 < count__333547))
{var vec__333549 = cljs.core._nth.call(null,chunk__333546,i__333548);var vec__333550 = cljs.core.nth.call(null,vec__333549,0,null);var op = cljs.core.nth.call(null,vec__333550,0,null);var path = cljs.core.nth.call(null,vec__333550,1,null);var _ = cljs.core.nth.call(null,vec__333550,2,null);var ___$1 = cljs.core.nth.call(null,vec__333550,3,null);var d = vec__333550;var f = cljs.core.nth.call(null,vec__333549,1,null);var id_333688 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_333689 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__333551_333690 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__333551_333690))
{var seq__333552_333691 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_333689));var chunk__333553_333692 = null;var count__333554_333693 = 0;var i__333555_333694 = 0;while(true){
if((i__333555_333694 < count__333554_333693))
{var dep_333695 = cljs.core._nth.call(null,chunk__333553_333692,i__333555_333694);var dep_pid_333696 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333695);var temp__4092__auto___333697__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333695], null));if(cljs.core.truth_(temp__4092__auto___333697__$1))
{var old_content_333698 = temp__4092__auto___333697__$1;dommy.core.remove_BANG_.call(null,old_content_333698);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333695], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333695], null));
{
var G__333699 = seq__333552_333691;
var G__333700 = chunk__333553_333692;
var G__333701 = count__333554_333693;
var G__333702 = (i__333555_333694 + 1);
seq__333552_333691 = G__333699;
chunk__333553_333692 = G__333700;
count__333554_333693 = G__333701;
i__333555_333694 = G__333702;
continue;
}
} else
{var temp__4092__auto___333703__$1 = cljs.core.seq.call(null,seq__333552_333691);if(temp__4092__auto___333703__$1)
{var seq__333552_333704__$1 = temp__4092__auto___333703__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333552_333704__$1))
{var c__8952__auto___333705 = cljs.core.chunk_first.call(null,seq__333552_333704__$1);{
var G__333706 = cljs.core.chunk_rest.call(null,seq__333552_333704__$1);
var G__333707 = c__8952__auto___333705;
var G__333708 = cljs.core.count.call(null,c__8952__auto___333705);
var G__333709 = 0;
seq__333552_333691 = G__333706;
chunk__333553_333692 = G__333707;
count__333554_333693 = G__333708;
i__333555_333694 = G__333709;
continue;
}
} else
{var dep_333710 = cljs.core.first.call(null,seq__333552_333704__$1);var dep_pid_333711 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333710);var temp__4092__auto___333712__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333710], null));if(cljs.core.truth_(temp__4092__auto___333712__$2))
{var old_content_333713 = temp__4092__auto___333712__$2;dommy.core.remove_BANG_.call(null,old_content_333713);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333710], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333710], null));
{
var G__333714 = cljs.core.next.call(null,seq__333552_333704__$1);
var G__333715 = null;
var G__333716 = 0;
var G__333717 = 0;
seq__333552_333691 = G__333714;
chunk__333553_333692 = G__333715;
count__333554_333693 = G__333716;
i__333555_333694 = G__333717;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__333551_333690))
{var temp__4090__auto___333718 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_333689));if(temp__4090__auto___333718)
{var deps_333719__$1 = temp__4090__auto___333718;var seq__333556_333720 = cljs.core.seq.call(null,deps_333719__$1);var chunk__333557_333721 = null;var count__333558_333722 = 0;var i__333559_333723 = 0;while(true){
if((i__333559_333723 < count__333558_333722))
{var dep_333724 = cljs.core._nth.call(null,chunk__333557_333721,i__333559_333723);var dep_pid_333725 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333724);var temp__4092__auto___333726__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_333725,dep_333724),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333726__$1))
{var dom_content_333727 = temp__4092__auto___333726__$1;var temp__4092__auto___333728__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333724], null));if(cljs.core.truth_(temp__4092__auto___333728__$2))
{var old_content_333729 = temp__4092__auto___333728__$2;dommy.core.replace_BANG_.call(null,old_content_333729,dom_content_333727);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333724], null),dom_content_333727);
} else
{}
{
var G__333730 = seq__333556_333720;
var G__333731 = chunk__333557_333721;
var G__333732 = count__333558_333722;
var G__333733 = (i__333559_333723 + 1);
seq__333556_333720 = G__333730;
chunk__333557_333721 = G__333731;
count__333558_333722 = G__333732;
i__333559_333723 = G__333733;
continue;
}
} else
{var temp__4092__auto___333734__$1 = cljs.core.seq.call(null,seq__333556_333720);if(temp__4092__auto___333734__$1)
{var seq__333556_333735__$1 = temp__4092__auto___333734__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333556_333735__$1))
{var c__8952__auto___333736 = cljs.core.chunk_first.call(null,seq__333556_333735__$1);{
var G__333737 = cljs.core.chunk_rest.call(null,seq__333556_333735__$1);
var G__333738 = c__8952__auto___333736;
var G__333739 = cljs.core.count.call(null,c__8952__auto___333736);
var G__333740 = 0;
seq__333556_333720 = G__333737;
chunk__333557_333721 = G__333738;
count__333558_333722 = G__333739;
i__333559_333723 = G__333740;
continue;
}
} else
{var dep_333741 = cljs.core.first.call(null,seq__333556_333735__$1);var dep_pid_333742 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333741);var temp__4092__auto___333743__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_333742,dep_333741),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333743__$2))
{var dom_content_333744 = temp__4092__auto___333743__$2;var temp__4092__auto___333745__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333741], null));if(cljs.core.truth_(temp__4092__auto___333745__$3))
{var old_content_333746 = temp__4092__auto___333745__$3;dommy.core.replace_BANG_.call(null,old_content_333746,dom_content_333744);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333741], null),dom_content_333744);
} else
{}
{
var G__333747 = cljs.core.next.call(null,seq__333556_333735__$1);
var G__333748 = null;
var G__333749 = 0;
var G__333750 = 0;
seq__333556_333720 = G__333747;
chunk__333557_333721 = G__333748;
count__333558_333722 = G__333749;
i__333559_333723 = G__333750;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___333751__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_333689,id_333688),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333751__$1))
{var dom_content_333752 = temp__4092__auto___333751__$1;var temp__4090__auto___333753__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333688], null));if(cljs.core.truth_(temp__4090__auto___333753__$1))
{var old_content_333754 = temp__4090__auto___333753__$1;dommy.core.replace_BANG_.call(null,old_content_333754,dom_content_333752);
} else
{dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(dom_content_333752.id)].join(''))),dom_content_333752);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333688], null),dom_content_333752);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__333551_333690))
{var temp__4092__auto___333755__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_333689,id_333688),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333755__$1))
{var dom_333756 = temp__4092__auto___333755__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333688], null),dom_333756);
var c_333757 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_333756));var children_333758 = (((function (){var G__333560 = c_333757;if(G__333560)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333560.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__333560.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__333560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__333560);
}
})())?cljs.core.map.call(null,((function (seq__333545,chunk__333546,count__333547,i__333548,c_333757,dom_333756,temp__4092__auto___333755__$1,G__333551_333690,id_333688,pid_333689,vec__333549,vec__333550,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_333756).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__333545,chunk__333546,count__333547,i__333548,c_333757,dom_333756,temp__4092__auto___333755__$1,G__333551_333690,id_333688,pid_333689,vec__333549,vec__333550,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_333757)):null);var parent_333759 = (((function (){var G__333561 = c_333757;if(G__333561)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333561.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__333561.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__333561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__333561);
}
})())?foundation.app.ui._parent_node.call(null,c_333757).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_333689], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_333689], null)));var seq__333562_333760 = cljs.core.seq.call(null,children_333758);var chunk__333563_333761 = null;var count__333564_333762 = 0;var i__333565_333763 = 0;while(true){
if((i__333565_333763 < count__333564_333762))
{var child_333764 = cljs.core._nth.call(null,chunk__333563_333761,i__333565_333763);{
var G__333765 = seq__333562_333760;
var G__333766 = chunk__333563_333761;
var G__333767 = count__333564_333762;
var G__333768 = (i__333565_333763 + 1);
seq__333562_333760 = G__333765;
chunk__333563_333761 = G__333766;
count__333564_333762 = G__333767;
i__333565_333763 = G__333768;
continue;
}
} else
{var temp__4092__auto___333769__$2 = cljs.core.seq.call(null,seq__333562_333760);if(temp__4092__auto___333769__$2)
{var seq__333562_333770__$1 = temp__4092__auto___333769__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333562_333770__$1))
{var c__8952__auto___333771 = cljs.core.chunk_first.call(null,seq__333562_333770__$1);{
var G__333772 = cljs.core.chunk_rest.call(null,seq__333562_333770__$1);
var G__333773 = c__8952__auto___333771;
var G__333774 = cljs.core.count.call(null,c__8952__auto___333771);
var G__333775 = 0;
seq__333562_333760 = G__333772;
chunk__333563_333761 = G__333773;
count__333564_333762 = G__333774;
i__333565_333763 = G__333775;
continue;
}
} else
{var child_333776 = cljs.core.first.call(null,seq__333562_333770__$1);{
var G__333777 = cljs.core.next.call(null,seq__333562_333770__$1);
var G__333778 = null;
var G__333779 = 0;
var G__333780 = 0;
seq__333562_333760 = G__333777;
chunk__333563_333761 = G__333778;
count__333564_333762 = G__333779;
i__333565_333763 = G__333780;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_333759))
{dommy.core.append_BANG_.call(null,parent_333759,dom_333756);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_333756);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_333688,pid_333689);
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
var G__333781 = seq__333545;
var G__333782 = chunk__333546;
var G__333783 = count__333547;
var G__333784 = (i__333548 + 1);
seq__333545 = G__333781;
chunk__333546 = G__333782;
count__333547 = G__333783;
i__333548 = G__333784;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__333545);if(temp__4092__auto____$1)
{var seq__333545__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333545__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333545__$1);{
var G__333785 = cljs.core.chunk_rest.call(null,seq__333545__$1);
var G__333786 = c__8952__auto__;
var G__333787 = cljs.core.count.call(null,c__8952__auto__);
var G__333788 = 0;
seq__333545 = G__333785;
chunk__333546 = G__333786;
count__333547 = G__333787;
i__333548 = G__333788;
continue;
}
} else
{var vec__333566 = cljs.core.first.call(null,seq__333545__$1);var vec__333567 = cljs.core.nth.call(null,vec__333566,0,null);var op = cljs.core.nth.call(null,vec__333567,0,null);var path = cljs.core.nth.call(null,vec__333567,1,null);var _ = cljs.core.nth.call(null,vec__333567,2,null);var ___$1 = cljs.core.nth.call(null,vec__333567,3,null);var d = vec__333567;var f = cljs.core.nth.call(null,vec__333566,1,null);var id_333789 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_333790 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__333568_333791 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__333568_333791))
{var seq__333569_333792 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_333790));var chunk__333570_333793 = null;var count__333571_333794 = 0;var i__333572_333795 = 0;while(true){
if((i__333572_333795 < count__333571_333794))
{var dep_333796 = cljs.core._nth.call(null,chunk__333570_333793,i__333572_333795);var dep_pid_333797 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333796);var temp__4092__auto___333798__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333796], null));if(cljs.core.truth_(temp__4092__auto___333798__$2))
{var old_content_333799 = temp__4092__auto___333798__$2;dommy.core.remove_BANG_.call(null,old_content_333799);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333796], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333796], null));
{
var G__333800 = seq__333569_333792;
var G__333801 = chunk__333570_333793;
var G__333802 = count__333571_333794;
var G__333803 = (i__333572_333795 + 1);
seq__333569_333792 = G__333800;
chunk__333570_333793 = G__333801;
count__333571_333794 = G__333802;
i__333572_333795 = G__333803;
continue;
}
} else
{var temp__4092__auto___333804__$2 = cljs.core.seq.call(null,seq__333569_333792);if(temp__4092__auto___333804__$2)
{var seq__333569_333805__$1 = temp__4092__auto___333804__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333569_333805__$1))
{var c__8952__auto___333806 = cljs.core.chunk_first.call(null,seq__333569_333805__$1);{
var G__333807 = cljs.core.chunk_rest.call(null,seq__333569_333805__$1);
var G__333808 = c__8952__auto___333806;
var G__333809 = cljs.core.count.call(null,c__8952__auto___333806);
var G__333810 = 0;
seq__333569_333792 = G__333807;
chunk__333570_333793 = G__333808;
count__333571_333794 = G__333809;
i__333572_333795 = G__333810;
continue;
}
} else
{var dep_333811 = cljs.core.first.call(null,seq__333569_333805__$1);var dep_pid_333812 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333811);var temp__4092__auto___333813__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333811], null));if(cljs.core.truth_(temp__4092__auto___333813__$3))
{var old_content_333814 = temp__4092__auto___333813__$3;dommy.core.remove_BANG_.call(null,old_content_333814);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333811], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333811], null));
{
var G__333815 = cljs.core.next.call(null,seq__333569_333805__$1);
var G__333816 = null;
var G__333817 = 0;
var G__333818 = 0;
seq__333569_333792 = G__333815;
chunk__333570_333793 = G__333816;
count__333571_333794 = G__333817;
i__333572_333795 = G__333818;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__333568_333791))
{var temp__4090__auto___333819 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_333790));if(temp__4090__auto___333819)
{var deps_333820__$1 = temp__4090__auto___333819;var seq__333573_333821 = cljs.core.seq.call(null,deps_333820__$1);var chunk__333574_333822 = null;var count__333575_333823 = 0;var i__333576_333824 = 0;while(true){
if((i__333576_333824 < count__333575_333823))
{var dep_333825 = cljs.core._nth.call(null,chunk__333574_333822,i__333576_333824);var dep_pid_333826 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333825);var temp__4092__auto___333827__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_333826,dep_333825),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333827__$2))
{var dom_content_333828 = temp__4092__auto___333827__$2;var temp__4092__auto___333829__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333825], null));if(cljs.core.truth_(temp__4092__auto___333829__$3))
{var old_content_333830 = temp__4092__auto___333829__$3;dommy.core.replace_BANG_.call(null,old_content_333830,dom_content_333828);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333825], null),dom_content_333828);
} else
{}
{
var G__333831 = seq__333573_333821;
var G__333832 = chunk__333574_333822;
var G__333833 = count__333575_333823;
var G__333834 = (i__333576_333824 + 1);
seq__333573_333821 = G__333831;
chunk__333574_333822 = G__333832;
count__333575_333823 = G__333833;
i__333576_333824 = G__333834;
continue;
}
} else
{var temp__4092__auto___333835__$2 = cljs.core.seq.call(null,seq__333573_333821);if(temp__4092__auto___333835__$2)
{var seq__333573_333836__$1 = temp__4092__auto___333835__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333573_333836__$1))
{var c__8952__auto___333837 = cljs.core.chunk_first.call(null,seq__333573_333836__$1);{
var G__333838 = cljs.core.chunk_rest.call(null,seq__333573_333836__$1);
var G__333839 = c__8952__auto___333837;
var G__333840 = cljs.core.count.call(null,c__8952__auto___333837);
var G__333841 = 0;
seq__333573_333821 = G__333838;
chunk__333574_333822 = G__333839;
count__333575_333823 = G__333840;
i__333576_333824 = G__333841;
continue;
}
} else
{var dep_333842 = cljs.core.first.call(null,seq__333573_333836__$1);var dep_pid_333843 = foundation.app.render._parent_id.call(null,renderer__$1,dep_333842);var temp__4092__auto___333844__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_333843,dep_333842),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333844__$3))
{var dom_content_333845 = temp__4092__auto___333844__$3;var temp__4092__auto___333846__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333842], null));if(cljs.core.truth_(temp__4092__auto___333846__$4))
{var old_content_333847 = temp__4092__auto___333846__$4;dommy.core.replace_BANG_.call(null,old_content_333847,dom_content_333845);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_333842], null),dom_content_333845);
} else
{}
{
var G__333848 = cljs.core.next.call(null,seq__333573_333836__$1);
var G__333849 = null;
var G__333850 = 0;
var G__333851 = 0;
seq__333573_333821 = G__333848;
chunk__333574_333822 = G__333849;
count__333575_333823 = G__333850;
i__333576_333824 = G__333851;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___333852__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_333790,id_333789),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333852__$2))
{var dom_content_333853 = temp__4092__auto___333852__$2;var temp__4090__auto___333854__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333789], null));if(cljs.core.truth_(temp__4090__auto___333854__$1))
{var old_content_333855 = temp__4090__auto___333854__$1;dommy.core.replace_BANG_.call(null,old_content_333855,dom_content_333853);
} else
{dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(dom_content_333853.id)].join(''))),dom_content_333853);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333789], null),dom_content_333853);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__333568_333791))
{var temp__4092__auto___333856__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_333790,id_333789),renderer__$1);if(cljs.core.truth_(temp__4092__auto___333856__$2))
{var dom_333857 = temp__4092__auto___333856__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_333789], null),dom_333857);
var c_333858 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_333857));var children_333859 = (((function (){var G__333577 = c_333858;if(G__333577)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333577.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__333577.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__333577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__333577);
}
})())?cljs.core.map.call(null,((function (seq__333545,chunk__333546,count__333547,i__333548,c_333858,dom_333857,temp__4092__auto___333856__$2,G__333568_333791,id_333789,pid_333790,vec__333566,vec__333567,op,path,_,___$1,d,f,seq__333545__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_333857).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__333545,chunk__333546,count__333547,i__333548,c_333858,dom_333857,temp__4092__auto___333856__$2,G__333568_333791,id_333789,pid_333790,vec__333566,vec__333567,op,path,_,___$1,d,f,seq__333545__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_333858)):null);var parent_333860 = (((function (){var G__333578 = c_333858;if(G__333578)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__333578.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__333578.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__333578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__333578);
}
})())?foundation.app.ui._parent_node.call(null,c_333858).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_333790], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_333790], null)));var seq__333579_333861 = cljs.core.seq.call(null,children_333859);var chunk__333580_333862 = null;var count__333581_333863 = 0;var i__333582_333864 = 0;while(true){
if((i__333582_333864 < count__333581_333863))
{var child_333865 = cljs.core._nth.call(null,chunk__333580_333862,i__333582_333864);{
var G__333866 = seq__333579_333861;
var G__333867 = chunk__333580_333862;
var G__333868 = count__333581_333863;
var G__333869 = (i__333582_333864 + 1);
seq__333579_333861 = G__333866;
chunk__333580_333862 = G__333867;
count__333581_333863 = G__333868;
i__333582_333864 = G__333869;
continue;
}
} else
{var temp__4092__auto___333870__$3 = cljs.core.seq.call(null,seq__333579_333861);if(temp__4092__auto___333870__$3)
{var seq__333579_333871__$1 = temp__4092__auto___333870__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333579_333871__$1))
{var c__8952__auto___333872 = cljs.core.chunk_first.call(null,seq__333579_333871__$1);{
var G__333873 = cljs.core.chunk_rest.call(null,seq__333579_333871__$1);
var G__333874 = c__8952__auto___333872;
var G__333875 = cljs.core.count.call(null,c__8952__auto___333872);
var G__333876 = 0;
seq__333579_333861 = G__333873;
chunk__333580_333862 = G__333874;
count__333581_333863 = G__333875;
i__333582_333864 = G__333876;
continue;
}
} else
{var child_333877 = cljs.core.first.call(null,seq__333579_333871__$1);{
var G__333878 = cljs.core.next.call(null,seq__333579_333871__$1);
var G__333879 = null;
var G__333880 = 0;
var G__333881 = 0;
seq__333579_333861 = G__333878;
chunk__333580_333862 = G__333879;
count__333581_333863 = G__333880;
i__333582_333864 = G__333881;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_333860))
{dommy.core.append_BANG_.call(null,parent_333860,dom_333857);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_333857);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_333789,pid_333790);
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
var G__333882 = cljs.core.next.call(null,seq__333545__$1);
var G__333883 = null;
var G__333884 = 0;
var G__333885 = 0;
seq__333545 = G__333882;
chunk__333546 = G__333883;
count__333547 = G__333884;
i__333548 = G__333885;
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
});})(handlers__$1,render_fns,input))
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__333583){var map__333584 = p__333583;var map__333584__$1 = ((cljs.core.seq_QMARK_.call(null,map__333584))?cljs.core.apply.call(null,cljs.core.hash_map,map__333584):map__333584);var deltas = cljs.core.get.call(null,map__333584__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__333585 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__333586 = null;var count__333587 = 0;var i__333588 = 0;while(true){
if((i__333588 < count__333587))
{var handler = cljs.core._nth.call(null,chunk__333586,i__333588);handler.dispose();
{
var G__333886 = seq__333585;
var G__333887 = chunk__333586;
var G__333888 = count__333587;
var G__333889 = (i__333588 + 1);
seq__333585 = G__333886;
chunk__333586 = G__333887;
count__333587 = G__333888;
i__333588 = G__333889;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333585);if(temp__4092__auto__)
{var seq__333585__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333585__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__333585__$1);{
var G__333890 = cljs.core.chunk_rest.call(null,seq__333585__$1);
var G__333891 = c__8952__auto__;
var G__333892 = cljs.core.count.call(null,c__8952__auto__);
var G__333893 = 0;
seq__333585 = G__333890;
chunk__333586 = G__333891;
count__333587 = G__333892;
i__333588 = G__333893;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__333585__$1);handler.dispose();
{
var G__333894 = cljs.core.next.call(null,seq__333585__$1);
var G__333895 = null;
var G__333896 = 0;
var G__333897 = 0;
seq__333585 = G__333894;
chunk__333586 = G__333895;
count__333587 = G__333896;
i__333588 = G__333897;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k333489,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k333489,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k333489,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k333489,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k333489,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k333489,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__333488){var self__ = this;
var this__8797__auto____$1 = this;var pred__333589 = cljs.core.keyword_identical_QMARK_;var expr__333590 = k__8798__auto__;if(cljs.core.truth_(pred__333589.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__333590)))
{return (new foundation.app.render.Renderer(G__333488,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__333589.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__333590)))
{return (new foundation.app.render.Renderer(self__.env,G__333488,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__333589.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__333590)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__333488,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__333589.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__333590)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__333488,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__333488),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__333488){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__333488,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__333490){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__333490),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__333490),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__333490),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__333490),null,cljs.core.dissoc.call(null,G__333490,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__333898,input_queue,pid,id){var vec__333899 = p__333898;var op = cljs.core.nth.call(null,vec__333899,0,null);var path = cljs.core.nth.call(null,vec__333899,1,null);var _ = cljs.core.nth.call(null,vec__333899,2,null);var ___$1 = cljs.core.nth.call(null,vec__333899,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map