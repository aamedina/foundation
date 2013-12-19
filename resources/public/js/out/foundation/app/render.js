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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__184459,pid,id){var vec__184460 = p__184459;var op = cljs.core.nth.call(null,vec__184460,0,null);var path = cljs.core.nth.call(null,vec__184460,1,null);var _ = cljs.core.nth.call(null,vec__184460,2,null);var ___$1 = cljs.core.nth.call(null,vec__184460,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj184462 = {};return obj184462;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__184463_SHARP_){return cljs.core.not.call(null,p1__184463_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__184465 = (new goog.events.EventHandler(renderer));G__184465.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__184465.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__184465,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__184465;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__184466_SHARP_){return cljs.core.get.call(null,n,p1__184466_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__184471 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__184472 = null;var count__184473 = 0;var i__184474 = 0;while(true){
if((i__184474 < count__184473))
{var f = cljs.core._nth.call(null,chunk__184472,i__184474);f.call(null);
{
var G__184475 = seq__184471;
var G__184476 = chunk__184472;
var G__184477 = count__184473;
var G__184478 = (i__184474 + 1);
seq__184471 = G__184475;
chunk__184472 = G__184476;
count__184473 = G__184477;
i__184474 = G__184478;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184471);if(temp__4092__auto__)
{var seq__184471__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184471__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184471__$1);{
var G__184479 = cljs.core.chunk_rest.call(null,seq__184471__$1);
var G__184480 = c__8952__auto__;
var G__184481 = cljs.core.count.call(null,c__8952__auto__);
var G__184482 = 0;
seq__184471 = G__184479;
chunk__184472 = G__184480;
count__184473 = G__184481;
i__184474 = G__184482;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__184471__$1);f.call(null);
{
var G__184483 = cljs.core.next.call(null,seq__184471__$1);
var G__184484 = null;
var G__184485 = 0;
var G__184486 = 0;
seq__184471 = G__184483;
chunk__184472 = G__184484;
count__184473 = G__184485;
i__184474 = G__184486;
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
foundation.app.render.IRenderer = (function (){var obj184488 = {};return obj184488;
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
foundation.app.render.IRender = (function (){var obj184490 = {};return obj184490;
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
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__184491 = x;var G__184491__$1 = (((function (){var G__184492 = x;if(G__184492)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184492.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__184492.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__184492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__184492);
}
})())?foundation.app.render.extend_component.call(null,G__184491,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__184491);var G__184491__$2 = (((function (){var G__184493 = x;if(G__184493)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184493.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__184493.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__184493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__184493);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__184491__$1);var G__184491__$3 = (((function (){var G__184494 = x;if(G__184494)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184494.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__184494.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__184494);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__184494);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__184491__$2);var G__184491__$4 = (((function (){var G__184495 = x;if(G__184495)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184495.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__184495.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__184495);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__184495);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__184491__$3);var G__184491__$5 = (((function (){var G__184496 = x;if(G__184496)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184496.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__184496.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__184496);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__184496);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__184491__$4);var G__184491__$6 = (((function (){var G__184497 = x;if(G__184497)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184497.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__184497.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__184497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__184497);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__184491__$5);var G__184491__$7 = (((function (){var G__184498 = x;if(G__184498)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184498.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__184498.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__184498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__184498);
}
})())?foundation.app.render.extend_component.call(null,G__184491__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__184491__$6);var G__184491__$8 = (((function (){var G__184499 = x;if(G__184499)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184499.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__184499.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__184499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__184499);
}
})())?foundation.app.ui._render.call(null,G__184491__$7):G__184491__$7);return G__184491__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__184500_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__184500_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__184504 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__184505 = null;var count__184506 = 0;var i__184507 = 0;while(true){
if((i__184507 < count__184506))
{var component = cljs.core._nth.call(null,chunk__184505,i__184507);console.log(component);
{
var G__184571 = seq__184504;
var G__184572 = chunk__184505;
var G__184573 = count__184506;
var G__184574 = (i__184507 + 1);
seq__184504 = G__184571;
chunk__184505 = G__184572;
count__184506 = G__184573;
i__184507 = G__184574;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184504);if(temp__4092__auto__)
{var seq__184504__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184504__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184504__$1);{
var G__184575 = cljs.core.chunk_rest.call(null,seq__184504__$1);
var G__184576 = c__8952__auto__;
var G__184577 = cljs.core.count.call(null,c__8952__auto__);
var G__184578 = 0;
seq__184504 = G__184575;
chunk__184505 = G__184576;
count__184506 = G__184577;
i__184507 = G__184578;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184504__$1);console.log(component);
{
var G__184579 = cljs.core.next.call(null,seq__184504__$1);
var G__184580 = null;
var G__184581 = 0;
var G__184582 = 0;
seq__184504 = G__184579;
chunk__184505 = G__184580;
count__184506 = G__184581;
i__184507 = G__184582;
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
var renderer__$1 = this;var seq__184508 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__184509 = null;var count__184510 = 0;var i__184511 = 0;while(true){
if((i__184511 < count__184510))
{var component = cljs.core._nth.call(null,chunk__184509,i__184511);console.log(component);
{
var G__184583 = seq__184508;
var G__184584 = chunk__184509;
var G__184585 = count__184510;
var G__184586 = (i__184511 + 1);
seq__184508 = G__184583;
chunk__184509 = G__184584;
count__184510 = G__184585;
i__184511 = G__184586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184508);if(temp__4092__auto__)
{var seq__184508__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184508__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184508__$1);{
var G__184587 = cljs.core.chunk_rest.call(null,seq__184508__$1);
var G__184588 = c__8952__auto__;
var G__184589 = cljs.core.count.call(null,c__8952__auto__);
var G__184590 = 0;
seq__184508 = G__184587;
chunk__184509 = G__184588;
count__184510 = G__184589;
i__184511 = G__184590;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184508__$1);console.log(component);
{
var G__184591 = cljs.core.next.call(null,seq__184508__$1);
var G__184592 = null;
var G__184593 = 0;
var G__184594 = 0;
seq__184508 = G__184591;
chunk__184509 = G__184592;
count__184510 = G__184593;
i__184511 = G__184594;
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
var renderer__$1 = this;var seq__184512 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__184513 = null;var count__184514 = 0;var i__184515 = 0;while(true){
if((i__184515 < count__184514))
{var component = cljs.core._nth.call(null,chunk__184513,i__184515);console.log(component);
{
var G__184595 = seq__184512;
var G__184596 = chunk__184513;
var G__184597 = count__184514;
var G__184598 = (i__184515 + 1);
seq__184512 = G__184595;
chunk__184513 = G__184596;
count__184514 = G__184597;
i__184515 = G__184598;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184512);if(temp__4092__auto__)
{var seq__184512__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184512__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184512__$1);{
var G__184599 = cljs.core.chunk_rest.call(null,seq__184512__$1);
var G__184600 = c__8952__auto__;
var G__184601 = cljs.core.count.call(null,c__8952__auto__);
var G__184602 = 0;
seq__184512 = G__184599;
chunk__184513 = G__184600;
count__184514 = G__184601;
i__184515 = G__184602;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184512__$1);console.log(component);
{
var G__184603 = cljs.core.next.call(null,seq__184512__$1);
var G__184604 = null;
var G__184605 = 0;
var G__184606 = 0;
seq__184512 = G__184603;
chunk__184513 = G__184604;
count__184514 = G__184605;
i__184515 = G__184606;
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
var renderer__$1 = this;var seq__184516 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__184517 = null;var count__184518 = 0;var i__184519 = 0;while(true){
if((i__184519 < count__184518))
{var component = cljs.core._nth.call(null,chunk__184517,i__184519);console.log(component);
{
var G__184607 = seq__184516;
var G__184608 = chunk__184517;
var G__184609 = count__184518;
var G__184610 = (i__184519 + 1);
seq__184516 = G__184607;
chunk__184517 = G__184608;
count__184518 = G__184609;
i__184519 = G__184610;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184516);if(temp__4092__auto__)
{var seq__184516__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184516__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184516__$1);{
var G__184611 = cljs.core.chunk_rest.call(null,seq__184516__$1);
var G__184612 = c__8952__auto__;
var G__184613 = cljs.core.count.call(null,c__8952__auto__);
var G__184614 = 0;
seq__184516 = G__184611;
chunk__184517 = G__184612;
count__184518 = G__184613;
i__184519 = G__184614;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184516__$1);console.log(component);
{
var G__184615 = cljs.core.next.call(null,seq__184516__$1);
var G__184616 = null;
var G__184617 = 0;
var G__184618 = 0;
seq__184516 = G__184615;
chunk__184517 = G__184616;
count__184518 = G__184617;
i__184519 = G__184618;
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
var renderer__$1 = this;var seq__184520 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__184521 = null;var count__184522 = 0;var i__184523 = 0;while(true){
if((i__184523 < count__184522))
{var component = cljs.core._nth.call(null,chunk__184521,i__184523);console.log(component);
{
var G__184619 = seq__184520;
var G__184620 = chunk__184521;
var G__184621 = count__184522;
var G__184622 = (i__184523 + 1);
seq__184520 = G__184619;
chunk__184521 = G__184620;
count__184522 = G__184621;
i__184523 = G__184622;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184520);if(temp__4092__auto__)
{var seq__184520__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184520__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184520__$1);{
var G__184623 = cljs.core.chunk_rest.call(null,seq__184520__$1);
var G__184624 = c__8952__auto__;
var G__184625 = cljs.core.count.call(null,c__8952__auto__);
var G__184626 = 0;
seq__184520 = G__184623;
chunk__184521 = G__184624;
count__184522 = G__184625;
i__184523 = G__184626;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184520__$1);console.log(component);
{
var G__184627 = cljs.core.next.call(null,seq__184520__$1);
var G__184628 = null;
var G__184629 = 0;
var G__184630 = 0;
seq__184520 = G__184627;
chunk__184521 = G__184628;
count__184522 = G__184629;
i__184523 = G__184630;
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
var renderer__$1 = this;var seq__184524 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__184525 = null;var count__184526 = 0;var i__184527 = 0;while(true){
if((i__184527 < count__184526))
{var component = cljs.core._nth.call(null,chunk__184525,i__184527);console.log(component);
{
var G__184631 = seq__184524;
var G__184632 = chunk__184525;
var G__184633 = count__184526;
var G__184634 = (i__184527 + 1);
seq__184524 = G__184631;
chunk__184525 = G__184632;
count__184526 = G__184633;
i__184527 = G__184634;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184524);if(temp__4092__auto__)
{var seq__184524__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184524__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184524__$1);{
var G__184635 = cljs.core.chunk_rest.call(null,seq__184524__$1);
var G__184636 = c__8952__auto__;
var G__184637 = cljs.core.count.call(null,c__8952__auto__);
var G__184638 = 0;
seq__184524 = G__184635;
chunk__184525 = G__184636;
count__184526 = G__184637;
i__184527 = G__184638;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184524__$1);console.log(component);
{
var G__184639 = cljs.core.next.call(null,seq__184524__$1);
var G__184640 = null;
var G__184641 = 0;
var G__184642 = 0;
seq__184524 = G__184639;
chunk__184525 = G__184640;
count__184526 = G__184641;
i__184527 = G__184642;
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
var renderer__$1 = this;var seq__184528 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__184529 = null;var count__184530 = 0;var i__184531 = 0;while(true){
if((i__184531 < count__184530))
{var component = cljs.core._nth.call(null,chunk__184529,i__184531);console.log(component);
{
var G__184643 = seq__184528;
var G__184644 = chunk__184529;
var G__184645 = count__184530;
var G__184646 = (i__184531 + 1);
seq__184528 = G__184643;
chunk__184529 = G__184644;
count__184530 = G__184645;
i__184531 = G__184646;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184528);if(temp__4092__auto__)
{var seq__184528__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184528__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184528__$1);{
var G__184647 = cljs.core.chunk_rest.call(null,seq__184528__$1);
var G__184648 = c__8952__auto__;
var G__184649 = cljs.core.count.call(null,c__8952__auto__);
var G__184650 = 0;
seq__184528 = G__184647;
chunk__184529 = G__184648;
count__184530 = G__184649;
i__184531 = G__184650;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__184528__$1);console.log(component);
{
var G__184651 = cljs.core.next.call(null,seq__184528__$1);
var G__184652 = null;
var G__184653 = 0;
var G__184654 = 0;
seq__184528 = G__184651;
chunk__184529 = G__184652;
count__184530 = G__184653;
i__184531 = G__184654;
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
return (function (p__184532){var vec__184533 = p__184532;var op = cljs.core.nth.call(null,vec__184533,0,null);var path = cljs.core.nth.call(null,vec__184533,1,null);var _ = cljs.core.nth.call(null,vec__184533,2,null);var ___$1 = cljs.core.nth.call(null,vec__184533,3,null);var delta = vec__184533;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
var seq__184534 = cljs.core.seq.call(null,deltas__$1);var chunk__184535 = null;var count__184536 = 0;var i__184537 = 0;while(true){
if((i__184537 < count__184536))
{var vec__184538 = cljs.core._nth.call(null,chunk__184535,i__184537);var vec__184539 = cljs.core.nth.call(null,vec__184538,0,null);var op = cljs.core.nth.call(null,vec__184539,0,null);var path = cljs.core.nth.call(null,vec__184539,1,null);var _ = cljs.core.nth.call(null,vec__184539,2,null);var ___$1 = cljs.core.nth.call(null,vec__184539,3,null);var d = vec__184539;var f = cljs.core.nth.call(null,vec__184538,1,null);var id_184655 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_184656 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__184540_184657 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__184540_184657))
{var seq__184541_184658 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_184656));var chunk__184542_184659 = null;var count__184543_184660 = 0;var i__184544_184661 = 0;while(true){
if((i__184544_184661 < count__184543_184660))
{var dep_184662 = cljs.core._nth.call(null,chunk__184542_184659,i__184544_184661);var dep_pid_184663 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184662);var temp__4092__auto___184664__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184662], null));if(cljs.core.truth_(temp__4092__auto___184664__$1))
{var old_content_184665 = temp__4092__auto___184664__$1;dommy.core.remove_BANG_.call(null,old_content_184665);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184662], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184662], null));
{
var G__184666 = seq__184541_184658;
var G__184667 = chunk__184542_184659;
var G__184668 = count__184543_184660;
var G__184669 = (i__184544_184661 + 1);
seq__184541_184658 = G__184666;
chunk__184542_184659 = G__184667;
count__184543_184660 = G__184668;
i__184544_184661 = G__184669;
continue;
}
} else
{var temp__4092__auto___184670__$1 = cljs.core.seq.call(null,seq__184541_184658);if(temp__4092__auto___184670__$1)
{var seq__184541_184671__$1 = temp__4092__auto___184670__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184541_184671__$1))
{var c__8952__auto___184672 = cljs.core.chunk_first.call(null,seq__184541_184671__$1);{
var G__184673 = cljs.core.chunk_rest.call(null,seq__184541_184671__$1);
var G__184674 = c__8952__auto___184672;
var G__184675 = cljs.core.count.call(null,c__8952__auto___184672);
var G__184676 = 0;
seq__184541_184658 = G__184673;
chunk__184542_184659 = G__184674;
count__184543_184660 = G__184675;
i__184544_184661 = G__184676;
continue;
}
} else
{var dep_184677 = cljs.core.first.call(null,seq__184541_184671__$1);var dep_pid_184678 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184677);var temp__4092__auto___184679__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184677], null));if(cljs.core.truth_(temp__4092__auto___184679__$2))
{var old_content_184680 = temp__4092__auto___184679__$2;dommy.core.remove_BANG_.call(null,old_content_184680);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184677], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184677], null));
{
var G__184681 = cljs.core.next.call(null,seq__184541_184671__$1);
var G__184682 = null;
var G__184683 = 0;
var G__184684 = 0;
seq__184541_184658 = G__184681;
chunk__184542_184659 = G__184682;
count__184543_184660 = G__184683;
i__184544_184661 = G__184684;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__184540_184657))
{var seq__184545_184685 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_184656));var chunk__184546_184686 = null;var count__184547_184687 = 0;var i__184548_184688 = 0;while(true){
if((i__184548_184688 < count__184547_184687))
{var dep_184689 = cljs.core._nth.call(null,chunk__184546_184686,i__184548_184688);var dep_pid_184690 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184689);var temp__4092__auto___184691__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_184690,dep_184689),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184691__$1))
{var dom_content_184692 = temp__4092__auto___184691__$1;var temp__4092__auto___184693__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184689], null));if(cljs.core.truth_(temp__4092__auto___184693__$2))
{var old_content_184694 = temp__4092__auto___184693__$2;dommy.core.replace_BANG_.call(null,old_content_184694,dom_content_184692);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184689], null),dom_content_184692);
} else
{}
{
var G__184695 = seq__184545_184685;
var G__184696 = chunk__184546_184686;
var G__184697 = count__184547_184687;
var G__184698 = (i__184548_184688 + 1);
seq__184545_184685 = G__184695;
chunk__184546_184686 = G__184696;
count__184547_184687 = G__184697;
i__184548_184688 = G__184698;
continue;
}
} else
{var temp__4092__auto___184699__$1 = cljs.core.seq.call(null,seq__184545_184685);if(temp__4092__auto___184699__$1)
{var seq__184545_184700__$1 = temp__4092__auto___184699__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184545_184700__$1))
{var c__8952__auto___184701 = cljs.core.chunk_first.call(null,seq__184545_184700__$1);{
var G__184702 = cljs.core.chunk_rest.call(null,seq__184545_184700__$1);
var G__184703 = c__8952__auto___184701;
var G__184704 = cljs.core.count.call(null,c__8952__auto___184701);
var G__184705 = 0;
seq__184545_184685 = G__184702;
chunk__184546_184686 = G__184703;
count__184547_184687 = G__184704;
i__184548_184688 = G__184705;
continue;
}
} else
{var dep_184706 = cljs.core.first.call(null,seq__184545_184700__$1);var dep_pid_184707 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184706);var temp__4092__auto___184708__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_184707,dep_184706),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184708__$2))
{var dom_content_184709 = temp__4092__auto___184708__$2;var temp__4092__auto___184710__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184706], null));if(cljs.core.truth_(temp__4092__auto___184710__$3))
{var old_content_184711 = temp__4092__auto___184710__$3;dommy.core.replace_BANG_.call(null,old_content_184711,dom_content_184709);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184706], null),dom_content_184709);
} else
{}
{
var G__184712 = cljs.core.next.call(null,seq__184545_184700__$1);
var G__184713 = null;
var G__184714 = 0;
var G__184715 = 0;
seq__184545_184685 = G__184712;
chunk__184546_184686 = G__184713;
count__184547_184687 = G__184714;
i__184548_184688 = G__184715;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__184540_184657))
{var temp__4092__auto___184716__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_184656,id_184655),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184716__$1))
{var dom_184717 = temp__4092__auto___184716__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_184655], null),dom_184717);
var temp__4090__auto___184718 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_184717);if(cljs.core.truth_(and__8211__auto__))
{var G__184549 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_184717));if(G__184549)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184549.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__184549.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__184549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__184549);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_184717))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_184656], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_184656], null)));if(cljs.core.truth_(temp__4090__auto___184718))
{var parent_184719 = temp__4090__auto___184718;dommy.core.append_BANG_.call(null,parent_184719,dom_184717);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_184717);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_184655,pid_184656);
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
var G__184720 = seq__184534;
var G__184721 = chunk__184535;
var G__184722 = count__184536;
var G__184723 = (i__184537 + 1);
seq__184534 = G__184720;
chunk__184535 = G__184721;
count__184536 = G__184722;
i__184537 = G__184723;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__184534);if(temp__4092__auto____$1)
{var seq__184534__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184534__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184534__$1);{
var G__184724 = cljs.core.chunk_rest.call(null,seq__184534__$1);
var G__184725 = c__8952__auto__;
var G__184726 = cljs.core.count.call(null,c__8952__auto__);
var G__184727 = 0;
seq__184534 = G__184724;
chunk__184535 = G__184725;
count__184536 = G__184726;
i__184537 = G__184727;
continue;
}
} else
{var vec__184550 = cljs.core.first.call(null,seq__184534__$1);var vec__184551 = cljs.core.nth.call(null,vec__184550,0,null);var op = cljs.core.nth.call(null,vec__184551,0,null);var path = cljs.core.nth.call(null,vec__184551,1,null);var _ = cljs.core.nth.call(null,vec__184551,2,null);var ___$1 = cljs.core.nth.call(null,vec__184551,3,null);var d = vec__184551;var f = cljs.core.nth.call(null,vec__184550,1,null);var id_184728 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_184729 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__184552_184730 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__184552_184730))
{var seq__184553_184731 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_184729));var chunk__184554_184732 = null;var count__184555_184733 = 0;var i__184556_184734 = 0;while(true){
if((i__184556_184734 < count__184555_184733))
{var dep_184735 = cljs.core._nth.call(null,chunk__184554_184732,i__184556_184734);var dep_pid_184736 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184735);var temp__4092__auto___184737__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184735], null));if(cljs.core.truth_(temp__4092__auto___184737__$2))
{var old_content_184738 = temp__4092__auto___184737__$2;dommy.core.remove_BANG_.call(null,old_content_184738);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184735], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184735], null));
{
var G__184739 = seq__184553_184731;
var G__184740 = chunk__184554_184732;
var G__184741 = count__184555_184733;
var G__184742 = (i__184556_184734 + 1);
seq__184553_184731 = G__184739;
chunk__184554_184732 = G__184740;
count__184555_184733 = G__184741;
i__184556_184734 = G__184742;
continue;
}
} else
{var temp__4092__auto___184743__$2 = cljs.core.seq.call(null,seq__184553_184731);if(temp__4092__auto___184743__$2)
{var seq__184553_184744__$1 = temp__4092__auto___184743__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184553_184744__$1))
{var c__8952__auto___184745 = cljs.core.chunk_first.call(null,seq__184553_184744__$1);{
var G__184746 = cljs.core.chunk_rest.call(null,seq__184553_184744__$1);
var G__184747 = c__8952__auto___184745;
var G__184748 = cljs.core.count.call(null,c__8952__auto___184745);
var G__184749 = 0;
seq__184553_184731 = G__184746;
chunk__184554_184732 = G__184747;
count__184555_184733 = G__184748;
i__184556_184734 = G__184749;
continue;
}
} else
{var dep_184750 = cljs.core.first.call(null,seq__184553_184744__$1);var dep_pid_184751 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184750);var temp__4092__auto___184752__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184750], null));if(cljs.core.truth_(temp__4092__auto___184752__$3))
{var old_content_184753 = temp__4092__auto___184752__$3;dommy.core.remove_BANG_.call(null,old_content_184753);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184750], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184750], null));
{
var G__184754 = cljs.core.next.call(null,seq__184553_184744__$1);
var G__184755 = null;
var G__184756 = 0;
var G__184757 = 0;
seq__184553_184731 = G__184754;
chunk__184554_184732 = G__184755;
count__184555_184733 = G__184756;
i__184556_184734 = G__184757;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__184552_184730))
{var seq__184557_184758 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_184729));var chunk__184558_184759 = null;var count__184559_184760 = 0;var i__184560_184761 = 0;while(true){
if((i__184560_184761 < count__184559_184760))
{var dep_184762 = cljs.core._nth.call(null,chunk__184558_184759,i__184560_184761);var dep_pid_184763 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184762);var temp__4092__auto___184764__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_184763,dep_184762),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184764__$2))
{var dom_content_184765 = temp__4092__auto___184764__$2;var temp__4092__auto___184766__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184762], null));if(cljs.core.truth_(temp__4092__auto___184766__$3))
{var old_content_184767 = temp__4092__auto___184766__$3;dommy.core.replace_BANG_.call(null,old_content_184767,dom_content_184765);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184762], null),dom_content_184765);
} else
{}
{
var G__184768 = seq__184557_184758;
var G__184769 = chunk__184558_184759;
var G__184770 = count__184559_184760;
var G__184771 = (i__184560_184761 + 1);
seq__184557_184758 = G__184768;
chunk__184558_184759 = G__184769;
count__184559_184760 = G__184770;
i__184560_184761 = G__184771;
continue;
}
} else
{var temp__4092__auto___184772__$2 = cljs.core.seq.call(null,seq__184557_184758);if(temp__4092__auto___184772__$2)
{var seq__184557_184773__$1 = temp__4092__auto___184772__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184557_184773__$1))
{var c__8952__auto___184774 = cljs.core.chunk_first.call(null,seq__184557_184773__$1);{
var G__184775 = cljs.core.chunk_rest.call(null,seq__184557_184773__$1);
var G__184776 = c__8952__auto___184774;
var G__184777 = cljs.core.count.call(null,c__8952__auto___184774);
var G__184778 = 0;
seq__184557_184758 = G__184775;
chunk__184558_184759 = G__184776;
count__184559_184760 = G__184777;
i__184560_184761 = G__184778;
continue;
}
} else
{var dep_184779 = cljs.core.first.call(null,seq__184557_184773__$1);var dep_pid_184780 = foundation.app.render._parent_id.call(null,renderer__$1,dep_184779);var temp__4092__auto___184781__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_184780,dep_184779),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184781__$3))
{var dom_content_184782 = temp__4092__auto___184781__$3;var temp__4092__auto___184783__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184779], null));if(cljs.core.truth_(temp__4092__auto___184783__$4))
{var old_content_184784 = temp__4092__auto___184783__$4;dommy.core.replace_BANG_.call(null,old_content_184784,dom_content_184782);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_184779], null),dom_content_184782);
} else
{}
{
var G__184785 = cljs.core.next.call(null,seq__184557_184773__$1);
var G__184786 = null;
var G__184787 = 0;
var G__184788 = 0;
seq__184557_184758 = G__184785;
chunk__184558_184759 = G__184786;
count__184559_184760 = G__184787;
i__184560_184761 = G__184788;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__184552_184730))
{var temp__4092__auto___184789__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_184729,id_184728),renderer__$1);if(cljs.core.truth_(temp__4092__auto___184789__$2))
{var dom_184790 = temp__4092__auto___184789__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_184728], null),dom_184790);
var temp__4090__auto___184791 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_184790);if(cljs.core.truth_(and__8211__auto__))
{var G__184561 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_184790));if(G__184561)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__184561.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__184561.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__184561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__184561);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_184790))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_184729], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_184729], null)));if(cljs.core.truth_(temp__4090__auto___184791))
{var parent_184792 = temp__4090__auto___184791;dommy.core.append_BANG_.call(null,parent_184792,dom_184790);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_184790);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_184728,pid_184729);
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
var G__184793 = cljs.core.next.call(null,seq__184534__$1);
var G__184794 = null;
var G__184795 = 0;
var G__184796 = 0;
seq__184534 = G__184793;
chunk__184535 = G__184794;
count__184536 = G__184795;
i__184537 = G__184796;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__184562){var map__184563 = p__184562;var map__184563__$1 = ((cljs.core.seq_QMARK_.call(null,map__184563))?cljs.core.apply.call(null,cljs.core.hash_map,map__184563):map__184563);var deltas = cljs.core.get.call(null,map__184563__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__184564 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__184565 = null;var count__184566 = 0;var i__184567 = 0;while(true){
if((i__184567 < count__184566))
{var handler = cljs.core._nth.call(null,chunk__184565,i__184567);handler.dispose();
{
var G__184797 = seq__184564;
var G__184798 = chunk__184565;
var G__184799 = count__184566;
var G__184800 = (i__184567 + 1);
seq__184564 = G__184797;
chunk__184565 = G__184798;
count__184566 = G__184799;
i__184567 = G__184800;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__184564);if(temp__4092__auto__)
{var seq__184564__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184564__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__184564__$1);{
var G__184801 = cljs.core.chunk_rest.call(null,seq__184564__$1);
var G__184802 = c__8952__auto__;
var G__184803 = cljs.core.count.call(null,c__8952__auto__);
var G__184804 = 0;
seq__184564 = G__184801;
chunk__184565 = G__184802;
count__184566 = G__184803;
i__184567 = G__184804;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__184564__$1);handler.dispose();
{
var G__184805 = cljs.core.next.call(null,seq__184564__$1);
var G__184806 = null;
var G__184807 = 0;
var G__184808 = 0;
seq__184564 = G__184805;
chunk__184565 = G__184806;
count__184566 = G__184807;
i__184567 = G__184808;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k184502,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k184502,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k184502,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k184502,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k184502,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k184502,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__184501){var self__ = this;
var this__8797__auto____$1 = this;var pred__184568 = cljs.core.keyword_identical_QMARK_;var expr__184569 = k__8798__auto__;if(cljs.core.truth_(pred__184568.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__184569)))
{return (new foundation.app.render.Renderer(G__184501,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__184568.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__184569)))
{return (new foundation.app.render.Renderer(self__.env,G__184501,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__184568.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__184569)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__184501,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__184568.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__184569)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__184501,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__184501),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__184501){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__184501,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__184503){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__184503),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__184503),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__184503),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__184503),null,cljs.core.dissoc.call(null,G__184503,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__184809,pid,id){var vec__184810 = p__184809;var op = cljs.core.nth.call(null,vec__184810,0,null);var path = cljs.core.nth.call(null,vec__184810,1,null);var _ = cljs.core.nth.call(null,vec__184810,2,null);var ___$1 = cljs.core.nth.call(null,vec__184810,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map