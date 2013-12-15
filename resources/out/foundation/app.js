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
var G__322149__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__322149 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__322149__delegate.call(this,k,args);};
G__322149.cljs$lang$maxFixedArity = 1;
G__322149.cljs$lang$applyTo = (function (arglist__322150){
var k = cljs.core.first(arglist__322150);
var args = cljs.core.rest(arglist__322150);
return G__322149__delegate(k,args);
});
G__322149.cljs$core$IFn$_invoke$arity$variadic = G__322149__delegate;
return G__322149;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__322151,changes){var map__322155 = p__322151;var map__322155__$1 = ((cljs.core.seq_QMARK_.call(null,map__322155))?cljs.core.apply.call(null,cljs.core.hash_map,map__322155):map__322155);var processed_inputs = cljs.core.get.call(null,map__322155__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__322156){var vec__322157 = p__322156;var k = cljs.core.nth.call(null,vec__322157,0,null);var v = cljs.core.nth.call(null,vec__322157,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__322164){var vec__322165 = p__322164;var k = cljs.core.nth.call(null,vec__322165,0,null);var v = cljs.core.nth.call(null,vec__322165,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__322166){var vec__322167 = p__322166;var k = cljs.core.nth.call(null,vec__322167,0,null);var v = cljs.core.nth.call(null,vec__322167,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__322168){var vec__322169 = p__322168;var k = cljs.core.nth.call(null,vec__322169,0,null);var v = cljs.core.nth.call(null,vec__322169,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__322208){var vec__322209 = p__322208;var k = cljs.core.nth.call(null,vec__322209,0,null);var v = cljs.core.nth.call(null,vec__322209,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14518__auto__ = (function iter__322210(s__322211){return (new cljs.core.LazySeq(null,(function (){var s__322211__$1 = s__322211;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322211__$1);if(temp__4092__auto__)
{var s__322211__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322211__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322211__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322213 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322212 = 0;while(true){
if((i__322212 < size__14517__auto__))
{var vec__322228 = cljs.core._nth.call(null,c__14516__auto__,i__322212);var path = cljs.core.nth.call(null,vec__322228,0,null);var arg = cljs.core.nth.call(null,vec__322228,1,null);cljs.core.chunk_append.call(null,b__322213,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__322234 = data_model__$1;if(G__322234)
{var bit__14451__auto__ = (G__322234.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14451__auto__) || (G__322234.cljs$core$ILookup$))
{return true;
} else
{if((!G__322234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__322234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__322234);
}
})())
{var data_model_k__322233 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__322233,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__322242 = cljs.core.rest.call(null,ks);
var G__322243 = cljs.core.get.call(null,v,k,v);
var G__322244 = ret;
ks = G__322242;
data_model__$1 = G__322243;
ret = G__322244;
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
var G__322245 = (i__322212 + 1);
i__322212 = G__322245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322213),iter__322210.call(null,cljs.core.chunk_rest.call(null,s__322211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322213),null);
}
} else
{var vec__322235 = cljs.core.first.call(null,s__322211__$2);var path = cljs.core.nth.call(null,vec__322235,0,null);var arg = cljs.core.nth.call(null,vec__322235,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__322241 = data_model__$1;if(G__322241)
{var bit__14451__auto__ = (G__322241.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14451__auto__) || (G__322241.cljs$core$ILookup$))
{return true;
} else
{if((!G__322241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__322241);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__322241);
}
})())
{var data_model_k__322240 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__322240,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__322246 = cljs.core.rest.call(null,ks);
var G__322247 = cljs.core.get.call(null,v,k,v);
var G__322248 = ret;
ks = G__322246;
data_model__$1 = G__322247;
ret = G__322248;
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
})(),iter__322210.call(null,cljs.core.rest.call(null,s__322211__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__322249){var map__322250 = p__322249;var map__322250__$1 = ((cljs.core.seq_QMARK_.call(null,map__322250))?cljs.core.apply.call(null,cljs.core.hash_map,map__322250):map__322250);var input_paths = cljs.core.get.call(null,map__322250__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__322250__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18838__auto___322305 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_322293){var state_val_322294 = (state_322293[1]);if((state_val_322294 === 4))
{var inst_322281 = (state_322293[2]);var inst_322282 = cljs.core.deref.call(null,app_model);var inst_322283 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_322281);var inst_322284 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_322283);var inst_322285 = foundation.app.tree.t.call(null,inst_322282);var inst_322286 = foundation.app.tree.since_t.call(null,inst_322284,inst_322285);var inst_322287 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_322288 = render_fn.call(null,inst_322286,inst_322287);var state_322293__$1 = (function (){var statearr_322295 = state_322293;(statearr_322295[7] = inst_322288);
return statearr_322295;
})();var statearr_322296_322306 = state_322293__$1;(statearr_322296_322306[2] = null);
(statearr_322296_322306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322294 === 3))
{var inst_322291 = (state_322293[2]);var state_322293__$1 = state_322293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_322293__$1,inst_322291);
} else
{if((state_val_322294 === 2))
{var inst_322279 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_322293__$1 = state_322293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322293__$1,4,inst_322279);
} else
{if((state_val_322294 === 1))
{var state_322293__$1 = state_322293;var statearr_322297_322307 = state_322293__$1;(statearr_322297_322307[2] = null);
(statearr_322297_322307[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_322301 = (new Array(8));(statearr_322301[0] = state_machine__18769__auto__);
(statearr_322301[1] = 1);
return statearr_322301;
});
var state_machine__18769__auto____1 = (function (state_322293){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_322293);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e322302){if((e322302 instanceof Object))
{var ex__18772__auto__ = e322302;var statearr_322303_322308 = state_322293;(statearr_322303_322308[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_322293);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__322309 = state_322293;
state_322293 = G__322309;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_322293){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_322293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_322304 = f__18839__auto__.call(null);(statearr_322304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___322305);
return statearr_322304;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__322311 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__322311))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__322311))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18838__auto___322476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_322442){var state_val_322443 = (state_322442[1]);if((state_val_322443 === 1))
{var state_322442__$1 = state_322442;var statearr_322444_322477 = state_322442__$1;(statearr_322444_322477[2] = null);
(statearr_322444_322477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 2))
{var state_322442__$1 = state_322442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322442__$1,4,input_queue__$1);
} else
{if((state_val_322443 === 3))
{var inst_322440 = (state_322442[2]);var state_322442__$1 = state_322442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_322442__$1,inst_322440);
} else
{if((state_val_322443 === 4))
{var inst_322396 = (state_322442[2]);var inst_322401 = foundation.app.pre_process.call(null,inst_322396);var inst_322402 = cljs.core.seq.call(null,inst_322401);var inst_322403 = inst_322402;var inst_322404 = null;var inst_322405 = 0;var inst_322406 = 0;var state_322442__$1 = (function (){var statearr_322445 = state_322442;(statearr_322445[7] = inst_322406);
(statearr_322445[8] = inst_322403);
(statearr_322445[9] = inst_322404);
(statearr_322445[10] = inst_322405);
return statearr_322445;
})();var statearr_322446_322478 = state_322442__$1;(statearr_322446_322478[2] = null);
(statearr_322446_322478[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 5))
{var inst_322406 = (state_322442[7]);var inst_322405 = (state_322442[10]);var inst_322408 = (inst_322406 < inst_322405);var inst_322409 = inst_322408;var state_322442__$1 = state_322442;if(cljs.core.truth_(inst_322409))
{var statearr_322450_322479 = state_322442__$1;(statearr_322450_322479[1] = 7);
} else
{var statearr_322451_322480 = state_322442__$1;(statearr_322451_322480[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 6))
{var inst_322437 = (state_322442[2]);var state_322442__$1 = (function (){var statearr_322452 = state_322442;(statearr_322452[11] = inst_322437);
return statearr_322452;
})();var statearr_322453_322481 = state_322442__$1;(statearr_322453_322481[2] = null);
(statearr_322453_322481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 7))
{var inst_322406 = (state_322442[7]);var inst_322403 = (state_322442[8]);var inst_322404 = (state_322442[9]);var inst_322405 = (state_322442[10]);var inst_322411 = cljs.core._nth.call(null,inst_322404,inst_322406);var inst_322412 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_322411);var inst_322413 = (inst_322406 + 1);var tmp322447 = inst_322403;var tmp322448 = inst_322404;var tmp322449 = inst_322405;var inst_322403__$1 = tmp322447;var inst_322404__$1 = tmp322448;var inst_322405__$1 = tmp322449;var inst_322406__$1 = inst_322413;var state_322442__$1 = (function (){var statearr_322454 = state_322442;(statearr_322454[7] = inst_322406__$1);
(statearr_322454[12] = inst_322412);
(statearr_322454[8] = inst_322403__$1);
(statearr_322454[9] = inst_322404__$1);
(statearr_322454[10] = inst_322405__$1);
return statearr_322454;
})();var statearr_322455_322482 = state_322442__$1;(statearr_322455_322482[2] = null);
(statearr_322455_322482[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 8))
{var inst_322416 = (state_322442[13]);var inst_322403 = (state_322442[8]);var inst_322416__$1 = cljs.core.seq.call(null,inst_322403);var state_322442__$1 = (function (){var statearr_322456 = state_322442;(statearr_322456[13] = inst_322416__$1);
return statearr_322456;
})();if(inst_322416__$1)
{var statearr_322457_322483 = state_322442__$1;(statearr_322457_322483[1] = 10);
} else
{var statearr_322458_322484 = state_322442__$1;(statearr_322458_322484[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 9))
{var inst_322435 = (state_322442[2]);var state_322442__$1 = state_322442;var statearr_322459_322485 = state_322442__$1;(statearr_322459_322485[2] = inst_322435);
(statearr_322459_322485[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 10))
{var inst_322416 = (state_322442[13]);var inst_322418 = cljs.core.chunked_seq_QMARK_.call(null,inst_322416);var state_322442__$1 = state_322442;if(inst_322418)
{var statearr_322460_322486 = state_322442__$1;(statearr_322460_322486[1] = 13);
} else
{var statearr_322461_322487 = state_322442__$1;(statearr_322461_322487[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 11))
{var state_322442__$1 = state_322442;var statearr_322462_322488 = state_322442__$1;(statearr_322462_322488[2] = null);
(statearr_322462_322488[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 12))
{var inst_322433 = (state_322442[2]);var state_322442__$1 = state_322442;var statearr_322463_322489 = state_322442__$1;(statearr_322463_322489[2] = inst_322433);
(statearr_322463_322489[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 13))
{var inst_322416 = (state_322442[13]);var inst_322420 = cljs.core.chunk_first.call(null,inst_322416);var inst_322421 = cljs.core.chunk_rest.call(null,inst_322416);var inst_322422 = cljs.core.count.call(null,inst_322420);var inst_322403 = inst_322421;var inst_322404 = inst_322420;var inst_322405 = inst_322422;var inst_322406 = 0;var state_322442__$1 = (function (){var statearr_322464 = state_322442;(statearr_322464[7] = inst_322406);
(statearr_322464[8] = inst_322403);
(statearr_322464[9] = inst_322404);
(statearr_322464[10] = inst_322405);
return statearr_322464;
})();var statearr_322465_322490 = state_322442__$1;(statearr_322465_322490[2] = null);
(statearr_322465_322490[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 14))
{var inst_322416 = (state_322442[13]);var inst_322425 = cljs.core.first.call(null,inst_322416);var inst_322426 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_322425);var inst_322427 = cljs.core.next.call(null,inst_322416);var inst_322403 = inst_322427;var inst_322404 = null;var inst_322405 = 0;var inst_322406 = 0;var state_322442__$1 = (function (){var statearr_322466 = state_322442;(statearr_322466[14] = inst_322426);
(statearr_322466[7] = inst_322406);
(statearr_322466[8] = inst_322403);
(statearr_322466[9] = inst_322404);
(statearr_322466[10] = inst_322405);
return statearr_322466;
})();var statearr_322467_322491 = state_322442__$1;(statearr_322467_322491[2] = null);
(statearr_322467_322491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322443 === 15))
{var inst_322430 = (state_322442[2]);var state_322442__$1 = state_322442;var statearr_322468_322492 = state_322442__$1;(statearr_322468_322492[2] = inst_322430);
(statearr_322468_322492[1] = 12);
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
var state_machine__18769__auto____0 = (function (){var statearr_322472 = (new Array(15));(statearr_322472[0] = state_machine__18769__auto__);
(statearr_322472[1] = 1);
return statearr_322472;
});
var state_machine__18769__auto____1 = (function (state_322442){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_322442);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e322473){if((e322473 instanceof Object))
{var ex__18772__auto__ = e322473;var statearr_322474_322493 = state_322442;(statearr_322474_322493[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_322442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__322494 = state_322442;
state_322442 = G__322494;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_322442){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_322442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_322475 = f__18839__auto__.call(null);(statearr_322475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___322476);
return statearr_322475;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__322499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__322500 = null;var count__322501 = 0;var i__322502 = 0;while(true){
if((i__322502 < count__322501))
{var message = cljs.core._nth.call(null,chunk__322500,i__322502);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__322503 = seq__322499;
var G__322504 = chunk__322500;
var G__322505 = count__322501;
var G__322506 = (i__322502 + 1);
seq__322499 = G__322503;
chunk__322500 = G__322504;
count__322501 = G__322505;
i__322502 = G__322506;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__322499);if(temp__4092__auto__)
{var seq__322499__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__322499__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__322499__$1);{
var G__322507 = cljs.core.chunk_rest.call(null,seq__322499__$1);
var G__322508 = c__14549__auto__;
var G__322509 = cljs.core.count.call(null,c__14549__auto__);
var G__322510 = 0;
seq__322499 = G__322507;
chunk__322500 = G__322508;
count__322501 = G__322509;
i__322502 = G__322510;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__322499__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__322511 = cljs.core.next.call(null,seq__322499__$1);
var G__322512 = null;
var G__322513 = 0;
var G__322514 = 0;
seq__322499 = G__322511;
chunk__322500 = G__322512;
count__322501 = G__322513;
i__322502 = G__322514;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__322519){var vec__322520 = p__322519;var name = cljs.core.nth.call(null,vec__322520,0,null);var paths = cljs.core.nth.call(null,vec__322520,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__322521){var vec__322522 = p__322521;var k = cljs.core.nth.call(null,vec__322522,0,null);var v = cljs.core.nth.call(null,vec__322522,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__322523){var map__322529 = p__322523;var map__322529__$1 = ((cljs.core.seq_QMARK_.call(null,map__322529))?cljs.core.apply.call(null,cljs.core.hash_map,map__322529):map__322529);var focus = cljs.core.get.call(null,map__322529__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__322529__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__322530 = cljs.core.seq.call(null,init_messages__$1);var chunk__322531 = null;var count__322532 = 0;var i__322533 = 0;while(true){
if((i__322533 < count__322532))
{var message = cljs.core._nth.call(null,chunk__322531,i__322533);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__322534 = seq__322530;
var G__322535 = chunk__322531;
var G__322536 = count__322532;
var G__322537 = (i__322533 + 1);
seq__322530 = G__322534;
chunk__322531 = G__322535;
count__322532 = G__322536;
i__322533 = G__322537;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__322530);if(temp__4092__auto__)
{var seq__322530__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__322530__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__322530__$1);{
var G__322538 = cljs.core.chunk_rest.call(null,seq__322530__$1);
var G__322539 = c__14549__auto__;
var G__322540 = cljs.core.count.call(null,c__14549__auto__);
var G__322541 = 0;
seq__322530 = G__322538;
chunk__322531 = G__322539;
count__322532 = G__322540;
i__322533 = G__322541;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__322530__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__322542 = cljs.core.next.call(null,seq__322530__$1);
var G__322543 = null;
var G__322544 = 0;
var G__322545 = 0;
seq__322530 = G__322542;
chunk__322531 = G__322543;
count__322532 = G__322544;
i__322533 = G__322545;
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
begin = function(app,p__322523){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__322523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_322586){var state_val_322587 = (state_322586[1]);if((state_val_322587 === 4))
{var inst_322574 = (state_322586[2]);var inst_322575 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_322574);var inst_322576 = cljs.core.get_method.call(null,foundation.app.effect,inst_322575);var inst_322577 = cljs.core.dissoc.call(null,inst_322574,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_322578 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_322574);var inst_322579 = [inst_322577,input,inst_322578];var inst_322580 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322579,null));var inst_322581 = cljs.core.apply.call(null,inst_322576,inst_322580);var state_322586__$1 = (function (){var statearr_322588 = state_322586;(statearr_322588[7] = inst_322581);
return statearr_322588;
})();var statearr_322589_322598 = state_322586__$1;(statearr_322589_322598[2] = null);
(statearr_322589_322598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_322587 === 3))
{var inst_322584 = (state_322586[2]);var state_322586__$1 = state_322586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_322586__$1,inst_322584);
} else
{if((state_val_322587 === 2))
{var state_322586__$1 = state_322586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322586__$1,4,output);
} else
{if((state_val_322587 === 1))
{var state_322586__$1 = state_322586;var statearr_322590_322599 = state_322586__$1;(statearr_322590_322599[2] = null);
(statearr_322590_322599[1] = 2);
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
var state_machine__18769__auto____0 = (function (){var statearr_322594 = (new Array(8));(statearr_322594[0] = state_machine__18769__auto__);
(statearr_322594[1] = 1);
return statearr_322594;
});
var state_machine__18769__auto____1 = (function (state_322586){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_322586);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e322595){if((e322595 instanceof Object))
{var ex__18772__auto__ = e322595;var statearr_322596_322600 = state_322586;(statearr_322596_322600[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_322586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__322601 = state_322586;
state_322586 = G__322601;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_322586){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_322586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_322597 = f__18839__auto__.call(null);(statearr_322597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_322597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__322606 = cljs.core.seq.call(null,script);var chunk__322607 = null;var count__322608 = 0;var i__322609 = 0;while(true){
if((i__322609 < count__322608))
{var message = cljs.core._nth.call(null,chunk__322607,i__322609);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__322610 = seq__322606;
var G__322611 = chunk__322607;
var G__322612 = count__322608;
var G__322613 = (i__322609 + 1);
seq__322606 = G__322610;
chunk__322607 = G__322611;
count__322608 = G__322612;
i__322609 = G__322613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__322606);if(temp__4092__auto__)
{var seq__322606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__322606__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__322606__$1);{
var G__322614 = cljs.core.chunk_rest.call(null,seq__322606__$1);
var G__322615 = c__14549__auto__;
var G__322616 = cljs.core.count.call(null,c__14549__auto__);
var G__322617 = 0;
seq__322606 = G__322614;
chunk__322607 = G__322615;
count__322608 = G__322616;
i__322609 = G__322617;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__322606__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__322618 = cljs.core.next.call(null,seq__322606__$1);
var G__322619 = null;
var G__322620 = 0;
var G__322621 = 0;
seq__322606 = G__322618;
chunk__322607 = G__322619;
count__322608 = G__322620;
i__322609 = G__322621;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__322622,graph){var map__322623 = p__322622;var map__322623__$1 = ((cljs.core.seq_QMARK_.call(null,map__322623))?cljs.core.apply.call(null,cljs.core.hash_map,map__322623):map__322623);var transform = cljs.core.get.call(null,map__322623__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__322624 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__322624,0,null);var path = cljs.core.nth.call(null,vec__322624,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__322627,graph){var map__322628 = p__322627;var map__322628__$1 = ((cljs.core.seq_QMARK_.call(null,map__322628))?cljs.core.apply.call(null,cljs.core.hash_map,map__322628):map__322628);var derives = cljs.core.get.call(null,map__322628__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__322629 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__322629,0,null);var output_path = cljs.core.nth.call(null,vec__322629,1,null);var input_spec = cljs.core.nth.call(null,vec__322629,2,null);var input_paths__$1 = (function (){var or__13825__auto__ = (function (){var and__13813__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13813__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13813__auto__;
}
})();if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__322625_SHARP_,p2__322626_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__322625_SHARP_,output_path,p2__322626_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__322630 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__322630,0,null);var input_paths = cljs.core.nth.call(null,vec__322630,1,null);var output_paths = cljs.core.nth.call(null,vec__322630,2,null);var input_spec = cljs.core.nth.call(null,vec__322630,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__322631){var vec__322632 = p__322631;var input_path = cljs.core.nth.call(null,vec__322632,0,null);var output_path = cljs.core.nth.call(null,vec__322632,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__322634 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__322634,0,null);var large = cljs.core.nth.call(null,vec__322634,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__322635_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__322635_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__322636){var map__322639 = p__322636;var map__322639__$1 = ((cljs.core.seq_QMARK_.call(null,map__322639))?cljs.core.apply.call(null,cljs.core.hash_map,map__322639):map__322639);var state = map__322639__$1;var change = cljs.core.get.call(null,map__322639__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__322639__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__322640 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__322640__$1 = ((cljs.core.seq_QMARK_.call(null,map__322640))?cljs.core.apply.call(null,cljs.core.hash_map,map__322640):map__322640);var state__$1 = map__322640__$1;var processed_inputs = cljs.core.get.call(null,map__322640__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__322640__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__322640__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14518__auto__ = (function iter__322645(s__322646){return (new cljs.core.LazySeq(null,(function (){var s__322646__$1 = s__322646;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322646__$1);if(temp__4092__auto__)
{var s__322646__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322646__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322646__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322648 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322647 = 0;while(true){
if((i__322647 < size__14517__auto__))
{var dval = cljs.core._nth.call(null,c__14516__auto__,i__322647);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__322648,cljs.core.get.call(null,dispatches,dval));
{
var G__322649 = (i__322647 + 1);
i__322647 = G__322649;
continue;
}
} else
{{
var G__322650 = (i__322647 + 1);
i__322647 = G__322650;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322648),iter__322645.call(null,cljs.core.chunk_rest.call(null,s__322646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322648),null);
}
} else
{var dval = cljs.core.first.call(null,s__322646__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__322645.call(null,cljs.core.rest.call(null,s__322646__$2)));
} else
{{
var G__322651 = cljs.core.rest.call(null,s__322646__$2);
s__322646__$1 = G__322651;
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
update_state.cljs$lang$applyTo = (function (arglist__322652){
var state = cljs.core.first(arglist__322652);
arglist__322652 = cljs.core.next(arglist__322652);
var path = cljs.core.first(arglist__322652);
arglist__322652 = cljs.core.next(arglist__322652);
var f = cljs.core.first(arglist__322652);
var args = cljs.core.rest(arglist__322652);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__322653){var map__322656 = p__322653;var map__322656__$1 = ((cljs.core.seq_QMARK_.call(null,map__322656))?cljs.core.apply.call(null,cljs.core.hash_map,map__322656):map__322656);var state = map__322656__$1;var context = cljs.core.get.call(null,map__322656__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__322656__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__322657 = message;var map__322657__$1 = ((cljs.core.seq_QMARK_.call(null,map__322657))?cljs.core.apply.call(null,cljs.core.hash_map,map__322657):map__322657);var type = cljs.core.get.call(null,map__322657__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__322657__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__322659){var map__322661 = p__322659;var map__322661__$1 = ((cljs.core.seq_QMARK_.call(null,map__322661))?cljs.core.apply.call(null,cljs.core.hash_map,map__322661):map__322661);var state = map__322661__$1;var context = cljs.core.get.call(null,map__322661__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__322658_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__322658_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__322662){var vec__322663 = p__322662;var dispatch_val = cljs.core.nth.call(null,vec__322663,0,null);var multifn = cljs.core.nth.call(null,vec__322663,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__322664){var vec__322665 = p__322664;var dispatch_val = cljs.core.nth.call(null,vec__322665,0,null);var multifn = cljs.core.nth.call(null,vec__322665,1,null);return (cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__322666_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__322666_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__322667){var map__322675 = p__322667;var map__322675__$1 = ((cljs.core.seq_QMARK_.call(null,map__322675))?cljs.core.apply.call(null,cljs.core.hash_map,map__322675):map__322675);var state = map__322675__$1;var context = cljs.core.get.call(null,map__322675__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__322676,p__322677){var map__322678 = p__322676;var map__322678__$1 = ((cljs.core.seq_QMARK_.call(null,map__322678))?cljs.core.apply.call(null,cljs.core.hash_map,map__322678):map__322678);var state__$1 = map__322678__$1;var change = cljs.core.get.call(null,map__322678__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__322679 = p__322677;var vec__322680 = cljs.core.nth.call(null,vec__322679,0,null);var input_paths = cljs.core.nth.call(null,vec__322680,0,null);var output_path = cljs.core.nth.call(null,vec__322680,1,null);var ispec = cljs.core.nth.call(null,vec__322680,2,null);var derive = vec__322680;var derive_fn = cljs.core.nth.call(null,vec__322679,1,null);var vec__322681 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__322681,0,null);var arg_names = cljs.core.nth.call(null,vec__322681,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__322682){var map__322692 = p__322682;var map__322692__$1 = ((cljs.core.seq_QMARK_.call(null,map__322692))?cljs.core.apply.call(null,cljs.core.hash_map,map__322692):map__322692);var state = map__322692__$1;var context = cljs.core.get.call(null,map__322692__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__322693,p__322694){var map__322695 = p__322693;var map__322695__$1 = ((cljs.core.seq_QMARK_.call(null,map__322695))?cljs.core.apply.call(null,cljs.core.hash_map,map__322695):map__322695);var state__$1 = map__322695__$1;var change = cljs.core.get.call(null,map__322695__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__322696 = p__322694;var vec__322697 = cljs.core.nth.call(null,vec__322696,0,null);var type = cljs.core.nth.call(null,vec__322697,0,null);var input_paths = cljs.core.nth.call(null,vec__322697,1,null);var output_paths = cljs.core.nth.call(null,vec__322697,2,null);var ispec = cljs.core.nth.call(null,vec__322697,3,null);var effect = vec__322697;var vec__322698 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__322698,0,null);var arg_names = cljs.core.nth.call(null,vec__322698,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__322699,input){var vec__322700 = p__322699;var input_path = cljs.core.nth.call(null,vec__322700,0,null);var output_path = cljs.core.nth.call(null,vec__322700,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k322702,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k322702,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k322702,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k322702,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k322702,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k322702,else__14390__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__322701){var self__ = this;
var this__14394__auto____$1 = this;var pred__322704 = cljs.core.keyword_identical_QMARK_;var expr__322705 = k__14395__auto__;if(cljs.core.truth_(pred__322704.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__322705)))
{return (new foundation.app.Application(G__322701,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__322704.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__322705)))
{return (new foundation.app.Application(self__.state,G__322701,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__322704.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__322705)))
{return (new foundation.app.Application(self__.state,self__.input,G__322701,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__322704.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__322705)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__322701,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__322701),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__322701){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__322701,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__322703){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__322703),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__322703),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__322703),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__322703),null,cljs.core.dissoc.call(null,G__322703,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__322707_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__322707_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__322708){var map__322710 = p__322708;var map__322710__$1 = ((cljs.core.seq_QMARK_.call(null,map__322710))?cljs.core.apply.call(null,cljs.core.hash_map,map__322710):map__322710);var init_messages = cljs.core.get.call(null,map__322710__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__322710__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__322708 = null;if (arguments.length > 1) {
  p__322708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__322708);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__322711){
var root_id = cljs.core.first(arglist__322711);
var p__322708 = cljs.core.rest(arglist__322711);
return create_app__delegate(root_id,p__322708);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj322713 = {};return obj322713;
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