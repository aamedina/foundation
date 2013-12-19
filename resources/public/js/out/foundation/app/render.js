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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__122159,pid,id){var vec__122160 = p__122159;var op = cljs.core.nth.call(null,vec__122160,0,null);var path = cljs.core.nth.call(null,vec__122160,1,null);var _ = cljs.core.nth.call(null,vec__122160,2,null);var ___$1 = cljs.core.nth.call(null,vec__122160,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj122162 = {};return obj122162;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__122163_SHARP_){return cljs.core.not.call(null,p1__122163_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__122165 = (new goog.events.EventHandler(renderer));G__122165.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__122165.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__122165,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__122165;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__122166_SHARP_){return cljs.core.get.call(null,n,p1__122166_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__122171 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__122172 = null;var count__122173 = 0;var i__122174 = 0;while(true){
if((i__122174 < count__122173))
{var f = cljs.core._nth.call(null,chunk__122172,i__122174);f.call(null);
{
var G__122175 = seq__122171;
var G__122176 = chunk__122172;
var G__122177 = count__122173;
var G__122178 = (i__122174 + 1);
seq__122171 = G__122175;
chunk__122172 = G__122176;
count__122173 = G__122177;
i__122174 = G__122178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122171);if(temp__4092__auto__)
{var seq__122171__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122171__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122171__$1);{
var G__122179 = cljs.core.chunk_rest.call(null,seq__122171__$1);
var G__122180 = c__8952__auto__;
var G__122181 = cljs.core.count.call(null,c__8952__auto__);
var G__122182 = 0;
seq__122171 = G__122179;
chunk__122172 = G__122180;
count__122173 = G__122181;
i__122174 = G__122182;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__122171__$1);f.call(null);
{
var G__122183 = cljs.core.next.call(null,seq__122171__$1);
var G__122184 = null;
var G__122185 = 0;
var G__122186 = 0;
seq__122171 = G__122183;
chunk__122172 = G__122184;
count__122173 = G__122185;
i__122174 = G__122186;
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
foundation.app.render.IRenderer = (function (){var obj122188 = {};return obj122188;
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
foundation.app.render.IRender = (function (){var obj122190 = {};return obj122190;
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
(foundation.app.render._render["_"] = (function (x,renderer){var dom_content = (function (){var G__122191 = x;var G__122191__$1 = (((function (){var G__122192 = x;if(G__122192)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122192.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__122192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__122192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__122192);
}
})())?foundation.app.render.extend_component.call(null,G__122191,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__122191);var G__122191__$2 = (((function (){var G__122193 = x;if(G__122193)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122193.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__122193.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__122193);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__122193);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__122191__$1);var G__122191__$3 = (((function (){var G__122194 = x;if(G__122194)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122194.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__122194.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__122194);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__122194);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__122191__$2);var G__122191__$4 = (((function (){var G__122195 = x;if(G__122195)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122195.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__122195.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__122195);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__122195);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__122191__$3);var G__122191__$5 = (((function (){var G__122196 = x;if(G__122196)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122196.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__122196.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__122196);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__122196);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__122191__$4);var G__122191__$6 = (((function (){var G__122197 = x;if(G__122197)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122197.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__122197.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__122197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__122197);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__122191__$5);var G__122191__$7 = (((function (){var G__122198 = x;if(G__122198)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122198.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__122198.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__122198);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__122198);
}
})())?foundation.app.render.extend_component.call(null,G__122191__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__122191__$6);var G__122191__$8 = (((function (){var G__122199 = x;if(G__122199)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122199.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__122199.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__122199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__122199);
}
})())?foundation.app.ui._render.call(null,G__122191__$7):G__122191__$7);return G__122191__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type], null));return cljs.core.filter.call(null,(function (p1__122200_SHARP_){return dommy.core.descendant_QMARK_.call(null,p1__122200_SHARP_,e.target);
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__122204 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__122205 = null;var count__122206 = 0;var i__122207 = 0;while(true){
if((i__122207 < count__122206))
{var component = cljs.core._nth.call(null,chunk__122205,i__122207);console.log(component);
{
var G__122271 = seq__122204;
var G__122272 = chunk__122205;
var G__122273 = count__122206;
var G__122274 = (i__122207 + 1);
seq__122204 = G__122271;
chunk__122205 = G__122272;
count__122206 = G__122273;
i__122207 = G__122274;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122204);if(temp__4092__auto__)
{var seq__122204__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122204__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122204__$1);{
var G__122275 = cljs.core.chunk_rest.call(null,seq__122204__$1);
var G__122276 = c__8952__auto__;
var G__122277 = cljs.core.count.call(null,c__8952__auto__);
var G__122278 = 0;
seq__122204 = G__122275;
chunk__122205 = G__122276;
count__122206 = G__122277;
i__122207 = G__122278;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122204__$1);console.log(component);
{
var G__122279 = cljs.core.next.call(null,seq__122204__$1);
var G__122280 = null;
var G__122281 = 0;
var G__122282 = 0;
seq__122204 = G__122279;
chunk__122205 = G__122280;
count__122206 = G__122281;
i__122207 = G__122282;
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
var renderer__$1 = this;var seq__122208 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__122209 = null;var count__122210 = 0;var i__122211 = 0;while(true){
if((i__122211 < count__122210))
{var component = cljs.core._nth.call(null,chunk__122209,i__122211);console.log(component);
{
var G__122283 = seq__122208;
var G__122284 = chunk__122209;
var G__122285 = count__122210;
var G__122286 = (i__122211 + 1);
seq__122208 = G__122283;
chunk__122209 = G__122284;
count__122210 = G__122285;
i__122211 = G__122286;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122208);if(temp__4092__auto__)
{var seq__122208__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122208__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122208__$1);{
var G__122287 = cljs.core.chunk_rest.call(null,seq__122208__$1);
var G__122288 = c__8952__auto__;
var G__122289 = cljs.core.count.call(null,c__8952__auto__);
var G__122290 = 0;
seq__122208 = G__122287;
chunk__122209 = G__122288;
count__122210 = G__122289;
i__122211 = G__122290;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122208__$1);console.log(component);
{
var G__122291 = cljs.core.next.call(null,seq__122208__$1);
var G__122292 = null;
var G__122293 = 0;
var G__122294 = 0;
seq__122208 = G__122291;
chunk__122209 = G__122292;
count__122210 = G__122293;
i__122211 = G__122294;
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
var renderer__$1 = this;var seq__122212 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__122213 = null;var count__122214 = 0;var i__122215 = 0;while(true){
if((i__122215 < count__122214))
{var component = cljs.core._nth.call(null,chunk__122213,i__122215);console.log(component);
{
var G__122295 = seq__122212;
var G__122296 = chunk__122213;
var G__122297 = count__122214;
var G__122298 = (i__122215 + 1);
seq__122212 = G__122295;
chunk__122213 = G__122296;
count__122214 = G__122297;
i__122215 = G__122298;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122212);if(temp__4092__auto__)
{var seq__122212__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122212__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122212__$1);{
var G__122299 = cljs.core.chunk_rest.call(null,seq__122212__$1);
var G__122300 = c__8952__auto__;
var G__122301 = cljs.core.count.call(null,c__8952__auto__);
var G__122302 = 0;
seq__122212 = G__122299;
chunk__122213 = G__122300;
count__122214 = G__122301;
i__122215 = G__122302;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122212__$1);console.log(component);
{
var G__122303 = cljs.core.next.call(null,seq__122212__$1);
var G__122304 = null;
var G__122305 = 0;
var G__122306 = 0;
seq__122212 = G__122303;
chunk__122213 = G__122304;
count__122214 = G__122305;
i__122215 = G__122306;
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
var renderer__$1 = this;var seq__122216 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__122217 = null;var count__122218 = 0;var i__122219 = 0;while(true){
if((i__122219 < count__122218))
{var component = cljs.core._nth.call(null,chunk__122217,i__122219);console.log(component);
{
var G__122307 = seq__122216;
var G__122308 = chunk__122217;
var G__122309 = count__122218;
var G__122310 = (i__122219 + 1);
seq__122216 = G__122307;
chunk__122217 = G__122308;
count__122218 = G__122309;
i__122219 = G__122310;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122216);if(temp__4092__auto__)
{var seq__122216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122216__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122216__$1);{
var G__122311 = cljs.core.chunk_rest.call(null,seq__122216__$1);
var G__122312 = c__8952__auto__;
var G__122313 = cljs.core.count.call(null,c__8952__auto__);
var G__122314 = 0;
seq__122216 = G__122311;
chunk__122217 = G__122312;
count__122218 = G__122313;
i__122219 = G__122314;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122216__$1);console.log(component);
{
var G__122315 = cljs.core.next.call(null,seq__122216__$1);
var G__122316 = null;
var G__122317 = 0;
var G__122318 = 0;
seq__122216 = G__122315;
chunk__122217 = G__122316;
count__122218 = G__122317;
i__122219 = G__122318;
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
var renderer__$1 = this;var seq__122220 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__122221 = null;var count__122222 = 0;var i__122223 = 0;while(true){
if((i__122223 < count__122222))
{var component = cljs.core._nth.call(null,chunk__122221,i__122223);console.log(component);
{
var G__122319 = seq__122220;
var G__122320 = chunk__122221;
var G__122321 = count__122222;
var G__122322 = (i__122223 + 1);
seq__122220 = G__122319;
chunk__122221 = G__122320;
count__122222 = G__122321;
i__122223 = G__122322;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122220);if(temp__4092__auto__)
{var seq__122220__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122220__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122220__$1);{
var G__122323 = cljs.core.chunk_rest.call(null,seq__122220__$1);
var G__122324 = c__8952__auto__;
var G__122325 = cljs.core.count.call(null,c__8952__auto__);
var G__122326 = 0;
seq__122220 = G__122323;
chunk__122221 = G__122324;
count__122222 = G__122325;
i__122223 = G__122326;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122220__$1);console.log(component);
{
var G__122327 = cljs.core.next.call(null,seq__122220__$1);
var G__122328 = null;
var G__122329 = 0;
var G__122330 = 0;
seq__122220 = G__122327;
chunk__122221 = G__122328;
count__122222 = G__122329;
i__122223 = G__122330;
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
var renderer__$1 = this;var seq__122224 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__122225 = null;var count__122226 = 0;var i__122227 = 0;while(true){
if((i__122227 < count__122226))
{var component = cljs.core._nth.call(null,chunk__122225,i__122227);console.log(component);
{
var G__122331 = seq__122224;
var G__122332 = chunk__122225;
var G__122333 = count__122226;
var G__122334 = (i__122227 + 1);
seq__122224 = G__122331;
chunk__122225 = G__122332;
count__122226 = G__122333;
i__122227 = G__122334;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122224);if(temp__4092__auto__)
{var seq__122224__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122224__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122224__$1);{
var G__122335 = cljs.core.chunk_rest.call(null,seq__122224__$1);
var G__122336 = c__8952__auto__;
var G__122337 = cljs.core.count.call(null,c__8952__auto__);
var G__122338 = 0;
seq__122224 = G__122335;
chunk__122225 = G__122336;
count__122226 = G__122337;
i__122227 = G__122338;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122224__$1);console.log(component);
{
var G__122339 = cljs.core.next.call(null,seq__122224__$1);
var G__122340 = null;
var G__122341 = 0;
var G__122342 = 0;
seq__122224 = G__122339;
chunk__122225 = G__122340;
count__122226 = G__122341;
i__122227 = G__122342;
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
var renderer__$1 = this;var seq__122228 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__122229 = null;var count__122230 = 0;var i__122231 = 0;while(true){
if((i__122231 < count__122230))
{var component = cljs.core._nth.call(null,chunk__122229,i__122231);console.log(component);
{
var G__122343 = seq__122228;
var G__122344 = chunk__122229;
var G__122345 = count__122230;
var G__122346 = (i__122231 + 1);
seq__122228 = G__122343;
chunk__122229 = G__122344;
count__122230 = G__122345;
i__122231 = G__122346;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122228);if(temp__4092__auto__)
{var seq__122228__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122228__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122228__$1);{
var G__122347 = cljs.core.chunk_rest.call(null,seq__122228__$1);
var G__122348 = c__8952__auto__;
var G__122349 = cljs.core.count.call(null,c__8952__auto__);
var G__122350 = 0;
seq__122228 = G__122347;
chunk__122229 = G__122348;
count__122230 = G__122349;
i__122231 = G__122350;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__122228__$1);console.log(component);
{
var G__122351 = cljs.core.next.call(null,seq__122228__$1);
var G__122352 = null;
var G__122353 = 0;
var G__122354 = 0;
seq__122228 = G__122351;
chunk__122229 = G__122352;
count__122230 = G__122353;
i__122231 = G__122354;
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
return (function (p__122232){var vec__122233 = p__122232;var op = cljs.core.nth.call(null,vec__122233,0,null);var path = cljs.core.nth.call(null,vec__122233,1,null);var _ = cljs.core.nth.call(null,vec__122233,2,null);var ___$1 = cljs.core.nth.call(null,vec__122233,3,null);var delta = vec__122233;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
var seq__122234 = cljs.core.seq.call(null,deltas__$1);var chunk__122235 = null;var count__122236 = 0;var i__122237 = 0;while(true){
if((i__122237 < count__122236))
{var vec__122238 = cljs.core._nth.call(null,chunk__122235,i__122237);var vec__122239 = cljs.core.nth.call(null,vec__122238,0,null);var op = cljs.core.nth.call(null,vec__122239,0,null);var path = cljs.core.nth.call(null,vec__122239,1,null);var _ = cljs.core.nth.call(null,vec__122239,2,null);var ___$1 = cljs.core.nth.call(null,vec__122239,3,null);var d = vec__122239;var f = cljs.core.nth.call(null,vec__122238,1,null);var id_122355 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_122356 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__122240_122357 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__122240_122357))
{var seq__122241_122358 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_122356));var chunk__122242_122359 = null;var count__122243_122360 = 0;var i__122244_122361 = 0;while(true){
if((i__122244_122361 < count__122243_122360))
{var dep_122362 = cljs.core._nth.call(null,chunk__122242_122359,i__122244_122361);var dep_pid_122363 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122362);var temp__4092__auto___122364__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122362], null));if(cljs.core.truth_(temp__4092__auto___122364__$1))
{var old_content_122365 = temp__4092__auto___122364__$1;dommy.core.remove_BANG_.call(null,old_content_122365);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122362], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122362], null));
{
var G__122366 = seq__122241_122358;
var G__122367 = chunk__122242_122359;
var G__122368 = count__122243_122360;
var G__122369 = (i__122244_122361 + 1);
seq__122241_122358 = G__122366;
chunk__122242_122359 = G__122367;
count__122243_122360 = G__122368;
i__122244_122361 = G__122369;
continue;
}
} else
{var temp__4092__auto___122370__$1 = cljs.core.seq.call(null,seq__122241_122358);if(temp__4092__auto___122370__$1)
{var seq__122241_122371__$1 = temp__4092__auto___122370__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122241_122371__$1))
{var c__8952__auto___122372 = cljs.core.chunk_first.call(null,seq__122241_122371__$1);{
var G__122373 = cljs.core.chunk_rest.call(null,seq__122241_122371__$1);
var G__122374 = c__8952__auto___122372;
var G__122375 = cljs.core.count.call(null,c__8952__auto___122372);
var G__122376 = 0;
seq__122241_122358 = G__122373;
chunk__122242_122359 = G__122374;
count__122243_122360 = G__122375;
i__122244_122361 = G__122376;
continue;
}
} else
{var dep_122377 = cljs.core.first.call(null,seq__122241_122371__$1);var dep_pid_122378 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122377);var temp__4092__auto___122379__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122377], null));if(cljs.core.truth_(temp__4092__auto___122379__$2))
{var old_content_122380 = temp__4092__auto___122379__$2;dommy.core.remove_BANG_.call(null,old_content_122380);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122377], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122377], null));
{
var G__122381 = cljs.core.next.call(null,seq__122241_122371__$1);
var G__122382 = null;
var G__122383 = 0;
var G__122384 = 0;
seq__122241_122358 = G__122381;
chunk__122242_122359 = G__122382;
count__122243_122360 = G__122383;
i__122244_122361 = G__122384;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__122240_122357))
{var seq__122245_122385 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_122356));var chunk__122246_122386 = null;var count__122247_122387 = 0;var i__122248_122388 = 0;while(true){
if((i__122248_122388 < count__122247_122387))
{var dep_122389 = cljs.core._nth.call(null,chunk__122246_122386,i__122248_122388);var dep_pid_122390 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122389);var temp__4092__auto___122391__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_122390,dep_122389),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122391__$1))
{var dom_content_122392 = temp__4092__auto___122391__$1;var temp__4092__auto___122393__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122389], null));if(cljs.core.truth_(temp__4092__auto___122393__$2))
{var old_content_122394 = temp__4092__auto___122393__$2;dommy.core.replace_BANG_.call(null,old_content_122394,dom_content_122392);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122389], null),dom_content_122392);
} else
{}
{
var G__122395 = seq__122245_122385;
var G__122396 = chunk__122246_122386;
var G__122397 = count__122247_122387;
var G__122398 = (i__122248_122388 + 1);
seq__122245_122385 = G__122395;
chunk__122246_122386 = G__122396;
count__122247_122387 = G__122397;
i__122248_122388 = G__122398;
continue;
}
} else
{var temp__4092__auto___122399__$1 = cljs.core.seq.call(null,seq__122245_122385);if(temp__4092__auto___122399__$1)
{var seq__122245_122400__$1 = temp__4092__auto___122399__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122245_122400__$1))
{var c__8952__auto___122401 = cljs.core.chunk_first.call(null,seq__122245_122400__$1);{
var G__122402 = cljs.core.chunk_rest.call(null,seq__122245_122400__$1);
var G__122403 = c__8952__auto___122401;
var G__122404 = cljs.core.count.call(null,c__8952__auto___122401);
var G__122405 = 0;
seq__122245_122385 = G__122402;
chunk__122246_122386 = G__122403;
count__122247_122387 = G__122404;
i__122248_122388 = G__122405;
continue;
}
} else
{var dep_122406 = cljs.core.first.call(null,seq__122245_122400__$1);var dep_pid_122407 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122406);var temp__4092__auto___122408__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_122407,dep_122406),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122408__$2))
{var dom_content_122409 = temp__4092__auto___122408__$2;var temp__4092__auto___122410__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122406], null));if(cljs.core.truth_(temp__4092__auto___122410__$3))
{var old_content_122411 = temp__4092__auto___122410__$3;dommy.core.replace_BANG_.call(null,old_content_122411,dom_content_122409);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122406], null),dom_content_122409);
} else
{}
{
var G__122412 = cljs.core.next.call(null,seq__122245_122400__$1);
var G__122413 = null;
var G__122414 = 0;
var G__122415 = 0;
seq__122245_122385 = G__122412;
chunk__122246_122386 = G__122413;
count__122247_122387 = G__122414;
i__122248_122388 = G__122415;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__122240_122357))
{var temp__4092__auto___122416__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_122356,id_122355),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122416__$1))
{var dom_122417 = temp__4092__auto___122416__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_122355], null),dom_122417);
var temp__4090__auto___122418 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_122417);if(cljs.core.truth_(and__8211__auto__))
{var G__122249 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_122417));if(G__122249)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122249.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__122249.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__122249);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__122249);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_122417))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_122356], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_122356], null)));if(cljs.core.truth_(temp__4090__auto___122418))
{var parent_122419 = temp__4090__auto___122418;dommy.core.append_BANG_.call(null,parent_122419,dom_122417);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_122417);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_122355,pid_122356);
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
var G__122420 = seq__122234;
var G__122421 = chunk__122235;
var G__122422 = count__122236;
var G__122423 = (i__122237 + 1);
seq__122234 = G__122420;
chunk__122235 = G__122421;
count__122236 = G__122422;
i__122237 = G__122423;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__122234);if(temp__4092__auto____$1)
{var seq__122234__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122234__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122234__$1);{
var G__122424 = cljs.core.chunk_rest.call(null,seq__122234__$1);
var G__122425 = c__8952__auto__;
var G__122426 = cljs.core.count.call(null,c__8952__auto__);
var G__122427 = 0;
seq__122234 = G__122424;
chunk__122235 = G__122425;
count__122236 = G__122426;
i__122237 = G__122427;
continue;
}
} else
{var vec__122250 = cljs.core.first.call(null,seq__122234__$1);var vec__122251 = cljs.core.nth.call(null,vec__122250,0,null);var op = cljs.core.nth.call(null,vec__122251,0,null);var path = cljs.core.nth.call(null,vec__122251,1,null);var _ = cljs.core.nth.call(null,vec__122251,2,null);var ___$1 = cljs.core.nth.call(null,vec__122251,3,null);var d = vec__122251;var f = cljs.core.nth.call(null,vec__122250,1,null);var id_122428 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_122429 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__122252_122430 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__122252_122430))
{var seq__122253_122431 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_122429));var chunk__122254_122432 = null;var count__122255_122433 = 0;var i__122256_122434 = 0;while(true){
if((i__122256_122434 < count__122255_122433))
{var dep_122435 = cljs.core._nth.call(null,chunk__122254_122432,i__122256_122434);var dep_pid_122436 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122435);var temp__4092__auto___122437__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122435], null));if(cljs.core.truth_(temp__4092__auto___122437__$2))
{var old_content_122438 = temp__4092__auto___122437__$2;dommy.core.remove_BANG_.call(null,old_content_122438);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122435], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122435], null));
{
var G__122439 = seq__122253_122431;
var G__122440 = chunk__122254_122432;
var G__122441 = count__122255_122433;
var G__122442 = (i__122256_122434 + 1);
seq__122253_122431 = G__122439;
chunk__122254_122432 = G__122440;
count__122255_122433 = G__122441;
i__122256_122434 = G__122442;
continue;
}
} else
{var temp__4092__auto___122443__$2 = cljs.core.seq.call(null,seq__122253_122431);if(temp__4092__auto___122443__$2)
{var seq__122253_122444__$1 = temp__4092__auto___122443__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122253_122444__$1))
{var c__8952__auto___122445 = cljs.core.chunk_first.call(null,seq__122253_122444__$1);{
var G__122446 = cljs.core.chunk_rest.call(null,seq__122253_122444__$1);
var G__122447 = c__8952__auto___122445;
var G__122448 = cljs.core.count.call(null,c__8952__auto___122445);
var G__122449 = 0;
seq__122253_122431 = G__122446;
chunk__122254_122432 = G__122447;
count__122255_122433 = G__122448;
i__122256_122434 = G__122449;
continue;
}
} else
{var dep_122450 = cljs.core.first.call(null,seq__122253_122444__$1);var dep_pid_122451 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122450);var temp__4092__auto___122452__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122450], null));if(cljs.core.truth_(temp__4092__auto___122452__$3))
{var old_content_122453 = temp__4092__auto___122452__$3;dommy.core.remove_BANG_.call(null,old_content_122453);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122450], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122450], null));
{
var G__122454 = cljs.core.next.call(null,seq__122253_122444__$1);
var G__122455 = null;
var G__122456 = 0;
var G__122457 = 0;
seq__122253_122431 = G__122454;
chunk__122254_122432 = G__122455;
count__122255_122433 = G__122456;
i__122256_122434 = G__122457;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__122252_122430))
{var seq__122257_122458 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_122429));var chunk__122258_122459 = null;var count__122259_122460 = 0;var i__122260_122461 = 0;while(true){
if((i__122260_122461 < count__122259_122460))
{var dep_122462 = cljs.core._nth.call(null,chunk__122258_122459,i__122260_122461);var dep_pid_122463 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122462);var temp__4092__auto___122464__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_122463,dep_122462),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122464__$2))
{var dom_content_122465 = temp__4092__auto___122464__$2;var temp__4092__auto___122466__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122462], null));if(cljs.core.truth_(temp__4092__auto___122466__$3))
{var old_content_122467 = temp__4092__auto___122466__$3;dommy.core.replace_BANG_.call(null,old_content_122467,dom_content_122465);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122462], null),dom_content_122465);
} else
{}
{
var G__122468 = seq__122257_122458;
var G__122469 = chunk__122258_122459;
var G__122470 = count__122259_122460;
var G__122471 = (i__122260_122461 + 1);
seq__122257_122458 = G__122468;
chunk__122258_122459 = G__122469;
count__122259_122460 = G__122470;
i__122260_122461 = G__122471;
continue;
}
} else
{var temp__4092__auto___122472__$2 = cljs.core.seq.call(null,seq__122257_122458);if(temp__4092__auto___122472__$2)
{var seq__122257_122473__$1 = temp__4092__auto___122472__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122257_122473__$1))
{var c__8952__auto___122474 = cljs.core.chunk_first.call(null,seq__122257_122473__$1);{
var G__122475 = cljs.core.chunk_rest.call(null,seq__122257_122473__$1);
var G__122476 = c__8952__auto___122474;
var G__122477 = cljs.core.count.call(null,c__8952__auto___122474);
var G__122478 = 0;
seq__122257_122458 = G__122475;
chunk__122258_122459 = G__122476;
count__122259_122460 = G__122477;
i__122260_122461 = G__122478;
continue;
}
} else
{var dep_122479 = cljs.core.first.call(null,seq__122257_122473__$1);var dep_pid_122480 = foundation.app.render._parent_id.call(null,renderer__$1,dep_122479);var temp__4092__auto___122481__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_122480,dep_122479),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122481__$3))
{var dom_content_122482 = temp__4092__auto___122481__$3;var temp__4092__auto___122483__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122479], null));if(cljs.core.truth_(temp__4092__auto___122483__$4))
{var old_content_122484 = temp__4092__auto___122483__$4;dommy.core.replace_BANG_.call(null,old_content_122484,dom_content_122482);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_122479], null),dom_content_122482);
} else
{}
{
var G__122485 = cljs.core.next.call(null,seq__122257_122473__$1);
var G__122486 = null;
var G__122487 = 0;
var G__122488 = 0;
seq__122257_122458 = G__122485;
chunk__122258_122459 = G__122486;
count__122259_122460 = G__122487;
i__122260_122461 = G__122488;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__122252_122430))
{var temp__4092__auto___122489__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_122429,id_122428),renderer__$1);if(cljs.core.truth_(temp__4092__auto___122489__$2))
{var dom_122490 = temp__4092__auto___122489__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_122428], null),dom_122490);
var temp__4090__auto___122491 = (cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.meta.call(null,dom_122490);if(cljs.core.truth_(and__8211__auto__))
{var G__122261 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_122490));if(G__122261)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__122261.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__122261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__122261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__122261);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._parent_node.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_122490))).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_122429], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_122429], null)));if(cljs.core.truth_(temp__4090__auto___122491))
{var parent_122492 = temp__4090__auto___122491;dommy.core.append_BANG_.call(null,parent_122492,dom_122490);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_122490);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_122428,pid_122429);
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
var G__122493 = cljs.core.next.call(null,seq__122234__$1);
var G__122494 = null;
var G__122495 = 0;
var G__122496 = 0;
seq__122234 = G__122493;
chunk__122235 = G__122494;
count__122236 = G__122495;
i__122237 = G__122496;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__122262){var map__122263 = p__122262;var map__122263__$1 = ((cljs.core.seq_QMARK_.call(null,map__122263))?cljs.core.apply.call(null,cljs.core.hash_map,map__122263):map__122263);var deltas = cljs.core.get.call(null,map__122263__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__122264 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__122265 = null;var count__122266 = 0;var i__122267 = 0;while(true){
if((i__122267 < count__122266))
{var handler = cljs.core._nth.call(null,chunk__122265,i__122267);handler.dispose();
{
var G__122497 = seq__122264;
var G__122498 = chunk__122265;
var G__122499 = count__122266;
var G__122500 = (i__122267 + 1);
seq__122264 = G__122497;
chunk__122265 = G__122498;
count__122266 = G__122499;
i__122267 = G__122500;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__122264);if(temp__4092__auto__)
{var seq__122264__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__122264__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__122264__$1);{
var G__122501 = cljs.core.chunk_rest.call(null,seq__122264__$1);
var G__122502 = c__8952__auto__;
var G__122503 = cljs.core.count.call(null,c__8952__auto__);
var G__122504 = 0;
seq__122264 = G__122501;
chunk__122265 = G__122502;
count__122266 = G__122503;
i__122267 = G__122504;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__122264__$1);handler.dispose();
{
var G__122505 = cljs.core.next.call(null,seq__122264__$1);
var G__122506 = null;
var G__122507 = 0;
var G__122508 = 0;
seq__122264 = G__122505;
chunk__122265 = G__122506;
count__122266 = G__122507;
i__122267 = G__122508;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k122202,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k122202,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k122202,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k122202,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k122202,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k122202,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__122201){var self__ = this;
var this__8797__auto____$1 = this;var pred__122268 = cljs.core.keyword_identical_QMARK_;var expr__122269 = k__8798__auto__;if(cljs.core.truth_(pred__122268.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__122269)))
{return (new foundation.app.render.Renderer(G__122201,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__122268.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__122269)))
{return (new foundation.app.render.Renderer(self__.env,G__122201,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__122268.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__122269)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__122201,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__122268.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__122269)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__122201,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__122201),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__122201){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__122201,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__122203){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__122203),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__122203),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__122203),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__122203),null,cljs.core.dissoc.call(null,G__122203,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__122509,pid,id){var vec__122510 = p__122509;var op = cljs.core.nth.call(null,vec__122510,0,null);var path = cljs.core.nth.call(null,vec__122510,1,null);var _ = cljs.core.nth.call(null,vec__122510,2,null);var ___$1 = cljs.core.nth.call(null,vec__122510,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map