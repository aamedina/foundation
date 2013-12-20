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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__275232_275236 = cljs.core.seq.call(null,listeners);var chunk__275233_275237 = null;var count__275234_275238 = 0;var i__275235_275239 = 0;while(true){
if((i__275235_275239 < count__275234_275238))
{var obj_275240__$1 = cljs.core._nth.call(null,chunk__275233_275237,i__275235_275239);var listener_275241 = obj_275240__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_275241.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_275241.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_275241);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_275241);
}
} else
{}
{
var G__275242 = seq__275232_275236;
var G__275243 = chunk__275233_275237;
var G__275244 = count__275234_275238;
var G__275245 = (i__275235_275239 + 1);
seq__275232_275236 = G__275242;
chunk__275233_275237 = G__275243;
count__275234_275238 = G__275244;
i__275235_275239 = G__275245;
continue;
}
} else
{var temp__4092__auto___275246 = cljs.core.seq.call(null,seq__275232_275236);if(temp__4092__auto___275246)
{var seq__275232_275247__$1 = temp__4092__auto___275246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275232_275247__$1))
{var c__8952__auto___275248 = cljs.core.chunk_first.call(null,seq__275232_275247__$1);{
var G__275249 = cljs.core.chunk_rest.call(null,seq__275232_275247__$1);
var G__275250 = c__8952__auto___275248;
var G__275251 = cljs.core.count.call(null,c__8952__auto___275248);
var G__275252 = 0;
seq__275232_275236 = G__275249;
chunk__275233_275237 = G__275250;
count__275234_275238 = G__275251;
i__275235_275239 = G__275252;
continue;
}
} else
{var obj_275253__$1 = cljs.core.first.call(null,seq__275232_275247__$1);var listener_275254 = obj_275253__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_275254.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_275254.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_275254);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_275254);
}
} else
{}
{
var G__275255 = cljs.core.next.call(null,seq__275232_275247__$1);
var G__275256 = null;
var G__275257 = 0;
var G__275258 = 0;
seq__275232_275236 = G__275255;
chunk__275233_275237 = G__275256;
count__275234_275238 = G__275257;
i__275235_275239 = G__275258;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__275259_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__275259_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__275259_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__275259_SHARP_:null))));
});return (function (pnod){var seq__275264 = cljs.core.seq.call(null,event_list);var chunk__275265 = null;var count__275266 = 0;var i__275267 = 0;while(true){
if((i__275267 < count__275266))
{var ev = cljs.core._nth.call(null,chunk__275265,i__275267);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__275268 = seq__275264;
var G__275269 = chunk__275265;
var G__275270 = count__275266;
var G__275271 = (i__275267 + 1);
seq__275264 = G__275268;
chunk__275265 = G__275269;
count__275266 = G__275270;
i__275267 = G__275271;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275264);if(temp__4092__auto__)
{var seq__275264__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275264__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275264__$1);{
var G__275272 = cljs.core.chunk_rest.call(null,seq__275264__$1);
var G__275273 = c__8952__auto__;
var G__275274 = cljs.core.count.call(null,c__8952__auto__);
var G__275275 = 0;
seq__275264 = G__275272;
chunk__275265 = G__275273;
count__275266 = G__275274;
i__275267 = G__275275;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__275264__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__275276 = cljs.core.next.call(null,seq__275264__$1);
var G__275277 = null;
var G__275278 = 0;
var G__275279 = 0;
seq__275264 = G__275276;
chunk__275265 = G__275277;
count__275266 = G__275278;
i__275267 = G__275279;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__275280){
var event_list = cljs.core.seq(arglist__275280);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__275281_SHARP_){var seq__275286 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__275281_SHARP_.target));var chunk__275287 = null;var count__275288 = 0;var i__275289 = 0;while(true){
if((i__275289 < count__275288))
{var el = cljs.core._nth.call(null,chunk__275287,i__275289);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__275286,chunk__275287,count__275288,i__275289,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__275281_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__275281_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__275281_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__275286,chunk__275287,count__275288,i__275289,el))
));
{
var G__275290 = seq__275286;
var G__275291 = chunk__275287;
var G__275292 = count__275288;
var G__275293 = (i__275289 + 1);
seq__275286 = G__275290;
chunk__275287 = G__275291;
count__275288 = G__275292;
i__275289 = G__275293;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275286);if(temp__4092__auto__)
{var seq__275286__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275286__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275286__$1);{
var G__275294 = cljs.core.chunk_rest.call(null,seq__275286__$1);
var G__275295 = c__8952__auto__;
var G__275296 = cljs.core.count.call(null,c__8952__auto__);
var G__275297 = 0;
seq__275286 = G__275294;
chunk__275287 = G__275295;
count__275288 = G__275296;
i__275289 = G__275297;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__275286__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__275286,chunk__275287,count__275288,i__275289,el,seq__275286__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__275281_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__275281_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__275281_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__275286,chunk__275287,count__275288,i__275289,el,seq__275286__$1,temp__4092__auto__))
));
{
var G__275298 = cljs.core.next.call(null,seq__275286__$1);
var G__275299 = null;
var G__275300 = 0;
var G__275301 = 0;
seq__275286 = G__275298;
chunk__275287 = G__275299;
count__275288 = G__275300;
i__275289 = G__275301;
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
var G__275302 = parent;
var G__275303 = child.parentNode;
parent = G__275302;
child = G__275303;
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