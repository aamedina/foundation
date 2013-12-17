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
foundation.app.transform = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__23809__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__23809 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23809__delegate.call(this,k,args);};
G__23809.cljs$lang$maxFixedArity = 1;
G__23809.cljs$lang$applyTo = (function (arglist__23810){
var k = cljs.core.first(arglist__23810);
var args = cljs.core.rest(arglist__23810);
return G__23809__delegate(k,args);
});
G__23809.cljs$core$IFn$_invoke$arity$variadic = G__23809__delegate;
return G__23809;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__23811,changes){var map__23815 = p__23811;var map__23815__$1 = ((cljs.core.seq_QMARK_.call(null,map__23815))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);var processed_inputs = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__23816){var vec__23817 = p__23816;var k = cljs.core.nth.call(null,vec__23817,0,null);var v = cljs.core.nth.call(null,vec__23817,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__23824){var vec__23825 = p__23824;var k = cljs.core.nth.call(null,vec__23825,0,null);var v = cljs.core.nth.call(null,vec__23825,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__23826){var vec__23827 = p__23826;var k = cljs.core.nth.call(null,vec__23827,0,null);var v = cljs.core.nth.call(null,vec__23827,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__23828){var vec__23829 = p__23828;var k = cljs.core.nth.call(null,vec__23829,0,null);var v = cljs.core.nth.call(null,vec__23829,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__23868){var vec__23869 = p__23868;var k = cljs.core.nth.call(null,vec__23869,0,null);var v = cljs.core.nth.call(null,vec__23869,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__8521__auto__ = (function iter__23870(s__23871){return (new cljs.core.LazySeq(null,(function (){var s__23871__$1 = s__23871;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23871__$1);if(temp__4092__auto__)
{var s__23871__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23871__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__23871__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__23873 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__23872 = 0;while(true){
if((i__23872 < size__8520__auto__))
{var vec__23888 = cljs.core._nth.call(null,c__8519__auto__,i__23872);var path = cljs.core.nth.call(null,vec__23888,0,null);var arg = cljs.core.nth.call(null,vec__23888,1,null);cljs.core.chunk_append.call(null,b__23873,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__23894 = data_model__$1;if(G__23894)
{var bit__8454__auto__ = (G__23894.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8454__auto__) || (G__23894.cljs$core$ILookup$))
{return true;
} else
{if((!G__23894.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__23894);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__23894);
}
})())
{var data_model_k__23893 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__23893,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__23902 = cljs.core.rest.call(null,ks);
var G__23903 = cljs.core.get.call(null,v,k,v);
var G__23904 = ret;
ks = G__23902;
data_model__$1 = G__23903;
ret = G__23904;
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
var G__23905 = (i__23872 + 1);
i__23872 = G__23905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23873),iter__23870.call(null,cljs.core.chunk_rest.call(null,s__23871__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23873),null);
}
} else
{var vec__23895 = cljs.core.first.call(null,s__23871__$2);var path = cljs.core.nth.call(null,vec__23895,0,null);var arg = cljs.core.nth.call(null,vec__23895,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__23901 = data_model__$1;if(G__23901)
{var bit__8454__auto__ = (G__23901.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8454__auto__) || (G__23901.cljs$core$ILookup$))
{return true;
} else
{if((!G__23901.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__23901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__23901);
}
})())
{var data_model_k__23900 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__23900,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__23906 = cljs.core.rest.call(null,ks);
var G__23907 = cljs.core.get.call(null,v,k,v);
var G__23908 = ret;
ks = G__23906;
data_model__$1 = G__23907;
ret = G__23908;
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
})(),iter__23870.call(null,cljs.core.rest.call(null,s__23871__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__23909){var map__23910 = p__23909;var map__23910__$1 = ((cljs.core.seq_QMARK_.call(null,map__23910))?cljs.core.apply.call(null,cljs.core.hash_map,map__23910):map__23910);var input_paths = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__15955__auto___23965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_23953){var state_val_23954 = (state_23953[1]);if((state_val_23954 === 4))
{var inst_23941 = (state_23953[2]);var inst_23942 = cljs.core.deref.call(null,app_model);var inst_23943 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_23941);var inst_23944 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_23943);var inst_23945 = foundation.app.tree.t.call(null,inst_23942);var inst_23946 = foundation.app.tree.since_t.call(null,inst_23944,inst_23945);var inst_23947 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_23948 = render_fn.call(null,inst_23946,inst_23947);var state_23953__$1 = (function (){var statearr_23955 = state_23953;(statearr_23955[7] = inst_23948);
return statearr_23955;
})();var statearr_23956_23966 = state_23953__$1;(statearr_23956_23966[2] = null);
(statearr_23956_23966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23954 === 3))
{var inst_23951 = (state_23953[2]);var state_23953__$1 = state_23953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23953__$1,inst_23951);
} else
{if((state_val_23954 === 2))
{var inst_23939 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_23953__$1 = state_23953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,4,inst_23939);
} else
{if((state_val_23954 === 1))
{var state_23953__$1 = state_23953;var statearr_23957_23967 = state_23953__$1;(statearr_23957_23967[2] = null);
(statearr_23957_23967[1] = 2);
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
var state_machine__15863__auto____0 = (function (){var statearr_23961 = (new Array(8));(statearr_23961[0] = state_machine__15863__auto__);
(statearr_23961[1] = 1);
return statearr_23961;
});
var state_machine__15863__auto____1 = (function (state_23953){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_23953);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e23962){if((e23962 instanceof Object))
{var ex__15866__auto__ = e23962;var statearr_23963_23968 = state_23953;(statearr_23963_23968[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23969 = state_23953;
state_23953 = G__23969;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_23953){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_23953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_23964 = f__15956__auto__.call(null);(statearr_23964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___23965);
return statearr_23964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__23971 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__23971))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__23971))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__15955__auto___24136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_24102){var state_val_24103 = (state_24102[1]);if((state_val_24103 === 1))
{var state_24102__$1 = state_24102;var statearr_24104_24137 = state_24102__$1;(statearr_24104_24137[2] = null);
(statearr_24104_24137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 2))
{var state_24102__$1 = state_24102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24102__$1,4,input_queue__$1);
} else
{if((state_val_24103 === 3))
{var inst_24100 = (state_24102[2]);var state_24102__$1 = state_24102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24102__$1,inst_24100);
} else
{if((state_val_24103 === 4))
{var inst_24056 = (state_24102[2]);var inst_24061 = foundation.app.pre_process.call(null,inst_24056);var inst_24062 = cljs.core.seq.call(null,inst_24061);var inst_24063 = inst_24062;var inst_24064 = null;var inst_24065 = 0;var inst_24066 = 0;var state_24102__$1 = (function (){var statearr_24105 = state_24102;(statearr_24105[7] = inst_24065);
(statearr_24105[8] = inst_24066);
(statearr_24105[9] = inst_24064);
(statearr_24105[10] = inst_24063);
return statearr_24105;
})();var statearr_24106_24138 = state_24102__$1;(statearr_24106_24138[2] = null);
(statearr_24106_24138[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 5))
{var inst_24065 = (state_24102[7]);var inst_24066 = (state_24102[8]);var inst_24068 = (inst_24066 < inst_24065);var inst_24069 = inst_24068;var state_24102__$1 = state_24102;if(cljs.core.truth_(inst_24069))
{var statearr_24110_24139 = state_24102__$1;(statearr_24110_24139[1] = 7);
} else
{var statearr_24111_24140 = state_24102__$1;(statearr_24111_24140[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 6))
{var inst_24097 = (state_24102[2]);var state_24102__$1 = (function (){var statearr_24112 = state_24102;(statearr_24112[11] = inst_24097);
return statearr_24112;
})();var statearr_24113_24141 = state_24102__$1;(statearr_24113_24141[2] = null);
(statearr_24113_24141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 7))
{var inst_24065 = (state_24102[7]);var inst_24066 = (state_24102[8]);var inst_24064 = (state_24102[9]);var inst_24063 = (state_24102[10]);var inst_24071 = cljs.core._nth.call(null,inst_24064,inst_24066);var inst_24072 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_24071);var inst_24073 = (inst_24066 + 1);var tmp24107 = inst_24065;var tmp24108 = inst_24064;var tmp24109 = inst_24063;var inst_24063__$1 = tmp24109;var inst_24064__$1 = tmp24108;var inst_24065__$1 = tmp24107;var inst_24066__$1 = inst_24073;var state_24102__$1 = (function (){var statearr_24114 = state_24102;(statearr_24114[7] = inst_24065__$1);
(statearr_24114[8] = inst_24066__$1);
(statearr_24114[9] = inst_24064__$1);
(statearr_24114[10] = inst_24063__$1);
(statearr_24114[12] = inst_24072);
return statearr_24114;
})();var statearr_24115_24142 = state_24102__$1;(statearr_24115_24142[2] = null);
(statearr_24115_24142[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 8))
{var inst_24063 = (state_24102[10]);var inst_24076 = (state_24102[13]);var inst_24076__$1 = cljs.core.seq.call(null,inst_24063);var state_24102__$1 = (function (){var statearr_24116 = state_24102;(statearr_24116[13] = inst_24076__$1);
return statearr_24116;
})();if(inst_24076__$1)
{var statearr_24117_24143 = state_24102__$1;(statearr_24117_24143[1] = 10);
} else
{var statearr_24118_24144 = state_24102__$1;(statearr_24118_24144[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 9))
{var inst_24095 = (state_24102[2]);var state_24102__$1 = state_24102;var statearr_24119_24145 = state_24102__$1;(statearr_24119_24145[2] = inst_24095);
(statearr_24119_24145[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 10))
{var inst_24076 = (state_24102[13]);var inst_24078 = cljs.core.chunked_seq_QMARK_.call(null,inst_24076);var state_24102__$1 = state_24102;if(inst_24078)
{var statearr_24120_24146 = state_24102__$1;(statearr_24120_24146[1] = 13);
} else
{var statearr_24121_24147 = state_24102__$1;(statearr_24121_24147[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 11))
{var state_24102__$1 = state_24102;var statearr_24122_24148 = state_24102__$1;(statearr_24122_24148[2] = null);
(statearr_24122_24148[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 12))
{var inst_24093 = (state_24102[2]);var state_24102__$1 = state_24102;var statearr_24123_24149 = state_24102__$1;(statearr_24123_24149[2] = inst_24093);
(statearr_24123_24149[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 13))
{var inst_24076 = (state_24102[13]);var inst_24080 = cljs.core.chunk_first.call(null,inst_24076);var inst_24081 = cljs.core.chunk_rest.call(null,inst_24076);var inst_24082 = cljs.core.count.call(null,inst_24080);var inst_24063 = inst_24081;var inst_24064 = inst_24080;var inst_24065 = inst_24082;var inst_24066 = 0;var state_24102__$1 = (function (){var statearr_24124 = state_24102;(statearr_24124[7] = inst_24065);
(statearr_24124[8] = inst_24066);
(statearr_24124[9] = inst_24064);
(statearr_24124[10] = inst_24063);
return statearr_24124;
})();var statearr_24125_24150 = state_24102__$1;(statearr_24125_24150[2] = null);
(statearr_24125_24150[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 14))
{var inst_24076 = (state_24102[13]);var inst_24085 = cljs.core.first.call(null,inst_24076);var inst_24086 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_24085);var inst_24087 = cljs.core.next.call(null,inst_24076);var inst_24063 = inst_24087;var inst_24064 = null;var inst_24065 = 0;var inst_24066 = 0;var state_24102__$1 = (function (){var statearr_24126 = state_24102;(statearr_24126[14] = inst_24086);
(statearr_24126[7] = inst_24065);
(statearr_24126[8] = inst_24066);
(statearr_24126[9] = inst_24064);
(statearr_24126[10] = inst_24063);
return statearr_24126;
})();var statearr_24127_24151 = state_24102__$1;(statearr_24127_24151[2] = null);
(statearr_24127_24151[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24103 === 15))
{var inst_24090 = (state_24102[2]);var state_24102__$1 = state_24102;var statearr_24128_24152 = state_24102__$1;(statearr_24128_24152[2] = inst_24090);
(statearr_24128_24152[1] = 12);
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
});return ((function (switch__15862__auto__){
return (function() {
var state_machine__15863__auto__ = null;
var state_machine__15863__auto____0 = (function (){var statearr_24132 = (new Array(15));(statearr_24132[0] = state_machine__15863__auto__);
(statearr_24132[1] = 1);
return statearr_24132;
});
var state_machine__15863__auto____1 = (function (state_24102){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_24102);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object))
{var ex__15866__auto__ = e24133;var statearr_24134_24153 = state_24102;(statearr_24134_24153[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24154 = state_24102;
state_24102 = G__24154;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_24102){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_24102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_24135 = f__15956__auto__.call(null);(statearr_24135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto___24136);
return statearr_24135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__24159 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__24160 = null;var count__24161 = 0;var i__24162 = 0;while(true){
if((i__24162 < count__24161))
{var message = cljs.core._nth.call(null,chunk__24160,i__24162);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__24163 = seq__24159;
var G__24164 = chunk__24160;
var G__24165 = count__24161;
var G__24166 = (i__24162 + 1);
seq__24159 = G__24163;
chunk__24160 = G__24164;
count__24161 = G__24165;
i__24162 = G__24166;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24159);if(temp__4092__auto__)
{var seq__24159__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24159__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24159__$1);{
var G__24167 = cljs.core.chunk_rest.call(null,seq__24159__$1);
var G__24168 = c__8552__auto__;
var G__24169 = cljs.core.count.call(null,c__8552__auto__);
var G__24170 = 0;
seq__24159 = G__24167;
chunk__24160 = G__24168;
count__24161 = G__24169;
i__24162 = G__24170;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__24159__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__24171 = cljs.core.next.call(null,seq__24159__$1);
var G__24172 = null;
var G__24173 = 0;
var G__24174 = 0;
seq__24159 = G__24171;
chunk__24160 = G__24172;
count__24161 = G__24173;
i__24162 = G__24174;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__24179){var vec__24180 = p__24179;var name = cljs.core.nth.call(null,vec__24180,0,null);var paths = cljs.core.nth.call(null,vec__24180,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__24181){var vec__24182 = p__24181;var k = cljs.core.nth.call(null,vec__24182,0,null);var v = cljs.core.nth.call(null,vec__24182,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__24183){var map__24189 = p__24183;var map__24189__$1 = ((cljs.core.seq_QMARK_.call(null,map__24189))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);var focus = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__24190 = cljs.core.seq.call(null,init_messages__$1);var chunk__24191 = null;var count__24192 = 0;var i__24193 = 0;while(true){
if((i__24193 < count__24192))
{var message = cljs.core._nth.call(null,chunk__24191,i__24193);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__24194 = seq__24190;
var G__24195 = chunk__24191;
var G__24196 = count__24192;
var G__24197 = (i__24193 + 1);
seq__24190 = G__24194;
chunk__24191 = G__24195;
count__24192 = G__24196;
i__24193 = G__24197;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24190);if(temp__4092__auto__)
{var seq__24190__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24190__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24190__$1);{
var G__24198 = cljs.core.chunk_rest.call(null,seq__24190__$1);
var G__24199 = c__8552__auto__;
var G__24200 = cljs.core.count.call(null,c__8552__auto__);
var G__24201 = 0;
seq__24190 = G__24198;
chunk__24191 = G__24199;
count__24192 = G__24200;
i__24193 = G__24201;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__24190__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__24202 = cljs.core.next.call(null,seq__24190__$1);
var G__24203 = null;
var G__24204 = 0;
var G__24205 = 0;
seq__24190 = G__24202;
chunk__24191 = G__24203;
count__24192 = G__24204;
i__24193 = G__24205;
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
begin = function(app,p__24183){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__24183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__15955__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15956__auto__ = (function (){var switch__15862__auto__ = (function (state_24246){var state_val_24247 = (state_24246[1]);if((state_val_24247 === 4))
{var inst_24234 = (state_24246[2]);var inst_24235 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_24234);var inst_24236 = cljs.core.get_method.call(null,foundation.app.effect,inst_24235);var inst_24237 = cljs.core.dissoc.call(null,inst_24234,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_24238 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_24234);var inst_24239 = [inst_24237,input,inst_24238];var inst_24240 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_24239,null));var inst_24241 = cljs.core.apply.call(null,inst_24236,inst_24240);var state_24246__$1 = (function (){var statearr_24248 = state_24246;(statearr_24248[7] = inst_24241);
return statearr_24248;
})();var statearr_24249_24258 = state_24246__$1;(statearr_24249_24258[2] = null);
(statearr_24249_24258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24247 === 3))
{var inst_24244 = (state_24246[2]);var state_24246__$1 = state_24246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24246__$1,inst_24244);
} else
{if((state_val_24247 === 2))
{var state_24246__$1 = state_24246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24246__$1,4,output);
} else
{if((state_val_24247 === 1))
{var state_24246__$1 = state_24246;var statearr_24250_24259 = state_24246__$1;(statearr_24250_24259[2] = null);
(statearr_24250_24259[1] = 2);
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
var state_machine__15863__auto____0 = (function (){var statearr_24254 = (new Array(8));(statearr_24254[0] = state_machine__15863__auto__);
(statearr_24254[1] = 1);
return statearr_24254;
});
var state_machine__15863__auto____1 = (function (state_24246){while(true){
var ret_value__15864__auto__ = (function (){try{while(true){
var result__15865__auto__ = switch__15862__auto__.call(null,state_24246);if(cljs.core.keyword_identical_QMARK_.call(null,result__15865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15865__auto__;
}
break;
}
}catch (e24255){if((e24255 instanceof Object))
{var ex__15866__auto__ = e24255;var statearr_24256_24260 = state_24246;(statearr_24256_24260[5] = ex__15866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24261 = state_24246;
state_24246 = G__24261;
continue;
}
} else
{return ret_value__15864__auto__;
}
break;
}
});
state_machine__15863__auto__ = function(state_24246){
switch(arguments.length){
case 0:
return state_machine__15863__auto____0.call(this);
case 1:
return state_machine__15863__auto____1.call(this,state_24246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15863__auto____0;
state_machine__15863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15863__auto____1;
return state_machine__15863__auto__;
})()
;})(switch__15862__auto__))
})();var state__15957__auto__ = (function (){var statearr_24257 = f__15956__auto__.call(null);(statearr_24257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15955__auto__);
return statearr_24257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15957__auto__);
}));
return c__15955__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__24266 = cljs.core.seq.call(null,script);var chunk__24267 = null;var count__24268 = 0;var i__24269 = 0;while(true){
if((i__24269 < count__24268))
{var message = cljs.core._nth.call(null,chunk__24267,i__24269);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__24270 = seq__24266;
var G__24271 = chunk__24267;
var G__24272 = count__24268;
var G__24273 = (i__24269 + 1);
seq__24266 = G__24270;
chunk__24267 = G__24271;
count__24268 = G__24272;
i__24269 = G__24273;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24266);if(temp__4092__auto__)
{var seq__24266__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24266__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24266__$1);{
var G__24274 = cljs.core.chunk_rest.call(null,seq__24266__$1);
var G__24275 = c__8552__auto__;
var G__24276 = cljs.core.count.call(null,c__8552__auto__);
var G__24277 = 0;
seq__24266 = G__24274;
chunk__24267 = G__24275;
count__24268 = G__24276;
i__24269 = G__24277;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__24266__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__24278 = cljs.core.next.call(null,seq__24266__$1);
var G__24279 = null;
var G__24280 = 0;
var G__24281 = 0;
seq__24266 = G__24278;
chunk__24267 = G__24279;
count__24268 = G__24280;
i__24269 = G__24281;
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
foundation.app.depends = (function (){var method_table__8661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8662__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8663__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8665__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__24282,graph){var map__24283 = p__24282;var map__24283__$1 = ((cljs.core.seq_QMARK_.call(null,map__24283))?cljs.core.apply.call(null,cljs.core.hash_map,map__24283):map__24283);var transform = cljs.core.get.call(null,map__24283__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__24284 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__24284,0,null);var path = cljs.core.nth.call(null,vec__24284,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__24287,graph){var map__24288 = p__24287;var map__24288__$1 = ((cljs.core.seq_QMARK_.call(null,map__24288))?cljs.core.apply.call(null,cljs.core.hash_map,map__24288):map__24288);var derives = cljs.core.get.call(null,map__24288__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__24289 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__24289,0,null);var output_path = cljs.core.nth.call(null,vec__24289,1,null);var input_spec = cljs.core.nth.call(null,vec__24289,2,null);var input_paths__$1 = (function (){var or__7828__auto__ = (function (){var and__7816__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__7816__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__7816__auto__;
}
})();if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__24285_SHARP_,p2__24286_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__24285_SHARP_,output_path,p2__24286_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__24290 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__24290,0,null);var input_paths = cljs.core.nth.call(null,vec__24290,1,null);var output_paths = cljs.core.nth.call(null,vec__24290,2,null);var input_spec = cljs.core.nth.call(null,vec__24290,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__24291){var vec__24292 = p__24291;var input_path = cljs.core.nth.call(null,vec__24292,0,null);var output_path = cljs.core.nth.call(null,vec__24292,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
}),graph,io_paths);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__7828__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__24294 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__24294,0,null);var large = cljs.core.nth.call(null,vec__24294,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__24295_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__24295_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__24296){var map__24299 = p__24296;var map__24299__$1 = ((cljs.core.seq_QMARK_.call(null,map__24299))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299):map__24299);var state = map__24299__$1;var change = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__24300 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__24300__$1 = ((cljs.core.seq_QMARK_.call(null,map__24300))?cljs.core.apply.call(null,cljs.core.hash_map,map__24300):map__24300);var state__$1 = map__24300__$1;var processed_inputs = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__8521__auto__ = (function iter__24305(s__24306){return (new cljs.core.LazySeq(null,(function (){var s__24306__$1 = s__24306;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24306__$1);if(temp__4092__auto__)
{var s__24306__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24306__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__24306__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__24308 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__24307 = 0;while(true){
if((i__24307 < size__8520__auto__))
{var dval = cljs.core._nth.call(null,c__8519__auto__,i__24307);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__24308,cljs.core.get.call(null,dispatches,dval));
{
var G__24309 = (i__24307 + 1);
i__24307 = G__24309;
continue;
}
} else
{{
var G__24310 = (i__24307 + 1);
i__24307 = G__24310;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24308),iter__24305.call(null,cljs.core.chunk_rest.call(null,s__24306__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24308),null);
}
} else
{var dval = cljs.core.first.call(null,s__24306__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__24305.call(null,cljs.core.rest.call(null,s__24306__$2)));
} else
{{
var G__24311 = cljs.core.rest.call(null,s__24306__$2);
s__24306__$1 = G__24311;
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
});return iter__8521__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__24312){
var state = cljs.core.first(arglist__24312);
arglist__24312 = cljs.core.next(arglist__24312);
var path = cljs.core.first(arglist__24312);
arglist__24312 = cljs.core.next(arglist__24312);
var f = cljs.core.first(arglist__24312);
var args = cljs.core.rest(arglist__24312);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__24313){var map__24316 = p__24313;var map__24316__$1 = ((cljs.core.seq_QMARK_.call(null,map__24316))?cljs.core.apply.call(null,cljs.core.hash_map,map__24316):map__24316);var state = map__24316__$1;var context = cljs.core.get.call(null,map__24316__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__24316__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__24317 = message;var map__24317__$1 = ((cljs.core.seq_QMARK_.call(null,map__24317))?cljs.core.apply.call(null,cljs.core.hash_map,map__24317):map__24317);var type = cljs.core.get.call(null,map__24317__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__24317__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__24319){var map__24321 = p__24319;var map__24321__$1 = ((cljs.core.seq_QMARK_.call(null,map__24321))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);var state = map__24321__$1;var context = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__24318_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__24318_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__24322){var vec__24323 = p__24322;var dispatch_val = cljs.core.nth.call(null,vec__24323,0,null);var multifn = cljs.core.nth.call(null,vec__24323,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__24324){var vec__24325 = p__24324;var dispatch_val = cljs.core.nth.call(null,vec__24325,0,null);var multifn = cljs.core.nth.call(null,vec__24325,1,null);return cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24326_SHARP_){return pred.call(null,foundation.app.dependents.call(null,state),p1__24326_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__24327){var map__24335 = p__24327;var map__24335__$1 = ((cljs.core.seq_QMARK_.call(null,map__24335))?cljs.core.apply.call(null,cljs.core.hash_map,map__24335):map__24335);var state = map__24335__$1;var context = cljs.core.get.call(null,map__24335__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__24336,p__24337){var map__24338 = p__24336;var map__24338__$1 = ((cljs.core.seq_QMARK_.call(null,map__24338))?cljs.core.apply.call(null,cljs.core.hash_map,map__24338):map__24338);var state__$1 = map__24338__$1;var change = cljs.core.get.call(null,map__24338__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__24339 = p__24337;var vec__24340 = cljs.core.nth.call(null,vec__24339,0,null);var input_paths = cljs.core.nth.call(null,vec__24340,0,null);var output_path = cljs.core.nth.call(null,vec__24340,1,null);var ispec = cljs.core.nth.call(null,vec__24340,2,null);var derive = vec__24340;var derive_fn = cljs.core.nth.call(null,vec__24339,1,null);var vec__24341 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__24341,0,null);var arg_names = cljs.core.nth.call(null,vec__24341,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__24342){var map__24352 = p__24342;var map__24352__$1 = ((cljs.core.seq_QMARK_.call(null,map__24352))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);var state = map__24352__$1;var context = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__24353,p__24354){var map__24355 = p__24353;var map__24355__$1 = ((cljs.core.seq_QMARK_.call(null,map__24355))?cljs.core.apply.call(null,cljs.core.hash_map,map__24355):map__24355);var state__$1 = map__24355__$1;var change = cljs.core.get.call(null,map__24355__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__24356 = p__24354;var vec__24357 = cljs.core.nth.call(null,vec__24356,0,null);var type = cljs.core.nth.call(null,vec__24357,0,null);var input_paths = cljs.core.nth.call(null,vec__24357,1,null);var output_paths = cljs.core.nth.call(null,vec__24357,2,null);var ispec = cljs.core.nth.call(null,vec__24357,3,null);var effect = vec__24357;var vec__24358 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__24358,0,null);var arg_names = cljs.core.nth.call(null,vec__24358,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__24359,input){var vec__24360 = p__24359;var input_path = cljs.core.nth.call(null,vec__24360,0,null);var output_path = cljs.core.nth.call(null,vec__24360,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
}),io,cljs.core.repeat.call(null,cljs.core.count.call(null,io),foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)))));
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8385__auto__){var self__ = this;
var this__8385__auto____$1 = this;var h__8239__auto__ = self__.__hash;if(!((h__8239__auto__ == null)))
{return h__8239__auto__;
} else
{var h__8239__auto____$1 = cljs.core.hash_imap.call(null,this__8385__auto____$1);self__.__hash = h__8239__auto____$1;
return h__8239__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8390__auto__,k__8391__auto__){var self__ = this;
var this__8390__auto____$1 = this;return cljs.core._lookup.call(null,this__8390__auto____$1,k__8391__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8392__auto__,k24362,else__8393__auto__){var self__ = this;
var this__8392__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k24362,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k24362,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k24362,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k24362,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k24362,else__8393__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8397__auto__,k__8398__auto__,G__24361){var self__ = this;
var this__8397__auto____$1 = this;var pred__24364 = cljs.core.keyword_identical_QMARK_;var expr__24365 = k__8398__auto__;if(cljs.core.truth_(pred__24364.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__24365)))
{return (new foundation.app.Application(G__24361,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24364.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__24365)))
{return (new foundation.app.Application(self__.state,G__24361,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24364.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__24365)))
{return (new foundation.app.Application(self__.state,self__.input,G__24361,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24364.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__24365)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__24361,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8398__auto__,G__24361),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8404__auto__,writer__8405__auto__,opts__8406__auto__){var self__ = this;
var this__8404__auto____$1 = this;var pr_pair__8407__auto__ = (function (keyval__8408__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8405__auto__,cljs.core.pr_writer,""," ","",opts__8406__auto__,keyval__8408__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8405__auto__,pr_pair__8407__auto__,"#foundation.app.Application{",", ","}",opts__8406__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8395__auto__,entry__8396__auto__){var self__ = this;
var this__8395__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8396__auto__))
{return cljs.core._assoc.call(null,this__8395__auto____$1,cljs.core._nth.call(null,entry__8396__auto__,0),cljs.core._nth.call(null,entry__8396__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8395__auto____$1,entry__8396__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8402__auto__){var self__ = this;
var this__8402__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8394__auto__){var self__ = this;
var this__8394__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8386__auto__,other__8387__auto__){var self__ = this;
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8389__auto__,G__24361){var self__ = this;
var this__8389__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__24361,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8388__auto__){var self__ = this;
var this__8388__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8399__auto__,k__8400__auto__){var self__ = this;
var this__8399__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__8400__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8399__auto____$1),self__.__meta),k__8400__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8400__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__8424__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__8424__auto__,writer__8425__auto__){return cljs.core._write.call(null,writer__8425__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__24363){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__24363),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__24363),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__24363),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__24363),null,cljs.core.dissoc.call(null,G__24363,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__24367_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__24367_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__24368){var map__24370 = p__24368;var map__24370__$1 = ((cljs.core.seq_QMARK_.call(null,map__24370))?cljs.core.apply.call(null,cljs.core.hash_map,map__24370):map__24370);var init_messages = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__24368 = null;if (arguments.length > 1) {
  p__24368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__24368);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__24371){
var root_id = cljs.core.first(arglist__24371);
var p__24368 = cljs.core.rest(arglist__24371);
return create_app__delegate(root_id,p__24368);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj24373 = {};return obj24373;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__7816__auto__ = _;if(and__7816__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__7816__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__8431__auto__ = (((_ == null))?null:_);return (function (){var or__7828__auto__ = (foundation.app.initialize[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (foundation.app.initialize["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});
