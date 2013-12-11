// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app.tree');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('foundation.app.data.tracking_map');
goog.require('enfocus.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.tree');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.node_create = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__34386,input_queue,parent_id,id){var vec__34387 = p__34386;var _ = cljs.core.nth.call(null,vec__34387,0,null);var path = cljs.core.nth.call(null,vec__34387,1,null);var ___$1 = cljs.core.nth.call(null,vec__34387,2,null);var ___$2 = cljs.core.nth.call(null,vec__34387,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__34385_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__34385_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.node_update = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__34389,input_queue,parent_id){var vec__34390 = p__34389;var _ = cljs.core.nth.call(null,vec__34390,0,null);var path = cljs.core.nth.call(null,vec__34390,1,null);var ___$1 = cljs.core.nth.call(null,vec__34390,2,null);var ___$2 = cljs.core.nth.call(null,vec__34390,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__34388_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__34388_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__34391__delegate = function (args){return null;
};
var G__34391 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34391__delegate.call(this,args);};
G__34391.cljs$lang$maxFixedArity = 0;
G__34391.cljs$lang$applyTo = (function (arglist__34392){
var args = cljs.core.seq(arglist__34392);
return G__34391__delegate(args);
});
G__34391.cljs$core$IFn$_invoke$arity$variadic = G__34391__delegate;
return G__34391;
})()
);
foundation.app.node_destroy = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__34394,input_queue,id){var vec__34395 = p__34394;var _ = cljs.core.nth.call(null,vec__34395,0,null);var path = cljs.core.nth.call(null,vec__34395,1,null);var ___$1 = cljs.core.nth.call(null,vec__34395,2,null);var ___$2 = cljs.core.nth.call(null,vec__34395,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__34393_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__34393_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__34396__delegate = function (args){return null;
};
var G__34396 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34396__delegate.call(this,args);};
G__34396.cljs$lang$maxFixedArity = 0;
G__34396.cljs$lang$applyTo = (function (arglist__34397){
var args = cljs.core.seq(arglist__34397);
return G__34396__delegate(args);
});
G__34396.cljs$core$IFn$_invoke$arity$variadic = G__34396__delegate;
return G__34396;
})()
);
foundation.app.transform_enable = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__34399,id,message){var vec__34400 = p__34399;var _ = cljs.core.nth.call(null,vec__34400,0,null);var path = cljs.core.nth.call(null,vec__34400,1,null);var ___$1 = cljs.core.nth.call(null,vec__34400,2,null);var ___$2 = cljs.core.nth.call(null,vec__34400,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__34398_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__34398_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__34401__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__34401 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34401__delegate.call(this,args);};
G__34401.cljs$lang$maxFixedArity = 0;
G__34401.cljs$lang$applyTo = (function (arglist__34402){
var args = cljs.core.seq(arglist__34402);
return G__34401__delegate(args);
});
G__34401.cljs$core$IFn$_invoke$arity$variadic = G__34401__delegate;
return G__34401;
})()
);
foundation.app.transform_disable = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.transform = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return null;
}));
foundation.app.post_process = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__34403__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__34403 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__34403__delegate.call(this,k,args);};
G__34403.cljs$lang$maxFixedArity = 1;
G__34403.cljs$lang$applyTo = (function (arglist__34404){
var k = cljs.core.first(arglist__34404);
var args = cljs.core.rest(arglist__34404);
return G__34403__delegate(k,args);
});
G__34403.cljs$core$IFn$_invoke$arity$variadic = G__34403__delegate;
return G__34403;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.route_effect = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.DomMapper = (function (){var obj34406 = {};return obj34406;
})();
foundation.app.get_id = (function get_id(this$,path){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$get_id$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_id$arity$2(this$,path);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.get_id[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.get_id["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$get_parent_id$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.get_parent_id[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.get_parent_id["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.new_id_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.new_id_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.new_id_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.new_id_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path,v);
}
});
new_id_BANG_ = function(this$,path,v){
switch(arguments.length){
case 2:
return new_id_BANG___2.call(this,this$,path);
case 3:
return new_id_BANG___3.call(this,this$,path,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_id_BANG_.cljs$core$IFn$_invoke$arity$2 = new_id_BANG___2;
new_id_BANG_.cljs$core$IFn$_invoke$arity$3 = new_id_BANG___3;
return new_id_BANG_;
})()
;
foundation.app.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.delete_id_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.delete_id_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.on_destroy_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.on_destroy_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$set_data_BANG_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.set_data_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.set_data_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.drop_data_BANG_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.drop_data_BANG_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.get_data = (function get_data(this$,ks){if((function (){var and__7718__auto__ = this$;if(and__7718__auto__)
{return this$.foundation$app$DomMapper$get_data$arity$2;
} else
{return and__7718__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__8333__auto__ = (((this$ == null))?null:this$);return (function (){var or__7730__auto__ = (foundation.app.get_data[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app.get_data["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.fix_id = (function fix_id(s){if(!((s instanceof cljs.core.Keyword)))
{return cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(s)].join(''));
} else
{return s;
}
});
foundation.app.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__34407_SHARP_){return cljs.core.get.call(null,n,p1__34407_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__34412 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__34413 = null;var count__34414 = 0;var i__34415 = 0;while(true){
if((i__34415 < count__34414))
{var f = cljs.core._nth.call(null,chunk__34413,i__34415);f.call(null);
{
var G__34416 = seq__34412;
var G__34417 = chunk__34413;
var G__34418 = count__34414;
var G__34419 = (i__34415 + 1);
seq__34412 = G__34416;
chunk__34413 = G__34417;
count__34414 = G__34418;
i__34415 = G__34419;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34412);if(temp__4098__auto__)
{var seq__34412__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34412__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__34412__$1);{
var G__34420 = cljs.core.chunk_rest.call(null,seq__34412__$1);
var G__34421 = c__8454__auto__;
var G__34422 = cljs.core.count.call(null,c__8454__auto__);
var G__34423 = 0;
seq__34412 = G__34420;
chunk__34413 = G__34421;
count__34414 = G__34422;
i__34415 = G__34423;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__34412__$1);f.call(null);
{
var G__34424 = cljs.core.next.call(null,seq__34412__$1);
var G__34425 = null;
var G__34426 = 0;
var G__34427 = 0;
seq__34412 = G__34424;
chunk__34413 = G__34425;
count__34414 = G__34426;
i__34415 = G__34427;
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

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.DomRenderer = (function (env,__meta,__extmap){
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8287__auto__){var self__ = this;
var this__8287__auto____$1 = this;var h__8141__auto__ = self__.__hash;if(!((h__8141__auto__ == null)))
{return h__8141__auto__;
} else
{var h__8141__auto____$1 = cljs.core.hash_imap.call(null,this__8287__auto____$1);self__.__hash = h__8141__auto____$1;
return h__8141__auto____$1;
}
});
foundation.app.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8292__auto__,k__8293__auto__){var self__ = this;
var this__8292__auto____$1 = this;return cljs.core._lookup.call(null,this__8292__auto____$1,k__8293__auto__,null);
});
foundation.app.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8294__auto__,k34429,else__8295__auto__){var self__ = this;
var this__8294__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k34429,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k34429,else__8295__auto__);
} else
{return null;
}
}
});
foundation.app.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8299__auto__,k__8300__auto__,G__34428){var self__ = this;
var this__8299__auto____$1 = this;var pred__34431 = cljs.core.keyword_identical_QMARK_;var expr__34432 = k__8300__auto__;if(cljs.core.truth_(pred__34431.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__34432)))
{return (new foundation.app.DomRenderer(G__34428,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8300__auto__,G__34428),null));
}
});
foundation.app.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8306__auto__,writer__8307__auto__,opts__8308__auto__){var self__ = this;
var this__8306__auto____$1 = this;var pr_pair__8309__auto__ = (function (keyval__8310__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8307__auto__,cljs.core.pr_writer,""," ","",opts__8308__auto__,keyval__8310__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8307__auto__,pr_pair__8309__auto__,"#foundation.app.DomRenderer{",", ","}",opts__8308__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8297__auto__,entry__8298__auto__){var self__ = this;
var this__8297__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8298__auto__))
{return cljs.core._assoc.call(null,this__8297__auto____$1,cljs.core._nth.call(null,entry__8298__auto__,0),cljs.core._nth.call(null,entry__8298__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8297__auto____$1,entry__8298__auto__);
}
});
foundation.app.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8304__auto__){var self__ = this;
var this__8304__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8296__auto__){var self__ = this;
var this__8296__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8288__auto__,other__8289__auto__){var self__ = this;
var this__8288__auto____$1 = this;if(cljs.core.truth_((function (){var and__7718__auto__ = other__8289__auto__;if(cljs.core.truth_(and__7718__auto__))
{return ((this__8288__auto____$1.constructor === other__8289__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8288__auto____$1,other__8289__auto__));
} else
{return and__7718__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8291__auto__,G__34428){var self__ = this;
var this__8291__auto____$1 = this;return (new foundation.app.DomRenderer(self__.env,G__34428,self__.__extmap,self__.__hash));
});
foundation.app.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8290__auto__){var self__ = this;
var this__8290__auto____$1 = this;return self__.__meta;
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$ = true;
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$get_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$get_parent_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.get_id.call(null,this$__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return foundation.app.new_id_BANG_.call(null,this$__$1,path,cljs.core.gensym.call(null));
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){var self__ = this;
var this$__$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),v);
return v;
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;foundation.app.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks),d);
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
foundation.app.DomRenderer.prototype.foundation$app$DomMapper$get_data$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks));
});
foundation.app.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8301__auto__,k__8302__auto__){var self__ = this;
var this__8301__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8302__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8301__auto____$1),self__.__meta),k__8302__auto__);
} else
{return (new foundation.app.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8302__auto__)),null));
}
});
foundation.app.DomRenderer.cljs$lang$type = true;
foundation.app.DomRenderer.cljs$lang$ctorPrSeq = (function (this__8326__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/DomRenderer");
});
foundation.app.DomRenderer.cljs$lang$ctorPrWriter = (function (this__8326__auto__,writer__8327__auto__){return cljs.core._write.call(null,writer__8327__auto__,"foundation.app/DomRenderer");
});
foundation.app.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.DomRenderer(env));
});
foundation.app.map__GT_DomRenderer = (function map__GT_DomRenderer(G__34430){return (new foundation.app.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__34430),null,cljs.core.dissoc.call(null,G__34430,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){log_fn.call(null,deltas);
var seq__34442 = cljs.core.seq.call(null,deltas);var chunk__34443 = null;var count__34444 = 0;var i__34445 = 0;while(true){
if((i__34445 < count__34444))
{var d = cljs.core._nth.call(null,chunk__34443,i__34445);var vec__34446_34450 = d;var op_34451 = cljs.core.nth.call(null,vec__34446_34450,0,null);var path_34452 = cljs.core.nth.call(null,vec__34446_34450,1,null);var id_34453 = (function (){var temp__4096__auto__ = foundation.app.get_id.call(null,renderer__$1,path_34452);if(cljs.core.truth_(temp__4096__auto__))
{var id = temp__4096__auto__;return id;
} else
{return foundation.app.new_id_BANG_.call(null,renderer__$1,path_34452);
}
})();var parent_id_34454 = foundation.app.fix_id.call(null,foundation.app.get_parent_id.call(null,renderer__$1,path_34452));var G__34447_34455 = op_34451;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__34447_34455))
{foundation.app.transform_disable.call(null,renderer__$1,d,input_queue,id_34453,document.querySelector(dommy.core.selector.call(null,id_34453)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__34447_34455))
{foundation.app.transform_enable.call(null,renderer__$1,d,input_queue,id_34453,document.querySelector(dommy.core.selector.call(null,id_34453)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__34447_34455))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_34453,document.querySelector(dommy.core.selector.call(null,id_34453)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__34447_34455))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_34453,document.querySelector(dommy.core.selector.call(null,id_34453)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__34447_34455))
{foundation.app.node_destroy.call(null,renderer__$1,d,input_queue,id_34453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__34447_34455))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,parent_id_34454);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__34447_34455))
{foundation.app.node_create.call(null,renderer__$1,d,input_queue,parent_id_34454,id_34453);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_34451)].join('')));
} else
{}
}
}
}
}
}
}
}
{
var G__34456 = seq__34442;
var G__34457 = chunk__34443;
var G__34458 = count__34444;
var G__34459 = (i__34445 + 1);
seq__34442 = G__34456;
chunk__34443 = G__34457;
count__34444 = G__34458;
i__34445 = G__34459;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34442);if(temp__4098__auto__)
{var seq__34442__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34442__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__34442__$1);{
var G__34460 = cljs.core.chunk_rest.call(null,seq__34442__$1);
var G__34461 = c__8454__auto__;
var G__34462 = cljs.core.count.call(null,c__8454__auto__);
var G__34463 = 0;
seq__34442 = G__34460;
chunk__34443 = G__34461;
count__34444 = G__34462;
i__34445 = G__34463;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__34442__$1);var vec__34448_34464 = d;var op_34465 = cljs.core.nth.call(null,vec__34448_34464,0,null);var path_34466 = cljs.core.nth.call(null,vec__34448_34464,1,null);var id_34467 = (function (){var temp__4096__auto__ = foundation.app.get_id.call(null,renderer__$1,path_34466);if(cljs.core.truth_(temp__4096__auto__))
{var id = temp__4096__auto__;return id;
} else
{return foundation.app.new_id_BANG_.call(null,renderer__$1,path_34466);
}
})();var parent_id_34468 = foundation.app.fix_id.call(null,foundation.app.get_parent_id.call(null,renderer__$1,path_34466));var G__34449_34469 = op_34465;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__34449_34469))
{foundation.app.transform_disable.call(null,renderer__$1,d,input_queue,id_34467,document.querySelector(dommy.core.selector.call(null,id_34467)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__34449_34469))
{foundation.app.transform_enable.call(null,renderer__$1,d,input_queue,id_34467,document.querySelector(dommy.core.selector.call(null,id_34467)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__34449_34469))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_34467,document.querySelector(dommy.core.selector.call(null,id_34467)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__34449_34469))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_34467,document.querySelector(dommy.core.selector.call(null,id_34467)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__34449_34469))
{foundation.app.node_destroy.call(null,renderer__$1,d,input_queue,id_34467);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__34449_34469))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,parent_id_34468);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__34449_34469))
{foundation.app.node_create.call(null,renderer__$1,d,input_queue,parent_id_34468,id_34467);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_34465)].join('')));
} else
{}
}
}
}
}
}
}
}
{
var G__34470 = cljs.core.next.call(null,seq__34442__$1);
var G__34471 = null;
var G__34472 = 0;
var G__34473 = 0;
seq__34442 = G__34470;
chunk__34443 = G__34471;
count__34444 = G__34472;
i__34445 = G__34473;
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
});
renderer = function(root_id,log_fn){
switch(arguments.length){
case 1:
return renderer__1.call(this,root_id);
case 2:
return renderer__2.call(this,root_id,log_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$1 = renderer__1;
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
return renderer;
})()
;
foundation.app.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__11733__auto___34520 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11734__auto__ = (function (){var switch__11663__auto__ = (function (state_34508){var state_val_34509 = (state_34508[1]);if((state_val_34509 === 4))
{var inst_34500 = (state_34508[2]);var inst_34501 = cljs.core.nth.call(null,inst_34500,0,null);var inst_34502 = cljs.core.nth.call(null,inst_34500,1,null);var inst_34503 = foundation.app.node_create.call(null,renderer,inst_34500,input_queue);var state_34508__$1 = (function (){var statearr_34510 = state_34508;(statearr_34510[7] = inst_34501);
(statearr_34510[8] = inst_34502);
(statearr_34510[9] = inst_34503);
return statearr_34510;
})();var statearr_34511_34521 = state_34508__$1;(statearr_34511_34521[2] = null);
(statearr_34511_34521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34509 === 3))
{var inst_34506 = (state_34508[2]);var state_34508__$1 = state_34508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34508__$1,inst_34506);
} else
{if((state_val_34509 === 2))
{var state_34508__$1 = state_34508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34508__$1,4,render_queue);
} else
{if((state_val_34509 === 1))
{var state_34508__$1 = state_34508;var statearr_34512_34522 = state_34508__$1;(statearr_34512_34522[2] = null);
(statearr_34512_34522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__11663__auto__){
return (function() {
var state_machine__11664__auto__ = null;
var state_machine__11664__auto____0 = (function (){var statearr_34516 = (new Array(10));(statearr_34516[0] = state_machine__11664__auto__);
(statearr_34516[1] = 1);
return statearr_34516;
});
var state_machine__11664__auto____1 = (function (state_34508){while(true){
var ret_value__11665__auto__ = (function (){try{while(true){
var result__11666__auto__ = switch__11663__auto__.call(null,state_34508);if(cljs.core.keyword_identical_QMARK_.call(null,result__11666__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11666__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object))
{var ex__11667__auto__ = e34517;var statearr_34518_34523 = state_34508;(statearr_34518_34523[5] = ex__11667__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11665__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34524 = state_34508;
state_34508 = G__34524;
continue;
}
} else
{return ret_value__11665__auto__;
}
break;
}
});
state_machine__11664__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return state_machine__11664__auto____0.call(this);
case 1:
return state_machine__11664__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11664__auto____0;
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11664__auto____1;
return state_machine__11664__auto__;
})()
;})(switch__11663__auto__))
})();var state__11735__auto__ = (function (){var statearr_34519 = f__11734__auto__.call(null);(statearr_34519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___34520);
return statearr_34519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11735__auto__);
}));
return render_queue;
});
foundation.app.filter_changes = (function filter_changes(p__34525,changes){var map__34529 = p__34525;var map__34529__$1 = ((cljs.core.seq_QMARK_.call(null,map__34529))?cljs.core.apply.call(null,cljs.core.hash_map,map__34529):map__34529);var processed_inputs = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__34530){var vec__34531 = p__34530;var k = cljs.core.nth.call(null,vec__34531,0,null);var v = cljs.core.nth.call(null,vec__34531,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__34538){var vec__34539 = p__34538;var k = cljs.core.nth.call(null,vec__34539,0,null);var v = cljs.core.nth.call(null,vec__34539,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__34540){var vec__34541 = p__34540;var k = cljs.core.nth.call(null,vec__34541,0,null);var v = cljs.core.nth.call(null,vec__34541,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__34542){var vec__34543 = p__34542;var k = cljs.core.nth.call(null,vec__34543,0,null);var v = cljs.core.nth.call(null,vec__34543,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__34582){var vec__34583 = p__34582;var k = cljs.core.nth.call(null,vec__34583,0,null);var v = cljs.core.nth.call(null,vec__34583,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"seq","seq",1014018001));
} else
{if(cljs.core.contains_QMARK_.call(null,a,v))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"seq","seq",1014018001));
} else
{if((cljs.core.get.call(null,a,v) == null))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"single","single",4406605754));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,arg_names__$1);
} else
{return cljs.core.constantly.call(null,new cljs.core.Keyword(null,"single","single",4406605754));
}
});
var input_paths__$1 = ((cljs.core.seq.call(null,arg_names))?cljs.core.zipmap.call(null,input_paths,arg_names):cljs.core.zipmap.call(null,input_paths,input_paths));var v_type = value_types.call(null,input_paths__$1);var assoc_a = ((function (input_paths__$1,v_type){
return (function (a,k,v){if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),((cljs.core.coll_QMARK_.call(null,v))?v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)));
} else
{return cljs.core.assoc.call(null,a,k,v);
}
});})(input_paths__$1,v_type))
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__8423__auto__ = (function iter__34584(s__34585){return (new cljs.core.LazySeq(null,(function (){var s__34585__$1 = s__34585;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__34585__$1);if(temp__4098__auto__)
{var s__34585__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34585__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__34585__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__34587 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__34586 = 0;while(true){
if((i__34586 < size__8422__auto__))
{var vec__34602 = cljs.core._nth.call(null,c__8421__auto__,i__34586);var path = cljs.core.nth.call(null,vec__34602,0,null);var arg = cljs.core.nth.call(null,vec__34602,1,null);cljs.core.chunk_append.call(null,b__34587,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
var k = cljs.core.first.call(null,ks);if((k === null))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"*","*",1013904284)))
{var m = data_model__$1;return assoc_a.call(null,ret,arg,cljs.core.vals.call(null,m));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586)))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,k,k))
{if((function (){var G__34608 = data_model__$1;if(G__34608)
{var bit__8356__auto__ = (G__34608.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8356__auto__) || (G__34608.cljs$core$ILookup$))
{return true;
} else
{if((!G__34608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__34608);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__34608);
}
})())
{var data_model_k__34607 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__34607,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__34616 = cljs.core.rest.call(null,ks);
var G__34617 = cljs.core.get.call(null,v,k,v);
var G__34618 = ret;
ks = G__34616;
data_model__$1 = G__34617;
ret = G__34618;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{return null;
}
}
}
}
break;
}
})());
{
var G__34619 = (i__34586 + 1);
i__34586 = G__34619;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34587),iter__34584.call(null,cljs.core.chunk_rest.call(null,s__34585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34587),null);
}
} else
{var vec__34609 = cljs.core.first.call(null,s__34585__$2);var path = cljs.core.nth.call(null,vec__34609,0,null);var arg = cljs.core.nth.call(null,vec__34609,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
var k = cljs.core.first.call(null,ks);if((k === null))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"*","*",1013904284)))
{var m = data_model__$1;return assoc_a.call(null,ret,arg,cljs.core.vals.call(null,m));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586)))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,k,k))
{if((function (){var G__34615 = data_model__$1;if(G__34615)
{var bit__8356__auto__ = (G__34615.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8356__auto__) || (G__34615.cljs$core$ILookup$))
{return true;
} else
{if((!G__34615.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__34615);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__34615);
}
})())
{var data_model_k__34614 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__34614,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__34620 = cljs.core.rest.call(null,ks);
var G__34621 = cljs.core.get.call(null,v,k,v);
var G__34622 = ret;
ks = G__34620;
data_model__$1 = G__34621;
ret = G__34622;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{return null;
}
}
}
}
break;
}
})(),iter__34584.call(null,cljs.core.rest.call(null,s__34585__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__34623){var map__34624 = p__34623;var map__34624__$1 = ((cljs.core.seq_QMARK_.call(null,map__34624))?cljs.core.apply.call(null,cljs.core.hash_map,map__34624):map__34624);var input_paths = cljs.core.get.call(null,map__34624__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__34624__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__11733__auto___34679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11734__auto__ = (function (){var switch__11663__auto__ = (function (state_34667){var state_val_34668 = (state_34667[1]);if((state_val_34668 === 4))
{var inst_34655 = (state_34667[2]);var inst_34656 = cljs.core.deref.call(null,app_model);var inst_34657 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_34655);var inst_34658 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_34657);var inst_34659 = foundation.app.tree.t.call(null,inst_34656);var inst_34660 = foundation.app.tree.since_t.call(null,inst_34658,inst_34659);var inst_34661 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_34662 = render_fn.call(null,inst_34660,inst_34661);var state_34667__$1 = (function (){var statearr_34669 = state_34667;(statearr_34669[7] = inst_34662);
return statearr_34669;
})();var statearr_34670_34680 = state_34667__$1;(statearr_34670_34680[2] = null);
(statearr_34670_34680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34668 === 3))
{var inst_34665 = (state_34667[2]);var state_34667__$1 = state_34667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34667__$1,inst_34665);
} else
{if((state_val_34668 === 2))
{var inst_34653 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_34667__$1 = state_34667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34667__$1,4,inst_34653);
} else
{if((state_val_34668 === 1))
{var state_34667__$1 = state_34667;var statearr_34671_34681 = state_34667__$1;(statearr_34671_34681[2] = null);
(statearr_34671_34681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__11663__auto__){
return (function() {
var state_machine__11664__auto__ = null;
var state_machine__11664__auto____0 = (function (){var statearr_34675 = (new Array(8));(statearr_34675[0] = state_machine__11664__auto__);
(statearr_34675[1] = 1);
return statearr_34675;
});
var state_machine__11664__auto____1 = (function (state_34667){while(true){
var ret_value__11665__auto__ = (function (){try{while(true){
var result__11666__auto__ = switch__11663__auto__.call(null,state_34667);if(cljs.core.keyword_identical_QMARK_.call(null,result__11666__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11666__auto__;
}
break;
}
}catch (e34676){if((e34676 instanceof Object))
{var ex__11667__auto__ = e34676;var statearr_34677_34682 = state_34667;(statearr_34677_34682[5] = ex__11667__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11665__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34683 = state_34667;
state_34667 = G__34683;
continue;
}
} else
{return ret_value__11665__auto__;
}
break;
}
});
state_machine__11664__auto__ = function(state_34667){
switch(arguments.length){
case 0:
return state_machine__11664__auto____0.call(this);
case 1:
return state_machine__11664__auto____1.call(this,state_34667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11664__auto____0;
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11664__auto____1;
return state_machine__11664__auto__;
})()
;})(switch__11663__auto__))
})();var state__11735__auto__ = (function (){var statearr_34678 = f__11734__auto__.call(null);(statearr_34678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___34679);
return statearr_34678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11735__auto__);
}));
return app_model;
});
foundation.app.multiplex_message = (function multiplex_message(state,message){if(cljs.core._EQ_.call(null,foundation.app.message.path.call(null,message),new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return new cljs.core.Keyword(null,"app-model","app-model",1419288559);
} else
{if(cljs.core._EQ_.call(null,foundation.app.message.path.call(null,message),new cljs.core.Keyword(null,"output","output",4303359091)))
{return new cljs.core.Keyword(null,"output","output",4303359091);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
});
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__34685 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__34685))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__34685))
{return state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.run_dataflow.call(null,state,message);
} else
{return null;
}
}
}
});
foundation.app.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_34694 = cljs.core.first.call(null,a);var ocr_34695 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_34694)) && ((cljs.core.count.call(null,ocr_34694) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_34695)) && ((cljs.core.count.call(null,ocr_34695) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_34694 === null))
{if((ocr_34695 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34702 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34703 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34702;
b = G__34703;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34704 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34705 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34704;
b = G__34705;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__34706 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34707 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34706;
b = G__34707;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34708 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34709 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34708;
b = G__34709;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34710 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34711 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34710;
b = G__34711;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__34712 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34713 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34712;
b = G__34713;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_34694 === null))
{if((ocr_34695 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34714 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34715 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34714;
b = G__34715;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34716 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34717 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34716;
b = G__34717;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__34718 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34719 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34718;
b = G__34719;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34694,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34720 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34721 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34720;
b = G__34721;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_34695,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__34722 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34723 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34722;
b = G__34723;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__34724 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__34725 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__34724;
b = G__34725;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return null;
}
}
break;
}
})(),new cljs.core.Keyword(null,"succeed","succeed",3441701300));
});
foundation.app.filter_deltas = (function filter_deltas(state,deltas){var special_ops = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-node-destroy","navigate-node-destroy",3976380797),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529)], null);var prefix_QMARK_ = ((function (special_ops){
return (function (path,prefix){return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});})(special_ops))
;return cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.tree.expand_map,deltas));
});
foundation.app.transact_one = (function transact_one(state,message){var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = foundation.app.process_message.call(null,state__$1,message);var new_deltas = foundation.app.filter_deltas.call(null,new_state,new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316),new_deltas),new cljs.core.Keyword(null,"emit","emit",1017021253));
});
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__11733__auto___34890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11734__auto__ = (function (){var switch__11663__auto__ = (function (state_34856){var state_val_34857 = (state_34856[1]);if((state_val_34857 === 1))
{var state_34856__$1 = state_34856;var statearr_34858_34891 = state_34856__$1;(statearr_34858_34891[2] = null);
(statearr_34858_34891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 2))
{var state_34856__$1 = state_34856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34856__$1,4,input_queue__$1);
} else
{if((state_val_34857 === 3))
{var inst_34854 = (state_34856[2]);var state_34856__$1 = state_34856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34856__$1,inst_34854);
} else
{if((state_val_34857 === 4))
{var inst_34810 = (state_34856[2]);var inst_34815 = foundation.app.pre_process.call(null,inst_34810);var inst_34816 = cljs.core.seq.call(null,inst_34815);var inst_34817 = inst_34816;var inst_34818 = null;var inst_34819 = 0;var inst_34820 = 0;var state_34856__$1 = (function (){var statearr_34859 = state_34856;(statearr_34859[7] = inst_34819);
(statearr_34859[8] = inst_34817);
(statearr_34859[9] = inst_34818);
(statearr_34859[10] = inst_34820);
return statearr_34859;
})();var statearr_34860_34892 = state_34856__$1;(statearr_34860_34892[2] = null);
(statearr_34860_34892[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 5))
{var inst_34819 = (state_34856[7]);var inst_34820 = (state_34856[10]);var inst_34822 = (inst_34820 < inst_34819);var inst_34823 = inst_34822;var state_34856__$1 = state_34856;if(cljs.core.truth_(inst_34823))
{var statearr_34864_34893 = state_34856__$1;(statearr_34864_34893[1] = 7);
} else
{var statearr_34865_34894 = state_34856__$1;(statearr_34865_34894[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 6))
{var inst_34851 = (state_34856[2]);var state_34856__$1 = (function (){var statearr_34866 = state_34856;(statearr_34866[11] = inst_34851);
return statearr_34866;
})();var statearr_34867_34895 = state_34856__$1;(statearr_34867_34895[2] = null);
(statearr_34867_34895[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 7))
{var inst_34819 = (state_34856[7]);var inst_34817 = (state_34856[8]);var inst_34818 = (state_34856[9]);var inst_34820 = (state_34856[10]);var inst_34825 = cljs.core._nth.call(null,inst_34818,inst_34820);var inst_34826 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_34825);var inst_34827 = (inst_34820 + 1);var tmp34861 = inst_34819;var tmp34862 = inst_34817;var tmp34863 = inst_34818;var inst_34817__$1 = tmp34862;var inst_34818__$1 = tmp34863;var inst_34819__$1 = tmp34861;var inst_34820__$1 = inst_34827;var state_34856__$1 = (function (){var statearr_34868 = state_34856;(statearr_34868[7] = inst_34819__$1);
(statearr_34868[8] = inst_34817__$1);
(statearr_34868[9] = inst_34818__$1);
(statearr_34868[12] = inst_34826);
(statearr_34868[10] = inst_34820__$1);
return statearr_34868;
})();var statearr_34869_34896 = state_34856__$1;(statearr_34869_34896[2] = null);
(statearr_34869_34896[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 8))
{var inst_34817 = (state_34856[8]);var inst_34830 = (state_34856[13]);var inst_34830__$1 = cljs.core.seq.call(null,inst_34817);var state_34856__$1 = (function (){var statearr_34870 = state_34856;(statearr_34870[13] = inst_34830__$1);
return statearr_34870;
})();if(inst_34830__$1)
{var statearr_34871_34897 = state_34856__$1;(statearr_34871_34897[1] = 10);
} else
{var statearr_34872_34898 = state_34856__$1;(statearr_34872_34898[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 9))
{var inst_34849 = (state_34856[2]);var state_34856__$1 = state_34856;var statearr_34873_34899 = state_34856__$1;(statearr_34873_34899[2] = inst_34849);
(statearr_34873_34899[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 10))
{var inst_34830 = (state_34856[13]);var inst_34832 = cljs.core.chunked_seq_QMARK_.call(null,inst_34830);var state_34856__$1 = state_34856;if(inst_34832)
{var statearr_34874_34900 = state_34856__$1;(statearr_34874_34900[1] = 13);
} else
{var statearr_34875_34901 = state_34856__$1;(statearr_34875_34901[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 11))
{var state_34856__$1 = state_34856;var statearr_34876_34902 = state_34856__$1;(statearr_34876_34902[2] = null);
(statearr_34876_34902[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 12))
{var inst_34847 = (state_34856[2]);var state_34856__$1 = state_34856;var statearr_34877_34903 = state_34856__$1;(statearr_34877_34903[2] = inst_34847);
(statearr_34877_34903[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 13))
{var inst_34830 = (state_34856[13]);var inst_34834 = cljs.core.chunk_first.call(null,inst_34830);var inst_34835 = cljs.core.chunk_rest.call(null,inst_34830);var inst_34836 = cljs.core.count.call(null,inst_34834);var inst_34817 = inst_34835;var inst_34818 = inst_34834;var inst_34819 = inst_34836;var inst_34820 = 0;var state_34856__$1 = (function (){var statearr_34878 = state_34856;(statearr_34878[7] = inst_34819);
(statearr_34878[8] = inst_34817);
(statearr_34878[9] = inst_34818);
(statearr_34878[10] = inst_34820);
return statearr_34878;
})();var statearr_34879_34904 = state_34856__$1;(statearr_34879_34904[2] = null);
(statearr_34879_34904[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 14))
{var inst_34830 = (state_34856[13]);var inst_34839 = cljs.core.first.call(null,inst_34830);var inst_34840 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_34839);var inst_34841 = cljs.core.next.call(null,inst_34830);var inst_34817 = inst_34841;var inst_34818 = null;var inst_34819 = 0;var inst_34820 = 0;var state_34856__$1 = (function (){var statearr_34880 = state_34856;(statearr_34880[7] = inst_34819);
(statearr_34880[8] = inst_34817);
(statearr_34880[9] = inst_34818);
(statearr_34880[14] = inst_34840);
(statearr_34880[10] = inst_34820);
return statearr_34880;
})();var statearr_34881_34905 = state_34856__$1;(statearr_34881_34905[2] = null);
(statearr_34881_34905[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34857 === 15))
{var inst_34844 = (state_34856[2]);var state_34856__$1 = state_34856;var statearr_34882_34906 = state_34856__$1;(statearr_34882_34906[2] = inst_34844);
(statearr_34882_34906[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11663__auto__){
return (function() {
var state_machine__11664__auto__ = null;
var state_machine__11664__auto____0 = (function (){var statearr_34886 = (new Array(15));(statearr_34886[0] = state_machine__11664__auto__);
(statearr_34886[1] = 1);
return statearr_34886;
});
var state_machine__11664__auto____1 = (function (state_34856){while(true){
var ret_value__11665__auto__ = (function (){try{while(true){
var result__11666__auto__ = switch__11663__auto__.call(null,state_34856);if(cljs.core.keyword_identical_QMARK_.call(null,result__11666__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11666__auto__;
}
break;
}
}catch (e34887){if((e34887 instanceof Object))
{var ex__11667__auto__ = e34887;var statearr_34888_34907 = state_34856;(statearr_34888_34907[5] = ex__11667__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11665__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34908 = state_34856;
state_34856 = G__34908;
continue;
}
} else
{return ret_value__11665__auto__;
}
break;
}
});
state_machine__11664__auto__ = function(state_34856){
switch(arguments.length){
case 0:
return state_machine__11664__auto____0.call(this);
case 1:
return state_machine__11664__auto____1.call(this,state_34856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11664__auto____0;
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11664__auto____1;
return state_machine__11664__auto__;
})()
;})(switch__11663__auto__))
})();var state__11735__auto__ = (function (){var statearr_34889 = f__11734__auto__.call(null);(statearr_34889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto___34890);
return statearr_34889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11735__auto__);
}));
return input_queue__$1;
});
foundation.app.app_model_queue = (function app_model_queue(app_atom){var app_model_queue__$1 = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"app-model-delta-watcher","app-model-delta-watcher",3254923977),(function (_,___$1,old_state,new_state){var deltas = new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316).cljs$core$IFn$_invoke$arity$1(new_state);if((cljs.core.empty_QMARK_.call(null,deltas)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316).cljs$core$IFn$_invoke$arity$1(old_state),deltas)))
{return null;
} else
{var deltas__$1 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.post_process,deltas));return cljs.core.async.put_BANG_.call(null,app_model_queue__$1,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"deltas","deltas",3973426989),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas__$1], true, false));
}
}));
return app_model_queue__$1;
});
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__34913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__34914 = null;var count__34915 = 0;var i__34916 = 0;while(true){
if((i__34916 < count__34915))
{var message = cljs.core._nth.call(null,chunk__34914,i__34916);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__34917 = seq__34913;
var G__34918 = chunk__34914;
var G__34919 = count__34915;
var G__34920 = (i__34916 + 1);
seq__34913 = G__34917;
chunk__34914 = G__34918;
count__34915 = G__34919;
i__34916 = G__34920;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34913);if(temp__4098__auto__)
{var seq__34913__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34913__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__34913__$1);{
var G__34921 = cljs.core.chunk_rest.call(null,seq__34913__$1);
var G__34922 = c__8454__auto__;
var G__34923 = cljs.core.count.call(null,c__8454__auto__);
var G__34924 = 0;
seq__34913 = G__34921;
chunk__34914 = G__34922;
count__34915 = G__34923;
i__34916 = G__34924;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__34913__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__34925 = cljs.core.next.call(null,seq__34913__$1);
var G__34926 = null;
var G__34927 = 0;
var G__34928 = 0;
seq__34913 = G__34925;
chunk__34914 = G__34926;
count__34915 = G__34927;
i__34916 = G__34928;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
return output_queue;
});
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__34933){var vec__34934 = p__34933;var name = cljs.core.nth.call(null,vec__34934,0,null);var paths = cljs.core.nth.call(null,vec__34934,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__34935){var vec__34936 = p__34935;var k = cljs.core.nth.call(null,vec__34936,0,null);var v = cljs.core.nth.call(null,vec__34936,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
}),focus)),(function (){var temp__4098__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(focus);if(cljs.core.truth_(temp__4098__auto__))
{var n = temp__4098__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),new cljs.core.Keyword(null,"name","name",1017277949),n], true, false)], null);
} else
{return null;
}
})());
});
foundation.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){return begin.call(null,app,null);
});
var begin__2 = (function (app,p__34937){var map__34943 = p__34937;var map__34943__$1 = ((cljs.core.seq_QMARK_.call(null,map__34943))?cljs.core.apply.call(null,cljs.core.hash_map,map__34943):map__34943);var focus = cljs.core.get.call(null,map__34943__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__34943__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__34944 = cljs.core.seq.call(null,init_messages__$1);var chunk__34945 = null;var count__34946 = 0;var i__34947 = 0;while(true){
if((i__34947 < count__34946))
{var message = cljs.core._nth.call(null,chunk__34945,i__34947);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__34948 = seq__34944;
var G__34949 = chunk__34945;
var G__34950 = count__34946;
var G__34951 = (i__34947 + 1);
seq__34944 = G__34948;
chunk__34945 = G__34949;
count__34946 = G__34950;
i__34947 = G__34951;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34944);if(temp__4098__auto__)
{var seq__34944__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34944__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__34944__$1);{
var G__34952 = cljs.core.chunk_rest.call(null,seq__34944__$1);
var G__34953 = c__8454__auto__;
var G__34954 = cljs.core.count.call(null,c__8454__auto__);
var G__34955 = 0;
seq__34944 = G__34952;
chunk__34945 = G__34953;
count__34946 = G__34954;
i__34947 = G__34955;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__34944__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__34956 = cljs.core.next.call(null,seq__34944__$1);
var G__34957 = null;
var G__34958 = 0;
var G__34959 = 0;
seq__34944 = G__34956;
chunk__34945 = G__34957;
count__34946 = G__34958;
i__34947 = G__34959;
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
begin = function(app,p__34937){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__34937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__11733__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11734__auto__ = (function (){var switch__11663__auto__ = (function (state_34988){var state_val_34989 = (state_34988[1]);if((state_val_34989 === 4))
{var inst_34982 = (state_34988[2]);var inst_34983 = foundation.app.effect.call(null,inst_34982,input);var state_34988__$1 = (function (){var statearr_34990 = state_34988;(statearr_34990[7] = inst_34983);
return statearr_34990;
})();var statearr_34991_35000 = state_34988__$1;(statearr_34991_35000[2] = null);
(statearr_34991_35000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34989 === 3))
{var inst_34986 = (state_34988[2]);var state_34988__$1 = state_34988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34988__$1,inst_34986);
} else
{if((state_val_34989 === 2))
{var state_34988__$1 = state_34988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34988__$1,4,output);
} else
{if((state_val_34989 === 1))
{var state_34988__$1 = state_34988;var statearr_34992_35001 = state_34988__$1;(statearr_34992_35001[2] = null);
(statearr_34992_35001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__11663__auto__){
return (function() {
var state_machine__11664__auto__ = null;
var state_machine__11664__auto____0 = (function (){var statearr_34996 = (new Array(8));(statearr_34996[0] = state_machine__11664__auto__);
(statearr_34996[1] = 1);
return statearr_34996;
});
var state_machine__11664__auto____1 = (function (state_34988){while(true){
var ret_value__11665__auto__ = (function (){try{while(true){
var result__11666__auto__ = switch__11663__auto__.call(null,state_34988);if(cljs.core.keyword_identical_QMARK_.call(null,result__11666__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11666__auto__;
}
break;
}
}catch (e34997){if((e34997 instanceof Object))
{var ex__11667__auto__ = e34997;var statearr_34998_35002 = state_34988;(statearr_34998_35002[5] = ex__11667__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11665__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35003 = state_34988;
state_34988 = G__35003;
continue;
}
} else
{return ret_value__11665__auto__;
}
break;
}
});
state_machine__11664__auto__ = function(state_34988){
switch(arguments.length){
case 0:
return state_machine__11664__auto____0.call(this);
case 1:
return state_machine__11664__auto____1.call(this,state_34988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11664__auto____0;
state_machine__11664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11664__auto____1;
return state_machine__11664__auto__;
})()
;})(switch__11663__auto__))
})();var state__11735__auto__ = (function (){var statearr_34999 = f__11734__auto__.call(null);(statearr_34999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11733__auto__);
return statearr_34999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11735__auto__);
}));
return c__11733__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__35008 = cljs.core.seq.call(null,script);var chunk__35009 = null;var count__35010 = 0;var i__35011 = 0;while(true){
if((i__35011 < count__35010))
{var message = cljs.core._nth.call(null,chunk__35009,i__35011);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__35012 = seq__35008;
var G__35013 = chunk__35009;
var G__35014 = count__35010;
var G__35015 = (i__35011 + 1);
seq__35008 = G__35012;
chunk__35009 = G__35013;
count__35010 = G__35014;
i__35011 = G__35015;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__35008);if(temp__4098__auto__)
{var seq__35008__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35008__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__35008__$1);{
var G__35016 = cljs.core.chunk_rest.call(null,seq__35008__$1);
var G__35017 = c__8454__auto__;
var G__35018 = cljs.core.count.call(null,c__8454__auto__);
var G__35019 = 0;
seq__35008 = G__35016;
chunk__35009 = G__35017;
count__35010 = G__35018;
i__35011 = G__35019;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__35008__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__35020 = cljs.core.next.call(null,seq__35008__$1);
var G__35021 = null;
var G__35022 = 0;
var G__35023 = 0;
seq__35008 = G__35020;
chunk__35009 = G__35021;
count__35010 = G__35022;
i__35011 = G__35023;
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
foundation.app.depends = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__35024,graph){var map__35025 = p__35024;var map__35025__$1 = ((cljs.core.seq_QMARK_.call(null,map__35025))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);var transform = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__35026 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__35026,0,null);var path = cljs.core.nth.call(null,vec__35026,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__35029,graph){var map__35030 = p__35029;var map__35030__$1 = ((cljs.core.seq_QMARK_.call(null,map__35030))?cljs.core.apply.call(null,cljs.core.hash_map,map__35030):map__35030);var derives = cljs.core.get.call(null,map__35030__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__35031 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__35031,0,null);var output_path = cljs.core.nth.call(null,vec__35031,1,null);var input_spec = cljs.core.nth.call(null,vec__35031,2,null);var input_paths__$1 = (function (){var or__7730__auto__ = (function (){var and__7718__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__7718__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__35027_SHARP_,p2__35028_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__35027_SHARP_,output_path,p2__35028_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__7730__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return foundation.app.data.dependency.graph.call(null);
}
})(),foundation.app.dispatches);
});
build_dependency_graph = function(app){
switch(arguments.length){
case 0:
return build_dependency_graph__0.call(this);
case 1:
return build_dependency_graph__1.call(this,app);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_dependency_graph.cljs$core$IFn$_invoke$arity$0 = build_dependency_graph__0;
build_dependency_graph.cljs$core$IFn$_invoke$arity$1 = build_dependency_graph__1;
return build_dependency_graph;
})()
;
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__35033 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__35033,0,null);var large = cljs.core.nth.call(null,vec__35033,1,null);return foundation.app.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__35034_SHARP_){return foundation.app.matching_path_QMARK_.call(null,x,p1__35034_SHARP_);
}),input_paths);
}),change_set));
});
foundation.app.remove_matching_changes = (function remove_matching_changes(change,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),foundation.app.remover,input_paths);
}),change,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598),new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null));
});
foundation.app.flow_input = (function flow_input(context,state,input_paths,change){var input_set = (function input_set(changes,f,input_paths__$1){return cljs.core.set.call(null,f.call(null,(function (x){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.descendent_QMARK_,x),input_paths__$1);
}),changes));
});
var update_input_sets = (function update_input_sets(m,ks,f,input_paths__$1){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),input_set,f,input_paths__$1);
}),m,ks);
});
return update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"new-model","new-model",3618698286),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"old-model","old-model",1443313525),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"input-paths","input-paths",3910795421),input_paths),cljs.core.select_keys.call(null,change,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null),cljs.core.filter,input_paths);
});
foundation.app.emit_phase = (function emit_phase(p__35035){var map__35038 = p__35035;var map__35038__$1 = ((cljs.core.seq_QMARK_.call(null,map__35038))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);var state = map__35038__$1;var change = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__35039 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__35039__$1 = ((cljs.core.seq_QMARK_.call(null,map__35039))?cljs.core.apply.call(null,cljs.core.hash_map,map__35039):map__35039);var state__$1 = map__35039__$1;var processed_inputs = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4096__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4096__auto__))
{var transformer = temp__4096__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4096__auto____$1 = cljs.core.seq.call(null,(function (){var iter__8423__auto__ = (function iter__35044(s__35045){return (new cljs.core.LazySeq(null,(function (){var s__35045__$1 = s__35045;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__35045__$1);if(temp__4098__auto__)
{var s__35045__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35045__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__35045__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__35047 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__35046 = 0;while(true){
if((i__35046 < size__8422__auto__))
{var dval = cljs.core._nth.call(null,c__8421__auto__,i__35046);if(foundation.app.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__35047,cljs.core.get.call(null,dispatches,dval));
{
var G__35048 = (i__35046 + 1);
i__35046 = G__35048;
continue;
}
} else
{{
var G__35049 = (i__35046 + 1);
i__35046 = G__35049;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35047),iter__35044.call(null,cljs.core.chunk_rest.call(null,s__35045__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35047),null);
}
} else
{var dval = cljs.core.first.call(null,s__35045__$2);if(foundation.app.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__35044.call(null,cljs.core.rest.call(null,s__35045__$2)));
} else
{{
var G__35050 = cljs.core.rest.call(null,s__35045__$2);
s__35045__$1 = G__35050;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,cljs.core.keys.call(null,dispatches));
})());if(temp__4096__auto____$1)
{var transformers = temp__4096__auto____$1;return cljs.core.vec.call(null,transformers);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_method.call(null,multifn,dispatch_val)], null);
}
}
});
/**
* @param {...*} var_args
*/
foundation.app.update_state = (function() { 
var update_state__delegate = function (state,path,f,args){var data_model = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null));var new_data_model = cljs.core.apply.call(null,cljs.core.update_in,foundation.app.data.tracking_map.tracking_map.call(null,data_model),path,f,args);return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),cljs.core.deref.call(null,new_data_model)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106)], null),(function (old,new$){return cljs.core.merge_with.call(null,cljs.core.into,old,new$);
}),foundation.app.data.tracking_map.changes.call(null,new_data_model));
};
var update_state = function (state,path,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_state__delegate.call(this,state,path,f,args);};
update_state.cljs$lang$maxFixedArity = 3;
update_state.cljs$lang$applyTo = (function (arglist__35051){
var state = cljs.core.first(arglist__35051);
arglist__35051 = cljs.core.next(arglist__35051);
var path = cljs.core.first(arglist__35051);
arglist__35051 = cljs.core.next(arglist__35051);
var f = cljs.core.first(arglist__35051);
var args = cljs.core.rest(arglist__35051);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__35052){var map__35055 = p__35052;var map__35055__$1 = ((cljs.core.seq_QMARK_.call(null,map__35055))?cljs.core.apply.call(null,cljs.core.hash_map,map__35055):map__35055);var state = map__35055__$1;var context = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__35056 = message;var map__35056__$1 = ((cljs.core.seq_QMARK_.call(null,map__35056))?cljs.core.apply.call(null,cljs.core.hash_map,map__35056):map__35056);var type = cljs.core.get.call(null,map__35056__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__35056__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__35058,input_paths){var map__35060 = p__35058;var map__35060__$1 = ((cljs.core.seq_QMARK_.call(null,map__35060))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);var state = map__35060__$1;var context = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__35057_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__35057_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__35061){var map__35069 = p__35061;var map__35069__$1 = ((cljs.core.seq_QMARK_.call(null,map__35069))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069):map__35069);var state = map__35069__$1;var context = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4096__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4096__auto__)
{var dependents = temp__4096__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__35070,p__35071){var map__35072 = p__35070;var map__35072__$1 = ((cljs.core.seq_QMARK_.call(null,map__35072))?cljs.core.apply.call(null,cljs.core.hash_map,map__35072):map__35072);var state__$1 = map__35072__$1;var change = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__35073 = p__35071;var vec__35074 = cljs.core.nth.call(null,vec__35073,0,null);var input_paths = cljs.core.nth.call(null,vec__35074,0,null);var output_path = cljs.core.nth.call(null,vec__35074,1,null);var ispec = cljs.core.nth.call(null,vec__35074,2,null);var derive = vec__35074;var derive_fn = cljs.core.nth.call(null,vec__35073,1,null);var vec__35075 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__35075,0,null);var arg_names = cljs.core.nth.call(null,vec__35075,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__35076){var map__35084 = p__35076;var map__35084__$1 = ((cljs.core.seq_QMARK_.call(null,map__35084))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);var state = map__35084__$1;var context = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4096__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4096__auto__)
{var dependents = temp__4096__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__35085,p__35086){var map__35087 = p__35085;var map__35087__$1 = ((cljs.core.seq_QMARK_.call(null,map__35087))?cljs.core.apply.call(null,cljs.core.hash_map,map__35087):map__35087);var state__$1 = map__35087__$1;var change = cljs.core.get.call(null,map__35087__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__35088 = p__35086;var vec__35089 = cljs.core.nth.call(null,vec__35088,0,null);var input_paths = cljs.core.nth.call(null,vec__35089,0,null);var ispec = cljs.core.nth.call(null,vec__35089,1,null);var effect = vec__35089;var effect_fn = cljs.core.nth.call(null,vec__35088,1,null);var vec__35090 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__35090,0,null);var arg_names = cljs.core.nth.call(null,vec__35090,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
}),state,dependents);
} else
{return state;
}
});

/**
* @constructor
* @param {*} state
* @param {*} input
* @param {*} output
* @param {*} app_model
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.App = (function (state,input,output,app_model,__meta,__extmap){
this.state = state;
this.input = input;
this.output = output;
this.app_model = app_model;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.App.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8287__auto__){var self__ = this;
var this__8287__auto____$1 = this;var h__8141__auto__ = self__.__hash;if(!((h__8141__auto__ == null)))
{return h__8141__auto__;
} else
{var h__8141__auto____$1 = cljs.core.hash_imap.call(null,this__8287__auto____$1);self__.__hash = h__8141__auto____$1;
return h__8141__auto____$1;
}
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8292__auto__,k__8293__auto__){var self__ = this;
var this__8292__auto____$1 = this;return cljs.core._lookup.call(null,this__8292__auto____$1,k__8293__auto__,null);
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8294__auto__,k35092,else__8295__auto__){var self__ = this;
var this__8294__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k35092,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k35092,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k35092,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k35092,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k35092,else__8295__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8299__auto__,k__8300__auto__,G__35091){var self__ = this;
var this__8299__auto____$1 = this;var pred__35094 = cljs.core.keyword_identical_QMARK_;var expr__35095 = k__8300__auto__;if(cljs.core.truth_(pred__35094.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__35095)))
{return (new foundation.app.App(G__35091,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__35094.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__35095)))
{return (new foundation.app.App(self__.state,G__35091,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__35094.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__35095)))
{return (new foundation.app.App(self__.state,self__.input,G__35091,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__35094.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__35095)))
{return (new foundation.app.App(self__.state,self__.input,self__.output,G__35091,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8300__auto__,G__35091),null));
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8306__auto__,writer__8307__auto__,opts__8308__auto__){var self__ = this;
var this__8306__auto____$1 = this;var pr_pair__8309__auto__ = (function (keyval__8310__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8307__auto__,cljs.core.pr_writer,""," ","",opts__8308__auto__,keyval__8310__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8307__auto__,pr_pair__8309__auto__,"#foundation.app.App{",", ","}",opts__8308__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8297__auto__,entry__8298__auto__){var self__ = this;
var this__8297__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8298__auto__))
{return cljs.core._assoc.call(null,this__8297__auto____$1,cljs.core._nth.call(null,entry__8298__auto__,0),cljs.core._nth.call(null,entry__8298__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8297__auto____$1,entry__8298__auto__);
}
});
foundation.app.App.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8304__auto__){var self__ = this;
var this__8304__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8296__auto__){var self__ = this;
var this__8296__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.App.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8288__auto__,other__8289__auto__){var self__ = this;
var this__8288__auto____$1 = this;if(cljs.core.truth_((function (){var and__7718__auto__ = other__8289__auto__;if(cljs.core.truth_(and__7718__auto__))
{return ((this__8288__auto____$1.constructor === other__8289__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8288__auto____$1,other__8289__auto__));
} else
{return and__7718__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.App.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8291__auto__,G__35091){var self__ = this;
var this__8291__auto____$1 = this;return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,G__35091,self__.__extmap,self__.__hash));
});
foundation.app.App.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8290__auto__){var self__ = this;
var this__8290__auto____$1 = this;return self__.__meta;
});
foundation.app.App.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8301__auto__,k__8302__auto__){var self__ = this;
var this__8301__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__8302__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8301__auto____$1),self__.__meta),k__8302__auto__);
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8302__auto__)),null));
}
});
foundation.app.App.cljs$lang$type = true;
foundation.app.App.cljs$lang$ctorPrSeq = (function (this__8326__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/App");
});
foundation.app.App.cljs$lang$ctorPrWriter = (function (this__8326__auto__,writer__8327__auto__){return cljs.core._write.call(null,writer__8327__auto__,"foundation.app/App");
});
foundation.app.__GT_App = (function __GT_App(state,input,output,app_model){return (new foundation.app.App(state,input,output,app_model));
});
foundation.app.map__GT_App = (function map__GT_App(G__35093){return (new foundation.app.App(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__35093),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__35093),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__35093),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__35093),null,cljs.core.dissoc.call(null,G__35093,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.App(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__35101 = cljs.core.seq.call(null,foundation.app.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__35102 = null;var count__35103 = 0;var i__35104 = 0;while(true){
if((i__35104 < count__35103))
{var message = cljs.core._nth.call(null,chunk__35102,i__35104);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__35105 = seq__35101;
var G__35106 = chunk__35102;
var G__35107 = count__35103;
var G__35108 = (i__35104 + 1);
seq__35101 = G__35105;
chunk__35102 = G__35106;
count__35103 = G__35107;
i__35104 = G__35108;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__35101);if(temp__4098__auto__)
{var seq__35101__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35101__$1))
{var c__8454__auto__ = cljs.core.chunk_first.call(null,seq__35101__$1);{
var G__35109 = cljs.core.chunk_rest.call(null,seq__35101__$1);
var G__35110 = c__8454__auto__;
var G__35111 = cljs.core.count.call(null,c__8454__auto__);
var G__35112 = 0;
seq__35101 = G__35109;
chunk__35102 = G__35110;
count__35103 = G__35111;
i__35104 = G__35112;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__35101__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__35113 = cljs.core.next.call(null,seq__35101__$1);
var G__35114 = null;
var G__35115 = 0;
var G__35116 = 0;
seq__35101 = G__35113;
chunk__35102 = G__35114;
count__35103 = G__35115;
i__35104 = G__35116;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(partial_message))
;return foundation.app.bind_event.call(null,event,id,event_handler);
})());
});
foundation.app.dispatches = cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__35117_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__35117_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
foundation.app.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__35118){var map__35120 = p__35118;var map__35120__$1 = ((cljs.core.seq_QMARK_.call(null,map__35120))?cljs.core.apply.call(null,cljs.core.hash_map,map__35120):map__35120);var init_messages = cljs.core.get.call(null,map__35120__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__35120__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.renderer.call(null,root_id,foundation.app.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
};
var create_app = function (root_id,var_args){
var p__35118 = null;if (arguments.length > 1) {
  p__35118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__35118);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__35121){
var root_id = cljs.core.first(arglist__35121);
var p__35118 = cljs.core.rest(arglist__35121);
return create_app__delegate(root_id,p__35118);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;

//# sourceMappingURL=app.js.map