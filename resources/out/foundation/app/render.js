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
foundation.app.render.node_create = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__378524,input_queue,parent_id,id){var vec__378525 = p__378524;var _ = cljs.core.nth.call(null,vec__378525,0,null);var path = cljs.core.nth.call(null,vec__378525,1,null);var ___$1 = cljs.core.nth.call(null,vec__378525,2,null);var ___$2 = cljs.core.nth.call(null,vec__378525,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__378523_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__378523_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_378526 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_378526)) && ((cljs.core.count.call(null,ocr_378526) === 2)))
{try{var ocr_378526_0__378528 = cljs.core.nth.call(null,ocr_378526,0);if((cljs.core.vector_QMARK_.call(null,ocr_378526_0__378528)) && ((cljs.core.count.call(null,ocr_378526_0__378528) === 1)))
{try{var ocr_378526_0__378528_0__378530 = cljs.core.nth.call(null,ocr_378526_0__378528,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378526_0__378528_0__378530,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_378526_1__378529 = cljs.core.nth.call(null,ocr_378526,1);if((cljs.core.vector_QMARK_.call(null,ocr_378526_1__378529)) && ((cljs.core.count.call(null,ocr_378526_1__378529) === 1)))
{try{var ocr_378526_1__378529_0__378531 = cljs.core.nth.call(null,ocr_378526_1__378529,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378526_1__378529_0__378531,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e378541){if((e378541 instanceof Error))
{var e__8772__auto__ = e378541;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378541;
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
}catch (e378540){if((e378540 instanceof Error))
{var e__8772__auto__ = e378540;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378540;
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
}catch (e378539){if((e378539 instanceof Error))
{var e__8772__auto__ = e378539;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378539;
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
}catch (e378538){if((e378538 instanceof Error))
{var e__8772__auto__ = e378538;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378538;
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
}catch (e378534){if((e378534 instanceof Error))
{var e__8772__auto__ = e378534;if((e__8772__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_378526)) && ((cljs.core.count.call(null,ocr_378526) === 1)))
{try{var ocr_378526_0__378532 = cljs.core.nth.call(null,ocr_378526,0);if((cljs.core.vector_QMARK_.call(null,ocr_378526_0__378532)) && ((cljs.core.count.call(null,ocr_378526_0__378532) === 1)))
{try{var ocr_378526_0__378532_0__378533 = cljs.core.nth.call(null,ocr_378526_0__378532,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378526_0__378532_0__378533,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378526_0__378532_0__378533,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e378537){if((e378537 instanceof Error))
{var e__8772__auto____$1 = e378537;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378537;
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
}catch (e378536){if((e378536 instanceof Error))
{var e__8772__auto____$1 = e378536;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378536;
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
}catch (e378535){if((e378535 instanceof Error))
{var e__8772__auto____$1 = e378535;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378535;
} else
{return null;
}
}
}} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378534;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__378542__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__378542 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__378542__delegate.call(this,renderer,delta,input_queue,args);};
G__378542.cljs$lang$maxFixedArity = 3;
G__378542.cljs$lang$applyTo = (function (arglist__378543){
var renderer = cljs.core.first(arglist__378543);
arglist__378543 = cljs.core.next(arglist__378543);
var delta = cljs.core.first(arglist__378543);
arglist__378543 = cljs.core.next(arglist__378543);
var input_queue = cljs.core.first(arglist__378543);
var args = cljs.core.rest(arglist__378543);
return G__378542__delegate(renderer,delta,input_queue,args);
});
G__378542.cljs$core$IFn$_invoke$arity$variadic = G__378542__delegate;
return G__378542;
})()
);
foundation.app.render.node_update = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__378545,input_queue,parent_id){var vec__378546 = p__378545;var _ = cljs.core.nth.call(null,vec__378546,0,null);var path = cljs.core.nth.call(null,vec__378546,1,null);var ___$1 = cljs.core.nth.call(null,vec__378546,2,null);var ___$2 = cljs.core.nth.call(null,vec__378546,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__378544_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__378544_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__378547__delegate = function (args){return null;
};
var G__378547 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__378547__delegate.call(this,args);};
G__378547.cljs$lang$maxFixedArity = 0;
G__378547.cljs$lang$applyTo = (function (arglist__378548){
var args = cljs.core.seq(arglist__378548);
return G__378547__delegate(args);
});
G__378547.cljs$core$IFn$_invoke$arity$variadic = G__378547__delegate;
return G__378547;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__378550,input_queue,id){var vec__378551 = p__378550;var _ = cljs.core.nth.call(null,vec__378551,0,null);var path = cljs.core.nth.call(null,vec__378551,1,null);var ___$1 = cljs.core.nth.call(null,vec__378551,2,null);var ___$2 = cljs.core.nth.call(null,vec__378551,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__378549_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__378549_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__378552__delegate = function (args){return null;
};
var G__378552 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__378552__delegate.call(this,args);};
G__378552.cljs$lang$maxFixedArity = 0;
G__378552.cljs$lang$applyTo = (function (arglist__378553){
var args = cljs.core.seq(arglist__378553);
return G__378552__delegate(args);
});
G__378552.cljs$core$IFn$_invoke$arity$variadic = G__378552__delegate;
return G__378552;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__378555,id,message){var vec__378556 = p__378555;var _ = cljs.core.nth.call(null,vec__378556,0,null);var path = cljs.core.nth.call(null,vec__378556,1,null);var ___$1 = cljs.core.nth.call(null,vec__378556,2,null);var ___$2 = cljs.core.nth.call(null,vec__378556,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__378554_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__378554_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__378557__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__378557 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__378557__delegate.call(this,args);};
G__378557.cljs$lang$maxFixedArity = 0;
G__378557.cljs$lang$applyTo = (function (arglist__378558){
var args = cljs.core.seq(arglist__378558);
return G__378557__delegate(args);
});
G__378557.cljs$core$IFn$_invoke$arity$variadic = G__378557__delegate;
return G__378557;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj378560 = {};return obj378560;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__378561_SHARP_){return cljs.core.get.call(null,n,p1__378561_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__378566 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__378567 = null;var count__378568 = 0;var i__378569 = 0;while(true){
if((i__378569 < count__378568))
{var f = cljs.core._nth.call(null,chunk__378567,i__378569);f.call(null);
{
var G__378570 = seq__378566;
var G__378571 = chunk__378567;
var G__378572 = count__378568;
var G__378573 = (i__378569 + 1);
seq__378566 = G__378570;
chunk__378567 = G__378571;
count__378568 = G__378572;
i__378569 = G__378573;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__378566);if(temp__4092__auto__)
{var seq__378566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__378566__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__378566__$1);{
var G__378574 = cljs.core.chunk_rest.call(null,seq__378566__$1);
var G__378575 = c__14708__auto__;
var G__378576 = cljs.core.count.call(null,c__14708__auto__);
var G__378577 = 0;
seq__378566 = G__378574;
chunk__378567 = G__378575;
count__378568 = G__378576;
i__378569 = G__378577;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__378566__$1);f.call(null);
{
var G__378578 = cljs.core.next.call(null,seq__378566__$1);
var G__378579 = null;
var G__378580 = 0;
var G__378581 = 0;
seq__378566 = G__378578;
chunk__378567 = G__378579;
count__378568 = G__378580;
i__378569 = G__378581;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14541__auto__){var self__ = this;
var this__14541__auto____$1 = this;var h__14395__auto__ = self__.__hash;if(!((h__14395__auto__ == null)))
{return h__14395__auto__;
} else
{var h__14395__auto____$1 = cljs.core.hash_imap.call(null,this__14541__auto____$1);self__.__hash = h__14395__auto____$1;
return h__14395__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14546__auto__,k__14547__auto__){var self__ = this;
var this__14546__auto____$1 = this;return cljs.core._lookup.call(null,this__14546__auto____$1,k__14547__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14548__auto__,k378583,else__14549__auto__){var self__ = this;
var this__14548__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k378583,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k378583,else__14549__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14553__auto__,k__14554__auto__,G__378582){var self__ = this;
var this__14553__auto____$1 = this;var pred__378585 = cljs.core.keyword_identical_QMARK_;var expr__378586 = k__14554__auto__;if(cljs.core.truth_(pred__378585.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__378586)))
{return (new foundation.app.render.DomRenderer(G__378582,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14554__auto__,G__378582),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14560__auto__,writer__14561__auto__,opts__14562__auto__){var self__ = this;
var this__14560__auto____$1 = this;var pr_pair__14563__auto__ = (function (keyval__14564__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,cljs.core.pr_writer,""," ","",opts__14562__auto__,keyval__14564__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,pr_pair__14563__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14551__auto__,entry__14552__auto__){var self__ = this;
var this__14551__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14552__auto__))
{return cljs.core._assoc.call(null,this__14551__auto____$1,cljs.core._nth.call(null,entry__14552__auto__,0),cljs.core._nth.call(null,entry__14552__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14551__auto____$1,entry__14552__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14558__auto__){var self__ = this;
var this__14558__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14550__auto__){var self__ = this;
var this__14550__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14542__auto__,other__14543__auto__){var self__ = this;
var this__14542__auto____$1 = this;if(cljs.core.truth_((function (){var and__13967__auto__ = other__14543__auto__;if(cljs.core.truth_(and__13967__auto__))
{return ((this__14542__auto____$1.constructor === other__14543__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14542__auto____$1,other__14543__auto__));
} else
{return and__13967__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14545__auto__,G__378582){var self__ = this;
var this__14545__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__378582,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14544__auto__){var self__ = this;
var this__14544__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14555__auto__,k__14556__auto__){var self__ = this;
var this__14555__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14556__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14555__auto____$1),self__.__meta),k__14556__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14556__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14580__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14580__auto__,writer__14581__auto__){return cljs.core._write.call(null,writer__14581__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__378584){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__378584),null,cljs.core.dissoc.call(null,G__378584,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18289__auto___378634 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_378622){var state_val_378623 = (state_378622[1]);if((state_val_378623 === 4))
{var inst_378614 = (state_378622[2]);var inst_378615 = cljs.core.nth.call(null,inst_378614,0,null);var inst_378616 = cljs.core.nth.call(null,inst_378614,1,null);var inst_378617 = foundation.app.render.node_create.call(null,renderer,inst_378614,input_queue);var state_378622__$1 = (function (){var statearr_378624 = state_378622;(statearr_378624[7] = inst_378617);
(statearr_378624[8] = inst_378616);
(statearr_378624[9] = inst_378615);
return statearr_378624;
})();var statearr_378625_378635 = state_378622__$1;(statearr_378625_378635[2] = null);
(statearr_378625_378635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_378623 === 3))
{var inst_378620 = (state_378622[2]);var state_378622__$1 = state_378622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378622__$1,inst_378620);
} else
{if((state_val_378623 === 2))
{var state_378622__$1 = state_378622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_378622__$1,4,render_queue);
} else
{if((state_val_378623 === 1))
{var state_378622__$1 = state_378622;var statearr_378626_378636 = state_378622__$1;(statearr_378626_378636[2] = null);
(statearr_378626_378636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_378630 = [null,null,null,null,null,null,null,null,null,null];(statearr_378630[0] = state_machine__18220__auto__);
(statearr_378630[1] = 1);
return statearr_378630;
});
var state_machine__18220__auto____1 = (function (state_378622){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_378622);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e378631){if((e378631 instanceof Object))
{var ex__18223__auto__ = e378631;var statearr_378632_378637 = state_378622;(statearr_378632_378637[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378622);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__378638 = state_378622;
state_378622 = G__378638;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_378622){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_378622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_378633 = f__18290__auto__.call(null);(statearr_378633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___378634);
return statearr_378633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__378643 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__378644 = null;var count__378645 = 0;var i__378646 = 0;while(true){
if((i__378646 < count__378645))
{var message = cljs.core._nth.call(null,chunk__378644,i__378646);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__378647 = seq__378643;
var G__378648 = chunk__378644;
var G__378649 = count__378645;
var G__378650 = (i__378646 + 1);
seq__378643 = G__378647;
chunk__378644 = G__378648;
count__378645 = G__378649;
i__378646 = G__378650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__378643);if(temp__4092__auto__)
{var seq__378643__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__378643__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__378643__$1);{
var G__378651 = cljs.core.chunk_rest.call(null,seq__378643__$1);
var G__378652 = c__14708__auto__;
var G__378653 = cljs.core.count.call(null,c__14708__auto__);
var G__378654 = 0;
seq__378643 = G__378651;
chunk__378644 = G__378652;
count__378645 = G__378653;
i__378646 = G__378654;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__378643__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__378655 = cljs.core.next.call(null,seq__378643__$1);
var G__378656 = null;
var G__378657 = 0;
var G__378658 = 0;
seq__378643 = G__378655;
chunk__378644 = G__378656;
count__378645 = G__378657;
i__378646 = G__378658;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__378669){var vec__378670 = p__378669;var op = cljs.core.nth.call(null,vec__378670,0,null);var path = cljs.core.nth.call(null,vec__378670,1,null);var _ = cljs.core.nth.call(null,vec__378670,2,null);var ___$1 = cljs.core.nth.call(null,vec__378670,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__378671 = cljs.core.seq.call(null,deltas__$1);var chunk__378672 = null;var count__378673 = 0;var i__378674 = 0;while(true){
if((i__378674 < count__378673))
{var d = cljs.core._nth.call(null,chunk__378672,i__378674);var vec__378675_378679 = d;var op_378680 = cljs.core.nth.call(null,vec__378675_378679,0,null);var path_378681 = cljs.core.nth.call(null,vec__378675_378679,1,null);var id_378682 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_378681);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_378681);
}
})();var pid_378683 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_378681);var G__378676_378684 = op_378680;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__378676_378684))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_378682);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__378676_378684))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_378682);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__378676_378684))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_378682);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__378676_378684))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_378683,id_378682);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_378683,id_378682);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__378676_378684))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_378683,id_378682);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__378676_378684))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_378683,id_378682);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_378680)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__378685 = seq__378671;
var G__378686 = chunk__378672;
var G__378687 = count__378673;
var G__378688 = (i__378674 + 1);
seq__378671 = G__378685;
chunk__378672 = G__378686;
count__378673 = G__378687;
i__378674 = G__378688;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__378671);if(temp__4092__auto__)
{var seq__378671__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__378671__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__378671__$1);{
var G__378689 = cljs.core.chunk_rest.call(null,seq__378671__$1);
var G__378690 = c__14708__auto__;
var G__378691 = cljs.core.count.call(null,c__14708__auto__);
var G__378692 = 0;
seq__378671 = G__378689;
chunk__378672 = G__378690;
count__378673 = G__378691;
i__378674 = G__378692;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__378671__$1);var vec__378677_378693 = d;var op_378694 = cljs.core.nth.call(null,vec__378677_378693,0,null);var path_378695 = cljs.core.nth.call(null,vec__378677_378693,1,null);var id_378696 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_378695);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_378695);
}
})();var pid_378697 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_378695);var G__378678_378698 = op_378694;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__378678_378698))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_378696);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__378678_378698))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_378696);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__378678_378698))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_378696);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__378678_378698))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_378697,id_378696);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_378697,id_378696);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__378678_378698))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_378697,id_378696);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__378678_378698))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_378697,id_378696);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_378694)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__378699 = cljs.core.next.call(null,seq__378671__$1);
var G__378700 = null;
var G__378701 = 0;
var G__378702 = 0;
seq__378671 = G__378699;
chunk__378672 = G__378700;
count__378673 = G__378701;
i__378674 = G__378702;
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