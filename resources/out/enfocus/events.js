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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__34526_34530 = cljs.core.seq.call(null,listeners);var chunk__34527_34531 = null;var count__34528_34532 = 0;var i__34529_34533 = 0;while(true){
if((i__34529_34533 < count__34528_34532))
{var obj_34534__$1 = cljs.core._nth.call(null,chunk__34527_34531,i__34529_34533);var listener_34535 = obj_34534__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34535.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34535.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34535);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34535);
}
} else
{}
{
var G__34536 = seq__34526_34530;
var G__34537 = chunk__34527_34531;
var G__34538 = count__34528_34532;
var G__34539 = (i__34529_34533 + 1);
seq__34526_34530 = G__34536;
chunk__34527_34531 = G__34537;
count__34528_34532 = G__34538;
i__34529_34533 = G__34539;
continue;
}
} else
{var temp__4092__auto___34540 = cljs.core.seq.call(null,seq__34526_34530);if(temp__4092__auto___34540)
{var seq__34526_34541__$1 = temp__4092__auto___34540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34526_34541__$1))
{var c__14547__auto___34542 = cljs.core.chunk_first.call(null,seq__34526_34541__$1);{
var G__34543 = cljs.core.chunk_rest.call(null,seq__34526_34541__$1);
var G__34544 = c__14547__auto___34542;
var G__34545 = cljs.core.count.call(null,c__14547__auto___34542);
var G__34546 = 0;
seq__34526_34530 = G__34543;
chunk__34527_34531 = G__34544;
count__34528_34532 = G__34545;
i__34529_34533 = G__34546;
continue;
}
} else
{var obj_34547__$1 = cljs.core.first.call(null,seq__34526_34541__$1);var listener_34548 = obj_34547__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34548.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34548.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34548);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34548);
}
} else
{}
{
var G__34549 = cljs.core.next.call(null,seq__34526_34541__$1);
var G__34550 = null;
var G__34551 = 0;
var G__34552 = 0;
seq__34526_34530 = G__34549;
chunk__34527_34531 = G__34550;
count__34528_34532 = G__34551;
i__34529_34533 = G__34552;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__34553_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34553_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__34553_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__34553_SHARP_:null))));
});return (function (pnod){var seq__34558 = cljs.core.seq.call(null,event_list);var chunk__34559 = null;var count__34560 = 0;var i__34561 = 0;while(true){
if((i__34561 < count__34560))
{var ev = cljs.core._nth.call(null,chunk__34559,i__34561);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34562 = seq__34558;
var G__34563 = chunk__34559;
var G__34564 = count__34560;
var G__34565 = (i__34561 + 1);
seq__34558 = G__34562;
chunk__34559 = G__34563;
count__34560 = G__34564;
i__34561 = G__34565;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34558);if(temp__4092__auto__)
{var seq__34558__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34558__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34558__$1);{
var G__34566 = cljs.core.chunk_rest.call(null,seq__34558__$1);
var G__34567 = c__14547__auto__;
var G__34568 = cljs.core.count.call(null,c__14547__auto__);
var G__34569 = 0;
seq__34558 = G__34566;
chunk__34559 = G__34567;
count__34560 = G__34568;
i__34561 = G__34569;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__34558__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34570 = cljs.core.next.call(null,seq__34558__$1);
var G__34571 = null;
var G__34572 = 0;
var G__34573 = 0;
seq__34558 = G__34570;
chunk__34559 = G__34571;
count__34560 = G__34572;
i__34561 = G__34573;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__34574){
var event_list = cljs.core.seq(arglist__34574);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34575_SHARP_){var seq__34580 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34575_SHARP_.target));var chunk__34581 = null;var count__34582 = 0;var i__34583 = 0;while(true){
if((i__34583 < count__34582))
{var el = cljs.core._nth.call(null,chunk__34581,i__34583);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34580,chunk__34581,count__34582,i__34583,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34575_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34575_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34575_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34580,chunk__34581,count__34582,i__34583,el))
));
{
var G__34584 = seq__34580;
var G__34585 = chunk__34581;
var G__34586 = count__34582;
var G__34587 = (i__34583 + 1);
seq__34580 = G__34584;
chunk__34581 = G__34585;
count__34582 = G__34586;
i__34583 = G__34587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34580);if(temp__4092__auto__)
{var seq__34580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34580__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34580__$1);{
var G__34588 = cljs.core.chunk_rest.call(null,seq__34580__$1);
var G__34589 = c__14547__auto__;
var G__34590 = cljs.core.count.call(null,c__14547__auto__);
var G__34591 = 0;
seq__34580 = G__34588;
chunk__34581 = G__34589;
count__34582 = G__34590;
i__34583 = G__34591;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__34580__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34580,chunk__34581,count__34582,i__34583,el,seq__34580__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34575_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34575_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34575_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34580,chunk__34581,count__34582,i__34583,el,seq__34580__$1,temp__4092__auto__))
));
{
var G__34592 = cljs.core.next.call(null,seq__34580__$1);
var G__34593 = null;
var G__34594 = 0;
var G__34595 = 0;
seq__34580 = G__34592;
chunk__34581 = G__34593;
count__34582 = G__34594;
i__34583 = G__34595;
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
var G__34596 = parent;
var G__34597 = child.parentNode;
parent = G__34596;
child = G__34597;
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