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
foundation.app.transform = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__37112__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__37112 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__37112__delegate.call(this,k,args);};
G__37112.cljs$lang$maxFixedArity = 1;
G__37112.cljs$lang$applyTo = (function (arglist__37113){
var k = cljs.core.first(arglist__37113);
var args = cljs.core.rest(arglist__37113);
return G__37112__delegate(k,args);
});
G__37112.cljs$core$IFn$_invoke$arity$variadic = G__37112__delegate;
return G__37112;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__37114,changes){var map__37118 = p__37114;var map__37118__$1 = ((cljs.core.seq_QMARK_.call(null,map__37118))?cljs.core.apply.call(null,cljs.core.hash_map,map__37118):map__37118);var processed_inputs = cljs.core.get.call(null,map__37118__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__37119){var vec__37120 = p__37119;var k = cljs.core.nth.call(null,vec__37120,0,null);var v = cljs.core.nth.call(null,vec__37120,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__37127){var vec__37128 = p__37127;var k = cljs.core.nth.call(null,vec__37128,0,null);var v = cljs.core.nth.call(null,vec__37128,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__37129){var vec__37130 = p__37129;var k = cljs.core.nth.call(null,vec__37130,0,null);var v = cljs.core.nth.call(null,vec__37130,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__37131){var vec__37132 = p__37131;var k = cljs.core.nth.call(null,vec__37132,0,null);var v = cljs.core.nth.call(null,vec__37132,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__37171){var vec__37172 = p__37171;var k = cljs.core.nth.call(null,vec__37172,0,null);var v = cljs.core.nth.call(null,vec__37172,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14481__auto__ = (function iter__37173(s__37174){return (new cljs.core.LazySeq(null,(function (){var s__37174__$1 = s__37174;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37174__$1);if(temp__4092__auto__)
{var s__37174__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37174__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37174__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37176 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37175 = 0;while(true){
if((i__37175 < size__14480__auto__))
{var vec__37191 = cljs.core._nth.call(null,c__14479__auto__,i__37175);var path = cljs.core.nth.call(null,vec__37191,0,null);var arg = cljs.core.nth.call(null,vec__37191,1,null);cljs.core.chunk_append.call(null,b__37176,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__37197 = data_model__$1;if(G__37197)
{var bit__14414__auto__ = (G__37197.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14414__auto__) || (G__37197.cljs$core$ILookup$))
{return true;
} else
{if((!G__37197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__37197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__37197);
}
})())
{var data_model_k__37196 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__37196,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__37205 = cljs.core.rest.call(null,ks);
var G__37206 = cljs.core.get.call(null,v,k,v);
var G__37207 = ret;
ks = G__37205;
data_model__$1 = G__37206;
ret = G__37207;
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
var G__37208 = (i__37175 + 1);
i__37175 = G__37208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37176),iter__37173.call(null,cljs.core.chunk_rest.call(null,s__37174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37176),null);
}
} else
{var vec__37198 = cljs.core.first.call(null,s__37174__$2);var path = cljs.core.nth.call(null,vec__37198,0,null);var arg = cljs.core.nth.call(null,vec__37198,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__37204 = data_model__$1;if(G__37204)
{var bit__14414__auto__ = (G__37204.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14414__auto__) || (G__37204.cljs$core$ILookup$))
{return true;
} else
{if((!G__37204.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__37204);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__37204);
}
})())
{var data_model_k__37203 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__37203,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__37209 = cljs.core.rest.call(null,ks);
var G__37210 = cljs.core.get.call(null,v,k,v);
var G__37211 = ret;
ks = G__37209;
data_model__$1 = G__37210;
ret = G__37211;
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
})(),iter__37173.call(null,cljs.core.rest.call(null,s__37174__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__37212){var map__37213 = p__37212;var map__37213__$1 = ((cljs.core.seq_QMARK_.call(null,map__37213))?cljs.core.apply.call(null,cljs.core.hash_map,map__37213):map__37213);var input_paths = cljs.core.get.call(null,map__37213__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__37213__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18801__auto___37268 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_37256){var state_val_37257 = (state_37256[1]);if((state_val_37257 === 4))
{var inst_37244 = (state_37256[2]);var inst_37245 = cljs.core.deref.call(null,app_model);var inst_37246 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_37244);var inst_37247 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_37246);var inst_37248 = foundation.app.tree.t.call(null,inst_37245);var inst_37249 = foundation.app.tree.since_t.call(null,inst_37247,inst_37248);var inst_37250 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_37251 = render_fn.call(null,inst_37249,inst_37250);var state_37256__$1 = (function (){var statearr_37258 = state_37256;(statearr_37258[7] = inst_37251);
return statearr_37258;
})();var statearr_37259_37269 = state_37256__$1;(statearr_37259_37269[2] = null);
(statearr_37259_37269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37257 === 3))
{var inst_37254 = (state_37256[2]);var state_37256__$1 = state_37256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37256__$1,inst_37254);
} else
{if((state_val_37257 === 2))
{var inst_37242 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_37256__$1 = state_37256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37256__$1,4,inst_37242);
} else
{if((state_val_37257 === 1))
{var state_37256__$1 = state_37256;var statearr_37260_37270 = state_37256__$1;(statearr_37260_37270[2] = null);
(statearr_37260_37270[1] = 2);
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
var state_machine__18732__auto____0 = (function (){var statearr_37264 = (new Array(8));(statearr_37264[0] = state_machine__18732__auto__);
(statearr_37264[1] = 1);
return statearr_37264;
});
var state_machine__18732__auto____1 = (function (state_37256){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_37256);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e37265){if((e37265 instanceof Object))
{var ex__18735__auto__ = e37265;var statearr_37266_37271 = state_37256;(statearr_37266_37271[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37272 = state_37256;
state_37256 = G__37272;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_37256){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_37256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_37267 = f__18802__auto__.call(null);(statearr_37267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___37268);
return statearr_37267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__37274 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__37274))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__37274))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18801__auto___37439 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_37405){var state_val_37406 = (state_37405[1]);if((state_val_37406 === 1))
{var state_37405__$1 = state_37405;var statearr_37407_37440 = state_37405__$1;(statearr_37407_37440[2] = null);
(statearr_37407_37440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 2))
{var state_37405__$1 = state_37405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37405__$1,4,input_queue__$1);
} else
{if((state_val_37406 === 3))
{var inst_37403 = (state_37405[2]);var state_37405__$1 = state_37405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37405__$1,inst_37403);
} else
{if((state_val_37406 === 4))
{var inst_37359 = (state_37405[2]);var inst_37364 = foundation.app.pre_process.call(null,inst_37359);var inst_37365 = cljs.core.seq.call(null,inst_37364);var inst_37366 = inst_37365;var inst_37367 = null;var inst_37368 = 0;var inst_37369 = 0;var state_37405__$1 = (function (){var statearr_37408 = state_37405;(statearr_37408[7] = inst_37369);
(statearr_37408[8] = inst_37368);
(statearr_37408[9] = inst_37366);
(statearr_37408[10] = inst_37367);
return statearr_37408;
})();var statearr_37409_37441 = state_37405__$1;(statearr_37409_37441[2] = null);
(statearr_37409_37441[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 5))
{var inst_37369 = (state_37405[7]);var inst_37368 = (state_37405[8]);var inst_37371 = (inst_37369 < inst_37368);var inst_37372 = inst_37371;var state_37405__$1 = state_37405;if(cljs.core.truth_(inst_37372))
{var statearr_37413_37442 = state_37405__$1;(statearr_37413_37442[1] = 7);
} else
{var statearr_37414_37443 = state_37405__$1;(statearr_37414_37443[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 6))
{var inst_37400 = (state_37405[2]);var state_37405__$1 = (function (){var statearr_37415 = state_37405;(statearr_37415[11] = inst_37400);
return statearr_37415;
})();var statearr_37416_37444 = state_37405__$1;(statearr_37416_37444[2] = null);
(statearr_37416_37444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 7))
{var inst_37369 = (state_37405[7]);var inst_37368 = (state_37405[8]);var inst_37366 = (state_37405[9]);var inst_37367 = (state_37405[10]);var inst_37374 = cljs.core._nth.call(null,inst_37367,inst_37369);var inst_37375 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_37374);var inst_37376 = (inst_37369 + 1);var tmp37410 = inst_37368;var tmp37411 = inst_37366;var tmp37412 = inst_37367;var inst_37366__$1 = tmp37411;var inst_37367__$1 = tmp37412;var inst_37368__$1 = tmp37410;var inst_37369__$1 = inst_37376;var state_37405__$1 = (function (){var statearr_37417 = state_37405;(statearr_37417[7] = inst_37369__$1);
(statearr_37417[8] = inst_37368__$1);
(statearr_37417[9] = inst_37366__$1);
(statearr_37417[10] = inst_37367__$1);
(statearr_37417[12] = inst_37375);
return statearr_37417;
})();var statearr_37418_37445 = state_37405__$1;(statearr_37418_37445[2] = null);
(statearr_37418_37445[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 8))
{var inst_37366 = (state_37405[9]);var inst_37379 = (state_37405[13]);var inst_37379__$1 = cljs.core.seq.call(null,inst_37366);var state_37405__$1 = (function (){var statearr_37419 = state_37405;(statearr_37419[13] = inst_37379__$1);
return statearr_37419;
})();if(inst_37379__$1)
{var statearr_37420_37446 = state_37405__$1;(statearr_37420_37446[1] = 10);
} else
{var statearr_37421_37447 = state_37405__$1;(statearr_37421_37447[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 9))
{var inst_37398 = (state_37405[2]);var state_37405__$1 = state_37405;var statearr_37422_37448 = state_37405__$1;(statearr_37422_37448[2] = inst_37398);
(statearr_37422_37448[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 10))
{var inst_37379 = (state_37405[13]);var inst_37381 = cljs.core.chunked_seq_QMARK_.call(null,inst_37379);var state_37405__$1 = state_37405;if(inst_37381)
{var statearr_37423_37449 = state_37405__$1;(statearr_37423_37449[1] = 13);
} else
{var statearr_37424_37450 = state_37405__$1;(statearr_37424_37450[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 11))
{var state_37405__$1 = state_37405;var statearr_37425_37451 = state_37405__$1;(statearr_37425_37451[2] = null);
(statearr_37425_37451[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 12))
{var inst_37396 = (state_37405[2]);var state_37405__$1 = state_37405;var statearr_37426_37452 = state_37405__$1;(statearr_37426_37452[2] = inst_37396);
(statearr_37426_37452[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 13))
{var inst_37379 = (state_37405[13]);var inst_37383 = cljs.core.chunk_first.call(null,inst_37379);var inst_37384 = cljs.core.chunk_rest.call(null,inst_37379);var inst_37385 = cljs.core.count.call(null,inst_37383);var inst_37366 = inst_37384;var inst_37367 = inst_37383;var inst_37368 = inst_37385;var inst_37369 = 0;var state_37405__$1 = (function (){var statearr_37427 = state_37405;(statearr_37427[7] = inst_37369);
(statearr_37427[8] = inst_37368);
(statearr_37427[9] = inst_37366);
(statearr_37427[10] = inst_37367);
return statearr_37427;
})();var statearr_37428_37453 = state_37405__$1;(statearr_37428_37453[2] = null);
(statearr_37428_37453[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 14))
{var inst_37379 = (state_37405[13]);var inst_37388 = cljs.core.first.call(null,inst_37379);var inst_37389 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_37388);var inst_37390 = cljs.core.next.call(null,inst_37379);var inst_37366 = inst_37390;var inst_37367 = null;var inst_37368 = 0;var inst_37369 = 0;var state_37405__$1 = (function (){var statearr_37429 = state_37405;(statearr_37429[7] = inst_37369);
(statearr_37429[8] = inst_37368);
(statearr_37429[9] = inst_37366);
(statearr_37429[10] = inst_37367);
(statearr_37429[14] = inst_37389);
return statearr_37429;
})();var statearr_37430_37454 = state_37405__$1;(statearr_37430_37454[2] = null);
(statearr_37430_37454[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37406 === 15))
{var inst_37393 = (state_37405[2]);var state_37405__$1 = state_37405;var statearr_37431_37455 = state_37405__$1;(statearr_37431_37455[2] = inst_37393);
(statearr_37431_37455[1] = 12);
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
});return ((function (switch__18731__auto__){
return (function() {
var state_machine__18732__auto__ = null;
var state_machine__18732__auto____0 = (function (){var statearr_37435 = (new Array(15));(statearr_37435[0] = state_machine__18732__auto__);
(statearr_37435[1] = 1);
return statearr_37435;
});
var state_machine__18732__auto____1 = (function (state_37405){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_37405);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e37436){if((e37436 instanceof Object))
{var ex__18735__auto__ = e37436;var statearr_37437_37456 = state_37405;(statearr_37437_37456[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37457 = state_37405;
state_37405 = G__37457;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_37405){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_37405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_37438 = f__18802__auto__.call(null);(statearr_37438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto___37439);
return statearr_37438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__37462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__37463 = null;var count__37464 = 0;var i__37465 = 0;while(true){
if((i__37465 < count__37464))
{var message = cljs.core._nth.call(null,chunk__37463,i__37465);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__37466 = seq__37462;
var G__37467 = chunk__37463;
var G__37468 = count__37464;
var G__37469 = (i__37465 + 1);
seq__37462 = G__37466;
chunk__37463 = G__37467;
count__37464 = G__37468;
i__37465 = G__37469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37462);if(temp__4092__auto__)
{var seq__37462__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37462__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__37462__$1);{
var G__37470 = cljs.core.chunk_rest.call(null,seq__37462__$1);
var G__37471 = c__14512__auto__;
var G__37472 = cljs.core.count.call(null,c__14512__auto__);
var G__37473 = 0;
seq__37462 = G__37470;
chunk__37463 = G__37471;
count__37464 = G__37472;
i__37465 = G__37473;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37462__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__37474 = cljs.core.next.call(null,seq__37462__$1);
var G__37475 = null;
var G__37476 = 0;
var G__37477 = 0;
seq__37462 = G__37474;
chunk__37463 = G__37475;
count__37464 = G__37476;
i__37465 = G__37477;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__37482){var vec__37483 = p__37482;var name = cljs.core.nth.call(null,vec__37483,0,null);var paths = cljs.core.nth.call(null,vec__37483,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__37484){var vec__37485 = p__37484;var k = cljs.core.nth.call(null,vec__37485,0,null);var v = cljs.core.nth.call(null,vec__37485,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__37486){var map__37492 = p__37486;var map__37492__$1 = ((cljs.core.seq_QMARK_.call(null,map__37492))?cljs.core.apply.call(null,cljs.core.hash_map,map__37492):map__37492);var focus = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__37493 = cljs.core.seq.call(null,init_messages__$1);var chunk__37494 = null;var count__37495 = 0;var i__37496 = 0;while(true){
if((i__37496 < count__37495))
{var message = cljs.core._nth.call(null,chunk__37494,i__37496);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37497 = seq__37493;
var G__37498 = chunk__37494;
var G__37499 = count__37495;
var G__37500 = (i__37496 + 1);
seq__37493 = G__37497;
chunk__37494 = G__37498;
count__37495 = G__37499;
i__37496 = G__37500;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37493);if(temp__4092__auto__)
{var seq__37493__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37493__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__37493__$1);{
var G__37501 = cljs.core.chunk_rest.call(null,seq__37493__$1);
var G__37502 = c__14512__auto__;
var G__37503 = cljs.core.count.call(null,c__14512__auto__);
var G__37504 = 0;
seq__37493 = G__37501;
chunk__37494 = G__37502;
count__37495 = G__37503;
i__37496 = G__37504;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37493__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37505 = cljs.core.next.call(null,seq__37493__$1);
var G__37506 = null;
var G__37507 = 0;
var G__37508 = 0;
seq__37493 = G__37505;
chunk__37494 = G__37506;
count__37495 = G__37507;
i__37496 = G__37508;
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
begin = function(app,p__37486){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__37486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__18801__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18802__auto__ = (function (){var switch__18731__auto__ = (function (state_37549){var state_val_37550 = (state_37549[1]);if((state_val_37550 === 4))
{var inst_37537 = (state_37549[2]);var inst_37538 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_37537);var inst_37539 = cljs.core.get_method.call(null,foundation.app.effect,inst_37538);var inst_37540 = cljs.core.dissoc.call(null,inst_37537,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_37541 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_37537);var inst_37542 = [inst_37540,input,inst_37541];var inst_37543 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_37542,null));var inst_37544 = cljs.core.apply.call(null,inst_37539,inst_37543);var state_37549__$1 = (function (){var statearr_37551 = state_37549;(statearr_37551[7] = inst_37544);
return statearr_37551;
})();var statearr_37552_37561 = state_37549__$1;(statearr_37552_37561[2] = null);
(statearr_37552_37561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37550 === 3))
{var inst_37547 = (state_37549[2]);var state_37549__$1 = state_37549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37549__$1,inst_37547);
} else
{if((state_val_37550 === 2))
{var state_37549__$1 = state_37549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37549__$1,4,output);
} else
{if((state_val_37550 === 1))
{var state_37549__$1 = state_37549;var statearr_37553_37562 = state_37549__$1;(statearr_37553_37562[2] = null);
(statearr_37553_37562[1] = 2);
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
var state_machine__18732__auto____0 = (function (){var statearr_37557 = (new Array(8));(statearr_37557[0] = state_machine__18732__auto__);
(statearr_37557[1] = 1);
return statearr_37557;
});
var state_machine__18732__auto____1 = (function (state_37549){while(true){
var ret_value__18733__auto__ = (function (){try{while(true){
var result__18734__auto__ = switch__18731__auto__.call(null,state_37549);if(cljs.core.keyword_identical_QMARK_.call(null,result__18734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18734__auto__;
}
break;
}
}catch (e37558){if((e37558 instanceof Object))
{var ex__18735__auto__ = e37558;var statearr_37559_37563 = state_37549;(statearr_37559_37563[5] = ex__18735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37564 = state_37549;
state_37549 = G__37564;
continue;
}
} else
{return ret_value__18733__auto__;
}
break;
}
});
state_machine__18732__auto__ = function(state_37549){
switch(arguments.length){
case 0:
return state_machine__18732__auto____0.call(this);
case 1:
return state_machine__18732__auto____1.call(this,state_37549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18732__auto____0;
state_machine__18732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18732__auto____1;
return state_machine__18732__auto__;
})()
;})(switch__18731__auto__))
})();var state__18803__auto__ = (function (){var statearr_37560 = f__18802__auto__.call(null);(statearr_37560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18801__auto__);
return statearr_37560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18803__auto__);
}));
return c__18801__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__37569 = cljs.core.seq.call(null,script);var chunk__37570 = null;var count__37571 = 0;var i__37572 = 0;while(true){
if((i__37572 < count__37571))
{var message = cljs.core._nth.call(null,chunk__37570,i__37572);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37573 = seq__37569;
var G__37574 = chunk__37570;
var G__37575 = count__37571;
var G__37576 = (i__37572 + 1);
seq__37569 = G__37573;
chunk__37570 = G__37574;
count__37571 = G__37575;
i__37572 = G__37576;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37569);if(temp__4092__auto__)
{var seq__37569__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37569__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__37569__$1);{
var G__37577 = cljs.core.chunk_rest.call(null,seq__37569__$1);
var G__37578 = c__14512__auto__;
var G__37579 = cljs.core.count.call(null,c__14512__auto__);
var G__37580 = 0;
seq__37569 = G__37577;
chunk__37570 = G__37578;
count__37571 = G__37579;
i__37572 = G__37580;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37569__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37581 = cljs.core.next.call(null,seq__37569__$1);
var G__37582 = null;
var G__37583 = 0;
var G__37584 = 0;
seq__37569 = G__37581;
chunk__37570 = G__37582;
count__37571 = G__37583;
i__37572 = G__37584;
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
foundation.app.depends = (function (){var method_table__14621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14625__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14625__auto__,method_table__14621__auto__,prefer_table__14622__auto__,method_cache__14623__auto__,cached_hierarchy__14624__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__37585,graph){var map__37586 = p__37585;var map__37586__$1 = ((cljs.core.seq_QMARK_.call(null,map__37586))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);var transform = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__37587 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__37587,0,null);var path = cljs.core.nth.call(null,vec__37587,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__37590,graph){var map__37591 = p__37590;var map__37591__$1 = ((cljs.core.seq_QMARK_.call(null,map__37591))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);var derives = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__37592 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__37592,0,null);var output_path = cljs.core.nth.call(null,vec__37592,1,null);var input_spec = cljs.core.nth.call(null,vec__37592,2,null);var input_paths__$1 = (function (){var or__13788__auto__ = (function (){var and__13776__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13776__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13776__auto__;
}
})();if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__37588_SHARP_,p2__37589_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__37588_SHARP_,output_path,p2__37589_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__37593 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__37593,0,null);var input_paths = cljs.core.nth.call(null,vec__37593,1,null);var output_paths = cljs.core.nth.call(null,vec__37593,2,null);var input_spec = cljs.core.nth.call(null,vec__37593,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__37594){var vec__37595 = p__37594;var input_path = cljs.core.nth.call(null,vec__37595,0,null);var output_path = cljs.core.nth.call(null,vec__37595,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
}),graph,io_paths);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__13788__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__37597 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__37597,0,null);var large = cljs.core.nth.call(null,vec__37597,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__37598_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__37598_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__37599){var map__37602 = p__37599;var map__37602__$1 = ((cljs.core.seq_QMARK_.call(null,map__37602))?cljs.core.apply.call(null,cljs.core.hash_map,map__37602):map__37602);var state = map__37602__$1;var change = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__37603 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__37603__$1 = ((cljs.core.seq_QMARK_.call(null,map__37603))?cljs.core.apply.call(null,cljs.core.hash_map,map__37603):map__37603);var state__$1 = map__37603__$1;var processed_inputs = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14481__auto__ = (function iter__37608(s__37609){return (new cljs.core.LazySeq(null,(function (){var s__37609__$1 = s__37609;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37609__$1);if(temp__4092__auto__)
{var s__37609__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37609__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37609__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37611 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37610 = 0;while(true){
if((i__37610 < size__14480__auto__))
{var dval = cljs.core._nth.call(null,c__14479__auto__,i__37610);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__37611,cljs.core.get.call(null,dispatches,dval));
{
var G__37612 = (i__37610 + 1);
i__37610 = G__37612;
continue;
}
} else
{{
var G__37613 = (i__37610 + 1);
i__37610 = G__37613;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37611),iter__37608.call(null,cljs.core.chunk_rest.call(null,s__37609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37611),null);
}
} else
{var dval = cljs.core.first.call(null,s__37609__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__37608.call(null,cljs.core.rest.call(null,s__37609__$2)));
} else
{{
var G__37614 = cljs.core.rest.call(null,s__37609__$2);
s__37609__$1 = G__37614;
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
});return iter__14481__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__37615){
var state = cljs.core.first(arglist__37615);
arglist__37615 = cljs.core.next(arglist__37615);
var path = cljs.core.first(arglist__37615);
arglist__37615 = cljs.core.next(arglist__37615);
var f = cljs.core.first(arglist__37615);
var args = cljs.core.rest(arglist__37615);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__37616){var map__37619 = p__37616;var map__37619__$1 = ((cljs.core.seq_QMARK_.call(null,map__37619))?cljs.core.apply.call(null,cljs.core.hash_map,map__37619):map__37619);var state = map__37619__$1;var context = cljs.core.get.call(null,map__37619__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__37619__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__37620 = message;var map__37620__$1 = ((cljs.core.seq_QMARK_.call(null,map__37620))?cljs.core.apply.call(null,cljs.core.hash_map,map__37620):map__37620);var type = cljs.core.get.call(null,map__37620__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__37620__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__37622){var map__37624 = p__37622;var map__37624__$1 = ((cljs.core.seq_QMARK_.call(null,map__37624))?cljs.core.apply.call(null,cljs.core.hash_map,map__37624):map__37624);var state = map__37624__$1;var context = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__37621_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__37621_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__37625){var vec__37626 = p__37625;var dispatch_val = cljs.core.nth.call(null,vec__37626,0,null);var multifn = cljs.core.nth.call(null,vec__37626,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__37627){var vec__37628 = p__37627;var dispatch_val = cljs.core.nth.call(null,vec__37628,0,null);var multifn = cljs.core.nth.call(null,vec__37628,1,null);return cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__37629_SHARP_){return pred.call(null,foundation.app.dependents.call(null,state),p1__37629_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__37630){var map__37638 = p__37630;var map__37638__$1 = ((cljs.core.seq_QMARK_.call(null,map__37638))?cljs.core.apply.call(null,cljs.core.hash_map,map__37638):map__37638);var state = map__37638__$1;var context = cljs.core.get.call(null,map__37638__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__37639,p__37640){var map__37641 = p__37639;var map__37641__$1 = ((cljs.core.seq_QMARK_.call(null,map__37641))?cljs.core.apply.call(null,cljs.core.hash_map,map__37641):map__37641);var state__$1 = map__37641__$1;var change = cljs.core.get.call(null,map__37641__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__37642 = p__37640;var vec__37643 = cljs.core.nth.call(null,vec__37642,0,null);var input_paths = cljs.core.nth.call(null,vec__37643,0,null);var output_path = cljs.core.nth.call(null,vec__37643,1,null);var ispec = cljs.core.nth.call(null,vec__37643,2,null);var derive = vec__37643;var derive_fn = cljs.core.nth.call(null,vec__37642,1,null);var vec__37644 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__37644,0,null);var arg_names = cljs.core.nth.call(null,vec__37644,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__37645){var map__37655 = p__37645;var map__37655__$1 = ((cljs.core.seq_QMARK_.call(null,map__37655))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);var state = map__37655__$1;var context = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__37656,p__37657){var map__37658 = p__37656;var map__37658__$1 = ((cljs.core.seq_QMARK_.call(null,map__37658))?cljs.core.apply.call(null,cljs.core.hash_map,map__37658):map__37658);var state__$1 = map__37658__$1;var change = cljs.core.get.call(null,map__37658__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__37659 = p__37657;var vec__37660 = cljs.core.nth.call(null,vec__37659,0,null);var type = cljs.core.nth.call(null,vec__37660,0,null);var input_paths = cljs.core.nth.call(null,vec__37660,1,null);var output_paths = cljs.core.nth.call(null,vec__37660,2,null);var ispec = cljs.core.nth.call(null,vec__37660,3,null);var effect = vec__37660;var vec__37661 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__37661,0,null);var arg_names = cljs.core.nth.call(null,vec__37661,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__37662,input){var vec__37663 = p__37662;var input_path = cljs.core.nth.call(null,vec__37663,0,null);var output_path = cljs.core.nth.call(null,vec__37663,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14345__auto__){var self__ = this;
var this__14345__auto____$1 = this;var h__14199__auto__ = self__.__hash;if(!((h__14199__auto__ == null)))
{return h__14199__auto__;
} else
{var h__14199__auto____$1 = cljs.core.hash_imap.call(null,this__14345__auto____$1);self__.__hash = h__14199__auto____$1;
return h__14199__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14350__auto__,k__14351__auto__){var self__ = this;
var this__14350__auto____$1 = this;return cljs.core._lookup.call(null,this__14350__auto____$1,k__14351__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14352__auto__,k37665,else__14353__auto__){var self__ = this;
var this__14352__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k37665,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37665,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37665,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37665,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k37665,else__14353__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14357__auto__,k__14358__auto__,G__37664){var self__ = this;
var this__14357__auto____$1 = this;var pred__37667 = cljs.core.keyword_identical_QMARK_;var expr__37668 = k__14358__auto__;if(cljs.core.truth_(pred__37667.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__37668)))
{return (new foundation.app.Application(G__37664,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37667.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__37668)))
{return (new foundation.app.Application(self__.state,G__37664,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37667.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__37668)))
{return (new foundation.app.Application(self__.state,self__.input,G__37664,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37667.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__37668)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__37664,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14358__auto__,G__37664),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14364__auto__,writer__14365__auto__,opts__14366__auto__){var self__ = this;
var this__14364__auto____$1 = this;var pr_pair__14367__auto__ = (function (keyval__14368__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14365__auto__,cljs.core.pr_writer,""," ","",opts__14366__auto__,keyval__14368__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14365__auto__,pr_pair__14367__auto__,"#foundation.app.Application{",", ","}",opts__14366__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14355__auto__,entry__14356__auto__){var self__ = this;
var this__14355__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14356__auto__))
{return cljs.core._assoc.call(null,this__14355__auto____$1,cljs.core._nth.call(null,entry__14356__auto__,0),cljs.core._nth.call(null,entry__14356__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14355__auto____$1,entry__14356__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14362__auto__){var self__ = this;
var this__14362__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14354__auto__){var self__ = this;
var this__14354__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14346__auto__,other__14347__auto__){var self__ = this;
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14349__auto__,G__37664){var self__ = this;
var this__14349__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__37664,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14348__auto__){var self__ = this;
var this__14348__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14359__auto__,k__14360__auto__){var self__ = this;
var this__14359__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14360__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14359__auto____$1),self__.__meta),k__14360__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14360__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14384__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14384__auto__,writer__14385__auto__){return cljs.core._write.call(null,writer__14385__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__37666){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__37666),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__37666),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__37666),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__37666),null,cljs.core.dissoc.call(null,G__37666,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__37670_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__37670_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__37671){var map__37673 = p__37671;var map__37673__$1 = ((cljs.core.seq_QMARK_.call(null,map__37673))?cljs.core.apply.call(null,cljs.core.hash_map,map__37673):map__37673);var init_messages = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__37673__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__37671 = null;if (arguments.length > 1) {
  p__37671 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__37671);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__37674){
var root_id = cljs.core.first(arglist__37674);
var p__37671 = cljs.core.rest(arglist__37674);
return create_app__delegate(root_id,p__37671);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj37676 = {};return obj37676;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13776__auto__ = _;if(and__13776__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13776__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14391__auto__ = (((_ == null))?null:_);return (function (){var or__13788__auto__ = (foundation.app.initialize[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (foundation.app.initialize["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map