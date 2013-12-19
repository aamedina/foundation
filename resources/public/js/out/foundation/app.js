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
var ocr_136543 = cljs.core.first.call(null,a);var ocr_136544 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_136543)) && ((cljs.core.count.call(null,ocr_136543) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_136544)) && ((cljs.core.count.call(null,ocr_136544) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_136543 === null))
{if((ocr_136544 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136551 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136552 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136551;
b = G__136552;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136553 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136554 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136553;
b = G__136554;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__136555 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136556 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136555;
b = G__136556;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136557 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136558 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136557;
b = G__136558;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136559 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136560 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136559;
b = G__136560;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__136561 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136562 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136561;
b = G__136562;
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
{if((ocr_136543 === null))
{if((ocr_136544 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136563 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136564 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136563;
b = G__136564;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136565 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136566 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136565;
b = G__136566;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__136567 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136568 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136567;
b = G__136568;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136543,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136569 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136570 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136569;
b = G__136570;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_136544,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__136571 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136572 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136571;
b = G__136572;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__136573 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__136574 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__136573;
b = G__136574;
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
foundation.app.derives_dependencies = (function derives_dependencies(){return cljs.core.reduce.call(null,(function (graph,p__136580){var vec__136581 = p__136580;var vec__136582 = cljs.core.nth.call(null,vec__136581,0,null);var input_paths = cljs.core.nth.call(null,vec__136582,0,null);var output_path = cljs.core.nth.call(null,vec__136582,1,null);var input_spec = cljs.core.nth.call(null,vec__136582,2,null);var f = cljs.core.nth.call(null,vec__136581,1,null);var input_paths__$1 = ((cljs.core.map_QMARK_.call(null,input_paths))?cljs.core.keys.call(null,input_paths):input_paths);return cljs.core.reduce.call(null,(function (p1__136575_SHARP_,p2__136576_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__136575_SHARP_,output_path,p2__136576_SHARP_);
}),graph,input_paths__$1);
}),foundation.app.data.dependency.graph.call(null),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.derives),new cljs.core.Keyword(null,"default","default",2558708147)));
});
foundation.app.rendering_deltas = (function rendering_deltas(old,new$){var make_delta = (function make_delta(op,path){var op__$1 = (function (){var G__136592 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"removed","removed",2105740242),G__136592))
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"updated","updated",779473965),G__136592))
{if(cljs.core.truth_(cljs.core.get_in.call(null,new$,path)))
{return new cljs.core.Keyword(null,"node-update","node-update",597066342);
} else
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",1106564210),G__136592))
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
return cljs.core.reduce.call(null,(function (deltas,p__136593){var vec__136594 = p__136593;var op = cljs.core.nth.call(null,vec__136594,0,null);var paths = cljs.core.nth.call(null,vec__136594,1,null);var delta = vec__136594;return cljs.core.into.call(null,deltas,cljs.core.map.call(null,make_delta,cljs.core.repeat.call(null,op),paths));
}),cljs.core.PersistentVector.EMPTY,foundation.app.data.tracking_map.changes.call(null,new$));
});
foundation.app.dependents = (function dependents(state,message){var deps = foundation.app.derives_dependencies.call(null);var nodes = foundation.app.data.dependency.nodes.call(null,deps);var path = foundation.app.message.path.call(null,message);var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps,nodes,path){
return (function (p1__136595_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__136595_SHARP_);
});})(deps,nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,deps),foundation.app.data.dependency.transitive_dependents.call(null,deps,node_for_path)));
});
foundation.app.transform_phase = (function transform_phase(state,message){return cljs.core.update_in.call(null,state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),foundation.app.message.path.call(null,message)),foundation.app.transform,message);
});
foundation.app.derives_phase = (function derives_phase(new_state,message,deps){return cljs.core.reduce.call(null,(function (state,p__136599){var vec__136600 = p__136599;var vec__136601 = cljs.core.nth.call(null,vec__136600,0,null);var input_paths = cljs.core.nth.call(null,vec__136601,0,null);var output_path = cljs.core.nth.call(null,vec__136601,1,null);var input_spec = cljs.core.nth.call(null,vec__136601,2,null);var f = cljs.core.nth.call(null,vec__136600,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,deps),output_path))
{return cljs.core.update_in.call(null,state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),output_path),f,message,cljs.core.reduce.call(null,(function (m,input){return cljs.core.assoc.call(null,m,input,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state),input));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths));
} else
{return state;
}
}),new_state,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.derives),new cljs.core.Keyword(null,"default","default",2558708147)));
});
foundation.app.transact_one = (function transact_one(state,message){var in_transaction_QMARK_ = (new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state) instanceof foundation.app.data.tracking_map.TrackingMap);var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,((in_transaction_QMARK_)?state:cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = foundation.app.derives_phase.call(null,foundation.app.transform_phase.call(null,state__$1,message),message,foundation.app.dependents.call(null,state__$1,message));var deltas = foundation.app.rendering_deltas.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.assoc.call(null,((in_transaction_QMARK_)?new_state:cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)))),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas);
});
foundation.app.transact_batch = (function transact_batch(state,messages){var transaction = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)));var new_state = cljs.core.reduce.call(null,foundation.app.transact_one,transaction,messages);return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)));
});
foundation.app.process_special_message = (function process_special_message(message){var topic = foundation.app.message.path.call(null,message);var t = foundation.app.message.type.call(null,message);var G__136608 = topic;if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",519058485)], null),G__136608))
{return null;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),G__136608))
{var G__136609 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"navigate","navigate",3116398819),G__136609))
{var messages = foundation.app.router.route.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",4383738555),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(foundation.app.system),new cljs.core.Keyword(null,"uri","uri",1014020318),new cljs.core.Keyword(null,"to-path","to-path",4107943849).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY], null));var seq__136610 = cljs.core.seq.call(null,messages);var chunk__136611 = null;var count__136612 = 0;var i__136613 = 0;while(true){
if((i__136613 < count__136612))
{var message__$1 = cljs.core._nth.call(null,chunk__136611,i__136613);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(foundation.app.system),message__$1);
{
var G__136614 = seq__136610;
var G__136615 = chunk__136611;
var G__136616 = count__136612;
var G__136617 = (i__136613 + 1);
seq__136610 = G__136614;
chunk__136611 = G__136615;
count__136612 = G__136616;
i__136613 = G__136617;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__136610);if(temp__4092__auto__)
{var seq__136610__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__136610__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__136610__$1);{
var G__136618 = cljs.core.chunk_rest.call(null,seq__136610__$1);
var G__136619 = c__8952__auto__;
var G__136620 = cljs.core.count.call(null,c__8952__auto__);
var G__136621 = 0;
seq__136610 = G__136618;
chunk__136611 = G__136619;
count__136612 = G__136620;
i__136613 = G__136621;
continue;
}
} else
{var message__$1 = cljs.core.first.call(null,seq__136610__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(foundation.app.system),message__$1);
{
var G__136622 = cljs.core.next.call(null,seq__136610__$1);
var G__136623 = null;
var G__136624 = 0;
var G__136625 = 0;
seq__136610 = G__136622;
chunk__136611 = G__136623;
count__136612 = G__136624;
i__136613 = G__136625;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12187__auto___136782 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_136753){var state_val_136754 = (state_136753[1]);if((state_val_136754 === 1))
{var state_136753__$1 = state_136753;var statearr_136755_136783 = state_136753__$1;(statearr_136755_136783[2] = null);
(statearr_136755_136783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 2))
{var state_136753__$1 = state_136753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_136753__$1,4,input_queue__$1);
} else
{if((state_val_136754 === 3))
{var inst_136751 = (state_136753[2]);var state_136753__$1 = state_136753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_136753__$1,inst_136751);
} else
{if((state_val_136754 === 4))
{var inst_136706 = (state_136753[7]);var inst_136706__$1 = (state_136753[2]);var inst_136707 = cljs.core.vector_QMARK_.call(null,inst_136706__$1);var inst_136708 = cljs.core.count.call(null,inst_136706__$1);var inst_136709 = cljs.core._EQ_.call(null,inst_136708,1);var inst_136710 = [new cljs.core.Keyword(null,"renderer","renderer",519058485)];var inst_136711 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_136710,null));var inst_136712 = [new cljs.core.Keyword(null,"router","router",4383738555)];var inst_136713 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_136712,null));var inst_136714 = [inst_136711,inst_136713];var inst_136715 = cljs.core.PersistentHashSet.fromArray.call(null,inst_136714,true);var inst_136716 = cljs.core.first.call(null,inst_136706__$1);var inst_136717 = foundation.app.message.path.call(null,inst_136716);var inst_136718 = cljs.core.contains_QMARK_.call(null,inst_136715,inst_136717);var inst_136719 = (inst_136707) && (inst_136709) && (inst_136718);var state_136753__$1 = (function (){var statearr_136756 = state_136753;(statearr_136756[7] = inst_136706__$1);
return statearr_136756;
})();if(cljs.core.truth_(inst_136719))
{var statearr_136757_136784 = state_136753__$1;(statearr_136757_136784[1] = 5);
} else
{var statearr_136758_136785 = state_136753__$1;(statearr_136758_136785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 5))
{var inst_136706 = (state_136753[7]);var inst_136721 = cljs.core.first.call(null,inst_136706);var inst_136722 = foundation.app.process_special_message.call(null,inst_136721);var state_136753__$1 = state_136753;var statearr_136759_136786 = state_136753__$1;(statearr_136759_136786[2] = inst_136722);
(statearr_136759_136786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 6))
{var inst_136706 = (state_136753[7]);var inst_136724 = cljs.core.vector_QMARK_.call(null,inst_136706);var inst_136725 = cljs.core.count.call(null,inst_136706);var inst_136726 = cljs.core._EQ_.call(null,inst_136725,1);var inst_136727 = (inst_136724) && (inst_136726);var state_136753__$1 = state_136753;if(cljs.core.truth_(inst_136727))
{var statearr_136760_136787 = state_136753__$1;(statearr_136760_136787[1] = 8);
} else
{var statearr_136761_136788 = state_136753__$1;(statearr_136761_136788[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 7))
{var inst_136748 = (state_136753[2]);var state_136753__$1 = (function (){var statearr_136762 = state_136753;(statearr_136762[8] = inst_136748);
return statearr_136762;
})();var statearr_136763_136789 = state_136753__$1;(statearr_136763_136789[2] = null);
(statearr_136763_136789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 8))
{var inst_136706 = (state_136753[7]);var inst_136729 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_136706);var state_136753__$1 = state_136753;var statearr_136764_136790 = state_136753__$1;(statearr_136764_136790[2] = inst_136729);
(statearr_136764_136790[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 9))
{var inst_136706 = (state_136753[7]);var inst_136731 = cljs.core.vector_QMARK_.call(null,inst_136706);var inst_136732 = cljs.core.count.call(null,inst_136706);var inst_136733 = (inst_136732 > 1);var inst_136734 = (inst_136731) && (inst_136733);var state_136753__$1 = state_136753;if(cljs.core.truth_(inst_136734))
{var statearr_136765_136791 = state_136753__$1;(statearr_136765_136791[1] = 11);
} else
{var statearr_136766_136792 = state_136753__$1;(statearr_136766_136792[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 10))
{var inst_136746 = (state_136753[2]);var state_136753__$1 = state_136753;var statearr_136767_136793 = state_136753__$1;(statearr_136767_136793[2] = inst_136746);
(statearr_136767_136793[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 11))
{var inst_136706 = (state_136753[7]);var inst_136736 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_batch,inst_136706);var state_136753__$1 = state_136753;var statearr_136768_136794 = state_136753__$1;(statearr_136768_136794[2] = inst_136736);
(statearr_136768_136794[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 12))
{var state_136753__$1 = state_136753;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_136769_136795 = state_136753__$1;(statearr_136769_136795[1] = 14);
} else
{var statearr_136770_136796 = state_136753__$1;(statearr_136770_136796[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 13))
{var inst_136744 = (state_136753[2]);var state_136753__$1 = state_136753;var statearr_136771_136797 = state_136753__$1;(statearr_136771_136797[2] = inst_136744);
(statearr_136771_136797[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 14))
{var inst_136706 = (state_136753[7]);var inst_136739 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_136706);var state_136753__$1 = state_136753;var statearr_136772_136798 = state_136753__$1;(statearr_136772_136798[2] = inst_136739);
(statearr_136772_136798[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 15))
{var state_136753__$1 = state_136753;var statearr_136773_136799 = state_136753__$1;(statearr_136773_136799[2] = null);
(statearr_136773_136799[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_136754 === 16))
{var inst_136742 = (state_136753[2]);var state_136753__$1 = state_136753;var statearr_136774_136800 = state_136753__$1;(statearr_136774_136800[2] = inst_136742);
(statearr_136774_136800[1] = 13);
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
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_136778 = [null,null,null,null,null,null,null,null,null];(statearr_136778[0] = state_machine__12118__auto__);
(statearr_136778[1] = 1);
return statearr_136778;
});
var state_machine__12118__auto____1 = (function (state_136753){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_136753);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e136779){if((e136779 instanceof Object))
{var ex__12121__auto__ = e136779;var statearr_136780_136801 = state_136753;(statearr_136780_136801[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_136753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e136779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__136802 = state_136753;
state_136753 = G__136802;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_136753){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_136753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_136781 = f__12188__auto__.call(null);(statearr_136781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___136782);
return statearr_136781;
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
var df__$1 = this;try{foundation.app.data.component.start_system.call(null,df__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"router","router",4383738555),null], null), null));
}catch (e136806){if((e136806 instanceof Error))
{var e_136810 = e136806;cljs.core.println.call(null,e_136810);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e136806;
} else
{}
}
}return df__$1;
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
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k136804,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"render-queue","render-queue",665147788)))
{return self__.render_queue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k136804,new cljs.core.Keyword(null,"router","router",4383738555)))
{return self__.router;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k136804,else__8793__auto__);
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
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__136803){var self__ = this;
var this__8797__auto____$1 = this;var pred__136807 = cljs.core.keyword_identical_QMARK_;var expr__136808 = k__8798__auto__;if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__136808)))
{return (new foundation.app.Dataflow(G__136803,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,G__136803,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__136803,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__136803,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,G__136803,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,G__136803,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__136807.call(null,new cljs.core.Keyword(null,"router","router",4383738555),expr__136808)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,G__136803,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__136803),null));
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
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__136803){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,G__136803,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__136805){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"render-queue","render-queue",665147788).cljs$core$IFn$_invoke$arity$1(G__136805),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(G__136805),null,cljs.core.dissoc.call(null,G__136805,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"renderer","renderer",519058485),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),new cljs.core.Keyword(null,"router","router",4383738555))));
});
/**
* @param {...*} var_args
*/
foundation.app.build = (function() { 
var build__delegate = function (p__136811){var map__136813 = p__136811;var map__136813__$1 = ((cljs.core.seq_QMARK_.call(null,map__136813))?cljs.core.apply.call(null,cljs.core.hash_map,map__136813):map__136813);var config = map__136813__$1;var routes = cljs.core.get.call(null,map__136813__$1,new cljs.core.Keyword(null,"routes","routes",4383738556));var root_id = cljs.core.get.call(null,map__136813__$1,new cljs.core.Keyword(null,"root-id","root-id",2393957720));var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY], null));var input = foundation.app.input_queue.call(null,app_state);var output = foundation.app.output_queue.call(null,app_state);var renderer = foundation.app.render.renderer.call(null,root_id);var deps = foundation.app.derives_dependencies.call(null);var df = foundation.app.data.component.start.call(null,foundation.app.map__GT_Dataflow.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),app_state,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"output","output",4303359091),output,new cljs.core.Keyword(null,"deps","deps",1016983990),deps,new cljs.core.Keyword(null,"renderer","renderer",519058485),foundation.app.data.component.using.call(null,renderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"router","router",4383738555),foundation.app.data.component.using.call(null,foundation.app.router.router.call(null,routes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null))], null)));foundation.app.system = df;
return df;
};
var build = function (var_args){
var p__136811 = null;if (arguments.length > 0) {
  p__136811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return build__delegate.call(this,p__136811);};
build.cljs$lang$maxFixedArity = 0;
build.cljs$lang$applyTo = (function (arglist__136814){
var p__136811 = cljs.core.seq(arglist__136814);
return build__delegate(p__136811);
});
build.cljs$core$IFn$_invoke$arity$variadic = build__delegate;
return build;
})()
;

//# sourceMappingURL=app.js.map