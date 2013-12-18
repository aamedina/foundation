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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__46071_46075 = cljs.core.seq.call(null,listeners);var chunk__46072_46076 = null;var count__46073_46077 = 0;var i__46074_46078 = 0;while(true){
if((i__46074_46078 < count__46073_46077))
{var obj_46079__$1 = cljs.core._nth.call(null,chunk__46072_46076,i__46074_46078);var listener_46080 = obj_46079__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_46080.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_46080.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_46080);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_46080);
}
} else
{}
{
var G__46081 = seq__46071_46075;
var G__46082 = chunk__46072_46076;
var G__46083 = count__46073_46077;
var G__46084 = (i__46074_46078 + 1);
seq__46071_46075 = G__46081;
chunk__46072_46076 = G__46082;
count__46073_46077 = G__46083;
i__46074_46078 = G__46084;
continue;
}
} else
{var temp__4092__auto___46085 = cljs.core.seq.call(null,seq__46071_46075);if(temp__4092__auto___46085)
{var seq__46071_46086__$1 = temp__4092__auto___46085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46071_46086__$1))
{var c__8974__auto___46087 = cljs.core.chunk_first.call(null,seq__46071_46086__$1);{
var G__46088 = cljs.core.chunk_rest.call(null,seq__46071_46086__$1);
var G__46089 = c__8974__auto___46087;
var G__46090 = cljs.core.count.call(null,c__8974__auto___46087);
var G__46091 = 0;
seq__46071_46075 = G__46088;
chunk__46072_46076 = G__46089;
count__46073_46077 = G__46090;
i__46074_46078 = G__46091;
continue;
}
} else
{var obj_46092__$1 = cljs.core.first.call(null,seq__46071_46086__$1);var listener_46093 = obj_46092__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_46093.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_46093.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_46093);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_46093);
}
} else
{}
{
var G__46094 = cljs.core.next.call(null,seq__46071_46086__$1);
var G__46095 = null;
var G__46096 = 0;
var G__46097 = 0;
seq__46071_46075 = G__46094;
chunk__46072_46076 = G__46095;
count__46073_46077 = G__46096;
i__46074_46078 = G__46097;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__46098_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__46098_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__46098_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__46098_SHARP_:null))));
});return (function (pnod){var seq__46103 = cljs.core.seq.call(null,event_list);var chunk__46104 = null;var count__46105 = 0;var i__46106 = 0;while(true){
if((i__46106 < count__46105))
{var ev = cljs.core._nth.call(null,chunk__46104,i__46106);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__46107 = seq__46103;
var G__46108 = chunk__46104;
var G__46109 = count__46105;
var G__46110 = (i__46106 + 1);
seq__46103 = G__46107;
chunk__46104 = G__46108;
count__46105 = G__46109;
i__46106 = G__46110;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46103);if(temp__4092__auto__)
{var seq__46103__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46103__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46103__$1);{
var G__46111 = cljs.core.chunk_rest.call(null,seq__46103__$1);
var G__46112 = c__8974__auto__;
var G__46113 = cljs.core.count.call(null,c__8974__auto__);
var G__46114 = 0;
seq__46103 = G__46111;
chunk__46104 = G__46112;
count__46105 = G__46113;
i__46106 = G__46114;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__46103__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__46115 = cljs.core.next.call(null,seq__46103__$1);
var G__46116 = null;
var G__46117 = 0;
var G__46118 = 0;
seq__46103 = G__46115;
chunk__46104 = G__46116;
count__46105 = G__46117;
i__46106 = G__46118;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__46119){
var event_list = cljs.core.seq(arglist__46119);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__46120_SHARP_){var seq__46125 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__46120_SHARP_.target));var chunk__46126 = null;var count__46127 = 0;var i__46128 = 0;while(true){
if((i__46128 < count__46127))
{var el = cljs.core._nth.call(null,chunk__46126,i__46128);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__46125,chunk__46126,count__46127,i__46128,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__46120_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__46120_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__46120_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__46125,chunk__46126,count__46127,i__46128,el))
));
{
var G__46129 = seq__46125;
var G__46130 = chunk__46126;
var G__46131 = count__46127;
var G__46132 = (i__46128 + 1);
seq__46125 = G__46129;
chunk__46126 = G__46130;
count__46127 = G__46131;
i__46128 = G__46132;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46125);if(temp__4092__auto__)
{var seq__46125__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46125__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46125__$1);{
var G__46133 = cljs.core.chunk_rest.call(null,seq__46125__$1);
var G__46134 = c__8974__auto__;
var G__46135 = cljs.core.count.call(null,c__8974__auto__);
var G__46136 = 0;
seq__46125 = G__46133;
chunk__46126 = G__46134;
count__46127 = G__46135;
i__46128 = G__46136;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__46125__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__46125,chunk__46126,count__46127,i__46128,el,seq__46125__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__46120_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__46120_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__46120_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__46125,chunk__46126,count__46127,i__46128,el,seq__46125__$1,temp__4092__auto__))
));
{
var G__46137 = cljs.core.next.call(null,seq__46125__$1);
var G__46138 = null;
var G__46139 = 0;
var G__46140 = 0;
seq__46125 = G__46137;
chunk__46126 = G__46138;
count__46127 = G__46139;
i__46128 = G__46140;
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
var G__46141 = parent;
var G__46142 = child.parentNode;
parent = G__46141;
child = G__46142;
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