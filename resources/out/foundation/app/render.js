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
foundation.app.render.node_create = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__311135,input_queue,parent_id,id){var vec__311136 = p__311135;var _ = cljs.core.nth.call(null,vec__311136,0,null);var path = cljs.core.nth.call(null,vec__311136,1,null);var ___$1 = cljs.core.nth.call(null,vec__311136,2,null);var ___$2 = cljs.core.nth.call(null,vec__311136,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__311134_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__311134_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_311137 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_311137)) && ((cljs.core.count.call(null,ocr_311137) === 2)))
{try{var ocr_311137_0__311139 = cljs.core.nth.call(null,ocr_311137,0);if((cljs.core.vector_QMARK_.call(null,ocr_311137_0__311139)) && ((cljs.core.count.call(null,ocr_311137_0__311139) === 1)))
{try{var ocr_311137_0__311139_0__311141 = cljs.core.nth.call(null,ocr_311137_0__311139,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_311137_0__311139_0__311141,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_311137_1__311140 = cljs.core.nth.call(null,ocr_311137,1);if((cljs.core.vector_QMARK_.call(null,ocr_311137_1__311140)) && ((cljs.core.count.call(null,ocr_311137_1__311140) === 1)))
{try{var ocr_311137_1__311140_0__311142 = cljs.core.nth.call(null,ocr_311137_1__311140,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_311137_1__311140_0__311142,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e311152){if((e311152 instanceof Error))
{var e__8616__auto__ = e311152;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311152;
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
}catch (e311151){if((e311151 instanceof Error))
{var e__8616__auto__ = e311151;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311151;
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
}catch (e311150){if((e311150 instanceof Error))
{var e__8616__auto__ = e311150;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311150;
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
}catch (e311149){if((e311149 instanceof Error))
{var e__8616__auto__ = e311149;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311149;
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
}catch (e311145){if((e311145 instanceof Error))
{var e__8616__auto__ = e311145;if((e__8616__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_311137)) && ((cljs.core.count.call(null,ocr_311137) === 1)))
{try{var ocr_311137_0__311143 = cljs.core.nth.call(null,ocr_311137,0);if((cljs.core.vector_QMARK_.call(null,ocr_311137_0__311143)) && ((cljs.core.count.call(null,ocr_311137_0__311143) === 1)))
{try{var ocr_311137_0__311143_0__311144 = cljs.core.nth.call(null,ocr_311137_0__311143,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_311137_0__311143_0__311144,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_311137_0__311143_0__311144,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e311148){if((e311148 instanceof Error))
{var e__8616__auto____$1 = e311148;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311148;
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
}catch (e311147){if((e311147 instanceof Error))
{var e__8616__auto____$1 = e311147;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311147;
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
}catch (e311146){if((e311146 instanceof Error))
{var e__8616__auto____$1 = e311146;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311146;
} else
{return null;
}
}
}} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311145;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__311153__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__311153 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__311153__delegate.call(this,renderer,delta,input_queue,args);};
G__311153.cljs$lang$maxFixedArity = 3;
G__311153.cljs$lang$applyTo = (function (arglist__311154){
var renderer = cljs.core.first(arglist__311154);
arglist__311154 = cljs.core.next(arglist__311154);
var delta = cljs.core.first(arglist__311154);
arglist__311154 = cljs.core.next(arglist__311154);
var input_queue = cljs.core.first(arglist__311154);
var args = cljs.core.rest(arglist__311154);
return G__311153__delegate(renderer,delta,input_queue,args);
});
G__311153.cljs$core$IFn$_invoke$arity$variadic = G__311153__delegate;
return G__311153;
})()
);
foundation.app.render.node_update = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__311156,input_queue,parent_id){var vec__311157 = p__311156;var _ = cljs.core.nth.call(null,vec__311157,0,null);var path = cljs.core.nth.call(null,vec__311157,1,null);var ___$1 = cljs.core.nth.call(null,vec__311157,2,null);var ___$2 = cljs.core.nth.call(null,vec__311157,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__311155_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__311155_SHARP_);
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
var G__311158__delegate = function (args){return null;
};
var G__311158 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__311158__delegate.call(this,args);};
G__311158.cljs$lang$maxFixedArity = 0;
G__311158.cljs$lang$applyTo = (function (arglist__311159){
var args = cljs.core.seq(arglist__311159);
return G__311158__delegate(args);
});
G__311158.cljs$core$IFn$_invoke$arity$variadic = G__311158__delegate;
return G__311158;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__311161,input_queue,id){var vec__311162 = p__311161;var _ = cljs.core.nth.call(null,vec__311162,0,null);var path = cljs.core.nth.call(null,vec__311162,1,null);var ___$1 = cljs.core.nth.call(null,vec__311162,2,null);var ___$2 = cljs.core.nth.call(null,vec__311162,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__311160_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__311160_SHARP_);
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
var G__311163__delegate = function (args){return null;
};
var G__311163 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__311163__delegate.call(this,args);};
G__311163.cljs$lang$maxFixedArity = 0;
G__311163.cljs$lang$applyTo = (function (arglist__311164){
var args = cljs.core.seq(arglist__311164);
return G__311163__delegate(args);
});
G__311163.cljs$core$IFn$_invoke$arity$variadic = G__311163__delegate;
return G__311163;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__311166,id,message){var vec__311167 = p__311166;var _ = cljs.core.nth.call(null,vec__311167,0,null);var path = cljs.core.nth.call(null,vec__311167,1,null);var ___$1 = cljs.core.nth.call(null,vec__311167,2,null);var ___$2 = cljs.core.nth.call(null,vec__311167,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__311165_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__311165_SHARP_);
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
var G__311168__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__311168 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__311168__delegate.call(this,args);};
G__311168.cljs$lang$maxFixedArity = 0;
G__311168.cljs$lang$applyTo = (function (arglist__311169){
var args = cljs.core.seq(arglist__311169);
return G__311168__delegate(args);
});
G__311168.cljs$core$IFn$_invoke$arity$variadic = G__311168__delegate;
return G__311168;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj311171 = {};return obj311171;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__311172_SHARP_){return cljs.core.get.call(null,n,p1__311172_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__311177 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__311178 = null;var count__311179 = 0;var i__311180 = 0;while(true){
if((i__311180 < count__311179))
{var f = cljs.core._nth.call(null,chunk__311178,i__311180);f.call(null);
{
var G__311181 = seq__311177;
var G__311182 = chunk__311178;
var G__311183 = count__311179;
var G__311184 = (i__311180 + 1);
seq__311177 = G__311181;
chunk__311178 = G__311182;
count__311179 = G__311183;
i__311180 = G__311184;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__311177);if(temp__4092__auto__)
{var seq__311177__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__311177__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__311177__$1);{
var G__311185 = cljs.core.chunk_rest.call(null,seq__311177__$1);
var G__311186 = c__14549__auto__;
var G__311187 = cljs.core.count.call(null,c__14549__auto__);
var G__311188 = 0;
seq__311177 = G__311185;
chunk__311178 = G__311186;
count__311179 = G__311187;
i__311180 = G__311188;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__311177__$1);f.call(null);
{
var G__311189 = cljs.core.next.call(null,seq__311177__$1);
var G__311190 = null;
var G__311191 = 0;
var G__311192 = 0;
seq__311177 = G__311189;
chunk__311178 = G__311190;
count__311179 = G__311191;
i__311180 = G__311192;
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
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k311194,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k311194,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k311194,else__14390__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__311193){var self__ = this;
var this__14394__auto____$1 = this;var pred__311196 = cljs.core.keyword_identical_QMARK_;var expr__311197 = k__14395__auto__;if(cljs.core.truth_(pred__311196.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__311197)))
{return (new foundation.app.render.DomRenderer(G__311193,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__311193),null));
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
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__311193){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__311193,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__311195){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__311195),null,cljs.core.dissoc.call(null,G__311195,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18838__auto___311245 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_311233){var state_val_311234 = (state_311233[1]);if((state_val_311234 === 4))
{var inst_311225 = (state_311233[2]);var inst_311226 = cljs.core.nth.call(null,inst_311225,0,null);var inst_311227 = cljs.core.nth.call(null,inst_311225,1,null);var inst_311228 = foundation.app.render.node_create.call(null,renderer,inst_311225,input_queue);var state_311233__$1 = (function (){var statearr_311235 = state_311233;(statearr_311235[7] = inst_311226);
(statearr_311235[8] = inst_311227);
(statearr_311235[9] = inst_311228);
return statearr_311235;
})();var statearr_311236_311246 = state_311233__$1;(statearr_311236_311246[2] = null);
(statearr_311236_311246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311234 === 3))
{var inst_311231 = (state_311233[2]);var state_311233__$1 = state_311233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_311233__$1,inst_311231);
} else
{if((state_val_311234 === 2))
{var state_311233__$1 = state_311233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_311233__$1,4,render_queue);
} else
{if((state_val_311234 === 1))
{var state_311233__$1 = state_311233;var statearr_311237_311247 = state_311233__$1;(statearr_311237_311247[2] = null);
(statearr_311237_311247[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_311241 = (new Array(10));(statearr_311241[0] = state_machine__18769__auto__);
(statearr_311241[1] = 1);
return statearr_311241;
});
var state_machine__18769__auto____1 = (function (state_311233){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_311233);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e311242){if((e311242 instanceof Object))
{var ex__18772__auto__ = e311242;var statearr_311243_311248 = state_311233;(statearr_311243_311248[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_311233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311249 = state_311233;
state_311233 = G__311249;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_311233){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_311233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_311244 = f__18839__auto__.call(null);(statearr_311244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___311245);
return statearr_311244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__311254 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__311255 = null;var count__311256 = 0;var i__311257 = 0;while(true){
if((i__311257 < count__311256))
{var message = cljs.core._nth.call(null,chunk__311255,i__311257);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__311258 = seq__311254;
var G__311259 = chunk__311255;
var G__311260 = count__311256;
var G__311261 = (i__311257 + 1);
seq__311254 = G__311258;
chunk__311255 = G__311259;
count__311256 = G__311260;
i__311257 = G__311261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__311254);if(temp__4092__auto__)
{var seq__311254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__311254__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__311254__$1);{
var G__311262 = cljs.core.chunk_rest.call(null,seq__311254__$1);
var G__311263 = c__14549__auto__;
var G__311264 = cljs.core.count.call(null,c__14549__auto__);
var G__311265 = 0;
seq__311254 = G__311262;
chunk__311255 = G__311263;
count__311256 = G__311264;
i__311257 = G__311265;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__311254__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__311266 = cljs.core.next.call(null,seq__311254__$1);
var G__311267 = null;
var G__311268 = 0;
var G__311269 = 0;
seq__311254 = G__311266;
chunk__311255 = G__311267;
count__311256 = G__311268;
i__311257 = G__311269;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__311280){var vec__311281 = p__311280;var op = cljs.core.nth.call(null,vec__311281,0,null);var path = cljs.core.nth.call(null,vec__311281,1,null);var _ = cljs.core.nth.call(null,vec__311281,2,null);var ___$1 = cljs.core.nth.call(null,vec__311281,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__311282 = cljs.core.seq.call(null,deltas__$1);var chunk__311283 = null;var count__311284 = 0;var i__311285 = 0;while(true){
if((i__311285 < count__311284))
{var d = cljs.core._nth.call(null,chunk__311283,i__311285);var vec__311286_311290 = d;var op_311291 = cljs.core.nth.call(null,vec__311286_311290,0,null);var path_311292 = cljs.core.nth.call(null,vec__311286_311290,1,null);var id_311293 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_311292);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_311292);
}
})();var pid_311294 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_311292);var G__311287_311295 = op_311291;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__311287_311295))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_311293);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__311287_311295))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_311293);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__311287_311295))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_311293);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__311287_311295))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_311294,id_311293);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_311294,id_311293);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__311287_311295))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_311294,id_311293);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__311287_311295))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_311294,id_311293);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_311291)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__311296 = seq__311282;
var G__311297 = chunk__311283;
var G__311298 = count__311284;
var G__311299 = (i__311285 + 1);
seq__311282 = G__311296;
chunk__311283 = G__311297;
count__311284 = G__311298;
i__311285 = G__311299;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__311282);if(temp__4092__auto__)
{var seq__311282__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__311282__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__311282__$1);{
var G__311300 = cljs.core.chunk_rest.call(null,seq__311282__$1);
var G__311301 = c__14549__auto__;
var G__311302 = cljs.core.count.call(null,c__14549__auto__);
var G__311303 = 0;
seq__311282 = G__311300;
chunk__311283 = G__311301;
count__311284 = G__311302;
i__311285 = G__311303;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__311282__$1);var vec__311288_311304 = d;var op_311305 = cljs.core.nth.call(null,vec__311288_311304,0,null);var path_311306 = cljs.core.nth.call(null,vec__311288_311304,1,null);var id_311307 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_311306);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_311306);
}
})();var pid_311308 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_311306);var G__311289_311309 = op_311305;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__311289_311309))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_311307);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__311289_311309))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_311307);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__311289_311309))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_311307);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__311289_311309))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_311308,id_311307);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_311308,id_311307);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__311289_311309))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_311308,id_311307);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__311289_311309))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_311308,id_311307);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_311305)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__311310 = cljs.core.next.call(null,seq__311282__$1);
var G__311311 = null;
var G__311312 = 0;
var G__311313 = 0;
seq__311282 = G__311310;
chunk__311283 = G__311311;
count__311284 = G__311312;
i__311285 = G__311313;
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