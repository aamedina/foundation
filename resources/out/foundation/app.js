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
foundation.app.transform = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__304280__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__304280 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__304280__delegate.call(this,k,args);};
G__304280.cljs$lang$maxFixedArity = 1;
G__304280.cljs$lang$applyTo = (function (arglist__304281){
var k = cljs.core.first(arglist__304281);
var args = cljs.core.rest(arglist__304281);
return G__304280__delegate(k,args);
});
G__304280.cljs$core$IFn$_invoke$arity$variadic = G__304280__delegate;
return G__304280;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__304282,changes){var map__304286 = p__304282;var map__304286__$1 = ((cljs.core.seq_QMARK_.call(null,map__304286))?cljs.core.apply.call(null,cljs.core.hash_map,map__304286):map__304286);var processed_inputs = cljs.core.get.call(null,map__304286__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__304287){var vec__304288 = p__304287;var k = cljs.core.nth.call(null,vec__304288,0,null);var v = cljs.core.nth.call(null,vec__304288,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__304295){var vec__304296 = p__304295;var k = cljs.core.nth.call(null,vec__304296,0,null);var v = cljs.core.nth.call(null,vec__304296,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__304297){var vec__304298 = p__304297;var k = cljs.core.nth.call(null,vec__304298,0,null);var v = cljs.core.nth.call(null,vec__304298,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__304299){var vec__304300 = p__304299;var k = cljs.core.nth.call(null,vec__304300,0,null);var v = cljs.core.nth.call(null,vec__304300,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__304339){var vec__304340 = p__304339;var k = cljs.core.nth.call(null,vec__304340,0,null);var v = cljs.core.nth.call(null,vec__304340,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14518__auto__ = (function iter__304341(s__304342){return (new cljs.core.LazySeq(null,(function (){var s__304342__$1 = s__304342;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__304342__$1);if(temp__4092__auto__)
{var s__304342__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__304342__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__304342__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__304344 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__304343 = 0;while(true){
if((i__304343 < size__14517__auto__))
{var vec__304359 = cljs.core._nth.call(null,c__14516__auto__,i__304343);var path = cljs.core.nth.call(null,vec__304359,0,null);var arg = cljs.core.nth.call(null,vec__304359,1,null);cljs.core.chunk_append.call(null,b__304344,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__304365 = data_model__$1;if(G__304365)
{var bit__14451__auto__ = (G__304365.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14451__auto__) || (G__304365.cljs$core$ILookup$))
{return true;
} else
{if((!G__304365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__304365);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__304365);
}
})())
{var data_model_k__304364 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__304364,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__304373 = cljs.core.rest.call(null,ks);
var G__304374 = cljs.core.get.call(null,v,k,v);
var G__304375 = ret;
ks = G__304373;
data_model__$1 = G__304374;
ret = G__304375;
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
var G__304376 = (i__304343 + 1);
i__304343 = G__304376;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__304344),iter__304341.call(null,cljs.core.chunk_rest.call(null,s__304342__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__304344),null);
}
} else
{var vec__304366 = cljs.core.first.call(null,s__304342__$2);var path = cljs.core.nth.call(null,vec__304366,0,null);var arg = cljs.core.nth.call(null,vec__304366,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__304372 = data_model__$1;if(G__304372)
{var bit__14451__auto__ = (G__304372.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14451__auto__) || (G__304372.cljs$core$ILookup$))
{return true;
} else
{if((!G__304372.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__304372);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__304372);
}
})())
{var data_model_k__304371 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__304371,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__304377 = cljs.core.rest.call(null,ks);
var G__304378 = cljs.core.get.call(null,v,k,v);
var G__304379 = ret;
ks = G__304377;
data_model__$1 = G__304378;
ret = G__304379;
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
})(),iter__304341.call(null,cljs.core.rest.call(null,s__304342__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__304380){var map__304381 = p__304380;var map__304381__$1 = ((cljs.core.seq_QMARK_.call(null,map__304381))?cljs.core.apply.call(null,cljs.core.hash_map,map__304381):map__304381);var input_paths = cljs.core.get.call(null,map__304381__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__304381__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18838__auto___304436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_304424){var state_val_304425 = (state_304424[1]);if((state_val_304425 === 4))
{var inst_304412 = (state_304424[2]);var inst_304413 = cljs.core.deref.call(null,app_model);var inst_304414 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_304412);var inst_304415 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_304414);var inst_304416 = foundation.app.tree.t.call(null,inst_304413);var inst_304417 = foundation.app.tree.since_t.call(null,inst_304415,inst_304416);var inst_304418 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_304419 = render_fn.call(null,inst_304417,inst_304418);var state_304424__$1 = (function (){var statearr_304426 = state_304424;(statearr_304426[7] = inst_304419);
return statearr_304426;
})();var statearr_304427_304437 = state_304424__$1;(statearr_304427_304437[2] = null);
(statearr_304427_304437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304425 === 3))
{var inst_304422 = (state_304424[2]);var state_304424__$1 = state_304424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_304424__$1,inst_304422);
} else
{if((state_val_304425 === 2))
{var inst_304410 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_304424__$1 = state_304424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_304424__$1,4,inst_304410);
} else
{if((state_val_304425 === 1))
{var state_304424__$1 = state_304424;var statearr_304428_304438 = state_304424__$1;(statearr_304428_304438[2] = null);
(statearr_304428_304438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_304432 = (new Array(8));(statearr_304432[0] = state_machine__18769__auto__);
(statearr_304432[1] = 1);
return statearr_304432;
});
var state_machine__18769__auto____1 = (function (state_304424){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_304424);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e304433){if((e304433 instanceof Object))
{var ex__18772__auto__ = e304433;var statearr_304434_304439 = state_304424;(statearr_304434_304439[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_304424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e304433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__304440 = state_304424;
state_304424 = G__304440;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_304424){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_304424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_304435 = f__18839__auto__.call(null);(statearr_304435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___304436);
return statearr_304435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__304442 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__304442))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__304442))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18838__auto___304607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_304573){var state_val_304574 = (state_304573[1]);if((state_val_304574 === 1))
{var state_304573__$1 = state_304573;var statearr_304575_304608 = state_304573__$1;(statearr_304575_304608[2] = null);
(statearr_304575_304608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 2))
{var state_304573__$1 = state_304573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_304573__$1,4,input_queue__$1);
} else
{if((state_val_304574 === 3))
{var inst_304571 = (state_304573[2]);var state_304573__$1 = state_304573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_304573__$1,inst_304571);
} else
{if((state_val_304574 === 4))
{var inst_304527 = (state_304573[2]);var inst_304532 = foundation.app.pre_process.call(null,inst_304527);var inst_304533 = cljs.core.seq.call(null,inst_304532);var inst_304534 = inst_304533;var inst_304535 = null;var inst_304536 = 0;var inst_304537 = 0;var state_304573__$1 = (function (){var statearr_304576 = state_304573;(statearr_304576[7] = inst_304537);
(statearr_304576[8] = inst_304536);
(statearr_304576[9] = inst_304535);
(statearr_304576[10] = inst_304534);
return statearr_304576;
})();var statearr_304577_304609 = state_304573__$1;(statearr_304577_304609[2] = null);
(statearr_304577_304609[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 5))
{var inst_304537 = (state_304573[7]);var inst_304536 = (state_304573[8]);var inst_304539 = (inst_304537 < inst_304536);var inst_304540 = inst_304539;var state_304573__$1 = state_304573;if(cljs.core.truth_(inst_304540))
{var statearr_304581_304610 = state_304573__$1;(statearr_304581_304610[1] = 7);
} else
{var statearr_304582_304611 = state_304573__$1;(statearr_304582_304611[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 6))
{var inst_304568 = (state_304573[2]);var state_304573__$1 = (function (){var statearr_304583 = state_304573;(statearr_304583[11] = inst_304568);
return statearr_304583;
})();var statearr_304584_304612 = state_304573__$1;(statearr_304584_304612[2] = null);
(statearr_304584_304612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 7))
{var inst_304537 = (state_304573[7]);var inst_304536 = (state_304573[8]);var inst_304535 = (state_304573[9]);var inst_304534 = (state_304573[10]);var inst_304542 = cljs.core._nth.call(null,inst_304535,inst_304537);var inst_304543 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_304542);var inst_304544 = (inst_304537 + 1);var tmp304578 = inst_304536;var tmp304579 = inst_304535;var tmp304580 = inst_304534;var inst_304534__$1 = tmp304580;var inst_304535__$1 = tmp304579;var inst_304536__$1 = tmp304578;var inst_304537__$1 = inst_304544;var state_304573__$1 = (function (){var statearr_304585 = state_304573;(statearr_304585[7] = inst_304537__$1);
(statearr_304585[8] = inst_304536__$1);
(statearr_304585[9] = inst_304535__$1);
(statearr_304585[10] = inst_304534__$1);
(statearr_304585[12] = inst_304543);
return statearr_304585;
})();var statearr_304586_304613 = state_304573__$1;(statearr_304586_304613[2] = null);
(statearr_304586_304613[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 8))
{var inst_304534 = (state_304573[10]);var inst_304547 = (state_304573[13]);var inst_304547__$1 = cljs.core.seq.call(null,inst_304534);var state_304573__$1 = (function (){var statearr_304587 = state_304573;(statearr_304587[13] = inst_304547__$1);
return statearr_304587;
})();if(inst_304547__$1)
{var statearr_304588_304614 = state_304573__$1;(statearr_304588_304614[1] = 10);
} else
{var statearr_304589_304615 = state_304573__$1;(statearr_304589_304615[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 9))
{var inst_304566 = (state_304573[2]);var state_304573__$1 = state_304573;var statearr_304590_304616 = state_304573__$1;(statearr_304590_304616[2] = inst_304566);
(statearr_304590_304616[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 10))
{var inst_304547 = (state_304573[13]);var inst_304549 = cljs.core.chunked_seq_QMARK_.call(null,inst_304547);var state_304573__$1 = state_304573;if(inst_304549)
{var statearr_304591_304617 = state_304573__$1;(statearr_304591_304617[1] = 13);
} else
{var statearr_304592_304618 = state_304573__$1;(statearr_304592_304618[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 11))
{var state_304573__$1 = state_304573;var statearr_304593_304619 = state_304573__$1;(statearr_304593_304619[2] = null);
(statearr_304593_304619[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 12))
{var inst_304564 = (state_304573[2]);var state_304573__$1 = state_304573;var statearr_304594_304620 = state_304573__$1;(statearr_304594_304620[2] = inst_304564);
(statearr_304594_304620[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 13))
{var inst_304547 = (state_304573[13]);var inst_304551 = cljs.core.chunk_first.call(null,inst_304547);var inst_304552 = cljs.core.chunk_rest.call(null,inst_304547);var inst_304553 = cljs.core.count.call(null,inst_304551);var inst_304534 = inst_304552;var inst_304535 = inst_304551;var inst_304536 = inst_304553;var inst_304537 = 0;var state_304573__$1 = (function (){var statearr_304595 = state_304573;(statearr_304595[7] = inst_304537);
(statearr_304595[8] = inst_304536);
(statearr_304595[9] = inst_304535);
(statearr_304595[10] = inst_304534);
return statearr_304595;
})();var statearr_304596_304621 = state_304573__$1;(statearr_304596_304621[2] = null);
(statearr_304596_304621[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 14))
{var inst_304547 = (state_304573[13]);var inst_304556 = cljs.core.first.call(null,inst_304547);var inst_304557 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_304556);var inst_304558 = cljs.core.next.call(null,inst_304547);var inst_304534 = inst_304558;var inst_304535 = null;var inst_304536 = 0;var inst_304537 = 0;var state_304573__$1 = (function (){var statearr_304597 = state_304573;(statearr_304597[7] = inst_304537);
(statearr_304597[8] = inst_304536);
(statearr_304597[9] = inst_304535);
(statearr_304597[10] = inst_304534);
(statearr_304597[14] = inst_304557);
return statearr_304597;
})();var statearr_304598_304622 = state_304573__$1;(statearr_304598_304622[2] = null);
(statearr_304598_304622[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304574 === 15))
{var inst_304561 = (state_304573[2]);var state_304573__$1 = state_304573;var statearr_304599_304623 = state_304573__$1;(statearr_304599_304623[2] = inst_304561);
(statearr_304599_304623[1] = 12);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_304603 = (new Array(15));(statearr_304603[0] = state_machine__18769__auto__);
(statearr_304603[1] = 1);
return statearr_304603;
});
var state_machine__18769__auto____1 = (function (state_304573){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_304573);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e304604){if((e304604 instanceof Object))
{var ex__18772__auto__ = e304604;var statearr_304605_304624 = state_304573;(statearr_304605_304624[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_304573);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e304604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__304625 = state_304573;
state_304573 = G__304625;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_304573){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_304573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_304606 = f__18839__auto__.call(null);(statearr_304606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___304607);
return statearr_304606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__304630 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__304631 = null;var count__304632 = 0;var i__304633 = 0;while(true){
if((i__304633 < count__304632))
{var message = cljs.core._nth.call(null,chunk__304631,i__304633);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__304634 = seq__304630;
var G__304635 = chunk__304631;
var G__304636 = count__304632;
var G__304637 = (i__304633 + 1);
seq__304630 = G__304634;
chunk__304631 = G__304635;
count__304632 = G__304636;
i__304633 = G__304637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__304630);if(temp__4092__auto__)
{var seq__304630__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__304630__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__304630__$1);{
var G__304638 = cljs.core.chunk_rest.call(null,seq__304630__$1);
var G__304639 = c__14549__auto__;
var G__304640 = cljs.core.count.call(null,c__14549__auto__);
var G__304641 = 0;
seq__304630 = G__304638;
chunk__304631 = G__304639;
count__304632 = G__304640;
i__304633 = G__304641;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__304630__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__304642 = cljs.core.next.call(null,seq__304630__$1);
var G__304643 = null;
var G__304644 = 0;
var G__304645 = 0;
seq__304630 = G__304642;
chunk__304631 = G__304643;
count__304632 = G__304644;
i__304633 = G__304645;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__304650){var vec__304651 = p__304650;var name = cljs.core.nth.call(null,vec__304651,0,null);var paths = cljs.core.nth.call(null,vec__304651,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__304652){var vec__304653 = p__304652;var k = cljs.core.nth.call(null,vec__304653,0,null);var v = cljs.core.nth.call(null,vec__304653,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__304654){var map__304660 = p__304654;var map__304660__$1 = ((cljs.core.seq_QMARK_.call(null,map__304660))?cljs.core.apply.call(null,cljs.core.hash_map,map__304660):map__304660);var focus = cljs.core.get.call(null,map__304660__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__304660__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__304661 = cljs.core.seq.call(null,init_messages__$1);var chunk__304662 = null;var count__304663 = 0;var i__304664 = 0;while(true){
if((i__304664 < count__304663))
{var message = cljs.core._nth.call(null,chunk__304662,i__304664);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__304665 = seq__304661;
var G__304666 = chunk__304662;
var G__304667 = count__304663;
var G__304668 = (i__304664 + 1);
seq__304661 = G__304665;
chunk__304662 = G__304666;
count__304663 = G__304667;
i__304664 = G__304668;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__304661);if(temp__4092__auto__)
{var seq__304661__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__304661__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__304661__$1);{
var G__304669 = cljs.core.chunk_rest.call(null,seq__304661__$1);
var G__304670 = c__14549__auto__;
var G__304671 = cljs.core.count.call(null,c__14549__auto__);
var G__304672 = 0;
seq__304661 = G__304669;
chunk__304662 = G__304670;
count__304663 = G__304671;
i__304664 = G__304672;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__304661__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__304673 = cljs.core.next.call(null,seq__304661__$1);
var G__304674 = null;
var G__304675 = 0;
var G__304676 = 0;
seq__304661 = G__304673;
chunk__304662 = G__304674;
count__304663 = G__304675;
i__304664 = G__304676;
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
begin = function(app,p__304654){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__304654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_304717){var state_val_304718 = (state_304717[1]);if((state_val_304718 === 4))
{var inst_304705 = (state_304717[2]);var inst_304706 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_304705);var inst_304707 = cljs.core.get_method.call(null,foundation.app.effect,inst_304706);var inst_304708 = cljs.core.dissoc.call(null,inst_304705,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_304709 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_304705);var inst_304710 = [inst_304708,input,inst_304709];var inst_304711 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_304710,null));var inst_304712 = cljs.core.apply.call(null,inst_304707,inst_304711);var state_304717__$1 = (function (){var statearr_304719 = state_304717;(statearr_304719[7] = inst_304712);
return statearr_304719;
})();var statearr_304720_304729 = state_304717__$1;(statearr_304720_304729[2] = null);
(statearr_304720_304729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_304718 === 3))
{var inst_304715 = (state_304717[2]);var state_304717__$1 = state_304717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_304717__$1,inst_304715);
} else
{if((state_val_304718 === 2))
{var state_304717__$1 = state_304717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_304717__$1,4,output);
} else
{if((state_val_304718 === 1))
{var state_304717__$1 = state_304717;var statearr_304721_304730 = state_304717__$1;(statearr_304721_304730[2] = null);
(statearr_304721_304730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_304725 = (new Array(8));(statearr_304725[0] = state_machine__18769__auto__);
(statearr_304725[1] = 1);
return statearr_304725;
});
var state_machine__18769__auto____1 = (function (state_304717){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_304717);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e304726){if((e304726 instanceof Object))
{var ex__18772__auto__ = e304726;var statearr_304727_304731 = state_304717;(statearr_304727_304731[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_304717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e304726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__304732 = state_304717;
state_304717 = G__304732;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_304717){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_304717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_304728 = f__18839__auto__.call(null);(statearr_304728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_304728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__304737 = cljs.core.seq.call(null,script);var chunk__304738 = null;var count__304739 = 0;var i__304740 = 0;while(true){
if((i__304740 < count__304739))
{var message = cljs.core._nth.call(null,chunk__304738,i__304740);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__304741 = seq__304737;
var G__304742 = chunk__304738;
var G__304743 = count__304739;
var G__304744 = (i__304740 + 1);
seq__304737 = G__304741;
chunk__304738 = G__304742;
count__304739 = G__304743;
i__304740 = G__304744;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__304737);if(temp__4092__auto__)
{var seq__304737__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__304737__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__304737__$1);{
var G__304745 = cljs.core.chunk_rest.call(null,seq__304737__$1);
var G__304746 = c__14549__auto__;
var G__304747 = cljs.core.count.call(null,c__14549__auto__);
var G__304748 = 0;
seq__304737 = G__304745;
chunk__304738 = G__304746;
count__304739 = G__304747;
i__304740 = G__304748;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__304737__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__304749 = cljs.core.next.call(null,seq__304737__$1);
var G__304750 = null;
var G__304751 = 0;
var G__304752 = 0;
seq__304737 = G__304749;
chunk__304738 = G__304750;
count__304739 = G__304751;
i__304740 = G__304752;
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
foundation.app.depends = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__304753,graph){var map__304754 = p__304753;var map__304754__$1 = ((cljs.core.seq_QMARK_.call(null,map__304754))?cljs.core.apply.call(null,cljs.core.hash_map,map__304754):map__304754);var transform = cljs.core.get.call(null,map__304754__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__304755 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__304755,0,null);var path = cljs.core.nth.call(null,vec__304755,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__304758,graph){var map__304759 = p__304758;var map__304759__$1 = ((cljs.core.seq_QMARK_.call(null,map__304759))?cljs.core.apply.call(null,cljs.core.hash_map,map__304759):map__304759);var derives = cljs.core.get.call(null,map__304759__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__304760 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__304760,0,null);var output_path = cljs.core.nth.call(null,vec__304760,1,null);var input_spec = cljs.core.nth.call(null,vec__304760,2,null);var input_paths__$1 = (function (){var or__13825__auto__ = (function (){var and__13813__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13813__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13813__auto__;
}
})();if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__304756_SHARP_,p2__304757_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__304756_SHARP_,output_path,p2__304757_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__304761 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__304761,0,null);var input_paths = cljs.core.nth.call(null,vec__304761,1,null);var output_paths = cljs.core.nth.call(null,vec__304761,2,null);var input_spec = cljs.core.nth.call(null,vec__304761,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__304762){var vec__304763 = p__304762;var input_path = cljs.core.nth.call(null,vec__304763,0,null);var output_path = cljs.core.nth.call(null,vec__304763,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
}),graph,io_paths);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__13825__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__304765 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__304765,0,null);var large = cljs.core.nth.call(null,vec__304765,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__304766_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__304766_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__304767){var map__304770 = p__304767;var map__304770__$1 = ((cljs.core.seq_QMARK_.call(null,map__304770))?cljs.core.apply.call(null,cljs.core.hash_map,map__304770):map__304770);var state = map__304770__$1;var change = cljs.core.get.call(null,map__304770__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__304770__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__304771 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__304771__$1 = ((cljs.core.seq_QMARK_.call(null,map__304771))?cljs.core.apply.call(null,cljs.core.hash_map,map__304771):map__304771);var state__$1 = map__304771__$1;var processed_inputs = cljs.core.get.call(null,map__304771__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__304771__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__304771__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14518__auto__ = (function iter__304776(s__304777){return (new cljs.core.LazySeq(null,(function (){var s__304777__$1 = s__304777;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__304777__$1);if(temp__4092__auto__)
{var s__304777__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__304777__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__304777__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__304779 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__304778 = 0;while(true){
if((i__304778 < size__14517__auto__))
{var dval = cljs.core._nth.call(null,c__14516__auto__,i__304778);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__304779,cljs.core.get.call(null,dispatches,dval));
{
var G__304780 = (i__304778 + 1);
i__304778 = G__304780;
continue;
}
} else
{{
var G__304781 = (i__304778 + 1);
i__304778 = G__304781;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__304779),iter__304776.call(null,cljs.core.chunk_rest.call(null,s__304777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__304779),null);
}
} else
{var dval = cljs.core.first.call(null,s__304777__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__304776.call(null,cljs.core.rest.call(null,s__304777__$2)));
} else
{{
var G__304782 = cljs.core.rest.call(null,s__304777__$2);
s__304777__$1 = G__304782;
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
});return iter__14518__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__304783){
var state = cljs.core.first(arglist__304783);
arglist__304783 = cljs.core.next(arglist__304783);
var path = cljs.core.first(arglist__304783);
arglist__304783 = cljs.core.next(arglist__304783);
var f = cljs.core.first(arglist__304783);
var args = cljs.core.rest(arglist__304783);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__304784){var map__304787 = p__304784;var map__304787__$1 = ((cljs.core.seq_QMARK_.call(null,map__304787))?cljs.core.apply.call(null,cljs.core.hash_map,map__304787):map__304787);var state = map__304787__$1;var context = cljs.core.get.call(null,map__304787__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__304787__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__304788 = message;var map__304788__$1 = ((cljs.core.seq_QMARK_.call(null,map__304788))?cljs.core.apply.call(null,cljs.core.hash_map,map__304788):map__304788);var type = cljs.core.get.call(null,map__304788__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__304788__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__304790){var map__304792 = p__304790;var map__304792__$1 = ((cljs.core.seq_QMARK_.call(null,map__304792))?cljs.core.apply.call(null,cljs.core.hash_map,map__304792):map__304792);var state = map__304792__$1;var context = cljs.core.get.call(null,map__304792__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__304789_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__304789_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__304793){var vec__304794 = p__304793;var dispatch_val = cljs.core.nth.call(null,vec__304794,0,null);var multifn = cljs.core.nth.call(null,vec__304794,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__304795){var vec__304796 = p__304795;var dispatch_val = cljs.core.nth.call(null,vec__304796,0,null);var multifn = cljs.core.nth.call(null,vec__304796,1,null);return (cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__304797_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__304797_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__304798){var map__304806 = p__304798;var map__304806__$1 = ((cljs.core.seq_QMARK_.call(null,map__304806))?cljs.core.apply.call(null,cljs.core.hash_map,map__304806):map__304806);var state = map__304806__$1;var context = cljs.core.get.call(null,map__304806__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__304807,p__304808){var map__304809 = p__304807;var map__304809__$1 = ((cljs.core.seq_QMARK_.call(null,map__304809))?cljs.core.apply.call(null,cljs.core.hash_map,map__304809):map__304809);var state__$1 = map__304809__$1;var change = cljs.core.get.call(null,map__304809__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__304810 = p__304808;var vec__304811 = cljs.core.nth.call(null,vec__304810,0,null);var input_paths = cljs.core.nth.call(null,vec__304811,0,null);var output_path = cljs.core.nth.call(null,vec__304811,1,null);var ispec = cljs.core.nth.call(null,vec__304811,2,null);var derive = vec__304811;var derive_fn = cljs.core.nth.call(null,vec__304810,1,null);var vec__304812 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__304812,0,null);var arg_names = cljs.core.nth.call(null,vec__304812,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__304813){var map__304823 = p__304813;var map__304823__$1 = ((cljs.core.seq_QMARK_.call(null,map__304823))?cljs.core.apply.call(null,cljs.core.hash_map,map__304823):map__304823);var state = map__304823__$1;var context = cljs.core.get.call(null,map__304823__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__304824,p__304825){var map__304826 = p__304824;var map__304826__$1 = ((cljs.core.seq_QMARK_.call(null,map__304826))?cljs.core.apply.call(null,cljs.core.hash_map,map__304826):map__304826);var state__$1 = map__304826__$1;var change = cljs.core.get.call(null,map__304826__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__304827 = p__304825;var vec__304828 = cljs.core.nth.call(null,vec__304827,0,null);var type = cljs.core.nth.call(null,vec__304828,0,null);var input_paths = cljs.core.nth.call(null,vec__304828,1,null);var output_paths = cljs.core.nth.call(null,vec__304828,2,null);var ispec = cljs.core.nth.call(null,vec__304828,3,null);var effect = vec__304828;var vec__304829 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__304829,0,null);var arg_names = cljs.core.nth.call(null,vec__304829,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__304830,input){var vec__304831 = p__304830;var input_path = cljs.core.nth.call(null,vec__304831,0,null);var output_path = cljs.core.nth.call(null,vec__304831,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;var h__14236__auto__ = self__.__hash;if(!((h__14236__auto__ == null)))
{return h__14236__auto__;
} else
{var h__14236__auto____$1 = cljs.core.hash_imap.call(null,this__14382__auto____$1);self__.__hash = h__14236__auto____$1;
return h__14236__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14387__auto__,k__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;return cljs.core._lookup.call(null,this__14387__auto____$1,k__14388__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k304833,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k304833,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k304833,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k304833,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k304833,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k304833,else__14390__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__304832){var self__ = this;
var this__14394__auto____$1 = this;var pred__304835 = cljs.core.keyword_identical_QMARK_;var expr__304836 = k__14395__auto__;if(cljs.core.truth_(pred__304835.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__304836)))
{return (new foundation.app.Application(G__304832,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__304835.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__304836)))
{return (new foundation.app.Application(self__.state,G__304832,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__304835.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__304836)))
{return (new foundation.app.Application(self__.state,self__.input,G__304832,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__304835.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__304836)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__304832,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__304832),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14401__auto__,writer__14402__auto__,opts__14403__auto__){var self__ = this;
var this__14401__auto____$1 = this;var pr_pair__14404__auto__ = (function (keyval__14405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,cljs.core.pr_writer,""," ","",opts__14403__auto__,keyval__14405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,pr_pair__14404__auto__,"#foundation.app.Application{",", ","}",opts__14403__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14392__auto__,entry__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14393__auto__))
{return cljs.core._assoc.call(null,this__14392__auto____$1,cljs.core._nth.call(null,entry__14393__auto__,0),cljs.core._nth.call(null,entry__14393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14392__auto____$1,entry__14393__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14399__auto__){var self__ = this;
var this__14399__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14391__auto__){var self__ = this;
var this__14391__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14383__auto__,other__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;if(cljs.core.truth_((function (){var and__13813__auto__ = other__14384__auto__;if(cljs.core.truth_(and__13813__auto__))
{return ((this__14383__auto____$1.constructor === other__14384__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14383__auto____$1,other__14384__auto__));
} else
{return and__13813__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__304832){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__304832,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14385__auto__){var self__ = this;
var this__14385__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14396__auto__,k__14397__auto__){var self__ = this;
var this__14396__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14396__auto____$1),self__.__meta),k__14397__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14397__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14421__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14421__auto__,writer__14422__auto__){return cljs.core._write.call(null,writer__14422__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__304834){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__304834),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__304834),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__304834),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__304834),null,cljs.core.dissoc.call(null,G__304834,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__304838_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__304838_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__304839){var map__304841 = p__304839;var map__304841__$1 = ((cljs.core.seq_QMARK_.call(null,map__304841))?cljs.core.apply.call(null,cljs.core.hash_map,map__304841):map__304841);var init_messages = cljs.core.get.call(null,map__304841__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__304841__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__304839 = null;if (arguments.length > 1) {
  p__304839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__304839);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__304842){
var root_id = cljs.core.first(arglist__304842);
var p__304839 = cljs.core.rest(arglist__304842);
return create_app__delegate(root_id,p__304839);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj304844 = {};return obj304844;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13813__auto__ = _;if(and__13813__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13813__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14428__auto__ = (((_ == null))?null:_);return (function (){var or__13825__auto__ = (foundation.app.initialize[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.initialize["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map