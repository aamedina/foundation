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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__228040,pid,id){var vec__228041 = p__228040;var op = cljs.core.nth.call(null,vec__228041,0,null);var path = cljs.core.nth.call(null,vec__228041,1,null);var _ = cljs.core.nth.call(null,vec__228041,2,null);var ___$1 = cljs.core.nth.call(null,vec__228041,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj228043 = {};return obj228043;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__228044_SHARP_){return cljs.core.not.call(null,p1__228044_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__228046 = (new goog.events.EventHandler(renderer));G__228046.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__228046.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__228046,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__228046;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__228047_SHARP_){return cljs.core.get.call(null,n,p1__228047_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__228052 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__228053 = null;var count__228054 = 0;var i__228055 = 0;while(true){
if((i__228055 < count__228054))
{var f = cljs.core._nth.call(null,chunk__228053,i__228055);f.call(null);
{
var G__228056 = seq__228052;
var G__228057 = chunk__228053;
var G__228058 = count__228054;
var G__228059 = (i__228055 + 1);
seq__228052 = G__228056;
chunk__228053 = G__228057;
count__228054 = G__228058;
i__228055 = G__228059;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228052);if(temp__4092__auto__)
{var seq__228052__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228052__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228052__$1);{
var G__228060 = cljs.core.chunk_rest.call(null,seq__228052__$1);
var G__228061 = c__8952__auto__;
var G__228062 = cljs.core.count.call(null,c__8952__auto__);
var G__228063 = 0;
seq__228052 = G__228060;
chunk__228053 = G__228061;
count__228054 = G__228062;
i__228055 = G__228063;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__228052__$1);f.call(null);
{
var G__228064 = cljs.core.next.call(null,seq__228052__$1);
var G__228065 = null;
var G__228066 = 0;
var G__228067 = 0;
seq__228052 = G__228064;
chunk__228053 = G__228065;
count__228054 = G__228066;
i__228055 = G__228067;
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
foundation.app.render.IRenderer = (function (){var obj228069 = {};return obj228069;
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
foundation.app.render.IRender = (function (){var obj228071 = {};return obj228071;
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
cljs.core.Keyword.prototype.foundation$app$render$IRender$ = true;
cljs.core.Keyword.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return document.querySelector(dommy.core.selector.call(null,x__$1));
});
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return dommy.template.__GT_node_like.call(null,x__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__228072 = x;var G__228072__$1 = (((function (){var G__228073 = x;if(G__228073)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228073.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__228073.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__228073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__228073);
}
})())?foundation.app.render.extend_component.call(null,G__228072,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__228072);var G__228072__$2 = (((function (){var G__228074 = x;if(G__228074)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228074.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__228074.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__228074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__228074);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__228072__$1);var G__228072__$3 = (((function (){var G__228075 = x;if(G__228075)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228075.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__228075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__228075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__228075);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__228072__$2);var G__228072__$4 = (((function (){var G__228076 = x;if(G__228076)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228076.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__228076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__228076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__228076);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__228072__$3);var G__228072__$5 = (((function (){var G__228077 = x;if(G__228077)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228077.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__228077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__228077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__228077);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__228072__$4);var G__228072__$6 = (((function (){var G__228078 = x;if(G__228078)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228078.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__228078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__228078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__228078);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__228072__$5);var G__228072__$7 = (((function (){var G__228079 = x;if(G__228079)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228079.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__228079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__228079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__228079);
}
})())?foundation.app.render.extend_component.call(null,G__228072__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__228072__$6);var G__228072__$8 = (((function (){var G__228080 = x;if(G__228080)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228080.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__228080.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__228080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__228080);
}
})())?foundation.app.ui._render.call(null,G__228072__$7):G__228072__$7);return G__228072__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__228082_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__228082_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__228086 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__228087 = null;var count__228088 = 0;var i__228089 = 0;while(true){
if((i__228089 < count__228088))
{var component = cljs.core._nth.call(null,chunk__228087,i__228089);console.log(component);
{
var G__228153 = seq__228086;
var G__228154 = chunk__228087;
var G__228155 = count__228088;
var G__228156 = (i__228089 + 1);
seq__228086 = G__228153;
chunk__228087 = G__228154;
count__228088 = G__228155;
i__228089 = G__228156;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228086);if(temp__4092__auto__)
{var seq__228086__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228086__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228086__$1);{
var G__228157 = cljs.core.chunk_rest.call(null,seq__228086__$1);
var G__228158 = c__8952__auto__;
var G__228159 = cljs.core.count.call(null,c__8952__auto__);
var G__228160 = 0;
seq__228086 = G__228157;
chunk__228087 = G__228158;
count__228088 = G__228159;
i__228089 = G__228160;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228086__$1);console.log(component);
{
var G__228161 = cljs.core.next.call(null,seq__228086__$1);
var G__228162 = null;
var G__228163 = 0;
var G__228164 = 0;
seq__228086 = G__228161;
chunk__228087 = G__228162;
count__228088 = G__228163;
i__228089 = G__228164;
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
var renderer__$1 = this;var seq__228090 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__228091 = null;var count__228092 = 0;var i__228093 = 0;while(true){
if((i__228093 < count__228092))
{var component = cljs.core._nth.call(null,chunk__228091,i__228093);console.log(component);
{
var G__228165 = seq__228090;
var G__228166 = chunk__228091;
var G__228167 = count__228092;
var G__228168 = (i__228093 + 1);
seq__228090 = G__228165;
chunk__228091 = G__228166;
count__228092 = G__228167;
i__228093 = G__228168;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228090);if(temp__4092__auto__)
{var seq__228090__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228090__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228090__$1);{
var G__228169 = cljs.core.chunk_rest.call(null,seq__228090__$1);
var G__228170 = c__8952__auto__;
var G__228171 = cljs.core.count.call(null,c__8952__auto__);
var G__228172 = 0;
seq__228090 = G__228169;
chunk__228091 = G__228170;
count__228092 = G__228171;
i__228093 = G__228172;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228090__$1);console.log(component);
{
var G__228173 = cljs.core.next.call(null,seq__228090__$1);
var G__228174 = null;
var G__228175 = 0;
var G__228176 = 0;
seq__228090 = G__228173;
chunk__228091 = G__228174;
count__228092 = G__228175;
i__228093 = G__228176;
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
var renderer__$1 = this;var seq__228094 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__228095 = null;var count__228096 = 0;var i__228097 = 0;while(true){
if((i__228097 < count__228096))
{var component = cljs.core._nth.call(null,chunk__228095,i__228097);console.log(component);
{
var G__228177 = seq__228094;
var G__228178 = chunk__228095;
var G__228179 = count__228096;
var G__228180 = (i__228097 + 1);
seq__228094 = G__228177;
chunk__228095 = G__228178;
count__228096 = G__228179;
i__228097 = G__228180;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228094);if(temp__4092__auto__)
{var seq__228094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228094__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228094__$1);{
var G__228181 = cljs.core.chunk_rest.call(null,seq__228094__$1);
var G__228182 = c__8952__auto__;
var G__228183 = cljs.core.count.call(null,c__8952__auto__);
var G__228184 = 0;
seq__228094 = G__228181;
chunk__228095 = G__228182;
count__228096 = G__228183;
i__228097 = G__228184;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228094__$1);console.log(component);
{
var G__228185 = cljs.core.next.call(null,seq__228094__$1);
var G__228186 = null;
var G__228187 = 0;
var G__228188 = 0;
seq__228094 = G__228185;
chunk__228095 = G__228186;
count__228096 = G__228187;
i__228097 = G__228188;
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
var renderer__$1 = this;var seq__228098 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__228099 = null;var count__228100 = 0;var i__228101 = 0;while(true){
if((i__228101 < count__228100))
{var component = cljs.core._nth.call(null,chunk__228099,i__228101);console.log(component);
{
var G__228189 = seq__228098;
var G__228190 = chunk__228099;
var G__228191 = count__228100;
var G__228192 = (i__228101 + 1);
seq__228098 = G__228189;
chunk__228099 = G__228190;
count__228100 = G__228191;
i__228101 = G__228192;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228098);if(temp__4092__auto__)
{var seq__228098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228098__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228098__$1);{
var G__228193 = cljs.core.chunk_rest.call(null,seq__228098__$1);
var G__228194 = c__8952__auto__;
var G__228195 = cljs.core.count.call(null,c__8952__auto__);
var G__228196 = 0;
seq__228098 = G__228193;
chunk__228099 = G__228194;
count__228100 = G__228195;
i__228101 = G__228196;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228098__$1);console.log(component);
{
var G__228197 = cljs.core.next.call(null,seq__228098__$1);
var G__228198 = null;
var G__228199 = 0;
var G__228200 = 0;
seq__228098 = G__228197;
chunk__228099 = G__228198;
count__228100 = G__228199;
i__228101 = G__228200;
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
var renderer__$1 = this;var seq__228102 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__228103 = null;var count__228104 = 0;var i__228105 = 0;while(true){
if((i__228105 < count__228104))
{var component = cljs.core._nth.call(null,chunk__228103,i__228105);console.log(component);
{
var G__228201 = seq__228102;
var G__228202 = chunk__228103;
var G__228203 = count__228104;
var G__228204 = (i__228105 + 1);
seq__228102 = G__228201;
chunk__228103 = G__228202;
count__228104 = G__228203;
i__228105 = G__228204;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228102);if(temp__4092__auto__)
{var seq__228102__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228102__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228102__$1);{
var G__228205 = cljs.core.chunk_rest.call(null,seq__228102__$1);
var G__228206 = c__8952__auto__;
var G__228207 = cljs.core.count.call(null,c__8952__auto__);
var G__228208 = 0;
seq__228102 = G__228205;
chunk__228103 = G__228206;
count__228104 = G__228207;
i__228105 = G__228208;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228102__$1);console.log(component);
{
var G__228209 = cljs.core.next.call(null,seq__228102__$1);
var G__228210 = null;
var G__228211 = 0;
var G__228212 = 0;
seq__228102 = G__228209;
chunk__228103 = G__228210;
count__228104 = G__228211;
i__228105 = G__228212;
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
var renderer__$1 = this;var seq__228106 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__228107 = null;var count__228108 = 0;var i__228109 = 0;while(true){
if((i__228109 < count__228108))
{var component = cljs.core._nth.call(null,chunk__228107,i__228109);console.log(component);
{
var G__228213 = seq__228106;
var G__228214 = chunk__228107;
var G__228215 = count__228108;
var G__228216 = (i__228109 + 1);
seq__228106 = G__228213;
chunk__228107 = G__228214;
count__228108 = G__228215;
i__228109 = G__228216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228106);if(temp__4092__auto__)
{var seq__228106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228106__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228106__$1);{
var G__228217 = cljs.core.chunk_rest.call(null,seq__228106__$1);
var G__228218 = c__8952__auto__;
var G__228219 = cljs.core.count.call(null,c__8952__auto__);
var G__228220 = 0;
seq__228106 = G__228217;
chunk__228107 = G__228218;
count__228108 = G__228219;
i__228109 = G__228220;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228106__$1);console.log(component);
{
var G__228221 = cljs.core.next.call(null,seq__228106__$1);
var G__228222 = null;
var G__228223 = 0;
var G__228224 = 0;
seq__228106 = G__228221;
chunk__228107 = G__228222;
count__228108 = G__228223;
i__228109 = G__228224;
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
var renderer__$1 = this;var seq__228110 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__228111 = null;var count__228112 = 0;var i__228113 = 0;while(true){
if((i__228113 < count__228112))
{var component = cljs.core._nth.call(null,chunk__228111,i__228113);console.log(component);
{
var G__228225 = seq__228110;
var G__228226 = chunk__228111;
var G__228227 = count__228112;
var G__228228 = (i__228113 + 1);
seq__228110 = G__228225;
chunk__228111 = G__228226;
count__228112 = G__228227;
i__228113 = G__228228;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228110);if(temp__4092__auto__)
{var seq__228110__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228110__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228110__$1);{
var G__228229 = cljs.core.chunk_rest.call(null,seq__228110__$1);
var G__228230 = c__8952__auto__;
var G__228231 = cljs.core.count.call(null,c__8952__auto__);
var G__228232 = 0;
seq__228110 = G__228229;
chunk__228111 = G__228230;
count__228112 = G__228231;
i__228113 = G__228232;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__228110__$1);console.log(component);
{
var G__228233 = cljs.core.next.call(null,seq__228110__$1);
var G__228234 = null;
var G__228235 = 0;
var G__228236 = 0;
seq__228110 = G__228233;
chunk__228111 = G__228234;
count__228112 = G__228235;
i__228113 = G__228236;
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
return (function (p__228114){var vec__228115 = p__228114;var op = cljs.core.nth.call(null,vec__228115,0,null);var path = cljs.core.nth.call(null,vec__228115,1,null);var _ = cljs.core.nth.call(null,vec__228115,2,null);var ___$1 = cljs.core.nth.call(null,vec__228115,3,null);var delta = vec__228115;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__228081_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__228081_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__228116 = cljs.core.seq.call(null,deltas__$1);var chunk__228117 = null;var count__228118 = 0;var i__228119 = 0;while(true){
if((i__228119 < count__228118))
{var vec__228120 = cljs.core._nth.call(null,chunk__228117,i__228119);var vec__228121 = cljs.core.nth.call(null,vec__228120,0,null);var op = cljs.core.nth.call(null,vec__228121,0,null);var path = cljs.core.nth.call(null,vec__228121,1,null);var _ = cljs.core.nth.call(null,vec__228121,2,null);var ___$1 = cljs.core.nth.call(null,vec__228121,3,null);var d = vec__228121;var f = cljs.core.nth.call(null,vec__228120,1,null);var id_228237 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_228238 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__228122_228239 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__228122_228239))
{var seq__228123_228240 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_228238));var chunk__228124_228241 = null;var count__228125_228242 = 0;var i__228126_228243 = 0;while(true){
if((i__228126_228243 < count__228125_228242))
{var dep_228244 = cljs.core._nth.call(null,chunk__228124_228241,i__228126_228243);var dep_pid_228245 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228244);var temp__4092__auto___228246__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228244], null));if(cljs.core.truth_(temp__4092__auto___228246__$1))
{var old_content_228247 = temp__4092__auto___228246__$1;dommy.core.remove_BANG_.call(null,old_content_228247);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228244], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228244], null));
{
var G__228248 = seq__228123_228240;
var G__228249 = chunk__228124_228241;
var G__228250 = count__228125_228242;
var G__228251 = (i__228126_228243 + 1);
seq__228123_228240 = G__228248;
chunk__228124_228241 = G__228249;
count__228125_228242 = G__228250;
i__228126_228243 = G__228251;
continue;
}
} else
{var temp__4092__auto___228252__$1 = cljs.core.seq.call(null,seq__228123_228240);if(temp__4092__auto___228252__$1)
{var seq__228123_228253__$1 = temp__4092__auto___228252__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228123_228253__$1))
{var c__8952__auto___228254 = cljs.core.chunk_first.call(null,seq__228123_228253__$1);{
var G__228255 = cljs.core.chunk_rest.call(null,seq__228123_228253__$1);
var G__228256 = c__8952__auto___228254;
var G__228257 = cljs.core.count.call(null,c__8952__auto___228254);
var G__228258 = 0;
seq__228123_228240 = G__228255;
chunk__228124_228241 = G__228256;
count__228125_228242 = G__228257;
i__228126_228243 = G__228258;
continue;
}
} else
{var dep_228259 = cljs.core.first.call(null,seq__228123_228253__$1);var dep_pid_228260 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228259);var temp__4092__auto___228261__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228259], null));if(cljs.core.truth_(temp__4092__auto___228261__$2))
{var old_content_228262 = temp__4092__auto___228261__$2;dommy.core.remove_BANG_.call(null,old_content_228262);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228259], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228259], null));
{
var G__228263 = cljs.core.next.call(null,seq__228123_228253__$1);
var G__228264 = null;
var G__228265 = 0;
var G__228266 = 0;
seq__228123_228240 = G__228263;
chunk__228124_228241 = G__228264;
count__228125_228242 = G__228265;
i__228126_228243 = G__228266;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__228122_228239))
{var seq__228127_228267 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_228238));var chunk__228128_228268 = null;var count__228129_228269 = 0;var i__228130_228270 = 0;while(true){
if((i__228130_228270 < count__228129_228269))
{var dep_228271 = cljs.core._nth.call(null,chunk__228128_228268,i__228130_228270);var dep_pid_228272 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228271);var temp__4092__auto___228273__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_228272,dep_228271),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228273__$1))
{var dom_content_228274 = temp__4092__auto___228273__$1;var temp__4092__auto___228275__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228271], null));if(cljs.core.truth_(temp__4092__auto___228275__$2))
{var old_content_228276 = temp__4092__auto___228275__$2;dommy.core.replace_BANG_.call(null,old_content_228276,dom_content_228274);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228271], null),dom_content_228274);
} else
{}
{
var G__228277 = seq__228127_228267;
var G__228278 = chunk__228128_228268;
var G__228279 = count__228129_228269;
var G__228280 = (i__228130_228270 + 1);
seq__228127_228267 = G__228277;
chunk__228128_228268 = G__228278;
count__228129_228269 = G__228279;
i__228130_228270 = G__228280;
continue;
}
} else
{var temp__4092__auto___228281__$1 = cljs.core.seq.call(null,seq__228127_228267);if(temp__4092__auto___228281__$1)
{var seq__228127_228282__$1 = temp__4092__auto___228281__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228127_228282__$1))
{var c__8952__auto___228283 = cljs.core.chunk_first.call(null,seq__228127_228282__$1);{
var G__228284 = cljs.core.chunk_rest.call(null,seq__228127_228282__$1);
var G__228285 = c__8952__auto___228283;
var G__228286 = cljs.core.count.call(null,c__8952__auto___228283);
var G__228287 = 0;
seq__228127_228267 = G__228284;
chunk__228128_228268 = G__228285;
count__228129_228269 = G__228286;
i__228130_228270 = G__228287;
continue;
}
} else
{var dep_228288 = cljs.core.first.call(null,seq__228127_228282__$1);var dep_pid_228289 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228288);var temp__4092__auto___228290__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_228289,dep_228288),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228290__$2))
{var dom_content_228291 = temp__4092__auto___228290__$2;var temp__4092__auto___228292__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228288], null));if(cljs.core.truth_(temp__4092__auto___228292__$3))
{var old_content_228293 = temp__4092__auto___228292__$3;dommy.core.replace_BANG_.call(null,old_content_228293,dom_content_228291);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228288], null),dom_content_228291);
} else
{}
{
var G__228294 = cljs.core.next.call(null,seq__228127_228282__$1);
var G__228295 = null;
var G__228296 = 0;
var G__228297 = 0;
seq__228127_228267 = G__228294;
chunk__228128_228268 = G__228295;
count__228129_228269 = G__228296;
i__228130_228270 = G__228297;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__228122_228239))
{var temp__4092__auto___228298__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_228238,id_228237),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228298__$1))
{var dom_228299 = temp__4092__auto___228298__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_228237], null),dom_228299);
var temp__4090__auto___228300 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_228299);if(cljs.core.truth_(and__8211__auto__))
{var G__228131 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_228299));if(G__228131)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228131.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__228131.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__228131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__228131);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_228299))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_228238], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_228238], null)));if(cljs.core.truth_(temp__4090__auto___228300))
{var parent_228301 = temp__4090__auto___228300;dommy.core.append_BANG_.call(null,parent_228301,dom_228299);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_228299);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_228237,pid_228238);
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
var G__228302 = seq__228116;
var G__228303 = chunk__228117;
var G__228304 = count__228118;
var G__228305 = (i__228119 + 1);
seq__228116 = G__228302;
chunk__228117 = G__228303;
count__228118 = G__228304;
i__228119 = G__228305;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__228116);if(temp__4092__auto____$1)
{var seq__228116__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228116__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228116__$1);{
var G__228306 = cljs.core.chunk_rest.call(null,seq__228116__$1);
var G__228307 = c__8952__auto__;
var G__228308 = cljs.core.count.call(null,c__8952__auto__);
var G__228309 = 0;
seq__228116 = G__228306;
chunk__228117 = G__228307;
count__228118 = G__228308;
i__228119 = G__228309;
continue;
}
} else
{var vec__228132 = cljs.core.first.call(null,seq__228116__$1);var vec__228133 = cljs.core.nth.call(null,vec__228132,0,null);var op = cljs.core.nth.call(null,vec__228133,0,null);var path = cljs.core.nth.call(null,vec__228133,1,null);var _ = cljs.core.nth.call(null,vec__228133,2,null);var ___$1 = cljs.core.nth.call(null,vec__228133,3,null);var d = vec__228133;var f = cljs.core.nth.call(null,vec__228132,1,null);var id_228310 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_228311 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__228134_228312 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__228134_228312))
{var seq__228135_228313 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_228311));var chunk__228136_228314 = null;var count__228137_228315 = 0;var i__228138_228316 = 0;while(true){
if((i__228138_228316 < count__228137_228315))
{var dep_228317 = cljs.core._nth.call(null,chunk__228136_228314,i__228138_228316);var dep_pid_228318 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228317);var temp__4092__auto___228319__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228317], null));if(cljs.core.truth_(temp__4092__auto___228319__$2))
{var old_content_228320 = temp__4092__auto___228319__$2;dommy.core.remove_BANG_.call(null,old_content_228320);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228317], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228317], null));
{
var G__228321 = seq__228135_228313;
var G__228322 = chunk__228136_228314;
var G__228323 = count__228137_228315;
var G__228324 = (i__228138_228316 + 1);
seq__228135_228313 = G__228321;
chunk__228136_228314 = G__228322;
count__228137_228315 = G__228323;
i__228138_228316 = G__228324;
continue;
}
} else
{var temp__4092__auto___228325__$2 = cljs.core.seq.call(null,seq__228135_228313);if(temp__4092__auto___228325__$2)
{var seq__228135_228326__$1 = temp__4092__auto___228325__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228135_228326__$1))
{var c__8952__auto___228327 = cljs.core.chunk_first.call(null,seq__228135_228326__$1);{
var G__228328 = cljs.core.chunk_rest.call(null,seq__228135_228326__$1);
var G__228329 = c__8952__auto___228327;
var G__228330 = cljs.core.count.call(null,c__8952__auto___228327);
var G__228331 = 0;
seq__228135_228313 = G__228328;
chunk__228136_228314 = G__228329;
count__228137_228315 = G__228330;
i__228138_228316 = G__228331;
continue;
}
} else
{var dep_228332 = cljs.core.first.call(null,seq__228135_228326__$1);var dep_pid_228333 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228332);var temp__4092__auto___228334__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228332], null));if(cljs.core.truth_(temp__4092__auto___228334__$3))
{var old_content_228335 = temp__4092__auto___228334__$3;dommy.core.remove_BANG_.call(null,old_content_228335);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228332], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228332], null));
{
var G__228336 = cljs.core.next.call(null,seq__228135_228326__$1);
var G__228337 = null;
var G__228338 = 0;
var G__228339 = 0;
seq__228135_228313 = G__228336;
chunk__228136_228314 = G__228337;
count__228137_228315 = G__228338;
i__228138_228316 = G__228339;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__228134_228312))
{var seq__228139_228340 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_228311));var chunk__228140_228341 = null;var count__228141_228342 = 0;var i__228142_228343 = 0;while(true){
if((i__228142_228343 < count__228141_228342))
{var dep_228344 = cljs.core._nth.call(null,chunk__228140_228341,i__228142_228343);var dep_pid_228345 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228344);var temp__4092__auto___228346__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_228345,dep_228344),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228346__$2))
{var dom_content_228347 = temp__4092__auto___228346__$2;var temp__4092__auto___228348__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228344], null));if(cljs.core.truth_(temp__4092__auto___228348__$3))
{var old_content_228349 = temp__4092__auto___228348__$3;dommy.core.replace_BANG_.call(null,old_content_228349,dom_content_228347);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228344], null),dom_content_228347);
} else
{}
{
var G__228350 = seq__228139_228340;
var G__228351 = chunk__228140_228341;
var G__228352 = count__228141_228342;
var G__228353 = (i__228142_228343 + 1);
seq__228139_228340 = G__228350;
chunk__228140_228341 = G__228351;
count__228141_228342 = G__228352;
i__228142_228343 = G__228353;
continue;
}
} else
{var temp__4092__auto___228354__$2 = cljs.core.seq.call(null,seq__228139_228340);if(temp__4092__auto___228354__$2)
{var seq__228139_228355__$1 = temp__4092__auto___228354__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228139_228355__$1))
{var c__8952__auto___228356 = cljs.core.chunk_first.call(null,seq__228139_228355__$1);{
var G__228357 = cljs.core.chunk_rest.call(null,seq__228139_228355__$1);
var G__228358 = c__8952__auto___228356;
var G__228359 = cljs.core.count.call(null,c__8952__auto___228356);
var G__228360 = 0;
seq__228139_228340 = G__228357;
chunk__228140_228341 = G__228358;
count__228141_228342 = G__228359;
i__228142_228343 = G__228360;
continue;
}
} else
{var dep_228361 = cljs.core.first.call(null,seq__228139_228355__$1);var dep_pid_228362 = foundation.app.render._parent_id.call(null,renderer__$1,dep_228361);var temp__4092__auto___228363__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_228362,dep_228361),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228363__$3))
{var dom_content_228364 = temp__4092__auto___228363__$3;var temp__4092__auto___228365__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228361], null));if(cljs.core.truth_(temp__4092__auto___228365__$4))
{var old_content_228366 = temp__4092__auto___228365__$4;dommy.core.replace_BANG_.call(null,old_content_228366,dom_content_228364);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_228361], null),dom_content_228364);
} else
{}
{
var G__228367 = cljs.core.next.call(null,seq__228139_228355__$1);
var G__228368 = null;
var G__228369 = 0;
var G__228370 = 0;
seq__228139_228340 = G__228367;
chunk__228140_228341 = G__228368;
count__228141_228342 = G__228369;
i__228142_228343 = G__228370;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__228134_228312))
{var temp__4092__auto___228371__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_228311,id_228310),renderer__$1);if(cljs.core.truth_(temp__4092__auto___228371__$2))
{var dom_228372 = temp__4092__auto___228371__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_228310], null),dom_228372);
var temp__4090__auto___228373 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_228372);if(cljs.core.truth_(and__8211__auto__))
{var G__228143 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_228372));if(G__228143)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__228143.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__228143.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__228143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__228143);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_228372))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_228311], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_228311], null)));if(cljs.core.truth_(temp__4090__auto___228373))
{var parent_228374 = temp__4090__auto___228373;dommy.core.append_BANG_.call(null,parent_228374,dom_228372);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_228372);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_228310,pid_228311);
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
var G__228375 = cljs.core.next.call(null,seq__228116__$1);
var G__228376 = null;
var G__228377 = 0;
var G__228378 = 0;
seq__228116 = G__228375;
chunk__228117 = G__228376;
count__228118 = G__228377;
i__228119 = G__228378;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__228144){var map__228145 = p__228144;var map__228145__$1 = ((cljs.core.seq_QMARK_.call(null,map__228145))?cljs.core.apply.call(null,cljs.core.hash_map,map__228145):map__228145);var deltas = cljs.core.get.call(null,map__228145__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__228146 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__228147 = null;var count__228148 = 0;var i__228149 = 0;while(true){
if((i__228149 < count__228148))
{var handler = cljs.core._nth.call(null,chunk__228147,i__228149);handler.dispose();
{
var G__228379 = seq__228146;
var G__228380 = chunk__228147;
var G__228381 = count__228148;
var G__228382 = (i__228149 + 1);
seq__228146 = G__228379;
chunk__228147 = G__228380;
count__228148 = G__228381;
i__228149 = G__228382;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__228146);if(temp__4092__auto__)
{var seq__228146__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__228146__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__228146__$1);{
var G__228383 = cljs.core.chunk_rest.call(null,seq__228146__$1);
var G__228384 = c__8952__auto__;
var G__228385 = cljs.core.count.call(null,c__8952__auto__);
var G__228386 = 0;
seq__228146 = G__228383;
chunk__228147 = G__228384;
count__228148 = G__228385;
i__228149 = G__228386;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__228146__$1);handler.dispose();
{
var G__228387 = cljs.core.next.call(null,seq__228146__$1);
var G__228388 = null;
var G__228389 = 0;
var G__228390 = 0;
seq__228146 = G__228387;
chunk__228147 = G__228388;
count__228148 = G__228389;
i__228149 = G__228390;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k228084,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k228084,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k228084,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k228084,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k228084,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k228084,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__228083){var self__ = this;
var this__8797__auto____$1 = this;var pred__228150 = cljs.core.keyword_identical_QMARK_;var expr__228151 = k__8798__auto__;if(cljs.core.truth_(pred__228150.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__228151)))
{return (new foundation.app.render.Renderer(G__228083,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__228150.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__228151)))
{return (new foundation.app.render.Renderer(self__.env,G__228083,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__228150.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__228151)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__228083,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__228150.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__228151)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__228083,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__228083),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__228083){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__228083,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__228085){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__228085),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__228085),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__228085),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__228085),null,cljs.core.dissoc.call(null,G__228085,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__228391,pid,id){var vec__228392 = p__228391;var op = cljs.core.nth.call(null,vec__228392,0,null);var path = cljs.core.nth.call(null,vec__228392,1,null);var _ = cljs.core.nth.call(null,vec__228392,2,null);var ___$1 = cljs.core.nth.call(null,vec__228392,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map