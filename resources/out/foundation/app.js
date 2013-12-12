// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('cljs.core.async.impl.protocols');
goog.require('foundation.app.app_model');
goog.require('foundation.app.tree');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('foundation.app.app_model');
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
var G__89265__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__89265 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__89265__delegate.call(this,k,args);};
G__89265.cljs$lang$maxFixedArity = 1;
G__89265.cljs$lang$applyTo = (function (arglist__89266){
var k = cljs.core.first(arglist__89266);
var args = cljs.core.rest(arglist__89266);
return G__89265__delegate(k,args);
});
G__89265.cljs$core$IFn$_invoke$arity$variadic = G__89265__delegate;
return G__89265;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
foundation.app.route_effect = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.filter_changes = (function filter_changes(p__89267,changes){var map__89271 = p__89267;var map__89271__$1 = ((cljs.core.seq_QMARK_.call(null,map__89271))?cljs.core.apply.call(null,cljs.core.hash_map,map__89271):map__89271);var processed_inputs = cljs.core.get.call(null,map__89271__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__89272){var vec__89273 = p__89272;var k = cljs.core.nth.call(null,vec__89273,0,null);var v = cljs.core.nth.call(null,vec__89273,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__89280){var vec__89281 = p__89280;var k = cljs.core.nth.call(null,vec__89281,0,null);var v = cljs.core.nth.call(null,vec__89281,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__89282){var vec__89283 = p__89282;var k = cljs.core.nth.call(null,vec__89283,0,null);var v = cljs.core.nth.call(null,vec__89283,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__89284){var vec__89285 = p__89284;var k = cljs.core.nth.call(null,vec__89285,0,null);var v = cljs.core.nth.call(null,vec__89285,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__89324){var vec__89325 = p__89324;var k = cljs.core.nth.call(null,vec__89325,0,null);var v = cljs.core.nth.call(null,vec__89325,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14514__auto__ = (function iter__89326(s__89327){return (new cljs.core.LazySeq(null,(function (){var s__89327__$1 = s__89327;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__89327__$1);if(temp__4092__auto__)
{var s__89327__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__89327__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__89327__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__89329 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__89328 = 0;while(true){
if((i__89328 < size__14513__auto__))
{var vec__89344 = cljs.core._nth.call(null,c__14512__auto__,i__89328);var path = cljs.core.nth.call(null,vec__89344,0,null);var arg = cljs.core.nth.call(null,vec__89344,1,null);cljs.core.chunk_append.call(null,b__89329,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__89350 = data_model__$1;if(G__89350)
{var bit__14447__auto__ = (G__89350.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__89350.cljs$core$ILookup$))
{return true;
} else
{if((!G__89350.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__89350);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__89350);
}
})())
{var data_model_k__89349 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__89349,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__89358 = cljs.core.rest.call(null,ks);
var G__89359 = cljs.core.get.call(null,v,k,v);
var G__89360 = ret;
ks = G__89358;
data_model__$1 = G__89359;
ret = G__89360;
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
var G__89361 = (i__89328 + 1);
i__89328 = G__89361;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89329),iter__89326.call(null,cljs.core.chunk_rest.call(null,s__89327__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89329),null);
}
} else
{var vec__89351 = cljs.core.first.call(null,s__89327__$2);var path = cljs.core.nth.call(null,vec__89351,0,null);var arg = cljs.core.nth.call(null,vec__89351,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__89357 = data_model__$1;if(G__89357)
{var bit__14447__auto__ = (G__89357.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__89357.cljs$core$ILookup$))
{return true;
} else
{if((!G__89357.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__89357);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__89357);
}
})())
{var data_model_k__89356 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__89356,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__89362 = cljs.core.rest.call(null,ks);
var G__89363 = cljs.core.get.call(null,v,k,v);
var G__89364 = ret;
ks = G__89362;
data_model__$1 = G__89363;
ret = G__89364;
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
})(),iter__89326.call(null,cljs.core.rest.call(null,s__89327__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__89365){var map__89366 = p__89365;var map__89366__$1 = ((cljs.core.seq_QMARK_.call(null,map__89366))?cljs.core.apply.call(null,cljs.core.hash_map,map__89366):map__89366);var input_paths = cljs.core.get.call(null,map__89366__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__89366__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__16829__auto___89421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_89409){var state_val_89410 = (state_89409[1]);if((state_val_89410 === 4))
{var inst_89397 = (state_89409[2]);var inst_89398 = cljs.core.deref.call(null,app_model);var inst_89399 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_89397);var inst_89400 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_89399);var inst_89401 = foundation.app.tree.t.call(null,inst_89398);var inst_89402 = foundation.app.tree.since_t.call(null,inst_89400,inst_89401);var inst_89403 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_89404 = render_fn.call(null,inst_89402,inst_89403);var state_89409__$1 = (function (){var statearr_89411 = state_89409;(statearr_89411[7] = inst_89404);
return statearr_89411;
})();var statearr_89412_89422 = state_89409__$1;(statearr_89412_89422[2] = null);
(statearr_89412_89422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89410 === 3))
{var inst_89407 = (state_89409[2]);var state_89409__$1 = state_89409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89409__$1,inst_89407);
} else
{if((state_val_89410 === 2))
{var inst_89395 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_89409__$1 = state_89409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89409__$1,4,inst_89395);
} else
{if((state_val_89410 === 1))
{var state_89409__$1 = state_89409;var statearr_89413_89423 = state_89409__$1;(statearr_89413_89423[2] = null);
(statearr_89413_89423[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_89417 = (new Array(8));(statearr_89417[0] = state_machine__16760__auto__);
(statearr_89417[1] = 1);
return statearr_89417;
});
var state_machine__16760__auto____1 = (function (state_89409){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_89409);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e89418){if((e89418 instanceof Object))
{var ex__16763__auto__ = e89418;var statearr_89419_89424 = state_89409;(statearr_89419_89424[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89425 = state_89409;
state_89409 = G__89425;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_89409){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_89409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_89420 = f__16830__auto__.call(null);(statearr_89420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___89421);
return statearr_89420;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__89427 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__89427))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__89427))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__16829__auto___89592 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_89558){var state_val_89559 = (state_89558[1]);if((state_val_89559 === 1))
{var state_89558__$1 = state_89558;var statearr_89560_89593 = state_89558__$1;(statearr_89560_89593[2] = null);
(statearr_89560_89593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 2))
{var state_89558__$1 = state_89558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89558__$1,4,input_queue__$1);
} else
{if((state_val_89559 === 3))
{var inst_89556 = (state_89558[2]);var state_89558__$1 = state_89558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89558__$1,inst_89556);
} else
{if((state_val_89559 === 4))
{var inst_89512 = (state_89558[2]);var inst_89517 = foundation.app.pre_process.call(null,inst_89512);var inst_89518 = cljs.core.seq.call(null,inst_89517);var inst_89519 = inst_89518;var inst_89520 = null;var inst_89521 = 0;var inst_89522 = 0;var state_89558__$1 = (function (){var statearr_89561 = state_89558;(statearr_89561[7] = inst_89519);
(statearr_89561[8] = inst_89522);
(statearr_89561[9] = inst_89521);
(statearr_89561[10] = inst_89520);
return statearr_89561;
})();var statearr_89562_89594 = state_89558__$1;(statearr_89562_89594[2] = null);
(statearr_89562_89594[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 5))
{var inst_89522 = (state_89558[8]);var inst_89521 = (state_89558[9]);var inst_89524 = (inst_89522 < inst_89521);var inst_89525 = inst_89524;var state_89558__$1 = state_89558;if(cljs.core.truth_(inst_89525))
{var statearr_89566_89595 = state_89558__$1;(statearr_89566_89595[1] = 7);
} else
{var statearr_89567_89596 = state_89558__$1;(statearr_89567_89596[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 6))
{var inst_89553 = (state_89558[2]);var state_89558__$1 = (function (){var statearr_89568 = state_89558;(statearr_89568[11] = inst_89553);
return statearr_89568;
})();var statearr_89569_89597 = state_89558__$1;(statearr_89569_89597[2] = null);
(statearr_89569_89597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 7))
{var inst_89519 = (state_89558[7]);var inst_89522 = (state_89558[8]);var inst_89521 = (state_89558[9]);var inst_89520 = (state_89558[10]);var inst_89527 = cljs.core._nth.call(null,inst_89520,inst_89522);var inst_89528 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_89527);var inst_89529 = (inst_89522 + 1);var tmp89563 = inst_89519;var tmp89564 = inst_89521;var tmp89565 = inst_89520;var inst_89519__$1 = tmp89563;var inst_89520__$1 = tmp89565;var inst_89521__$1 = tmp89564;var inst_89522__$1 = inst_89529;var state_89558__$1 = (function (){var statearr_89570 = state_89558;(statearr_89570[7] = inst_89519__$1);
(statearr_89570[12] = inst_89528);
(statearr_89570[8] = inst_89522__$1);
(statearr_89570[9] = inst_89521__$1);
(statearr_89570[10] = inst_89520__$1);
return statearr_89570;
})();var statearr_89571_89598 = state_89558__$1;(statearr_89571_89598[2] = null);
(statearr_89571_89598[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 8))
{var inst_89519 = (state_89558[7]);var inst_89532 = (state_89558[13]);var inst_89532__$1 = cljs.core.seq.call(null,inst_89519);var state_89558__$1 = (function (){var statearr_89572 = state_89558;(statearr_89572[13] = inst_89532__$1);
return statearr_89572;
})();if(inst_89532__$1)
{var statearr_89573_89599 = state_89558__$1;(statearr_89573_89599[1] = 10);
} else
{var statearr_89574_89600 = state_89558__$1;(statearr_89574_89600[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 9))
{var inst_89551 = (state_89558[2]);var state_89558__$1 = state_89558;var statearr_89575_89601 = state_89558__$1;(statearr_89575_89601[2] = inst_89551);
(statearr_89575_89601[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 10))
{var inst_89532 = (state_89558[13]);var inst_89534 = cljs.core.chunked_seq_QMARK_.call(null,inst_89532);var state_89558__$1 = state_89558;if(inst_89534)
{var statearr_89576_89602 = state_89558__$1;(statearr_89576_89602[1] = 13);
} else
{var statearr_89577_89603 = state_89558__$1;(statearr_89577_89603[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 11))
{var state_89558__$1 = state_89558;var statearr_89578_89604 = state_89558__$1;(statearr_89578_89604[2] = null);
(statearr_89578_89604[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 12))
{var inst_89549 = (state_89558[2]);var state_89558__$1 = state_89558;var statearr_89579_89605 = state_89558__$1;(statearr_89579_89605[2] = inst_89549);
(statearr_89579_89605[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 13))
{var inst_89532 = (state_89558[13]);var inst_89536 = cljs.core.chunk_first.call(null,inst_89532);var inst_89537 = cljs.core.chunk_rest.call(null,inst_89532);var inst_89538 = cljs.core.count.call(null,inst_89536);var inst_89519 = inst_89537;var inst_89520 = inst_89536;var inst_89521 = inst_89538;var inst_89522 = 0;var state_89558__$1 = (function (){var statearr_89580 = state_89558;(statearr_89580[7] = inst_89519);
(statearr_89580[8] = inst_89522);
(statearr_89580[9] = inst_89521);
(statearr_89580[10] = inst_89520);
return statearr_89580;
})();var statearr_89581_89606 = state_89558__$1;(statearr_89581_89606[2] = null);
(statearr_89581_89606[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 14))
{var inst_89532 = (state_89558[13]);var inst_89541 = cljs.core.first.call(null,inst_89532);var inst_89542 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_89541);var inst_89543 = cljs.core.next.call(null,inst_89532);var inst_89519 = inst_89543;var inst_89520 = null;var inst_89521 = 0;var inst_89522 = 0;var state_89558__$1 = (function (){var statearr_89582 = state_89558;(statearr_89582[14] = inst_89542);
(statearr_89582[7] = inst_89519);
(statearr_89582[8] = inst_89522);
(statearr_89582[9] = inst_89521);
(statearr_89582[10] = inst_89520);
return statearr_89582;
})();var statearr_89583_89607 = state_89558__$1;(statearr_89583_89607[2] = null);
(statearr_89583_89607[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89559 === 15))
{var inst_89546 = (state_89558[2]);var state_89558__$1 = state_89558;var statearr_89584_89608 = state_89558__$1;(statearr_89584_89608[2] = inst_89546);
(statearr_89584_89608[1] = 12);
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
var state_machine__16760__auto____0 = (function (){var statearr_89588 = (new Array(15));(statearr_89588[0] = state_machine__16760__auto__);
(statearr_89588[1] = 1);
return statearr_89588;
});
var state_machine__16760__auto____1 = (function (state_89558){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_89558);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e89589){if((e89589 instanceof Object))
{var ex__16763__auto__ = e89589;var statearr_89590_89609 = state_89558;(statearr_89590_89609[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89610 = state_89558;
state_89558 = G__89610;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_89558){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_89558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_89591 = f__16830__auto__.call(null);(statearr_89591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___89592);
return statearr_89591;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__89615 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__89616 = null;var count__89617 = 0;var i__89618 = 0;while(true){
if((i__89618 < count__89617))
{var message = cljs.core._nth.call(null,chunk__89616,i__89618);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__89619 = seq__89615;
var G__89620 = chunk__89616;
var G__89621 = count__89617;
var G__89622 = (i__89618 + 1);
seq__89615 = G__89619;
chunk__89616 = G__89620;
count__89617 = G__89621;
i__89618 = G__89622;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89615);if(temp__4092__auto__)
{var seq__89615__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89615__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__89615__$1);{
var G__89623 = cljs.core.chunk_rest.call(null,seq__89615__$1);
var G__89624 = c__14545__auto__;
var G__89625 = cljs.core.count.call(null,c__14545__auto__);
var G__89626 = 0;
seq__89615 = G__89623;
chunk__89616 = G__89624;
count__89617 = G__89625;
i__89618 = G__89626;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__89615__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__89627 = cljs.core.next.call(null,seq__89615__$1);
var G__89628 = null;
var G__89629 = 0;
var G__89630 = 0;
seq__89615 = G__89627;
chunk__89616 = G__89628;
count__89617 = G__89629;
i__89618 = G__89630;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__89635){var vec__89636 = p__89635;var name = cljs.core.nth.call(null,vec__89636,0,null);var paths = cljs.core.nth.call(null,vec__89636,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__89637){var vec__89638 = p__89637;var k = cljs.core.nth.call(null,vec__89638,0,null);var v = cljs.core.nth.call(null,vec__89638,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__89639){var map__89645 = p__89639;var map__89645__$1 = ((cljs.core.seq_QMARK_.call(null,map__89645))?cljs.core.apply.call(null,cljs.core.hash_map,map__89645):map__89645);var focus = cljs.core.get.call(null,map__89645__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__89645__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__89646 = cljs.core.seq.call(null,init_messages__$1);var chunk__89647 = null;var count__89648 = 0;var i__89649 = 0;while(true){
if((i__89649 < count__89648))
{var message = cljs.core._nth.call(null,chunk__89647,i__89649);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__89650 = seq__89646;
var G__89651 = chunk__89647;
var G__89652 = count__89648;
var G__89653 = (i__89649 + 1);
seq__89646 = G__89650;
chunk__89647 = G__89651;
count__89648 = G__89652;
i__89649 = G__89653;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89646);if(temp__4092__auto__)
{var seq__89646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89646__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__89646__$1);{
var G__89654 = cljs.core.chunk_rest.call(null,seq__89646__$1);
var G__89655 = c__14545__auto__;
var G__89656 = cljs.core.count.call(null,c__14545__auto__);
var G__89657 = 0;
seq__89646 = G__89654;
chunk__89647 = G__89655;
count__89648 = G__89656;
i__89649 = G__89657;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__89646__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__89658 = cljs.core.next.call(null,seq__89646__$1);
var G__89659 = null;
var G__89660 = 0;
var G__89661 = 0;
seq__89646 = G__89658;
chunk__89647 = G__89659;
count__89648 = G__89660;
i__89649 = G__89661;
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
begin = function(app,p__89639){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__89639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_89690){var state_val_89691 = (state_89690[1]);if((state_val_89691 === 4))
{var inst_89684 = (state_89690[2]);var inst_89685 = foundation.app.effect.call(null,inst_89684,input);var state_89690__$1 = (function (){var statearr_89692 = state_89690;(statearr_89692[7] = inst_89685);
return statearr_89692;
})();var statearr_89693_89702 = state_89690__$1;(statearr_89693_89702[2] = null);
(statearr_89693_89702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89691 === 3))
{var inst_89688 = (state_89690[2]);var state_89690__$1 = state_89690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89690__$1,inst_89688);
} else
{if((state_val_89691 === 2))
{var state_89690__$1 = state_89690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89690__$1,4,output);
} else
{if((state_val_89691 === 1))
{var state_89690__$1 = state_89690;var statearr_89694_89703 = state_89690__$1;(statearr_89694_89703[2] = null);
(statearr_89694_89703[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_89698 = (new Array(8));(statearr_89698[0] = state_machine__16760__auto__);
(statearr_89698[1] = 1);
return statearr_89698;
});
var state_machine__16760__auto____1 = (function (state_89690){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_89690);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e89699){if((e89699 instanceof Object))
{var ex__16763__auto__ = e89699;var statearr_89700_89704 = state_89690;(statearr_89700_89704[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89705 = state_89690;
state_89690 = G__89705;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_89690){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_89690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_89701 = f__16830__auto__.call(null);(statearr_89701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_89701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__89710 = cljs.core.seq.call(null,script);var chunk__89711 = null;var count__89712 = 0;var i__89713 = 0;while(true){
if((i__89713 < count__89712))
{var message = cljs.core._nth.call(null,chunk__89711,i__89713);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__89714 = seq__89710;
var G__89715 = chunk__89711;
var G__89716 = count__89712;
var G__89717 = (i__89713 + 1);
seq__89710 = G__89714;
chunk__89711 = G__89715;
count__89712 = G__89716;
i__89713 = G__89717;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89710);if(temp__4092__auto__)
{var seq__89710__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89710__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__89710__$1);{
var G__89718 = cljs.core.chunk_rest.call(null,seq__89710__$1);
var G__89719 = c__14545__auto__;
var G__89720 = cljs.core.count.call(null,c__14545__auto__);
var G__89721 = 0;
seq__89710 = G__89718;
chunk__89711 = G__89719;
count__89712 = G__89720;
i__89713 = G__89721;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__89710__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__89722 = cljs.core.next.call(null,seq__89710__$1);
var G__89723 = null;
var G__89724 = 0;
var G__89725 = 0;
seq__89710 = G__89722;
chunk__89711 = G__89723;
count__89712 = G__89724;
i__89713 = G__89725;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__89726,graph){var map__89727 = p__89726;var map__89727__$1 = ((cljs.core.seq_QMARK_.call(null,map__89727))?cljs.core.apply.call(null,cljs.core.hash_map,map__89727):map__89727);var transform = cljs.core.get.call(null,map__89727__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__89728 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__89728,0,null);var path = cljs.core.nth.call(null,vec__89728,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__89731,graph){var map__89732 = p__89731;var map__89732__$1 = ((cljs.core.seq_QMARK_.call(null,map__89732))?cljs.core.apply.call(null,cljs.core.hash_map,map__89732):map__89732);var derives = cljs.core.get.call(null,map__89732__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__89733 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__89733,0,null);var output_path = cljs.core.nth.call(null,vec__89733,1,null);var input_spec = cljs.core.nth.call(null,vec__89733,2,null);var input_paths__$1 = (function (){var or__13821__auto__ = (function (){var and__13809__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13809__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13809__auto__;
}
})();if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__89729_SHARP_,p2__89730_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__89729_SHARP_,output_path,p2__89730_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__89735 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__89735,0,null);var large = cljs.core.nth.call(null,vec__89735,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__89736_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__89736_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__89737){var map__89740 = p__89737;var map__89740__$1 = ((cljs.core.seq_QMARK_.call(null,map__89740))?cljs.core.apply.call(null,cljs.core.hash_map,map__89740):map__89740);var state = map__89740__$1;var change = cljs.core.get.call(null,map__89740__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__89740__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__89741 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__89741__$1 = ((cljs.core.seq_QMARK_.call(null,map__89741))?cljs.core.apply.call(null,cljs.core.hash_map,map__89741):map__89741);var state__$1 = map__89741__$1;var processed_inputs = cljs.core.get.call(null,map__89741__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__89741__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__89741__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14514__auto__ = (function iter__89746(s__89747){return (new cljs.core.LazySeq(null,(function (){var s__89747__$1 = s__89747;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__89747__$1);if(temp__4092__auto__)
{var s__89747__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__89747__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__89747__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__89749 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__89748 = 0;while(true){
if((i__89748 < size__14513__auto__))
{var dval = cljs.core._nth.call(null,c__14512__auto__,i__89748);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__89749,cljs.core.get.call(null,dispatches,dval));
{
var G__89750 = (i__89748 + 1);
i__89748 = G__89750;
continue;
}
} else
{{
var G__89751 = (i__89748 + 1);
i__89748 = G__89751;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89749),iter__89746.call(null,cljs.core.chunk_rest.call(null,s__89747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89749),null);
}
} else
{var dval = cljs.core.first.call(null,s__89747__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__89746.call(null,cljs.core.rest.call(null,s__89747__$2)));
} else
{{
var G__89752 = cljs.core.rest.call(null,s__89747__$2);
s__89747__$1 = G__89752;
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
update_state.cljs$lang$applyTo = (function (arglist__89753){
var state = cljs.core.first(arglist__89753);
arglist__89753 = cljs.core.next(arglist__89753);
var path = cljs.core.first(arglist__89753);
arglist__89753 = cljs.core.next(arglist__89753);
var f = cljs.core.first(arglist__89753);
var args = cljs.core.rest(arglist__89753);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__89754){var map__89757 = p__89754;var map__89757__$1 = ((cljs.core.seq_QMARK_.call(null,map__89757))?cljs.core.apply.call(null,cljs.core.hash_map,map__89757):map__89757);var state = map__89757__$1;var context = cljs.core.get.call(null,map__89757__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__89757__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__89758 = message;var map__89758__$1 = ((cljs.core.seq_QMARK_.call(null,map__89758))?cljs.core.apply.call(null,cljs.core.hash_map,map__89758):map__89758);var type = cljs.core.get.call(null,map__89758__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__89758__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__89760,input_paths){var map__89762 = p__89760;var map__89762__$1 = ((cljs.core.seq_QMARK_.call(null,map__89762))?cljs.core.apply.call(null,cljs.core.hash_map,map__89762):map__89762);var state = map__89762__$1;var context = cljs.core.get.call(null,map__89762__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__89759_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__89759_SHARP_);
});})(nodes,path))
,nodes));cljs.core.println.call(null,nodes,path,node_for_path);
return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__89763){var map__89771 = p__89763;var map__89771__$1 = ((cljs.core.seq_QMARK_.call(null,map__89771))?cljs.core.apply.call(null,cljs.core.hash_map,map__89771):map__89771);var state = map__89771__$1;var context = cljs.core.get.call(null,map__89771__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__89772,p__89773){var map__89774 = p__89772;var map__89774__$1 = ((cljs.core.seq_QMARK_.call(null,map__89774))?cljs.core.apply.call(null,cljs.core.hash_map,map__89774):map__89774);var state__$1 = map__89774__$1;var change = cljs.core.get.call(null,map__89774__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__89775 = p__89773;var vec__89776 = cljs.core.nth.call(null,vec__89775,0,null);var input_paths = cljs.core.nth.call(null,vec__89776,0,null);var output_path = cljs.core.nth.call(null,vec__89776,1,null);var ispec = cljs.core.nth.call(null,vec__89776,2,null);var derive = vec__89776;var derive_fn = cljs.core.nth.call(null,vec__89775,1,null);var vec__89777 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__89777,0,null);var arg_names = cljs.core.nth.call(null,vec__89777,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__89778){var map__89786 = p__89778;var map__89786__$1 = ((cljs.core.seq_QMARK_.call(null,map__89786))?cljs.core.apply.call(null,cljs.core.hash_map,map__89786):map__89786);var state = map__89786__$1;var context = cljs.core.get.call(null,map__89786__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__89787,p__89788){var map__89789 = p__89787;var map__89789__$1 = ((cljs.core.seq_QMARK_.call(null,map__89789))?cljs.core.apply.call(null,cljs.core.hash_map,map__89789):map__89789);var state__$1 = map__89789__$1;var change = cljs.core.get.call(null,map__89789__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__89790 = p__89788;var vec__89791 = cljs.core.nth.call(null,vec__89790,0,null);var input_paths = cljs.core.nth.call(null,vec__89791,0,null);var ispec = cljs.core.nth.call(null,vec__89791,1,null);var effect = vec__89791;var effect_fn = cljs.core.nth.call(null,vec__89790,1,null);var vec__89792 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__89792,0,null);var arg_names = cljs.core.nth.call(null,vec__89792,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
}),state,dependents);
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k89794,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k89794,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89794,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89794,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k89794,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k89794,else__14386__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__89793){var self__ = this;
var this__14390__auto____$1 = this;var pred__89796 = cljs.core.keyword_identical_QMARK_;var expr__89797 = k__14391__auto__;if(cljs.core.truth_(pred__89796.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__89797)))
{return (new foundation.app.Application(G__89793,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__89796.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__89797)))
{return (new foundation.app.Application(self__.state,G__89793,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__89796.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__89797)))
{return (new foundation.app.Application(self__.state,self__.input,G__89793,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__89796.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__89797)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__89793,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__89793),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__89793){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__89793,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__89795){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__89795),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__89795),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__89795),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__89795),null,cljs.core.dissoc.call(null,G__89795,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__89799_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__89799_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__89800){var map__89802 = p__89800;var map__89802__$1 = ((cljs.core.seq_QMARK_.call(null,map__89802))?cljs.core.apply.call(null,cljs.core.hash_map,map__89802):map__89802);var init_messages = cljs.core.get.call(null,map__89802__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__89802__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.app_model.renderer.call(null,root_id,foundation.app.app_model.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__89800 = null;if (arguments.length > 1) {
  p__89800 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__89800);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__89803){
var root_id = cljs.core.first(arglist__89803);
var p__89800 = cljs.core.rest(arglist__89803);
return create_app__delegate(root_id,p__89800);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj89805 = {};return obj89805;
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