// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__51471,pid,id){var vec__51472 = p__51471;var op = cljs.core.nth.call(null,vec__51472,0,null);var path = cljs.core.nth.call(null,vec__51472,1,null);var _ = cljs.core.nth.call(null,vec__51472,2,null);var ___$1 = cljs.core.nth.call(null,vec__51472,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj51474 = {};return obj51474;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__51475_SHARP_){return cljs.core.not.call(null,p1__51475_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__51477 = (new goog.events.EventHandler(renderer));G__51477.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__51477.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__51477,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__51477;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__51478_SHARP_){return cljs.core.get.call(null,n,p1__51478_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__51483 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__51484 = null;var count__51485 = 0;var i__51486 = 0;while(true){
if((i__51486 < count__51485))
{var f = cljs.core._nth.call(null,chunk__51484,i__51486);f.call(null);
{
var G__51487 = seq__51483;
var G__51488 = chunk__51484;
var G__51489 = count__51485;
var G__51490 = (i__51486 + 1);
seq__51483 = G__51487;
chunk__51484 = G__51488;
count__51485 = G__51489;
i__51486 = G__51490;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__51483);if(temp__4092__auto__)
{var seq__51483__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51483__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__51483__$1);{
var G__51491 = cljs.core.chunk_rest.call(null,seq__51483__$1);
var G__51492 = c__8952__auto__;
var G__51493 = cljs.core.count.call(null,c__8952__auto__);
var G__51494 = 0;
seq__51483 = G__51491;
chunk__51484 = G__51492;
count__51485 = G__51493;
i__51486 = G__51494;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__51483__$1);f.call(null);
{
var G__51495 = cljs.core.next.call(null,seq__51483__$1);
var G__51496 = null;
var G__51497 = 0;
var G__51498 = 0;
seq__51483 = G__51495;
chunk__51484 = G__51496;
count__51485 = G__51497;
i__51486 = G__51498;
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
foundation.app.render.IRenderer = (function (){var obj51500 = {};return obj51500;
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
* @param {*} render_fn
* @param {*} handlers
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (env,render_fn,handlers,__meta,__extmap){
this.env = env;
this.render_fn = render_fn;
this.handlers = handlers;
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
var temp__4092__auto__ = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1)));if(cljs.core.truth_(temp__4092__auto__))
{var deltas = temp__4092__auto__;foundation.app.render.log_fn.call(null,deltas);
var seq__51504 = cljs.core.seq.call(null,deltas);var chunk__51505 = null;var count__51506 = 0;var i__51507 = 0;while(true){
if((i__51507 < count__51506))
{var delta = cljs.core._nth.call(null,chunk__51505,i__51507);var vec__51508_51517 = delta;var op_51518 = cljs.core.nth.call(null,vec__51508_51517,0,null);var path_51519 = cljs.core.nth.call(null,vec__51508_51517,1,null);var __51520 = cljs.core.nth.call(null,vec__51508_51517,2,null);var __51521__$1 = cljs.core.nth.call(null,vec__51508_51517,3,null);var d_51522 = vec__51508_51517;var temp__4092__auto___51523__$1 = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_51518,path_51519], null));if(cljs.core.truth_(temp__4092__auto___51523__$1))
{var f_51524 = temp__4092__auto___51523__$1;var temp__4090__auto___51525 = foundation.app.render._get_id.call(null,renderer__$1,path_51519);if(cljs.core.truth_(temp__4090__auto___51525))
{var id_51526 = temp__4090__auto___51525;f_51524.call(null,renderer__$1,d_51522,foundation.app.render._parent_id.call(null,renderer__$1,path_51519),id_51526);
} else
{var id_51527 = foundation.app.render._new_id.call(null,renderer__$1,path_51519);f_51524.call(null,renderer__$1,d_51522,foundation.app.render._parent_id.call(null,renderer__$1,path_51519),id_51527);
}
} else
{}
{
var G__51528 = seq__51504;
var G__51529 = chunk__51505;
var G__51530 = count__51506;
var G__51531 = (i__51507 + 1);
seq__51504 = G__51528;
chunk__51505 = G__51529;
count__51506 = G__51530;
i__51507 = G__51531;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__51504);if(temp__4092__auto____$1)
{var seq__51504__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51504__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__51504__$1);{
var G__51532 = cljs.core.chunk_rest.call(null,seq__51504__$1);
var G__51533 = c__8952__auto__;
var G__51534 = cljs.core.count.call(null,c__8952__auto__);
var G__51535 = 0;
seq__51504 = G__51532;
chunk__51505 = G__51533;
count__51506 = G__51534;
i__51507 = G__51535;
continue;
}
} else
{var delta = cljs.core.first.call(null,seq__51504__$1);var vec__51509_51536 = delta;var op_51537 = cljs.core.nth.call(null,vec__51509_51536,0,null);var path_51538 = cljs.core.nth.call(null,vec__51509_51536,1,null);var __51539 = cljs.core.nth.call(null,vec__51509_51536,2,null);var __51540__$1 = cljs.core.nth.call(null,vec__51509_51536,3,null);var d_51541 = vec__51509_51536;var temp__4092__auto___51542__$2 = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op_51537,path_51538], null));if(cljs.core.truth_(temp__4092__auto___51542__$2))
{var f_51543 = temp__4092__auto___51542__$2;var temp__4090__auto___51544 = foundation.app.render._get_id.call(null,renderer__$1,path_51538);if(cljs.core.truth_(temp__4090__auto___51544))
{var id_51545 = temp__4090__auto___51544;f_51543.call(null,renderer__$1,d_51541,foundation.app.render._parent_id.call(null,renderer__$1,path_51538),id_51545);
} else
{var id_51546 = foundation.app.render._new_id.call(null,renderer__$1,path_51538);f_51543.call(null,renderer__$1,d_51541,foundation.app.render._parent_id.call(null,renderer__$1,path_51538),id_51546);
}
} else
{}
{
var G__51547 = cljs.core.next.call(null,seq__51504__$1);
var G__51548 = null;
var G__51549 = 0;
var G__51550 = 0;
seq__51504 = G__51547;
chunk__51505 = G__51548;
count__51506 = G__51549;
i__51507 = G__51550;
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
var renderer__$1 = this;var seq__51510 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__51511 = null;var count__51512 = 0;var i__51513 = 0;while(true){
if((i__51513 < count__51512))
{var handler = cljs.core._nth.call(null,chunk__51511,i__51513);handler.dispose();
{
var G__51551 = seq__51510;
var G__51552 = chunk__51511;
var G__51553 = count__51512;
var G__51554 = (i__51513 + 1);
seq__51510 = G__51551;
chunk__51511 = G__51552;
count__51512 = G__51553;
i__51513 = G__51554;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__51510);if(temp__4092__auto__)
{var seq__51510__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51510__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__51510__$1);{
var G__51555 = cljs.core.chunk_rest.call(null,seq__51510__$1);
var G__51556 = c__8952__auto__;
var G__51557 = cljs.core.count.call(null,c__8952__auto__);
var G__51558 = 0;
seq__51510 = G__51555;
chunk__51511 = G__51556;
count__51512 = G__51557;
i__51513 = G__51558;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__51510__$1);handler.dispose();
{
var G__51559 = cljs.core.next.call(null,seq__51510__$1);
var G__51560 = null;
var G__51561 = 0;
var G__51562 = 0;
seq__51510 = G__51559;
chunk__51511 = G__51560;
count__51512 = G__51561;
i__51513 = G__51562;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k51502,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k51502,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k51502,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k51502,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k51502,else__8793__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__51501){var self__ = this;
var this__8797__auto____$1 = this;var pred__51514 = cljs.core.keyword_identical_QMARK_;var expr__51515 = k__8798__auto__;if(cljs.core.truth_(pred__51514.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__51515)))
{return (new foundation.app.render.Renderer(G__51501,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__51514.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__51515)))
{return (new foundation.app.render.Renderer(self__.env,G__51501,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__51514.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__51515)))
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,G__51501,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__51501),null));
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
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__51501){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,G__51501,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),null,new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),null], null), null),k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env,render_fn,handlers){return (new foundation.app.render.Renderer(env,render_fn,handlers));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__51503){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__51503),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__51503),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__51503),null,cljs.core.dissoc.call(null,G__51503,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
});
foundation.app.render.push_render_queue = (function push_render_queue(renderer,input_queue){var render_queue = cljs.core.async.chan.call(null);var c__12187__auto___51641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_51624){var state_val_51625 = (state_51624[1]);if((state_val_51625 === 7))
{var inst_51619 = (state_51624[2]);var state_51624__$1 = (function (){var statearr_51626 = state_51624;(statearr_51626[7] = inst_51619);
return statearr_51626;
})();var statearr_51627_51642 = state_51624__$1;(statearr_51627_51642[2] = null);
(statearr_51627_51642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51625 === 6))
{var inst_51605 = (state_51624[8]);var inst_51607 = (state_51624[9]);var inst_51615 = foundation.app.render._parent_id.call(null,renderer,inst_51607);var inst_51616 = foundation.app.render._new_id.call(null,renderer,inst_51607);var inst_51617 = foundation.app.render.render.call(null,renderer,inst_51605,inst_51615,inst_51616);var state_51624__$1 = state_51624;var statearr_51628_51643 = state_51624__$1;(statearr_51628_51643[2] = inst_51617);
(statearr_51628_51643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51625 === 5))
{var inst_51605 = (state_51624[8]);var inst_51610 = (state_51624[10]);var inst_51607 = (state_51624[9]);var inst_51612 = foundation.app.render._parent_id.call(null,renderer,inst_51607);var inst_51613 = foundation.app.render.render.call(null,renderer,inst_51605,inst_51612,inst_51610);var state_51624__$1 = state_51624;var statearr_51629_51644 = state_51624__$1;(statearr_51629_51644[2] = inst_51613);
(statearr_51629_51644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51625 === 4))
{var inst_51605 = (state_51624[8]);var inst_51610 = (state_51624[10]);var inst_51607 = (state_51624[9]);var inst_51605__$1 = (state_51624[2]);var inst_51606 = cljs.core.nth.call(null,inst_51605__$1,0,null);var inst_51607__$1 = cljs.core.nth.call(null,inst_51605__$1,1,null);var inst_51608 = cljs.core.nth.call(null,inst_51605__$1,2,null);var inst_51609 = cljs.core.nth.call(null,inst_51605__$1,3,null);var inst_51610__$1 = foundation.app.render._get_id.call(null,renderer,inst_51607__$1);var state_51624__$1 = (function (){var statearr_51630 = state_51624;(statearr_51630[8] = inst_51605__$1);
(statearr_51630[11] = inst_51606);
(statearr_51630[12] = inst_51609);
(statearr_51630[10] = inst_51610__$1);
(statearr_51630[13] = inst_51608);
(statearr_51630[9] = inst_51607__$1);
return statearr_51630;
})();if(cljs.core.truth_(inst_51610__$1))
{var statearr_51631_51645 = state_51624__$1;(statearr_51631_51645[1] = 5);
} else
{var statearr_51632_51646 = state_51624__$1;(statearr_51632_51646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_51625 === 3))
{var inst_51622 = (state_51624[2]);var state_51624__$1 = state_51624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51624__$1,inst_51622);
} else
{if((state_val_51625 === 2))
{var state_51624__$1 = state_51624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51624__$1,4,render_queue);
} else
{if((state_val_51625 === 1))
{var state_51624__$1 = state_51624;var statearr_51633_51647 = state_51624__$1;(statearr_51633_51647[2] = null);
(statearr_51633_51647[1] = 2);
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
var state_machine__12118__auto____0 = (function (){var statearr_51637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51637[0] = state_machine__12118__auto__);
(statearr_51637[1] = 1);
return statearr_51637;
});
var state_machine__12118__auto____1 = (function (state_51624){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_51624);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e51638){if((e51638 instanceof Object))
{var ex__12121__auto__ = e51638;var statearr_51639_51648 = state_51624;(statearr_51639_51648[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__51649 = state_51624;
state_51624 = G__51649;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_51624){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_51624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_51640 = f__12188__auto__.call(null);(statearr_51640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___51641);
return statearr_51640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return render_queue;
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,foundation.app.render.log_fn);
});
var renderer__2 = (function (root_id,render_fn){return foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)),render_fn,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__51650,pid,id){var vec__51651 = p__51650;var op = cljs.core.nth.call(null,vec__51651,0,null);var path = cljs.core.nth.call(null,vec__51651,1,null);var _ = cljs.core.nth.call(null,vec__51651,2,null);var ___$1 = cljs.core.nth.call(null,vec__51651,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map