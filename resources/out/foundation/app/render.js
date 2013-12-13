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
foundation.app.render.node_create = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__36792,input_queue,parent_id,id){var vec__36793 = p__36792;var _ = cljs.core.nth.call(null,vec__36793,0,null);var path = cljs.core.nth.call(null,vec__36793,1,null);var ___$1 = cljs.core.nth.call(null,vec__36793,2,null);var ___$2 = cljs.core.nth.call(null,vec__36793,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__36791_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__36791_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_36794 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_36794)) && ((cljs.core.count.call(null,ocr_36794) === 2)))
{try{var ocr_36794_0__36796 = cljs.core.nth.call(null,ocr_36794,0);if((cljs.core.vector_QMARK_.call(null,ocr_36794_0__36796)) && ((cljs.core.count.call(null,ocr_36794_0__36796) === 1)))
{try{var ocr_36794_0__36796_0__36798 = cljs.core.nth.call(null,ocr_36794_0__36796,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36794_0__36796_0__36798,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_36794_1__36797 = cljs.core.nth.call(null,ocr_36794,1);if((cljs.core.vector_QMARK_.call(null,ocr_36794_1__36797)) && ((cljs.core.count.call(null,ocr_36794_1__36797) === 1)))
{try{var ocr_36794_1__36797_0__36799 = cljs.core.nth.call(null,ocr_36794_1__36797,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36794_1__36797_0__36799,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e36809){if((e36809 instanceof Error))
{var e__8616__auto__ = e36809;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36809;
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
}catch (e36808){if((e36808 instanceof Error))
{var e__8616__auto__ = e36808;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36808;
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
}catch (e36807){if((e36807 instanceof Error))
{var e__8616__auto__ = e36807;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36807;
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
}catch (e36806){if((e36806 instanceof Error))
{var e__8616__auto__ = e36806;if((e__8616__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36806;
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
}catch (e36802){if((e36802 instanceof Error))
{var e__8616__auto__ = e36802;if((e__8616__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_36794)) && ((cljs.core.count.call(null,ocr_36794) === 1)))
{try{var ocr_36794_0__36800 = cljs.core.nth.call(null,ocr_36794,0);if((cljs.core.vector_QMARK_.call(null,ocr_36794_0__36800)) && ((cljs.core.count.call(null,ocr_36794_0__36800) === 1)))
{try{var ocr_36794_0__36800_0__36801 = cljs.core.nth.call(null,ocr_36794_0__36800,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36794_0__36800_0__36801,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36794_0__36800_0__36801,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e36805){if((e36805 instanceof Error))
{var e__8616__auto____$1 = e36805;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36805;
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
}catch (e36804){if((e36804 instanceof Error))
{var e__8616__auto____$1 = e36804;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36804;
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
}catch (e36803){if((e36803 instanceof Error))
{var e__8616__auto____$1 = e36803;if((e__8616__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8616__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36803;
} else
{return null;
}
}
}} else
{throw e__8616__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36802;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__36810__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__36810 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__36810__delegate.call(this,renderer,delta,input_queue,args);};
G__36810.cljs$lang$maxFixedArity = 3;
G__36810.cljs$lang$applyTo = (function (arglist__36811){
var renderer = cljs.core.first(arglist__36811);
arglist__36811 = cljs.core.next(arglist__36811);
var delta = cljs.core.first(arglist__36811);
arglist__36811 = cljs.core.next(arglist__36811);
var input_queue = cljs.core.first(arglist__36811);
var args = cljs.core.rest(arglist__36811);
return G__36810__delegate(renderer,delta,input_queue,args);
});
G__36810.cljs$core$IFn$_invoke$arity$variadic = G__36810__delegate;
return G__36810;
})()
);
foundation.app.render.node_update = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__36813,input_queue,parent_id){var vec__36814 = p__36813;var _ = cljs.core.nth.call(null,vec__36814,0,null);var path = cljs.core.nth.call(null,vec__36814,1,null);var ___$1 = cljs.core.nth.call(null,vec__36814,2,null);var ___$2 = cljs.core.nth.call(null,vec__36814,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__36812_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__36812_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__36815__delegate = function (args){return null;
};
var G__36815 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36815__delegate.call(this,args);};
G__36815.cljs$lang$maxFixedArity = 0;
G__36815.cljs$lang$applyTo = (function (arglist__36816){
var args = cljs.core.seq(arglist__36816);
return G__36815__delegate(args);
});
G__36815.cljs$core$IFn$_invoke$arity$variadic = G__36815__delegate;
return G__36815;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__36818,input_queue,id){var vec__36819 = p__36818;var _ = cljs.core.nth.call(null,vec__36819,0,null);var path = cljs.core.nth.call(null,vec__36819,1,null);var ___$1 = cljs.core.nth.call(null,vec__36819,2,null);var ___$2 = cljs.core.nth.call(null,vec__36819,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__36817_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__36817_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__36820__delegate = function (args){return null;
};
var G__36820 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36820__delegate.call(this,args);};
G__36820.cljs$lang$maxFixedArity = 0;
G__36820.cljs$lang$applyTo = (function (arglist__36821){
var args = cljs.core.seq(arglist__36821);
return G__36820__delegate(args);
});
G__36820.cljs$core$IFn$_invoke$arity$variadic = G__36820__delegate;
return G__36820;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__36823,id,message){var vec__36824 = p__36823;var _ = cljs.core.nth.call(null,vec__36824,0,null);var path = cljs.core.nth.call(null,vec__36824,1,null);var ___$1 = cljs.core.nth.call(null,vec__36824,2,null);var ___$2 = cljs.core.nth.call(null,vec__36824,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__36822_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__36822_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__36825__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__36825 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36825__delegate.call(this,args);};
G__36825.cljs$lang$maxFixedArity = 0;
G__36825.cljs$lang$applyTo = (function (arglist__36826){
var args = cljs.core.seq(arglist__36826);
return G__36825__delegate(args);
});
G__36825.cljs$core$IFn$_invoke$arity$variadic = G__36825__delegate;
return G__36825;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj36828 = {};return obj36828;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__36829_SHARP_){return cljs.core.get.call(null,n,p1__36829_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__36834 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__36835 = null;var count__36836 = 0;var i__36837 = 0;while(true){
if((i__36837 < count__36836))
{var f = cljs.core._nth.call(null,chunk__36835,i__36837);f.call(null);
{
var G__36838 = seq__36834;
var G__36839 = chunk__36835;
var G__36840 = count__36836;
var G__36841 = (i__36837 + 1);
seq__36834 = G__36838;
chunk__36835 = G__36839;
count__36836 = G__36840;
i__36837 = G__36841;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36834);if(temp__4092__auto__)
{var seq__36834__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36834__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__36834__$1);{
var G__36842 = cljs.core.chunk_rest.call(null,seq__36834__$1);
var G__36843 = c__14512__auto__;
var G__36844 = cljs.core.count.call(null,c__14512__auto__);
var G__36845 = 0;
seq__36834 = G__36842;
chunk__36835 = G__36843;
count__36836 = G__36844;
i__36837 = G__36845;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__36834__$1);f.call(null);
{
var G__36846 = cljs.core.next.call(null,seq__36834__$1);
var G__36847 = null;
var G__36848 = 0;
var G__36849 = 0;
seq__36834 = G__36846;
chunk__36835 = G__36847;
count__36836 = G__36848;
i__36837 = G__36849;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14345__auto__){var self__ = this;
var this__14345__auto____$1 = this;var h__14199__auto__ = self__.__hash;if(!((h__14199__auto__ == null)))
{return h__14199__auto__;
} else
{var h__14199__auto____$1 = cljs.core.hash_imap.call(null,this__14345__auto____$1);self__.__hash = h__14199__auto____$1;
return h__14199__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14350__auto__,k__14351__auto__){var self__ = this;
var this__14350__auto____$1 = this;return cljs.core._lookup.call(null,this__14350__auto____$1,k__14351__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14352__auto__,k36851,else__14353__auto__){var self__ = this;
var this__14352__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k36851,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k36851,else__14353__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14357__auto__,k__14358__auto__,G__36850){var self__ = this;
var this__14357__auto____$1 = this;var pred__36853 = cljs.core.keyword_identical_QMARK_;var expr__36854 = k__14358__auto__;if(cljs.core.truth_(pred__36853.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__36854)))
{return (new foundation.app.render.DomRenderer(G__36850,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14358__auto__,G__36850),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14364__auto__,writer__14365__auto__,opts__14366__auto__){var self__ = this;
var this__14364__auto____$1 = this;var pr_pair__14367__auto__ = (function (keyval__14368__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14365__auto__,cljs.core.pr_writer,""," ","",opts__14366__auto__,keyval__14368__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14365__auto__,pr_pair__14367__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14366__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14355__auto__,entry__14356__auto__){var self__ = this;
var this__14355__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14356__auto__))
{return cljs.core._assoc.call(null,this__14355__auto____$1,cljs.core._nth.call(null,entry__14356__auto__,0),cljs.core._nth.call(null,entry__14356__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14355__auto____$1,entry__14356__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14362__auto__){var self__ = this;
var this__14362__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14354__auto__){var self__ = this;
var this__14354__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14346__auto__,other__14347__auto__){var self__ = this;
var this__14346__auto____$1 = this;if(cljs.core.truth_((function (){var and__13776__auto__ = other__14347__auto__;if(cljs.core.truth_(and__13776__auto__))
{return ((this__14346__auto____$1.constructor === other__14347__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14346__auto____$1,other__14347__auto__));
} else
{return and__13776__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14349__auto__,G__36850){var self__ = this;
var this__14349__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__36850,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14348__auto__){var self__ = this;
var this__14348__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14359__auto__,k__14360__auto__){var self__ = this;
var this__14359__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14360__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14359__auto____$1),self__.__meta),k__14360__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14360__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14384__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14384__auto__,writer__14385__auto__){return cljs.core._write.call(null,writer__14385__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__36852){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__36852),null,cljs.core.dissoc.call(null,G__36852,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18801__auto___36902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_36890){var state_val_36891 = (state_36890[1]);if((state_val_36891 === 4))
{var inst_36882 = (state_36890[2]);var inst_36883 = cljs.core.nth.call(null,inst_36882,0,null);var inst_36884 = cljs.core.nth.call(null,inst_36882,1,null);var inst_36885 = foundation.app.render.node_create.call(null,renderer,inst_36882,input_queue);var state_36890__$1 = (function (){var statearr_36892 = state_36890;(statearr_36892[7] = inst_36883);
(statearr_36892[8] = inst_36885);
(statearr_36892[9] = inst_36884);
return statearr_36892;
})();var statearr_36893_36903 = state_36890__$1;(statearr_36893_36903[2] = null);
(statearr_36893_36903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36891 === 3))
{var inst_36888 = (state_36890[2]);var state_36890__$1 = state_36890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36890__$1,inst_36888);
} else
{if((state_val_36891 === 2))
{var state_36890__$1 = state_36890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36890__$1,4,render_queue);
} else
{if((state_val_36891 === 1))
{var state_36890__$1 = state_36890;var statearr_36894_36904 = state_36890__$1;(statearr_36894_36904[2] = null);
(statearr_36894_36904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_36898 = (new Array(10));(statearr_36898[0] = state_machine__18732__auto__);
(statearr_36898[1] = 1);
return statearr_36898;
});
var state_machine__18732__auto____1 = (function (state_36890){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_36890);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e36899){if((e36899 instanceof Object))
{var ex__18735__auto__ = e36899;var statearr_36900_36905 = state_36890;(statearr_36900_36905[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36906 = state_36890;
state_36890 = G__36906;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_36890){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_36890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_36901 = f__18802__auto__.call(null);(statearr_36901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___36902);
return statearr_36901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__36911 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__36912 = null;var count__36913 = 0;var i__36914 = 0;while(true){
if((i__36914 < count__36913))
{var message = cljs.core._nth.call(null,chunk__36912,i__36914);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__36915 = seq__36911;
var G__36916 = chunk__36912;
var G__36917 = count__36913;
var G__36918 = (i__36914 + 1);
seq__36911 = G__36915;
chunk__36912 = G__36916;
count__36913 = G__36917;
i__36914 = G__36918;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36911);if(temp__4092__auto__)
{var seq__36911__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36911__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__36911__$1);{
var G__36919 = cljs.core.chunk_rest.call(null,seq__36911__$1);
var G__36920 = c__14512__auto__;
var G__36921 = cljs.core.count.call(null,c__14512__auto__);
var G__36922 = 0;
seq__36911 = G__36919;
chunk__36912 = G__36920;
count__36913 = G__36921;
i__36914 = G__36922;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__36911__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__36923 = cljs.core.next.call(null,seq__36911__$1);
var G__36924 = null;
var G__36925 = 0;
var G__36926 = 0;
seq__36911 = G__36923;
chunk__36912 = G__36924;
count__36913 = G__36925;
i__36914 = G__36926;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__36937){var vec__36938 = p__36937;var op = cljs.core.nth.call(null,vec__36938,0,null);var path = cljs.core.nth.call(null,vec__36938,1,null);var _ = cljs.core.nth.call(null,vec__36938,2,null);var ___$1 = cljs.core.nth.call(null,vec__36938,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__36939 = cljs.core.seq.call(null,deltas__$1);var chunk__36940 = null;var count__36941 = 0;var i__36942 = 0;while(true){
if((i__36942 < count__36941))
{var d = cljs.core._nth.call(null,chunk__36940,i__36942);var vec__36943_36947 = d;var op_36948 = cljs.core.nth.call(null,vec__36943_36947,0,null);var path_36949 = cljs.core.nth.call(null,vec__36943_36947,1,null);var id_36950 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_36949);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_36949);
}
})();var pid_36951 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_36949);var G__36944_36952 = op_36948;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__36944_36952))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_36950);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__36944_36952))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_36950);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__36944_36952))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_36950);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__36944_36952))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_36950);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__36944_36952))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_36950);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__36944_36952))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_36951,id_36950);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_36948)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__36953 = seq__36939;
var G__36954 = chunk__36940;
var G__36955 = count__36941;
var G__36956 = (i__36942 + 1);
seq__36939 = G__36953;
chunk__36940 = G__36954;
count__36941 = G__36955;
i__36942 = G__36956;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36939);if(temp__4092__auto__)
{var seq__36939__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36939__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__36939__$1);{
var G__36957 = cljs.core.chunk_rest.call(null,seq__36939__$1);
var G__36958 = c__14512__auto__;
var G__36959 = cljs.core.count.call(null,c__14512__auto__);
var G__36960 = 0;
seq__36939 = G__36957;
chunk__36940 = G__36958;
count__36941 = G__36959;
i__36942 = G__36960;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__36939__$1);var vec__36945_36961 = d;var op_36962 = cljs.core.nth.call(null,vec__36945_36961,0,null);var path_36963 = cljs.core.nth.call(null,vec__36945_36961,1,null);var id_36964 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_36963);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_36963);
}
})();var pid_36965 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_36963);var G__36946_36966 = op_36962;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__36946_36966))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_36964);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__36946_36966))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_36964);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__36946_36966))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_36964);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__36946_36966))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_36964);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__36946_36966))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_36964);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__36946_36966))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_36965,id_36964);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_36962)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__36967 = cljs.core.next.call(null,seq__36939__$1);
var G__36968 = null;
var G__36969 = 0;
var G__36970 = 0;
seq__36939 = G__36967;
chunk__36940 = G__36968;
count__36941 = G__36969;
i__36942 = G__36970;
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