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
var G__36877__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__36877 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__36877__delegate.call(this,k,args);};
G__36877.cljs$lang$maxFixedArity = 1;
G__36877.cljs$lang$applyTo = (function (arglist__36878){
var k = cljs.core.first(arglist__36878);
var args = cljs.core.rest(arglist__36878);
return G__36877__delegate(k,args);
});
G__36877.cljs$core$IFn$_invoke$arity$variadic = G__36877__delegate;
return G__36877;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
foundation.app.route_effect = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.filter_changes = (function filter_changes(p__36879,changes){var map__36883 = p__36879;var map__36883__$1 = ((cljs.core.seq_QMARK_.call(null,map__36883))?cljs.core.apply.call(null,cljs.core.hash_map,map__36883):map__36883);var processed_inputs = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__36884){var vec__36885 = p__36884;var k = cljs.core.nth.call(null,vec__36885,0,null);var v = cljs.core.nth.call(null,vec__36885,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__36892){var vec__36893 = p__36892;var k = cljs.core.nth.call(null,vec__36893,0,null);var v = cljs.core.nth.call(null,vec__36893,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__36894){var vec__36895 = p__36894;var k = cljs.core.nth.call(null,vec__36895,0,null);var v = cljs.core.nth.call(null,vec__36895,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__36896){var vec__36897 = p__36896;var k = cljs.core.nth.call(null,vec__36897,0,null);var v = cljs.core.nth.call(null,vec__36897,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__36936){var vec__36937 = p__36936;var k = cljs.core.nth.call(null,vec__36937,0,null);var v = cljs.core.nth.call(null,vec__36937,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14514__auto__ = (function iter__36938(s__36939){return (new cljs.core.LazySeq(null,(function (){var s__36939__$1 = s__36939;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36939__$1);if(temp__4092__auto__)
{var s__36939__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36939__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__36939__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__36941 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__36940 = 0;while(true){
if((i__36940 < size__14513__auto__))
{var vec__36956 = cljs.core._nth.call(null,c__14512__auto__,i__36940);var path = cljs.core.nth.call(null,vec__36956,0,null);var arg = cljs.core.nth.call(null,vec__36956,1,null);cljs.core.chunk_append.call(null,b__36941,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__36962 = data_model__$1;if(G__36962)
{var bit__14447__auto__ = (G__36962.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__36962.cljs$core$ILookup$))
{return true;
} else
{if((!G__36962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__36962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__36962);
}
})())
{var data_model_k__36961 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__36961,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__36970 = cljs.core.rest.call(null,ks);
var G__36971 = cljs.core.get.call(null,v,k,v);
var G__36972 = ret;
ks = G__36970;
data_model__$1 = G__36971;
ret = G__36972;
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
var G__36973 = (i__36940 + 1);
i__36940 = G__36973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36941),iter__36938.call(null,cljs.core.chunk_rest.call(null,s__36939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36941),null);
}
} else
{var vec__36963 = cljs.core.first.call(null,s__36939__$2);var path = cljs.core.nth.call(null,vec__36963,0,null);var arg = cljs.core.nth.call(null,vec__36963,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__36969 = data_model__$1;if(G__36969)
{var bit__14447__auto__ = (G__36969.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__36969.cljs$core$ILookup$))
{return true;
} else
{if((!G__36969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__36969);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__36969);
}
})())
{var data_model_k__36968 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__36968,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__36974 = cljs.core.rest.call(null,ks);
var G__36975 = cljs.core.get.call(null,v,k,v);
var G__36976 = ret;
ks = G__36974;
data_model__$1 = G__36975;
ret = G__36976;
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
})(),iter__36938.call(null,cljs.core.rest.call(null,s__36939__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__36977){var map__36978 = p__36977;var map__36978__$1 = ((cljs.core.seq_QMARK_.call(null,map__36978))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);var input_paths = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__16829__auto___37033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_37021){var state_val_37022 = (state_37021[1]);if((state_val_37022 === 4))
{var inst_37009 = (state_37021[2]);var inst_37010 = cljs.core.deref.call(null,app_model);var inst_37011 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_37009);var inst_37012 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_37011);var inst_37013 = foundation.app.tree.t.call(null,inst_37010);var inst_37014 = foundation.app.tree.since_t.call(null,inst_37012,inst_37013);var inst_37015 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_37016 = render_fn.call(null,inst_37014,inst_37015);var state_37021__$1 = (function (){var statearr_37023 = state_37021;(statearr_37023[7] = inst_37016);
return statearr_37023;
})();var statearr_37024_37034 = state_37021__$1;(statearr_37024_37034[2] = null);
(statearr_37024_37034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37022 === 3))
{var inst_37019 = (state_37021[2]);var state_37021__$1 = state_37021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37021__$1,inst_37019);
} else
{if((state_val_37022 === 2))
{var inst_37007 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_37021__$1 = state_37021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37021__$1,4,inst_37007);
} else
{if((state_val_37022 === 1))
{var state_37021__$1 = state_37021;var statearr_37025_37035 = state_37021__$1;(statearr_37025_37035[2] = null);
(statearr_37025_37035[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_37029 = (new Array(8));(statearr_37029[0] = state_machine__16760__auto__);
(statearr_37029[1] = 1);
return statearr_37029;
});
var state_machine__16760__auto____1 = (function (state_37021){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_37021);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e37030){if((e37030 instanceof Object))
{var ex__16763__auto__ = e37030;var statearr_37031_37036 = state_37021;(statearr_37031_37036[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37037 = state_37021;
state_37021 = G__37037;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_37021){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_37021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_37032 = f__16830__auto__.call(null);(statearr_37032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___37033);
return statearr_37032;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__37039 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__37039))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__37039))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__16829__auto___37204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_37170){var state_val_37171 = (state_37170[1]);if((state_val_37171 === 1))
{var state_37170__$1 = state_37170;var statearr_37172_37205 = state_37170__$1;(statearr_37172_37205[2] = null);
(statearr_37172_37205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 2))
{var state_37170__$1 = state_37170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,4,input_queue__$1);
} else
{if((state_val_37171 === 3))
{var inst_37168 = (state_37170[2]);var state_37170__$1 = state_37170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37170__$1,inst_37168);
} else
{if((state_val_37171 === 4))
{var inst_37124 = (state_37170[2]);var inst_37129 = foundation.app.pre_process.call(null,inst_37124);var inst_37130 = cljs.core.seq.call(null,inst_37129);var inst_37131 = inst_37130;var inst_37132 = null;var inst_37133 = 0;var inst_37134 = 0;var state_37170__$1 = (function (){var statearr_37173 = state_37170;(statearr_37173[7] = inst_37133);
(statearr_37173[8] = inst_37134);
(statearr_37173[9] = inst_37132);
(statearr_37173[10] = inst_37131);
return statearr_37173;
})();var statearr_37174_37206 = state_37170__$1;(statearr_37174_37206[2] = null);
(statearr_37174_37206[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 5))
{var inst_37133 = (state_37170[7]);var inst_37134 = (state_37170[8]);var inst_37136 = (inst_37134 < inst_37133);var inst_37137 = inst_37136;var state_37170__$1 = state_37170;if(cljs.core.truth_(inst_37137))
{var statearr_37178_37207 = state_37170__$1;(statearr_37178_37207[1] = 7);
} else
{var statearr_37179_37208 = state_37170__$1;(statearr_37179_37208[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 6))
{var inst_37165 = (state_37170[2]);var state_37170__$1 = (function (){var statearr_37180 = state_37170;(statearr_37180[11] = inst_37165);
return statearr_37180;
})();var statearr_37181_37209 = state_37170__$1;(statearr_37181_37209[2] = null);
(statearr_37181_37209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 7))
{var inst_37133 = (state_37170[7]);var inst_37134 = (state_37170[8]);var inst_37132 = (state_37170[9]);var inst_37131 = (state_37170[10]);var inst_37139 = cljs.core._nth.call(null,inst_37132,inst_37134);var inst_37140 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_37139);var inst_37141 = (inst_37134 + 1);var tmp37175 = inst_37133;var tmp37176 = inst_37132;var tmp37177 = inst_37131;var inst_37131__$1 = tmp37177;var inst_37132__$1 = tmp37176;var inst_37133__$1 = tmp37175;var inst_37134__$1 = inst_37141;var state_37170__$1 = (function (){var statearr_37182 = state_37170;(statearr_37182[7] = inst_37133__$1);
(statearr_37182[8] = inst_37134__$1);
(statearr_37182[9] = inst_37132__$1);
(statearr_37182[10] = inst_37131__$1);
(statearr_37182[12] = inst_37140);
return statearr_37182;
})();var statearr_37183_37210 = state_37170__$1;(statearr_37183_37210[2] = null);
(statearr_37183_37210[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 8))
{var inst_37131 = (state_37170[10]);var inst_37144 = (state_37170[13]);var inst_37144__$1 = cljs.core.seq.call(null,inst_37131);var state_37170__$1 = (function (){var statearr_37184 = state_37170;(statearr_37184[13] = inst_37144__$1);
return statearr_37184;
})();if(inst_37144__$1)
{var statearr_37185_37211 = state_37170__$1;(statearr_37185_37211[1] = 10);
} else
{var statearr_37186_37212 = state_37170__$1;(statearr_37186_37212[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 9))
{var inst_37163 = (state_37170[2]);var state_37170__$1 = state_37170;var statearr_37187_37213 = state_37170__$1;(statearr_37187_37213[2] = inst_37163);
(statearr_37187_37213[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 10))
{var inst_37144 = (state_37170[13]);var inst_37146 = cljs.core.chunked_seq_QMARK_.call(null,inst_37144);var state_37170__$1 = state_37170;if(inst_37146)
{var statearr_37188_37214 = state_37170__$1;(statearr_37188_37214[1] = 13);
} else
{var statearr_37189_37215 = state_37170__$1;(statearr_37189_37215[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 11))
{var state_37170__$1 = state_37170;var statearr_37190_37216 = state_37170__$1;(statearr_37190_37216[2] = null);
(statearr_37190_37216[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 12))
{var inst_37161 = (state_37170[2]);var state_37170__$1 = state_37170;var statearr_37191_37217 = state_37170__$1;(statearr_37191_37217[2] = inst_37161);
(statearr_37191_37217[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 13))
{var inst_37144 = (state_37170[13]);var inst_37148 = cljs.core.chunk_first.call(null,inst_37144);var inst_37149 = cljs.core.chunk_rest.call(null,inst_37144);var inst_37150 = cljs.core.count.call(null,inst_37148);var inst_37131 = inst_37149;var inst_37132 = inst_37148;var inst_37133 = inst_37150;var inst_37134 = 0;var state_37170__$1 = (function (){var statearr_37192 = state_37170;(statearr_37192[7] = inst_37133);
(statearr_37192[8] = inst_37134);
(statearr_37192[9] = inst_37132);
(statearr_37192[10] = inst_37131);
return statearr_37192;
})();var statearr_37193_37218 = state_37170__$1;(statearr_37193_37218[2] = null);
(statearr_37193_37218[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 14))
{var inst_37144 = (state_37170[13]);var inst_37153 = cljs.core.first.call(null,inst_37144);var inst_37154 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_37153);var inst_37155 = cljs.core.next.call(null,inst_37144);var inst_37131 = inst_37155;var inst_37132 = null;var inst_37133 = 0;var inst_37134 = 0;var state_37170__$1 = (function (){var statearr_37194 = state_37170;(statearr_37194[14] = inst_37154);
(statearr_37194[7] = inst_37133);
(statearr_37194[8] = inst_37134);
(statearr_37194[9] = inst_37132);
(statearr_37194[10] = inst_37131);
return statearr_37194;
})();var statearr_37195_37219 = state_37170__$1;(statearr_37195_37219[2] = null);
(statearr_37195_37219[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37171 === 15))
{var inst_37158 = (state_37170[2]);var state_37170__$1 = state_37170;var statearr_37196_37220 = state_37170__$1;(statearr_37196_37220[2] = inst_37158);
(statearr_37196_37220[1] = 12);
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
var state_machine__16760__auto____0 = (function (){var statearr_37200 = (new Array(15));(statearr_37200[0] = state_machine__16760__auto__);
(statearr_37200[1] = 1);
return statearr_37200;
});
var state_machine__16760__auto____1 = (function (state_37170){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_37170);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e37201){if((e37201 instanceof Object))
{var ex__16763__auto__ = e37201;var statearr_37202_37221 = state_37170;(statearr_37202_37221[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37222 = state_37170;
state_37170 = G__37222;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_37170){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_37170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_37203 = f__16830__auto__.call(null);(statearr_37203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___37204);
return statearr_37203;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__37227 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__37228 = null;var count__37229 = 0;var i__37230 = 0;while(true){
if((i__37230 < count__37229))
{var message = cljs.core._nth.call(null,chunk__37228,i__37230);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__37231 = seq__37227;
var G__37232 = chunk__37228;
var G__37233 = count__37229;
var G__37234 = (i__37230 + 1);
seq__37227 = G__37231;
chunk__37228 = G__37232;
count__37229 = G__37233;
i__37230 = G__37234;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37227);if(temp__4092__auto__)
{var seq__37227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37227__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__37227__$1);{
var G__37235 = cljs.core.chunk_rest.call(null,seq__37227__$1);
var G__37236 = c__14545__auto__;
var G__37237 = cljs.core.count.call(null,c__14545__auto__);
var G__37238 = 0;
seq__37227 = G__37235;
chunk__37228 = G__37236;
count__37229 = G__37237;
i__37230 = G__37238;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37227__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__37239 = cljs.core.next.call(null,seq__37227__$1);
var G__37240 = null;
var G__37241 = 0;
var G__37242 = 0;
seq__37227 = G__37239;
chunk__37228 = G__37240;
count__37229 = G__37241;
i__37230 = G__37242;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__37247){var vec__37248 = p__37247;var name = cljs.core.nth.call(null,vec__37248,0,null);var paths = cljs.core.nth.call(null,vec__37248,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__37249){var vec__37250 = p__37249;var k = cljs.core.nth.call(null,vec__37250,0,null);var v = cljs.core.nth.call(null,vec__37250,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__37251){var map__37257 = p__37251;var map__37257__$1 = ((cljs.core.seq_QMARK_.call(null,map__37257))?cljs.core.apply.call(null,cljs.core.hash_map,map__37257):map__37257);var focus = cljs.core.get.call(null,map__37257__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__37257__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__37258 = cljs.core.seq.call(null,init_messages__$1);var chunk__37259 = null;var count__37260 = 0;var i__37261 = 0;while(true){
if((i__37261 < count__37260))
{var message = cljs.core._nth.call(null,chunk__37259,i__37261);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37262 = seq__37258;
var G__37263 = chunk__37259;
var G__37264 = count__37260;
var G__37265 = (i__37261 + 1);
seq__37258 = G__37262;
chunk__37259 = G__37263;
count__37260 = G__37264;
i__37261 = G__37265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37258);if(temp__4092__auto__)
{var seq__37258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37258__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__37258__$1);{
var G__37266 = cljs.core.chunk_rest.call(null,seq__37258__$1);
var G__37267 = c__14545__auto__;
var G__37268 = cljs.core.count.call(null,c__14545__auto__);
var G__37269 = 0;
seq__37258 = G__37266;
chunk__37259 = G__37267;
count__37260 = G__37268;
i__37261 = G__37269;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37258__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37270 = cljs.core.next.call(null,seq__37258__$1);
var G__37271 = null;
var G__37272 = 0;
var G__37273 = 0;
seq__37258 = G__37270;
chunk__37259 = G__37271;
count__37260 = G__37272;
i__37261 = G__37273;
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
begin = function(app,p__37251){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__37251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_37302){var state_val_37303 = (state_37302[1]);if((state_val_37303 === 4))
{var inst_37296 = (state_37302[2]);var inst_37297 = foundation.app.effect.call(null,inst_37296,input);var state_37302__$1 = (function (){var statearr_37304 = state_37302;(statearr_37304[7] = inst_37297);
return statearr_37304;
})();var statearr_37305_37314 = state_37302__$1;(statearr_37305_37314[2] = null);
(statearr_37305_37314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37303 === 3))
{var inst_37300 = (state_37302[2]);var state_37302__$1 = state_37302;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37302__$1,inst_37300);
} else
{if((state_val_37303 === 2))
{var state_37302__$1 = state_37302;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37302__$1,4,output);
} else
{if((state_val_37303 === 1))
{var state_37302__$1 = state_37302;var statearr_37306_37315 = state_37302__$1;(statearr_37306_37315[2] = null);
(statearr_37306_37315[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_37310 = (new Array(8));(statearr_37310[0] = state_machine__16760__auto__);
(statearr_37310[1] = 1);
return statearr_37310;
});
var state_machine__16760__auto____1 = (function (state_37302){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_37302);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e37311){if((e37311 instanceof Object))
{var ex__16763__auto__ = e37311;var statearr_37312_37316 = state_37302;(statearr_37312_37316[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37302);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37317 = state_37302;
state_37302 = G__37317;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_37302){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_37302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_37313 = f__16830__auto__.call(null);(statearr_37313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_37313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__37322 = cljs.core.seq.call(null,script);var chunk__37323 = null;var count__37324 = 0;var i__37325 = 0;while(true){
if((i__37325 < count__37324))
{var message = cljs.core._nth.call(null,chunk__37323,i__37325);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37326 = seq__37322;
var G__37327 = chunk__37323;
var G__37328 = count__37324;
var G__37329 = (i__37325 + 1);
seq__37322 = G__37326;
chunk__37323 = G__37327;
count__37324 = G__37328;
i__37325 = G__37329;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37322);if(temp__4092__auto__)
{var seq__37322__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37322__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__37322__$1);{
var G__37330 = cljs.core.chunk_rest.call(null,seq__37322__$1);
var G__37331 = c__14545__auto__;
var G__37332 = cljs.core.count.call(null,c__14545__auto__);
var G__37333 = 0;
seq__37322 = G__37330;
chunk__37323 = G__37331;
count__37324 = G__37332;
i__37325 = G__37333;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__37322__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__37334 = cljs.core.next.call(null,seq__37322__$1);
var G__37335 = null;
var G__37336 = 0;
var G__37337 = 0;
seq__37322 = G__37334;
chunk__37323 = G__37335;
count__37324 = G__37336;
i__37325 = G__37337;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__37338,graph){var map__37339 = p__37338;var map__37339__$1 = ((cljs.core.seq_QMARK_.call(null,map__37339))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);var transform = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__37340 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__37340,0,null);var path = cljs.core.nth.call(null,vec__37340,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__37343,graph){var map__37344 = p__37343;var map__37344__$1 = ((cljs.core.seq_QMARK_.call(null,map__37344))?cljs.core.apply.call(null,cljs.core.hash_map,map__37344):map__37344);var derives = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__37345 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__37345,0,null);var output_path = cljs.core.nth.call(null,vec__37345,1,null);var input_spec = cljs.core.nth.call(null,vec__37345,2,null);var input_paths__$1 = (function (){var or__13821__auto__ = (function (){var and__13809__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13809__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13809__auto__;
}
})();if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__37341_SHARP_,p2__37342_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__37341_SHARP_,output_path,p2__37342_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__37347 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__37347,0,null);var large = cljs.core.nth.call(null,vec__37347,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__37348_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__37348_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__37349){var map__37352 = p__37349;var map__37352__$1 = ((cljs.core.seq_QMARK_.call(null,map__37352))?cljs.core.apply.call(null,cljs.core.hash_map,map__37352):map__37352);var state = map__37352__$1;var change = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__37352__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__37353 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__37353__$1 = ((cljs.core.seq_QMARK_.call(null,map__37353))?cljs.core.apply.call(null,cljs.core.hash_map,map__37353):map__37353);var state__$1 = map__37353__$1;var processed_inputs = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14514__auto__ = (function iter__37358(s__37359){return (new cljs.core.LazySeq(null,(function (){var s__37359__$1 = s__37359;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37359__$1);if(temp__4092__auto__)
{var s__37359__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37359__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__37359__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__37361 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__37360 = 0;while(true){
if((i__37360 < size__14513__auto__))
{var dval = cljs.core._nth.call(null,c__14512__auto__,i__37360);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__37361,cljs.core.get.call(null,dispatches,dval));
{
var G__37362 = (i__37360 + 1);
i__37360 = G__37362;
continue;
}
} else
{{
var G__37363 = (i__37360 + 1);
i__37360 = G__37363;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37361),iter__37358.call(null,cljs.core.chunk_rest.call(null,s__37359__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37361),null);
}
} else
{var dval = cljs.core.first.call(null,s__37359__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__37358.call(null,cljs.core.rest.call(null,s__37359__$2)));
} else
{{
var G__37364 = cljs.core.rest.call(null,s__37359__$2);
s__37359__$1 = G__37364;
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
update_state.cljs$lang$applyTo = (function (arglist__37365){
var state = cljs.core.first(arglist__37365);
arglist__37365 = cljs.core.next(arglist__37365);
var path = cljs.core.first(arglist__37365);
arglist__37365 = cljs.core.next(arglist__37365);
var f = cljs.core.first(arglist__37365);
var args = cljs.core.rest(arglist__37365);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__37366){var map__37369 = p__37366;var map__37369__$1 = ((cljs.core.seq_QMARK_.call(null,map__37369))?cljs.core.apply.call(null,cljs.core.hash_map,map__37369):map__37369);var state = map__37369__$1;var context = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__37370 = message;var map__37370__$1 = ((cljs.core.seq_QMARK_.call(null,map__37370))?cljs.core.apply.call(null,cljs.core.hash_map,map__37370):map__37370);var type = cljs.core.get.call(null,map__37370__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__37370__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__37372,input_paths){var map__37374 = p__37372;var map__37374__$1 = ((cljs.core.seq_QMARK_.call(null,map__37374))?cljs.core.apply.call(null,cljs.core.hash_map,map__37374):map__37374);var state = map__37374__$1;var context = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__37371_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__37371_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__37375){var map__37383 = p__37375;var map__37383__$1 = ((cljs.core.seq_QMARK_.call(null,map__37383))?cljs.core.apply.call(null,cljs.core.hash_map,map__37383):map__37383);var state = map__37383__$1;var context = cljs.core.get.call(null,map__37383__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__37384,p__37385){var map__37386 = p__37384;var map__37386__$1 = ((cljs.core.seq_QMARK_.call(null,map__37386))?cljs.core.apply.call(null,cljs.core.hash_map,map__37386):map__37386);var state__$1 = map__37386__$1;var change = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__37387 = p__37385;var vec__37388 = cljs.core.nth.call(null,vec__37387,0,null);var input_paths = cljs.core.nth.call(null,vec__37388,0,null);var output_path = cljs.core.nth.call(null,vec__37388,1,null);var ispec = cljs.core.nth.call(null,vec__37388,2,null);var derive = vec__37388;var derive_fn = cljs.core.nth.call(null,vec__37387,1,null);var vec__37389 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__37389,0,null);var arg_names = cljs.core.nth.call(null,vec__37389,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__37390){var map__37398 = p__37390;var map__37398__$1 = ((cljs.core.seq_QMARK_.call(null,map__37398))?cljs.core.apply.call(null,cljs.core.hash_map,map__37398):map__37398);var state = map__37398__$1;var context = cljs.core.get.call(null,map__37398__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__37399,p__37400){var map__37401 = p__37399;var map__37401__$1 = ((cljs.core.seq_QMARK_.call(null,map__37401))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);var state__$1 = map__37401__$1;var change = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__37402 = p__37400;var vec__37403 = cljs.core.nth.call(null,vec__37402,0,null);var input_paths = cljs.core.nth.call(null,vec__37403,0,null);var ispec = cljs.core.nth.call(null,vec__37403,1,null);var effect = vec__37403;var effect_fn = cljs.core.nth.call(null,vec__37402,1,null);var vec__37404 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__37404,0,null);var arg_names = cljs.core.nth.call(null,vec__37404,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k37406,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k37406,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37406,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37406,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k37406,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k37406,else__14386__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__37405){var self__ = this;
var this__14390__auto____$1 = this;var pred__37408 = cljs.core.keyword_identical_QMARK_;var expr__37409 = k__14391__auto__;if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__37409)))
{return (new foundation.app.Application(G__37405,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__37409)))
{return (new foundation.app.Application(self__.state,G__37405,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__37409)))
{return (new foundation.app.Application(self__.state,self__.input,G__37405,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__37409)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__37405,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__37405),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__37405){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__37405,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__37407){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__37407),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__37407),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__37407),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__37407),null,cljs.core.dissoc.call(null,G__37407,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__37411_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__37411_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__37412){var map__37414 = p__37412;var map__37414__$1 = ((cljs.core.seq_QMARK_.call(null,map__37414))?cljs.core.apply.call(null,cljs.core.hash_map,map__37414):map__37414);var init_messages = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__37414__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.app_model.renderer.call(null,root_id,foundation.app.app_model.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__37412 = null;if (arguments.length > 1) {
  p__37412 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__37412);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__37415){
var root_id = cljs.core.first(arglist__37415);
var p__37412 = cljs.core.rest(arglist__37415);
return create_app__delegate(root_id,p__37412);
});
create_app.cljs$core$IFn$_invoke$arity$variadic = create_app__delegate;
return create_app;
})()
;

/**
* @constructor
*/
foundation.app.Process = (function (in$,out,f){
this.in$ = in$;
this.out = out;
this.f = f;
})
foundation.app.Process.cljs$lang$type = true;
foundation.app.Process.cljs$lang$ctorStr = "foundation.app/Process";
foundation.app.Process.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"foundation.app/Process");
});
foundation.app.Process.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.Process.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_37426){var state_val_37427 = (state_37426[1]);if((state_val_37427 === 5))
{var inst_37421 = (state_37426[2]);var state_37426__$1 = (function (){var statearr_37428 = state_37426;(statearr_37428[7] = inst_37421);
return statearr_37428;
})();var statearr_37429_37438 = state_37426__$1;(statearr_37429_37438[2] = null);
(statearr_37429_37438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37427 === 4))
{var inst_37418 = (state_37426[2]);var inst_37419 = self__.f.call(null,inst_37418);var state_37426__$1 = state_37426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37426__$1,5,self__.out,inst_37419);
} else
{if((state_val_37427 === 3))
{var inst_37424 = (state_37426[2]);var state_37426__$1 = state_37426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37426__$1,inst_37424);
} else
{if((state_val_37427 === 2))
{var state_37426__$1 = state_37426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,4,self__.in$);
} else
{if((state_val_37427 === 1))
{var state_37426__$1 = state_37426;var statearr_37430_37439 = state_37426__$1;(statearr_37430_37439[2] = null);
(statearr_37430_37439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_37434 = (new Array(8));(statearr_37434[0] = state_machine__16760__auto__);
(statearr_37434[1] = 1);
return statearr_37434;
});
var state_machine__16760__auto____1 = (function (state_37426){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_37426);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e37435){if((e37435 instanceof Object))
{var ex__16763__auto__ = e37435;var statearr_37436_37440 = state_37426;(statearr_37436_37440[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37441 = state_37426;
state_37426 = G__37441;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_37426){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_37426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_37437 = f__16830__auto__.call(null);(statearr_37437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_37437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
});
foundation.app.Process.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_.call(null,self__.in$);
});
foundation.app.__GT_Process = (function __GT_Process(in$,out,f){return (new foundation.app.Process(in$,out,f));
});
foundation.app.proc = (function proc(out,f){return (new foundation.app.Process(cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32)),out,f));
});

//# sourceMappingURL=app.js.map