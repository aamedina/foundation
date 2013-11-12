// Compiled by ClojureScript 0.0-2030
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__48173 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?cljs.core.PersistentVector.fromArray([path_a,path_b], true):cljs.core.PersistentVector.fromArray([path_b,path_a], true));var small = cljs.core.nth.call(null,vec__48173,0,null);var large = cljs.core.nth.call(null,vec__48173,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__48175){var vec__48177 = p__48175;var x = cljs.core.nth.call(null,vec__48177,0,null);var xs = cljs.core.nthnext.call(null,vec__48177,1);if(cljs.core.truth_((function (){var and__7430__auto__ = x;if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__7430__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__48174_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__48174_SHARP_),cljs.core.conj.call(null,context,p1__48174_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([context,data], true)], true);
}
});
get_path = function(data,context,p__48175){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__48175);
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
{return cljs.core.reduce.call(null,(function (a,p__48180){var vec__48181 = p__48180;var k = cljs.core.nth.call(null,vec__48181,0,null);var v = cljs.core.nth.call(null,vec__48181,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__48182,arg_names){var map__48200 = p__48182;var map__48200__$1 = ((cljs.core.seq_QMARK_.call(null,map__48200))?cljs.core.apply.call(null,cljs.core.hash_map,map__48200):map__48200);var input_paths = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__48200__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__48201){var vec__48202 = p__48201;var k = cljs.core.nth.call(null,vec__48202,0,null);var v = cljs.core.nth.call(null,vec__48202,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = (function iter__48203(s__48204){return (new cljs.core.LazySeq(null,(function (){var s__48204__$1 = s__48204;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48204__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8121__auto__ = ((function (s__48204__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__48205(s__48206){return (new cljs.core.LazySeq(null,((function (s__48204__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__48206__$1 = s__48206;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__48206__$1);if(temp__4092__auto____$1)
{var s__48206__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__48206__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__48206__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__48208 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__48207 = 0;while(true){
if((i__48207 < size__8124__auto__))
{var vec__48215 = cljs.core._nth.call(null,c__8123__auto__,i__48207);var k = cljs.core.nth.call(null,vec__48215,0,null);var v = cljs.core.nth.call(null,vec__48215,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__48208,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true));
{
var G__48217 = (i__48207 + 1);
i__48207 = G__48217;
continue;
}
} else
{{
var G__48218 = (i__48207 + 1);
i__48207 = G__48218;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48208),iter__48205.call(null,cljs.core.chunk_rest.call(null,s__48206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48208),null);
}
} else
{var vec__48216 = cljs.core.first.call(null,s__48206__$2);var k = cljs.core.nth.call(null,vec__48216,0,null);var v = cljs.core.nth.call(null,vec__48216,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([rekey.call(null,k,path,arg_names),v], true),iter__48205.call(null,cljs.core.rest.call(null,s__48206__$2)));
} else
{{
var G__48219 = cljs.core.rest.call(null,s__48206__$2);
s__48206__$1 = G__48219;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__48204__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__48204__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8122__auto__ = cljs.core.seq.call(null,iterys__8121__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__8122__auto__)
{return cljs.core.concat.call(null,fs__8122__auto__,iter__48203.call(null,cljs.core.rest.call(null,s__48204__$1)));
} else
{{
var G__48220 = cljs.core.rest.call(null,s__48204__$1);
s__48204__$1 = G__48220;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,input_paths);
})());
});
input_map = function(p__48182,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__48182);
case 2:
return input_map__2.call(this,p__48182,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__48236 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__48236,0,null);var change_paths = cljs.core.nth.call(null,vec__48236,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = (function iter__48237(s__48238){return (new cljs.core.LazySeq(null,(function (){var s__48238__$1 = s__48238;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48238__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8121__auto__ = ((function (s__48238__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__48239(s__48240){return (new cljs.core.LazySeq(null,((function (s__48238__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__48240__$1 = s__48240;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__48240__$1);if(temp__4092__auto____$1)
{var s__48240__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__48240__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__48240__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__48242 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__48241 = 0;while(true){
if((i__48241 < size__8124__auto__))
{var vec__48249 = cljs.core._nth.call(null,c__8123__auto__,i__48241);var k = cljs.core.nth.call(null,vec__48249,0,null);var v = cljs.core.nth.call(null,vec__48249,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__48242,cljs.core.PersistentVector.fromArray([k,v], true));
{
var G__48251 = (i__48241 + 1);
i__48241 = G__48251;
continue;
}
} else
{{
var G__48252 = (i__48241 + 1);
i__48241 = G__48252;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48242),iter__48239.call(null,cljs.core.chunk_rest.call(null,s__48240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48242),null);
}
} else
{var vec__48250 = cljs.core.first.call(null,s__48240__$2);var k = cljs.core.nth.call(null,vec__48250,0,null);var v = cljs.core.nth.call(null,vec__48250,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),iter__48239.call(null,cljs.core.rest.call(null,s__48240__$2)));
} else
{{
var G__48253 = cljs.core.rest.call(null,s__48240__$2);
s__48240__$1 = G__48253;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__48238__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__48238__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8122__auto__ = cljs.core.seq.call(null,iterys__8121__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__8122__auto__)
{return cljs.core.concat.call(null,fs__8122__auto__,iter__48237.call(null,cljs.core.rest.call(null,s__48238__$1)));
} else
{{
var G__48254 = cljs.core.rest.call(null,s__48238__$1);
s__48238__$1 = G__48254;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__48258){var vec__48259 = p__48258;var k = cljs.core.nth.call(null,vec__48259,0,null);var v = cljs.core.nth.call(null,vec__48259,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__48255_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__48255_SHARP_);
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
foundation.app.dataflow.old_and_new = (function old_and_new(inputs,path){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"old","old",1014014361),cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"old-model","old-model",1443313525)], true),path)),new cljs.core.Keyword(null,"new","new",1014013202),cljs.core.get_in.call(null,inputs,cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new-model","new-model",3618698286)], true),path))], true);
});
var actual_input_paths = (function actual_input_paths(p__48261){var map__48277 = p__48261;var map__48277__$1 = ((cljs.core.seq_QMARK_.call(null,map__48277))?cljs.core.apply.call(null,cljs.core.hash_map,map__48277):map__48277);var input_paths = cljs.core.get.call(null,map__48277__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__48277__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__8125__auto__ = (function iter__48278(s__48279){return (new cljs.core.LazySeq(null,(function (){var s__48279__$1 = s__48279;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48279__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8121__auto__ = ((function (s__48279__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__48280(s__48281){return (new cljs.core.LazySeq(null,((function (s__48279__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__48281__$1 = s__48281;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__48281__$1);if(temp__4092__auto____$1)
{var s__48281__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__48281__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__48281__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__48283 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__48282 = 0;while(true){
if((i__48282 < size__8124__auto__))
{var vec__48290 = cljs.core._nth.call(null,c__8123__auto__,i__48282);var k = cljs.core.nth.call(null,vec__48290,0,null);var v = cljs.core.nth.call(null,vec__48290,1,null);cljs.core.chunk_append.call(null,b__48283,k);
{
var G__48292 = (i__48282 + 1);
i__48282 = G__48292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48283),iter__48280.call(null,cljs.core.chunk_rest.call(null,s__48281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48283),null);
}
} else
{var vec__48291 = cljs.core.first.call(null,s__48281__$2);var k = cljs.core.nth.call(null,vec__48291,0,null);var v = cljs.core.nth.call(null,vec__48291,1,null);return cljs.core.cons.call(null,k,iter__48280.call(null,cljs.core.rest.call(null,s__48281__$2)));
}
} else
{return null;
}
break;
}
});})(s__48279__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__48279__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8122__auto__ = cljs.core.seq.call(null,iterys__8121__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__8122__auto__)
{return cljs.core.concat.call(null,fs__8122__auto__,iter__48278.call(null,cljs.core.rest.call(null,s__48279__$1)));
} else
{{
var G__48293 = cljs.core.rest.call(null,s__48279__$1);
s__48279__$1 = G__48293;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__48260_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__48260_SHARP_);
}),changed_paths));
}),cljs.core.PersistentArrayMap.EMPTY,input_paths);
});
foundation.app.dataflow.removed_inputs = (function removed_inputs(inputs){var paths = actual_input_paths.call(null,inputs);return cljs.core.into.call(null,removed.call(null,paths,cljs.core.keys.call(null,foundation.app.dataflow.removed_map.call(null,inputs)),(function (m,path,changed_path){if((cljs.core.count.call(null,changed_path) <= cljs.core.count.call(null,path)))
{return cljs.core.assoc.call(null,m,path,new cljs.core.Keyword("foundation.app.dataflow","removed","foundation.app.dataflow/removed",1695566986));
} else
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new-model","new-model",3618698286)], true),path)));
}
})),removed.call(null,paths,cljs.core.keys.call(null,foundation.app.dataflow.updated_map.call(null,inputs)),(function (m,path,changed_path){if((cljs.core.count.call(null,changed_path) < cljs.core.count.call(null,path)))
{var new_m = new cljs.core.Keyword(null,"new-model","new-model",3618698286).cljs$core$IFn$_invoke$arity$1(inputs);var parent = cljs.core.butlast.call(null,path);var k = cljs.core.last.call(null,path);var parent_m = ((cljs.core.seq.call(null,parent))?cljs.core.get_in.call(null,new_m,parent):new_m);if(cljs.core.contains_QMARK_.call(null,parent_m,k))
{return cljs.core.assoc.call(null,m,path,cljs.core.get_in.call(null,inputs,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new-model","new-model",3618698286)], true),path)));
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
{var graph__$1 = cljs.core.assoc_in.call(null,graph,cljs.core.PersistentVector.fromArray([node,new cljs.core.Keyword(null,"visited","visited",1480664732)], true),true);var graph__$2 = cljs.core.reduce.call(null,topo_visit,graph__$1,new cljs.core.Keyword(null,"deps","deps",1016983990).cljs$core$IFn$_invoke$arity$1(n));return cljs.core.assoc.call(null,graph__$2,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272),cljs.core.conj.call(null,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272).cljs$core$IFn$_invoke$arity$1(graph__$2),node));
}
});
/**
* Return a sorted sequence of derive function configurations.
*/
foundation.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){var derive_fns__$1 = cljs.core.map.call(null,(function (p1__48294_SHARP_){return cljs.core.assoc.call(null,p1__48294_SHARP_,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.gensym.call(null));
}),derive_fns);var index = cljs.core.reduce.call(null,((function (derive_fns__$1){
return (function (a,x){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);var deps = (function (){var iter__8125__auto__ = ((function (derive_fns__$1,index){
return (function iter__48307(s__48308){return (new cljs.core.LazySeq(null,((function (derive_fns__$1,index){
return (function (){var s__48308__$1 = s__48308;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__48308__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__48314 = cljs.core.first.call(null,xs__4579__auto__);var map__48314__$1 = ((cljs.core.seq_QMARK_.call(null,map__48314))?cljs.core.apply.call(null,cljs.core.hash_map,map__48314):map__48314);var id = cljs.core.get.call(null,map__48314__$1,new cljs.core.Keyword(null,"id","id",1013907597));var out = cljs.core.get.call(null,map__48314__$1,new cljs.core.Keyword(null,"out","out",1014014656));var in$ = cljs.core.get.call(null,map__48314__$1,new cljs.core.Keyword(null,"in","in",1013907607));var iterys__8121__auto__ = ((function (s__48308__$1,map__48314,map__48314__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function iter__48309(s__48310){return (new cljs.core.LazySeq(null,((function (s__48308__$1,map__48314,map__48314__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index){
return (function (){var s__48310__$1 = s__48310;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__48310__$1);if(temp__4092__auto____$1)
{var s__48310__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__48310__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__48310__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__48312 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__48311 = 0;while(true){
if((i__48311 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__48311);cljs.core.chunk_append.call(null,b__48312,cljs.core.PersistentVector.fromArray([id,i,out], true));
{
var G__48319 = (i__48311 + 1);
i__48311 = G__48319;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48312),iter__48309.call(null,cljs.core.chunk_rest.call(null,s__48310__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48312),null);
}
} else
{var i = cljs.core.first.call(null,s__48310__$2);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([id,i,out], true),iter__48309.call(null,cljs.core.rest.call(null,s__48310__$2)));
}
} else
{return null;
}
break;
}
});})(s__48308__$1,map__48314,map__48314__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
,null,null));
});})(s__48308__$1,map__48314,map__48314__$1,id,out,in$,xs__4579__auto__,temp__4092__auto__,derive_fns__$1,index))
;var fs__8122__auto__ = cljs.core.seq.call(null,iterys__8121__auto__.call(null,in$));if(fs__8122__auto__)
{return cljs.core.concat.call(null,fs__8122__auto__,iter__48307.call(null,cljs.core.rest.call(null,s__48308__$1)));
} else
{{
var G__48320 = cljs.core.rest.call(null,s__48308__$1);
s__48308__$1 = G__48320;
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
;return iter__8125__auto__.call(null,derive_fns__$1);
})();var graph = cljs.core.reduce.call(null,((function (derive_fns__$1,index,deps){
return (function (a,p__48315){var vec__48316 = p__48315;var f = cljs.core.nth.call(null,vec__48316,0,null);var _ = cljs.core.nth.call(null,vec__48316,1,null);var out = cljs.core.nth.call(null,vec__48316,2,null);return cljs.core.assoc.call(null,a,f,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"deps","deps",1016983990),cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__48316,f,_,out,derive_fns__$1,index,deps){
return (function (p__48317){var vec__48318 = p__48317;var ___$1 = cljs.core.nth.call(null,vec__48318,0,null);var in$ = cljs.core.nth.call(null,vec__48318,1,null);return foundation.app.dataflow.descendant_QMARK_.call(null,in$,out);
});})(vec__48316,f,_,out,derive_fns__$1,index,deps))
,deps)))], true));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (a,b){return cljs.core.conj.call(null,a,cljs.core.dissoc.call(null,cljs.core.get.call(null,index,b),new cljs.core.Keyword(null,"id","id",1013907597)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,foundation.app.dataflow.topo_visit,cljs.core.assoc.call(null,graph,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272),cljs.core.PersistentVector.EMPTY),cljs.core.keys.call(null,graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
foundation.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){return new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__48324){var map__48325 = p__48324;var map__48325__$1 = ((cljs.core.seq_QMARK_.call(null,map__48325))?cljs.core.apply.call(null,cljs.core.hash_map,map__48325):map__48325);var op = cljs.core.get.call(null,map__48325__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__48325__$1,new cljs.core.Keyword(null,"out","out",1014014656));var vec__48326 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"**","**",1013905586)))?(function (){var c = cljs.core.count.call(null,path);return cljs.core.PersistentVector.fromArray([cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(c - 1),path)),new cljs.core.Keyword(null,"*","*",1013904284)),cljs.core.vec.call(null,cljs.core.take.call(null,c,out_path))], true);
})():cljs.core.PersistentVector.fromArray([path,out_path], true));var path__$1 = cljs.core.nth.call(null,vec__48326,0,null);var out_path__$1 = cljs.core.nth.call(null,vec__48326,1,null);var and__7430__auto__ = foundation.app.dataflow.matching_path_element_QMARK_.call(null,op,key);if(cljs.core.truth_(and__7430__auto__))
{return foundation.app.dataflow.matching_path_QMARK_.call(null,path__$1,out_path__$1);
} else
{return and__7430__auto__;
}
}),transforms)));
});
foundation.app.dataflow.merge_changes = (function merge_changes(old_changes,new_changes){return cljs.core.merge_with.call(null,cljs.core.into,old_changes,new_changes);
});
foundation.app.dataflow.update_flow_state = (function update_flow_state(state,tracking_map){return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], true),cljs.core.deref.call(null,tracking_map)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"change","change",3947235106)], true),foundation.app.dataflow.merge_changes,foundation.app.data.tracking_map.changes.call(null,tracking_map));
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
track_update_in.cljs$lang$applyTo = (function (arglist__48327){
var data_model = cljs.core.first(arglist__48327);
arglist__48327 = cljs.core.next(arglist__48327);
var out_path = cljs.core.first(arglist__48327);
arglist__48327 = cljs.core.next(arglist__48327);
var f = cljs.core.first(arglist__48327);
var args = cljs.core.rest(arglist__48327);
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
var apply_in__delegate = function (state,out_path,f,args){var data_model = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], true));var new_data_model = cljs.core.apply.call(null,foundation.app.dataflow.track_update_in,data_model,out_path,f,args);return foundation.app.dataflow.update_flow_state.call(null,state,new_data_model);
};
var apply_in = function (state,out_path,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return apply_in__delegate.call(this,state,out_path,f,args);};
apply_in.cljs$lang$maxFixedArity = 3;
apply_in.cljs$lang$applyTo = (function (arglist__48328){
var state = cljs.core.first(arglist__48328);
arglist__48328 = cljs.core.next(arglist__48328);
var out_path = cljs.core.first(arglist__48328);
arglist__48328 = cljs.core.next(arglist__48328);
var f = cljs.core.first(arglist__48328);
var args = cljs.core.rest(arglist__48328);
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
foundation.app.dataflow.transform_phase = (function transform_phase(p__48329){var map__48332 = p__48329;var map__48332__$1 = ((cljs.core.seq_QMARK_.call(null,map__48332))?cljs.core.apply.call(null,cljs.core.hash_map,map__48332):map__48332);var state = map__48332__$1;var context = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var new$ = cljs.core.get.call(null,map__48332__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__48333 = new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214).cljs$core$IFn$_invoke$arity$1(dataflow).call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var map__48333__$1 = ((cljs.core.seq_QMARK_.call(null,map__48333))?cljs.core.apply.call(null,cljs.core.hash_map,map__48333):map__48333);var out_path = cljs.core.get.call(null,map__48333__$1,new cljs.core.Keyword(null,"out","out",1014014656));var key = cljs.core.get.call(null,map__48333__$1,new cljs.core.Keyword(null,"key","key",1014010321));var transform_fn = foundation.app.dataflow.find_message_transformer.call(null,new cljs.core.Keyword(null,"transform","transform",2066570974).cljs$core$IFn$_invoke$arity$1(dataflow),out_path,key);if(cljs.core.truth_(transform_fn))
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
foundation.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__48334,input_paths){var map__48336 = p__48334;var map__48336__$1 = ((cljs.core.seq_QMARK_.call(null,map__48336))?cljs.core.apply.call(null,cljs.core.hash_map,map__48336):map__48336);var state = map__48336__$1;var change = cljs.core.get.call(null,map__48336__$1,new cljs.core.Keyword(null,"change","change",3947235106));var changed_inputs = ((cljs.core.seq.call(null,change))?cljs.core.reduce.call(null,cljs.core.into,cljs.core.vals.call(null,change)):cljs.core.PersistentVector.EMPTY);return cljs.core.some.call(null,(function (input_path){var propagator_pred = new cljs.core.Keyword(null,"propagator","propagator",4257587985).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,input_path));return propagator_pred.call(null,state,changed_inputs,input_path);
}),input_paths);
});
foundation.app.dataflow.input_set = (function input_set(changes,f,input_paths){return cljs.core.set.call(null,f.call(null,(function (x){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.descendant_QMARK_,x),input_paths);
}),changes));
});
foundation.app.dataflow.update_input_sets = (function update_input_sets(m,ks,f,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),foundation.app.dataflow.input_set,f,input_paths);
}),m,ks);
});
foundation.app.dataflow.flow_input = (function flow_input(context,state,input_paths,change){return foundation.app.dataflow.update_input_sets.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"new-model","new-model",3618698286),cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], true))),new cljs.core.Keyword(null,"old-model","old-model",1443313525),cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"data-model","data-model",1196427960)], true))),new cljs.core.Keyword(null,"input-paths","input-paths",3910795421),input_paths),cljs.core.select_keys.call(null,change,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], true))),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], true),cljs.core.filter,input_paths);
});
foundation.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){var G__48338 = args_key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",2558708147),G__48338))
{return cljs.core.PersistentVector.fromArray([inputs], true);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single-val","single-val",1926385550),G__48338))
{return cljs.core.PersistentVector.fromArray([foundation.app.dataflow.single_val.call(null,inputs)], true);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),G__48338))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.dataflow.input_map.call(null,inputs,arg_names)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__48338))
{return cljs.core.PersistentVector.fromArray([foundation.app.dataflow.input_map.call(null,inputs,arg_names)], true);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vals","vals",1017516260),G__48338))
{return cljs.core.PersistentVector.fromArray([foundation.app.dataflow.input_vals.call(null,inputs)], true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentVector.fromArray([inputs], true);
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
foundation.app.dataflow.derive_phase = (function derive_phase(p__48339){var map__48345 = p__48339;var map__48345__$1 = ((cljs.core.seq_QMARK_.call(null,map__48345))?cljs.core.apply.call(null,cljs.core.hash_map,map__48345):map__48345);var state = map__48345__$1;var context = cljs.core.get.call(null,map__48345__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__48345__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var derives = new cljs.core.Keyword(null,"derive","derive",3973595801).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.reduce.call(null,(function (p__48346,p__48347){var map__48348 = p__48346;var map__48348__$1 = ((cljs.core.seq_QMARK_.call(null,map__48348))?cljs.core.apply.call(null,cljs.core.hash_map,map__48348):map__48348);var acc = map__48348__$1;var change = cljs.core.get.call(null,map__48348__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__48349 = p__48347;var map__48349__$1 = ((cljs.core.seq_QMARK_.call(null,map__48349))?cljs.core.apply.call(null,cljs.core.hash_map,map__48349):map__48349);var input_paths = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"in","in",1013907607));var derive_fn = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var out_path = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"out","out",1014014656));var args = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__48349__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.apply.call(null,foundation.app.dataflow.apply_in,acc,out_path,derive_fn,foundation.app.dataflow.dataflow_fn_args.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
foundation.app.dataflow.output_phase = (function output_phase(p__48350,k){var map__48356 = p__48350;var map__48356__$1 = ((cljs.core.seq_QMARK_.call(null,map__48356))?cljs.core.apply.call(null,cljs.core.hash_map,map__48356):map__48356);var state = map__48356__$1;var context = cljs.core.get.call(null,map__48356__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__48356__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var fns = k.call(null,dataflow);return cljs.core.reduce.call(null,(function (p__48357,p__48358){var map__48359 = p__48357;var map__48359__$1 = ((cljs.core.seq_QMARK_.call(null,map__48359))?cljs.core.apply.call(null,cljs.core.hash_map,map__48359):map__48359);var acc = map__48359__$1;var change = cljs.core.get.call(null,map__48359__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__48360 = p__48358;var map__48360__$1 = ((cljs.core.seq_QMARK_.call(null,map__48360))?cljs.core.apply.call(null,cljs.core.hash_map,map__48360):map__48360);var f = cljs.core.get.call(null,map__48360__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var input_paths = cljs.core.get.call(null,map__48360__$1,new cljs.core.Keyword(null,"in","in",1013907607));var args = cljs.core.get.call(null,map__48360__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__48360__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),k], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,f,foundation.app.dataflow.dataflow_fn_args.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names)));
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
var remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__48361_SHARP_){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,p1__48361_SHARP_),input_paths);
}),change_set));
});
foundation.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([k], true),remover,input_paths);
}),change,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"inspect","inspect",2971358598),new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], true));
});
foundation.app.dataflow.emit_phase = (function emit_phase(p__48362){var map__48368 = p__48362;var map__48368__$1 = ((cljs.core.seq_QMARK_.call(null,map__48368))?cljs.core.apply.call(null,cljs.core.hash_map,map__48368):map__48368);var state = map__48368__$1;var change = cljs.core.get.call(null,map__48368__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__48368__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__48368__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var emits = new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,(function (p__48369,p__48370){var map__48371 = p__48369;var map__48371__$1 = ((cljs.core.seq_QMARK_.call(null,map__48371))?cljs.core.apply.call(null,cljs.core.hash_map,map__48371):map__48371);var acc = map__48371__$1;var processed_inputs = cljs.core.get.call(null,map__48371__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__48371__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__48371__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__48372 = p__48370;var map__48372__$1 = ((cljs.core.seq_QMARK_.call(null,map__48372))?cljs.core.apply.call(null,cljs.core.hash_map,map__48372):map__48372);var input_paths = cljs.core.get.call(null,map__48372__$1,new cljs.core.Keyword(null,"in","in",1013907607));var emit_fn = cljs.core.get.call(null,map__48372__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var mode = cljs.core.get.call(null,map__48372__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var report_change = ((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"always","always",3894314369)))?change__$1:remaining_change);if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"change","change",3947235106),report_change),input_paths)))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,acc,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873)], true),foundation.app.dataflow.remove_matching_changes,input_paths),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778)], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input_paths),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"emit","emit",1017021253)], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),emit_fn.call(null,cljs.core.assoc.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,report_change),new cljs.core.Keyword(null,"mode","mode",1017261333),mode,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778),processed_inputs)));
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
foundation.app.dataflow.flow_phases_step = (function flow_phases_step(state,dataflow,message){var state__$1 = cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202)], true),cljs.core.dissoc,new cljs.core.Keyword(null,"continue","continue",4741668889));return foundation.app.dataflow.continue_phase.call(null,foundation.app.dataflow.derive_phase.call(null,foundation.app.dataflow.transform_phase.call(null,cljs.core.assoc_in.call(null,state__$1,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], true),message))));
});
foundation.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){var map__48377 = foundation.app.dataflow.flow_phases_step.call(null,state,dataflow,message);var map__48377__$1 = ((cljs.core.seq_QMARK_.call(null,map__48377))?cljs.core.apply.call(null,cljs.core.hash_map,map__48377):map__48377);var result = map__48377__$1;var map__48378 = cljs.core.get.call(null,map__48377__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__48378__$1 = ((cljs.core.seq_QMARK_.call(null,map__48378))?cljs.core.apply.call(null,cljs.core.hash_map,map__48378):map__48378);var continue$ = cljs.core.get.call(null,map__48378__$1,new cljs.core.Keyword(null,"continue","continue",4741668889));var input = cljs.core.filter.call(null,((function (map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$){
return (function (p1__48373_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__48373_SHARP_));
});})(map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$))
,continue$);var continue$__$1 = cljs.core.remove.call(null,((function (map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$,input){
return (function (p1__48374_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__48374_SHARP_));
});})(map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$,input))
,continue$);var new_state = ((cljs.core.empty_QMARK_.call(null,continue$__$1))?cljs.core.update_in.call(null,result,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202)], true),cljs.core.dissoc,new cljs.core.Keyword(null,"continue","continue",4741668889)):cljs.core.reduce.call(null,((function (map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$,input,continue$__$1){
return (function (a,c_message){return run_flow_phases.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(a)),dataflow,c_message);
});})(map__48377,map__48377__$1,result,map__48378,map__48378__$1,continue$,input,continue$__$1))
,result,continue$__$1));if(cljs.core.empty_QMARK_.call(null,input))
{return new_state;
} else
{return cljs.core.update_in.call(null,new_state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"new","new",1014013202),new cljs.core.Keyword(null,"continue-inputs","continue-inputs",2996869441)], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),input);
}
});
foundation.app.dataflow.add_default = (function add_default(v,d){var or__7439__auto__ = v;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
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
{var vec__48380 = x;var key = cljs.core.nth.call(null,vec__48380,0,null);var out = cljs.core.nth.call(null,vec__48380,1,null);var fn = cljs.core.nth.call(null,vec__48380,2,null);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",1014010321),key,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn], true);
} else
{return x;
}
}),transforms);
});
foundation.app.dataflow.add_arg_names = (function add_arg_names(p__48381){var map__48383 = p__48381;var map__48383__$1 = ((cljs.core.seq_QMARK_.call(null,map__48383))?cljs.core.apply.call(null,cljs.core.hash_map,map__48383):map__48383);var m = map__48383__$1;var in$ = cljs.core.get.call(null,map__48383__$1,new cljs.core.Keyword(null,"in","in",1013907607));var arg_names = ((cljs.core.map_QMARK_.call(null,in$))?in$:null);var in$__$1 = ((cljs.core.map_QMARK_.call(null,in$))?cljs.core.set.call(null,cljs.core.keys.call(null,in$)):in$);return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"in","in",1013907607),in$__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499),arg_names);
});
foundation.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){return cljs.core.mapv.call(null,(function (x){return cljs.core.update_in.call(null,foundation.app.dataflow.add_arg_names.call(null,((cljs.core.vector_QMARK_.call(null,x))?f.call(null,x):x)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"in","in",1013907607)], true),foundation.app.dataflow.with_propagator);
}),coll);
});
foundation.app.dataflow.derive_maps = (function derive_maps(derives){return foundation.app.dataflow.dataflow_maps.call(null,derives,(function (p__48386){var vec__48387 = p__48386;var in$ = cljs.core.nth.call(null,vec__48387,0,null);var out = cljs.core.nth.call(null,vec__48387,1,null);var fn = cljs.core.nth.call(null,vec__48387,2,null);var args = cljs.core.nth.call(null,vec__48387,3,null);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], true);
}));
});
foundation.app.dataflow.output_maps = (function output_maps(outputs){return foundation.app.dataflow.dataflow_maps.call(null,outputs,(function (p__48390){var vec__48391 = p__48390;var in$ = cljs.core.nth.call(null,vec__48391,0,null);var fn = cljs.core.nth.call(null,vec__48391,1,null);var args = cljs.core.nth.call(null,vec__48391,2,null);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], true);
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
foundation.app.dataflow.build = (function build(description){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform","transform",2066570974)], true),foundation.app.dataflow.transform_maps),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"derive","derive",3973595801)], true),foundation.app.dataflow.derive_maps),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"continue","continue",4741668889)], true),cljs.core.comp.call(null,cljs.core.set,foundation.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"effect","effect",4002786563)], true),cljs.core.comp.call(null,cljs.core.set,foundation.app.dataflow.output_maps)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"emit","emit",1017021253)], true),foundation.app.dataflow.output_maps),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"derive","derive",3973595801)], true),foundation.app.dataflow.sort_derive_fns),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214)], true),foundation.app.dataflow.add_default,cljs.core.identity);
});
foundation.app.dataflow.run = (function run(model,dataflow,message){var state = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"old","old",1014014361),model,new cljs.core.Keyword(null,"new","new",1014013202),model,new cljs.core.Keyword(null,"change","change",3947235106),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826),dataflow,new cljs.core.Keyword(null,"context","context",1965435169),cljs.core.PersistentArrayMap.EMPTY], true);var new_state = foundation.app.dataflow.run_flow_phases.call(null,state,dataflow,message);return new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(foundation.app.dataflow.emit_phase.call(null,foundation.app.dataflow.effect_phase.call(null,cljs.core.assoc_in.call(null,new_state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"context","context",1965435169),new cljs.core.Keyword(null,"message","message",1968829305)], true),message))));
});
