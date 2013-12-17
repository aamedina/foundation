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
var G__378900__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__378900 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__378900__delegate.call(this,k,args);};
G__378900.cljs$lang$maxFixedArity = 1;
G__378900.cljs$lang$applyTo = (function (arglist__378901){
var k = cljs.core.first(arglist__378901);
var args = cljs.core.rest(arglist__378901);
return G__378900__delegate(k,args);
});
G__378900.cljs$core$IFn$_invoke$arity$variadic = G__378900__delegate;
return G__378900;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14821__auto__,method_table__14817__auto__,prefer_table__14818__auto__,method_cache__14819__auto__,cached_hierarchy__14820__auto__));
})();
foundation.app.filter_changes = (function filter_changes(p__378902,changes){var map__378906 = p__378902;var map__378906__$1 = ((cljs.core.seq_QMARK_.call(null,map__378906))?cljs.core.apply.call(null,cljs.core.hash_map,map__378906):map__378906);var processed_inputs = cljs.core.get.call(null,map__378906__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__378907){var vec__378908 = p__378907;var k = cljs.core.nth.call(null,vec__378908,0,null);var v = cljs.core.nth.call(null,vec__378908,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__378915){var vec__378916 = p__378915;var k = cljs.core.nth.call(null,vec__378916,0,null);var v = cljs.core.nth.call(null,vec__378916,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__378917){var vec__378918 = p__378917;var k = cljs.core.nth.call(null,vec__378918,0,null);var v = cljs.core.nth.call(null,vec__378918,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__378919){var vec__378920 = p__378919;var k = cljs.core.nth.call(null,vec__378920,0,null);var v = cljs.core.nth.call(null,vec__378920,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__378967){var vec__378968 = p__378967;var k = cljs.core.nth.call(null,vec__378968,0,null);var v = cljs.core.nth.call(null,vec__378968,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14677__auto__ = (function iter__378969(s__378970){return (new cljs.core.LazySeq(null,(function (){var s__378970__$1 = s__378970;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378970__$1);if(temp__4092__auto__)
{var s__378970__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__378970__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378970__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378972 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378971 = 0;while(true){
if((i__378971 < size__14676__auto__))
{var vec__378987 = cljs.core._nth.call(null,c__14675__auto__,i__378971);var path = cljs.core.nth.call(null,vec__378987,0,null);var arg = cljs.core.nth.call(null,vec__378987,1,null);cljs.core.chunk_append.call(null,b__378972,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__378993 = data_model__$1;if(G__378993)
{var bit__14610__auto__ = (G__378993.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14610__auto__) || (G__378993.cljs$core$ILookup$))
{return true;
} else
{if((!G__378993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__378993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__378993);
}
})())
{var data_model_k__378992 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__378992,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__379001 = cljs.core.rest.call(null,ks);
var G__379002 = cljs.core.get.call(null,v,k,v);
var G__379003 = ret;
ks = G__379001;
data_model__$1 = G__379002;
ret = G__379003;
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
var G__379004 = (i__378971 + 1);
i__378971 = G__379004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378972),iter__378969.call(null,cljs.core.chunk_rest.call(null,s__378970__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378972),null);
}
} else
{var vec__378994 = cljs.core.first.call(null,s__378970__$2);var path = cljs.core.nth.call(null,vec__378994,0,null);var arg = cljs.core.nth.call(null,vec__378994,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__379000 = data_model__$1;if(G__379000)
{var bit__14610__auto__ = (G__379000.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14610__auto__) || (G__379000.cljs$core$ILookup$))
{return true;
} else
{if((!G__379000.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__379000);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__379000);
}
})())
{var data_model_k__378999 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__378999,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__379005 = cljs.core.rest.call(null,ks);
var G__379006 = cljs.core.get.call(null,v,k,v);
var G__379007 = ret;
ks = G__379005;
data_model__$1 = G__379006;
ret = G__379007;
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
})(),iter__378969.call(null,cljs.core.rest.call(null,s__378970__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__379008){var map__379009 = p__379008;var map__379009__$1 = ((cljs.core.seq_QMARK_.call(null,map__379009))?cljs.core.apply.call(null,cljs.core.hash_map,map__379009):map__379009);var input_paths = cljs.core.get.call(null,map__379009__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__379009__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__18289__auto___379064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_379052){var state_val_379053 = (state_379052[1]);if((state_val_379053 === 4))
{var inst_379040 = (state_379052[2]);var inst_379041 = cljs.core.deref.call(null,app_model);var inst_379042 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_379040);var inst_379043 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_379042);var inst_379044 = foundation.app.tree.t.call(null,inst_379041);var inst_379045 = foundation.app.tree.since_t.call(null,inst_379043,inst_379044);var inst_379046 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_379047 = render_fn.call(null,inst_379045,inst_379046);var state_379052__$1 = (function (){var statearr_379054 = state_379052;(statearr_379054[7] = inst_379047);
return statearr_379054;
})();var statearr_379055_379065 = state_379052__$1;(statearr_379055_379065[2] = null);
(statearr_379055_379065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379053 === 3))
{var inst_379050 = (state_379052[2]);var state_379052__$1 = state_379052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379052__$1,inst_379050);
} else
{if((state_val_379053 === 2))
{var inst_379038 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_379052__$1 = state_379052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379052__$1,4,inst_379038);
} else
{if((state_val_379053 === 1))
{var state_379052__$1 = state_379052;var statearr_379056_379066 = state_379052__$1;(statearr_379056_379066[2] = null);
(statearr_379056_379066[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_379060 = [null,null,null,null,null,null,null,null];(statearr_379060[0] = state_machine__18220__auto__);
(statearr_379060[1] = 1);
return statearr_379060;
});
var state_machine__18220__auto____1 = (function (state_379052){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_379052);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e379061){if((e379061 instanceof Object))
{var ex__18223__auto__ = e379061;var statearr_379062_379067 = state_379052;(statearr_379062_379067[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e379061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__379068 = state_379052;
state_379052 = G__379068;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_379052){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_379052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_379063 = f__18290__auto__.call(null);(statearr_379063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___379064);
return statearr_379063;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__379070 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__379070))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__379070))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__18289__auto___379235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_379201){var state_val_379202 = (state_379201[1]);if((state_val_379202 === 1))
{var state_379201__$1 = state_379201;var statearr_379203_379236 = state_379201__$1;(statearr_379203_379236[2] = null);
(statearr_379203_379236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 2))
{var state_379201__$1 = state_379201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379201__$1,4,input_queue__$1);
} else
{if((state_val_379202 === 3))
{var inst_379199 = (state_379201[2]);var state_379201__$1 = state_379201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379201__$1,inst_379199);
} else
{if((state_val_379202 === 4))
{var inst_379155 = (state_379201[2]);var inst_379160 = foundation.app.pre_process.call(null,inst_379155);var inst_379161 = cljs.core.seq.call(null,inst_379160);var inst_379162 = inst_379161;var inst_379163 = null;var inst_379164 = 0;var inst_379165 = 0;var state_379201__$1 = (function (){var statearr_379204 = state_379201;(statearr_379204[7] = inst_379165);
(statearr_379204[8] = inst_379162);
(statearr_379204[9] = inst_379164);
(statearr_379204[10] = inst_379163);
return statearr_379204;
})();var statearr_379205_379237 = state_379201__$1;(statearr_379205_379237[2] = null);
(statearr_379205_379237[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 5))
{var inst_379165 = (state_379201[7]);var inst_379164 = (state_379201[9]);var inst_379167 = (inst_379165 < inst_379164);var inst_379168 = inst_379167;var state_379201__$1 = state_379201;if(cljs.core.truth_(inst_379168))
{var statearr_379209_379238 = state_379201__$1;(statearr_379209_379238[1] = 7);
} else
{var statearr_379210_379239 = state_379201__$1;(statearr_379210_379239[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 6))
{var inst_379196 = (state_379201[2]);var state_379201__$1 = (function (){var statearr_379211 = state_379201;(statearr_379211[11] = inst_379196);
return statearr_379211;
})();var statearr_379212_379240 = state_379201__$1;(statearr_379212_379240[2] = null);
(statearr_379212_379240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 7))
{var inst_379165 = (state_379201[7]);var inst_379162 = (state_379201[8]);var inst_379164 = (state_379201[9]);var inst_379163 = (state_379201[10]);var inst_379170 = cljs.core._nth.call(null,inst_379163,inst_379165);var inst_379171 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_379170);var inst_379172 = (inst_379165 + 1);var tmp379206 = inst_379162;var tmp379207 = inst_379164;var tmp379208 = inst_379163;var inst_379162__$1 = tmp379206;var inst_379163__$1 = tmp379208;var inst_379164__$1 = tmp379207;var inst_379165__$1 = inst_379172;var state_379201__$1 = (function (){var statearr_379213 = state_379201;(statearr_379213[7] = inst_379165__$1);
(statearr_379213[12] = inst_379171);
(statearr_379213[8] = inst_379162__$1);
(statearr_379213[9] = inst_379164__$1);
(statearr_379213[10] = inst_379163__$1);
return statearr_379213;
})();var statearr_379214_379241 = state_379201__$1;(statearr_379214_379241[2] = null);
(statearr_379214_379241[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 8))
{var inst_379175 = (state_379201[13]);var inst_379162 = (state_379201[8]);var inst_379175__$1 = cljs.core.seq.call(null,inst_379162);var state_379201__$1 = (function (){var statearr_379215 = state_379201;(statearr_379215[13] = inst_379175__$1);
return statearr_379215;
})();if(inst_379175__$1)
{var statearr_379216_379242 = state_379201__$1;(statearr_379216_379242[1] = 10);
} else
{var statearr_379217_379243 = state_379201__$1;(statearr_379217_379243[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 9))
{var inst_379194 = (state_379201[2]);var state_379201__$1 = state_379201;var statearr_379218_379244 = state_379201__$1;(statearr_379218_379244[2] = inst_379194);
(statearr_379218_379244[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 10))
{var inst_379175 = (state_379201[13]);var inst_379177 = cljs.core.chunked_seq_QMARK_.call(null,inst_379175);var state_379201__$1 = state_379201;if(inst_379177)
{var statearr_379219_379245 = state_379201__$1;(statearr_379219_379245[1] = 13);
} else
{var statearr_379220_379246 = state_379201__$1;(statearr_379220_379246[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 11))
{var state_379201__$1 = state_379201;var statearr_379221_379247 = state_379201__$1;(statearr_379221_379247[2] = null);
(statearr_379221_379247[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 12))
{var inst_379192 = (state_379201[2]);var state_379201__$1 = state_379201;var statearr_379222_379248 = state_379201__$1;(statearr_379222_379248[2] = inst_379192);
(statearr_379222_379248[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 13))
{var inst_379175 = (state_379201[13]);var inst_379179 = cljs.core.chunk_first.call(null,inst_379175);var inst_379180 = cljs.core.chunk_rest.call(null,inst_379175);var inst_379181 = cljs.core.count.call(null,inst_379179);var inst_379162 = inst_379180;var inst_379163 = inst_379179;var inst_379164 = inst_379181;var inst_379165 = 0;var state_379201__$1 = (function (){var statearr_379223 = state_379201;(statearr_379223[7] = inst_379165);
(statearr_379223[8] = inst_379162);
(statearr_379223[9] = inst_379164);
(statearr_379223[10] = inst_379163);
return statearr_379223;
})();var statearr_379224_379249 = state_379201__$1;(statearr_379224_379249[2] = null);
(statearr_379224_379249[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 14))
{var inst_379175 = (state_379201[13]);var inst_379184 = cljs.core.first.call(null,inst_379175);var inst_379185 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_379184);var inst_379186 = cljs.core.next.call(null,inst_379175);var inst_379162 = inst_379186;var inst_379163 = null;var inst_379164 = 0;var inst_379165 = 0;var state_379201__$1 = (function (){var statearr_379225 = state_379201;(statearr_379225[14] = inst_379185);
(statearr_379225[7] = inst_379165);
(statearr_379225[8] = inst_379162);
(statearr_379225[9] = inst_379164);
(statearr_379225[10] = inst_379163);
return statearr_379225;
})();var statearr_379226_379250 = state_379201__$1;(statearr_379226_379250[2] = null);
(statearr_379226_379250[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379202 === 15))
{var inst_379189 = (state_379201[2]);var state_379201__$1 = state_379201;var statearr_379227_379251 = state_379201__$1;(statearr_379227_379251[2] = inst_379189);
(statearr_379227_379251[1] = 12);
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
var state_machine__18220__auto____0 = (function (){var statearr_379231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_379231[0] = state_machine__18220__auto__);
(statearr_379231[1] = 1);
return statearr_379231;
});
var state_machine__18220__auto____1 = (function (state_379201){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_379201);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e379232){if((e379232 instanceof Object))
{var ex__18223__auto__ = e379232;var statearr_379233_379252 = state_379201;(statearr_379233_379252[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e379232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__379253 = state_379201;
state_379201 = G__379253;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_379201){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_379201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_379234 = f__18290__auto__.call(null);(statearr_379234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___379235);
return statearr_379234;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__379258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__379259 = null;var count__379260 = 0;var i__379261 = 0;while(true){
if((i__379261 < count__379260))
{var message = cljs.core._nth.call(null,chunk__379259,i__379261);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__379262 = seq__379258;
var G__379263 = chunk__379259;
var G__379264 = count__379260;
var G__379265 = (i__379261 + 1);
seq__379258 = G__379262;
chunk__379259 = G__379263;
count__379260 = G__379264;
i__379261 = G__379265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379258);if(temp__4092__auto__)
{var seq__379258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379258__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379258__$1);{
var G__379266 = cljs.core.chunk_rest.call(null,seq__379258__$1);
var G__379267 = c__14708__auto__;
var G__379268 = cljs.core.count.call(null,c__14708__auto__);
var G__379269 = 0;
seq__379258 = G__379266;
chunk__379259 = G__379267;
count__379260 = G__379268;
i__379261 = G__379269;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__379258__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__379270 = cljs.core.next.call(null,seq__379258__$1);
var G__379271 = null;
var G__379272 = 0;
var G__379273 = 0;
seq__379258 = G__379270;
chunk__379259 = G__379271;
count__379260 = G__379272;
i__379261 = G__379273;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__379278){var vec__379279 = p__379278;var name = cljs.core.nth.call(null,vec__379279,0,null);var paths = cljs.core.nth.call(null,vec__379279,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__379280){var vec__379281 = p__379280;var k = cljs.core.nth.call(null,vec__379281,0,null);var v = cljs.core.nth.call(null,vec__379281,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__379282){var map__379288 = p__379282;var map__379288__$1 = ((cljs.core.seq_QMARK_.call(null,map__379288))?cljs.core.apply.call(null,cljs.core.hash_map,map__379288):map__379288);var focus = cljs.core.get.call(null,map__379288__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__379288__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__379289 = cljs.core.seq.call(null,init_messages__$1);var chunk__379290 = null;var count__379291 = 0;var i__379292 = 0;while(true){
if((i__379292 < count__379291))
{var message = cljs.core._nth.call(null,chunk__379290,i__379292);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__379293 = seq__379289;
var G__379294 = chunk__379290;
var G__379295 = count__379291;
var G__379296 = (i__379292 + 1);
seq__379289 = G__379293;
chunk__379290 = G__379294;
count__379291 = G__379295;
i__379292 = G__379296;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379289);if(temp__4092__auto__)
{var seq__379289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379289__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379289__$1);{
var G__379297 = cljs.core.chunk_rest.call(null,seq__379289__$1);
var G__379298 = c__14708__auto__;
var G__379299 = cljs.core.count.call(null,c__14708__auto__);
var G__379300 = 0;
seq__379289 = G__379297;
chunk__379290 = G__379298;
count__379291 = G__379299;
i__379292 = G__379300;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__379289__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__379301 = cljs.core.next.call(null,seq__379289__$1);
var G__379302 = null;
var G__379303 = 0;
var G__379304 = 0;
seq__379289 = G__379301;
chunk__379290 = G__379302;
count__379291 = G__379303;
i__379292 = G__379304;
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
begin = function(app,p__379282){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__379282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var last_message = cljs.core.atom.call(null,null);var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_379365){var state_val_379366 = (state_379365[1]);if((state_val_379366 === 7))
{var inst_379360 = (state_379365[2]);var state_379365__$1 = (function (){var statearr_379367 = state_379365;(statearr_379367[7] = inst_379360);
return statearr_379367;
})();var statearr_379368_379383 = state_379365__$1;(statearr_379368_379383[2] = null);
(statearr_379368_379383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379366 === 6))
{var inst_379346 = (state_379365[8]);var inst_379351 = cljs.core.reset_BANG_.call(null,last_message,inst_379346);var inst_379352 = new cljs.core.Keyword(null,"dispatch","dispatch",1298675692).cljs$core$IFn$_invoke$arity$1(inst_379346);var inst_379353 = cljs.core.get_method.call(null,foundation.app.effect,inst_379352);var inst_379354 = cljs.core.dissoc.call(null,inst_379346,new cljs.core.Keyword(null,"dispatch","dispatch",1298675692));var inst_379355 = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(inst_379346);var inst_379356 = [inst_379354,input,inst_379355];var inst_379357 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379356,null));var inst_379358 = cljs.core.apply.call(null,inst_379353,inst_379357);var state_379365__$1 = (function (){var statearr_379369 = state_379365;(statearr_379369[9] = inst_379351);
return statearr_379369;
})();var statearr_379370_379384 = state_379365__$1;(statearr_379370_379384[2] = inst_379358);
(statearr_379370_379384[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379366 === 5))
{var state_379365__$1 = state_379365;var statearr_379371_379385 = state_379365__$1;(statearr_379371_379385[2] = null);
(statearr_379371_379385[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379366 === 4))
{var inst_379346 = (state_379365[8]);var inst_379346__$1 = (state_379365[2]);var inst_379347 = cljs.core.deref.call(null,last_message);var inst_379348 = cljs.core._EQ_.call(null,inst_379347,inst_379346__$1);var state_379365__$1 = (function (){var statearr_379372 = state_379365;(statearr_379372[8] = inst_379346__$1);
return statearr_379372;
})();if(inst_379348)
{var statearr_379373_379386 = state_379365__$1;(statearr_379373_379386[1] = 5);
} else
{var statearr_379374_379387 = state_379365__$1;(statearr_379374_379387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_379366 === 3))
{var inst_379363 = (state_379365[2]);var state_379365__$1 = state_379365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379365__$1,inst_379363);
} else
{if((state_val_379366 === 2))
{var state_379365__$1 = state_379365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379365__$1,4,output);
} else
{if((state_val_379366 === 1))
{var state_379365__$1 = state_379365;var statearr_379375_379388 = state_379365__$1;(statearr_379375_379388[2] = null);
(statearr_379375_379388[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_379379 = [null,null,null,null,null,null,null,null,null,null];(statearr_379379[0] = state_machine__18220__auto__);
(statearr_379379[1] = 1);
return statearr_379379;
});
var state_machine__18220__auto____1 = (function (state_379365){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_379365);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e379380){if((e379380 instanceof Object))
{var ex__18223__auto__ = e379380;var statearr_379381_379389 = state_379365;(statearr_379381_379389[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e379380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__379390 = state_379365;
state_379365 = G__379390;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_379365){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_379365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_379382 = f__18290__auto__.call(null);(statearr_379382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_379382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__379395 = cljs.core.seq.call(null,script);var chunk__379396 = null;var count__379397 = 0;var i__379398 = 0;while(true){
if((i__379398 < count__379397))
{var message = cljs.core._nth.call(null,chunk__379396,i__379398);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__379399 = seq__379395;
var G__379400 = chunk__379396;
var G__379401 = count__379397;
var G__379402 = (i__379398 + 1);
seq__379395 = G__379399;
chunk__379396 = G__379400;
count__379397 = G__379401;
i__379398 = G__379402;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379395);if(temp__4092__auto__)
{var seq__379395__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379395__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379395__$1);{
var G__379403 = cljs.core.chunk_rest.call(null,seq__379395__$1);
var G__379404 = c__14708__auto__;
var G__379405 = cljs.core.count.call(null,c__14708__auto__);
var G__379406 = 0;
seq__379395 = G__379403;
chunk__379396 = G__379404;
count__379397 = G__379405;
i__379398 = G__379406;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__379395__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__379407 = cljs.core.next.call(null,seq__379395__$1);
var G__379408 = null;
var G__379409 = 0;
var G__379410 = 0;
seq__379395 = G__379407;
chunk__379396 = G__379408;
count__379397 = G__379409;
i__379398 = G__379410;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__379411,graph){var map__379412 = p__379411;var map__379412__$1 = ((cljs.core.seq_QMARK_.call(null,map__379412))?cljs.core.apply.call(null,cljs.core.hash_map,map__379412):map__379412);var transform = cljs.core.get.call(null,map__379412__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__379413 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__379413,0,null);var path = cljs.core.nth.call(null,vec__379413,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__379416,graph){var map__379417 = p__379416;var map__379417__$1 = ((cljs.core.seq_QMARK_.call(null,map__379417))?cljs.core.apply.call(null,cljs.core.hash_map,map__379417):map__379417);var derives = cljs.core.get.call(null,map__379417__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__379418 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__379418,0,null);var output_path = cljs.core.nth.call(null,vec__379418,1,null);var input_spec = cljs.core.nth.call(null,vec__379418,2,null);var input_paths__$1 = (function (){var or__13979__auto__ = (function (){var and__13967__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13967__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13967__auto__;
}
})();if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__379414_SHARP_,p2__379415_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__379414_SHARP_,output_path,p2__379415_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__379420 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__379420,0,null);var large = cljs.core.nth.call(null,vec__379420,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__379421_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__379421_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__379422){var map__379425 = p__379422;var map__379425__$1 = ((cljs.core.seq_QMARK_.call(null,map__379425))?cljs.core.apply.call(null,cljs.core.hash_map,map__379425):map__379425);var state = map__379425__$1;var change = cljs.core.get.call(null,map__379425__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__379425__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__379426 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__379426__$1 = ((cljs.core.seq_QMARK_.call(null,map__379426))?cljs.core.apply.call(null,cljs.core.hash_map,map__379426):map__379426);var state__$1 = map__379426__$1;var processed_inputs = cljs.core.get.call(null,map__379426__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__379426__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__379426__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14677__auto__ = (function iter__379431(s__379432){return (new cljs.core.LazySeq(null,(function (){var s__379432__$1 = s__379432;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379432__$1);if(temp__4092__auto__)
{var s__379432__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379432__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379432__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379434 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379433 = 0;while(true){
if((i__379433 < size__14676__auto__))
{var dval = cljs.core._nth.call(null,c__14675__auto__,i__379433);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__379434,cljs.core.get.call(null,dispatches,dval));
{
var G__379435 = (i__379433 + 1);
i__379433 = G__379435;
continue;
}
} else
{{
var G__379436 = (i__379433 + 1);
i__379433 = G__379436;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379434),iter__379431.call(null,cljs.core.chunk_rest.call(null,s__379432__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379434),null);
}
} else
{var dval = cljs.core.first.call(null,s__379432__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__379431.call(null,cljs.core.rest.call(null,s__379432__$2)));
} else
{{
var G__379437 = cljs.core.rest.call(null,s__379432__$2);
s__379432__$1 = G__379437;
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
update_state.cljs$lang$applyTo = (function (arglist__379438){
var state = cljs.core.first(arglist__379438);
arglist__379438 = cljs.core.next(arglist__379438);
var path = cljs.core.first(arglist__379438);
arglist__379438 = cljs.core.next(arglist__379438);
var f = cljs.core.first(arglist__379438);
var args = cljs.core.rest(arglist__379438);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__379439){var map__379442 = p__379439;var map__379442__$1 = ((cljs.core.seq_QMARK_.call(null,map__379442))?cljs.core.apply.call(null,cljs.core.hash_map,map__379442):map__379442);var state = map__379442__$1;var context = cljs.core.get.call(null,map__379442__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__379442__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__379443 = message;var map__379443__$1 = ((cljs.core.seq_QMARK_.call(null,map__379443))?cljs.core.apply.call(null,cljs.core.hash_map,map__379443):map__379443);var type = cljs.core.get.call(null,map__379443__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__379443__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.dependents = (function dependents(p__379445){var map__379447 = p__379445;var map__379447__$1 = ((cljs.core.seq_QMARK_.call(null,map__379447))?cljs.core.apply.call(null,cljs.core.hash_map,map__379447):map__379447);var state = map__379447__$1;var context = cljs.core.get.call(null,map__379447__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__379444_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__379444_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path)));
});
foundation.app.derives_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__379448){var vec__379449 = p__379448;var dispatch_val = cljs.core.nth.call(null,vec__379449,0,null);var multifn = cljs.core.nth.call(null,vec__379449,1,null);return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,dependents),cljs.core.second.call(null,dispatch_val));
}));
foundation.app.effect_QMARK_ = cljs.core.memoize.call(null,(function (message,dependents,p__379450){var vec__379451 = p__379450;var dispatch_val = cljs.core.nth.call(null,vec__379451,0,null);var multifn = cljs.core.nth.call(null,vec__379451,1,null);return (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,dispatch_val),foundation.app.message.path.call(null,message))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,dispatch_val),foundation.app.message.type.call(null,message)));
}));
foundation.app.matching_dispatches = (function matching_dispatches(state,multifn,pred){return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__379452_SHARP_){return pred.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(state)),foundation.app.dependents.call(null,state),p1__379452_SHARP_);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147))));
});
foundation.app.derives_phase = (function derives_phase(p__379453){var map__379461 = p__379453;var map__379461__$1 = ((cljs.core.seq_QMARK_.call(null,map__379461))?cljs.core.apply.call(null,cljs.core.hash_map,map__379461):map__379461);var state = map__379461__$1;var context = cljs.core.get.call(null,map__379461__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.derives,foundation.app.derives_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__379462,p__379463){var map__379464 = p__379462;var map__379464__$1 = ((cljs.core.seq_QMARK_.call(null,map__379464))?cljs.core.apply.call(null,cljs.core.hash_map,map__379464):map__379464);var state__$1 = map__379464__$1;var change = cljs.core.get.call(null,map__379464__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__379465 = p__379463;var vec__379466 = cljs.core.nth.call(null,vec__379465,0,null);var input_paths = cljs.core.nth.call(null,vec__379466,0,null);var output_path = cljs.core.nth.call(null,vec__379466,1,null);var ispec = cljs.core.nth.call(null,vec__379466,2,null);var derive = vec__379466;var derive_fn = cljs.core.nth.call(null,vec__379465,1,null);var vec__379467 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__379467,0,null);var arg_names = cljs.core.nth.call(null,vec__379467,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dispatches);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__379468){var map__379476 = p__379468;var map__379476__$1 = ((cljs.core.seq_QMARK_.call(null,map__379476))?cljs.core.apply.call(null,cljs.core.hash_map,map__379476):map__379476);var state = map__379476__$1;var context = cljs.core.get.call(null,map__379476__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.matching_dispatches.call(null,state,foundation.app.effect,foundation.app.effect_QMARK_);if(temp__4090__auto__)
{var dispatches = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__379477,p__379478){var map__379479 = p__379477;var map__379479__$1 = ((cljs.core.seq_QMARK_.call(null,map__379479))?cljs.core.apply.call(null,cljs.core.hash_map,map__379479):map__379479);var state__$1 = map__379479__$1;var change = cljs.core.get.call(null,map__379479__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__379480 = p__379478;var vec__379481 = cljs.core.nth.call(null,vec__379480,0,null);var type = cljs.core.nth.call(null,vec__379481,0,null);var input_paths = cljs.core.nth.call(null,vec__379481,1,null);var ispec = cljs.core.nth.call(null,vec__379481,2,null);var effect = vec__379481;var vec__379482 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__379482,0,null);var arg_names = cljs.core.nth.call(null,vec__379482,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.reduce.call(null,(function (m,input){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963)], null),cljs.core.conj,input);
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14548__auto__,k379484,else__14549__auto__){var self__ = this;
var this__14548__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k379484,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k379484,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k379484,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k379484,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k379484,else__14549__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14553__auto__,k__14554__auto__,G__379483){var self__ = this;
var this__14553__auto____$1 = this;var pred__379486 = cljs.core.keyword_identical_QMARK_;var expr__379487 = k__14554__auto__;if(cljs.core.truth_(pred__379486.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__379487)))
{return (new foundation.app.Application(G__379483,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__379486.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__379487)))
{return (new foundation.app.Application(self__.state,G__379483,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__379486.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__379487)))
{return (new foundation.app.Application(self__.state,self__.input,G__379483,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__379486.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__379487)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__379483,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14554__auto__,G__379483),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14545__auto__,G__379483){var self__ = this;
var this__14545__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__379483,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__379485){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__379485),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__379485),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__379485),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__379485),null,cljs.core.dissoc.call(null,G__379485,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.memoize.call(null,(function (){return cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__379489_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__379489_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
}));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__379490){var map__379492 = p__379490;var map__379492__$1 = ((cljs.core.seq_QMARK_.call(null,map__379492))?cljs.core.apply.call(null,cljs.core.hash_map,map__379492):map__379492);var init_messages = cljs.core.get.call(null,map__379492__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__379492__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.render.renderer.call(null,root_id,foundation.app.render.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__379490 = null;if (arguments.length > 1) {
  p__379490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__379490);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__379493){
var root_id = cljs.core.first(arglist__379493);
var p__379490 = cljs.core.rest(arglist__379493);
return create_app__delegate(root_id,p__379490);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;
foundation.app.IApplication = (function (){var obj379495 = {};return obj379495;
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