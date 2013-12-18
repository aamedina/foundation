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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__85727_85731 = cljs.core.seq.call(null,listeners);var chunk__85728_85732 = null;var count__85729_85733 = 0;var i__85730_85734 = 0;while(true){
if((i__85730_85734 < count__85729_85733))
{var obj_85735__$1 = cljs.core._nth.call(null,chunk__85728_85732,i__85730_85734);var listener_85736 = obj_85735__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_85736.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_85736.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_85736);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_85736);
}
} else
{}
{
var G__85737 = seq__85727_85731;
var G__85738 = chunk__85728_85732;
var G__85739 = count__85729_85733;
var G__85740 = (i__85730_85734 + 1);
seq__85727_85731 = G__85737;
chunk__85728_85732 = G__85738;
count__85729_85733 = G__85739;
i__85730_85734 = G__85740;
continue;
}
} else
{var temp__4092__auto___85741 = cljs.core.seq.call(null,seq__85727_85731);if(temp__4092__auto___85741)
{var seq__85727_85742__$1 = temp__4092__auto___85741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85727_85742__$1))
{var c__8957__auto___85743 = cljs.core.chunk_first.call(null,seq__85727_85742__$1);{
var G__85744 = cljs.core.chunk_rest.call(null,seq__85727_85742__$1);
var G__85745 = c__8957__auto___85743;
var G__85746 = cljs.core.count.call(null,c__8957__auto___85743);
var G__85747 = 0;
seq__85727_85731 = G__85744;
chunk__85728_85732 = G__85745;
count__85729_85733 = G__85746;
i__85730_85734 = G__85747;
continue;
}
} else
{var obj_85748__$1 = cljs.core.first.call(null,seq__85727_85742__$1);var listener_85749 = obj_85748__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_85749.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_85749.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_85749);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_85749);
}
} else
{}
{
var G__85750 = cljs.core.next.call(null,seq__85727_85742__$1);
var G__85751 = null;
var G__85752 = 0;
var G__85753 = 0;
seq__85727_85731 = G__85750;
chunk__85728_85732 = G__85751;
count__85729_85733 = G__85752;
i__85730_85734 = G__85753;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__85754_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__85754_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__85754_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__85754_SHARP_:null))));
});return (function (pnod){var seq__85759 = cljs.core.seq.call(null,event_list);var chunk__85760 = null;var count__85761 = 0;var i__85762 = 0;while(true){
if((i__85762 < count__85761))
{var ev = cljs.core._nth.call(null,chunk__85760,i__85762);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__85763 = seq__85759;
var G__85764 = chunk__85760;
var G__85765 = count__85761;
var G__85766 = (i__85762 + 1);
seq__85759 = G__85763;
chunk__85760 = G__85764;
count__85761 = G__85765;
i__85762 = G__85766;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__85759);if(temp__4092__auto__)
{var seq__85759__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85759__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__85759__$1);{
var G__85767 = cljs.core.chunk_rest.call(null,seq__85759__$1);
var G__85768 = c__8957__auto__;
var G__85769 = cljs.core.count.call(null,c__8957__auto__);
var G__85770 = 0;
seq__85759 = G__85767;
chunk__85760 = G__85768;
count__85761 = G__85769;
i__85762 = G__85770;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__85759__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__85771 = cljs.core.next.call(null,seq__85759__$1);
var G__85772 = null;
var G__85773 = 0;
var G__85774 = 0;
seq__85759 = G__85771;
chunk__85760 = G__85772;
count__85761 = G__85773;
i__85762 = G__85774;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__85775){
var event_list = cljs.core.seq(arglist__85775);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__85776_SHARP_){var seq__85781 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__85776_SHARP_.target));var chunk__85782 = null;var count__85783 = 0;var i__85784 = 0;while(true){
if((i__85784 < count__85783))
{var el = cljs.core._nth.call(null,chunk__85782,i__85784);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__85781,chunk__85782,count__85783,i__85784,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__85776_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__85776_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__85776_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__85781,chunk__85782,count__85783,i__85784,el))
));
{
var G__85785 = seq__85781;
var G__85786 = chunk__85782;
var G__85787 = count__85783;
var G__85788 = (i__85784 + 1);
seq__85781 = G__85785;
chunk__85782 = G__85786;
count__85783 = G__85787;
i__85784 = G__85788;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__85781);if(temp__4092__auto__)
{var seq__85781__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85781__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__85781__$1);{
var G__85789 = cljs.core.chunk_rest.call(null,seq__85781__$1);
var G__85790 = c__8957__auto__;
var G__85791 = cljs.core.count.call(null,c__8957__auto__);
var G__85792 = 0;
seq__85781 = G__85789;
chunk__85782 = G__85790;
count__85783 = G__85791;
i__85784 = G__85792;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__85781__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__85781,chunk__85782,count__85783,i__85784,el,seq__85781__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__85776_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__85776_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__85776_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__85781,chunk__85782,count__85783,i__85784,el,seq__85781__$1,temp__4092__auto__))
));
{
var G__85793 = cljs.core.next.call(null,seq__85781__$1);
var G__85794 = null;
var G__85795 = 0;
var G__85796 = 0;
seq__85781 = G__85793;
chunk__85782 = G__85794;
count__85783 = G__85795;
i__85784 = G__85796;
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
var G__85797 = parent;
var G__85798 = child.parentNode;
parent = G__85797;
child = G__85798;
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