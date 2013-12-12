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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__31280_31284 = cljs.core.seq.call(null,listeners);var chunk__31281_31285 = null;var count__31282_31286 = 0;var i__31283_31287 = 0;while(true){
if((i__31283_31287 < count__31282_31286))
{var obj_31288__$1 = cljs.core._nth.call(null,chunk__31281_31285,i__31283_31287);var listener_31289 = obj_31288__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_31289.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_31289.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_31289);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_31289);
}
} else
{}
{
var G__31290 = seq__31280_31284;
var G__31291 = chunk__31281_31285;
var G__31292 = count__31282_31286;
var G__31293 = (i__31283_31287 + 1);
seq__31280_31284 = G__31290;
chunk__31281_31285 = G__31291;
count__31282_31286 = G__31292;
i__31283_31287 = G__31293;
continue;
}
} else
{var temp__4092__auto___31294 = cljs.core.seq.call(null,seq__31280_31284);if(temp__4092__auto___31294)
{var seq__31280_31295__$1 = temp__4092__auto___31294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31280_31295__$1))
{var c__14545__auto___31296 = cljs.core.chunk_first.call(null,seq__31280_31295__$1);{
var G__31297 = cljs.core.chunk_rest.call(null,seq__31280_31295__$1);
var G__31298 = c__14545__auto___31296;
var G__31299 = cljs.core.count.call(null,c__14545__auto___31296);
var G__31300 = 0;
seq__31280_31284 = G__31297;
chunk__31281_31285 = G__31298;
count__31282_31286 = G__31299;
i__31283_31287 = G__31300;
continue;
}
} else
{var obj_31301__$1 = cljs.core.first.call(null,seq__31280_31295__$1);var listener_31302 = obj_31301__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_31302.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_31302.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_31302);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_31302);
}
} else
{}
{
var G__31303 = cljs.core.next.call(null,seq__31280_31295__$1);
var G__31304 = null;
var G__31305 = 0;
var G__31306 = 0;
seq__31280_31284 = G__31303;
chunk__31281_31285 = G__31304;
count__31282_31286 = G__31305;
i__31283_31287 = G__31306;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__31307_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__31307_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__31307_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__31307_SHARP_:null))));
});return (function (pnod){var seq__31312 = cljs.core.seq.call(null,event_list);var chunk__31313 = null;var count__31314 = 0;var i__31315 = 0;while(true){
if((i__31315 < count__31314))
{var ev = cljs.core._nth.call(null,chunk__31313,i__31315);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__31316 = seq__31312;
var G__31317 = chunk__31313;
var G__31318 = count__31314;
var G__31319 = (i__31315 + 1);
seq__31312 = G__31316;
chunk__31313 = G__31317;
count__31314 = G__31318;
i__31315 = G__31319;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31312);if(temp__4092__auto__)
{var seq__31312__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31312__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31312__$1);{
var G__31320 = cljs.core.chunk_rest.call(null,seq__31312__$1);
var G__31321 = c__14545__auto__;
var G__31322 = cljs.core.count.call(null,c__14545__auto__);
var G__31323 = 0;
seq__31312 = G__31320;
chunk__31313 = G__31321;
count__31314 = G__31322;
i__31315 = G__31323;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__31312__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__31324 = cljs.core.next.call(null,seq__31312__$1);
var G__31325 = null;
var G__31326 = 0;
var G__31327 = 0;
seq__31312 = G__31324;
chunk__31313 = G__31325;
count__31314 = G__31326;
i__31315 = G__31327;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__31328){
var event_list = cljs.core.seq(arglist__31328);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__31329_SHARP_){var seq__31334 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__31329_SHARP_.target));var chunk__31335 = null;var count__31336 = 0;var i__31337 = 0;while(true){
if((i__31337 < count__31336))
{var el = cljs.core._nth.call(null,chunk__31335,i__31337);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__31334,chunk__31335,count__31336,i__31337,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__31329_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__31329_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__31329_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__31334,chunk__31335,count__31336,i__31337,el))
));
{
var G__31338 = seq__31334;
var G__31339 = chunk__31335;
var G__31340 = count__31336;
var G__31341 = (i__31337 + 1);
seq__31334 = G__31338;
chunk__31335 = G__31339;
count__31336 = G__31340;
i__31337 = G__31341;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31334);if(temp__4092__auto__)
{var seq__31334__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31334__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31334__$1);{
var G__31342 = cljs.core.chunk_rest.call(null,seq__31334__$1);
var G__31343 = c__14545__auto__;
var G__31344 = cljs.core.count.call(null,c__14545__auto__);
var G__31345 = 0;
seq__31334 = G__31342;
chunk__31335 = G__31343;
count__31336 = G__31344;
i__31337 = G__31345;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__31334__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__31334,chunk__31335,count__31336,i__31337,el,seq__31334__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__31329_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__31329_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__31329_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__31334,chunk__31335,count__31336,i__31337,el,seq__31334__$1,temp__4092__auto__))
));
{
var G__31346 = cljs.core.next.call(null,seq__31334__$1);
var G__31347 = null;
var G__31348 = 0;
var G__31349 = 0;
seq__31334 = G__31346;
chunk__31335 = G__31347;
count__31336 = G__31348;
i__31337 = G__31349;
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
var G__31350 = parent;
var G__31351 = child.parentNode;
parent = G__31350;
child = G__31351;
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