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
var G__38572__delegate = function (k,args){if(cljs.core.vector_QMARK_.call(null,k))
{return cljs.core.last.call(null,k);
} else
{return k;
}
};
var G__38572 = function (k,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38572__delegate.call(this,k,args);};
G__38572.cljs$lang$maxFixedArity = 1;
G__38572.cljs$lang$applyTo = (function (arglist__38573){
var k = cljs.core.first(arglist__38573);
var args = cljs.core.rest(arglist__38573);
return G__38572__delegate(k,args);
});
G__38572.cljs$core$IFn$_invoke$arity$variadic = G__38572__delegate;
return G__38572;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
foundation.app.route_effect = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route-effect",(function (message,inputs){return cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.path).call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,inputs){return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.filter_changes = (function filter_changes(p__38574,changes){var map__38578 = p__38574;var map__38578__$1 = ((cljs.core.seq_QMARK_.call(null,map__38578))?cljs.core.apply.call(null,cljs.core.hash_map,map__38578):map__38578);var processed_inputs = cljs.core.get.call(null,map__38578__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));return cljs.core.remove.call(null,(function (p__38579){var vec__38580 = p__38579;var k = cljs.core.nth.call(null,vec__38580,0,null);var v = cljs.core.nth.call(null,vec__38580,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null):p),k));
});
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__38587){var vec__38588 = p__38587;var k = cljs.core.nth.call(null,vec__38588,0,null);var v = cljs.core.nth.call(null,vec__38588,1,null);var k__$1 = prefixed.call(null,k,prefix);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__38589){var vec__38590 = p__38589;var k = cljs.core.nth.call(null,vec__38590,0,null);var v = cljs.core.nth.call(null,vec__38590,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], null);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__38591){var vec__38592 = p__38591;var k = cljs.core.nth.call(null,vec__38592,0,null);var v = cljs.core.nth.call(null,vec__38592,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("foundation.app","removed","foundation.app/removed",4698386701)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], null)], null);
}
}),removed);
})()));
});
});
foundation.app.reify_input_paths = (function reify_input_paths(input_paths,data_model,arg_names){var value_types = (function value_types(arg_names__$1){if(cljs.core.truth_(arg_names__$1))
{return cljs.core.reduce.call(null,(function (a,p__38631){var vec__38632 = p__38631;var k = cljs.core.nth.call(null,vec__38632,0,null);var v = cljs.core.nth.call(null,vec__38632,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
;return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat)),(function (){var iter__14514__auto__ = (function iter__38633(s__38634){return (new cljs.core.LazySeq(null,(function (){var s__38634__$1 = s__38634;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38634__$1);if(temp__4092__auto__)
{var s__38634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38634__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__38634__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__38636 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__38635 = 0;while(true){
if((i__38635 < size__14513__auto__))
{var vec__38651 = cljs.core._nth.call(null,c__14512__auto__,i__38635);var path = cljs.core.nth.call(null,vec__38651,0,null);var arg = cljs.core.nth.call(null,vec__38651,1,null);cljs.core.chunk_append.call(null,b__38636,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__38657 = data_model__$1;if(G__38657)
{var bit__14447__auto__ = (G__38657.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__38657.cljs$core$ILookup$))
{return true;
} else
{if((!G__38657.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38657);
}
})())
{var data_model_k__38656 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__38656,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__38665 = cljs.core.rest.call(null,ks);
var G__38666 = cljs.core.get.call(null,v,k,v);
var G__38667 = ret;
ks = G__38665;
data_model__$1 = G__38666;
ret = G__38667;
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
var G__38668 = (i__38635 + 1);
i__38635 = G__38668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38636),iter__38633.call(null,cljs.core.chunk_rest.call(null,s__38634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38636),null);
}
} else
{var vec__38658 = cljs.core.first.call(null,s__38634__$2);var path = cljs.core.nth.call(null,vec__38658,0,null);var arg = cljs.core.nth.call(null,vec__38658,1,null);return cljs.core.cons.call(null,(function (){var ks = path;var data_model__$1 = data_model;var ret = cljs.core.PersistentArrayMap.EMPTY;while(true){
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
{if((function (){var G__38664 = data_model__$1;if(G__38664)
{var bit__14447__auto__ = (G__38664.cljs$lang$protocol_mask$partition0$ & 256);if((bit__14447__auto__) || (G__38664.cljs$core$ILookup$))
{return true;
} else
{if((!G__38664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__38664);
}
})())
{var data_model_k__38663 = cljs.core.get.call(null,data_model__$1,k,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_model_k__38663,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var v = cljs.core.get.call(null,data_model__$1,k);{
var G__38669 = cljs.core.rest.call(null,ks);
var G__38670 = cljs.core.get.call(null,v,k,v);
var G__38671 = ret;
ks = G__38669;
data_model__$1 = G__38670;
ret = G__38671;
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
})(),iter__38633.call(null,cljs.core.rest.call(null,s__38634__$2)));
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
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map","map",1014012110),(function (_,arg_names,p__38672){var map__38673 = p__38672;var map__38673__$1 = ((cljs.core.seq_QMARK_.call(null,map__38673))?cljs.core.apply.call(null,cljs.core.hash_map,map__38673):map__38673);var input_paths = cljs.core.get.call(null,map__38673__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__38673__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));return foundation.app.reify_input_paths.call(null,input_paths,new_model,arg_names);
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),(function (_,arg_names,inputs){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),inputs,arg_names)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"single-val","single-val",1926385550),(function (_,arg_names,inputs){return cljs.core.first.call(null,cljs.core.vals.call(null,foundation.app.input_spec.call(null,new cljs.core.Keyword(null,"map","map",1014012110),arg_names,inputs)));
}));
cljs.core._add_method.call(null,foundation.app.input_spec,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,arg_names,inputs){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
}));
foundation.app.consume_app_model = (function consume_app_model(app,render_fn){var app_model = cljs.core.atom.call(null,foundation.app.tree.new_app_model);var c__16829__auto___38728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_38716){var state_val_38717 = (state_38716[1]);if((state_val_38717 === 4))
{var inst_38704 = (state_38716[2]);var inst_38705 = cljs.core.deref.call(null,app_model);var inst_38706 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_38704);var inst_38707 = cljs.core.swap_BANG_.call(null,app_model,foundation.app.tree.apply_deltas,inst_38706);var inst_38708 = foundation.app.tree.t.call(null,inst_38705);var inst_38709 = foundation.app.tree.since_t.call(null,inst_38707,inst_38708);var inst_38710 = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var inst_38711 = render_fn.call(null,inst_38709,inst_38710);var state_38716__$1 = (function (){var statearr_38718 = state_38716;(statearr_38718[7] = inst_38711);
return statearr_38718;
})();var statearr_38719_38729 = state_38716__$1;(statearr_38719_38729[2] = null);
(statearr_38719_38729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38717 === 3))
{var inst_38714 = (state_38716[2]);var state_38716__$1 = state_38716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38716__$1,inst_38714);
} else
{if((state_val_38717 === 2))
{var inst_38702 = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(app);var state_38716__$1 = state_38716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38716__$1,4,inst_38702);
} else
{if((state_val_38717 === 1))
{var state_38716__$1 = state_38716;var statearr_38720_38730 = state_38716__$1;(statearr_38720_38730[2] = null);
(statearr_38720_38730[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_38724 = (new Array(8));(statearr_38724[0] = state_machine__16760__auto__);
(statearr_38724[1] = 1);
return statearr_38724;
});
var state_machine__16760__auto____1 = (function (state_38716){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_38716);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e38725){if((e38725 instanceof Object))
{var ex__16763__auto__ = e38725;var statearr_38726_38731 = state_38716;(statearr_38726_38731[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38732 = state_38716;
state_38716 = G__38732;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_38716){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_38716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_38727 = f__16830__auto__.call(null);(statearr_38727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___38728);
return statearr_38727;
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
foundation.app.process_message = (function process_message(state,message){var k = foundation.app.multiplex_message.call(null,state,message);var G__38734 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"output","output",4303359091),G__38734))
{return state;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),G__38734))
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
foundation.app.input_queue = (function input_queue(app_atom){var input_queue__$1 = cljs.core.async.chan.call(null);var c__16829__auto___38899 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_38865){var state_val_38866 = (state_38865[1]);if((state_val_38866 === 1))
{var state_38865__$1 = state_38865;var statearr_38867_38900 = state_38865__$1;(statearr_38867_38900[2] = null);
(statearr_38867_38900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 2))
{var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38865__$1,4,input_queue__$1);
} else
{if((state_val_38866 === 3))
{var inst_38863 = (state_38865[2]);var state_38865__$1 = state_38865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38865__$1,inst_38863);
} else
{if((state_val_38866 === 4))
{var inst_38819 = (state_38865[2]);var inst_38824 = foundation.app.pre_process.call(null,inst_38819);var inst_38825 = cljs.core.seq.call(null,inst_38824);var inst_38826 = inst_38825;var inst_38827 = null;var inst_38828 = 0;var inst_38829 = 0;var state_38865__$1 = (function (){var statearr_38868 = state_38865;(statearr_38868[7] = inst_38829);
(statearr_38868[8] = inst_38828);
(statearr_38868[9] = inst_38826);
(statearr_38868[10] = inst_38827);
return statearr_38868;
})();var statearr_38869_38901 = state_38865__$1;(statearr_38869_38901[2] = null);
(statearr_38869_38901[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 5))
{var inst_38829 = (state_38865[7]);var inst_38828 = (state_38865[8]);var inst_38831 = (inst_38829 < inst_38828);var inst_38832 = inst_38831;var state_38865__$1 = state_38865;if(cljs.core.truth_(inst_38832))
{var statearr_38873_38902 = state_38865__$1;(statearr_38873_38902[1] = 7);
} else
{var statearr_38874_38903 = state_38865__$1;(statearr_38874_38903[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 6))
{var inst_38860 = (state_38865[2]);var state_38865__$1 = (function (){var statearr_38875 = state_38865;(statearr_38875[11] = inst_38860);
return statearr_38875;
})();var statearr_38876_38904 = state_38865__$1;(statearr_38876_38904[2] = null);
(statearr_38876_38904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 7))
{var inst_38829 = (state_38865[7]);var inst_38828 = (state_38865[8]);var inst_38826 = (state_38865[9]);var inst_38827 = (state_38865[10]);var inst_38834 = cljs.core._nth.call(null,inst_38827,inst_38829);var inst_38835 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_38834);var inst_38836 = (inst_38829 + 1);var tmp38870 = inst_38828;var tmp38871 = inst_38826;var tmp38872 = inst_38827;var inst_38826__$1 = tmp38871;var inst_38827__$1 = tmp38872;var inst_38828__$1 = tmp38870;var inst_38829__$1 = inst_38836;var state_38865__$1 = (function (){var statearr_38877 = state_38865;(statearr_38877[7] = inst_38829__$1);
(statearr_38877[8] = inst_38828__$1);
(statearr_38877[12] = inst_38835);
(statearr_38877[9] = inst_38826__$1);
(statearr_38877[10] = inst_38827__$1);
return statearr_38877;
})();var statearr_38878_38905 = state_38865__$1;(statearr_38878_38905[2] = null);
(statearr_38878_38905[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 8))
{var inst_38839 = (state_38865[13]);var inst_38826 = (state_38865[9]);var inst_38839__$1 = cljs.core.seq.call(null,inst_38826);var state_38865__$1 = (function (){var statearr_38879 = state_38865;(statearr_38879[13] = inst_38839__$1);
return statearr_38879;
})();if(inst_38839__$1)
{var statearr_38880_38906 = state_38865__$1;(statearr_38880_38906[1] = 10);
} else
{var statearr_38881_38907 = state_38865__$1;(statearr_38881_38907[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 9))
{var inst_38858 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38882_38908 = state_38865__$1;(statearr_38882_38908[2] = inst_38858);
(statearr_38882_38908[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 10))
{var inst_38839 = (state_38865[13]);var inst_38841 = cljs.core.chunked_seq_QMARK_.call(null,inst_38839);var state_38865__$1 = state_38865;if(inst_38841)
{var statearr_38883_38909 = state_38865__$1;(statearr_38883_38909[1] = 13);
} else
{var statearr_38884_38910 = state_38865__$1;(statearr_38884_38910[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 11))
{var state_38865__$1 = state_38865;var statearr_38885_38911 = state_38865__$1;(statearr_38885_38911[2] = null);
(statearr_38885_38911[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 12))
{var inst_38856 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38886_38912 = state_38865__$1;(statearr_38886_38912[2] = inst_38856);
(statearr_38886_38912[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 13))
{var inst_38839 = (state_38865[13]);var inst_38843 = cljs.core.chunk_first.call(null,inst_38839);var inst_38844 = cljs.core.chunk_rest.call(null,inst_38839);var inst_38845 = cljs.core.count.call(null,inst_38843);var inst_38826 = inst_38844;var inst_38827 = inst_38843;var inst_38828 = inst_38845;var inst_38829 = 0;var state_38865__$1 = (function (){var statearr_38887 = state_38865;(statearr_38887[7] = inst_38829);
(statearr_38887[8] = inst_38828);
(statearr_38887[9] = inst_38826);
(statearr_38887[10] = inst_38827);
return statearr_38887;
})();var statearr_38888_38913 = state_38865__$1;(statearr_38888_38913[2] = null);
(statearr_38888_38913[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 14))
{var inst_38839 = (state_38865[13]);var inst_38848 = cljs.core.first.call(null,inst_38839);var inst_38849 = cljs.core.swap_BANG_.call(null,app_atom,foundation.app.transact_one,inst_38848);var inst_38850 = cljs.core.next.call(null,inst_38839);var inst_38826 = inst_38850;var inst_38827 = null;var inst_38828 = 0;var inst_38829 = 0;var state_38865__$1 = (function (){var statearr_38889 = state_38865;(statearr_38889[14] = inst_38849);
(statearr_38889[7] = inst_38829);
(statearr_38889[8] = inst_38828);
(statearr_38889[9] = inst_38826);
(statearr_38889[10] = inst_38827);
return statearr_38889;
})();var statearr_38890_38914 = state_38865__$1;(statearr_38890_38914[2] = null);
(statearr_38890_38914[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38866 === 15))
{var inst_38853 = (state_38865[2]);var state_38865__$1 = state_38865;var statearr_38891_38915 = state_38865__$1;(statearr_38891_38915[2] = inst_38853);
(statearr_38891_38915[1] = 12);
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
var state_machine__16760__auto____0 = (function (){var statearr_38895 = (new Array(15));(statearr_38895[0] = state_machine__16760__auto__);
(statearr_38895[1] = 1);
return statearr_38895;
});
var state_machine__16760__auto____1 = (function (state_38865){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_38865);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e38896){if((e38896 instanceof Object))
{var ex__16763__auto__ = e38896;var statearr_38897_38916 = state_38865;(statearr_38897_38916[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38917 = state_38865;
state_38865 = G__38917;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_38865){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_38865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_38898 = f__16830__auto__.call(null);(statearr_38898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___38899);
return statearr_38898;
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
foundation.app.effect_queue = (function effect_queue(app_atom){var output_queue = cljs.core.async.chan.call(null);cljs.core.add_watch.call(null,app_atom,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__38922 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__38923 = null;var count__38924 = 0;var i__38925 = 0;while(true){
if((i__38925 < count__38924))
{var message = cljs.core._nth.call(null,chunk__38923,i__38925);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__38926 = seq__38922;
var G__38927 = chunk__38923;
var G__38928 = count__38924;
var G__38929 = (i__38925 + 1);
seq__38922 = G__38926;
chunk__38923 = G__38927;
count__38924 = G__38928;
i__38925 = G__38929;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38922);if(temp__4092__auto__)
{var seq__38922__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38922__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__38922__$1);{
var G__38930 = cljs.core.chunk_rest.call(null,seq__38922__$1);
var G__38931 = c__14545__auto__;
var G__38932 = cljs.core.count.call(null,c__14545__auto__);
var G__38933 = 0;
seq__38922 = G__38930;
chunk__38923 = G__38931;
count__38924 = G__38932;
i__38925 = G__38933;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__38922__$1);cljs.core.async.put_BANG_.call(null,output_queue,message);
{
var G__38934 = cljs.core.next.call(null,seq__38922__$1);
var G__38935 = null;
var G__38936 = 0;
var G__38937 = 0;
seq__38922 = G__38934;
chunk__38923 = G__38935;
count__38924 = G__38936;
i__38925 = G__38937;
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
foundation.app.create_init_messages = (function create_init_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__38942){var vec__38943 = p__38942;var name = cljs.core.nth.call(null,vec__38943,0,null);var paths = cljs.core.nth.call(null,vec__38943,1,null);return new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),foundation.app.message.paths,paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true, false);
}),cljs.core.remove.call(null,(function (p__38944){var vec__38945 = p__38944;var k = cljs.core.nth.call(null,vec__38945,0,null);var v = cljs.core.nth.call(null,vec__38945,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
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
var begin__2 = (function (app,p__38946){var map__38952 = p__38946;var map__38952__$1 = ((cljs.core.seq_QMARK_.call(null,map__38952))?cljs.core.apply.call(null,cljs.core.hash_map,map__38952):map__38952);var focus = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"focus","focus",1111509066));var init_messages = cljs.core.get.call(null,map__38952__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var init_messages__$1 = (cljs.core.truth_(init_messages)?init_messages:(cljs.core.truth_(focus)?foundation.app.create_init_messages.call(null,focus):((new cljs.core.Keyword(null,"else","else",1017020587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.path,new cljs.core.Keyword(null,"app-model","app-model",1419288559),foundation.app.message.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),foundation.app.message.paths,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], true, false)], null):null)));var seq__38953 = cljs.core.seq.call(null,init_messages__$1);var chunk__38954 = null;var count__38955 = 0;var i__38956 = 0;while(true){
if((i__38956 < count__38955))
{var message = cljs.core._nth.call(null,chunk__38954,i__38956);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__38957 = seq__38953;
var G__38958 = chunk__38954;
var G__38959 = count__38955;
var G__38960 = (i__38956 + 1);
seq__38953 = G__38957;
chunk__38954 = G__38958;
count__38955 = G__38959;
i__38956 = G__38960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38953);if(temp__4092__auto__)
{var seq__38953__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38953__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__38953__$1);{
var G__38961 = cljs.core.chunk_rest.call(null,seq__38953__$1);
var G__38962 = c__14545__auto__;
var G__38963 = cljs.core.count.call(null,c__14545__auto__);
var G__38964 = 0;
seq__38953 = G__38961;
chunk__38954 = G__38962;
count__38955 = G__38963;
i__38956 = G__38964;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__38953__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__38965 = cljs.core.next.call(null,seq__38953__$1);
var G__38966 = null;
var G__38967 = 0;
var G__38968 = 0;
seq__38953 = G__38965;
chunk__38954 = G__38966;
count__38955 = G__38967;
i__38956 = G__38968;
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
begin = function(app,p__38946){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,p__38946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_effects = (function consume_effects(app){var output = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app);var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app);var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_38997){var state_val_38998 = (state_38997[1]);if((state_val_38998 === 4))
{var inst_38991 = (state_38997[2]);var inst_38992 = foundation.app.effect.call(null,inst_38991,input);var state_38997__$1 = (function (){var statearr_38999 = state_38997;(statearr_38999[7] = inst_38992);
return statearr_38999;
})();var statearr_39000_39009 = state_38997__$1;(statearr_39000_39009[2] = null);
(statearr_39000_39009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38998 === 3))
{var inst_38995 = (state_38997[2]);var state_38997__$1 = state_38997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38997__$1,inst_38995);
} else
{if((state_val_38998 === 2))
{var state_38997__$1 = state_38997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38997__$1,4,output);
} else
{if((state_val_38998 === 1))
{var state_38997__$1 = state_38997;var statearr_39001_39010 = state_38997__$1;(statearr_39001_39010[2] = null);
(statearr_39001_39010[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_39005 = (new Array(8));(statearr_39005[0] = state_machine__16760__auto__);
(statearr_39005[1] = 1);
return statearr_39005;
});
var state_machine__16760__auto____1 = (function (state_38997){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_38997);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e39006){if((e39006 instanceof Object))
{var ex__16763__auto__ = e39006;var statearr_39007_39011 = state_38997;(statearr_39007_39011[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39012 = state_38997;
state_38997 = G__39012;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_38997){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_38997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_39008 = f__16830__auto__.call(null);(statearr_39008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_39008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){var seq__39017 = cljs.core.seq.call(null,script);var chunk__39018 = null;var count__39019 = 0;var i__39020 = 0;while(true){
if((i__39020 < count__39019))
{var message = cljs.core._nth.call(null,chunk__39018,i__39020);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39021 = seq__39017;
var G__39022 = chunk__39018;
var G__39023 = count__39019;
var G__39024 = (i__39020 + 1);
seq__39017 = G__39021;
chunk__39018 = G__39022;
count__39019 = G__39023;
i__39020 = G__39024;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39017);if(temp__4092__auto__)
{var seq__39017__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39017__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__39017__$1);{
var G__39025 = cljs.core.chunk_rest.call(null,seq__39017__$1);
var G__39026 = c__14545__auto__;
var G__39027 = cljs.core.count.call(null,c__14545__auto__);
var G__39028 = 0;
seq__39017 = G__39025;
chunk__39018 = G__39026;
count__39019 = G__39027;
i__39020 = G__39028;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__39017__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__39029 = cljs.core.next.call(null,seq__39017__$1);
var G__39030 = null;
var G__39031 = 0;
var G__39032 = 0;
seq__39017 = G__39029;
chunk__39018 = G__39030;
count__39019 = G__39031;
i__39020 = G__39032;
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
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p__39033,graph){var map__39034 = p__39033;var map__39034__$1 = ((cljs.core.seq_QMARK_.call(null,map__39034))?cljs.core.apply.call(null,cljs.core.hash_map,map__39034):map__39034);var transform = cljs.core.get.call(null,map__39034__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var vec__39035 = cljs.core.key.call(null,transform);var type = cljs.core.nth.call(null,vec__39035,0,null);var path = cljs.core.nth.call(null,vec__39035,1,null);return graph;
}));
cljs.core._add_method.call(null,foundation.app.depends,new cljs.core.Keyword(null,"derives","derives",2570029470),(function (p__39038,graph){var map__39039 = p__39038;var map__39039__$1 = ((cljs.core.seq_QMARK_.call(null,map__39039))?cljs.core.apply.call(null,cljs.core.hash_map,map__39039):map__39039);var derives = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"derives","derives",2570029470));var vec__39040 = cljs.core.key.call(null,derives);var input_paths = cljs.core.nth.call(null,vec__39040,0,null);var output_path = cljs.core.nth.call(null,vec__39040,1,null);var input_spec = cljs.core.nth.call(null,vec__39040,2,null);var input_paths__$1 = (function (){var or__13821__auto__ = (function (){var and__13809__auto__ = cljs.core.map_QMARK_.call(null,input_paths);if(and__13809__auto__)
{return cljs.core.keys.call(null,input_paths);
} else
{return and__13809__auto__;
}
})();if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return input_paths;
}
})();return cljs.core.reduce.call(null,(function (p1__39036_SHARP_,p2__39037_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__39036_SHARP_,output_path,p2__39037_SHARP_);
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
foundation.app.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__39042 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__39042,0,null);var large = cljs.core.nth.call(null,vec__39042,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
foundation.app.remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (x){return cljs.core.some.call(null,(function (p1__39043_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,x,p1__39043_SHARP_);
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
foundation.app.emit_phase = (function emit_phase(p__39044){var map__39047 = p__39044;var map__39047__$1 = ((cljs.core.seq_QMARK_.call(null,map__39047))?cljs.core.apply.call(null,cljs.core.hash_map,map__39047):map__39047);var state = map__39047__$1;var change = cljs.core.get.call(null,map__39047__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__39047__$1,new cljs.core.Keyword(null,"context","context",1965435169));var input_paths = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147))));var map__39048 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change);var map__39048__$1 = ((cljs.core.seq_QMARK_.call(null,map__39048))?cljs.core.apply.call(null,cljs.core.hash_map,map__39048):map__39048);var state__$1 = map__39048__$1;var processed_inputs = cljs.core.get.call(null,map__39048__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__39048__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__39048__$1,new cljs.core.Keyword(null,"change","change",3947235106));return cljs.core.dissoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.assoc.call(null,foundation.app.flow_input.call(null,context,state__$1,input_paths,remaining_change),new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs))),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
foundation.app.find_message_transformer = (function find_message_transformer(multifn,message){var dispatch_fn = multifn.dispatch_fn;var dispatch_val = dispatch_fn.call(null,null,message);var dispatches = cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147));var temp__4090__auto__ = cljs.core.get.call(null,dispatches,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var transformer = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transformer], null);
} else
{var temp__4090__auto____$1 = cljs.core.seq.call(null,(function (){var iter__14514__auto__ = (function iter__39053(s__39054){return (new cljs.core.LazySeq(null,(function (){var s__39054__$1 = s__39054;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39054__$1);if(temp__4092__auto__)
{var s__39054__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39054__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__39054__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__39056 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__39055 = 0;while(true){
if((i__39055 < size__14513__auto__))
{var dval = cljs.core._nth.call(null,c__14512__auto__,i__39055);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{cljs.core.chunk_append.call(null,b__39056,cljs.core.get.call(null,dispatches,dval));
{
var G__39057 = (i__39055 + 1);
i__39055 = G__39057;
continue;
}
} else
{{
var G__39058 = (i__39055 + 1);
i__39055 = G__39058;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39056),iter__39053.call(null,cljs.core.chunk_rest.call(null,s__39054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39056),null);
}
} else
{var dval = cljs.core.first.call(null,s__39054__$2);if(foundation.app.dataflow.matching_path_QMARK_.call(null,dval,dispatch_val))
{return cljs.core.cons.call(null,cljs.core.get.call(null,dispatches,dval),iter__39053.call(null,cljs.core.rest.call(null,s__39054__$2)));
} else
{{
var G__39059 = cljs.core.rest.call(null,s__39054__$2);
s__39054__$1 = G__39059;
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
update_state.cljs$lang$applyTo = (function (arglist__39060){
var state = cljs.core.first(arglist__39060);
arglist__39060 = cljs.core.next(arglist__39060);
var path = cljs.core.first(arglist__39060);
arglist__39060 = cljs.core.next(arglist__39060);
var f = cljs.core.first(arglist__39060);
var args = cljs.core.rest(arglist__39060);
return update_state__delegate(state,path,f,args);
});
update_state.cljs$core$IFn$_invoke$arity$variadic = update_state__delegate;
return update_state;
})()
;
foundation.app.transform_phase = (function transform_phase(p__39061){var map__39064 = p__39061;var map__39064__$1 = ((cljs.core.seq_QMARK_.call(null,map__39064))?cljs.core.apply.call(null,cljs.core.hash_map,map__39064):map__39064);var state = map__39064__$1;var context = cljs.core.get.call(null,map__39064__$1,new cljs.core.Keyword(null,"context","context",1965435169));var new$ = cljs.core.get.call(null,map__39064__$1,new cljs.core.Keyword(null,"new","new",1014013202));var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);var map__39065 = message;var map__39065__$1 = ((cljs.core.seq_QMARK_.call(null,map__39065))?cljs.core.apply.call(null,cljs.core.hash_map,map__39065):map__39065);var type = cljs.core.get.call(null,map__39065__$1,foundation.app.message.type);var path = cljs.core.get.call(null,map__39065__$1,foundation.app.message.path);var transform_fn = cljs.core.first.call(null,foundation.app.find_message_transformer.call(null,foundation.app.transform,message));return foundation.app.update_state.call(null,state,path,transform_fn,message);
});
foundation.app.derives_QMARK_ = (function derives_QMARK_(p__39067,input_paths){var map__39069 = p__39067;var map__39069__$1 = ((cljs.core.seq_QMARK_.call(null,map__39069))?cljs.core.apply.call(null,cljs.core.hash_map,map__39069):map__39069);var state = map__39069__$1;var context = cljs.core.get.call(null,map__39069__$1,new cljs.core.Keyword(null,"context","context",1965435169));var nodes = foundation.app.data.dependency.nodes.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)));var path = foundation.app.message.path.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (nodes,path){
return (function (p1__39066_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__39066_SHARP_);
});})(nodes,path))
,nodes));return cljs.core.seq.call(null,foundation.app.data.dependency.transitive_dependents.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state)),node_for_path));
});
foundation.app.dependents = (function dependents(state,multifn){return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.filter.call(null,(function (x){return foundation.app.derives_QMARK_.call(null,state,x);
}),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,multifn),new cljs.core.Keyword(null,"default","default",2558708147)))));
});
foundation.app.derives_phase = (function derives_phase(p__39070){var map__39078 = p__39070;var map__39078__$1 = ((cljs.core.seq_QMARK_.call(null,map__39078))?cljs.core.apply.call(null,cljs.core.hash_map,map__39078):map__39078);var state = map__39078__$1;var context = cljs.core.get.call(null,map__39078__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.derives);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__39079,p__39080){var map__39081 = p__39079;var map__39081__$1 = ((cljs.core.seq_QMARK_.call(null,map__39081))?cljs.core.apply.call(null,cljs.core.hash_map,map__39081):map__39081);var state__$1 = map__39081__$1;var change = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__39082 = p__39080;var vec__39083 = cljs.core.nth.call(null,vec__39082,0,null);var input_paths = cljs.core.nth.call(null,vec__39083,0,null);var output_path = cljs.core.nth.call(null,vec__39083,1,null);var ispec = cljs.core.nth.call(null,vec__39083,2,null);var derive = vec__39083;var derive_fn = cljs.core.nth.call(null,vec__39082,1,null);var vec__39084 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__39084,0,null);var arg_names = cljs.core.nth.call(null,vec__39084,1,null);return foundation.app.update_state.call(null,state__$1,output_path,derive_fn,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change)));
}),state,dependents);
} else
{return state;
}
});
foundation.app.effect_phase = (function effect_phase(p__39085){var map__39093 = p__39085;var map__39093__$1 = ((cljs.core.seq_QMARK_.call(null,map__39093))?cljs.core.apply.call(null,cljs.core.hash_map,map__39093):map__39093);var state = map__39093__$1;var context = cljs.core.get.call(null,map__39093__$1,new cljs.core.Keyword(null,"context","context",1965435169));var temp__4090__auto__ = foundation.app.dependents.call(null,state,foundation.app.route_effect);if(temp__4090__auto__)
{var dependents = temp__4090__auto__;var fix_paths = cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.keys),cljs.core.vals);var message = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context);return cljs.core.reduce.call(null,(function (p__39094,p__39095){var map__39096 = p__39094;var map__39096__$1 = ((cljs.core.seq_QMARK_.call(null,map__39096))?cljs.core.apply.call(null,cljs.core.hash_map,map__39096):map__39096);var state__$1 = map__39096__$1;var change = cljs.core.get.call(null,map__39096__$1,new cljs.core.Keyword(null,"change","change",3947235106));var vec__39097 = p__39095;var vec__39098 = cljs.core.nth.call(null,vec__39097,0,null);var input_paths = cljs.core.nth.call(null,vec__39098,0,null);var ispec = cljs.core.nth.call(null,vec__39098,1,null);var effect = vec__39098;var effect_fn = cljs.core.nth.call(null,vec__39097,1,null);var vec__39099 = ((cljs.core.map_QMARK_.call(null,input_paths))?fix_paths.call(null,input_paths):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_paths,null], null));var input_paths__$1 = cljs.core.nth.call(null,vec__39099,0,null);var arg_names = cljs.core.nth.call(null,vec__39099,1,null);return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),effect_fn.call(null,message,foundation.app.input_spec.call(null,ispec,arg_names,foundation.app.flow_input.call(null,context,state__$1,input_paths__$1,change))));
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
foundation.app.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k39101,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k39101,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39101,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39101,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k39101,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k39101,else__14386__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__39100){var self__ = this;
var this__14390__auto____$1 = this;var pred__39103 = cljs.core.keyword_identical_QMARK_;var expr__39104 = k__14391__auto__;if(cljs.core.truth_(pred__39103.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__39104)))
{return (new foundation.app.Application(G__39100,self__.input,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39103.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__39104)))
{return (new foundation.app.Application(self__.state,G__39100,self__.output,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39103.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__39104)))
{return (new foundation.app.Application(self__.state,self__.input,G__39100,self__.app_model,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39103.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__39104)))
{return (new foundation.app.Application(self__.state,self__.input,self__.output,G__39100,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__39100),null));
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
foundation.app.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__39100){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.Application(self__.state,self__.input,self__.output,self__.app_model,G__39100,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Application = (function map__GT_Application(G__39102){return (new foundation.app.Application(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__39102),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__39102),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__39102),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__39102),null,cljs.core.dissoc.call(null,G__39102,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"app-model","app-model",1419288559))));
});
foundation.app.build = (function build(){var app_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1016983990),foundation.app.build_dependency_graph.call(null)], null));return (new foundation.app.Application(app_atom,foundation.app.input_queue.call(null,app_atom),foundation.app.effect_queue.call(null,app_atom),foundation.app.app_model_queue.call(null,app_atom)));
});
foundation.app.run_dataflow = (function run_dataflow(model,message){var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.emit_phase.call(null,foundation.app.effect_phase.call(null,foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message)))));return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(new_state);
});
foundation.app.dispatches = cljs.core.reduce.call(null,(function (xrel,dispatches){return cljs.core.into.call(null,xrel,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.repeat.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,dispatches))),cljs.core.first.call(null,cljs.core.vals.call(null,dispatches))));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.assoc,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974),new cljs.core.Keyword(null,"derives","derives",2570029470),new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.map.call(null,(function (p1__39106_SHARP_){return cljs.core.dissoc.call(null,cljs.core.methods$.call(null,p1__39106_SHARP_),new cljs.core.Keyword(null,"default","default",2558708147));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.transform,foundation.app.derives,foundation.app.effect], null))));
/**
* @param {...*} var_args
*/
foundation.app.create_app = (function() { 
var create_app__delegate = function (root_id,p__39107){var map__39109 = p__39107;var map__39109__$1 = ((cljs.core.seq_QMARK_.call(null,map__39109))?cljs.core.apply.call(null,cljs.core.hash_map,map__39109):map__39109);var init_messages = cljs.core.get.call(null,map__39109__$1,new cljs.core.Keyword(null,"init-messages","init-messages",4665296091));var services = cljs.core.get.call(null,map__39109__$1,new cljs.core.Keyword(null,"services","services",2393113552));var app = foundation.app.build.call(null);var render_fn = foundation.app.app_model.renderer.call(null,root_id,foundation.app.app_model.log_fn);var app_model = foundation.app.consume_app_model.call(null,app,render_fn);foundation.app.consume_effects.call(null,app);
foundation.app._STAR_app_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",1014001043),app,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model], null);
return foundation.app._STAR_app_STAR_;
};
var create_app = function (root_id,var_args){
var p__39107 = null;if (arguments.length > 1) {
  p__39107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return create_app__delegate.call(this,root_id,p__39107);};
create_app.cljs$lang$maxFixedArity = 1;
create_app.cljs$lang$applyTo = (function (arglist__39110){
var root_id = cljs.core.first(arglist__39110);
var p__39107 = cljs.core.rest(arglist__39110);
return create_app__delegate(root_id,p__39107);
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
var ___$1 = this;var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_39121){var state_val_39122 = (state_39121[1]);if((state_val_39122 === 5))
{var inst_39116 = (state_39121[2]);var state_39121__$1 = (function (){var statearr_39123 = state_39121;(statearr_39123[7] = inst_39116);
return statearr_39123;
})();var statearr_39124_39133 = state_39121__$1;(statearr_39124_39133[2] = null);
(statearr_39124_39133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39122 === 4))
{var inst_39113 = (state_39121[2]);var inst_39114 = self__.f.call(null,inst_39113);var state_39121__$1 = state_39121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39121__$1,5,self__.out,inst_39114);
} else
{if((state_val_39122 === 3))
{var inst_39119 = (state_39121[2]);var state_39121__$1 = state_39121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39121__$1,inst_39119);
} else
{if((state_val_39122 === 2))
{var state_39121__$1 = state_39121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39121__$1,4,self__.in$);
} else
{if((state_val_39122 === 1))
{var state_39121__$1 = state_39121;var statearr_39125_39134 = state_39121__$1;(statearr_39125_39134[2] = null);
(statearr_39125_39134[1] = 2);
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
var state_machine__16760__auto____0 = (function (){var statearr_39129 = (new Array(8));(statearr_39129[0] = state_machine__16760__auto__);
(statearr_39129[1] = 1);
return statearr_39129;
});
var state_machine__16760__auto____1 = (function (state_39121){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_39121);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e39130){if((e39130 instanceof Object))
{var ex__16763__auto__ = e39130;var statearr_39131_39135 = state_39121;(statearr_39131_39135[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39121);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39136 = state_39121;
state_39121 = G__39136;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_39121){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_39121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_39132 = f__16830__auto__.call(null);(statearr_39132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_39132;
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