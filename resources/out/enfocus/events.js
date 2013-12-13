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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__300054_300058 = cljs.core.seq.call(null,listeners);var chunk__300055_300059 = null;var count__300056_300060 = 0;var i__300057_300061 = 0;while(true){
if((i__300057_300061 < count__300056_300060))
{var obj_300062__$1 = cljs.core._nth.call(null,chunk__300055_300059,i__300057_300061);var listener_300063 = obj_300062__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_300063.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_300063.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_300063);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_300063);
}
} else
{}
{
var G__300064 = seq__300054_300058;
var G__300065 = chunk__300055_300059;
var G__300066 = count__300056_300060;
var G__300067 = (i__300057_300061 + 1);
seq__300054_300058 = G__300064;
chunk__300055_300059 = G__300065;
count__300056_300060 = G__300066;
i__300057_300061 = G__300067;
continue;
}
} else
{var temp__4092__auto___300068 = cljs.core.seq.call(null,seq__300054_300058);if(temp__4092__auto___300068)
{var seq__300054_300069__$1 = temp__4092__auto___300068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300054_300069__$1))
{var c__14549__auto___300070 = cljs.core.chunk_first.call(null,seq__300054_300069__$1);{
var G__300071 = cljs.core.chunk_rest.call(null,seq__300054_300069__$1);
var G__300072 = c__14549__auto___300070;
var G__300073 = cljs.core.count.call(null,c__14549__auto___300070);
var G__300074 = 0;
seq__300054_300058 = G__300071;
chunk__300055_300059 = G__300072;
count__300056_300060 = G__300073;
i__300057_300061 = G__300074;
continue;
}
} else
{var obj_300075__$1 = cljs.core.first.call(null,seq__300054_300069__$1);var listener_300076 = obj_300075__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_300076.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_300076.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_300076);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_300076);
}
} else
{}
{
var G__300077 = cljs.core.next.call(null,seq__300054_300069__$1);
var G__300078 = null;
var G__300079 = 0;
var G__300080 = 0;
seq__300054_300058 = G__300077;
chunk__300055_300059 = G__300078;
count__300056_300060 = G__300079;
i__300057_300061 = G__300080;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__300081_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__300081_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__300081_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__300081_SHARP_:null))));
});return (function (pnod){var seq__300086 = cljs.core.seq.call(null,event_list);var chunk__300087 = null;var count__300088 = 0;var i__300089 = 0;while(true){
if((i__300089 < count__300088))
{var ev = cljs.core._nth.call(null,chunk__300087,i__300089);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__300090 = seq__300086;
var G__300091 = chunk__300087;
var G__300092 = count__300088;
var G__300093 = (i__300089 + 1);
seq__300086 = G__300090;
chunk__300087 = G__300091;
count__300088 = G__300092;
i__300089 = G__300093;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300086);if(temp__4092__auto__)
{var seq__300086__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300086__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300086__$1);{
var G__300094 = cljs.core.chunk_rest.call(null,seq__300086__$1);
var G__300095 = c__14549__auto__;
var G__300096 = cljs.core.count.call(null,c__14549__auto__);
var G__300097 = 0;
seq__300086 = G__300094;
chunk__300087 = G__300095;
count__300088 = G__300096;
i__300089 = G__300097;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__300086__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__300098 = cljs.core.next.call(null,seq__300086__$1);
var G__300099 = null;
var G__300100 = 0;
var G__300101 = 0;
seq__300086 = G__300098;
chunk__300087 = G__300099;
count__300088 = G__300100;
i__300089 = G__300101;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__300102){
var event_list = cljs.core.seq(arglist__300102);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__300103_SHARP_){var seq__300108 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__300103_SHARP_.target));var chunk__300109 = null;var count__300110 = 0;var i__300111 = 0;while(true){
if((i__300111 < count__300110))
{var el = cljs.core._nth.call(null,chunk__300109,i__300111);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__300108,chunk__300109,count__300110,i__300111,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__300103_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__300103_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__300103_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__300108,chunk__300109,count__300110,i__300111,el))
));
{
var G__300112 = seq__300108;
var G__300113 = chunk__300109;
var G__300114 = count__300110;
var G__300115 = (i__300111 + 1);
seq__300108 = G__300112;
chunk__300109 = G__300113;
count__300110 = G__300114;
i__300111 = G__300115;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300108);if(temp__4092__auto__)
{var seq__300108__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300108__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300108__$1);{
var G__300116 = cljs.core.chunk_rest.call(null,seq__300108__$1);
var G__300117 = c__14549__auto__;
var G__300118 = cljs.core.count.call(null,c__14549__auto__);
var G__300119 = 0;
seq__300108 = G__300116;
chunk__300109 = G__300117;
count__300110 = G__300118;
i__300111 = G__300119;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__300108__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__300108,chunk__300109,count__300110,i__300111,el,seq__300108__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__300103_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__300103_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__300103_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__300108,chunk__300109,count__300110,i__300111,el,seq__300108__$1,temp__4092__auto__))
));
{
var G__300120 = cljs.core.next.call(null,seq__300108__$1);
var G__300121 = null;
var G__300122 = 0;
var G__300123 = 0;
seq__300108 = G__300120;
chunk__300109 = G__300121;
count__300110 = G__300122;
i__300111 = G__300123;
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
var G__300124 = parent;
var G__300125 = child.parentNode;
parent = G__300124;
child = G__300125;
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