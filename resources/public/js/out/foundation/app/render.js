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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__176583,pid,id){var vec__176584 = p__176583;var op = cljs.core.nth.call(null,vec__176584,0,null);var path = cljs.core.nth.call(null,vec__176584,1,null);var _ = cljs.core.nth.call(null,vec__176584,2,null);var ___$1 = cljs.core.nth.call(null,vec__176584,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj176586 = {};return obj176586;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__176587_SHARP_){return cljs.core.not.call(null,p1__176587_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__176589 = (new goog.events.EventHandler(renderer));G__176589.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__176589.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__176589,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__176589;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__176590_SHARP_){return cljs.core.get.call(null,n,p1__176590_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__176595 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__176596 = null;var count__176597 = 0;var i__176598 = 0;while(true){
if((i__176598 < count__176597))
{var f = cljs.core._nth.call(null,chunk__176596,i__176598);f.call(null);
{
var G__176599 = seq__176595;
var G__176600 = chunk__176596;
var G__176601 = count__176597;
var G__176602 = (i__176598 + 1);
seq__176595 = G__176599;
chunk__176596 = G__176600;
count__176597 = G__176601;
i__176598 = G__176602;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176595);if(temp__4092__auto__)
{var seq__176595__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176595__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176595__$1);{
var G__176603 = cljs.core.chunk_rest.call(null,seq__176595__$1);
var G__176604 = c__8952__auto__;
var G__176605 = cljs.core.count.call(null,c__8952__auto__);
var G__176606 = 0;
seq__176595 = G__176603;
chunk__176596 = G__176604;
count__176597 = G__176605;
i__176598 = G__176606;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__176595__$1);f.call(null);
{
var G__176607 = cljs.core.next.call(null,seq__176595__$1);
var G__176608 = null;
var G__176609 = 0;
var G__176610 = 0;
seq__176595 = G__176607;
chunk__176596 = G__176608;
count__176597 = G__176609;
i__176598 = G__176610;
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
foundation.app.render.IRenderer = (function (){var obj176612 = {};return obj176612;
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
foundation.app.render.IRender = (function (){var obj176614 = {};return obj176614;
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
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__176615 = x;var G__176615__$1 = (((function (){var G__176616 = x;if(G__176616)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176616.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__176616.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__176616);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__176616);
}
})())?foundation.app.render.extend_component.call(null,G__176615,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__176615);var G__176615__$2 = (((function (){var G__176617 = x;if(G__176617)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176617.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__176617.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__176617);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__176617);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__176615__$1);var G__176615__$3 = (((function (){var G__176618 = x;if(G__176618)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176618.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__176618.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__176618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__176618);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__176615__$2);var G__176615__$4 = (((function (){var G__176619 = x;if(G__176619)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176619.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__176619.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__176619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__176619);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__176615__$3);var G__176615__$5 = (((function (){var G__176620 = x;if(G__176620)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176620.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__176620.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__176620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__176620);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__176615__$4);var G__176615__$6 = (((function (){var G__176621 = x;if(G__176621)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176621.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__176621.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__176621);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__176621);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__176615__$5);var G__176615__$7 = (((function (){var G__176622 = x;if(G__176622)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176622.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__176622.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__176622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__176622);
}
})())?foundation.app.render.extend_component.call(null,G__176615__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__176615__$6);var G__176615__$8 = (((function (){var G__176623 = x;if(G__176623)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176623.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__176623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__176623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__176623);
}
})())?foundation.app.ui._render.call(null,G__176615__$7):G__176615__$7);return G__176615__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__176624_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__176624_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__176628 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__176629 = null;var count__176630 = 0;var i__176631 = 0;while(true){
if((i__176631 < count__176630))
{var component = cljs.core._nth.call(null,chunk__176629,i__176631);console.log(component);
{
var G__176695 = seq__176628;
var G__176696 = chunk__176629;
var G__176697 = count__176630;
var G__176698 = (i__176631 + 1);
seq__176628 = G__176695;
chunk__176629 = G__176696;
count__176630 = G__176697;
i__176631 = G__176698;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176628);if(temp__4092__auto__)
{var seq__176628__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176628__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176628__$1);{
var G__176699 = cljs.core.chunk_rest.call(null,seq__176628__$1);
var G__176700 = c__8952__auto__;
var G__176701 = cljs.core.count.call(null,c__8952__auto__);
var G__176702 = 0;
seq__176628 = G__176699;
chunk__176629 = G__176700;
count__176630 = G__176701;
i__176631 = G__176702;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176628__$1);console.log(component);
{
var G__176703 = cljs.core.next.call(null,seq__176628__$1);
var G__176704 = null;
var G__176705 = 0;
var G__176706 = 0;
seq__176628 = G__176703;
chunk__176629 = G__176704;
count__176630 = G__176705;
i__176631 = G__176706;
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
var renderer__$1 = this;var seq__176632 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__176633 = null;var count__176634 = 0;var i__176635 = 0;while(true){
if((i__176635 < count__176634))
{var component = cljs.core._nth.call(null,chunk__176633,i__176635);console.log(component);
{
var G__176707 = seq__176632;
var G__176708 = chunk__176633;
var G__176709 = count__176634;
var G__176710 = (i__176635 + 1);
seq__176632 = G__176707;
chunk__176633 = G__176708;
count__176634 = G__176709;
i__176635 = G__176710;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176632);if(temp__4092__auto__)
{var seq__176632__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176632__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176632__$1);{
var G__176711 = cljs.core.chunk_rest.call(null,seq__176632__$1);
var G__176712 = c__8952__auto__;
var G__176713 = cljs.core.count.call(null,c__8952__auto__);
var G__176714 = 0;
seq__176632 = G__176711;
chunk__176633 = G__176712;
count__176634 = G__176713;
i__176635 = G__176714;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176632__$1);console.log(component);
{
var G__176715 = cljs.core.next.call(null,seq__176632__$1);
var G__176716 = null;
var G__176717 = 0;
var G__176718 = 0;
seq__176632 = G__176715;
chunk__176633 = G__176716;
count__176634 = G__176717;
i__176635 = G__176718;
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
var renderer__$1 = this;var seq__176636 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__176637 = null;var count__176638 = 0;var i__176639 = 0;while(true){
if((i__176639 < count__176638))
{var component = cljs.core._nth.call(null,chunk__176637,i__176639);console.log(component);
{
var G__176719 = seq__176636;
var G__176720 = chunk__176637;
var G__176721 = count__176638;
var G__176722 = (i__176639 + 1);
seq__176636 = G__176719;
chunk__176637 = G__176720;
count__176638 = G__176721;
i__176639 = G__176722;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176636);if(temp__4092__auto__)
{var seq__176636__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176636__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176636__$1);{
var G__176723 = cljs.core.chunk_rest.call(null,seq__176636__$1);
var G__176724 = c__8952__auto__;
var G__176725 = cljs.core.count.call(null,c__8952__auto__);
var G__176726 = 0;
seq__176636 = G__176723;
chunk__176637 = G__176724;
count__176638 = G__176725;
i__176639 = G__176726;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176636__$1);console.log(component);
{
var G__176727 = cljs.core.next.call(null,seq__176636__$1);
var G__176728 = null;
var G__176729 = 0;
var G__176730 = 0;
seq__176636 = G__176727;
chunk__176637 = G__176728;
count__176638 = G__176729;
i__176639 = G__176730;
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
var renderer__$1 = this;var seq__176640 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__176641 = null;var count__176642 = 0;var i__176643 = 0;while(true){
if((i__176643 < count__176642))
{var component = cljs.core._nth.call(null,chunk__176641,i__176643);console.log(component);
{
var G__176731 = seq__176640;
var G__176732 = chunk__176641;
var G__176733 = count__176642;
var G__176734 = (i__176643 + 1);
seq__176640 = G__176731;
chunk__176641 = G__176732;
count__176642 = G__176733;
i__176643 = G__176734;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176640);if(temp__4092__auto__)
{var seq__176640__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176640__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176640__$1);{
var G__176735 = cljs.core.chunk_rest.call(null,seq__176640__$1);
var G__176736 = c__8952__auto__;
var G__176737 = cljs.core.count.call(null,c__8952__auto__);
var G__176738 = 0;
seq__176640 = G__176735;
chunk__176641 = G__176736;
count__176642 = G__176737;
i__176643 = G__176738;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176640__$1);console.log(component);
{
var G__176739 = cljs.core.next.call(null,seq__176640__$1);
var G__176740 = null;
var G__176741 = 0;
var G__176742 = 0;
seq__176640 = G__176739;
chunk__176641 = G__176740;
count__176642 = G__176741;
i__176643 = G__176742;
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
var renderer__$1 = this;var seq__176644 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__176645 = null;var count__176646 = 0;var i__176647 = 0;while(true){
if((i__176647 < count__176646))
{var component = cljs.core._nth.call(null,chunk__176645,i__176647);console.log(component);
{
var G__176743 = seq__176644;
var G__176744 = chunk__176645;
var G__176745 = count__176646;
var G__176746 = (i__176647 + 1);
seq__176644 = G__176743;
chunk__176645 = G__176744;
count__176646 = G__176745;
i__176647 = G__176746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176644);if(temp__4092__auto__)
{var seq__176644__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176644__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176644__$1);{
var G__176747 = cljs.core.chunk_rest.call(null,seq__176644__$1);
var G__176748 = c__8952__auto__;
var G__176749 = cljs.core.count.call(null,c__8952__auto__);
var G__176750 = 0;
seq__176644 = G__176747;
chunk__176645 = G__176748;
count__176646 = G__176749;
i__176647 = G__176750;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176644__$1);console.log(component);
{
var G__176751 = cljs.core.next.call(null,seq__176644__$1);
var G__176752 = null;
var G__176753 = 0;
var G__176754 = 0;
seq__176644 = G__176751;
chunk__176645 = G__176752;
count__176646 = G__176753;
i__176647 = G__176754;
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
var renderer__$1 = this;var seq__176648 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__176649 = null;var count__176650 = 0;var i__176651 = 0;while(true){
if((i__176651 < count__176650))
{var component = cljs.core._nth.call(null,chunk__176649,i__176651);console.log(component);
{
var G__176755 = seq__176648;
var G__176756 = chunk__176649;
var G__176757 = count__176650;
var G__176758 = (i__176651 + 1);
seq__176648 = G__176755;
chunk__176649 = G__176756;
count__176650 = G__176757;
i__176651 = G__176758;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176648);if(temp__4092__auto__)
{var seq__176648__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176648__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176648__$1);{
var G__176759 = cljs.core.chunk_rest.call(null,seq__176648__$1);
var G__176760 = c__8952__auto__;
var G__176761 = cljs.core.count.call(null,c__8952__auto__);
var G__176762 = 0;
seq__176648 = G__176759;
chunk__176649 = G__176760;
count__176650 = G__176761;
i__176651 = G__176762;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176648__$1);console.log(component);
{
var G__176763 = cljs.core.next.call(null,seq__176648__$1);
var G__176764 = null;
var G__176765 = 0;
var G__176766 = 0;
seq__176648 = G__176763;
chunk__176649 = G__176764;
count__176650 = G__176765;
i__176651 = G__176766;
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
var renderer__$1 = this;var seq__176652 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__176653 = null;var count__176654 = 0;var i__176655 = 0;while(true){
if((i__176655 < count__176654))
{var component = cljs.core._nth.call(null,chunk__176653,i__176655);console.log(component);
{
var G__176767 = seq__176652;
var G__176768 = chunk__176653;
var G__176769 = count__176654;
var G__176770 = (i__176655 + 1);
seq__176652 = G__176767;
chunk__176653 = G__176768;
count__176654 = G__176769;
i__176655 = G__176770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176652);if(temp__4092__auto__)
{var seq__176652__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176652__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176652__$1);{
var G__176771 = cljs.core.chunk_rest.call(null,seq__176652__$1);
var G__176772 = c__8952__auto__;
var G__176773 = cljs.core.count.call(null,c__8952__auto__);
var G__176774 = 0;
seq__176652 = G__176771;
chunk__176653 = G__176772;
count__176654 = G__176773;
i__176655 = G__176774;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__176652__$1);console.log(component);
{
var G__176775 = cljs.core.next.call(null,seq__176652__$1);
var G__176776 = null;
var G__176777 = 0;
var G__176778 = 0;
seq__176652 = G__176775;
chunk__176653 = G__176776;
count__176654 = G__176777;
i__176655 = G__176778;
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
return (function (p__176656){var vec__176657 = p__176656;var op = cljs.core.nth.call(null,vec__176657,0,null);var path = cljs.core.nth.call(null,vec__176657,1,null);var _ = cljs.core.nth.call(null,vec__176657,2,null);var ___$1 = cljs.core.nth.call(null,vec__176657,3,null);var delta = vec__176657;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
var seq__176658 = cljs.core.seq.call(null,deltas__$1);var chunk__176659 = null;var count__176660 = 0;var i__176661 = 0;while(true){
if((i__176661 < count__176660))
{var vec__176662 = cljs.core._nth.call(null,chunk__176659,i__176661);var vec__176663 = cljs.core.nth.call(null,vec__176662,0,null);var op = cljs.core.nth.call(null,vec__176663,0,null);var path = cljs.core.nth.call(null,vec__176663,1,null);var _ = cljs.core.nth.call(null,vec__176663,2,null);var ___$1 = cljs.core.nth.call(null,vec__176663,3,null);var d = vec__176663;var f = cljs.core.nth.call(null,vec__176662,1,null);var id_176779 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_176780 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__176664_176781 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__176664_176781))
{var seq__176665_176782 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_176780));var chunk__176666_176783 = null;var count__176667_176784 = 0;var i__176668_176785 = 0;while(true){
if((i__176668_176785 < count__176667_176784))
{var dep_176786 = cljs.core._nth.call(null,chunk__176666_176783,i__176668_176785);var dep_pid_176787 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176786);var temp__4092__auto___176788__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176786], null));if(cljs.core.truth_(temp__4092__auto___176788__$1))
{var old_content_176789 = temp__4092__auto___176788__$1;dommy.core.remove_BANG_.call(null,old_content_176789);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176786], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176786], null));
{
var G__176790 = seq__176665_176782;
var G__176791 = chunk__176666_176783;
var G__176792 = count__176667_176784;
var G__176793 = (i__176668_176785 + 1);
seq__176665_176782 = G__176790;
chunk__176666_176783 = G__176791;
count__176667_176784 = G__176792;
i__176668_176785 = G__176793;
continue;
}
} else
{var temp__4092__auto___176794__$1 = cljs.core.seq.call(null,seq__176665_176782);if(temp__4092__auto___176794__$1)
{var seq__176665_176795__$1 = temp__4092__auto___176794__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176665_176795__$1))
{var c__8952__auto___176796 = cljs.core.chunk_first.call(null,seq__176665_176795__$1);{
var G__176797 = cljs.core.chunk_rest.call(null,seq__176665_176795__$1);
var G__176798 = c__8952__auto___176796;
var G__176799 = cljs.core.count.call(null,c__8952__auto___176796);
var G__176800 = 0;
seq__176665_176782 = G__176797;
chunk__176666_176783 = G__176798;
count__176667_176784 = G__176799;
i__176668_176785 = G__176800;
continue;
}
} else
{var dep_176801 = cljs.core.first.call(null,seq__176665_176795__$1);var dep_pid_176802 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176801);var temp__4092__auto___176803__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176801], null));if(cljs.core.truth_(temp__4092__auto___176803__$2))
{var old_content_176804 = temp__4092__auto___176803__$2;dommy.core.remove_BANG_.call(null,old_content_176804);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176801], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176801], null));
{
var G__176805 = cljs.core.next.call(null,seq__176665_176795__$1);
var G__176806 = null;
var G__176807 = 0;
var G__176808 = 0;
seq__176665_176782 = G__176805;
chunk__176666_176783 = G__176806;
count__176667_176784 = G__176807;
i__176668_176785 = G__176808;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__176664_176781))
{var seq__176669_176809 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_176780));var chunk__176670_176810 = null;var count__176671_176811 = 0;var i__176672_176812 = 0;while(true){
if((i__176672_176812 < count__176671_176811))
{var dep_176813 = cljs.core._nth.call(null,chunk__176670_176810,i__176672_176812);var dep_pid_176814 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176813);var temp__4092__auto___176815__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_176814,dep_176813),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176815__$1))
{var dom_content_176816 = temp__4092__auto___176815__$1;var temp__4092__auto___176817__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176813], null));if(cljs.core.truth_(temp__4092__auto___176817__$2))
{var old_content_176818 = temp__4092__auto___176817__$2;dommy.core.replace_BANG_.call(null,old_content_176818,dom_content_176816);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176813], null),dom_content_176816);
} else
{}
{
var G__176819 = seq__176669_176809;
var G__176820 = chunk__176670_176810;
var G__176821 = count__176671_176811;
var G__176822 = (i__176672_176812 + 1);
seq__176669_176809 = G__176819;
chunk__176670_176810 = G__176820;
count__176671_176811 = G__176821;
i__176672_176812 = G__176822;
continue;
}
} else
{var temp__4092__auto___176823__$1 = cljs.core.seq.call(null,seq__176669_176809);if(temp__4092__auto___176823__$1)
{var seq__176669_176824__$1 = temp__4092__auto___176823__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176669_176824__$1))
{var c__8952__auto___176825 = cljs.core.chunk_first.call(null,seq__176669_176824__$1);{
var G__176826 = cljs.core.chunk_rest.call(null,seq__176669_176824__$1);
var G__176827 = c__8952__auto___176825;
var G__176828 = cljs.core.count.call(null,c__8952__auto___176825);
var G__176829 = 0;
seq__176669_176809 = G__176826;
chunk__176670_176810 = G__176827;
count__176671_176811 = G__176828;
i__176672_176812 = G__176829;
continue;
}
} else
{var dep_176830 = cljs.core.first.call(null,seq__176669_176824__$1);var dep_pid_176831 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176830);var temp__4092__auto___176832__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_176831,dep_176830),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176832__$2))
{var dom_content_176833 = temp__4092__auto___176832__$2;var temp__4092__auto___176834__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176830], null));if(cljs.core.truth_(temp__4092__auto___176834__$3))
{var old_content_176835 = temp__4092__auto___176834__$3;dommy.core.replace_BANG_.call(null,old_content_176835,dom_content_176833);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176830], null),dom_content_176833);
} else
{}
{
var G__176836 = cljs.core.next.call(null,seq__176669_176824__$1);
var G__176837 = null;
var G__176838 = 0;
var G__176839 = 0;
seq__176669_176809 = G__176836;
chunk__176670_176810 = G__176837;
count__176671_176811 = G__176838;
i__176672_176812 = G__176839;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__176664_176781))
{var temp__4092__auto___176840__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_176780,id_176779),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176840__$1))
{var dom_176841 = temp__4092__auto___176840__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_176779], null),dom_176841);
var temp__4090__auto___176842 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_176841);if(cljs.core.truth_(and__8211__auto__))
{var G__176673 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_176841));if(G__176673)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176673.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__176673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__176673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__176673);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_176841))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_176780], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_176780], null)));if(cljs.core.truth_(temp__4090__auto___176842))
{var parent_176843 = temp__4090__auto___176842;dommy.core.append_BANG_.call(null,parent_176843,dom_176841);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_176841);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_176779,pid_176780);
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
var G__176844 = seq__176658;
var G__176845 = chunk__176659;
var G__176846 = count__176660;
var G__176847 = (i__176661 + 1);
seq__176658 = G__176844;
chunk__176659 = G__176845;
count__176660 = G__176846;
i__176661 = G__176847;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__176658);if(temp__4092__auto____$1)
{var seq__176658__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176658__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176658__$1);{
var G__176848 = cljs.core.chunk_rest.call(null,seq__176658__$1);
var G__176849 = c__8952__auto__;
var G__176850 = cljs.core.count.call(null,c__8952__auto__);
var G__176851 = 0;
seq__176658 = G__176848;
chunk__176659 = G__176849;
count__176660 = G__176850;
i__176661 = G__176851;
continue;
}
} else
{var vec__176674 = cljs.core.first.call(null,seq__176658__$1);var vec__176675 = cljs.core.nth.call(null,vec__176674,0,null);var op = cljs.core.nth.call(null,vec__176675,0,null);var path = cljs.core.nth.call(null,vec__176675,1,null);var _ = cljs.core.nth.call(null,vec__176675,2,null);var ___$1 = cljs.core.nth.call(null,vec__176675,3,null);var d = vec__176675;var f = cljs.core.nth.call(null,vec__176674,1,null);var id_176852 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_176853 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__176676_176854 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__176676_176854))
{var seq__176677_176855 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_176853));var chunk__176678_176856 = null;var count__176679_176857 = 0;var i__176680_176858 = 0;while(true){
if((i__176680_176858 < count__176679_176857))
{var dep_176859 = cljs.core._nth.call(null,chunk__176678_176856,i__176680_176858);var dep_pid_176860 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176859);var temp__4092__auto___176861__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176859], null));if(cljs.core.truth_(temp__4092__auto___176861__$2))
{var old_content_176862 = temp__4092__auto___176861__$2;dommy.core.remove_BANG_.call(null,old_content_176862);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176859], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176859], null));
{
var G__176863 = seq__176677_176855;
var G__176864 = chunk__176678_176856;
var G__176865 = count__176679_176857;
var G__176866 = (i__176680_176858 + 1);
seq__176677_176855 = G__176863;
chunk__176678_176856 = G__176864;
count__176679_176857 = G__176865;
i__176680_176858 = G__176866;
continue;
}
} else
{var temp__4092__auto___176867__$2 = cljs.core.seq.call(null,seq__176677_176855);if(temp__4092__auto___176867__$2)
{var seq__176677_176868__$1 = temp__4092__auto___176867__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176677_176868__$1))
{var c__8952__auto___176869 = cljs.core.chunk_first.call(null,seq__176677_176868__$1);{
var G__176870 = cljs.core.chunk_rest.call(null,seq__176677_176868__$1);
var G__176871 = c__8952__auto___176869;
var G__176872 = cljs.core.count.call(null,c__8952__auto___176869);
var G__176873 = 0;
seq__176677_176855 = G__176870;
chunk__176678_176856 = G__176871;
count__176679_176857 = G__176872;
i__176680_176858 = G__176873;
continue;
}
} else
{var dep_176874 = cljs.core.first.call(null,seq__176677_176868__$1);var dep_pid_176875 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176874);var temp__4092__auto___176876__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176874], null));if(cljs.core.truth_(temp__4092__auto___176876__$3))
{var old_content_176877 = temp__4092__auto___176876__$3;dommy.core.remove_BANG_.call(null,old_content_176877);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176874], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176874], null));
{
var G__176878 = cljs.core.next.call(null,seq__176677_176868__$1);
var G__176879 = null;
var G__176880 = 0;
var G__176881 = 0;
seq__176677_176855 = G__176878;
chunk__176678_176856 = G__176879;
count__176679_176857 = G__176880;
i__176680_176858 = G__176881;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__176676_176854))
{var seq__176681_176882 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_176853));var chunk__176682_176883 = null;var count__176683_176884 = 0;var i__176684_176885 = 0;while(true){
if((i__176684_176885 < count__176683_176884))
{var dep_176886 = cljs.core._nth.call(null,chunk__176682_176883,i__176684_176885);var dep_pid_176887 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176886);var temp__4092__auto___176888__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_176887,dep_176886),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176888__$2))
{var dom_content_176889 = temp__4092__auto___176888__$2;var temp__4092__auto___176890__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176886], null));if(cljs.core.truth_(temp__4092__auto___176890__$3))
{var old_content_176891 = temp__4092__auto___176890__$3;dommy.core.replace_BANG_.call(null,old_content_176891,dom_content_176889);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176886], null),dom_content_176889);
} else
{}
{
var G__176892 = seq__176681_176882;
var G__176893 = chunk__176682_176883;
var G__176894 = count__176683_176884;
var G__176895 = (i__176684_176885 + 1);
seq__176681_176882 = G__176892;
chunk__176682_176883 = G__176893;
count__176683_176884 = G__176894;
i__176684_176885 = G__176895;
continue;
}
} else
{var temp__4092__auto___176896__$2 = cljs.core.seq.call(null,seq__176681_176882);if(temp__4092__auto___176896__$2)
{var seq__176681_176897__$1 = temp__4092__auto___176896__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176681_176897__$1))
{var c__8952__auto___176898 = cljs.core.chunk_first.call(null,seq__176681_176897__$1);{
var G__176899 = cljs.core.chunk_rest.call(null,seq__176681_176897__$1);
var G__176900 = c__8952__auto___176898;
var G__176901 = cljs.core.count.call(null,c__8952__auto___176898);
var G__176902 = 0;
seq__176681_176882 = G__176899;
chunk__176682_176883 = G__176900;
count__176683_176884 = G__176901;
i__176684_176885 = G__176902;
continue;
}
} else
{var dep_176903 = cljs.core.first.call(null,seq__176681_176897__$1);var dep_pid_176904 = foundation.app.render._parent_id.call(null,renderer__$1,dep_176903);var temp__4092__auto___176905__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_176904,dep_176903),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176905__$3))
{var dom_content_176906 = temp__4092__auto___176905__$3;var temp__4092__auto___176907__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176903], null));if(cljs.core.truth_(temp__4092__auto___176907__$4))
{var old_content_176908 = temp__4092__auto___176907__$4;dommy.core.replace_BANG_.call(null,old_content_176908,dom_content_176906);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_176903], null),dom_content_176906);
} else
{}
{
var G__176909 = cljs.core.next.call(null,seq__176681_176897__$1);
var G__176910 = null;
var G__176911 = 0;
var G__176912 = 0;
seq__176681_176882 = G__176909;
chunk__176682_176883 = G__176910;
count__176683_176884 = G__176911;
i__176684_176885 = G__176912;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__176676_176854))
{var temp__4092__auto___176913__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_176853,id_176852),renderer__$1);if(cljs.core.truth_(temp__4092__auto___176913__$2))
{var dom_176914 = temp__4092__auto___176913__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_176852], null),dom_176914);
var temp__4090__auto___176915 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_176914);if(cljs.core.truth_(and__8211__auto__))
{var G__176685 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_176914));if(G__176685)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__176685.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__176685.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__176685);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__176685);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_176914))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_176853], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_176853], null)));if(cljs.core.truth_(temp__4090__auto___176915))
{var parent_176916 = temp__4090__auto___176915;dommy.core.append_BANG_.call(null,parent_176916,dom_176914);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_176914);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_176852,pid_176853);
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
var G__176917 = cljs.core.next.call(null,seq__176658__$1);
var G__176918 = null;
var G__176919 = 0;
var G__176920 = 0;
seq__176658 = G__176917;
chunk__176659 = G__176918;
count__176660 = G__176919;
i__176661 = G__176920;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__176686){var map__176687 = p__176686;var map__176687__$1 = ((cljs.core.seq_QMARK_.call(null,map__176687))?cljs.core.apply.call(null,cljs.core.hash_map,map__176687):map__176687);var deltas = cljs.core.get.call(null,map__176687__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__176688 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__176689 = null;var count__176690 = 0;var i__176691 = 0;while(true){
if((i__176691 < count__176690))
{var handler = cljs.core._nth.call(null,chunk__176689,i__176691);handler.dispose();
{
var G__176921 = seq__176688;
var G__176922 = chunk__176689;
var G__176923 = count__176690;
var G__176924 = (i__176691 + 1);
seq__176688 = G__176921;
chunk__176689 = G__176922;
count__176690 = G__176923;
i__176691 = G__176924;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__176688);if(temp__4092__auto__)
{var seq__176688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__176688__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__176688__$1);{
var G__176925 = cljs.core.chunk_rest.call(null,seq__176688__$1);
var G__176926 = c__8952__auto__;
var G__176927 = cljs.core.count.call(null,c__8952__auto__);
var G__176928 = 0;
seq__176688 = G__176925;
chunk__176689 = G__176926;
count__176690 = G__176927;
i__176691 = G__176928;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__176688__$1);handler.dispose();
{
var G__176929 = cljs.core.next.call(null,seq__176688__$1);
var G__176930 = null;
var G__176931 = 0;
var G__176932 = 0;
seq__176688 = G__176929;
chunk__176689 = G__176930;
count__176690 = G__176931;
i__176691 = G__176932;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k176626,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k176626,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k176626,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k176626,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k176626,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k176626,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__176625){var self__ = this;
var this__8797__auto____$1 = this;var pred__176692 = cljs.core.keyword_identical_QMARK_;var expr__176693 = k__8798__auto__;if(cljs.core.truth_(pred__176692.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__176693)))
{return (new foundation.app.render.Renderer(G__176625,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__176692.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__176693)))
{return (new foundation.app.render.Renderer(self__.env,G__176625,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__176692.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__176693)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__176625,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__176692.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__176693)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__176625,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__176625),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__176625){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__176625,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__176627){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__176627),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__176627),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__176627),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__176627),null,cljs.core.dissoc.call(null,G__176627,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__176933,pid,id){var vec__176934 = p__176933;var op = cljs.core.nth.call(null,vec__176934,0,null);var path = cljs.core.nth.call(null,vec__176934,1,null);var _ = cljs.core.nth.call(null,vec__176934,2,null);var ___$1 = cljs.core.nth.call(null,vec__176934,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map