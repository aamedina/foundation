// Compiled by ClojureScript 0.0-2120
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
foundation.app.transform = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__370097__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__370097 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__370097__delegate.call(this,k,args);};
G__370097.cljs$lang$maxFixedArity = 1;
G__370097.cljs$lang$applyTo = (function (arglist__370098){
var k = cljs.core.first(arglist__370098);
var args = cljs.core.rest(arglist__370098);
return G__370097__delegate(k,args);
});
G__370097.cljs$core$IFn$_invoke$arity$variadic = G__370097__delegate;
return G__370097;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__370099,changes){var map__370103 = p__370099;var map__370103__$1 = ((cljs.core.seq_QMARK_.call(null,map__370103))?cljs.core.apply.call(null,cljs.core.hash_map,map__370103):map__370103);var processed_inputs = cljs.core.get.call(null,map__370103__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__370104){var vec__370105 = p__370104;var k = cljs.core.nth.call(null,vec__370105,0,null);var v = cljs.core.nth.call(null,vec__370105,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__370112){var vec__370113 = p__370112;var k = cljs.core.nth.call(null,vec__370113,0,null);var v = cljs.core.nth.call(null,vec__370113,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__370114){var vec__370115 = p__370114;var k = cljs.core.nth.call(null,vec__370115,0,null);var v = cljs.core.nth.call(null,vec__370115,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__370116){var vec__370117 = p__370116;var k = cljs.core.nth.call(null,vec__370117,0,null);var v = cljs.core.nth.call(null,vec__370117,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__370164){var vec__370165 = p__370164;var k = cljs.core.nth.call(null,vec__370165,0,null);var v = cljs.core.nth.call(null,vec__370165,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14677__auto__ = (function iter__370166(s__370167){return (new cljs.core.LazySeq(null,(function (){var s__370167__$1 = s__370167;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__370167__$1);if(temp__4092__auto__)
{var s__370167__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__370167__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__370167__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__370169 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__370168 = 0;while(true){
if((i__370168 < size__14676__auto__))
{var vec__370184 = cljs.core._nth.call(null,c__14675__auto__,i__370168);var path = cljs.core.nth.call(null,vec__370184,0,null);var arg = cljs.core.nth.call(null,vec__370184,1,null);cljs.core.chunk_append.call(null,b__370169,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__370190 = data_model__$1;if(G__370190)
{var bit__14610__auto__ = (G__370190.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14610__auto__) || (G__370190.cljs$core$ILookup$))
{return true;
} else
{if((!G__370190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__370190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__370190);
}
})())
{var data_model_k__370189 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__370189,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__370198 = cljs.core.rest.call(null,ks);
var G__370199 = cljs.core.get.call(null,v,k,v);
var G__370200 = ret;
ks = G__370198;
data_model__$1 = G__370199;
ret = G__370200;
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
var G__370201 = (i__370168 + 1);
i__370168 = G__370201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370169),iter__370166.call(null,cljs.core.chunk_rest.call(null,s__370167__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370169),null);
}
} else
{var vec__370191 = cljs.core.first.call(null,s__370167__$2);var path = cljs.core.nth.call(null,vec__370191,0,null);var arg = cljs.core.nth.call(null,vec__370191,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__370197 = data_model__$1;if(G__370197)
{var bit__14610__auto__ = (G__370197.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14610__auto__) || (G__370197.cljs$core$ILookup$))
{return true;
} else
{if((!G__370197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__370197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__370197);
}
})())
{var data_model_k__370196 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__370196,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__370202 = cljs.core.rest.call(null,ks);
var G__370203 = cljs.core.get.call(null,v,k,v);
var G__370204 = ret;
ks = G__370202;
data_model__$1 = G__370203;
ret = G__370204;
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
})(),iter__370166.call(null,cljs.core.rest.call(null,s__370167__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__370205){var map__370206 = p__370205;var map__370206__$1 = ((cljs.core.seq_QMARK_.call(null,map__370206))?cljs.core.apply.call(null,cljs.core.hash_map,map__370206):map__370206);var input_paths = cljs.core.get.call(null,map__370206__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__370206__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18289__auto___370261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_370249){var state_val_370250 = (state_370249[1]);if((state_val_370250 === 4))
{var inst_370237 = (state_370249[2]);var inst_370238 = cljs.core.deref.call(null,app_model);var inst_370239 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_370237);var inst_370240 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_370239);var inst_370241 = foundation.app.tree.t.call(null,inst_370238);var inst_370242 = foundation.app.tree.since_t.call(null,inst_370240,inst_370241);var inst_370243 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_370244 = render_fn.call(null,inst_370242,inst_370243);var state_370249__$1 = (function (){var statearr_370251 = state_370249;(statearr_370251[7] = inst_370244);
return statearr_370251;
})();var statearr_370252_370262 = state_370249__$1;(statearr_370252_370262[2] = null);
(statearr_370252_370262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370250 === 3))
{var inst_370247 = (state_370249[2]);var state_370249__$1 = state_370249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_370249__$1,inst_370247);
} else
{if((state_val_370250 === 2))
{var inst_370235 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_370249__$1 = state_370249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_370249__$1,4,inst_370235);
} else
{if((state_val_370250 === 1))
{var state_370249__$1 = state_370249;var statearr_370253_370263 = state_370249__$1;(statearr_370253_370263[2] = null);
(statearr_370253_370263[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_370257 = [null,null,null,null,null,null,null,null];(statearr_370257[0] = state_machine__18220__auto__);
(statearr_370257[1] = 1);
return statearr_370257;
});
var state_machine__18220__auto____1 = (function (state_370249){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_370249);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e370258){if((e370258 instanceof Object))
{var ex__18223__auto__ = e370258;var statearr_370259_370264 = state_370249;(statearr_370259_370264[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_370249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__370265 = state_370249;
state_370249 = G__370265;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_370249){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_370249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_370260 = f__18290__auto__.call(null);(statearr_370260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___370261);
return statearr_370260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__370267 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__370267))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__370267))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18289__auto___370432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_370398){var state_val_370399 = (state_370398[1]);if((state_val_370399 === 1))
{var state_370398__$1 = state_370398;var statearr_370400_370433 = state_370398__$1;(statearr_370400_370433[2] = null);
(statearr_370400_370433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 2))
{var state_370398__$1 = state_370398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_370398__$1,4,input_queue__$1);
} else
{if((state_val_370399 === 3))
{var inst_370396 = (state_370398[2]);var state_370398__$1 = state_370398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_370398__$1,inst_370396);
} else
{if((state_val_370399 === 4))
{var inst_370352 = (state_370398[2]);var inst_370357 = foundation.app.pre_process.call(null,inst_370352);var inst_370358 = cljs.core.seq.call(null,inst_370357);var inst_370359 = inst_370358;var inst_370360 = null;var inst_370361 = 0;var inst_370362 = 0;var state_370398__$1 = (function (){var statearr_370401 = state_370398;(statearr_370401[7] = inst_370362);
(statearr_370401[8] = inst_370361);
(statearr_370401[9] = inst_370360);
(statearr_370401[10] = inst_370359);
return statearr_370401;
})();var statearr_370402_370434 = state_370398__$1;(statearr_370402_370434[2] = null);
(statearr_370402_370434[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 5))
{var inst_370362 = (state_370398[7]);var inst_370361 = (state_370398[8]);var inst_370364 = (inst_370362 < inst_370361);var inst_370365 = inst_370364;var state_370398__$1 = state_370398;if(cljs.core.truth_(inst_370365))
{var statearr_370406_370435 = state_370398__$1;(statearr_370406_370435[1] = 7);
} else
{var statearr_370407_370436 = state_370398__$1;(statearr_370407_370436[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 6))
{var inst_370393 = (state_370398[2]);var state_370398__$1 = (function (){var statearr_370408 = state_370398;(statearr_370408[11] = inst_370393);
return statearr_370408;
})();var statearr_370409_370437 = state_370398__$1;(statearr_370409_370437[2] = null);
(statearr_370409_370437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 7))
{var inst_370362 = (state_370398[7]);var inst_370361 = (state_370398[8]);var inst_370360 = (state_370398[9]);var inst_370359 = (state_370398[10]);var inst_370367 = cljs.core._nth.call(null,inst_370360,inst_370362);var inst_370368 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_370367);var inst_370369 = (inst_370362 + 1);var tmp370403 = inst_370361;var tmp370404 = inst_370360;var tmp370405 = inst_370359;var inst_370359__$1 = tmp370405;var inst_370360__$1 = tmp370404;var inst_370361__$1 = tmp370403;var inst_370362__$1 = inst_370369;var state_370398__$1 = (function (){var statearr_370410 = state_370398;(statearr_370410[7] = inst_370362__$1);
(statearr_370410[8] = inst_370361__$1);
(statearr_370410[9] = inst_370360__$1);
(statearr_370410[10] = inst_370359__$1);
(statearr_370410[12] = inst_370368);
return statearr_370410;
})();var statearr_370411_370438 = state_370398__$1;(statearr_370411_370438[2] = null);
(statearr_370411_370438[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 8))
{var inst_370372 = (state_370398[13]);var inst_370359 = (state_370398[10]);var inst_370372__$1 = cljs.core.seq.call(null,inst_370359);var state_370398__$1 = (function (){var statearr_370412 = state_370398;(statearr_370412[13] = inst_370372__$1);
return statearr_370412;
})();if(inst_370372__$1)
{var statearr_370413_370439 = state_370398__$1;(statearr_370413_370439[1] = 10);
} else
{var statearr_370414_370440 = state_370398__$1;(statearr_370414_370440[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 9))
{var inst_370391 = (state_370398[2]);var state_370398__$1 = state_370398;var statearr_370415_370441 = state_370398__$1;(statearr_370415_370441[2] = inst_370391);
(statearr_370415_370441[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 10))
{var inst_370372 = (state_370398[13]);var inst_370374 = cljs.core.chunked_seq_QMARK_.call(null,inst_370372);var state_370398__$1 = state_370398;if(inst_370374)
{var statearr_370416_370442 = state_370398__$1;(statearr_370416_370442[1] = 13);
} else
{var statearr_370417_370443 = state_370398__$1;(statearr_370417_370443[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 11))
{var state_370398__$1 = state_370398;var statearr_370418_370444 = state_370398__$1;(statearr_370418_370444[2] = null);
(statearr_370418_370444[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 12))
{var inst_370389 = (state_370398[2]);var state_370398__$1 = state_370398;var statearr_370419_370445 = state_370398__$1;(statearr_370419_370445[2] = inst_370389);
(statearr_370419_370445[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 13))
{var inst_370372 = (state_370398[13]);var inst_370376 = cljs.core.chunk_first.call(null,inst_370372);var inst_370377 = cljs.core.chunk_rest.call(null,inst_370372);var inst_370378 = cljs.core.count.call(null,inst_370376);var inst_370359 = inst_370377;var inst_370360 = inst_370376;var inst_370361 = inst_370378;var inst_370362 = 0;var state_370398__$1 = (function (){var statearr_370420 = state_370398;(statearr_370420[7] = inst_370362);
(statearr_370420[8] = inst_370361);
(statearr_370420[9] = inst_370360);
(statearr_370420[10] = inst_370359);
return statearr_370420;
})();var statearr_370421_370446 = state_370398__$1;(statearr_370421_370446[2] = null);
(statearr_370421_370446[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 14))
{var inst_370372 = (state_370398[13]);var inst_370381 = cljs.core.first.call(null,inst_370372);var inst_370382 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_370381);var inst_370383 = cljs.core.next.call(null,inst_370372);var inst_370359 = inst_370383;var inst_370360 = null;var inst_370361 = 0;var inst_370362 = 0;var state_370398__$1 = (function (){var statearr_370422 = state_370398;(statearr_370422[7] = inst_370362);
(statearr_370422[8] = inst_370361);
(statearr_370422[9] = inst_370360);
(statearr_370422[10] = inst_370359);
(statearr_370422[14] = inst_370382);
return statearr_370422;
})();var statearr_370423_370447 = state_370398__$1;(statearr_370423_370447[2] = null);
(statearr_370423_370447[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370399 === 15))
{var inst_370386 = (state_370398[2]);var state_370398__$1 = state_370398;var statearr_370424_370448 = state_370398__$1;(statearr_370424_370448[2] = inst_370386);
(statearr_370424_370448[1] = 12);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_370428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_370428[0] = state_machine__18220__auto__);
(statearr_370428[1] = 1);
return statearr_370428;
});
var state_machine__18220__auto____1 = (function (state_370398){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_370398);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e370429){if((e370429 instanceof Object))
{var ex__18223__auto__ = e370429;var statearr_370430_370449 = state_370398;(statearr_370430_370449[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_370398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__370450 = state_370398;
state_370398 = G__370450;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_370398){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_370398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_370431 = f__18290__auto__.call(null);(statearr_370431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___370432);
return statearr_370431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__370455 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__370456 = null;var count__370457 = 0;var i__370458 = 0;while(true){
if((i__370458 < count__370457))
{var message = cljs.core._nth.call(null,chunk__370456,i__370458);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__370459 = seq__370455;
var G__370460 = chunk__370456;
var G__370461 = count__370457;
var G__370462 = (i__370458 + 1);
seq__370455 = G__370459;
chunk__370456 = G__370460;
count__370457 = G__370461;
i__370458 = G__370462;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370455);if(temp__4092__auto__)
{var seq__370455__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370455__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370455__$1);{
var G__370463 = cljs.core.chunk_rest.call(null,seq__370455__$1);
var G__370464 = c__14708__auto__;
var G__370465 = cljs.core.count.call(null,c__14708__auto__);
var G__370466 = 0;
seq__370455 = G__370463;
chunk__370456 = G__370464;
count__370457 = G__370465;
i__370458 = G__370466;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__370455__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__370467 = cljs.core.next.call(null,seq__370455__$1);
var G__370468 = null;
var G__370469 = 0;
var G__370470 = 0;
seq__370455 = G__370467;
chunk__370456 = G__370468;
count__370457 = G__370469;
i__370458 = G__370470;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__370475){var vec__370476 = p__370475;var name = cljs.core.nth.call(null,vec__370476,0,null);var paths = cljs.core.nth.call(null,vec__370476,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__370477){var vec__370478 = p__370477;var k = cljs.core.nth.call(null,vec__370478,0,null);var v = cljs.core.nth.call(null,vec__370478,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__370479){var map__370485 = p__370479;var map__370485__$1 = ((cljs.core.seq_QMARK_.call(null,map__370485))?cljs.core.apply.call(null,cljs.core.hash_map,map__370485):map__370485);var focus = cljs.core.get.call(null,map__370485__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__370485__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__370486 = cljs.core.seq.call(null,init_messages__$1);var chunk__370487 = null;var count__370488 = 0;var i__370489 = 0;while(true){
if((i__370489 < count__370488))
{var message = cljs.core._nth.call(null,chunk__370487,i__370489);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__370490 = seq__370486;
var G__370491 = chunk__370487;
var G__370492 = count__370488;
var G__370493 = (i__370489 + 1);
seq__370486 = G__370490;
chunk__370487 = G__370491;
count__370488 = G__370492;
i__370489 = G__370493;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370486);if(temp__4092__auto__)
{var seq__370486__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370486__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370486__$1);{
var G__370494 = cljs.core.chunk_rest.call(null,seq__370486__$1);
var G__370495 = c__14708__auto__;
var G__370496 = cljs.core.count.call(null,c__14708__auto__);
var G__370497 = 0;
seq__370486 = G__370494;
chunk__370487 = G__370495;
count__370488 = G__370496;
i__370489 = G__370497;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__370486__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__370498 = cljs.core.next.call(null,seq__370486__$1);
var G__370499 = null;
var G__370500 = 0;
var G__370501 = 0;
seq__370486 = G__370498;
chunk__370487 = G__370499;
count__370488 = G__370500;
i__370489 = G__370501;
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
begin = function(app,p__370479){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__370479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_370562){var state_val_370563 = (state_370562[1]);if((state_val_370563 === 7))
{var inst_370557 = (state_370562[2]);var state_370562__$1 = (function (){var statearr_370564 = state_370562;(statearr_370564[7] = inst_370557);
return statearr_370564;
})();var statearr_370565_370580 = state_370562__$1;(statearr_370565_370580[2] = null);
(statearr_370565_370580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370563 === 6))
{var inst_370543 = (state_370562[8]);var inst_370548 = cljs.core.reset_BANG_.call(null,last_message,inst_370543);var inst_370549 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_370543);var inst_370550 = cljs.core.get_method.call(null,foundation.app.effect,inst_370549);var inst_370551 = cljs.core.dissoc.call(null,inst_370543,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_370552 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_370543);var inst_370553 = [inst_370551,input,inst_370552];var inst_370554 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370553,null));var inst_370555 = cljs.core.apply.call(null,inst_370550,inst_370554);var state_370562__$1 = (function (){var statearr_370566 = state_370562;(statearr_370566[9] = inst_370548);
return statearr_370566;
})();var statearr_370567_370581 = state_370562__$1;(statearr_370567_370581[2] = inst_370555);
(statearr_370567_370581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370563 === 5))
{var state_370562__$1 = state_370562;var statearr_370568_370582 = state_370562__$1;(statearr_370568_370582[2] = null);
(statearr_370568_370582[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370563 === 4))
{var inst_370543 = (state_370562[8]);var inst_370543__$1 = (state_370562[2]);var inst_370544 = cljs.core.deref.call(null,last_message);var inst_370545 = cljs.core._EQ_.call(null,inst_370544,inst_370543__$1);var state_370562__$1 = (function (){var statearr_370569 = state_370562;(statearr_370569[8] = inst_370543__$1);
return statearr_370569;
})();if(inst_370545)
{var statearr_370570_370583 = state_370562__$1;(statearr_370570_370583[1] = 5);
} else
{var statearr_370571_370584 = state_370562__$1;(statearr_370571_370584[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_370563 === 3))
{var inst_370560 = (state_370562[2]);var state_370562__$1 = state_370562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_370562__$1,inst_370560);
} else
{if((state_val_370563 === 2))
{var state_370562__$1 = state_370562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_370562__$1,4,output);
} else
{if((state_val_370563 === 1))
{var state_370562__$1 = state_370562;var statearr_370572_370585 = state_370562__$1;(statearr_370572_370585[2] = null);
(statearr_370572_370585[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_370576 = [null,null,null,null,null,null,null,null,null,null];(statearr_370576[0] = state_machine__18220__auto__);
(statearr_370576[1] = 1);
return statearr_370576;
});
var state_machine__18220__auto____1 = (function (state_370562){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_370562);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e370577){if((e370577 instanceof Object))
{var ex__18223__auto__ = e370577;var statearr_370578_370586 = state_370562;(statearr_370578_370586[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_370562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__370587 = state_370562;
state_370562 = G__370587;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_370562){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_370562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_370579 = f__18290__auto__.call(null);(statearr_370579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_370579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__370592 = cljs.core.seq.call(null,script);var chunk__370593 = null;var count__370594 = 0;var i__370595 = 0;while(true){
if((i__370595 < count__370594))
{var message = cljs.core._nth.call(null,chunk__370593,i__370595);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__370596 = seq__370592;
var G__370597 = chunk__370593;
var G__370598 = count__370594;
var G__370599 = (i__370595 + 1);
seq__370592 = G__370596;
chunk__370593 = G__370597;
count__370594 = G__370598;
i__370595 = G__370599;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370592);if(temp__4092__auto__)
{var seq__370592__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370592__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370592__$1);{
var G__370600 = cljs.core.chunk_rest.call(null,seq__370592__$1);
var G__370601 = c__14708__auto__;
var G__370602 = cljs.core.count.call(null,c__14708__auto__);
var G__370603 = 0;
seq__370592 = G__370600;
chunk__370593 = G__370601;
count__370594 = G__370602;
i__370595 = G__370603;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__370592__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__370604 = cljs.core.next.call(null,seq__370592__$1);
var G__370605 = null;
var G__370606 = 0;
var G__370607 = 0;
seq__370592 = G__370604;
chunk__370593 = G__370605;
count__370594 = G__370606;
i__370595 = G__370607;
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
foundation.app.depends = (function (){var method_table__14817__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14818__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14821__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__370608,graph){var map__370609 = p__370608;var map__370609__$1 = ((cljs.core.seq_QMARK_.call(null,map__370609))?cljs.core.apply.call(null,cljs.core.hash_map,map__370609):map__370609);var transform = cljs.core.get.call(null,map__370609__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__370610 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__370610,0,null);var path = cljs.core.nth.call(null,vec__370610,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__370613,graph){var map__370614 = p__370613;var map__370614__$1 = ((cljs.core.seq_QMARK_.call(null,map__370614))?cljs.core.apply.call(null,cljs.core.hash_map,map__370614):map__370614);var derives = cljs.core.get.call(null,map__370614__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__370615 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__370615,0,null);var output_path = cljs.core.nth.call(null,vec__370615,1,null);var input_spec = cljs.core.nth.call(null,vec__370615,2,null);var input_paths__$1 = (function (){var or__13979__auto__ = (function (){var and__13967__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13967__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13967__auto__;
}
})();if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__370611_SHARP_,p2__370612_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__370611_SHARP_,output_path,p2__370612_SHARP_);
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
}),(function (){var or__13979__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__370617 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__370617,0,null);var large = cljs.core.nth.call(null,vec__370617,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__370618_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__370618_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__370619){var map__370622 = p__370619;var map__370622__$1 = ((cljs.core.seq_QMARK_.call(null,map__370622))?cljs.core.apply.call(null,cljs.core.hash_map,map__370622):map__370622);var state = map__370622__$1;var change = cljs.core.get.call(null,map__370622__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__370622__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__370623 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__370623__$1 = ((cljs.core.seq_QMARK_.call(null,map__370623))?cljs.core.apply.call(null,cljs.core.hash_map,map__370623):map__370623);var state__$1 = map__370623__$1;var processed_inputs = cljs.core.get.call(null,map__370623__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__370623__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__370623__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14677__auto__ = (function iter__370628(s__370629){return (new cljs.core.LazySeq(null,(function (){var s__370629__$1 = s__370629;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__370629__$1);if(temp__4092__auto__)
{var s__370629__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__370629__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__370629__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__370631 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__370630 = 0;while(true){
if((i__370630 < size__14676__auto__))
{var dval = cljs.core._nth.call(null,c__14675__auto__,i__370630);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__370631,cljs.core.get.call(null,dispatches,dval));
{
var G__370632 = (i__370630 + 1);
i__370630 = G__370632;
continue;
}
} else
{{
var G__370633 = (i__370630 + 1);
i__370630 = G__370633;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370631),iter__370628.call(null,cljs.core.chunk_rest.call(null,s__370629__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370631),null);
}
} else
{var dval = cljs.core.first.call(null,s__370629__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__370628.call(null,cljs.core.rest.call(null,s__370629__$2)));
} else
{{
var G__370634 = cljs.core.rest.call(null,s__370629__$2);
s__370629__$1 = G__370634;
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
});return iter__14677__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__370635){
var state = cljs.core.first(arglist__370635);
arglist__370635 = cljs.core.next(arglist__370635);
var path = cljs.core.first(arglist__370635);
arglist__370635 = cljs.core.next(arglist__370635);
var f = cljs.core.first(arglist__370635);
var args = cljs.core.rest(arglist__370635);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__370636){var map__370639 = p__370636;var map__370639__$1 = ((cljs.core.seq_QMARK_.call(null,map__370639))?cljs.core.apply.call(null,cljs.core.hash_map,map__370639):map__370639);var state = map__370639__$1;var context = cljs.core.get.call(null,map__370639__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__370639__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__370640 = message;var map__370640__$1 = ((cljs.core.seq_QMARK_.call(null,map__370640))?cljs.core.apply.call(null,cljs.core.hash_map,map__370640):map__370640);var type = cljs.core.get.call(null,map__370640__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__370640__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__370642){var map__370644 = p__370642;var map__370644__$1 = ((cljs.core.seq_QMARK_.call(null,map__370644))?cljs.core.apply.call(null,cljs.core.hash_map,map__370644):map__370644);var state = map__370644__$1;var context = cljs.core.get.call(null,map__370644__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__370641_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__370641_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__370645){var vec__370646 = p__370645;var dispatch_val = cljs.core.nth.call(null,vec__370646,0,null);var multifn = cljs.core.nth.call(null,vec__370646,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__370647){var vec__370648 = p__370647;var dispatch_val = cljs.core.nth.call(null,vec__370648,0,null);var multifn = cljs.core.nth.call(null,vec__370648,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__370649_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__370649_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__370650){var map__370658 = p__370650;var map__370658__$1 = ((cljs.core.seq_QMARK_.call(null,map__370658))?cljs.core.apply.call(null,cljs.core.hash_map,map__370658):map__370658);var state = map__370658__$1;var context = cljs.core.get.call(null,map__370658__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__370659,p__370660){var map__370661 = p__370659;var map__370661__$1 = ((cljs.core.seq_QMARK_.call(null,map__370661))?cljs.core.apply.call(null,cljs.core.hash_map,map__370661):map__370661);var state__$1 = map__370661__$1;var change = cljs.core.get.call(null,map__370661__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__370662 = p__370660;var vec__370663 = cljs.core.nth.call(null,vec__370662,0,null);var input_paths = cljs.core.nth.call(null,vec__370663,0,null);var output_path = cljs.core.nth.call(null,vec__370663,1,null);var ispec = cljs.core.nth.call(null,vec__370663,2,null);var derive = vec__370663;var derive_fn = cljs.core.nth.call(null,vec__370662,1,null);var vec__370664 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__370664,0,null);var arg_names = cljs.core.nth.call(null,vec__370664,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__370665){var map__370673 = p__370665;var map__370673__$1 = ((cljs.core.seq_QMARK_.call(null,map__370673))?cljs.core.apply.call(null,cljs.core.hash_map,map__370673):map__370673);var state = map__370673__$1;var context = cljs.core.get.call(null,map__370673__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__370674,p__370675){var map__370676 = p__370674;var map__370676__$1 = ((cljs.core.seq_QMARK_.call(null,map__370676))?cljs.core.apply.call(null,cljs.core.hash_map,map__370676):map__370676);var state__$1 = map__370676__$1;var change = cljs.core.get.call(null,map__370676__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__370677 = p__370675;var vec__370678 = cljs.core.nth.call(null,vec__370677,0,null);var type = cljs.core.nth.call(null,vec__370678,0,null);var input_paths = cljs.core.nth.call(null,vec__370678,1,null);var ispec = cljs.core.nth.call(null,vec__370678,2,null);var effect = vec__370678;var vec__370679 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__370679,0,null);var arg_names = cljs.core.nth.call(null,vec__370679,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14541__auto__){var self__ = this;
var this__14541__auto____$1 = this;var h__14395__auto__ = self__.__hash;if(!((h__14395__auto__ == null)))
{return h__14395__auto__;
} else
{var h__14395__auto____$1 = cljs.core.hash_imap.call(null,this__14541__auto____$1);self__.__hash = h__14395__auto____$1;
return h__14395__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14546__auto__,k__14547__auto__){var self__ = this;
var this__14546__auto____$1 = this;return cljs.core._lookup.call(null,this__14546__auto____$1,k__14547__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14548__auto__,k370681,else__14549__auto__){var self__ = this;
var this__14548__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k370681,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k370681,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k370681,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k370681,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k370681,else__14549__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14553__auto__,k__14554__auto__,G__370680){var self__ = this;
var this__14553__auto____$1 = this;var pred__370683 = cljs.core.keyword_identical_QMARK_;var expr__370684 = k__14554__auto__;if(cljs.core.truth_(pred__370683.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__370684)))
{return (new foundation.app.Application(G__370680,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__370683.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__370684)))
{return (new foundation.app.Application(self__.state,G__370680,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__370683.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__370684)))
{return (new foundation.app.Application(self__.state,self__.input,G__370680,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__370683.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__370684)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__370680,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14554__auto__,G__370680),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14560__auto__,writer__14561__auto__,opts__14562__auto__){var self__ = this;
var this__14560__auto____$1 = this;var pr_pair__14563__auto__ = (function (keyval__14564__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,cljs.core.pr_writer,""," ","",opts__14562__auto__,keyval__14564__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,pr_pair__14563__auto__,"#foundation.app.Application{",", ","}",opts__14562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14551__auto__,entry__14552__auto__){var self__ = this;
var this__14551__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14552__auto__))
{return cljs.core._assoc.call(null,this__14551__auto____$1,cljs.core._nth.call(null,entry__14552__auto__,0),cljs.core._nth.call(null,entry__14552__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14551__auto____$1,entry__14552__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14558__auto__){var self__ = this;
var this__14558__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14550__auto__){var self__ = this;
var this__14550__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14542__auto__,other__14543__auto__){var self__ = this;
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14545__auto__,G__370680){var self__ = this;
var this__14545__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__370680,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14544__auto__){var self__ = this;
var this__14544__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14555__auto__,k__14556__auto__){var self__ = this;
var this__14555__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14556__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14555__auto____$1),self__.__meta),k__14556__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14556__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14580__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14580__auto__,writer__14581__auto__){return cljs.core._write.call(null,writer__14581__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__370682){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__370682),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__370682),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__370682),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__370682),null,cljs.core.dissoc.call(null,G__370682,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__370686_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__370686_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__370687){var map__370689 = p__370687;var map__370689__$1 = ((cljs.core.seq_QMARK_.call(null,map__370689))?cljs.core.apply.call(null,cljs.core.hash_map,map__370689):map__370689);var init_messages = cljs.core.get.call(null,map__370689__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__370689__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__370687 = null;if (arguments.length > 1) {
  p__370687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__370687);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__370690){
var root_id = cljs.core.first(arglist__370690);
var p__370687 = cljs.core.rest(arglist__370690);
return create_app__delegate(root_id,p__370687);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj370692 = {};return obj370692;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13967__auto__ = _;if(and__13967__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13967__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14587__auto__ = (((_ == null))?null:_);return (function (){var or__13979__auto__ = (foundation.app.initialize[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.initialize["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map