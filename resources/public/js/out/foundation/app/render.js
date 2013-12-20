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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__394951,input_queue,pid,id){var vec__394952 = p__394951;var op = cljs.core.nth.call(null,vec__394952,0,null);var path = cljs.core.nth.call(null,vec__394952,1,null);var _ = cljs.core.nth.call(null,vec__394952,2,null);var ___$1 = cljs.core.nth.call(null,vec__394952,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj394954 = {};return obj394954;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__394955_SHARP_){return cljs.core.not.call(null,p1__394955_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__394957 = (new goog.events.EventHandler(renderer));G__394957.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__394957.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__394957,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__394957;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__394958_SHARP_){return cljs.core.get.call(null,n,p1__394958_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__394963 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__394964 = null;var count__394965 = 0;var i__394966 = 0;while(true){
if((i__394966 < count__394965))
{var f = cljs.core._nth.call(null,chunk__394964,i__394966);f.call(null);
{
var G__394967 = seq__394963;
var G__394968 = chunk__394964;
var G__394969 = count__394965;
var G__394970 = (i__394966 + 1);
seq__394963 = G__394967;
chunk__394964 = G__394968;
count__394965 = G__394969;
i__394966 = G__394970;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__394963);if(temp__4092__auto__)
{var seq__394963__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__394963__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__394963__$1);{
var G__394971 = cljs.core.chunk_rest.call(null,seq__394963__$1);
var G__394972 = c__8952__auto__;
var G__394973 = cljs.core.count.call(null,c__8952__auto__);
var G__394974 = 0;
seq__394963 = G__394971;
chunk__394964 = G__394972;
count__394965 = G__394973;
i__394966 = G__394974;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__394963__$1);f.call(null);
{
var G__394975 = cljs.core.next.call(null,seq__394963__$1);
var G__394976 = null;
var G__394977 = 0;
var G__394978 = 0;
seq__394963 = G__394975;
chunk__394964 = G__394976;
count__394965 = G__394977;
i__394966 = G__394978;
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
foundation.app.render.IRenderer = (function (){var obj394980 = {};return obj394980;
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
foundation.app.render.IRender = (function (){var obj394982 = {};return obj394982;
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
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__394992 = x;var G__394992__$1 = (((function (){var G__394993 = x;if(G__394993)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394993.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__394993.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__394993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__394993);
}
})())?foundation.app.render.extend_component.call(null,G__394992,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__394992);var G__394992__$2 = (((function (){var G__394994 = x;if(G__394994)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394994.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__394994.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__394994);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__394994);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__394992__$1);var G__394992__$3 = (((function (){var G__394995 = x;if(G__394995)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394995.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__394995.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__394995);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__394995);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__394992__$2);var G__394992__$4 = (((function (){var G__394996 = x;if(G__394996)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394996.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__394996.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__394996);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__394996);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__394992__$3);var G__394992__$5 = (((function (){var G__394997 = x;if(G__394997)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394997.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__394997.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__394997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__394997);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__394992__$4);var G__394992__$6 = (((function (){var G__394998 = x;if(G__394998)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394998.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__394998.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__394998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__394998);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__394992__$5);var G__394992__$7 = (((function (){var G__394999 = x;if(G__394999)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__394999.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__394999.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__394999);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__394999);
}
})())?foundation.app.render.extend_component.call(null,G__394992__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__394992__$6);var G__394992__$8 = (((function (){var G__395000 = x;if(G__395000)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395000.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__395000.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395000);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395000);
}
})())?foundation.app.ui._render.call(null,G__394992__$7):G__394992__$7);return G__394992__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null));return cljs.core.filter.call(null,(function (x){var el = goog.dom.getElement(cljs.core.comp.call(null,new cljs.core.Keyword(null,"dom","dom",1014003892),cljs.core.meta).call(null,x).id);var or__8223__auto__ = (el.innerHTML === e.target.innerHTML);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (((e.target instanceof Element))?dommy.core.descendant_QMARK_.call(null,e.target,el):null);if(cljs.core.truth_(or__8223__auto____$1))
{return or__8223__auto____$1;
} else
{var G__395005 = x;if(G__395005)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto____$2 = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto____$2))
{return or__8223__auto____$2;
} else
{return G__395005.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__395005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395005);
}
}
}
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__395006 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__395007 = null;var count__395008 = 0;var i__395009 = 0;while(true){
if((i__395009 < count__395008))
{var c = cljs.core._nth.call(null,chunk__395007,i__395009);var G__395010_395119 = c;var G__395010_395120__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__395012 = c;if(G__395012)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395012.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__395012.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__395012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__395012);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__395010_395119,e):G__395010_395119);var G__395010_395121__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__395014 = c;if(G__395014)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395014.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__395014.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__395014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__395014);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__395010_395120__$1,e):G__395010_395120__$1);{
var G__395122 = seq__395006;
var G__395123 = chunk__395007;
var G__395124 = count__395008;
var G__395125 = (i__395009 + 1);
seq__395006 = G__395122;
chunk__395007 = G__395123;
count__395008 = G__395124;
i__395009 = G__395125;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395006);if(temp__4092__auto__)
{var seq__395006__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395006__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395006__$1);{
var G__395126 = cljs.core.chunk_rest.call(null,seq__395006__$1);
var G__395127 = c__8952__auto__;
var G__395128 = cljs.core.count.call(null,c__8952__auto__);
var G__395129 = 0;
seq__395006 = G__395126;
chunk__395007 = G__395127;
count__395008 = G__395128;
i__395009 = G__395129;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395006__$1);var G__395015_395130 = c;var G__395015_395131__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__395017 = c;if(G__395017)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395017.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__395017.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__395017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__395017);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__395015_395130,e):G__395015_395130);var G__395015_395132__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__395019 = c;if(G__395019)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395019.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__395019.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__395019);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__395019);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__395015_395131__$1,e):G__395015_395131__$1);{
var G__395133 = cljs.core.next.call(null,seq__395006__$1);
var G__395134 = null;
var G__395135 = 0;
var G__395136 = 0;
seq__395006 = G__395133;
chunk__395007 = G__395134;
count__395008 = G__395135;
i__395009 = G__395136;
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
var renderer__$1 = this;var seq__395020 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__395021 = null;var count__395022 = 0;var i__395023 = 0;while(true){
if((i__395023 < count__395022))
{var c = cljs.core._nth.call(null,chunk__395021,i__395023);if((function (){var G__395024 = c;if(G__395024)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395024.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__395024.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__395024);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__395024);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__395137 = seq__395020;
var G__395138 = chunk__395021;
var G__395139 = count__395022;
var G__395140 = (i__395023 + 1);
seq__395020 = G__395137;
chunk__395021 = G__395138;
count__395022 = G__395139;
i__395023 = G__395140;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395020);if(temp__4092__auto__)
{var seq__395020__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395020__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395020__$1);{
var G__395141 = cljs.core.chunk_rest.call(null,seq__395020__$1);
var G__395142 = c__8952__auto__;
var G__395143 = cljs.core.count.call(null,c__8952__auto__);
var G__395144 = 0;
seq__395020 = G__395141;
chunk__395021 = G__395142;
count__395022 = G__395143;
i__395023 = G__395144;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395020__$1);if((function (){var G__395025 = c;if(G__395025)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395025.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__395025.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__395025);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__395025);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__395145 = cljs.core.next.call(null,seq__395020__$1);
var G__395146 = null;
var G__395147 = 0;
var G__395148 = 0;
seq__395020 = G__395145;
chunk__395021 = G__395146;
count__395022 = G__395147;
i__395023 = G__395148;
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
var renderer__$1 = this;var seq__395026 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__395027 = null;var count__395028 = 0;var i__395029 = 0;while(true){
if((i__395029 < count__395028))
{var c = cljs.core._nth.call(null,chunk__395027,i__395029);if((function (){var G__395030 = c;if(G__395030)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395030.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__395030.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__395030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__395030);
}
})())
{var G__395031_395149 = c;var G__395031_395150__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__395031_395149,e):G__395031_395149);var G__395031_395151__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__395031_395150__$1,e):G__395031_395150__$1);} else
{}
{
var G__395152 = seq__395026;
var G__395153 = chunk__395027;
var G__395154 = count__395028;
var G__395155 = (i__395029 + 1);
seq__395026 = G__395152;
chunk__395027 = G__395153;
count__395028 = G__395154;
i__395029 = G__395155;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395026);if(temp__4092__auto__)
{var seq__395026__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395026__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395026__$1);{
var G__395156 = cljs.core.chunk_rest.call(null,seq__395026__$1);
var G__395157 = c__8952__auto__;
var G__395158 = cljs.core.count.call(null,c__8952__auto__);
var G__395159 = 0;
seq__395026 = G__395156;
chunk__395027 = G__395157;
count__395028 = G__395158;
i__395029 = G__395159;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395026__$1);if((function (){var G__395032 = c;if(G__395032)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395032.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__395032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__395032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__395032);
}
})())
{var G__395033_395160 = c;var G__395033_395161__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__395033_395160,e):G__395033_395160);var G__395033_395162__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__395033_395161__$1,e):G__395033_395161__$1);} else
{}
{
var G__395163 = cljs.core.next.call(null,seq__395026__$1);
var G__395164 = null;
var G__395165 = 0;
var G__395166 = 0;
seq__395026 = G__395163;
chunk__395027 = G__395164;
count__395028 = G__395165;
i__395029 = G__395166;
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
var renderer__$1 = this;var seq__395034 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__395035 = null;var count__395036 = 0;var i__395037 = 0;while(true){
if((i__395037 < count__395036))
{var c = cljs.core._nth.call(null,chunk__395035,i__395037);if((function (){var G__395038 = c;if(G__395038)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395038.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__395038.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__395038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__395038);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__395167 = seq__395034;
var G__395168 = chunk__395035;
var G__395169 = count__395036;
var G__395170 = (i__395037 + 1);
seq__395034 = G__395167;
chunk__395035 = G__395168;
count__395036 = G__395169;
i__395037 = G__395170;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395034);if(temp__4092__auto__)
{var seq__395034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395034__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395034__$1);{
var G__395171 = cljs.core.chunk_rest.call(null,seq__395034__$1);
var G__395172 = c__8952__auto__;
var G__395173 = cljs.core.count.call(null,c__8952__auto__);
var G__395174 = 0;
seq__395034 = G__395171;
chunk__395035 = G__395172;
count__395036 = G__395173;
i__395037 = G__395174;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395034__$1);if((function (){var G__395039 = c;if(G__395039)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395039.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__395039.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__395039);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__395039);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__395175 = cljs.core.next.call(null,seq__395034__$1);
var G__395176 = null;
var G__395177 = 0;
var G__395178 = 0;
seq__395034 = G__395175;
chunk__395035 = G__395176;
count__395036 = G__395177;
i__395037 = G__395178;
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
var renderer__$1 = this;var seq__395040 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__395041 = null;var count__395042 = 0;var i__395043 = 0;while(true){
if((i__395043 < count__395042))
{var c = cljs.core._nth.call(null,chunk__395041,i__395043);if((function (){var G__395044 = c;if(G__395044)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395044.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__395044.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__395044);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__395044);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__395179 = seq__395040;
var G__395180 = chunk__395041;
var G__395181 = count__395042;
var G__395182 = (i__395043 + 1);
seq__395040 = G__395179;
chunk__395041 = G__395180;
count__395042 = G__395181;
i__395043 = G__395182;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395040);if(temp__4092__auto__)
{var seq__395040__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395040__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395040__$1);{
var G__395183 = cljs.core.chunk_rest.call(null,seq__395040__$1);
var G__395184 = c__8952__auto__;
var G__395185 = cljs.core.count.call(null,c__8952__auto__);
var G__395186 = 0;
seq__395040 = G__395183;
chunk__395041 = G__395184;
count__395042 = G__395185;
i__395043 = G__395186;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395040__$1);if((function (){var G__395045 = c;if(G__395045)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395045.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__395045.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__395045);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__395045);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__395187 = cljs.core.next.call(null,seq__395040__$1);
var G__395188 = null;
var G__395189 = 0;
var G__395190 = 0;
seq__395040 = G__395187;
chunk__395041 = G__395188;
count__395042 = G__395189;
i__395043 = G__395190;
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
var renderer__$1 = this;var seq__395046 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__395047 = null;var count__395048 = 0;var i__395049 = 0;while(true){
if((i__395049 < count__395048))
{var c = cljs.core._nth.call(null,chunk__395047,i__395049);if((function (){var G__395050 = c;if(G__395050)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395050.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__395050.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__395050);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__395050);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__395191 = seq__395046;
var G__395192 = chunk__395047;
var G__395193 = count__395048;
var G__395194 = (i__395049 + 1);
seq__395046 = G__395191;
chunk__395047 = G__395192;
count__395048 = G__395193;
i__395049 = G__395194;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395046);if(temp__4092__auto__)
{var seq__395046__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395046__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395046__$1);{
var G__395195 = cljs.core.chunk_rest.call(null,seq__395046__$1);
var G__395196 = c__8952__auto__;
var G__395197 = cljs.core.count.call(null,c__8952__auto__);
var G__395198 = 0;
seq__395046 = G__395195;
chunk__395047 = G__395196;
count__395048 = G__395197;
i__395049 = G__395198;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395046__$1);if((function (){var G__395051 = c;if(G__395051)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395051.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__395051.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__395051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__395051);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__395199 = cljs.core.next.call(null,seq__395046__$1);
var G__395200 = null;
var G__395201 = 0;
var G__395202 = 0;
seq__395046 = G__395199;
chunk__395047 = G__395200;
count__395048 = G__395201;
i__395049 = G__395202;
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
var renderer__$1 = this;var seq__395052 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__395053 = null;var count__395054 = 0;var i__395055 = 0;while(true){
if((i__395055 < count__395054))
{var c = cljs.core._nth.call(null,chunk__395053,i__395055);if((function (){var G__395056 = c;if(G__395056)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395056.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__395056.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395056);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395056);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__395203 = seq__395052;
var G__395204 = chunk__395053;
var G__395205 = count__395054;
var G__395206 = (i__395055 + 1);
seq__395052 = G__395203;
chunk__395053 = G__395204;
count__395054 = G__395205;
i__395055 = G__395206;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395052);if(temp__4092__auto__)
{var seq__395052__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395052__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395052__$1);{
var G__395207 = cljs.core.chunk_rest.call(null,seq__395052__$1);
var G__395208 = c__8952__auto__;
var G__395209 = cljs.core.count.call(null,c__8952__auto__);
var G__395210 = 0;
seq__395052 = G__395207;
chunk__395053 = G__395208;
count__395054 = G__395209;
i__395055 = G__395210;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__395052__$1);if((function (){var G__395057 = c;if(G__395057)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395057.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__395057.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395057);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__395057);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__395211 = cljs.core.next.call(null,seq__395052__$1);
var G__395212 = null;
var G__395213 = 0;
var G__395214 = 0;
seq__395052 = G__395211;
chunk__395053 = G__395212;
count__395054 = G__395213;
i__395055 = G__395214;
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
return (function (p__395058){var vec__395059 = p__395058;var op = cljs.core.nth.call(null,vec__395059,0,null);var path = cljs.core.nth.call(null,vec__395059,1,null);var _ = cljs.core.nth.call(null,vec__395059,2,null);var ___$1 = cljs.core.nth.call(null,vec__395059,3,null);var delta = vec__395059;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__395001_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__395001_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__395060 = cljs.core.seq.call(null,deltas__$1);var chunk__395061 = null;var count__395062 = 0;var i__395063 = 0;while(true){
if((i__395063 < count__395062))
{var vec__395064 = cljs.core._nth.call(null,chunk__395061,i__395063);var vec__395065 = cljs.core.nth.call(null,vec__395064,0,null);var op = cljs.core.nth.call(null,vec__395065,0,null);var path = cljs.core.nth.call(null,vec__395065,1,null);var _ = cljs.core.nth.call(null,vec__395065,2,null);var ___$1 = cljs.core.nth.call(null,vec__395065,3,null);var d = vec__395065;var f = cljs.core.nth.call(null,vec__395064,1,null);var id_395215 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_395216 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__395066_395217 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__395066_395217))
{var seq__395067_395218 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_395216));var chunk__395068_395219 = null;var count__395069_395220 = 0;var i__395070_395221 = 0;while(true){
if((i__395070_395221 < count__395069_395220))
{var dep_395222 = cljs.core._nth.call(null,chunk__395068_395219,i__395070_395221);var dep_pid_395223 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395222);var temp__4092__auto___395224__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395222], null));if(cljs.core.truth_(temp__4092__auto___395224__$1))
{var old_content_395225 = temp__4092__auto___395224__$1;dommy.core.remove_BANG_.call(null,old_content_395225);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395222], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395222], null));
{
var G__395226 = seq__395067_395218;
var G__395227 = chunk__395068_395219;
var G__395228 = count__395069_395220;
var G__395229 = (i__395070_395221 + 1);
seq__395067_395218 = G__395226;
chunk__395068_395219 = G__395227;
count__395069_395220 = G__395228;
i__395070_395221 = G__395229;
continue;
}
} else
{var temp__4092__auto___395230__$1 = cljs.core.seq.call(null,seq__395067_395218);if(temp__4092__auto___395230__$1)
{var seq__395067_395231__$1 = temp__4092__auto___395230__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395067_395231__$1))
{var c__8952__auto___395232 = cljs.core.chunk_first.call(null,seq__395067_395231__$1);{
var G__395233 = cljs.core.chunk_rest.call(null,seq__395067_395231__$1);
var G__395234 = c__8952__auto___395232;
var G__395235 = cljs.core.count.call(null,c__8952__auto___395232);
var G__395236 = 0;
seq__395067_395218 = G__395233;
chunk__395068_395219 = G__395234;
count__395069_395220 = G__395235;
i__395070_395221 = G__395236;
continue;
}
} else
{var dep_395237 = cljs.core.first.call(null,seq__395067_395231__$1);var dep_pid_395238 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395237);var temp__4092__auto___395239__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395237], null));if(cljs.core.truth_(temp__4092__auto___395239__$2))
{var old_content_395240 = temp__4092__auto___395239__$2;dommy.core.remove_BANG_.call(null,old_content_395240);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395237], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395237], null));
{
var G__395241 = cljs.core.next.call(null,seq__395067_395231__$1);
var G__395242 = null;
var G__395243 = 0;
var G__395244 = 0;
seq__395067_395218 = G__395241;
chunk__395068_395219 = G__395242;
count__395069_395220 = G__395243;
i__395070_395221 = G__395244;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__395066_395217))
{var temp__4090__auto___395245 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_395216));if(temp__4090__auto___395245)
{var deps_395246__$1 = temp__4090__auto___395245;var seq__395071_395247 = cljs.core.seq.call(null,deps_395246__$1);var chunk__395072_395248 = null;var count__395073_395249 = 0;var i__395074_395250 = 0;while(true){
if((i__395074_395250 < count__395073_395249))
{var dep_395251 = cljs.core._nth.call(null,chunk__395072_395248,i__395074_395250);var dep_pid_395252 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395251);var temp__4092__auto___395253__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_395252,dep_395251),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395253__$1))
{var dom_395254 = temp__4092__auto___395253__$1;var temp__4092__auto___395255__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395215], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395254.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395255__$2))
{var old_content_395256 = temp__4092__auto___395255__$2;dommy.core.replace_BANG_.call(null,old_content_395256,dom_395254);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395251], null),dom_395254);
} else
{}
{
var G__395257 = seq__395071_395247;
var G__395258 = chunk__395072_395248;
var G__395259 = count__395073_395249;
var G__395260 = (i__395074_395250 + 1);
seq__395071_395247 = G__395257;
chunk__395072_395248 = G__395258;
count__395073_395249 = G__395259;
i__395074_395250 = G__395260;
continue;
}
} else
{var temp__4092__auto___395261__$1 = cljs.core.seq.call(null,seq__395071_395247);if(temp__4092__auto___395261__$1)
{var seq__395071_395262__$1 = temp__4092__auto___395261__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395071_395262__$1))
{var c__8952__auto___395263 = cljs.core.chunk_first.call(null,seq__395071_395262__$1);{
var G__395264 = cljs.core.chunk_rest.call(null,seq__395071_395262__$1);
var G__395265 = c__8952__auto___395263;
var G__395266 = cljs.core.count.call(null,c__8952__auto___395263);
var G__395267 = 0;
seq__395071_395247 = G__395264;
chunk__395072_395248 = G__395265;
count__395073_395249 = G__395266;
i__395074_395250 = G__395267;
continue;
}
} else
{var dep_395268 = cljs.core.first.call(null,seq__395071_395262__$1);var dep_pid_395269 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395268);var temp__4092__auto___395270__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_395269,dep_395268),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395270__$2))
{var dom_395271 = temp__4092__auto___395270__$2;var temp__4092__auto___395272__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395215], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395271.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395272__$3))
{var old_content_395273 = temp__4092__auto___395272__$3;dommy.core.replace_BANG_.call(null,old_content_395273,dom_395271);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395268], null),dom_395271);
} else
{}
{
var G__395274 = cljs.core.next.call(null,seq__395071_395262__$1);
var G__395275 = null;
var G__395276 = 0;
var G__395277 = 0;
seq__395071_395247 = G__395274;
chunk__395072_395248 = G__395275;
count__395073_395249 = G__395276;
i__395074_395250 = G__395277;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___395278__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_395216,id_395215),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395278__$1))
{var dom_395279 = temp__4092__auto___395278__$1;var c_395280 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_395279));var dom_395281__$1 = (((function (){var G__395075 = dom_395279;if(G__395075)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395075.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__395075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395075);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_395279)):dom_395279);var parent_395282 = (((function (){var G__395076 = c_395280;if(G__395076)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395076.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__395076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395076);
}
})())?foundation.app.ui._parent_node.call(null,c_395280).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395216], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395216], null)));var temp__4092__auto___395283__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395215], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395281__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395283__$2))
{var old_content_395284 = temp__4092__auto___395283__$2;dommy.core.replace_BANG_.call(null,old_content_395284,dom_395281__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395215], null),dom_395281__$1);
} else
{}
if((function (){var G__395077 = c_395280;if(G__395077)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395077.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395077);
}
})())
{foundation.app.ui._post_process.call(null,c_395280);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__395066_395217))
{var temp__4092__auto___395285__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_395216,id_395215),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395285__$1))
{var dom_395286 = temp__4092__auto___395285__$1;var c_395287 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_395286));var children_395288 = (((function (){var G__395078 = c_395287;if(G__395078)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395078.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__395078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__395078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__395078);
}
})())?cljs.core.map.call(null,((function (seq__395060,chunk__395061,count__395062,i__395063,c_395287,dom_395286,temp__4092__auto___395285__$1,G__395066_395217,id_395215,pid_395216,vec__395064,vec__395065,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_395286).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__395060,chunk__395061,count__395062,i__395063,c_395287,dom_395286,temp__4092__auto___395285__$1,G__395066_395217,id_395215,pid_395216,vec__395064,vec__395065,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_395287)):null);var parent_395289 = (((function (){var G__395079 = c_395287;if(G__395079)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395079.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__395079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395079);
}
})())?foundation.app.ui._parent_node.call(null,c_395287).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395216], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395216], null)));if(cljs.core.truth_(parent_395289))
{dommy.core.append_BANG_.call(null,parent_395289,dom_395286);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_395286);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395215], null),dom_395286);
if((function (){var G__395080 = c_395287;if(G__395080)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395080.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395080.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395080);
}
})())
{foundation.app.ui._post_process.call(null,c_395287);
} else
{}
var seq__395081_395290 = cljs.core.seq.call(null,children_395288);var chunk__395082_395291 = null;var count__395083_395292 = 0;var i__395084_395293 = 0;while(true){
if((i__395084_395293 < count__395083_395292))
{var child_395294 = cljs.core._nth.call(null,chunk__395082_395291,i__395084_395293);if((function (){var G__395085 = c_395287;if(G__395085)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395085.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395085.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395085);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395085);
}
})())
{foundation.app.ui._post_process.call(null,c_395287);
} else
{}
{
var G__395295 = seq__395081_395290;
var G__395296 = chunk__395082_395291;
var G__395297 = count__395083_395292;
var G__395298 = (i__395084_395293 + 1);
seq__395081_395290 = G__395295;
chunk__395082_395291 = G__395296;
count__395083_395292 = G__395297;
i__395084_395293 = G__395298;
continue;
}
} else
{var temp__4092__auto___395299__$2 = cljs.core.seq.call(null,seq__395081_395290);if(temp__4092__auto___395299__$2)
{var seq__395081_395300__$1 = temp__4092__auto___395299__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395081_395300__$1))
{var c__8952__auto___395301 = cljs.core.chunk_first.call(null,seq__395081_395300__$1);{
var G__395302 = cljs.core.chunk_rest.call(null,seq__395081_395300__$1);
var G__395303 = c__8952__auto___395301;
var G__395304 = cljs.core.count.call(null,c__8952__auto___395301);
var G__395305 = 0;
seq__395081_395290 = G__395302;
chunk__395082_395291 = G__395303;
count__395083_395292 = G__395304;
i__395084_395293 = G__395305;
continue;
}
} else
{var child_395306 = cljs.core.first.call(null,seq__395081_395300__$1);if((function (){var G__395086 = c_395287;if(G__395086)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395086.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395086.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395086);
}
})())
{foundation.app.ui._post_process.call(null,c_395287);
} else
{}
{
var G__395307 = cljs.core.next.call(null,seq__395081_395300__$1);
var G__395308 = null;
var G__395309 = 0;
var G__395310 = 0;
seq__395081_395290 = G__395307;
chunk__395082_395291 = G__395308;
count__395083_395292 = G__395309;
i__395084_395293 = G__395310;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_395215,pid_395216);
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
var G__395311 = seq__395060;
var G__395312 = chunk__395061;
var G__395313 = count__395062;
var G__395314 = (i__395063 + 1);
seq__395060 = G__395311;
chunk__395061 = G__395312;
count__395062 = G__395313;
i__395063 = G__395314;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__395060);if(temp__4092__auto____$1)
{var seq__395060__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395060__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395060__$1);{
var G__395315 = cljs.core.chunk_rest.call(null,seq__395060__$1);
var G__395316 = c__8952__auto__;
var G__395317 = cljs.core.count.call(null,c__8952__auto__);
var G__395318 = 0;
seq__395060 = G__395315;
chunk__395061 = G__395316;
count__395062 = G__395317;
i__395063 = G__395318;
continue;
}
} else
{var vec__395087 = cljs.core.first.call(null,seq__395060__$1);var vec__395088 = cljs.core.nth.call(null,vec__395087,0,null);var op = cljs.core.nth.call(null,vec__395088,0,null);var path = cljs.core.nth.call(null,vec__395088,1,null);var _ = cljs.core.nth.call(null,vec__395088,2,null);var ___$1 = cljs.core.nth.call(null,vec__395088,3,null);var d = vec__395088;var f = cljs.core.nth.call(null,vec__395087,1,null);var id_395319 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_395320 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__395089_395321 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__395089_395321))
{var seq__395090_395322 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_395320));var chunk__395091_395323 = null;var count__395092_395324 = 0;var i__395093_395325 = 0;while(true){
if((i__395093_395325 < count__395092_395324))
{var dep_395326 = cljs.core._nth.call(null,chunk__395091_395323,i__395093_395325);var dep_pid_395327 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395326);var temp__4092__auto___395328__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395326], null));if(cljs.core.truth_(temp__4092__auto___395328__$2))
{var old_content_395329 = temp__4092__auto___395328__$2;dommy.core.remove_BANG_.call(null,old_content_395329);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395326], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395326], null));
{
var G__395330 = seq__395090_395322;
var G__395331 = chunk__395091_395323;
var G__395332 = count__395092_395324;
var G__395333 = (i__395093_395325 + 1);
seq__395090_395322 = G__395330;
chunk__395091_395323 = G__395331;
count__395092_395324 = G__395332;
i__395093_395325 = G__395333;
continue;
}
} else
{var temp__4092__auto___395334__$2 = cljs.core.seq.call(null,seq__395090_395322);if(temp__4092__auto___395334__$2)
{var seq__395090_395335__$1 = temp__4092__auto___395334__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395090_395335__$1))
{var c__8952__auto___395336 = cljs.core.chunk_first.call(null,seq__395090_395335__$1);{
var G__395337 = cljs.core.chunk_rest.call(null,seq__395090_395335__$1);
var G__395338 = c__8952__auto___395336;
var G__395339 = cljs.core.count.call(null,c__8952__auto___395336);
var G__395340 = 0;
seq__395090_395322 = G__395337;
chunk__395091_395323 = G__395338;
count__395092_395324 = G__395339;
i__395093_395325 = G__395340;
continue;
}
} else
{var dep_395341 = cljs.core.first.call(null,seq__395090_395335__$1);var dep_pid_395342 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395341);var temp__4092__auto___395343__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395341], null));if(cljs.core.truth_(temp__4092__auto___395343__$3))
{var old_content_395344 = temp__4092__auto___395343__$3;dommy.core.remove_BANG_.call(null,old_content_395344);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395341], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395341], null));
{
var G__395345 = cljs.core.next.call(null,seq__395090_395335__$1);
var G__395346 = null;
var G__395347 = 0;
var G__395348 = 0;
seq__395090_395322 = G__395345;
chunk__395091_395323 = G__395346;
count__395092_395324 = G__395347;
i__395093_395325 = G__395348;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__395089_395321))
{var temp__4090__auto___395349 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_395320));if(temp__4090__auto___395349)
{var deps_395350__$1 = temp__4090__auto___395349;var seq__395094_395351 = cljs.core.seq.call(null,deps_395350__$1);var chunk__395095_395352 = null;var count__395096_395353 = 0;var i__395097_395354 = 0;while(true){
if((i__395097_395354 < count__395096_395353))
{var dep_395355 = cljs.core._nth.call(null,chunk__395095_395352,i__395097_395354);var dep_pid_395356 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395355);var temp__4092__auto___395357__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_395356,dep_395355),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395357__$2))
{var dom_395358 = temp__4092__auto___395357__$2;var temp__4092__auto___395359__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395319], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395358.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395359__$3))
{var old_content_395360 = temp__4092__auto___395359__$3;dommy.core.replace_BANG_.call(null,old_content_395360,dom_395358);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395355], null),dom_395358);
} else
{}
{
var G__395361 = seq__395094_395351;
var G__395362 = chunk__395095_395352;
var G__395363 = count__395096_395353;
var G__395364 = (i__395097_395354 + 1);
seq__395094_395351 = G__395361;
chunk__395095_395352 = G__395362;
count__395096_395353 = G__395363;
i__395097_395354 = G__395364;
continue;
}
} else
{var temp__4092__auto___395365__$2 = cljs.core.seq.call(null,seq__395094_395351);if(temp__4092__auto___395365__$2)
{var seq__395094_395366__$1 = temp__4092__auto___395365__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395094_395366__$1))
{var c__8952__auto___395367 = cljs.core.chunk_first.call(null,seq__395094_395366__$1);{
var G__395368 = cljs.core.chunk_rest.call(null,seq__395094_395366__$1);
var G__395369 = c__8952__auto___395367;
var G__395370 = cljs.core.count.call(null,c__8952__auto___395367);
var G__395371 = 0;
seq__395094_395351 = G__395368;
chunk__395095_395352 = G__395369;
count__395096_395353 = G__395370;
i__395097_395354 = G__395371;
continue;
}
} else
{var dep_395372 = cljs.core.first.call(null,seq__395094_395366__$1);var dep_pid_395373 = foundation.app.render._parent_id.call(null,renderer__$1,dep_395372);var temp__4092__auto___395374__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_395373,dep_395372),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395374__$3))
{var dom_395375 = temp__4092__auto___395374__$3;var temp__4092__auto___395376__$4 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395319], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395375.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395376__$4))
{var old_content_395377 = temp__4092__auto___395376__$4;dommy.core.replace_BANG_.call(null,old_content_395377,dom_395375);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_395372], null),dom_395375);
} else
{}
{
var G__395378 = cljs.core.next.call(null,seq__395094_395366__$1);
var G__395379 = null;
var G__395380 = 0;
var G__395381 = 0;
seq__395094_395351 = G__395378;
chunk__395095_395352 = G__395379;
count__395096_395353 = G__395380;
i__395097_395354 = G__395381;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___395382__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_395320,id_395319),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395382__$2))
{var dom_395383 = temp__4092__auto___395382__$2;var c_395384 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_395383));var dom_395385__$1 = (((function (){var G__395098 = dom_395383;if(G__395098)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395098.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__395098.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__395098);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_395383)):dom_395383);var parent_395386 = (((function (){var G__395099 = c_395384;if(G__395099)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395099.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__395099.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395099);
}
})())?foundation.app.ui._parent_node.call(null,c_395384).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395320], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395320], null)));var temp__4092__auto___395387__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395319], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_395385__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___395387__$3))
{var old_content_395388 = temp__4092__auto___395387__$3;dommy.core.replace_BANG_.call(null,old_content_395388,dom_395385__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395319], null),dom_395385__$1);
} else
{}
if((function (){var G__395100 = c_395384;if(G__395100)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395100.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395100.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395100);
}
})())
{foundation.app.ui._post_process.call(null,c_395384);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__395089_395321))
{var temp__4092__auto___395389__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_395320,id_395319),renderer__$1);if(cljs.core.truth_(temp__4092__auto___395389__$2))
{var dom_395390 = temp__4092__auto___395389__$2;var c_395391 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_395390));var children_395392 = (((function (){var G__395101 = c_395391;if(G__395101)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395101.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__395101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__395101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__395101);
}
})())?cljs.core.map.call(null,((function (seq__395060,chunk__395061,count__395062,i__395063,c_395391,dom_395390,temp__4092__auto___395389__$2,G__395089_395321,id_395319,pid_395320,vec__395087,vec__395088,op,path,_,___$1,d,f,seq__395060__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_395390).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__395060,chunk__395061,count__395062,i__395063,c_395391,dom_395390,temp__4092__auto___395389__$2,G__395089_395321,id_395319,pid_395320,vec__395087,vec__395088,op,path,_,___$1,d,f,seq__395060__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_395391)):null);var parent_395393 = (((function (){var G__395102 = c_395391;if(G__395102)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395102.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__395102.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__395102);
}
})())?foundation.app.ui._parent_node.call(null,c_395391).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395320], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_395320], null)));if(cljs.core.truth_(parent_395393))
{dommy.core.append_BANG_.call(null,parent_395393,dom_395390);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_395390);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_395319], null),dom_395390);
if((function (){var G__395103 = c_395391;if(G__395103)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395103.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395103.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395103);
}
})())
{foundation.app.ui._post_process.call(null,c_395391);
} else
{}
var seq__395104_395394 = cljs.core.seq.call(null,children_395392);var chunk__395105_395395 = null;var count__395106_395396 = 0;var i__395107_395397 = 0;while(true){
if((i__395107_395397 < count__395106_395396))
{var child_395398 = cljs.core._nth.call(null,chunk__395105_395395,i__395107_395397);if((function (){var G__395108 = c_395391;if(G__395108)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395108.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395108.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395108);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395108);
}
})())
{foundation.app.ui._post_process.call(null,c_395391);
} else
{}
{
var G__395399 = seq__395104_395394;
var G__395400 = chunk__395105_395395;
var G__395401 = count__395106_395396;
var G__395402 = (i__395107_395397 + 1);
seq__395104_395394 = G__395399;
chunk__395105_395395 = G__395400;
count__395106_395396 = G__395401;
i__395107_395397 = G__395402;
continue;
}
} else
{var temp__4092__auto___395403__$3 = cljs.core.seq.call(null,seq__395104_395394);if(temp__4092__auto___395403__$3)
{var seq__395104_395404__$1 = temp__4092__auto___395403__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395104_395404__$1))
{var c__8952__auto___395405 = cljs.core.chunk_first.call(null,seq__395104_395404__$1);{
var G__395406 = cljs.core.chunk_rest.call(null,seq__395104_395404__$1);
var G__395407 = c__8952__auto___395405;
var G__395408 = cljs.core.count.call(null,c__8952__auto___395405);
var G__395409 = 0;
seq__395104_395394 = G__395406;
chunk__395105_395395 = G__395407;
count__395106_395396 = G__395408;
i__395107_395397 = G__395409;
continue;
}
} else
{var child_395410 = cljs.core.first.call(null,seq__395104_395404__$1);if((function (){var G__395109 = c_395391;if(G__395109)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__395109.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__395109.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395109);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__395109);
}
})())
{foundation.app.ui._post_process.call(null,c_395391);
} else
{}
{
var G__395411 = cljs.core.next.call(null,seq__395104_395404__$1);
var G__395412 = null;
var G__395413 = 0;
var G__395414 = 0;
seq__395104_395394 = G__395411;
chunk__395105_395395 = G__395412;
count__395106_395396 = G__395413;
i__395107_395397 = G__395414;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_395319,pid_395320);
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
var G__395415 = cljs.core.next.call(null,seq__395060__$1);
var G__395416 = null;
var G__395417 = 0;
var G__395418 = 0;
seq__395060 = G__395415;
chunk__395061 = G__395416;
count__395062 = G__395417;
i__395063 = G__395418;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__395110){var map__395111 = p__395110;var map__395111__$1 = ((cljs.core.seq_QMARK_.call(null,map__395111))?cljs.core.apply.call(null,cljs.core.hash_map,map__395111):map__395111);var deltas = cljs.core.get.call(null,map__395111__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__395112 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__395113 = null;var count__395114 = 0;var i__395115 = 0;while(true){
if((i__395115 < count__395114))
{var handler = cljs.core._nth.call(null,chunk__395113,i__395115);handler.dispose();
{
var G__395419 = seq__395112;
var G__395420 = chunk__395113;
var G__395421 = count__395114;
var G__395422 = (i__395115 + 1);
seq__395112 = G__395419;
chunk__395113 = G__395420;
count__395114 = G__395421;
i__395115 = G__395422;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__395112);if(temp__4092__auto__)
{var seq__395112__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__395112__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__395112__$1);{
var G__395423 = cljs.core.chunk_rest.call(null,seq__395112__$1);
var G__395424 = c__8952__auto__;
var G__395425 = cljs.core.count.call(null,c__8952__auto__);
var G__395426 = 0;
seq__395112 = G__395423;
chunk__395113 = G__395424;
count__395114 = G__395425;
i__395115 = G__395426;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__395112__$1);handler.dispose();
{
var G__395427 = cljs.core.next.call(null,seq__395112__$1);
var G__395428 = null;
var G__395429 = 0;
var G__395430 = 0;
seq__395112 = G__395427;
chunk__395113 = G__395428;
count__395114 = G__395429;
i__395115 = G__395430;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k395003,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k395003,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k395003,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k395003,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k395003,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k395003,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__395002){var self__ = this;
var this__8797__auto____$1 = this;var pred__395116 = cljs.core.keyword_identical_QMARK_;var expr__395117 = k__8798__auto__;if(cljs.core.truth_(pred__395116.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__395117)))
{return (new foundation.app.render.Renderer(G__395002,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__395116.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__395117)))
{return (new foundation.app.render.Renderer(self__.env,G__395002,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__395116.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__395117)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__395002,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__395116.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__395117)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__395002,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__395002),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__395002){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__395002,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__395004){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__395004),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__395004),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__395004),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__395004),null,cljs.core.dissoc.call(null,G__395004,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__395431,input_queue,pid,id){var vec__395432 = p__395431;var op = cljs.core.nth.call(null,vec__395432,0,null);var path = cljs.core.nth.call(null,vec__395432,1,null);var _ = cljs.core.nth.call(null,vec__395432,2,null);var ___$1 = cljs.core.nth.call(null,vec__395432,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map