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
foundation.app.render.node_create = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__369721,input_queue,parent_id,id){var vec__369722 = p__369721;var _ = cljs.core.nth.call(null,vec__369722,0,null);var path = cljs.core.nth.call(null,vec__369722,1,null);var ___$1 = cljs.core.nth.call(null,vec__369722,2,null);var ___$2 = cljs.core.nth.call(null,vec__369722,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__369720_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__369720_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{var ocr_369723 = cljs.core.vec.call(null,cljs.core.disj.call(null,matching,cljs.core.PersistentVector.EMPTY));try{if((cljs.core.vector_QMARK_.call(null,ocr_369723)) && ((cljs.core.count.call(null,ocr_369723) === 2)))
{try{var ocr_369723_0__369725 = cljs.core.nth.call(null,ocr_369723,0);if((cljs.core.vector_QMARK_.call(null,ocr_369723_0__369725)) && ((cljs.core.count.call(null,ocr_369723_0__369725) === 1)))
{try{var ocr_369723_0__369725_0__369727 = cljs.core.nth.call(null,ocr_369723_0__369725,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_369723_0__369725_0__369727,new cljs.core.Keyword(null,"**","**",1013905586)))
{try{var ocr_369723_1__369726 = cljs.core.nth.call(null,ocr_369723,1);if((cljs.core.vector_QMARK_.call(null,ocr_369723_1__369726)) && ((cljs.core.count.call(null,ocr_369723_1__369726) === 1)))
{try{var ocr_369723_1__369726_0__369728 = cljs.core.nth.call(null,ocr_369723_1__369726,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_369723_1__369726_0__369728,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e369738){if((e369738 instanceof Error))
{var e__8772__auto__ = e369738;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369738;
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
}catch (e369737){if((e369737 instanceof Error))
{var e__8772__auto__ = e369737;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369737;
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
}catch (e369736){if((e369736 instanceof Error))
{var e__8772__auto__ = e369736;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369736;
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
}catch (e369735){if((e369735 instanceof Error))
{var e__8772__auto__ = e369735;if((e__8772__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369735;
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
}catch (e369731){if((e369731 instanceof Error))
{var e__8772__auto__ = e369731;if((e__8772__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_369723)) && ((cljs.core.count.call(null,ocr_369723) === 1)))
{try{var ocr_369723_0__369729 = cljs.core.nth.call(null,ocr_369723,0);if((cljs.core.vector_QMARK_.call(null,ocr_369723_0__369729)) && ((cljs.core.count.call(null,ocr_369723_0__369729) === 1)))
{try{var ocr_369723_0__369729_0__369730 = cljs.core.nth.call(null,ocr_369723_0__369729,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_369723_0__369729_0__369730,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_369723_0__369729_0__369730,new cljs.core.Keyword(null,"*","*",1013904284)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e369734){if((e369734 instanceof Error))
{var e__8772__auto____$1 = e369734;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369734;
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
}catch (e369733){if((e369733 instanceof Error))
{var e__8772__auto____$1 = e369733;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369733;
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
}catch (e369732){if((e369732 instanceof Error))
{var e__8772__auto____$1 = e369732;if((e__8772__auto____$1 === cljs.core.match.backtrack))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{throw e__8772__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369732;
} else
{return null;
}
}
}} else
{throw e__8772__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369731;
} else
{return null;
}
}
}}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__369739__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__369739 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__369739__delegate.call(this,renderer,delta,input_queue,args);};
G__369739.cljs$lang$maxFixedArity = 3;
G__369739.cljs$lang$applyTo = (function (arglist__369740){
var renderer = cljs.core.first(arglist__369740);
arglist__369740 = cljs.core.next(arglist__369740);
var delta = cljs.core.first(arglist__369740);
arglist__369740 = cljs.core.next(arglist__369740);
var input_queue = cljs.core.first(arglist__369740);
var args = cljs.core.rest(arglist__369740);
return G__369739__delegate(renderer,delta,input_queue,args);
});
G__369739.cljs$core$IFn$_invoke$arity$variadic = G__369739__delegate;
return G__369739;
})()
);
foundation.app.render.node_update = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__369742,input_queue,parent_id){var vec__369743 = p__369742;var _ = cljs.core.nth.call(null,vec__369743,0,null);var path = cljs.core.nth.call(null,vec__369743,1,null);var ___$1 = cljs.core.nth.call(null,vec__369743,2,null);var ___$2 = cljs.core.nth.call(null,vec__369743,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__369741_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__369741_SHARP_);
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
var G__369744__delegate = function (args){return null;
};
var G__369744 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__369744__delegate.call(this,args);};
G__369744.cljs$lang$maxFixedArity = 0;
G__369744.cljs$lang$applyTo = (function (arglist__369745){
var args = cljs.core.seq(arglist__369745);
return G__369744__delegate(args);
});
G__369744.cljs$core$IFn$_invoke$arity$variadic = G__369744__delegate;
return G__369744;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__369747,input_queue,id){var vec__369748 = p__369747;var _ = cljs.core.nth.call(null,vec__369748,0,null);var path = cljs.core.nth.call(null,vec__369748,1,null);var ___$1 = cljs.core.nth.call(null,vec__369748,2,null);var ___$2 = cljs.core.nth.call(null,vec__369748,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__369746_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__369746_SHARP_);
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
var G__369749__delegate = function (args){return null;
};
var G__369749 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__369749__delegate.call(this,args);};
G__369749.cljs$lang$maxFixedArity = 0;
G__369749.cljs$lang$applyTo = (function (arglist__369750){
var args = cljs.core.seq(arglist__369750);
return G__369749__delegate(args);
});
G__369749.cljs$core$IFn$_invoke$arity$variadic = G__369749__delegate;
return G__369749;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__369752,id,message){var vec__369753 = p__369752;var _ = cljs.core.nth.call(null,vec__369753,0,null);var path = cljs.core.nth.call(null,vec__369753,1,null);var ___$1 = cljs.core.nth.call(null,vec__369753,2,null);var ___$2 = cljs.core.nth.call(null,vec__369753,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__369751_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__369751_SHARP_);
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
var G__369754__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__369754 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__369754__delegate.call(this,args);};
G__369754.cljs$lang$maxFixedArity = 0;
G__369754.cljs$lang$applyTo = (function (arglist__369755){
var args = cljs.core.seq(arglist__369755);
return G__369754__delegate(args);
});
G__369754.cljs$core$IFn$_invoke$arity$variadic = G__369754__delegate;
return G__369754;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj369757 = {};return obj369757;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__369758_SHARP_){return cljs.core.get.call(null,n,p1__369758_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__369763 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__369764 = null;var count__369765 = 0;var i__369766 = 0;while(true){
if((i__369766 < count__369765))
{var f = cljs.core._nth.call(null,chunk__369764,i__369766);f.call(null);
{
var G__369767 = seq__369763;
var G__369768 = chunk__369764;
var G__369769 = count__369765;
var G__369770 = (i__369766 + 1);
seq__369763 = G__369767;
chunk__369764 = G__369768;
count__369765 = G__369769;
i__369766 = G__369770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__369763);if(temp__4092__auto__)
{var seq__369763__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__369763__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__369763__$1);{
var G__369771 = cljs.core.chunk_rest.call(null,seq__369763__$1);
var G__369772 = c__14708__auto__;
var G__369773 = cljs.core.count.call(null,c__14708__auto__);
var G__369774 = 0;
seq__369763 = G__369771;
chunk__369764 = G__369772;
count__369765 = G__369773;
i__369766 = G__369774;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__369763__$1);f.call(null);
{
var G__369775 = cljs.core.next.call(null,seq__369763__$1);
var G__369776 = null;
var G__369777 = 0;
var G__369778 = 0;
seq__369763 = G__369775;
chunk__369764 = G__369776;
count__369765 = G__369777;
i__369766 = G__369778;
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
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14548__auto__,k369780,else__14549__auto__){var self__ = this;
var this__14548__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k369780,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k369780,else__14549__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14553__auto__,k__14554__auto__,G__369779){var self__ = this;
var this__14553__auto____$1 = this;var pred__369782 = cljs.core.keyword_identical_QMARK_;var expr__369783 = k__14554__auto__;if(cljs.core.truth_(pred__369782.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__369783)))
{return (new foundation.app.render.DomRenderer(G__369779,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14554__auto__,G__369779),null));
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
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14545__auto__,G__369779){var self__ = this;
var this__14545__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__369779,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__369781){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__369781),null,cljs.core.dissoc.call(null,G__369781,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__18289__auto___369831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_369819){var state_val_369820 = (state_369819[1]);if((state_val_369820 === 4))
{var inst_369811 = (state_369819[2]);var inst_369812 = cljs.core.nth.call(null,inst_369811,0,null);var inst_369813 = cljs.core.nth.call(null,inst_369811,1,null);var inst_369814 = foundation.app.render.node_create.call(null,renderer,inst_369811,input_queue);var state_369819__$1 = (function (){var statearr_369821 = state_369819;(statearr_369821[7] = inst_369812);
(statearr_369821[8] = inst_369813);
(statearr_369821[9] = inst_369814);
return statearr_369821;
})();var statearr_369822_369832 = state_369819__$1;(statearr_369822_369832[2] = null);
(statearr_369822_369832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_369820 === 3))
{var inst_369817 = (state_369819[2]);var state_369819__$1 = state_369819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_369819__$1,inst_369817);
} else
{if((state_val_369820 === 2))
{var state_369819__$1 = state_369819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_369819__$1,4,render_queue);
} else
{if((state_val_369820 === 1))
{var state_369819__$1 = state_369819;var statearr_369823_369833 = state_369819__$1;(statearr_369823_369833[2] = null);
(statearr_369823_369833[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_369827 = [null,null,null,null,null,null,null,null,null,null];(statearr_369827[0] = state_machine__18220__auto__);
(statearr_369827[1] = 1);
return statearr_369827;
});
var state_machine__18220__auto____1 = (function (state_369819){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_369819);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e369828){if((e369828 instanceof Object))
{var ex__18223__auto__ = e369828;var statearr_369829_369834 = state_369819;(statearr_369829_369834[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_369819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e369828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__369835 = state_369819;
state_369819 = G__369835;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_369819){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_369819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_369830 = f__18290__auto__.call(null);(statearr_369830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___369831);
return statearr_369830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__369840 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__369841 = null;var count__369842 = 0;var i__369843 = 0;while(true){
if((i__369843 < count__369842))
{var message = cljs.core._nth.call(null,chunk__369841,i__369843);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__369844 = seq__369840;
var G__369845 = chunk__369841;
var G__369846 = count__369842;
var G__369847 = (i__369843 + 1);
seq__369840 = G__369844;
chunk__369841 = G__369845;
count__369842 = G__369846;
i__369843 = G__369847;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__369840);if(temp__4092__auto__)
{var seq__369840__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__369840__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__369840__$1);{
var G__369848 = cljs.core.chunk_rest.call(null,seq__369840__$1);
var G__369849 = c__14708__auto__;
var G__369850 = cljs.core.count.call(null,c__14708__auto__);
var G__369851 = 0;
seq__369840 = G__369848;
chunk__369841 = G__369849;
count__369842 = G__369850;
i__369843 = G__369851;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__369840__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__369852 = cljs.core.next.call(null,seq__369840__$1);
var G__369853 = null;
var G__369854 = 0;
var G__369855 = 0;
seq__369840 = G__369852;
chunk__369841 = G__369853;
count__369842 = G__369854;
i__369843 = G__369855;
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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__369866){var vec__369867 = p__369866;var op = cljs.core.nth.call(null,vec__369867,0,null);var path = cljs.core.nth.call(null,vec__369867,1,null);var _ = cljs.core.nth.call(null,vec__369867,2,null);var ___$1 = cljs.core.nth.call(null,vec__369867,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__369868 = cljs.core.seq.call(null,deltas__$1);var chunk__369869 = null;var count__369870 = 0;var i__369871 = 0;while(true){
if((i__369871 < count__369870))
{var d = cljs.core._nth.call(null,chunk__369869,i__369871);var vec__369872_369876 = d;var op_369877 = cljs.core.nth.call(null,vec__369872_369876,0,null);var path_369878 = cljs.core.nth.call(null,vec__369872_369876,1,null);var id_369879 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_369878);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_369878);
}
})();var pid_369880 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_369878);var G__369873_369881 = op_369877;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__369873_369881))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_369879);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__369873_369881))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_369879);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__369873_369881))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_369879);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__369873_369881))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_369880,id_369879);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_369880,id_369879);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__369873_369881))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_369880,id_369879);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__369873_369881))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_369880,id_369879);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_369877)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__369882 = seq__369868;
var G__369883 = chunk__369869;
var G__369884 = count__369870;
var G__369885 = (i__369871 + 1);
seq__369868 = G__369882;
chunk__369869 = G__369883;
count__369870 = G__369884;
i__369871 = G__369885;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__369868);if(temp__4092__auto__)
{var seq__369868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__369868__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__369868__$1);{
var G__369886 = cljs.core.chunk_rest.call(null,seq__369868__$1);
var G__369887 = c__14708__auto__;
var G__369888 = cljs.core.count.call(null,c__14708__auto__);
var G__369889 = 0;
seq__369868 = G__369886;
chunk__369869 = G__369887;
count__369870 = G__369888;
i__369871 = G__369889;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__369868__$1);var vec__369874_369890 = d;var op_369891 = cljs.core.nth.call(null,vec__369874_369890,0,null);var path_369892 = cljs.core.nth.call(null,vec__369874_369890,1,null);var id_369893 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_369892);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_369892);
}
})();var pid_369894 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_369892);var G__369875_369895 = op_369891;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__369875_369895))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_369893);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__369875_369895))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_369893);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__369875_369895))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_369893);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__369875_369895))
{if(cljs.core._EQ_.call(null,cljs.core.last.call(null,d),new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_369894,id_369893);
} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_369894,id_369893);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__369875_369895))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,pid_369894,id_369893);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__369875_369895))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_369894,id_369893);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_369891)].join('')));
} else
{}
}
}
}
}
}
}
{
var G__369896 = cljs.core.next.call(null,seq__369868__$1);
var G__369897 = null;
var G__369898 = 0;
var G__369899 = 0;
seq__369868 = G__369896;
chunk__369869 = G__369897;
count__369870 = G__369898;
i__369871 = G__369899;
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