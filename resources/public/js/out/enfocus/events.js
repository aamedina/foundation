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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__29611_29615 = cljs.core.seq.call(null,listeners);var chunk__29612_29616 = null;var count__29613_29617 = 0;var i__29614_29618 = 0;while(true){
if((i__29614_29618 < count__29613_29617))
{var obj_29619__$1 = cljs.core._nth.call(null,chunk__29612_29616,i__29614_29618);var listener_29620 = obj_29619__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_29620.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_29620.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_29620);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_29620);
}
} else
{}
{
var G__29621 = seq__29611_29615;
var G__29622 = chunk__29612_29616;
var G__29623 = count__29613_29617;
var G__29624 = (i__29614_29618 + 1);
seq__29611_29615 = G__29621;
chunk__29612_29616 = G__29622;
count__29613_29617 = G__29623;
i__29614_29618 = G__29624;
continue;
}
} else
{var temp__4092__auto___29625 = cljs.core.seq.call(null,seq__29611_29615);if(temp__4092__auto___29625)
{var seq__29611_29626__$1 = temp__4092__auto___29625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29611_29626__$1))
{var c__8952__auto___29627 = cljs.core.chunk_first.call(null,seq__29611_29626__$1);{
var G__29628 = cljs.core.chunk_rest.call(null,seq__29611_29626__$1);
var G__29629 = c__8952__auto___29627;
var G__29630 = cljs.core.count.call(null,c__8952__auto___29627);
var G__29631 = 0;
seq__29611_29615 = G__29628;
chunk__29612_29616 = G__29629;
count__29613_29617 = G__29630;
i__29614_29618 = G__29631;
continue;
}
} else
{var obj_29632__$1 = cljs.core.first.call(null,seq__29611_29626__$1);var listener_29633 = obj_29632__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_29633.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_29633.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_29633);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_29633);
}
} else
{}
{
var G__29634 = cljs.core.next.call(null,seq__29611_29626__$1);
var G__29635 = null;
var G__29636 = 0;
var G__29637 = 0;
seq__29611_29615 = G__29634;
chunk__29612_29616 = G__29635;
count__29613_29617 = G__29636;
i__29614_29618 = G__29637;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__29638_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__29638_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__29638_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__29638_SHARP_:null))));
});return (function (pnod){var seq__29643 = cljs.core.seq.call(null,event_list);var chunk__29644 = null;var count__29645 = 0;var i__29646 = 0;while(true){
if((i__29646 < count__29645))
{var ev = cljs.core._nth.call(null,chunk__29644,i__29646);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__29647 = seq__29643;
var G__29648 = chunk__29644;
var G__29649 = count__29645;
var G__29650 = (i__29646 + 1);
seq__29643 = G__29647;
chunk__29644 = G__29648;
count__29645 = G__29649;
i__29646 = G__29650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29643);if(temp__4092__auto__)
{var seq__29643__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29643__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29643__$1);{
var G__29651 = cljs.core.chunk_rest.call(null,seq__29643__$1);
var G__29652 = c__8952__auto__;
var G__29653 = cljs.core.count.call(null,c__8952__auto__);
var G__29654 = 0;
seq__29643 = G__29651;
chunk__29644 = G__29652;
count__29645 = G__29653;
i__29646 = G__29654;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__29643__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__29655 = cljs.core.next.call(null,seq__29643__$1);
var G__29656 = null;
var G__29657 = 0;
var G__29658 = 0;
seq__29643 = G__29655;
chunk__29644 = G__29656;
count__29645 = G__29657;
i__29646 = G__29658;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__29659){
var event_list = cljs.core.seq(arglist__29659);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__29660_SHARP_){var seq__29665 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__29660_SHARP_.target));var chunk__29666 = null;var count__29667 = 0;var i__29668 = 0;while(true){
if((i__29668 < count__29667))
{var el = cljs.core._nth.call(null,chunk__29666,i__29668);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__29665,chunk__29666,count__29667,i__29668,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__29660_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__29660_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__29660_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__29665,chunk__29666,count__29667,i__29668,el))
));
{
var G__29669 = seq__29665;
var G__29670 = chunk__29666;
var G__29671 = count__29667;
var G__29672 = (i__29668 + 1);
seq__29665 = G__29669;
chunk__29666 = G__29670;
count__29667 = G__29671;
i__29668 = G__29672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29665);if(temp__4092__auto__)
{var seq__29665__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29665__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29665__$1);{
var G__29673 = cljs.core.chunk_rest.call(null,seq__29665__$1);
var G__29674 = c__8952__auto__;
var G__29675 = cljs.core.count.call(null,c__8952__auto__);
var G__29676 = 0;
seq__29665 = G__29673;
chunk__29666 = G__29674;
count__29667 = G__29675;
i__29668 = G__29676;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__29665__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__29665,chunk__29666,count__29667,i__29668,el,seq__29665__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__29660_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__29660_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__29660_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__29665,chunk__29666,count__29667,i__29668,el,seq__29665__$1,temp__4092__auto__))
));
{
var G__29677 = cljs.core.next.call(null,seq__29665__$1);
var G__29678 = null;
var G__29679 = 0;
var G__29680 = 0;
seq__29665 = G__29677;
chunk__29666 = G__29678;
count__29667 = G__29679;
i__29668 = G__29680;
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
var G__29681 = parent;
var G__29682 = child.parentNode;
parent = G__29681;
child = G__29682;
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