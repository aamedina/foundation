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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__393577,input_queue,pid,id){var vec__393578 = p__393577;var op = cljs.core.nth.call(null,vec__393578,0,null);var path = cljs.core.nth.call(null,vec__393578,1,null);var _ = cljs.core.nth.call(null,vec__393578,2,null);var ___$1 = cljs.core.nth.call(null,vec__393578,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj393580 = {};return obj393580;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__393581_SHARP_){return cljs.core.not.call(null,p1__393581_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__393583 = (new goog.events.EventHandler(renderer));G__393583.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__393583.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__393583,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__393583;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__393584_SHARP_){return cljs.core.get.call(null,n,p1__393584_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__393589 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__393590 = null;var count__393591 = 0;var i__393592 = 0;while(true){
if((i__393592 < count__393591))
{var f = cljs.core._nth.call(null,chunk__393590,i__393592);f.call(null);
{
var G__393593 = seq__393589;
var G__393594 = chunk__393590;
var G__393595 = count__393591;
var G__393596 = (i__393592 + 1);
seq__393589 = G__393593;
chunk__393590 = G__393594;
count__393591 = G__393595;
i__393592 = G__393596;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393589);if(temp__4092__auto__)
{var seq__393589__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393589__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393589__$1);{
var G__393597 = cljs.core.chunk_rest.call(null,seq__393589__$1);
var G__393598 = c__8952__auto__;
var G__393599 = cljs.core.count.call(null,c__8952__auto__);
var G__393600 = 0;
seq__393589 = G__393597;
chunk__393590 = G__393598;
count__393591 = G__393599;
i__393592 = G__393600;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__393589__$1);f.call(null);
{
var G__393601 = cljs.core.next.call(null,seq__393589__$1);
var G__393602 = null;
var G__393603 = 0;
var G__393604 = 0;
seq__393589 = G__393601;
chunk__393590 = G__393602;
count__393591 = G__393603;
i__393592 = G__393604;
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
foundation.app.render.IRenderer = (function (){var obj393606 = {};return obj393606;
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
foundation.app.render.IRender = (function (){var obj393608 = {};return obj393608;
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
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__393618 = x;var G__393618__$1 = (((function (){var G__393619 = x;if(G__393619)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393619.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__393619.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393619);
}
})())?foundation.app.render.extend_component.call(null,G__393618,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__393618);var G__393618__$2 = (((function (){var G__393620 = x;if(G__393620)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393620.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__393620.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393620);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__393618__$1);var G__393618__$3 = (((function (){var G__393621 = x;if(G__393621)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393621.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__393621.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393621);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393621);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__393618__$2);var G__393618__$4 = (((function (){var G__393622 = x;if(G__393622)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393622.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__393622.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393622);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393622);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__393618__$3);var G__393618__$5 = (((function (){var G__393623 = x;if(G__393623)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393623.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__393623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393623);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__393618__$4);var G__393618__$6 = (((function (){var G__393624 = x;if(G__393624)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393624.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__393624.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__393624);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__393624);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__393618__$5);var G__393618__$7 = (((function (){var G__393625 = x;if(G__393625)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393625.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__393625.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393625);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393625);
}
})())?foundation.app.render.extend_component.call(null,G__393618__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__393618__$6);var G__393618__$8 = (((function (){var G__393626 = x;if(G__393626)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393626.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__393626.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393626);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393626);
}
})())?foundation.app.ui._render.call(null,G__393618__$7):G__393618__$7);return G__393618__$8;
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
{var G__393631 = x;if(G__393631)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto____$2 = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto____$2))
{return or__8223__auto____$2;
} else
{return G__393631.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__393631.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393631);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393631);
}
}
}
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__393632 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__393633 = null;var count__393634 = 0;var i__393635 = 0;while(true){
if((i__393635 < count__393634))
{var c = cljs.core._nth.call(null,chunk__393633,i__393635);var G__393636_393747 = c;var G__393636_393748__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__393638 = c;if(G__393638)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393638.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__393638.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393638);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393638);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__393636_393747,e):G__393636_393747);var G__393636_393749__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__393640 = c;if(G__393640)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393640.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__393640.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__393640);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__393640);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__393636_393748__$1,e):G__393636_393748__$1);{
var G__393750 = seq__393632;
var G__393751 = chunk__393633;
var G__393752 = count__393634;
var G__393753 = (i__393635 + 1);
seq__393632 = G__393750;
chunk__393633 = G__393751;
count__393634 = G__393752;
i__393635 = G__393753;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393632);if(temp__4092__auto__)
{var seq__393632__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393632__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393632__$1);{
var G__393754 = cljs.core.chunk_rest.call(null,seq__393632__$1);
var G__393755 = c__8952__auto__;
var G__393756 = cljs.core.count.call(null,c__8952__auto__);
var G__393757 = 0;
seq__393632 = G__393754;
chunk__393633 = G__393755;
count__393634 = G__393756;
i__393635 = G__393757;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393632__$1);var G__393641_393758 = c;var G__393641_393759__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__393643 = c;if(G__393643)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393643.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__393643.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393643);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__393643);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__393641_393758,e):G__393641_393758);var G__393641_393760__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__393645 = c;if(G__393645)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393645.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__393645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__393645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__393645);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__393641_393759__$1,e):G__393641_393759__$1);{
var G__393761 = cljs.core.next.call(null,seq__393632__$1);
var G__393762 = null;
var G__393763 = 0;
var G__393764 = 0;
seq__393632 = G__393761;
chunk__393633 = G__393762;
count__393634 = G__393763;
i__393635 = G__393764;
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
var renderer__$1 = this;var seq__393646 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__393647 = null;var count__393648 = 0;var i__393649 = 0;while(true){
if((i__393649 < count__393648))
{var c = cljs.core._nth.call(null,chunk__393647,i__393649);if((function (){var G__393650 = c;if(G__393650)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393650.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__393650.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393650);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393650);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__393765 = seq__393646;
var G__393766 = chunk__393647;
var G__393767 = count__393648;
var G__393768 = (i__393649 + 1);
seq__393646 = G__393765;
chunk__393647 = G__393766;
count__393648 = G__393767;
i__393649 = G__393768;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393646);if(temp__4092__auto__)
{var seq__393646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393646__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393646__$1);{
var G__393769 = cljs.core.chunk_rest.call(null,seq__393646__$1);
var G__393770 = c__8952__auto__;
var G__393771 = cljs.core.count.call(null,c__8952__auto__);
var G__393772 = 0;
seq__393646 = G__393769;
chunk__393647 = G__393770;
count__393648 = G__393771;
i__393649 = G__393772;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393646__$1);if((function (){var G__393651 = c;if(G__393651)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393651.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__393651.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393651);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__393651);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__393773 = cljs.core.next.call(null,seq__393646__$1);
var G__393774 = null;
var G__393775 = 0;
var G__393776 = 0;
seq__393646 = G__393773;
chunk__393647 = G__393774;
count__393648 = G__393775;
i__393649 = G__393776;
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
var renderer__$1 = this;var seq__393652 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__393653 = null;var count__393654 = 0;var i__393655 = 0;while(true){
if((i__393655 < count__393654))
{var c = cljs.core._nth.call(null,chunk__393653,i__393655);if((function (){var G__393656 = c;if(G__393656)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393656.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__393656.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393656);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393656);
}
})())
{var G__393657_393777 = c;var G__393657_393778__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__393657_393777,e):G__393657_393777);var G__393657_393779__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__393657_393778__$1,e):G__393657_393778__$1);} else
{}
{
var G__393780 = seq__393652;
var G__393781 = chunk__393653;
var G__393782 = count__393654;
var G__393783 = (i__393655 + 1);
seq__393652 = G__393780;
chunk__393653 = G__393781;
count__393654 = G__393782;
i__393655 = G__393783;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393652);if(temp__4092__auto__)
{var seq__393652__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393652__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393652__$1);{
var G__393784 = cljs.core.chunk_rest.call(null,seq__393652__$1);
var G__393785 = c__8952__auto__;
var G__393786 = cljs.core.count.call(null,c__8952__auto__);
var G__393787 = 0;
seq__393652 = G__393784;
chunk__393653 = G__393785;
count__393654 = G__393786;
i__393655 = G__393787;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393652__$1);if((function (){var G__393658 = c;if(G__393658)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393658.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__393658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__393658);
}
})())
{var G__393659_393788 = c;var G__393659_393789__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__393659_393788,e):G__393659_393788);var G__393659_393790__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__393659_393789__$1,e):G__393659_393789__$1);} else
{}
{
var G__393791 = cljs.core.next.call(null,seq__393652__$1);
var G__393792 = null;
var G__393793 = 0;
var G__393794 = 0;
seq__393652 = G__393791;
chunk__393653 = G__393792;
count__393654 = G__393793;
i__393655 = G__393794;
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
var renderer__$1 = this;var seq__393660 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__393661 = null;var count__393662 = 0;var i__393663 = 0;while(true){
if((i__393663 < count__393662))
{var c = cljs.core._nth.call(null,chunk__393661,i__393663);if((function (){var G__393664 = c;if(G__393664)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393664.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__393664.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393664);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__393795 = seq__393660;
var G__393796 = chunk__393661;
var G__393797 = count__393662;
var G__393798 = (i__393663 + 1);
seq__393660 = G__393795;
chunk__393661 = G__393796;
count__393662 = G__393797;
i__393663 = G__393798;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393660);if(temp__4092__auto__)
{var seq__393660__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393660__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393660__$1);{
var G__393799 = cljs.core.chunk_rest.call(null,seq__393660__$1);
var G__393800 = c__8952__auto__;
var G__393801 = cljs.core.count.call(null,c__8952__auto__);
var G__393802 = 0;
seq__393660 = G__393799;
chunk__393661 = G__393800;
count__393662 = G__393801;
i__393663 = G__393802;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393660__$1);if((function (){var G__393665 = c;if(G__393665)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393665.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__393665.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__393665);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__393803 = cljs.core.next.call(null,seq__393660__$1);
var G__393804 = null;
var G__393805 = 0;
var G__393806 = 0;
seq__393660 = G__393803;
chunk__393661 = G__393804;
count__393662 = G__393805;
i__393663 = G__393806;
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
var renderer__$1 = this;var seq__393666 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__393667 = null;var count__393668 = 0;var i__393669 = 0;while(true){
if((i__393669 < count__393668))
{var c = cljs.core._nth.call(null,chunk__393667,i__393669);if((function (){var G__393670 = c;if(G__393670)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393670.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__393670.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__393670);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__393670);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__393807 = seq__393666;
var G__393808 = chunk__393667;
var G__393809 = count__393668;
var G__393810 = (i__393669 + 1);
seq__393666 = G__393807;
chunk__393667 = G__393808;
count__393668 = G__393809;
i__393669 = G__393810;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393666);if(temp__4092__auto__)
{var seq__393666__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393666__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393666__$1);{
var G__393811 = cljs.core.chunk_rest.call(null,seq__393666__$1);
var G__393812 = c__8952__auto__;
var G__393813 = cljs.core.count.call(null,c__8952__auto__);
var G__393814 = 0;
seq__393666 = G__393811;
chunk__393667 = G__393812;
count__393668 = G__393813;
i__393669 = G__393814;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393666__$1);if((function (){var G__393671 = c;if(G__393671)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393671.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__393671.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__393671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__393671);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__393815 = cljs.core.next.call(null,seq__393666__$1);
var G__393816 = null;
var G__393817 = 0;
var G__393818 = 0;
seq__393666 = G__393815;
chunk__393667 = G__393816;
count__393668 = G__393817;
i__393669 = G__393818;
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
var renderer__$1 = this;var seq__393672 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__393673 = null;var count__393674 = 0;var i__393675 = 0;while(true){
if((i__393675 < count__393674))
{var c = cljs.core._nth.call(null,chunk__393673,i__393675);if((function (){var G__393676 = c;if(G__393676)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393676.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__393676.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393676);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__393819 = seq__393672;
var G__393820 = chunk__393673;
var G__393821 = count__393674;
var G__393822 = (i__393675 + 1);
seq__393672 = G__393819;
chunk__393673 = G__393820;
count__393674 = G__393821;
i__393675 = G__393822;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393672);if(temp__4092__auto__)
{var seq__393672__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393672__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393672__$1);{
var G__393823 = cljs.core.chunk_rest.call(null,seq__393672__$1);
var G__393824 = c__8952__auto__;
var G__393825 = cljs.core.count.call(null,c__8952__auto__);
var G__393826 = 0;
seq__393672 = G__393823;
chunk__393673 = G__393824;
count__393674 = G__393825;
i__393675 = G__393826;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393672__$1);if((function (){var G__393677 = c;if(G__393677)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393677.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__393677.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393677);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__393677);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__393827 = cljs.core.next.call(null,seq__393672__$1);
var G__393828 = null;
var G__393829 = 0;
var G__393830 = 0;
seq__393672 = G__393827;
chunk__393673 = G__393828;
count__393674 = G__393829;
i__393675 = G__393830;
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
var renderer__$1 = this;var seq__393678 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__393679 = null;var count__393680 = 0;var i__393681 = 0;while(true){
if((i__393681 < count__393680))
{var c = cljs.core._nth.call(null,chunk__393679,i__393681);if((function (){var G__393682 = c;if(G__393682)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393682.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__393682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393682);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__393831 = seq__393678;
var G__393832 = chunk__393679;
var G__393833 = count__393680;
var G__393834 = (i__393681 + 1);
seq__393678 = G__393831;
chunk__393679 = G__393832;
count__393680 = G__393833;
i__393681 = G__393834;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393678);if(temp__4092__auto__)
{var seq__393678__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393678__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393678__$1);{
var G__393835 = cljs.core.chunk_rest.call(null,seq__393678__$1);
var G__393836 = c__8952__auto__;
var G__393837 = cljs.core.count.call(null,c__8952__auto__);
var G__393838 = 0;
seq__393678 = G__393835;
chunk__393679 = G__393836;
count__393680 = G__393837;
i__393681 = G__393838;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__393678__$1);if((function (){var G__393683 = c;if(G__393683)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393683.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__393683.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393683);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__393683);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__393839 = cljs.core.next.call(null,seq__393678__$1);
var G__393840 = null;
var G__393841 = 0;
var G__393842 = 0;
seq__393678 = G__393839;
chunk__393679 = G__393840;
count__393680 = G__393841;
i__393681 = G__393842;
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
return (function (p__393684){var vec__393685 = p__393684;var op = cljs.core.nth.call(null,vec__393685,0,null);var path = cljs.core.nth.call(null,vec__393685,1,null);var _ = cljs.core.nth.call(null,vec__393685,2,null);var ___$1 = cljs.core.nth.call(null,vec__393685,3,null);var delta = vec__393685;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__393627_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__393627_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__393686 = cljs.core.seq.call(null,deltas__$1);var chunk__393687 = null;var count__393688 = 0;var i__393689 = 0;while(true){
if((i__393689 < count__393688))
{var vec__393690 = cljs.core._nth.call(null,chunk__393687,i__393689);var vec__393691 = cljs.core.nth.call(null,vec__393690,0,null);var op = cljs.core.nth.call(null,vec__393691,0,null);var path = cljs.core.nth.call(null,vec__393691,1,null);var _ = cljs.core.nth.call(null,vec__393691,2,null);var ___$1 = cljs.core.nth.call(null,vec__393691,3,null);var d = vec__393691;var f = cljs.core.nth.call(null,vec__393690,1,null);var id_393843 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_393844 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__393692_393845 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__393692_393845))
{var seq__393693_393846 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_393844));var chunk__393694_393847 = null;var count__393695_393848 = 0;var i__393696_393849 = 0;while(true){
if((i__393696_393849 < count__393695_393848))
{var dep_393850 = cljs.core._nth.call(null,chunk__393694_393847,i__393696_393849);var dep_pid_393851 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393850);var temp__4092__auto___393852__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393850], null));if(cljs.core.truth_(temp__4092__auto___393852__$1))
{var old_content_393853 = temp__4092__auto___393852__$1;dommy.core.remove_BANG_.call(null,old_content_393853);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393850], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393850], null));
{
var G__393854 = seq__393693_393846;
var G__393855 = chunk__393694_393847;
var G__393856 = count__393695_393848;
var G__393857 = (i__393696_393849 + 1);
seq__393693_393846 = G__393854;
chunk__393694_393847 = G__393855;
count__393695_393848 = G__393856;
i__393696_393849 = G__393857;
continue;
}
} else
{var temp__4092__auto___393858__$1 = cljs.core.seq.call(null,seq__393693_393846);if(temp__4092__auto___393858__$1)
{var seq__393693_393859__$1 = temp__4092__auto___393858__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393693_393859__$1))
{var c__8952__auto___393860 = cljs.core.chunk_first.call(null,seq__393693_393859__$1);{
var G__393861 = cljs.core.chunk_rest.call(null,seq__393693_393859__$1);
var G__393862 = c__8952__auto___393860;
var G__393863 = cljs.core.count.call(null,c__8952__auto___393860);
var G__393864 = 0;
seq__393693_393846 = G__393861;
chunk__393694_393847 = G__393862;
count__393695_393848 = G__393863;
i__393696_393849 = G__393864;
continue;
}
} else
{var dep_393865 = cljs.core.first.call(null,seq__393693_393859__$1);var dep_pid_393866 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393865);var temp__4092__auto___393867__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393865], null));if(cljs.core.truth_(temp__4092__auto___393867__$2))
{var old_content_393868 = temp__4092__auto___393867__$2;dommy.core.remove_BANG_.call(null,old_content_393868);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393865], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393865], null));
{
var G__393869 = cljs.core.next.call(null,seq__393693_393859__$1);
var G__393870 = null;
var G__393871 = 0;
var G__393872 = 0;
seq__393693_393846 = G__393869;
chunk__393694_393847 = G__393870;
count__393695_393848 = G__393871;
i__393696_393849 = G__393872;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__393692_393845))
{var temp__4090__auto___393873 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_393844));if(temp__4090__auto___393873)
{var deps_393874__$1 = temp__4090__auto___393873;var seq__393697_393875 = cljs.core.seq.call(null,deps_393874__$1);var chunk__393698_393876 = null;var count__393699_393877 = 0;var i__393700_393878 = 0;while(true){
if((i__393700_393878 < count__393699_393877))
{var dep_393879 = cljs.core._nth.call(null,chunk__393698_393876,i__393700_393878);var dep_pid_393880 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393879);var temp__4092__auto___393881__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_393880,dep_393879),renderer__$1);if(cljs.core.truth_(temp__4092__auto___393881__$1))
{var dom_393882 = temp__4092__auto___393881__$1;var temp__4092__auto___393883__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393843], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_393882.id);
}
})();if(cljs.core.truth_(temp__4092__auto___393883__$2))
{var old_content_393884 = temp__4092__auto___393883__$2;dommy.core.replace_BANG_.call(null,old_content_393884,dom_393882);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393879], null),dom_393882);
} else
{}
{
var G__393885 = seq__393697_393875;
var G__393886 = chunk__393698_393876;
var G__393887 = count__393699_393877;
var G__393888 = (i__393700_393878 + 1);
seq__393697_393875 = G__393885;
chunk__393698_393876 = G__393886;
count__393699_393877 = G__393887;
i__393700_393878 = G__393888;
continue;
}
} else
{var temp__4092__auto___393889__$1 = cljs.core.seq.call(null,seq__393697_393875);if(temp__4092__auto___393889__$1)
{var seq__393697_393890__$1 = temp__4092__auto___393889__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393697_393890__$1))
{var c__8952__auto___393891 = cljs.core.chunk_first.call(null,seq__393697_393890__$1);{
var G__393892 = cljs.core.chunk_rest.call(null,seq__393697_393890__$1);
var G__393893 = c__8952__auto___393891;
var G__393894 = cljs.core.count.call(null,c__8952__auto___393891);
var G__393895 = 0;
seq__393697_393875 = G__393892;
chunk__393698_393876 = G__393893;
count__393699_393877 = G__393894;
i__393700_393878 = G__393895;
continue;
}
} else
{var dep_393896 = cljs.core.first.call(null,seq__393697_393890__$1);var dep_pid_393897 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393896);var temp__4092__auto___393898__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_393897,dep_393896),renderer__$1);if(cljs.core.truth_(temp__4092__auto___393898__$2))
{var dom_393899 = temp__4092__auto___393898__$2;var temp__4092__auto___393900__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393843], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_393899.id);
}
})();if(cljs.core.truth_(temp__4092__auto___393900__$3))
{var old_content_393901 = temp__4092__auto___393900__$3;dommy.core.replace_BANG_.call(null,old_content_393901,dom_393899);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393896], null),dom_393899);
} else
{}
{
var G__393902 = cljs.core.next.call(null,seq__393697_393890__$1);
var G__393903 = null;
var G__393904 = 0;
var G__393905 = 0;
seq__393697_393875 = G__393902;
chunk__393698_393876 = G__393903;
count__393699_393877 = G__393904;
i__393700_393878 = G__393905;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___393906__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_393844,id_393843),renderer__$1);if(cljs.core.truth_(temp__4092__auto___393906__$1))
{var dom_393907 = temp__4092__auto___393906__$1;var c_393908 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_393907));var dom_393909__$1 = (((function (){var G__393701 = dom_393907;if(G__393701)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393701.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__393701.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393701);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_393907)):dom_393907);var parent_393910 = (((function (){var G__393702 = c_393908;if(G__393702)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393702.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__393702.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393702);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393702);
}
})())?foundation.app.ui._parent_node.call(null,c_393908).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393844], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393844], null)));var temp__4092__auto___393911__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393843], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_393909__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___393911__$2))
{var old_content_393912 = temp__4092__auto___393911__$2;dommy.core.replace_BANG_.call(null,old_content_393912,dom_393909__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393843], null),dom_393909__$1);
} else
{}
console.log((function (){var G__393703 = c_393908;if(G__393703)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393703.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393703.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393703);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393703);
}
})(),c_393908);
if((function (){var G__393704 = c_393908;if(G__393704)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393704.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393704.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393704);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393704);
}
})())
{foundation.app.ui._post_process.call(null,c_393908);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__393692_393845))
{var temp__4092__auto___393913__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_393844,id_393843),renderer__$1);if(cljs.core.truth_(temp__4092__auto___393913__$1))
{var dom_393914 = temp__4092__auto___393913__$1;var c_393915 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_393914));var children_393916 = (((function (){var G__393705 = c_393915;if(G__393705)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393705.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__393705.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__393705);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__393705);
}
})())?cljs.core.map.call(null,((function (seq__393686,chunk__393687,count__393688,i__393689,c_393915,dom_393914,temp__4092__auto___393913__$1,G__393692_393845,id_393843,pid_393844,vec__393690,vec__393691,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_393914).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__393686,chunk__393687,count__393688,i__393689,c_393915,dom_393914,temp__4092__auto___393913__$1,G__393692_393845,id_393843,pid_393844,vec__393690,vec__393691,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_393915)):null);var parent_393917 = (((function (){var G__393706 = c_393915;if(G__393706)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393706.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__393706.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393706);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393706);
}
})())?foundation.app.ui._parent_node.call(null,c_393915).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393844], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393844], null)));if(cljs.core.truth_(parent_393917))
{dommy.core.append_BANG_.call(null,parent_393917,dom_393914);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_393914);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393843], null),dom_393914);
if((function (){var G__393707 = c_393915;if(G__393707)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393707.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393707.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393707);
}
})())
{foundation.app.ui._post_process.call(null,c_393915);
} else
{}
var seq__393708_393918 = cljs.core.seq.call(null,children_393916);var chunk__393709_393919 = null;var count__393710_393920 = 0;var i__393711_393921 = 0;while(true){
if((i__393711_393921 < count__393710_393920))
{var child_393922 = cljs.core._nth.call(null,chunk__393709_393919,i__393711_393921);if((function (){var G__393712 = c_393915;if(G__393712)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393712.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393712);
}
})())
{foundation.app.ui._post_process.call(null,c_393915);
} else
{}
{
var G__393923 = seq__393708_393918;
var G__393924 = chunk__393709_393919;
var G__393925 = count__393710_393920;
var G__393926 = (i__393711_393921 + 1);
seq__393708_393918 = G__393923;
chunk__393709_393919 = G__393924;
count__393710_393920 = G__393925;
i__393711_393921 = G__393926;
continue;
}
} else
{var temp__4092__auto___393927__$2 = cljs.core.seq.call(null,seq__393708_393918);if(temp__4092__auto___393927__$2)
{var seq__393708_393928__$1 = temp__4092__auto___393927__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393708_393928__$1))
{var c__8952__auto___393929 = cljs.core.chunk_first.call(null,seq__393708_393928__$1);{
var G__393930 = cljs.core.chunk_rest.call(null,seq__393708_393928__$1);
var G__393931 = c__8952__auto___393929;
var G__393932 = cljs.core.count.call(null,c__8952__auto___393929);
var G__393933 = 0;
seq__393708_393918 = G__393930;
chunk__393709_393919 = G__393931;
count__393710_393920 = G__393932;
i__393711_393921 = G__393933;
continue;
}
} else
{var child_393934 = cljs.core.first.call(null,seq__393708_393928__$1);if((function (){var G__393713 = c_393915;if(G__393713)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393713.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393713.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393713);
}
})())
{foundation.app.ui._post_process.call(null,c_393915);
} else
{}
{
var G__393935 = cljs.core.next.call(null,seq__393708_393928__$1);
var G__393936 = null;
var G__393937 = 0;
var G__393938 = 0;
seq__393708_393918 = G__393935;
chunk__393709_393919 = G__393936;
count__393710_393920 = G__393937;
i__393711_393921 = G__393938;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_393843,pid_393844);
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
var G__393939 = seq__393686;
var G__393940 = chunk__393687;
var G__393941 = count__393688;
var G__393942 = (i__393689 + 1);
seq__393686 = G__393939;
chunk__393687 = G__393940;
count__393688 = G__393941;
i__393689 = G__393942;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__393686);if(temp__4092__auto____$1)
{var seq__393686__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393686__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393686__$1);{
var G__393943 = cljs.core.chunk_rest.call(null,seq__393686__$1);
var G__393944 = c__8952__auto__;
var G__393945 = cljs.core.count.call(null,c__8952__auto__);
var G__393946 = 0;
seq__393686 = G__393943;
chunk__393687 = G__393944;
count__393688 = G__393945;
i__393689 = G__393946;
continue;
}
} else
{var vec__393714 = cljs.core.first.call(null,seq__393686__$1);var vec__393715 = cljs.core.nth.call(null,vec__393714,0,null);var op = cljs.core.nth.call(null,vec__393715,0,null);var path = cljs.core.nth.call(null,vec__393715,1,null);var _ = cljs.core.nth.call(null,vec__393715,2,null);var ___$1 = cljs.core.nth.call(null,vec__393715,3,null);var d = vec__393715;var f = cljs.core.nth.call(null,vec__393714,1,null);var id_393947 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_393948 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__393716_393949 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__393716_393949))
{var seq__393717_393950 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_393948));var chunk__393718_393951 = null;var count__393719_393952 = 0;var i__393720_393953 = 0;while(true){
if((i__393720_393953 < count__393719_393952))
{var dep_393954 = cljs.core._nth.call(null,chunk__393718_393951,i__393720_393953);var dep_pid_393955 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393954);var temp__4092__auto___393956__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393954], null));if(cljs.core.truth_(temp__4092__auto___393956__$2))
{var old_content_393957 = temp__4092__auto___393956__$2;dommy.core.remove_BANG_.call(null,old_content_393957);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393954], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393954], null));
{
var G__393958 = seq__393717_393950;
var G__393959 = chunk__393718_393951;
var G__393960 = count__393719_393952;
var G__393961 = (i__393720_393953 + 1);
seq__393717_393950 = G__393958;
chunk__393718_393951 = G__393959;
count__393719_393952 = G__393960;
i__393720_393953 = G__393961;
continue;
}
} else
{var temp__4092__auto___393962__$2 = cljs.core.seq.call(null,seq__393717_393950);if(temp__4092__auto___393962__$2)
{var seq__393717_393963__$1 = temp__4092__auto___393962__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393717_393963__$1))
{var c__8952__auto___393964 = cljs.core.chunk_first.call(null,seq__393717_393963__$1);{
var G__393965 = cljs.core.chunk_rest.call(null,seq__393717_393963__$1);
var G__393966 = c__8952__auto___393964;
var G__393967 = cljs.core.count.call(null,c__8952__auto___393964);
var G__393968 = 0;
seq__393717_393950 = G__393965;
chunk__393718_393951 = G__393966;
count__393719_393952 = G__393967;
i__393720_393953 = G__393968;
continue;
}
} else
{var dep_393969 = cljs.core.first.call(null,seq__393717_393963__$1);var dep_pid_393970 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393969);var temp__4092__auto___393971__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393969], null));if(cljs.core.truth_(temp__4092__auto___393971__$3))
{var old_content_393972 = temp__4092__auto___393971__$3;dommy.core.remove_BANG_.call(null,old_content_393972);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393969], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393969], null));
{
var G__393973 = cljs.core.next.call(null,seq__393717_393963__$1);
var G__393974 = null;
var G__393975 = 0;
var G__393976 = 0;
seq__393717_393950 = G__393973;
chunk__393718_393951 = G__393974;
count__393719_393952 = G__393975;
i__393720_393953 = G__393976;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__393716_393949))
{var temp__4090__auto___393977 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_393948));if(temp__4090__auto___393977)
{var deps_393978__$1 = temp__4090__auto___393977;var seq__393721_393979 = cljs.core.seq.call(null,deps_393978__$1);var chunk__393722_393980 = null;var count__393723_393981 = 0;var i__393724_393982 = 0;while(true){
if((i__393724_393982 < count__393723_393981))
{var dep_393983 = cljs.core._nth.call(null,chunk__393722_393980,i__393724_393982);var dep_pid_393984 = foundation.app.render._parent_id.call(null,renderer__$1,dep_393983);var temp__4092__auto___393985__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_393984,dep_393983),renderer__$1);if(cljs.core.truth_(temp__4092__auto___393985__$2))
{var dom_393986 = temp__4092__auto___393985__$2;var temp__4092__auto___393987__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393947], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_393986.id);
}
})();if(cljs.core.truth_(temp__4092__auto___393987__$3))
{var old_content_393988 = temp__4092__auto___393987__$3;dommy.core.replace_BANG_.call(null,old_content_393988,dom_393986);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_393983], null),dom_393986);
} else
{}
{
var G__393989 = seq__393721_393979;
var G__393990 = chunk__393722_393980;
var G__393991 = count__393723_393981;
var G__393992 = (i__393724_393982 + 1);
seq__393721_393979 = G__393989;
chunk__393722_393980 = G__393990;
count__393723_393981 = G__393991;
i__393724_393982 = G__393992;
continue;
}
} else
{var temp__4092__auto___393993__$2 = cljs.core.seq.call(null,seq__393721_393979);if(temp__4092__auto___393993__$2)
{var seq__393721_393994__$1 = temp__4092__auto___393993__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393721_393994__$1))
{var c__8952__auto___393995 = cljs.core.chunk_first.call(null,seq__393721_393994__$1);{
var G__393996 = cljs.core.chunk_rest.call(null,seq__393721_393994__$1);
var G__393997 = c__8952__auto___393995;
var G__393998 = cljs.core.count.call(null,c__8952__auto___393995);
var G__393999 = 0;
seq__393721_393979 = G__393996;
chunk__393722_393980 = G__393997;
count__393723_393981 = G__393998;
i__393724_393982 = G__393999;
continue;
}
} else
{var dep_394000 = cljs.core.first.call(null,seq__393721_393994__$1);var dep_pid_394001 = foundation.app.render._parent_id.call(null,renderer__$1,dep_394000);var temp__4092__auto___394002__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_394001,dep_394000),renderer__$1);if(cljs.core.truth_(temp__4092__auto___394002__$3))
{var dom_394003 = temp__4092__auto___394002__$3;var temp__4092__auto___394004__$4 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393947], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_394003.id);
}
})();if(cljs.core.truth_(temp__4092__auto___394004__$4))
{var old_content_394005 = temp__4092__auto___394004__$4;dommy.core.replace_BANG_.call(null,old_content_394005,dom_394003);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_394000], null),dom_394003);
} else
{}
{
var G__394006 = cljs.core.next.call(null,seq__393721_393994__$1);
var G__394007 = null;
var G__394008 = 0;
var G__394009 = 0;
seq__393721_393979 = G__394006;
chunk__393722_393980 = G__394007;
count__393723_393981 = G__394008;
i__393724_393982 = G__394009;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___394010__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_393948,id_393947),renderer__$1);if(cljs.core.truth_(temp__4092__auto___394010__$2))
{var dom_394011 = temp__4092__auto___394010__$2;var c_394012 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_394011));var dom_394013__$1 = (((function (){var G__393725 = dom_394011;if(G__393725)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393725.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__393725.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__393725);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_394011)):dom_394011);var parent_394014 = (((function (){var G__393726 = c_394012;if(G__393726)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393726.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__393726.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393726);
}
})())?foundation.app.ui._parent_node.call(null,c_394012).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393948], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393948], null)));var temp__4092__auto___394015__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393947], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_394013__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___394015__$3))
{var old_content_394016 = temp__4092__auto___394015__$3;dommy.core.replace_BANG_.call(null,old_content_394016,dom_394013__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393947], null),dom_394013__$1);
} else
{}
console.log((function (){var G__393727 = c_394012;if(G__393727)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393727.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393727.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393727);
}
})(),c_394012);
if((function (){var G__393728 = c_394012;if(G__393728)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393728.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393728.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393728);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393728);
}
})())
{foundation.app.ui._post_process.call(null,c_394012);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__393716_393949))
{var temp__4092__auto___394017__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_393948,id_393947),renderer__$1);if(cljs.core.truth_(temp__4092__auto___394017__$2))
{var dom_394018 = temp__4092__auto___394017__$2;var c_394019 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_394018));var children_394020 = (((function (){var G__393729 = c_394019;if(G__393729)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393729.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__393729.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__393729);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__393729);
}
})())?cljs.core.map.call(null,((function (seq__393686,chunk__393687,count__393688,i__393689,c_394019,dom_394018,temp__4092__auto___394017__$2,G__393716_393949,id_393947,pid_393948,vec__393714,vec__393715,op,path,_,___$1,d,f,seq__393686__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_394018).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__393686,chunk__393687,count__393688,i__393689,c_394019,dom_394018,temp__4092__auto___394017__$2,G__393716_393949,id_393947,pid_393948,vec__393714,vec__393715,op,path,_,___$1,d,f,seq__393686__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_394019)):null);var parent_394021 = (((function (){var G__393730 = c_394019;if(G__393730)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393730.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__393730.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393730);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__393730);
}
})())?foundation.app.ui._parent_node.call(null,c_394019).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393948], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_393948], null)));if(cljs.core.truth_(parent_394021))
{dommy.core.append_BANG_.call(null,parent_394021,dom_394018);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_394018);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_393947], null),dom_394018);
if((function (){var G__393731 = c_394019;if(G__393731)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393731.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393731.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393731);
}
})())
{foundation.app.ui._post_process.call(null,c_394019);
} else
{}
var seq__393732_394022 = cljs.core.seq.call(null,children_394020);var chunk__393733_394023 = null;var count__393734_394024 = 0;var i__393735_394025 = 0;while(true){
if((i__393735_394025 < count__393734_394024))
{var child_394026 = cljs.core._nth.call(null,chunk__393733_394023,i__393735_394025);if((function (){var G__393736 = c_394019;if(G__393736)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393736.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393736.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393736);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393736);
}
})())
{foundation.app.ui._post_process.call(null,c_394019);
} else
{}
{
var G__394027 = seq__393732_394022;
var G__394028 = chunk__393733_394023;
var G__394029 = count__393734_394024;
var G__394030 = (i__393735_394025 + 1);
seq__393732_394022 = G__394027;
chunk__393733_394023 = G__394028;
count__393734_394024 = G__394029;
i__393735_394025 = G__394030;
continue;
}
} else
{var temp__4092__auto___394031__$3 = cljs.core.seq.call(null,seq__393732_394022);if(temp__4092__auto___394031__$3)
{var seq__393732_394032__$1 = temp__4092__auto___394031__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393732_394032__$1))
{var c__8952__auto___394033 = cljs.core.chunk_first.call(null,seq__393732_394032__$1);{
var G__394034 = cljs.core.chunk_rest.call(null,seq__393732_394032__$1);
var G__394035 = c__8952__auto___394033;
var G__394036 = cljs.core.count.call(null,c__8952__auto___394033);
var G__394037 = 0;
seq__393732_394022 = G__394034;
chunk__393733_394023 = G__394035;
count__393734_394024 = G__394036;
i__393735_394025 = G__394037;
continue;
}
} else
{var child_394038 = cljs.core.first.call(null,seq__393732_394032__$1);if((function (){var G__393737 = c_394019;if(G__393737)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__393737.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__393737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__393737);
}
})())
{foundation.app.ui._post_process.call(null,c_394019);
} else
{}
{
var G__394039 = cljs.core.next.call(null,seq__393732_394032__$1);
var G__394040 = null;
var G__394041 = 0;
var G__394042 = 0;
seq__393732_394022 = G__394039;
chunk__393733_394023 = G__394040;
count__393734_394024 = G__394041;
i__393735_394025 = G__394042;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_393947,pid_393948);
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
var G__394043 = cljs.core.next.call(null,seq__393686__$1);
var G__394044 = null;
var G__394045 = 0;
var G__394046 = 0;
seq__393686 = G__394043;
chunk__393687 = G__394044;
count__393688 = G__394045;
i__393689 = G__394046;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__393738){var map__393739 = p__393738;var map__393739__$1 = ((cljs.core.seq_QMARK_.call(null,map__393739))?cljs.core.apply.call(null,cljs.core.hash_map,map__393739):map__393739);var deltas = cljs.core.get.call(null,map__393739__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__393740 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__393741 = null;var count__393742 = 0;var i__393743 = 0;while(true){
if((i__393743 < count__393742))
{var handler = cljs.core._nth.call(null,chunk__393741,i__393743);handler.dispose();
{
var G__394047 = seq__393740;
var G__394048 = chunk__393741;
var G__394049 = count__393742;
var G__394050 = (i__393743 + 1);
seq__393740 = G__394047;
chunk__393741 = G__394048;
count__393742 = G__394049;
i__393743 = G__394050;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__393740);if(temp__4092__auto__)
{var seq__393740__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__393740__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__393740__$1);{
var G__394051 = cljs.core.chunk_rest.call(null,seq__393740__$1);
var G__394052 = c__8952__auto__;
var G__394053 = cljs.core.count.call(null,c__8952__auto__);
var G__394054 = 0;
seq__393740 = G__394051;
chunk__393741 = G__394052;
count__393742 = G__394053;
i__393743 = G__394054;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__393740__$1);handler.dispose();
{
var G__394055 = cljs.core.next.call(null,seq__393740__$1);
var G__394056 = null;
var G__394057 = 0;
var G__394058 = 0;
seq__393740 = G__394055;
chunk__393741 = G__394056;
count__393742 = G__394057;
i__393743 = G__394058;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k393629,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k393629,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k393629,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k393629,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k393629,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k393629,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__393628){var self__ = this;
var this__8797__auto____$1 = this;var pred__393744 = cljs.core.keyword_identical_QMARK_;var expr__393745 = k__8798__auto__;if(cljs.core.truth_(pred__393744.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__393745)))
{return (new foundation.app.render.Renderer(G__393628,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__393744.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__393745)))
{return (new foundation.app.render.Renderer(self__.env,G__393628,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__393744.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__393745)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__393628,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__393744.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__393745)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__393628,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__393628),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__393628){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__393628,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__393630){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__393630),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__393630),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__393630),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__393630),null,cljs.core.dissoc.call(null,G__393630,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__394059,input_queue,pid,id){var vec__394060 = p__394059;var op = cljs.core.nth.call(null,vec__394060,0,null);var path = cljs.core.nth.call(null,vec__394060,1,null);var _ = cljs.core.nth.call(null,vec__394060,2,null);var ___$1 = cljs.core.nth.call(null,vec__394060,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map