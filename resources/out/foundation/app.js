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
var G__324419__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__324419 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__324419__delegate.call(this,k,args);};
G__324419.cljs$lang$maxFixedArity = 1;
G__324419.cljs$lang$applyTo = (function (arglist__324420){
var k = cljs.core.first(arglist__324420);
var args = cljs.core.rest(arglist__324420);
return G__324419__delegate(k,args);
});
G__324419.cljs$core$IFn$_invoke$arity$variadic = G__324419__delegate;
return G__324419;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__324421,changes){var map__324425 = p__324421;var map__324425__$1 = ((cljs.core.seq_QMARK_.call(null,map__324425))?cljs.core.apply.call(null,cljs.core.hash_map,map__324425):map__324425);var processed_inputs = cljs.core.get.call(null,map__324425__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__324426){var vec__324427 = p__324426;var k = cljs.core.nth.call(null,vec__324427,0,null);var v = cljs.core.nth.call(null,vec__324427,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__324434){var vec__324435 = p__324434;var k = cljs.core.nth.call(null,vec__324435,0,null);var v = cljs.core.nth.call(null,vec__324435,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__324436){var vec__324437 = p__324436;var k = cljs.core.nth.call(null,vec__324437,0,null);var v = cljs.core.nth.call(null,vec__324437,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__324438){var vec__324439 = p__324438;var k = cljs.core.nth.call(null,vec__324439,0,null);var v = cljs.core.nth.call(null,vec__324439,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__324478){var vec__324479 = p__324478;var k = cljs.core.nth.call(null,vec__324479,0,null);var v = cljs.core.nth.call(null,vec__324479,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14516__auto__ = (function iter__324480(s__324481){return (new cljs.core.LazySeq(null,(function (){var s__324481__$1 = s__324481;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__324481__$1);if(temp__4092__auto__)
{var s__324481__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__324481__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__324481__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__324483 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__324482 = 0;while(true){
if((i__324482 < size__14515__auto__))
{var vec__324498 = cljs.core._nth.call(null,c__14514__auto__,i__324482);var path = cljs.core.nth.call(null,vec__324498,0,null);var arg = cljs.core.nth.call(null,vec__324498,1,null);cljs.core.chunk_append.call(null,b__324483,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__324504 = data_model__$1;if(G__324504)
{var bit__14449__auto__ = (G__324504.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14449__auto__) || (G__324504.cljs$core$ILookup$))
{return true;
} else
{if((!G__324504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__324504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__324504);
}
})())
{var data_model_k__324503 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__324503,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__324512 = cljs.core.rest.call(null,ks);
var G__324513 = cljs.core.get.call(null,v,k,v);
var G__324514 = ret;
ks = G__324512;
data_model__$1 = G__324513;
ret = G__324514;
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
var G__324515 = (i__324482 + 1);
i__324482 = G__324515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324483),iter__324480.call(null,cljs.core.chunk_rest.call(null,s__324481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324483),null);
}
} else
{var vec__324505 = cljs.core.first.call(null,s__324481__$2);var path = cljs.core.nth.call(null,vec__324505,0,null);var arg = cljs.core.nth.call(null,vec__324505,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__324511 = data_model__$1;if(G__324511)
{var bit__14449__auto__ = (G__324511.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14449__auto__) || (G__324511.cljs$core$ILookup$))
{return true;
} else
{if((!G__324511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__324511);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__324511);
}
})())
{var data_model_k__324510 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__324510,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__324516 = cljs.core.rest.call(null,ks);
var G__324517 = cljs.core.get.call(null,v,k,v);
var G__324518 = ret;
ks = G__324516;
data_model__$1 = G__324517;
ret = G__324518;
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
})(),iter__324480.call(null,cljs.core.rest.call(null,s__324481__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__324519){var map__324520 = p__324519;var map__324520__$1 = ((cljs.core.seq_QMARK_.call(null,map__324520))?cljs.core.apply.call(null,cljs.core.hash_map,map__324520):map__324520);var input_paths = cljs.core.get.call(null,map__324520__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__324520__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18051__auto___324575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_324563){var state_val_324564 = (state_324563[1]);if((state_val_324564 === 4))
{var inst_324551 = (state_324563[2]);var inst_324552 = cljs.core.deref.call(null,app_model);var inst_324553 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_324551);var inst_324554 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_324553);var inst_324555 = foundation.app.tree.t.call(null,inst_324552);var inst_324556 = foundation.app.tree.since_t.call(null,inst_324554,inst_324555);var inst_324557 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_324558 = render_fn.call(null,inst_324556,inst_324557);var state_324563__$1 = (function (){var statearr_324565 = state_324563;(statearr_324565[7] = inst_324558);
return statearr_324565;
})();var statearr_324566_324576 = state_324563__$1;(statearr_324566_324576[2] = null);
(statearr_324566_324576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324564 === 3))
{var inst_324561 = (state_324563[2]);var state_324563__$1 = state_324563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324563__$1,inst_324561);
} else
{if((state_val_324564 === 2))
{var inst_324549 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_324563__$1 = state_324563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324563__$1,4,inst_324549);
} else
{if((state_val_324564 === 1))
{var state_324563__$1 = state_324563;var statearr_324567_324577 = state_324563__$1;(statearr_324567_324577[2] = null);
(statearr_324567_324577[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_324571 = (new Array(8));(statearr_324571[0] = state_machine__17982__auto__);
(statearr_324571[1] = 1);
return statearr_324571;
});
var state_machine__17982__auto____1 = (function (state_324563){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_324563);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e324572){if((e324572 instanceof Object))
{var ex__17985__auto__ = e324572;var statearr_324573_324578 = state_324563;(statearr_324573_324578[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324579 = state_324563;
state_324563 = G__324579;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_324563){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_324563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_324574 = f__18052__auto__.call(null);(statearr_324574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___324575);
return statearr_324574;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__324581 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__324581))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__324581))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18051__auto___324746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_324712){var state_val_324713 = (state_324712[1]);if((state_val_324713 === 1))
{var state_324712__$1 = state_324712;var statearr_324714_324747 = state_324712__$1;(statearr_324714_324747[2] = null);
(statearr_324714_324747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 2))
{var state_324712__$1 = state_324712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324712__$1,4,input_queue__$1);
} else
{if((state_val_324713 === 3))
{var inst_324710 = (state_324712[2]);var state_324712__$1 = state_324712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324712__$1,inst_324710);
} else
{if((state_val_324713 === 4))
{var inst_324666 = (state_324712[2]);var inst_324671 = foundation.app.pre_process.call(null,inst_324666);var inst_324672 = cljs.core.seq.call(null,inst_324671);var inst_324673 = inst_324672;var inst_324674 = null;var inst_324675 = 0;var inst_324676 = 0;var state_324712__$1 = (function (){var statearr_324715 = state_324712;(statearr_324715[7] = inst_324676);
(statearr_324715[8] = inst_324675);
(statearr_324715[9] = inst_324673);
(statearr_324715[10] = inst_324674);
return statearr_324715;
})();var statearr_324716_324748 = state_324712__$1;(statearr_324716_324748[2] = null);
(statearr_324716_324748[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 5))
{var inst_324676 = (state_324712[7]);var inst_324675 = (state_324712[8]);var inst_324678 = (inst_324676 < inst_324675);var inst_324679 = inst_324678;var state_324712__$1 = state_324712;if(cljs.core.truth_(inst_324679))
{var statearr_324720_324749 = state_324712__$1;(statearr_324720_324749[1] = 7);
} else
{var statearr_324721_324750 = state_324712__$1;(statearr_324721_324750[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 6))
{var inst_324707 = (state_324712[2]);var state_324712__$1 = (function (){var statearr_324722 = state_324712;(statearr_324722[11] = inst_324707);
return statearr_324722;
})();var statearr_324723_324751 = state_324712__$1;(statearr_324723_324751[2] = null);
(statearr_324723_324751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 7))
{var inst_324676 = (state_324712[7]);var inst_324675 = (state_324712[8]);var inst_324673 = (state_324712[9]);var inst_324674 = (state_324712[10]);var inst_324681 = cljs.core._nth.call(null,inst_324674,inst_324676);var inst_324682 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_324681);var inst_324683 = (inst_324676 + 1);var tmp324717 = inst_324675;var tmp324718 = inst_324673;var tmp324719 = inst_324674;var inst_324673__$1 = tmp324718;var inst_324674__$1 = tmp324719;var inst_324675__$1 = tmp324717;var inst_324676__$1 = inst_324683;var state_324712__$1 = (function (){var statearr_324724 = state_324712;(statearr_324724[12] = inst_324682);
(statearr_324724[7] = inst_324676__$1);
(statearr_324724[8] = inst_324675__$1);
(statearr_324724[9] = inst_324673__$1);
(statearr_324724[10] = inst_324674__$1);
return statearr_324724;
})();var statearr_324725_324752 = state_324712__$1;(statearr_324725_324752[2] = null);
(statearr_324725_324752[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 8))
{var inst_324686 = (state_324712[13]);var inst_324673 = (state_324712[9]);var inst_324686__$1 = cljs.core.seq.call(null,inst_324673);var state_324712__$1 = (function (){var statearr_324726 = state_324712;(statearr_324726[13] = inst_324686__$1);
return statearr_324726;
})();if(inst_324686__$1)
{var statearr_324727_324753 = state_324712__$1;(statearr_324727_324753[1] = 10);
} else
{var statearr_324728_324754 = state_324712__$1;(statearr_324728_324754[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 9))
{var inst_324705 = (state_324712[2]);var state_324712__$1 = state_324712;var statearr_324729_324755 = state_324712__$1;(statearr_324729_324755[2] = inst_324705);
(statearr_324729_324755[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 10))
{var inst_324686 = (state_324712[13]);var inst_324688 = cljs.core.chunked_seq_QMARK_.call(null,inst_324686);var state_324712__$1 = state_324712;if(inst_324688)
{var statearr_324730_324756 = state_324712__$1;(statearr_324730_324756[1] = 13);
} else
{var statearr_324731_324757 = state_324712__$1;(statearr_324731_324757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 11))
{var state_324712__$1 = state_324712;var statearr_324732_324758 = state_324712__$1;(statearr_324732_324758[2] = null);
(statearr_324732_324758[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 12))
{var inst_324703 = (state_324712[2]);var state_324712__$1 = state_324712;var statearr_324733_324759 = state_324712__$1;(statearr_324733_324759[2] = inst_324703);
(statearr_324733_324759[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 13))
{var inst_324686 = (state_324712[13]);var inst_324690 = cljs.core.chunk_first.call(null,inst_324686);var inst_324691 = cljs.core.chunk_rest.call(null,inst_324686);var inst_324692 = cljs.core.count.call(null,inst_324690);var inst_324673 = inst_324691;var inst_324674 = inst_324690;var inst_324675 = inst_324692;var inst_324676 = 0;var state_324712__$1 = (function (){var statearr_324734 = state_324712;(statearr_324734[7] = inst_324676);
(statearr_324734[8] = inst_324675);
(statearr_324734[9] = inst_324673);
(statearr_324734[10] = inst_324674);
return statearr_324734;
})();var statearr_324735_324760 = state_324712__$1;(statearr_324735_324760[2] = null);
(statearr_324735_324760[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 14))
{var inst_324686 = (state_324712[13]);var inst_324695 = cljs.core.first.call(null,inst_324686);var inst_324696 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_324695);var inst_324697 = cljs.core.next.call(null,inst_324686);var inst_324673 = inst_324697;var inst_324674 = null;var inst_324675 = 0;var inst_324676 = 0;var state_324712__$1 = (function (){var statearr_324736 = state_324712;(statearr_324736[14] = inst_324696);
(statearr_324736[7] = inst_324676);
(statearr_324736[8] = inst_324675);
(statearr_324736[9] = inst_324673);
(statearr_324736[10] = inst_324674);
return statearr_324736;
})();var statearr_324737_324761 = state_324712__$1;(statearr_324737_324761[2] = null);
(statearr_324737_324761[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324713 === 15))
{var inst_324700 = (state_324712[2]);var state_324712__$1 = state_324712;var statearr_324738_324762 = state_324712__$1;(statearr_324738_324762[2] = inst_324700);
(statearr_324738_324762[1] = 12);
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
var state_machine__17982__auto____0 = (function (){var statearr_324742 = (new Array(15));(statearr_324742[0] = state_machine__17982__auto__);
(statearr_324742[1] = 1);
return statearr_324742;
});
var state_machine__17982__auto____1 = (function (state_324712){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_324712);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e324743){if((e324743 instanceof Object))
{var ex__17985__auto__ = e324743;var statearr_324744_324763 = state_324712;(statearr_324744_324763[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324712);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324764 = state_324712;
state_324712 = G__324764;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_324712){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_324712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_324745 = f__18052__auto__.call(null);(statearr_324745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___324746);
return statearr_324745;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__324769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__324770 = null;var count__324771 = 0;var i__324772 = 0;while(true){
if((i__324772 < count__324771))
{var message = cljs.core._nth.call(null,chunk__324770,i__324772);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__324773 = seq__324769;
var G__324774 = chunk__324770;
var G__324775 = count__324771;
var G__324776 = (i__324772 + 1);
seq__324769 = G__324773;
chunk__324770 = G__324774;
count__324771 = G__324775;
i__324772 = G__324776;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324769);if(temp__4092__auto__)
{var seq__324769__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324769__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324769__$1);{
var G__324777 = cljs.core.chunk_rest.call(null,seq__324769__$1);
var G__324778 = c__14547__auto__;
var G__324779 = cljs.core.count.call(null,c__14547__auto__);
var G__324780 = 0;
seq__324769 = G__324777;
chunk__324770 = G__324778;
count__324771 = G__324779;
i__324772 = G__324780;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__324769__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__324781 = cljs.core.next.call(null,seq__324769__$1);
var G__324782 = null;
var G__324783 = 0;
var G__324784 = 0;
seq__324769 = G__324781;
chunk__324770 = G__324782;
count__324771 = G__324783;
i__324772 = G__324784;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__324789){var vec__324790 = p__324789;var name = cljs.core.nth.call(null,vec__324790,0,null);var paths = cljs.core.nth.call(null,vec__324790,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__324791){var vec__324792 = p__324791;var k = cljs.core.nth.call(null,vec__324792,0,null);var v = cljs.core.nth.call(null,vec__324792,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__324793){var map__324799 = p__324793;var map__324799__$1 = ((cljs.core.seq_QMARK_.call(null,map__324799))?cljs.core.apply.call(null,cljs.core.hash_map,map__324799):map__324799);var focus = cljs.core.get.call(null,map__324799__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__324799__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__324800 = cljs.core.seq.call(null,init_messages__$1);var chunk__324801 = null;var count__324802 = 0;var i__324803 = 0;while(true){
if((i__324803 < count__324802))
{var message = cljs.core._nth.call(null,chunk__324801,i__324803);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__324804 = seq__324800;
var G__324805 = chunk__324801;
var G__324806 = count__324802;
var G__324807 = (i__324803 + 1);
seq__324800 = G__324804;
chunk__324801 = G__324805;
count__324802 = G__324806;
i__324803 = G__324807;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324800);if(temp__4092__auto__)
{var seq__324800__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324800__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324800__$1);{
var G__324808 = cljs.core.chunk_rest.call(null,seq__324800__$1);
var G__324809 = c__14547__auto__;
var G__324810 = cljs.core.count.call(null,c__14547__auto__);
var G__324811 = 0;
seq__324800 = G__324808;
chunk__324801 = G__324809;
count__324802 = G__324810;
i__324803 = G__324811;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__324800__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__324812 = cljs.core.next.call(null,seq__324800__$1);
var G__324813 = null;
var G__324814 = 0;
var G__324815 = 0;
seq__324800 = G__324812;
chunk__324801 = G__324813;
count__324802 = G__324814;
i__324803 = G__324815;
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
begin = function(app,p__324793){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__324793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_324876){var state_val_324877 = (state_324876[1]);if((state_val_324877 === 7))
{var inst_324871 = (state_324876[2]);var state_324876__$1 = (function (){var statearr_324878 = state_324876;(statearr_324878[7] = inst_324871);
return statearr_324878;
})();var statearr_324879_324894 = state_324876__$1;(statearr_324879_324894[2] = null);
(statearr_324879_324894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324877 === 6))
{var inst_324857 = (state_324876[8]);var inst_324862 = cljs.core.reset_BANG_.call(null,last_message,inst_324857);var inst_324863 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_324857);var inst_324864 = cljs.core.get_method.call(null,foundation.app.effect,inst_324863);var inst_324865 = cljs.core.dissoc.call(null,inst_324857,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_324866 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_324857);var inst_324867 = [inst_324865,input,inst_324866];var inst_324868 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_324867,null));var inst_324869 = cljs.core.apply.call(null,inst_324864,inst_324868);var state_324876__$1 = (function (){var statearr_324880 = state_324876;(statearr_324880[9] = inst_324862);
return statearr_324880;
})();var statearr_324881_324895 = state_324876__$1;(statearr_324881_324895[2] = inst_324869);
(statearr_324881_324895[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324877 === 5))
{var state_324876__$1 = state_324876;var statearr_324882_324896 = state_324876__$1;(statearr_324882_324896[2] = null);
(statearr_324882_324896[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324877 === 4))
{var inst_324857 = (state_324876[8]);var inst_324857__$1 = (state_324876[2]);var inst_324858 = cljs.core.deref.call(null,last_message);var inst_324859 = cljs.core._EQ_.call(null,inst_324858,inst_324857__$1);var state_324876__$1 = (function (){var statearr_324883 = state_324876;(statearr_324883[8] = inst_324857__$1);
return statearr_324883;
})();if(inst_324859)
{var statearr_324884_324897 = state_324876__$1;(statearr_324884_324897[1] = 5);
} else
{var statearr_324885_324898 = state_324876__$1;(statearr_324885_324898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_324877 === 3))
{var inst_324874 = (state_324876[2]);var state_324876__$1 = state_324876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324876__$1,inst_324874);
} else
{if((state_val_324877 === 2))
{var state_324876__$1 = state_324876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324876__$1,4,output);
} else
{if((state_val_324877 === 1))
{var state_324876__$1 = state_324876;var statearr_324886_324899 = state_324876__$1;(statearr_324886_324899[2] = null);
(statearr_324886_324899[1] = 2);
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
var state_machine__17982__auto____0 = (function (){var statearr_324890 = (new Array(10));(statearr_324890[0] = state_machine__17982__auto__);
(statearr_324890[1] = 1);
return statearr_324890;
});
var state_machine__17982__auto____1 = (function (state_324876){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_324876);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e324891){if((e324891 instanceof Object))
{var ex__17985__auto__ = e324891;var statearr_324892_324900 = state_324876;(statearr_324892_324900[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__324901 = state_324876;
state_324876 = G__324901;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_324876){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_324876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_324893 = f__18052__auto__.call(null);(statearr_324893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_324893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__324906 = cljs.core.seq.call(null,script);var chunk__324907 = null;var count__324908 = 0;var i__324909 = 0;while(true){
if((i__324909 < count__324908))
{var message = cljs.core._nth.call(null,chunk__324907,i__324909);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__324910 = seq__324906;
var G__324911 = chunk__324907;
var G__324912 = count__324908;
var G__324913 = (i__324909 + 1);
seq__324906 = G__324910;
chunk__324907 = G__324911;
count__324908 = G__324912;
i__324909 = G__324913;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__324906);if(temp__4092__auto__)
{var seq__324906__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324906__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__324906__$1);{
var G__324914 = cljs.core.chunk_rest.call(null,seq__324906__$1);
var G__324915 = c__14547__auto__;
var G__324916 = cljs.core.count.call(null,c__14547__auto__);
var G__324917 = 0;
seq__324906 = G__324914;
chunk__324907 = G__324915;
count__324908 = G__324916;
i__324909 = G__324917;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__324906__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__324918 = cljs.core.next.call(null,seq__324906__$1);
var G__324919 = null;
var G__324920 = 0;
var G__324921 = 0;
seq__324906 = G__324918;
chunk__324907 = G__324919;
count__324908 = G__324920;
i__324909 = G__324921;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__324922,graph){var map__324923 = p__324922;var map__324923__$1 = ((cljs.core.seq_QMARK_.call(null,map__324923))?cljs.core.apply.call(null,cljs.core.hash_map,map__324923):map__324923);var transform = cljs.core.get.call(null,map__324923__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__324924 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__324924,0,null);var path = cljs.core.nth.call(null,vec__324924,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__324927,graph){var map__324928 = p__324927;var map__324928__$1 = ((cljs.core.seq_QMARK_.call(null,map__324928))?cljs.core.apply.call(null,cljs.core.hash_map,map__324928):map__324928);var derives = cljs.core.get.call(null,map__324928__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__324929 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__324929,0,null);var output_path = cljs.core.nth.call(null,vec__324929,1,null);var input_spec = cljs.core.nth.call(null,vec__324929,2,null);var input_paths__$1 = (function (){var or__13823__auto__ = (function (){var and__13811__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13811__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13811__auto__;
}
})();if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__324925_SHARP_,p2__324926_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__324925_SHARP_,output_path,p2__324926_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__324931 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__324931,0,null);var large = cljs.core.nth.call(null,vec__324931,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__324932_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__324932_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__324933){var map__324936 = p__324933;var map__324936__$1 = ((cljs.core.seq_QMARK_.call(null,map__324936))?cljs.core.apply.call(null,cljs.core.hash_map,map__324936):map__324936);var state = map__324936__$1;var change = cljs.core.get.call(null,map__324936__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__324936__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__324937 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__324937__$1 = ((cljs.core.seq_QMARK_.call(null,map__324937))?cljs.core.apply.call(null,cljs.core.hash_map,map__324937):map__324937);var state__$1 = map__324937__$1;var processed_inputs = cljs.core.get.call(null,map__324937__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__324937__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__324937__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14516__auto__ = (function iter__324942(s__324943){return (new cljs.core.LazySeq(null,(function (){var s__324943__$1 = s__324943;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__324943__$1);if(temp__4092__auto__)
{var s__324943__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__324943__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__324943__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__324945 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__324944 = 0;while(true){
if((i__324944 < size__14515__auto__))
{var dval = cljs.core._nth.call(null,c__14514__auto__,i__324944);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__324945,cljs.core.get.call(null,dispatches,dval));
{
var G__324946 = (i__324944 + 1);
i__324944 = G__324946;
continue;
}
} else
{{
var G__324947 = (i__324944 + 1);
i__324944 = G__324947;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324945),iter__324942.call(null,cljs.core.chunk_rest.call(null,s__324943__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324945),null);
}
} else
{var dval = cljs.core.first.call(null,s__324943__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__324942.call(null,cljs.core.rest.call(null,s__324943__$2)));
} else
{{
var G__324948 = cljs.core.rest.call(null,s__324943__$2);
s__324943__$1 = G__324948;
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
update_state.cljs$lang$applyTo = (function (arglist__324949){
var state = cljs.core.first(arglist__324949);
arglist__324949 = cljs.core.next(arglist__324949);
var path = cljs.core.first(arglist__324949);
arglist__324949 = cljs.core.next(arglist__324949);
var f = cljs.core.first(arglist__324949);
var args = cljs.core.rest(arglist__324949);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__324950){var map__324953 = p__324950;var map__324953__$1 = ((cljs.core.seq_QMARK_.call(null,map__324953))?cljs.core.apply.call(null,cljs.core.hash_map,map__324953):map__324953);var state = map__324953__$1;var context = cljs.core.get.call(null,map__324953__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__324953__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__324954 = message;var map__324954__$1 = ((cljs.core.seq_QMARK_.call(null,map__324954))?cljs.core.apply.call(null,cljs.core.hash_map,map__324954):map__324954);var type = cljs.core.get.call(null,map__324954__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__324954__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__324956){var map__324958 = p__324956;var map__324958__$1 = ((cljs.core.seq_QMARK_.call(null,map__324958))?cljs.core.apply.call(null,cljs.core.hash_map,map__324958):map__324958);var state = map__324958__$1;var context = cljs.core.get.call(null,map__324958__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__324955_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__324955_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__324959){var vec__324960 = p__324959;var dispatch_val = cljs.core.nth.call(null,vec__324960,0,null);var multifn = cljs.core.nth.call(null,vec__324960,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__324961){var vec__324962 = p__324961;var dispatch_val = cljs.core.nth.call(null,vec__324962,0,null);var multifn = cljs.core.nth.call(null,vec__324962,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__324963_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__324963_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__324964){var map__324972 = p__324964;var map__324972__$1 = ((cljs.core.seq_QMARK_.call(null,map__324972))?cljs.core.apply.call(null,cljs.core.hash_map,map__324972):map__324972);var state = map__324972__$1;var context = cljs.core.get.call(null,map__324972__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__324973,p__324974){var map__324975 = p__324973;var map__324975__$1 = ((cljs.core.seq_QMARK_.call(null,map__324975))?cljs.core.apply.call(null,cljs.core.hash_map,map__324975):map__324975);var state__$1 = map__324975__$1;var change = cljs.core.get.call(null,map__324975__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__324976 = p__324974;var vec__324977 = cljs.core.nth.call(null,vec__324976,0,null);var input_paths = cljs.core.nth.call(null,vec__324977,0,null);var output_path = cljs.core.nth.call(null,vec__324977,1,null);var ispec = cljs.core.nth.call(null,vec__324977,2,null);var derive = vec__324977;var derive_fn = cljs.core.nth.call(null,vec__324976,1,null);var vec__324978 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__324978,0,null);var arg_names = cljs.core.nth.call(null,vec__324978,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__324979){var map__324987 = p__324979;var map__324987__$1 = ((cljs.core.seq_QMARK_.call(null,map__324987))?cljs.core.apply.call(null,cljs.core.hash_map,map__324987):map__324987);var state = map__324987__$1;var context = cljs.core.get.call(null,map__324987__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__324988,p__324989){var map__324990 = p__324988;var map__324990__$1 = ((cljs.core.seq_QMARK_.call(null,map__324990))?cljs.core.apply.call(null,cljs.core.hash_map,map__324990):map__324990);var state__$1 = map__324990__$1;var change = cljs.core.get.call(null,map__324990__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__324991 = p__324989;var vec__324992 = cljs.core.nth.call(null,vec__324991,0,null);var type = cljs.core.nth.call(null,vec__324992,0,null);var input_paths = cljs.core.nth.call(null,vec__324992,1,null);var ispec = cljs.core.nth.call(null,vec__324992,2,null);var effect = vec__324992;var vec__324993 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__324993,0,null);var arg_names = cljs.core.nth.call(null,vec__324993,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k324995,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k324995,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k324995,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k324995,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k324995,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k324995,else__14388__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__324994){var self__ = this;
var this__14392__auto____$1 = this;var pred__324997 = cljs.core.keyword_identical_QMARK_;var expr__324998 = k__14393__auto__;if(cljs.core.truth_(pred__324997.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__324998)))
{return (new foundation.app.Application(G__324994,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__324997.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__324998)))
{return (new foundation.app.Application(self__.state,G__324994,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__324997.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__324998)))
{return (new foundation.app.Application(self__.state,self__.input,G__324994,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__324997.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__324998)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__324994,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__324994),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__324994){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__324994,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__324996){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__324996),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__324996),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__324996),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__324996),null,cljs.core.dissoc.call(null,G__324996,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__325000_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__325000_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__325001){var map__325003 = p__325001;var map__325003__$1 = ((cljs.core.seq_QMARK_.call(null,map__325003))?cljs.core.apply.call(null,cljs.core.hash_map,map__325003):map__325003);var init_messages = cljs.core.get.call(null,map__325003__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__325003__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__325001 = null;if (arguments.length > 1) {
  p__325001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__325001);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__325004){
var root_id = cljs.core.first(arglist__325004);
var p__325001 = cljs.core.rest(arglist__325004);
return create_app__delegate(root_id,p__325001);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj325006 = {};return obj325006;
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