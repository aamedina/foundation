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
foundation.app.render.node_create = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__151520,input_queue,parent_id,id){var vec__151521 = p__151520;var _ = cljs.core.nth.call(null,vec__151521,0,null);var path = cljs.core.nth.call(null,vec__151521,1,null);var ___$1 = cljs.core.nth.call(null,vec__151521,2,null);var ___$2 = cljs.core.nth.call(null,vec__151521,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__151519_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__151519_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_151522 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_151522)) && ((cljs.core.count.call(null,ocr_151522) === 2)))
{try{var ocr_151522_0__151524 = cljs.core.nth.call(null,ocr_151522,0);if((cljs.core.vector_QMARK_.call(null,ocr_151522_0__151524)) && ((cljs.core.count.call(null,ocr_151522_0__151524) === 1)))
{try{var ocr_151522_0__151524_0__151526 = cljs.core.nth.call(null,ocr_151522_0__151524,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_151522_0__151524_0__151526,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_151522_1__151525 = cljs.core.nth.call(null,ocr_151522,1);if((cljs.core.vector_QMARK_.call(null,ocr_151522_1__151525)) && ((cljs.core.count.call(null,ocr_151522_1__151525) === 1)))
{try{var ocr_151522_1__151525_0__151527 = cljs.core.nth.call(null,ocr_151522_1__151525,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_151522_1__151525_0__151527,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e151537){if((e151537 instanceof Error))
{var e__8616__auto__ = e151537;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151537;
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
}catch (e151536){if((e151536 instanceof Error))
{var e__8616__auto__ = e151536;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151536;
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
}catch (e151535){if((e151535 instanceof Error))
{var e__8616__auto__ = e151535;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151535;
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
}catch (e151534){if((e151534 instanceof Error))
{var e__8616__auto__ = e151534;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151534;
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
}catch (e151530){if((e151530 instanceof Error))
{var e__8616__auto__ = e151530;if((e__8616__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_151522)) && ((cljs.core.count.call(null,ocr_151522) === 1)))
{try{var ocr_151522_0__151528 = cljs.core.nth.call(null,ocr_151522,0);if((cljs.core.vector_QMARK_.call(null,ocr_151522_0__151528)) && ((cljs.core.count.call(null,ocr_151522_0__151528) === 1)))
{try{var ocr_151522_0__151528_0__151529 = cljs.core.nth.call(null,ocr_151522_0__151528,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_151522_0__151528_0__151529,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_151522_0__151528_0__151529,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e151533){if((e151533 instanceof Error))
{var e__8616__auto____$1 = e151533;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151533;
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
}catch (e151532){if((e151532 instanceof Error))
{var e__8616__auto____$1 = e151532;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151532;
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
}catch (e151531){if((e151531 instanceof Error))
{var e__8616__auto____$1 = e151531;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151531;
} else
{return null;
}
}
}} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151530;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__151538__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__151538 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__151538__delegate.call(this,renderer,delta,input_queue,args);};
G__151538.cljs$lang$maxFixedArity = 3;
G__151538.cljs$lang$applyTo = (function (arglist__151539){
var renderer = cljs.core.first(arglist__151539);
arglist__151539 = cljs.core.next(arglist__151539);
var delta = cljs.core.first(arglist__151539);
arglist__151539 = cljs.core.next(arglist__151539);
var input_queue = cljs.core.first(arglist__151539);
var args = cljs.core.rest(arglist__151539);
return G__151538__delegate(renderer,delta,input_queue,args);
});
G__151538.cljs$core$IFn$_invoke$arity$variadic = G__151538__delegate;
return G__151538;
})()
);
foundation.app.render.node_update = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__151541,input_queue,parent_id){var vec__151542 = p__151541;var _ = cljs.core.nth.call(null,vec__151542,0,null);var path = cljs.core.nth.call(null,vec__151542,1,null);var ___$1 = cljs.core.nth.call(null,vec__151542,2,null);var ___$2 = cljs.core.nth.call(null,vec__151542,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__151540_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__151540_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__151543__delegate = function (args){return null;
};
var G__151543 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__151543__delegate.call(this,args);};
G__151543.cljs$lang$maxFixedArity = 0;
G__151543.cljs$lang$applyTo = (function (arglist__151544){
var args = cljs.core.seq(arglist__151544);
return G__151543__delegate(args);
});
G__151543.cljs$core$IFn$_invoke$arity$variadic = G__151543__delegate;
return G__151543;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__151546,input_queue,id){var vec__151547 = p__151546;var _ = cljs.core.nth.call(null,vec__151547,0,null);var path = cljs.core.nth.call(null,vec__151547,1,null);var ___$1 = cljs.core.nth.call(null,vec__151547,2,null);var ___$2 = cljs.core.nth.call(null,vec__151547,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__151545_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__151545_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__151548__delegate = function (args){return null;
};
var G__151548 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__151548__delegate.call(this,args);};
G__151548.cljs$lang$maxFixedArity = 0;
G__151548.cljs$lang$applyTo = (function (arglist__151549){
var args = cljs.core.seq(arglist__151549);
return G__151548__delegate(args);
});
G__151548.cljs$core$IFn$_invoke$arity$variadic = G__151548__delegate;
return G__151548;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__151551,id,message){var vec__151552 = p__151551;var _ = cljs.core.nth.call(null,vec__151552,0,null);var path = cljs.core.nth.call(null,vec__151552,1,null);var ___$1 = cljs.core.nth.call(null,vec__151552,2,null);var ___$2 = cljs.core.nth.call(null,vec__151552,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__151550_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__151550_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__151553__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__151553 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__151553__delegate.call(this,args);};
G__151553.cljs$lang$maxFixedArity = 0;
G__151553.cljs$lang$applyTo = (function (arglist__151554){
var args = cljs.core.seq(arglist__151554);
return G__151553__delegate(args);
});
G__151553.cljs$core$IFn$_invoke$arity$variadic = G__151553__delegate;
return G__151553;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj151556 = {};return obj151556;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__151557_SHARP_){return cljs.core.get.call(null,n,p1__151557_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__151562 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__151563 = null;var count__151564 = 0;var i__151565 = 0;while(true){
if((i__151565 < count__151564))
{var f = cljs.core._nth.call(null,chunk__151563,i__151565);f.call(null);
{
var G__151566 = seq__151562;
var G__151567 = chunk__151563;
var G__151568 = count__151564;
var G__151569 = (i__151565 + 1);
seq__151562 = G__151566;
chunk__151563 = G__151567;
count__151564 = G__151568;
i__151565 = G__151569;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151562);if(temp__4092__auto__)
{var seq__151562__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151562__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151562__$1);{
var G__151570 = cljs.core.chunk_rest.call(null,seq__151562__$1);
var G__151571 = c__14545__auto__;
var G__151572 = cljs.core.count.call(null,c__14545__auto__);
var G__151573 = 0;
seq__151562 = G__151570;
chunk__151563 = G__151571;
count__151564 = G__151572;
i__151565 = G__151573;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__151562__$1);f.call(null);
{
var G__151574 = cljs.core.next.call(null,seq__151562__$1);
var G__151575 = null;
var G__151576 = 0;
var G__151577 = 0;
seq__151562 = G__151574;
chunk__151563 = G__151575;
count__151564 = G__151576;
i__151565 = G__151577;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14378__auto__){var self__ = this;
var this__14378__auto____$1 = this;var h__14232__auto__ = self__.__hash;if(!((h__14232__auto__ == null)))
{return h__14232__auto__;
} else
{var h__14232__auto____$1 = cljs.core.hash_imap.call(null,this__14378__auto____$1);self__.__hash = h__14232__auto____$1;
return h__14232__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14383__auto__,k__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;return cljs.core._lookup.call(null,this__14383__auto____$1,k__14384__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k151579,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k151579,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k151579,else__14386__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__151578){var self__ = this;
var this__14390__auto____$1 = this;var pred__151581 = cljs.core.keyword_identical_QMARK_;var expr__151582 = k__14391__auto__;if(cljs.core.truth_(pred__151581.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__151582)))
{return (new foundation.app.render.DomRenderer(G__151578,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__151578),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14397__auto__,writer__14398__auto__,opts__14399__auto__){var self__ = this;
var this__14397__auto____$1 = this;var pr_pair__14400__auto__ = (function (keyval__14401__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,cljs.core.pr_writer,""," ","",opts__14399__auto__,keyval__14401__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,pr_pair__14400__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14399__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14388__auto__,entry__14389__auto__){var self__ = this;
var this__14388__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14389__auto__))
{return cljs.core._assoc.call(null,this__14388__auto____$1,cljs.core._nth.call(null,entry__14389__auto__,0),cljs.core._nth.call(null,entry__14389__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14388__auto____$1,entry__14389__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14395__auto__){var self__ = this;
var this__14395__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14387__auto__){var self__ = this;
var this__14387__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14379__auto__,other__14380__auto__){var self__ = this;
var this__14379__auto____$1 = this;if(cljs.core.truth_((function (){var and__13809__auto__ = other__14380__auto__;if(cljs.core.truth_(and__13809__auto__))
{return ((this__14379__auto____$1.constructor === other__14380__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14379__auto____$1,other__14380__auto__));
} else
{return and__13809__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__151578){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__151578,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14381__auto__){var self__ = this;
var this__14381__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14392__auto__,k__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14393__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14392__auto____$1),self__.__meta),k__14393__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14393__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14417__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14417__auto__,writer__14418__auto__){return cljs.core._write.call(null,writer__14418__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__151580){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__151580),null,cljs.core.dissoc.call(null,G__151580,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__16829__auto___151630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_151618){var state_val_151619 = (state_151618[1]);if((state_val_151619 === 4))
{var inst_151610 = (state_151618[2]);var inst_151611 = cljs.core.nth.call(null,inst_151610,0,null);var inst_151612 = cljs.core.nth.call(null,inst_151610,1,null);var inst_151613 = foundation.app.render.node_create.call(null,renderer,inst_151610,input_queue);var state_151618__$1 = (function (){var statearr_151620 = state_151618;(statearr_151620[7] = inst_151612);
(statearr_151620[8] = inst_151611);
(statearr_151620[9] = inst_151613);
return statearr_151620;
})();var statearr_151621_151631 = state_151618__$1;(statearr_151621_151631[2] = null);
(statearr_151621_151631[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151619 === 3))
{var inst_151616 = (state_151618[2]);var state_151618__$1 = state_151618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151618__$1,inst_151616);
} else
{if((state_val_151619 === 2))
{var state_151618__$1 = state_151618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151618__$1,4,render_queue);
} else
{if((state_val_151619 === 1))
{var state_151618__$1 = state_151618;var statearr_151622_151632 = state_151618__$1;(statearr_151622_151632[2] = null);
(statearr_151622_151632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_151626 = (new Array(10));(statearr_151626[0] = state_machine__16760__auto__);
(statearr_151626[1] = 1);
return statearr_151626;
});
var state_machine__16760__auto____1 = (function (state_151618){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_151618);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e151627){if((e151627 instanceof Object))
{var ex__16763__auto__ = e151627;var statearr_151628_151633 = state_151618;(statearr_151628_151633[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151634 = state_151618;
state_151618 = G__151634;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_151618){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_151618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_151629 = f__16830__auto__.call(null);(statearr_151629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___151630);
return statearr_151629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__151639 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__151640 = null;var count__151641 = 0;var i__151642 = 0;while(true){
if((i__151642 < count__151641))
{var message = cljs.core._nth.call(null,chunk__151640,i__151642);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__151643 = seq__151639;
var G__151644 = chunk__151640;
var G__151645 = count__151641;
var G__151646 = (i__151642 + 1);
seq__151639 = G__151643;
chunk__151640 = G__151644;
count__151641 = G__151645;
i__151642 = G__151646;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151639);if(temp__4092__auto__)
{var seq__151639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151639__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151639__$1);{
var G__151647 = cljs.core.chunk_rest.call(null,seq__151639__$1);
var G__151648 = c__14545__auto__;
var G__151649 = cljs.core.count.call(null,c__14545__auto__);
var G__151650 = 0;
seq__151639 = G__151647;
chunk__151640 = G__151648;
count__151641 = G__151649;
i__151642 = G__151650;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__151639__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__151651 = cljs.core.next.call(null,seq__151639__$1);
var G__151652 = null;
var G__151653 = 0;
var G__151654 = 0;
seq__151639 = G__151651;
chunk__151640 = G__151652;
count__151641 = G__151653;
i__151642 = G__151654;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__151665){var vec__151666 = p__151665;var op = cljs.core.nth.call(null,vec__151666,0,null);var path = cljs.core.nth.call(null,vec__151666,1,null);var _ = cljs.core.nth.call(null,vec__151666,2,null);var ___$1 = cljs.core.nth.call(null,vec__151666,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__151667 = cljs.core.seq.call(null,deltas__$1);var chunk__151668 = null;var count__151669 = 0;var i__151670 = 0;while(true){
if((i__151670 < count__151669))
{var d = cljs.core._nth.call(null,chunk__151668,i__151670);var vec__151671_151675 = d;var op_151676 = cljs.core.nth.call(null,vec__151671_151675,0,null);var path_151677 = cljs.core.nth.call(null,vec__151671_151675,1,null);var id_151678 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_151677);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_151677);
}
})();var pid_151679 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_151677);var G__151672_151680 = op_151676;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__151672_151680))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_151678);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__151672_151680))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_151678);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__151672_151680))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_151678);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__151672_151680))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_151678);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__151672_151680))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_151678);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__151672_151680))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_151679,id_151678);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_151676)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__151681 = seq__151667;
var G__151682 = chunk__151668;
var G__151683 = count__151669;
var G__151684 = (i__151670 + 1);
seq__151667 = G__151681;
chunk__151668 = G__151682;
count__151669 = G__151683;
i__151670 = G__151684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151667);if(temp__4092__auto__)
{var seq__151667__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151667__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151667__$1);{
var G__151685 = cljs.core.chunk_rest.call(null,seq__151667__$1);
var G__151686 = c__14545__auto__;
var G__151687 = cljs.core.count.call(null,c__14545__auto__);
var G__151688 = 0;
seq__151667 = G__151685;
chunk__151668 = G__151686;
count__151669 = G__151687;
i__151670 = G__151688;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__151667__$1);var vec__151673_151689 = d;var op_151690 = cljs.core.nth.call(null,vec__151673_151689,0,null);var path_151691 = cljs.core.nth.call(null,vec__151673_151689,1,null);var id_151692 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_151691);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_151691);
}
})();var pid_151693 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_151691);var G__151674_151694 = op_151690;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__151674_151694))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_151692);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__151674_151694))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_151692);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__151674_151694))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_151692);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__151674_151694))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_151692);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__151674_151694))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_151692);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__151674_151694))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_151693,id_151692);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_151690)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__151695 = cljs.core.next.call(null,seq__151667__$1);
var G__151696 = null;
var G__151697 = 0;
var G__151698 = 0;
seq__151667 = G__151695;
chunk__151668 = G__151696;
count__151669 = G__151697;
i__151670 = G__151698;
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