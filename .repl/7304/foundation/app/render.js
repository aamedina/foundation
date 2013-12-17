// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('foundation.app.dataflow');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('enfocus.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('dommy.core');
foundation.app.render.node_create = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__20386,input_queue,parent_id,id){var vec__20387 = p__20386;var _ = cljs.core.nth.call(null,vec__20387,0,null);var path = cljs.core.nth.call(null,vec__20387,1,null);var ___$1 = cljs.core.nth.call(null,vec__20387,2,null);var ___$2 = cljs.core.nth.call(null,vec__20387,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__20385_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__20385_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_20388 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_20388)) && ((cljs.core.count.call(null,ocr_20388) === 2)))
{try{var ocr_20388_0__20390 = cljs.core.nth.call(null,ocr_20388,0);if((cljs.core.vector_QMARK_.call(null,ocr_20388_0__20390)) && ((cljs.core.count.call(null,ocr_20388_0__20390) === 1)))
{try{var ocr_20388_0__20390_0__20392 = cljs.core.nth.call(null,ocr_20388_0__20390,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20388_0__20390_0__20392,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_20388_1__20391 = cljs.core.nth.call(null,ocr_20388,1);if((cljs.core.vector_QMARK_.call(null,ocr_20388_1__20391)) && ((cljs.core.count.call(null,ocr_20388_1__20391) === 1)))
{try{var ocr_20388_1__20391_0__20393 = cljs.core.nth.call(null,ocr_20388_1__20391,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20388_1__20391_0__20393,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20403){if((e20403 instanceof Error))
{var e__11105__auto__ = e20403;if((e__11105__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20403;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20402){if((e20402 instanceof Error))
{var e__11105__auto__ = e20402;if((e__11105__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20402;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20401){if((e20401 instanceof Error))
{var e__11105__auto__ = e20401;if((e__11105__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20401;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20400){if((e20400 instanceof Error))
{var e__11105__auto__ = e20400;if((e__11105__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20400;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20396){if((e20396 instanceof Error))
{var e__11105__auto__ = e20396;if((e__11105__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_20388)) && ((cljs.core.count.call(null,ocr_20388) === 1)))
{try{var ocr_20388_0__20394 = cljs.core.nth.call(null,ocr_20388,0);if((cljs.core.vector_QMARK_.call(null,ocr_20388_0__20394)) && ((cljs.core.count.call(null,ocr_20388_0__20394) === 1)))
{try{var ocr_20388_0__20394_0__20395 = cljs.core.nth.call(null,ocr_20388_0__20394,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20388_0__20394_0__20395,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20388_0__20394_0__20395,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e20399){if((e20399 instanceof Error))
{var e__11105__auto____$1 = e20399;if((e__11105__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20399;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20398){if((e20398 instanceof Error))
{var e__11105__auto____$1 = e20398;if((e__11105__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11105__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20398;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e20397){if((e20397 instanceof Error))
{var e__11105__auto____$1 = e20397;if((e__11105__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__11105__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20397;
} else
{return null;
}
}
}} else
{throw e__11105__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20396;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__20404__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__20404 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__20404__delegate.call(this,renderer,delta,input_queue,args);};
G__20404.cljs$lang$maxFixedArity = 3;
G__20404.cljs$lang$applyTo = (function (arglist__20405){
var renderer = cljs.core.first(arglist__20405);
arglist__20405 = cljs.core.next(arglist__20405);
var delta = cljs.core.first(arglist__20405);
arglist__20405 = cljs.core.next(arglist__20405);
var input_queue = cljs.core.first(arglist__20405);
var args = cljs.core.rest(arglist__20405);
return G__20404__delegate(renderer,delta,input_queue,args);
});
G__20404.cljs$core$IFn$_invoke$arity$variadic = G__20404__delegate;
return G__20404;
})()
);
foundation.app.render.node_update = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__20407,input_queue,parent_id){var vec__20408 = p__20407;var _ = cljs.core.nth.call(null,vec__20408,0,null);var path = cljs.core.nth.call(null,vec__20408,1,null);var ___$1 = cljs.core.nth.call(null,vec__20408,2,null);var ___$2 = cljs.core.nth.call(null,vec__20408,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__20406_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__20406_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__20409__delegate = function (args){return null;
};
var G__20409 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20409__delegate.call(this,args);};
G__20409.cljs$lang$maxFixedArity = 0;
G__20409.cljs$lang$applyTo = (function (arglist__20410){
var args = cljs.core.seq(arglist__20410);
return G__20409__delegate(args);
});
G__20409.cljs$core$IFn$_invoke$arity$variadic = G__20409__delegate;
return G__20409;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__20412,input_queue,id){var vec__20413 = p__20412;var _ = cljs.core.nth.call(null,vec__20413,0,null);var path = cljs.core.nth.call(null,vec__20413,1,null);var ___$1 = cljs.core.nth.call(null,vec__20413,2,null);var ___$2 = cljs.core.nth.call(null,vec__20413,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__20411_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__20411_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__20414__delegate = function (args){return null;
};
var G__20414 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20414__delegate.call(this,args);};
G__20414.cljs$lang$maxFixedArity = 0;
G__20414.cljs$lang$applyTo = (function (arglist__20415){
var args = cljs.core.seq(arglist__20415);
return G__20414__delegate(args);
});
G__20414.cljs$core$IFn$_invoke$arity$variadic = G__20414__delegate;
return G__20414;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__20417,id,message){var vec__20418 = p__20417;var _ = cljs.core.nth.call(null,vec__20418,0,null);var path = cljs.core.nth.call(null,vec__20418,1,null);var ___$1 = cljs.core.nth.call(null,vec__20418,2,null);var ___$2 = cljs.core.nth.call(null,vec__20418,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__20416_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__20416_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__20419__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__20419 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20419__delegate.call(this,args);};
G__20419.cljs$lang$maxFixedArity = 0;
G__20419.cljs$lang$applyTo = (function (arglist__20420){
var args = cljs.core.seq(arglist__20420);
return G__20419__delegate(args);
});
G__20419.cljs$core$IFn$_invoke$arity$variadic = G__20419__delegate;
return G__20419;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj20422 = {};return obj20422;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.get_id[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.get_id["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (foundation.app.render.get_data[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.render.get_data["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.fix_id = (function fix_id(s){if(!((s instanceof cljs.core.Keyword)))
{return cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(s)].join(''));
} else
{return s;
}
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__20423_SHARP_){return cljs.core.get.call(null,n,p1__20423_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__20428 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__20429 = null;var count__20430 = 0;var i__20431 = 0;while(true){
if((i__20431 < count__20430))
{var f = cljs.core._nth.call(null,chunk__20429,i__20431);f.call(null);
{
var G__20432 = seq__20428;
var G__20433 = chunk__20429;
var G__20434 = count__20430;
var G__20435 = (i__20431 + 1);
seq__20428 = G__20432;
chunk__20429 = G__20433;
count__20430 = G__20434;
i__20431 = G__20435;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20428);if(temp__4092__auto__)
{var seq__20428__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20428__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__20428__$1);{
var G__20436 = cljs.core.chunk_rest.call(null,seq__20428__$1);
var G__20437 = c__8552__auto__;
var G__20438 = cljs.core.count.call(null,c__8552__auto__);
var G__20439 = 0;
seq__20428 = G__20436;
chunk__20429 = G__20437;
count__20430 = G__20438;
i__20431 = G__20439;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__20428__$1);f.call(null);
{
var G__20440 = cljs.core.next.call(null,seq__20428__$1);
var G__20441 = null;
var G__20442 = 0;
var G__20443 = 0;
seq__20428 = G__20440;
chunk__20429 = G__20441;
count__20430 = G__20442;
i__20431 = G__20443;
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
foundation.app.render.DomRenderer = (function (env,__meta,__extmap){
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8385__auto__){var self__ = this;
var this__8385__auto____$1 = this;var h__8239__auto__ = self__.__hash;if(!((h__8239__auto__ == null)))
{return h__8239__auto__;
} else
{var h__8239__auto____$1 = cljs.core.hash_imap.call(null,this__8385__auto____$1);self__.__hash = h__8239__auto____$1;
return h__8239__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8390__auto__,k__8391__auto__){var self__ = this;
var this__8390__auto____$1 = this;return cljs.core._lookup.call(null,this__8390__auto____$1,k__8391__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8392__auto__,k20445,else__8393__auto__){var self__ = this;
var this__8392__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k20445,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k20445,else__8393__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8397__auto__,k__8398__auto__,G__20444){var self__ = this;
var this__8397__auto____$1 = this;var pred__20447 = cljs.core.keyword_identical_QMARK_;var expr__20448 = k__8398__auto__;if(cljs.core.truth_(pred__20447.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__20448)))
{return (new foundation.app.render.DomRenderer(G__20444,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8398__auto__,G__20444),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8404__auto__,writer__8405__auto__,opts__8406__auto__){var self__ = this;
var this__8404__auto____$1 = this;var pr_pair__8407__auto__ = (function (keyval__8408__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8405__auto__,cljs.core.pr_writer,""," ","",opts__8406__auto__,keyval__8408__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8405__auto__,pr_pair__8407__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__8406__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8395__auto__,entry__8396__auto__){var self__ = this;
var this__8395__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8396__auto__))
{return cljs.core._assoc.call(null,this__8395__auto____$1,cljs.core._nth.call(null,entry__8396__auto__,0),cljs.core._nth.call(null,entry__8396__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8395__auto____$1,entry__8396__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8402__auto__){var self__ = this;
var this__8402__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8394__auto__){var self__ = this;
var this__8394__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8386__auto__,other__8387__auto__){var self__ = this;
var this__8386__auto____$1 = this;if(cljs.core.truth_((function (){var and__7816__auto__ = other__8387__auto__;if(cljs.core.truth_(and__7816__auto__))
{return ((this__8386__auto____$1.constructor === other__8387__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8386__auto____$1,other__8387__auto__));
} else
{return and__7816__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8389__auto__,G__20444){var self__ = this;
var this__8389__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__20444,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8388__auto__){var self__ = this;
var this__8388__auto____$1 = this;return self__.__meta;
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$ = true;
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_parent_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render.get_id.call(null,this$__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return foundation.app.render.new_id_BANG_.call(null,this$__$1,path,cljs.core.gensym.call(null));
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){var self__ = this;
var this$__$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),v);
return v;
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;foundation.app.render.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks),d);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_data$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8399__auto__,k__8400__auto__){var self__ = this;
var this__8399__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8400__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8399__auto____$1),self__.__meta),k__8400__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8400__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__8424__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__){return cljs.core._write.call(null,writer__8425__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__20446){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__20446),null,cljs.core.dissoc.call(null,G__20446,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__13587__auto___20496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_20484){var state_val_20485 = (state_20484[1]);if((state_val_20485 === 4))
{var inst_20476 = (state_20484[2]);var inst_20477 = cljs.core.nth.call(null,inst_20476,0,null);var inst_20478 = cljs.core.nth.call(null,inst_20476,1,null);var inst_20479 = foundation.app.render.node_create.call(null,renderer,inst_20476,input_queue);var state_20484__$1 = (function (){var statearr_20486 = state_20484;(statearr_20486[7] = inst_20477);
(statearr_20486[8] = inst_20478);
(statearr_20486[9] = inst_20479);
return statearr_20486;
})();var statearr_20487_20497 = state_20484__$1;(statearr_20487_20497[2] = null);
(statearr_20487_20497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20485 === 3))
{var inst_20482 = (state_20484[2]);var state_20484__$1 = state_20484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20484__$1,inst_20482);
} else
{if((state_val_20485 === 2))
{var state_20484__$1 = state_20484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20484__$1,4,render_queue);
} else
{if((state_val_20485 === 1))
{var state_20484__$1 = state_20484;var statearr_20488_20498 = state_20484__$1;(statearr_20488_20498[2] = null);
(statearr_20488_20498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_20492 = (new Array(10));(statearr_20492[0] = state_machine__13460__auto__);
(statearr_20492[1] = 1);
return statearr_20492;
});
var state_machine__13460__auto____1 = (function (state_20484){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_20484);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e20493){if((e20493 instanceof Object))
{var ex__13463__auto__ = e20493;var statearr_20494_20499 = state_20484;(statearr_20494_20499[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20500 = state_20484;
state_20484 = G__20500;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_20484){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_20484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_20495 = f__13588__auto__.call(null);(statearr_20495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___20496);
return statearr_20495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__20505 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__20506 = null;var count__20507 = 0;var i__20508 = 0;while(true){
if((i__20508 < count__20507))
{var message = cljs.core._nth.call(null,chunk__20506,i__20508);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__20509 = seq__20505;
var G__20510 = chunk__20506;
var G__20511 = count__20507;
var G__20512 = (i__20508 + 1);
seq__20505 = G__20509;
chunk__20506 = G__20510;
count__20507 = G__20511;
i__20508 = G__20512;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20505);if(temp__4092__auto__)
{var seq__20505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20505__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__20505__$1);{
var G__20513 = cljs.core.chunk_rest.call(null,seq__20505__$1);
var G__20514 = c__8552__auto__;
var G__20515 = cljs.core.count.call(null,c__8552__auto__);
var G__20516 = 0;
seq__20505 = G__20513;
chunk__20506 = G__20514;
count__20507 = G__20515;
i__20508 = G__20516;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__20505__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__20517 = cljs.core.next.call(null,seq__20505__$1);
var G__20518 = null;
var G__20519 = 0;
var G__20520 = 0;
seq__20505 = G__20517;
chunk__20506 = G__20518;
count__20507 = G__20519;
i__20508 = G__20520;
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
;return foundation.app.render.bind_event.call(null,event,id,event_handler);
})());
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__20531){var vec__20532 = p__20531;var op = cljs.core.nth.call(null,vec__20532,0,null);var path = cljs.core.nth.call(null,vec__20532,1,null);var _ = cljs.core.nth.call(null,vec__20532,2,null);var ___$1 = cljs.core.nth.call(null,vec__20532,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__20533 = cljs.core.seq.call(null,deltas__$1);var chunk__20534 = null;var count__20535 = 0;var i__20536 = 0;while(true){
if((i__20536 < count__20535))
{var d = cljs.core._nth.call(null,chunk__20534,i__20536);var vec__20537_20541 = d;var op_20542 = cljs.core.nth.call(null,vec__20537_20541,0,null);var path_20543 = cljs.core.nth.call(null,vec__20537_20541,1,null);var id_20544 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_20543);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_20543);
}
})();var pid_20545 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_20543);var G__20538_20546 = op_20542;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__20538_20546))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_20544);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__20538_20546))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_20544);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__20538_20546))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_20544);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__20538_20546))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_20545,id_20544);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_20545,id_20544);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__20538_20546))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_20545,id_20544);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__20538_20546))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_20545,id_20544);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_20542)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__20547 = seq__20533;
var G__20548 = chunk__20534;
var G__20549 = count__20535;
var G__20550 = (i__20536 + 1);
seq__20533 = G__20547;
chunk__20534 = G__20548;
count__20535 = G__20549;
i__20536 = G__20550;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20533);if(temp__4092__auto__)
{var seq__20533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20533__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__20533__$1);{
var G__20551 = cljs.core.chunk_rest.call(null,seq__20533__$1);
var G__20552 = c__8552__auto__;
var G__20553 = cljs.core.count.call(null,c__8552__auto__);
var G__20554 = 0;
seq__20533 = G__20551;
chunk__20534 = G__20552;
count__20535 = G__20553;
i__20536 = G__20554;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__20533__$1);var vec__20539_20555 = d;var op_20556 = cljs.core.nth.call(null,vec__20539_20555,0,null);var path_20557 = cljs.core.nth.call(null,vec__20539_20555,1,null);var id_20558 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_20557);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_20557);
}
})();var pid_20559 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_20557);var G__20540_20560 = op_20556;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__20540_20560))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_20558);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__20540_20560))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_20558);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__20540_20560))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_20558);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__20540_20560))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_20559,id_20558);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_20559,id_20558);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__20540_20560))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_20559,id_20558);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__20540_20560))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_20559,id_20558);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_20556)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__20561 = cljs.core.next.call(null,seq__20533__$1);
var G__20562 = null;
var G__20563 = 0;
var G__20564 = 0;
seq__20533 = G__20561;
chunk__20534 = G__20562;
count__20535 = G__20563;
i__20536 = G__20564;
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
