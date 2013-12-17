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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__329704_329708 = cljs.core.seq.call(null,listeners);var chunk__329705_329709 = null;var count__329706_329710 = 0;var i__329707_329711 = 0;while(true){
if((i__329707_329711 < count__329706_329710))
{var obj_329712__$1 = cljs.core._nth.call(null,chunk__329705_329709,i__329707_329711);var listener_329713 = obj_329712__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_329713.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_329713.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_329713);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_329713);
}
} else
{}
{
var G__329714 = seq__329704_329708;
var G__329715 = chunk__329705_329709;
var G__329716 = count__329706_329710;
var G__329717 = (i__329707_329711 + 1);
seq__329704_329708 = G__329714;
chunk__329705_329709 = G__329715;
count__329706_329710 = G__329716;
i__329707_329711 = G__329717;
continue;
}
} else
{var temp__4092__auto___329718 = cljs.core.seq.call(null,seq__329704_329708);if(temp__4092__auto___329718)
{var seq__329704_329719__$1 = temp__4092__auto___329718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329704_329719__$1))
{var c__14547__auto___329720 = cljs.core.chunk_first.call(null,seq__329704_329719__$1);{
var G__329721 = cljs.core.chunk_rest.call(null,seq__329704_329719__$1);
var G__329722 = c__14547__auto___329720;
var G__329723 = cljs.core.count.call(null,c__14547__auto___329720);
var G__329724 = 0;
seq__329704_329708 = G__329721;
chunk__329705_329709 = G__329722;
count__329706_329710 = G__329723;
i__329707_329711 = G__329724;
continue;
}
} else
{var obj_329725__$1 = cljs.core.first.call(null,seq__329704_329719__$1);var listener_329726 = obj_329725__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_329726.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_329726.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_329726);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_329726);
}
} else
{}
{
var G__329727 = cljs.core.next.call(null,seq__329704_329719__$1);
var G__329728 = null;
var G__329729 = 0;
var G__329730 = 0;
seq__329704_329708 = G__329727;
chunk__329705_329709 = G__329728;
count__329706_329710 = G__329729;
i__329707_329711 = G__329730;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__329731_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__329731_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__329731_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__329731_SHARP_:null))));
});return (function (pnod){var seq__329736 = cljs.core.seq.call(null,event_list);var chunk__329737 = null;var count__329738 = 0;var i__329739 = 0;while(true){
if((i__329739 < count__329738))
{var ev = cljs.core._nth.call(null,chunk__329737,i__329739);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__329740 = seq__329736;
var G__329741 = chunk__329737;
var G__329742 = count__329738;
var G__329743 = (i__329739 + 1);
seq__329736 = G__329740;
chunk__329737 = G__329741;
count__329738 = G__329742;
i__329739 = G__329743;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__329736);if(temp__4092__auto__)
{var seq__329736__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329736__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__329736__$1);{
var G__329744 = cljs.core.chunk_rest.call(null,seq__329736__$1);
var G__329745 = c__14547__auto__;
var G__329746 = cljs.core.count.call(null,c__14547__auto__);
var G__329747 = 0;
seq__329736 = G__329744;
chunk__329737 = G__329745;
count__329738 = G__329746;
i__329739 = G__329747;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__329736__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__329748 = cljs.core.next.call(null,seq__329736__$1);
var G__329749 = null;
var G__329750 = 0;
var G__329751 = 0;
seq__329736 = G__329748;
chunk__329737 = G__329749;
count__329738 = G__329750;
i__329739 = G__329751;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__329752){
var event_list = cljs.core.seq(arglist__329752);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__329753_SHARP_){var seq__329758 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__329753_SHARP_.target));var chunk__329759 = null;var count__329760 = 0;var i__329761 = 0;while(true){
if((i__329761 < count__329760))
{var el = cljs.core._nth.call(null,chunk__329759,i__329761);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__329758,chunk__329759,count__329760,i__329761,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__329753_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__329753_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__329753_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__329758,chunk__329759,count__329760,i__329761,el))
));
{
var G__329762 = seq__329758;
var G__329763 = chunk__329759;
var G__329764 = count__329760;
var G__329765 = (i__329761 + 1);
seq__329758 = G__329762;
chunk__329759 = G__329763;
count__329760 = G__329764;
i__329761 = G__329765;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__329758);if(temp__4092__auto__)
{var seq__329758__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329758__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__329758__$1);{
var G__329766 = cljs.core.chunk_rest.call(null,seq__329758__$1);
var G__329767 = c__14547__auto__;
var G__329768 = cljs.core.count.call(null,c__14547__auto__);
var G__329769 = 0;
seq__329758 = G__329766;
chunk__329759 = G__329767;
count__329760 = G__329768;
i__329761 = G__329769;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__329758__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__329758,chunk__329759,count__329760,i__329761,el,seq__329758__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__329753_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__329753_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__329753_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__329758,chunk__329759,count__329760,i__329761,el,seq__329758__$1,temp__4092__auto__))
));
{
var G__329770 = cljs.core.next.call(null,seq__329758__$1);
var G__329771 = null;
var G__329772 = 0;
var G__329773 = 0;
seq__329758 = G__329770;
chunk__329759 = G__329771;
count__329760 = G__329772;
i__329761 = G__329773;
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
var G__329774 = parent;
var G__329775 = child.parentNode;
parent = G__329774;
child = G__329775;
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