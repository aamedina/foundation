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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__366308_366312 = cljs.core.seq.call(null,listeners);var chunk__366309_366313 = null;var count__366310_366314 = 0;var i__366311_366315 = 0;while(true){
if((i__366311_366315 < count__366310_366314))
{var obj_366316__$1 = cljs.core._nth.call(null,chunk__366309_366313,i__366311_366315);var listener_366317 = obj_366316__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_366317.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_366317.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_366317);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_366317);
}
} else
{}
{
var G__366318 = seq__366308_366312;
var G__366319 = chunk__366309_366313;
var G__366320 = count__366310_366314;
var G__366321 = (i__366311_366315 + 1);
seq__366308_366312 = G__366318;
chunk__366309_366313 = G__366319;
count__366310_366314 = G__366320;
i__366311_366315 = G__366321;
continue;
}
} else
{var temp__4092__auto___366322 = cljs.core.seq.call(null,seq__366308_366312);if(temp__4092__auto___366322)
{var seq__366308_366323__$1 = temp__4092__auto___366322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366308_366323__$1))
{var c__14708__auto___366324 = cljs.core.chunk_first.call(null,seq__366308_366323__$1);{
var G__366325 = cljs.core.chunk_rest.call(null,seq__366308_366323__$1);
var G__366326 = c__14708__auto___366324;
var G__366327 = cljs.core.count.call(null,c__14708__auto___366324);
var G__366328 = 0;
seq__366308_366312 = G__366325;
chunk__366309_366313 = G__366326;
count__366310_366314 = G__366327;
i__366311_366315 = G__366328;
continue;
}
} else
{var obj_366329__$1 = cljs.core.first.call(null,seq__366308_366323__$1);var listener_366330 = obj_366329__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_366330.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_366330.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_366330);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_366330);
}
} else
{}
{
var G__366331 = cljs.core.next.call(null,seq__366308_366323__$1);
var G__366332 = null;
var G__366333 = 0;
var G__366334 = 0;
seq__366308_366312 = G__366331;
chunk__366309_366313 = G__366332;
count__366310_366314 = G__366333;
i__366311_366315 = G__366334;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__366335_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__366335_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__366335_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__366335_SHARP_:null))));
});return (function (pnod){var seq__366340 = cljs.core.seq.call(null,event_list);var chunk__366341 = null;var count__366342 = 0;var i__366343 = 0;while(true){
if((i__366343 < count__366342))
{var ev = cljs.core._nth.call(null,chunk__366341,i__366343);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__366344 = seq__366340;
var G__366345 = chunk__366341;
var G__366346 = count__366342;
var G__366347 = (i__366343 + 1);
seq__366340 = G__366344;
chunk__366341 = G__366345;
count__366342 = G__366346;
i__366343 = G__366347;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366340);if(temp__4092__auto__)
{var seq__366340__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366340__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366340__$1);{
var G__366348 = cljs.core.chunk_rest.call(null,seq__366340__$1);
var G__366349 = c__14708__auto__;
var G__366350 = cljs.core.count.call(null,c__14708__auto__);
var G__366351 = 0;
seq__366340 = G__366348;
chunk__366341 = G__366349;
count__366342 = G__366350;
i__366343 = G__366351;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__366340__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__366352 = cljs.core.next.call(null,seq__366340__$1);
var G__366353 = null;
var G__366354 = 0;
var G__366355 = 0;
seq__366340 = G__366352;
chunk__366341 = G__366353;
count__366342 = G__366354;
i__366343 = G__366355;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__366356){
var event_list = cljs.core.seq(arglist__366356);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__366357_SHARP_){var seq__366362 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__366357_SHARP_.target));var chunk__366363 = null;var count__366364 = 0;var i__366365 = 0;while(true){
if((i__366365 < count__366364))
{var el = cljs.core._nth.call(null,chunk__366363,i__366365);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__366362,chunk__366363,count__366364,i__366365,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__366357_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__366357_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__366357_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__366362,chunk__366363,count__366364,i__366365,el))
));
{
var G__366366 = seq__366362;
var G__366367 = chunk__366363;
var G__366368 = count__366364;
var G__366369 = (i__366365 + 1);
seq__366362 = G__366366;
chunk__366363 = G__366367;
count__366364 = G__366368;
i__366365 = G__366369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366362);if(temp__4092__auto__)
{var seq__366362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366362__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366362__$1);{
var G__366370 = cljs.core.chunk_rest.call(null,seq__366362__$1);
var G__366371 = c__14708__auto__;
var G__366372 = cljs.core.count.call(null,c__14708__auto__);
var G__366373 = 0;
seq__366362 = G__366370;
chunk__366363 = G__366371;
count__366364 = G__366372;
i__366365 = G__366373;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__366362__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__366362,chunk__366363,count__366364,i__366365,el,seq__366362__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__366357_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__366357_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__366357_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__366362,chunk__366363,count__366364,i__366365,el,seq__366362__$1,temp__4092__auto__))
));
{
var G__366374 = cljs.core.next.call(null,seq__366362__$1);
var G__366375 = null;
var G__366376 = 0;
var G__366377 = 0;
seq__366362 = G__366374;
chunk__366363 = G__366375;
count__366364 = G__366376;
i__366365 = G__366377;
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
var G__366378 = parent;
var G__366379 = child.parentNode;
parent = G__366378;
child = G__366379;
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