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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__34288_34292 = cljs.core.seq.call(null,listeners);var chunk__34289_34293 = null;var count__34290_34294 = 0;var i__34291_34295 = 0;while(true){
if((i__34291_34295 < count__34290_34294))
{var obj_34296__$1 = cljs.core._nth.call(null,chunk__34289_34293,i__34291_34295);var listener_34297 = obj_34296__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34297.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34297.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34297);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34297);
}
} else
{}
{
var G__34298 = seq__34288_34292;
var G__34299 = chunk__34289_34293;
var G__34300 = count__34290_34294;
var G__34301 = (i__34291_34295 + 1);
seq__34288_34292 = G__34298;
chunk__34289_34293 = G__34299;
count__34290_34294 = G__34300;
i__34291_34295 = G__34301;
continue;
}
} else
{var temp__4098__auto___34302 = cljs.core.seq.call(null,seq__34288_34292);if(temp__4098__auto___34302)
{var seq__34288_34303__$1 = temp__4098__auto___34302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34288_34303__$1))
{var c__15865__auto___34304 = cljs.core.chunk_first.call(null,seq__34288_34303__$1);{
var G__34305 = cljs.core.chunk_rest.call(null,seq__34288_34303__$1);
var G__34306 = c__15865__auto___34304;
var G__34307 = cljs.core.count.call(null,c__15865__auto___34304);
var G__34308 = 0;
seq__34288_34292 = G__34305;
chunk__34289_34293 = G__34306;
count__34290_34294 = G__34307;
i__34291_34295 = G__34308;
continue;
}
} else
{var obj_34309__$1 = cljs.core.first.call(null,seq__34288_34303__$1);var listener_34310 = obj_34309__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_34310.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_34310.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_34310);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_34310);
}
} else
{}
{
var G__34311 = cljs.core.next.call(null,seq__34288_34303__$1);
var G__34312 = null;
var G__34313 = 0;
var G__34314 = 0;
seq__34288_34292 = G__34311;
chunk__34289_34293 = G__34312;
count__34290_34294 = G__34313;
i__34291_34295 = G__34314;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__34315_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__34315_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__34315_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__34315_SHARP_:null))));
});return (function (pnod){var seq__34320 = cljs.core.seq.call(null,event_list);var chunk__34321 = null;var count__34322 = 0;var i__34323 = 0;while(true){
if((i__34323 < count__34322))
{var ev = cljs.core._nth.call(null,chunk__34321,i__34323);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34324 = seq__34320;
var G__34325 = chunk__34321;
var G__34326 = count__34322;
var G__34327 = (i__34323 + 1);
seq__34320 = G__34324;
chunk__34321 = G__34325;
count__34322 = G__34326;
i__34323 = G__34327;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34320);if(temp__4098__auto__)
{var seq__34320__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34320__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34320__$1);{
var G__34328 = cljs.core.chunk_rest.call(null,seq__34320__$1);
var G__34329 = c__15865__auto__;
var G__34330 = cljs.core.count.call(null,c__15865__auto__);
var G__34331 = 0;
seq__34320 = G__34328;
chunk__34321 = G__34329;
count__34322 = G__34330;
i__34323 = G__34331;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__34320__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__34332 = cljs.core.next.call(null,seq__34320__$1);
var G__34333 = null;
var G__34334 = 0;
var G__34335 = 0;
seq__34320 = G__34332;
chunk__34321 = G__34333;
count__34322 = G__34334;
i__34323 = G__34335;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__34336){
var event_list = cljs.core.seq(arglist__34336);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__34337_SHARP_){var seq__34342 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__34337_SHARP_.target));var chunk__34343 = null;var count__34344 = 0;var i__34345 = 0;while(true){
if((i__34345 < count__34344))
{var el = cljs.core._nth.call(null,chunk__34343,i__34345);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34342,chunk__34343,count__34344,i__34345,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34337_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34337_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34337_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34342,chunk__34343,count__34344,i__34345,el))
));
{
var G__34346 = seq__34342;
var G__34347 = chunk__34343;
var G__34348 = count__34344;
var G__34349 = (i__34345 + 1);
seq__34342 = G__34346;
chunk__34343 = G__34347;
count__34344 = G__34348;
i__34345 = G__34349;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34342);if(temp__4098__auto__)
{var seq__34342__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34342__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34342__$1);{
var G__34350 = cljs.core.chunk_rest.call(null,seq__34342__$1);
var G__34351 = c__15865__auto__;
var G__34352 = cljs.core.count.call(null,c__15865__auto__);
var G__34353 = 0;
seq__34342 = G__34350;
chunk__34343 = G__34351;
count__34344 = G__34352;
i__34345 = G__34353;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__34342__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__34342,chunk__34343,count__34344,i__34345,el,seq__34342__$1,temp__4098__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__34337_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__34337_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__34337_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__34342,chunk__34343,count__34344,i__34345,el,seq__34342__$1,temp__4098__auto__))
));
{
var G__34354 = cljs.core.next.call(null,seq__34342__$1);
var G__34355 = null;
var G__34356 = 0;
var G__34357 = 0;
seq__34342 = G__34354;
chunk__34343 = G__34355;
count__34344 = G__34356;
i__34345 = G__34357;
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
var G__34358 = parent;
var G__34359 = child.parentNode;
parent = G__34358;
child = G__34359;
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