// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.data.tracking_map');
/**
* Return true if the two elements match.
*/
foundation.app.dataflow.matching_path_element_QMARK_ = (function matching_path_element_QMARK_(a,b){return (cljs.core._EQ_.call(null,a,b)) || (cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"*","*",1013904284))) || (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"*","*",1013904284)));
});
/**
* Return true if the two paths match.
*/
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path_a,path_b){return (cljs.core._EQ_.call(null,cljs.core.count.call(null,path_a),cljs.core.count.call(null,path_b))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (a,b){return foundation.app.dataflow.matching_path_element_QMARK_.call(null,a,b);
}),path_a,path_b)));
});
/**
* Return true if one path could be the parent of the other.
*/
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__53002 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__53002,0,null);var large = cljs.core.nth.call(null,vec__53002,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__53004){var vec__53006 = p__53004;var x = cljs.core.nth.call(null,vec__53006,0,null);var xs = cljs.core.nthnext.call(null,vec__53006,1);if(cljs.core.truth_((function (){var and__6292__auto__ = x;if(cljs.core.truth_(and__6292__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__6292__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__53003_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__53003_SHARP_),cljs.core.conj.call(null,context,p1__53003_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__53004){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__53004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_path.cljs$core$IFn$_invoke$arity$2 = get_path__2;
get_path.cljs$core$IFn$_invoke$arity$3 = get_path__3;
return get_path;
})()
;
var rekey = (function rekey(k,path,arg_names){if(cljs.core.truth_(arg_names))
{var new_key = cljs.core.get.call(null,arg_names,path);if((new_key instanceof cljs.core.Keyword))
{return new_key;
} else
{return new_key.call(null,k);
}
} else
{return k;
}
});
var value_types = (function value_types(arg_names){if(cljs.core.truth_(arg_names))
{return cljs.core.reduce.call(null,(function (a,p__53009){var vec__53010 = p__53009;var k = cljs.core.nth.call(null,vec__53010,0,null);var v = cljs.core.nth.call(null,vec__53010,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
}),cljs.core.PersistentArrayMap.EMPTY,arg_names);
} else
{return cljs.core.constantly.call(null,new cljs.core.Keyword(null,"single","single",4406605754));
}
});
foundation.app.dataflow.input_map = (function() {
var input_map = null;
var input_map__1 = (function (inputs){return input_map.call(null,inputs,null);
});
var input_map__2 = (function (p__53011,arg_names){var map__53029 = p__53011;var map__53029__$1 = ((cljs.core.seq_QMARK_.call(null,map__53029))?cljs.core.apply.call(null,cljs.core.hash_map,map__53029):map__53029);var input_paths = cljs.core.get.call(null,map__53029__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__53029__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__53030){var vec__53031 = p__53030;var k = cljs.core.nth.call(null,vec__53031,0,null);var v = cljs.core.nth.call(null,vec__53031,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6997__auto__ = (function iter__53032(s__53033){return (new cljs.core.LazySeq(null,(function (){var s__53033__$1 = s__53033;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__53033__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__53033__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__53034(s__53035){return (new cljs.core.LazySeq(null,((function (s__53033__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__53035__$1 = s__53035;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__53035__$1);if(temp__4098__auto____$1)
{var s__53035__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53035__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__53035__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__53037 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__53036 = 0;while(true){
if((i__53036 < size__6996__auto__))
{var vec__53044 = cljs.core._nth.call(null,c__6995__auto__,i__53036);var k = cljs.core.nth.call(null,vec__53044,0,null);var v = cljs.core.nth.call(null,vec__53044,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__53037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__53046 = (i__53036 + 1);
i__53036 = G__53046;
continue;
}
} else
{{
var G__53047 = (i__53036 + 1);
i__53036 = G__53047;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53037),iter__53034.call(null,cljs.core.chunk_rest.call(null,s__53035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53037),null);
}
} else
{var vec__53045 = cljs.core.first.call(null,s__53035__$2);var k = cljs.core.nth.call(null,vec__53045,0,null);var v = cljs.core.nth.call(null,vec__53045,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__53034.call(null,cljs.core.rest.call(null,s__53035__$2)));
} else
{{
var G__53048 = cljs.core.rest.call(null,s__53035__$2);
s__53035__$1 = G__53048;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__53033__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__53033__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__53032.call(null,cljs.core.rest.call(null,s__53033__$1)));
} else
{{
var G__53049 = cljs.core.rest.call(null,s__53033__$1);
s__53033__$1 = G__53049;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6997__auto__.call(null,input_paths);
})());
});
input_map = function(p__53011,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__53011);
case 2:
return input_map__2.call(this,p__53011,arg_names);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input_map.cljs$core$IFn$_invoke$arity$1 = input_map__1;
input_map.cljs$core$IFn$_invoke$arity$2 = input_map__2;
return input_map;
})()
;
foundation.app.dataflow.input_vals = (function input_vals(inputs){return cljs.core.vals.call(null,foundation.app.dataflow.input_map.call(null,inputs));
});
foundation.app.dataflow.single_val = (function single_val(inputs){var m = foundation.app.dataflow.input_map.call(null,inputs);if((1 >= cljs.core.count.call(null,m)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("input is expected to have 0 or 1 values"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">=",">=",-1640529544,null),1,cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"m","m",-1640531418,null)))))].join('')));
}
return cljs.core.first.call(null,cljs.core.vals.call(null,m));
});
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__53065 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__53065,0,null);var change_paths = cljs.core.nth.call(null,vec__53065,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6997__auto__ = (function iter__53066(s__53067){return (new cljs.core.LazySeq(null,(function (){var s__53067__$1 = s__53067;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__53067__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__53067__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__53068(s__53069){return (new cljs.core.LazySeq(null,((function (s__53067__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__53069__$1 = s__53069;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__53069__$1);if(temp__4098__auto____$1)
{var s__53069__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53069__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__53069__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__53071 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__53070 = 0;while(true){
if((i__53070 < size__6996__auto__))
{var vec__53078 = cljs.core._nth.call(null,c__6995__auto__,i__53070);var k = cljs.core.nth.call(null,vec__53078,0,null);var v = cljs.core.nth.call(null,vec__53078,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__53071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53080 = (i__53070 + 1);
i__53070 = G__53080;
continue;
}
} else
{{
var G__53081 = (i__53070 + 1);
i__53070 = G__53081;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53071),iter__53068.call(null,cljs.core.chunk_rest.call(null,s__53069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53071),null);
}
} else
{var vec__53079 = cljs.core.first.call(null,s__53069__$2);var k = cljs.core.nth.call(null,vec__53079,0,null);var v = cljs.core.nth.call(null,vec__53079,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53068.call(null,cljs.core.rest.call(null,s__53069__$2)));
} else
{{
var G__53082 = cljs.core.rest.call(null,s__53069__$2);
s__53069__$1 = G__53082;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__53067__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__53067__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__53066.call(null,cljs.core.rest.call(null,s__53067__$1)));
} else
{{
var G__53083 = cljs.core.rest.call(null,s__53067__$1);
s__53067__$1 = G__53083;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6997__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__53087){var vec__53088 = p__53087;var k = cljs.core.nth.call(null,vec__53088,0,null);var v = cljs.core.nth.call(null,vec__53088,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__53084_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__53084_SHARP_);
}),changed)))
{return cljs.core.assoc.call(null,a,k,v);
} else
{return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,input_m);
});
foundation.app.dataflow.added_inputs = (function added_inputs(inputs){return foundation.app.dataflow.changed_inputs.call(null,inputs,foundation.app.dataflow.added_map);
});
foundation.app.dataflow.updated_inputs = (function updated_inputs(inputs){return foundation.app.dataflow.changed_inputs.call(null,inputs,foundation.app.dataflow.updated_map);
});
foundation.app.dataflow.old_and_new = (function old_and_new(inputs,path){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",1014014361),cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-model","old-model",1443313525)], null),path)),new cljs.core.Keyword(null,"new","new",1014013202),cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-model","new-model",3618698286)], null),path))], null);
});
var actual_input_paths = (function actual_input_paths(p__53090){var map__53106 = p__53090;var map__53106__$1 = ((cljs.core.seq_QMARK_.call(null,map__53106))?cljs.core.apply.call(null,cljs.core.hash_map,map__53106):map__53106);var input_paths = cljs.core.get.call(null,map__53106__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__53106__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__6997__auto__ = (function iter__53107(s__53108){return (new cljs.core.LazySeq(null,(function (){var s__53108__$1 = s__53108;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__53108__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__53108__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__53109(s__53110){return (new cljs.core.LazySeq(null,((function (s__53108__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__53110__$1 = s__53110;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__53110__$1);if(temp__4098__auto____$1)
{var s__53110__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53110__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__53110__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__53112 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__53111 = 0;while(true){
if((i__53111 < size__6996__auto__))
{var vec__53119 = cljs.core._nth.call(null,c__6995__auto__,i__53111);var k = cljs.core.nth.call(null,vec__53119,0,null);var v = cljs.core.nth.call(null,vec__53119,1,null);cljs.core.chunk_append.call(null,b__53112,k);
{
var G__53121 = (i__53111 + 1);
i__53111 = G__53121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53112),iter__53109.call(null,cljs.core.chunk_rest.call(null,s__53110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53112),null);
}
} else
{var vec__53120 = cljs.core.first.call(null,s__53110__$2);var k = cljs.core.nth.call(null,vec__53120,0,null);var v = cljs.core.nth.call(null,vec__53120,1,null);return cljs.core.cons.call(null,k,iter__53109.call(null,cljs.core.rest.call(null,s__53110__$2)));
}
} else
{return null;
}
break;
}
});})(s__53108__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__53108__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__53107.call(null,cljs.core.rest.call(null,s__53108__$1)));
} else
{{
var G__53122 = cljs.core.rest.call(null,s__53108__$1);
s__53108__$1 = G__53122;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6997__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__53089_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__53089_SHARP_);
}),changed_paths));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths);
});
foundation.app.dataflow.removed_inputs = (function removed_inputs(inputs){var paths = actual_input_paths.call(null,inputs);return cljs.core.into.call(null,removed.call(null,paths,cljs.core.keys.call(null,foundation.app.dataflow.removed_map.call(null,inputs)),(function (m,path,changed_path){if((cljs.core.count.call(null,changed_path) <= cljs.core.count.call(null,path)))
{return cljs.core.assoc.call(null,m,path,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986));
} else
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-model","new-model",3618698286)], null),path)));
}
})),removed.call(null,paths,cljs.core.keys.call(null,foundation.app.dataflow.updated_map.call(null,inputs)),(function (m,path,changed_path){if((cljs.core.count.call(null,changed_path) < cljs.core.count.call(null,path)))
{var new_m = new cljs.core.Keyword(null,"new-model","new-model",3618698286).cljs$core$IFn$_invoke$arity$1(inputs);var parent = cljs.core.butlast.call(null,path);var k = cljs.core.last.call(null,path);var parent_m = ((cljs.core.seq.call(null,parent))?cljs.core.get_in.call(null,new_m,parent):new_m);if(cljs.core.contains_QMARK_.call(null,parent_m,k))
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-model","new-model",3618698286)], null),path)));
} else
{return cljs.core.assoc.call(null,m,path,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986));
}
} else
{return m;
}
})));
});
/**
* Perform a topological sort of the provided graph.
*/
foundation.app.dataflow.topo_visit = (function topo_visit(graph,node){var n = cljs.core.get.call(null,graph,node);if(cljs.core.truth_(new cljs.core.Keyword(null,"visited","visited",1480664732).cljs$core$IFn$_invoke$arity$1(n)))
{return graph;
} else
{var graph__$1 = cljs.core.assoc_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"visited","visited",1480664732)], null),true);var graph__$2 = cljs.core.reduce.call(null,topo_visit,graph__$1,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(n));return cljs.core.assoc.call(null,graph__$2,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272),cljs.core.conj.call(null,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272).cljs$core$IFn$_invoke$arity$1(graph__$2),node));
}
});
/**
* Return a sorted sequence of derive function configurations.
*/
foundation.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){var derive_fns__$1 = cljs.core.map.call(null,(function (p1__53123_SHARP_){return cljs.core.assoc.call(null,p1__53123_SHARP_,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.gensym.call(null));
}),derive_fns);var index = cljs.core.reduce.call(null,((function (derive_fns__$1){
return (function (a,x){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);var deps = (function (){var iter__6997__auto__ = ((function (derive_fns__$1,index){
return (function iter__53136(s__53137){return (new cljs.core.LazySeq(null,((function (derive_fns__$1,index){
return (function (){var s__53137__$1 = s__53137;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__53137__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var map__53143 = cljs.core.first.call(null,xs__4588__auto__);var map__53143__$1 = ((cljs.core.seq_QMARK_.call(null,map__53143))?cljs.core.apply.call(null,cljs.core.hash_map,map__53143):map__53143);var id = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"id","id",1013907597));var out = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"out","out",1014014656));var in$ = cljs.core.get.call(null,map__53143__$1,new cljs.core.Keyword(null,"in","in",1013907607));var iterys__6993__auto__ = ((function (s__53137__$1,map__53143,map__53143__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index){
return (function iter__53138(s__53139){return (new cljs.core.LazySeq(null,((function (s__53137__$1,map__53143,map__53143__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index){
return (function (){var s__53139__$1 = s__53139;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__53139__$1);if(temp__4098__auto____$1)
{var s__53139__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53139__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__53139__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__53141 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__53140 = 0;while(true){
if((i__53140 < size__6996__auto__))
{var i = cljs.core._nth.call(null,c__6995__auto__,i__53140);cljs.core.chunk_append.call(null,b__53141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,i,out], null));
{
var G__53148 = (i__53140 + 1);
i__53140 = G__53148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53141),iter__53138.call(null,cljs.core.chunk_rest.call(null,s__53139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53141),null);
}
} else
{var i = cljs.core.first.call(null,s__53139__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,i,out], null),iter__53138.call(null,cljs.core.rest.call(null,s__53139__$2)));
}
} else
{return null;
}
break;
}
});})(s__53137__$1,map__53143,map__53143__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index))
,null,null));
});})(s__53137__$1,map__53143,map__53143__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,in$));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__53136.call(null,cljs.core.rest.call(null,s__53137__$1)));
} else
{{
var G__53149 = cljs.core.rest.call(null,s__53137__$1);
s__53137__$1 = G__53149;
continue;
}
}
} else
{return null;
}
break;
}
});})(derive_fns__$1,index))
,null,null));
});})(derive_fns__$1,index))
;return iter__6997__auto__.call(null,derive_fns__$1);
})();var graph = cljs.core.reduce.call(null,((function (derive_fns__$1,index,deps){
return (function (a,p__53144){var vec__53145 = p__53144;var f = cljs.core.nth.call(null,vec__53145,0,null);var _ = cljs.core.nth.call(null,vec__53145,1,null);var out = cljs.core.nth.call(null,vec__53145,2,null);return cljs.core.assoc.call(null,a,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deps","deps",1016983990),cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__53145,f,_,out,derive_fns__$1,index,deps){
return (function (p__53146){var vec__53147 = p__53146;var ___$1 = cljs.core.nth.call(null,vec__53147,0,null);var in$ = cljs.core.nth.call(null,vec__53147,1,null);return foundation.app.dataflow.descendant_QMARK_.call(null,in$,out);
});})(vec__53145,f,_,out,derive_fns__$1,index,deps))
,deps)))], null));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (a,b){return cljs.core.conj.call(null,a,cljs.core.dissoc.call(null,cljs.core.get.call(null,index,b),new cljs.core.Keyword(null,"id","id",1013907597)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,foundation.app.dataflow.topo_visit,cljs.core.assoc.call(null,graph,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272),cljs.core.PersistentVector.EMPTY),cljs.core.keys.call(null,graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
foundation.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){return new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__53153){var map__53154 = p__53153;var map__53154__$1 = ((cljs.core.seq_QMARK_.call(null,map__53154))?cljs.core.apply.call(null,cljs.core.hash_map,map__53154):map__53154);var op = cljs.core.get.call(null,map__53154__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__53154__$1,new cljs.core.Keyword(null,"out","out",1014014656));var vec__53155 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"**","**",1013905586)))?(function (){var c = cljs.core.count.call(null,path);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(c - 1),path)),new cljs.core.Keyword(null,"*","*",1013904284)),cljs.core.vec.call(null,cljs.core.take.call(null,c,out_path))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,out_path], null));var path__$1 = cljs.core.nth.call(null,vec__53155,0,null);var out_path__$1 = cljs.core.nth.call(null,vec__53155,1,null);return (foundation.app.dataflow.matching_path_element_QMARK_.call(null,op,key)) && (foundation.app.dataflow.matching_path_QMARK_.call(null,path__$1,out_path__$1));
}),transforms)));
});
foundation.app.dataflow.merge_changes = (function merge_changes(old_changes,new_changes){return cljs.core.merge_with.call(null,cljs.core.into,old_changes,new_changes);
});
foundation.app.dataflow.update_flow_state = (function update_flow_state(state,tracking_map){return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),cljs.core.deref.call(null,tracking_map)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106)], null),foundation.app.dataflow.merge_changes,foundation.app.data.tracking_map.changes.call(null,tracking_map));
});
/**
* @param {...*} var_args
*/
foundation.app.dataflow.track_update_in = (function() { 
var track_update_in__delegate = function (data_model,out_path,f,args){return cljs.core.apply.call(null,cljs.core.update_in,foundation.app.data.tracking_map.tracking_map.call(null,data_model),out_path,f,args);
};
var track_update_in = function (data_model,out_path,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return track_update_in__delegate.call(this,data_model,out_path,f,args);};
track_update_in.cljs$lang$maxFixedArity = 3;
track_update_in.cljs$lang$applyTo = (function (arglist__53156){
var data_model = cljs.core.first(arglist__53156);
arglist__53156 = cljs.core.next(arglist__53156);
var out_path = cljs.core.first(arglist__53156);
arglist__53156 = cljs.core.next(arglist__53156);
var f = cljs.core.first(arglist__53156);
var args = cljs.core.rest(arglist__53156);
return track_update_in__delegate(data_model,out_path,f,args);
});
track_update_in.cljs$core$IFn$_invoke$arity$variadic = track_update_in__delegate;
return track_update_in;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.dataflow.apply_in = (function() { 
var apply_in__delegate = function (state,out_path,f,args){var data_model = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null));var new_data_model = cljs.core.apply.call(null,foundation.app.dataflow.track_update_in,data_model,out_path,f,args);return foundation.app.dataflow.update_flow_state.call(null,state,new_data_model);
};
var apply_in = function (state,out_path,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return apply_in__delegate.call(this,state,out_path,f,args);};
apply_in.cljs$lang$maxFixedArity = 3;
apply_in.cljs$lang$applyTo = (function (arglist__53157){
var state = cljs.core.first(arglist__53157);
arglist__53157 = cljs.core.next(arglist__53157);
var out_path = cljs.core.first(arglist__53157);
arglist__53157 = cljs.core.next(arglist__53157);
var f = cljs.core.first(arglist__53157);
var args = cljs.core.rest(arglist__53157);
return apply_in__delegate(state,out_path,f,args);
});
apply_in.cljs$core$IFn$_invoke$arity$variadic = apply_in__delegate;
return apply_in;
})()
;
/**
* Find the first transform function that matches the message and
* execute it, returning the updated flow state.
*/
foundation.app.dataflow.transform_phase = (function transform_phase(p__53158){var map__53161 = p__53158;var map__53161__$1 = ((cljs.core.seq_QMARK_.call(null,map__53161))?cljs.core.apply.call(null,cljs.core.hash_map,map__53161):map__53161);var state = map__53161__$1;var context = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var new$ = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__53162 = new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214).cljs$core$IFn$_invoke$arity$1(dataflow).call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var map__53162__$1 = ((cljs.core.seq_QMARK_.call(null,map__53162))?cljs.core.apply.call(null,cljs.core.hash_map,map__53162):map__53162);var out_path = cljs.core.get.call(null,map__53162__$1,new cljs.core.Keyword(null,"out","out",1014014656));var key = cljs.core.get.call(null,map__53162__$1,new cljs.core.Keyword(null,"key","key",1014010321));var transform_fn = foundation.app.dataflow.find_message_transformer.call(null,new cljs.core.Keyword(null,"transform","transform",2066570974).cljs$core$IFn$_invoke$arity$1(dataflow),out_path,key);if(cljs.core.truth_(transform_fn))
{return foundation.app.dataflow.apply_in.call(null,state,out_path,transform_fn,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));
} else
{return state;
}
});
/**
* The default propagator predicate. Return true if any of the changed
* paths are on the same path as the input path.
*/
foundation.app.dataflow.input_change_propagator = (function input_change_propagator(state,changed_inputs,input_path){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.descendant_QMARK_,input_path),changed_inputs);
});
/**
* Return true if a dependent function should be run based on the
* state of its input paths.
* 
* Custom propagator predicates can be provided by attaching
* :propagator metadata to any input path.
*/
foundation.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__53163,input_paths){var map__53165 = p__53163;var map__53165__$1 = ((cljs.core.seq_QMARK_.call(null,map__53165))?cljs.core.apply.call(null,cljs.core.hash_map,map__53165):map__53165);var state = map__53165__$1;var change = cljs.core.get.call(null,map__53165__$1,new cljs.core.Keyword(null,"change","change",3947235106));var changed_inputs = ((cljs.core.seq.call(null,change))?cljs.core.reduce.call(null,cljs.core.into,cljs.core.vals.call(null,change)):cljs.core.PersistentVector.EMPTY);return cljs.core.some.call(null,(function (input_path){var propagator_pred = new cljs.core.Keyword(null,"propagator","propagator",4257587985).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,input_path));return propagator_pred.call(null,state,changed_inputs,input_path);
}),input_paths);
});
foundation.app.dataflow.input_set = (function input_set(changes,f,input_paths){return cljs.core.set.call(null,f.call(null,(function (x){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.descendant_QMARK_,x),input_paths);
}),changes));
});
foundation.app.dataflow.update_input_sets = (function update_input_sets(m,ks,f,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),foundation.app.dataflow.input_set,f,input_paths);
}),m,ks);
});
foundation.app.dataflow.flow_input = (function flow_input(context,state,input_paths,change){return foundation.app.dataflow.update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"new-model","new-model",3618698286),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"old-model","old-model",1443313525),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null))),new cljs.core.Keyword(null,"input-paths","input-paths",3910795421),input_paths),cljs.core.select_keys.call(null,change,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null),cljs.core.filter,input_paths);
});
foundation.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){var G__53167 = args_key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",2558708147),G__53167))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single-val","single-val",1926385550),G__53167))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.dataflow.single_val.call(null,inputs)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),G__53167))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.dataflow.input_map.call(null,inputs,arg_names)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__53167))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.dataflow.input_map.call(null,inputs,arg_names)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vals","vals",1017516260),G__53167))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.dataflow.input_vals.call(null,inputs)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
} else
{return null;
}
}
}
}
}
}
});
/**
* Execute each derive function in dependency order only if some input to the
* function has changed. Return an updated flow state.
*/
foundation.app.dataflow.derive_phase = (function derive_phase(p__53168){var map__53174 = p__53168;var map__53174__$1 = ((cljs.core.seq_QMARK_.call(null,map__53174))?cljs.core.apply.call(null,cljs.core.hash_map,map__53174):map__53174);var state = map__53174__$1;var context = cljs.core.get.call(null,map__53174__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__53174__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var derives = new cljs.core.Keyword(null,"derive","derive",3973595801).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.reduce.call(null,(function (p__53175,p__53176){var map__53177 = p__53175;var map__53177__$1 = ((cljs.core.seq_QMARK_.call(null,map__53177))?cljs.core.apply.call(null,cljs.core.hash_map,map__53177):map__53177);var acc = map__53177__$1;var change = cljs.core.get.call(null,map__53177__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__53178 = p__53176;var map__53178__$1 = ((cljs.core.seq_QMARK_.call(null,map__53178))?cljs.core.apply.call(null,cljs.core.hash_map,map__53178):map__53178);var input_paths = cljs.core.get.call(null,map__53178__$1,new cljs.core.Keyword(null,"in","in",1013907607));var derive_fn = cljs.core.get.call(null,map__53178__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var out_path = cljs.core.get.call(null,map__53178__$1,new cljs.core.Keyword(null,"out","out",1014014656));var args = cljs.core.get.call(null,map__53178__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__53178__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.apply.call(null,foundation.app.dataflow.apply_in,acc,out_path,derive_fn,foundation.app.dataflow.dataflow_fn_args.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
foundation.app.dataflow.output_phase = (function output_phase(p__53179,k){var map__53185 = p__53179;var map__53185__$1 = ((cljs.core.seq_QMARK_.call(null,map__53185))?cljs.core.apply.call(null,cljs.core.hash_map,map__53185):map__53185);var state = map__53185__$1;var context = cljs.core.get.call(null,map__53185__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__53185__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var fns = k.call(null,dataflow);return cljs.core.reduce.call(null,(function (p__53186,p__53187){var map__53188 = p__53186;var map__53188__$1 = ((cljs.core.seq_QMARK_.call(null,map__53188))?cljs.core.apply.call(null,cljs.core.hash_map,map__53188):map__53188);var acc = map__53188__$1;var change = cljs.core.get.call(null,map__53188__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__53189 = p__53187;var map__53189__$1 = ((cljs.core.seq_QMARK_.call(null,map__53189))?cljs.core.apply.call(null,cljs.core.hash_map,map__53189):map__53189);var f = cljs.core.get.call(null,map__53189__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var input_paths = cljs.core.get.call(null,map__53189__$1,new cljs.core.Keyword(null,"in","in",1013907607));var args = cljs.core.get.call(null,map__53189__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__53189__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),k], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,f,foundation.app.dataflow.dataflow_fn_args.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names)));
} else
{return acc;
}
}),state,fns);
});
/**
* Execute each continue function. Return an updated flow state.
*/
foundation.app.dataflow.continue_phase = (function continue_phase(state){return foundation.app.dataflow.output_phase.call(null,state,new cljs.core.Keyword(null,"continue","continue",4741668889));
});
/**
* Execute each effect function. Return an updated flow state.
*/
foundation.app.dataflow.effect_phase = (function effect_phase(state){return foundation.app.dataflow.output_phase.call(null,state,new cljs.core.Keyword(null,"effect","effect",4002786563));
});
var remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__53190_SHARP_){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,p1__53190_SHARP_),input_paths);
}),change_set));
});
foundation.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),remover,input_paths);
}),change,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598),new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null));
});
foundation.app.dataflow.emit_phase = (function emit_phase(p__53191){var map__53197 = p__53191;var map__53197__$1 = ((cljs.core.seq_QMARK_.call(null,map__53197))?cljs.core.apply.call(null,cljs.core.hash_map,map__53197):map__53197);var state = map__53197__$1;var change = cljs.core.get.call(null,map__53197__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__53197__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__53197__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var emits = new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,(function (p__53198,p__53199){var map__53200 = p__53198;var map__53200__$1 = ((cljs.core.seq_QMARK_.call(null,map__53200))?cljs.core.apply.call(null,cljs.core.hash_map,map__53200):map__53200);var acc = map__53200__$1;var processed_inputs = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__53201 = p__53199;var map__53201__$1 = ((cljs.core.seq_QMARK_.call(null,map__53201))?cljs.core.apply.call(null,cljs.core.hash_map,map__53201):map__53201);var input_paths = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"in","in",1013907607));var emit_fn = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var mode = cljs.core.get.call(null,map__53201__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var report_change = ((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"always","always",3894314369)))?change__$1:remaining_change);if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"change","change",3947235106),report_change),input_paths)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], null),foundation.app.dataflow.remove_matching_changes,input_paths),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),emit_fn.call(null,cljs.core.assoc.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,report_change),new cljs.core.Keyword(null,"mode","mode",1017261333),mode,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs)));
} else
{return acc;
}
}),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873),change),emits),new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));
});
/**
* Given a dataflow, a state and a message, run the message through
* the dataflow and return the updated state. The dataflow will be
* run only once.
*/
foundation.app.dataflow.flow_phases_step = (function flow_phases_step(state,dataflow,message){var state__$1 = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"continue","continue",4741668889));return foundation.app.dataflow.continue_phase.call(null,foundation.app.dataflow.derive_phase.call(null,foundation.app.dataflow.transform_phase.call(null,cljs.core.assoc_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message))));
});
foundation.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){var map__53206 = foundation.app.dataflow.flow_phases_step.call(null,state,dataflow,message);var map__53206__$1 = ((cljs.core.seq_QMARK_.call(null,map__53206))?cljs.core.apply.call(null,cljs.core.hash_map,map__53206):map__53206);var result = map__53206__$1;var map__53207 = cljs.core.get.call(null,map__53206__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__53207__$1 = ((cljs.core.seq_QMARK_.call(null,map__53207))?cljs.core.apply.call(null,cljs.core.hash_map,map__53207):map__53207);var continue$ = cljs.core.get.call(null,map__53207__$1,new cljs.core.Keyword(null,"continue","continue",4741668889));var input = cljs.core.filter.call(null,((function (map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$){
return (function (p1__53202_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__53202_SHARP_));
});})(map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$))
,continue$);var continue$__$1 = cljs.core.remove.call(null,((function (map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$,input){
return (function (p1__53203_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__53203_SHARP_));
});})(map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$,input))
,continue$);var new_state = ((cljs.core.empty_QMARK_.call(null,continue$__$1))?cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"continue","continue",4741668889)):cljs.core.reduce.call(null,((function (map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$,input,continue$__$1){
return (function (a,c_message){return run_flow_phases.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(a)),dataflow,c_message);
});})(map__53206,map__53206__$1,result,map__53207,map__53207__$1,continue$,input,continue$__$1))
,result,continue$__$1));if(cljs.core.empty_QMARK_.call(null,input))
{return new_state;
} else
{return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"continue-inputs","continue-inputs",2996869441)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input);
}
});
foundation.app.dataflow.add_default = (function add_default(v,d){var or__6304__auto__ = v;if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{return d;
}
});
/**
* Add a propagator predicate to each input path returning a set of
* input paths.
* 
* The single argument version will add the default propagator
* predicate.
*/
foundation.app.dataflow.with_propagator = (function() {
var with_propagator = null;
var with_propagator__1 = (function (ins){return with_propagator.call(null,ins,foundation.app.dataflow.input_change_propagator);
});
var with_propagator__2 = (function (ins,propagator){return cljs.core.set.call(null,cljs.core.mapv.call(null,(function (i){if(cljs.core.truth_(new cljs.core.Keyword(null,"propagator","propagator",4257587985).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,i))))
{return i;
} else
{return cljs.core.vary_meta.call(null,i,cljs.core.assoc,new cljs.core.Keyword(null,"propagator","propagator",4257587985),propagator);
}
}),ins));
});
with_propagator = function(ins,propagator){
switch(arguments.length){
case 1:
return with_propagator__1.call(this,ins);
case 2:
return with_propagator__2.call(this,ins,propagator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
with_propagator.cljs$core$IFn$_invoke$arity$1 = with_propagator__1;
with_propagator.cljs$core$IFn$_invoke$arity$2 = with_propagator__2;
return with_propagator;
})()
;
foundation.app.dataflow.transform_maps = (function transform_maps(transforms){return cljs.core.mapv.call(null,(function (x){if(cljs.core.vector_QMARK_.call(null,x))
{var vec__53209 = x;var key = cljs.core.nth.call(null,vec__53209,0,null);var out = cljs.core.nth.call(null,vec__53209,1,null);var fn = cljs.core.nth.call(null,vec__53209,2,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),key,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn], null);
} else
{return x;
}
}),transforms);
});
foundation.app.dataflow.add_arg_names = (function add_arg_names(p__53210){var map__53212 = p__53210;var map__53212__$1 = ((cljs.core.seq_QMARK_.call(null,map__53212))?cljs.core.apply.call(null,cljs.core.hash_map,map__53212):map__53212);var m = map__53212__$1;var in$ = cljs.core.get.call(null,map__53212__$1,new cljs.core.Keyword(null,"in","in",1013907607));var arg_names = ((cljs.core.map_QMARK_.call(null,in$))?in$:null);var in$__$1 = ((cljs.core.map_QMARK_.call(null,in$))?cljs.core.set.call(null,cljs.core.keys.call(null,in$)):in$);return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"in","in",1013907607),in$__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499),arg_names);
});
foundation.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){return cljs.core.mapv.call(null,(function (x){return cljs.core.update_in.call(null,foundation.app.dataflow.add_arg_names.call(null,((cljs.core.vector_QMARK_.call(null,x))?f.call(null,x):x)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",1013907607)], null),foundation.app.dataflow.with_propagator);
}),coll);
});
foundation.app.dataflow.derive_maps = (function derive_maps(derives){return foundation.app.dataflow.dataflow_maps.call(null,derives,(function (p__53215){var vec__53216 = p__53215;var in$ = cljs.core.nth.call(null,vec__53216,0,null);var out = cljs.core.nth.call(null,vec__53216,1,null);var fn = cljs.core.nth.call(null,vec__53216,2,null);var args = cljs.core.nth.call(null,vec__53216,3,null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], null);
}));
});
foundation.app.dataflow.output_maps = (function output_maps(outputs){return foundation.app.dataflow.dataflow_maps.call(null,outputs,(function (p__53219){var vec__53220 = p__53219;var in$ = cljs.core.nth.call(null,vec__53220,0,null);var fn = cljs.core.nth.call(null,vec__53220,1,null);var args = cljs.core.nth.call(null,vec__53220,2,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], null);
}));
});
/**
* Given a dataflow description map, return a dataflow engine. An example dataflow
* configuration is shown below:
* 
* {:transform [[:op [:output :path] transform-fn]]
* :effect    #{{:fn effect-fn :in #{[:input :path]}}}
* :derive    #{{:fn derive-fn :in #{[:input :path]} :out [:output :path]}}
* :continue  #{{:fn some-continue-fn :in #{[:input :path]}}}
* :emit      [[#{[:input :path]} emit-fn]]}
* 
*/
foundation.app.dataflow.build = (function build(description){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,description,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",2066570974)], null),foundation.app.dataflow.transform_maps),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derive","derive",3973595801)], null),foundation.app.dataflow.derive_maps),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continue","continue",4741668889)], null),cljs.core.comp.call(null,cljs.core.set,foundation.app.dataflow.output_maps)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effect","effect",4002786563)], null),cljs.core.comp.call(null,cljs.core.set,foundation.app.dataflow.output_maps)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",1017021253)], null),foundation.app.dataflow.output_maps),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derive","derive",3973595801)], null),foundation.app.dataflow.sort_derive_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214)], null),foundation.app.dataflow.add_default,cljs.core.identity);
});
foundation.app.dataflow.run = (function run(model,dataflow,message){var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826),dataflow,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], null);var new_state = foundation.app.dataflow.run_flow_phases.call(null,state,dataflow,message);return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(foundation.app.dataflow.emit_phase.call(null,foundation.app.dataflow.effect_phase.call(null,cljs.core.assoc_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], null),message))));
});
