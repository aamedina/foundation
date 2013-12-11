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
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.tree');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.node_create = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__104381,input_queue,id){var vec__104382 = p__104381;var _ = cljs.core.nth.call(null,vec__104382,0,null);var path = cljs.core.nth.call(null,vec__104382,1,null);var ___$1 = cljs.core.nth.call(null,vec__104382,2,null);var ___$2 = cljs.core.nth.call(null,vec__104382,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__104380_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__104380_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.node_update = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__104383,input_queue,id,node){var vec__104384 = p__104383;var _ = cljs.core.nth.call(null,vec__104384,0,null);var path = cljs.core.nth.call(null,vec__104384,1,null);var ___$1 = cljs.core.nth.call(null,vec__104384,2,null);var ___$2 = cljs.core.nth.call(null,vec__104384,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!((id instanceof cljs.core.Keyword)))?cljs.core.keyword.call(null,id):id),path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__104385__delegate = function (args){return null;
};
var G__104385 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104385__delegate.call(this,args);};
G__104385.cljs$lang$maxFixedArity = 0;
G__104385.cljs$lang$applyTo = (function (arglist__104386){
var args = cljs.core.seq(arglist__104386);
return G__104385__delegate(args);
});
G__104385.cljs$core$IFn$_invoke$arity$variadic = G__104385__delegate;
return G__104385;
})()
);
foundation.app.node_destroy = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__104388,input_queue,id){var vec__104389 = p__104388;var _ = cljs.core.nth.call(null,vec__104389,0,null);var path = cljs.core.nth.call(null,vec__104389,1,null);var ___$1 = cljs.core.nth.call(null,vec__104389,2,null);var ___$2 = cljs.core.nth.call(null,vec__104389,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__104387_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__104387_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__104390__delegate = function (args){return null;
};
var G__104390 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104390__delegate.call(this,args);};
G__104390.cljs$lang$maxFixedArity = 0;
G__104390.cljs$lang$applyTo = (function (arglist__104391){
var args = cljs.core.seq(arglist__104391);
return G__104390__delegate(args);
});
G__104390.cljs$core$IFn$_invoke$arity$variadic = G__104390__delegate;
return G__104390;
})()
);
foundation.app.transform_enable = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.transform_disable = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.transform = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return null;
}));
foundation.app.post_process = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__104392__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__104392 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__104392__delegate.call(this,k,args);};
G__104392.cljs$lang$maxFixedArity = 1;
G__104392.cljs$lang$applyTo = (function (arglist__104393){
var k = cljs.core.first(arglist__104393);
var args = cljs.core.rest(arglist__104393);
return G__104392__delegate(k,args);
});
G__104392.cljs$core$IFn$_invoke$arity$variadic = G__104392__delegate;
return G__104392;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
foundation.app.route_effect = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.DomMapper = (function (){var obj104395 = {};return obj104395;
})();
foundation.app.get_id = (function get_id(this$,path){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$get_id$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_id$arity$2(this$,path);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.get_id[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.get_id["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$get_parent_id$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.get_parent_id[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.get_parent_id["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.new_id_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.new_id_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$3;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.new_id_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.new_id_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
foundation.app.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.delete_id_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.delete_id_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.on_destroy_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.on_destroy_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$set_data_BANG_$arity$3;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.set_data_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.set_data_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.drop_data_BANG_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.drop_data_BANG_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.get_data = (function get_data(this$,ks){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.foundation$app$DomMapper$get_data$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.foundation$app$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (foundation.app.get_data[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (foundation.app.get_data["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__104396_SHARP_){return cljs.core.get.call(null,n,p1__104396_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__104401 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__104402 = null;var count__104403 = 0;var i__104404 = 0;while(true){
if((i__104404 < count__104403))
{var f = cljs.core._nth.call(null,chunk__104402,i__104404);f.call(null);
{
var G__104405 = seq__104401;
var G__104406 = chunk__104402;
var G__104407 = count__104403;
var G__104408 = (i__104404 + 1);
seq__104401 = G__104405;
chunk__104402 = G__104406;
count__104403 = G__104407;
i__104404 = G__104408;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__104401);if(temp__4098__auto__)
{var seq__104401__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104401__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__104401__$1);{
var G__104409 = cljs.core.chunk_rest.call(null,seq__104401__$1);
var G__104410 = c__15907__auto__;
var G__104411 = cljs.core.count.call(null,c__15907__auto__);
var G__104412 = 0;
seq__104401 = G__104409;
chunk__104402 = G__104410;
count__104403 = G__104411;
i__104404 = G__104412;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__104401__$1);f.call(null);
{
var G__104413 = cljs.core.next.call(null,seq__104401__$1);
var G__104414 = null;
var G__104415 = 0;
var G__104416 = 0;
seq__104401 = G__104413;
chunk__104402 = G__104414;
count__104403 = G__104415;
i__104404 = G__104416;
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
foundation.app.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15740__auto__){var self__ = this;
var this__15740__auto____$1 = this;var h__15594__auto__ = self__.__hash;if(!((h__15594__auto__ == null)))
{return h__15594__auto__;
} else
{var h__15594__auto____$1 = cljs.core.hash_imap.call(null,this__15740__auto____$1);self__.__hash = h__15594__auto____$1;
return h__15594__auto____$1;
}
});
foundation.app.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15745__auto__,k__15746__auto__){var self__ = this;
var this__15745__auto____$1 = this;return cljs.core._lookup.call(null,this__15745__auto____$1,k__15746__auto__,null);
});
foundation.app.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15747__auto__,k104418,else__15748__auto__){var self__ = this;
var this__15747__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k104418,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k104418,else__15748__auto__);
} else
{return null;
}
}
});
foundation.app.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15752__auto__,k__15753__auto__,G__104417){var self__ = this;
var this__15752__auto____$1 = this;var pred__104420 = cljs.core.keyword_identical_QMARK_;var expr__104421 = k__15753__auto__;if(cljs.core.truth_(pred__104420.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__104421)))
{return (new foundation.app.DomRenderer(G__104417,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15753__auto__,G__104417),null));
}
});
foundation.app.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15759__auto__,writer__15760__auto__,opts__15761__auto__){var self__ = this;
var this__15759__auto____$1 = this;var pr_pair__15762__auto__ = (function (keyval__15763__auto__){return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,cljs.core.pr_writer,""," ","",opts__15761__auto__,keyval__15763__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,pr_pair__15762__auto__,"#foundation.app.DomRenderer{",", ","}",opts__15761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15750__auto__,entry__15751__auto__){var self__ = this;
var this__15750__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__15751__auto__))
{return cljs.core._assoc.call(null,this__15750__auto____$1,cljs.core._nth.call(null,entry__15751__auto__,0),cljs.core._nth.call(null,entry__15751__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__15750__auto____$1,entry__15751__auto__);
}
});
foundation.app.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15757__auto__){var self__ = this;
var this__15757__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15749__auto__){var self__ = this;
var this__15749__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15741__auto__,other__15742__auto__){var self__ = this;
var this__15741__auto____$1 = this;if(cljs.core.truth_((function (){var and__15171__auto__ = other__15742__auto__;if(cljs.core.truth_(and__15171__auto__))
{return ((this__15741__auto____$1.constructor === other__15742__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15741__auto____$1,other__15742__auto__));
} else
{return and__15171__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15744__auto__,G__104417){var self__ = this;
var this__15744__auto____$1 = this;return (new foundation.app.DomRenderer(self__.env,G__104417,self__.__extmap,self__.__hash));
});
foundation.app.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15743__auto__){var self__ = this;
var this__15743__auto____$1 = this;return self__.__meta;
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
foundation.app.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15754__auto__,k__15755__auto__){var self__ = this;
var this__15754__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__15755__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15754__auto____$1),self__.__meta),k__15755__auto__);
} else
{return (new foundation.app.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15755__auto__)),null));
}
});
foundation.app.DomRenderer.cljs$lang$type = true;
foundation.app.DomRenderer.cljs$lang$ctorPrSeq = (function (this__15779__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/DomRenderer");
});
foundation.app.DomRenderer.cljs$lang$ctorPrWriter = (function (this__15779__auto__,writer__15780__auto__){return cljs.core._write.call(null,writer__15780__auto__,"foundation.app/DomRenderer");
});
foundation.app.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.DomRenderer(env));
});
foundation.app.map__GT_DomRenderer = (function map__GT_DomRenderer(G__104419){return (new foundation.app.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__104419),null,cljs.core.dissoc.call(null,G__104419,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){log_fn.call(null,deltas);
var seq__104431 = cljs.core.seq.call(null,deltas);var chunk__104432 = null;var count__104433 = 0;var i__104434 = 0;while(true){
if((i__104434 < count__104433))
{var d = cljs.core._nth.call(null,chunk__104432,i__104434);var vec__104435_104439 = d;var op_104440 = cljs.core.nth.call(null,vec__104435_104439,0,null);var path_104441 = cljs.core.nth.call(null,vec__104435_104439,1,null);var id_104442 = (function (){var temp__4096__auto__ = foundation.app.get_id.call(null,renderer__$1,path_104441);if(cljs.core.truth_(temp__4096__auto__))
{var id = temp__4096__auto__;return id;
} else
{return foundation.app.new_id_BANG_.call(null,renderer__$1,path_104441);
}
})();var G__104436_104443 = op_104440;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__104436_104443))
{foundation.app.transform_disable.call(null,renderer__$1,d,input_queue,id_104442,document.querySelector(dommy.core.selector.call(null,id_104442)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__104436_104443))
{foundation.app.transform_enable.call(null,renderer__$1,d,input_queue,id_104442,document.querySelector(dommy.core.selector.call(null,id_104442)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__104436_104443))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104442,document.querySelector(dommy.core.selector.call(null,id_104442)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__104436_104443))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104442,document.querySelector(dommy.core.selector.call(null,id_104442)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__104436_104443))
{foundation.app.node_destroy.call(null,renderer__$1,d,input_queue,id_104442);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__104436_104443))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104442,document.querySelector(dommy.core.selector.call(null,id_104442)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__104436_104443))
{foundation.app.node_create.call(null,renderer__$1,d,input_queue,id_104442);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_104440)].join('')));
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
var G__104444 = seq__104431;
var G__104445 = chunk__104432;
var G__104446 = count__104433;
var G__104447 = (i__104434 + 1);
seq__104431 = G__104444;
chunk__104432 = G__104445;
count__104433 = G__104446;
i__104434 = G__104447;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__104431);if(temp__4098__auto__)
{var seq__104431__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104431__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__104431__$1);{
var G__104448 = cljs.core.chunk_rest.call(null,seq__104431__$1);
var G__104449 = c__15907__auto__;
var G__104450 = cljs.core.count.call(null,c__15907__auto__);
var G__104451 = 0;
seq__104431 = G__104448;
chunk__104432 = G__104449;
count__104433 = G__104450;
i__104434 = G__104451;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__104431__$1);var vec__104437_104452 = d;var op_104453 = cljs.core.nth.call(null,vec__104437_104452,0,null);var path_104454 = cljs.core.nth.call(null,vec__104437_104452,1,null);var id_104455 = (function (){var temp__4096__auto__ = foundation.app.get_id.call(null,renderer__$1,path_104454);if(cljs.core.truth_(temp__4096__auto__))
{var id = temp__4096__auto__;return id;
} else
{return foundation.app.new_id_BANG_.call(null,renderer__$1,path_104454);
}
})();var G__104438_104456 = op_104453;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__104438_104456))
{foundation.app.transform_disable.call(null,renderer__$1,d,input_queue,id_104455,document.querySelector(dommy.core.selector.call(null,id_104455)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__104438_104456))
{foundation.app.transform_enable.call(null,renderer__$1,d,input_queue,id_104455,document.querySelector(dommy.core.selector.call(null,id_104455)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__104438_104456))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104455,document.querySelector(dommy.core.selector.call(null,id_104455)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__104438_104456))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104455,document.querySelector(dommy.core.selector.call(null,id_104455)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__104438_104456))
{foundation.app.node_destroy.call(null,renderer__$1,d,input_queue,id_104455);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__104438_104456))
{foundation.app.node_update.call(null,renderer__$1,d,input_queue,id_104455,document.querySelector(dommy.core.selector.call(null,id_104455)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__104438_104456))
{foundation.app.node_create.call(null,renderer__$1,d,input_queue,id_104455);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_104453)].join('')));
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
var G__104457 = cljs.core.next.call(null,seq__104431__$1);
var G__104458 = null;
var G__104459 = 0;
var G__104460 = 0;
seq__104431 = G__104457;
chunk__104432 = G__104458;
count__104433 = G__104459;
i__104434 = G__104460;
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
foundation.app.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__19018__auto___104507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_104495){var state_val_104496 = (state_104495[1]);if((state_val_104496 === 4))
{var inst_104487 = (state_104495[2]);var inst_104488 = cljs.core.nth.call(null,inst_104487,0,null);var inst_104489 = cljs.core.nth.call(null,inst_104487,1,null);var inst_104490 = foundation.app.node_create.call(null,renderer,inst_104487,input_queue);var state_104495__$1 = (function (){var statearr_104497 = state_104495;(statearr_104497[7] = inst_104490);
(statearr_104497[8] = inst_104489);
(statearr_104497[9] = inst_104488);
return statearr_104497;
})();var statearr_104498_104508 = state_104495__$1;(statearr_104498_104508[2] = null);
(statearr_104498_104508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104496 === 3))
{var inst_104493 = (state_104495[2]);var state_104495__$1 = state_104495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104495__$1,inst_104493);
} else
{if((state_val_104496 === 2))
{var state_104495__$1 = state_104495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104495__$1,4,render_queue);
} else
{if((state_val_104496 === 1))
{var state_104495__$1 = state_104495;var statearr_104499_104509 = state_104495__$1;(statearr_104499_104509[2] = null);
(statearr_104499_104509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_104503 = (new Array(10));(statearr_104503[0] = state_machine__18949__auto__);
(statearr_104503[1] = 1);
return statearr_104503;
});
var state_machine__18949__auto____1 = (function (state_104495){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_104495);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e104504){if((e104504 instanceof Object))
{var ex__18952__auto__ = e104504;var statearr_104505_104510 = state_104495;(statearr_104505_104510[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104511 = state_104495;
state_104495 = G__104511;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_104495){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_104495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_104506 = f__19019__auto__.call(null);(statearr_104506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___104507);
return statearr_104506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return render_queue;
});
foundation.app.filter_changes = (function filter_changes(p__104512,changes){var map__104516 = p__104512;var map__104516__$1 = ((cljs.core.seq_QMARK_.call(null,map__104516))?cljs.core.apply.call(null,cljs.core.hash_map,map__104516):map__104516);var processed_inputs = cljs.core.get.call(null,map__104516__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__104517){var vec__104518 = p__104517;var k = cljs.core.nth.call(null,vec__104518,0,null);var v = cljs.core.nth.call(null,vec__104518,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__104525){var vec__104526 = p__104525;var k = cljs.core.nth.call(null,vec__104526,0,null);var v = cljs.core.nth.call(null,vec__104526,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__104527){var vec__104528 = p__104527;var k = cljs.core.nth.call(null,vec__104528,0,null);var v = cljs.core.nth.call(null,vec__104528,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__104529){var vec__104530 = p__104529;var k = cljs.core.nth.call(null,vec__104530,0,null);var v = cljs.core.nth.call(null,vec__104530,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__104569){var vec__104570 = p__104569;var k = cljs.core.nth.call(null,vec__104570,0,null);var v = cljs.core.nth.call(null,vec__104570,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__15876__auto__ = (function iter__104571(s__104572){return (new cljs.core.LazySeq(null,(function (){var s__104572__$1 = s__104572;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__104572__$1);if(temp__4098__auto__)
{var s__104572__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__104572__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__104572__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__104574 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__104573 = 0;while(true){
if((i__104573 < size__15875__auto__))
{var vec__104589 = cljs.core._nth.call(null,c__15874__auto__,i__104573);var path = cljs.core.nth.call(null,vec__104589,0,null);var arg = cljs.core.nth.call(null,vec__104589,1,null);cljs.core.chunk_append.call(null,b__104574,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__104595 = data_model__$1;if(G__104595)
{var bit__15809__auto__ = (G__104595.cljs$lang$protocol_mask$partition0$ & 256);if((bit__15809__auto__) || (G__104595.cljs$core$ILookup$))
{return true;
} else
{if((!G__104595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__104595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__104595);
}
})())
{var data_model_k__104594 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__104594,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__104603 = cljs.core.rest.call(null,ks);
var G__104604 = cljs.core.get.call(null,v,k,v);
var G__104605 = ret;
ks = G__104603;
data_model__$1 = G__104604;
ret = G__104605;
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
var G__104606 = (i__104573 + 1);
i__104573 = G__104606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104574),iter__104571.call(null,cljs.core.chunk_rest.call(null,s__104572__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104574),null);
}
} else
{var vec__104596 = cljs.core.first.call(null,s__104572__$2);var path = cljs.core.nth.call(null,vec__104596,0,null);var arg = cljs.core.nth.call(null,vec__104596,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__104602 = data_model__$1;if(G__104602)
{var bit__15809__auto__ = (G__104602.cljs$lang$protocol_mask$partition0$ & 256);if((bit__15809__auto__) || (G__104602.cljs$core$ILookup$))
{return true;
} else
{if((!G__104602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__104602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__104602);
}
})())
{var data_model_k__104601 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__104601,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__104607 = cljs.core.rest.call(null,ks);
var G__104608 = cljs.core.get.call(null,v,k,v);
var G__104609 = ret;
ks = G__104607;
data_model__$1 = G__104608;
ret = G__104609;
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
})(),iter__104571.call(null,cljs.core.rest.call(null,s__104572__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__104610){var map__104611 = p__104610;var map__104611__$1 = ((cljs.core.seq_QMARK_.call(null,map__104611))?cljs.core.apply.call(null,cljs.core.hash_map,map__104611):map__104611);var input_paths = cljs.core.get.call(null,map__104611__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__104611__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__19018__auto___104666 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_104654){var state_val_104655 = (state_104654[1]);if((state_val_104655 === 4))
{var inst_104642 = (state_104654[2]);var inst_104643 = cljs.core.deref.call(null,app_model);var inst_104644 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_104642);var inst_104645 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_104644);var inst_104646 = foundation.app.tree.t.call(null,inst_104643);var inst_104647 = foundation.app.tree.since_t.call(null,inst_104645,inst_104646);var inst_104648 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_104649 = render_fn.call(null,inst_104647,inst_104648);var state_104654__$1 = (function (){var statearr_104656 = state_104654;(statearr_104656[7] = inst_104649);
return statearr_104656;
})();var statearr_104657_104667 = state_104654__$1;(statearr_104657_104667[2] = null);
(statearr_104657_104667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104655 === 3))
{var inst_104652 = (state_104654[2]);var state_104654__$1 = state_104654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104654__$1,inst_104652);
} else
{if((state_val_104655 === 2))
{var inst_104640 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_104654__$1 = state_104654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104654__$1,4,inst_104640);
} else
{if((state_val_104655 === 1))
{var state_104654__$1 = state_104654;var statearr_104658_104668 = state_104654__$1;(statearr_104658_104668[2] = null);
(statearr_104658_104668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_104662 = (new Array(8));(statearr_104662[0] = state_machine__18949__auto__);
(statearr_104662[1] = 1);
return statearr_104662;
});
var state_machine__18949__auto____1 = (function (state_104654){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_104654);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e104663){if((e104663 instanceof Object))
{var ex__18952__auto__ = e104663;var statearr_104664_104669 = state_104654;(statearr_104664_104669[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104670 = state_104654;
state_104654 = G__104670;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_104654){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_104654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_104665 = f__19019__auto__.call(null);(statearr_104665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___104666);
return statearr_104665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__104672 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__104672))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__104672))
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
var ocr_104681 = cljs.core.first.call(null,a);var ocr_104682 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_104681)) && ((cljs.core.count.call(null,ocr_104681) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_104682)) && ((cljs.core.count.call(null,ocr_104682) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_104681 === null))
{if((ocr_104682 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104689 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104690 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104689;
b = G__104690;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104691 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104692 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104691;
b = G__104692;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__104693 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104694 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104693;
b = G__104694;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104695 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104696 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104695;
b = G__104696;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104697 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104698 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104697;
b = G__104698;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__104699 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104700 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104699;
b = G__104700;
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
{if((ocr_104681 === null))
{if((ocr_104682 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104701 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104702 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104701;
b = G__104702;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104703 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104704 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104703;
b = G__104704;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__104705 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104706 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104705;
b = G__104706;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104681,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104707 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104708 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104707;
b = G__104708;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_104682,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__104709 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104710 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104709;
b = G__104710;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__104711 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__104712 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__104711;
b = G__104712;
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__19018__auto___104877 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_104843){var state_val_104844 = (state_104843[1]);if((state_val_104844 === 1))
{var state_104843__$1 = state_104843;var statearr_104845_104878 = state_104843__$1;(statearr_104845_104878[2] = null);
(statearr_104845_104878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 2))
{var state_104843__$1 = state_104843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104843__$1,4,input_queue__$1);
} else
{if((state_val_104844 === 3))
{var inst_104841 = (state_104843[2]);var state_104843__$1 = state_104843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104843__$1,inst_104841);
} else
{if((state_val_104844 === 4))
{var inst_104797 = (state_104843[2]);var inst_104802 = foundation.app.pre_process.call(null,inst_104797);var inst_104803 = cljs.core.seq.call(null,inst_104802);var inst_104804 = inst_104803;var inst_104805 = null;var inst_104806 = 0;var inst_104807 = 0;var state_104843__$1 = (function (){var statearr_104846 = state_104843;(statearr_104846[7] = inst_104805);
(statearr_104846[8] = inst_104804);
(statearr_104846[9] = inst_104807);
(statearr_104846[10] = inst_104806);
return statearr_104846;
})();var statearr_104847_104879 = state_104843__$1;(statearr_104847_104879[2] = null);
(statearr_104847_104879[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 5))
{var inst_104807 = (state_104843[9]);var inst_104806 = (state_104843[10]);var inst_104809 = (inst_104807 < inst_104806);var inst_104810 = inst_104809;var state_104843__$1 = state_104843;if(cljs.core.truth_(inst_104810))
{var statearr_104851_104880 = state_104843__$1;(statearr_104851_104880[1] = 7);
} else
{var statearr_104852_104881 = state_104843__$1;(statearr_104852_104881[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 6))
{var inst_104838 = (state_104843[2]);var state_104843__$1 = (function (){var statearr_104853 = state_104843;(statearr_104853[11] = inst_104838);
return statearr_104853;
})();var statearr_104854_104882 = state_104843__$1;(statearr_104854_104882[2] = null);
(statearr_104854_104882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 7))
{var inst_104805 = (state_104843[7]);var inst_104804 = (state_104843[8]);var inst_104807 = (state_104843[9]);var inst_104806 = (state_104843[10]);var inst_104812 = cljs.core._nth.call(null,inst_104805,inst_104807);var inst_104813 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_104812);var inst_104814 = (inst_104807 + 1);var tmp104848 = inst_104805;var tmp104849 = inst_104804;var tmp104850 = inst_104806;var inst_104804__$1 = tmp104849;var inst_104805__$1 = tmp104848;var inst_104806__$1 = tmp104850;var inst_104807__$1 = inst_104814;var state_104843__$1 = (function (){var statearr_104855 = state_104843;(statearr_104855[7] = inst_104805__$1);
(statearr_104855[8] = inst_104804__$1);
(statearr_104855[9] = inst_104807__$1);
(statearr_104855[10] = inst_104806__$1);
(statearr_104855[12] = inst_104813);
return statearr_104855;
})();var statearr_104856_104883 = state_104843__$1;(statearr_104856_104883[2] = null);
(statearr_104856_104883[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 8))
{var inst_104804 = (state_104843[8]);var inst_104817 = (state_104843[13]);var inst_104817__$1 = cljs.core.seq.call(null,inst_104804);var state_104843__$1 = (function (){var statearr_104857 = state_104843;(statearr_104857[13] = inst_104817__$1);
return statearr_104857;
})();if(inst_104817__$1)
{var statearr_104858_104884 = state_104843__$1;(statearr_104858_104884[1] = 10);
} else
{var statearr_104859_104885 = state_104843__$1;(statearr_104859_104885[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 9))
{var inst_104836 = (state_104843[2]);var state_104843__$1 = state_104843;var statearr_104860_104886 = state_104843__$1;(statearr_104860_104886[2] = inst_104836);
(statearr_104860_104886[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 10))
{var inst_104817 = (state_104843[13]);var inst_104819 = cljs.core.chunked_seq_QMARK_.call(null,inst_104817);var state_104843__$1 = state_104843;if(inst_104819)
{var statearr_104861_104887 = state_104843__$1;(statearr_104861_104887[1] = 13);
} else
{var statearr_104862_104888 = state_104843__$1;(statearr_104862_104888[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 11))
{var state_104843__$1 = state_104843;var statearr_104863_104889 = state_104843__$1;(statearr_104863_104889[2] = null);
(statearr_104863_104889[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 12))
{var inst_104834 = (state_104843[2]);var state_104843__$1 = state_104843;var statearr_104864_104890 = state_104843__$1;(statearr_104864_104890[2] = inst_104834);
(statearr_104864_104890[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 13))
{var inst_104817 = (state_104843[13]);var inst_104821 = cljs.core.chunk_first.call(null,inst_104817);var inst_104822 = cljs.core.chunk_rest.call(null,inst_104817);var inst_104823 = cljs.core.count.call(null,inst_104821);var inst_104804 = inst_104822;var inst_104805 = inst_104821;var inst_104806 = inst_104823;var inst_104807 = 0;var state_104843__$1 = (function (){var statearr_104865 = state_104843;(statearr_104865[7] = inst_104805);
(statearr_104865[8] = inst_104804);
(statearr_104865[9] = inst_104807);
(statearr_104865[10] = inst_104806);
return statearr_104865;
})();var statearr_104866_104891 = state_104843__$1;(statearr_104866_104891[2] = null);
(statearr_104866_104891[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 14))
{var inst_104817 = (state_104843[13]);var inst_104826 = cljs.core.first.call(null,inst_104817);var inst_104827 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_104826);var inst_104828 = cljs.core.next.call(null,inst_104817);var inst_104804 = inst_104828;var inst_104805 = null;var inst_104806 = 0;var inst_104807 = 0;var state_104843__$1 = (function (){var statearr_104867 = state_104843;(statearr_104867[7] = inst_104805);
(statearr_104867[8] = inst_104804);
(statearr_104867[9] = inst_104807);
(statearr_104867[10] = inst_104806);
(statearr_104867[14] = inst_104827);
return statearr_104867;
})();var statearr_104868_104892 = state_104843__$1;(statearr_104868_104892[2] = null);
(statearr_104868_104892[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104844 === 15))
{var inst_104831 = (state_104843[2]);var state_104843__$1 = state_104843;var statearr_104869_104893 = state_104843__$1;(statearr_104869_104893[2] = inst_104831);
(statearr_104869_104893[1] = 12);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_104873 = (new Array(15));(statearr_104873[0] = state_machine__18949__auto__);
(statearr_104873[1] = 1);
return statearr_104873;
});
var state_machine__18949__auto____1 = (function (state_104843){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_104843);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e104874){if((e104874 instanceof Object))
{var ex__18952__auto__ = e104874;var statearr_104875_104894 = state_104843;(statearr_104875_104894[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104895 = state_104843;
state_104843 = G__104895;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_104843){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_104843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_104876 = f__19019__auto__.call(null);(statearr_104876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___104877);
return statearr_104876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__104900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__104901 = null;var count__104902 = 0;var i__104903 = 0;while(true){
if((i__104903 < count__104902))
{var message = cljs.core._nth.call(null,chunk__104901,i__104903);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__104904 = seq__104900;
var G__104905 = chunk__104901;
var G__104906 = count__104902;
var G__104907 = (i__104903 + 1);
seq__104900 = G__104904;
chunk__104901 = G__104905;
count__104902 = G__104906;
i__104903 = G__104907;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__104900);if(temp__4098__auto__)
{var seq__104900__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104900__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__104900__$1);{
var G__104908 = cljs.core.chunk_rest.call(null,seq__104900__$1);
var G__104909 = c__15907__auto__;
var G__104910 = cljs.core.count.call(null,c__15907__auto__);
var G__104911 = 0;
seq__104900 = G__104908;
chunk__104901 = G__104909;
count__104902 = G__104910;
i__104903 = G__104911;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__104900__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__104912 = cljs.core.next.call(null,seq__104900__$1);
var G__104913 = null;
var G__104914 = 0;
var G__104915 = 0;
seq__104900 = G__104912;
chunk__104901 = G__104913;
count__104902 = G__104914;
i__104903 = G__104915;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__104920){var vec__104921 = p__104920;var name = cljs.core.nth.call(null,vec__104921,0,null);var paths = cljs.core.nth.call(null,vec__104921,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__104922){var vec__104923 = p__104922;var k = cljs.core.nth.call(null,vec__104923,0,null);var v = cljs.core.nth.call(null,vec__104923,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__104924){var map__104930 = p__104924;var map__104930__$1 = ((cljs.core.seq_QMARK_.call(null,map__104930))?cljs.core.apply.call(null,cljs.core.hash_map,map__104930):map__104930);var focus = cljs.core.get.call(null,map__104930__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__104930__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__104931 = cljs.core.seq.call(null,init_messages__$1);var chunk__104932 = null;var count__104933 = 0;var i__104934 = 0;while(true){
if((i__104934 < count__104933))
{var message = cljs.core._nth.call(null,chunk__104932,i__104934);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__104935 = seq__104931;
var G__104936 = chunk__104932;
var G__104937 = count__104933;
var G__104938 = (i__104934 + 1);
seq__104931 = G__104935;
chunk__104932 = G__104936;
count__104933 = G__104937;
i__104934 = G__104938;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__104931);if(temp__4098__auto__)
{var seq__104931__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104931__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__104931__$1);{
var G__104939 = cljs.core.chunk_rest.call(null,seq__104931__$1);
var G__104940 = c__15907__auto__;
var G__104941 = cljs.core.count.call(null,c__15907__auto__);
var G__104942 = 0;
seq__104931 = G__104939;
chunk__104932 = G__104940;
count__104933 = G__104941;
i__104934 = G__104942;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__104931__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__104943 = cljs.core.next.call(null,seq__104931__$1);
var G__104944 = null;
var G__104945 = 0;
var G__104946 = 0;
seq__104931 = G__104943;
chunk__104932 = G__104944;
count__104933 = G__104945;
i__104934 = G__104946;
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
begin = function(app,p__104924){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__104924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__19018__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_104975){var state_val_104976 = (state_104975[1]);if((state_val_104976 === 4))
{var inst_104969 = (state_104975[2]);var inst_104970 = foundation.app.effect.call(null,inst_104969,input);var state_104975__$1 = (function (){var statearr_104977 = state_104975;(statearr_104977[7] = inst_104970);
return statearr_104977;
})();var statearr_104978_104987 = state_104975__$1;(statearr_104978_104987[2] = null);
(statearr_104978_104987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104976 === 3))
{var inst_104973 = (state_104975[2]);var state_104975__$1 = state_104975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104975__$1,inst_104973);
} else
{if((state_val_104976 === 2))
{var state_104975__$1 = state_104975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104975__$1,4,output);
} else
{if((state_val_104976 === 1))
{var state_104975__$1 = state_104975;var statearr_104979_104988 = state_104975__$1;(statearr_104979_104988[2] = null);
(statearr_104979_104988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_104983 = (new Array(8));(statearr_104983[0] = state_machine__18949__auto__);
(statearr_104983[1] = 1);
return statearr_104983;
});
var state_machine__18949__auto____1 = (function (state_104975){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_104975);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e104984){if((e104984 instanceof Object))
{var ex__18952__auto__ = e104984;var statearr_104985_104989 = state_104975;(statearr_104985_104989[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104990 = state_104975;
state_104975 = G__104990;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_104975){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_104975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_104986 = f__19019__auto__.call(null);(statearr_104986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto__);
return statearr_104986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return c__19018__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__104995 = cljs.core.seq.call(null,script);var chunk__104996 = null;var count__104997 = 0;var i__104998 = 0;while(true){
if((i__104998 < count__104997))
{var message = cljs.core._nth.call(null,chunk__104996,i__104998);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__104999 = seq__104995;
var G__105000 = chunk__104996;
var G__105001 = count__104997;
var G__105002 = (i__104998 + 1);
seq__104995 = G__104999;
chunk__104996 = G__105000;
count__104997 = G__105001;
i__104998 = G__105002;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__104995);if(temp__4098__auto__)
{var seq__104995__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104995__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__104995__$1);{
var G__105003 = cljs.core.chunk_rest.call(null,seq__104995__$1);
var G__105004 = c__15907__auto__;
var G__105005 = cljs.core.count.call(null,c__15907__auto__);
var G__105006 = 0;
seq__104995 = G__105003;
chunk__104996 = G__105004;
count__104997 = G__105005;
i__104998 = G__105006;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__104995__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__105007 = cljs.core.next.call(null,seq__104995__$1);
var G__105008 = null;
var G__105009 = 0;
var G__105010 = 0;
seq__104995 = G__105007;
chunk__104996 = G__105008;
count__104997 = G__105009;
i__104998 = G__105010;
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
foundation.app.depends = (function (){var method_table__16016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__16017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__16018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__16019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__16020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__16020__auto__,method_table__16016__auto__,prefer_table__16017__auto__,method_cache__16018__auto__,cached_hierarchy__16019__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__105011,graph){var map__105012 = p__105011;var map__105012__$1 = ((cljs.core.seq_QMARK_.call(null,map__105012))?cljs.core.apply.call(null,cljs.core.hash_map,map__105012):map__105012);var transform = cljs.core.get.call(null,map__105012__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__105013 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__105013,0,null);var path = cljs.core.nth.call(null,vec__105013,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__105016,graph){var map__105017 = p__105016;var map__105017__$1 = ((cljs.core.seq_QMARK_.call(null,map__105017))?cljs.core.apply.call(null,cljs.core.hash_map,map__105017):map__105017);var derives = cljs.core.get.call(null,map__105017__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__105018 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__105018,0,null);var output_path = cljs.core.nth.call(null,vec__105018,1,null);var input_spec = cljs.core.nth.call(null,vec__105018,2,null);var input_paths__$1 = (function (){var or__15183__auto__ = (function (){var and__15171__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__15171__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__15171__auto__;
}
})();if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__105014_SHARP_,p2__105015_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__105014_SHARP_,output_path,p2__105015_SHARP_);
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
}),(function (){var or__15183__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__105020 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__105020,0,null);var large = cljs.core.nth.call(null,vec__105020,1,null);return foundation.app.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__105021_SHARP_){return foundation.app.matching_path_QMARK_.call(null,x,p1__105021_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__105022){var map__105025 = p__105022;var map__105025__$1 = ((cljs.core.seq_QMARK_.call(null,map__105025))?cljs.core.apply.call(null,cljs.core.hash_map,map__105025):map__105025);var state = map__105025__$1;var change = cljs.core.get.call(null,map__105025__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__105025__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__105026 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__105026__$1 = ((cljs.core.seq_QMARK_.call(null,map__105026))?cljs.core.apply.call(null,cljs.core.hash_map,map__105026):map__105026);var state__$1 = map__105026__$1;var processed_inputs = cljs.core.get.call(null,map__105026__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__105026__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__105026__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4096__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4096__auto__))
{var transformer = temp__4096__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4096__auto____$1 = cljs.core.seq.call(null,(function (){var iter__15876__auto__ = (function iter__105031(s__105032){return (new cljs.core.LazySeq(null,(function (){var s__105032__$1 = s__105032;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__105032__$1);if(temp__4098__auto__)
{var s__105032__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__105032__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__105032__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__105034 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__105033 = 0;while(true){
if((i__105033 < size__15875__auto__))
{var dval = cljs.core._nth.call(null,c__15874__auto__,i__105033);if(foundation.app.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__105034,cljs.core.get.call(null,dispatches,dval));
{
var G__105035 = (i__105033 + 1);
i__105033 = G__105035;
continue;
}
} else
{{
var G__105036 = (i__105033 + 1);
i__105033 = G__105036;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105034),iter__105031.call(null,cljs.core.chunk_rest.call(null,s__105032__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105034),null);
}
} else
{var dval = cljs.core.first.call(null,s__105032__$2);if(foundation.app.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__105031.call(null,cljs.core.rest.call(null,s__105032__$2)));
} else
{{
var G__105037 = cljs.core.rest.call(null,s__105032__$2);
s__105032__$1 = G__105037;
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
});return iter__15876__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__105038){
var state = cljs.core.first(arglist__105038);
arglist__105038 = cljs.core.next(arglist__105038);
var path = cljs.core.first(arglist__105038);
arglist__105038 = cljs.core.next(arglist__105038);
var f = cljs.core.first(arglist__105038);
var args = cljs.core.rest(arglist__105038);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__105039){var map__105042 = p__105039;var map__105042__$1 = ((cljs.core.seq_QMARK_.call(null,map__105042))?cljs.core.apply.call(null,cljs.core.hash_map,map__105042):map__105042);var state = map__105042__$1;var context = cljs.core.get.call(null,map__105042__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__105042__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__105043 = message;var map__105043__$1 = ((cljs.core.seq_QMARK_.call(null,map__105043))?cljs.core.apply.call(null,cljs.core.hash_map,map__105043):map__105043);var type = cljs.core.get.call(null,map__105043__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__105043__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__105045,input_paths){var map__105047 = p__105045;var map__105047__$1 = ((cljs.core.seq_QMARK_.call(null,map__105047))?cljs.core.apply.call(null,cljs.core.hash_map,map__105047):map__105047);var state = map__105047__$1;var context = cljs.core.get.call(null,map__105047__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__105044_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__105044_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__105048){var map__105056 = p__105048;var map__105056__$1 = ((cljs.core.seq_QMARK_.call(null,map__105056))?cljs.core.apply.call(null,cljs.core.hash_map,map__105056):map__105056);var state = map__105056__$1;var context = cljs.core.get.call(null,map__105056__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4096__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4096__auto__)
{var dependents = temp__4096__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__105057,p__105058){var map__105059 = p__105057;var map__105059__$1 = ((cljs.core.seq_QMARK_.call(null,map__105059))?cljs.core.apply.call(null,cljs.core.hash_map,map__105059):map__105059);var state__$1 = map__105059__$1;var change = cljs.core.get.call(null,map__105059__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__105060 = p__105058;var vec__105061 = cljs.core.nth.call(null,vec__105060,0,null);var input_paths = cljs.core.nth.call(null,vec__105061,0,null);var output_path = cljs.core.nth.call(null,vec__105061,1,null);var ispec = cljs.core.nth.call(null,vec__105061,2,null);var derive = vec__105061;var derive_fn = cljs.core.nth.call(null,vec__105060,1,null);var vec__105062 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__105062,0,null);var arg_names = cljs.core.nth.call(null,vec__105062,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__105063){var map__105071 = p__105063;var map__105071__$1 = ((cljs.core.seq_QMARK_.call(null,map__105071))?cljs.core.apply.call(null,cljs.core.hash_map,map__105071):map__105071);var state = map__105071__$1;var context = cljs.core.get.call(null,map__105071__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4096__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4096__auto__)
{var dependents = temp__4096__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__105072,p__105073){var map__105074 = p__105072;var map__105074__$1 = ((cljs.core.seq_QMARK_.call(null,map__105074))?cljs.core.apply.call(null,cljs.core.hash_map,map__105074):map__105074);var state__$1 = map__105074__$1;var change = cljs.core.get.call(null,map__105074__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__105075 = p__105073;var vec__105076 = cljs.core.nth.call(null,vec__105075,0,null);var input_paths = cljs.core.nth.call(null,vec__105076,0,null);var ispec = cljs.core.nth.call(null,vec__105076,1,null);var effect = vec__105076;var effect_fn = cljs.core.nth.call(null,vec__105075,1,null);var vec__105077 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__105077,0,null);var arg_names = cljs.core.nth.call(null,vec__105077,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
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
foundation.app.App.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15740__auto__){var self__ = this;
var this__15740__auto____$1 = this;var h__15594__auto__ = self__.__hash;if(!((h__15594__auto__ == null)))
{return h__15594__auto__;
} else
{var h__15594__auto____$1 = cljs.core.hash_imap.call(null,this__15740__auto____$1);self__.__hash = h__15594__auto____$1;
return h__15594__auto____$1;
}
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15745__auto__,k__15746__auto__){var self__ = this;
var this__15745__auto____$1 = this;return cljs.core._lookup.call(null,this__15745__auto____$1,k__15746__auto__,null);
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15747__auto__,k105079,else__15748__auto__){var self__ = this;
var this__15747__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k105079,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k105079,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k105079,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k105079,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k105079,else__15748__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15752__auto__,k__15753__auto__,G__105078){var self__ = this;
var this__15752__auto____$1 = this;var pred__105081 = cljs.core.keyword_identical_QMARK_;var expr__105082 = k__15753__auto__;if(cljs.core.truth_(pred__105081.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__105082)))
{return (new foundation.app.App(G__105078,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__105081.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__105082)))
{return (new foundation.app.App(self__.state,G__105078,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__105081.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__105082)))
{return (new foundation.app.App(self__.state,self__.input,G__105078,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__105081.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__105082)))
{return (new foundation.app.App(self__.state,self__.input,self__.output,G__105078,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15753__auto__,G__105078),null));
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15759__auto__,writer__15760__auto__,opts__15761__auto__){var self__ = this;
var this__15759__auto____$1 = this;var pr_pair__15762__auto__ = (function (keyval__15763__auto__){return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,cljs.core.pr_writer,""," ","",opts__15761__auto__,keyval__15763__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,pr_pair__15762__auto__,"#foundation.app.App{",", ","}",opts__15761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15750__auto__,entry__15751__auto__){var self__ = this;
var this__15750__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__15751__auto__))
{return cljs.core._assoc.call(null,this__15750__auto____$1,cljs.core._nth.call(null,entry__15751__auto__,0),cljs.core._nth.call(null,entry__15751__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__15750__auto____$1,entry__15751__auto__);
}
});
foundation.app.App.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15757__auto__){var self__ = this;
var this__15757__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15749__auto__){var self__ = this;
var this__15749__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.App.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15741__auto__,other__15742__auto__){var self__ = this;
var this__15741__auto____$1 = this;if(cljs.core.truth_((function (){var and__15171__auto__ = other__15742__auto__;if(cljs.core.truth_(and__15171__auto__))
{return ((this__15741__auto____$1.constructor === other__15742__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15741__auto____$1,other__15742__auto__));
} else
{return and__15171__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.App.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15744__auto__,G__105078){var self__ = this;
var this__15744__auto____$1 = this;return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,G__105078,self__.__extmap,self__.__hash));
});
foundation.app.App.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15743__auto__){var self__ = this;
var this__15743__auto____$1 = this;return self__.__meta;
});
foundation.app.App.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15754__auto__,k__15755__auto__){var self__ = this;
var this__15754__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__15755__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15754__auto____$1),self__.__meta),k__15755__auto__);
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15755__auto__)),null));
}
});
foundation.app.App.cljs$lang$type = true;
foundation.app.App.cljs$lang$ctorPrSeq = (function (this__15779__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/App");
});
foundation.app.App.cljs$lang$ctorPrWriter = (function (this__15779__auto__,writer__15780__auto__){return cljs.core._write.call(null,writer__15780__auto__,"foundation.app/App");
});
foundation.app.__GT_App = (function __GT_App(state,input,output,app_model){return (new foundation.app.App(state,input,output,app_model));
});
foundation.app.map__GT_App = (function map__GT_App(G__105080){return (new foundation.app.App(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__105080),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__105080),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__105080),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__105080),null,cljs.core.dissoc.call(null,G__105080,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.App(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.swap_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"swap","swap",1017447685),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),"abc"], null),new cljs.core.Keyword(null,"value","value",1125876963),42], true, false);
foundation.app.inc_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"inc","inc",1014008656),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",1014008656),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], null),(function (state,_){return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,state);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",1017447685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (_,message){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(message);
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-count","total-count",3469652152)], null),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (state,message,nums){return cljs.core.reduce.call(null,cljs.core._PLUS_,nums);
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-count","max-count",3628163800)], null),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (old_value,message,nums){return cljs.core.apply.call(null,cljs.core.max,(function (){var or__15183__auto__ = old_value;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 0;
}
})(),nums);
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null),new cljs.core.Keyword(null,"nums","nums",1017297183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"nums","nums",1017297183),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-count","total-count",3469652152)], null),new cljs.core.Keyword(null,"total","total",1124454070)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average-count","average-count",3652414673)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (old_value,message,p__105084){var map__105085 = p__105084;var map__105085__$1 = ((cljs.core.seq_QMARK_.call(null,map__105085))?cljs.core.apply.call(null,cljs.core.hash_map,map__105085):map__105085);var m = map__105085__$1;var total = cljs.core.get.call(null,map__105085__$1,new cljs.core.Keyword(null,"total","total",1124454070));var nums = cljs.core.get.call(null,map__105085__$1,new cljs.core.Keyword(null,"nums","nums",1017297183));return (total / cljs.core.count.call(null,nums));
}));
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,count){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"swap","swap",1017447685),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582)], null),new cljs.core.Keyword(null,"value","value",1125876963),count], true, false)], null);
}));
foundation.app.click_handler = (function click_handler(message){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#button1","#button1",2124076334)], null),ef.content.call(null,message));
});
foundation.app.setup = (function setup(){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#button1","#button1",2124076334)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return foundation.app.click_handler.call(null,"I have been clicked");
})));
});
foundation.app.transform_enable_BANG_ = (function transform_enable_BANG_(event,type,path){return null;
});
cljs.core._add_method.call(null,foundation.app.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__105086,input_queue,id){var vec__105087 = p__105086;var _ = cljs.core.nth.call(null,vec__105087,0,null);var path = cljs.core.nth.call(null,vec__105087,1,null);var ___$1 = cljs.core.nth.call(null,vec__105087,2,null);var val = cljs.core.nth.call(null,vec__105087,3,null);return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.do__GT_.call(null,enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"id","id",1013907597),id),enfocus.core.content.call(null,"Hello, world!",enfocus.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"hello"], null))),enfocus.core.append.call(null,enfocus.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#button1","button#button1",2361633376),"button"], null)))));
}));
cljs.core._add_method.call(null,foundation.app.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null),(function (renderer,p__105088,input_queue,node){var vec__105089 = p__105088;var _ = cljs.core.nth.call(null,vec__105089,0,null);var path = cljs.core.nth.call(null,vec__105089,1,null);var old_val = cljs.core.nth.call(null,vec__105089,2,null);var new_val = cljs.core.nth.call(null,vec__105089,3,null);var delta = vec__105089;return cljs.core.println.call(null,path,old_val,new_val,node);
}));
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average-count","average-count",3652414673)], null)], null),(function (p__105090){var vec__105091 = p__105090;var op = cljs.core.nth.call(null,vec__105091,0,null);var path = cljs.core.nth.call(null,vec__105091,1,null);var n = cljs.core.nth.call(null,vec__105091,2,null);var round = (function round(n__$1,places){var p = Math.pow.call(null,10,places);return (Math.round.call(null,(p * n__$1)) / p);
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path,round.call(null,n,2)], null)], null);
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",1017447685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582)], null)], null),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.dispatches = cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__105092_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__105092_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
foundation.app.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (p__105093){var map__105095 = p__105093;var map__105095__$1 = ((cljs.core.seq_QMARK_.call(null,map__105095))?cljs.core.apply.call(null,cljs.core.hash_map,map__105095):map__105095);var init_messages = cljs.core.get.call(null,map__105095__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__105095__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.renderer.call(null,"content",foundation.app.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
};
var create_app = function (var_args){
var p__105093 = null;if (arguments.length > 0) {
  p__105093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_app__delegate.call(this,p__105093);};
create_app.cljs$lang$maxFixedArity = 0;
create_app.cljs$lang$applyTo = (function (arglist__105096){
var p__105093 = cljs.core.seq(arglist__105096);
return create_app__delegate(p__105093);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.counters = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, ["abc",0,"xyz",0], null));
foundation.app.increment_counter = (function increment_counter(k,t,input_queue){var c__19018__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_105146){var state_val_105147 = (state_105146[1]);if((state_val_105147 === 4))
{var inst_105141 = (state_105146[2]);var state_105146__$1 = (function (){var statearr_105148 = state_105146;(statearr_105148[7] = inst_105141);
return statearr_105148;
})();var statearr_105149_105159 = state_105146__$1;(statearr_105149_105159[2] = null);
(statearr_105149_105159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105147 === 3))
{var inst_105144 = (state_105146[2]);var state_105146__$1 = state_105146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105146__$1,inst_105144);
} else
{if((state_val_105147 === 2))
{var inst_105129 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"value","value",1125876963)];var inst_105130 = [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),k];var inst_105131 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_105130,null));var inst_105132 = [k];var inst_105133 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_105132,null));var inst_105134 = cljs.core.swap_BANG_.call(null,foundation.app.counters,cljs.core.update_in,inst_105133,cljs.core.inc);var inst_105135 = cljs.core.get.call(null,inst_105134,k);var inst_105136 = [new cljs.core.Keyword(null,"swap","swap",1017447685),inst_105131,inst_105135];var inst_105137 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_105129,inst_105136);var inst_105138 = cljs.core.async.put_BANG_.call(null,input_queue,inst_105137);var inst_105139 = cljs.core.async.timeout.call(null,t);var state_105146__$1 = (function (){var statearr_105150 = state_105146;(statearr_105150[8] = inst_105138);
return statearr_105150;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105146__$1,4,inst_105139);
} else
{if((state_val_105147 === 1))
{var state_105146__$1 = state_105146;var statearr_105151_105160 = state_105146__$1;(statearr_105151_105160[2] = null);
(statearr_105151_105160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_105155 = (new Array(9));(statearr_105155[0] = state_machine__18949__auto__);
(statearr_105155[1] = 1);
return statearr_105155;
});
var state_machine__18949__auto____1 = (function (state_105146){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_105146);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e105156){if((e105156 instanceof Object))
{var ex__18952__auto__ = e105156;var statearr_105157_105161 = state_105146;(statearr_105157_105161[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e105156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__105162 = state_105146;
state_105146 = G__105162;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_105146){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_105146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_105158 = f__19019__auto__.call(null);(statearr_105158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto__);
return statearr_105158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return c__19018__auto__;
});
foundation.app.receive_messages = (function receive_messages(input_queue){foundation.app.increment_counter.call(null,"abc",2000,input_queue);
return foundation.app.increment_counter.call(null,"xyz",5000,input_queue);
});

/**
* @constructor
* @param {*} app
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.MockServices = (function (app,__meta,__extmap){
this.app = app;
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
foundation.app.MockServices.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15740__auto__){var self__ = this;
var this__15740__auto____$1 = this;var h__15594__auto__ = self__.__hash;if(!((h__15594__auto__ == null)))
{return h__15594__auto__;
} else
{var h__15594__auto____$1 = cljs.core.hash_imap.call(null,this__15740__auto____$1);self__.__hash = h__15594__auto____$1;
return h__15594__auto____$1;
}
});
foundation.app.MockServices.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15745__auto__,k__15746__auto__){var self__ = this;
var this__15745__auto____$1 = this;return cljs.core._lookup.call(null,this__15745__auto____$1,k__15746__auto__,null);
});
foundation.app.MockServices.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15747__auto__,k105164,else__15748__auto__){var self__ = this;
var this__15747__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k105164,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k105164,else__15748__auto__);
} else
{return null;
}
}
});
foundation.app.MockServices.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15752__auto__,k__15753__auto__,G__105163){var self__ = this;
var this__15752__auto____$1 = this;var pred__105166 = cljs.core.keyword_identical_QMARK_;var expr__105167 = k__15753__auto__;if(cljs.core.truth_(pred__105166.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__105167)))
{return (new foundation.app.MockServices(G__105163,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.MockServices(self__.app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15753__auto__,G__105163),null));
}
});
foundation.app.MockServices.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.MockServices.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.app.receive_messages.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(self__.app));
});
foundation.app.MockServices.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.MockServices.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15759__auto__,writer__15760__auto__,opts__15761__auto__){var self__ = this;
var this__15759__auto____$1 = this;var pr_pair__15762__auto__ = (function (keyval__15763__auto__){return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,cljs.core.pr_writer,""," ","",opts__15761__auto__,keyval__15763__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__15760__auto__,pr_pair__15762__auto__,"#foundation.app.MockServices{",", ","}",opts__15761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null))], null),self__.__extmap));
});
foundation.app.MockServices.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15750__auto__,entry__15751__auto__){var self__ = this;
var this__15750__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__15751__auto__))
{return cljs.core._assoc.call(null,this__15750__auto____$1,cljs.core._nth.call(null,entry__15751__auto__,0),cljs.core._nth.call(null,entry__15751__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__15750__auto____$1,entry__15751__auto__);
}
});
foundation.app.MockServices.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15757__auto__){var self__ = this;
var this__15757__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null))], null),self__.__extmap));
});
foundation.app.MockServices.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15749__auto__){var self__ = this;
var this__15749__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.MockServices.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15741__auto__,other__15742__auto__){var self__ = this;
var this__15741__auto____$1 = this;if(cljs.core.truth_((function (){var and__15171__auto__ = other__15742__auto__;if(cljs.core.truth_(and__15171__auto__))
{return ((this__15741__auto____$1.constructor === other__15742__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15741__auto____$1,other__15742__auto__));
} else
{return and__15171__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.MockServices.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15744__auto__,G__105163){var self__ = this;
var this__15744__auto____$1 = this;return (new foundation.app.MockServices(self__.app,G__105163,self__.__extmap,self__.__hash));
});
foundation.app.MockServices.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15743__auto__){var self__ = this;
var this__15743__auto____$1 = this;return self__.__meta;
});
foundation.app.MockServices.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15754__auto__,k__15755__auto__){var self__ = this;
var this__15754__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",1014001043),null], null), null),k__15755__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15754__auto____$1),self__.__meta),k__15755__auto__);
} else
{return (new foundation.app.MockServices(self__.app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15755__auto__)),null));
}
});
foundation.app.MockServices.cljs$lang$type = true;
foundation.app.MockServices.cljs$lang$ctorPrSeq = (function (this__15779__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/MockServices");
});
foundation.app.MockServices.cljs$lang$ctorPrWriter = (function (this__15779__auto__,writer__15780__auto__){return cljs.core._write.call(null,writer__15780__auto__,"foundation.app/MockServices");
});
foundation.app.__GT_MockServices = (function __GT_MockServices(app){return (new foundation.app.MockServices(app));
});
foundation.app.map__GT_MockServices = (function map__GT_MockServices(G__105165){return (new foundation.app.MockServices(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__105165),null,cljs.core.dissoc.call(null,G__105165,new cljs.core.Keyword(null,"app","app",1014001043))));
});
foundation.app.reset = (function reset(){return location.reload(true);
});
foundation.app._main = (function _main(){var app = foundation.app.create_app.call(null);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(foundation.app._STAR_app_STAR_)),foundation.app.inc_msg);
return app;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);
cljs.core.enable_console_print_BANG_.call(null);

//# sourceMappingURL=app.js.map