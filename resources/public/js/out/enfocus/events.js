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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__29980_29984 = cljs.core.seq.call(null,listeners);var chunk__29981_29985 = null;var count__29982_29986 = 0;var i__29983_29987 = 0;while(true){
if((i__29983_29987 < count__29982_29986))
{var obj_29988__$1 = cljs.core._nth.call(null,chunk__29981_29985,i__29983_29987);var listener_29989 = obj_29988__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_29989.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_29989.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_29989);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_29989);
}
} else
{}
{
var G__29990 = seq__29980_29984;
var G__29991 = chunk__29981_29985;
var G__29992 = count__29982_29986;
var G__29993 = (i__29983_29987 + 1);
seq__29980_29984 = G__29990;
chunk__29981_29985 = G__29991;
count__29982_29986 = G__29992;
i__29983_29987 = G__29993;
continue;
}
} else
{var temp__4092__auto___29994 = cljs.core.seq.call(null,seq__29980_29984);if(temp__4092__auto___29994)
{var seq__29980_29995__$1 = temp__4092__auto___29994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29980_29995__$1))
{var c__8974__auto___29996 = cljs.core.chunk_first.call(null,seq__29980_29995__$1);{
var G__29997 = cljs.core.chunk_rest.call(null,seq__29980_29995__$1);
var G__29998 = c__8974__auto___29996;
var G__29999 = cljs.core.count.call(null,c__8974__auto___29996);
var G__30000 = 0;
seq__29980_29984 = G__29997;
chunk__29981_29985 = G__29998;
count__29982_29986 = G__29999;
i__29983_29987 = G__30000;
continue;
}
} else
{var obj_30001__$1 = cljs.core.first.call(null,seq__29980_29995__$1);var listener_30002 = obj_30001__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_30002.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_30002.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_30002);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_30002);
}
} else
{}
{
var G__30003 = cljs.core.next.call(null,seq__29980_29995__$1);
var G__30004 = null;
var G__30005 = 0;
var G__30006 = 0;
seq__29980_29984 = G__30003;
chunk__29981_29985 = G__30004;
count__29982_29986 = G__30005;
i__29983_29987 = G__30006;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__30007_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__30007_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__30007_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__30007_SHARP_:null))));
});return (function (pnod){var seq__30012 = cljs.core.seq.call(null,event_list);var chunk__30013 = null;var count__30014 = 0;var i__30015 = 0;while(true){
if((i__30015 < count__30014))
{var ev = cljs.core._nth.call(null,chunk__30013,i__30015);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__30016 = seq__30012;
var G__30017 = chunk__30013;
var G__30018 = count__30014;
var G__30019 = (i__30015 + 1);
seq__30012 = G__30016;
chunk__30013 = G__30017;
count__30014 = G__30018;
i__30015 = G__30019;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30012);if(temp__4092__auto__)
{var seq__30012__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30012__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30012__$1);{
var G__30020 = cljs.core.chunk_rest.call(null,seq__30012__$1);
var G__30021 = c__8974__auto__;
var G__30022 = cljs.core.count.call(null,c__8974__auto__);
var G__30023 = 0;
seq__30012 = G__30020;
chunk__30013 = G__30021;
count__30014 = G__30022;
i__30015 = G__30023;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__30012__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__30024 = cljs.core.next.call(null,seq__30012__$1);
var G__30025 = null;
var G__30026 = 0;
var G__30027 = 0;
seq__30012 = G__30024;
chunk__30013 = G__30025;
count__30014 = G__30026;
i__30015 = G__30027;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__30028){
var event_list = cljs.core.seq(arglist__30028);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__30029_SHARP_){var seq__30034 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__30029_SHARP_.target));var chunk__30035 = null;var count__30036 = 0;var i__30037 = 0;while(true){
if((i__30037 < count__30036))
{var el = cljs.core._nth.call(null,chunk__30035,i__30037);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__30034,chunk__30035,count__30036,i__30037,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__30029_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__30029_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__30029_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__30034,chunk__30035,count__30036,i__30037,el))
));
{
var G__30038 = seq__30034;
var G__30039 = chunk__30035;
var G__30040 = count__30036;
var G__30041 = (i__30037 + 1);
seq__30034 = G__30038;
chunk__30035 = G__30039;
count__30036 = G__30040;
i__30037 = G__30041;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30034);if(temp__4092__auto__)
{var seq__30034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30034__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30034__$1);{
var G__30042 = cljs.core.chunk_rest.call(null,seq__30034__$1);
var G__30043 = c__8974__auto__;
var G__30044 = cljs.core.count.call(null,c__8974__auto__);
var G__30045 = 0;
seq__30034 = G__30042;
chunk__30035 = G__30043;
count__30036 = G__30044;
i__30037 = G__30045;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__30034__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__30034,chunk__30035,count__30036,i__30037,el,seq__30034__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__30029_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__30029_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__30029_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__30034,chunk__30035,count__30036,i__30037,el,seq__30034__$1,temp__4092__auto__))
));
{
var G__30046 = cljs.core.next.call(null,seq__30034__$1);
var G__30047 = null;
var G__30048 = 0;
var G__30049 = 0;
seq__30034 = G__30046;
chunk__30035 = G__30047;
count__30036 = G__30048;
i__30037 = G__30049;
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
var G__30050 = parent;
var G__30051 = child.parentNode;
parent = G__30050;
child = G__30051;
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