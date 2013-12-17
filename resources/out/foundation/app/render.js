// Compiled by ClojureScript 0.0-2120
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
foundation.app.render.node_create = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__38321,input_queue,parent_id,id){var vec__38322 = p__38321;var _ = cljs.core.nth.call(null,vec__38322,0,null);var path = cljs.core.nth.call(null,vec__38322,1,null);var ___$1 = cljs.core.nth.call(null,vec__38322,2,null);var ___$2 = cljs.core.nth.call(null,vec__38322,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__38320_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__38320_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_38323 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_38323)) && ((cljs.core.count.call(null,ocr_38323) === 2)))
{try{var ocr_38323_0__38325 = cljs.core.nth.call(null,ocr_38323,0);if((cljs.core.vector_QMARK_.call(null,ocr_38323_0__38325)) && ((cljs.core.count.call(null,ocr_38323_0__38325) === 1)))
{try{var ocr_38323_0__38325_0__38327 = cljs.core.nth.call(null,ocr_38323_0__38325,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38323_0__38325_0__38327,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_38323_1__38326 = cljs.core.nth.call(null,ocr_38323,1);if((cljs.core.vector_QMARK_.call(null,ocr_38323_1__38326)) && ((cljs.core.count.call(null,ocr_38323_1__38326) === 1)))
{try{var ocr_38323_1__38326_0__38328 = cljs.core.nth.call(null,ocr_38323_1__38326,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38323_1__38326_0__38328,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e38338){if((e38338 instanceof Error))
{var e__8747__auto__ = e38338;if((e__8747__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38338;
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
}catch (e38337){if((e38337 instanceof Error))
{var e__8747__auto__ = e38337;if((e__8747__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38337;
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
}catch (e38336){if((e38336 instanceof Error))
{var e__8747__auto__ = e38336;if((e__8747__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38336;
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
}catch (e38335){if((e38335 instanceof Error))
{var e__8747__auto__ = e38335;if((e__8747__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38335;
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
}catch (e38331){if((e38331 instanceof Error))
{var e__8747__auto__ = e38331;if((e__8747__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_38323)) && ((cljs.core.count.call(null,ocr_38323) === 1)))
{try{var ocr_38323_0__38329 = cljs.core.nth.call(null,ocr_38323,0);if((cljs.core.vector_QMARK_.call(null,ocr_38323_0__38329)) && ((cljs.core.count.call(null,ocr_38323_0__38329) === 1)))
{try{var ocr_38323_0__38329_0__38330 = cljs.core.nth.call(null,ocr_38323_0__38329,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38323_0__38329_0__38330,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38323_0__38329_0__38330,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e38334){if((e38334 instanceof Error))
{var e__8747__auto____$1 = e38334;if((e__8747__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38334;
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
}catch (e38333){if((e38333 instanceof Error))
{var e__8747__auto____$1 = e38333;if((e__8747__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8747__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38333;
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
}catch (e38332){if((e38332 instanceof Error))
{var e__8747__auto____$1 = e38332;if((e__8747__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8747__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38332;
} else
{return null;
}
}
}} else
{throw e__8747__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38331;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38339__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__38339 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__38339__delegate.call(this,renderer,delta,input_queue,args);};
G__38339.cljs$lang$maxFixedArity = 3;
G__38339.cljs$lang$applyTo = (function (arglist__38340){
var renderer = cljs.core.first(arglist__38340);
arglist__38340 = cljs.core.next(arglist__38340);
var delta = cljs.core.first(arglist__38340);
arglist__38340 = cljs.core.next(arglist__38340);
var input_queue = cljs.core.first(arglist__38340);
var args = cljs.core.rest(arglist__38340);
return G__38339__delegate(renderer,delta,input_queue,args);
});
G__38339.cljs$core$IFn$_invoke$arity$variadic = G__38339__delegate;
return G__38339;
})()
);
foundation.app.render.node_update = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__38342,input_queue,parent_id){var vec__38343 = p__38342;var _ = cljs.core.nth.call(null,vec__38343,0,null);var path = cljs.core.nth.call(null,vec__38343,1,null);var ___$1 = cljs.core.nth.call(null,vec__38343,2,null);var ___$2 = cljs.core.nth.call(null,vec__38343,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__38341_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__38341_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38344__delegate = function (args){return null;
};
var G__38344 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38344__delegate.call(this,args);};
G__38344.cljs$lang$maxFixedArity = 0;
G__38344.cljs$lang$applyTo = (function (arglist__38345){
var args = cljs.core.seq(arglist__38345);
return G__38344__delegate(args);
});
G__38344.cljs$core$IFn$_invoke$arity$variadic = G__38344__delegate;
return G__38344;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__38347,input_queue,id){var vec__38348 = p__38347;var _ = cljs.core.nth.call(null,vec__38348,0,null);var path = cljs.core.nth.call(null,vec__38348,1,null);var ___$1 = cljs.core.nth.call(null,vec__38348,2,null);var ___$2 = cljs.core.nth.call(null,vec__38348,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__38346_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__38346_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38349__delegate = function (args){return null;
};
var G__38349 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38349__delegate.call(this,args);};
G__38349.cljs$lang$maxFixedArity = 0;
G__38349.cljs$lang$applyTo = (function (arglist__38350){
var args = cljs.core.seq(arglist__38350);
return G__38349__delegate(args);
});
G__38349.cljs$core$IFn$_invoke$arity$variadic = G__38349__delegate;
return G__38349;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__38352,id,message){var vec__38353 = p__38352;var _ = cljs.core.nth.call(null,vec__38353,0,null);var path = cljs.core.nth.call(null,vec__38353,1,null);var ___$1 = cljs.core.nth.call(null,vec__38353,2,null);var ___$2 = cljs.core.nth.call(null,vec__38353,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__38351_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__38351_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38354__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__38354 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38354__delegate.call(this,args);};
G__38354.cljs$lang$maxFixedArity = 0;
G__38354.cljs$lang$applyTo = (function (arglist__38355){
var args = cljs.core.seq(arglist__38355);
return G__38354__delegate(args);
});
G__38354.cljs$core$IFn$_invoke$arity$variadic = G__38354__delegate;
return G__38354;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj38357 = {};return obj38357;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__38358_SHARP_){return cljs.core.get.call(null,n,p1__38358_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__38363 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__38364 = null;var count__38365 = 0;var i__38366 = 0;while(true){
if((i__38366 < count__38365))
{var f = cljs.core._nth.call(null,chunk__38364,i__38366);f.call(null);
{
var G__38367 = seq__38363;
var G__38368 = chunk__38364;
var G__38369 = count__38365;
var G__38370 = (i__38366 + 1);
seq__38363 = G__38367;
chunk__38364 = G__38368;
count__38365 = G__38369;
i__38366 = G__38370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38363);if(temp__4092__auto__)
{var seq__38363__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38363__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__38363__$1);{
var G__38371 = cljs.core.chunk_rest.call(null,seq__38363__$1);
var G__38372 = c__14683__auto__;
var G__38373 = cljs.core.count.call(null,c__14683__auto__);
var G__38374 = 0;
seq__38363 = G__38371;
chunk__38364 = G__38372;
count__38365 = G__38373;
i__38366 = G__38374;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__38363__$1);f.call(null);
{
var G__38375 = cljs.core.next.call(null,seq__38363__$1);
var G__38376 = null;
var G__38377 = 0;
var G__38378 = 0;
seq__38363 = G__38375;
chunk__38364 = G__38376;
count__38365 = G__38377;
i__38366 = G__38378;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14516__auto__){var self__ = this;
var this__14516__auto____$1 = this;var h__14370__auto__ = self__.__hash;if(!((h__14370__auto__ == null)))
{return h__14370__auto__;
} else
{var h__14370__auto____$1 = cljs.core.hash_imap.call(null,this__14516__auto____$1);self__.__hash = h__14370__auto____$1;
return h__14370__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14521__auto__,k__14522__auto__){var self__ = this;
var this__14521__auto____$1 = this;return cljs.core._lookup.call(null,this__14521__auto____$1,k__14522__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14523__auto__,k38380,else__14524__auto__){var self__ = this;
var this__14523__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k38380,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k38380,else__14524__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14528__auto__,k__14529__auto__,G__38379){var self__ = this;
var this__14528__auto____$1 = this;var pred__38382 = cljs.core.keyword_identical_QMARK_;var expr__38383 = k__14529__auto__;if(cljs.core.truth_(pred__38382.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__38383)))
{return (new foundation.app.render.DomRenderer(G__38379,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14529__auto__,G__38379),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14535__auto__,writer__14536__auto__,opts__14537__auto__){var self__ = this;
var this__14535__auto____$1 = this;var pr_pair__14538__auto__ = (function (keyval__14539__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,cljs.core.pr_writer,""," ","",opts__14537__auto__,keyval__14539__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,pr_pair__14538__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14537__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14526__auto__,entry__14527__auto__){var self__ = this;
var this__14526__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14527__auto__))
{return cljs.core._assoc.call(null,this__14526__auto____$1,cljs.core._nth.call(null,entry__14527__auto__,0),cljs.core._nth.call(null,entry__14527__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14526__auto____$1,entry__14527__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14533__auto__){var self__ = this;
var this__14533__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14525__auto__){var self__ = this;
var this__14525__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14517__auto__,other__14518__auto__){var self__ = this;
var this__14517__auto____$1 = this;if(cljs.core.truth_((function (){var and__13942__auto__ = other__14518__auto__;if(cljs.core.truth_(and__13942__auto__))
{return ((this__14517__auto____$1.constructor === other__14518__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14517__auto____$1,other__14518__auto__));
} else
{return and__13942__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14520__auto__,G__38379){var self__ = this;
var this__14520__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__38379,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14519__auto__){var self__ = this;
var this__14519__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14530__auto__,k__14531__auto__){var self__ = this;
var this__14530__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14531__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14530__auto____$1),self__.__meta),k__14531__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14531__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14555__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14555__auto__,writer__14556__auto__){return cljs.core._write.call(null,writer__14556__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__38381){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__38381),null,cljs.core.dissoc.call(null,G__38381,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18264__auto___38431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_38419){var state_val_38420 = (state_38419[1]);if((state_val_38420 === 4))
{var inst_38411 = (state_38419[2]);var inst_38412 = cljs.core.nth.call(null,inst_38411,0,null);var inst_38413 = cljs.core.nth.call(null,inst_38411,1,null);var inst_38414 = foundation.app.render.node_create.call(null,renderer,inst_38411,input_queue);var state_38419__$1 = (function (){var statearr_38421 = state_38419;(statearr_38421[7] = inst_38414);
(statearr_38421[8] = inst_38413);
(statearr_38421[9] = inst_38412);
return statearr_38421;
})();var statearr_38422_38432 = state_38419__$1;(statearr_38422_38432[2] = null);
(statearr_38422_38432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38420 === 3))
{var inst_38417 = (state_38419[2]);var state_38419__$1 = state_38419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38419__$1,inst_38417);
} else
{if((state_val_38420 === 2))
{var state_38419__$1 = state_38419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38419__$1,4,render_queue);
} else
{if((state_val_38420 === 1))
{var state_38419__$1 = state_38419;var statearr_38423_38433 = state_38419__$1;(statearr_38423_38433[2] = null);
(statearr_38423_38433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_38427 = [null,null,null,null,null,null,null,null,null,null];(statearr_38427[0] = state_machine__18195__auto__);
(statearr_38427[1] = 1);
return statearr_38427;
});
var state_machine__18195__auto____1 = (function (state_38419){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_38419);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e38428){if((e38428 instanceof Object))
{var ex__18198__auto__ = e38428;var statearr_38429_38434 = state_38419;(statearr_38429_38434[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38435 = state_38419;
state_38419 = G__38435;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_38419){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_38419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_38430 = f__18265__auto__.call(null);(statearr_38430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___38431);
return statearr_38430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__38440 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__38441 = null;var count__38442 = 0;var i__38443 = 0;while(true){
if((i__38443 < count__38442))
{var message = cljs.core._nth.call(null,chunk__38441,i__38443);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__38444 = seq__38440;
var G__38445 = chunk__38441;
var G__38446 = count__38442;
var G__38447 = (i__38443 + 1);
seq__38440 = G__38444;
chunk__38441 = G__38445;
count__38442 = G__38446;
i__38443 = G__38447;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38440);if(temp__4092__auto__)
{var seq__38440__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38440__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__38440__$1);{
var G__38448 = cljs.core.chunk_rest.call(null,seq__38440__$1);
var G__38449 = c__14683__auto__;
var G__38450 = cljs.core.count.call(null,c__14683__auto__);
var G__38451 = 0;
seq__38440 = G__38448;
chunk__38441 = G__38449;
count__38442 = G__38450;
i__38443 = G__38451;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__38440__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__38452 = cljs.core.next.call(null,seq__38440__$1);
var G__38453 = null;
var G__38454 = 0;
var G__38455 = 0;
seq__38440 = G__38452;
chunk__38441 = G__38453;
count__38442 = G__38454;
i__38443 = G__38455;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__38466){var vec__38467 = p__38466;var op = cljs.core.nth.call(null,vec__38467,0,null);var path = cljs.core.nth.call(null,vec__38467,1,null);var _ = cljs.core.nth.call(null,vec__38467,2,null);var ___$1 = cljs.core.nth.call(null,vec__38467,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__38468 = cljs.core.seq.call(null,deltas__$1);var chunk__38469 = null;var count__38470 = 0;var i__38471 = 0;while(true){
if((i__38471 < count__38470))
{var d = cljs.core._nth.call(null,chunk__38469,i__38471);var vec__38472_38476 = d;var op_38477 = cljs.core.nth.call(null,vec__38472_38476,0,null);var path_38478 = cljs.core.nth.call(null,vec__38472_38476,1,null);var id_38479 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_38478);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_38478);
}
})();var pid_38480 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_38478);var G__38473_38481 = op_38477;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__38473_38481))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_38479);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__38473_38481))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_38479);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__38473_38481))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_38479);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__38473_38481))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_38480,id_38479);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_38480,id_38479);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__38473_38481))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_38480,id_38479);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__38473_38481))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_38480,id_38479);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_38477)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__38482 = seq__38468;
var G__38483 = chunk__38469;
var G__38484 = count__38470;
var G__38485 = (i__38471 + 1);
seq__38468 = G__38482;
chunk__38469 = G__38483;
count__38470 = G__38484;
i__38471 = G__38485;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38468);if(temp__4092__auto__)
{var seq__38468__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38468__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__38468__$1);{
var G__38486 = cljs.core.chunk_rest.call(null,seq__38468__$1);
var G__38487 = c__14683__auto__;
var G__38488 = cljs.core.count.call(null,c__14683__auto__);
var G__38489 = 0;
seq__38468 = G__38486;
chunk__38469 = G__38487;
count__38470 = G__38488;
i__38471 = G__38489;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__38468__$1);var vec__38474_38490 = d;var op_38491 = cljs.core.nth.call(null,vec__38474_38490,0,null);var path_38492 = cljs.core.nth.call(null,vec__38474_38490,1,null);var id_38493 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_38492);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_38492);
}
})();var pid_38494 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_38492);var G__38475_38495 = op_38491;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__38475_38495))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_38493);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__38475_38495))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_38493);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__38475_38495))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_38493);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__38475_38495))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_38494,id_38493);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_38494,id_38493);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__38475_38495))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_38494,id_38493);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__38475_38495))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_38494,id_38493);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_38491)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__38496 = cljs.core.next.call(null,seq__38468__$1);
var G__38497 = null;
var G__38498 = 0;
var G__38499 = 0;
seq__38468 = G__38496;
chunk__38469 = G__38497;
count__38470 = G__38498;
i__38471 = G__38499;
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