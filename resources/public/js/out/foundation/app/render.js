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
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__399050,input_queue,pid,id){var vec__399051 = p__399050;var op = cljs.core.nth.call(null,vec__399051,0,null);var path = cljs.core.nth.call(null,vec__399051,1,null);var _ = cljs.core.nth.call(null,vec__399051,2,null);var ___$1 = cljs.core.nth.call(null,vec__399051,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IEventDelegate = (function (){var obj399053 = {};return obj399053;
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
foundation.app.render.event_delegate = (function event_delegate(renderer){if((cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer)))) && (cljs.core.every_QMARK_.call(null,(function (p1__399054_SHARP_){return cljs.core.not.call(null,p1__399054_SHARP_.isDisposed());
}),cljs.core.vals.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer))))))
{return cljs.core.deref.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(renderer));
} else
{var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var resize_handler = goog.dom.ViewportSizeMonitor.getInstanceForWindow();var handler = (function (){var G__399056 = (new goog.events.EventHandler(renderer));G__399056.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_action.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_key.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_focus.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_drop.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_scroll.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_online.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
G__399056.listen(resize_handler,goog.events.EventType.RESIZE,((function (G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler){
return (function (e){return foundation.app.render._dispatch_resize.call(null,renderer,e);
});})(G__399056,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,resize_handler))
);
return G__399056;
})();return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler,new cljs.core.Keyword(null,"resize","resize",4374433830),resize_handler], null);
}
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__399057_SHARP_){return cljs.core.get.call(null,n,p1__399057_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__399062 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__399063 = null;var count__399064 = 0;var i__399065 = 0;while(true){
if((i__399065 < count__399064))
{var f = cljs.core._nth.call(null,chunk__399063,i__399065);f.call(null);
{
var G__399066 = seq__399062;
var G__399067 = chunk__399063;
var G__399068 = count__399064;
var G__399069 = (i__399065 + 1);
seq__399062 = G__399066;
chunk__399063 = G__399067;
count__399064 = G__399068;
i__399065 = G__399069;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399062);if(temp__4092__auto__)
{var seq__399062__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399062__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399062__$1);{
var G__399070 = cljs.core.chunk_rest.call(null,seq__399062__$1);
var G__399071 = c__8952__auto__;
var G__399072 = cljs.core.count.call(null,c__8952__auto__);
var G__399073 = 0;
seq__399062 = G__399070;
chunk__399063 = G__399071;
count__399064 = G__399072;
i__399065 = G__399073;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__399062__$1);f.call(null);
{
var G__399074 = cljs.core.next.call(null,seq__399062__$1);
var G__399075 = null;
var G__399076 = 0;
var G__399077 = 0;
seq__399062 = G__399074;
chunk__399063 = G__399075;
count__399064 = G__399076;
i__399065 = G__399077;
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
foundation.app.render.IRenderer = (function (){var obj399079 = {};return obj399079;
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
foundation.app.render.IRender = (function (){var obj399081 = {};return obj399081;
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
foundation.app.render.bind_component_events = (function bind_component_events(x,renderer){var G__399091 = x;var G__399091__$1 = (((function (){var G__399092 = x;if(G__399092)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399092.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__399092.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399092);
}
})())?foundation.app.render.extend_component.call(null,G__399091,renderer,new cljs.core.Keyword(null,"focus","focus",1111509066)):G__399091);var G__399091__$2 = (((function (){var G__399093 = x;if(G__399093)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399093.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__399093.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399093);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399093);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$1,renderer,new cljs.core.Keyword(null,"action","action",3885920680)):G__399091__$1);var G__399091__$3 = (((function (){var G__399094 = x;if(G__399094)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399094.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__399094.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399094);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$2,renderer,new cljs.core.Keyword(null,"key","key",1014010321)):G__399091__$2);var G__399091__$4 = (((function (){var G__399095 = x;if(G__399095)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399095.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__399095.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399095);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$3,renderer,new cljs.core.Keyword(null,"resize","resize",4374433830)):G__399091__$3);var G__399091__$5 = (((function (){var G__399096 = x;if(G__399096)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399096.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__399096.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399096);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399096);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$4,renderer,new cljs.core.Keyword(null,"scroll","scroll",4401191487)):G__399091__$4);var G__399091__$6 = (((function (){var G__399097 = x;if(G__399097)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399097.foundation$app$ui$IInput$;
}
})()))
{return true;
} else
{if((!G__399097.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__399097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IInput,G__399097);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$5,renderer,new cljs.core.Keyword(null,"input","input",1114262332)):G__399091__$5);var G__399091__$7 = (((function (){var G__399098 = x;if(G__399098)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399098.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__399098.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399098);
}
})())?foundation.app.render.extend_component.call(null,G__399091__$6,renderer,new cljs.core.Keyword(null,"online","online",4296649157)):G__399091__$6);var G__399091__$8 = (((function (){var G__399099 = x;if(G__399099)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399099.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__399099.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399099);
}
})())?foundation.app.ui._render.call(null,G__399091__$7):G__399091__$7);return G__399091__$8;
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
{var G__399104 = x;if(G__399104)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto____$2 = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto____$2))
{return or__8223__auto____$2;
} else
{return G__399104.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__399104.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399104);
}
}
}
}),registered);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IEventDelegate$_dispatch_action$arity$2 = (function (renderer,e){var self__ = this;
var renderer__$1 = this;var seq__399105 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"action","action",3885920680),e));var chunk__399106 = null;var count__399107 = 0;var i__399108 = 0;while(true){
if((i__399108 < count__399107))
{var c = cljs.core._nth.call(null,chunk__399106,i__399108);var G__399109_399218 = c;var G__399109_399219__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__399111 = c;if(G__399111)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399111.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__399111.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399111);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399111);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__399109_399218,e):G__399109_399218);var G__399109_399220__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__399113 = c;if(G__399113)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399113.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__399113.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__399113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__399113);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__399109_399219__$1,e):G__399109_399219__$1);{
var G__399221 = seq__399105;
var G__399222 = chunk__399106;
var G__399223 = count__399107;
var G__399224 = (i__399108 + 1);
seq__399105 = G__399221;
chunk__399106 = G__399222;
count__399107 = G__399223;
i__399108 = G__399224;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399105);if(temp__4092__auto__)
{var seq__399105__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399105__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399105__$1);{
var G__399225 = cljs.core.chunk_rest.call(null,seq__399105__$1);
var G__399226 = c__8952__auto__;
var G__399227 = cljs.core.count.call(null,c__8952__auto__);
var G__399228 = 0;
seq__399105 = G__399225;
chunk__399106 = G__399226;
count__399107 = G__399227;
i__399108 = G__399228;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399105__$1);var G__399114_399229 = c;var G__399114_399230__$1 = (((function (){var and__8211__auto__ = (e.type === "action");if(and__8211__auto__)
{var G__399116 = c;if(G__399116)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399116.foundation$app$ui$IClickable$;
}
})()))
{return true;
} else
{if((!G__399116.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399116);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IClickable,G__399116);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._click.call(null,G__399114_399229,e):G__399114_399229);var G__399114_399231__$2 = (((function (){var and__8211__auto__ = (e.type === "beforeaction");if(and__8211__auto__)
{var G__399118 = c;if(G__399118)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399118.foundation$app$ui$IBeforeClick$;
}
})()))
{return true;
} else
{if((!G__399118.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__399118);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IBeforeClick,G__399118);
}
} else
{return and__8211__auto__;
}
})())?foundation.app.ui._before_click.call(null,G__399114_399230__$1,e):G__399114_399230__$1);{
var G__399232 = cljs.core.next.call(null,seq__399105__$1);
var G__399233 = null;
var G__399234 = 0;
var G__399235 = 0;
seq__399105 = G__399232;
chunk__399106 = G__399233;
count__399107 = G__399234;
i__399108 = G__399235;
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
var renderer__$1 = this;var seq__399119 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"key","key",1014010321),e));var chunk__399120 = null;var count__399121 = 0;var i__399122 = 0;while(true){
if((i__399122 < count__399121))
{var c = cljs.core._nth.call(null,chunk__399120,i__399122);if((function (){var G__399123 = c;if(G__399123)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399123.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__399123.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399123);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399123);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__399236 = seq__399119;
var G__399237 = chunk__399120;
var G__399238 = count__399121;
var G__399239 = (i__399122 + 1);
seq__399119 = G__399236;
chunk__399120 = G__399237;
count__399121 = G__399238;
i__399122 = G__399239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399119);if(temp__4092__auto__)
{var seq__399119__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399119__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399119__$1);{
var G__399240 = cljs.core.chunk_rest.call(null,seq__399119__$1);
var G__399241 = c__8952__auto__;
var G__399242 = cljs.core.count.call(null,c__8952__auto__);
var G__399243 = 0;
seq__399119 = G__399240;
chunk__399120 = G__399241;
count__399121 = G__399242;
i__399122 = G__399243;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399119__$1);if((function (){var G__399124 = c;if(G__399124)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399124.foundation$app$ui$IKeyTarget$;
}
})()))
{return true;
} else
{if((!G__399124.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399124);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IKeyTarget,G__399124);
}
})())
{foundation.app.ui._keydown.call(null,c,e);
foundation.app.ui._keyup.call(null,c,e);
} else
{}
{
var G__399244 = cljs.core.next.call(null,seq__399119__$1);
var G__399245 = null;
var G__399246 = 0;
var G__399247 = 0;
seq__399119 = G__399244;
chunk__399120 = G__399245;
count__399121 = G__399246;
i__399122 = G__399247;
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
var renderer__$1 = this;var seq__399125 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"focus","focus",1111509066),e));var chunk__399126 = null;var count__399127 = 0;var i__399128 = 0;while(true){
if((i__399128 < count__399127))
{var c = cljs.core._nth.call(null,chunk__399126,i__399128);if((function (){var G__399129 = c;if(G__399129)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399129.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__399129.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399129);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399129);
}
})())
{var G__399130_399248 = c;var G__399130_399249__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__399130_399248,e):G__399130_399248);var G__399130_399250__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__399130_399249__$1,e):G__399130_399249__$1);} else
{}
{
var G__399251 = seq__399125;
var G__399252 = chunk__399126;
var G__399253 = count__399127;
var G__399254 = (i__399128 + 1);
seq__399125 = G__399251;
chunk__399126 = G__399252;
count__399127 = G__399253;
i__399128 = G__399254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399125);if(temp__4092__auto__)
{var seq__399125__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399125__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399125__$1);{
var G__399255 = cljs.core.chunk_rest.call(null,seq__399125__$1);
var G__399256 = c__8952__auto__;
var G__399257 = cljs.core.count.call(null,c__8952__auto__);
var G__399258 = 0;
seq__399125 = G__399255;
chunk__399126 = G__399256;
count__399127 = G__399257;
i__399128 = G__399258;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399125__$1);if((function (){var G__399131 = c;if(G__399131)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399131.foundation$app$ui$IFocusable$;
}
})()))
{return true;
} else
{if((!G__399131.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFocusable,G__399131);
}
})())
{var G__399132_399259 = c;var G__399132_399260__$1 = (((e.type === "focusin"))?foundation.app.ui._focus.call(null,G__399132_399259,e):G__399132_399259);var G__399132_399261__$2 = (((e.type === "focusout"))?foundation.app.ui._blur.call(null,G__399132_399260__$1,e):G__399132_399260__$1);} else
{}
{
var G__399262 = cljs.core.next.call(null,seq__399125__$1);
var G__399263 = null;
var G__399264 = 0;
var G__399265 = 0;
seq__399125 = G__399262;
chunk__399126 = G__399263;
count__399127 = G__399264;
i__399128 = G__399265;
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
var renderer__$1 = this;var seq__399133 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487),e));var chunk__399134 = null;var count__399135 = 0;var i__399136 = 0;while(true){
if((i__399136 < count__399135))
{var c = cljs.core._nth.call(null,chunk__399134,i__399136);if((function (){var G__399137 = c;if(G__399137)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399137.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__399137.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399137);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399137);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__399266 = seq__399133;
var G__399267 = chunk__399134;
var G__399268 = count__399135;
var G__399269 = (i__399136 + 1);
seq__399133 = G__399266;
chunk__399134 = G__399267;
count__399135 = G__399268;
i__399136 = G__399269;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399133);if(temp__4092__auto__)
{var seq__399133__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399133__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399133__$1);{
var G__399270 = cljs.core.chunk_rest.call(null,seq__399133__$1);
var G__399271 = c__8952__auto__;
var G__399272 = cljs.core.count.call(null,c__8952__auto__);
var G__399273 = 0;
seq__399133 = G__399270;
chunk__399134 = G__399271;
count__399135 = G__399272;
i__399136 = G__399273;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399133__$1);if((function (){var G__399138 = c;if(G__399138)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399138.foundation$app$ui$IScrollable$;
}
})()))
{return true;
} else
{if((!G__399138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IScrollable,G__399138);
}
})())
{foundation.app.ui._scroll.call(null,c,e);
} else
{}
{
var G__399274 = cljs.core.next.call(null,seq__399133__$1);
var G__399275 = null;
var G__399276 = 0;
var G__399277 = 0;
seq__399133 = G__399274;
chunk__399134 = G__399275;
count__399135 = G__399276;
i__399136 = G__399277;
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
var renderer__$1 = this;var seq__399139 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"drop","drop",1016996449),e));var chunk__399140 = null;var count__399141 = 0;var i__399142 = 0;while(true){
if((i__399142 < count__399141))
{var c = cljs.core._nth.call(null,chunk__399140,i__399142);if((function (){var G__399143 = c;if(G__399143)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399143.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__399143.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__399143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__399143);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__399278 = seq__399139;
var G__399279 = chunk__399140;
var G__399280 = count__399141;
var G__399281 = (i__399142 + 1);
seq__399139 = G__399278;
chunk__399140 = G__399279;
count__399141 = G__399280;
i__399142 = G__399281;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399139);if(temp__4092__auto__)
{var seq__399139__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399139__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399139__$1);{
var G__399282 = cljs.core.chunk_rest.call(null,seq__399139__$1);
var G__399283 = c__8952__auto__;
var G__399284 = cljs.core.count.call(null,c__8952__auto__);
var G__399285 = 0;
seq__399139 = G__399282;
chunk__399140 = G__399283;
count__399141 = G__399284;
i__399142 = G__399285;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399139__$1);if((function (){var G__399144 = c;if(G__399144)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399144.foundation$app$ui$IFileDrop$;
}
})()))
{return true;
} else
{if((!G__399144.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__399144);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IFileDrop,G__399144);
}
})())
{foundation.app.ui._drop.call(null,c,e);
} else
{}
{
var G__399286 = cljs.core.next.call(null,seq__399139__$1);
var G__399287 = null;
var G__399288 = 0;
var G__399289 = 0;
seq__399139 = G__399286;
chunk__399140 = G__399287;
count__399141 = G__399288;
i__399142 = G__399289;
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
var renderer__$1 = this;var seq__399145 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"online","online",4296649157),e));var chunk__399146 = null;var count__399147 = 0;var i__399148 = 0;while(true){
if((i__399148 < count__399147))
{var c = cljs.core._nth.call(null,chunk__399146,i__399148);if((function (){var G__399149 = c;if(G__399149)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399149.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__399149.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399149);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399149);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__399290 = seq__399145;
var G__399291 = chunk__399146;
var G__399292 = count__399147;
var G__399293 = (i__399148 + 1);
seq__399145 = G__399290;
chunk__399146 = G__399291;
count__399147 = G__399292;
i__399148 = G__399293;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399145);if(temp__4092__auto__)
{var seq__399145__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399145__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399145__$1);{
var G__399294 = cljs.core.chunk_rest.call(null,seq__399145__$1);
var G__399295 = c__8952__auto__;
var G__399296 = cljs.core.count.call(null,c__8952__auto__);
var G__399297 = 0;
seq__399145 = G__399294;
chunk__399146 = G__399295;
count__399147 = G__399296;
i__399148 = G__399297;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399145__$1);if((function (){var G__399150 = c;if(G__399150)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399150.foundation$app$ui$IOnline$;
}
})()))
{return true;
} else
{if((!G__399150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IOnline,G__399150);
}
})())
{foundation.app.ui._online.call(null,c,e);
} else
{}
{
var G__399298 = cljs.core.next.call(null,seq__399145__$1);
var G__399299 = null;
var G__399300 = 0;
var G__399301 = 0;
seq__399145 = G__399298;
chunk__399146 = G__399299;
count__399147 = G__399300;
i__399148 = G__399301;
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
var renderer__$1 = this;var seq__399151 = cljs.core.seq.call(null,foundation.app.render._find_dispatches.call(null,renderer__$1,new cljs.core.Keyword(null,"resize","resize",4374433830),e));var chunk__399152 = null;var count__399153 = 0;var i__399154 = 0;while(true){
if((i__399154 < count__399153))
{var c = cljs.core._nth.call(null,chunk__399152,i__399154);if((function (){var G__399155 = c;if(G__399155)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399155.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__399155.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399155);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399155);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__399302 = seq__399151;
var G__399303 = chunk__399152;
var G__399304 = count__399153;
var G__399305 = (i__399154 + 1);
seq__399151 = G__399302;
chunk__399152 = G__399303;
count__399153 = G__399304;
i__399154 = G__399305;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399151);if(temp__4092__auto__)
{var seq__399151__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399151__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399151__$1);{
var G__399306 = cljs.core.chunk_rest.call(null,seq__399151__$1);
var G__399307 = c__8952__auto__;
var G__399308 = cljs.core.count.call(null,c__8952__auto__);
var G__399309 = 0;
seq__399151 = G__399306;
chunk__399152 = G__399307;
count__399153 = G__399308;
i__399154 = G__399309;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__399151__$1);if((function (){var G__399156 = c;if(G__399156)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399156.foundation$app$ui$IResizeable$;
}
})()))
{return true;
} else
{if((!G__399156.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399156);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IResizeable,G__399156);
}
})())
{foundation.app.ui._resize.call(null,c,e);
} else
{}
{
var G__399310 = cljs.core.next.call(null,seq__399151__$1);
var G__399311 = null;
var G__399312 = 0;
var G__399313 = 0;
seq__399151 = G__399310;
chunk__399152 = G__399311;
count__399153 = G__399312;
i__399154 = G__399313;
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
return (function (p__399157){var vec__399158 = p__399157;var op = cljs.core.nth.call(null,vec__399158,0,null);var path = cljs.core.nth.call(null,vec__399158,1,null);var _ = cljs.core.nth.call(null,vec__399158,2,null);var ___$1 = cljs.core.nth.call(null,vec__399158,3,null);var delta = vec__399158;var f = cljs.core.get.call(null,render_fns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));if(cljs.core.truth_(f))
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
return (function (p1__399100_SHARP_){return cljs.core.vec.call(null,cljs.core.take.call(null,2,p1__399100_SHARP_));
});})(deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,cljs.core.map.call(null,cljs.core.first,deltas__$1)));
var seq__399159 = cljs.core.seq.call(null,deltas__$1);var chunk__399160 = null;var count__399161 = 0;var i__399162 = 0;while(true){
if((i__399162 < count__399161))
{var vec__399163 = cljs.core._nth.call(null,chunk__399160,i__399162);var vec__399164 = cljs.core.nth.call(null,vec__399163,0,null);var op = cljs.core.nth.call(null,vec__399164,0,null);var path = cljs.core.nth.call(null,vec__399164,1,null);var _ = cljs.core.nth.call(null,vec__399164,2,null);var ___$1 = cljs.core.nth.call(null,vec__399164,3,null);var d = vec__399164;var f = cljs.core.nth.call(null,vec__399163,1,null);var id_399314 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_399315 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__399165_399316 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__399165_399316))
{var seq__399166_399317 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_399315));var chunk__399167_399318 = null;var count__399168_399319 = 0;var i__399169_399320 = 0;while(true){
if((i__399169_399320 < count__399168_399319))
{var dep_399321 = cljs.core._nth.call(null,chunk__399167_399318,i__399169_399320);var dep_pid_399322 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399321);var temp__4092__auto___399323__$1 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399321], null));if(cljs.core.truth_(temp__4092__auto___399323__$1))
{var old_content_399324 = temp__4092__auto___399323__$1;dommy.core.remove_BANG_.call(null,old_content_399324);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399321], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399321], null));
{
var G__399325 = seq__399166_399317;
var G__399326 = chunk__399167_399318;
var G__399327 = count__399168_399319;
var G__399328 = (i__399169_399320 + 1);
seq__399166_399317 = G__399325;
chunk__399167_399318 = G__399326;
count__399168_399319 = G__399327;
i__399169_399320 = G__399328;
continue;
}
} else
{var temp__4092__auto___399329__$1 = cljs.core.seq.call(null,seq__399166_399317);if(temp__4092__auto___399329__$1)
{var seq__399166_399330__$1 = temp__4092__auto___399329__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399166_399330__$1))
{var c__8952__auto___399331 = cljs.core.chunk_first.call(null,seq__399166_399330__$1);{
var G__399332 = cljs.core.chunk_rest.call(null,seq__399166_399330__$1);
var G__399333 = c__8952__auto___399331;
var G__399334 = cljs.core.count.call(null,c__8952__auto___399331);
var G__399335 = 0;
seq__399166_399317 = G__399332;
chunk__399167_399318 = G__399333;
count__399168_399319 = G__399334;
i__399169_399320 = G__399335;
continue;
}
} else
{var dep_399336 = cljs.core.first.call(null,seq__399166_399330__$1);var dep_pid_399337 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399336);var temp__4092__auto___399338__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399336], null));if(cljs.core.truth_(temp__4092__auto___399338__$2))
{var old_content_399339 = temp__4092__auto___399338__$2;dommy.core.remove_BANG_.call(null,old_content_399339);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399336], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399336], null));
{
var G__399340 = cljs.core.next.call(null,seq__399166_399330__$1);
var G__399341 = null;
var G__399342 = 0;
var G__399343 = 0;
seq__399166_399317 = G__399340;
chunk__399167_399318 = G__399341;
count__399168_399319 = G__399342;
i__399169_399320 = G__399343;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__399165_399316))
{var temp__4090__auto___399344 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_399315));if(temp__4090__auto___399344)
{var deps_399345__$1 = temp__4090__auto___399344;var seq__399170_399346 = cljs.core.seq.call(null,deps_399345__$1);var chunk__399171_399347 = null;var count__399172_399348 = 0;var i__399173_399349 = 0;while(true){
if((i__399173_399349 < count__399172_399348))
{var dep_399350 = cljs.core._nth.call(null,chunk__399171_399347,i__399173_399349);var dep_pid_399351 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399350);var temp__4092__auto___399352__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_399351,dep_399350),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399352__$1))
{var dom_399353 = temp__4092__auto___399352__$1;var temp__4092__auto___399354__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399314], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399353.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399354__$2))
{var old_content_399355 = temp__4092__auto___399354__$2;dommy.core.replace_BANG_.call(null,old_content_399355,dom_399353);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399350], null),dom_399353);
} else
{}
{
var G__399356 = seq__399170_399346;
var G__399357 = chunk__399171_399347;
var G__399358 = count__399172_399348;
var G__399359 = (i__399173_399349 + 1);
seq__399170_399346 = G__399356;
chunk__399171_399347 = G__399357;
count__399172_399348 = G__399358;
i__399173_399349 = G__399359;
continue;
}
} else
{var temp__4092__auto___399360__$1 = cljs.core.seq.call(null,seq__399170_399346);if(temp__4092__auto___399360__$1)
{var seq__399170_399361__$1 = temp__4092__auto___399360__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399170_399361__$1))
{var c__8952__auto___399362 = cljs.core.chunk_first.call(null,seq__399170_399361__$1);{
var G__399363 = cljs.core.chunk_rest.call(null,seq__399170_399361__$1);
var G__399364 = c__8952__auto___399362;
var G__399365 = cljs.core.count.call(null,c__8952__auto___399362);
var G__399366 = 0;
seq__399170_399346 = G__399363;
chunk__399171_399347 = G__399364;
count__399172_399348 = G__399365;
i__399173_399349 = G__399366;
continue;
}
} else
{var dep_399367 = cljs.core.first.call(null,seq__399170_399361__$1);var dep_pid_399368 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399367);var temp__4092__auto___399369__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_399368,dep_399367),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399369__$2))
{var dom_399370 = temp__4092__auto___399369__$2;var temp__4092__auto___399371__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399314], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399370.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399371__$3))
{var old_content_399372 = temp__4092__auto___399371__$3;dommy.core.replace_BANG_.call(null,old_content_399372,dom_399370);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399367], null),dom_399370);
} else
{}
{
var G__399373 = cljs.core.next.call(null,seq__399170_399361__$1);
var G__399374 = null;
var G__399375 = 0;
var G__399376 = 0;
seq__399170_399346 = G__399373;
chunk__399171_399347 = G__399374;
count__399172_399348 = G__399375;
i__399173_399349 = G__399376;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___399377__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_399315,id_399314),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399377__$1))
{var dom_399378 = temp__4092__auto___399377__$1;var c_399379 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_399378));var dom_399380__$1 = (((function (){var G__399174 = dom_399378;if(G__399174)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399174.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__399174.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399174);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399174);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_399378)):dom_399378);var parent_399381 = (((function (){var G__399175 = c_399379;if(G__399175)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399175.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__399175.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399175);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399175);
}
})())?foundation.app.ui._parent_node.call(null,c_399379).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399315], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399315], null)));var temp__4092__auto___399382__$2 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399314], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399380__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399382__$2))
{var old_content_399383 = temp__4092__auto___399382__$2;dommy.core.replace_BANG_.call(null,old_content_399383,dom_399380__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399314], null),dom_399380__$1);
} else
{}
if((function (){var G__399176 = c_399379;if(G__399176)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399176.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399176.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399176);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399176);
}
})())
{foundation.app.ui._post_process.call(null,c_399379);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__399165_399316))
{var temp__4092__auto___399384__$1 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_399315,id_399314),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399384__$1))
{var dom_399385 = temp__4092__auto___399384__$1;var c_399386 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_399385));var children_399387 = (((function (){var G__399177 = c_399386;if(G__399177)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399177.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__399177.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__399177);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__399177);
}
})())?cljs.core.map.call(null,((function (seq__399159,chunk__399160,count__399161,i__399162,c_399386,dom_399385,temp__4092__auto___399384__$1,G__399165_399316,id_399314,pid_399315,vec__399163,vec__399164,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_399385).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__399159,chunk__399160,count__399161,i__399162,c_399386,dom_399385,temp__4092__auto___399384__$1,G__399165_399316,id_399314,pid_399315,vec__399163,vec__399164,op,path,_,___$1,d,f,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_399386)):null);var parent_399388 = (((function (){var G__399178 = c_399386;if(G__399178)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399178.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__399178.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399178);
}
})())?foundation.app.ui._parent_node.call(null,c_399386).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399315], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399315], null)));if(cljs.core.truth_(parent_399388))
{dommy.core.append_BANG_.call(null,parent_399388,dom_399385);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_399385);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399314], null),dom_399385);
if((function (){var G__399179 = c_399386;if(G__399179)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399179.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399179.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399179);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399179);
}
})())
{foundation.app.ui._post_process.call(null,c_399386);
} else
{}
var seq__399180_399389 = cljs.core.seq.call(null,children_399387);var chunk__399181_399390 = null;var count__399182_399391 = 0;var i__399183_399392 = 0;while(true){
if((i__399183_399392 < count__399182_399391))
{var child_399393 = cljs.core._nth.call(null,chunk__399181_399390,i__399183_399392);if((function (){var G__399184 = c_399386;if(G__399184)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399184.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399184.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399184);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399184);
}
})())
{foundation.app.ui._post_process.call(null,c_399386);
} else
{}
{
var G__399394 = seq__399180_399389;
var G__399395 = chunk__399181_399390;
var G__399396 = count__399182_399391;
var G__399397 = (i__399183_399392 + 1);
seq__399180_399389 = G__399394;
chunk__399181_399390 = G__399395;
count__399182_399391 = G__399396;
i__399183_399392 = G__399397;
continue;
}
} else
{var temp__4092__auto___399398__$2 = cljs.core.seq.call(null,seq__399180_399389);if(temp__4092__auto___399398__$2)
{var seq__399180_399399__$1 = temp__4092__auto___399398__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399180_399399__$1))
{var c__8952__auto___399400 = cljs.core.chunk_first.call(null,seq__399180_399399__$1);{
var G__399401 = cljs.core.chunk_rest.call(null,seq__399180_399399__$1);
var G__399402 = c__8952__auto___399400;
var G__399403 = cljs.core.count.call(null,c__8952__auto___399400);
var G__399404 = 0;
seq__399180_399389 = G__399401;
chunk__399181_399390 = G__399402;
count__399182_399391 = G__399403;
i__399183_399392 = G__399404;
continue;
}
} else
{var child_399405 = cljs.core.first.call(null,seq__399180_399399__$1);if((function (){var G__399185 = c_399386;if(G__399185)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399185.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399185.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399185);
}
})())
{foundation.app.ui._post_process.call(null,c_399386);
} else
{}
{
var G__399406 = cljs.core.next.call(null,seq__399180_399399__$1);
var G__399407 = null;
var G__399408 = 0;
var G__399409 = 0;
seq__399180_399389 = G__399406;
chunk__399181_399390 = G__399407;
count__399182_399391 = G__399408;
i__399183_399392 = G__399409;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_399314,pid_399315);
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
var G__399410 = seq__399159;
var G__399411 = chunk__399160;
var G__399412 = count__399161;
var G__399413 = (i__399162 + 1);
seq__399159 = G__399410;
chunk__399160 = G__399411;
count__399161 = G__399412;
i__399162 = G__399413;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__399159);if(temp__4092__auto____$1)
{var seq__399159__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399159__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399159__$1);{
var G__399414 = cljs.core.chunk_rest.call(null,seq__399159__$1);
var G__399415 = c__8952__auto__;
var G__399416 = cljs.core.count.call(null,c__8952__auto__);
var G__399417 = 0;
seq__399159 = G__399414;
chunk__399160 = G__399415;
count__399161 = G__399416;
i__399162 = G__399417;
continue;
}
} else
{var vec__399186 = cljs.core.first.call(null,seq__399159__$1);var vec__399187 = cljs.core.nth.call(null,vec__399186,0,null);var op = cljs.core.nth.call(null,vec__399187,0,null);var path = cljs.core.nth.call(null,vec__399187,1,null);var _ = cljs.core.nth.call(null,vec__399187,2,null);var ___$1 = cljs.core.nth.call(null,vec__399187,3,null);var d = vec__399187;var f = cljs.core.nth.call(null,vec__399186,1,null);var id_399418 = (function (){var or__8223__auto__ = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return foundation.app.render._new_id.call(null,renderer__$1,path);
}
})();var pid_399419 = foundation.app.render._parent_id.call(null,renderer__$1,path);var G__399188_399420 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__399188_399420))
{var seq__399189_399421 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_399419));var chunk__399190_399422 = null;var count__399191_399423 = 0;var i__399192_399424 = 0;while(true){
if((i__399192_399424 < count__399191_399423))
{var dep_399425 = cljs.core._nth.call(null,chunk__399190_399422,i__399192_399424);var dep_pid_399426 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399425);var temp__4092__auto___399427__$2 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399425], null));if(cljs.core.truth_(temp__4092__auto___399427__$2))
{var old_content_399428 = temp__4092__auto___399427__$2;dommy.core.remove_BANG_.call(null,old_content_399428);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399425], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399425], null));
{
var G__399429 = seq__399189_399421;
var G__399430 = chunk__399190_399422;
var G__399431 = count__399191_399423;
var G__399432 = (i__399192_399424 + 1);
seq__399189_399421 = G__399429;
chunk__399190_399422 = G__399430;
count__399191_399423 = G__399431;
i__399192_399424 = G__399432;
continue;
}
} else
{var temp__4092__auto___399433__$2 = cljs.core.seq.call(null,seq__399189_399421);if(temp__4092__auto___399433__$2)
{var seq__399189_399434__$1 = temp__4092__auto___399433__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399189_399434__$1))
{var c__8952__auto___399435 = cljs.core.chunk_first.call(null,seq__399189_399434__$1);{
var G__399436 = cljs.core.chunk_rest.call(null,seq__399189_399434__$1);
var G__399437 = c__8952__auto___399435;
var G__399438 = cljs.core.count.call(null,c__8952__auto___399435);
var G__399439 = 0;
seq__399189_399421 = G__399436;
chunk__399190_399422 = G__399437;
count__399191_399423 = G__399438;
i__399192_399424 = G__399439;
continue;
}
} else
{var dep_399440 = cljs.core.first.call(null,seq__399189_399434__$1);var dep_pid_399441 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399440);var temp__4092__auto___399442__$3 = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399440], null));if(cljs.core.truth_(temp__4092__auto___399442__$3))
{var old_content_399443 = temp__4092__auto___399442__$3;dommy.core.remove_BANG_.call(null,old_content_399443);
} else
{}
foundation.app.render._delete_id.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399440], null));
foundation.app.render._drop_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399440], null));
{
var G__399444 = cljs.core.next.call(null,seq__399189_399434__$1);
var G__399445 = null;
var G__399446 = 0;
var G__399447 = 0;
seq__399189_399421 = G__399444;
chunk__399190_399422 = G__399445;
count__399191_399423 = G__399446;
i__399192_399424 = G__399447;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__399188_399420))
{var temp__4090__auto___399448 = cljs.core.seq.call(null,foundation.app.render.sort_deps.call(null,self__.deps,pid_399419));if(temp__4090__auto___399448)
{var deps_399449__$1 = temp__4090__auto___399448;var seq__399193_399450 = cljs.core.seq.call(null,deps_399449__$1);var chunk__399194_399451 = null;var count__399195_399452 = 0;var i__399196_399453 = 0;while(true){
if((i__399196_399453 < count__399195_399452))
{var dep_399454 = cljs.core._nth.call(null,chunk__399194_399451,i__399196_399453);var dep_pid_399455 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399454);var temp__4092__auto___399456__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_399455,dep_399454),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399456__$2))
{var dom_399457 = temp__4092__auto___399456__$2;var temp__4092__auto___399458__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399418], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399457.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399458__$3))
{var old_content_399459 = temp__4092__auto___399458__$3;dommy.core.replace_BANG_.call(null,old_content_399459,dom_399457);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399454], null),dom_399457);
} else
{}
{
var G__399460 = seq__399193_399450;
var G__399461 = chunk__399194_399451;
var G__399462 = count__399195_399452;
var G__399463 = (i__399196_399453 + 1);
seq__399193_399450 = G__399460;
chunk__399194_399451 = G__399461;
count__399195_399452 = G__399462;
i__399196_399453 = G__399463;
continue;
}
} else
{var temp__4092__auto___399464__$2 = cljs.core.seq.call(null,seq__399193_399450);if(temp__4092__auto___399464__$2)
{var seq__399193_399465__$1 = temp__4092__auto___399464__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399193_399465__$1))
{var c__8952__auto___399466 = cljs.core.chunk_first.call(null,seq__399193_399465__$1);{
var G__399467 = cljs.core.chunk_rest.call(null,seq__399193_399465__$1);
var G__399468 = c__8952__auto___399466;
var G__399469 = cljs.core.count.call(null,c__8952__auto___399466);
var G__399470 = 0;
seq__399193_399450 = G__399467;
chunk__399194_399451 = G__399468;
count__399195_399452 = G__399469;
i__399196_399453 = G__399470;
continue;
}
} else
{var dep_399471 = cljs.core.first.call(null,seq__399193_399465__$1);var dep_pid_399472 = foundation.app.render._parent_id.call(null,renderer__$1,dep_399471);var temp__4092__auto___399473__$3 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,dep_pid_399472,dep_399471),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399473__$3))
{var dom_399474 = temp__4092__auto___399473__$3;var temp__4092__auto___399475__$4 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399418], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399474.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399475__$4))
{var old_content_399476 = temp__4092__auto___399475__$4;dommy.core.replace_BANG_.call(null,old_content_399476,dom_399474);
} else
{}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_399471], null),dom_399474);
} else
{}
{
var G__399477 = cljs.core.next.call(null,seq__399193_399465__$1);
var G__399478 = null;
var G__399479 = 0;
var G__399480 = 0;
seq__399193_399450 = G__399477;
chunk__399194_399451 = G__399478;
count__399195_399452 = G__399479;
i__399196_399453 = G__399480;
continue;
}
}
} else
{}
}
break;
}
} else
{var temp__4092__auto___399481__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_399419,id_399418),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399481__$2))
{var dom_399482 = temp__4092__auto___399481__$2;var c_399483 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_399482));var dom_399484__$1 = (((function (){var G__399197 = dom_399482;if(G__399197)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399197.foundation$app$ui$IRender$;
}
})()))
{return true;
} else
{if((!G__399197.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IRender,G__399197);
}
})())?dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,dom_399482)):dom_399482);var parent_399485 = (((function (){var G__399198 = c_399483;if(G__399198)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399198.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__399198.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399198);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399198);
}
})())?foundation.app.ui._parent_node.call(null,c_399483).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399419], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399419], null)));var temp__4092__auto___399486__$3 = (function (){var or__8223__auto__ = foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399418], null));if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return goog.dom.getElement(dom_399484__$1.id);
}
})();if(cljs.core.truth_(temp__4092__auto___399486__$3))
{var old_content_399487 = temp__4092__auto___399486__$3;dommy.core.replace_BANG_.call(null,old_content_399487,dom_399484__$1);
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399418], null),dom_399484__$1);
} else
{}
if((function (){var G__399199 = c_399483;if(G__399199)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399199.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399199.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399199);
}
})())
{foundation.app.ui._post_process.call(null,c_399483);
} else
{}
} else
{}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__399188_399420))
{var temp__4092__auto___399488__$2 = foundation.app.render._render.call(null,f.call(null,renderer__$1,d,input,pid_399419,id_399418),renderer__$1);if(cljs.core.truth_(temp__4092__auto___399488__$2))
{var dom_399489 = temp__4092__auto___399488__$2;var c_399490 = new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dom_399489));var children_399491 = (((function (){var G__399200 = c_399490;if(G__399200)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399200.foundation$app$ui$IWithChildren$;
}
})()))
{return true;
} else
{if((!G__399200.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__399200);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IWithChildren,G__399200);
}
})())?cljs.core.map.call(null,((function (seq__399159,chunk__399160,count__399161,i__399162,c_399490,dom_399489,temp__4092__auto___399488__$2,G__399188_399420,id_399418,pid_399419,vec__399186,vec__399187,op,path,_,___$1,d,f,seq__399159__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input){
return (function (x){return foundation.app.render._render.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,dommy.template.__GT_node_like.call(null,dom_399489).querySelector(dommy.core.selector.call(null,x)))),renderer__$1);
});})(seq__399159,chunk__399160,count__399161,i__399162,c_399490,dom_399489,temp__4092__auto___399488__$2,G__399188_399420,id_399418,pid_399419,vec__399186,vec__399187,op,path,_,___$1,d,f,seq__399159__$1,temp__4092__auto____$1,deltas__$1,temp__4092__auto__,handlers__$1,render_fns,input))
,foundation.app.ui._with_children.call(null,c_399490)):null);var parent_399492 = (((function (){var G__399201 = c_399490;if(G__399201)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399201.foundation$app$ui$IParentNode$;
}
})()))
{return true;
} else
{if((!G__399201.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399201);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IParentNode,G__399201);
}
})())?foundation.app.ui._parent_node.call(null,c_399490).call(null,foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399419], null))):foundation.app.render._get_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid_399419], null)));if(cljs.core.truth_(parent_399492))
{dommy.core.append_BANG_.call(null,parent_399492,dom_399489);
} else
{dommy.core.append_BANG_.call(null,document.body,dom_399489);
}
foundation.app.render._set_data.call(null,renderer__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_399418], null),dom_399489);
if((function (){var G__399202 = c_399490;if(G__399202)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399202.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399202.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399202);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399202);
}
})())
{foundation.app.ui._post_process.call(null,c_399490);
} else
{}
var seq__399203_399493 = cljs.core.seq.call(null,children_399491);var chunk__399204_399494 = null;var count__399205_399495 = 0;var i__399206_399496 = 0;while(true){
if((i__399206_399496 < count__399205_399495))
{var child_399497 = cljs.core._nth.call(null,chunk__399204_399494,i__399206_399496);if((function (){var G__399207 = c_399490;if(G__399207)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399207.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399207.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399207);
}
})())
{foundation.app.ui._post_process.call(null,c_399490);
} else
{}
{
var G__399498 = seq__399203_399493;
var G__399499 = chunk__399204_399494;
var G__399500 = count__399205_399495;
var G__399501 = (i__399206_399496 + 1);
seq__399203_399493 = G__399498;
chunk__399204_399494 = G__399499;
count__399205_399495 = G__399500;
i__399206_399496 = G__399501;
continue;
}
} else
{var temp__4092__auto___399502__$3 = cljs.core.seq.call(null,seq__399203_399493);if(temp__4092__auto___399502__$3)
{var seq__399203_399503__$1 = temp__4092__auto___399502__$3;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399203_399503__$1))
{var c__8952__auto___399504 = cljs.core.chunk_first.call(null,seq__399203_399503__$1);{
var G__399505 = cljs.core.chunk_rest.call(null,seq__399203_399503__$1);
var G__399506 = c__8952__auto___399504;
var G__399507 = cljs.core.count.call(null,c__8952__auto___399504);
var G__399508 = 0;
seq__399203_399493 = G__399505;
chunk__399204_399494 = G__399506;
count__399205_399495 = G__399507;
i__399206_399496 = G__399508;
continue;
}
} else
{var child_399509 = cljs.core.first.call(null,seq__399203_399503__$1);if((function (){var G__399208 = c_399490;if(G__399208)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__399208.foundation$app$ui$IPostProcess$;
}
})()))
{return true;
} else
{if((!G__399208.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399208);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.ui.IPostProcess,G__399208);
}
})())
{foundation.app.ui._post_process.call(null,c_399490);
} else
{}
{
var G__399510 = cljs.core.next.call(null,seq__399203_399503__$1);
var G__399511 = null;
var G__399512 = 0;
var G__399513 = 0;
seq__399203_399493 = G__399510;
chunk__399204_399494 = G__399511;
count__399205_399495 = G__399512;
i__399206_399496 = G__399513;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,self__.deps,foundation.app.data.dependency.depend,id_399418,pid_399419);
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
var G__399514 = cljs.core.next.call(null,seq__399159__$1);
var G__399515 = null;
var G__399516 = 0;
var G__399517 = 0;
seq__399159 = G__399514;
chunk__399160 = G__399515;
count__399161 = G__399516;
i__399162 = G__399517;
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
;cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,p__399209){var map__399210 = p__399209;var map__399210__$1 = ((cljs.core.seq_QMARK_.call(null,map__399210))?cljs.core.apply.call(null,cljs.core.hash_map,map__399210):map__399210);var deltas = cljs.core.get.call(null,map__399210__$1,new cljs.core.Keyword(null,"deltas","deltas",3973426989));if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame((function (){return render_fn__$1.call(null,deltas);
}));
} else
{return setTimeout(render_fn__$1,16);
}
}));
return render_fn__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY,null,null], null)], null));
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var seq__399211 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,self__.handlers)));var chunk__399212 = null;var count__399213 = 0;var i__399214 = 0;while(true){
if((i__399214 < count__399213))
{var handler = cljs.core._nth.call(null,chunk__399212,i__399214);handler.dispose();
{
var G__399518 = seq__399211;
var G__399519 = chunk__399212;
var G__399520 = count__399213;
var G__399521 = (i__399214 + 1);
seq__399211 = G__399518;
chunk__399212 = G__399519;
count__399213 = G__399520;
i__399214 = G__399521;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__399211);if(temp__4092__auto__)
{var seq__399211__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399211__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__399211__$1);{
var G__399522 = cljs.core.chunk_rest.call(null,seq__399211__$1);
var G__399523 = c__8952__auto__;
var G__399524 = cljs.core.count.call(null,c__8952__auto__);
var G__399525 = 0;
seq__399211 = G__399522;
chunk__399212 = G__399523;
count__399213 = G__399524;
i__399214 = G__399525;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__399211__$1);handler.dispose();
{
var G__399526 = cljs.core.next.call(null,seq__399211__$1);
var G__399527 = null;
var G__399528 = 0;
var G__399529 = 0;
seq__399211 = G__399526;
chunk__399212 = G__399527;
count__399213 = G__399528;
i__399214 = G__399529;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k399102,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k399102,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k399102,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k399102,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k399102,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k399102,else__8793__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__399101){var self__ = this;
var this__8797__auto____$1 = this;var pred__399215 = cljs.core.keyword_identical_QMARK_;var expr__399216 = k__8798__auto__;if(cljs.core.truth_(pred__399215.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__399216)))
{return (new foundation.app.render.Renderer(G__399101,self__.deps,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__399215.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__399216)))
{return (new foundation.app.render.Renderer(self__.env,G__399101,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__399215.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__399216)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,G__399101,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__399215.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__399216)))
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,G__399101,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__399101),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__399101){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.deps,self__.render_fn,self__.handlers,G__399101,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__399103){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__399103),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__399103),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__399103),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__399103),null,cljs.core.dissoc.call(null,G__399103,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__399530,input_queue,pid,id){var vec__399531 = p__399530;var op = cljs.core.nth.call(null,vec__399531,0,null);var path = cljs.core.nth.call(null,vec__399531,1,null);var _ = cljs.core.nth.call(null,vec__399531,2,null);var ___$1 = cljs.core.nth.call(null,vec__399531,3,null);return cljs.core.println.call(null,"No matching render method for:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map