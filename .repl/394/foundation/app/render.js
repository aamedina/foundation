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
foundation.app.render.node_create = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__29012,input_queue,parent_id,id){var vec__29013 = p__29012;var _ = cljs.core.nth.call(null,vec__29013,0,null);var path = cljs.core.nth.call(null,vec__29013,1,null);var ___$1 = cljs.core.nth.call(null,vec__29013,2,null);var ___$2 = cljs.core.nth.call(null,vec__29013,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__29011_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__29011_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_29014 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_29014)) && ((cljs.core.count.call(null,ocr_29014) === 2)))
{try{var ocr_29014_0__29016 = cljs.core.nth.call(null,ocr_29014,0);if((cljs.core.vector_QMARK_.call(null,ocr_29014_0__29016)) && ((cljs.core.count.call(null,ocr_29014_0__29016) === 1)))
{try{var ocr_29014_0__29016_0__29018 = cljs.core.nth.call(null,ocr_29014_0__29016,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_29014_0__29016_0__29018,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_29014_1__29017 = cljs.core.nth.call(null,ocr_29014,1);if((cljs.core.vector_QMARK_.call(null,ocr_29014_1__29017)) && ((cljs.core.count.call(null,ocr_29014_1__29017) === 1)))
{try{var ocr_29014_1__29017_0__29019 = cljs.core.nth.call(null,ocr_29014_1__29017,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_29014_1__29017_0__29019,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e29029){if((e29029 instanceof Error))
{var e__11109__auto__ = e29029;if((e__11109__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29029;
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
}catch (e29028){if((e29028 instanceof Error))
{var e__11109__auto__ = e29028;if((e__11109__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29028;
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
}catch (e29027){if((e29027 instanceof Error))
{var e__11109__auto__ = e29027;if((e__11109__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29027;
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
}catch (e29026){if((e29026 instanceof Error))
{var e__11109__auto__ = e29026;if((e__11109__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29026;
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
}catch (e29022){if((e29022 instanceof Error))
{var e__11109__auto__ = e29022;if((e__11109__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_29014)) && ((cljs.core.count.call(null,ocr_29014) === 1)))
{try{var ocr_29014_0__29020 = cljs.core.nth.call(null,ocr_29014,0);if((cljs.core.vector_QMARK_.call(null,ocr_29014_0__29020)) && ((cljs.core.count.call(null,ocr_29014_0__29020) === 1)))
{try{var ocr_29014_0__29020_0__29021 = cljs.core.nth.call(null,ocr_29014_0__29020,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_29014_0__29020_0__29021,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_29014_0__29020_0__29021,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e29025){if((e29025 instanceof Error))
{var e__11109__auto____$1 = e29025;if((e__11109__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29025;
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
}catch (e29024){if((e29024 instanceof Error))
{var e__11109__auto____$1 = e29024;if((e__11109__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__11109__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29024;
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
}catch (e29023){if((e29023 instanceof Error))
{var e__11109__auto____$1 = e29023;if((e__11109__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__11109__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29023;
} else
{return null;
}
}
}} else
{throw e__11109__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29022;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__29030__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__29030 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29030__delegate.call(this,renderer,delta,input_queue,args);};
G__29030.cljs$lang$maxFixedArity = 3;
G__29030.cljs$lang$applyTo = (function (arglist__29031){
var renderer = cljs.core.first(arglist__29031);
arglist__29031 = cljs.core.next(arglist__29031);
var delta = cljs.core.first(arglist__29031);
arglist__29031 = cljs.core.next(arglist__29031);
var input_queue = cljs.core.first(arglist__29031);
var args = cljs.core.rest(arglist__29031);
return G__29030__delegate(renderer,delta,input_queue,args);
});
G__29030.cljs$core$IFn$_invoke$arity$variadic = G__29030__delegate;
return G__29030;
})()
);
foundation.app.render.node_update = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__29033,input_queue,parent_id){var vec__29034 = p__29033;var _ = cljs.core.nth.call(null,vec__29034,0,null);var path = cljs.core.nth.call(null,vec__29034,1,null);var ___$1 = cljs.core.nth.call(null,vec__29034,2,null);var ___$2 = cljs.core.nth.call(null,vec__29034,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__29032_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__29032_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__29035__delegate = function (args){return null;
};
var G__29035 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29035__delegate.call(this,args);};
G__29035.cljs$lang$maxFixedArity = 0;
G__29035.cljs$lang$applyTo = (function (arglist__29036){
var args = cljs.core.seq(arglist__29036);
return G__29035__delegate(args);
});
G__29035.cljs$core$IFn$_invoke$arity$variadic = G__29035__delegate;
return G__29035;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__29038,input_queue,id){var vec__29039 = p__29038;var _ = cljs.core.nth.call(null,vec__29039,0,null);var path = cljs.core.nth.call(null,vec__29039,1,null);var ___$1 = cljs.core.nth.call(null,vec__29039,2,null);var ___$2 = cljs.core.nth.call(null,vec__29039,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__29037_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__29037_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__29040__delegate = function (args){return null;
};
var G__29040 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29040__delegate.call(this,args);};
G__29040.cljs$lang$maxFixedArity = 0;
G__29040.cljs$lang$applyTo = (function (arglist__29041){
var args = cljs.core.seq(arglist__29041);
return G__29040__delegate(args);
});
G__29040.cljs$core$IFn$_invoke$arity$variadic = G__29040__delegate;
return G__29040;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__29043,id,message){var vec__29044 = p__29043;var _ = cljs.core.nth.call(null,vec__29044,0,null);var path = cljs.core.nth.call(null,vec__29044,1,null);var ___$1 = cljs.core.nth.call(null,vec__29044,2,null);var ___$2 = cljs.core.nth.call(null,vec__29044,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__29042_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__29042_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__29045__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__29045 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29045__delegate.call(this,args);};
G__29045.cljs$lang$maxFixedArity = 0;
G__29045.cljs$lang$applyTo = (function (arglist__29046){
var args = cljs.core.seq(arglist__29046);
return G__29045__delegate(args);
});
G__29045.cljs$core$IFn$_invoke$arity$variadic = G__29045__delegate;
return G__29045;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj29048 = {};return obj29048;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.get_id[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.get_id["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (foundation.app.render.get_data[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.render.get_data["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__29049_SHARP_){return cljs.core.get.call(null,n,p1__29049_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__29054 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__29055 = null;var count__29056 = 0;var i__29057 = 0;while(true){
if((i__29057 < count__29056))
{var f = cljs.core._nth.call(null,chunk__29055,i__29057);f.call(null);
{
var G__29058 = seq__29054;
var G__29059 = chunk__29055;
var G__29060 = count__29056;
var G__29061 = (i__29057 + 1);
seq__29054 = G__29058;
chunk__29055 = G__29059;
count__29056 = G__29060;
i__29057 = G__29061;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29054);if(temp__4092__auto__)
{var seq__29054__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29054__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__29054__$1);{
var G__29062 = cljs.core.chunk_rest.call(null,seq__29054__$1);
var G__29063 = c__8571__auto__;
var G__29064 = cljs.core.count.call(null,c__8571__auto__);
var G__29065 = 0;
seq__29054 = G__29062;
chunk__29055 = G__29063;
count__29056 = G__29064;
i__29057 = G__29065;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__29054__$1);f.call(null);
{
var G__29066 = cljs.core.next.call(null,seq__29054__$1);
var G__29067 = null;
var G__29068 = 0;
var G__29069 = 0;
seq__29054 = G__29066;
chunk__29055 = G__29067;
count__29056 = G__29068;
i__29057 = G__29069;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8404__auto__){var self__ = this;
var this__8404__auto____$1 = this;var h__8258__auto__ = self__.__hash;if(!((h__8258__auto__ == null)))
{return h__8258__auto__;
} else
{var h__8258__auto____$1 = cljs.core.hash_imap.call(null,this__8404__auto____$1);self__.__hash = h__8258__auto____$1;
return h__8258__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8409__auto__,k__8410__auto__){var self__ = this;
var this__8409__auto____$1 = this;return cljs.core._lookup.call(null,this__8409__auto____$1,k__8410__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8411__auto__,k29071,else__8412__auto__){var self__ = this;
var this__8411__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k29071,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k29071,else__8412__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8416__auto__,k__8417__auto__,G__29070){var self__ = this;
var this__8416__auto____$1 = this;var pred__29073 = cljs.core.keyword_identical_QMARK_;var expr__29074 = k__8417__auto__;if(cljs.core.truth_(pred__29073.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__29074)))
{return (new foundation.app.render.DomRenderer(G__29070,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8417__auto__,G__29070),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8423__auto__,writer__8424__auto__,opts__8425__auto__){var self__ = this;
var this__8423__auto____$1 = this;var pr_pair__8426__auto__ = (function (keyval__8427__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,cljs.core.pr_writer,""," ","",opts__8425__auto__,keyval__8427__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,pr_pair__8426__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__8425__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8414__auto__,entry__8415__auto__){var self__ = this;
var this__8414__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8415__auto__))
{return cljs.core._assoc.call(null,this__8414__auto____$1,cljs.core._nth.call(null,entry__8415__auto__,0),cljs.core._nth.call(null,entry__8415__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8414__auto____$1,entry__8415__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8421__auto__){var self__ = this;
var this__8421__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8413__auto__){var self__ = this;
var this__8413__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8405__auto__,other__8406__auto__){var self__ = this;
var this__8405__auto____$1 = this;if(cljs.core.truth_((function (){var and__7835__auto__ = other__8406__auto__;if(cljs.core.truth_(and__7835__auto__))
{return ((this__8405__auto____$1.constructor === other__8406__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8405__auto____$1,other__8406__auto__));
} else
{return and__7835__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8408__auto__,G__29070){var self__ = this;
var this__8408__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__29070,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8407__auto__){var self__ = this;
var this__8407__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8418__auto__,k__8419__auto__){var self__ = this;
var this__8418__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8419__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8418__auto____$1),self__.__meta),k__8419__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8419__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__8443__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__8443__auto__,writer__8444__auto__){return cljs.core._write.call(null,writer__8444__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__29072){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__29072),null,cljs.core.dissoc.call(null,G__29072,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__13612__auto___29122 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_29110){var state_val_29111 = (state_29110[1]);if((state_val_29111 === 4))
{var inst_29102 = (state_29110[2]);var inst_29103 = cljs.core.nth.call(null,inst_29102,0,null);var inst_29104 = cljs.core.nth.call(null,inst_29102,1,null);var inst_29105 = foundation.app.render.node_create.call(null,renderer,inst_29102,input_queue);var state_29110__$1 = (function (){var statearr_29112 = state_29110;(statearr_29112[7] = inst_29105);
(statearr_29112[8] = inst_29103);
(statearr_29112[9] = inst_29104);
return statearr_29112;
})();var statearr_29113_29123 = state_29110__$1;(statearr_29113_29123[2] = null);
(statearr_29113_29123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29111 === 3))
{var inst_29108 = (state_29110[2]);var state_29110__$1 = state_29110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29110__$1,inst_29108);
} else
{if((state_val_29111 === 2))
{var state_29110__$1 = state_29110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29110__$1,4,render_queue);
} else
{if((state_val_29111 === 1))
{var state_29110__$1 = state_29110;var statearr_29114_29124 = state_29110__$1;(statearr_29114_29124[2] = null);
(statearr_29114_29124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_29118 = (new Array(10));(statearr_29118[0] = state_machine__13486__auto__);
(statearr_29118[1] = 1);
return statearr_29118;
});
var state_machine__13486__auto____1 = (function (state_29110){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_29110);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e29119){if((e29119 instanceof Object))
{var ex__13489__auto__ = e29119;var statearr_29120_29125 = state_29110;(statearr_29120_29125[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29110);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29126 = state_29110;
state_29110 = G__29126;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_29110){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_29110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_29121 = f__13613__auto__.call(null);(statearr_29121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___29122);
return statearr_29121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__29131 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__29132 = null;var count__29133 = 0;var i__29134 = 0;while(true){
if((i__29134 < count__29133))
{var message = cljs.core._nth.call(null,chunk__29132,i__29134);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__29135 = seq__29131;
var G__29136 = chunk__29132;
var G__29137 = count__29133;
var G__29138 = (i__29134 + 1);
seq__29131 = G__29135;
chunk__29132 = G__29136;
count__29133 = G__29137;
i__29134 = G__29138;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29131);if(temp__4092__auto__)
{var seq__29131__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29131__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__29131__$1);{
var G__29139 = cljs.core.chunk_rest.call(null,seq__29131__$1);
var G__29140 = c__8571__auto__;
var G__29141 = cljs.core.count.call(null,c__8571__auto__);
var G__29142 = 0;
seq__29131 = G__29139;
chunk__29132 = G__29140;
count__29133 = G__29141;
i__29134 = G__29142;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__29131__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__29143 = cljs.core.next.call(null,seq__29131__$1);
var G__29144 = null;
var G__29145 = 0;
var G__29146 = 0;
seq__29131 = G__29143;
chunk__29132 = G__29144;
count__29133 = G__29145;
i__29134 = G__29146;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__29157){var vec__29158 = p__29157;var op = cljs.core.nth.call(null,vec__29158,0,null);var path = cljs.core.nth.call(null,vec__29158,1,null);var _ = cljs.core.nth.call(null,vec__29158,2,null);var ___$1 = cljs.core.nth.call(null,vec__29158,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__29159 = cljs.core.seq.call(null,deltas__$1);var chunk__29160 = null;var count__29161 = 0;var i__29162 = 0;while(true){
if((i__29162 < count__29161))
{var d = cljs.core._nth.call(null,chunk__29160,i__29162);var vec__29163_29167 = d;var op_29168 = cljs.core.nth.call(null,vec__29163_29167,0,null);var path_29169 = cljs.core.nth.call(null,vec__29163_29167,1,null);var id_29170 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_29169);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_29169);
}
})();var pid_29171 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_29169);var G__29164_29172 = op_29168;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__29164_29172))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_29170);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__29164_29172))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_29170);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__29164_29172))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_29170);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__29164_29172))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_29171,id_29170);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_29171,id_29170);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__29164_29172))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_29171,id_29170);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__29164_29172))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_29171,id_29170);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_29168)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__29173 = seq__29159;
var G__29174 = chunk__29160;
var G__29175 = count__29161;
var G__29176 = (i__29162 + 1);
seq__29159 = G__29173;
chunk__29160 = G__29174;
count__29161 = G__29175;
i__29162 = G__29176;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29159);if(temp__4092__auto__)
{var seq__29159__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29159__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__29159__$1);{
var G__29177 = cljs.core.chunk_rest.call(null,seq__29159__$1);
var G__29178 = c__8571__auto__;
var G__29179 = cljs.core.count.call(null,c__8571__auto__);
var G__29180 = 0;
seq__29159 = G__29177;
chunk__29160 = G__29178;
count__29161 = G__29179;
i__29162 = G__29180;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__29159__$1);var vec__29165_29181 = d;var op_29182 = cljs.core.nth.call(null,vec__29165_29181,0,null);var path_29183 = cljs.core.nth.call(null,vec__29165_29181,1,null);var id_29184 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_29183);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_29183);
}
})();var pid_29185 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_29183);var G__29166_29186 = op_29182;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__29166_29186))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_29184);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__29166_29186))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_29184);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__29166_29186))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_29184);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__29166_29186))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_29185,id_29184);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_29185,id_29184);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__29166_29186))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_29185,id_29184);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__29166_29186))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_29185,id_29184);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_29182)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__29187 = cljs.core.next.call(null,seq__29159__$1);
var G__29188 = null;
var G__29189 = 0;
var G__29190 = 0;
seq__29159 = G__29187;
chunk__29160 = G__29188;
count__29161 = G__29189;
i__29162 = G__29190;
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
