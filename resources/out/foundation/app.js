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
foundation.app.transform = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__150954__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__150954 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__150954__delegate.call(this,k,args);};
G__150954.cljs$lang$maxFixedArity = 1;
G__150954.cljs$lang$applyTo = (function (arglist__150955){
var k = cljs.core.first(arglist__150955);
var args = cljs.core.rest(arglist__150955);
return G__150954__delegate(k,args);
});
G__150954.cljs$core$IFn$_invoke$arity$variadic = G__150954__delegate;
return G__150954;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__150956,changes){var map__150960 = p__150956;var map__150960__$1 = ((cljs.core.seq_QMARK_.call(null,map__150960))?cljs.core.apply.call(null,cljs.core.hash_map,map__150960):map__150960);var processed_inputs = cljs.core.get.call(null,map__150960__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__150961){var vec__150962 = p__150961;var k = cljs.core.nth.call(null,vec__150962,0,null);var v = cljs.core.nth.call(null,vec__150962,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__150969){var vec__150970 = p__150969;var k = cljs.core.nth.call(null,vec__150970,0,null);var v = cljs.core.nth.call(null,vec__150970,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__150971){var vec__150972 = p__150971;var k = cljs.core.nth.call(null,vec__150972,0,null);var v = cljs.core.nth.call(null,vec__150972,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__150973){var vec__150974 = p__150973;var k = cljs.core.nth.call(null,vec__150974,0,null);var v = cljs.core.nth.call(null,vec__150974,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__151013){var vec__151014 = p__151013;var k = cljs.core.nth.call(null,vec__151014,0,null);var v = cljs.core.nth.call(null,vec__151014,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14514__auto__ = (function iter__151015(s__151016){return (new cljs.core.LazySeq(null,(function (){var s__151016__$1 = s__151016;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__151016__$1);if(temp__4092__auto__)
{var s__151016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__151016__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__151016__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__151018 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__151017 = 0;while(true){
if((i__151017 < size__14513__auto__))
{var vec__151033 = cljs.core._nth.call(null,c__14512__auto__,i__151017);var path = cljs.core.nth.call(null,vec__151033,0,null);var arg = cljs.core.nth.call(null,vec__151033,1,null);cljs.core.chunk_append.call(null,b__151018,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__151039 = data_model__$1;if(G__151039)
{var bit__14447__auto__ = (G__151039.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__151039.cljs$core$ILookup$))
{return true;
} else
{if((!G__151039.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__151039);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__151039);
}
})())
{var data_model_k__151038 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__151038,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__151047 = cljs.core.rest.call(null,ks);
var G__151048 = cljs.core.get.call(null,v,k,v);
var G__151049 = ret;
ks = G__151047;
data_model__$1 = G__151048;
ret = G__151049;
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
var G__151050 = (i__151017 + 1);
i__151017 = G__151050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151018),iter__151015.call(null,cljs.core.chunk_rest.call(null,s__151016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151018),null);
}
} else
{var vec__151040 = cljs.core.first.call(null,s__151016__$2);var path = cljs.core.nth.call(null,vec__151040,0,null);var arg = cljs.core.nth.call(null,vec__151040,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__151046 = data_model__$1;if(G__151046)
{var bit__14447__auto__ = (G__151046.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__151046.cljs$core$ILookup$))
{return true;
} else
{if((!G__151046.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__151046);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__151046);
}
})())
{var data_model_k__151045 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__151045,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__151051 = cljs.core.rest.call(null,ks);
var G__151052 = cljs.core.get.call(null,v,k,v);
var G__151053 = ret;
ks = G__151051;
data_model__$1 = G__151052;
ret = G__151053;
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
})(),iter__151015.call(null,cljs.core.rest.call(null,s__151016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__151054){var map__151055 = p__151054;var map__151055__$1 = ((cljs.core.seq_QMARK_.call(null,map__151055))?cljs.core.apply.call(null,cljs.core.hash_map,map__151055):map__151055);var input_paths = cljs.core.get.call(null,map__151055__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__151055__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__16829__auto___151110 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_151098){var state_val_151099 = (state_151098[1]);if((state_val_151099 === 4))
{var inst_151086 = (state_151098[2]);var inst_151087 = cljs.core.deref.call(null,app_model);var inst_151088 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_151086);var inst_151089 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_151088);var inst_151090 = foundation.app.tree.t.call(null,inst_151087);var inst_151091 = foundation.app.tree.since_t.call(null,inst_151089,inst_151090);var inst_151092 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_151093 = render_fn.call(null,inst_151091,inst_151092);var state_151098__$1 = (function (){var statearr_151100 = state_151098;(statearr_151100[7] = inst_151093);
return statearr_151100;
})();var statearr_151101_151111 = state_151098__$1;(statearr_151101_151111[2] = null);
(statearr_151101_151111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151099 === 3))
{var inst_151096 = (state_151098[2]);var state_151098__$1 = state_151098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151098__$1,inst_151096);
} else
{if((state_val_151099 === 2))
{var inst_151084 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_151098__$1 = state_151098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151098__$1,4,inst_151084);
} else
{if((state_val_151099 === 1))
{var state_151098__$1 = state_151098;var statearr_151102_151112 = state_151098__$1;(statearr_151102_151112[2] = null);
(statearr_151102_151112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_151106 = (new Array(8));(statearr_151106[0] = state_machine__16760__auto__);
(statearr_151106[1] = 1);
return statearr_151106;
});
var state_machine__16760__auto____1 = (function (state_151098){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_151098);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e151107){if((e151107 instanceof Object))
{var ex__16763__auto__ = e151107;var statearr_151108_151113 = state_151098;(statearr_151108_151113[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151114 = state_151098;
state_151098 = G__151114;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_151098){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_151098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_151109 = f__16830__auto__.call(null);(statearr_151109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___151110);
return statearr_151109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__151116 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__151116))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__151116))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__16829__auto___151281 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_151247){var state_val_151248 = (state_151247[1]);if((state_val_151248 === 1))
{var state_151247__$1 = state_151247;var statearr_151249_151282 = state_151247__$1;(statearr_151249_151282[2] = null);
(statearr_151249_151282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 2))
{var state_151247__$1 = state_151247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151247__$1,4,input_queue__$1);
} else
{if((state_val_151248 === 3))
{var inst_151245 = (state_151247[2]);var state_151247__$1 = state_151247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151247__$1,inst_151245);
} else
{if((state_val_151248 === 4))
{var inst_151201 = (state_151247[2]);var inst_151206 = foundation.app.pre_process.call(null,inst_151201);var inst_151207 = cljs.core.seq.call(null,inst_151206);var inst_151208 = inst_151207;var inst_151209 = null;var inst_151210 = 0;var inst_151211 = 0;var state_151247__$1 = (function (){var statearr_151250 = state_151247;(statearr_151250[7] = inst_151208);
(statearr_151250[8] = inst_151209);
(statearr_151250[9] = inst_151210);
(statearr_151250[10] = inst_151211);
return statearr_151250;
})();var statearr_151251_151283 = state_151247__$1;(statearr_151251_151283[2] = null);
(statearr_151251_151283[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 5))
{var inst_151210 = (state_151247[9]);var inst_151211 = (state_151247[10]);var inst_151213 = (inst_151211 < inst_151210);var inst_151214 = inst_151213;var state_151247__$1 = state_151247;if(cljs.core.truth_(inst_151214))
{var statearr_151255_151284 = state_151247__$1;(statearr_151255_151284[1] = 7);
} else
{var statearr_151256_151285 = state_151247__$1;(statearr_151256_151285[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 6))
{var inst_151242 = (state_151247[2]);var state_151247__$1 = (function (){var statearr_151257 = state_151247;(statearr_151257[11] = inst_151242);
return statearr_151257;
})();var statearr_151258_151286 = state_151247__$1;(statearr_151258_151286[2] = null);
(statearr_151258_151286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 7))
{var inst_151208 = (state_151247[7]);var inst_151209 = (state_151247[8]);var inst_151210 = (state_151247[9]);var inst_151211 = (state_151247[10]);var inst_151216 = cljs.core._nth.call(null,inst_151209,inst_151211);var inst_151217 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_151216);var inst_151218 = (inst_151211 + 1);var tmp151252 = inst_151208;var tmp151253 = inst_151209;var tmp151254 = inst_151210;var inst_151208__$1 = tmp151252;var inst_151209__$1 = tmp151253;var inst_151210__$1 = tmp151254;var inst_151211__$1 = inst_151218;var state_151247__$1 = (function (){var statearr_151259 = state_151247;(statearr_151259[7] = inst_151208__$1);
(statearr_151259[8] = inst_151209__$1);
(statearr_151259[12] = inst_151217);
(statearr_151259[9] = inst_151210__$1);
(statearr_151259[10] = inst_151211__$1);
return statearr_151259;
})();var statearr_151260_151287 = state_151247__$1;(statearr_151260_151287[2] = null);
(statearr_151260_151287[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 8))
{var inst_151208 = (state_151247[7]);var inst_151221 = (state_151247[13]);var inst_151221__$1 = cljs.core.seq.call(null,inst_151208);var state_151247__$1 = (function (){var statearr_151261 = state_151247;(statearr_151261[13] = inst_151221__$1);
return statearr_151261;
})();if(inst_151221__$1)
{var statearr_151262_151288 = state_151247__$1;(statearr_151262_151288[1] = 10);
} else
{var statearr_151263_151289 = state_151247__$1;(statearr_151263_151289[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 9))
{var inst_151240 = (state_151247[2]);var state_151247__$1 = state_151247;var statearr_151264_151290 = state_151247__$1;(statearr_151264_151290[2] = inst_151240);
(statearr_151264_151290[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 10))
{var inst_151221 = (state_151247[13]);var inst_151223 = cljs.core.chunked_seq_QMARK_.call(null,inst_151221);var state_151247__$1 = state_151247;if(inst_151223)
{var statearr_151265_151291 = state_151247__$1;(statearr_151265_151291[1] = 13);
} else
{var statearr_151266_151292 = state_151247__$1;(statearr_151266_151292[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 11))
{var state_151247__$1 = state_151247;var statearr_151267_151293 = state_151247__$1;(statearr_151267_151293[2] = null);
(statearr_151267_151293[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 12))
{var inst_151238 = (state_151247[2]);var state_151247__$1 = state_151247;var statearr_151268_151294 = state_151247__$1;(statearr_151268_151294[2] = inst_151238);
(statearr_151268_151294[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 13))
{var inst_151221 = (state_151247[13]);var inst_151225 = cljs.core.chunk_first.call(null,inst_151221);var inst_151226 = cljs.core.chunk_rest.call(null,inst_151221);var inst_151227 = cljs.core.count.call(null,inst_151225);var inst_151208 = inst_151226;var inst_151209 = inst_151225;var inst_151210 = inst_151227;var inst_151211 = 0;var state_151247__$1 = (function (){var statearr_151269 = state_151247;(statearr_151269[7] = inst_151208);
(statearr_151269[8] = inst_151209);
(statearr_151269[9] = inst_151210);
(statearr_151269[10] = inst_151211);
return statearr_151269;
})();var statearr_151270_151295 = state_151247__$1;(statearr_151270_151295[2] = null);
(statearr_151270_151295[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 14))
{var inst_151221 = (state_151247[13]);var inst_151230 = cljs.core.first.call(null,inst_151221);var inst_151231 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_151230);var inst_151232 = cljs.core.next.call(null,inst_151221);var inst_151208 = inst_151232;var inst_151209 = null;var inst_151210 = 0;var inst_151211 = 0;var state_151247__$1 = (function (){var statearr_151271 = state_151247;(statearr_151271[7] = inst_151208);
(statearr_151271[14] = inst_151231);
(statearr_151271[8] = inst_151209);
(statearr_151271[9] = inst_151210);
(statearr_151271[10] = inst_151211);
return statearr_151271;
})();var statearr_151272_151296 = state_151247__$1;(statearr_151272_151296[2] = null);
(statearr_151272_151296[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151248 === 15))
{var inst_151235 = (state_151247[2]);var state_151247__$1 = state_151247;var statearr_151273_151297 = state_151247__$1;(statearr_151273_151297[2] = inst_151235);
(statearr_151273_151297[1] = 12);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_151277 = (new Array(15));(statearr_151277[0] = state_machine__16760__auto__);
(statearr_151277[1] = 1);
return statearr_151277;
});
var state_machine__16760__auto____1 = (function (state_151247){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_151247);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e151278){if((e151278 instanceof Object))
{var ex__16763__auto__ = e151278;var statearr_151279_151298 = state_151247;(statearr_151279_151298[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151299 = state_151247;
state_151247 = G__151299;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_151247){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_151247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_151280 = f__16830__auto__.call(null);(statearr_151280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___151281);
return statearr_151280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__151304 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__151305 = null;var count__151306 = 0;var i__151307 = 0;while(true){
if((i__151307 < count__151306))
{var message = cljs.core._nth.call(null,chunk__151305,i__151307);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__151308 = seq__151304;
var G__151309 = chunk__151305;
var G__151310 = count__151306;
var G__151311 = (i__151307 + 1);
seq__151304 = G__151308;
chunk__151305 = G__151309;
count__151306 = G__151310;
i__151307 = G__151311;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151304);if(temp__4092__auto__)
{var seq__151304__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151304__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151304__$1);{
var G__151312 = cljs.core.chunk_rest.call(null,seq__151304__$1);
var G__151313 = c__14545__auto__;
var G__151314 = cljs.core.count.call(null,c__14545__auto__);
var G__151315 = 0;
seq__151304 = G__151312;
chunk__151305 = G__151313;
count__151306 = G__151314;
i__151307 = G__151315;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__151304__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__151316 = cljs.core.next.call(null,seq__151304__$1);
var G__151317 = null;
var G__151318 = 0;
var G__151319 = 0;
seq__151304 = G__151316;
chunk__151305 = G__151317;
count__151306 = G__151318;
i__151307 = G__151319;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__151324){var vec__151325 = p__151324;var name = cljs.core.nth.call(null,vec__151325,0,null);var paths = cljs.core.nth.call(null,vec__151325,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__151326){var vec__151327 = p__151326;var k = cljs.core.nth.call(null,vec__151327,0,null);var v = cljs.core.nth.call(null,vec__151327,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__151328){var map__151334 = p__151328;var map__151334__$1 = ((cljs.core.seq_QMARK_.call(null,map__151334))?cljs.core.apply.call(null,cljs.core.hash_map,map__151334):map__151334);var focus = cljs.core.get.call(null,map__151334__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__151334__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__151335 = cljs.core.seq.call(null,init_messages__$1);var chunk__151336 = null;var count__151337 = 0;var i__151338 = 0;while(true){
if((i__151338 < count__151337))
{var message = cljs.core._nth.call(null,chunk__151336,i__151338);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__151339 = seq__151335;
var G__151340 = chunk__151336;
var G__151341 = count__151337;
var G__151342 = (i__151338 + 1);
seq__151335 = G__151339;
chunk__151336 = G__151340;
count__151337 = G__151341;
i__151338 = G__151342;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151335);if(temp__4092__auto__)
{var seq__151335__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151335__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151335__$1);{
var G__151343 = cljs.core.chunk_rest.call(null,seq__151335__$1);
var G__151344 = c__14545__auto__;
var G__151345 = cljs.core.count.call(null,c__14545__auto__);
var G__151346 = 0;
seq__151335 = G__151343;
chunk__151336 = G__151344;
count__151337 = G__151345;
i__151338 = G__151346;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__151335__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__151347 = cljs.core.next.call(null,seq__151335__$1);
var G__151348 = null;
var G__151349 = 0;
var G__151350 = 0;
seq__151335 = G__151347;
chunk__151336 = G__151348;
count__151337 = G__151349;
i__151338 = G__151350;
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
begin = function(app,p__151328){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__151328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_151391){var state_val_151392 = (state_151391[1]);if((state_val_151392 === 4))
{var inst_151379 = (state_151391[2]);var inst_151380 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_151379);var inst_151381 = cljs.core.get_method.call(null,foundation.app.effect,inst_151380);var inst_151382 = cljs.core.dissoc.call(null,inst_151379,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_151383 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_151379);var inst_151384 = [inst_151382,input,inst_151383];var inst_151385 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_151384,null));var inst_151386 = cljs.core.apply.call(null,inst_151381,inst_151385);var state_151391__$1 = (function (){var statearr_151393 = state_151391;(statearr_151393[7] = inst_151386);
return statearr_151393;
})();var statearr_151394_151403 = state_151391__$1;(statearr_151394_151403[2] = null);
(statearr_151394_151403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_151392 === 3))
{var inst_151389 = (state_151391[2]);var state_151391__$1 = state_151391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151391__$1,inst_151389);
} else
{if((state_val_151392 === 2))
{var state_151391__$1 = state_151391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151391__$1,4,output);
} else
{if((state_val_151392 === 1))
{var state_151391__$1 = state_151391;var statearr_151395_151404 = state_151391__$1;(statearr_151395_151404[2] = null);
(statearr_151395_151404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_151399 = (new Array(8));(statearr_151399[0] = state_machine__16760__auto__);
(statearr_151399[1] = 1);
return statearr_151399;
});
var state_machine__16760__auto____1 = (function (state_151391){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_151391);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e151400){if((e151400 instanceof Object))
{var ex__16763__auto__ = e151400;var statearr_151401_151405 = state_151391;(statearr_151401_151405[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151406 = state_151391;
state_151391 = G__151406;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_151391){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_151391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_151402 = f__16830__auto__.call(null);(statearr_151402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_151402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__151411 = cljs.core.seq.call(null,script);var chunk__151412 = null;var count__151413 = 0;var i__151414 = 0;while(true){
if((i__151414 < count__151413))
{var message = cljs.core._nth.call(null,chunk__151412,i__151414);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__151415 = seq__151411;
var G__151416 = chunk__151412;
var G__151417 = count__151413;
var G__151418 = (i__151414 + 1);
seq__151411 = G__151415;
chunk__151412 = G__151416;
count__151413 = G__151417;
i__151414 = G__151418;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__151411);if(temp__4092__auto__)
{var seq__151411__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__151411__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__151411__$1);{
var G__151419 = cljs.core.chunk_rest.call(null,seq__151411__$1);
var G__151420 = c__14545__auto__;
var G__151421 = cljs.core.count.call(null,c__14545__auto__);
var G__151422 = 0;
seq__151411 = G__151419;
chunk__151412 = G__151420;
count__151413 = G__151421;
i__151414 = G__151422;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__151411__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__151423 = cljs.core.next.call(null,seq__151411__$1);
var G__151424 = null;
var G__151425 = 0;
var G__151426 = 0;
seq__151411 = G__151423;
chunk__151412 = G__151424;
count__151413 = G__151425;
i__151414 = G__151426;
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
foundation.app.depends = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__151427,graph){var map__151428 = p__151427;var map__151428__$1 = ((cljs.core.seq_QMARK_.call(null,map__151428))?cljs.core.apply.call(null,cljs.core.hash_map,map__151428):map__151428);var transform = cljs.core.get.call(null,map__151428__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__151429 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__151429,0,null);var path = cljs.core.nth.call(null,vec__151429,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__151432,graph){var map__151433 = p__151432;var map__151433__$1 = ((cljs.core.seq_QMARK_.call(null,map__151433))?cljs.core.apply.call(null,cljs.core.hash_map,map__151433):map__151433);var derives = cljs.core.get.call(null,map__151433__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__151434 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__151434,0,null);var output_path = cljs.core.nth.call(null,vec__151434,1,null);var input_spec = cljs.core.nth.call(null,vec__151434,2,null);var input_paths__$1 = (function (){var or__13821__auto__ = (function (){var and__13809__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13809__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13809__auto__;
}
})();if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__151430_SHARP_,p2__151431_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__151430_SHARP_,output_path,p2__151431_SHARP_);
}),graph,input_paths__$1);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"effect","effect",4002786563),(function (dispatch_map,graph){var vec__151435 = cljs.core.key.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(dispatch_map));var type = cljs.core.nth.call(null,vec__151435,0,null);var input_paths = cljs.core.nth.call(null,vec__151435,1,null);var output_paths = cljs.core.nth.call(null,vec__151435,2,null);var input_spec = cljs.core.nth.call(null,vec__151435,3,null);var io_paths = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths,output_paths);return cljs.core.reduce.call(null,(function (g,p__151436){var vec__151437 = p__151436;var input_path = cljs.core.nth.call(null,vec__151437,0,null);var output_path = cljs.core.nth.call(null,vec__151437,1,null);return foundation.app.data.dependency.depend.call(null,g,output_path,input_path);
}),graph,io_paths);
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"default","default",2558708147),(function (dispatch_map,graph){return graph;
}));
foundation.app.build_dependency_graph = (function() {
var build_dependency_graph = null;
var build_dependency_graph__0 = (function (){return build_dependency_graph.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var build_dependency_graph__1 = (function (app){return cljs.core.reduce.call(null,(function (graph,dispatch_map){return foundation.app.depends.call(null,dispatch_map,graph);
}),(function (){var or__13821__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__151439 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__151439,0,null);var large = cljs.core.nth.call(null,vec__151439,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__151440_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__151440_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__151441){var map__151444 = p__151441;var map__151444__$1 = ((cljs.core.seq_QMARK_.call(null,map__151444))?cljs.core.apply.call(null,cljs.core.hash_map,map__151444):map__151444);var state = map__151444__$1;var change = cljs.core.get.call(null,map__151444__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__151444__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__151445 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__151445__$1 = ((cljs.core.seq_QMARK_.call(null,map__151445))?cljs.core.apply.call(null,cljs.core.hash_map,map__151445):map__151445);var state__$1 = map__151445__$1;var processed_inputs = cljs.core.get.call(null,map__151445__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__151445__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__151445__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14514__auto__ = (function iter__151450(s__151451){return (new cljs.core.LazySeq(null,(function (){var s__151451__$1 = s__151451;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__151451__$1);if(temp__4092__auto__)
{var s__151451__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__151451__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__151451__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__151453 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__151452 = 0;while(true){
if((i__151452 < size__14513__auto__))
{var dval = cljs.core._nth.call(null,c__14512__auto__,i__151452);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__151453,cljs.core.get.call(null,dispatches,dval));
{
var G__151454 = (i__151452 + 1);
i__151452 = G__151454;
continue;
}
} else
{{
var G__151455 = (i__151452 + 1);
i__151452 = G__151455;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151453),iter__151450.call(null,cljs.core.chunk_rest.call(null,s__151451__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151453),null);
}
} else
{var dval = cljs.core.first.call(null,s__151451__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__151450.call(null,cljs.core.rest.call(null,s__151451__$2)));
} else
{{
var G__151456 = cljs.core.rest.call(null,s__151451__$2);
s__151451__$1 = G__151456;
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
});return iter__14514__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__151457){
var state = cljs.core.first(arglist__151457);
arglist__151457 = cljs.core.next(arglist__151457);
var path = cljs.core.first(arglist__151457);
arglist__151457 = cljs.core.next(arglist__151457);
var f = cljs.core.first(arglist__151457);
var args = cljs.core.rest(arglist__151457);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__151458){var map__151461 = p__151458;var map__151461__$1 = ((cljs.core.seq_QMARK_.call(null,map__151461))?cljs.core.apply.call(null,cljs.core.hash_map,map__151461):map__151461);var state = map__151461__$1;var context = cljs.core.get.call(null,map__151461__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__151461__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__151462 = message;var map__151462__$1 = ((cljs.core.seq_QMARK_.call(null,map__151462))?cljs.core.apply.call(null,cljs.core.hash_map,map__151462):map__151462);var type = cljs.core.get.call(null,map__151462__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__151462__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__151464){var map__151466 = p__151464;var map__151466__$1 = ((cljs.core.seq_QMARK_.call(null,map__151466))?cljs.core.apply.call(null,cljs.core.hash_map,map__151466):map__151466);var state = map__151466__$1;var context = cljs.core.get.call(null,map__151466__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__151463_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__151463_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__151467){var vec__151468 = p__151467;var dispatch_val = cljs.core.nth.call(null,vec__151468,0,null);var multifn = cljs.core.nth.call(null,vec__151468,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (dependents,p__151469){var vec__151470 = p__151469;var dispatch_val = cljs.core.nth.call(null,vec__151470,0,null);var multifn = cljs.core.nth.call(null,vec__151470,1,null);return cljs.core.seq.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,dependents),cljs.core.nth.call(null,dispatch_val,2)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__151471_SHARP_){return pred.call(null,foundation.app.dependents.call(null,state),p1__151471_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__151472){var map__151480 = p__151472;var map__151480__$1 = ((cljs.core.seq_QMARK_.call(null,map__151480))?cljs.core.apply.call(null,cljs.core.hash_map,map__151480):map__151480);var state = map__151480__$1;var context = cljs.core.get.call(null,map__151480__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__151481,p__151482){var map__151483 = p__151481;var map__151483__$1 = ((cljs.core.seq_QMARK_.call(null,map__151483))?cljs.core.apply.call(null,cljs.core.hash_map,map__151483):map__151483);var state__$1 = map__151483__$1;var change = cljs.core.get.call(null,map__151483__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__151484 = p__151482;var vec__151485 = cljs.core.nth.call(null,vec__151484,0,null);var input_paths = cljs.core.nth.call(null,vec__151485,0,null);var output_path = cljs.core.nth.call(null,vec__151485,1,null);var ispec = cljs.core.nth.call(null,vec__151485,2,null);var derive = vec__151485;var derive_fn = cljs.core.nth.call(null,vec__151484,1,null);var vec__151486 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__151486,0,null);var arg_names = cljs.core.nth.call(null,vec__151486,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__151487){var map__151497 = p__151487;var map__151497__$1 = ((cljs.core.seq_QMARK_.call(null,map__151497))?cljs.core.apply.call(null,cljs.core.hash_map,map__151497):map__151497);var state = map__151497__$1;var context = cljs.core.get.call(null,map__151497__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__151498,p__151499){var map__151500 = p__151498;var map__151500__$1 = ((cljs.core.seq_QMARK_.call(null,map__151500))?cljs.core.apply.call(null,cljs.core.hash_map,map__151500):map__151500);var state__$1 = map__151500__$1;var change = cljs.core.get.call(null,map__151500__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__151501 = p__151499;var vec__151502 = cljs.core.nth.call(null,vec__151501,0,null);var type = cljs.core.nth.call(null,vec__151502,0,null);var input_paths = cljs.core.nth.call(null,vec__151502,1,null);var output_paths = cljs.core.nth.call(null,vec__151502,2,null);var ispec = cljs.core.nth.call(null,vec__151502,3,null);var effect = vec__151502;var vec__151503 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__151503,0,null);var arg_names = cljs.core.nth.call(null,vec__151503,1,null);var io = foundation.app.data.combinatorics.cartesian_product.call(null,input_paths__$1,output_paths);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.map.call(null,(function (p__151504,input){var vec__151505 = p__151504;var input_path = cljs.core.nth.call(null,vec__151505,0,null);var output_path = cljs.core.nth.call(null,vec__151505,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,output_path,new cljs.core.Keyword(null,"value","value",1125876963),input,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692),effect], true, false);
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
foundation.app.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14378__auto__){var self__ = this;
var this__14378__auto____$1 = this;var h__14232__auto__ = self__.__hash;if(!((h__14232__auto__ == null)))
{return h__14232__auto__;
} else
{var h__14232__auto____$1 = cljs.core.hash_imap.call(null,this__14378__auto____$1);self__.__hash = h__14232__auto____$1;
return h__14232__auto____$1;
}
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14383__auto__,k__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;return cljs.core._lookup.call(null,this__14383__auto____$1,k__14384__auto__,null);
});
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k151507,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k151507,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k151507,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k151507,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k151507,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k151507,else__14386__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__151506){var self__ = this;
var this__14390__auto____$1 = this;var pred__151509 = cljs.core.keyword_identical_QMARK_;var expr__151510 = k__14391__auto__;if(cljs.core.truth_(pred__151509.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__151510)))
{return (new foundation.app.Application(G__151506,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__151509.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__151510)))
{return (new foundation.app.Application(self__.state,G__151506,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__151509.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__151510)))
{return (new foundation.app.Application(self__.state,self__.input,G__151506,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__151509.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__151510)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__151506,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__151506),null));
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14397__auto__,writer__14398__auto__,opts__14399__auto__){var self__ = this;
var this__14397__auto____$1 = this;var pr_pair__14400__auto__ = (function (keyval__14401__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,cljs.core.pr_writer,""," ","",opts__14399__auto__,keyval__14401__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,pr_pair__14400__auto__,"#foundation.app.Application{",", ","}",opts__14399__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14388__auto__,entry__14389__auto__){var self__ = this;
var this__14388__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14389__auto__))
{return cljs.core._assoc.call(null,this__14388__auto____$1,cljs.core._nth.call(null,entry__14389__auto__,0),cljs.core._nth.call(null,entry__14389__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14388__auto____$1,entry__14389__auto__);
}
});
foundation.app.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14395__auto__){var self__ = this;
var this__14395__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14387__auto__){var self__ = this;
var this__14387__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14379__auto__,other__14380__auto__){var self__ = this;
var this__14379__auto____$1 = this;if(cljs.core.truth_((function (){var and__13809__auto__ = other__14380__auto__;if(cljs.core.truth_(and__13809__auto__))
{return ((this__14379__auto____$1.constructor === other__14380__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14379__auto____$1,other__14380__auto__));
} else
{return and__13809__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__151506){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__151506,self__.__extmap,self__.__hash));
});
foundation.app.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14381__auto__){var self__ = this;
var this__14381__auto____$1 = this;return self__.__meta;
});
foundation.app.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14392__auto__,k__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14393__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14392__auto____$1),self__.__meta),k__14393__auto__);
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14393__auto__)),null));
}
});
foundation.app.Application.cljs$lang$type = true;
foundation.app.Application.cljs$lang$ctorPrSeq = (function (this__14417__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Application");
});
foundation.app.Application.cljs$lang$ctorPrWriter = (function (this__14417__auto__,writer__14418__auto__){return cljs.core._write.call(null,writer__14418__auto__,"foundation.app/Application");
});
foundation.app.__GT_Application = (function __GT_Application(state,input,output,app_model){return (new foundation.app.Application(state,input,output,app_model));
});
foundation.app.map__GT_Application = (function map__GT_Application(G__151508){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__151508),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__151508),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__151508),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__151508),null,cljs.core.dissoc.call(null,G__151508,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__151512_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__151512_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__151513){var map__151515 = p__151513;var map__151515__$1 = ((cljs.core.seq_QMARK_.call(null,map__151515))?cljs.core.apply.call(null,cljs.core.hash_map,map__151515):map__151515);var init_messages = cljs.core.get.call(null,map__151515__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__151515__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__151513 = null;if (arguments.length > 1) {
  p__151513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__151513);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__151516){
var root_id = cljs.core.first(arglist__151516);
var p__151513 = cljs.core.rest(arglist__151516);
return create_app__delegate(root_id,p__151513);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj151518 = {};return obj151518;
})();
foundation.app.initialize = (function initialize(_){if((function (){var and__13809__auto__ = _;if(and__13809__auto__)
{return _.foundation$app$IApplication$initialize$arity$1;
} else
{return and__13809__auto__;
}
})())
{return _.foundation$app$IApplication$initialize$arity$1(_);
} else
{var x__14424__auto__ = (((_ == null))?null:_);return (function (){var or__13821__auto__ = (foundation.app.initialize[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.initialize["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApplication.initialize",_);
}
}
})().call(null,_);
}
});

//# sourceMappingURL=app.js.map