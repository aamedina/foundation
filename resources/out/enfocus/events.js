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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__34305_34309 = cljs.core.seq.call(null,listeners);var chunk__34306_34310 = null;var count__34307_34311 = 0;var i__34308_34312 = 0;while(true){
if((i__34308_34312 < count__34307_34311))
{var obj_34313__$1 = cljs.core._nth.call(null,chunk__34306_34310,i__34308_34312);var listener_34314 = obj_34313__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34314.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34314.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34314);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34314);
}
} else
{}
{
var G__34315 = seq__34305_34309;
var G__34316 = chunk__34306_34310;
var G__34317 = count__34307_34311;
var G__34318 = (i__34308_34312 + 1);
seq__34305_34309 = G__34315;
chunk__34306_34310 = G__34316;
count__34307_34311 = G__34317;
i__34308_34312 = G__34318;
continue;
}
} else
{var temp__4092__auto___34319 = cljs.core.seq.call(null,seq__34305_34309);if(temp__4092__auto___34319)
{var seq__34305_34320__$1 = temp__4092__auto___34319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34305_34320__$1))
{var c__14547__auto___34321 = cljs.core.chunk_first.call(null,seq__34305_34320__$1);{
var G__34322 = cljs.core.chunk_rest.call(null,seq__34305_34320__$1);
var G__34323 = c__14547__auto___34321;
var G__34324 = cljs.core.count.call(null,c__14547__auto___34321);
var G__34325 = 0;
seq__34305_34309 = G__34322;
chunk__34306_34310 = G__34323;
count__34307_34311 = G__34324;
i__34308_34312 = G__34325;
continue;
}
} else
{var obj_34326__$1 = cljs.core.first.call(null,seq__34305_34320__$1);var listener_34327 = obj_34326__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34327.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34327.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34327);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34327);
}
} else
{}
{
var G__34328 = cljs.core.next.call(null,seq__34305_34320__$1);
var G__34329 = null;
var G__34330 = 0;
var G__34331 = 0;
seq__34305_34309 = G__34328;
chunk__34306_34310 = G__34329;
count__34307_34311 = G__34330;
i__34308_34312 = G__34331;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__34332_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34332_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__34332_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__34332_SHARP_:null))));
});return (function (pnod){var seq__34337 = cljs.core.seq.call(null,event_list);var chunk__34338 = null;var count__34339 = 0;var i__34340 = 0;while(true){
if((i__34340 < count__34339))
{var ev = cljs.core._nth.call(null,chunk__34338,i__34340);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34341 = seq__34337;
var G__34342 = chunk__34338;
var G__34343 = count__34339;
var G__34344 = (i__34340 + 1);
seq__34337 = G__34341;
chunk__34338 = G__34342;
count__34339 = G__34343;
i__34340 = G__34344;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34337);if(temp__4092__auto__)
{var seq__34337__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34337__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34337__$1);{
var G__34345 = cljs.core.chunk_rest.call(null,seq__34337__$1);
var G__34346 = c__14547__auto__;
var G__34347 = cljs.core.count.call(null,c__14547__auto__);
var G__34348 = 0;
seq__34337 = G__34345;
chunk__34338 = G__34346;
count__34339 = G__34347;
i__34340 = G__34348;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__34337__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34349 = cljs.core.next.call(null,seq__34337__$1);
var G__34350 = null;
var G__34351 = 0;
var G__34352 = 0;
seq__34337 = G__34349;
chunk__34338 = G__34350;
count__34339 = G__34351;
i__34340 = G__34352;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__34353){
var event_list = cljs.core.seq(arglist__34353);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34354_SHARP_){var seq__34359 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34354_SHARP_.target));var chunk__34360 = null;var count__34361 = 0;var i__34362 = 0;while(true){
if((i__34362 < count__34361))
{var el = cljs.core._nth.call(null,chunk__34360,i__34362);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34359,chunk__34360,count__34361,i__34362,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34354_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34354_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34354_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34359,chunk__34360,count__34361,i__34362,el))
));
{
var G__34363 = seq__34359;
var G__34364 = chunk__34360;
var G__34365 = count__34361;
var G__34366 = (i__34362 + 1);
seq__34359 = G__34363;
chunk__34360 = G__34364;
count__34361 = G__34365;
i__34362 = G__34366;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34359);if(temp__4092__auto__)
{var seq__34359__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34359__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34359__$1);{
var G__34367 = cljs.core.chunk_rest.call(null,seq__34359__$1);
var G__34368 = c__14547__auto__;
var G__34369 = cljs.core.count.call(null,c__14547__auto__);
var G__34370 = 0;
seq__34359 = G__34367;
chunk__34360 = G__34368;
count__34361 = G__34369;
i__34362 = G__34370;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__34359__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34359,chunk__34360,count__34361,i__34362,el,seq__34359__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34354_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34354_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34354_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34359,chunk__34360,count__34361,i__34362,el,seq__34359__$1,temp__4092__auto__))
));
{
var G__34371 = cljs.core.next.call(null,seq__34359__$1);
var G__34372 = null;
var G__34373 = 0;
var G__34374 = 0;
seq__34359 = G__34371;
chunk__34360 = G__34372;
count__34361 = G__34373;
i__34362 = G__34374;
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
var G__34375 = parent;
var G__34376 = child.parentNode;
parent = G__34375;
child = G__34376;
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