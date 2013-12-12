// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__28318 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__28318,0,null);var large = cljs.core.nth.call(null,vec__28318,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__28320){var vec__28322 = p__28320;var x = cljs.core.nth.call(null,vec__28322,0,null);var xs = cljs.core.nthnext.call(null,vec__28322,1);if(cljs.core.truth_((function (){var and__13809__auto__ = x;if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13809__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__28319_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__28319_SHARP_),cljs.core.conj.call(null,context,p1__28319_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__28320){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__28320);
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
{return cljs.core.reduce.call(null,(function (a,p__28325){var vec__28326 = p__28325;var k = cljs.core.nth.call(null,vec__28326,0,null);var v = cljs.core.nth.call(null,vec__28326,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__28327,arg_names){var map__28345 = p__28327;var map__28345__$1 = ((cljs.core.seq_QMARK_.call(null,map__28345))?cljs.core.apply.call(null,cljs.core.hash_map,map__28345):map__28345);var input_paths = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__28346){var vec__28347 = p__28346;var k = cljs.core.nth.call(null,vec__28347,0,null);var v = cljs.core.nth.call(null,vec__28347,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = (function iter__28348(s__28349){return (new cljs.core.LazySeq(null,(function (){var s__28349__$1 = s__28349;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28349__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14510__auto__ = ((function (s__28349__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__28350(s__28351){return (new cljs.core.LazySeq(null,((function (s__28349__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__28351__$1 = s__28351;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__28351__$1);if(temp__4092__auto____$1)
{var s__28351__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28351__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__28351__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__28353 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__28352 = 0;while(true){
if((i__28352 < size__14513__auto__))
{var vec__28360 = cljs.core._nth.call(null,c__14512__auto__,i__28352);var k = cljs.core.nth.call(null,vec__28360,0,null);var v = cljs.core.nth.call(null,vec__28360,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__28353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__28362 = (i__28352 + 1);
i__28352 = G__28362;
continue;
}
} else
{{
var G__28363 = (i__28352 + 1);
i__28352 = G__28363;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28353),iter__28350.call(null,cljs.core.chunk_rest.call(null,s__28351__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28353),null);
}
} else
{var vec__28361 = cljs.core.first.call(null,s__28351__$2);var k = cljs.core.nth.call(null,vec__28361,0,null);var v = cljs.core.nth.call(null,vec__28361,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__28350.call(null,cljs.core.rest.call(null,s__28351__$2)));
} else
{{
var G__28364 = cljs.core.rest.call(null,s__28351__$2);
s__28351__$1 = G__28364;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__28349__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__28349__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14511__auto__ = cljs.core.seq.call(null,iterys__14510__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14511__auto__)
{return cljs.core.concat.call(null,fs__14511__auto__,iter__28348.call(null,cljs.core.rest.call(null,s__28349__$1)));
} else
{{
var G__28365 = cljs.core.rest.call(null,s__28349__$1);
s__28349__$1 = G__28365;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,input_paths);
})());
});
input_map = function(p__28327,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__28327);
case 2:
return input_map__2.call(this,p__28327,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__28381 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__28381,0,null);var change_paths = cljs.core.nth.call(null,vec__28381,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = (function iter__28382(s__28383){return (new cljs.core.LazySeq(null,(function (){var s__28383__$1 = s__28383;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28383__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14510__auto__ = ((function (s__28383__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__28384(s__28385){return (new cljs.core.LazySeq(null,((function (s__28383__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__28385__$1 = s__28385;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__28385__$1);if(temp__4092__auto____$1)
{var s__28385__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28385__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__28385__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__28387 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__28386 = 0;while(true){
if((i__28386 < size__14513__auto__))
{var vec__28394 = cljs.core._nth.call(null,c__14512__auto__,i__28386);var k = cljs.core.nth.call(null,vec__28394,0,null);var v = cljs.core.nth.call(null,vec__28394,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__28387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__28396 = (i__28386 + 1);
i__28386 = G__28396;
continue;
}
} else
{{
var G__28397 = (i__28386 + 1);
i__28386 = G__28397;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28387),iter__28384.call(null,cljs.core.chunk_rest.call(null,s__28385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28387),null);
}
} else
{var vec__28395 = cljs.core.first.call(null,s__28385__$2);var k = cljs.core.nth.call(null,vec__28395,0,null);var v = cljs.core.nth.call(null,vec__28395,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__28384.call(null,cljs.core.rest.call(null,s__28385__$2)));
} else
{{
var G__28398 = cljs.core.rest.call(null,s__28385__$2);
s__28385__$1 = G__28398;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__28383__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__28383__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14511__auto__ = cljs.core.seq.call(null,iterys__14510__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14511__auto__)
{return cljs.core.concat.call(null,fs__14511__auto__,iter__28382.call(null,cljs.core.rest.call(null,s__28383__$1)));
} else
{{
var G__28399 = cljs.core.rest.call(null,s__28383__$1);
s__28383__$1 = G__28399;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__28403){var vec__28404 = p__28403;var k = cljs.core.nth.call(null,vec__28404,0,null);var v = cljs.core.nth.call(null,vec__28404,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28400_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__28400_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__28406){var map__28422 = p__28406;var map__28422__$1 = ((cljs.core.seq_QMARK_.call(null,map__28422))?cljs.core.apply.call(null,cljs.core.hash_map,map__28422):map__28422);var input_paths = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14514__auto__ = (function iter__28423(s__28424){return (new cljs.core.LazySeq(null,(function (){var s__28424__$1 = s__28424;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28424__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14510__auto__ = ((function (s__28424__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__28425(s__28426){return (new cljs.core.LazySeq(null,((function (s__28424__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__28426__$1 = s__28426;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__28426__$1);if(temp__4092__auto____$1)
{var s__28426__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28426__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__28426__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__28428 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__28427 = 0;while(true){
if((i__28427 < size__14513__auto__))
{var vec__28435 = cljs.core._nth.call(null,c__14512__auto__,i__28427);var k = cljs.core.nth.call(null,vec__28435,0,null);var v = cljs.core.nth.call(null,vec__28435,1,null);cljs.core.chunk_append.call(null,b__28428,k);
{
var G__28437 = (i__28427 + 1);
i__28427 = G__28437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28428),iter__28425.call(null,cljs.core.chunk_rest.call(null,s__28426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28428),null);
}
} else
{var vec__28436 = cljs.core.first.call(null,s__28426__$2);var k = cljs.core.nth.call(null,vec__28436,0,null);var v = cljs.core.nth.call(null,vec__28436,1,null);return cljs.core.cons.call(null,k,iter__28425.call(null,cljs.core.rest.call(null,s__28426__$2)));
}
} else
{return null;
}
break;
}
});})(s__28424__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__28424__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14511__auto__ = cljs.core.seq.call(null,iterys__14510__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14511__auto__)
{return cljs.core.concat.call(null,fs__14511__auto__,iter__28423.call(null,cljs.core.rest.call(null,s__28424__$1)));
} else
{{
var G__28438 = cljs.core.rest.call(null,s__28424__$1);
s__28424__$1 = G__28438;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__28405_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__28405_SHARP_);
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

//# sourceMappingURL=dataflow.js.map