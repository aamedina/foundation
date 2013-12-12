// Compiled by ClojureScript 0.0-2080
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){var obj = (new Object());obj.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){var callback = enfocus.events.mouse_enter_leave.call(null,func);callback.listen = func;
callback.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else
{return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__80238_80242 = cljs.core.seq.call(null,listeners);var chunk__80239_80243 = null;var count__80240_80244 = 0;var i__80241_80245 = 0;while(true){
if((i__80241_80245 < count__80240_80244))
{var obj_80246__$1 = cljs.core._nth.call(null,chunk__80239_80243,i__80241_80245);var listener_80247 = obj_80246__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_80247.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_80247.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_80247);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_80247);
}
} else
{}
{
var G__80248 = seq__80238_80242;
var G__80249 = chunk__80239_80243;
var G__80250 = count__80240_80244;
var G__80251 = (i__80241_80245 + 1);
seq__80238_80242 = G__80248;
chunk__80239_80243 = G__80249;
count__80240_80244 = G__80250;
i__80241_80245 = G__80251;
continue;
}
} else
{var temp__4092__auto___80252 = cljs.core.seq.call(null,seq__80238_80242);if(temp__4092__auto___80252)
{var seq__80238_80253__$1 = temp__4092__auto___80252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80238_80253__$1))
{var c__14545__auto___80254 = cljs.core.chunk_first.call(null,seq__80238_80253__$1);{
var G__80255 = cljs.core.chunk_rest.call(null,seq__80238_80253__$1);
var G__80256 = c__14545__auto___80254;
var G__80257 = cljs.core.count.call(null,c__14545__auto___80254);
var G__80258 = 0;
seq__80238_80242 = G__80255;
chunk__80239_80243 = G__80256;
count__80240_80244 = G__80257;
i__80241_80245 = G__80258;
continue;
}
} else
{var obj_80259__$1 = cljs.core.first.call(null,seq__80238_80253__$1);var listener_80260 = obj_80259__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_80260.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_80260.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_80260);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_80260);
}
} else
{}
{
var G__80261 = cljs.core.next.call(null,seq__80238_80253__$1);
var G__80262 = null;
var G__80263 = 0;
var G__80264 = 0;
seq__80238_80242 = G__80261;
chunk__80239_80243 = G__80262;
count__80240_80244 = G__80263;
i__80241_80245 = G__80264;
continue;
}
}
} else
{}
}
break;
}
return listeners;
});
return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return (function (pnod){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",4374433830),event)) && ((window === pnod)))
{return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper == null))
{return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__80265_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__80265_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__80265_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__80265_SHARP_:null))));
});return (function (pnod){var seq__80270 = cljs.core.seq.call(null,event_list);var chunk__80271 = null;var count__80272 = 0;var i__80273 = 0;while(true){
if((i__80273 < count__80272))
{var ev = cljs.core._nth.call(null,chunk__80271,i__80273);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__80274 = seq__80270;
var G__80275 = chunk__80271;
var G__80276 = count__80272;
var G__80277 = (i__80273 + 1);
seq__80270 = G__80274;
chunk__80271 = G__80275;
count__80272 = G__80276;
i__80273 = G__80277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80270);if(temp__4092__auto__)
{var seq__80270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80270__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80270__$1);{
var G__80278 = cljs.core.chunk_rest.call(null,seq__80270__$1);
var G__80279 = c__14545__auto__;
var G__80280 = cljs.core.count.call(null,c__14545__auto__);
var G__80281 = 0;
seq__80270 = G__80278;
chunk__80271 = G__80279;
count__80272 = G__80280;
i__80273 = G__80281;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__80270__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__80282 = cljs.core.next.call(null,seq__80270__$1);
var G__80283 = null;
var G__80284 = 0;
var G__80285 = 0;
seq__80270 = G__80282;
chunk__80271 = G__80283;
count__80272 = G__80284;
i__80273 = G__80285;
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
};
var remove_listeners = function (var_args){
var event_list = null;if (arguments.length > 0) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__80286){
var event_list = cljs.core.seq(arglist__80286);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return (function (pnod){if((wrapper == null))
{return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){if(((node == null)) || (cljs.core._EQ_.call(null,node,top)))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(type,cur,tar){var event = (new goog.events.Event(type));event.currentTarget = cur;
event.target = tar;
return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__80287_SHARP_){var seq__80292 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__80287_SHARP_.target));var chunk__80293 = null;var count__80294 = 0;var i__80295 = 0;while(true){
if((i__80295 < count__80294))
{var el = cljs.core._nth.call(null,chunk__80293,i__80295);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__80292,chunk__80293,count__80294,i__80295,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__80287_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__80287_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__80287_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__80292,chunk__80293,count__80294,i__80295,el))
));
{
var G__80296 = seq__80292;
var G__80297 = chunk__80293;
var G__80298 = count__80294;
var G__80299 = (i__80295 + 1);
seq__80292 = G__80296;
chunk__80293 = G__80297;
count__80294 = G__80298;
i__80295 = G__80299;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80292);if(temp__4092__auto__)
{var seq__80292__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80292__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80292__$1);{
var G__80300 = cljs.core.chunk_rest.call(null,seq__80292__$1);
var G__80301 = c__14545__auto__;
var G__80302 = cljs.core.count.call(null,c__14545__auto__);
var G__80303 = 0;
seq__80292 = G__80300;
chunk__80293 = G__80301;
count__80294 = G__80302;
i__80295 = G__80303;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__80292__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__80292,chunk__80293,count__80294,i__80295,el,seq__80292__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__80287_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__80287_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__80287_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__80292,chunk__80293,count__80294,i__80295,el,seq__80292__$1,temp__4092__auto__))
));
{
var G__80304 = cljs.core.next.call(null,seq__80292__$1);
var G__80305 = null;
var G__80306 = 0;
var G__80307 = 0;
seq__80292 = G__80304;
chunk__80293 = G__80305;
count__80294 = G__80306;
i__80295 = G__80307;
continue;
}
}
} else
{return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){while(true){
if(cljs.core.not.call(null,child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__80308 = parent;
var G__80309 = child.parentNode;
parent = G__80308;
child = G__80309;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){return (function (e){var re = e.relatedTarget;var this$ = e.currentTarget;if((!((re === this$))) && (cljs.core.not.call(null,enfocus.events.child_of_QMARK_.call(null,this$,re))))
{return func.call(null,e);
} else
{return null;
}
});
});

//# sourceMappingURL=events.js.map