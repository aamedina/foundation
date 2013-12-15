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
foundation.app.render.node_create = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__321829,input_queue,parent_id,id){var vec__321830 = p__321829;var _ = cljs.core.nth.call(null,vec__321830,0,null);var path = cljs.core.nth.call(null,vec__321830,1,null);var ___$1 = cljs.core.nth.call(null,vec__321830,2,null);var ___$2 = cljs.core.nth.call(null,vec__321830,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__321828_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__321828_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_321831 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_321831)) && ((cljs.core.count.call(null,ocr_321831) === 2)))
{try{var ocr_321831_0__321833 = cljs.core.nth.call(null,ocr_321831,0);if((cljs.core.vector_QMARK_.call(null,ocr_321831_0__321833)) && ((cljs.core.count.call(null,ocr_321831_0__321833) === 1)))
{try{var ocr_321831_0__321833_0__321835 = cljs.core.nth.call(null,ocr_321831_0__321833,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_321831_0__321833_0__321835,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_321831_1__321834 = cljs.core.nth.call(null,ocr_321831,1);if((cljs.core.vector_QMARK_.call(null,ocr_321831_1__321834)) && ((cljs.core.count.call(null,ocr_321831_1__321834) === 1)))
{try{var ocr_321831_1__321834_0__321836 = cljs.core.nth.call(null,ocr_321831_1__321834,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_321831_1__321834_0__321836,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e321846){if((e321846 instanceof Error))
{var e__8616__auto__ = e321846;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321846;
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
}catch (e321845){if((e321845 instanceof Error))
{var e__8616__auto__ = e321845;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321845;
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
}catch (e321844){if((e321844 instanceof Error))
{var e__8616__auto__ = e321844;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321844;
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
}catch (e321843){if((e321843 instanceof Error))
{var e__8616__auto__ = e321843;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321843;
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
}catch (e321839){if((e321839 instanceof Error))
{var e__8616__auto__ = e321839;if((e__8616__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_321831)) && ((cljs.core.count.call(null,ocr_321831) === 1)))
{try{var ocr_321831_0__321837 = cljs.core.nth.call(null,ocr_321831,0);if((cljs.core.vector_QMARK_.call(null,ocr_321831_0__321837)) && ((cljs.core.count.call(null,ocr_321831_0__321837) === 1)))
{try{var ocr_321831_0__321837_0__321838 = cljs.core.nth.call(null,ocr_321831_0__321837,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_321831_0__321837_0__321838,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_321831_0__321837_0__321838,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e321842){if((e321842 instanceof Error))
{var e__8616__auto____$1 = e321842;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321842;
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
}catch (e321841){if((e321841 instanceof Error))
{var e__8616__auto____$1 = e321841;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321841;
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
}catch (e321840){if((e321840 instanceof Error))
{var e__8616__auto____$1 = e321840;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321840;
} else
{return null;
}
}
}} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321839;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__321847__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__321847 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__321847__delegate.call(this,renderer,delta,input_queue,args);};
G__321847.cljs$lang$maxFixedArity = 3;
G__321847.cljs$lang$applyTo = (function (arglist__321848){
var renderer = cljs.core.first(arglist__321848);
arglist__321848 = cljs.core.next(arglist__321848);
var delta = cljs.core.first(arglist__321848);
arglist__321848 = cljs.core.next(arglist__321848);
var input_queue = cljs.core.first(arglist__321848);
var args = cljs.core.rest(arglist__321848);
return G__321847__delegate(renderer,delta,input_queue,args);
});
G__321847.cljs$core$IFn$_invoke$arity$variadic = G__321847__delegate;
return G__321847;
})()
);
foundation.app.render.node_update = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__321850,input_queue,parent_id){var vec__321851 = p__321850;var _ = cljs.core.nth.call(null,vec__321851,0,null);var path = cljs.core.nth.call(null,vec__321851,1,null);var ___$1 = cljs.core.nth.call(null,vec__321851,2,null);var ___$2 = cljs.core.nth.call(null,vec__321851,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__321849_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__321849_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__321852__delegate = function (args){return null;
};
var G__321852 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__321852__delegate.call(this,args);};
G__321852.cljs$lang$maxFixedArity = 0;
G__321852.cljs$lang$applyTo = (function (arglist__321853){
var args = cljs.core.seq(arglist__321853);
return G__321852__delegate(args);
});
G__321852.cljs$core$IFn$_invoke$arity$variadic = G__321852__delegate;
return G__321852;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__321855,input_queue,id){var vec__321856 = p__321855;var _ = cljs.core.nth.call(null,vec__321856,0,null);var path = cljs.core.nth.call(null,vec__321856,1,null);var ___$1 = cljs.core.nth.call(null,vec__321856,2,null);var ___$2 = cljs.core.nth.call(null,vec__321856,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__321854_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__321854_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__321857__delegate = function (args){return null;
};
var G__321857 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__321857__delegate.call(this,args);};
G__321857.cljs$lang$maxFixedArity = 0;
G__321857.cljs$lang$applyTo = (function (arglist__321858){
var args = cljs.core.seq(arglist__321858);
return G__321857__delegate(args);
});
G__321857.cljs$core$IFn$_invoke$arity$variadic = G__321857__delegate;
return G__321857;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__321860,id,message){var vec__321861 = p__321860;var _ = cljs.core.nth.call(null,vec__321861,0,null);var path = cljs.core.nth.call(null,vec__321861,1,null);var ___$1 = cljs.core.nth.call(null,vec__321861,2,null);var ___$2 = cljs.core.nth.call(null,vec__321861,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__321859_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__321859_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__321862__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__321862 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__321862__delegate.call(this,args);};
G__321862.cljs$lang$maxFixedArity = 0;
G__321862.cljs$lang$applyTo = (function (arglist__321863){
var args = cljs.core.seq(arglist__321863);
return G__321862__delegate(args);
});
G__321862.cljs$core$IFn$_invoke$arity$variadic = G__321862__delegate;
return G__321862;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj321865 = {};return obj321865;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__321866_SHARP_){return cljs.core.get.call(null,n,p1__321866_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__321871 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__321872 = null;var count__321873 = 0;var i__321874 = 0;while(true){
if((i__321874 < count__321873))
{var f = cljs.core._nth.call(null,chunk__321872,i__321874);f.call(null);
{
var G__321875 = seq__321871;
var G__321876 = chunk__321872;
var G__321877 = count__321873;
var G__321878 = (i__321874 + 1);
seq__321871 = G__321875;
chunk__321872 = G__321876;
count__321873 = G__321877;
i__321874 = G__321878;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__321871);if(temp__4092__auto__)
{var seq__321871__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__321871__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__321871__$1);{
var G__321879 = cljs.core.chunk_rest.call(null,seq__321871__$1);
var G__321880 = c__14549__auto__;
var G__321881 = cljs.core.count.call(null,c__14549__auto__);
var G__321882 = 0;
seq__321871 = G__321879;
chunk__321872 = G__321880;
count__321873 = G__321881;
i__321874 = G__321882;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__321871__$1);f.call(null);
{
var G__321883 = cljs.core.next.call(null,seq__321871__$1);
var G__321884 = null;
var G__321885 = 0;
var G__321886 = 0;
seq__321871 = G__321883;
chunk__321872 = G__321884;
count__321873 = G__321885;
i__321874 = G__321886;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;var h__14236__auto__ = self__.__hash;if(!((h__14236__auto__ == null)))
{return h__14236__auto__;
} else
{var h__14236__auto____$1 = cljs.core.hash_imap.call(null,this__14382__auto____$1);self__.__hash = h__14236__auto____$1;
return h__14236__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14387__auto__,k__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;return cljs.core._lookup.call(null,this__14387__auto____$1,k__14388__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k321888,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k321888,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k321888,else__14390__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__321887){var self__ = this;
var this__14394__auto____$1 = this;var pred__321890 = cljs.core.keyword_identical_QMARK_;var expr__321891 = k__14395__auto__;if(cljs.core.truth_(pred__321890.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__321891)))
{return (new foundation.app.render.DomRenderer(G__321887,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__321887),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14401__auto__,writer__14402__auto__,opts__14403__auto__){var self__ = this;
var this__14401__auto____$1 = this;var pr_pair__14404__auto__ = (function (keyval__14405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,cljs.core.pr_writer,""," ","",opts__14403__auto__,keyval__14405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,pr_pair__14404__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14403__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14392__auto__,entry__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14393__auto__))
{return cljs.core._assoc.call(null,this__14392__auto____$1,cljs.core._nth.call(null,entry__14393__auto__,0),cljs.core._nth.call(null,entry__14393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14392__auto____$1,entry__14393__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14399__auto__){var self__ = this;
var this__14399__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14391__auto__){var self__ = this;
var this__14391__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14383__auto__,other__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;if(cljs.core.truth_((function (){var and__13813__auto__ = other__14384__auto__;if(cljs.core.truth_(and__13813__auto__))
{return ((this__14383__auto____$1.constructor === other__14384__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14383__auto____$1,other__14384__auto__));
} else
{return and__13813__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__321887){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__321887,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14385__auto__){var self__ = this;
var this__14385__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14396__auto__,k__14397__auto__){var self__ = this;
var this__14396__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14396__auto____$1),self__.__meta),k__14397__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14397__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14421__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14421__auto__,writer__14422__auto__){return cljs.core._write.call(null,writer__14422__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__321889){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__321889),null,cljs.core.dissoc.call(null,G__321889,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18838__auto___321939 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_321927){var state_val_321928 = (state_321927[1]);if((state_val_321928 === 4))
{var inst_321919 = (state_321927[2]);var inst_321920 = cljs.core.nth.call(null,inst_321919,0,null);var inst_321921 = cljs.core.nth.call(null,inst_321919,1,null);var inst_321922 = foundation.app.render.node_create.call(null,renderer,inst_321919,input_queue);var state_321927__$1 = (function (){var statearr_321929 = state_321927;(statearr_321929[7] = inst_321920);
(statearr_321929[8] = inst_321921);
(statearr_321929[9] = inst_321922);
return statearr_321929;
})();var statearr_321930_321940 = state_321927__$1;(statearr_321930_321940[2] = null);
(statearr_321930_321940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_321928 === 3))
{var inst_321925 = (state_321927[2]);var state_321927__$1 = state_321927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_321927__$1,inst_321925);
} else
{if((state_val_321928 === 2))
{var state_321927__$1 = state_321927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_321927__$1,4,render_queue);
} else
{if((state_val_321928 === 1))
{var state_321927__$1 = state_321927;var statearr_321931_321941 = state_321927__$1;(statearr_321931_321941[2] = null);
(statearr_321931_321941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_321935 = (new Array(10));(statearr_321935[0] = state_machine__18769__auto__);
(statearr_321935[1] = 1);
return statearr_321935;
});
var state_machine__18769__auto____1 = (function (state_321927){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_321927);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e321936){if((e321936 instanceof Object))
{var ex__18772__auto__ = e321936;var statearr_321937_321942 = state_321927;(statearr_321937_321942[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_321927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e321936;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__321943 = state_321927;
state_321927 = G__321943;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_321927){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_321927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_321938 = f__18839__auto__.call(null);(statearr_321938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___321939);
return statearr_321938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__321948 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__321949 = null;var count__321950 = 0;var i__321951 = 0;while(true){
if((i__321951 < count__321950))
{var message = cljs.core._nth.call(null,chunk__321949,i__321951);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__321952 = seq__321948;
var G__321953 = chunk__321949;
var G__321954 = count__321950;
var G__321955 = (i__321951 + 1);
seq__321948 = G__321952;
chunk__321949 = G__321953;
count__321950 = G__321954;
i__321951 = G__321955;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__321948);if(temp__4092__auto__)
{var seq__321948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__321948__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__321948__$1);{
var G__321956 = cljs.core.chunk_rest.call(null,seq__321948__$1);
var G__321957 = c__14549__auto__;
var G__321958 = cljs.core.count.call(null,c__14549__auto__);
var G__321959 = 0;
seq__321948 = G__321956;
chunk__321949 = G__321957;
count__321950 = G__321958;
i__321951 = G__321959;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__321948__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__321960 = cljs.core.next.call(null,seq__321948__$1);
var G__321961 = null;
var G__321962 = 0;
var G__321963 = 0;
seq__321948 = G__321960;
chunk__321949 = G__321961;
count__321950 = G__321962;
i__321951 = G__321963;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__321974){var vec__321975 = p__321974;var op = cljs.core.nth.call(null,vec__321975,0,null);var path = cljs.core.nth.call(null,vec__321975,1,null);var _ = cljs.core.nth.call(null,vec__321975,2,null);var ___$1 = cljs.core.nth.call(null,vec__321975,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__321976 = cljs.core.seq.call(null,deltas__$1);var chunk__321977 = null;var count__321978 = 0;var i__321979 = 0;while(true){
if((i__321979 < count__321978))
{var d = cljs.core._nth.call(null,chunk__321977,i__321979);var vec__321980_321984 = d;var op_321985 = cljs.core.nth.call(null,vec__321980_321984,0,null);var path_321986 = cljs.core.nth.call(null,vec__321980_321984,1,null);var id_321987 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_321986);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_321986);
}
})();var pid_321988 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_321986);var G__321981_321989 = op_321985;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__321981_321989))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_321987);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__321981_321989))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_321987);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__321981_321989))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_321987);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__321981_321989))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_321988,id_321987);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_321988,id_321987);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__321981_321989))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_321988,id_321987);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__321981_321989))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_321988,id_321987);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_321985)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__321990 = seq__321976;
var G__321991 = chunk__321977;
var G__321992 = count__321978;
var G__321993 = (i__321979 + 1);
seq__321976 = G__321990;
chunk__321977 = G__321991;
count__321978 = G__321992;
i__321979 = G__321993;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__321976);if(temp__4092__auto__)
{var seq__321976__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__321976__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__321976__$1);{
var G__321994 = cljs.core.chunk_rest.call(null,seq__321976__$1);
var G__321995 = c__14549__auto__;
var G__321996 = cljs.core.count.call(null,c__14549__auto__);
var G__321997 = 0;
seq__321976 = G__321994;
chunk__321977 = G__321995;
count__321978 = G__321996;
i__321979 = G__321997;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__321976__$1);var vec__321982_321998 = d;var op_321999 = cljs.core.nth.call(null,vec__321982_321998,0,null);var path_322000 = cljs.core.nth.call(null,vec__321982_321998,1,null);var id_322001 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_322000);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_322000);
}
})();var pid_322002 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_322000);var G__321983_322003 = op_321999;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__321983_322003))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_322001);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__321983_322003))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_322001);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__321983_322003))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_322001);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__321983_322003))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_322002,id_322001);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_322002,id_322001);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__321983_322003))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_322002,id_322001);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__321983_322003))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_322002,id_322001);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_321999)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__322004 = cljs.core.next.call(null,seq__321976__$1);
var G__322005 = null;
var G__322006 = 0;
var G__322007 = 0;
seq__321976 = G__322004;
chunk__321977 = G__322005;
count__321978 = G__322006;
i__321979 = G__322007;
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