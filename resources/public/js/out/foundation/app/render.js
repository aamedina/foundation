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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__310736,pid,id){var vec__310737 = p__310736;var op = cljs.core.nth.call(null,vec__310737,0,null);var path = cljs.core.nth.call(null,vec__310737,1,null);var _ = cljs.core.nth.call(null,vec__310737,2,null);var ___$1 = cljs.core.nth.call(null,vec__310737,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj310739 = {};return obj310739;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__310740_SHARP_){return cljs.core.not.call(null,p1__310740_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__310742 = (new goog.events.EventHandler(renderer));G__310742.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__310742.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__310742,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__310742;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__310743_SHARP_){return cljs.core.get.call(null,n,p1__310743_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__310748 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__310749 = null;var count__310750 = 0;var i__310751 = 0;while(true){
if((i__310751 < count__310750))
{var f = cljs.core._nth.call(null,chunk__310749,i__310751);f.call(null);
{
var G__310752 = seq__310748;
var G__310753 = chunk__310749;
var G__310754 = count__310750;
var G__310755 = (i__310751 + 1);
seq__310748 = G__310752;
chunk__310749 = G__310753;
count__310750 = G__310754;
i__310751 = G__310755;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310748);if(temp__4092__auto__)
{var seq__310748__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310748__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310748__$1);{
var G__310756 = cljs.core.chunk_rest.call(null,seq__310748__$1);
var G__310757 = c__8952__auto__;
var G__310758 = cljs.core.count.call(null,c__8952__auto__);
var G__310759 = 0;
seq__310748 = G__310756;
chunk__310749 = G__310757;
count__310750 = G__310758;
i__310751 = G__310759;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__310748__$1);f.call(null);
{
var G__310760 = cljs.core.next.call(null,seq__310748__$1);
var G__310761 = null;
var G__310762 = 0;
var G__310763 = 0;
seq__310748 = G__310760;
chunk__310749 = G__310761;
count__310750 = G__310762;
i__310751 = G__310763;
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
foundation.app.render.IRenderer = (function (){var obj310765 = {};return obj310765;
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
foundation.app.render.IRender = (function (){var obj310767 = {};return obj310767;
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
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__310777 = x;var G__310777__$1 = (((function (){var G__310778 = x;if(G__310778)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310778.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__310778.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310778);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310778);
}
})())?foundation.app.render.extend_component.call(null,G__310777,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__310777);var G__310777__$2 = (((function (){var G__310779 = x;if(G__310779)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310779.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__310779.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310779);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__310777__$1);var G__310777__$3 = (((function (){var G__310780 = x;if(G__310780)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310780.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__310780.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310780);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310780);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__310777__$2);var G__310777__$4 = (((function (){var G__310781 = x;if(G__310781)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310781.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__310781.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310781);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__310777__$3);var G__310777__$5 = (((function (){var G__310782 = x;if(G__310782)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310782.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__310782.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310782);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310782);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__310777__$4);var G__310777__$6 = (((function (){var G__310783 = x;if(G__310783)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310783.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__310783.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__310783);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__310783);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__310777__$5);var G__310777__$7 = (((function (){var G__310784 = x;if(G__310784)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310784.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__310784.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310784);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310784);
}
})())?foundation.app.render.extend_component.call(null,G__310777__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__310777__$6);var G__310777__$8 = (((function (){var G__310785 = x;if(G__310785)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310785.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__310785.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__310785);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__310785);
}
})())?foundation.app.ui._render.call(null,G__310777__$7):G__310777__$7);return G__310777__$8;
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
var renderer__$1 = this;var registered = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_event","_event",3830565133),event_type], null));return cljs.core.filter.call(null,(function (x){var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(cljs.core.comp.call(null,new cljs.core.Keyword(null,"dom","dom",1014003892),cljs.core.meta).call(null,x).id)].join('')));return ((el.innerHTML === e.target.innerHTML)) || (dommy.core.descendant_QMARK_.call(null,el,e.target));
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__310790 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__310791 = null;var count__310792 = 0;var i__310793 = 0;while(true){
if((i__310793 < count__310792))
{var c = cljs.core._nth.call(null,chunk__310791,i__310793);var G__310794_310891 = c;var G__310794_310892__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__310796 = c;if(G__310796)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310796.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__310796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310796);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__310794_310891,e):G__310794_310891);var G__310794_310893__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__310798 = c;if(G__310798)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310798.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__310798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__310798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__310798);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__310794_310892__$1,e):G__310794_310892__$1);{
var G__310894 = seq__310790;
var G__310895 = chunk__310791;
var G__310896 = count__310792;
var G__310897 = (i__310793 + 1);
seq__310790 = G__310894;
chunk__310791 = G__310895;
count__310792 = G__310896;
i__310793 = G__310897;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310790);if(temp__4092__auto__)
{var seq__310790__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310790__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310790__$1);{
var G__310898 = cljs.core.chunk_rest.call(null,seq__310790__$1);
var G__310899 = c__8952__auto__;
var G__310900 = cljs.core.count.call(null,c__8952__auto__);
var G__310901 = 0;
seq__310790 = G__310898;
chunk__310791 = G__310899;
count__310792 = G__310900;
i__310793 = G__310901;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310790__$1);var G__310799_310902 = c;var G__310799_310903__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__310801 = c;if(G__310801)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310801.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__310801.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310801);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__310801);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__310799_310902,e):G__310799_310902);var G__310799_310904__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__310803 = c;if(G__310803)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310803.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__310803.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__310803);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__310803);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__310799_310903__$1,e):G__310799_310903__$1);{
var G__310905 = cljs.core.next.call(null,seq__310790__$1);
var G__310906 = null;
var G__310907 = 0;
var G__310908 = 0;
seq__310790 = G__310905;
chunk__310791 = G__310906;
count__310792 = G__310907;
i__310793 = G__310908;
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
var renderer__$1 = this;var seq__310804 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__310805 = null;var count__310806 = 0;var i__310807 = 0;while(true){
if((i__310807 < count__310806))
{var c = cljs.core._nth.call(null,chunk__310805,i__310807);if((function (){var G__310808 = c;if(G__310808)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310808.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__310808.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310808);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__310909 = seq__310804;
var G__310910 = chunk__310805;
var G__310911 = count__310806;
var G__310912 = (i__310807 + 1);
seq__310804 = G__310909;
chunk__310805 = G__310910;
count__310806 = G__310911;
i__310807 = G__310912;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310804);if(temp__4092__auto__)
{var seq__310804__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310804__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310804__$1);{
var G__310913 = cljs.core.chunk_rest.call(null,seq__310804__$1);
var G__310914 = c__8952__auto__;
var G__310915 = cljs.core.count.call(null,c__8952__auto__);
var G__310916 = 0;
seq__310804 = G__310913;
chunk__310805 = G__310914;
count__310806 = G__310915;
i__310807 = G__310916;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310804__$1);if((function (){var G__310809 = c;if(G__310809)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310809.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__310809.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__310809);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__310917 = cljs.core.next.call(null,seq__310804__$1);
var G__310918 = null;
var G__310919 = 0;
var G__310920 = 0;
seq__310804 = G__310917;
chunk__310805 = G__310918;
count__310806 = G__310919;
i__310807 = G__310920;
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
var renderer__$1 = this;var seq__310810 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__310811 = null;var count__310812 = 0;var i__310813 = 0;while(true){
if((i__310813 < count__310812))
{var c = cljs.core._nth.call(null,chunk__310811,i__310813);if((function (){var G__310814 = c;if(G__310814)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310814.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__310814.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310814);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310814);
}
})())
{var G__310815_310921 = c;var G__310815_310922__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__310815_310921,e):G__310815_310921);var G__310815_310923__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__310815_310922__$1,e):G__310815_310922__$1);} else
{}
{
var G__310924 = seq__310810;
var G__310925 = chunk__310811;
var G__310926 = count__310812;
var G__310927 = (i__310813 + 1);
seq__310810 = G__310924;
chunk__310811 = G__310925;
count__310812 = G__310926;
i__310813 = G__310927;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310810);if(temp__4092__auto__)
{var seq__310810__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310810__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310810__$1);{
var G__310928 = cljs.core.chunk_rest.call(null,seq__310810__$1);
var G__310929 = c__8952__auto__;
var G__310930 = cljs.core.count.call(null,c__8952__auto__);
var G__310931 = 0;
seq__310810 = G__310928;
chunk__310811 = G__310929;
count__310812 = G__310930;
i__310813 = G__310931;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310810__$1);if((function (){var G__310816 = c;if(G__310816)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310816.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__310816.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310816);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__310816);
}
})())
{var G__310817_310932 = c;var G__310817_310933__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__310817_310932,e):G__310817_310932);var G__310817_310934__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__310817_310933__$1,e):G__310817_310933__$1);} else
{}
{
var G__310935 = cljs.core.next.call(null,seq__310810__$1);
var G__310936 = null;
var G__310937 = 0;
var G__310938 = 0;
seq__310810 = G__310935;
chunk__310811 = G__310936;
count__310812 = G__310937;
i__310813 = G__310938;
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
var renderer__$1 = this;var seq__310818 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__310819 = null;var count__310820 = 0;var i__310821 = 0;while(true){
if((i__310821 < count__310820))
{var c = cljs.core._nth.call(null,chunk__310819,i__310821);if((function (){var G__310822 = c;if(G__310822)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310822.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__310822.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310822);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__310939 = seq__310818;
var G__310940 = chunk__310819;
var G__310941 = count__310820;
var G__310942 = (i__310821 + 1);
seq__310818 = G__310939;
chunk__310819 = G__310940;
count__310820 = G__310941;
i__310821 = G__310942;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310818);if(temp__4092__auto__)
{var seq__310818__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310818__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310818__$1);{
var G__310943 = cljs.core.chunk_rest.call(null,seq__310818__$1);
var G__310944 = c__8952__auto__;
var G__310945 = cljs.core.count.call(null,c__8952__auto__);
var G__310946 = 0;
seq__310818 = G__310943;
chunk__310819 = G__310944;
count__310820 = G__310945;
i__310821 = G__310946;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310818__$1);if((function (){var G__310823 = c;if(G__310823)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310823.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__310823.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310823);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__310823);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__310947 = cljs.core.next.call(null,seq__310818__$1);
var G__310948 = null;
var G__310949 = 0;
var G__310950 = 0;
seq__310818 = G__310947;
chunk__310819 = G__310948;
count__310820 = G__310949;
i__310821 = G__310950;
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
var renderer__$1 = this;var seq__310824 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__310825 = null;var count__310826 = 0;var i__310827 = 0;while(true){
if((i__310827 < count__310826))
{var c = cljs.core._nth.call(null,chunk__310825,i__310827);if((function (){var G__310828 = c;if(G__310828)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310828.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__310828.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__310828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__310828);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__310951 = seq__310824;
var G__310952 = chunk__310825;
var G__310953 = count__310826;
var G__310954 = (i__310827 + 1);
seq__310824 = G__310951;
chunk__310825 = G__310952;
count__310826 = G__310953;
i__310827 = G__310954;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310824);if(temp__4092__auto__)
{var seq__310824__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310824__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310824__$1);{
var G__310955 = cljs.core.chunk_rest.call(null,seq__310824__$1);
var G__310956 = c__8952__auto__;
var G__310957 = cljs.core.count.call(null,c__8952__auto__);
var G__310958 = 0;
seq__310824 = G__310955;
chunk__310825 = G__310956;
count__310826 = G__310957;
i__310827 = G__310958;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310824__$1);if((function (){var G__310829 = c;if(G__310829)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310829.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__310829.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__310829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__310829);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__310959 = cljs.core.next.call(null,seq__310824__$1);
var G__310960 = null;
var G__310961 = 0;
var G__310962 = 0;
seq__310824 = G__310959;
chunk__310825 = G__310960;
count__310826 = G__310961;
i__310827 = G__310962;
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
var renderer__$1 = this;var seq__310830 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__310831 = null;var count__310832 = 0;var i__310833 = 0;while(true){
if((i__310833 < count__310832))
{var c = cljs.core._nth.call(null,chunk__310831,i__310833);if((function (){var G__310834 = c;if(G__310834)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310834.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__310834.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310834);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310834);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__310963 = seq__310830;
var G__310964 = chunk__310831;
var G__310965 = count__310832;
var G__310966 = (i__310833 + 1);
seq__310830 = G__310963;
chunk__310831 = G__310964;
count__310832 = G__310965;
i__310833 = G__310966;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310830);if(temp__4092__auto__)
{var seq__310830__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310830__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310830__$1);{
var G__310967 = cljs.core.chunk_rest.call(null,seq__310830__$1);
var G__310968 = c__8952__auto__;
var G__310969 = cljs.core.count.call(null,c__8952__auto__);
var G__310970 = 0;
seq__310830 = G__310967;
chunk__310831 = G__310968;
count__310832 = G__310969;
i__310833 = G__310970;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310830__$1);if((function (){var G__310835 = c;if(G__310835)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310835.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__310835.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310835);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__310835);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__310971 = cljs.core.next.call(null,seq__310830__$1);
var G__310972 = null;
var G__310973 = 0;
var G__310974 = 0;
seq__310830 = G__310971;
chunk__310831 = G__310972;
count__310832 = G__310973;
i__310833 = G__310974;
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
var renderer__$1 = this;var seq__310836 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__310837 = null;var count__310838 = 0;var i__310839 = 0;while(true){
if((i__310839 < count__310838))
{var c = cljs.core._nth.call(null,chunk__310837,i__310839);if((function (){var G__310840 = c;if(G__310840)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310840.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__310840.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310840);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310840);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__310975 = seq__310836;
var G__310976 = chunk__310837;
var G__310977 = count__310838;
var G__310978 = (i__310839 + 1);
seq__310836 = G__310975;
chunk__310837 = G__310976;
count__310838 = G__310977;
i__310839 = G__310978;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310836);if(temp__4092__auto__)
{var seq__310836__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310836__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310836__$1);{
var G__310979 = cljs.core.chunk_rest.call(null,seq__310836__$1);
var G__310980 = c__8952__auto__;
var G__310981 = cljs.core.count.call(null,c__8952__auto__);
var G__310982 = 0;
seq__310836 = G__310979;
chunk__310837 = G__310980;
count__310838 = G__310981;
i__310839 = G__310982;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__310836__$1);if((function (){var G__310841 = c;if(G__310841)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310841.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__310841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__310841);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__310983 = cljs.core.next.call(null,seq__310836__$1);
var G__310984 = null;
var G__310985 = 0;
var G__310986 = 0;
seq__310836 = G__310983;
chunk__310837 = G__310984;
count__310838 = G__310985;
i__310839 = G__310986;
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
return (function (p__310842){var vec__310843 = p__310842;var op = cljs.core.nth.call(null,vec__310843,0,null);var path = cljs.core.nth.call(null,vec__310843,1,null);var _ = cljs.core.nth.call(null,vec__310843,2,null);var ___$1 = cljs.core.nth.call(null,vec__310843,3,null);var delta = vec__310843;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__310786_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__310786_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__310844 = cljs.core.seq.call(null,deltas__$1);var chunk__310845 = null;var count__310846 = 0;var i__310847 = 0;while(true){
if((i__310847 < count__310846))
{var vec__310848 = cljs.core._nth.call(null,chunk__310845,i__310847);var vec__310849 = cljs.core.nth.call(null,vec__310848,0,null);var op = cljs.core.nth.call(null,vec__310849,0,null);var path = cljs.core.nth.call(null,vec__310849,1,null);var _ = cljs.core.nth.call(null,vec__310849,2,null);var ___$1 = cljs.core.nth.call(null,vec__310849,3,null);var d = vec__310849;var f = cljs.core.nth.call(null,vec__310848,1,null);var id_310987 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_310988 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__310850_310989 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__310850_310989))
{var seq__310851_310990 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_310988));var chunk__310852_310991 = null;var count__310853_310992 = 0;var i__310854_310993 = 0;while(true){
if((i__310854_310993 < count__310853_310992))
{var dep_310994 = cljs.core._nth.call(null,chunk__310852_310991,i__310854_310993);var dep_pid_310995 = foundation.app.render._parent_id.call(null,renderer__$1,dep_310994);var temp__4092__auto___310996__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_310994], null));if(cljs.core.truth_(temp__4092__auto___310996__$1))
{var old_content_310997 = temp__4092__auto___310996__$1;dommy.core.remove_BANG_.call(null,old_content_310997);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_310994], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_310994], null));
{
var G__310998 = seq__310851_310990;
var G__310999 = chunk__310852_310991;
var G__311000 = count__310853_310992;
var G__311001 = (i__310854_310993 + 1);
seq__310851_310990 = G__310998;
chunk__310852_310991 = G__310999;
count__310853_310992 = G__311000;
i__310854_310993 = G__311001;
continue;
}
} else
{var temp__4092__auto___311002__$1 = cljs.core.seq.call(null,seq__310851_310990);if(temp__4092__auto___311002__$1)
{var seq__310851_311003__$1 = temp__4092__auto___311002__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310851_311003__$1))
{var c__8952__auto___311004 = cljs.core.chunk_first.call(null,seq__310851_311003__$1);{
var G__311005 = cljs.core.chunk_rest.call(null,seq__310851_311003__$1);
var G__311006 = c__8952__auto___311004;
var G__311007 = cljs.core.count.call(null,c__8952__auto___311004);
var G__311008 = 0;
seq__310851_310990 = G__311005;
chunk__310852_310991 = G__311006;
count__310853_310992 = G__311007;
i__310854_310993 = G__311008;
continue;
}
} else
{var dep_311009 = cljs.core.first.call(null,seq__310851_311003__$1);var dep_pid_311010 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311009);var temp__4092__auto___311011__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311009], null));if(cljs.core.truth_(temp__4092__auto___311011__$2))
{var old_content_311012 = temp__4092__auto___311011__$2;dommy.core.remove_BANG_.call(null,old_content_311012);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311009], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311009], null));
{
var G__311013 = cljs.core.next.call(null,seq__310851_311003__$1);
var G__311014 = null;
var G__311015 = 0;
var G__311016 = 0;
seq__310851_310990 = G__311013;
chunk__310852_310991 = G__311014;
count__310853_310992 = G__311015;
i__310854_310993 = G__311016;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__310850_310989))
{var seq__310855_311017 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_310988));var chunk__310856_311018 = null;var count__310857_311019 = 0;var i__310858_311020 = 0;while(true){
if((i__310858_311020 < count__310857_311019))
{var dep_311021 = cljs.core._nth.call(null,chunk__310856_311018,i__310858_311020);var dep_pid_311022 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311021);var temp__4092__auto___311023__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_311022,dep_311021),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311023__$1))
{var dom_content_311024 = temp__4092__auto___311023__$1;var temp__4092__auto___311025__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311021], null));if(cljs.core.truth_(temp__4092__auto___311025__$2))
{var old_content_311026 = temp__4092__auto___311025__$2;dommy.core.replace_BANG_.call(null,old_content_311026,dom_content_311024);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311021], null),dom_content_311024);
} else
{}
{
var G__311027 = seq__310855_311017;
var G__311028 = chunk__310856_311018;
var G__311029 = count__310857_311019;
var G__311030 = (i__310858_311020 + 1);
seq__310855_311017 = G__311027;
chunk__310856_311018 = G__311028;
count__310857_311019 = G__311029;
i__310858_311020 = G__311030;
continue;
}
} else
{var temp__4092__auto___311031__$1 = cljs.core.seq.call(null,seq__310855_311017);if(temp__4092__auto___311031__$1)
{var seq__310855_311032__$1 = temp__4092__auto___311031__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310855_311032__$1))
{var c__8952__auto___311033 = cljs.core.chunk_first.call(null,seq__310855_311032__$1);{
var G__311034 = cljs.core.chunk_rest.call(null,seq__310855_311032__$1);
var G__311035 = c__8952__auto___311033;
var G__311036 = cljs.core.count.call(null,c__8952__auto___311033);
var G__311037 = 0;
seq__310855_311017 = G__311034;
chunk__310856_311018 = G__311035;
count__310857_311019 = G__311036;
i__310858_311020 = G__311037;
continue;
}
} else
{var dep_311038 = cljs.core.first.call(null,seq__310855_311032__$1);var dep_pid_311039 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311038);var temp__4092__auto___311040__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_311039,dep_311038),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311040__$2))
{var dom_content_311041 = temp__4092__auto___311040__$2;var temp__4092__auto___311042__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311038], null));if(cljs.core.truth_(temp__4092__auto___311042__$3))
{var old_content_311043 = temp__4092__auto___311042__$3;dommy.core.replace_BANG_.call(null,old_content_311043,dom_content_311041);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311038], null),dom_content_311041);
} else
{}
{
var G__311044 = cljs.core.next.call(null,seq__310855_311032__$1);
var G__311045 = null;
var G__311046 = 0;
var G__311047 = 0;
seq__310855_311017 = G__311044;
chunk__310856_311018 = G__311045;
count__310857_311019 = G__311046;
i__310858_311020 = G__311047;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__310850_310989))
{var temp__4092__auto___311048__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_310988,id_310987),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311048__$1))
{var dom_311049 = temp__4092__auto___311048__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_310987], null),dom_311049);
var c_311050 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_311049));var children_311051 = (((function (){var G__310859 = c_311050;if(G__310859)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310859.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__310859.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__310859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__310859);
}
})())?cljs.core.map.call(null,((function (seq__310844,chunk__310845,count__310846,i__310847,c_311050,dom_311049,temp__4092__auto___311048__$1,G__310850_310989,id_310987,pid_310988,vec__310848,vec__310849,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_311049).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__310844,chunk__310845,count__310846,i__310847,c_311050,dom_311049,temp__4092__auto___311048__$1,G__310850_310989,id_310987,pid_310988,vec__310848,vec__310849,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns))
,foundation.app.ui._with_children.call(null,c_311050)):null);var parent_311052 = (((function (){var G__310860 = c_311050;if(G__310860)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310860.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__310860.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__310860);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__310860);
}
})())?foundation.app.ui._parent_node.call(null,c_311050).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_310988], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_310988], null)));var seq__310861_311053 = cljs.core.seq.call(null,children_311051);var chunk__310862_311054 = null;var count__310863_311055 = 0;var i__310864_311056 = 0;while(true){
if((i__310864_311056 < count__310863_311055))
{var child_311057 = cljs.core._nth.call(null,chunk__310862_311054,i__310864_311056);cljs.core.println.call(null,child_311057);
{
var G__311058 = seq__310861_311053;
var G__311059 = chunk__310862_311054;
var G__311060 = count__310863_311055;
var G__311061 = (i__310864_311056 + 1);
seq__310861_311053 = G__311058;
chunk__310862_311054 = G__311059;
count__310863_311055 = G__311060;
i__310864_311056 = G__311061;
continue;
}
} else
{var temp__4092__auto___311062__$2 = cljs.core.seq.call(null,seq__310861_311053);if(temp__4092__auto___311062__$2)
{var seq__310861_311063__$1 = temp__4092__auto___311062__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310861_311063__$1))
{var c__8952__auto___311064 = cljs.core.chunk_first.call(null,seq__310861_311063__$1);{
var G__311065 = cljs.core.chunk_rest.call(null,seq__310861_311063__$1);
var G__311066 = c__8952__auto___311064;
var G__311067 = cljs.core.count.call(null,c__8952__auto___311064);
var G__311068 = 0;
seq__310861_311053 = G__311065;
chunk__310862_311054 = G__311066;
count__310863_311055 = G__311067;
i__310864_311056 = G__311068;
continue;
}
} else
{var child_311069 = cljs.core.first.call(null,seq__310861_311063__$1);cljs.core.println.call(null,child_311069);
{
var G__311070 = cljs.core.next.call(null,seq__310861_311063__$1);
var G__311071 = null;
var G__311072 = 0;
var G__311073 = 0;
seq__310861_311053 = G__311070;
chunk__310862_311054 = G__311071;
count__310863_311055 = G__311072;
i__310864_311056 = G__311073;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_311052))
{dommy.core.append_BANG_.call(null,parent_311052,dom_311049);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_311049);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_310987,pid_310988);
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
var G__311074 = seq__310844;
var G__311075 = chunk__310845;
var G__311076 = count__310846;
var G__311077 = (i__310847 + 1);
seq__310844 = G__311074;
chunk__310845 = G__311075;
count__310846 = G__311076;
i__310847 = G__311077;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__310844);if(temp__4092__auto____$1)
{var seq__310844__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310844__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310844__$1);{
var G__311078 = cljs.core.chunk_rest.call(null,seq__310844__$1);
var G__311079 = c__8952__auto__;
var G__311080 = cljs.core.count.call(null,c__8952__auto__);
var G__311081 = 0;
seq__310844 = G__311078;
chunk__310845 = G__311079;
count__310846 = G__311080;
i__310847 = G__311081;
continue;
}
} else
{var vec__310865 = cljs.core.first.call(null,seq__310844__$1);var vec__310866 = cljs.core.nth.call(null,vec__310865,0,null);var op = cljs.core.nth.call(null,vec__310866,0,null);var path = cljs.core.nth.call(null,vec__310866,1,null);var _ = cljs.core.nth.call(null,vec__310866,2,null);var ___$1 = cljs.core.nth.call(null,vec__310866,3,null);var d = vec__310866;var f = cljs.core.nth.call(null,vec__310865,1,null);var id_311082 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_311083 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__310867_311084 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__310867_311084))
{var seq__310868_311085 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_311083));var chunk__310869_311086 = null;var count__310870_311087 = 0;var i__310871_311088 = 0;while(true){
if((i__310871_311088 < count__310870_311087))
{var dep_311089 = cljs.core._nth.call(null,chunk__310869_311086,i__310871_311088);var dep_pid_311090 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311089);var temp__4092__auto___311091__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311089], null));if(cljs.core.truth_(temp__4092__auto___311091__$2))
{var old_content_311092 = temp__4092__auto___311091__$2;dommy.core.remove_BANG_.call(null,old_content_311092);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311089], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311089], null));
{
var G__311093 = seq__310868_311085;
var G__311094 = chunk__310869_311086;
var G__311095 = count__310870_311087;
var G__311096 = (i__310871_311088 + 1);
seq__310868_311085 = G__311093;
chunk__310869_311086 = G__311094;
count__310870_311087 = G__311095;
i__310871_311088 = G__311096;
continue;
}
} else
{var temp__4092__auto___311097__$2 = cljs.core.seq.call(null,seq__310868_311085);if(temp__4092__auto___311097__$2)
{var seq__310868_311098__$1 = temp__4092__auto___311097__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310868_311098__$1))
{var c__8952__auto___311099 = cljs.core.chunk_first.call(null,seq__310868_311098__$1);{
var G__311100 = cljs.core.chunk_rest.call(null,seq__310868_311098__$1);
var G__311101 = c__8952__auto___311099;
var G__311102 = cljs.core.count.call(null,c__8952__auto___311099);
var G__311103 = 0;
seq__310868_311085 = G__311100;
chunk__310869_311086 = G__311101;
count__310870_311087 = G__311102;
i__310871_311088 = G__311103;
continue;
}
} else
{var dep_311104 = cljs.core.first.call(null,seq__310868_311098__$1);var dep_pid_311105 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311104);var temp__4092__auto___311106__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311104], null));if(cljs.core.truth_(temp__4092__auto___311106__$3))
{var old_content_311107 = temp__4092__auto___311106__$3;dommy.core.remove_BANG_.call(null,old_content_311107);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311104], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311104], null));
{
var G__311108 = cljs.core.next.call(null,seq__310868_311098__$1);
var G__311109 = null;
var G__311110 = 0;
var G__311111 = 0;
seq__310868_311085 = G__311108;
chunk__310869_311086 = G__311109;
count__310870_311087 = G__311110;
i__310871_311088 = G__311111;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__310867_311084))
{var seq__310872_311112 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_311083));var chunk__310873_311113 = null;var count__310874_311114 = 0;var i__310875_311115 = 0;while(true){
if((i__310875_311115 < count__310874_311114))
{var dep_311116 = cljs.core._nth.call(null,chunk__310873_311113,i__310875_311115);var dep_pid_311117 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311116);var temp__4092__auto___311118__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_311117,dep_311116),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311118__$2))
{var dom_content_311119 = temp__4092__auto___311118__$2;var temp__4092__auto___311120__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311116], null));if(cljs.core.truth_(temp__4092__auto___311120__$3))
{var old_content_311121 = temp__4092__auto___311120__$3;dommy.core.replace_BANG_.call(null,old_content_311121,dom_content_311119);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311116], null),dom_content_311119);
} else
{}
{
var G__311122 = seq__310872_311112;
var G__311123 = chunk__310873_311113;
var G__311124 = count__310874_311114;
var G__311125 = (i__310875_311115 + 1);
seq__310872_311112 = G__311122;
chunk__310873_311113 = G__311123;
count__310874_311114 = G__311124;
i__310875_311115 = G__311125;
continue;
}
} else
{var temp__4092__auto___311126__$2 = cljs.core.seq.call(null,seq__310872_311112);if(temp__4092__auto___311126__$2)
{var seq__310872_311127__$1 = temp__4092__auto___311126__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310872_311127__$1))
{var c__8952__auto___311128 = cljs.core.chunk_first.call(null,seq__310872_311127__$1);{
var G__311129 = cljs.core.chunk_rest.call(null,seq__310872_311127__$1);
var G__311130 = c__8952__auto___311128;
var G__311131 = cljs.core.count.call(null,c__8952__auto___311128);
var G__311132 = 0;
seq__310872_311112 = G__311129;
chunk__310873_311113 = G__311130;
count__310874_311114 = G__311131;
i__310875_311115 = G__311132;
continue;
}
} else
{var dep_311133 = cljs.core.first.call(null,seq__310872_311127__$1);var dep_pid_311134 = foundation.app.render._parent_id.call(null,renderer__$1,dep_311133);var temp__4092__auto___311135__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,dep_pid_311134,dep_311133),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311135__$3))
{var dom_content_311136 = temp__4092__auto___311135__$3;var temp__4092__auto___311137__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311133], null));if(cljs.core.truth_(temp__4092__auto___311137__$4))
{var old_content_311138 = temp__4092__auto___311137__$4;dommy.core.replace_BANG_.call(null,old_content_311138,dom_content_311136);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_311133], null),dom_content_311136);
} else
{}
{
var G__311139 = cljs.core.next.call(null,seq__310872_311127__$1);
var G__311140 = null;
var G__311141 = 0;
var G__311142 = 0;
seq__310872_311112 = G__311139;
chunk__310873_311113 = G__311140;
count__310874_311114 = G__311141;
i__310875_311115 = G__311142;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__310867_311084))
{var temp__4092__auto___311143__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,pid_311083,id_311082),renderer__$1);if(cljs.core.truth_(temp__4092__auto___311143__$2))
{var dom_311144 = temp__4092__auto___311143__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_311082], null),dom_311144);
var c_311145 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_311144));var children_311146 = (((function (){var G__310876 = c_311145;if(G__310876)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310876.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__310876.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__310876);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__310876);
}
})())?cljs.core.map.call(null,((function (seq__310844,chunk__310845,count__310846,i__310847,c_311145,dom_311144,temp__4092__auto___311143__$2,G__310867_311084,id_311082,pid_311083,vec__310865,vec__310866,op,path,_,___$1,d,f,seq__310844__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_311144).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__310844,chunk__310845,count__310846,i__310847,c_311145,dom_311144,temp__4092__auto___311143__$2,G__310867_311084,id_311082,pid_311083,vec__310865,vec__310866,op,path,_,___$1,d,f,seq__310844__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns))
,foundation.app.ui._with_children.call(null,c_311145)):null);var parent_311147 = (((function (){var G__310877 = c_311145;if(G__310877)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__310877.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__310877.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__310877);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__310877);
}
})())?foundation.app.ui._parent_node.call(null,c_311145).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_311083], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_311083], null)));var seq__310878_311148 = cljs.core.seq.call(null,children_311146);var chunk__310879_311149 = null;var count__310880_311150 = 0;var i__310881_311151 = 0;while(true){
if((i__310881_311151 < count__310880_311150))
{var child_311152 = cljs.core._nth.call(null,chunk__310879_311149,i__310881_311151);cljs.core.println.call(null,child_311152);
{
var G__311153 = seq__310878_311148;
var G__311154 = chunk__310879_311149;
var G__311155 = count__310880_311150;
var G__311156 = (i__310881_311151 + 1);
seq__310878_311148 = G__311153;
chunk__310879_311149 = G__311154;
count__310880_311150 = G__311155;
i__310881_311151 = G__311156;
continue;
}
} else
{var temp__4092__auto___311157__$3 = cljs.core.seq.call(null,seq__310878_311148);if(temp__4092__auto___311157__$3)
{var seq__310878_311158__$1 = temp__4092__auto___311157__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310878_311158__$1))
{var c__8952__auto___311159 = cljs.core.chunk_first.call(null,seq__310878_311158__$1);{
var G__311160 = cljs.core.chunk_rest.call(null,seq__310878_311158__$1);
var G__311161 = c__8952__auto___311159;
var G__311162 = cljs.core.count.call(null,c__8952__auto___311159);
var G__311163 = 0;
seq__310878_311148 = G__311160;
chunk__310879_311149 = G__311161;
count__310880_311150 = G__311162;
i__310881_311151 = G__311163;
continue;
}
} else
{var child_311164 = cljs.core.first.call(null,seq__310878_311158__$1);cljs.core.println.call(null,child_311164);
{
var G__311165 = cljs.core.next.call(null,seq__310878_311158__$1);
var G__311166 = null;
var G__311167 = 0;
var G__311168 = 0;
seq__310878_311148 = G__311165;
chunk__310879_311149 = G__311166;
count__310880_311150 = G__311167;
i__310881_311151 = G__311168;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_311147))
{dommy.core.append_BANG_.call(null,parent_311147,dom_311144);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_311144);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_311082,pid_311083);
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
var G__311169 = cljs.core.next.call(null,seq__310844__$1);
var G__311170 = null;
var G__311171 = 0;
var G__311172 = 0;
seq__310844 = G__311169;
chunk__310845 = G__311170;
count__310846 = G__311171;
i__310847 = G__311172;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__310882){var map__310883 = p__310882;var map__310883__$1 = ((cljs.core.seq_QMARK_.call(null,map__310883))?cljs.core.apply.call(null,cljs.core.hash_map,map__310883):map__310883);var deltas = cljs.core.get.call(null,map__310883__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__310884 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__310885 = null;var count__310886 = 0;var i__310887 = 0;while(true){
if((i__310887 < count__310886))
{var handler = cljs.core._nth.call(null,chunk__310885,i__310887);handler.dispose();
{
var G__311173 = seq__310884;
var G__311174 = chunk__310885;
var G__311175 = count__310886;
var G__311176 = (i__310887 + 1);
seq__310884 = G__311173;
chunk__310885 = G__311174;
count__310886 = G__311175;
i__310887 = G__311176;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__310884);if(temp__4092__auto__)
{var seq__310884__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__310884__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__310884__$1);{
var G__311177 = cljs.core.chunk_rest.call(null,seq__310884__$1);
var G__311178 = c__8952__auto__;
var G__311179 = cljs.core.count.call(null,c__8952__auto__);
var G__311180 = 0;
seq__310884 = G__311177;
chunk__310885 = G__311178;
count__310886 = G__311179;
i__310887 = G__311180;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__310884__$1);handler.dispose();
{
var G__311181 = cljs.core.next.call(null,seq__310884__$1);
var G__311182 = null;
var G__311183 = 0;
var G__311184 = 0;
seq__310884 = G__311181;
chunk__310885 = G__311182;
count__310886 = G__311183;
i__310887 = G__311184;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k310788,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k310788,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k310788,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k310788,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k310788,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k310788,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__310787){var self__ = this;
var this__8797__auto____$1 = this;var pred__310888 = cljs.core.keyword_identical_QMARK_;var expr__310889 = k__8798__auto__;if(cljs.core.truth_(pred__310888.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__310889)))
{return (new foundation.app.render.Renderer(G__310787,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__310888.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__310889)))
{return (new foundation.app.render.Renderer(self__.env,G__310787,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__310888.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__310889)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__310787,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__310888.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__310889)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__310787,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__310787),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__310787){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__310787,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__310789){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__310789),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__310789),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__310789),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__310789),null,cljs.core.dissoc.call(null,G__310789,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__311185,pid,id){var vec__311186 = p__311185;var op = cljs.core.nth.call(null,vec__311186,0,null);var path = cljs.core.nth.call(null,vec__311186,1,null);var _ = cljs.core.nth.call(null,vec__311186,2,null);var ___$1 = cljs.core.nth.call(null,vec__311186,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map