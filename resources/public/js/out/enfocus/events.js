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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__182752_182756 = cljs.core.seq.call(null,listeners);var chunk__182753_182757 = null;var count__182754_182758 = 0;var i__182755_182759 = 0;while(true){
if((i__182755_182759 < count__182754_182758))
{var obj_182760__$1 = cljs.core._nth.call(null,chunk__182753_182757,i__182755_182759);var listener_182761 = obj_182760__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_182761.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_182761.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_182761);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_182761);
}
} else
{}
{
var G__182762 = seq__182752_182756;
var G__182763 = chunk__182753_182757;
var G__182764 = count__182754_182758;
var G__182765 = (i__182755_182759 + 1);
seq__182752_182756 = G__182762;
chunk__182753_182757 = G__182763;
count__182754_182758 = G__182764;
i__182755_182759 = G__182765;
continue;
}
} else
{var temp__4092__auto___182766 = cljs.core.seq.call(null,seq__182752_182756);if(temp__4092__auto___182766)
{var seq__182752_182767__$1 = temp__4092__auto___182766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182752_182767__$1))
{var c__8952__auto___182768 = cljs.core.chunk_first.call(null,seq__182752_182767__$1);{
var G__182769 = cljs.core.chunk_rest.call(null,seq__182752_182767__$1);
var G__182770 = c__8952__auto___182768;
var G__182771 = cljs.core.count.call(null,c__8952__auto___182768);
var G__182772 = 0;
seq__182752_182756 = G__182769;
chunk__182753_182757 = G__182770;
count__182754_182758 = G__182771;
i__182755_182759 = G__182772;
continue;
}
} else
{var obj_182773__$1 = cljs.core.first.call(null,seq__182752_182767__$1);var listener_182774 = obj_182773__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_182774.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_182774.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_182774);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_182774);
}
} else
{}
{
var G__182775 = cljs.core.next.call(null,seq__182752_182767__$1);
var G__182776 = null;
var G__182777 = 0;
var G__182778 = 0;
seq__182752_182756 = G__182775;
chunk__182753_182757 = G__182776;
count__182754_182758 = G__182777;
i__182755_182759 = G__182778;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__182779_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__182779_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__182779_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__182779_SHARP_:null))));
});return (function (pnod){var seq__182784 = cljs.core.seq.call(null,event_list);var chunk__182785 = null;var count__182786 = 0;var i__182787 = 0;while(true){
if((i__182787 < count__182786))
{var ev = cljs.core._nth.call(null,chunk__182785,i__182787);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__182788 = seq__182784;
var G__182789 = chunk__182785;
var G__182790 = count__182786;
var G__182791 = (i__182787 + 1);
seq__182784 = G__182788;
chunk__182785 = G__182789;
count__182786 = G__182790;
i__182787 = G__182791;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__182784);if(temp__4092__auto__)
{var seq__182784__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182784__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__182784__$1);{
var G__182792 = cljs.core.chunk_rest.call(null,seq__182784__$1);
var G__182793 = c__8952__auto__;
var G__182794 = cljs.core.count.call(null,c__8952__auto__);
var G__182795 = 0;
seq__182784 = G__182792;
chunk__182785 = G__182793;
count__182786 = G__182794;
i__182787 = G__182795;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__182784__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__182796 = cljs.core.next.call(null,seq__182784__$1);
var G__182797 = null;
var G__182798 = 0;
var G__182799 = 0;
seq__182784 = G__182796;
chunk__182785 = G__182797;
count__182786 = G__182798;
i__182787 = G__182799;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__182800){
var event_list = cljs.core.seq(arglist__182800);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__182801_SHARP_){var seq__182806 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__182801_SHARP_.target));var chunk__182807 = null;var count__182808 = 0;var i__182809 = 0;while(true){
if((i__182809 < count__182808))
{var el = cljs.core._nth.call(null,chunk__182807,i__182809);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__182806,chunk__182807,count__182808,i__182809,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__182801_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__182801_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__182801_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__182806,chunk__182807,count__182808,i__182809,el))
));
{
var G__182810 = seq__182806;
var G__182811 = chunk__182807;
var G__182812 = count__182808;
var G__182813 = (i__182809 + 1);
seq__182806 = G__182810;
chunk__182807 = G__182811;
count__182808 = G__182812;
i__182809 = G__182813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__182806);if(temp__4092__auto__)
{var seq__182806__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182806__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__182806__$1);{
var G__182814 = cljs.core.chunk_rest.call(null,seq__182806__$1);
var G__182815 = c__8952__auto__;
var G__182816 = cljs.core.count.call(null,c__8952__auto__);
var G__182817 = 0;
seq__182806 = G__182814;
chunk__182807 = G__182815;
count__182808 = G__182816;
i__182809 = G__182817;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__182806__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__182806,chunk__182807,count__182808,i__182809,el,seq__182806__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__182801_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__182801_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__182801_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__182806,chunk__182807,count__182808,i__182809,el,seq__182806__$1,temp__4092__auto__))
));
{
var G__182818 = cljs.core.next.call(null,seq__182806__$1);
var G__182819 = null;
var G__182820 = 0;
var G__182821 = 0;
seq__182806 = G__182818;
chunk__182807 = G__182819;
count__182808 = G__182820;
i__182809 = G__182821;
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
var G__182822 = parent;
var G__182823 = child.parentNode;
parent = G__182822;
child = G__182823;
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