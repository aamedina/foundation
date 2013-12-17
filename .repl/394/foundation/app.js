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
foundation.app.transform = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__31464__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__31464 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__31464__delegate.call(this,k,args);};
G__31464.cljs$lang$maxFixedArity = 1;
G__31464.cljs$lang$applyTo = (function (arglist__31465){
var k = cljs.core.first(arglist__31465);
var args = cljs.core.rest(arglist__31465);
return G__31464__delegate(k,args);
});
G__31464.cljs$core$IFn$_invoke$arity$variadic = G__31464__delegate;
return G__31464;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__31466,changes){var map__31470 = p__31466;var map__31470__$1 = ((cljs.core.seq_QMARK_.call(null,map__31470))?cljs.core.apply.call(null,cljs.core.hash_map,map__31470):map__31470);var processed_inputs = cljs.core.get.call(null,map__31470__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__31471){var vec__31472 = p__31471;var k = cljs.core.nth.call(null,vec__31472,0,null);var v = cljs.core.nth.call(null,vec__31472,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__31479){var vec__31480 = p__31479;var k = cljs.core.nth.call(null,vec__31480,0,null);var v = cljs.core.nth.call(null,vec__31480,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__31481){var vec__31482 = p__31481;var k = cljs.core.nth.call(null,vec__31482,0,null);var v = cljs.core.nth.call(null,vec__31482,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__31483){var vec__31484 = p__31483;var k = cljs.core.nth.call(null,vec__31484,0,null);var v = cljs.core.nth.call(null,vec__31484,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__31523){var vec__31524 = p__31523;var k = cljs.core.nth.call(null,vec__31524,0,null);var v = cljs.core.nth.call(null,vec__31524,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__8540__auto__ = (function iter__31525(s__31526){return (new cljs.core.LazySeq(null,(function (){var s__31526__$1 = s__31526;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31526__$1);if(temp__4092__auto__)
{var s__31526__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31526__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__31526__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__31528 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__31527 = 0;while(true){
if((i__31527 < size__8539__auto__))
{var vec__31543 = cljs.core._nth.call(null,c__8538__auto__,i__31527);var path = cljs.core.nth.call(null,vec__31543,0,null);var arg = cljs.core.nth.call(null,vec__31543,1,null);cljs.core.chunk_append.call(null,b__31528,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__31549 = data_model__$1;if(G__31549)
{var bit__8473__auto__ = (G__31549.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8473__auto__) || (G__31549.cljs$core$ILookup$))
{return true;
} else
{if((!G__31549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__31549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__31549);
}
})())
{var data_model_k__31548 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__31548,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__31557 = cljs.core.rest.call(null,ks);
var G__31558 = cljs.core.get.call(null,v,k,v);
var G__31559 = ret;
ks = G__31557;
data_model__$1 = G__31558;
ret = G__31559;
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
var G__31560 = (i__31527 + 1);
i__31527 = G__31560;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31528),iter__31525.call(null,cljs.core.chunk_rest.call(null,s__31526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31528),null);
}
} else
{var vec__31550 = cljs.core.first.call(null,s__31526__$2);var path = cljs.core.nth.call(null,vec__31550,0,null);var arg = cljs.core.nth.call(null,vec__31550,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__31556 = data_model__$1;if(G__31556)
{var bit__8473__auto__ = (G__31556.cljs$lang$protocol_mask$partition0$ & 256);if((bit__8473__auto__) || (G__31556.cljs$core$ILookup$))
{return true;
} else
{if((!G__31556.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__31556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__31556);
}
})())
{var data_model_k__31555 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__31555,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__31561 = cljs.core.rest.call(null,ks);
var G__31562 = cljs.core.get.call(null,v,k,v);
var G__31563 = ret;
ks = G__31561;
data_model__$1 = G__31562;
ret = G__31563;
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
})(),iter__31525.call(null,cljs.core.rest.call(null,s__31526__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__31564){var map__31565 = p__31564;var map__31565__$1 = ((cljs.core.seq_QMARK_.call(null,map__31565))?cljs.core.apply.call(null,cljs.core.hash_map,map__31565):map__31565);var input_paths = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__13612__auto___31620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_31608){var state_val_31609 = (state_31608[1]);if((state_val_31609 === 4))
{var inst_31596 = (state_31608[2]);var inst_31597 = cljs.core.deref.call(null,app_model);var inst_31598 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_31596);var inst_31599 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_31598);var inst_31600 = foundation.app.tree.t.call(null,inst_31597);var inst_31601 = foundation.app.tree.since_t.call(null,inst_31599,inst_31600);var inst_31602 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_31603 = render_fn.call(null,inst_31601,inst_31602);var state_31608__$1 = (function (){var statearr_31610 = state_31608;(statearr_31610[7] = inst_31603);
return statearr_31610;
})();var statearr_31611_31621 = state_31608__$1;(statearr_31611_31621[2] = null);
(statearr_31611_31621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31609 === 3))
{var inst_31606 = (state_31608[2]);var state_31608__$1 = state_31608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31608__$1,inst_31606);
} else
{if((state_val_31609 === 2))
{var inst_31594 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_31608__$1 = state_31608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,4,inst_31594);
} else
{if((state_val_31609 === 1))
{var state_31608__$1 = state_31608;var statearr_31612_31622 = state_31608__$1;(statearr_31612_31622[2] = null);
(statearr_31612_31622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_31616 = (new Array(8));(statearr_31616[0] = state_machine__13486__auto__);
(statearr_31616[1] = 1);
return statearr_31616;
});
var state_machine__13486__auto____1 = (function (state_31608){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_31608);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e31617){if((e31617 instanceof Object))
{var ex__13489__auto__ = e31617;var statearr_31618_31623 = state_31608;(statearr_31618_31623[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31624 = state_31608;
state_31608 = G__31624;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_31619 = f__13613__auto__.call(null);(statearr_31619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___31620);
return statearr_31619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__31626 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__31626))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__31626))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__13612__auto___31791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_31757){var state_val_31758 = (state_31757[1]);if((state_val_31758 === 1))
{var state_31757__$1 = state_31757;var statearr_31759_31792 = state_31757__$1;(statearr_31759_31792[2] = null);
(statearr_31759_31792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 2))
{var state_31757__$1 = state_31757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,4,input_queue__$1);
} else
{if((state_val_31758 === 3))
{var inst_31755 = (state_31757[2]);var state_31757__$1 = state_31757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31757__$1,inst_31755);
} else
{if((state_val_31758 === 4))
{var inst_31711 = (state_31757[2]);var inst_31716 = foundation.app.pre_process.call(null,inst_31711);var inst_31717 = cljs.core.seq.call(null,inst_31716);var inst_31718 = inst_31717;var inst_31719 = null;var inst_31720 = 0;var inst_31721 = 0;var state_31757__$1 = (function (){var statearr_31760 = state_31757;(statearr_31760[7] = inst_31719);
(statearr_31760[8] = inst_31718);
(statearr_31760[9] = inst_31720);
(statearr_31760[10] = inst_31721);
return statearr_31760;
})();var statearr_31761_31793 = state_31757__$1;(statearr_31761_31793[2] = null);
(statearr_31761_31793[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 5))
{var inst_31720 = (state_31757[9]);var inst_31721 = (state_31757[10]);var inst_31723 = (inst_31721 < inst_31720);var inst_31724 = inst_31723;var state_31757__$1 = state_31757;if(cljs.core.truth_(inst_31724))
{var statearr_31765_31794 = state_31757__$1;(statearr_31765_31794[1] = 7);
} else
{var statearr_31766_31795 = state_31757__$1;(statearr_31766_31795[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 6))
{var inst_31752 = (state_31757[2]);var state_31757__$1 = (function (){var statearr_31767 = state_31757;(statearr_31767[11] = inst_31752);
return statearr_31767;
})();var statearr_31768_31796 = state_31757__$1;(statearr_31768_31796[2] = null);
(statearr_31768_31796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 7))
{var inst_31719 = (state_31757[7]);var inst_31718 = (state_31757[8]);var inst_31720 = (state_31757[9]);var inst_31721 = (state_31757[10]);var inst_31726 = cljs.core._nth.call(null,inst_31719,inst_31721);var inst_31727 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_31726);var inst_31728 = (inst_31721 + 1);var tmp31762 = inst_31719;var tmp31763 = inst_31718;var tmp31764 = inst_31720;var inst_31718__$1 = tmp31763;var inst_31719__$1 = tmp31762;var inst_31720__$1 = tmp31764;var inst_31721__$1 = inst_31728;var state_31757__$1 = (function (){var statearr_31769 = state_31757;(statearr_31769[7] = inst_31719__$1);
(statearr_31769[8] = inst_31718__$1);
(statearr_31769[9] = inst_31720__$1);
(statearr_31769[10] = inst_31721__$1);
(statearr_31769[12] = inst_31727);
return statearr_31769;
})();var statearr_31770_31797 = state_31757__$1;(statearr_31770_31797[2] = null);
(statearr_31770_31797[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 8))
{var inst_31731 = (state_31757[13]);var inst_31718 = (state_31757[8]);var inst_31731__$1 = cljs.core.seq.call(null,inst_31718);var state_31757__$1 = (function (){var statearr_31771 = state_31757;(statearr_31771[13] = inst_31731__$1);
return statearr_31771;
})();if(inst_31731__$1)
{var statearr_31772_31798 = state_31757__$1;(statearr_31772_31798[1] = 10);
} else
{var statearr_31773_31799 = state_31757__$1;(statearr_31773_31799[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 9))
{var inst_31750 = (state_31757[2]);var state_31757__$1 = state_31757;var statearr_31774_31800 = state_31757__$1;(statearr_31774_31800[2] = inst_31750);
(statearr_31774_31800[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 10))
{var inst_31731 = (state_31757[13]);var inst_31733 = cljs.core.chunked_seq_QMARK_.call(null,inst_31731);var state_31757__$1 = state_31757;if(inst_31733)
{var statearr_31775_31801 = state_31757__$1;(statearr_31775_31801[1] = 13);
} else
{var statearr_31776_31802 = state_31757__$1;(statearr_31776_31802[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 11))
{var state_31757__$1 = state_31757;var statearr_31777_31803 = state_31757__$1;(statearr_31777_31803[2] = null);
(statearr_31777_31803[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 12))
{var inst_31748 = (state_31757[2]);var state_31757__$1 = state_31757;var statearr_31778_31804 = state_31757__$1;(statearr_31778_31804[2] = inst_31748);
(statearr_31778_31804[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 13))
{var inst_31731 = (state_31757[13]);var inst_31735 = cljs.core.chunk_first.call(null,inst_31731);var inst_31736 = cljs.core.chunk_rest.call(null,inst_31731);var inst_31737 = cljs.core.count.call(null,inst_31735);var inst_31718 = inst_31736;var inst_31719 = inst_31735;var inst_31720 = inst_31737;var inst_31721 = 0;var state_31757__$1 = (function (){var statearr_31779 = state_31757;(statearr_31779[7] = inst_31719);
(statearr_31779[8] = inst_31718);
(statearr_31779[9] = inst_31720);
(statearr_31779[10] = inst_31721);
return statearr_31779;
})();var statearr_31780_31805 = state_31757__$1;(statearr_31780_31805[2] = null);
(statearr_31780_31805[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 14))
{var inst_31731 = (state_31757[13]);var inst_31740 = cljs.core.first.call(null,inst_31731);var inst_31741 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_31740);var inst_31742 = cljs.core.next.call(null,inst_31731);var inst_31718 = inst_31742;var inst_31719 = null;var inst_31720 = 0;var inst_31721 = 0;var state_31757__$1 = (function (){var statearr_31781 = state_31757;(statearr_31781[7] = inst_31719);
(statearr_31781[8] = inst_31718);
(statearr_31781[9] = inst_31720);
(statearr_31781[10] = inst_31721);
(statearr_31781[14] = inst_31741);
return statearr_31781;
})();var statearr_31782_31806 = state_31757__$1;(statearr_31782_31806[2] = null);
(statearr_31782_31806[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31758 === 15))
{var inst_31745 = (state_31757[2]);var state_31757__$1 = state_31757;var statearr_31783_31807 = state_31757__$1;(statearr_31783_31807[2] = inst_31745);
(statearr_31783_31807[1] = 12);
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
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_31787 = (new Array(15));(statearr_31787[0] = state_machine__13486__auto__);
(statearr_31787[1] = 1);
return statearr_31787;
});
var state_machine__13486__auto____1 = (function (state_31757){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_31757);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e31788){if((e31788 instanceof Object))
{var ex__13489__auto__ = e31788;var statearr_31789_31808 = state_31757;(statearr_31789_31808[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31809 = state_31757;
state_31757 = G__31809;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_31790 = f__13613__auto__.call(null);(statearr_31790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto___31791);
return statearr_31790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__31814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__31815 = null;var count__31816 = 0;var i__31817 = 0;while(true){
if((i__31817 < count__31816))
{var message = cljs.core._nth.call(null,chunk__31815,i__31817);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__31818 = seq__31814;
var G__31819 = chunk__31815;
var G__31820 = count__31816;
var G__31821 = (i__31817 + 1);
seq__31814 = G__31818;
chunk__31815 = G__31819;
count__31816 = G__31820;
i__31817 = G__31821;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31814);if(temp__4092__auto__)
{var seq__31814__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31814__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__31814__$1);{
var G__31822 = cljs.core.chunk_rest.call(null,seq__31814__$1);
var G__31823 = c__8571__auto__;
var G__31824 = cljs.core.count.call(null,c__8571__auto__);
var G__31825 = 0;
seq__31814 = G__31822;
chunk__31815 = G__31823;
count__31816 = G__31824;
i__31817 = G__31825;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__31814__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__31826 = cljs.core.next.call(null,seq__31814__$1);
var G__31827 = null;
var G__31828 = 0;
var G__31829 = 0;
seq__31814 = G__31826;
chunk__31815 = G__31827;
count__31816 = G__31828;
i__31817 = G__31829;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__31834){var vec__31835 = p__31834;var name = cljs.core.nth.call(null,vec__31835,0,null);var paths = cljs.core.nth.call(null,vec__31835,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__31836){var vec__31837 = p__31836;var k = cljs.core.nth.call(null,vec__31837,0,null);var v = cljs.core.nth.call(null,vec__31837,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__31838){var map__31844 = p__31838;var map__31844__$1 = ((cljs.core.seq_QMARK_.call(null,map__31844))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);var focus = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__31845 = cljs.core.seq.call(null,init_messages__$1);var chunk__31846 = null;var count__31847 = 0;var i__31848 = 0;while(true){
if((i__31848 < count__31847))
{var message = cljs.core._nth.call(null,chunk__31846,i__31848);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__31849 = seq__31845;
var G__31850 = chunk__31846;
var G__31851 = count__31847;
var G__31852 = (i__31848 + 1);
seq__31845 = G__31849;
chunk__31846 = G__31850;
count__31847 = G__31851;
i__31848 = G__31852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31845);if(temp__4092__auto__)
{var seq__31845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31845__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__31845__$1);{
var G__31853 = cljs.core.chunk_rest.call(null,seq__31845__$1);
var G__31854 = c__8571__auto__;
var G__31855 = cljs.core.count.call(null,c__8571__auto__);
var G__31856 = 0;
seq__31845 = G__31853;
chunk__31846 = G__31854;
count__31847 = G__31855;
i__31848 = G__31856;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__31845__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__31857 = cljs.core.next.call(null,seq__31845__$1);
var G__31858 = null;
var G__31859 = 0;
var G__31860 = 0;
seq__31845 = G__31857;
chunk__31846 = G__31858;
count__31847 = G__31859;
i__31848 = G__31860;
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
begin = function(app,p__31838){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__31838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__13612__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13613__auto__ = (function (){var switch__13485__auto__ = (function (state_31901){var state_val_31902 = (state_31901[1]);if((state_val_31902 === 4))
{var inst_31889 = (state_31901[2]);var inst_31890 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_31889);var inst_31891 = cljs.core.get_method.call(null,foundation.app.effect,inst_31890);var inst_31892 = cljs.core.dissoc.call(null,inst_31889,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_31893 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_31889);var inst_31894 = [inst_31892,input,inst_31893];var inst_31895 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_31894,null));var inst_31896 = cljs.core.apply.call(null,inst_31891,inst_31895);var state_31901__$1 = (function (){var statearr_31903 = state_31901;(statearr_31903[7] = inst_31896);
return statearr_31903;
})();var statearr_31904_31913 = state_31901__$1;(statearr_31904_31913[2] = null);
(statearr_31904_31913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31902 === 3))
{var inst_31899 = (state_31901[2]);var state_31901__$1 = state_31901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31901__$1,inst_31899);
} else
{if((state_val_31902 === 2))
{var state_31901__$1 = state_31901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31901__$1,4,output);
} else
{if((state_val_31902 === 1))
{var state_31901__$1 = state_31901;var statearr_31905_31914 = state_31901__$1;(statearr_31905_31914[2] = null);
(statearr_31905_31914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__13485__auto__){
return (function() {
var state_machine__13486__auto__ = null;
var state_machine__13486__auto____0 = (function (){var statearr_31909 = (new Array(8));(statearr_31909[0] = state_machine__13486__auto__);
(statearr_31909[1] = 1);
return statearr_31909;
});
var state_machine__13486__auto____1 = (function (state_31901){while(true){
var ret_value__13487__auto__ = (function (){try{while(true){
var result__13488__auto__ = switch__13485__auto__.call(null,state_31901);if(cljs.core.keyword_identical_QMARK_.call(null,result__13488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13488__auto__;
}
break;
}
}catch (e31910){if((e31910 instanceof Object))
{var ex__13489__auto__ = e31910;var statearr_31911_31915 = state_31901;(statearr_31911_31915[5] = ex__13489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31916 = state_31901;
state_31901 = G__31916;
continue;
}
} else
{return ret_value__13487__auto__;
}
break;
}
});
state_machine__13486__auto__ = function(state_31901){
switch(arguments.length){
case 0:
return state_machine__13486__auto____0.call(this);
case 1:
return state_machine__13486__auto____1.call(this,state_31901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13486__auto____0;
state_machine__13486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13486__auto____1;
return state_machine__13486__auto__;
})()
;})(switch__13485__auto__))
})();var state__13614__auto__ = (function (){var statearr_31912 = f__13613__auto__.call(null);(statearr_31912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13612__auto__);
return statearr_31912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13614__auto__);
}));
return c__13612__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__31921 = cljs.core.seq.call(null,script);var chunk__31922 = null;var count__31923 = 0;var i__31924 = 0;while(true){
if((i__31924 < count__31923))
{var message = cljs.core._nth.call(null,chunk__31922,i__31924);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__31925 = seq__31921;
var G__31926 = chunk__31922;
var G__31927 = count__31923;
var G__31928 = (i__31924 + 1);
seq__31921 = G__31925;
chunk__31922 = G__31926;
count__31923 = G__31927;
i__31924 = G__31928;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31921);if(temp__4092__auto__)
{var seq__31921__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31921__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__31921__$1);{
var G__31929 = cljs.core.chunk_rest.call(null,seq__31921__$1);
var G__31930 = c__8571__auto__;
var G__31931 = cljs.core.count.call(null,c__8571__auto__);
var G__31932 = 0;
seq__31921 = G__31929;
chunk__31922 = G__31930;
count__31923 = G__31931;
i__31924 = G__31932;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__31921__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__31933 = cljs.core.next.call(null,seq__31921__$1);
var G__31934 = null;
var G__31935 = 0;
var G__31936 = 0;
seq__31921 = G__31933;
chunk__31922 = G__31934;
count__31923 = G__31935;
i__31924 = G__31936;
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
foundation.app.depends = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__31937,graph){var map__31938 = p__31937;var map__31938__$1 = ((cljs.core.seq_QMARK_.call(null,map__31938))?cljs.core.apply.call(null,cljs.core.hash_map,map__31938):map__31938);var transform = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__31939 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__31939,0,null);var path = cljs.core.nth.call(null,vec__31939,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__31942,graph){var map__31943 = p__31942;var map__31943__$1 = ((cljs.core.seq_QMARK_.call(null,map__31943))?cljs.core.apply.call(null,cljs.core.hash_map,map__31943):map__31943);var derives = cljs.core.get.call(null,map__31943__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__31944 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__31944,0,null);var output_path = cljs.core.nth.call(null,vec__31944,1,null);var input_spec = cljs.core.nth.call(null,vec__31944,2,null);var input_paths__$1 = (function (){var or__7847__auto__ = (function (){var and__7835__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__7835__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__7835__auto__;
}
})();if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__31940_SHARP_,p2__31941_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__31940_SHARP_,output_path,p2__31941_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__31945 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__31945,0,null);var input_paths = cljs.core.nth.call(null,vec__31945,1,null);var output_paths = cljs.core.nth.call(null,vec__31945,2,null);var input_spec = cljs.core.nth.call(null,vec__31945,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__31946){var vec__31947 = p__31946;var input_path = cljs.core.nth.call(null,vec__31947,0,null);var output_path = cljs.core.nth.call(null,vec__31947,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
}),graph,io_paths);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__7847__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__31949 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__31949,0,null);var large = cljs.core.nth.call(null,vec__31949,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__31950_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__31950_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__31951){var map__31954 = p__31951;var map__31954__$1 = ((cljs.core.seq_QMARK_.call(null,map__31954))?cljs.core.apply.call(null,cljs.core.hash_map,map__31954):map__31954);var state = map__31954__$1;var change = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__31955 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__31955__$1 = ((cljs.core.seq_QMARK_.call(null,map__31955))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);var state__$1 = map__31955__$1;var processed_inputs = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__8540__auto__ = (function iter__31960(s__31961){return (new cljs.core.LazySeq(null,(function (){var s__31961__$1 = s__31961;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31961__$1);if(temp__4092__auto__)
{var s__31961__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31961__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__31961__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__31963 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__31962 = 0;while(true){
if((i__31962 < size__8539__auto__))
{var dval = cljs.core._nth.call(null,c__8538__auto__,i__31962);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__31963,cljs.core.get.call(null,dispatches,dval));
{
var G__31964 = (i__31962 + 1);
i__31962 = G__31964;
continue;
}
} else
{{
var G__31965 = (i__31962 + 1);
i__31962 = G__31965;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31963),iter__31960.call(null,cljs.core.chunk_rest.call(null,s__31961__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31963),null);
}
} else
{var dval = cljs.core.first.call(null,s__31961__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__31960.call(null,cljs.core.rest.call(null,s__31961__$2)));
} else
{{
var G__31966 = cljs.core.rest.call(null,s__31961__$2);
s__31961__$1 = G__31966;
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
});return iter__8540__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__31967){
var state = cljs.core.first(arglist__31967);
arglist__31967 = cljs.core.next(arglist__31967);
var path = cljs.core.first(arglist__31967);
arglist__31967 = cljs.core.next(arglist__31967);
var f = cljs.core.first(arglist__31967);
var args = cljs.core.rest(arglist__31967);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__31968){var map__31971 = p__31968;var map__31971__$1 = ((cljs.core.seq_QMARK_.call(null,map__31971))?cljs.core.apply.call(null,cljs.core.hash_map,map__31971):map__31971);var state = map__31971__$1;var context = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__31971__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__31972 = message;var map__31972__$1 = ((cljs.core.seq_QMARK_.call(null,map__31972))?cljs.core.apply.call(null,cljs.core.hash_map,map__31972):map__31972);var type = cljs.core.get.call(null,map__31972__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__31972__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__31974){var map__31976 = p__31974;var map__31976__$1 = ((cljs.core.seq_QMARK_.call(null,map__31976))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);var state = map__31976__$1;var context = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__31973_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__31973_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__31977){var vec__31978 = p__31977;var dispatch_val = cljs.core.nth.call(null,vec__31978,0,null);var multifn = cljs.core.nth.call(null,vec__31978,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__31979){var vec__31980 = p__31979;var dispatch_val = cljs.core.nth.call(null,vec__31980,0,null);var multifn = cljs.core.nth.call(null,vec__31980,1,null);return (cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31981_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__31981_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__31982){var map__31990 = p__31982;var map__31990__$1 = ((cljs.core.seq_QMARK_.call(null,map__31990))?cljs.core.apply.call(null,cljs.core.hash_map,map__31990):map__31990);var state = map__31990__$1;var context = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__31991,p__31992){var map__31993 = p__31991;var map__31993__$1 = ((cljs.core.seq_QMARK_.call(null,map__31993))?cljs.core.apply.call(null,cljs.core.hash_map,map__31993):map__31993);var state__$1 = map__31993__$1;var change = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__31994 = p__31992;var vec__31995 = cljs.core.nth.call(null,vec__31994,0,null);var input_paths = cljs.core.nth.call(null,vec__31995,0,null);var output_path = cljs.core.nth.call(null,vec__31995,1,null);var ispec = cljs.core.nth.call(null,vec__31995,2,null);var derive = vec__31995;var derive_fn = cljs.core.nth.call(null,vec__31994,1,null);var vec__31996 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__31996,0,null);var arg_names = cljs.core.nth.call(null,vec__31996,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__31997){var map__32007 = p__31997;var map__32007__$1 = ((cljs.core.seq_QMARK_.call(null,map__32007))?cljs.core.apply.call(null,cljs.core.hash_map,map__32007):map__32007);var state = map__32007__$1;var context = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__32008,p__32009){var map__32010 = p__32008;var map__32010__$1 = ((cljs.core.seq_QMARK_.call(null,map__32010))?cljs.core.apply.call(null,cljs.core.hash_map,map__32010):map__32010);var state__$1 = map__32010__$1;var change = cljs.core.get.call(null,map__32010__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__32011 = p__32009;var vec__32012 = cljs.core.nth.call(null,vec__32011,0,null);var type = cljs.core.nth.call(null,vec__32012,0,null);var input_paths = cljs.core.nth.call(null,vec__32012,1,null);var output_paths = cljs.core.nth.call(null,vec__32012,2,null);var ispec = cljs.core.nth.call(null,vec__32012,3,null);var effect = vec__32012;var vec__32013 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__32013,0,null);var arg_names = cljs.core.nth.call(null,vec__32013,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__32014,input){var vec__32015 = p__32014;var input_path = cljs.core.nth.call(null,vec__32015,0,null);var output_path = cljs.core.nth.call(null,vec__32015,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8404__auto__){var self__ = this;
var this__8404__auto____$1 = this;var h__8258__auto__ = self__.__hash;if(!((h__8258__auto__ == null)))
{return h__8258__auto__;
} else
{var h__8258__auto____$1 = cljs.core.hash_imap.call(null,this__8404__auto____$1);self__.__hash = h__8258__auto____$1;
return h__8258__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8409__auto__,k__8410__auto__){var self__ = this;
var this__8409__auto____$1 = this;return cljs.core._lookup.call(null,this__8409__auto____$1,k__8410__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8411__auto__,k32017,else__8412__auto__){var self__ = this;
var this__8411__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k32017,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32017,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32017,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32017,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32017,else__8412__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8416__auto__,k__8417__auto__,G__32016){var self__ = this;
var this__8416__auto____$1 = this;var pred__32019 = cljs.core.keyword_identical_QMARK_;var expr__32020 = k__8417__auto__;if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__32020)))
{return (new foundation.app.Application(G__32016,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__32020)))
{return (new foundation.app.Application(self__.state,G__32016,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__32020)))
{return (new foundation.app.Application(self__.state,self__.input,G__32016,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__32020)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__32016,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8417__auto__,G__32016),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8423__auto__,writer__8424__auto__,opts__8425__auto__){var self__ = this;
var this__8423__auto____$1 = this;var pr_pair__8426__auto__ = (function (keyval__8427__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,cljs.core.pr_writer,""," ","",opts__8425__auto__,keyval__8427__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,pr_pair__8426__auto__,"#foundation.app.Application{",", ","}",opts__8425__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8414__auto__,entry__8415__auto__){var self__ = this;
var this__8414__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8415__auto__))
{return cljs.core._assoc.call(null,this__8414__auto____$1,cljs.core._nth.call(null,entry__8415__auto__,0),cljs.core._nth.call(null,entry__8415__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8414__auto____$1,entry__8415__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8421__auto__){var self__ = this;
var this__8421__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8413__auto__){var self__ = this;
var this__8413__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8405__auto__,other__8406__auto__){var self__ = this;
var this__8405__auto____$1 = this;if(cljs.core.truth_((function (){var and__7835__auto__ = other__8406__auto__;if(cljs.core.truth_(and__7835__auto__))
{return ((this__8405__auto____$1.constructor === other__8406__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8405__auto____$1,other__8406__auto__));
} else
{return and__7835__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8408__auto__,G__32016){var self__ = this;
var this__8408__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__32016,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8407__auto__){var self__ = this;
var this__8407__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8418__auto__,k__8419__auto__){var self__ = this;
var this__8418__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__8419__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8418__auto____$1),self__.__meta),k__8419__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8419__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__8443__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__8443__auto__,writer__8444__auto__){return cljs.core._write.call(null,writer__8444__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__32018){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__32018),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__32018),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__32018),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__32018),null,cljs.core.dissoc.call(null,G__32018,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__32022_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__32022_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__32023){var map__32025 = p__32023;var map__32025__$1 = ((cljs.core.seq_QMARK_.call(null,map__32025))?cljs.core.apply.call(null,cljs.core.hash_map,map__32025):map__32025);var init_messages = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__32023 = null;if (arguments.length > 1) {
  p__32023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__32023);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__32026){
var root_id = cljs.core.first(arglist__32026);
var p__32023 = cljs.core.rest(arglist__32026);
return create_app__delegate(root_id,p__32023);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj32028 = {};return obj32028;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__7835__auto__ = _;if(and__7835__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__7835__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__8450__auto__ = (((_ == null))?null:_);return (function (){var or__7847__auto__ = (foundation.app.initialize[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.initialize["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});
