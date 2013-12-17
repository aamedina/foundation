// Compiled by ClojureScript 0.0-2120
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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__375416_375420 = cljs.core.seq.call(null,listeners);var chunk__375417_375421 = null;var count__375418_375422 = 0;var i__375419_375423 = 0;while(true){
if((i__375419_375423 < count__375418_375422))
{var obj_375424__$1 = cljs.core._nth.call(null,chunk__375417_375421,i__375419_375423);var listener_375425 = obj_375424__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_375425.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_375425.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_375425);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_375425);
}
} else
{}
{
var G__375426 = seq__375416_375420;
var G__375427 = chunk__375417_375421;
var G__375428 = count__375418_375422;
var G__375429 = (i__375419_375423 + 1);
seq__375416_375420 = G__375426;
chunk__375417_375421 = G__375427;
count__375418_375422 = G__375428;
i__375419_375423 = G__375429;
continue;
}
} else
{var temp__4092__auto___375430 = cljs.core.seq.call(null,seq__375416_375420);if(temp__4092__auto___375430)
{var seq__375416_375431__$1 = temp__4092__auto___375430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__375416_375431__$1))
{var c__14708__auto___375432 = cljs.core.chunk_first.call(null,seq__375416_375431__$1);{
var G__375433 = cljs.core.chunk_rest.call(null,seq__375416_375431__$1);
var G__375434 = c__14708__auto___375432;
var G__375435 = cljs.core.count.call(null,c__14708__auto___375432);
var G__375436 = 0;
seq__375416_375420 = G__375433;
chunk__375417_375421 = G__375434;
count__375418_375422 = G__375435;
i__375419_375423 = G__375436;
continue;
}
} else
{var obj_375437__$1 = cljs.core.first.call(null,seq__375416_375431__$1);var listener_375438 = obj_375437__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_375438.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_375438.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_375438);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_375438);
}
} else
{}
{
var G__375439 = cljs.core.next.call(null,seq__375416_375431__$1);
var G__375440 = null;
var G__375441 = 0;
var G__375442 = 0;
seq__375416_375420 = G__375439;
chunk__375417_375421 = G__375440;
count__375418_375422 = G__375441;
i__375419_375423 = G__375442;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__375443_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__375443_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__375443_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__375443_SHARP_:null))));
});return (function (pnod){var seq__375448 = cljs.core.seq.call(null,event_list);var chunk__375449 = null;var count__375450 = 0;var i__375451 = 0;while(true){
if((i__375451 < count__375450))
{var ev = cljs.core._nth.call(null,chunk__375449,i__375451);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__375452 = seq__375448;
var G__375453 = chunk__375449;
var G__375454 = count__375450;
var G__375455 = (i__375451 + 1);
seq__375448 = G__375452;
chunk__375449 = G__375453;
count__375450 = G__375454;
i__375451 = G__375455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__375448);if(temp__4092__auto__)
{var seq__375448__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__375448__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__375448__$1);{
var G__375456 = cljs.core.chunk_rest.call(null,seq__375448__$1);
var G__375457 = c__14708__auto__;
var G__375458 = cljs.core.count.call(null,c__14708__auto__);
var G__375459 = 0;
seq__375448 = G__375456;
chunk__375449 = G__375457;
count__375450 = G__375458;
i__375451 = G__375459;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__375448__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__375460 = cljs.core.next.call(null,seq__375448__$1);
var G__375461 = null;
var G__375462 = 0;
var G__375463 = 0;
seq__375448 = G__375460;
chunk__375449 = G__375461;
count__375450 = G__375462;
i__375451 = G__375463;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__375464){
var event_list = cljs.core.seq(arglist__375464);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__375465_SHARP_){var seq__375470 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__375465_SHARP_.target));var chunk__375471 = null;var count__375472 = 0;var i__375473 = 0;while(true){
if((i__375473 < count__375472))
{var el = cljs.core._nth.call(null,chunk__375471,i__375473);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__375470,chunk__375471,count__375472,i__375473,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__375465_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__375465_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__375465_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__375470,chunk__375471,count__375472,i__375473,el))
));
{
var G__375474 = seq__375470;
var G__375475 = chunk__375471;
var G__375476 = count__375472;
var G__375477 = (i__375473 + 1);
seq__375470 = G__375474;
chunk__375471 = G__375475;
count__375472 = G__375476;
i__375473 = G__375477;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__375470);if(temp__4092__auto__)
{var seq__375470__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__375470__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__375470__$1);{
var G__375478 = cljs.core.chunk_rest.call(null,seq__375470__$1);
var G__375479 = c__14708__auto__;
var G__375480 = cljs.core.count.call(null,c__14708__auto__);
var G__375481 = 0;
seq__375470 = G__375478;
chunk__375471 = G__375479;
count__375472 = G__375480;
i__375473 = G__375481;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__375470__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__375470,chunk__375471,count__375472,i__375473,el,seq__375470__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__375465_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__375465_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__375465_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__375470,chunk__375471,count__375472,i__375473,el,seq__375470__$1,temp__4092__auto__))
));
{
var G__375482 = cljs.core.next.call(null,seq__375470__$1);
var G__375483 = null;
var G__375484 = 0;
var G__375485 = 0;
seq__375470 = G__375482;
chunk__375471 = G__375483;
count__375472 = G__375484;
i__375473 = G__375485;
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
var G__375486 = parent;
var G__375487 = child.parentNode;
parent = G__375486;
child = G__375487;
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
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){return (function (e){var re = e.relatedTarget;var this$ = e.currentTarget;if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re))))
{return func.call(null,e);
} else
{return null;
}
});
});

//# sourceMappingURL=events.js.map