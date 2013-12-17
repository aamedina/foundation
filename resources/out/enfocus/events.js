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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__44004_44008 = cljs.core.seq.call(null,listeners);var chunk__44005_44009 = null;var count__44006_44010 = 0;var i__44007_44011 = 0;while(true){
if((i__44007_44011 < count__44006_44010))
{var obj_44012__$1 = cljs.core._nth.call(null,chunk__44005_44009,i__44007_44011);var listener_44013 = obj_44012__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_44013.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_44013.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_44013);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_44013);
}
} else
{}
{
var G__44014 = seq__44004_44008;
var G__44015 = chunk__44005_44009;
var G__44016 = count__44006_44010;
var G__44017 = (i__44007_44011 + 1);
seq__44004_44008 = G__44014;
chunk__44005_44009 = G__44015;
count__44006_44010 = G__44016;
i__44007_44011 = G__44017;
continue;
}
} else
{var temp__4092__auto___44018 = cljs.core.seq.call(null,seq__44004_44008);if(temp__4092__auto___44018)
{var seq__44004_44019__$1 = temp__4092__auto___44018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44004_44019__$1))
{var c__14683__auto___44020 = cljs.core.chunk_first.call(null,seq__44004_44019__$1);{
var G__44021 = cljs.core.chunk_rest.call(null,seq__44004_44019__$1);
var G__44022 = c__14683__auto___44020;
var G__44023 = cljs.core.count.call(null,c__14683__auto___44020);
var G__44024 = 0;
seq__44004_44008 = G__44021;
chunk__44005_44009 = G__44022;
count__44006_44010 = G__44023;
i__44007_44011 = G__44024;
continue;
}
} else
{var obj_44025__$1 = cljs.core.first.call(null,seq__44004_44019__$1);var listener_44026 = obj_44025__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_44026.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_44026.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_44026);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_44026);
}
} else
{}
{
var G__44027 = cljs.core.next.call(null,seq__44004_44019__$1);
var G__44028 = null;
var G__44029 = 0;
var G__44030 = 0;
seq__44004_44008 = G__44027;
chunk__44005_44009 = G__44028;
count__44006_44010 = G__44029;
i__44007_44011 = G__44030;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__44031_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__44031_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__44031_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__44031_SHARP_:null))));
});return (function (pnod){var seq__44036 = cljs.core.seq.call(null,event_list);var chunk__44037 = null;var count__44038 = 0;var i__44039 = 0;while(true){
if((i__44039 < count__44038))
{var ev = cljs.core._nth.call(null,chunk__44037,i__44039);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__44040 = seq__44036;
var G__44041 = chunk__44037;
var G__44042 = count__44038;
var G__44043 = (i__44039 + 1);
seq__44036 = G__44040;
chunk__44037 = G__44041;
count__44038 = G__44042;
i__44039 = G__44043;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44036);if(temp__4092__auto__)
{var seq__44036__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44036__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44036__$1);{
var G__44044 = cljs.core.chunk_rest.call(null,seq__44036__$1);
var G__44045 = c__14683__auto__;
var G__44046 = cljs.core.count.call(null,c__14683__auto__);
var G__44047 = 0;
seq__44036 = G__44044;
chunk__44037 = G__44045;
count__44038 = G__44046;
i__44039 = G__44047;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__44036__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__44048 = cljs.core.next.call(null,seq__44036__$1);
var G__44049 = null;
var G__44050 = 0;
var G__44051 = 0;
seq__44036 = G__44048;
chunk__44037 = G__44049;
count__44038 = G__44050;
i__44039 = G__44051;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__44052){
var event_list = cljs.core.seq(arglist__44052);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__44053_SHARP_){var seq__44058 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__44053_SHARP_.target));var chunk__44059 = null;var count__44060 = 0;var i__44061 = 0;while(true){
if((i__44061 < count__44060))
{var el = cljs.core._nth.call(null,chunk__44059,i__44061);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__44058,chunk__44059,count__44060,i__44061,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__44053_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__44053_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__44053_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__44058,chunk__44059,count__44060,i__44061,el))
));
{
var G__44062 = seq__44058;
var G__44063 = chunk__44059;
var G__44064 = count__44060;
var G__44065 = (i__44061 + 1);
seq__44058 = G__44062;
chunk__44059 = G__44063;
count__44060 = G__44064;
i__44061 = G__44065;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44058);if(temp__4092__auto__)
{var seq__44058__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44058__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44058__$1);{
var G__44066 = cljs.core.chunk_rest.call(null,seq__44058__$1);
var G__44067 = c__14683__auto__;
var G__44068 = cljs.core.count.call(null,c__14683__auto__);
var G__44069 = 0;
seq__44058 = G__44066;
chunk__44059 = G__44067;
count__44060 = G__44068;
i__44061 = G__44069;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__44058__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__44058,chunk__44059,count__44060,i__44061,el,seq__44058__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__44053_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__44053_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__44053_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__44058,chunk__44059,count__44060,i__44061,el,seq__44058__$1,temp__4092__auto__))
));
{
var G__44070 = cljs.core.next.call(null,seq__44058__$1);
var G__44071 = null;
var G__44072 = 0;
var G__44073 = 0;
seq__44058 = G__44070;
chunk__44059 = G__44071;
count__44060 = G__44072;
i__44061 = G__44073;
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
var G__44074 = parent;
var G__44075 = child.parentNode;
parent = G__44074;
child = G__44075;
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