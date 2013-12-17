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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__25659_25663 = cljs.core.seq.call(null,listeners);var chunk__25660_25664 = null;var count__25661_25665 = 0;var i__25662_25666 = 0;while(true){
if((i__25662_25666 < count__25661_25665))
{var obj_25667__$1 = cljs.core._nth.call(null,chunk__25660_25664,i__25662_25666);var listener_25668 = obj_25667__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_25668.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_25668.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_25668);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_25668);
}
} else
{}
{
var G__25669 = seq__25659_25663;
var G__25670 = chunk__25660_25664;
var G__25671 = count__25661_25665;
var G__25672 = (i__25662_25666 + 1);
seq__25659_25663 = G__25669;
chunk__25660_25664 = G__25670;
count__25661_25665 = G__25671;
i__25662_25666 = G__25672;
continue;
}
} else
{var temp__4092__auto___25673 = cljs.core.seq.call(null,seq__25659_25663);if(temp__4092__auto___25673)
{var seq__25659_25674__$1 = temp__4092__auto___25673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25659_25674__$1))
{var c__8571__auto___25675 = cljs.core.chunk_first.call(null,seq__25659_25674__$1);{
var G__25676 = cljs.core.chunk_rest.call(null,seq__25659_25674__$1);
var G__25677 = c__8571__auto___25675;
var G__25678 = cljs.core.count.call(null,c__8571__auto___25675);
var G__25679 = 0;
seq__25659_25663 = G__25676;
chunk__25660_25664 = G__25677;
count__25661_25665 = G__25678;
i__25662_25666 = G__25679;
continue;
}
} else
{var obj_25680__$1 = cljs.core.first.call(null,seq__25659_25674__$1);var listener_25681 = obj_25680__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_25681.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_25681.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_25681);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_25681);
}
} else
{}
{
var G__25682 = cljs.core.next.call(null,seq__25659_25674__$1);
var G__25683 = null;
var G__25684 = 0;
var G__25685 = 0;
seq__25659_25663 = G__25682;
chunk__25660_25664 = G__25683;
count__25661_25665 = G__25684;
i__25662_25666 = G__25685;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__25686_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__25686_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__25686_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__25686_SHARP_:null))));
});return (function (pnod){var seq__25691 = cljs.core.seq.call(null,event_list);var chunk__25692 = null;var count__25693 = 0;var i__25694 = 0;while(true){
if((i__25694 < count__25693))
{var ev = cljs.core._nth.call(null,chunk__25692,i__25694);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__25695 = seq__25691;
var G__25696 = chunk__25692;
var G__25697 = count__25693;
var G__25698 = (i__25694 + 1);
seq__25691 = G__25695;
chunk__25692 = G__25696;
count__25693 = G__25697;
i__25694 = G__25698;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25691);if(temp__4092__auto__)
{var seq__25691__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25691__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__25691__$1);{
var G__25699 = cljs.core.chunk_rest.call(null,seq__25691__$1);
var G__25700 = c__8571__auto__;
var G__25701 = cljs.core.count.call(null,c__8571__auto__);
var G__25702 = 0;
seq__25691 = G__25699;
chunk__25692 = G__25700;
count__25693 = G__25701;
i__25694 = G__25702;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__25691__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__25703 = cljs.core.next.call(null,seq__25691__$1);
var G__25704 = null;
var G__25705 = 0;
var G__25706 = 0;
seq__25691 = G__25703;
chunk__25692 = G__25704;
count__25693 = G__25705;
i__25694 = G__25706;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__25707){
var event_list = cljs.core.seq(arglist__25707);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__25708_SHARP_){var seq__25713 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__25708_SHARP_.target));var chunk__25714 = null;var count__25715 = 0;var i__25716 = 0;while(true){
if((i__25716 < count__25715))
{var el = cljs.core._nth.call(null,chunk__25714,i__25716);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__25713,chunk__25714,count__25715,i__25716,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__25708_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__25708_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__25708_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__25713,chunk__25714,count__25715,i__25716,el))
));
{
var G__25717 = seq__25713;
var G__25718 = chunk__25714;
var G__25719 = count__25715;
var G__25720 = (i__25716 + 1);
seq__25713 = G__25717;
chunk__25714 = G__25718;
count__25715 = G__25719;
i__25716 = G__25720;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25713);if(temp__4092__auto__)
{var seq__25713__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25713__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__25713__$1);{
var G__25721 = cljs.core.chunk_rest.call(null,seq__25713__$1);
var G__25722 = c__8571__auto__;
var G__25723 = cljs.core.count.call(null,c__8571__auto__);
var G__25724 = 0;
seq__25713 = G__25721;
chunk__25714 = G__25722;
count__25715 = G__25723;
i__25716 = G__25724;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__25713__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__25713,chunk__25714,count__25715,i__25716,el,seq__25713__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__25708_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__25708_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__25708_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__25713,chunk__25714,count__25715,i__25716,el,seq__25713__$1,temp__4092__auto__))
));
{
var G__25725 = cljs.core.next.call(null,seq__25713__$1);
var G__25726 = null;
var G__25727 = 0;
var G__25728 = 0;
seq__25713 = G__25725;
chunk__25714 = G__25726;
count__25715 = G__25727;
i__25716 = G__25728;
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
var G__25729 = parent;
var G__25730 = child.parentNode;
parent = G__25729;
child = G__25730;
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
