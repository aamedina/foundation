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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__26844_26848 = cljs.core.seq.call(null,listeners);var chunk__26845_26849 = null;var count__26846_26850 = 0;var i__26847_26851 = 0;while(true){
if((i__26847_26851 < count__26846_26850))
{var obj_26852__$1 = cljs.core._nth.call(null,chunk__26845_26849,i__26847_26851);var listener_26853 = obj_26852__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_26853.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_26853.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_26853);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_26853);
}
} else
{}
{
var G__26854 = seq__26844_26848;
var G__26855 = chunk__26845_26849;
var G__26856 = count__26846_26850;
var G__26857 = (i__26847_26851 + 1);
seq__26844_26848 = G__26854;
chunk__26845_26849 = G__26855;
count__26846_26850 = G__26856;
i__26847_26851 = G__26857;
continue;
}
} else
{var temp__4092__auto___26858 = cljs.core.seq.call(null,seq__26844_26848);if(temp__4092__auto___26858)
{var seq__26844_26859__$1 = temp__4092__auto___26858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26844_26859__$1))
{var c__8552__auto___26860 = cljs.core.chunk_first.call(null,seq__26844_26859__$1);{
var G__26861 = cljs.core.chunk_rest.call(null,seq__26844_26859__$1);
var G__26862 = c__8552__auto___26860;
var G__26863 = cljs.core.count.call(null,c__8552__auto___26860);
var G__26864 = 0;
seq__26844_26848 = G__26861;
chunk__26845_26849 = G__26862;
count__26846_26850 = G__26863;
i__26847_26851 = G__26864;
continue;
}
} else
{var obj_26865__$1 = cljs.core.first.call(null,seq__26844_26859__$1);var listener_26866 = obj_26865__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_26866.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_26866.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_26866);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_26866);
}
} else
{}
{
var G__26867 = cljs.core.next.call(null,seq__26844_26859__$1);
var G__26868 = null;
var G__26869 = 0;
var G__26870 = 0;
seq__26844_26848 = G__26867;
chunk__26845_26849 = G__26868;
count__26846_26850 = G__26869;
i__26847_26851 = G__26870;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__26871_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__26871_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__26871_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__26871_SHARP_:null))));
});return (function (pnod){var seq__26876 = cljs.core.seq.call(null,event_list);var chunk__26877 = null;var count__26878 = 0;var i__26879 = 0;while(true){
if((i__26879 < count__26878))
{var ev = cljs.core._nth.call(null,chunk__26877,i__26879);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__26880 = seq__26876;
var G__26881 = chunk__26877;
var G__26882 = count__26878;
var G__26883 = (i__26879 + 1);
seq__26876 = G__26880;
chunk__26877 = G__26881;
count__26878 = G__26882;
i__26879 = G__26883;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26876);if(temp__4092__auto__)
{var seq__26876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26876__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__26876__$1);{
var G__26884 = cljs.core.chunk_rest.call(null,seq__26876__$1);
var G__26885 = c__8552__auto__;
var G__26886 = cljs.core.count.call(null,c__8552__auto__);
var G__26887 = 0;
seq__26876 = G__26884;
chunk__26877 = G__26885;
count__26878 = G__26886;
i__26879 = G__26887;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__26876__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__26888 = cljs.core.next.call(null,seq__26876__$1);
var G__26889 = null;
var G__26890 = 0;
var G__26891 = 0;
seq__26876 = G__26888;
chunk__26877 = G__26889;
count__26878 = G__26890;
i__26879 = G__26891;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__26892){
var event_list = cljs.core.seq(arglist__26892);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__26893_SHARP_){var seq__26898 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__26893_SHARP_.target));var chunk__26899 = null;var count__26900 = 0;var i__26901 = 0;while(true){
if((i__26901 < count__26900))
{var el = cljs.core._nth.call(null,chunk__26899,i__26901);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__26898,chunk__26899,count__26900,i__26901,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__26893_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__26893_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__26893_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__26898,chunk__26899,count__26900,i__26901,el))
));
{
var G__26902 = seq__26898;
var G__26903 = chunk__26899;
var G__26904 = count__26900;
var G__26905 = (i__26901 + 1);
seq__26898 = G__26902;
chunk__26899 = G__26903;
count__26900 = G__26904;
i__26901 = G__26905;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26898);if(temp__4092__auto__)
{var seq__26898__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26898__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__26898__$1);{
var G__26906 = cljs.core.chunk_rest.call(null,seq__26898__$1);
var G__26907 = c__8552__auto__;
var G__26908 = cljs.core.count.call(null,c__8552__auto__);
var G__26909 = 0;
seq__26898 = G__26906;
chunk__26899 = G__26907;
count__26900 = G__26908;
i__26901 = G__26909;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__26898__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__26898,chunk__26899,count__26900,i__26901,el,seq__26898__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__26893_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__26893_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__26893_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__26898,chunk__26899,count__26900,i__26901,el,seq__26898__$1,temp__4092__auto__))
));
{
var G__26910 = cljs.core.next.call(null,seq__26898__$1);
var G__26911 = null;
var G__26912 = 0;
var G__26913 = 0;
seq__26898 = G__26910;
chunk__26899 = G__26911;
count__26900 = G__26912;
i__26901 = G__26913;
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
var G__26914 = parent;
var G__26915 = child.parentNode;
parent = G__26914;
child = G__26915;
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
