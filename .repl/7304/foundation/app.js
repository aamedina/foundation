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
var G__28152__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__28152 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__28152__delegate.call(this,k,args);};
G__28152.cljs$lang$maxFixedArity = 1;
G__28152.cljs$lang$applyTo = (function (arglist__28153){
var k = cljs.core.first(arglist__28153);
var args = cljs.core.rest(arglist__28153);
return G__28152__delegate(k,args);
});
G__28152.cljs$core$IFn$_invoke$arity$variadic = G__28152__delegate;
return G__28152;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8665__auto__,method_table__8661__auto__,prefer_table__8662__auto__,method_cache__8663__auto__,cached_hierarchy__8664__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__28154,changes){var map__28158 = p__28154;var map__28158__$1 = ((cljs.core.seq_QMARK_.call(null,map__28158))?cljs.core.apply.call(null,cljs.core.hash_map,map__28158):map__28158);var processed_inputs = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__28159){var vec__28160 = p__28159;var k = cljs.core.nth.call(null,vec__28160,0,null);var v = cljs.core.nth.call(null,vec__28160,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__28167){var vec__28168 = p__28167;var k = cljs.core.nth.call(null,vec__28168,0,null);var v = cljs.core.nth.call(null,vec__28168,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__28169){var vec__28170 = p__28169;var k = cljs.core.nth.call(null,vec__28170,0,null);var v = cljs.core.nth.call(null,vec__28170,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__28171){var vec__28172 = p__28171;var k = cljs.core.nth.call(null,vec__28172,0,null);var v = cljs.core.nth.call(null,vec__28172,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__28211){var vec__28212 = p__28211;var k = cljs.core.nth.call(null,vec__28212,0,null);var v = cljs.core.nth.call(null,vec__28212,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__8521__auto__ = (function iter__28213(s__28214){return (new cljs.core.LazySeq(null,(function (){var s__28214__$1 = s__28214;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28214__$1);if(temp__4092__auto__)
{var s__28214__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28214__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__28214__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__28216 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__28215 = 0;while(true){
if((i__28215 < size__8520__auto__))
{var vec__28231 = cljs.core._nth.call(null,c__8519__auto__,i__28215);var path = cljs.core.nth.call(null,vec__28231,0,null);var arg = cljs.core.nth.call(null,vec__28231,1,null);cljs.core.chunk_append.call(null,b__28216,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__28237 = data_model__$1;if(G__28237)
{var bit__8454__auto__ = (G__28237.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8454__auto__) || (G__28237.cljs$core$ILookup$))
{return true;
} else
{if((!G__28237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__28237);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__28237);
}
})())
{var data_model_k__28236 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__28236,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__28245 = cljs.core.rest.call(null,ks);
var G__28246 = cljs.core.get.call(null,v,k,v);
var G__28247 = ret;
ks = G__28245;
data_model__$1 = G__28246;
ret = G__28247;
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
var G__28248 = (i__28215 + 1);
i__28215 = G__28248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28216),iter__28213.call(null,cljs.core.chunk_rest.call(null,s__28214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28216),null);
}
} else
{var vec__28238 = cljs.core.first.call(null,s__28214__$2);var path = cljs.core.nth.call(null,vec__28238,0,null);var arg = cljs.core.nth.call(null,vec__28238,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__28244 = data_model__$1;if(G__28244)
{var bit__8454__auto__ = (G__28244.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8454__auto__) || (G__28244.cljs$core$ILookup$))
{return true;
} else
{if((!G__28244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__28244);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__28244);
}
})())
{var data_model_k__28243 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__28243,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__28249 = cljs.core.rest.call(null,ks);
var G__28250 = cljs.core.get.call(null,v,k,v);
var G__28251 = ret;
ks = G__28249;
data_model__$1 = G__28250;
ret = G__28251;
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
})(),iter__28213.call(null,cljs.core.rest.call(null,s__28214__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__28252){var map__28253 = p__28252;var map__28253__$1 = ((cljs.core.seq_QMARK_.call(null,map__28253))?cljs.core.apply.call(null,cljs.core.hash_map,map__28253):map__28253);var input_paths = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__13587__auto___28308 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_28296){var state_val_28297 = (state_28296[1]);if((state_val_28297 === 4))
{var inst_28284 = (state_28296[2]);var inst_28285 = cljs.core.deref.call(null,app_model);var inst_28286 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_28284);var inst_28287 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_28286);var inst_28288 = foundation.app.tree.t.call(null,inst_28285);var inst_28289 = foundation.app.tree.since_t.call(null,inst_28287,inst_28288);var inst_28290 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_28291 = render_fn.call(null,inst_28289,inst_28290);var state_28296__$1 = (function (){var statearr_28298 = state_28296;(statearr_28298[7] = inst_28291);
return statearr_28298;
})();var statearr_28299_28309 = state_28296__$1;(statearr_28299_28309[2] = null);
(statearr_28299_28309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28297 === 3))
{var inst_28294 = (state_28296[2]);var state_28296__$1 = state_28296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28296__$1,inst_28294);
} else
{if((state_val_28297 === 2))
{var inst_28282 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_28296__$1 = state_28296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28296__$1,4,inst_28282);
} else
{if((state_val_28297 === 1))
{var state_28296__$1 = state_28296;var statearr_28300_28310 = state_28296__$1;(statearr_28300_28310[2] = null);
(statearr_28300_28310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_28304 = (new Array(8));(statearr_28304[0] = state_machine__13460__auto__);
(statearr_28304[1] = 1);
return statearr_28304;
});
var state_machine__13460__auto____1 = (function (state_28296){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_28296);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e28305){if((e28305 instanceof Object))
{var ex__13463__auto__ = e28305;var statearr_28306_28311 = state_28296;(statearr_28306_28311[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28312 = state_28296;
state_28296 = G__28312;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_28296){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_28296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_28307 = f__13588__auto__.call(null);(statearr_28307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___28308);
return statearr_28307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__28314 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__28314))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__28314))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__13587__auto___28479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_28445){var state_val_28446 = (state_28445[1]);if((state_val_28446 === 1))
{var state_28445__$1 = state_28445;var statearr_28447_28480 = state_28445__$1;(statearr_28447_28480[2] = null);
(statearr_28447_28480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 2))
{var state_28445__$1 = state_28445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28445__$1,4,input_queue__$1);
} else
{if((state_val_28446 === 3))
{var inst_28443 = (state_28445[2]);var state_28445__$1 = state_28445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28445__$1,inst_28443);
} else
{if((state_val_28446 === 4))
{var inst_28399 = (state_28445[2]);var inst_28404 = foundation.app.pre_process.call(null,inst_28399);var inst_28405 = cljs.core.seq.call(null,inst_28404);var inst_28406 = inst_28405;var inst_28407 = null;var inst_28408 = 0;var inst_28409 = 0;var state_28445__$1 = (function (){var statearr_28448 = state_28445;(statearr_28448[7] = inst_28407);
(statearr_28448[8] = inst_28408);
(statearr_28448[9] = inst_28409);
(statearr_28448[10] = inst_28406);
return statearr_28448;
})();var statearr_28449_28481 = state_28445__$1;(statearr_28449_28481[2] = null);
(statearr_28449_28481[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 5))
{var inst_28408 = (state_28445[8]);var inst_28409 = (state_28445[9]);var inst_28411 = (inst_28409 < inst_28408);var inst_28412 = inst_28411;var state_28445__$1 = state_28445;if(cljs.core.truth_(inst_28412))
{var statearr_28453_28482 = state_28445__$1;(statearr_28453_28482[1] = 7);
} else
{var statearr_28454_28483 = state_28445__$1;(statearr_28454_28483[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 6))
{var inst_28440 = (state_28445[2]);var state_28445__$1 = (function (){var statearr_28455 = state_28445;(statearr_28455[11] = inst_28440);
return statearr_28455;
})();var statearr_28456_28484 = state_28445__$1;(statearr_28456_28484[2] = null);
(statearr_28456_28484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 7))
{var inst_28407 = (state_28445[7]);var inst_28408 = (state_28445[8]);var inst_28409 = (state_28445[9]);var inst_28406 = (state_28445[10]);var inst_28414 = cljs.core._nth.call(null,inst_28407,inst_28409);var inst_28415 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_28414);var inst_28416 = (inst_28409 + 1);var tmp28450 = inst_28407;var tmp28451 = inst_28408;var tmp28452 = inst_28406;var inst_28406__$1 = tmp28452;var inst_28407__$1 = tmp28450;var inst_28408__$1 = tmp28451;var inst_28409__$1 = inst_28416;var state_28445__$1 = (function (){var statearr_28457 = state_28445;(statearr_28457[7] = inst_28407__$1);
(statearr_28457[8] = inst_28408__$1);
(statearr_28457[9] = inst_28409__$1);
(statearr_28457[12] = inst_28415);
(statearr_28457[10] = inst_28406__$1);
return statearr_28457;
})();var statearr_28458_28485 = state_28445__$1;(statearr_28458_28485[2] = null);
(statearr_28458_28485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 8))
{var inst_28406 = (state_28445[10]);var inst_28419 = (state_28445[13]);var inst_28419__$1 = cljs.core.seq.call(null,inst_28406);var state_28445__$1 = (function (){var statearr_28459 = state_28445;(statearr_28459[13] = inst_28419__$1);
return statearr_28459;
})();if(inst_28419__$1)
{var statearr_28460_28486 = state_28445__$1;(statearr_28460_28486[1] = 10);
} else
{var statearr_28461_28487 = state_28445__$1;(statearr_28461_28487[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 9))
{var inst_28438 = (state_28445[2]);var state_28445__$1 = state_28445;var statearr_28462_28488 = state_28445__$1;(statearr_28462_28488[2] = inst_28438);
(statearr_28462_28488[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 10))
{var inst_28419 = (state_28445[13]);var inst_28421 = cljs.core.chunked_seq_QMARK_.call(null,inst_28419);var state_28445__$1 = state_28445;if(inst_28421)
{var statearr_28463_28489 = state_28445__$1;(statearr_28463_28489[1] = 13);
} else
{var statearr_28464_28490 = state_28445__$1;(statearr_28464_28490[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 11))
{var state_28445__$1 = state_28445;var statearr_28465_28491 = state_28445__$1;(statearr_28465_28491[2] = null);
(statearr_28465_28491[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 12))
{var inst_28436 = (state_28445[2]);var state_28445__$1 = state_28445;var statearr_28466_28492 = state_28445__$1;(statearr_28466_28492[2] = inst_28436);
(statearr_28466_28492[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 13))
{var inst_28419 = (state_28445[13]);var inst_28423 = cljs.core.chunk_first.call(null,inst_28419);var inst_28424 = cljs.core.chunk_rest.call(null,inst_28419);var inst_28425 = cljs.core.count.call(null,inst_28423);var inst_28406 = inst_28424;var inst_28407 = inst_28423;var inst_28408 = inst_28425;var inst_28409 = 0;var state_28445__$1 = (function (){var statearr_28467 = state_28445;(statearr_28467[7] = inst_28407);
(statearr_28467[8] = inst_28408);
(statearr_28467[9] = inst_28409);
(statearr_28467[10] = inst_28406);
return statearr_28467;
})();var statearr_28468_28493 = state_28445__$1;(statearr_28468_28493[2] = null);
(statearr_28468_28493[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 14))
{var inst_28419 = (state_28445[13]);var inst_28428 = cljs.core.first.call(null,inst_28419);var inst_28429 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_28428);var inst_28430 = cljs.core.next.call(null,inst_28419);var inst_28406 = inst_28430;var inst_28407 = null;var inst_28408 = 0;var inst_28409 = 0;var state_28445__$1 = (function (){var statearr_28469 = state_28445;(statearr_28469[7] = inst_28407);
(statearr_28469[8] = inst_28408);
(statearr_28469[9] = inst_28409);
(statearr_28469[10] = inst_28406);
(statearr_28469[14] = inst_28429);
return statearr_28469;
})();var statearr_28470_28494 = state_28445__$1;(statearr_28470_28494[2] = null);
(statearr_28470_28494[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28446 === 15))
{var inst_28433 = (state_28445[2]);var state_28445__$1 = state_28445;var statearr_28471_28495 = state_28445__$1;(statearr_28471_28495[2] = inst_28433);
(statearr_28471_28495[1] = 12);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_28475 = (new Array(15));(statearr_28475[0] = state_machine__13460__auto__);
(statearr_28475[1] = 1);
return statearr_28475;
});
var state_machine__13460__auto____1 = (function (state_28445){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_28445);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e28476){if((e28476 instanceof Object))
{var ex__13463__auto__ = e28476;var statearr_28477_28496 = state_28445;(statearr_28477_28496[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28497 = state_28445;
state_28445 = G__28497;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_28445){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_28445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_28478 = f__13588__auto__.call(null);(statearr_28478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto___28479);
return statearr_28478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__28502 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__28503 = null;var count__28504 = 0;var i__28505 = 0;while(true){
if((i__28505 < count__28504))
{var message = cljs.core._nth.call(null,chunk__28503,i__28505);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__28506 = seq__28502;
var G__28507 = chunk__28503;
var G__28508 = count__28504;
var G__28509 = (i__28505 + 1);
seq__28502 = G__28506;
chunk__28503 = G__28507;
count__28504 = G__28508;
i__28505 = G__28509;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28502);if(temp__4092__auto__)
{var seq__28502__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28502__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__28502__$1);{
var G__28510 = cljs.core.chunk_rest.call(null,seq__28502__$1);
var G__28511 = c__8552__auto__;
var G__28512 = cljs.core.count.call(null,c__8552__auto__);
var G__28513 = 0;
seq__28502 = G__28510;
chunk__28503 = G__28511;
count__28504 = G__28512;
i__28505 = G__28513;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__28502__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__28514 = cljs.core.next.call(null,seq__28502__$1);
var G__28515 = null;
var G__28516 = 0;
var G__28517 = 0;
seq__28502 = G__28514;
chunk__28503 = G__28515;
count__28504 = G__28516;
i__28505 = G__28517;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__28522){var vec__28523 = p__28522;var name = cljs.core.nth.call(null,vec__28523,0,null);var paths = cljs.core.nth.call(null,vec__28523,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__28524){var vec__28525 = p__28524;var k = cljs.core.nth.call(null,vec__28525,0,null);var v = cljs.core.nth.call(null,vec__28525,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__28526){var map__28532 = p__28526;var map__28532__$1 = ((cljs.core.seq_QMARK_.call(null,map__28532))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);var focus = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__28533 = cljs.core.seq.call(null,init_messages__$1);var chunk__28534 = null;var count__28535 = 0;var i__28536 = 0;while(true){
if((i__28536 < count__28535))
{var message = cljs.core._nth.call(null,chunk__28534,i__28536);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__28537 = seq__28533;
var G__28538 = chunk__28534;
var G__28539 = count__28535;
var G__28540 = (i__28536 + 1);
seq__28533 = G__28537;
chunk__28534 = G__28538;
count__28535 = G__28539;
i__28536 = G__28540;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28533);if(temp__4092__auto__)
{var seq__28533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28533__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__28533__$1);{
var G__28541 = cljs.core.chunk_rest.call(null,seq__28533__$1);
var G__28542 = c__8552__auto__;
var G__28543 = cljs.core.count.call(null,c__8552__auto__);
var G__28544 = 0;
seq__28533 = G__28541;
chunk__28534 = G__28542;
count__28535 = G__28543;
i__28536 = G__28544;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__28533__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__28545 = cljs.core.next.call(null,seq__28533__$1);
var G__28546 = null;
var G__28547 = 0;
var G__28548 = 0;
seq__28533 = G__28545;
chunk__28534 = G__28546;
count__28535 = G__28547;
i__28536 = G__28548;
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
begin = function(app,p__28526){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__28526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__13587__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13588__auto__ = (function (){var switch__13459__auto__ = (function (state_28609){var state_val_28610 = (state_28609[1]);if((state_val_28610 === 7))
{var inst_28604 = (state_28609[2]);var state_28609__$1 = (function (){var statearr_28611 = state_28609;(statearr_28611[7] = inst_28604);
return statearr_28611;
})();var statearr_28612_28627 = state_28609__$1;(statearr_28612_28627[2] = null);
(statearr_28612_28627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28610 === 6))
{var inst_28590 = (state_28609[8]);var inst_28595 = cljs.core.reset_BANG_.call(null,last_message,inst_28590);var inst_28596 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_28590);var inst_28597 = cljs.core.get_method.call(null,foundation.app.effect,inst_28596);var inst_28598 = cljs.core.dissoc.call(null,inst_28590,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_28599 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_28590);var inst_28600 = [inst_28598,input,inst_28599];var inst_28601 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_28600,null));var inst_28602 = cljs.core.apply.call(null,inst_28597,inst_28601);var state_28609__$1 = (function (){var statearr_28613 = state_28609;(statearr_28613[9] = inst_28595);
return statearr_28613;
})();var statearr_28614_28628 = state_28609__$1;(statearr_28614_28628[2] = inst_28602);
(statearr_28614_28628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28610 === 5))
{var state_28609__$1 = state_28609;var statearr_28615_28629 = state_28609__$1;(statearr_28615_28629[2] = null);
(statearr_28615_28629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28610 === 4))
{var inst_28590 = (state_28609[8]);var inst_28590__$1 = (state_28609[2]);var inst_28591 = cljs.core.deref.call(null,last_message);var inst_28592 = cljs.core._EQ_.call(null,inst_28591,inst_28590__$1);var state_28609__$1 = (function (){var statearr_28616 = state_28609;(statearr_28616[8] = inst_28590__$1);
return statearr_28616;
})();if(inst_28592)
{var statearr_28617_28630 = state_28609__$1;(statearr_28617_28630[1] = 5);
} else
{var statearr_28618_28631 = state_28609__$1;(statearr_28618_28631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28610 === 3))
{var inst_28607 = (state_28609[2]);var state_28609__$1 = state_28609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28609__$1,inst_28607);
} else
{if((state_val_28610 === 2))
{var state_28609__$1 = state_28609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28609__$1,4,output);
} else
{if((state_val_28610 === 1))
{var state_28609__$1 = state_28609;var statearr_28619_28632 = state_28609__$1;(statearr_28619_28632[2] = null);
(statearr_28619_28632[1] = 2);
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
});return ((function (switch__13459__auto__){
return (function() {
var state_machine__13460__auto__ = null;
var state_machine__13460__auto____0 = (function (){var statearr_28623 = (new Array(10));(statearr_28623[0] = state_machine__13460__auto__);
(statearr_28623[1] = 1);
return statearr_28623;
});
var state_machine__13460__auto____1 = (function (state_28609){while(true){
var ret_value__13461__auto__ = (function (){try{while(true){
var result__13462__auto__ = switch__13459__auto__.call(null,state_28609);if(cljs.core.keyword_identical_QMARK_.call(null,result__13462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13462__auto__;
}
break;
}
}catch (e28624){if((e28624 instanceof Object))
{var ex__13463__auto__ = e28624;var statearr_28625_28633 = state_28609;(statearr_28625_28633[5] = ex__13463__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13461__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28634 = state_28609;
state_28609 = G__28634;
continue;
}
} else
{return ret_value__13461__auto__;
}
break;
}
});
state_machine__13460__auto__ = function(state_28609){
switch(arguments.length){
case 0:
return state_machine__13460__auto____0.call(this);
case 1:
return state_machine__13460__auto____1.call(this,state_28609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13460__auto____0;
state_machine__13460__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13460__auto____1;
return state_machine__13460__auto__;
})()
;})(switch__13459__auto__))
})();var state__13589__auto__ = (function (){var statearr_28626 = f__13588__auto__.call(null);(statearr_28626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13587__auto__);
return statearr_28626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13589__auto__);
}));
return c__13587__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__28639 = cljs.core.seq.call(null,script);var chunk__28640 = null;var count__28641 = 0;var i__28642 = 0;while(true){
if((i__28642 < count__28641))
{var message = cljs.core._nth.call(null,chunk__28640,i__28642);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__28643 = seq__28639;
var G__28644 = chunk__28640;
var G__28645 = count__28641;
var G__28646 = (i__28642 + 1);
seq__28639 = G__28643;
chunk__28640 = G__28644;
count__28641 = G__28645;
i__28642 = G__28646;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28639);if(temp__4092__auto__)
{var seq__28639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28639__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__28639__$1);{
var G__28647 = cljs.core.chunk_rest.call(null,seq__28639__$1);
var G__28648 = c__8552__auto__;
var G__28649 = cljs.core.count.call(null,c__8552__auto__);
var G__28650 = 0;
seq__28639 = G__28647;
chunk__28640 = G__28648;
count__28641 = G__28649;
i__28642 = G__28650;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__28639__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__28651 = cljs.core.next.call(null,seq__28639__$1);
var G__28652 = null;
var G__28653 = 0;
var G__28654 = 0;
seq__28639 = G__28651;
chunk__28640 = G__28652;
count__28641 = G__28653;
i__28642 = G__28654;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__28655,graph){var map__28656 = p__28655;var map__28656__$1 = ((cljs.core.seq_QMARK_.call(null,map__28656))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);var transform = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__28657 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__28657,0,null);var path = cljs.core.nth.call(null,vec__28657,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__28660,graph){var map__28661 = p__28660;var map__28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28661))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);var derives = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__28662 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__28662,0,null);var output_path = cljs.core.nth.call(null,vec__28662,1,null);var input_spec = cljs.core.nth.call(null,vec__28662,2,null);var input_paths__$1 = (function (){var or__7828__auto__ = (function (){var and__7816__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__7816__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__7816__auto__;
}
})();if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__28658_SHARP_,p2__28659_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__28658_SHARP_,output_path,p2__28659_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__28664 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__28664,0,null);var large = cljs.core.nth.call(null,vec__28664,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__28665_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__28665_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__28666){var map__28669 = p__28666;var map__28669__$1 = ((cljs.core.seq_QMARK_.call(null,map__28669))?cljs.core.apply.call(null,cljs.core.hash_map,map__28669):map__28669);var state = map__28669__$1;var change = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__28670 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__28670__$1 = ((cljs.core.seq_QMARK_.call(null,map__28670))?cljs.core.apply.call(null,cljs.core.hash_map,map__28670):map__28670);var state__$1 = map__28670__$1;var processed_inputs = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__8521__auto__ = (function iter__28675(s__28676){return (new cljs.core.LazySeq(null,(function (){var s__28676__$1 = s__28676;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28676__$1);if(temp__4092__auto__)
{var s__28676__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28676__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__28676__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__28678 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__28677 = 0;while(true){
if((i__28677 < size__8520__auto__))
{var dval = cljs.core._nth.call(null,c__8519__auto__,i__28677);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__28678,cljs.core.get.call(null,dispatches,dval));
{
var G__28679 = (i__28677 + 1);
i__28677 = G__28679;
continue;
}
} else
{{
var G__28680 = (i__28677 + 1);
i__28677 = G__28680;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28678),iter__28675.call(null,cljs.core.chunk_rest.call(null,s__28676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28678),null);
}
} else
{var dval = cljs.core.first.call(null,s__28676__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__28675.call(null,cljs.core.rest.call(null,s__28676__$2)));
} else
{{
var G__28681 = cljs.core.rest.call(null,s__28676__$2);
s__28676__$1 = G__28681;
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
update_state.cljs$lang$applyTo = (function (arglist__28682){
var state = cljs.core.first(arglist__28682);
arglist__28682 = cljs.core.next(arglist__28682);
var path = cljs.core.first(arglist__28682);
arglist__28682 = cljs.core.next(arglist__28682);
var f = cljs.core.first(arglist__28682);
var args = cljs.core.rest(arglist__28682);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__28683){var map__28686 = p__28683;var map__28686__$1 = ((cljs.core.seq_QMARK_.call(null,map__28686))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);var state = map__28686__$1;var context = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__28687 = message;var map__28687__$1 = ((cljs.core.seq_QMARK_.call(null,map__28687))?cljs.core.apply.call(null,cljs.core.hash_map,map__28687):map__28687);var type = cljs.core.get.call(null,map__28687__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__28687__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__28689){var map__28691 = p__28689;var map__28691__$1 = ((cljs.core.seq_QMARK_.call(null,map__28691))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);var state = map__28691__$1;var context = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__28688_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__28688_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__28692){var vec__28693 = p__28692;var dispatch_val = cljs.core.nth.call(null,vec__28693,0,null);var multifn = cljs.core.nth.call(null,vec__28693,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__28694){var vec__28695 = p__28694;var dispatch_val = cljs.core.nth.call(null,vec__28695,0,null);var multifn = cljs.core.nth.call(null,vec__28695,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__28696_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__28696_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__28697){var map__28705 = p__28697;var map__28705__$1 = ((cljs.core.seq_QMARK_.call(null,map__28705))?cljs.core.apply.call(null,cljs.core.hash_map,map__28705):map__28705);var state = map__28705__$1;var context = cljs.core.get.call(null,map__28705__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__28706,p__28707){var map__28708 = p__28706;var map__28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28708))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);var state__$1 = map__28708__$1;var change = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__28709 = p__28707;var vec__28710 = cljs.core.nth.call(null,vec__28709,0,null);var input_paths = cljs.core.nth.call(null,vec__28710,0,null);var output_path = cljs.core.nth.call(null,vec__28710,1,null);var ispec = cljs.core.nth.call(null,vec__28710,2,null);var derive = vec__28710;var derive_fn = cljs.core.nth.call(null,vec__28709,1,null);var vec__28711 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__28711,0,null);var arg_names = cljs.core.nth.call(null,vec__28711,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__28712){var map__28720 = p__28712;var map__28720__$1 = ((cljs.core.seq_QMARK_.call(null,map__28720))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);var state = map__28720__$1;var context = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__28721,p__28722){var map__28723 = p__28721;var map__28723__$1 = ((cljs.core.seq_QMARK_.call(null,map__28723))?cljs.core.apply.call(null,cljs.core.hash_map,map__28723):map__28723);var state__$1 = map__28723__$1;var change = cljs.core.get.call(null,map__28723__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__28724 = p__28722;var vec__28725 = cljs.core.nth.call(null,vec__28724,0,null);var type = cljs.core.nth.call(null,vec__28725,0,null);var input_paths = cljs.core.nth.call(null,vec__28725,1,null);var ispec = cljs.core.nth.call(null,vec__28725,2,null);var effect = vec__28725;var vec__28726 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__28726,0,null);var arg_names = cljs.core.nth.call(null,vec__28726,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8392__auto__,k28728,else__8393__auto__){var self__ = this;
var this__8392__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28728,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28728,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28728,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28728,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28728,else__8393__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8397__auto__,k__8398__auto__,G__28727){var self__ = this;
var this__8397__auto____$1 = this;var pred__28730 = cljs.core.keyword_identical_QMARK_;var expr__28731 = k__8398__auto__;if(cljs.core.truth_(pred__28730.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__28731)))
{return (new foundation.app.Application(G__28727,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28730.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__28731)))
{return (new foundation.app.Application(self__.state,G__28727,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28730.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__28731)))
{return (new foundation.app.Application(self__.state,self__.input,G__28727,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28730.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__28731)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__28727,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8398__auto__,G__28727),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8389__auto__,G__28727){var self__ = this;
var this__8389__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__28727,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__28729){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__28729),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__28729),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__28729),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__28729),null,cljs.core.dissoc.call(null,G__28729,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__28733_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__28733_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__28734){var map__28736 = p__28734;var map__28736__$1 = ((cljs.core.seq_QMARK_.call(null,map__28736))?cljs.core.apply.call(null,cljs.core.hash_map,map__28736):map__28736);var init_messages = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__28736__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__28734 = null;if (arguments.length > 1) {
  p__28734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__28734);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__28737){
var root_id = cljs.core.first(arglist__28737);
var p__28734 = cljs.core.rest(arglist__28737);
return create_app__delegate(root_id,p__28734);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj28739 = {};return obj28739;
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
