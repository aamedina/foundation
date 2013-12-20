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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__328670,input_queue,pid,id){var vec__328671 = p__328670;var op = cljs.core.nth.call(null,vec__328671,0,null);var path = cljs.core.nth.call(null,vec__328671,1,null);var _ = cljs.core.nth.call(null,vec__328671,2,null);var ___$1 = cljs.core.nth.call(null,vec__328671,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj328673 = {};return obj328673;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__328674_SHARP_){return cljs.core.not.call(null,p1__328674_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__328676 = (new goog.events.EventHandler(renderer));G__328676.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__328676.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__328676,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__328676;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__328677_SHARP_){return cljs.core.get.call(null,n,p1__328677_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__328682 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__328683 = null;var count__328684 = 0;var i__328685 = 0;while(true){
if((i__328685 < count__328684))
{var f = cljs.core._nth.call(null,chunk__328683,i__328685);f.call(null);
{
var G__328686 = seq__328682;
var G__328687 = chunk__328683;
var G__328688 = count__328684;
var G__328689 = (i__328685 + 1);
seq__328682 = G__328686;
chunk__328683 = G__328687;
count__328684 = G__328688;
i__328685 = G__328689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328682);if(temp__4092__auto__)
{var seq__328682__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328682__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328682__$1);{
var G__328690 = cljs.core.chunk_rest.call(null,seq__328682__$1);
var G__328691 = c__8952__auto__;
var G__328692 = cljs.core.count.call(null,c__8952__auto__);
var G__328693 = 0;
seq__328682 = G__328690;
chunk__328683 = G__328691;
count__328684 = G__328692;
i__328685 = G__328693;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__328682__$1);f.call(null);
{
var G__328694 = cljs.core.next.call(null,seq__328682__$1);
var G__328695 = null;
var G__328696 = 0;
var G__328697 = 0;
seq__328682 = G__328694;
chunk__328683 = G__328695;
count__328684 = G__328696;
i__328685 = G__328697;
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
foundation.app.render.IRenderer = (function (){var obj328699 = {};return obj328699;
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
foundation.app.render.IRender = (function (){var obj328701 = {};return obj328701;
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
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__328711 = x;var G__328711__$1 = (((function (){var G__328712 = x;if(G__328712)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328712.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__328712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328712);
}
})())?foundation.app.render.extend_component.call(null,G__328711,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__328711);var G__328711__$2 = (((function (){var G__328713 = x;if(G__328713)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328713.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__328713.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328713);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__328711__$1);var G__328711__$3 = (((function (){var G__328714 = x;if(G__328714)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328714.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__328714.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328714);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328714);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__328711__$2);var G__328711__$4 = (((function (){var G__328715 = x;if(G__328715)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328715.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__328715.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328715);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328715);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__328711__$3);var G__328711__$5 = (((function (){var G__328716 = x;if(G__328716)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328716.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__328716.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328716);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328716);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__328711__$4);var G__328711__$6 = (((function (){var G__328717 = x;if(G__328717)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328717.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__328717.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__328717);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__328717);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__328711__$5);var G__328711__$7 = (((function (){var G__328718 = x;if(G__328718)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328718.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__328718.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328718);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328718);
}
})())?foundation.app.render.extend_component.call(null,G__328711__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__328711__$6);var G__328711__$8 = (((function (){var G__328719 = x;if(G__328719)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328719.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__328719.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__328719);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__328719);
}
})())?foundation.app.ui._render.call(null,G__328711__$7):G__328711__$7);return G__328711__$8;
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
var renderer__$1 = this;var seq__328724 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__328725 = null;var count__328726 = 0;var i__328727 = 0;while(true){
if((i__328727 < count__328726))
{var c = cljs.core._nth.call(null,chunk__328725,i__328727);var G__328728_328825 = c;var G__328728_328826__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__328730 = c;if(G__328730)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328730.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__328730.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328730);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328730);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__328728_328825,e):G__328728_328825);var G__328728_328827__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__328732 = c;if(G__328732)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328732.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__328732.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__328732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__328732);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__328728_328826__$1,e):G__328728_328826__$1);{
var G__328828 = seq__328724;
var G__328829 = chunk__328725;
var G__328830 = count__328726;
var G__328831 = (i__328727 + 1);
seq__328724 = G__328828;
chunk__328725 = G__328829;
count__328726 = G__328830;
i__328727 = G__328831;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328724);if(temp__4092__auto__)
{var seq__328724__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328724__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328724__$1);{
var G__328832 = cljs.core.chunk_rest.call(null,seq__328724__$1);
var G__328833 = c__8952__auto__;
var G__328834 = cljs.core.count.call(null,c__8952__auto__);
var G__328835 = 0;
seq__328724 = G__328832;
chunk__328725 = G__328833;
count__328726 = G__328834;
i__328727 = G__328835;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328724__$1);var G__328733_328836 = c;var G__328733_328837__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__328735 = c;if(G__328735)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328735.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__328735.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__328735);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__328733_328836,e):G__328733_328836);var G__328733_328838__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__328737 = c;if(G__328737)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328737.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__328737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__328737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__328737);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__328733_328837__$1,e):G__328733_328837__$1);{
var G__328839 = cljs.core.next.call(null,seq__328724__$1);
var G__328840 = null;
var G__328841 = 0;
var G__328842 = 0;
seq__328724 = G__328839;
chunk__328725 = G__328840;
count__328726 = G__328841;
i__328727 = G__328842;
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
var renderer__$1 = this;var seq__328738 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__328739 = null;var count__328740 = 0;var i__328741 = 0;while(true){
if((i__328741 < count__328740))
{var c = cljs.core._nth.call(null,chunk__328739,i__328741);if((function (){var G__328742 = c;if(G__328742)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328742.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__328742.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328742);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328742);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__328843 = seq__328738;
var G__328844 = chunk__328739;
var G__328845 = count__328740;
var G__328846 = (i__328741 + 1);
seq__328738 = G__328843;
chunk__328739 = G__328844;
count__328740 = G__328845;
i__328741 = G__328846;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328738);if(temp__4092__auto__)
{var seq__328738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328738__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328738__$1);{
var G__328847 = cljs.core.chunk_rest.call(null,seq__328738__$1);
var G__328848 = c__8952__auto__;
var G__328849 = cljs.core.count.call(null,c__8952__auto__);
var G__328850 = 0;
seq__328738 = G__328847;
chunk__328739 = G__328848;
count__328740 = G__328849;
i__328741 = G__328850;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328738__$1);if((function (){var G__328743 = c;if(G__328743)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328743.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__328743.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328743);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__328743);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__328851 = cljs.core.next.call(null,seq__328738__$1);
var G__328852 = null;
var G__328853 = 0;
var G__328854 = 0;
seq__328738 = G__328851;
chunk__328739 = G__328852;
count__328740 = G__328853;
i__328741 = G__328854;
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
var renderer__$1 = this;var seq__328744 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__328745 = null;var count__328746 = 0;var i__328747 = 0;while(true){
if((i__328747 < count__328746))
{var c = cljs.core._nth.call(null,chunk__328745,i__328747);if((function (){var G__328748 = c;if(G__328748)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328748.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__328748.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328748);
}
})())
{var G__328749_328855 = c;var G__328749_328856__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__328749_328855,e):G__328749_328855);var G__328749_328857__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__328749_328856__$1,e):G__328749_328856__$1);} else
{}
{
var G__328858 = seq__328744;
var G__328859 = chunk__328745;
var G__328860 = count__328746;
var G__328861 = (i__328747 + 1);
seq__328744 = G__328858;
chunk__328745 = G__328859;
count__328746 = G__328860;
i__328747 = G__328861;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328744);if(temp__4092__auto__)
{var seq__328744__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328744__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328744__$1);{
var G__328862 = cljs.core.chunk_rest.call(null,seq__328744__$1);
var G__328863 = c__8952__auto__;
var G__328864 = cljs.core.count.call(null,c__8952__auto__);
var G__328865 = 0;
seq__328744 = G__328862;
chunk__328745 = G__328863;
count__328746 = G__328864;
i__328747 = G__328865;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328744__$1);if((function (){var G__328750 = c;if(G__328750)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328750.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__328750.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__328750);
}
})())
{var G__328751_328866 = c;var G__328751_328867__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__328751_328866,e):G__328751_328866);var G__328751_328868__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__328751_328867__$1,e):G__328751_328867__$1);} else
{}
{
var G__328869 = cljs.core.next.call(null,seq__328744__$1);
var G__328870 = null;
var G__328871 = 0;
var G__328872 = 0;
seq__328744 = G__328869;
chunk__328745 = G__328870;
count__328746 = G__328871;
i__328747 = G__328872;
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
var renderer__$1 = this;var seq__328752 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__328753 = null;var count__328754 = 0;var i__328755 = 0;while(true){
if((i__328755 < count__328754))
{var c = cljs.core._nth.call(null,chunk__328753,i__328755);if((function (){var G__328756 = c;if(G__328756)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328756.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__328756.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328756);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328756);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__328873 = seq__328752;
var G__328874 = chunk__328753;
var G__328875 = count__328754;
var G__328876 = (i__328755 + 1);
seq__328752 = G__328873;
chunk__328753 = G__328874;
count__328754 = G__328875;
i__328755 = G__328876;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328752);if(temp__4092__auto__)
{var seq__328752__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328752__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328752__$1);{
var G__328877 = cljs.core.chunk_rest.call(null,seq__328752__$1);
var G__328878 = c__8952__auto__;
var G__328879 = cljs.core.count.call(null,c__8952__auto__);
var G__328880 = 0;
seq__328752 = G__328877;
chunk__328753 = G__328878;
count__328754 = G__328879;
i__328755 = G__328880;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328752__$1);if((function (){var G__328757 = c;if(G__328757)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328757.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__328757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__328757);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__328881 = cljs.core.next.call(null,seq__328752__$1);
var G__328882 = null;
var G__328883 = 0;
var G__328884 = 0;
seq__328752 = G__328881;
chunk__328753 = G__328882;
count__328754 = G__328883;
i__328755 = G__328884;
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
var renderer__$1 = this;var seq__328758 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__328759 = null;var count__328760 = 0;var i__328761 = 0;while(true){
if((i__328761 < count__328760))
{var c = cljs.core._nth.call(null,chunk__328759,i__328761);if((function (){var G__328762 = c;if(G__328762)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328762.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__328762.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__328762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__328762);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__328885 = seq__328758;
var G__328886 = chunk__328759;
var G__328887 = count__328760;
var G__328888 = (i__328761 + 1);
seq__328758 = G__328885;
chunk__328759 = G__328886;
count__328760 = G__328887;
i__328761 = G__328888;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328758);if(temp__4092__auto__)
{var seq__328758__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328758__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328758__$1);{
var G__328889 = cljs.core.chunk_rest.call(null,seq__328758__$1);
var G__328890 = c__8952__auto__;
var G__328891 = cljs.core.count.call(null,c__8952__auto__);
var G__328892 = 0;
seq__328758 = G__328889;
chunk__328759 = G__328890;
count__328760 = G__328891;
i__328761 = G__328892;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328758__$1);if((function (){var G__328763 = c;if(G__328763)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328763.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__328763.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__328763);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__328763);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__328893 = cljs.core.next.call(null,seq__328758__$1);
var G__328894 = null;
var G__328895 = 0;
var G__328896 = 0;
seq__328758 = G__328893;
chunk__328759 = G__328894;
count__328760 = G__328895;
i__328761 = G__328896;
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
var renderer__$1 = this;var seq__328764 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__328765 = null;var count__328766 = 0;var i__328767 = 0;while(true){
if((i__328767 < count__328766))
{var c = cljs.core._nth.call(null,chunk__328765,i__328767);if((function (){var G__328768 = c;if(G__328768)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328768.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__328768.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328768);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__328897 = seq__328764;
var G__328898 = chunk__328765;
var G__328899 = count__328766;
var G__328900 = (i__328767 + 1);
seq__328764 = G__328897;
chunk__328765 = G__328898;
count__328766 = G__328899;
i__328767 = G__328900;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328764);if(temp__4092__auto__)
{var seq__328764__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328764__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328764__$1);{
var G__328901 = cljs.core.chunk_rest.call(null,seq__328764__$1);
var G__328902 = c__8952__auto__;
var G__328903 = cljs.core.count.call(null,c__8952__auto__);
var G__328904 = 0;
seq__328764 = G__328901;
chunk__328765 = G__328902;
count__328766 = G__328903;
i__328767 = G__328904;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328764__$1);if((function (){var G__328769 = c;if(G__328769)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328769.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__328769.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__328769);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__328905 = cljs.core.next.call(null,seq__328764__$1);
var G__328906 = null;
var G__328907 = 0;
var G__328908 = 0;
seq__328764 = G__328905;
chunk__328765 = G__328906;
count__328766 = G__328907;
i__328767 = G__328908;
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
var renderer__$1 = this;var seq__328770 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__328771 = null;var count__328772 = 0;var i__328773 = 0;while(true){
if((i__328773 < count__328772))
{var c = cljs.core._nth.call(null,chunk__328771,i__328773);if((function (){var G__328774 = c;if(G__328774)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328774.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__328774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328774);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__328909 = seq__328770;
var G__328910 = chunk__328771;
var G__328911 = count__328772;
var G__328912 = (i__328773 + 1);
seq__328770 = G__328909;
chunk__328771 = G__328910;
count__328772 = G__328911;
i__328773 = G__328912;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328770);if(temp__4092__auto__)
{var seq__328770__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328770__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328770__$1);{
var G__328913 = cljs.core.chunk_rest.call(null,seq__328770__$1);
var G__328914 = c__8952__auto__;
var G__328915 = cljs.core.count.call(null,c__8952__auto__);
var G__328916 = 0;
seq__328770 = G__328913;
chunk__328771 = G__328914;
count__328772 = G__328915;
i__328773 = G__328916;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__328770__$1);if((function (){var G__328775 = c;if(G__328775)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328775.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__328775.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__328775);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__328917 = cljs.core.next.call(null,seq__328770__$1);
var G__328918 = null;
var G__328919 = 0;
var G__328920 = 0;
seq__328770 = G__328917;
chunk__328771 = G__328918;
count__328772 = G__328919;
i__328773 = G__328920;
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
return (function (p__328776){var vec__328777 = p__328776;var op = cljs.core.nth.call(null,vec__328777,0,null);var path = cljs.core.nth.call(null,vec__328777,1,null);var _ = cljs.core.nth.call(null,vec__328777,2,null);var ___$1 = cljs.core.nth.call(null,vec__328777,3,null);var delta = vec__328777;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__328720_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__328720_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__328778 = cljs.core.seq.call(null,deltas__$1);var chunk__328779 = null;var count__328780 = 0;var i__328781 = 0;while(true){
if((i__328781 < count__328780))
{var vec__328782 = cljs.core._nth.call(null,chunk__328779,i__328781);var vec__328783 = cljs.core.nth.call(null,vec__328782,0,null);var op = cljs.core.nth.call(null,vec__328783,0,null);var path = cljs.core.nth.call(null,vec__328783,1,null);var _ = cljs.core.nth.call(null,vec__328783,2,null);var ___$1 = cljs.core.nth.call(null,vec__328783,3,null);var d = vec__328783;var f = cljs.core.nth.call(null,vec__328782,1,null);var id_328921 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_328922 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__328784_328923 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__328784_328923))
{var seq__328785_328924 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_328922));var chunk__328786_328925 = null;var count__328787_328926 = 0;var i__328788_328927 = 0;while(true){
if((i__328788_328927 < count__328787_328926))
{var dep_328928 = cljs.core._nth.call(null,chunk__328786_328925,i__328788_328927);var dep_pid_328929 = foundation.app.render._parent_id.call(null,renderer__$1,dep_328928);var temp__4092__auto___328930__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328928], null));if(cljs.core.truth_(temp__4092__auto___328930__$1))
{var old_content_328931 = temp__4092__auto___328930__$1;dommy.core.remove_BANG_.call(null,old_content_328931);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328928], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328928], null));
{
var G__328932 = seq__328785_328924;
var G__328933 = chunk__328786_328925;
var G__328934 = count__328787_328926;
var G__328935 = (i__328788_328927 + 1);
seq__328785_328924 = G__328932;
chunk__328786_328925 = G__328933;
count__328787_328926 = G__328934;
i__328788_328927 = G__328935;
continue;
}
} else
{var temp__4092__auto___328936__$1 = cljs.core.seq.call(null,seq__328785_328924);if(temp__4092__auto___328936__$1)
{var seq__328785_328937__$1 = temp__4092__auto___328936__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328785_328937__$1))
{var c__8952__auto___328938 = cljs.core.chunk_first.call(null,seq__328785_328937__$1);{
var G__328939 = cljs.core.chunk_rest.call(null,seq__328785_328937__$1);
var G__328940 = c__8952__auto___328938;
var G__328941 = cljs.core.count.call(null,c__8952__auto___328938);
var G__328942 = 0;
seq__328785_328924 = G__328939;
chunk__328786_328925 = G__328940;
count__328787_328926 = G__328941;
i__328788_328927 = G__328942;
continue;
}
} else
{var dep_328943 = cljs.core.first.call(null,seq__328785_328937__$1);var dep_pid_328944 = foundation.app.render._parent_id.call(null,renderer__$1,dep_328943);var temp__4092__auto___328945__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328943], null));if(cljs.core.truth_(temp__4092__auto___328945__$2))
{var old_content_328946 = temp__4092__auto___328945__$2;dommy.core.remove_BANG_.call(null,old_content_328946);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328943], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328943], null));
{
var G__328947 = cljs.core.next.call(null,seq__328785_328937__$1);
var G__328948 = null;
var G__328949 = 0;
var G__328950 = 0;
seq__328785_328924 = G__328947;
chunk__328786_328925 = G__328948;
count__328787_328926 = G__328949;
i__328788_328927 = G__328950;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__328784_328923))
{var temp__4090__auto___328951 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_328922));if(temp__4090__auto___328951)
{var deps_328952__$1 = temp__4090__auto___328951;var seq__328789_328953 = cljs.core.seq.call(null,deps_328952__$1);var chunk__328790_328954 = null;var count__328791_328955 = 0;var i__328792_328956 = 0;while(true){
if((i__328792_328956 < count__328791_328955))
{var dep_328957 = cljs.core._nth.call(null,chunk__328790_328954,i__328792_328956);var dep_pid_328958 = foundation.app.render._parent_id.call(null,renderer__$1,dep_328957);var temp__4092__auto___328959__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_328958,dep_328957),renderer__$1);if(cljs.core.truth_(temp__4092__auto___328959__$1))
{var dom_content_328960 = temp__4092__auto___328959__$1;var temp__4092__auto___328961__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328957], null));if(cljs.core.truth_(temp__4092__auto___328961__$2))
{var old_content_328962 = temp__4092__auto___328961__$2;dommy.core.replace_BANG_.call(null,old_content_328962,dom_content_328960);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328957], null),dom_content_328960);
} else
{}
{
var G__328963 = seq__328789_328953;
var G__328964 = chunk__328790_328954;
var G__328965 = count__328791_328955;
var G__328966 = (i__328792_328956 + 1);
seq__328789_328953 = G__328963;
chunk__328790_328954 = G__328964;
count__328791_328955 = G__328965;
i__328792_328956 = G__328966;
continue;
}
} else
{var temp__4092__auto___328967__$1 = cljs.core.seq.call(null,seq__328789_328953);if(temp__4092__auto___328967__$1)
{var seq__328789_328968__$1 = temp__4092__auto___328967__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328789_328968__$1))
{var c__8952__auto___328969 = cljs.core.chunk_first.call(null,seq__328789_328968__$1);{
var G__328970 = cljs.core.chunk_rest.call(null,seq__328789_328968__$1);
var G__328971 = c__8952__auto___328969;
var G__328972 = cljs.core.count.call(null,c__8952__auto___328969);
var G__328973 = 0;
seq__328789_328953 = G__328970;
chunk__328790_328954 = G__328971;
count__328791_328955 = G__328972;
i__328792_328956 = G__328973;
continue;
}
} else
{var dep_328974 = cljs.core.first.call(null,seq__328789_328968__$1);var dep_pid_328975 = foundation.app.render._parent_id.call(null,renderer__$1,dep_328974);var temp__4092__auto___328976__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_328975,dep_328974),renderer__$1);if(cljs.core.truth_(temp__4092__auto___328976__$2))
{var dom_content_328977 = temp__4092__auto___328976__$2;var temp__4092__auto___328978__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328974], null));if(cljs.core.truth_(temp__4092__auto___328978__$3))
{var old_content_328979 = temp__4092__auto___328978__$3;dommy.core.replace_BANG_.call(null,old_content_328979,dom_content_328977);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_328974], null),dom_content_328977);
} else
{}
{
var G__328980 = cljs.core.next.call(null,seq__328789_328968__$1);
var G__328981 = null;
var G__328982 = 0;
var G__328983 = 0;
seq__328789_328953 = G__328980;
chunk__328790_328954 = G__328981;
count__328791_328955 = G__328982;
i__328792_328956 = G__328983;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___328984__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_328922,id_328921),renderer__$1);if(cljs.core.truth_(temp__4092__auto___328984__$1))
{var dom_content_328985 = temp__4092__auto___328984__$1;var temp__4090__auto___328986__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_328921], null));if(cljs.core.truth_(temp__4090__auto___328986__$1))
{var old_content_328987 = temp__4090__auto___328986__$1;dommy.core.replace_BANG_.call(null,old_content_328987,dom_content_328985);
} else
{dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(dom_content_328985.id)].join(''))),dom_content_328985);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_328921], null),dom_content_328985);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__328784_328923))
{var temp__4092__auto___328988__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_328922,id_328921),renderer__$1);if(cljs.core.truth_(temp__4092__auto___328988__$1))
{var dom_328989 = temp__4092__auto___328988__$1;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_328921], null),dom_328989);
var c_328990 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_328989));var children_328991 = (((function (){var G__328793 = c_328990;if(G__328793)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328793.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__328793.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__328793);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__328793);
}
})())?cljs.core.map.call(null,((function (seq__328778,chunk__328779,count__328780,i__328781,c_328990,dom_328989,temp__4092__auto___328988__$1,G__328784_328923,id_328921,pid_328922,vec__328782,vec__328783,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_328989).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__328778,chunk__328779,count__328780,i__328781,c_328990,dom_328989,temp__4092__auto___328988__$1,G__328784_328923,id_328921,pid_328922,vec__328782,vec__328783,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_328990)):null);var parent_328992 = (((function (){var G__328794 = c_328990;if(G__328794)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328794.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__328794.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__328794);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__328794);
}
})())?foundation.app.ui._parent_node.call(null,c_328990).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_328922], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_328922], null)));var seq__328795_328993 = cljs.core.seq.call(null,children_328991);var chunk__328796_328994 = null;var count__328797_328995 = 0;var i__328798_328996 = 0;while(true){
if((i__328798_328996 < count__328797_328995))
{var child_328997 = cljs.core._nth.call(null,chunk__328796_328994,i__328798_328996);{
var G__328998 = seq__328795_328993;
var G__328999 = chunk__328796_328994;
var G__329000 = count__328797_328995;
var G__329001 = (i__328798_328996 + 1);
seq__328795_328993 = G__328998;
chunk__328796_328994 = G__328999;
count__328797_328995 = G__329000;
i__328798_328996 = G__329001;
continue;
}
} else
{var temp__4092__auto___329002__$2 = cljs.core.seq.call(null,seq__328795_328993);if(temp__4092__auto___329002__$2)
{var seq__328795_329003__$1 = temp__4092__auto___329002__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328795_329003__$1))
{var c__8952__auto___329004 = cljs.core.chunk_first.call(null,seq__328795_329003__$1);{
var G__329005 = cljs.core.chunk_rest.call(null,seq__328795_329003__$1);
var G__329006 = c__8952__auto___329004;
var G__329007 = cljs.core.count.call(null,c__8952__auto___329004);
var G__329008 = 0;
seq__328795_328993 = G__329005;
chunk__328796_328994 = G__329006;
count__328797_328995 = G__329007;
i__328798_328996 = G__329008;
continue;
}
} else
{var child_329009 = cljs.core.first.call(null,seq__328795_329003__$1);{
var G__329010 = cljs.core.next.call(null,seq__328795_329003__$1);
var G__329011 = null;
var G__329012 = 0;
var G__329013 = 0;
seq__328795_328993 = G__329010;
chunk__328796_328994 = G__329011;
count__328797_328995 = G__329012;
i__328798_328996 = G__329013;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_328992))
{dommy.core.append_BANG_.call(null,parent_328992,dom_328989);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_328989);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_328921,pid_328922);
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
var G__329014 = seq__328778;
var G__329015 = chunk__328779;
var G__329016 = count__328780;
var G__329017 = (i__328781 + 1);
seq__328778 = G__329014;
chunk__328779 = G__329015;
count__328780 = G__329016;
i__328781 = G__329017;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__328778);if(temp__4092__auto____$1)
{var seq__328778__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328778__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328778__$1);{
var G__329018 = cljs.core.chunk_rest.call(null,seq__328778__$1);
var G__329019 = c__8952__auto__;
var G__329020 = cljs.core.count.call(null,c__8952__auto__);
var G__329021 = 0;
seq__328778 = G__329018;
chunk__328779 = G__329019;
count__328780 = G__329020;
i__328781 = G__329021;
continue;
}
} else
{var vec__328799 = cljs.core.first.call(null,seq__328778__$1);var vec__328800 = cljs.core.nth.call(null,vec__328799,0,null);var op = cljs.core.nth.call(null,vec__328800,0,null);var path = cljs.core.nth.call(null,vec__328800,1,null);var _ = cljs.core.nth.call(null,vec__328800,2,null);var ___$1 = cljs.core.nth.call(null,vec__328800,3,null);var d = vec__328800;var f = cljs.core.nth.call(null,vec__328799,1,null);var id_329022 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_329023 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__328801_329024 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__328801_329024))
{var seq__328802_329025 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_329023));var chunk__328803_329026 = null;var count__328804_329027 = 0;var i__328805_329028 = 0;while(true){
if((i__328805_329028 < count__328804_329027))
{var dep_329029 = cljs.core._nth.call(null,chunk__328803_329026,i__328805_329028);var dep_pid_329030 = foundation.app.render._parent_id.call(null,renderer__$1,dep_329029);var temp__4092__auto___329031__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329029], null));if(cljs.core.truth_(temp__4092__auto___329031__$2))
{var old_content_329032 = temp__4092__auto___329031__$2;dommy.core.remove_BANG_.call(null,old_content_329032);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329029], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329029], null));
{
var G__329033 = seq__328802_329025;
var G__329034 = chunk__328803_329026;
var G__329035 = count__328804_329027;
var G__329036 = (i__328805_329028 + 1);
seq__328802_329025 = G__329033;
chunk__328803_329026 = G__329034;
count__328804_329027 = G__329035;
i__328805_329028 = G__329036;
continue;
}
} else
{var temp__4092__auto___329037__$2 = cljs.core.seq.call(null,seq__328802_329025);if(temp__4092__auto___329037__$2)
{var seq__328802_329038__$1 = temp__4092__auto___329037__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328802_329038__$1))
{var c__8952__auto___329039 = cljs.core.chunk_first.call(null,seq__328802_329038__$1);{
var G__329040 = cljs.core.chunk_rest.call(null,seq__328802_329038__$1);
var G__329041 = c__8952__auto___329039;
var G__329042 = cljs.core.count.call(null,c__8952__auto___329039);
var G__329043 = 0;
seq__328802_329025 = G__329040;
chunk__328803_329026 = G__329041;
count__328804_329027 = G__329042;
i__328805_329028 = G__329043;
continue;
}
} else
{var dep_329044 = cljs.core.first.call(null,seq__328802_329038__$1);var dep_pid_329045 = foundation.app.render._parent_id.call(null,renderer__$1,dep_329044);var temp__4092__auto___329046__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329044], null));if(cljs.core.truth_(temp__4092__auto___329046__$3))
{var old_content_329047 = temp__4092__auto___329046__$3;dommy.core.remove_BANG_.call(null,old_content_329047);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329044], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329044], null));
{
var G__329048 = cljs.core.next.call(null,seq__328802_329038__$1);
var G__329049 = null;
var G__329050 = 0;
var G__329051 = 0;
seq__328802_329025 = G__329048;
chunk__328803_329026 = G__329049;
count__328804_329027 = G__329050;
i__328805_329028 = G__329051;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__328801_329024))
{var temp__4090__auto___329052 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_329023));if(temp__4090__auto___329052)
{var deps_329053__$1 = temp__4090__auto___329052;var seq__328806_329054 = cljs.core.seq.call(null,deps_329053__$1);var chunk__328807_329055 = null;var count__328808_329056 = 0;var i__328809_329057 = 0;while(true){
if((i__328809_329057 < count__328808_329056))
{var dep_329058 = cljs.core._nth.call(null,chunk__328807_329055,i__328809_329057);var dep_pid_329059 = foundation.app.render._parent_id.call(null,renderer__$1,dep_329058);var temp__4092__auto___329060__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_329059,dep_329058),renderer__$1);if(cljs.core.truth_(temp__4092__auto___329060__$2))
{var dom_content_329061 = temp__4092__auto___329060__$2;var temp__4092__auto___329062__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329058], null));if(cljs.core.truth_(temp__4092__auto___329062__$3))
{var old_content_329063 = temp__4092__auto___329062__$3;dommy.core.replace_BANG_.call(null,old_content_329063,dom_content_329061);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329058], null),dom_content_329061);
} else
{}
{
var G__329064 = seq__328806_329054;
var G__329065 = chunk__328807_329055;
var G__329066 = count__328808_329056;
var G__329067 = (i__328809_329057 + 1);
seq__328806_329054 = G__329064;
chunk__328807_329055 = G__329065;
count__328808_329056 = G__329066;
i__328809_329057 = G__329067;
continue;
}
} else
{var temp__4092__auto___329068__$2 = cljs.core.seq.call(null,seq__328806_329054);if(temp__4092__auto___329068__$2)
{var seq__328806_329069__$1 = temp__4092__auto___329068__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328806_329069__$1))
{var c__8952__auto___329070 = cljs.core.chunk_first.call(null,seq__328806_329069__$1);{
var G__329071 = cljs.core.chunk_rest.call(null,seq__328806_329069__$1);
var G__329072 = c__8952__auto___329070;
var G__329073 = cljs.core.count.call(null,c__8952__auto___329070);
var G__329074 = 0;
seq__328806_329054 = G__329071;
chunk__328807_329055 = G__329072;
count__328808_329056 = G__329073;
i__328809_329057 = G__329074;
continue;
}
} else
{var dep_329075 = cljs.core.first.call(null,seq__328806_329069__$1);var dep_pid_329076 = foundation.app.render._parent_id.call(null,renderer__$1,dep_329075);var temp__4092__auto___329077__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_329076,dep_329075),renderer__$1);if(cljs.core.truth_(temp__4092__auto___329077__$3))
{var dom_content_329078 = temp__4092__auto___329077__$3;var temp__4092__auto___329079__$4 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329075], null));if(cljs.core.truth_(temp__4092__auto___329079__$4))
{var old_content_329080 = temp__4092__auto___329079__$4;dommy.core.replace_BANG_.call(null,old_content_329080,dom_content_329078);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_329075], null),dom_content_329078);
} else
{}
{
var G__329081 = cljs.core.next.call(null,seq__328806_329069__$1);
var G__329082 = null;
var G__329083 = 0;
var G__329084 = 0;
seq__328806_329054 = G__329081;
chunk__328807_329055 = G__329082;
count__328808_329056 = G__329083;
i__328809_329057 = G__329084;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___329085__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_329023,id_329022),renderer__$1);if(cljs.core.truth_(temp__4092__auto___329085__$2))
{var dom_content_329086 = temp__4092__auto___329085__$2;var temp__4090__auto___329087__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_329022], null));if(cljs.core.truth_(temp__4090__auto___329087__$1))
{var old_content_329088 = temp__4090__auto___329087__$1;dommy.core.replace_BANG_.call(null,old_content_329088,dom_content_329086);
} else
{dommy.core.replace_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(dom_content_329086.id)].join(''))),dom_content_329086);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_329022], null),dom_content_329086);
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__328801_329024))
{var temp__4092__auto___329089__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_329023,id_329022),renderer__$1);if(cljs.core.truth_(temp__4092__auto___329089__$2))
{var dom_329090 = temp__4092__auto___329089__$2;foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_329022], null),dom_329090);
var c_329091 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_329090));var children_329092 = (((function (){var G__328810 = c_329091;if(G__328810)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328810.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__328810.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__328810);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__328810);
}
})())?cljs.core.map.call(null,((function (seq__328778,chunk__328779,count__328780,i__328781,c_329091,dom_329090,temp__4092__auto___329089__$2,G__328801_329024,id_329022,pid_329023,vec__328799,vec__328800,op,path,_,___$1,d,f,seq__328778__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_329090).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__328778,chunk__328779,count__328780,i__328781,c_329091,dom_329090,temp__4092__auto___329089__$2,G__328801_329024,id_329022,pid_329023,vec__328799,vec__328800,op,path,_,___$1,d,f,seq__328778__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_329091)):null);var parent_329093 = (((function (){var G__328811 = c_329091;if(G__328811)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__328811.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__328811.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__328811);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__328811);
}
})())?foundation.app.ui._parent_node.call(null,c_329091).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_329023], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_329023], null)));var seq__328812_329094 = cljs.core.seq.call(null,children_329092);var chunk__328813_329095 = null;var count__328814_329096 = 0;var i__328815_329097 = 0;while(true){
if((i__328815_329097 < count__328814_329096))
{var child_329098 = cljs.core._nth.call(null,chunk__328813_329095,i__328815_329097);{
var G__329099 = seq__328812_329094;
var G__329100 = chunk__328813_329095;
var G__329101 = count__328814_329096;
var G__329102 = (i__328815_329097 + 1);
seq__328812_329094 = G__329099;
chunk__328813_329095 = G__329100;
count__328814_329096 = G__329101;
i__328815_329097 = G__329102;
continue;
}
} else
{var temp__4092__auto___329103__$3 = cljs.core.seq.call(null,seq__328812_329094);if(temp__4092__auto___329103__$3)
{var seq__328812_329104__$1 = temp__4092__auto___329103__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328812_329104__$1))
{var c__8952__auto___329105 = cljs.core.chunk_first.call(null,seq__328812_329104__$1);{
var G__329106 = cljs.core.chunk_rest.call(null,seq__328812_329104__$1);
var G__329107 = c__8952__auto___329105;
var G__329108 = cljs.core.count.call(null,c__8952__auto___329105);
var G__329109 = 0;
seq__328812_329094 = G__329106;
chunk__328813_329095 = G__329107;
count__328814_329096 = G__329108;
i__328815_329097 = G__329109;
continue;
}
} else
{var child_329110 = cljs.core.first.call(null,seq__328812_329104__$1);{
var G__329111 = cljs.core.next.call(null,seq__328812_329104__$1);
var G__329112 = null;
var G__329113 = 0;
var G__329114 = 0;
seq__328812_329094 = G__329111;
chunk__328813_329095 = G__329112;
count__328814_329096 = G__329113;
i__328815_329097 = G__329114;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(parent_329093))
{dommy.core.append_BANG_.call(null,parent_329093,dom_329090);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_329090);
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_329022,pid_329023);
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
var G__329115 = cljs.core.next.call(null,seq__328778__$1);
var G__329116 = null;
var G__329117 = 0;
var G__329118 = 0;
seq__328778 = G__329115;
chunk__328779 = G__329116;
count__328780 = G__329117;
i__328781 = G__329118;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__328816){var map__328817 = p__328816;var map__328817__$1 = ((cljs.core.seq_QMARK_.call(null,map__328817))?cljs.core.apply.call(null,cljs.core.hash_map,map__328817):map__328817);var deltas = cljs.core.get.call(null,map__328817__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__328818 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__328819 = null;var count__328820 = 0;var i__328821 = 0;while(true){
if((i__328821 < count__328820))
{var handler = cljs.core._nth.call(null,chunk__328819,i__328821);handler.dispose();
{
var G__329119 = seq__328818;
var G__329120 = chunk__328819;
var G__329121 = count__328820;
var G__329122 = (i__328821 + 1);
seq__328818 = G__329119;
chunk__328819 = G__329120;
count__328820 = G__329121;
i__328821 = G__329122;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__328818);if(temp__4092__auto__)
{var seq__328818__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328818__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__328818__$1);{
var G__329123 = cljs.core.chunk_rest.call(null,seq__328818__$1);
var G__329124 = c__8952__auto__;
var G__329125 = cljs.core.count.call(null,c__8952__auto__);
var G__329126 = 0;
seq__328818 = G__329123;
chunk__328819 = G__329124;
count__328820 = G__329125;
i__328821 = G__329126;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__328818__$1);handler.dispose();
{
var G__329127 = cljs.core.next.call(null,seq__328818__$1);
var G__329128 = null;
var G__329129 = 0;
var G__329130 = 0;
seq__328818 = G__329127;
chunk__328819 = G__329128;
count__328820 = G__329129;
i__328821 = G__329130;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k328722,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k328722,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k328722,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k328722,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k328722,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k328722,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__328721){var self__ = this;
var this__8797__auto____$1 = this;var pred__328822 = cljs.core.keyword_identical_QMARK_;var expr__328823 = k__8798__auto__;if(cljs.core.truth_(pred__328822.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__328823)))
{return (new foundation.app.render.Renderer(G__328721,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__328822.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__328823)))
{return (new foundation.app.render.Renderer(self__.env,G__328721,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__328822.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__328823)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__328721,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__328822.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__328823)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__328721,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__328721),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__328721){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__328721,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__328723){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__328723),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__328723),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__328723),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__328723),null,cljs.core.dissoc.call(null,G__328723,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__329131,input_queue,pid,id){var vec__329132 = p__329131;var op = cljs.core.nth.call(null,vec__329132,0,null);var path = cljs.core.nth.call(null,vec__329132,1,null);var _ = cljs.core.nth.call(null,vec__329132,2,null);var ___$1 = cljs.core.nth.call(null,vec__329132,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map