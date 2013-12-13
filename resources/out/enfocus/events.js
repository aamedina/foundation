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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__39475_39479 = cljs.core.seq.call(null,listeners);var chunk__39476_39480 = null;var count__39477_39481 = 0;var i__39478_39482 = 0;while(true){
if((i__39478_39482 < count__39477_39481))
{var obj_39483__$1 = cljs.core._nth.call(null,chunk__39476_39480,i__39478_39482);var listener_39484 = obj_39483__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_39484.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_39484.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_39484);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_39484);
}
} else
{}
{
var G__39485 = seq__39475_39479;
var G__39486 = chunk__39476_39480;
var G__39487 = count__39477_39481;
var G__39488 = (i__39478_39482 + 1);
seq__39475_39479 = G__39485;
chunk__39476_39480 = G__39486;
count__39477_39481 = G__39487;
i__39478_39482 = G__39488;
continue;
}
} else
{var temp__4092__auto___39489 = cljs.core.seq.call(null,seq__39475_39479);if(temp__4092__auto___39489)
{var seq__39475_39490__$1 = temp__4092__auto___39489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39475_39490__$1))
{var c__14512__auto___39491 = cljs.core.chunk_first.call(null,seq__39475_39490__$1);{
var G__39492 = cljs.core.chunk_rest.call(null,seq__39475_39490__$1);
var G__39493 = c__14512__auto___39491;
var G__39494 = cljs.core.count.call(null,c__14512__auto___39491);
var G__39495 = 0;
seq__39475_39479 = G__39492;
chunk__39476_39480 = G__39493;
count__39477_39481 = G__39494;
i__39478_39482 = G__39495;
continue;
}
} else
{var obj_39496__$1 = cljs.core.first.call(null,seq__39475_39490__$1);var listener_39497 = obj_39496__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_39497.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_39497.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_39497);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_39497);
}
} else
{}
{
var G__39498 = cljs.core.next.call(null,seq__39475_39490__$1);
var G__39499 = null;
var G__39500 = 0;
var G__39501 = 0;
seq__39475_39479 = G__39498;
chunk__39476_39480 = G__39499;
count__39477_39481 = G__39500;
i__39478_39482 = G__39501;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__39502_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__39502_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__39502_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__39502_SHARP_:null))));
});return (function (pnod){var seq__39507 = cljs.core.seq.call(null,event_list);var chunk__39508 = null;var count__39509 = 0;var i__39510 = 0;while(true){
if((i__39510 < count__39509))
{var ev = cljs.core._nth.call(null,chunk__39508,i__39510);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__39511 = seq__39507;
var G__39512 = chunk__39508;
var G__39513 = count__39509;
var G__39514 = (i__39510 + 1);
seq__39507 = G__39511;
chunk__39508 = G__39512;
count__39509 = G__39513;
i__39510 = G__39514;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39507);if(temp__4092__auto__)
{var seq__39507__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39507__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39507__$1);{
var G__39515 = cljs.core.chunk_rest.call(null,seq__39507__$1);
var G__39516 = c__14512__auto__;
var G__39517 = cljs.core.count.call(null,c__14512__auto__);
var G__39518 = 0;
seq__39507 = G__39515;
chunk__39508 = G__39516;
count__39509 = G__39517;
i__39510 = G__39518;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__39507__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__39519 = cljs.core.next.call(null,seq__39507__$1);
var G__39520 = null;
var G__39521 = 0;
var G__39522 = 0;
seq__39507 = G__39519;
chunk__39508 = G__39520;
count__39509 = G__39521;
i__39510 = G__39522;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__39523){
var event_list = cljs.core.seq(arglist__39523);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__39524_SHARP_){var seq__39529 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__39524_SHARP_.target));var chunk__39530 = null;var count__39531 = 0;var i__39532 = 0;while(true){
if((i__39532 < count__39531))
{var el = cljs.core._nth.call(null,chunk__39530,i__39532);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__39529,chunk__39530,count__39531,i__39532,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__39524_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__39524_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__39524_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__39529,chunk__39530,count__39531,i__39532,el))
));
{
var G__39533 = seq__39529;
var G__39534 = chunk__39530;
var G__39535 = count__39531;
var G__39536 = (i__39532 + 1);
seq__39529 = G__39533;
chunk__39530 = G__39534;
count__39531 = G__39535;
i__39532 = G__39536;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39529);if(temp__4092__auto__)
{var seq__39529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39529__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39529__$1);{
var G__39537 = cljs.core.chunk_rest.call(null,seq__39529__$1);
var G__39538 = c__14512__auto__;
var G__39539 = cljs.core.count.call(null,c__14512__auto__);
var G__39540 = 0;
seq__39529 = G__39537;
chunk__39530 = G__39538;
count__39531 = G__39539;
i__39532 = G__39540;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__39529__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__39529,chunk__39530,count__39531,i__39532,el,seq__39529__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__39524_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__39524_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__39524_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__39529,chunk__39530,count__39531,i__39532,el,seq__39529__$1,temp__4092__auto__))
));
{
var G__39541 = cljs.core.next.call(null,seq__39529__$1);
var G__39542 = null;
var G__39543 = 0;
var G__39544 = 0;
seq__39529 = G__39541;
chunk__39530 = G__39542;
count__39531 = G__39543;
i__39532 = G__39544;
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
var G__39545 = parent;
var G__39546 = child.parentNode;
parent = G__39545;
child = G__39546;
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