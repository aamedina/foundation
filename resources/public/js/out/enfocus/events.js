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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__190628_190632 = cljs.core.seq.call(null,listeners);var chunk__190629_190633 = null;var count__190630_190634 = 0;var i__190631_190635 = 0;while(true){
if((i__190631_190635 < count__190630_190634))
{var obj_190636__$1 = cljs.core._nth.call(null,chunk__190629_190633,i__190631_190635);var listener_190637 = obj_190636__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_190637.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_190637.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_190637);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_190637);
}
} else
{}
{
var G__190638 = seq__190628_190632;
var G__190639 = chunk__190629_190633;
var G__190640 = count__190630_190634;
var G__190641 = (i__190631_190635 + 1);
seq__190628_190632 = G__190638;
chunk__190629_190633 = G__190639;
count__190630_190634 = G__190640;
i__190631_190635 = G__190641;
continue;
}
} else
{var temp__4092__auto___190642 = cljs.core.seq.call(null,seq__190628_190632);if(temp__4092__auto___190642)
{var seq__190628_190643__$1 = temp__4092__auto___190642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190628_190643__$1))
{var c__8952__auto___190644 = cljs.core.chunk_first.call(null,seq__190628_190643__$1);{
var G__190645 = cljs.core.chunk_rest.call(null,seq__190628_190643__$1);
var G__190646 = c__8952__auto___190644;
var G__190647 = cljs.core.count.call(null,c__8952__auto___190644);
var G__190648 = 0;
seq__190628_190632 = G__190645;
chunk__190629_190633 = G__190646;
count__190630_190634 = G__190647;
i__190631_190635 = G__190648;
continue;
}
} else
{var obj_190649__$1 = cljs.core.first.call(null,seq__190628_190643__$1);var listener_190650 = obj_190649__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_190650.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_190650.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_190650);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_190650);
}
} else
{}
{
var G__190651 = cljs.core.next.call(null,seq__190628_190643__$1);
var G__190652 = null;
var G__190653 = 0;
var G__190654 = 0;
seq__190628_190632 = G__190651;
chunk__190629_190633 = G__190652;
count__190630_190634 = G__190653;
i__190631_190635 = G__190654;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__190655_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__190655_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__190655_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__190655_SHARP_:null))));
});return (function (pnod){var seq__190660 = cljs.core.seq.call(null,event_list);var chunk__190661 = null;var count__190662 = 0;var i__190663 = 0;while(true){
if((i__190663 < count__190662))
{var ev = cljs.core._nth.call(null,chunk__190661,i__190663);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__190664 = seq__190660;
var G__190665 = chunk__190661;
var G__190666 = count__190662;
var G__190667 = (i__190663 + 1);
seq__190660 = G__190664;
chunk__190661 = G__190665;
count__190662 = G__190666;
i__190663 = G__190667;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190660);if(temp__4092__auto__)
{var seq__190660__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190660__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190660__$1);{
var G__190668 = cljs.core.chunk_rest.call(null,seq__190660__$1);
var G__190669 = c__8952__auto__;
var G__190670 = cljs.core.count.call(null,c__8952__auto__);
var G__190671 = 0;
seq__190660 = G__190668;
chunk__190661 = G__190669;
count__190662 = G__190670;
i__190663 = G__190671;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__190660__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__190672 = cljs.core.next.call(null,seq__190660__$1);
var G__190673 = null;
var G__190674 = 0;
var G__190675 = 0;
seq__190660 = G__190672;
chunk__190661 = G__190673;
count__190662 = G__190674;
i__190663 = G__190675;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__190676){
var event_list = cljs.core.seq(arglist__190676);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__190677_SHARP_){var seq__190682 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__190677_SHARP_.target));var chunk__190683 = null;var count__190684 = 0;var i__190685 = 0;while(true){
if((i__190685 < count__190684))
{var el = cljs.core._nth.call(null,chunk__190683,i__190685);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__190682,chunk__190683,count__190684,i__190685,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__190677_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__190677_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__190677_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__190682,chunk__190683,count__190684,i__190685,el))
));
{
var G__190686 = seq__190682;
var G__190687 = chunk__190683;
var G__190688 = count__190684;
var G__190689 = (i__190685 + 1);
seq__190682 = G__190686;
chunk__190683 = G__190687;
count__190684 = G__190688;
i__190685 = G__190689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190682);if(temp__4092__auto__)
{var seq__190682__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190682__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190682__$1);{
var G__190690 = cljs.core.chunk_rest.call(null,seq__190682__$1);
var G__190691 = c__8952__auto__;
var G__190692 = cljs.core.count.call(null,c__8952__auto__);
var G__190693 = 0;
seq__190682 = G__190690;
chunk__190683 = G__190691;
count__190684 = G__190692;
i__190685 = G__190693;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__190682__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__190682,chunk__190683,count__190684,i__190685,el,seq__190682__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__190677_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__190677_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__190677_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__190682,chunk__190683,count__190684,i__190685,el,seq__190682__$1,temp__4092__auto__))
));
{
var G__190694 = cljs.core.next.call(null,seq__190682__$1);
var G__190695 = null;
var G__190696 = 0;
var G__190697 = 0;
seq__190682 = G__190694;
chunk__190683 = G__190695;
count__190684 = G__190696;
i__190685 = G__190697;
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
var G__190698 = parent;
var G__190699 = child.parentNode;
parent = G__190698;
child = G__190699;
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