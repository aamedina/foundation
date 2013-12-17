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
foundation.app.transform = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__38661__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__38661 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38661__delegate.call(this,k,args);};
G__38661.cljs$lang$maxFixedArity = 1;
G__38661.cljs$lang$applyTo = (function (arglist__38662){
var k = cljs.core.first(arglist__38662);
var args = cljs.core.rest(arglist__38662);
return G__38661__delegate(k,args);
});
G__38661.cljs$core$IFn$_invoke$arity$variadic = G__38661__delegate;
return G__38661;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__38663,changes){var map__38667 = p__38663;var map__38667__$1 = ((cljs.core.seq_QMARK_.call(null,map__38667))?cljs.core.apply.call(null,cljs.core.hash_map,map__38667):map__38667);var processed_inputs = cljs.core.get.call(null,map__38667__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__38668){var vec__38669 = p__38668;var k = cljs.core.nth.call(null,vec__38669,0,null);var v = cljs.core.nth.call(null,vec__38669,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__38676){var vec__38677 = p__38676;var k = cljs.core.nth.call(null,vec__38677,0,null);var v = cljs.core.nth.call(null,vec__38677,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__38678){var vec__38679 = p__38678;var k = cljs.core.nth.call(null,vec__38679,0,null);var v = cljs.core.nth.call(null,vec__38679,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__38680){var vec__38681 = p__38680;var k = cljs.core.nth.call(null,vec__38681,0,null);var v = cljs.core.nth.call(null,vec__38681,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__38728){var vec__38729 = p__38728;var k = cljs.core.nth.call(null,vec__38729,0,null);var v = cljs.core.nth.call(null,vec__38729,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14652__auto__ = (function iter__38730(s__38731){return (new cljs.core.LazySeq(null,(function (){var s__38731__$1 = s__38731;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38731__$1);if(temp__4092__auto__)
{var s__38731__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38731__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__38731__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__38733 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__38732 = 0;while(true){
if((i__38732 < size__14651__auto__))
{var vec__38748 = cljs.core._nth.call(null,c__14650__auto__,i__38732);var path = cljs.core.nth.call(null,vec__38748,0,null);var arg = cljs.core.nth.call(null,vec__38748,1,null);cljs.core.chunk_append.call(null,b__38733,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__38754 = data_model__$1;if(G__38754)
{var bit__14585__auto__ = (G__38754.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14585__auto__) || (G__38754.cljs$core$ILookup$))
{return true;
} else
{if((!G__38754.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38754);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38754);
}
})())
{var data_model_k__38753 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__38753,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__38762 = cljs.core.rest.call(null,ks);
var G__38763 = cljs.core.get.call(null,v,k,v);
var G__38764 = ret;
ks = G__38762;
data_model__$1 = G__38763;
ret = G__38764;
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
var G__38765 = (i__38732 + 1);
i__38732 = G__38765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38733),iter__38730.call(null,cljs.core.chunk_rest.call(null,s__38731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38733),null);
}
} else
{var vec__38755 = cljs.core.first.call(null,s__38731__$2);var path = cljs.core.nth.call(null,vec__38755,0,null);var arg = cljs.core.nth.call(null,vec__38755,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__38761 = data_model__$1;if(G__38761)
{var bit__14585__auto__ = (G__38761.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14585__auto__) || (G__38761.cljs$core$ILookup$))
{return true;
} else
{if((!G__38761.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38761);
}
})())
{var data_model_k__38760 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__38760,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__38766 = cljs.core.rest.call(null,ks);
var G__38767 = cljs.core.get.call(null,v,k,v);
var G__38768 = ret;
ks = G__38766;
data_model__$1 = G__38767;
ret = G__38768;
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
})(),iter__38730.call(null,cljs.core.rest.call(null,s__38731__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__38769){var map__38770 = p__38769;var map__38770__$1 = ((cljs.core.seq_QMARK_.call(null,map__38770))?cljs.core.apply.call(null,cljs.core.hash_map,map__38770):map__38770);var input_paths = cljs.core.get.call(null,map__38770__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__38770__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18264__auto___38825 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_38813){var state_val_38814 = (state_38813[1]);if((state_val_38814 === 4))
{var inst_38801 = (state_38813[2]);var inst_38802 = cljs.core.deref.call(null,app_model);var inst_38803 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_38801);var inst_38804 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_38803);var inst_38805 = foundation.app.tree.t.call(null,inst_38802);var inst_38806 = foundation.app.tree.since_t.call(null,inst_38804,inst_38805);var inst_38807 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_38808 = render_fn.call(null,inst_38806,inst_38807);var state_38813__$1 = (function (){var statearr_38815 = state_38813;(statearr_38815[7] = inst_38808);
return statearr_38815;
})();var statearr_38816_38826 = state_38813__$1;(statearr_38816_38826[2] = null);
(statearr_38816_38826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38814 === 3))
{var inst_38811 = (state_38813[2]);var state_38813__$1 = state_38813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38813__$1,inst_38811);
} else
{if((state_val_38814 === 2))
{var inst_38799 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_38813__$1 = state_38813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38813__$1,4,inst_38799);
} else
{if((state_val_38814 === 1))
{var state_38813__$1 = state_38813;var statearr_38817_38827 = state_38813__$1;(statearr_38817_38827[2] = null);
(statearr_38817_38827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_38821 = [null,null,null,null,null,null,null,null];(statearr_38821[0] = state_machine__18195__auto__);
(statearr_38821[1] = 1);
return statearr_38821;
});
var state_machine__18195__auto____1 = (function (state_38813){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_38813);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e38822){if((e38822 instanceof Object))
{var ex__18198__auto__ = e38822;var statearr_38823_38828 = state_38813;(statearr_38823_38828[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38829 = state_38813;
state_38813 = G__38829;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_38813){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_38813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_38824 = f__18265__auto__.call(null);(statearr_38824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___38825);
return statearr_38824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__38831 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__38831))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__38831))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18264__auto___38996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_38962){var state_val_38963 = (state_38962[1]);if((state_val_38963 === 1))
{var state_38962__$1 = state_38962;var statearr_38964_38997 = state_38962__$1;(statearr_38964_38997[2] = null);
(statearr_38964_38997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 2))
{var state_38962__$1 = state_38962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38962__$1,4,input_queue__$1);
} else
{if((state_val_38963 === 3))
{var inst_38960 = (state_38962[2]);var state_38962__$1 = state_38962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38962__$1,inst_38960);
} else
{if((state_val_38963 === 4))
{var inst_38916 = (state_38962[2]);var inst_38921 = foundation.app.pre_process.call(null,inst_38916);var inst_38922 = cljs.core.seq.call(null,inst_38921);var inst_38923 = inst_38922;var inst_38924 = null;var inst_38925 = 0;var inst_38926 = 0;var state_38962__$1 = (function (){var statearr_38965 = state_38962;(statearr_38965[7] = inst_38923);
(statearr_38965[8] = inst_38924);
(statearr_38965[9] = inst_38925);
(statearr_38965[10] = inst_38926);
return statearr_38965;
})();var statearr_38966_38998 = state_38962__$1;(statearr_38966_38998[2] = null);
(statearr_38966_38998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 5))
{var inst_38925 = (state_38962[9]);var inst_38926 = (state_38962[10]);var inst_38928 = (inst_38926 < inst_38925);var inst_38929 = inst_38928;var state_38962__$1 = state_38962;if(cljs.core.truth_(inst_38929))
{var statearr_38970_38999 = state_38962__$1;(statearr_38970_38999[1] = 7);
} else
{var statearr_38971_39000 = state_38962__$1;(statearr_38971_39000[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 6))
{var inst_38957 = (state_38962[2]);var state_38962__$1 = (function (){var statearr_38972 = state_38962;(statearr_38972[11] = inst_38957);
return statearr_38972;
})();var statearr_38973_39001 = state_38962__$1;(statearr_38973_39001[2] = null);
(statearr_38973_39001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 7))
{var inst_38923 = (state_38962[7]);var inst_38924 = (state_38962[8]);var inst_38925 = (state_38962[9]);var inst_38926 = (state_38962[10]);var inst_38931 = cljs.core._nth.call(null,inst_38924,inst_38926);var inst_38932 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_38931);var inst_38933 = (inst_38926 + 1);var tmp38967 = inst_38923;var tmp38968 = inst_38924;var tmp38969 = inst_38925;var inst_38923__$1 = tmp38967;var inst_38924__$1 = tmp38968;var inst_38925__$1 = tmp38969;var inst_38926__$1 = inst_38933;var state_38962__$1 = (function (){var statearr_38974 = state_38962;(statearr_38974[7] = inst_38923__$1);
(statearr_38974[8] = inst_38924__$1);
(statearr_38974[12] = inst_38932);
(statearr_38974[9] = inst_38925__$1);
(statearr_38974[10] = inst_38926__$1);
return statearr_38974;
})();var statearr_38975_39002 = state_38962__$1;(statearr_38975_39002[2] = null);
(statearr_38975_39002[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 8))
{var inst_38923 = (state_38962[7]);var inst_38936 = (state_38962[13]);var inst_38936__$1 = cljs.core.seq.call(null,inst_38923);var state_38962__$1 = (function (){var statearr_38976 = state_38962;(statearr_38976[13] = inst_38936__$1);
return statearr_38976;
})();if(inst_38936__$1)
{var statearr_38977_39003 = state_38962__$1;(statearr_38977_39003[1] = 10);
} else
{var statearr_38978_39004 = state_38962__$1;(statearr_38978_39004[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 9))
{var inst_38955 = (state_38962[2]);var state_38962__$1 = state_38962;var statearr_38979_39005 = state_38962__$1;(statearr_38979_39005[2] = inst_38955);
(statearr_38979_39005[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 10))
{var inst_38936 = (state_38962[13]);var inst_38938 = cljs.core.chunked_seq_QMARK_.call(null,inst_38936);var state_38962__$1 = state_38962;if(inst_38938)
{var statearr_38980_39006 = state_38962__$1;(statearr_38980_39006[1] = 13);
} else
{var statearr_38981_39007 = state_38962__$1;(statearr_38981_39007[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 11))
{var state_38962__$1 = state_38962;var statearr_38982_39008 = state_38962__$1;(statearr_38982_39008[2] = null);
(statearr_38982_39008[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 12))
{var inst_38953 = (state_38962[2]);var state_38962__$1 = state_38962;var statearr_38983_39009 = state_38962__$1;(statearr_38983_39009[2] = inst_38953);
(statearr_38983_39009[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 13))
{var inst_38936 = (state_38962[13]);var inst_38940 = cljs.core.chunk_first.call(null,inst_38936);var inst_38941 = cljs.core.chunk_rest.call(null,inst_38936);var inst_38942 = cljs.core.count.call(null,inst_38940);var inst_38923 = inst_38941;var inst_38924 = inst_38940;var inst_38925 = inst_38942;var inst_38926 = 0;var state_38962__$1 = (function (){var statearr_38984 = state_38962;(statearr_38984[7] = inst_38923);
(statearr_38984[8] = inst_38924);
(statearr_38984[9] = inst_38925);
(statearr_38984[10] = inst_38926);
return statearr_38984;
})();var statearr_38985_39010 = state_38962__$1;(statearr_38985_39010[2] = null);
(statearr_38985_39010[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 14))
{var inst_38936 = (state_38962[13]);var inst_38945 = cljs.core.first.call(null,inst_38936);var inst_38946 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_38945);var inst_38947 = cljs.core.next.call(null,inst_38936);var inst_38923 = inst_38947;var inst_38924 = null;var inst_38925 = 0;var inst_38926 = 0;var state_38962__$1 = (function (){var statearr_38986 = state_38962;(statearr_38986[7] = inst_38923);
(statearr_38986[8] = inst_38924);
(statearr_38986[9] = inst_38925);
(statearr_38986[10] = inst_38926);
(statearr_38986[14] = inst_38946);
return statearr_38986;
})();var statearr_38987_39011 = state_38962__$1;(statearr_38987_39011[2] = null);
(statearr_38987_39011[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38963 === 15))
{var inst_38950 = (state_38962[2]);var state_38962__$1 = state_38962;var statearr_38988_39012 = state_38962__$1;(statearr_38988_39012[2] = inst_38950);
(statearr_38988_39012[1] = 12);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_38992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38992[0] = state_machine__18195__auto__);
(statearr_38992[1] = 1);
return statearr_38992;
});
var state_machine__18195__auto____1 = (function (state_38962){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_38962);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e38993){if((e38993 instanceof Object))
{var ex__18198__auto__ = e38993;var statearr_38994_39013 = state_38962;(statearr_38994_39013[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39014 = state_38962;
state_38962 = G__39014;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_38962){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_38962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_38995 = f__18265__auto__.call(null);(statearr_38995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___38996);
return statearr_38995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__39019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__39020 = null;var count__39021 = 0;var i__39022 = 0;while(true){
if((i__39022 < count__39021))
{var message = cljs.core._nth.call(null,chunk__39020,i__39022);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__39023 = seq__39019;
var G__39024 = chunk__39020;
var G__39025 = count__39021;
var G__39026 = (i__39022 + 1);
seq__39019 = G__39023;
chunk__39020 = G__39024;
count__39021 = G__39025;
i__39022 = G__39026;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39019);if(temp__4092__auto__)
{var seq__39019__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39019__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39019__$1);{
var G__39027 = cljs.core.chunk_rest.call(null,seq__39019__$1);
var G__39028 = c__14683__auto__;
var G__39029 = cljs.core.count.call(null,c__14683__auto__);
var G__39030 = 0;
seq__39019 = G__39027;
chunk__39020 = G__39028;
count__39021 = G__39029;
i__39022 = G__39030;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__39019__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__39031 = cljs.core.next.call(null,seq__39019__$1);
var G__39032 = null;
var G__39033 = 0;
var G__39034 = 0;
seq__39019 = G__39031;
chunk__39020 = G__39032;
count__39021 = G__39033;
i__39022 = G__39034;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__39039){var vec__39040 = p__39039;var name = cljs.core.nth.call(null,vec__39040,0,null);var paths = cljs.core.nth.call(null,vec__39040,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__39041){var vec__39042 = p__39041;var k = cljs.core.nth.call(null,vec__39042,0,null);var v = cljs.core.nth.call(null,vec__39042,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__39043){var map__39049 = p__39043;var map__39049__$1 = ((cljs.core.seq_QMARK_.call(null,map__39049))?cljs.core.apply.call(null,cljs.core.hash_map,map__39049):map__39049);var focus = cljs.core.get.call(null,map__39049__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__39049__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__39050 = cljs.core.seq.call(null,init_messages__$1);var chunk__39051 = null;var count__39052 = 0;var i__39053 = 0;while(true){
if((i__39053 < count__39052))
{var message = cljs.core._nth.call(null,chunk__39051,i__39053);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39054 = seq__39050;
var G__39055 = chunk__39051;
var G__39056 = count__39052;
var G__39057 = (i__39053 + 1);
seq__39050 = G__39054;
chunk__39051 = G__39055;
count__39052 = G__39056;
i__39053 = G__39057;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39050);if(temp__4092__auto__)
{var seq__39050__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39050__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39050__$1);{
var G__39058 = cljs.core.chunk_rest.call(null,seq__39050__$1);
var G__39059 = c__14683__auto__;
var G__39060 = cljs.core.count.call(null,c__14683__auto__);
var G__39061 = 0;
seq__39050 = G__39058;
chunk__39051 = G__39059;
count__39052 = G__39060;
i__39053 = G__39061;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__39050__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39062 = cljs.core.next.call(null,seq__39050__$1);
var G__39063 = null;
var G__39064 = 0;
var G__39065 = 0;
seq__39050 = G__39062;
chunk__39051 = G__39063;
count__39052 = G__39064;
i__39053 = G__39065;
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
begin = function(app,p__39043){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__39043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_39126){var state_val_39127 = (state_39126[1]);if((state_val_39127 === 7))
{var inst_39121 = (state_39126[2]);var state_39126__$1 = (function (){var statearr_39128 = state_39126;(statearr_39128[7] = inst_39121);
return statearr_39128;
})();var statearr_39129_39144 = state_39126__$1;(statearr_39129_39144[2] = null);
(statearr_39129_39144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39127 === 6))
{var inst_39107 = (state_39126[8]);var inst_39112 = cljs.core.reset_BANG_.call(null,last_message,inst_39107);var inst_39113 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_39107);var inst_39114 = cljs.core.get_method.call(null,foundation.app.effect,inst_39113);var inst_39115 = cljs.core.dissoc.call(null,inst_39107,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_39116 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_39107);var inst_39117 = [inst_39115,input,inst_39116];var inst_39118 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39117,null));var inst_39119 = cljs.core.apply.call(null,inst_39114,inst_39118);var state_39126__$1 = (function (){var statearr_39130 = state_39126;(statearr_39130[9] = inst_39112);
return statearr_39130;
})();var statearr_39131_39145 = state_39126__$1;(statearr_39131_39145[2] = inst_39119);
(statearr_39131_39145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39127 === 5))
{var state_39126__$1 = state_39126;var statearr_39132_39146 = state_39126__$1;(statearr_39132_39146[2] = null);
(statearr_39132_39146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39127 === 4))
{var inst_39107 = (state_39126[8]);var inst_39107__$1 = (state_39126[2]);var inst_39108 = cljs.core.deref.call(null,last_message);var inst_39109 = cljs.core._EQ_.call(null,inst_39108,inst_39107__$1);var state_39126__$1 = (function (){var statearr_39133 = state_39126;(statearr_39133[8] = inst_39107__$1);
return statearr_39133;
})();if(inst_39109)
{var statearr_39134_39147 = state_39126__$1;(statearr_39134_39147[1] = 5);
} else
{var statearr_39135_39148 = state_39126__$1;(statearr_39135_39148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39127 === 3))
{var inst_39124 = (state_39126[2]);var state_39126__$1 = state_39126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39126__$1,inst_39124);
} else
{if((state_val_39127 === 2))
{var state_39126__$1 = state_39126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39126__$1,4,output);
} else
{if((state_val_39127 === 1))
{var state_39126__$1 = state_39126;var statearr_39136_39149 = state_39126__$1;(statearr_39136_39149[2] = null);
(statearr_39136_39149[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_39140 = [null,null,null,null,null,null,null,null,null,null];(statearr_39140[0] = state_machine__18195__auto__);
(statearr_39140[1] = 1);
return statearr_39140;
});
var state_machine__18195__auto____1 = (function (state_39126){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_39126);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e39141){if((e39141 instanceof Object))
{var ex__18198__auto__ = e39141;var statearr_39142_39150 = state_39126;(statearr_39142_39150[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39151 = state_39126;
state_39126 = G__39151;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_39126){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_39126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_39143 = f__18265__auto__.call(null);(statearr_39143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_39143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__39156 = cljs.core.seq.call(null,script);var chunk__39157 = null;var count__39158 = 0;var i__39159 = 0;while(true){
if((i__39159 < count__39158))
{var message = cljs.core._nth.call(null,chunk__39157,i__39159);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39160 = seq__39156;
var G__39161 = chunk__39157;
var G__39162 = count__39158;
var G__39163 = (i__39159 + 1);
seq__39156 = G__39160;
chunk__39157 = G__39161;
count__39158 = G__39162;
i__39159 = G__39163;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39156);if(temp__4092__auto__)
{var seq__39156__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39156__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39156__$1);{
var G__39164 = cljs.core.chunk_rest.call(null,seq__39156__$1);
var G__39165 = c__14683__auto__;
var G__39166 = cljs.core.count.call(null,c__14683__auto__);
var G__39167 = 0;
seq__39156 = G__39164;
chunk__39157 = G__39165;
count__39158 = G__39166;
i__39159 = G__39167;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__39156__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39168 = cljs.core.next.call(null,seq__39156__$1);
var G__39169 = null;
var G__39170 = 0;
var G__39171 = 0;
seq__39156 = G__39168;
chunk__39157 = G__39169;
count__39158 = G__39170;
i__39159 = G__39171;
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
foundation.app.depends = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__39172,graph){var map__39173 = p__39172;var map__39173__$1 = ((cljs.core.seq_QMARK_.call(null,map__39173))?cljs.core.apply.call(null,cljs.core.hash_map,map__39173):map__39173);var transform = cljs.core.get.call(null,map__39173__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__39174 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__39174,0,null);var path = cljs.core.nth.call(null,vec__39174,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__39177,graph){var map__39178 = p__39177;var map__39178__$1 = ((cljs.core.seq_QMARK_.call(null,map__39178))?cljs.core.apply.call(null,cljs.core.hash_map,map__39178):map__39178);var derives = cljs.core.get.call(null,map__39178__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__39179 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__39179,0,null);var output_path = cljs.core.nth.call(null,vec__39179,1,null);var input_spec = cljs.core.nth.call(null,vec__39179,2,null);var input_paths__$1 = (function (){var or__13954__auto__ = (function (){var and__13942__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13942__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13942__auto__;
}
})();if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__39175_SHARP_,p2__39176_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__39175_SHARP_,output_path,p2__39176_SHARP_);
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
}),(function (){var or__13954__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__39181 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__39181,0,null);var large = cljs.core.nth.call(null,vec__39181,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__39182_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__39182_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__39183){var map__39186 = p__39183;var map__39186__$1 = ((cljs.core.seq_QMARK_.call(null,map__39186))?cljs.core.apply.call(null,cljs.core.hash_map,map__39186):map__39186);var state = map__39186__$1;var change = cljs.core.get.call(null,map__39186__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__39186__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__39187 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__39187__$1 = ((cljs.core.seq_QMARK_.call(null,map__39187))?cljs.core.apply.call(null,cljs.core.hash_map,map__39187):map__39187);var state__$1 = map__39187__$1;var processed_inputs = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14652__auto__ = (function iter__39192(s__39193){return (new cljs.core.LazySeq(null,(function (){var s__39193__$1 = s__39193;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39193__$1);if(temp__4092__auto__)
{var s__39193__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39193__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39193__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39195 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39194 = 0;while(true){
if((i__39194 < size__14651__auto__))
{var dval = cljs.core._nth.call(null,c__14650__auto__,i__39194);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__39195,cljs.core.get.call(null,dispatches,dval));
{
var G__39196 = (i__39194 + 1);
i__39194 = G__39196;
continue;
}
} else
{{
var G__39197 = (i__39194 + 1);
i__39194 = G__39197;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39195),iter__39192.call(null,cljs.core.chunk_rest.call(null,s__39193__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39195),null);
}
} else
{var dval = cljs.core.first.call(null,s__39193__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__39192.call(null,cljs.core.rest.call(null,s__39193__$2)));
} else
{{
var G__39198 = cljs.core.rest.call(null,s__39193__$2);
s__39193__$1 = G__39198;
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
});return iter__14652__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__39199){
var state = cljs.core.first(arglist__39199);
arglist__39199 = cljs.core.next(arglist__39199);
var path = cljs.core.first(arglist__39199);
arglist__39199 = cljs.core.next(arglist__39199);
var f = cljs.core.first(arglist__39199);
var args = cljs.core.rest(arglist__39199);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__39200){var map__39203 = p__39200;var map__39203__$1 = ((cljs.core.seq_QMARK_.call(null,map__39203))?cljs.core.apply.call(null,cljs.core.hash_map,map__39203):map__39203);var state = map__39203__$1;var context = cljs.core.get.call(null,map__39203__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__39203__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__39204 = message;var map__39204__$1 = ((cljs.core.seq_QMARK_.call(null,map__39204))?cljs.core.apply.call(null,cljs.core.hash_map,map__39204):map__39204);var type = cljs.core.get.call(null,map__39204__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__39204__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__39206){var map__39208 = p__39206;var map__39208__$1 = ((cljs.core.seq_QMARK_.call(null,map__39208))?cljs.core.apply.call(null,cljs.core.hash_map,map__39208):map__39208);var state = map__39208__$1;var context = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__39205_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__39205_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__39209){var vec__39210 = p__39209;var dispatch_val = cljs.core.nth.call(null,vec__39210,0,null);var multifn = cljs.core.nth.call(null,vec__39210,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__39211){var vec__39212 = p__39211;var dispatch_val = cljs.core.nth.call(null,vec__39212,0,null);var multifn = cljs.core.nth.call(null,vec__39212,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__39213_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__39213_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__39214){var map__39222 = p__39214;var map__39222__$1 = ((cljs.core.seq_QMARK_.call(null,map__39222))?cljs.core.apply.call(null,cljs.core.hash_map,map__39222):map__39222);var state = map__39222__$1;var context = cljs.core.get.call(null,map__39222__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__39223,p__39224){var map__39225 = p__39223;var map__39225__$1 = ((cljs.core.seq_QMARK_.call(null,map__39225))?cljs.core.apply.call(null,cljs.core.hash_map,map__39225):map__39225);var state__$1 = map__39225__$1;var change = cljs.core.get.call(null,map__39225__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__39226 = p__39224;var vec__39227 = cljs.core.nth.call(null,vec__39226,0,null);var input_paths = cljs.core.nth.call(null,vec__39227,0,null);var output_path = cljs.core.nth.call(null,vec__39227,1,null);var ispec = cljs.core.nth.call(null,vec__39227,2,null);var derive = vec__39227;var derive_fn = cljs.core.nth.call(null,vec__39226,1,null);var vec__39228 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__39228,0,null);var arg_names = cljs.core.nth.call(null,vec__39228,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__39229){var map__39237 = p__39229;var map__39237__$1 = ((cljs.core.seq_QMARK_.call(null,map__39237))?cljs.core.apply.call(null,cljs.core.hash_map,map__39237):map__39237);var state = map__39237__$1;var context = cljs.core.get.call(null,map__39237__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__39238,p__39239){var map__39240 = p__39238;var map__39240__$1 = ((cljs.core.seq_QMARK_.call(null,map__39240))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);var state__$1 = map__39240__$1;var change = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__39241 = p__39239;var vec__39242 = cljs.core.nth.call(null,vec__39241,0,null);var type = cljs.core.nth.call(null,vec__39242,0,null);var input_paths = cljs.core.nth.call(null,vec__39242,1,null);var ispec = cljs.core.nth.call(null,vec__39242,2,null);var effect = vec__39242;var vec__39243 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__39243,0,null);var arg_names = cljs.core.nth.call(null,vec__39243,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14516__auto__){var self__ = this;
var this__14516__auto____$1 = this;var h__14370__auto__ = self__.__hash;if(!((h__14370__auto__ == null)))
{return h__14370__auto__;
} else
{var h__14370__auto____$1 = cljs.core.hash_imap.call(null,this__14516__auto____$1);self__.__hash = h__14370__auto____$1;
return h__14370__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14521__auto__,k__14522__auto__){var self__ = this;
var this__14521__auto____$1 = this;return cljs.core._lookup.call(null,this__14521__auto____$1,k__14522__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14523__auto__,k39245,else__14524__auto__){var self__ = this;
var this__14523__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k39245,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39245,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39245,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39245,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k39245,else__14524__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14528__auto__,k__14529__auto__,G__39244){var self__ = this;
var this__14528__auto____$1 = this;var pred__39247 = cljs.core.keyword_identical_QMARK_;var expr__39248 = k__14529__auto__;if(cljs.core.truth_(pred__39247.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__39248)))
{return (new foundation.app.Application(G__39244,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39247.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__39248)))
{return (new foundation.app.Application(self__.state,G__39244,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39247.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__39248)))
{return (new foundation.app.Application(self__.state,self__.input,G__39244,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39247.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__39248)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__39244,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14529__auto__,G__39244),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14535__auto__,writer__14536__auto__,opts__14537__auto__){var self__ = this;
var this__14535__auto____$1 = this;var pr_pair__14538__auto__ = (function (keyval__14539__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,cljs.core.pr_writer,""," ","",opts__14537__auto__,keyval__14539__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,pr_pair__14538__auto__,"#foundation.app.Application{",", ","}",opts__14537__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14526__auto__,entry__14527__auto__){var self__ = this;
var this__14526__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14527__auto__))
{return cljs.core._assoc.call(null,this__14526__auto____$1,cljs.core._nth.call(null,entry__14527__auto__,0),cljs.core._nth.call(null,entry__14527__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14526__auto____$1,entry__14527__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14533__auto__){var self__ = this;
var this__14533__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14525__auto__){var self__ = this;
var this__14525__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14517__auto__,other__14518__auto__){var self__ = this;
var this__14517__auto____$1 = this;if(cljs.core.truth_((function (){var and__13942__auto__ = other__14518__auto__;if(cljs.core.truth_(and__13942__auto__))
{return ((this__14517__auto____$1.constructor === other__14518__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14517__auto____$1,other__14518__auto__));
} else
{return and__13942__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14520__auto__,G__39244){var self__ = this;
var this__14520__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__39244,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14519__auto__){var self__ = this;
var this__14519__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14530__auto__,k__14531__auto__){var self__ = this;
var this__14530__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14531__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14530__auto____$1),self__.__meta),k__14531__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14531__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14555__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14555__auto__,writer__14556__auto__){return cljs.core._write.call(null,writer__14556__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__39246){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__39246),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__39246),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__39246),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__39246),null,cljs.core.dissoc.call(null,G__39246,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__39250_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__39250_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__39251){var map__39253 = p__39251;var map__39253__$1 = ((cljs.core.seq_QMARK_.call(null,map__39253))?cljs.core.apply.call(null,cljs.core.hash_map,map__39253):map__39253);var init_messages = cljs.core.get.call(null,map__39253__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__39253__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__39251 = null;if (arguments.length > 1) {
  p__39251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__39251);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__39254){
var root_id = cljs.core.first(arglist__39254);
var p__39251 = cljs.core.rest(arglist__39254);
return create_app__delegate(root_id,p__39251);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj39256 = {};return obj39256;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13942__auto__ = _;if(and__13942__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13942__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14562__auto__ = (((_ == null))?null:_);return (function (){var or__13954__auto__ = (foundation.app.initialize[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.initialize["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map