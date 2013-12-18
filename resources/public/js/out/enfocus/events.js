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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__29388_29392 = cljs.core.seq.call(null,listeners);var chunk__29389_29393 = null;var count__29390_29394 = 0;var i__29391_29395 = 0;while(true){
if((i__29391_29395 < count__29390_29394))
{var obj_29396__$1 = cljs.core._nth.call(null,chunk__29389_29393,i__29391_29395);var listener_29397 = obj_29396__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_29397.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_29397.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_29397);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_29397);
}
} else
{}
{
var G__29398 = seq__29388_29392;
var G__29399 = chunk__29389_29393;
var G__29400 = count__29390_29394;
var G__29401 = (i__29391_29395 + 1);
seq__29388_29392 = G__29398;
chunk__29389_29393 = G__29399;
count__29390_29394 = G__29400;
i__29391_29395 = G__29401;
continue;
}
} else
{var temp__4092__auto___29402 = cljs.core.seq.call(null,seq__29388_29392);if(temp__4092__auto___29402)
{var seq__29388_29403__$1 = temp__4092__auto___29402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29388_29403__$1))
{var c__8957__auto___29404 = cljs.core.chunk_first.call(null,seq__29388_29403__$1);{
var G__29405 = cljs.core.chunk_rest.call(null,seq__29388_29403__$1);
var G__29406 = c__8957__auto___29404;
var G__29407 = cljs.core.count.call(null,c__8957__auto___29404);
var G__29408 = 0;
seq__29388_29392 = G__29405;
chunk__29389_29393 = G__29406;
count__29390_29394 = G__29407;
i__29391_29395 = G__29408;
continue;
}
} else
{var obj_29409__$1 = cljs.core.first.call(null,seq__29388_29403__$1);var listener_29410 = obj_29409__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_29410.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_29410.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_29410);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_29410);
}
} else
{}
{
var G__29411 = cljs.core.next.call(null,seq__29388_29403__$1);
var G__29412 = null;
var G__29413 = 0;
var G__29414 = 0;
seq__29388_29392 = G__29411;
chunk__29389_29393 = G__29412;
count__29390_29394 = G__29413;
i__29391_29395 = G__29414;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__29415_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__29415_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__29415_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__29415_SHARP_:null))));
});return (function (pnod){var seq__29420 = cljs.core.seq.call(null,event_list);var chunk__29421 = null;var count__29422 = 0;var i__29423 = 0;while(true){
if((i__29423 < count__29422))
{var ev = cljs.core._nth.call(null,chunk__29421,i__29423);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__29424 = seq__29420;
var G__29425 = chunk__29421;
var G__29426 = count__29422;
var G__29427 = (i__29423 + 1);
seq__29420 = G__29424;
chunk__29421 = G__29425;
count__29422 = G__29426;
i__29423 = G__29427;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29420);if(temp__4092__auto__)
{var seq__29420__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29420__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29420__$1);{
var G__29428 = cljs.core.chunk_rest.call(null,seq__29420__$1);
var G__29429 = c__8957__auto__;
var G__29430 = cljs.core.count.call(null,c__8957__auto__);
var G__29431 = 0;
seq__29420 = G__29428;
chunk__29421 = G__29429;
count__29422 = G__29430;
i__29423 = G__29431;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__29420__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__29432 = cljs.core.next.call(null,seq__29420__$1);
var G__29433 = null;
var G__29434 = 0;
var G__29435 = 0;
seq__29420 = G__29432;
chunk__29421 = G__29433;
count__29422 = G__29434;
i__29423 = G__29435;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__29436){
var event_list = cljs.core.seq(arglist__29436);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__29437_SHARP_){var seq__29442 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__29437_SHARP_.target));var chunk__29443 = null;var count__29444 = 0;var i__29445 = 0;while(true){
if((i__29445 < count__29444))
{var el = cljs.core._nth.call(null,chunk__29443,i__29445);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__29442,chunk__29443,count__29444,i__29445,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__29437_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__29437_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__29437_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__29442,chunk__29443,count__29444,i__29445,el))
));
{
var G__29446 = seq__29442;
var G__29447 = chunk__29443;
var G__29448 = count__29444;
var G__29449 = (i__29445 + 1);
seq__29442 = G__29446;
chunk__29443 = G__29447;
count__29444 = G__29448;
i__29445 = G__29449;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29442);if(temp__4092__auto__)
{var seq__29442__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29442__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29442__$1);{
var G__29450 = cljs.core.chunk_rest.call(null,seq__29442__$1);
var G__29451 = c__8957__auto__;
var G__29452 = cljs.core.count.call(null,c__8957__auto__);
var G__29453 = 0;
seq__29442 = G__29450;
chunk__29443 = G__29451;
count__29444 = G__29452;
i__29445 = G__29453;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__29442__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__29442,chunk__29443,count__29444,i__29445,el,seq__29442__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__29437_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__29437_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__29437_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__29442,chunk__29443,count__29444,i__29445,el,seq__29442__$1,temp__4092__auto__))
));
{
var G__29454 = cljs.core.next.call(null,seq__29442__$1);
var G__29455 = null;
var G__29456 = 0;
var G__29457 = 0;
seq__29442 = G__29454;
chunk__29443 = G__29455;
count__29444 = G__29456;
i__29445 = G__29457;
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
var G__29458 = parent;
var G__29459 = child.parentNode;
parent = G__29458;
child = G__29459;
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