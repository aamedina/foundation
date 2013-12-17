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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__384219_384223 = cljs.core.seq.call(null,listeners);var chunk__384220_384224 = null;var count__384221_384225 = 0;var i__384222_384226 = 0;while(true){
if((i__384222_384226 < count__384221_384225))
{var obj_384227__$1 = cljs.core._nth.call(null,chunk__384220_384224,i__384222_384226);var listener_384228 = obj_384227__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_384228.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_384228.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_384228);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_384228);
}
} else
{}
{
var G__384229 = seq__384219_384223;
var G__384230 = chunk__384220_384224;
var G__384231 = count__384221_384225;
var G__384232 = (i__384222_384226 + 1);
seq__384219_384223 = G__384229;
chunk__384220_384224 = G__384230;
count__384221_384225 = G__384231;
i__384222_384226 = G__384232;
continue;
}
} else
{var temp__4092__auto___384233 = cljs.core.seq.call(null,seq__384219_384223);if(temp__4092__auto___384233)
{var seq__384219_384234__$1 = temp__4092__auto___384233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384219_384234__$1))
{var c__14708__auto___384235 = cljs.core.chunk_first.call(null,seq__384219_384234__$1);{
var G__384236 = cljs.core.chunk_rest.call(null,seq__384219_384234__$1);
var G__384237 = c__14708__auto___384235;
var G__384238 = cljs.core.count.call(null,c__14708__auto___384235);
var G__384239 = 0;
seq__384219_384223 = G__384236;
chunk__384220_384224 = G__384237;
count__384221_384225 = G__384238;
i__384222_384226 = G__384239;
continue;
}
} else
{var obj_384240__$1 = cljs.core.first.call(null,seq__384219_384234__$1);var listener_384241 = obj_384240__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_384241.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_384241.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_384241);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_384241);
}
} else
{}
{
var G__384242 = cljs.core.next.call(null,seq__384219_384234__$1);
var G__384243 = null;
var G__384244 = 0;
var G__384245 = 0;
seq__384219_384223 = G__384242;
chunk__384220_384224 = G__384243;
count__384221_384225 = G__384244;
i__384222_384226 = G__384245;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__384246_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__384246_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__384246_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__384246_SHARP_:null))));
});return (function (pnod){var seq__384251 = cljs.core.seq.call(null,event_list);var chunk__384252 = null;var count__384253 = 0;var i__384254 = 0;while(true){
if((i__384254 < count__384253))
{var ev = cljs.core._nth.call(null,chunk__384252,i__384254);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__384255 = seq__384251;
var G__384256 = chunk__384252;
var G__384257 = count__384253;
var G__384258 = (i__384254 + 1);
seq__384251 = G__384255;
chunk__384252 = G__384256;
count__384253 = G__384257;
i__384254 = G__384258;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384251);if(temp__4092__auto__)
{var seq__384251__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384251__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384251__$1);{
var G__384259 = cljs.core.chunk_rest.call(null,seq__384251__$1);
var G__384260 = c__14708__auto__;
var G__384261 = cljs.core.count.call(null,c__14708__auto__);
var G__384262 = 0;
seq__384251 = G__384259;
chunk__384252 = G__384260;
count__384253 = G__384261;
i__384254 = G__384262;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__384251__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__384263 = cljs.core.next.call(null,seq__384251__$1);
var G__384264 = null;
var G__384265 = 0;
var G__384266 = 0;
seq__384251 = G__384263;
chunk__384252 = G__384264;
count__384253 = G__384265;
i__384254 = G__384266;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__384267){
var event_list = cljs.core.seq(arglist__384267);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__384268_SHARP_){var seq__384273 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__384268_SHARP_.target));var chunk__384274 = null;var count__384275 = 0;var i__384276 = 0;while(true){
if((i__384276 < count__384275))
{var el = cljs.core._nth.call(null,chunk__384274,i__384276);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__384273,chunk__384274,count__384275,i__384276,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__384268_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__384268_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__384268_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__384273,chunk__384274,count__384275,i__384276,el))
));
{
var G__384277 = seq__384273;
var G__384278 = chunk__384274;
var G__384279 = count__384275;
var G__384280 = (i__384276 + 1);
seq__384273 = G__384277;
chunk__384274 = G__384278;
count__384275 = G__384279;
i__384276 = G__384280;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384273);if(temp__4092__auto__)
{var seq__384273__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384273__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384273__$1);{
var G__384281 = cljs.core.chunk_rest.call(null,seq__384273__$1);
var G__384282 = c__14708__auto__;
var G__384283 = cljs.core.count.call(null,c__14708__auto__);
var G__384284 = 0;
seq__384273 = G__384281;
chunk__384274 = G__384282;
count__384275 = G__384283;
i__384276 = G__384284;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__384273__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__384273,chunk__384274,count__384275,i__384276,el,seq__384273__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__384268_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__384268_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__384268_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__384273,chunk__384274,count__384275,i__384276,el,seq__384273__$1,temp__4092__auto__))
));
{
var G__384285 = cljs.core.next.call(null,seq__384273__$1);
var G__384286 = null;
var G__384287 = 0;
var G__384288 = 0;
seq__384273 = G__384285;
chunk__384274 = G__384286;
count__384275 = G__384287;
i__384276 = G__384288;
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
var G__384289 = parent;
var G__384290 = child.parentNode;
parent = G__384289;
child = G__384290;
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