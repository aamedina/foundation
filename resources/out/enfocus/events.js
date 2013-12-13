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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__90842_90846 = cljs.core.seq.call(null,listeners);var chunk__90843_90847 = null;var count__90844_90848 = 0;var i__90845_90849 = 0;while(true){
if((i__90845_90849 < count__90844_90848))
{var obj_90850__$1 = cljs.core._nth.call(null,chunk__90843_90847,i__90845_90849);var listener_90851 = obj_90850__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_90851.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_90851.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_90851);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_90851);
}
} else
{}
{
var G__90852 = seq__90842_90846;
var G__90853 = chunk__90843_90847;
var G__90854 = count__90844_90848;
var G__90855 = (i__90845_90849 + 1);
seq__90842_90846 = G__90852;
chunk__90843_90847 = G__90853;
count__90844_90848 = G__90854;
i__90845_90849 = G__90855;
continue;
}
} else
{var temp__4092__auto___90856 = cljs.core.seq.call(null,seq__90842_90846);if(temp__4092__auto___90856)
{var seq__90842_90857__$1 = temp__4092__auto___90856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90842_90857__$1))
{var c__14549__auto___90858 = cljs.core.chunk_first.call(null,seq__90842_90857__$1);{
var G__90859 = cljs.core.chunk_rest.call(null,seq__90842_90857__$1);
var G__90860 = c__14549__auto___90858;
var G__90861 = cljs.core.count.call(null,c__14549__auto___90858);
var G__90862 = 0;
seq__90842_90846 = G__90859;
chunk__90843_90847 = G__90860;
count__90844_90848 = G__90861;
i__90845_90849 = G__90862;
continue;
}
} else
{var obj_90863__$1 = cljs.core.first.call(null,seq__90842_90857__$1);var listener_90864 = obj_90863__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_90864.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_90864.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_90864);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_90864);
}
} else
{}
{
var G__90865 = cljs.core.next.call(null,seq__90842_90857__$1);
var G__90866 = null;
var G__90867 = 0;
var G__90868 = 0;
seq__90842_90846 = G__90865;
chunk__90843_90847 = G__90866;
count__90844_90848 = G__90867;
i__90845_90849 = G__90868;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__90869_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__90869_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__90869_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__90869_SHARP_:null))));
});return (function (pnod){var seq__90874 = cljs.core.seq.call(null,event_list);var chunk__90875 = null;var count__90876 = 0;var i__90877 = 0;while(true){
if((i__90877 < count__90876))
{var ev = cljs.core._nth.call(null,chunk__90875,i__90877);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__90878 = seq__90874;
var G__90879 = chunk__90875;
var G__90880 = count__90876;
var G__90881 = (i__90877 + 1);
seq__90874 = G__90878;
chunk__90875 = G__90879;
count__90876 = G__90880;
i__90877 = G__90881;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__90874);if(temp__4092__auto__)
{var seq__90874__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90874__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__90874__$1);{
var G__90882 = cljs.core.chunk_rest.call(null,seq__90874__$1);
var G__90883 = c__14549__auto__;
var G__90884 = cljs.core.count.call(null,c__14549__auto__);
var G__90885 = 0;
seq__90874 = G__90882;
chunk__90875 = G__90883;
count__90876 = G__90884;
i__90877 = G__90885;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__90874__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__90886 = cljs.core.next.call(null,seq__90874__$1);
var G__90887 = null;
var G__90888 = 0;
var G__90889 = 0;
seq__90874 = G__90886;
chunk__90875 = G__90887;
count__90876 = G__90888;
i__90877 = G__90889;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__90890){
var event_list = cljs.core.seq(arglist__90890);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__90891_SHARP_){var seq__90896 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__90891_SHARP_.target));var chunk__90897 = null;var count__90898 = 0;var i__90899 = 0;while(true){
if((i__90899 < count__90898))
{var el = cljs.core._nth.call(null,chunk__90897,i__90899);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__90896,chunk__90897,count__90898,i__90899,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__90891_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__90891_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__90891_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__90896,chunk__90897,count__90898,i__90899,el))
));
{
var G__90900 = seq__90896;
var G__90901 = chunk__90897;
var G__90902 = count__90898;
var G__90903 = (i__90899 + 1);
seq__90896 = G__90900;
chunk__90897 = G__90901;
count__90898 = G__90902;
i__90899 = G__90903;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__90896);if(temp__4092__auto__)
{var seq__90896__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90896__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__90896__$1);{
var G__90904 = cljs.core.chunk_rest.call(null,seq__90896__$1);
var G__90905 = c__14549__auto__;
var G__90906 = cljs.core.count.call(null,c__14549__auto__);
var G__90907 = 0;
seq__90896 = G__90904;
chunk__90897 = G__90905;
count__90898 = G__90906;
i__90899 = G__90907;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__90896__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__90896,chunk__90897,count__90898,i__90899,el,seq__90896__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__90891_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__90891_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__90891_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__90896,chunk__90897,count__90898,i__90899,el,seq__90896__$1,temp__4092__auto__))
));
{
var G__90908 = cljs.core.next.call(null,seq__90896__$1);
var G__90909 = null;
var G__90910 = 0;
var G__90911 = 0;
seq__90896 = G__90908;
chunk__90897 = G__90909;
count__90898 = G__90910;
i__90899 = G__90911;
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
var G__90912 = parent;
var G__90913 = child.parentNode;
parent = G__90912;
child = G__90913;
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