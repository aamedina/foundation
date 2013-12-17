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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__338881_338885 = cljs.core.seq.call(null,listeners);var chunk__338882_338886 = null;var count__338883_338887 = 0;var i__338884_338888 = 0;while(true){
if((i__338884_338888 < count__338883_338887))
{var obj_338889__$1 = cljs.core._nth.call(null,chunk__338882_338886,i__338884_338888);var listener_338890 = obj_338889__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_338890.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_338890.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_338890);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_338890);
}
} else
{}
{
var G__338891 = seq__338881_338885;
var G__338892 = chunk__338882_338886;
var G__338893 = count__338883_338887;
var G__338894 = (i__338884_338888 + 1);
seq__338881_338885 = G__338891;
chunk__338882_338886 = G__338892;
count__338883_338887 = G__338893;
i__338884_338888 = G__338894;
continue;
}
} else
{var temp__4092__auto___338895 = cljs.core.seq.call(null,seq__338881_338885);if(temp__4092__auto___338895)
{var seq__338881_338896__$1 = temp__4092__auto___338895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__338881_338896__$1))
{var c__14547__auto___338897 = cljs.core.chunk_first.call(null,seq__338881_338896__$1);{
var G__338898 = cljs.core.chunk_rest.call(null,seq__338881_338896__$1);
var G__338899 = c__14547__auto___338897;
var G__338900 = cljs.core.count.call(null,c__14547__auto___338897);
var G__338901 = 0;
seq__338881_338885 = G__338898;
chunk__338882_338886 = G__338899;
count__338883_338887 = G__338900;
i__338884_338888 = G__338901;
continue;
}
} else
{var obj_338902__$1 = cljs.core.first.call(null,seq__338881_338896__$1);var listener_338903 = obj_338902__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_338903.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_338903.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_338903);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_338903);
}
} else
{}
{
var G__338904 = cljs.core.next.call(null,seq__338881_338896__$1);
var G__338905 = null;
var G__338906 = 0;
var G__338907 = 0;
seq__338881_338885 = G__338904;
chunk__338882_338886 = G__338905;
count__338883_338887 = G__338906;
i__338884_338888 = G__338907;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__338908_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__338908_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__338908_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__338908_SHARP_:null))));
});return (function (pnod){var seq__338913 = cljs.core.seq.call(null,event_list);var chunk__338914 = null;var count__338915 = 0;var i__338916 = 0;while(true){
if((i__338916 < count__338915))
{var ev = cljs.core._nth.call(null,chunk__338914,i__338916);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__338917 = seq__338913;
var G__338918 = chunk__338914;
var G__338919 = count__338915;
var G__338920 = (i__338916 + 1);
seq__338913 = G__338917;
chunk__338914 = G__338918;
count__338915 = G__338919;
i__338916 = G__338920;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__338913);if(temp__4092__auto__)
{var seq__338913__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__338913__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__338913__$1);{
var G__338921 = cljs.core.chunk_rest.call(null,seq__338913__$1);
var G__338922 = c__14547__auto__;
var G__338923 = cljs.core.count.call(null,c__14547__auto__);
var G__338924 = 0;
seq__338913 = G__338921;
chunk__338914 = G__338922;
count__338915 = G__338923;
i__338916 = G__338924;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__338913__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__338925 = cljs.core.next.call(null,seq__338913__$1);
var G__338926 = null;
var G__338927 = 0;
var G__338928 = 0;
seq__338913 = G__338925;
chunk__338914 = G__338926;
count__338915 = G__338927;
i__338916 = G__338928;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__338929){
var event_list = cljs.core.seq(arglist__338929);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__338930_SHARP_){var seq__338935 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__338930_SHARP_.target));var chunk__338936 = null;var count__338937 = 0;var i__338938 = 0;while(true){
if((i__338938 < count__338937))
{var el = cljs.core._nth.call(null,chunk__338936,i__338938);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__338935,chunk__338936,count__338937,i__338938,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__338930_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__338930_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__338930_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__338935,chunk__338936,count__338937,i__338938,el))
));
{
var G__338939 = seq__338935;
var G__338940 = chunk__338936;
var G__338941 = count__338937;
var G__338942 = (i__338938 + 1);
seq__338935 = G__338939;
chunk__338936 = G__338940;
count__338937 = G__338941;
i__338938 = G__338942;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__338935);if(temp__4092__auto__)
{var seq__338935__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__338935__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__338935__$1);{
var G__338943 = cljs.core.chunk_rest.call(null,seq__338935__$1);
var G__338944 = c__14547__auto__;
var G__338945 = cljs.core.count.call(null,c__14547__auto__);
var G__338946 = 0;
seq__338935 = G__338943;
chunk__338936 = G__338944;
count__338937 = G__338945;
i__338938 = G__338946;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__338935__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__338935,chunk__338936,count__338937,i__338938,el,seq__338935__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__338930_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__338930_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__338930_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__338935,chunk__338936,count__338937,i__338938,el,seq__338935__$1,temp__4092__auto__))
));
{
var G__338947 = cljs.core.next.call(null,seq__338935__$1);
var G__338948 = null;
var G__338949 = 0;
var G__338950 = 0;
seq__338935 = G__338947;
chunk__338936 = G__338948;
count__338937 = G__338949;
i__338938 = G__338950;
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
var G__338951 = parent;
var G__338952 = child.parentNode;
parent = G__338951;
child = G__338952;
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