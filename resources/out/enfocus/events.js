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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__99173_99177 = cljs.core.seq.call(null,listeners);var chunk__99174_99178 = null;var count__99175_99179 = 0;var i__99176_99180 = 0;while(true){
if((i__99176_99180 < count__99175_99179))
{var obj_99181__$1 = cljs.core._nth.call(null,chunk__99174_99178,i__99176_99180);var listener_99182 = obj_99181__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_99182.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_99182.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_99182);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_99182);
}
} else
{}
{
var G__99183 = seq__99173_99177;
var G__99184 = chunk__99174_99178;
var G__99185 = count__99175_99179;
var G__99186 = (i__99176_99180 + 1);
seq__99173_99177 = G__99183;
chunk__99174_99178 = G__99184;
count__99175_99179 = G__99185;
i__99176_99180 = G__99186;
continue;
}
} else
{var temp__4092__auto___99187 = cljs.core.seq.call(null,seq__99173_99177);if(temp__4092__auto___99187)
{var seq__99173_99188__$1 = temp__4092__auto___99187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99173_99188__$1))
{var c__14546__auto___99189 = cljs.core.chunk_first.call(null,seq__99173_99188__$1);{
var G__99190 = cljs.core.chunk_rest.call(null,seq__99173_99188__$1);
var G__99191 = c__14546__auto___99189;
var G__99192 = cljs.core.count.call(null,c__14546__auto___99189);
var G__99193 = 0;
seq__99173_99177 = G__99190;
chunk__99174_99178 = G__99191;
count__99175_99179 = G__99192;
i__99176_99180 = G__99193;
continue;
}
} else
{var obj_99194__$1 = cljs.core.first.call(null,seq__99173_99188__$1);var listener_99195 = obj_99194__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_99195.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_99195.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_99195);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_99195);
}
} else
{}
{
var G__99196 = cljs.core.next.call(null,seq__99173_99188__$1);
var G__99197 = null;
var G__99198 = 0;
var G__99199 = 0;
seq__99173_99177 = G__99196;
chunk__99174_99178 = G__99197;
count__99175_99179 = G__99198;
i__99176_99180 = G__99199;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__99200_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__99200_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__99200_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__99200_SHARP_:null))));
});return (function (pnod){var seq__99205 = cljs.core.seq.call(null,event_list);var chunk__99206 = null;var count__99207 = 0;var i__99208 = 0;while(true){
if((i__99208 < count__99207))
{var ev = cljs.core._nth.call(null,chunk__99206,i__99208);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__99209 = seq__99205;
var G__99210 = chunk__99206;
var G__99211 = count__99207;
var G__99212 = (i__99208 + 1);
seq__99205 = G__99209;
chunk__99206 = G__99210;
count__99207 = G__99211;
i__99208 = G__99212;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99205);if(temp__4092__auto__)
{var seq__99205__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99205__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99205__$1);{
var G__99213 = cljs.core.chunk_rest.call(null,seq__99205__$1);
var G__99214 = c__14546__auto__;
var G__99215 = cljs.core.count.call(null,c__14546__auto__);
var G__99216 = 0;
seq__99205 = G__99213;
chunk__99206 = G__99214;
count__99207 = G__99215;
i__99208 = G__99216;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__99205__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__99217 = cljs.core.next.call(null,seq__99205__$1);
var G__99218 = null;
var G__99219 = 0;
var G__99220 = 0;
seq__99205 = G__99217;
chunk__99206 = G__99218;
count__99207 = G__99219;
i__99208 = G__99220;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__99221){
var event_list = cljs.core.seq(arglist__99221);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__99222_SHARP_){var seq__99227 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__99222_SHARP_.target));var chunk__99228 = null;var count__99229 = 0;var i__99230 = 0;while(true){
if((i__99230 < count__99229))
{var el = cljs.core._nth.call(null,chunk__99228,i__99230);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__99227,chunk__99228,count__99229,i__99230,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__99222_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__99222_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__99222_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__99227,chunk__99228,count__99229,i__99230,el))
));
{
var G__99231 = seq__99227;
var G__99232 = chunk__99228;
var G__99233 = count__99229;
var G__99234 = (i__99230 + 1);
seq__99227 = G__99231;
chunk__99228 = G__99232;
count__99229 = G__99233;
i__99230 = G__99234;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99227);if(temp__4092__auto__)
{var seq__99227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99227__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99227__$1);{
var G__99235 = cljs.core.chunk_rest.call(null,seq__99227__$1);
var G__99236 = c__14546__auto__;
var G__99237 = cljs.core.count.call(null,c__14546__auto__);
var G__99238 = 0;
seq__99227 = G__99235;
chunk__99228 = G__99236;
count__99229 = G__99237;
i__99230 = G__99238;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__99227__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__99227,chunk__99228,count__99229,i__99230,el,seq__99227__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__99222_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__99222_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__99222_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__99227,chunk__99228,count__99229,i__99230,el,seq__99227__$1,temp__4092__auto__))
));
{
var G__99239 = cljs.core.next.call(null,seq__99227__$1);
var G__99240 = null;
var G__99241 = 0;
var G__99242 = 0;
seq__99227 = G__99239;
chunk__99228 = G__99240;
count__99229 = G__99241;
i__99230 = G__99242;
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
var G__99243 = parent;
var G__99244 = child.parentNode;
parent = G__99243;
child = G__99244;
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