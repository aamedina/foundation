// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
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
foundation.app.transform = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,msg){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg){return null;
}));
foundation.app.derives = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,msg,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,msg,inputs){return null;
}));
foundation.app.effect = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",(function (msg,input_queue){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,msg);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,input_queue){return cljs.core.println.call(null,[cljs.core.str("Sending message to server: "),cljs.core.str(message)].join(''));
}));
foundation.app.post_process = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-process",cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.post_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}));
foundation.app.pre_process = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("pre-process",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.pre_process,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null);
}));
foundation.app.input_spec = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("input-spec",(function() { 
var G__96988__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__96988 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__96988__delegate.call(this,k,args);};
G__96988.cljs$lang$maxFixedArity = 1;
G__96988.cljs$lang$applyTo = (function (arglist__96989){
var k = cljs.core.first(arglist__96989);
var args = cljs.core.rest(arglist__96989);
return G__96988__delegate(k,args);
});
G__96988.cljs$core$IFn$_invoke$arity$variadic = G__96988__delegate;
return G__96988;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
foundation.app.route_effect = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.filter_changes = (function filter_changes(p__96990,changes){var map__96994 = p__96990;var map__96994__$1 = ((cljs.core.seq_QMARK_.call(null,map__96994))?cljs.core.apply.call(null,cljs.core.hash_map,map__96994):map__96994);var processed_inputs = cljs.core.get.call(null,map__96994__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__96995){var vec__96996 = p__96995;var k = cljs.core.nth.call(null,vec__96996,0,null);var v = cljs.core.nth.call(null,vec__96996,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__97003){var vec__97004 = p__97003;var k = cljs.core.nth.call(null,vec__97004,0,null);var v = cljs.core.nth.call(null,vec__97004,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__97005){var vec__97006 = p__97005;var k = cljs.core.nth.call(null,vec__97006,0,null);var v = cljs.core.nth.call(null,vec__97006,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__97007){var vec__97008 = p__97007;var k = cljs.core.nth.call(null,vec__97008,0,null);var v = cljs.core.nth.call(null,vec__97008,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__97047){var vec__97048 = p__97047;var k = cljs.core.nth.call(null,vec__97048,0,null);var v = cljs.core.nth.call(null,vec__97048,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14515__auto__ = (function iter__97049(s__97050){return (new cljs.core.LazySeq(null,(function (){var s__97050__$1 = s__97050;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97050__$1);if(temp__4092__auto__)
{var s__97050__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97050__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97050__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97052 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97051 = 0;while(true){
if((i__97051 < size__14514__auto__))
{var vec__97067 = cljs.core._nth.call(null,c__14513__auto__,i__97051);var path = cljs.core.nth.call(null,vec__97067,0,null);var arg = cljs.core.nth.call(null,vec__97067,1,null);cljs.core.chunk_append.call(null,b__97052,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__97073 = data_model__$1;if(G__97073)
{var bit__14448__auto__ = (G__97073.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14448__auto__) || (G__97073.cljs$core$ILookup$))
{return true;
} else
{if((!G__97073.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__97073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__97073);
}
})())
{var data_model_k__97072 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__97072,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__97081 = cljs.core.rest.call(null,ks);
var G__97082 = cljs.core.get.call(null,v,k,v);
var G__97083 = ret;
ks = G__97081;
data_model__$1 = G__97082;
ret = G__97083;
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
var G__97084 = (i__97051 + 1);
i__97051 = G__97084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97052),iter__97049.call(null,cljs.core.chunk_rest.call(null,s__97050__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97052),null);
}
} else
{var vec__97074 = cljs.core.first.call(null,s__97050__$2);var path = cljs.core.nth.call(null,vec__97074,0,null);var arg = cljs.core.nth.call(null,vec__97074,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__97080 = data_model__$1;if(G__97080)
{var bit__14448__auto__ = (G__97080.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14448__auto__) || (G__97080.cljs$core$ILookup$))
{return true;
} else
{if((!G__97080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__97080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__97080);
}
})())
{var data_model_k__97079 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__97079,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__97085 = cljs.core.rest.call(null,ks);
var G__97086 = cljs.core.get.call(null,v,k,v);
var G__97087 = ret;
ks = G__97085;
data_model__$1 = G__97086;
ret = G__97087;
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
})(),iter__97049.call(null,cljs.core.rest.call(null,s__97050__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,input_paths__$1);
})());
});
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"vals","vals",1017516260),(function (_,arg_names,inputs){return cljs.core.flatten.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__97088){var map__97089 = p__97088;var map__97089__$1 = ((cljs.core.seq_QMARK_.call(null,map__97089))?cljs.core.apply.call(null,cljs.core.hash_map,map__97089):map__97089);var input_paths = cljs.core.get.call(null,map__97089__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__97089__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__16830__auto___97144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_97132){var state_val_97133 = (state_97132[1]);if((state_val_97133 === 4))
{var inst_97120 = (state_97132[2]);var inst_97121 = cljs.core.deref.call(null,app_model);var inst_97122 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_97120);var inst_97123 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_97122);var inst_97124 = foundation.app.tree.t.call(null,inst_97121);var inst_97125 = foundation.app.tree.since_t.call(null,inst_97123,inst_97124);var inst_97126 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_97127 = render_fn.call(null,inst_97125,inst_97126);var state_97132__$1 = (function (){var statearr_97134 = state_97132;(statearr_97134[7] = inst_97127);
return statearr_97134;
})();var statearr_97135_97145 = state_97132__$1;(statearr_97135_97145[2] = null);
(statearr_97135_97145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97133 === 3))
{var inst_97130 = (state_97132[2]);var state_97132__$1 = state_97132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97132__$1,inst_97130);
} else
{if((state_val_97133 === 2))
{var inst_97118 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_97132__$1 = state_97132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97132__$1,4,inst_97118);
} else
{if((state_val_97133 === 1))
{var state_97132__$1 = state_97132;var statearr_97136_97146 = state_97132__$1;(statearr_97136_97146[2] = null);
(statearr_97136_97146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_97140 = (new Array(8));(statearr_97140[0] = state_machine__16761__auto__);
(statearr_97140[1] = 1);
return statearr_97140;
});
var state_machine__16761__auto____1 = (function (state_97132){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_97132);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e97141){if((e97141 instanceof Object))
{var ex__16764__auto__ = e97141;var statearr_97142_97147 = state_97132;(statearr_97142_97147[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97132);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e97141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__97148 = state_97132;
state_97132 = G__97148;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_97132){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_97132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_97143 = f__16831__auto__.call(null);(statearr_97143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___97144);
return statearr_97143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__97150 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__97150))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__97150))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__16830__auto___97315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_97281){var state_val_97282 = (state_97281[1]);if((state_val_97282 === 1))
{var state_97281__$1 = state_97281;var statearr_97283_97316 = state_97281__$1;(statearr_97283_97316[2] = null);
(statearr_97283_97316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 2))
{var state_97281__$1 = state_97281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97281__$1,4,input_queue__$1);
} else
{if((state_val_97282 === 3))
{var inst_97279 = (state_97281[2]);var state_97281__$1 = state_97281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97281__$1,inst_97279);
} else
{if((state_val_97282 === 4))
{var inst_97235 = (state_97281[2]);var inst_97240 = foundation.app.pre_process.call(null,inst_97235);var inst_97241 = cljs.core.seq.call(null,inst_97240);var inst_97242 = inst_97241;var inst_97243 = null;var inst_97244 = 0;var inst_97245 = 0;var state_97281__$1 = (function (){var statearr_97284 = state_97281;(statearr_97284[7] = inst_97244);
(statearr_97284[8] = inst_97243);
(statearr_97284[9] = inst_97242);
(statearr_97284[10] = inst_97245);
return statearr_97284;
})();var statearr_97285_97317 = state_97281__$1;(statearr_97285_97317[2] = null);
(statearr_97285_97317[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 5))
{var inst_97244 = (state_97281[7]);var inst_97245 = (state_97281[10]);var inst_97247 = (inst_97245 < inst_97244);var inst_97248 = inst_97247;var state_97281__$1 = state_97281;if(cljs.core.truth_(inst_97248))
{var statearr_97289_97318 = state_97281__$1;(statearr_97289_97318[1] = 7);
} else
{var statearr_97290_97319 = state_97281__$1;(statearr_97290_97319[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 6))
{var inst_97276 = (state_97281[2]);var state_97281__$1 = (function (){var statearr_97291 = state_97281;(statearr_97291[11] = inst_97276);
return statearr_97291;
})();var statearr_97292_97320 = state_97281__$1;(statearr_97292_97320[2] = null);
(statearr_97292_97320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 7))
{var inst_97244 = (state_97281[7]);var inst_97243 = (state_97281[8]);var inst_97242 = (state_97281[9]);var inst_97245 = (state_97281[10]);var inst_97250 = cljs.core._nth.call(null,inst_97243,inst_97245);var inst_97251 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_97250);var inst_97252 = (inst_97245 + 1);var tmp97286 = inst_97244;var tmp97287 = inst_97243;var tmp97288 = inst_97242;var inst_97242__$1 = tmp97288;var inst_97243__$1 = tmp97287;var inst_97244__$1 = tmp97286;var inst_97245__$1 = inst_97252;var state_97281__$1 = (function (){var statearr_97293 = state_97281;(statearr_97293[7] = inst_97244__$1);
(statearr_97293[8] = inst_97243__$1);
(statearr_97293[9] = inst_97242__$1);
(statearr_97293[12] = inst_97251);
(statearr_97293[10] = inst_97245__$1);
return statearr_97293;
})();var statearr_97294_97321 = state_97281__$1;(statearr_97294_97321[2] = null);
(statearr_97294_97321[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 8))
{var inst_97242 = (state_97281[9]);var inst_97255 = (state_97281[13]);var inst_97255__$1 = cljs.core.seq.call(null,inst_97242);var state_97281__$1 = (function (){var statearr_97295 = state_97281;(statearr_97295[13] = inst_97255__$1);
return statearr_97295;
})();if(inst_97255__$1)
{var statearr_97296_97322 = state_97281__$1;(statearr_97296_97322[1] = 10);
} else
{var statearr_97297_97323 = state_97281__$1;(statearr_97297_97323[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 9))
{var inst_97274 = (state_97281[2]);var state_97281__$1 = state_97281;var statearr_97298_97324 = state_97281__$1;(statearr_97298_97324[2] = inst_97274);
(statearr_97298_97324[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 10))
{var inst_97255 = (state_97281[13]);var inst_97257 = cljs.core.chunked_seq_QMARK_.call(null,inst_97255);var state_97281__$1 = state_97281;if(inst_97257)
{var statearr_97299_97325 = state_97281__$1;(statearr_97299_97325[1] = 13);
} else
{var statearr_97300_97326 = state_97281__$1;(statearr_97300_97326[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 11))
{var state_97281__$1 = state_97281;var statearr_97301_97327 = state_97281__$1;(statearr_97301_97327[2] = null);
(statearr_97301_97327[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 12))
{var inst_97272 = (state_97281[2]);var state_97281__$1 = state_97281;var statearr_97302_97328 = state_97281__$1;(statearr_97302_97328[2] = inst_97272);
(statearr_97302_97328[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 13))
{var inst_97255 = (state_97281[13]);var inst_97259 = cljs.core.chunk_first.call(null,inst_97255);var inst_97260 = cljs.core.chunk_rest.call(null,inst_97255);var inst_97261 = cljs.core.count.call(null,inst_97259);var inst_97242 = inst_97260;var inst_97243 = inst_97259;var inst_97244 = inst_97261;var inst_97245 = 0;var state_97281__$1 = (function (){var statearr_97303 = state_97281;(statearr_97303[7] = inst_97244);
(statearr_97303[8] = inst_97243);
(statearr_97303[9] = inst_97242);
(statearr_97303[10] = inst_97245);
return statearr_97303;
})();var statearr_97304_97329 = state_97281__$1;(statearr_97304_97329[2] = null);
(statearr_97304_97329[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 14))
{var inst_97255 = (state_97281[13]);var inst_97264 = cljs.core.first.call(null,inst_97255);var inst_97265 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_97264);var inst_97266 = cljs.core.next.call(null,inst_97255);var inst_97242 = inst_97266;var inst_97243 = null;var inst_97244 = 0;var inst_97245 = 0;var state_97281__$1 = (function (){var statearr_97305 = state_97281;(statearr_97305[7] = inst_97244);
(statearr_97305[8] = inst_97243);
(statearr_97305[9] = inst_97242);
(statearr_97305[14] = inst_97265);
(statearr_97305[10] = inst_97245);
return statearr_97305;
})();var statearr_97306_97330 = state_97281__$1;(statearr_97306_97330[2] = null);
(statearr_97306_97330[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97282 === 15))
{var inst_97269 = (state_97281[2]);var state_97281__$1 = state_97281;var statearr_97307_97331 = state_97281__$1;(statearr_97307_97331[2] = inst_97269);
(statearr_97307_97331[1] = 12);
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
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_97311 = (new Array(15));(statearr_97311[0] = state_machine__16761__auto__);
(statearr_97311[1] = 1);
return statearr_97311;
});
var state_machine__16761__auto____1 = (function (state_97281){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_97281);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e97312){if((e97312 instanceof Object))
{var ex__16764__auto__ = e97312;var statearr_97313_97332 = state_97281;(statearr_97313_97332[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e97312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__97333 = state_97281;
state_97281 = G__97333;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_97281){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_97281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_97314 = f__16831__auto__.call(null);(statearr_97314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___97315);
return statearr_97314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__97338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__97339 = null;var count__97340 = 0;var i__97341 = 0;while(true){
if((i__97341 < count__97340))
{var message = cljs.core._nth.call(null,chunk__97339,i__97341);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__97342 = seq__97338;
var G__97343 = chunk__97339;
var G__97344 = count__97340;
var G__97345 = (i__97341 + 1);
seq__97338 = G__97342;
chunk__97339 = G__97343;
count__97340 = G__97344;
i__97341 = G__97345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__97338);if(temp__4092__auto__)
{var seq__97338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97338__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__97338__$1);{
var G__97346 = cljs.core.chunk_rest.call(null,seq__97338__$1);
var G__97347 = c__14546__auto__;
var G__97348 = cljs.core.count.call(null,c__14546__auto__);
var G__97349 = 0;
seq__97338 = G__97346;
chunk__97339 = G__97347;
count__97340 = G__97348;
i__97341 = G__97349;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__97338__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__97350 = cljs.core.next.call(null,seq__97338__$1);
var G__97351 = null;
var G__97352 = 0;
var G__97353 = 0;
seq__97338 = G__97350;
chunk__97339 = G__97351;
count__97340 = G__97352;
i__97341 = G__97353;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__97358){var vec__97359 = p__97358;var name = cljs.core.nth.call(null,vec__97359,0,null);var paths = cljs.core.nth.call(null,vec__97359,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__97360){var vec__97361 = p__97360;var k = cljs.core.nth.call(null,vec__97361,0,null);var v = cljs.core.nth.call(null,vec__97361,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__97362){var map__97368 = p__97362;var map__97368__$1 = ((cljs.core.seq_QMARK_.call(null,map__97368))?cljs.core.apply.call(null,cljs.core.hash_map,map__97368):map__97368);var focus = cljs.core.get.call(null,map__97368__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__97368__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__97369 = cljs.core.seq.call(null,init_messages__$1);var chunk__97370 = null;var count__97371 = 0;var i__97372 = 0;while(true){
if((i__97372 < count__97371))
{var message = cljs.core._nth.call(null,chunk__97370,i__97372);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__97373 = seq__97369;
var G__97374 = chunk__97370;
var G__97375 = count__97371;
var G__97376 = (i__97372 + 1);
seq__97369 = G__97373;
chunk__97370 = G__97374;
count__97371 = G__97375;
i__97372 = G__97376;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__97369);if(temp__4092__auto__)
{var seq__97369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97369__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__97369__$1);{
var G__97377 = cljs.core.chunk_rest.call(null,seq__97369__$1);
var G__97378 = c__14546__auto__;
var G__97379 = cljs.core.count.call(null,c__14546__auto__);
var G__97380 = 0;
seq__97369 = G__97377;
chunk__97370 = G__97378;
count__97371 = G__97379;
i__97372 = G__97380;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__97369__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__97381 = cljs.core.next.call(null,seq__97369__$1);
var G__97382 = null;
var G__97383 = 0;
var G__97384 = 0;
seq__97369 = G__97381;
chunk__97370 = G__97382;
count__97371 = G__97383;
i__97372 = G__97384;
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
begin = function(app,p__97362){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__97362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__16830__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_97413){var state_val_97414 = (state_97413[1]);if((state_val_97414 === 4))
{var inst_97407 = (state_97413[2]);var inst_97408 = foundation.app.effect.call(null,inst_97407,input);var state_97413__$1 = (function (){var statearr_97415 = state_97413;(statearr_97415[7] = inst_97408);
return statearr_97415;
})();var statearr_97416_97425 = state_97413__$1;(statearr_97416_97425[2] = null);
(statearr_97416_97425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_97414 === 3))
{var inst_97411 = (state_97413[2]);var state_97413__$1 = state_97413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97413__$1,inst_97411);
} else
{if((state_val_97414 === 2))
{var state_97413__$1 = state_97413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97413__$1,4,output);
} else
{if((state_val_97414 === 1))
{var state_97413__$1 = state_97413;var statearr_97417_97426 = state_97413__$1;(statearr_97417_97426[2] = null);
(statearr_97417_97426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_97421 = (new Array(8));(statearr_97421[0] = state_machine__16761__auto__);
(statearr_97421[1] = 1);
return statearr_97421;
});
var state_machine__16761__auto____1 = (function (state_97413){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_97413);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e97422){if((e97422 instanceof Object))
{var ex__16764__auto__ = e97422;var statearr_97423_97427 = state_97413;(statearr_97423_97427[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e97422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__97428 = state_97413;
state_97413 = G__97428;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_97413){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_97413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_97424 = f__16831__auto__.call(null);(statearr_97424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto__);
return statearr_97424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
}));
return c__16830__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__97433 = cljs.core.seq.call(null,script);var chunk__97434 = null;var count__97435 = 0;var i__97436 = 0;while(true){
if((i__97436 < count__97435))
{var message = cljs.core._nth.call(null,chunk__97434,i__97436);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__97437 = seq__97433;
var G__97438 = chunk__97434;
var G__97439 = count__97435;
var G__97440 = (i__97436 + 1);
seq__97433 = G__97437;
chunk__97434 = G__97438;
count__97435 = G__97439;
i__97436 = G__97440;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__97433);if(temp__4092__auto__)
{var seq__97433__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97433__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__97433__$1);{
var G__97441 = cljs.core.chunk_rest.call(null,seq__97433__$1);
var G__97442 = c__14546__auto__;
var G__97443 = cljs.core.count.call(null,c__14546__auto__);
var G__97444 = 0;
seq__97433 = G__97441;
chunk__97434 = G__97442;
count__97435 = G__97443;
i__97436 = G__97444;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__97433__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__97445 = cljs.core.next.call(null,seq__97433__$1);
var G__97446 = null;
var G__97447 = 0;
var G__97448 = 0;
seq__97433 = G__97445;
chunk__97434 = G__97446;
count__97435 = G__97447;
i__97436 = G__97448;
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
foundation.app.depends = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("depends",(function (dm,graph){return cljs.core.first.call(null,cljs.core.keys.call(null,dm));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__97449,graph){var map__97450 = p__97449;var map__97450__$1 = ((cljs.core.seq_QMARK_.call(null,map__97450))?cljs.core.apply.call(null,cljs.core.hash_map,map__97450):map__97450);var transform = cljs.core.get.call(null,map__97450__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__97451 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__97451,0,null);var path = cljs.core.nth.call(null,vec__97451,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__97454,graph){var map__97455 = p__97454;var map__97455__$1 = ((cljs.core.seq_QMARK_.call(null,map__97455))?cljs.core.apply.call(null,cljs.core.hash_map,map__97455):map__97455);var derives = cljs.core.get.call(null,map__97455__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__97456 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__97456,0,null);var output_path = cljs.core.nth.call(null,vec__97456,1,null);var input_spec = cljs.core.nth.call(null,vec__97456,2,null);var input_paths__$1 = (function (){var or__13822__auto__ = (function (){var and__13810__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13810__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13810__auto__;
}
})();if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__97452_SHARP_,p2__97453_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__97452_SHARP_,output_path,p2__97453_SHARP_);
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
}),(function (){var or__13822__auto__ = new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return foundation.app.data.dependency.graph.call(null);
}
})(),foundation.app.dispatches);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__97458 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__97458,0,null);var large = cljs.core.nth.call(null,vec__97458,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__97459_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__97459_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__97460){var map__97463 = p__97460;var map__97463__$1 = ((cljs.core.seq_QMARK_.call(null,map__97463))?cljs.core.apply.call(null,cljs.core.hash_map,map__97463):map__97463);var state = map__97463__$1;var change = cljs.core.get.call(null,map__97463__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__97463__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__97464 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__97464__$1 = ((cljs.core.seq_QMARK_.call(null,map__97464))?cljs.core.apply.call(null,cljs.core.hash_map,map__97464):map__97464);var state__$1 = map__97464__$1;var processed_inputs = cljs.core.get.call(null,map__97464__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__97464__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__97464__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14515__auto__ = (function iter__97469(s__97470){return (new cljs.core.LazySeq(null,(function (){var s__97470__$1 = s__97470;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97470__$1);if(temp__4092__auto__)
{var s__97470__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97470__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97470__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97472 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97471 = 0;while(true){
if((i__97471 < size__14514__auto__))
{var dval = cljs.core._nth.call(null,c__14513__auto__,i__97471);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__97472,cljs.core.get.call(null,dispatches,dval));
{
var G__97473 = (i__97471 + 1);
i__97471 = G__97473;
continue;
}
} else
{{
var G__97474 = (i__97471 + 1);
i__97471 = G__97474;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97472),iter__97469.call(null,cljs.core.chunk_rest.call(null,s__97470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97472),null);
}
} else
{var dval = cljs.core.first.call(null,s__97470__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__97469.call(null,cljs.core.rest.call(null,s__97470__$2)));
} else
{{
var G__97475 = cljs.core.rest.call(null,s__97470__$2);
s__97470__$1 = G__97475;
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
});return iter__14515__auto__.call(null,cljs.core.keys.call(null,dispatches));
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
update_state.cljs$lang$applyTo = (function (arglist__97476){
var state = cljs.core.first(arglist__97476);
arglist__97476 = cljs.core.next(arglist__97476);
var path = cljs.core.first(arglist__97476);
arglist__97476 = cljs.core.next(arglist__97476);
var f = cljs.core.first(arglist__97476);
var args = cljs.core.rest(arglist__97476);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__97477){var map__97480 = p__97477;var map__97480__$1 = ((cljs.core.seq_QMARK_.call(null,map__97480))?cljs.core.apply.call(null,cljs.core.hash_map,map__97480):map__97480);var state = map__97480__$1;var context = cljs.core.get.call(null,map__97480__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__97480__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__97481 = message;var map__97481__$1 = ((cljs.core.seq_QMARK_.call(null,map__97481))?cljs.core.apply.call(null,cljs.core.hash_map,map__97481):map__97481);var type = cljs.core.get.call(null,map__97481__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__97481__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__97483,input_paths){var map__97485 = p__97483;var map__97485__$1 = ((cljs.core.seq_QMARK_.call(null,map__97485))?cljs.core.apply.call(null,cljs.core.hash_map,map__97485):map__97485);var state = map__97485__$1;var context = cljs.core.get.call(null,map__97485__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__97482_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__97482_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__97486){var map__97494 = p__97486;var map__97494__$1 = ((cljs.core.seq_QMARK_.call(null,map__97494))?cljs.core.apply.call(null,cljs.core.hash_map,map__97494):map__97494);var state = map__97494__$1;var context = cljs.core.get.call(null,map__97494__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__97495,p__97496){var map__97497 = p__97495;var map__97497__$1 = ((cljs.core.seq_QMARK_.call(null,map__97497))?cljs.core.apply.call(null,cljs.core.hash_map,map__97497):map__97497);var state__$1 = map__97497__$1;var change = cljs.core.get.call(null,map__97497__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__97498 = p__97496;var vec__97499 = cljs.core.nth.call(null,vec__97498,0,null);var input_paths = cljs.core.nth.call(null,vec__97499,0,null);var output_path = cljs.core.nth.call(null,vec__97499,1,null);var ispec = cljs.core.nth.call(null,vec__97499,2,null);var derive = vec__97499;var derive_fn = cljs.core.nth.call(null,vec__97498,1,null);var vec__97500 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__97500,0,null);var arg_names = cljs.core.nth.call(null,vec__97500,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__97501){var map__97509 = p__97501;var map__97509__$1 = ((cljs.core.seq_QMARK_.call(null,map__97509))?cljs.core.apply.call(null,cljs.core.hash_map,map__97509):map__97509);var state = map__97509__$1;var context = cljs.core.get.call(null,map__97509__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__97510,p__97511){var map__97512 = p__97510;var map__97512__$1 = ((cljs.core.seq_QMARK_.call(null,map__97512))?cljs.core.apply.call(null,cljs.core.hash_map,map__97512):map__97512);var state__$1 = map__97512__$1;var change = cljs.core.get.call(null,map__97512__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__97513 = p__97511;var vec__97514 = cljs.core.nth.call(null,vec__97513,0,null);var input_paths = cljs.core.nth.call(null,vec__97514,0,null);var ispec = cljs.core.nth.call(null,vec__97514,1,null);var effect = vec__97514;var effect_fn = cljs.core.nth.call(null,vec__97513,1,null);var vec__97515 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__97515,0,null);var arg_names = cljs.core.nth.call(null,vec__97515,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
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
foundation.app.App = (function (state,input,output,app_model,__meta,__extmap){
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
foundation.app.App.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14379__auto__){var self__ = this;
var this__14379__auto____$1 = this;var h__14233__auto__ = self__.__hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_imap.call(null,this__14379__auto____$1);self__.__hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14384__auto__,k__14385__auto__){var self__ = this;
var this__14384__auto____$1 = this;return cljs.core._lookup.call(null,this__14384__auto____$1,k__14385__auto__,null);
});
foundation.app.App.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14386__auto__,k97517,else__14387__auto__){var self__ = this;
var this__14386__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k97517,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k97517,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k97517,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k97517,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k97517,else__14387__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14391__auto__,k__14392__auto__,G__97516){var self__ = this;
var this__14391__auto____$1 = this;var pred__97519 = cljs.core.keyword_identical_QMARK_;var expr__97520 = k__14392__auto__;if(cljs.core.truth_(pred__97519.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__97520)))
{return (new foundation.app.App(G__97516,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__97519.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__97520)))
{return (new foundation.app.App(self__.state,G__97516,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__97519.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__97520)))
{return (new foundation.app.App(self__.state,self__.input,G__97516,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__97519.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__97520)))
{return (new foundation.app.App(self__.state,self__.input,self__.output,G__97516,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14392__auto__,G__97516),null));
}
}
}
}
});
foundation.app.App.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14398__auto__,writer__14399__auto__,opts__14400__auto__){var self__ = this;
var this__14398__auto____$1 = this;var pr_pair__14401__auto__ = (function (keyval__14402__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14399__auto__,cljs.core.pr_writer,""," ","",opts__14400__auto__,keyval__14402__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14399__auto__,pr_pair__14401__auto__,"#foundation.app.App{",", ","}",opts__14400__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14389__auto__,entry__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14390__auto__))
{return cljs.core._assoc.call(null,this__14389__auto____$1,cljs.core._nth.call(null,entry__14390__auto__,0),cljs.core._nth.call(null,entry__14390__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14389__auto____$1,entry__14390__auto__);
}
});
foundation.app.App.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14396__auto__){var self__ = this;
var this__14396__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null))], null),self__.__extmap));
});
foundation.app.App.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14388__auto__){var self__ = this;
var this__14388__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.App.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14380__auto__,other__14381__auto__){var self__ = this;
var this__14380__auto____$1 = this;if(cljs.core.truth_((function (){var and__13810__auto__ = other__14381__auto__;if(cljs.core.truth_(and__13810__auto__))
{return ((this__14380__auto____$1.constructor === other__14381__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14380__auto____$1,other__14381__auto__));
} else
{return and__13810__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.App.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14383__auto__,G__97516){var self__ = this;
var this__14383__auto____$1 = this;return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,G__97516,self__.__extmap,self__.__hash));
});
foundation.app.App.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;return self__.__meta;
});
foundation.app.App.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14393__auto__,k__14394__auto__){var self__ = this;
var this__14393__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14394__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14393__auto____$1),self__.__meta),k__14394__auto__);
} else
{return (new foundation.app.App(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14394__auto__)),null));
}
});
foundation.app.App.cljs$lang$type = true;
foundation.app.App.cljs$lang$ctorPrSeq = (function (this__14418__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/App");
});
foundation.app.App.cljs$lang$ctorPrWriter = (function (this__14418__auto__,writer__14419__auto__){return cljs.core._write.call(null,writer__14419__auto__,"foundation.app/App");
});
foundation.app.__GT_App = (function __GT_App(state,input,output,app_model){return (new foundation.app.App(state,input,output,app_model));
});
foundation.app.map__GT_App = (function map__GT_App(G__97518){return (new foundation.app.App(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__97518),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__97518),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__97518),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__97518),null,cljs.core.dissoc.call(null,G__97518,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.App(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__97522_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__97522_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__97523){var map__97525 = p__97523;var map__97525__$1 = ((cljs.core.seq_QMARK_.call(null,map__97525))?cljs.core.apply.call(null,cljs.core.hash_map,map__97525):map__97525);var init_messages = cljs.core.get.call(null,map__97525__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__97525__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.app_model.renderer.call(null,root_id,foundation.app.app_model.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__97523 = null;if (arguments.length > 1) {
  p__97523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__97523);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__97526){
var root_id = cljs.core.first(arglist__97526);
var p__97523 = cljs.core.rest(arglist__97526);
return create_app__delegate(root_id,p__97523);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;

//# sourceMappingURL=app.js.map