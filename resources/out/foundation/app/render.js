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
foundation.app.render.node_create = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__324043,input_queue,parent_id,id){var vec__324044 = p__324043;var _ = cljs.core.nth.call(null,vec__324044,0,null);var path = cljs.core.nth.call(null,vec__324044,1,null);var ___$1 = cljs.core.nth.call(null,vec__324044,2,null);var ___$2 = cljs.core.nth.call(null,vec__324044,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__324042_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__324042_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_324045 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_324045)) && ((cljs.core.count.call(null,ocr_324045) === 2)))
{try{var ocr_324045_0__324047 = cljs.core.nth.call(null,ocr_324045,0);if((cljs.core.vector_QMARK_.call(null,ocr_324045_0__324047)) && ((cljs.core.count.call(null,ocr_324045_0__324047) === 1)))
{try{var ocr_324045_0__324047_0__324049 = cljs.core.nth.call(null,ocr_324045_0__324047,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_324045_0__324047_0__324049,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_324045_1__324048 = cljs.core.nth.call(null,ocr_324045,1);if((cljs.core.vector_QMARK_.call(null,ocr_324045_1__324048)) && ((cljs.core.count.call(null,ocr_324045_1__324048) === 1)))
{try{var ocr_324045_1__324048_0__324050 = cljs.core.nth.call(null,ocr_324045_1__324048,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_324045_1__324048_0__324050,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e324060){if((e324060 instanceof Error))
{var e__8616__auto__ = e324060;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324060;
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
}catch (e324059){if((e324059 instanceof Error))
{var e__8616__auto__ = e324059;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324059;
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
}catch (e324058){if((e324058 instanceof Error))
{var e__8616__auto__ = e324058;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324058;
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
}catch (e324057){if((e324057 instanceof Error))
{var e__8616__auto__ = e324057;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324057;
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
}catch (e324053){if((e324053 instanceof Error))
{var e__8616__auto__ = e324053;if((e__8616__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_324045)) && ((cljs.core.count.call(null,ocr_324045) === 1)))
{try{var ocr_324045_0__324051 = cljs.core.nth.call(null,ocr_324045,0);if((cljs.core.vector_QMARK_.call(null,ocr_324045_0__324051)) && ((cljs.core.count.call(null,ocr_324045_0__324051) === 1)))
{try{var ocr_324045_0__324051_0__324052 = cljs.core.nth.call(null,ocr_324045_0__324051,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_324045_0__324051_0__324052,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_324045_0__324051_0__324052,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e324056){if((e324056 instanceof Error))
{var e__8616__auto____$1 = e324056;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324056;
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
}catch (e324055){if((e324055 instanceof Error))
{var e__8616__auto____$1 = e324055;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324055;
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
}catch (e324054){if((e324054 instanceof Error))
{var e__8616__auto____$1 = e324054;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324054;
} else
{return null;
}
}
}} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324053;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__324061__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__324061 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__324061__delegate.call(this,renderer,delta,input_queue,args);};
G__324061.cljs$lang$maxFixedArity = 3;
G__324061.cljs$lang$applyTo = (function (arglist__324062){
var renderer = cljs.core.first(arglist__324062);
arglist__324062 = cljs.core.next(arglist__324062);
var delta = cljs.core.first(arglist__324062);
arglist__324062 = cljs.core.next(arglist__324062);
var input_queue = cljs.core.first(arglist__324062);
var args = cljs.core.rest(arglist__324062);
return G__324061__delegate(renderer,delta,input_queue,args);
});
G__324061.cljs$core$IFn$_invoke$arity$variadic = G__324061__delegate;
return G__324061;
})()
);
foundation.app.render.node_update = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__324064,input_queue,parent_id){var vec__324065 = p__324064;var _ = cljs.core.nth.call(null,vec__324065,0,null);var path = cljs.core.nth.call(null,vec__324065,1,null);var ___$1 = cljs.core.nth.call(null,vec__324065,2,null);var ___$2 = cljs.core.nth.call(null,vec__324065,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__324063_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__324063_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__324066__delegate = function (args){return null;
};
var G__324066 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__324066__delegate.call(this,args);};
G__324066.cljs$lang$maxFixedArity = 0;
G__324066.cljs$lang$applyTo = (function (arglist__324067){
var args = cljs.core.seq(arglist__324067);
return G__324066__delegate(args);
});
G__324066.cljs$core$IFn$_invoke$arity$variadic = G__324066__delegate;
return G__324066;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__324069,input_queue,id){var vec__324070 = p__324069;var _ = cljs.core.nth.call(null,vec__324070,0,null);var path = cljs.core.nth.call(null,vec__324070,1,null);var ___$1 = cljs.core.nth.call(null,vec__324070,2,null);var ___$2 = cljs.core.nth.call(null,vec__324070,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__324068_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__324068_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__324071__delegate = function (args){return null;
};
var G__324071 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__324071__delegate.call(this,args);};
G__324071.cljs$lang$maxFixedArity = 0;
G__324071.cljs$lang$applyTo = (function (arglist__324072){
var args = cljs.core.seq(arglist__324072);
return G__324071__delegate(args);
});
G__324071.cljs$core$IFn$_invoke$arity$variadic = G__324071__delegate;
return G__324071;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__324074,id,message){var vec__324075 = p__324074;var _ = cljs.core.nth.call(null,vec__324075,0,null);var path = cljs.core.nth.call(null,vec__324075,1,null);var ___$1 = cljs.core.nth.call(null,vec__324075,2,null);var ___$2 = cljs.core.nth.call(null,vec__324075,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__324073_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__324073_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__324076__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__324076 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__324076__delegate.call(this,args);};
G__324076.cljs$lang$maxFixedArity = 0;
G__324076.cljs$lang$applyTo = (function (arglist__324077){
var args = cljs.core.seq(arglist__324077);
return G__324076__delegate(args);
});
G__324076.cljs$core$IFn$_invoke$arity$variadic = G__324076__delegate;
return G__324076;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj324079 = {};return obj324079;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__324080_SHARP_){return cljs.core.get.call(null,n,p1__324080_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__324085 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__324086 = null;var count__324087 = 0;var i__324088 = 0;while(true){
if((i__324088 < count__324087))
{var f = cljs.core._nth.call(null,chunk__324086,i__324088);f.call(null);
{
var G__324089 = seq__324085;
var G__324090 = chunk__324086;
var G__324091 = count__324087;
var G__324092 = (i__324088 + 1);
seq__324085 = G__324089;
chunk__324086 = G__324090;
count__324087 = G__324091;
i__324088 = G__324092;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324085);if(temp__4092__auto__)
{var seq__324085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324085__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324085__$1);{
var G__324093 = cljs.core.chunk_rest.call(null,seq__324085__$1);
var G__324094 = c__14547__auto__;
var G__324095 = cljs.core.count.call(null,c__14547__auto__);
var G__324096 = 0;
seq__324085 = G__324093;
chunk__324086 = G__324094;
count__324087 = G__324095;
i__324088 = G__324096;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__324085__$1);f.call(null);
{
var G__324097 = cljs.core.next.call(null,seq__324085__$1);
var G__324098 = null;
var G__324099 = 0;
var G__324100 = 0;
seq__324085 = G__324097;
chunk__324086 = G__324098;
count__324087 = G__324099;
i__324088 = G__324100;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14380__auto__){var self__ = this;
var this__14380__auto____$1 = this;var h__14234__auto__ = self__.__hash;if(!((h__14234__auto__ == null)))
{return h__14234__auto__;
} else
{var h__14234__auto____$1 = cljs.core.hash_imap.call(null,this__14380__auto____$1);self__.__hash = h__14234__auto____$1;
return h__14234__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14385__auto__,k__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;return cljs.core._lookup.call(null,this__14385__auto____$1,k__14386__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k324102,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k324102,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k324102,else__14388__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__324101){var self__ = this;
var this__14392__auto____$1 = this;var pred__324104 = cljs.core.keyword_identical_QMARK_;var expr__324105 = k__14393__auto__;if(cljs.core.truth_(pred__324104.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__324105)))
{return (new foundation.app.render.DomRenderer(G__324101,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__324101),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14399__auto__,writer__14400__auto__,opts__14401__auto__){var self__ = this;
var this__14399__auto____$1 = this;var pr_pair__14402__auto__ = (function (keyval__14403__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,cljs.core.pr_writer,""," ","",opts__14401__auto__,keyval__14403__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,pr_pair__14402__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14390__auto__,entry__14391__auto__){var self__ = this;
var this__14390__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14391__auto__))
{return cljs.core._assoc.call(null,this__14390__auto____$1,cljs.core._nth.call(null,entry__14391__auto__,0),cljs.core._nth.call(null,entry__14391__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14390__auto____$1,entry__14391__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14397__auto__){var self__ = this;
var this__14397__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14389__auto__){var self__ = this;
var this__14389__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14381__auto__,other__14382__auto__){var self__ = this;
var this__14381__auto____$1 = this;if(cljs.core.truth_((function (){var and__13811__auto__ = other__14382__auto__;if(cljs.core.truth_(and__13811__auto__))
{return ((this__14381__auto____$1.constructor === other__14382__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14381__auto____$1,other__14382__auto__));
} else
{return and__13811__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__324101){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__324101,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14383__auto__){var self__ = this;
var this__14383__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14394__auto__,k__14395__auto__){var self__ = this;
var this__14394__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14395__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14394__auto____$1),self__.__meta),k__14395__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14395__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14419__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14419__auto__,writer__14420__auto__){return cljs.core._write.call(null,writer__14420__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__324103){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__324103),null,cljs.core.dissoc.call(null,G__324103,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18051__auto___324153 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_324141){var state_val_324142 = (state_324141[1]);if((state_val_324142 === 4))
{var inst_324133 = (state_324141[2]);var inst_324134 = cljs.core.nth.call(null,inst_324133,0,null);var inst_324135 = cljs.core.nth.call(null,inst_324133,1,null);var inst_324136 = foundation.app.render.node_create.call(null,renderer,inst_324133,input_queue);var state_324141__$1 = (function (){var statearr_324143 = state_324141;(statearr_324143[7] = inst_324136);
(statearr_324143[8] = inst_324134);
(statearr_324143[9] = inst_324135);
return statearr_324143;
})();var statearr_324144_324154 = state_324141__$1;(statearr_324144_324154[2] = null);
(statearr_324144_324154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324142 === 3))
{var inst_324139 = (state_324141[2]);var state_324141__$1 = state_324141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324141__$1,inst_324139);
} else
{if((state_val_324142 === 2))
{var state_324141__$1 = state_324141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324141__$1,4,render_queue);
} else
{if((state_val_324142 === 1))
{var state_324141__$1 = state_324141;var statearr_324145_324155 = state_324141__$1;(statearr_324145_324155[2] = null);
(statearr_324145_324155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_324149 = (new Array(10));(statearr_324149[0] = state_machine__17982__auto__);
(statearr_324149[1] = 1);
return statearr_324149;
});
var state_machine__17982__auto____1 = (function (state_324141){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_324141);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e324150){if((e324150 instanceof Object))
{var ex__17985__auto__ = e324150;var statearr_324151_324156 = state_324141;(statearr_324151_324156[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324141);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324150;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324157 = state_324141;
state_324141 = G__324157;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_324141){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_324141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_324152 = f__18052__auto__.call(null);(statearr_324152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___324153);
return statearr_324152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__324162 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__324163 = null;var count__324164 = 0;var i__324165 = 0;while(true){
if((i__324165 < count__324164))
{var message = cljs.core._nth.call(null,chunk__324163,i__324165);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__324166 = seq__324162;
var G__324167 = chunk__324163;
var G__324168 = count__324164;
var G__324169 = (i__324165 + 1);
seq__324162 = G__324166;
chunk__324163 = G__324167;
count__324164 = G__324168;
i__324165 = G__324169;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324162);if(temp__4092__auto__)
{var seq__324162__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324162__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324162__$1);{
var G__324170 = cljs.core.chunk_rest.call(null,seq__324162__$1);
var G__324171 = c__14547__auto__;
var G__324172 = cljs.core.count.call(null,c__14547__auto__);
var G__324173 = 0;
seq__324162 = G__324170;
chunk__324163 = G__324171;
count__324164 = G__324172;
i__324165 = G__324173;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__324162__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__324174 = cljs.core.next.call(null,seq__324162__$1);
var G__324175 = null;
var G__324176 = 0;
var G__324177 = 0;
seq__324162 = G__324174;
chunk__324163 = G__324175;
count__324164 = G__324176;
i__324165 = G__324177;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__324188){var vec__324189 = p__324188;var op = cljs.core.nth.call(null,vec__324189,0,null);var path = cljs.core.nth.call(null,vec__324189,1,null);var _ = cljs.core.nth.call(null,vec__324189,2,null);var ___$1 = cljs.core.nth.call(null,vec__324189,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__324190 = cljs.core.seq.call(null,deltas__$1);var chunk__324191 = null;var count__324192 = 0;var i__324193 = 0;while(true){
if((i__324193 < count__324192))
{var d = cljs.core._nth.call(null,chunk__324191,i__324193);var vec__324194_324198 = d;var op_324199 = cljs.core.nth.call(null,vec__324194_324198,0,null);var path_324200 = cljs.core.nth.call(null,vec__324194_324198,1,null);var id_324201 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_324200);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_324200);
}
})();var pid_324202 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_324200);var G__324195_324203 = op_324199;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__324195_324203))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_324201);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__324195_324203))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_324201);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__324195_324203))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_324201);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__324195_324203))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_324202,id_324201);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_324202,id_324201);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__324195_324203))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_324202,id_324201);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__324195_324203))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_324202,id_324201);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_324199)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__324204 = seq__324190;
var G__324205 = chunk__324191;
var G__324206 = count__324192;
var G__324207 = (i__324193 + 1);
seq__324190 = G__324204;
chunk__324191 = G__324205;
count__324192 = G__324206;
i__324193 = G__324207;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324190);if(temp__4092__auto__)
{var seq__324190__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324190__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324190__$1);{
var G__324208 = cljs.core.chunk_rest.call(null,seq__324190__$1);
var G__324209 = c__14547__auto__;
var G__324210 = cljs.core.count.call(null,c__14547__auto__);
var G__324211 = 0;
seq__324190 = G__324208;
chunk__324191 = G__324209;
count__324192 = G__324210;
i__324193 = G__324211;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__324190__$1);var vec__324196_324212 = d;var op_324213 = cljs.core.nth.call(null,vec__324196_324212,0,null);var path_324214 = cljs.core.nth.call(null,vec__324196_324212,1,null);var id_324215 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_324214);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_324214);
}
})();var pid_324216 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_324214);var G__324197_324217 = op_324213;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__324197_324217))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_324215);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__324197_324217))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_324215);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__324197_324217))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_324215);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__324197_324217))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_324216,id_324215);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_324216,id_324215);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__324197_324217))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_324216,id_324215);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__324197_324217))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_324216,id_324215);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_324213)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__324218 = cljs.core.next.call(null,seq__324190__$1);
var G__324219 = null;
var G__324220 = 0;
var G__324221 = 0;
seq__324190 = G__324218;
chunk__324191 = G__324219;
count__324192 = G__324220;
i__324193 = G__324221;
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

//# sourceMappingURL=render.js.map