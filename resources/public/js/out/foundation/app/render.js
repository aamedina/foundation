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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__121233,pid,id){var vec__121234 = p__121233;var op = cljs.core.nth.call(null,vec__121234,0,null);var path = cljs.core.nth.call(null,vec__121234,1,null);var _ = cljs.core.nth.call(null,vec__121234,2,null);var ___$1 = cljs.core.nth.call(null,vec__121234,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj121236 = {};return obj121236;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__121237_SHARP_){return cljs.core.not.call(null,p1__121237_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__121239 = (new goog.events.EventHandler(renderer));G__121239.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__121239.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__121239,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__121239;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__121240_SHARP_){return cljs.core.get.call(null,n,p1__121240_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__121245 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__121246 = null;var count__121247 = 0;var i__121248 = 0;while(true){
if((i__121248 < count__121247))
{var f = cljs.core._nth.call(null,chunk__121246,i__121248);f.call(null);
{
var G__121249 = seq__121245;
var G__121250 = chunk__121246;
var G__121251 = count__121247;
var G__121252 = (i__121248 + 1);
seq__121245 = G__121249;
chunk__121246 = G__121250;
count__121247 = G__121251;
i__121248 = G__121252;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121245);if(temp__4092__auto__)
{var seq__121245__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121245__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121245__$1);{
var G__121253 = cljs.core.chunk_rest.call(null,seq__121245__$1);
var G__121254 = c__8952__auto__;
var G__121255 = cljs.core.count.call(null,c__8952__auto__);
var G__121256 = 0;
seq__121245 = G__121253;
chunk__121246 = G__121254;
count__121247 = G__121255;
i__121248 = G__121256;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__121245__$1);f.call(null);
{
var G__121257 = cljs.core.next.call(null,seq__121245__$1);
var G__121258 = null;
var G__121259 = 0;
var G__121260 = 0;
seq__121245 = G__121257;
chunk__121246 = G__121258;
count__121247 = G__121259;
i__121248 = G__121260;
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
foundation.app.render.IRenderer = (function (){var obj121262 = {};return obj121262;
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
foundation.app.render.IRender = (function (){var obj121264 = {};return obj121264;
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
Element.prototype.foundation$app$render$IRender$ = true;
Element.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return x__$1;
});
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$ = true;
cljs.core.PersistentVector.prototype.foundation$app$render$IRender$_render$arity$2 = (function (x,renderer){var x__$1 = this;return dommy.template.__GT_node_like.call(null,x__$1);
});
(foundation.app.render.IRender["_"] = true);
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__121265 = x;var G__121265__$1 = (((function (){var G__121266 = x;if(G__121266)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121266.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__121266.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__121266);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__121266);
}
})())?foundation.app.render.extend_component.call(null,G__121265,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__121265);var G__121265__$2 = (((function (){var G__121267 = x;if(G__121267)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121267.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__121267.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__121267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__121267);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__121265__$1);var G__121265__$3 = (((function (){var G__121268 = x;if(G__121268)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121268.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__121268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__121268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__121268);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__121265__$2);var G__121265__$4 = (((function (){var G__121269 = x;if(G__121269)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121269.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__121269.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__121269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__121269);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__121265__$3);var G__121265__$5 = (((function (){var G__121270 = x;if(G__121270)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121270.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__121270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__121270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__121270);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__121265__$4);var G__121265__$6 = (((function (){var G__121271 = x;if(G__121271)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121271.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__121271.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__121271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__121271);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__121265__$5);var G__121265__$7 = (((function (){var G__121272 = x;if(G__121272)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121272.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__121272.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__121272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__121272);
}
})())?foundation.app.render.extend_component.call(null,G__121265__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__121265__$6);var G__121265__$8 = (((function (){var G__121273 = x;if(G__121273)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121273.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__121273.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__121273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__121273);
}
})())?foundation.app.ui._render.call(null,G__121265__$7):G__121265__$7);return G__121265__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__121274_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__121274_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__121278 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__121279 = null;var count__121280 = 0;var i__121281 = 0;while(true){
if((i__121281 < count__121280))
{var component = cljs.core._nth.call(null,chunk__121279,i__121281);console.log(component);
{
var G__121345 = seq__121278;
var G__121346 = chunk__121279;
var G__121347 = count__121280;
var G__121348 = (i__121281 + 1);
seq__121278 = G__121345;
chunk__121279 = G__121346;
count__121280 = G__121347;
i__121281 = G__121348;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121278);if(temp__4092__auto__)
{var seq__121278__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121278__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121278__$1);{
var G__121349 = cljs.core.chunk_rest.call(null,seq__121278__$1);
var G__121350 = c__8952__auto__;
var G__121351 = cljs.core.count.call(null,c__8952__auto__);
var G__121352 = 0;
seq__121278 = G__121349;
chunk__121279 = G__121350;
count__121280 = G__121351;
i__121281 = G__121352;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121278__$1);console.log(component);
{
var G__121353 = cljs.core.next.call(null,seq__121278__$1);
var G__121354 = null;
var G__121355 = 0;
var G__121356 = 0;
seq__121278 = G__121353;
chunk__121279 = G__121354;
count__121280 = G__121355;
i__121281 = G__121356;
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
var renderer__$1 = this;var seq__121282 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__121283 = null;var count__121284 = 0;var i__121285 = 0;while(true){
if((i__121285 < count__121284))
{var component = cljs.core._nth.call(null,chunk__121283,i__121285);console.log(component);
{
var G__121357 = seq__121282;
var G__121358 = chunk__121283;
var G__121359 = count__121284;
var G__121360 = (i__121285 + 1);
seq__121282 = G__121357;
chunk__121283 = G__121358;
count__121284 = G__121359;
i__121285 = G__121360;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121282);if(temp__4092__auto__)
{var seq__121282__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121282__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121282__$1);{
var G__121361 = cljs.core.chunk_rest.call(null,seq__121282__$1);
var G__121362 = c__8952__auto__;
var G__121363 = cljs.core.count.call(null,c__8952__auto__);
var G__121364 = 0;
seq__121282 = G__121361;
chunk__121283 = G__121362;
count__121284 = G__121363;
i__121285 = G__121364;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121282__$1);console.log(component);
{
var G__121365 = cljs.core.next.call(null,seq__121282__$1);
var G__121366 = null;
var G__121367 = 0;
var G__121368 = 0;
seq__121282 = G__121365;
chunk__121283 = G__121366;
count__121284 = G__121367;
i__121285 = G__121368;
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
var renderer__$1 = this;var seq__121286 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__121287 = null;var count__121288 = 0;var i__121289 = 0;while(true){
if((i__121289 < count__121288))
{var component = cljs.core._nth.call(null,chunk__121287,i__121289);console.log(component);
{
var G__121369 = seq__121286;
var G__121370 = chunk__121287;
var G__121371 = count__121288;
var G__121372 = (i__121289 + 1);
seq__121286 = G__121369;
chunk__121287 = G__121370;
count__121288 = G__121371;
i__121289 = G__121372;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121286);if(temp__4092__auto__)
{var seq__121286__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121286__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121286__$1);{
var G__121373 = cljs.core.chunk_rest.call(null,seq__121286__$1);
var G__121374 = c__8952__auto__;
var G__121375 = cljs.core.count.call(null,c__8952__auto__);
var G__121376 = 0;
seq__121286 = G__121373;
chunk__121287 = G__121374;
count__121288 = G__121375;
i__121289 = G__121376;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121286__$1);console.log(component);
{
var G__121377 = cljs.core.next.call(null,seq__121286__$1);
var G__121378 = null;
var G__121379 = 0;
var G__121380 = 0;
seq__121286 = G__121377;
chunk__121287 = G__121378;
count__121288 = G__121379;
i__121289 = G__121380;
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
var renderer__$1 = this;var seq__121290 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__121291 = null;var count__121292 = 0;var i__121293 = 0;while(true){
if((i__121293 < count__121292))
{var component = cljs.core._nth.call(null,chunk__121291,i__121293);console.log(component);
{
var G__121381 = seq__121290;
var G__121382 = chunk__121291;
var G__121383 = count__121292;
var G__121384 = (i__121293 + 1);
seq__121290 = G__121381;
chunk__121291 = G__121382;
count__121292 = G__121383;
i__121293 = G__121384;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121290);if(temp__4092__auto__)
{var seq__121290__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121290__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121290__$1);{
var G__121385 = cljs.core.chunk_rest.call(null,seq__121290__$1);
var G__121386 = c__8952__auto__;
var G__121387 = cljs.core.count.call(null,c__8952__auto__);
var G__121388 = 0;
seq__121290 = G__121385;
chunk__121291 = G__121386;
count__121292 = G__121387;
i__121293 = G__121388;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121290__$1);console.log(component);
{
var G__121389 = cljs.core.next.call(null,seq__121290__$1);
var G__121390 = null;
var G__121391 = 0;
var G__121392 = 0;
seq__121290 = G__121389;
chunk__121291 = G__121390;
count__121292 = G__121391;
i__121293 = G__121392;
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
var renderer__$1 = this;var seq__121294 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__121295 = null;var count__121296 = 0;var i__121297 = 0;while(true){
if((i__121297 < count__121296))
{var component = cljs.core._nth.call(null,chunk__121295,i__121297);console.log(component);
{
var G__121393 = seq__121294;
var G__121394 = chunk__121295;
var G__121395 = count__121296;
var G__121396 = (i__121297 + 1);
seq__121294 = G__121393;
chunk__121295 = G__121394;
count__121296 = G__121395;
i__121297 = G__121396;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121294);if(temp__4092__auto__)
{var seq__121294__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121294__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121294__$1);{
var G__121397 = cljs.core.chunk_rest.call(null,seq__121294__$1);
var G__121398 = c__8952__auto__;
var G__121399 = cljs.core.count.call(null,c__8952__auto__);
var G__121400 = 0;
seq__121294 = G__121397;
chunk__121295 = G__121398;
count__121296 = G__121399;
i__121297 = G__121400;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121294__$1);console.log(component);
{
var G__121401 = cljs.core.next.call(null,seq__121294__$1);
var G__121402 = null;
var G__121403 = 0;
var G__121404 = 0;
seq__121294 = G__121401;
chunk__121295 = G__121402;
count__121296 = G__121403;
i__121297 = G__121404;
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
var renderer__$1 = this;var seq__121298 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__121299 = null;var count__121300 = 0;var i__121301 = 0;while(true){
if((i__121301 < count__121300))
{var component = cljs.core._nth.call(null,chunk__121299,i__121301);console.log(component);
{
var G__121405 = seq__121298;
var G__121406 = chunk__121299;
var G__121407 = count__121300;
var G__121408 = (i__121301 + 1);
seq__121298 = G__121405;
chunk__121299 = G__121406;
count__121300 = G__121407;
i__121301 = G__121408;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121298);if(temp__4092__auto__)
{var seq__121298__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121298__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121298__$1);{
var G__121409 = cljs.core.chunk_rest.call(null,seq__121298__$1);
var G__121410 = c__8952__auto__;
var G__121411 = cljs.core.count.call(null,c__8952__auto__);
var G__121412 = 0;
seq__121298 = G__121409;
chunk__121299 = G__121410;
count__121300 = G__121411;
i__121301 = G__121412;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121298__$1);console.log(component);
{
var G__121413 = cljs.core.next.call(null,seq__121298__$1);
var G__121414 = null;
var G__121415 = 0;
var G__121416 = 0;
seq__121298 = G__121413;
chunk__121299 = G__121414;
count__121300 = G__121415;
i__121301 = G__121416;
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
var renderer__$1 = this;var seq__121302 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__121303 = null;var count__121304 = 0;var i__121305 = 0;while(true){
if((i__121305 < count__121304))
{var component = cljs.core._nth.call(null,chunk__121303,i__121305);console.log(component);
{
var G__121417 = seq__121302;
var G__121418 = chunk__121303;
var G__121419 = count__121304;
var G__121420 = (i__121305 + 1);
seq__121302 = G__121417;
chunk__121303 = G__121418;
count__121304 = G__121419;
i__121305 = G__121420;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121302);if(temp__4092__auto__)
{var seq__121302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121302__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121302__$1);{
var G__121421 = cljs.core.chunk_rest.call(null,seq__121302__$1);
var G__121422 = c__8952__auto__;
var G__121423 = cljs.core.count.call(null,c__8952__auto__);
var G__121424 = 0;
seq__121302 = G__121421;
chunk__121303 = G__121422;
count__121304 = G__121423;
i__121305 = G__121424;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__121302__$1);console.log(component);
{
var G__121425 = cljs.core.next.call(null,seq__121302__$1);
var G__121426 = null;
var G__121427 = 0;
var G__121428 = 0;
seq__121302 = G__121425;
chunk__121303 = G__121426;
count__121304 = G__121427;
i__121305 = G__121428;
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
return (function (p__121306){var vec__121307 = p__121306;var op = cljs.core.nth.call(null,vec__121307,0,null);var path = cljs.core.nth.call(null,vec__121307,1,null);var _ = cljs.core.nth.call(null,vec__121307,2,null);var ___$1 = cljs.core.nth.call(null,vec__121307,3,null);var delta = vec__121307;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
var seq__121308 = cljs.core.seq.call(null,deltas__$1);var chunk__121309 = null;var count__121310 = 0;var i__121311 = 0;while(true){
if((i__121311 < count__121310))
{var vec__121312 = cljs.core._nth.call(null,chunk__121309,i__121311);var vec__121313 = cljs.core.nth.call(null,vec__121312,0,null);var op = cljs.core.nth.call(null,vec__121313,0,null);var path = cljs.core.nth.call(null,vec__121313,1,null);var _ = cljs.core.nth.call(null,vec__121313,2,null);var ___$1 = cljs.core.nth.call(null,vec__121313,3,null);var d = vec__121313;var f = cljs.core.nth.call(null,vec__121312,1,null);var id_121429 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_121430 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__121314_121431 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__121314_121431))
{var seq__121315_121432 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_121430));var chunk__121316_121433 = null;var count__121317_121434 = 0;var i__121318_121435 = 0;while(true){
if((i__121318_121435 < count__121317_121434))
{var dep_121436 = cljs.core._nth.call(null,chunk__121316_121433,i__121318_121435);var dep_pid_121437 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121436);var temp__4092__auto___121438__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121436], null));if(cljs.core.truth_(temp__4092__auto___121438__$1))
{var old_content_121439 = temp__4092__auto___121438__$1;dommy.core.remove_BANG_.call(null,old_content_121439);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121436], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121436], null));
{
var G__121440 = seq__121315_121432;
var G__121441 = chunk__121316_121433;
var G__121442 = count__121317_121434;
var G__121443 = (i__121318_121435 + 1);
seq__121315_121432 = G__121440;
chunk__121316_121433 = G__121441;
count__121317_121434 = G__121442;
i__121318_121435 = G__121443;
continue;
}
} else
{var temp__4092__auto___121444__$1 = cljs.core.seq.call(null,seq__121315_121432);if(temp__4092__auto___121444__$1)
{var seq__121315_121445__$1 = temp__4092__auto___121444__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121315_121445__$1))
{var c__8952__auto___121446 = cljs.core.chunk_first.call(null,seq__121315_121445__$1);{
var G__121447 = cljs.core.chunk_rest.call(null,seq__121315_121445__$1);
var G__121448 = c__8952__auto___121446;
var G__121449 = cljs.core.count.call(null,c__8952__auto___121446);
var G__121450 = 0;
seq__121315_121432 = G__121447;
chunk__121316_121433 = G__121448;
count__121317_121434 = G__121449;
i__121318_121435 = G__121450;
continue;
}
} else
{var dep_121451 = cljs.core.first.call(null,seq__121315_121445__$1);var dep_pid_121452 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121451);var temp__4092__auto___121453__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121451], null));if(cljs.core.truth_(temp__4092__auto___121453__$2))
{var old_content_121454 = temp__4092__auto___121453__$2;dommy.core.remove_BANG_.call(null,old_content_121454);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121451], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121451], null));
{
var G__121455 = cljs.core.next.call(null,seq__121315_121445__$1);
var G__121456 = null;
var G__121457 = 0;
var G__121458 = 0;
seq__121315_121432 = G__121455;
chunk__121316_121433 = G__121456;
count__121317_121434 = G__121457;
i__121318_121435 = G__121458;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__121314_121431))
{var seq__121319_121459 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_121430));var chunk__121320_121460 = null;var count__121321_121461 = 0;var i__121322_121462 = 0;while(true){
if((i__121322_121462 < count__121321_121461))
{var dep_121463 = cljs.core._nth.call(null,chunk__121320_121460,i__121322_121462);var dep_pid_121464 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121463);var temp__4092__auto___121465__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_121464,dep_121463),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121465__$1))
{var dom_content_121466 = temp__4092__auto___121465__$1;var temp__4092__auto___121467__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121463], null));if(cljs.core.truth_(temp__4092__auto___121467__$2))
{var old_content_121468 = temp__4092__auto___121467__$2;dommy.core.replace_BANG_.call(null,old_content_121468,dom_content_121466);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121463], null),dom_content_121466);
} else
{}
{
var G__121469 = seq__121319_121459;
var G__121470 = chunk__121320_121460;
var G__121471 = count__121321_121461;
var G__121472 = (i__121322_121462 + 1);
seq__121319_121459 = G__121469;
chunk__121320_121460 = G__121470;
count__121321_121461 = G__121471;
i__121322_121462 = G__121472;
continue;
}
} else
{var temp__4092__auto___121473__$1 = cljs.core.seq.call(null,seq__121319_121459);if(temp__4092__auto___121473__$1)
{var seq__121319_121474__$1 = temp__4092__auto___121473__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121319_121474__$1))
{var c__8952__auto___121475 = cljs.core.chunk_first.call(null,seq__121319_121474__$1);{
var G__121476 = cljs.core.chunk_rest.call(null,seq__121319_121474__$1);
var G__121477 = c__8952__auto___121475;
var G__121478 = cljs.core.count.call(null,c__8952__auto___121475);
var G__121479 = 0;
seq__121319_121459 = G__121476;
chunk__121320_121460 = G__121477;
count__121321_121461 = G__121478;
i__121322_121462 = G__121479;
continue;
}
} else
{var dep_121480 = cljs.core.first.call(null,seq__121319_121474__$1);var dep_pid_121481 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121480);var temp__4092__auto___121482__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_121481,dep_121480),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121482__$2))
{var dom_content_121483 = temp__4092__auto___121482__$2;var temp__4092__auto___121484__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121480], null));if(cljs.core.truth_(temp__4092__auto___121484__$3))
{var old_content_121485 = temp__4092__auto___121484__$3;dommy.core.replace_BANG_.call(null,old_content_121485,dom_content_121483);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121480], null),dom_content_121483);
} else
{}
{
var G__121486 = cljs.core.next.call(null,seq__121319_121474__$1);
var G__121487 = null;
var G__121488 = 0;
var G__121489 = 0;
seq__121319_121459 = G__121486;
chunk__121320_121460 = G__121487;
count__121321_121461 = G__121488;
i__121322_121462 = G__121489;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__121314_121431))
{var temp__4092__auto___121490__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_121430,id_121429),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121490__$1))
{var dom_121491 = temp__4092__auto___121490__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_121429], null),dom_121491);
var temp__4090__auto___121492 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_121491);if(cljs.core.truth_(and__8211__auto__))
{var G__121323 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_121491));if(G__121323)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121323.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__121323.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__121323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__121323);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_121491))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_121430], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_121430], null)));if(cljs.core.truth_(temp__4090__auto___121492))
{var parent_121493 = temp__4090__auto___121492;dommy.core.append_BANG_.call(null,parent_121493,dom_121491);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_121491);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_121429,pid_121430);
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
var G__121494 = seq__121308;
var G__121495 = chunk__121309;
var G__121496 = count__121310;
var G__121497 = (i__121311 + 1);
seq__121308 = G__121494;
chunk__121309 = G__121495;
count__121310 = G__121496;
i__121311 = G__121497;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__121308);if(temp__4092__auto____$1)
{var seq__121308__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121308__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121308__$1);{
var G__121498 = cljs.core.chunk_rest.call(null,seq__121308__$1);
var G__121499 = c__8952__auto__;
var G__121500 = cljs.core.count.call(null,c__8952__auto__);
var G__121501 = 0;
seq__121308 = G__121498;
chunk__121309 = G__121499;
count__121310 = G__121500;
i__121311 = G__121501;
continue;
}
} else
{var vec__121324 = cljs.core.first.call(null,seq__121308__$1);var vec__121325 = cljs.core.nth.call(null,vec__121324,0,null);var op = cljs.core.nth.call(null,vec__121325,0,null);var path = cljs.core.nth.call(null,vec__121325,1,null);var _ = cljs.core.nth.call(null,vec__121325,2,null);var ___$1 = cljs.core.nth.call(null,vec__121325,3,null);var d = vec__121325;var f = cljs.core.nth.call(null,vec__121324,1,null);var id_121502 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_121503 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__121326_121504 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__121326_121504))
{var seq__121327_121505 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_121503));var chunk__121328_121506 = null;var count__121329_121507 = 0;var i__121330_121508 = 0;while(true){
if((i__121330_121508 < count__121329_121507))
{var dep_121509 = cljs.core._nth.call(null,chunk__121328_121506,i__121330_121508);var dep_pid_121510 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121509);var temp__4092__auto___121511__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121509], null));if(cljs.core.truth_(temp__4092__auto___121511__$2))
{var old_content_121512 = temp__4092__auto___121511__$2;dommy.core.remove_BANG_.call(null,old_content_121512);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121509], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121509], null));
{
var G__121513 = seq__121327_121505;
var G__121514 = chunk__121328_121506;
var G__121515 = count__121329_121507;
var G__121516 = (i__121330_121508 + 1);
seq__121327_121505 = G__121513;
chunk__121328_121506 = G__121514;
count__121329_121507 = G__121515;
i__121330_121508 = G__121516;
continue;
}
} else
{var temp__4092__auto___121517__$2 = cljs.core.seq.call(null,seq__121327_121505);if(temp__4092__auto___121517__$2)
{var seq__121327_121518__$1 = temp__4092__auto___121517__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121327_121518__$1))
{var c__8952__auto___121519 = cljs.core.chunk_first.call(null,seq__121327_121518__$1);{
var G__121520 = cljs.core.chunk_rest.call(null,seq__121327_121518__$1);
var G__121521 = c__8952__auto___121519;
var G__121522 = cljs.core.count.call(null,c__8952__auto___121519);
var G__121523 = 0;
seq__121327_121505 = G__121520;
chunk__121328_121506 = G__121521;
count__121329_121507 = G__121522;
i__121330_121508 = G__121523;
continue;
}
} else
{var dep_121524 = cljs.core.first.call(null,seq__121327_121518__$1);var dep_pid_121525 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121524);var temp__4092__auto___121526__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121524], null));if(cljs.core.truth_(temp__4092__auto___121526__$3))
{var old_content_121527 = temp__4092__auto___121526__$3;dommy.core.remove_BANG_.call(null,old_content_121527);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121524], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121524], null));
{
var G__121528 = cljs.core.next.call(null,seq__121327_121518__$1);
var G__121529 = null;
var G__121530 = 0;
var G__121531 = 0;
seq__121327_121505 = G__121528;
chunk__121328_121506 = G__121529;
count__121329_121507 = G__121530;
i__121330_121508 = G__121531;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__121326_121504))
{var seq__121331_121532 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_121503));var chunk__121332_121533 = null;var count__121333_121534 = 0;var i__121334_121535 = 0;while(true){
if((i__121334_121535 < count__121333_121534))
{var dep_121536 = cljs.core._nth.call(null,chunk__121332_121533,i__121334_121535);var dep_pid_121537 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121536);var temp__4092__auto___121538__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_121537,dep_121536),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121538__$2))
{var dom_content_121539 = temp__4092__auto___121538__$2;var temp__4092__auto___121540__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121536], null));if(cljs.core.truth_(temp__4092__auto___121540__$3))
{var old_content_121541 = temp__4092__auto___121540__$3;dommy.core.replace_BANG_.call(null,old_content_121541,dom_content_121539);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121536], null),dom_content_121539);
} else
{}
{
var G__121542 = seq__121331_121532;
var G__121543 = chunk__121332_121533;
var G__121544 = count__121333_121534;
var G__121545 = (i__121334_121535 + 1);
seq__121331_121532 = G__121542;
chunk__121332_121533 = G__121543;
count__121333_121534 = G__121544;
i__121334_121535 = G__121545;
continue;
}
} else
{var temp__4092__auto___121546__$2 = cljs.core.seq.call(null,seq__121331_121532);if(temp__4092__auto___121546__$2)
{var seq__121331_121547__$1 = temp__4092__auto___121546__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121331_121547__$1))
{var c__8952__auto___121548 = cljs.core.chunk_first.call(null,seq__121331_121547__$1);{
var G__121549 = cljs.core.chunk_rest.call(null,seq__121331_121547__$1);
var G__121550 = c__8952__auto___121548;
var G__121551 = cljs.core.count.call(null,c__8952__auto___121548);
var G__121552 = 0;
seq__121331_121532 = G__121549;
chunk__121332_121533 = G__121550;
count__121333_121534 = G__121551;
i__121334_121535 = G__121552;
continue;
}
} else
{var dep_121553 = cljs.core.first.call(null,seq__121331_121547__$1);var dep_pid_121554 = foundation.app.render._parent_id.call(null,renderer__$1,dep_121553);var temp__4092__auto___121555__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_121554,dep_121553),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121555__$3))
{var dom_content_121556 = temp__4092__auto___121555__$3;var temp__4092__auto___121557__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121553], null));if(cljs.core.truth_(temp__4092__auto___121557__$4))
{var old_content_121558 = temp__4092__auto___121557__$4;dommy.core.replace_BANG_.call(null,old_content_121558,dom_content_121556);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_121553], null),dom_content_121556);
} else
{}
{
var G__121559 = cljs.core.next.call(null,seq__121331_121547__$1);
var G__121560 = null;
var G__121561 = 0;
var G__121562 = 0;
seq__121331_121532 = G__121559;
chunk__121332_121533 = G__121560;
count__121333_121534 = G__121561;
i__121334_121535 = G__121562;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__121326_121504))
{var temp__4092__auto___121563__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_121503,id_121502),renderer__$1);if(cljs.core.truth_(temp__4092__auto___121563__$2))
{var dom_121564 = temp__4092__auto___121563__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_121502], null),dom_121564);
var temp__4090__auto___121565 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_121564);if(cljs.core.truth_(and__8211__auto__))
{var G__121335 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_121564));if(G__121335)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__121335.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__121335.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__121335);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__121335);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_121564))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_121503], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_121503], null)));if(cljs.core.truth_(temp__4090__auto___121565))
{var parent_121566 = temp__4090__auto___121565;dommy.core.append_BANG_.call(null,parent_121566,dom_121564);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_121564);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_121502,pid_121503);
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
var G__121567 = cljs.core.next.call(null,seq__121308__$1);
var G__121568 = null;
var G__121569 = 0;
var G__121570 = 0;
seq__121308 = G__121567;
chunk__121309 = G__121568;
count__121310 = G__121569;
i__121311 = G__121570;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__121336){var map__121337 = p__121336;var map__121337__$1 = ((cljs.core.seq_QMARK_.call(null,map__121337))?cljs.core.apply.call(null,cljs.core.hash_map,map__121337):map__121337);var deltas = cljs.core.get.call(null,map__121337__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__121338 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__121339 = null;var count__121340 = 0;var i__121341 = 0;while(true){
if((i__121341 < count__121340))
{var handler = cljs.core._nth.call(null,chunk__121339,i__121341);handler.dispose();
{
var G__121571 = seq__121338;
var G__121572 = chunk__121339;
var G__121573 = count__121340;
var G__121574 = (i__121341 + 1);
seq__121338 = G__121571;
chunk__121339 = G__121572;
count__121340 = G__121573;
i__121341 = G__121574;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__121338);if(temp__4092__auto__)
{var seq__121338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__121338__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__121338__$1);{
var G__121575 = cljs.core.chunk_rest.call(null,seq__121338__$1);
var G__121576 = c__8952__auto__;
var G__121577 = cljs.core.count.call(null,c__8952__auto__);
var G__121578 = 0;
seq__121338 = G__121575;
chunk__121339 = G__121576;
count__121340 = G__121577;
i__121341 = G__121578;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__121338__$1);handler.dispose();
{
var G__121579 = cljs.core.next.call(null,seq__121338__$1);
var G__121580 = null;
var G__121581 = 0;
var G__121582 = 0;
seq__121338 = G__121579;
chunk__121339 = G__121580;
count__121340 = G__121581;
i__121341 = G__121582;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k121276,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k121276,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k121276,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k121276,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k121276,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k121276,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__121275){var self__ = this;
var this__8797__auto____$1 = this;var pred__121342 = cljs.core.keyword_identical_QMARK_;var expr__121343 = k__8798__auto__;if(cljs.core.truth_(pred__121342.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__121343)))
{return (new foundation.app.render.Renderer(G__121275,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__121342.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__121343)))
{return (new foundation.app.render.Renderer(self__.env,G__121275,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__121342.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__121343)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__121275,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__121342.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__121343)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__121275,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__121275),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__121275){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__121275,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__121277){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__121277),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__121277),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__121277),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__121277),null,cljs.core.dissoc.call(null,G__121277,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__121583,pid,id){var vec__121584 = p__121583;var op = cljs.core.nth.call(null,vec__121584,0,null);var path = cljs.core.nth.call(null,vec__121584,1,null);var _ = cljs.core.nth.call(null,vec__121584,2,null);var ___$1 = cljs.core.nth.call(null,vec__121584,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map