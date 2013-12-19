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
var ocr_133133 = cljs.core.first.call(null,a);var ocr_133134 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_133133)) && ((cljs.core.count.call(null,ocr_133133) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_133134)) && ((cljs.core.count.call(null,ocr_133134) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_133133 === null))
{if((ocr_133134 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133141 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133142 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133141;
b = G__133142;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133143 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133144 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133143;
b = G__133144;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__133145 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133146 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133145;
b = G__133146;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133147 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133148 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133147;
b = G__133148;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133149 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133150 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133149;
b = G__133150;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__133151 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133152 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133151;
b = G__133152;
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
{if((ocr_133133 === null))
{if((ocr_133134 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133153 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133154 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133153;
b = G__133154;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133155 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133156 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133155;
b = G__133156;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__133157 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133158 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133157;
b = G__133158;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133133,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133159 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133160 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133159;
b = G__133160;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_133134,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__133161 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133162 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133161;
b = G__133162;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__133163 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__133164 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__133163;
b = G__133164;
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
foundation.app.derives_dependencies = (function derives_dependencies(){return cljs.core.reduce.call(null,(function (graph,p__133170){var vec__133171 = p__133170;var vec__133172 = cljs.core.nth.call(null,vec__133171,0,null);var input_paths = cljs.core.nth.call(null,vec__133172,0,null);var output_path = cljs.core.nth.call(null,vec__133172,1,null);var input_spec = cljs.core.nth.call(null,vec__133172,2,null);var f = cljs.core.nth.call(null,vec__133171,1,null);var input_paths__$1 = ((cljs.core.map_QMARK_.call(null,input_paths))?cljs.core.keys.call(null,input_paths):input_paths);return cljs.core.reduce.call(null,(function (p1__133165_SHARP_,p2__133166_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__133165_SHARP_,output_path,p2__133166_SHARP_);
}),graph,input_paths__$1);
}),foundation.app.data.dependency.graph.call(null),cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.derives),new cljs.core.Keyword(null,"default","default",2558708147)));
});
foundation.app.rendering_deltas = (function rendering_deltas(old,new$){var make_delta = (function make_delta(op,path){var op__$1 = (function (){var G__133182 = op;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"removed","removed",2105740242),G__133182))
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"updated","updated",779473965),G__133182))
{if(cljs.core.truth_(cljs.core.get_in.call(null,new$,path)))
{return new cljs.core.Keyword(null,"node-update","node-update",597066342);
} else
{return new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",1106564210),G__133182))
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
return cljs.core.reduce.call(null,(function (deltas,p__133183){var vec__133184 = p__133183;var op = cljs.core.nth.call(null,vec__133184,0,null);var paths = cljs.core.nth.call(null,vec__133184,1,null);var delta = vec__133184;return cljs.core.into.call(null,deltas,cljs.core.map.call(null,make_delta,cljs.core.repeat.call(null,op),paths));
}),cljs.core.PersistentVector.EMPTY,foundation.app.data.tracking_map.changes.call(null,new$));
});
foundation.app.dependents = (function dependents(state,message){var deps = foundation.app.derives_dependencies.call(null);var nodes = foundation.app.data.dependency.nodes.call(null,deps);var path = foundation.app.message.path.call(null,message);var node_for_path = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps,nodes,path){
return (function (p1__133185_SHARP_){return foundation.app.matching_path_QMARK_.call(null,path,p1__133185_SHARP_);
});})(deps,nodes,path))
,nodes));return cljs.core.seq.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,deps),foundation.app.data.dependency.transitive_dependents.call(null,deps,node_for_path)));
});
foundation.app.transform_phase = (function transform_phase(state,message){return cljs.core.update_in.call(null,state,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),foundation.app.message.path.call(null,message)),foundation.app.transform,message);
});
foundation.app.derives_phase = (function derives_phase(new_state,message,deps){return cljs.core.reduce.call(null,(function (state,p__133189){var vec__133190 = p__133189;var vec__133191 = cljs.core.nth.call(null,vec__133190,0,null);var input_paths = cljs.core.nth.call(null,vec__133191,0,null);var output_path = cljs.core.nth.call(null,vec__133191,1,null);var input_spec = cljs.core.nth.call(null,vec__133191,2,null);var f = cljs.core.nth.call(null,vec__133190,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,deps),output_path))
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
foundation.app.process_special_message = (function process_special_message(message){var topic = foundation.app.message.path.call(null,message);var t = foundation.app.message.type.call(null,message);var G__133194 = topic;if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",519058485)], null),G__133194))
{return null;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),G__133194))
{var G__133195 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"navigate","navigate",3116398819),G__133195))
{return foundation.app.router.navigate_BANG_.call(null,new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(foundation.app.system),new cljs.core.Keyword(null,"to-path","to-path",4107943849).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472));
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
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12187__auto___133352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_133323){var state_val_133324 = (state_133323[1]);if((state_val_133324 === 1))
{var state_133323__$1 = state_133323;var statearr_133325_133353 = state_133323__$1;(statearr_133325_133353[2] = null);
(statearr_133325_133353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 2))
{var state_133323__$1 = state_133323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_133323__$1,4,input_queue__$1);
} else
{if((state_val_133324 === 3))
{var inst_133321 = (state_133323[2]);var state_133323__$1 = state_133323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133323__$1,inst_133321);
} else
{if((state_val_133324 === 4))
{var inst_133276 = (state_133323[7]);var inst_133276__$1 = (state_133323[2]);var inst_133277 = cljs.core.vector_QMARK_.call(null,inst_133276__$1);var inst_133278 = cljs.core.count.call(null,inst_133276__$1);var inst_133279 = cljs.core._EQ_.call(null,inst_133278,1);var inst_133280 = [new cljs.core.Keyword(null,"renderer","renderer",519058485)];var inst_133281 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_133280,null));var inst_133282 = [new cljs.core.Keyword(null,"router","router",4383738555)];var inst_133283 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_133282,null));var inst_133284 = [inst_133281,inst_133283];var inst_133285 = cljs.core.PersistentHashSet.fromArray.call(null,inst_133284,true);var inst_133286 = cljs.core.first.call(null,inst_133276__$1);var inst_133287 = foundation.app.message.path.call(null,inst_133286);var inst_133288 = cljs.core.contains_QMARK_.call(null,inst_133285,inst_133287);var inst_133289 = (inst_133277) && (inst_133279) && (inst_133288);var state_133323__$1 = (function (){var statearr_133326 = state_133323;(statearr_133326[7] = inst_133276__$1);
return statearr_133326;
})();if(cljs.core.truth_(inst_133289))
{var statearr_133327_133354 = state_133323__$1;(statearr_133327_133354[1] = 5);
} else
{var statearr_133328_133355 = state_133323__$1;(statearr_133328_133355[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 5))
{var inst_133276 = (state_133323[7]);var inst_133291 = cljs.core.first.call(null,inst_133276);var inst_133292 = foundation.app.process_special_message.call(null,inst_133291);var state_133323__$1 = state_133323;var statearr_133329_133356 = state_133323__$1;(statearr_133329_133356[2] = inst_133292);
(statearr_133329_133356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 6))
{var inst_133276 = (state_133323[7]);var inst_133294 = cljs.core.vector_QMARK_.call(null,inst_133276);var inst_133295 = cljs.core.count.call(null,inst_133276);var inst_133296 = cljs.core._EQ_.call(null,inst_133295,1);var inst_133297 = (inst_133294) && (inst_133296);var state_133323__$1 = state_133323;if(cljs.core.truth_(inst_133297))
{var statearr_133330_133357 = state_133323__$1;(statearr_133330_133357[1] = 8);
} else
{var statearr_133331_133358 = state_133323__$1;(statearr_133331_133358[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 7))
{var inst_133318 = (state_133323[2]);var state_133323__$1 = (function (){var statearr_133332 = state_133323;(statearr_133332[8] = inst_133318);
return statearr_133332;
})();var statearr_133333_133359 = state_133323__$1;(statearr_133333_133359[2] = null);
(statearr_133333_133359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 8))
{var inst_133276 = (state_133323[7]);var inst_133299 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_133276);var state_133323__$1 = state_133323;var statearr_133334_133360 = state_133323__$1;(statearr_133334_133360[2] = inst_133299);
(statearr_133334_133360[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 9))
{var inst_133276 = (state_133323[7]);var inst_133301 = cljs.core.vector_QMARK_.call(null,inst_133276);var inst_133302 = cljs.core.count.call(null,inst_133276);var inst_133303 = (inst_133302 > 1);var inst_133304 = (inst_133301) && (inst_133303);var state_133323__$1 = state_133323;if(cljs.core.truth_(inst_133304))
{var statearr_133335_133361 = state_133323__$1;(statearr_133335_133361[1] = 11);
} else
{var statearr_133336_133362 = state_133323__$1;(statearr_133336_133362[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 10))
{var inst_133316 = (state_133323[2]);var state_133323__$1 = state_133323;var statearr_133337_133363 = state_133323__$1;(statearr_133337_133363[2] = inst_133316);
(statearr_133337_133363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 11))
{var inst_133276 = (state_133323[7]);var inst_133306 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_batch,inst_133276);var state_133323__$1 = state_133323;var statearr_133338_133364 = state_133323__$1;(statearr_133338_133364[2] = inst_133306);
(statearr_133338_133364[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 12))
{var state_133323__$1 = state_133323;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_133339_133365 = state_133323__$1;(statearr_133339_133365[1] = 14);
} else
{var statearr_133340_133366 = state_133323__$1;(statearr_133340_133366[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 13))
{var inst_133314 = (state_133323[2]);var state_133323__$1 = state_133323;var statearr_133341_133367 = state_133323__$1;(statearr_133341_133367[2] = inst_133314);
(statearr_133341_133367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 14))
{var inst_133276 = (state_133323[7]);var inst_133309 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_133276);var state_133323__$1 = state_133323;var statearr_133342_133368 = state_133323__$1;(statearr_133342_133368[2] = inst_133309);
(statearr_133342_133368[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 15))
{var state_133323__$1 = state_133323;var statearr_133343_133369 = state_133323__$1;(statearr_133343_133369[2] = null);
(statearr_133343_133369[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_133324 === 16))
{var inst_133312 = (state_133323[2]);var state_133323__$1 = state_133323;var statearr_133344_133370 = state_133323__$1;(statearr_133344_133370[2] = inst_133312);
(statearr_133344_133370[1] = 13);
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
var state_machine__12118__auto____0 = (function (){var statearr_133348 = [null,null,null,null,null,null,null,null,null];(statearr_133348[0] = state_machine__12118__auto__);
(statearr_133348[1] = 1);
return statearr_133348;
});
var state_machine__12118__auto____1 = (function (state_133323){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_133323);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e133349){if((e133349 instanceof Object))
{var ex__12121__auto__ = e133349;var statearr_133350_133371 = state_133323;(statearr_133350_133371[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e133349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__133372 = state_133323;
state_133323 = G__133372;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_133323){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_133323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_133351 = f__12188__auto__.call(null);(statearr_133351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___133352);
return statearr_133351;
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
}catch (e133376){if((e133376 instanceof Error))
{var e_133380 = e133376;cljs.core.println.call(null,e_133380);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e133376;
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
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k133374,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"deps","deps",1016983990)))
{return self__.deps;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"render-queue","render-queue",665147788)))
{return self__.render_queue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k133374,new cljs.core.Keyword(null,"router","router",4383738555)))
{return self__.router;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k133374,else__8793__auto__);
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
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__133373){var self__ = this;
var this__8797__auto____$1 = this;var pred__133377 = cljs.core.keyword_identical_QMARK_;var expr__133378 = k__8798__auto__;if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__133378)))
{return (new foundation.app.Dataflow(G__133373,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,G__133373,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__133373,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"deps","deps",1016983990),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__133373,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,G__133373,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,G__133373,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__133377.call(null,new cljs.core.Keyword(null,"router","router",4383738555),expr__133378)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,G__133373,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__133373),null));
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
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__133373){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.deps,self__.renderer,self__.render_queue,self__.router,G__133373,self__.__extmap,self__.__hash));
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
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__133375){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"render-queue","render-queue",665147788).cljs$core$IFn$_invoke$arity$1(G__133375),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(G__133375),null,cljs.core.dissoc.call(null,G__133375,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"deps","deps",1016983990),new cljs.core.Keyword(null,"renderer","renderer",519058485),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),new cljs.core.Keyword(null,"router","router",4383738555))));
});
/**
* @param {...*} var_args
*/
foundation.app.build = (function() { 
var build__delegate = function (p__133381){var map__133383 = p__133381;var map__133383__$1 = ((cljs.core.seq_QMARK_.call(null,map__133383))?cljs.core.apply.call(null,cljs.core.hash_map,map__133383):map__133383);var config = map__133383__$1;var routes = cljs.core.get.call(null,map__133383__$1,new cljs.core.Keyword(null,"routes","routes",4383738556));var root_id = cljs.core.get.call(null,map__133383__$1,new cljs.core.Keyword(null,"root-id","root-id",2393957720));var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY], null));var input = foundation.app.input_queue.call(null,app_state);var output = foundation.app.output_queue.call(null,app_state);var renderer = foundation.app.render.renderer.call(null,root_id);var deps = foundation.app.derives_dependencies.call(null);var df = foundation.app.data.component.start.call(null,foundation.app.map__GT_Dataflow.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),app_state,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"output","output",4303359091),output,new cljs.core.Keyword(null,"deps","deps",1016983990),deps,new cljs.core.Keyword(null,"renderer","renderer",519058485),foundation.app.data.component.using.call(null,renderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"router","router",4383738555),foundation.app.data.component.using.call(null,foundation.app.router.router.call(null,routes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null))], null)));foundation.app.system = df;
return df;
};
var build = function (var_args){
var p__133381 = null;if (arguments.length > 0) {
  p__133381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return build__delegate.call(this,p__133381);};
build.cljs$lang$maxFixedArity = 0;
build.cljs$lang$applyTo = (function (arglist__133384){
var p__133381 = cljs.core.seq(arglist__133384);
return build__delegate(p__133381);
});
build.cljs$core$IFn$_invoke$arity$variadic = build__delegate;
return build;
})()
;

//# sourceMappingURL=app.js.map