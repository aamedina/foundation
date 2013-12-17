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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__25202_25206 = cljs.core.seq.call(null,listeners);var chunk__25203_25207 = null;var count__25204_25208 = 0;var i__25205_25209 = 0;while(true){
if((i__25205_25209 < count__25204_25208))
{var obj_25210__$1 = cljs.core._nth.call(null,chunk__25203_25207,i__25205_25209);var listener_25211 = obj_25210__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_25211.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_25211.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_25211);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_25211);
}
} else
{}
{
var G__25212 = seq__25202_25206;
var G__25213 = chunk__25203_25207;
var G__25214 = count__25204_25208;
var G__25215 = (i__25205_25209 + 1);
seq__25202_25206 = G__25212;
chunk__25203_25207 = G__25213;
count__25204_25208 = G__25214;
i__25205_25209 = G__25215;
continue;
}
} else
{var temp__4092__auto___25216 = cljs.core.seq.call(null,seq__25202_25206);if(temp__4092__auto___25216)
{var seq__25202_25217__$1 = temp__4092__auto___25216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25202_25217__$1))
{var c__8552__auto___25218 = cljs.core.chunk_first.call(null,seq__25202_25217__$1);{
var G__25219 = cljs.core.chunk_rest.call(null,seq__25202_25217__$1);
var G__25220 = c__8552__auto___25218;
var G__25221 = cljs.core.count.call(null,c__8552__auto___25218);
var G__25222 = 0;
seq__25202_25206 = G__25219;
chunk__25203_25207 = G__25220;
count__25204_25208 = G__25221;
i__25205_25209 = G__25222;
continue;
}
} else
{var obj_25223__$1 = cljs.core.first.call(null,seq__25202_25217__$1);var listener_25224 = obj_25223__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_25224.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_25224.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_25224);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_25224);
}
} else
{}
{
var G__25225 = cljs.core.next.call(null,seq__25202_25217__$1);
var G__25226 = null;
var G__25227 = 0;
var G__25228 = 0;
seq__25202_25206 = G__25225;
chunk__25203_25207 = G__25226;
count__25204_25208 = G__25227;
i__25205_25209 = G__25228;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__25229_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__25229_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__25229_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__25229_SHARP_:null))));
});return (function (pnod){var seq__25234 = cljs.core.seq.call(null,event_list);var chunk__25235 = null;var count__25236 = 0;var i__25237 = 0;while(true){
if((i__25237 < count__25236))
{var ev = cljs.core._nth.call(null,chunk__25235,i__25237);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__25238 = seq__25234;
var G__25239 = chunk__25235;
var G__25240 = count__25236;
var G__25241 = (i__25237 + 1);
seq__25234 = G__25238;
chunk__25235 = G__25239;
count__25236 = G__25240;
i__25237 = G__25241;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25234);if(temp__4092__auto__)
{var seq__25234__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25234__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25234__$1);{
var G__25242 = cljs.core.chunk_rest.call(null,seq__25234__$1);
var G__25243 = c__8552__auto__;
var G__25244 = cljs.core.count.call(null,c__8552__auto__);
var G__25245 = 0;
seq__25234 = G__25242;
chunk__25235 = G__25243;
count__25236 = G__25244;
i__25237 = G__25245;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__25234__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__25246 = cljs.core.next.call(null,seq__25234__$1);
var G__25247 = null;
var G__25248 = 0;
var G__25249 = 0;
seq__25234 = G__25246;
chunk__25235 = G__25247;
count__25236 = G__25248;
i__25237 = G__25249;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__25250){
var event_list = cljs.core.seq(arglist__25250);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__25251_SHARP_){var seq__25256 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__25251_SHARP_.target));var chunk__25257 = null;var count__25258 = 0;var i__25259 = 0;while(true){
if((i__25259 < count__25258))
{var el = cljs.core._nth.call(null,chunk__25257,i__25259);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__25256,chunk__25257,count__25258,i__25259,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__25251_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__25251_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__25251_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__25256,chunk__25257,count__25258,i__25259,el))
));
{
var G__25260 = seq__25256;
var G__25261 = chunk__25257;
var G__25262 = count__25258;
var G__25263 = (i__25259 + 1);
seq__25256 = G__25260;
chunk__25257 = G__25261;
count__25258 = G__25262;
i__25259 = G__25263;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25256);if(temp__4092__auto__)
{var seq__25256__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25256__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25256__$1);{
var G__25264 = cljs.core.chunk_rest.call(null,seq__25256__$1);
var G__25265 = c__8552__auto__;
var G__25266 = cljs.core.count.call(null,c__8552__auto__);
var G__25267 = 0;
seq__25256 = G__25264;
chunk__25257 = G__25265;
count__25258 = G__25266;
i__25259 = G__25267;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__25256__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__25256,chunk__25257,count__25258,i__25259,el,seq__25256__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__25251_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__25251_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__25251_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__25256,chunk__25257,count__25258,i__25259,el,seq__25256__$1,temp__4092__auto__))
));
{
var G__25268 = cljs.core.next.call(null,seq__25256__$1);
var G__25269 = null;
var G__25270 = 0;
var G__25271 = 0;
seq__25256 = G__25268;
chunk__25257 = G__25269;
count__25258 = G__25270;
i__25259 = G__25271;
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
var G__25272 = parent;
var G__25273 = child.parentNode;
parent = G__25272;
child = G__25273;
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
