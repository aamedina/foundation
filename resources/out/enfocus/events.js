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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__357200_357204 = cljs.core.seq.call(null,listeners);var chunk__357201_357205 = null;var count__357202_357206 = 0;var i__357203_357207 = 0;while(true){
if((i__357203_357207 < count__357202_357206))
{var obj_357208__$1 = cljs.core._nth.call(null,chunk__357201_357205,i__357203_357207);var listener_357209 = obj_357208__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_357209.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_357209.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_357209);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_357209);
}
} else
{}
{
var G__357210 = seq__357200_357204;
var G__357211 = chunk__357201_357205;
var G__357212 = count__357202_357206;
var G__357213 = (i__357203_357207 + 1);
seq__357200_357204 = G__357210;
chunk__357201_357205 = G__357211;
count__357202_357206 = G__357212;
i__357203_357207 = G__357213;
continue;
}
} else
{var temp__4092__auto___357214 = cljs.core.seq.call(null,seq__357200_357204);if(temp__4092__auto___357214)
{var seq__357200_357215__$1 = temp__4092__auto___357214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357200_357215__$1))
{var c__14708__auto___357216 = cljs.core.chunk_first.call(null,seq__357200_357215__$1);{
var G__357217 = cljs.core.chunk_rest.call(null,seq__357200_357215__$1);
var G__357218 = c__14708__auto___357216;
var G__357219 = cljs.core.count.call(null,c__14708__auto___357216);
var G__357220 = 0;
seq__357200_357204 = G__357217;
chunk__357201_357205 = G__357218;
count__357202_357206 = G__357219;
i__357203_357207 = G__357220;
continue;
}
} else
{var obj_357221__$1 = cljs.core.first.call(null,seq__357200_357215__$1);var listener_357222 = obj_357221__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_357222.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_357222.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_357222);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_357222);
}
} else
{}
{
var G__357223 = cljs.core.next.call(null,seq__357200_357215__$1);
var G__357224 = null;
var G__357225 = 0;
var G__357226 = 0;
seq__357200_357204 = G__357223;
chunk__357201_357205 = G__357224;
count__357202_357206 = G__357225;
i__357203_357207 = G__357226;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__357227_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__357227_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__357227_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__357227_SHARP_:null))));
});return (function (pnod){var seq__357232 = cljs.core.seq.call(null,event_list);var chunk__357233 = null;var count__357234 = 0;var i__357235 = 0;while(true){
if((i__357235 < count__357234))
{var ev = cljs.core._nth.call(null,chunk__357233,i__357235);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__357236 = seq__357232;
var G__357237 = chunk__357233;
var G__357238 = count__357234;
var G__357239 = (i__357235 + 1);
seq__357232 = G__357236;
chunk__357233 = G__357237;
count__357234 = G__357238;
i__357235 = G__357239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357232);if(temp__4092__auto__)
{var seq__357232__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357232__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357232__$1);{
var G__357240 = cljs.core.chunk_rest.call(null,seq__357232__$1);
var G__357241 = c__14708__auto__;
var G__357242 = cljs.core.count.call(null,c__14708__auto__);
var G__357243 = 0;
seq__357232 = G__357240;
chunk__357233 = G__357241;
count__357234 = G__357242;
i__357235 = G__357243;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__357232__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__357244 = cljs.core.next.call(null,seq__357232__$1);
var G__357245 = null;
var G__357246 = 0;
var G__357247 = 0;
seq__357232 = G__357244;
chunk__357233 = G__357245;
count__357234 = G__357246;
i__357235 = G__357247;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__357248){
var event_list = cljs.core.seq(arglist__357248);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__357249_SHARP_){var seq__357254 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__357249_SHARP_.target));var chunk__357255 = null;var count__357256 = 0;var i__357257 = 0;while(true){
if((i__357257 < count__357256))
{var el = cljs.core._nth.call(null,chunk__357255,i__357257);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__357254,chunk__357255,count__357256,i__357257,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__357249_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__357249_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__357249_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__357254,chunk__357255,count__357256,i__357257,el))
));
{
var G__357258 = seq__357254;
var G__357259 = chunk__357255;
var G__357260 = count__357256;
var G__357261 = (i__357257 + 1);
seq__357254 = G__357258;
chunk__357255 = G__357259;
count__357256 = G__357260;
i__357257 = G__357261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357254);if(temp__4092__auto__)
{var seq__357254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357254__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357254__$1);{
var G__357262 = cljs.core.chunk_rest.call(null,seq__357254__$1);
var G__357263 = c__14708__auto__;
var G__357264 = cljs.core.count.call(null,c__14708__auto__);
var G__357265 = 0;
seq__357254 = G__357262;
chunk__357255 = G__357263;
count__357256 = G__357264;
i__357257 = G__357265;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__357254__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__357254,chunk__357255,count__357256,i__357257,el,seq__357254__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__357249_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__357249_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__357249_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__357254,chunk__357255,count__357256,i__357257,el,seq__357254__$1,temp__4092__auto__))
));
{
var G__357266 = cljs.core.next.call(null,seq__357254__$1);
var G__357267 = null;
var G__357268 = 0;
var G__357269 = 0;
seq__357254 = G__357266;
chunk__357255 = G__357267;
count__357256 = G__357268;
i__357257 = G__357269;
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
var G__357270 = parent;
var G__357271 = child.parentNode;
parent = G__357270;
child = G__357271;
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