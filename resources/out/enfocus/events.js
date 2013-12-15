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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__327239_327243 = cljs.core.seq.call(null,listeners);var chunk__327240_327244 = null;var count__327241_327245 = 0;var i__327242_327246 = 0;while(true){
if((i__327242_327246 < count__327241_327245))
{var obj_327247__$1 = cljs.core._nth.call(null,chunk__327240_327244,i__327242_327246);var listener_327248 = obj_327247__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_327248.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_327248.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_327248);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_327248);
}
} else
{}
{
var G__327249 = seq__327239_327243;
var G__327250 = chunk__327240_327244;
var G__327251 = count__327241_327245;
var G__327252 = (i__327242_327246 + 1);
seq__327239_327243 = G__327249;
chunk__327240_327244 = G__327250;
count__327241_327245 = G__327251;
i__327242_327246 = G__327252;
continue;
}
} else
{var temp__4092__auto___327253 = cljs.core.seq.call(null,seq__327239_327243);if(temp__4092__auto___327253)
{var seq__327239_327254__$1 = temp__4092__auto___327253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327239_327254__$1))
{var c__14549__auto___327255 = cljs.core.chunk_first.call(null,seq__327239_327254__$1);{
var G__327256 = cljs.core.chunk_rest.call(null,seq__327239_327254__$1);
var G__327257 = c__14549__auto___327255;
var G__327258 = cljs.core.count.call(null,c__14549__auto___327255);
var G__327259 = 0;
seq__327239_327243 = G__327256;
chunk__327240_327244 = G__327257;
count__327241_327245 = G__327258;
i__327242_327246 = G__327259;
continue;
}
} else
{var obj_327260__$1 = cljs.core.first.call(null,seq__327239_327254__$1);var listener_327261 = obj_327260__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_327261.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_327261.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_327261);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_327261);
}
} else
{}
{
var G__327262 = cljs.core.next.call(null,seq__327239_327254__$1);
var G__327263 = null;
var G__327264 = 0;
var G__327265 = 0;
seq__327239_327243 = G__327262;
chunk__327240_327244 = G__327263;
count__327241_327245 = G__327264;
i__327242_327246 = G__327265;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__327266_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__327266_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__327266_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__327266_SHARP_:null))));
});return (function (pnod){var seq__327271 = cljs.core.seq.call(null,event_list);var chunk__327272 = null;var count__327273 = 0;var i__327274 = 0;while(true){
if((i__327274 < count__327273))
{var ev = cljs.core._nth.call(null,chunk__327272,i__327274);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__327275 = seq__327271;
var G__327276 = chunk__327272;
var G__327277 = count__327273;
var G__327278 = (i__327274 + 1);
seq__327271 = G__327275;
chunk__327272 = G__327276;
count__327273 = G__327277;
i__327274 = G__327278;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327271);if(temp__4092__auto__)
{var seq__327271__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327271__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327271__$1);{
var G__327279 = cljs.core.chunk_rest.call(null,seq__327271__$1);
var G__327280 = c__14549__auto__;
var G__327281 = cljs.core.count.call(null,c__14549__auto__);
var G__327282 = 0;
seq__327271 = G__327279;
chunk__327272 = G__327280;
count__327273 = G__327281;
i__327274 = G__327282;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__327271__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__327283 = cljs.core.next.call(null,seq__327271__$1);
var G__327284 = null;
var G__327285 = 0;
var G__327286 = 0;
seq__327271 = G__327283;
chunk__327272 = G__327284;
count__327273 = G__327285;
i__327274 = G__327286;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__327287){
var event_list = cljs.core.seq(arglist__327287);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__327288_SHARP_){var seq__327293 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__327288_SHARP_.target));var chunk__327294 = null;var count__327295 = 0;var i__327296 = 0;while(true){
if((i__327296 < count__327295))
{var el = cljs.core._nth.call(null,chunk__327294,i__327296);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__327293,chunk__327294,count__327295,i__327296,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__327288_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__327288_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__327288_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__327293,chunk__327294,count__327295,i__327296,el))
));
{
var G__327297 = seq__327293;
var G__327298 = chunk__327294;
var G__327299 = count__327295;
var G__327300 = (i__327296 + 1);
seq__327293 = G__327297;
chunk__327294 = G__327298;
count__327295 = G__327299;
i__327296 = G__327300;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327293);if(temp__4092__auto__)
{var seq__327293__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327293__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327293__$1);{
var G__327301 = cljs.core.chunk_rest.call(null,seq__327293__$1);
var G__327302 = c__14549__auto__;
var G__327303 = cljs.core.count.call(null,c__14549__auto__);
var G__327304 = 0;
seq__327293 = G__327301;
chunk__327294 = G__327302;
count__327295 = G__327303;
i__327296 = G__327304;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__327293__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__327293,chunk__327294,count__327295,i__327296,el,seq__327293__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__327288_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__327288_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__327288_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__327293,chunk__327294,count__327295,i__327296,el,seq__327293__$1,temp__4092__auto__))
));
{
var G__327305 = cljs.core.next.call(null,seq__327293__$1);
var G__327306 = null;
var G__327307 = 0;
var G__327308 = 0;
seq__327293 = G__327305;
chunk__327294 = G__327306;
count__327295 = G__327307;
i__327296 = G__327308;
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
var G__327309 = parent;
var G__327310 = child.parentNode;
parent = G__327309;
child = G__327310;
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

//# sourceMappingURL=events.js.map