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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__406007_406011 = cljs.core.seq.call(null,listeners);var chunk__406008_406012 = null;var count__406009_406013 = 0;var i__406010_406014 = 0;while(true){
if((i__406010_406014 < count__406009_406013))
{var obj_406015__$1 = cljs.core._nth.call(null,chunk__406008_406012,i__406010_406014);var listener_406016 = obj_406015__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_406016.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_406016.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_406016);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_406016);
}
} else
{}
{
var G__406017 = seq__406007_406011;
var G__406018 = chunk__406008_406012;
var G__406019 = count__406009_406013;
var G__406020 = (i__406010_406014 + 1);
seq__406007_406011 = G__406017;
chunk__406008_406012 = G__406018;
count__406009_406013 = G__406019;
i__406010_406014 = G__406020;
continue;
}
} else
{var temp__4092__auto___406021 = cljs.core.seq.call(null,seq__406007_406011);if(temp__4092__auto___406021)
{var seq__406007_406022__$1 = temp__4092__auto___406021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406007_406022__$1))
{var c__8952__auto___406023 = cljs.core.chunk_first.call(null,seq__406007_406022__$1);{
var G__406024 = cljs.core.chunk_rest.call(null,seq__406007_406022__$1);
var G__406025 = c__8952__auto___406023;
var G__406026 = cljs.core.count.call(null,c__8952__auto___406023);
var G__406027 = 0;
seq__406007_406011 = G__406024;
chunk__406008_406012 = G__406025;
count__406009_406013 = G__406026;
i__406010_406014 = G__406027;
continue;
}
} else
{var obj_406028__$1 = cljs.core.first.call(null,seq__406007_406022__$1);var listener_406029 = obj_406028__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_406029.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_406029.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_406029);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_406029);
}
} else
{}
{
var G__406030 = cljs.core.next.call(null,seq__406007_406022__$1);
var G__406031 = null;
var G__406032 = 0;
var G__406033 = 0;
seq__406007_406011 = G__406030;
chunk__406008_406012 = G__406031;
count__406009_406013 = G__406032;
i__406010_406014 = G__406033;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__406034_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__406034_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__406034_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__406034_SHARP_:null))));
});return (function (pnod){var seq__406039 = cljs.core.seq.call(null,event_list);var chunk__406040 = null;var count__406041 = 0;var i__406042 = 0;while(true){
if((i__406042 < count__406041))
{var ev = cljs.core._nth.call(null,chunk__406040,i__406042);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__406043 = seq__406039;
var G__406044 = chunk__406040;
var G__406045 = count__406041;
var G__406046 = (i__406042 + 1);
seq__406039 = G__406043;
chunk__406040 = G__406044;
count__406041 = G__406045;
i__406042 = G__406046;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406039);if(temp__4092__auto__)
{var seq__406039__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406039__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406039__$1);{
var G__406047 = cljs.core.chunk_rest.call(null,seq__406039__$1);
var G__406048 = c__8952__auto__;
var G__406049 = cljs.core.count.call(null,c__8952__auto__);
var G__406050 = 0;
seq__406039 = G__406047;
chunk__406040 = G__406048;
count__406041 = G__406049;
i__406042 = G__406050;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__406039__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__406051 = cljs.core.next.call(null,seq__406039__$1);
var G__406052 = null;
var G__406053 = 0;
var G__406054 = 0;
seq__406039 = G__406051;
chunk__406040 = G__406052;
count__406041 = G__406053;
i__406042 = G__406054;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__406055){
var event_list = cljs.core.seq(arglist__406055);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__406056_SHARP_){var seq__406061 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__406056_SHARP_.target));var chunk__406062 = null;var count__406063 = 0;var i__406064 = 0;while(true){
if((i__406064 < count__406063))
{var el = cljs.core._nth.call(null,chunk__406062,i__406064);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__406061,chunk__406062,count__406063,i__406064,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__406056_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__406056_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__406056_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__406061,chunk__406062,count__406063,i__406064,el))
));
{
var G__406065 = seq__406061;
var G__406066 = chunk__406062;
var G__406067 = count__406063;
var G__406068 = (i__406064 + 1);
seq__406061 = G__406065;
chunk__406062 = G__406066;
count__406063 = G__406067;
i__406064 = G__406068;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406061);if(temp__4092__auto__)
{var seq__406061__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406061__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406061__$1);{
var G__406069 = cljs.core.chunk_rest.call(null,seq__406061__$1);
var G__406070 = c__8952__auto__;
var G__406071 = cljs.core.count.call(null,c__8952__auto__);
var G__406072 = 0;
seq__406061 = G__406069;
chunk__406062 = G__406070;
count__406063 = G__406071;
i__406064 = G__406072;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__406061__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__406061,chunk__406062,count__406063,i__406064,el,seq__406061__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__406056_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__406056_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__406056_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__406061,chunk__406062,count__406063,i__406064,el,seq__406061__$1,temp__4092__auto__))
));
{
var G__406073 = cljs.core.next.call(null,seq__406061__$1);
var G__406074 = null;
var G__406075 = 0;
var G__406076 = 0;
seq__406061 = G__406073;
chunk__406062 = G__406074;
count__406063 = G__406075;
i__406064 = G__406076;
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
var G__406077 = parent;
var G__406078 = child.parentNode;
parent = G__406077;
child = G__406078;
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