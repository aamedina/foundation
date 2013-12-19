// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.util');
goog.require('foundation.app.router');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('foundation.app.message');
goog.require('foundation.app.router');
goog.require('foundation.app.data.component');
goog.require('foundation.app.render');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.router');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.render');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.transform = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,message){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.message.type.call(null,message),foundation.app.message.path.call(null,message)], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,message){return state;
}));
foundation.app.derives = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derives",(function (state,message,input){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.message.type.call(null,message),foundation.app.message.path.call(null,message)], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,message,inputs){return state;
}));
foundation.app.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_128274 = cljs.core.first.call(null,a);var ocr_128275 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_128274)) && ((cljs.core.count.call(null,ocr_128274) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_128275)) && ((cljs.core.count.call(null,ocr_128275) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_128274 === null))
{if((ocr_128275 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128282 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128283 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128282;
b = G__128283;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128284 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128285 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128284;
b = G__128285;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__128286 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128287 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128286;
b = G__128287;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128288 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128289 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128288;
b = G__128289;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128290 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128291 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128290;
b = G__128291;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__128292 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128293 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128292;
b = G__128293;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_128274 === null))
{if((ocr_128275 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128294 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128295 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128294;
b = G__128295;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128296 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128297 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128296;
b = G__128297;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__128298 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128299 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128298;
b = G__128299;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128274,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128300 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128301 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128300;
b = G__128301;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_128275,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__128302 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128303 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128302;
b = G__128303;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__128304 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__128305 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__128304;
b = G__128305;
continue;
}
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return null;
}
}
break;
}
})(),new cljs.core.Keyword(null,"succeed","succeed",3441701300));
});
foundation.app.derives_dependencies = (function derives_dependencies(){return cljs.core.reduce.call(null,(function (graph,p__128311){var vec__128312 = p__128311;var vec__128313 = cljs.core.nth.call(null,vec__128312,0,null);var input_paths = cljs.core.nth.call(null,vec__128313,0,null);var output_path = cljs.core.nth.call(null,vec__128313,1,null);var input_spec = cljs.core.nth.call(null,vec__128313,2,null);var f = cljs.core.nth.call(null,vec__128312,1,null);var input_paths__$1 = ((cljs.core.map_QMARK_.call(null,input_paths))?cljs.core.keys.call(null,input_paths):input_paths);return cljs.core.reduce.call(null,(function (p1__128306_SHARP_,p2__128307_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__128306_SHARP_,output_path,p2__128307_SHARP_);
}),graph,input_paths__$1);
}),foundation.app.data.dependency.graph.call(null),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.derives),new cljs.core.Keyword(null,"default","default",2558708147)));
});
foundation.app.rendering_deltas = (function rendering_deltas(old,new$){var make_delta = (function make_delta(op,path){var op__$1 = (function (){var G__128323 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"removed","removed",2105740242),G__128323))
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"updated","updated",779473965),G__128323))
{if(cljs.core.truth_(cljs.core.get_in.call(null,new$,path)))
{return new cljs.core.Keyword(null,"node-update","node-update",597066342);
} else
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",1106564210),G__128323))
{return new cljs.core.Keyword(null,"node-create","node-create",4378585753);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));
} else
{return null;
}
}
}
}
})();return (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[op__$1,path,cljs.core.get_in.call(null,old,path),cljs.core.get_in.call(null,new$,path)],null));
});
return cljs.core.reduce.call(null,(function (deltas,p__128324){var vec__128325 = p__128324;var op = cljs.core.nth.call(null,vec__128325,0,null);var paths = cljs.core.nth.call(null,vec__128325,1,null);var delta = vec__128325;return cljs.core.into.call(null,deltas,cljs.core.map.call(null,make_delta,cljs.core.repeat.call(null,op),paths));
}),cljs.core.PersistentVector.EMPTY,foundation.app.data.tracking_map.changes.call(null,new$));
});
foundation.app.dependents = (function dependents(state,message){var deps = foundation.app.derives_dependencies.call(null);var nodes = foundation.app.data.dependency.nodes.call(null,deps);var path = foundation.app.message.path.call(null,message);var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps,nodes,path){
return (function (p1__128326_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__128326_SHARP_);
});})(deps,nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,deps),foundation.app.data.dependency.transitive_dependents.call(null,deps,node_for_path)));
});
foundation.app.transform_phase = (function transform_phase(state,message){return cljs.core.update_in.call(null,state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),foundation.app.message.path.call(null,message)),foundation.app.transform,message);
});
foundation.app.derives_phase = (function derives_phase(new_state,message,deps){return cljs.core.reduce.call(null,(function (state,p__128331){var vec__128332 = p__128331;var vec__128333 = cljs.core.nth.call(null,vec__128332,0,null);var input_paths = cljs.core.nth.call(null,vec__128333,0,null);var output_path = cljs.core.nth.call(null,vec__128333,1,null);var input_spec = cljs.core.nth.call(null,vec__128333,2,null);var f = cljs.core.nth.call(null,vec__128332,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,deps),output_path))
{return cljs.core.update_in.call(null,state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),output_path),f,message,cljs.core.map.call(null,(function (p1__128327_SHARP_){return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state),p1__128327_SHARP_);
}),input_paths));
} else
{return state;
}
}),new_state,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.derives),new cljs.core.Keyword(null,"default","default",2558708147)));
});
foundation.app.transact_one = (function transact_one(state,message){var in_transaction_QMARK_ = (new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state) instanceof foundation.app.data.tracking_map.TrackingMap);var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,((in_transaction_QMARK_)?state:cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,state__$1,message),message,foundation.app.dependents.call(null,state__$1,message));var deltas = foundation.app.rendering_deltas.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.assoc.call(null,((in_transaction_QMARK_)?new_state:cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)))),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas);
});
foundation.app.transact_batch = (function transact_batch(state,messages){var transaction = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)));var new_state = cljs.core.reduce.call(null,foundation.app.transact_one,transaction,messages);return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)));
});
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12187__auto___128396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_128379){var state_val_128380 = (state_128379[1]);if((state_val_128380 === 7))
{var inst_128374 = (state_128379[2]);var state_128379__$1 = (function (){var statearr_128381 = state_128379;(statearr_128381[7] = inst_128374);
return statearr_128381;
})();var statearr_128382_128397 = state_128379__$1;(statearr_128382_128397[2] = null);
(statearr_128382_128397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_128380 === 6))
{var inst_128367 = (state_128379[8]);var inst_128372 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_128367);var state_128379__$1 = state_128379;var statearr_128383_128398 = state_128379__$1;(statearr_128383_128398[2] = inst_128372);
(statearr_128383_128398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_128380 === 5))
{var inst_128367 = (state_128379[8]);var inst_128370 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_batch,inst_128367);var state_128379__$1 = state_128379;var statearr_128384_128399 = state_128379__$1;(statearr_128384_128399[2] = inst_128370);
(statearr_128384_128399[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_128380 === 4))
{var inst_128367 = (state_128379[8]);var inst_128367__$1 = (state_128379[2]);var inst_128368 = cljs.core.vector_QMARK_.call(null,inst_128367__$1);var state_128379__$1 = (function (){var statearr_128385 = state_128379;(statearr_128385[8] = inst_128367__$1);
return statearr_128385;
})();if(inst_128368)
{var statearr_128386_128400 = state_128379__$1;(statearr_128386_128400[1] = 5);
} else
{var statearr_128387_128401 = state_128379__$1;(statearr_128387_128401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_128380 === 3))
{var inst_128377 = (state_128379[2]);var state_128379__$1 = state_128379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128379__$1,inst_128377);
} else
{if((state_val_128380 === 2))
{var state_128379__$1 = state_128379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128379__$1,4,input_queue__$1);
} else
{if((state_val_128380 === 1))
{var state_128379__$1 = state_128379;var statearr_128388_128402 = state_128379__$1;(statearr_128388_128402[2] = null);
(statearr_128388_128402[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_128392 = [null,null,null,null,null,null,null,null,null];(statearr_128392[0] = state_machine__12118__auto__);
(statearr_128392[1] = 1);
return statearr_128392;
});
var state_machine__12118__auto____1 = (function (state_128379){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_128379);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e128393){if((e128393 instanceof Object))
{var ex__12121__auto__ = e128393;var statearr_128394_128403 = state_128379;(statearr_128394_128403[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e128393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__128404 = state_128379;
state_128379 = G__128404;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_128379){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_128379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_128395 = f__12188__auto__.call(null);(statearr_128395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___128396);
return statearr_128395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return input_queue__$1;
});
foundation.app.output_queue = (function output_queue(app_state){var output_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){return cljs.core.async.put_BANG_.call(null,output_queue__$1,new$);
}));
return output_queue__$1;
});

/**
* @constructor
* @param {*} state
* @param {*} input
* @param {*} output
* @param {*} deps
* @param {*} renderer
* @param {*} render_queue
* @param {*} router
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.Dataflow = (function (state,input,output,deps,renderer,render_queue,router,__meta,__extmap){
this.state = state;
this.input = input;
this.output = output;
this.deps = deps;
this.renderer = renderer;
this.render_queue = render_queue;
this.router = router;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (df){var self__ = this;
var df__$1 = this;foundation.app.data.component.start_system.call(null,df__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"router","router",4383738555),null], null), null));
return df__$1;
});
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (df){var self__ = this;
var df__$1 = this;foundation.app.data.component.stop_system.call(null,df__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"router","router",4383738555),null], null), null));
return df__$1;
});
foundation.app.Dataflow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8785__auto__){var self__ = this;
var this__8785__auto____$1 = this;var h__8639__auto__ = self__.__hash;if(!((h__8639__auto__ == null)))
{return h__8639__auto__;
} else
{var h__8639__auto____$1 = cljs.core.hash_imap.call(null,this__8785__auto____$1);self__.__hash = h__8639__auto____$1;
return h__8639__auto____$1;
}
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8790__auto__,k__8791__auto__){var self__ = this;
var this__8790__auto____$1 = this;return cljs.core._lookup.call(null,this__8790__auto____$1,k__8791__auto__,null);
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k128406,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"render-queue","render-queue",665147788)))
{return self__.render_queue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k128406,new cljs.core.Keyword(null,"router","router",4383738555)))
{return self__.router;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k128406,else__8793__auto__);
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
});
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__128405){var self__ = this;
var this__8797__auto____$1 = this;var pred__128408 = cljs.core.keyword_identical_QMARK_;var expr__128409 = k__8798__auto__;if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__128409)))
{return (new foundation.app.Dataflow(G__128405,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,G__128405,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__128405,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__128405,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,G__128405,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,G__128405,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__128408.call(null,new cljs.core.Keyword(null,"router","router",4383738555),expr__128409)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,G__128405,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__128405),null));
}
}
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8804__auto__,writer__8805__auto__,opts__8806__auto__){var self__ = this;
var this__8804__auto____$1 = this;var pr_pair__8807__auto__ = (function (keyval__8808__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,cljs.core.pr_writer,""," ","",opts__8806__auto__,keyval__8808__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.Dataflow{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1016983990),self__.deps],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.Dataflow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1016983990),self__.deps],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8786__auto__,other__8787__auto__){var self__ = this;
var this__8786__auto____$1 = this;if(cljs.core.truth_((function (){var and__8211__auto__ = other__8787__auto__;if(cljs.core.truth_(and__8211__auto__))
{return ((this__8786__auto____$1.constructor === other__8787__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8786__auto____$1,other__8787__auto__));
} else
{return and__8211__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__128405){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,G__128405,self__.__extmap,self__.__hash));
});
foundation.app.Dataflow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.Dataflow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"deps","deps",1016983990),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"router","router",4383738555),null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),null], null), null),k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.Dataflow.cljs$lang$type = true;
foundation.app.Dataflow.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Dataflow");
});
foundation.app.Dataflow.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app/Dataflow");
});
foundation.app.__GT_Dataflow = (function __GT_Dataflow(state,input,output,deps,renderer,render_queue,router){return (new foundation.app.Dataflow(state,input,output,deps,renderer,render_queue,router));
});
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__128407){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"render-queue","render-queue",665147788).cljs$core$IFn$_invoke$arity$1(G__128407),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(G__128407),null,cljs.core.dissoc.call(null,G__128407,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"renderer","renderer",519058485),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),new cljs.core.Keyword(null,"router","router",4383738555))));
});
/**
* @param {...*} var_args
*/
foundation.app.build = (function() { 
var build__delegate = function (p__128411){var map__128414 = p__128411;var map__128414__$1 = ((cljs.core.seq_QMARK_.call(null,map__128414))?cljs.core.apply.call(null,cljs.core.hash_map,map__128414):map__128414);var config = map__128414__$1;var routes = cljs.core.get.call(null,map__128414__$1,new cljs.core.Keyword(null,"routes","routes",4383738556));var root_id = cljs.core.get.call(null,map__128414__$1,new cljs.core.Keyword(null,"root-id","root-id",2393957720));var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY], null));var input = foundation.app.input_queue.call(null,app_state);var output = foundation.app.output_queue.call(null,app_state);var renderer = foundation.app.render.renderer.call(null,root_id);var deps = foundation.app.derives_dependencies.call(null);try{return foundation.app.data.component.start.call(null,foundation.app.map__GT_Dataflow.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),app_state,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"output","output",4303359091),output,new cljs.core.Keyword(null,"deps","deps",1016983990),deps,new cljs.core.Keyword(null,"renderer","renderer",519058485),foundation.app.data.component.using.call(null,renderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"router","router",4383738555),foundation.app.data.component.using.call(null,foundation.app.router.router.call(null,routes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null))], null)));
}catch (e128415){if((e128415 instanceof Error))
{var e = e128415;return cljs.core.println.call(null,e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e128415;
} else
{return null;
}
}
}};
var build = function (var_args){
var p__128411 = null;if (arguments.length > 0) {
  p__128411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return build__delegate.call(this,p__128411);};
build.cljs$lang$maxFixedArity = 0;
build.cljs$lang$applyTo = (function (arglist__128416){
var p__128411 = cljs.core.seq(arglist__128416);
return build__delegate(p__128411);
});
build.cljs$core$IFn$_invoke$arity$variadic = build__delegate;
return build;
})()
;

//# sourceMappingURL=app.js.map