// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app.data.combinatorics');
goog.require('cljs.core.async.impl.protocols');
goog.require('foundation.app.tree');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('foundation.app.data.tracking_map');
goog.require('enfocus.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.app.data.combinatorics');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.tree');
goog.require('foundation.app.render');
goog.require('dommy.core');
foundation.app.transform = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__333596__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__333596 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__333596__delegate.call(this,k,args);};
G__333596.cljs$lang$maxFixedArity = 1;
G__333596.cljs$lang$applyTo = (function (arglist__333597){
var k = cljs.core.first(arglist__333597);
var args = cljs.core.rest(arglist__333597);
return G__333596__delegate(k,args);
});
G__333596.cljs$core$IFn$_invoke$arity$variadic = G__333596__delegate;
return G__333596;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__333598,changes){var map__333602 = p__333598;var map__333602__$1 = ((cljs.core.seq_QMARK_.call(null,map__333602))?cljs.core.apply.call(null,cljs.core.hash_map,map__333602):map__333602);var processed_inputs = cljs.core.get.call(null,map__333602__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__333603){var vec__333604 = p__333603;var k = cljs.core.nth.call(null,vec__333604,0,null);var v = cljs.core.nth.call(null,vec__333604,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__333611){var vec__333612 = p__333611;var k = cljs.core.nth.call(null,vec__333612,0,null);var v = cljs.core.nth.call(null,vec__333612,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__333613){var vec__333614 = p__333613;var k = cljs.core.nth.call(null,vec__333614,0,null);var v = cljs.core.nth.call(null,vec__333614,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__333615){var vec__333616 = p__333615;var k = cljs.core.nth.call(null,vec__333616,0,null);var v = cljs.core.nth.call(null,vec__333616,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__333655){var vec__333656 = p__333655;var k = cljs.core.nth.call(null,vec__333656,0,null);var v = cljs.core.nth.call(null,vec__333656,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"seq","seq",1014018001));
} else
{if(cljs.core.contains_QMARK_.call(null,a,v))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"seq","seq",1014018001));
} else
{if((cljs.core.get.call(null,a,v) == null))
{return cljs.core.assoc.call(null,a,v,new cljs.core.Keyword(null,"single","single",4406605754));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,arg_names__$1);
} else
{return cljs.core.constantly.call(null,new cljs.core.Keyword(null,"single","single",4406605754));
}
});
var input_paths__$1 = ((cljs.core.seq.call(null,arg_names))?cljs.core.zipmap.call(null,input_paths,arg_names):cljs.core.zipmap.call(null,input_paths,input_paths));var v_type = value_types.call(null,input_paths__$1);var assoc_a = ((function (input_paths__$1,v_type){
return (function (a,k,v){if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),((cljs.core.coll_QMARK_.call(null,v))?v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)));
} else
{return cljs.core.assoc.call(null,a,k,v);
}
});})(input_paths__$1,v_type))
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14516__auto__ = (function iter__333657(s__333658){return (new cljs.core.LazySeq(null,(function (){var s__333658__$1 = s__333658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__333658__$1);if(temp__4092__auto__)
{var s__333658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__333658__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__333658__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__333660 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__333659 = 0;while(true){
if((i__333659 < size__14515__auto__))
{var vec__333675 = cljs.core._nth.call(null,c__14514__auto__,i__333659);var path = cljs.core.nth.call(null,vec__333675,0,null);var arg = cljs.core.nth.call(null,vec__333675,1,null);cljs.core.chunk_append.call(null,b__333660,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
var k = cljs.core.first.call(null,ks);if((k === null))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"*","*",1013904284)))
{var m = data_model__$1;return assoc_a.call(null,ret,arg,cljs.core.vals.call(null,m));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586)))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,k,k))
{if((function (){var G__333681 = data_model__$1;if(G__333681)
{var bit__14449__auto__ = (G__333681.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14449__auto__) || (G__333681.cljs$core$ILookup$))
{return true;
} else
{if((!G__333681.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__333681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__333681);
}
})())
{var data_model_k__333680 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__333680,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__333689 = cljs.core.rest.call(null,ks);
var G__333690 = cljs.core.get.call(null,v,k,v);
var G__333691 = ret;
ks = G__333689;
data_model__$1 = G__333690;
ret = G__333691;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{return null;
}
}
}
}
break;
}
})());
{
var G__333692 = (i__333659 + 1);
i__333659 = G__333692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333660),iter__333657.call(null,cljs.core.chunk_rest.call(null,s__333658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333660),null);
}
} else
{var vec__333682 = cljs.core.first.call(null,s__333658__$2);var path = cljs.core.nth.call(null,vec__333682,0,null);var arg = cljs.core.nth.call(null,vec__333682,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
var k = cljs.core.first.call(null,ks);if((k === null))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"*","*",1013904284)))
{var m = data_model__$1;return assoc_a.call(null,ret,arg,cljs.core.vals.call(null,m));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586)))
{var v = data_model__$1;return assoc_a.call(null,ret,arg,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,k,k))
{if((function (){var G__333688 = data_model__$1;if(G__333688)
{var bit__14449__auto__ = (G__333688.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14449__auto__) || (G__333688.cljs$core$ILookup$))
{return true;
} else
{if((!G__333688.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__333688);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__333688);
}
})())
{var data_model_k__333687 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__333687,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__333693 = cljs.core.rest.call(null,ks);
var G__333694 = cljs.core.get.call(null,v,k,v);
var G__333695 = ret;
ks = G__333693;
data_model__$1 = G__333694;
ret = G__333695;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ret;
} else
{return null;
}
}
} else
{return null;
}
}
}
}
break;
}
})(),iter__333657.call(null,cljs.core.rest.call(null,s__333658__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__333696){var map__333697 = p__333696;var map__333697__$1 = ((cljs.core.seq_QMARK_.call(null,map__333697))?cljs.core.apply.call(null,cljs.core.hash_map,map__333697):map__333697);var input_paths = cljs.core.get.call(null,map__333697__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__333697__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18051__auto___333752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_333740){var state_val_333741 = (state_333740[1]);if((state_val_333741 === 4))
{var inst_333728 = (state_333740[2]);var inst_333729 = cljs.core.deref.call(null,app_model);var inst_333730 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_333728);var inst_333731 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_333730);var inst_333732 = foundation.app.tree.t.call(null,inst_333729);var inst_333733 = foundation.app.tree.since_t.call(null,inst_333731,inst_333732);var inst_333734 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_333735 = render_fn.call(null,inst_333733,inst_333734);var state_333740__$1 = (function (){var statearr_333742 = state_333740;(statearr_333742[7] = inst_333735);
return statearr_333742;
})();var statearr_333743_333753 = state_333740__$1;(statearr_333743_333753[2] = null);
(statearr_333743_333753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333741 === 3))
{var inst_333738 = (state_333740[2]);var state_333740__$1 = state_333740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_333740__$1,inst_333738);
} else
{if((state_val_333741 === 2))
{var inst_333726 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_333740__$1 = state_333740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_333740__$1,4,inst_333726);
} else
{if((state_val_333741 === 1))
{var state_333740__$1 = state_333740;var statearr_333744_333754 = state_333740__$1;(statearr_333744_333754[2] = null);
(statearr_333744_333754[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_333748 = (new Array(8));(statearr_333748[0] = state_machine__17982__auto__);
(statearr_333748[1] = 1);
return statearr_333748;
});
var state_machine__17982__auto____1 = (function (state_333740){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_333740);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e333749){if((e333749 instanceof Object))
{var ex__17985__auto__ = e333749;var statearr_333750_333755 = state_333740;(statearr_333750_333755[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_333740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e333749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__333756 = state_333740;
state_333740 = G__333756;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_333740){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_333740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_333751 = f__18052__auto__.call(null);(statearr_333751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___333752);
return statearr_333751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return app_model;
});
foundation.app.multiplex_message = (function multiplex_message(state,message){if(cljs.core._EQ_.call(null,foundation.app.message.path.call(null,message),new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return new cljs.core.Keyword(null,"app-model","app-model",1419288559);
} else
{if(cljs.core._EQ_.call(null,foundation.app.message.path.call(null,message),new cljs.core.Keyword(null,"output","output",4303359091)))
{return new cljs.core.Keyword(null,"output","output",4303359091);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
});
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__333758 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__333758))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__333758))
{return state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.run_dataflow.call(null,state,message);
} else
{return null;
}
}
}
});
foundation.app.filter_deltas = (function filter_deltas(state,deltas){var special_ops = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-node-destroy","navigate-node-destroy",3976380797),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529)], null);var prefix_QMARK_ = ((function (special_ops){
return (function (path,prefix){return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});})(special_ops))
;return cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.tree.expand_map,deltas));
});
foundation.app.transact_one = (function transact_one(state,message){var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = foundation.app.process_message.call(null,state__$1,message);var new_deltas = foundation.app.filter_deltas.call(null,new_state,new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316),new_deltas),new cljs.core.Keyword(null,"emit","emit",1017021253));
});
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18051__auto___333923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_333889){var state_val_333890 = (state_333889[1]);if((state_val_333890 === 1))
{var state_333889__$1 = state_333889;var statearr_333891_333924 = state_333889__$1;(statearr_333891_333924[2] = null);
(statearr_333891_333924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 2))
{var state_333889__$1 = state_333889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_333889__$1,4,input_queue__$1);
} else
{if((state_val_333890 === 3))
{var inst_333887 = (state_333889[2]);var state_333889__$1 = state_333889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_333889__$1,inst_333887);
} else
{if((state_val_333890 === 4))
{var inst_333843 = (state_333889[2]);var inst_333848 = foundation.app.pre_process.call(null,inst_333843);var inst_333849 = cljs.core.seq.call(null,inst_333848);var inst_333850 = inst_333849;var inst_333851 = null;var inst_333852 = 0;var inst_333853 = 0;var state_333889__$1 = (function (){var statearr_333892 = state_333889;(statearr_333892[7] = inst_333853);
(statearr_333892[8] = inst_333852);
(statearr_333892[9] = inst_333851);
(statearr_333892[10] = inst_333850);
return statearr_333892;
})();var statearr_333893_333925 = state_333889__$1;(statearr_333893_333925[2] = null);
(statearr_333893_333925[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 5))
{var inst_333853 = (state_333889[7]);var inst_333852 = (state_333889[8]);var inst_333855 = (inst_333853 < inst_333852);var inst_333856 = inst_333855;var state_333889__$1 = state_333889;if(cljs.core.truth_(inst_333856))
{var statearr_333897_333926 = state_333889__$1;(statearr_333897_333926[1] = 7);
} else
{var statearr_333898_333927 = state_333889__$1;(statearr_333898_333927[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 6))
{var inst_333884 = (state_333889[2]);var state_333889__$1 = (function (){var statearr_333899 = state_333889;(statearr_333899[11] = inst_333884);
return statearr_333899;
})();var statearr_333900_333928 = state_333889__$1;(statearr_333900_333928[2] = null);
(statearr_333900_333928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 7))
{var inst_333853 = (state_333889[7]);var inst_333852 = (state_333889[8]);var inst_333851 = (state_333889[9]);var inst_333850 = (state_333889[10]);var inst_333858 = cljs.core._nth.call(null,inst_333851,inst_333853);var inst_333859 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_333858);var inst_333860 = (inst_333853 + 1);var tmp333894 = inst_333852;var tmp333895 = inst_333851;var tmp333896 = inst_333850;var inst_333850__$1 = tmp333896;var inst_333851__$1 = tmp333895;var inst_333852__$1 = tmp333894;var inst_333853__$1 = inst_333860;var state_333889__$1 = (function (){var statearr_333901 = state_333889;(statearr_333901[12] = inst_333859);
(statearr_333901[7] = inst_333853__$1);
(statearr_333901[8] = inst_333852__$1);
(statearr_333901[9] = inst_333851__$1);
(statearr_333901[10] = inst_333850__$1);
return statearr_333901;
})();var statearr_333902_333929 = state_333889__$1;(statearr_333902_333929[2] = null);
(statearr_333902_333929[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 8))
{var inst_333863 = (state_333889[13]);var inst_333850 = (state_333889[10]);var inst_333863__$1 = cljs.core.seq.call(null,inst_333850);var state_333889__$1 = (function (){var statearr_333903 = state_333889;(statearr_333903[13] = inst_333863__$1);
return statearr_333903;
})();if(inst_333863__$1)
{var statearr_333904_333930 = state_333889__$1;(statearr_333904_333930[1] = 10);
} else
{var statearr_333905_333931 = state_333889__$1;(statearr_333905_333931[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 9))
{var inst_333882 = (state_333889[2]);var state_333889__$1 = state_333889;var statearr_333906_333932 = state_333889__$1;(statearr_333906_333932[2] = inst_333882);
(statearr_333906_333932[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 10))
{var inst_333863 = (state_333889[13]);var inst_333865 = cljs.core.chunked_seq_QMARK_.call(null,inst_333863);var state_333889__$1 = state_333889;if(inst_333865)
{var statearr_333907_333933 = state_333889__$1;(statearr_333907_333933[1] = 13);
} else
{var statearr_333908_333934 = state_333889__$1;(statearr_333908_333934[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 11))
{var state_333889__$1 = state_333889;var statearr_333909_333935 = state_333889__$1;(statearr_333909_333935[2] = null);
(statearr_333909_333935[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 12))
{var inst_333880 = (state_333889[2]);var state_333889__$1 = state_333889;var statearr_333910_333936 = state_333889__$1;(statearr_333910_333936[2] = inst_333880);
(statearr_333910_333936[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 13))
{var inst_333863 = (state_333889[13]);var inst_333867 = cljs.core.chunk_first.call(null,inst_333863);var inst_333868 = cljs.core.chunk_rest.call(null,inst_333863);var inst_333869 = cljs.core.count.call(null,inst_333867);var inst_333850 = inst_333868;var inst_333851 = inst_333867;var inst_333852 = inst_333869;var inst_333853 = 0;var state_333889__$1 = (function (){var statearr_333911 = state_333889;(statearr_333911[7] = inst_333853);
(statearr_333911[8] = inst_333852);
(statearr_333911[9] = inst_333851);
(statearr_333911[10] = inst_333850);
return statearr_333911;
})();var statearr_333912_333937 = state_333889__$1;(statearr_333912_333937[2] = null);
(statearr_333912_333937[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 14))
{var inst_333863 = (state_333889[13]);var inst_333872 = cljs.core.first.call(null,inst_333863);var inst_333873 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_333872);var inst_333874 = cljs.core.next.call(null,inst_333863);var inst_333850 = inst_333874;var inst_333851 = null;var inst_333852 = 0;var inst_333853 = 0;var state_333889__$1 = (function (){var statearr_333913 = state_333889;(statearr_333913[14] = inst_333873);
(statearr_333913[7] = inst_333853);
(statearr_333913[8] = inst_333852);
(statearr_333913[9] = inst_333851);
(statearr_333913[10] = inst_333850);
return statearr_333913;
})();var statearr_333914_333938 = state_333889__$1;(statearr_333914_333938[2] = null);
(statearr_333914_333938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_333890 === 15))
{var inst_333877 = (state_333889[2]);var state_333889__$1 = state_333889;var statearr_333915_333939 = state_333889__$1;(statearr_333915_333939[2] = inst_333877);
(statearr_333915_333939[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_333919 = (new Array(15));(statearr_333919[0] = state_machine__17982__auto__);
(statearr_333919[1] = 1);
return statearr_333919;
});
var state_machine__17982__auto____1 = (function (state_333889){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_333889);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e333920){if((e333920 instanceof Object))
{var ex__17985__auto__ = e333920;var statearr_333921_333940 = state_333889;(statearr_333921_333940[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_333889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e333920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__333941 = state_333889;
state_333889 = G__333941;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_333889){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_333889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_333922 = f__18052__auto__.call(null);(statearr_333922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___333923);
return statearr_333922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return input_queue__$1;
});
foundation.app.app_model_queue = (function app_model_queue(app_atom){var app_model_queue__$1 = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"app-model-delta-watcher","app-model-delta-watcher",3254923977),(function (_,___$1,old_state,new_state){var deltas = new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316).cljs$core$IFn$_invoke$arity$1(new_state);if((cljs.core.empty_QMARK_.call(null,deltas)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"emitter-deltas","emitter-deltas",4121118316).cljs$core$IFn$_invoke$arity$1(old_state),deltas)))
{return null;
} else
{var deltas__$1 = cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.post_process,deltas));return cljs.core.async.put_BANG_.call(null,app_model_queue__$1,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"deltas","deltas",3973426989),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas__$1], true, false));
}
}));
return app_model_queue__$1;
});
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__333946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__333947 = null;var count__333948 = 0;var i__333949 = 0;while(true){
if((i__333949 < count__333948))
{var message = cljs.core._nth.call(null,chunk__333947,i__333949);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__333950 = seq__333946;
var G__333951 = chunk__333947;
var G__333952 = count__333948;
var G__333953 = (i__333949 + 1);
seq__333946 = G__333950;
chunk__333947 = G__333951;
count__333948 = G__333952;
i__333949 = G__333953;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333946);if(temp__4092__auto__)
{var seq__333946__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333946__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__333946__$1);{
var G__333954 = cljs.core.chunk_rest.call(null,seq__333946__$1);
var G__333955 = c__14547__auto__;
var G__333956 = cljs.core.count.call(null,c__14547__auto__);
var G__333957 = 0;
seq__333946 = G__333954;
chunk__333947 = G__333955;
count__333948 = G__333956;
i__333949 = G__333957;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__333946__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__333958 = cljs.core.next.call(null,seq__333946__$1);
var G__333959 = null;
var G__333960 = 0;
var G__333961 = 0;
seq__333946 = G__333958;
chunk__333947 = G__333959;
count__333948 = G__333960;
i__333949 = G__333961;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
return output_queue;
});
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__333966){var vec__333967 = p__333966;var name = cljs.core.nth.call(null,vec__333967,0,null);var paths = cljs.core.nth.call(null,vec__333967,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__333968){var vec__333969 = p__333968;var k = cljs.core.nth.call(null,vec__333969,0,null);var v = cljs.core.nth.call(null,vec__333969,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
}),focus)),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(focus);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),new cljs.core.Keyword(null,"name","name",1017277949),n], true, false)], null);
} else
{return null;
}
})());
});
foundation.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){return begin.call(null,app,null);
});
var begin__2 = (function (app,p__333970){var map__333976 = p__333970;var map__333976__$1 = ((cljs.core.seq_QMARK_.call(null,map__333976))?cljs.core.apply.call(null,cljs.core.hash_map,map__333976):map__333976);var focus = cljs.core.get.call(null,map__333976__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__333976__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__333977 = cljs.core.seq.call(null,init_messages__$1);var chunk__333978 = null;var count__333979 = 0;var i__333980 = 0;while(true){
if((i__333980 < count__333979))
{var message = cljs.core._nth.call(null,chunk__333978,i__333980);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__333981 = seq__333977;
var G__333982 = chunk__333978;
var G__333983 = count__333979;
var G__333984 = (i__333980 + 1);
seq__333977 = G__333981;
chunk__333978 = G__333982;
count__333979 = G__333983;
i__333980 = G__333984;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__333977);if(temp__4092__auto__)
{var seq__333977__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333977__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__333977__$1);{
var G__333985 = cljs.core.chunk_rest.call(null,seq__333977__$1);
var G__333986 = c__14547__auto__;
var G__333987 = cljs.core.count.call(null,c__14547__auto__);
var G__333988 = 0;
seq__333977 = G__333985;
chunk__333978 = G__333986;
count__333979 = G__333987;
i__333980 = G__333988;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__333977__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__333989 = cljs.core.next.call(null,seq__333977__$1);
var G__333990 = null;
var G__333991 = 0;
var G__333992 = 0;
seq__333977 = G__333989;
chunk__333978 = G__333990;
count__333979 = G__333991;
i__333980 = G__333992;
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
begin = function(app,p__333970){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__333970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_334053){var state_val_334054 = (state_334053[1]);if((state_val_334054 === 7))
{var inst_334048 = (state_334053[2]);var state_334053__$1 = (function (){var statearr_334055 = state_334053;(statearr_334055[7] = inst_334048);
return statearr_334055;
})();var statearr_334056_334071 = state_334053__$1;(statearr_334056_334071[2] = null);
(statearr_334056_334071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334054 === 6))
{var inst_334034 = (state_334053[8]);var inst_334039 = cljs.core.reset_BANG_.call(null,last_message,inst_334034);var inst_334040 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_334034);var inst_334041 = cljs.core.get_method.call(null,foundation.app.effect,inst_334040);var inst_334042 = cljs.core.dissoc.call(null,inst_334034,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_334043 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_334034);var inst_334044 = [inst_334042,input,inst_334043];var inst_334045 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334044,null));var inst_334046 = cljs.core.apply.call(null,inst_334041,inst_334045);var state_334053__$1 = (function (){var statearr_334057 = state_334053;(statearr_334057[9] = inst_334039);
return statearr_334057;
})();var statearr_334058_334072 = state_334053__$1;(statearr_334058_334072[2] = inst_334046);
(statearr_334058_334072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334054 === 5))
{var state_334053__$1 = state_334053;var statearr_334059_334073 = state_334053__$1;(statearr_334059_334073[2] = null);
(statearr_334059_334073[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334054 === 4))
{var inst_334034 = (state_334053[8]);var inst_334034__$1 = (state_334053[2]);var inst_334035 = cljs.core.deref.call(null,last_message);var inst_334036 = cljs.core._EQ_.call(null,inst_334035,inst_334034__$1);var state_334053__$1 = (function (){var statearr_334060 = state_334053;(statearr_334060[8] = inst_334034__$1);
return statearr_334060;
})();if(inst_334036)
{var statearr_334061_334074 = state_334053__$1;(statearr_334061_334074[1] = 5);
} else
{var statearr_334062_334075 = state_334053__$1;(statearr_334062_334075[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334054 === 3))
{var inst_334051 = (state_334053[2]);var state_334053__$1 = state_334053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_334053__$1,inst_334051);
} else
{if((state_val_334054 === 2))
{var state_334053__$1 = state_334053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_334053__$1,4,output);
} else
{if((state_val_334054 === 1))
{var state_334053__$1 = state_334053;var statearr_334063_334076 = state_334053__$1;(statearr_334063_334076[2] = null);
(statearr_334063_334076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_334067 = (new Array(10));(statearr_334067[0] = state_machine__17982__auto__);
(statearr_334067[1] = 1);
return statearr_334067;
});
var state_machine__17982__auto____1 = (function (state_334053){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_334053);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e334068){if((e334068 instanceof Object))
{var ex__17985__auto__ = e334068;var statearr_334069_334077 = state_334053;(statearr_334069_334077[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_334053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e334068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__334078 = state_334053;
state_334053 = G__334078;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_334053){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_334053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_334070 = f__18052__auto__.call(null);(statearr_334070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_334070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__334083 = cljs.core.seq.call(null,script);var chunk__334084 = null;var count__334085 = 0;var i__334086 = 0;while(true){
if((i__334086 < count__334085))
{var message = cljs.core._nth.call(null,chunk__334084,i__334086);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__334087 = seq__334083;
var G__334088 = chunk__334084;
var G__334089 = count__334085;
var G__334090 = (i__334086 + 1);
seq__334083 = G__334087;
chunk__334084 = G__334088;
count__334085 = G__334089;
i__334086 = G__334090;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__334083);if(temp__4092__auto__)
{var seq__334083__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334083__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__334083__$1);{
var G__334091 = cljs.core.chunk_rest.call(null,seq__334083__$1);
var G__334092 = c__14547__auto__;
var G__334093 = cljs.core.count.call(null,c__14547__auto__);
var G__334094 = 0;
seq__334083 = G__334091;
chunk__334084 = G__334092;
count__334085 = G__334093;
i__334086 = G__334094;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__334083__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__334095 = cljs.core.next.call(null,seq__334083__$1);
var G__334096 = null;
var G__334097 = 0;
var G__334098 = 0;
seq__334083 = G__334095;
chunk__334084 = G__334096;
count__334085 = G__334097;
i__334086 = G__334098;
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
foundation.app.depends = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__334099,graph){var map__334100 = p__334099;var map__334100__$1 = ((cljs.core.seq_QMARK_.call(null,map__334100))?cljs.core.apply.call(null,cljs.core.hash_map,map__334100):map__334100);var transform = cljs.core.get.call(null,map__334100__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__334101 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__334101,0,null);var path = cljs.core.nth.call(null,vec__334101,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__334104,graph){var map__334105 = p__334104;var map__334105__$1 = ((cljs.core.seq_QMARK_.call(null,map__334105))?cljs.core.apply.call(null,cljs.core.hash_map,map__334105):map__334105);var derives = cljs.core.get.call(null,map__334105__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__334106 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__334106,0,null);var output_path = cljs.core.nth.call(null,vec__334106,1,null);var input_spec = cljs.core.nth.call(null,vec__334106,2,null);var input_paths__$1 = (function (){var or__13823__auto__ = (function (){var and__13811__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13811__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13811__auto__;
}
})();if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__334102_SHARP_,p2__334103_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__334102_SHARP_,output_path,p2__334103_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__13823__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return foundation.app.data.dependency.graph.call(null);
}
})(),foundation.app.dispatches.call(null));
});
build_dependency_graph = function(app){
switch(arguments.length){
case 0:
return build_dependency_graph__0.call(this);
case 1:
return build_dependency_graph__1.call(this,app);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_dependency_graph.cljs$core$IFn$_invoke$arity$0 = build_dependency_graph__0;
build_dependency_graph.cljs$core$IFn$_invoke$arity$1 = build_dependency_graph__1;
return build_dependency_graph;
})()
;
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__334108 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__334108,0,null);var large = cljs.core.nth.call(null,vec__334108,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__334109_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__334109_SHARP_);
}),input_paths);
}),change_set));
});
foundation.app.remove_matching_changes = (function remove_matching_changes(change,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),foundation.app.remover,input_paths);
}),change,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598),new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null));
});
foundation.app.flow_input = (function flow_input(context,state,input_paths,change){var input_set = (function input_set(changes,f,input_paths__$1){return cljs.core.set.call(null,f.call(null,(function (x){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.descendent_QMARK_,x),input_paths__$1);
}),changes));
});
var update_input_sets = (function update_input_sets(m,ks,f,input_paths__$1){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),input_set,f,input_paths__$1);
}),m,ks);
});
return update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"new-model","new-model",3618698286),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"old-model","old-model",1443313525),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"input-paths","input-paths",3910795421),input_paths),cljs.core.select_keys.call(null,change,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null),cljs.core.filter,input_paths);
});
foundation.app.emit_phase = (function emit_phase(p__334110){var map__334113 = p__334110;var map__334113__$1 = ((cljs.core.seq_QMARK_.call(null,map__334113))?cljs.core.apply.call(null,cljs.core.hash_map,map__334113):map__334113);var state = map__334113__$1;var change = cljs.core.get.call(null,map__334113__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__334113__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__334114 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__334114__$1 = ((cljs.core.seq_QMARK_.call(null,map__334114))?cljs.core.apply.call(null,cljs.core.hash_map,map__334114):map__334114);var state__$1 = map__334114__$1;var processed_inputs = cljs.core.get.call(null,map__334114__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__334114__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__334114__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14516__auto__ = (function iter__334119(s__334120){return (new cljs.core.LazySeq(null,(function (){var s__334120__$1 = s__334120;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334120__$1);if(temp__4092__auto__)
{var s__334120__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334120__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334120__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334122 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334121 = 0;while(true){
if((i__334121 < size__14515__auto__))
{var dval = cljs.core._nth.call(null,c__14514__auto__,i__334121);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__334122,cljs.core.get.call(null,dispatches,dval));
{
var G__334123 = (i__334121 + 1);
i__334121 = G__334123;
continue;
}
} else
{{
var G__334124 = (i__334121 + 1);
i__334121 = G__334124;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334122),iter__334119.call(null,cljs.core.chunk_rest.call(null,s__334120__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334122),null);
}
} else
{var dval = cljs.core.first.call(null,s__334120__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__334119.call(null,cljs.core.rest.call(null,s__334120__$2)));
} else
{{
var G__334125 = cljs.core.rest.call(null,s__334120__$2);
s__334120__$1 = G__334125;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.keys.call(null,dispatches));
})());if(temp__4090__auto____$1)
{var transformers = temp__4090__auto____$1;return cljs.core.vec.call(null,transformers);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_method.call(null,multifn,dispatch_val)], null);
}
}
});
/**
* @param {...*} var_args
*/
foundation.app.update_state = (function() { 
var update_state__delegate = function (state,path,f,args){var data_model = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null));var new_data_model = cljs.core.apply.call(null,cljs.core.update_in,foundation.app.data.tracking_map.tracking_map.call(null,data_model),path,f,args);return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),cljs.core.deref.call(null,new_data_model)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106)], null),(function (old,new$){return cljs.core.merge_with.call(null,cljs.core.into,old,new$);
}),foundation.app.data.tracking_map.changes.call(null,new_data_model));
};
var update_state = function (state,path,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_state__delegate.call(this,state,path,f,args);};
update_state.cljs$lang$maxFixedArity = 3;
update_state.cljs$lang$applyTo = (function (arglist__334126){
var state = cljs.core.first(arglist__334126);
arglist__334126 = cljs.core.next(arglist__334126);
var path = cljs.core.first(arglist__334126);
arglist__334126 = cljs.core.next(arglist__334126);
var f = cljs.core.first(arglist__334126);
var args = cljs.core.rest(arglist__334126);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__334127){var map__334130 = p__334127;var map__334130__$1 = ((cljs.core.seq_QMARK_.call(null,map__334130))?cljs.core.apply.call(null,cljs.core.hash_map,map__334130):map__334130);var state = map__334130__$1;var context = cljs.core.get.call(null,map__334130__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__334130__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__334131 = message;var map__334131__$1 = ((cljs.core.seq_QMARK_.call(null,map__334131))?cljs.core.apply.call(null,cljs.core.hash_map,map__334131):map__334131);var type = cljs.core.get.call(null,map__334131__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__334131__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__334133){var map__334135 = p__334133;var map__334135__$1 = ((cljs.core.seq_QMARK_.call(null,map__334135))?cljs.core.apply.call(null,cljs.core.hash_map,map__334135):map__334135);var state = map__334135__$1;var context = cljs.core.get.call(null,map__334135__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__334132_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__334132_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__334136){var vec__334137 = p__334136;var dispatch_val = cljs.core.nth.call(null,vec__334137,0,null);var multifn = cljs.core.nth.call(null,vec__334137,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__334138){var vec__334139 = p__334138;var dispatch_val = cljs.core.nth.call(null,vec__334139,0,null);var multifn = cljs.core.nth.call(null,vec__334139,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__334140_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__334140_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__334141){var map__334149 = p__334141;var map__334149__$1 = ((cljs.core.seq_QMARK_.call(null,map__334149))?cljs.core.apply.call(null,cljs.core.hash_map,map__334149):map__334149);var state = map__334149__$1;var context = cljs.core.get.call(null,map__334149__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__334150,p__334151){var map__334152 = p__334150;var map__334152__$1 = ((cljs.core.seq_QMARK_.call(null,map__334152))?cljs.core.apply.call(null,cljs.core.hash_map,map__334152):map__334152);var state__$1 = map__334152__$1;var change = cljs.core.get.call(null,map__334152__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__334153 = p__334151;var vec__334154 = cljs.core.nth.call(null,vec__334153,0,null);var input_paths = cljs.core.nth.call(null,vec__334154,0,null);var output_path = cljs.core.nth.call(null,vec__334154,1,null);var ispec = cljs.core.nth.call(null,vec__334154,2,null);var derive = vec__334154;var derive_fn = cljs.core.nth.call(null,vec__334153,1,null);var vec__334155 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__334155,0,null);var arg_names = cljs.core.nth.call(null,vec__334155,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__334156){var map__334164 = p__334156;var map__334164__$1 = ((cljs.core.seq_QMARK_.call(null,map__334164))?cljs.core.apply.call(null,cljs.core.hash_map,map__334164):map__334164);var state = map__334164__$1;var context = cljs.core.get.call(null,map__334164__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__334165,p__334166){var map__334167 = p__334165;var map__334167__$1 = ((cljs.core.seq_QMARK_.call(null,map__334167))?cljs.core.apply.call(null,cljs.core.hash_map,map__334167):map__334167);var state__$1 = map__334167__$1;var change = cljs.core.get.call(null,map__334167__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__334168 = p__334166;var vec__334169 = cljs.core.nth.call(null,vec__334168,0,null);var type = cljs.core.nth.call(null,vec__334169,0,null);var input_paths = cljs.core.nth.call(null,vec__334169,1,null);var ispec = cljs.core.nth.call(null,vec__334169,2,null);var effect = vec__334169;var vec__334170 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__334170,0,null);var arg_names = cljs.core.nth.call(null,vec__334170,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
}),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,new cljs.core.Keyword(null,"effect","effect",4002786563),new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect,new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.PersistentArrayMap.EMPTY], true, false),foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
}),state,dispatches);
} else
{return state;
}
});

/**
* @constructor
* @param {*} state
* @param {*} input
* @param {*} output
* @param {*} app_model
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.Application = (function (state,input,output,app_model,__meta,__extmap){
this.state = state;
this.input = input;
this.output = output;
this.app_model = app_model;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14380__auto__){var self__ = this;
var this__14380__auto____$1 = this;var h__14234__auto__ = self__.__hash;if(!((h__14234__auto__ == null)))
{return h__14234__auto__;
} else
{var h__14234__auto____$1 = cljs.core.hash_imap.call(null,this__14380__auto____$1);self__.__hash = h__14234__auto____$1;
return h__14234__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14385__auto__,k__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;return cljs.core._lookup.call(null,this__14385__auto____$1,k__14386__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k334172,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k334172,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k334172,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k334172,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k334172,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k334172,else__14388__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__334171){var self__ = this;
var this__14392__auto____$1 = this;var pred__334174 = cljs.core.keyword_identical_QMARK_;var expr__334175 = k__14393__auto__;if(cljs.core.truth_(pred__334174.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__334175)))
{return (new foundation.app.Application(G__334171,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__334174.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__334175)))
{return (new foundation.app.Application(self__.state,G__334171,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__334174.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__334175)))
{return (new foundation.app.Application(self__.state,self__.input,G__334171,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__334174.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__334175)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__334171,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__334171),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14399__auto__,writer__14400__auto__,opts__14401__auto__){var self__ = this;
var this__14399__auto____$1 = this;var pr_pair__14402__auto__ = (function (keyval__14403__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,cljs.core.pr_writer,""," ","",opts__14401__auto__,keyval__14403__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,pr_pair__14402__auto__,"#foundation.app.Application{",", ","}",opts__14401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14390__auto__,entry__14391__auto__){var self__ = this;
var this__14390__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14391__auto__))
{return cljs.core._assoc.call(null,this__14390__auto____$1,cljs.core._nth.call(null,entry__14391__auto__,0),cljs.core._nth.call(null,entry__14391__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14390__auto____$1,entry__14391__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14397__auto__){var self__ = this;
var this__14397__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14389__auto__){var self__ = this;
var this__14389__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14381__auto__,other__14382__auto__){var self__ = this;
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__334171){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__334171,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14383__auto__){var self__ = this;
var this__14383__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14394__auto__,k__14395__auto__){var self__ = this;
var this__14394__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14395__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14394__auto____$1),self__.__meta),k__14395__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14395__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14419__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14419__auto__,writer__14420__auto__){return cljs.core._write.call(null,writer__14420__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__334173){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__334173),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__334173),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__334173),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__334173),null,cljs.core.dissoc.call(null,G__334173,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__334177_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__334177_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__334178){var map__334180 = p__334178;var map__334180__$1 = ((cljs.core.seq_QMARK_.call(null,map__334180))?cljs.core.apply.call(null,cljs.core.hash_map,map__334180):map__334180);var init_messages = cljs.core.get.call(null,map__334180__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__334180__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__334178 = null;if (arguments.length > 1) {
  p__334178 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__334178);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__334181){
var root_id = cljs.core.first(arglist__334181);
var p__334178 = cljs.core.rest(arglist__334181);
return create_app__delegate(root_id,p__334178);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj334183 = {};return obj334183;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13811__auto__ = _;if(and__13811__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13811__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14426__auto__ = (((_ == null))?null:_);return (function (){var or__13823__auto__ = (foundation.app.initialize[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (foundation.app.initialize["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map