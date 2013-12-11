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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__46684_46688 = cljs.core.seq.call(null,listeners);var chunk__46685_46689 = null;var count__46686_46690 = 0;var i__46687_46691 = 0;while(true){
if((i__46687_46691 < count__46686_46690))
{var obj_46692__$1 = cljs.core._nth.call(null,chunk__46685_46689,i__46687_46691);var listener_46693 = obj_46692__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_46693.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_46693.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_46693);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_46693);
}
} else
{}
{
var G__46694 = seq__46684_46688;
var G__46695 = chunk__46685_46689;
var G__46696 = count__46686_46690;
var G__46697 = (i__46687_46691 + 1);
seq__46684_46688 = G__46694;
chunk__46685_46689 = G__46695;
count__46686_46690 = G__46696;
i__46687_46691 = G__46697;
continue;
}
} else
{var temp__4098__auto___46698 = cljs.core.seq.call(null,seq__46684_46688);if(temp__4098__auto___46698)
{var seq__46684_46699__$1 = temp__4098__auto___46698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46684_46699__$1))
{var c__15907__auto___46700 = cljs.core.chunk_first.call(null,seq__46684_46699__$1);{
var G__46701 = cljs.core.chunk_rest.call(null,seq__46684_46699__$1);
var G__46702 = c__15907__auto___46700;
var G__46703 = cljs.core.count.call(null,c__15907__auto___46700);
var G__46704 = 0;
seq__46684_46688 = G__46701;
chunk__46685_46689 = G__46702;
count__46686_46690 = G__46703;
i__46687_46691 = G__46704;
continue;
}
} else
{var obj_46705__$1 = cljs.core.first.call(null,seq__46684_46699__$1);var listener_46706 = obj_46705__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_46706.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_46706.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_46706);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_46706);
}
} else
{}
{
var G__46707 = cljs.core.next.call(null,seq__46684_46699__$1);
var G__46708 = null;
var G__46709 = 0;
var G__46710 = 0;
seq__46684_46688 = G__46707;
chunk__46685_46689 = G__46708;
count__46686_46690 = G__46709;
i__46687_46691 = G__46710;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__46711_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__46711_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__46711_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__46711_SHARP_:null))));
});return (function (pnod){var seq__46716 = cljs.core.seq.call(null,event_list);var chunk__46717 = null;var count__46718 = 0;var i__46719 = 0;while(true){
if((i__46719 < count__46718))
{var ev = cljs.core._nth.call(null,chunk__46717,i__46719);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__46720 = seq__46716;
var G__46721 = chunk__46717;
var G__46722 = count__46718;
var G__46723 = (i__46719 + 1);
seq__46716 = G__46720;
chunk__46717 = G__46721;
count__46718 = G__46722;
i__46719 = G__46723;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__46716);if(temp__4098__auto__)
{var seq__46716__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46716__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__46716__$1);{
var G__46724 = cljs.core.chunk_rest.call(null,seq__46716__$1);
var G__46725 = c__15907__auto__;
var G__46726 = cljs.core.count.call(null,c__15907__auto__);
var G__46727 = 0;
seq__46716 = G__46724;
chunk__46717 = G__46725;
count__46718 = G__46726;
i__46719 = G__46727;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__46716__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__46728 = cljs.core.next.call(null,seq__46716__$1);
var G__46729 = null;
var G__46730 = 0;
var G__46731 = 0;
seq__46716 = G__46728;
chunk__46717 = G__46729;
count__46718 = G__46730;
i__46719 = G__46731;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__46732){
var event_list = cljs.core.seq(arglist__46732);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__46733_SHARP_){var seq__46738 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__46733_SHARP_.target));var chunk__46739 = null;var count__46740 = 0;var i__46741 = 0;while(true){
if((i__46741 < count__46740))
{var el = cljs.core._nth.call(null,chunk__46739,i__46741);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__46738,chunk__46739,count__46740,i__46741,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__46733_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__46733_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__46733_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__46738,chunk__46739,count__46740,i__46741,el))
));
{
var G__46742 = seq__46738;
var G__46743 = chunk__46739;
var G__46744 = count__46740;
var G__46745 = (i__46741 + 1);
seq__46738 = G__46742;
chunk__46739 = G__46743;
count__46740 = G__46744;
i__46741 = G__46745;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__46738);if(temp__4098__auto__)
{var seq__46738__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46738__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__46738__$1);{
var G__46746 = cljs.core.chunk_rest.call(null,seq__46738__$1);
var G__46747 = c__15907__auto__;
var G__46748 = cljs.core.count.call(null,c__15907__auto__);
var G__46749 = 0;
seq__46738 = G__46746;
chunk__46739 = G__46747;
count__46740 = G__46748;
i__46741 = G__46749;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__46738__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__46738,chunk__46739,count__46740,i__46741,el,seq__46738__$1,temp__4098__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__46733_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__46733_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__46733_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__46738,chunk__46739,count__46740,i__46741,el,seq__46738__$1,temp__4098__auto__))
));
{
var G__46750 = cljs.core.next.call(null,seq__46738__$1);
var G__46751 = null;
var G__46752 = 0;
var G__46753 = 0;
seq__46738 = G__46750;
chunk__46739 = G__46751;
count__46740 = G__46752;
i__46741 = G__46753;
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
var G__46754 = parent;
var G__46755 = child.parentNode;
parent = G__46754;
child = G__46755;
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