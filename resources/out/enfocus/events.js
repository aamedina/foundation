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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__34521_34525 = cljs.core.seq.call(null,listeners);var chunk__34522_34526 = null;var count__34523_34527 = 0;var i__34524_34528 = 0;while(true){
if((i__34524_34528 < count__34523_34527))
{var obj_34529__$1 = cljs.core._nth.call(null,chunk__34522_34526,i__34524_34528);var listener_34530 = obj_34529__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34530.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34530.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34530);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34530);
}
} else
{}
{
var G__34531 = seq__34521_34525;
var G__34532 = chunk__34522_34526;
var G__34533 = count__34523_34527;
var G__34534 = (i__34524_34528 + 1);
seq__34521_34525 = G__34531;
chunk__34522_34526 = G__34532;
count__34523_34527 = G__34533;
i__34524_34528 = G__34534;
continue;
}
} else
{var temp__4092__auto___34535 = cljs.core.seq.call(null,seq__34521_34525);if(temp__4092__auto___34535)
{var seq__34521_34536__$1 = temp__4092__auto___34535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34521_34536__$1))
{var c__14547__auto___34537 = cljs.core.chunk_first.call(null,seq__34521_34536__$1);{
var G__34538 = cljs.core.chunk_rest.call(null,seq__34521_34536__$1);
var G__34539 = c__14547__auto___34537;
var G__34540 = cljs.core.count.call(null,c__14547__auto___34537);
var G__34541 = 0;
seq__34521_34525 = G__34538;
chunk__34522_34526 = G__34539;
count__34523_34527 = G__34540;
i__34524_34528 = G__34541;
continue;
}
} else
{var obj_34542__$1 = cljs.core.first.call(null,seq__34521_34536__$1);var listener_34543 = obj_34542__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34543.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34543.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34543);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34543);
}
} else
{}
{
var G__34544 = cljs.core.next.call(null,seq__34521_34536__$1);
var G__34545 = null;
var G__34546 = 0;
var G__34547 = 0;
seq__34521_34525 = G__34544;
chunk__34522_34526 = G__34545;
count__34523_34527 = G__34546;
i__34524_34528 = G__34547;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__34548_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34548_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__34548_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__34548_SHARP_:null))));
});return (function (pnod){var seq__34553 = cljs.core.seq.call(null,event_list);var chunk__34554 = null;var count__34555 = 0;var i__34556 = 0;while(true){
if((i__34556 < count__34555))
{var ev = cljs.core._nth.call(null,chunk__34554,i__34556);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34557 = seq__34553;
var G__34558 = chunk__34554;
var G__34559 = count__34555;
var G__34560 = (i__34556 + 1);
seq__34553 = G__34557;
chunk__34554 = G__34558;
count__34555 = G__34559;
i__34556 = G__34560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34553);if(temp__4092__auto__)
{var seq__34553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34553__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34553__$1);{
var G__34561 = cljs.core.chunk_rest.call(null,seq__34553__$1);
var G__34562 = c__14547__auto__;
var G__34563 = cljs.core.count.call(null,c__14547__auto__);
var G__34564 = 0;
seq__34553 = G__34561;
chunk__34554 = G__34562;
count__34555 = G__34563;
i__34556 = G__34564;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__34553__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34565 = cljs.core.next.call(null,seq__34553__$1);
var G__34566 = null;
var G__34567 = 0;
var G__34568 = 0;
seq__34553 = G__34565;
chunk__34554 = G__34566;
count__34555 = G__34567;
i__34556 = G__34568;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__34569){
var event_list = cljs.core.seq(arglist__34569);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34570_SHARP_){var seq__34575 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34570_SHARP_.target));var chunk__34576 = null;var count__34577 = 0;var i__34578 = 0;while(true){
if((i__34578 < count__34577))
{var el = cljs.core._nth.call(null,chunk__34576,i__34578);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34575,chunk__34576,count__34577,i__34578,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34570_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34570_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34570_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34575,chunk__34576,count__34577,i__34578,el))
));
{
var G__34579 = seq__34575;
var G__34580 = chunk__34576;
var G__34581 = count__34577;
var G__34582 = (i__34578 + 1);
seq__34575 = G__34579;
chunk__34576 = G__34580;
count__34577 = G__34581;
i__34578 = G__34582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34575);if(temp__4092__auto__)
{var seq__34575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34575__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34575__$1);{
var G__34583 = cljs.core.chunk_rest.call(null,seq__34575__$1);
var G__34584 = c__14547__auto__;
var G__34585 = cljs.core.count.call(null,c__14547__auto__);
var G__34586 = 0;
seq__34575 = G__34583;
chunk__34576 = G__34584;
count__34577 = G__34585;
i__34578 = G__34586;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__34575__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34575,chunk__34576,count__34577,i__34578,el,seq__34575__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34570_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34570_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34570_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34575,chunk__34576,count__34577,i__34578,el,seq__34575__$1,temp__4092__auto__))
));
{
var G__34587 = cljs.core.next.call(null,seq__34575__$1);
var G__34588 = null;
var G__34589 = 0;
var G__34590 = 0;
seq__34575 = G__34587;
chunk__34576 = G__34588;
count__34577 = G__34589;
i__34578 = G__34590;
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
var G__34591 = parent;
var G__34592 = child.parentNode;
parent = G__34591;
child = G__34592;
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