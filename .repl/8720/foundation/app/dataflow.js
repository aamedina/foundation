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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__18187 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__18187,0,null);var large = cljs.core.nth.call(null,vec__18187,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__18189){var vec__18191 = p__18189;var x = cljs.core.nth.call(null,vec__18191,0,null);var xs = cljs.core.nthnext.call(null,vec__18191,1);if(cljs.core.truth_((function (){var and__6292__auto__ = x;if(cljs.core.truth_(and__6292__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__6292__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__18188_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__18188_SHARP_),cljs.core.conj.call(null,context,p1__18188_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__18189){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__18189);
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
{return cljs.core.reduce.call(null,(function (a,p__18194){var vec__18195 = p__18194;var k = cljs.core.nth.call(null,vec__18195,0,null);var v = cljs.core.nth.call(null,vec__18195,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__18196,arg_names){var map__18214 = p__18196;var map__18214__$1 = ((cljs.core.seq_QMARK_.call(null,map__18214))?cljs.core.apply.call(null,cljs.core.hash_map,map__18214):map__18214);var input_paths = cljs.core.get.call(null,map__18214__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__18214__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__18215){var vec__18216 = p__18215;var k = cljs.core.nth.call(null,vec__18216,0,null);var v = cljs.core.nth.call(null,vec__18216,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6997__auto__ = (function iter__18217(s__18218){return (new cljs.core.LazySeq(null,(function (){var s__18218__$1 = s__18218;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__18218__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__18218__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__18219(s__18220){return (new cljs.core.LazySeq(null,((function (s__18218__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__18220__$1 = s__18220;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__18220__$1);if(temp__4098__auto____$1)
{var s__18220__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18220__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__18220__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__18222 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__18221 = 0;while(true){
if((i__18221 < size__6996__auto__))
{var vec__18229 = cljs.core._nth.call(null,c__6995__auto__,i__18221);var k = cljs.core.nth.call(null,vec__18229,0,null);var v = cljs.core.nth.call(null,vec__18229,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__18222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__18231 = (i__18221 + 1);
i__18221 = G__18231;
continue;
}
} else
{{
var G__18232 = (i__18221 + 1);
i__18221 = G__18232;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18222),iter__18219.call(null,cljs.core.chunk_rest.call(null,s__18220__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18222),null);
}
} else
{var vec__18230 = cljs.core.first.call(null,s__18220__$2);var k = cljs.core.nth.call(null,vec__18230,0,null);var v = cljs.core.nth.call(null,vec__18230,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__18219.call(null,cljs.core.rest.call(null,s__18220__$2)));
} else
{{
var G__18233 = cljs.core.rest.call(null,s__18220__$2);
s__18220__$1 = G__18233;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__18218__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__18218__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__18217.call(null,cljs.core.rest.call(null,s__18218__$1)));
} else
{{
var G__18234 = cljs.core.rest.call(null,s__18218__$1);
s__18218__$1 = G__18234;
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
input_map = function(p__18196,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__18196);
case 2:
return input_map__2.call(this,p__18196,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__18250 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__18250,0,null);var change_paths = cljs.core.nth.call(null,vec__18250,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6997__auto__ = (function iter__18251(s__18252){return (new cljs.core.LazySeq(null,(function (){var s__18252__$1 = s__18252;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__18252__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__18252__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__18253(s__18254){return (new cljs.core.LazySeq(null,((function (s__18252__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__18254__$1 = s__18254;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__18254__$1);if(temp__4098__auto____$1)
{var s__18254__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18254__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__18254__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__18256 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__18255 = 0;while(true){
if((i__18255 < size__6996__auto__))
{var vec__18263 = cljs.core._nth.call(null,c__6995__auto__,i__18255);var k = cljs.core.nth.call(null,vec__18263,0,null);var v = cljs.core.nth.call(null,vec__18263,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__18256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__18265 = (i__18255 + 1);
i__18255 = G__18265;
continue;
}
} else
{{
var G__18266 = (i__18255 + 1);
i__18255 = G__18266;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18256),iter__18253.call(null,cljs.core.chunk_rest.call(null,s__18254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18256),null);
}
} else
{var vec__18264 = cljs.core.first.call(null,s__18254__$2);var k = cljs.core.nth.call(null,vec__18264,0,null);var v = cljs.core.nth.call(null,vec__18264,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__18253.call(null,cljs.core.rest.call(null,s__18254__$2)));
} else
{{
var G__18267 = cljs.core.rest.call(null,s__18254__$2);
s__18254__$1 = G__18267;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__18252__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__18252__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__18251.call(null,cljs.core.rest.call(null,s__18252__$1)));
} else
{{
var G__18268 = cljs.core.rest.call(null,s__18252__$1);
s__18252__$1 = G__18268;
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
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__18272){var vec__18273 = p__18272;var k = cljs.core.nth.call(null,vec__18273,0,null);var v = cljs.core.nth.call(null,vec__18273,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18269_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__18269_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__18275){var map__18291 = p__18275;var map__18291__$1 = ((cljs.core.seq_QMARK_.call(null,map__18291))?cljs.core.apply.call(null,cljs.core.hash_map,map__18291):map__18291);var input_paths = cljs.core.get.call(null,map__18291__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__18291__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__6997__auto__ = (function iter__18292(s__18293){return (new cljs.core.LazySeq(null,(function (){var s__18293__$1 = s__18293;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__18293__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var path = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__18293__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function iter__18294(s__18295){return (new cljs.core.LazySeq(null,((function (s__18293__$1,path,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__18295__$1 = s__18295;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__18295__$1);if(temp__4098__auto____$1)
{var s__18295__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18295__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__18295__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__18297 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__18296 = 0;while(true){
if((i__18296 < size__6996__auto__))
{var vec__18304 = cljs.core._nth.call(null,c__6995__auto__,i__18296);var k = cljs.core.nth.call(null,vec__18304,0,null);var v = cljs.core.nth.call(null,vec__18304,1,null);cljs.core.chunk_append.call(null,b__18297,k);
{
var G__18306 = (i__18296 + 1);
i__18296 = G__18306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18297),iter__18294.call(null,cljs.core.chunk_rest.call(null,s__18295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18297),null);
}
} else
{var vec__18305 = cljs.core.first.call(null,s__18295__$2);var k = cljs.core.nth.call(null,vec__18305,0,null);var v = cljs.core.nth.call(null,vec__18305,1,null);return cljs.core.cons.call(null,k,iter__18294.call(null,cljs.core.rest.call(null,s__18295__$2)));
}
} else
{return null;
}
break;
}
});})(s__18293__$1,path,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__18293__$1,path,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__18292.call(null,cljs.core.rest.call(null,s__18293__$1)));
} else
{{
var G__18307 = cljs.core.rest.call(null,s__18293__$1);
s__18293__$1 = G__18307;
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
}),acc,cljs.core.filter.call(null,(function (p1__18274_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__18274_SHARP_);
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
foundation.app.dataflow.sort_derive_fns = (function sort_derive_fns(derive_fns){var derive_fns__$1 = cljs.core.map.call(null,(function (p1__18308_SHARP_){return cljs.core.assoc.call(null,p1__18308_SHARP_,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.gensym.call(null));
}),derive_fns);var index = cljs.core.reduce.call(null,((function (derive_fns__$1){
return (function (a,x){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(x),x);
});})(derive_fns__$1))
,cljs.core.PersistentArrayMap.EMPTY,derive_fns__$1);var deps = (function (){var iter__6997__auto__ = ((function (derive_fns__$1,index){
return (function iter__18321(s__18322){return (new cljs.core.LazySeq(null,((function (derive_fns__$1,index){
return (function (){var s__18322__$1 = s__18322;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__18322__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var map__18328 = cljs.core.first.call(null,xs__4588__auto__);var map__18328__$1 = ((cljs.core.seq_QMARK_.call(null,map__18328))?cljs.core.apply.call(null,cljs.core.hash_map,map__18328):map__18328);var id = cljs.core.get.call(null,map__18328__$1,new cljs.core.Keyword(null,"id","id",1013907597));var out = cljs.core.get.call(null,map__18328__$1,new cljs.core.Keyword(null,"out","out",1014014656));var in$ = cljs.core.get.call(null,map__18328__$1,new cljs.core.Keyword(null,"in","in",1013907607));var iterys__6993__auto__ = ((function (s__18322__$1,map__18328,map__18328__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index){
return (function iter__18323(s__18324){return (new cljs.core.LazySeq(null,((function (s__18322__$1,map__18328,map__18328__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index){
return (function (){var s__18324__$1 = s__18324;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__18324__$1);if(temp__4098__auto____$1)
{var s__18324__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18324__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__18324__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__18326 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__18325 = 0;while(true){
if((i__18325 < size__6996__auto__))
{var i = cljs.core._nth.call(null,c__6995__auto__,i__18325);cljs.core.chunk_append.call(null,b__18326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,i,out], null));
{
var G__18333 = (i__18325 + 1);
i__18325 = G__18333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18326),iter__18323.call(null,cljs.core.chunk_rest.call(null,s__18324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18326),null);
}
} else
{var i = cljs.core.first.call(null,s__18324__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,i,out], null),iter__18323.call(null,cljs.core.rest.call(null,s__18324__$2)));
}
} else
{return null;
}
break;
}
});})(s__18322__$1,map__18328,map__18328__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index))
,null,null));
});})(s__18322__$1,map__18328,map__18328__$1,id,out,in$,xs__4588__auto__,temp__4098__auto__,derive_fns__$1,index))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,in$));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__18321.call(null,cljs.core.rest.call(null,s__18322__$1)));
} else
{{
var G__18334 = cljs.core.rest.call(null,s__18322__$1);
s__18322__$1 = G__18334;
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
return (function (a,p__18329){var vec__18330 = p__18329;var f = cljs.core.nth.call(null,vec__18330,0,null);var _ = cljs.core.nth.call(null,vec__18330,1,null);var out = cljs.core.nth.call(null,vec__18330,2,null);return cljs.core.assoc.call(null,a,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deps","deps",1016983990),cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (vec__18330,f,_,out,derive_fns__$1,index,deps){
return (function (p__18331){var vec__18332 = p__18331;var ___$1 = cljs.core.nth.call(null,vec__18332,0,null);var in$ = cljs.core.nth.call(null,vec__18332,1,null);return foundation.app.dataflow.descendant_QMARK_.call(null,in$,out);
});})(vec__18330,f,_,out,derive_fns__$1,index,deps))
,deps)))], null));
});})(derive_fns__$1,index,deps))
,cljs.core.PersistentArrayMap.EMPTY,deps);return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (a,b){return cljs.core.conj.call(null,a,cljs.core.dissoc.call(null,cljs.core.get.call(null,index,b),new cljs.core.Keyword(null,"id","id",1013907597)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,foundation.app.dataflow.topo_visit,cljs.core.assoc.call(null,graph,new cljs.core.Keyword("foundation.app.dataflow","order","foundation.app.dataflow/order",3151161272),cljs.core.PersistentVector.EMPTY),cljs.core.keys.call(null,graph)))));
});
/**
* Given a transform configuration vector, find the first transform
* function which matches the given message.
*/
foundation.app.dataflow.find_message_transformer = (function find_message_transformer(transforms,out_path,key){return new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__18338){var map__18339 = p__18338;var map__18339__$1 = ((cljs.core.seq_QMARK_.call(null,map__18339))?cljs.core.apply.call(null,cljs.core.hash_map,map__18339):map__18339);var op = cljs.core.get.call(null,map__18339__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__18339__$1,new cljs.core.Keyword(null,"out","out",1014014656));var vec__18340 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,path),new cljs.core.Keyword(null,"**","**",1013905586)))?(function (){var c = cljs.core.count.call(null,path);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(c - 1),path)),new cljs.core.Keyword(null,"*","*",1013904284)),cljs.core.vec.call(null,cljs.core.take.call(null,c,out_path))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,out_path], null));var path__$1 = cljs.core.nth.call(null,vec__18340,0,null);var out_path__$1 = cljs.core.nth.call(null,vec__18340,1,null);return (foundation.app.dataflow.matching_path_element_QMARK_.call(null,op,key)) && (foundation.app.dataflow.matching_path_QMARK_.call(null,path__$1,out_path__$1));
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
track_update_in.cljs$lang$applyTo = (function (arglist__18341){
var data_model = cljs.core.first(arglist__18341);
arglist__18341 = cljs.core.next(arglist__18341);
var out_path = cljs.core.first(arglist__18341);
arglist__18341 = cljs.core.next(arglist__18341);
var f = cljs.core.first(arglist__18341);
var args = cljs.core.rest(arglist__18341);
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
apply_in.cljs$lang$applyTo = (function (arglist__18342){
var state = cljs.core.first(arglist__18342);
arglist__18342 = cljs.core.next(arglist__18342);
var out_path = cljs.core.first(arglist__18342);
arglist__18342 = cljs.core.next(arglist__18342);
var f = cljs.core.first(arglist__18342);
var args = cljs.core.rest(arglist__18342);
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
foundation.app.dataflow.transform_phase = (function transform_phase(p__18343){var map__18346 = p__18343;var map__18346__$1 = ((cljs.core.seq_QMARK_.call(null,map__18346))?cljs.core.apply.call(null,cljs.core.hash_map,map__18346):map__18346);var state = map__18346__$1;var context = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var new$ = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__18347 = new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214).cljs$core$IFn$_invoke$arity$1(dataflow).call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(context));var map__18347__$1 = ((cljs.core.seq_QMARK_.call(null,map__18347))?cljs.core.apply.call(null,cljs.core.hash_map,map__18347):map__18347);var out_path = cljs.core.get.call(null,map__18347__$1,new cljs.core.Keyword(null,"out","out",1014014656));var key = cljs.core.get.call(null,map__18347__$1,new cljs.core.Keyword(null,"key","key",1014010321));var transform_fn = foundation.app.dataflow.find_message_transformer.call(null,new cljs.core.Keyword(null,"transform","transform",2066570974).cljs$core$IFn$_invoke$arity$1(dataflow),out_path,key);if(cljs.core.truth_(transform_fn))
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
foundation.app.dataflow.propagate_QMARK_ = (function propagate_QMARK_(p__18348,input_paths){var map__18350 = p__18348;var map__18350__$1 = ((cljs.core.seq_QMARK_.call(null,map__18350))?cljs.core.apply.call(null,cljs.core.hash_map,map__18350):map__18350);var state = map__18350__$1;var change = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"change","change",3947235106));var changed_inputs = ((cljs.core.seq.call(null,change))?cljs.core.reduce.call(null,cljs.core.into,cljs.core.vals.call(null,change)):cljs.core.PersistentVector.EMPTY);return cljs.core.some.call(null,(function (input_path){var propagator_pred = new cljs.core.Keyword(null,"propagator","propagator",4257587985).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,input_path));return propagator_pred.call(null,state,changed_inputs,input_path);
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
foundation.app.dataflow.dataflow_fn_args = (function dataflow_fn_args(inputs,args_key,arg_names){var G__18352 = args_key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",2558708147),G__18352))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single-val","single-val",1926385550),G__18352))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.dataflow.single_val.call(null,inputs)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map-seq","map-seq",1849474016),G__18352))
{return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,foundation.app.dataflow.input_map.call(null,inputs,arg_names)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__18352))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.dataflow.input_map.call(null,inputs,arg_names)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vals","vals",1017516260),G__18352))
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
foundation.app.dataflow.derive_phase = (function derive_phase(p__18353){var map__18359 = p__18353;var map__18359__$1 = ((cljs.core.seq_QMARK_.call(null,map__18359))?cljs.core.apply.call(null,cljs.core.hash_map,map__18359):map__18359);var state = map__18359__$1;var context = cljs.core.get.call(null,map__18359__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__18359__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var derives = new cljs.core.Keyword(null,"derive","derive",3973595801).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.reduce.call(null,(function (p__18360,p__18361){var map__18362 = p__18360;var map__18362__$1 = ((cljs.core.seq_QMARK_.call(null,map__18362))?cljs.core.apply.call(null,cljs.core.hash_map,map__18362):map__18362);var acc = map__18362__$1;var change = cljs.core.get.call(null,map__18362__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__18363 = p__18361;var map__18363__$1 = ((cljs.core.seq_QMARK_.call(null,map__18363))?cljs.core.apply.call(null,cljs.core.hash_map,map__18363):map__18363);var input_paths = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"in","in",1013907607));var derive_fn = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var out_path = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"out","out",1014014656));var args = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__18363__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
{return cljs.core.apply.call(null,foundation.app.dataflow.apply_in,acc,out_path,derive_fn,foundation.app.dataflow.dataflow_fn_args.call(null,foundation.app.dataflow.flow_input.call(null,context,acc,input_paths,change),args,arg_names));
} else
{return acc;
}
}),state,derives);
});
/**
* Execute each function. Return an updated flow state.
*/
foundation.app.dataflow.output_phase = (function output_phase(p__18364,k){var map__18370 = p__18364;var map__18370__$1 = ((cljs.core.seq_QMARK_.call(null,map__18370))?cljs.core.apply.call(null,cljs.core.hash_map,map__18370):map__18370);var state = map__18370__$1;var context = cljs.core.get.call(null,map__18370__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__18370__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var fns = k.call(null,dataflow);return cljs.core.reduce.call(null,(function (p__18371,p__18372){var map__18373 = p__18371;var map__18373__$1 = ((cljs.core.seq_QMARK_.call(null,map__18373))?cljs.core.apply.call(null,cljs.core.hash_map,map__18373):map__18373);var acc = map__18373__$1;var change = cljs.core.get.call(null,map__18373__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__18374 = p__18372;var map__18374__$1 = ((cljs.core.seq_QMARK_.call(null,map__18374))?cljs.core.apply.call(null,cljs.core.hash_map,map__18374):map__18374);var f = cljs.core.get.call(null,map__18374__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var input_paths = cljs.core.get.call(null,map__18374__$1,new cljs.core.Keyword(null,"in","in",1013907607));var args = cljs.core.get.call(null,map__18374__$1,new cljs.core.Keyword(null,"args","args",1016906831));var arg_names = cljs.core.get.call(null,map__18374__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499));if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,acc,input_paths)))
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
var remover = (function remover(change_set,input_paths){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__18375_SHARP_){return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,p1__18375_SHARP_),input_paths);
}),change_set));
});
foundation.app.dataflow.remove_matching_changes = (function remove_matching_changes(change,input_paths){return cljs.core.reduce.call(null,(function (a,k){return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),remover,input_paths);
}),change,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598),new cljs.core.Keyword(null,"added","added",1106564210),new cljs.core.Keyword(null,"updated","updated",779473965),new cljs.core.Keyword(null,"removed","removed",2105740242)], null));
});
foundation.app.dataflow.emit_phase = (function emit_phase(p__18376){var map__18382 = p__18376;var map__18382__$1 = ((cljs.core.seq_QMARK_.call(null,map__18382))?cljs.core.apply.call(null,cljs.core.hash_map,map__18382):map__18382);var state = map__18382__$1;var change = cljs.core.get.call(null,map__18382__$1,new cljs.core.Keyword(null,"change","change",3947235106));var context = cljs.core.get.call(null,map__18382__$1,new cljs.core.Keyword(null,"context","context",1965435169));var dataflow = cljs.core.get.call(null,map__18382__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var emits = new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(dataflow);return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,(function (p__18383,p__18384){var map__18385 = p__18383;var map__18385__$1 = ((cljs.core.seq_QMARK_.call(null,map__18385))?cljs.core.apply.call(null,cljs.core.hash_map,map__18385):map__18385);var acc = map__18385__$1;var processed_inputs = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var remaining_change = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"remaining-change","remaining-change",2124038873));var change__$1 = cljs.core.get.call(null,map__18385__$1,new cljs.core.Keyword(null,"change","change",3947235106));var map__18386 = p__18384;var map__18386__$1 = ((cljs.core.seq_QMARK_.call(null,map__18386))?cljs.core.apply.call(null,cljs.core.hash_map,map__18386):map__18386);var input_paths = cljs.core.get.call(null,map__18386__$1,new cljs.core.Keyword(null,"in","in",1013907607));var emit_fn = cljs.core.get.call(null,map__18386__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var mode = cljs.core.get.call(null,map__18386__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var report_change = ((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"always","always",3894314369)))?change__$1:remaining_change);if(cljs.core.truth_(foundation.app.dataflow.propagate_QMARK_.call(null,cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"change","change",3947235106),report_change),input_paths)))
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
foundation.app.dataflow.run_flow_phases = (function run_flow_phases(state,dataflow,message){var map__18391 = foundation.app.dataflow.flow_phases_step.call(null,state,dataflow,message);var map__18391__$1 = ((cljs.core.seq_QMARK_.call(null,map__18391))?cljs.core.apply.call(null,cljs.core.hash_map,map__18391):map__18391);var result = map__18391__$1;var map__18392 = cljs.core.get.call(null,map__18391__$1,new cljs.core.Keyword(null,"new","new",1014013202));var map__18392__$1 = ((cljs.core.seq_QMARK_.call(null,map__18392))?cljs.core.apply.call(null,cljs.core.hash_map,map__18392):map__18392);var continue$ = cljs.core.get.call(null,map__18392__$1,new cljs.core.Keyword(null,"continue","continue",4741668889));var input = cljs.core.filter.call(null,((function (map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$){
return (function (p1__18387_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__18387_SHARP_));
});})(map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$))
,continue$);var continue$__$1 = cljs.core.remove.call(null,((function (map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$,input){
return (function (p1__18388_SHARP_){return new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__18388_SHARP_));
});})(map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$,input))
,continue$);var new_state = ((cljs.core.empty_QMARK_.call(null,continue$__$1))?cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",1014013202)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"continue","continue",4741668889)):cljs.core.reduce.call(null,((function (map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$,input,continue$__$1){
return (function (a,c_message){return run_flow_phases.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"old","old",1014014361),new cljs.core.Keyword(null,"new","new",1014013202).cljs$core$IFn$_invoke$arity$1(a)),dataflow,c_message);
});})(map__18391,map__18391__$1,result,map__18392,map__18392__$1,continue$,input,continue$__$1))
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
{var vec__18394 = x;var key = cljs.core.nth.call(null,vec__18394,0,null);var out = cljs.core.nth.call(null,vec__18394,1,null);var fn = cljs.core.nth.call(null,vec__18394,2,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),key,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn], null);
} else
{return x;
}
}),transforms);
});
foundation.app.dataflow.add_arg_names = (function add_arg_names(p__18395){var map__18397 = p__18395;var map__18397__$1 = ((cljs.core.seq_QMARK_.call(null,map__18397))?cljs.core.apply.call(null,cljs.core.hash_map,map__18397):map__18397);var m = map__18397__$1;var in$ = cljs.core.get.call(null,map__18397__$1,new cljs.core.Keyword(null,"in","in",1013907607));var arg_names = ((cljs.core.map_QMARK_.call(null,in$))?in$:null);var in$__$1 = ((cljs.core.map_QMARK_.call(null,in$))?cljs.core.set.call(null,cljs.core.keys.call(null,in$)):in$);return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"in","in",1013907607),in$__$1,new cljs.core.Keyword(null,"arg-names","arg-names",1212858499),arg_names);
});
foundation.app.dataflow.dataflow_maps = (function dataflow_maps(coll,f){return cljs.core.mapv.call(null,(function (x){return cljs.core.update_in.call(null,foundation.app.dataflow.add_arg_names.call(null,((cljs.core.vector_QMARK_.call(null,x))?f.call(null,x):x)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",1013907607)], null),foundation.app.dataflow.with_propagator);
}),coll);
});
foundation.app.dataflow.derive_maps = (function derive_maps(derives){return foundation.app.dataflow.dataflow_maps.call(null,derives,(function (p__18400){var vec__18401 = p__18400;var in$ = cljs.core.nth.call(null,vec__18401,0,null);var out = cljs.core.nth.call(null,vec__18401,1,null);var fn = cljs.core.nth.call(null,vec__18401,2,null);var args = cljs.core.nth.call(null,vec__18401,3,null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"out","out",1014014656),out,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], null);
}));
});
foundation.app.dataflow.output_maps = (function output_maps(outputs){return foundation.app.dataflow.dataflow_maps.call(null,outputs,(function (p__18404){var vec__18405 = p__18404;var in$ = cljs.core.nth.call(null,vec__18405,0,null);var fn = cljs.core.nth.call(null,vec__18405,1,null);var args = cljs.core.nth.call(null,vec__18405,2,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"fn","fn",1013907514),fn,new cljs.core.Keyword(null,"args","args",1016906831),args], null);
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
