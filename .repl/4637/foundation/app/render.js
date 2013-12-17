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
foundation.app.render.node_create = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__25211,input_queue,parent_id,id){var vec__25212 = p__25211;var _ = cljs.core.nth.call(null,vec__25212,0,null);var path = cljs.core.nth.call(null,vec__25212,1,null);var ___$1 = cljs.core.nth.call(null,vec__25212,2,null);var ___$2 = cljs.core.nth.call(null,vec__25212,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__25210_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__25210_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_25213 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_25213)) && ((cljs.core.count.call(null,ocr_25213) === 2)))
{try{var ocr_25213_0__25215 = cljs.core.nth.call(null,ocr_25213,0);if((cljs.core.vector_QMARK_.call(null,ocr_25213_0__25215)) && ((cljs.core.count.call(null,ocr_25213_0__25215) === 1)))
{try{var ocr_25213_0__25215_0__25217 = cljs.core.nth.call(null,ocr_25213_0__25215,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_25213_0__25215_0__25217,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_25213_1__25216 = cljs.core.nth.call(null,ocr_25213,1);if((cljs.core.vector_QMARK_.call(null,ocr_25213_1__25216)) && ((cljs.core.count.call(null,ocr_25213_1__25216) === 1)))
{try{var ocr_25213_1__25216_0__25218 = cljs.core.nth.call(null,ocr_25213_1__25216,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_25213_1__25216_0__25218,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e25228){if((e25228 instanceof Error))
{var e__12526__auto__ = e25228;if((e__12526__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25228;
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
}catch (e25227){if((e25227 instanceof Error))
{var e__12526__auto__ = e25227;if((e__12526__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25227;
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
}catch (e25226){if((e25226 instanceof Error))
{var e__12526__auto__ = e25226;if((e__12526__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25226;
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
}catch (e25225){if((e25225 instanceof Error))
{var e__12526__auto__ = e25225;if((e__12526__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25225;
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
}catch (e25221){if((e25221 instanceof Error))
{var e__12526__auto__ = e25221;if((e__12526__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_25213)) && ((cljs.core.count.call(null,ocr_25213) === 1)))
{try{var ocr_25213_0__25219 = cljs.core.nth.call(null,ocr_25213,0);if((cljs.core.vector_QMARK_.call(null,ocr_25213_0__25219)) && ((cljs.core.count.call(null,ocr_25213_0__25219) === 1)))
{try{var ocr_25213_0__25219_0__25220 = cljs.core.nth.call(null,ocr_25213_0__25219,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_25213_0__25219_0__25220,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_25213_0__25219_0__25220,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e25224){if((e25224 instanceof Error))
{var e__12526__auto____$1 = e25224;if((e__12526__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25224;
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
}catch (e25223){if((e25223 instanceof Error))
{var e__12526__auto____$1 = e25223;if((e__12526__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__12526__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25223;
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
}catch (e25222){if((e25222 instanceof Error))
{var e__12526__auto____$1 = e25222;if((e__12526__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__12526__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25222;
} else
{return null;
}
}
}} else
{throw e__12526__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25221;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__25229__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__25229 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25229__delegate.call(this,renderer,delta,input_queue,args);};
G__25229.cljs$lang$maxFixedArity = 3;
G__25229.cljs$lang$applyTo = (function (arglist__25230){
var renderer = cljs.core.first(arglist__25230);
arglist__25230 = cljs.core.next(arglist__25230);
var delta = cljs.core.first(arglist__25230);
arglist__25230 = cljs.core.next(arglist__25230);
var input_queue = cljs.core.first(arglist__25230);
var args = cljs.core.rest(arglist__25230);
return G__25229__delegate(renderer,delta,input_queue,args);
});
G__25229.cljs$core$IFn$_invoke$arity$variadic = G__25229__delegate;
return G__25229;
})()
);
foundation.app.render.node_update = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__25232,input_queue,parent_id){var vec__25233 = p__25232;var _ = cljs.core.nth.call(null,vec__25233,0,null);var path = cljs.core.nth.call(null,vec__25233,1,null);var ___$1 = cljs.core.nth.call(null,vec__25233,2,null);var ___$2 = cljs.core.nth.call(null,vec__25233,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__25231_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__25231_SHARP_);
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
var G__25234__delegate = function (args){return null;
};
var G__25234 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25234__delegate.call(this,args);};
G__25234.cljs$lang$maxFixedArity = 0;
G__25234.cljs$lang$applyTo = (function (arglist__25235){
var args = cljs.core.seq(arglist__25235);
return G__25234__delegate(args);
});
G__25234.cljs$core$IFn$_invoke$arity$variadic = G__25234__delegate;
return G__25234;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__25237,input_queue,id){var vec__25238 = p__25237;var _ = cljs.core.nth.call(null,vec__25238,0,null);var path = cljs.core.nth.call(null,vec__25238,1,null);var ___$1 = cljs.core.nth.call(null,vec__25238,2,null);var ___$2 = cljs.core.nth.call(null,vec__25238,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__25236_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__25236_SHARP_);
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
var G__25239__delegate = function (args){return null;
};
var G__25239 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25239__delegate.call(this,args);};
G__25239.cljs$lang$maxFixedArity = 0;
G__25239.cljs$lang$applyTo = (function (arglist__25240){
var args = cljs.core.seq(arglist__25240);
return G__25239__delegate(args);
});
G__25239.cljs$core$IFn$_invoke$arity$variadic = G__25239__delegate;
return G__25239;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__25242,id,message){var vec__25243 = p__25242;var _ = cljs.core.nth.call(null,vec__25243,0,null);var path = cljs.core.nth.call(null,vec__25243,1,null);var ___$1 = cljs.core.nth.call(null,vec__25243,2,null);var ___$2 = cljs.core.nth.call(null,vec__25243,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__25241_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__25241_SHARP_);
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
var G__25244__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__25244 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25244__delegate.call(this,args);};
G__25244.cljs$lang$maxFixedArity = 0;
G__25244.cljs$lang$applyTo = (function (arglist__25245){
var args = cljs.core.seq(arglist__25245);
return G__25244__delegate(args);
});
G__25244.cljs$core$IFn$_invoke$arity$variadic = G__25244__delegate;
return G__25244;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj25247 = {};return obj25247;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__25248_SHARP_){return cljs.core.get.call(null,n,p1__25248_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__25253 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__25254 = null;var count__25255 = 0;var i__25256 = 0;while(true){
if((i__25256 < count__25255))
{var f = cljs.core._nth.call(null,chunk__25254,i__25256);f.call(null);
{
var G__25257 = seq__25253;
var G__25258 = chunk__25254;
var G__25259 = count__25255;
var G__25260 = (i__25256 + 1);
seq__25253 = G__25257;
chunk__25254 = G__25258;
count__25255 = G__25259;
i__25256 = G__25260;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25253);if(temp__4092__auto__)
{var seq__25253__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25253__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25253__$1);{
var G__25261 = cljs.core.chunk_rest.call(null,seq__25253__$1);
var G__25262 = c__8552__auto__;
var G__25263 = cljs.core.count.call(null,c__8552__auto__);
var G__25264 = 0;
seq__25253 = G__25261;
chunk__25254 = G__25262;
count__25255 = G__25263;
i__25256 = G__25264;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__25253__$1);f.call(null);
{
var G__25265 = cljs.core.next.call(null,seq__25253__$1);
var G__25266 = null;
var G__25267 = 0;
var G__25268 = 0;
seq__25253 = G__25265;
chunk__25254 = G__25266;
count__25255 = G__25267;
i__25256 = G__25268;
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
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8392__auto__,k25270,else__8393__auto__){var self__ = this;
var this__8392__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k25270,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k25270,else__8393__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8397__auto__,k__8398__auto__,G__25269){var self__ = this;
var this__8397__auto____$1 = this;var pred__25272 = cljs.core.keyword_identical_QMARK_;var expr__25273 = k__8398__auto__;if(cljs.core.truth_(pred__25272.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__25273)))
{return (new foundation.app.render.DomRenderer(G__25269,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8398__auto__,G__25269),null));
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
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8389__auto__,G__25269){var self__ = this;
var this__8389__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__25269,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__25271){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__25271),null,cljs.core.dissoc.call(null,G__25271,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__15955__auto___25321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_25309){var state_val_25310 = (state_25309[1]);if((state_val_25310 === 4))
{var inst_25301 = (state_25309[2]);var inst_25302 = cljs.core.nth.call(null,inst_25301,0,null);var inst_25303 = cljs.core.nth.call(null,inst_25301,1,null);var inst_25304 = foundation.app.render.node_create.call(null,renderer,inst_25301,input_queue);var state_25309__$1 = (function (){var statearr_25311 = state_25309;(statearr_25311[7] = inst_25304);
(statearr_25311[8] = inst_25303);
(statearr_25311[9] = inst_25302);
return statearr_25311;
})();var statearr_25312_25322 = state_25309__$1;(statearr_25312_25322[2] = null);
(statearr_25312_25322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25310 === 3))
{var inst_25307 = (state_25309[2]);var state_25309__$1 = state_25309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25309__$1,inst_25307);
} else
{if((state_val_25310 === 2))
{var state_25309__$1 = state_25309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25309__$1,4,render_queue);
} else
{if((state_val_25310 === 1))
{var state_25309__$1 = state_25309;var statearr_25313_25323 = state_25309__$1;(statearr_25313_25323[2] = null);
(statearr_25313_25323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_25317 = (new Array(10));(statearr_25317[0] = state_machine__15863__auto__);
(statearr_25317[1] = 1);
return statearr_25317;
});
var state_machine__15863__auto____1 = (function (state_25309){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_25309);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object))
{var ex__15866__auto__ = e25318;var statearr_25319_25324 = state_25309;(statearr_25319_25324[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25325 = state_25309;
state_25309 = G__25325;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_25309){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_25309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_25320 = f__15956__auto__.call(null);(statearr_25320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___25321);
return statearr_25320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__25330 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__25331 = null;var count__25332 = 0;var i__25333 = 0;while(true){
if((i__25333 < count__25332))
{var message = cljs.core._nth.call(null,chunk__25331,i__25333);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__25334 = seq__25330;
var G__25335 = chunk__25331;
var G__25336 = count__25332;
var G__25337 = (i__25333 + 1);
seq__25330 = G__25334;
chunk__25331 = G__25335;
count__25332 = G__25336;
i__25333 = G__25337;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25330);if(temp__4092__auto__)
{var seq__25330__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25330__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25330__$1);{
var G__25338 = cljs.core.chunk_rest.call(null,seq__25330__$1);
var G__25339 = c__8552__auto__;
var G__25340 = cljs.core.count.call(null,c__8552__auto__);
var G__25341 = 0;
seq__25330 = G__25338;
chunk__25331 = G__25339;
count__25332 = G__25340;
i__25333 = G__25341;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__25330__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__25342 = cljs.core.next.call(null,seq__25330__$1);
var G__25343 = null;
var G__25344 = 0;
var G__25345 = 0;
seq__25330 = G__25342;
chunk__25331 = G__25343;
count__25332 = G__25344;
i__25333 = G__25345;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__25356){var vec__25357 = p__25356;var op = cljs.core.nth.call(null,vec__25357,0,null);var path = cljs.core.nth.call(null,vec__25357,1,null);var _ = cljs.core.nth.call(null,vec__25357,2,null);var ___$1 = cljs.core.nth.call(null,vec__25357,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__25358 = cljs.core.seq.call(null,deltas__$1);var chunk__25359 = null;var count__25360 = 0;var i__25361 = 0;while(true){
if((i__25361 < count__25360))
{var d = cljs.core._nth.call(null,chunk__25359,i__25361);var vec__25362_25366 = d;var op_25367 = cljs.core.nth.call(null,vec__25362_25366,0,null);var path_25368 = cljs.core.nth.call(null,vec__25362_25366,1,null);var id_25369 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_25368);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_25368);
}
})();var pid_25370 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_25368);var G__25363_25371 = op_25367;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__25363_25371))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_25369);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__25363_25371))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_25369);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__25363_25371))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_25369);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__25363_25371))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_25369);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__25363_25371))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_25369);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__25363_25371))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_25370,id_25369);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_25367)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__25372 = seq__25358;
var G__25373 = chunk__25359;
var G__25374 = count__25360;
var G__25375 = (i__25361 + 1);
seq__25358 = G__25372;
chunk__25359 = G__25373;
count__25360 = G__25374;
i__25361 = G__25375;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25358);if(temp__4092__auto__)
{var seq__25358__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25358__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25358__$1);{
var G__25376 = cljs.core.chunk_rest.call(null,seq__25358__$1);
var G__25377 = c__8552__auto__;
var G__25378 = cljs.core.count.call(null,c__8552__auto__);
var G__25379 = 0;
seq__25358 = G__25376;
chunk__25359 = G__25377;
count__25360 = G__25378;
i__25361 = G__25379;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__25358__$1);var vec__25364_25380 = d;var op_25381 = cljs.core.nth.call(null,vec__25364_25380,0,null);var path_25382 = cljs.core.nth.call(null,vec__25364_25380,1,null);var id_25383 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_25382);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_25382);
}
})();var pid_25384 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_25382);var G__25365_25385 = op_25381;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__25365_25385))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_25383);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__25365_25385))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_25383);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__25365_25385))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_25383);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__25365_25385))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_25383);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__25365_25385))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_25383);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__25365_25385))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_25384,id_25383);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_25381)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__25386 = cljs.core.next.call(null,seq__25358__$1);
var G__25387 = null;
var G__25388 = 0;
var G__25389 = 0;
seq__25358 = G__25386;
chunk__25359 = G__25387;
count__25360 = G__25388;
i__25361 = G__25389;
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
