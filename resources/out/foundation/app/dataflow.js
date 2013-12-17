// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_360387 = cljs.core.first.call(null,a);var ocr_360388 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_360387)) && ((cljs.core.count.call(null,ocr_360387) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_360388)) && ((cljs.core.count.call(null,ocr_360388) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_360387 === null))
{if((ocr_360388 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360395 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360396 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360395;
b = G__360396;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360397 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360398 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360397;
b = G__360398;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__360399 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360400 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360399;
b = G__360400;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360401 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360402 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360401;
b = G__360402;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360403 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360404 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360403;
b = G__360404;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__360405 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360406 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360405;
b = G__360406;
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
{if((ocr_360387 === null))
{if((ocr_360388 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360407 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360408 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360407;
b = G__360408;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360409 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360410 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360409;
b = G__360410;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__360411 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360412 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360411;
b = G__360412;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360387,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360413 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360414 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360413;
b = G__360414;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_360388,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__360415 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360416 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360415;
b = G__360416;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__360417 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__360418 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__360417;
b = G__360418;
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
/**
* Return true if one path could be the parent of the other.
*/
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__360420 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__360420,0,null);var large = cljs.core.nth.call(null,vec__360420,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__360422){var vec__360424 = p__360422;var x = cljs.core.nth.call(null,vec__360424,0,null);var xs = cljs.core.nthnext.call(null,vec__360424,1);if(cljs.core.truth_((function (){var and__13967__auto__ = x;if(cljs.core.truth_(and__13967__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13967__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__360421_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__360421_SHARP_),cljs.core.conj.call(null,context,p1__360421_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__360422){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__360422);
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
{return cljs.core.reduce.call(null,(function (a,p__360431){var vec__360432 = p__360431;var k = cljs.core.nth.call(null,vec__360432,0,null);var v = cljs.core.nth.call(null,vec__360432,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__360433,arg_names){var map__360451 = p__360433;var map__360451__$1 = ((cljs.core.seq_QMARK_.call(null,map__360451))?cljs.core.apply.call(null,cljs.core.hash_map,map__360451):map__360451);var input_paths = cljs.core.get.call(null,map__360451__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__360451__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__360452){var vec__360453 = p__360452;var k = cljs.core.nth.call(null,vec__360453,0,null);var v = cljs.core.nth.call(null,vec__360453,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__360454(s__360455){return (new cljs.core.LazySeq(null,(function (){var s__360455__$1 = s__360455;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__360455__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__360455__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__360456(s__360457){return (new cljs.core.LazySeq(null,((function (s__360455__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__360457__$1 = s__360457;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__360457__$1);if(temp__4092__auto____$1)
{var s__360457__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__360457__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__360457__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__360459 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__360458 = 0;while(true){
if((i__360458 < size__14676__auto__))
{var vec__360466 = cljs.core._nth.call(null,c__14675__auto__,i__360458);var k = cljs.core.nth.call(null,vec__360466,0,null);var v = cljs.core.nth.call(null,vec__360466,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__360459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__360468 = (i__360458 + 1);
i__360458 = G__360468;
continue;
}
} else
{{
var G__360469 = (i__360458 + 1);
i__360458 = G__360469;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360459),iter__360456.call(null,cljs.core.chunk_rest.call(null,s__360457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360459),null);
}
} else
{var vec__360467 = cljs.core.first.call(null,s__360457__$2);var k = cljs.core.nth.call(null,vec__360467,0,null);var v = cljs.core.nth.call(null,vec__360467,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__360456.call(null,cljs.core.rest.call(null,s__360457__$2)));
} else
{{
var G__360470 = cljs.core.rest.call(null,s__360457__$2);
s__360457__$1 = G__360470;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__360455__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__360455__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__360454.call(null,cljs.core.rest.call(null,s__360455__$1)));
} else
{{
var G__360471 = cljs.core.rest.call(null,s__360455__$1);
s__360455__$1 = G__360471;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,input_paths);
})());
});
input_map = function(p__360433,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__360433);
case 2:
return input_map__2.call(this,p__360433,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__360487 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__360487,0,null);var change_paths = cljs.core.nth.call(null,vec__360487,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__360488(s__360489){return (new cljs.core.LazySeq(null,(function (){var s__360489__$1 = s__360489;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__360489__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__360489__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__360490(s__360491){return (new cljs.core.LazySeq(null,((function (s__360489__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__360491__$1 = s__360491;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__360491__$1);if(temp__4092__auto____$1)
{var s__360491__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__360491__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__360491__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__360493 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__360492 = 0;while(true){
if((i__360492 < size__14676__auto__))
{var vec__360500 = cljs.core._nth.call(null,c__14675__auto__,i__360492);var k = cljs.core.nth.call(null,vec__360500,0,null);var v = cljs.core.nth.call(null,vec__360500,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__360493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__360502 = (i__360492 + 1);
i__360492 = G__360502;
continue;
}
} else
{{
var G__360503 = (i__360492 + 1);
i__360492 = G__360503;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360493),iter__360490.call(null,cljs.core.chunk_rest.call(null,s__360491__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360493),null);
}
} else
{var vec__360501 = cljs.core.first.call(null,s__360491__$2);var k = cljs.core.nth.call(null,vec__360501,0,null);var v = cljs.core.nth.call(null,vec__360501,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__360490.call(null,cljs.core.rest.call(null,s__360491__$2)));
} else
{{
var G__360504 = cljs.core.rest.call(null,s__360491__$2);
s__360491__$1 = G__360504;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__360489__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__360489__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__360488.call(null,cljs.core.rest.call(null,s__360489__$1)));
} else
{{
var G__360505 = cljs.core.rest.call(null,s__360489__$1);
s__360489__$1 = G__360505;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__360509){var vec__360510 = p__360509;var k = cljs.core.nth.call(null,vec__360510,0,null);var v = cljs.core.nth.call(null,vec__360510,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__360506_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__360506_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__360543){var map__360559 = p__360543;var map__360559__$1 = ((cljs.core.seq_QMARK_.call(null,map__360559))?cljs.core.apply.call(null,cljs.core.hash_map,map__360559):map__360559);var input_paths = cljs.core.get.call(null,map__360559__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__360559__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14677__auto__ = (function iter__360560(s__360561){return (new cljs.core.LazySeq(null,(function (){var s__360561__$1 = s__360561;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__360561__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__360561__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__360562(s__360563){return (new cljs.core.LazySeq(null,((function (s__360561__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__360563__$1 = s__360563;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__360563__$1);if(temp__4092__auto____$1)
{var s__360563__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__360563__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__360563__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__360565 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__360564 = 0;while(true){
if((i__360564 < size__14676__auto__))
{var vec__360572 = cljs.core._nth.call(null,c__14675__auto__,i__360564);var k = cljs.core.nth.call(null,vec__360572,0,null);var v = cljs.core.nth.call(null,vec__360572,1,null);cljs.core.chunk_append.call(null,b__360565,k);
{
var G__360574 = (i__360564 + 1);
i__360564 = G__360574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360565),iter__360562.call(null,cljs.core.chunk_rest.call(null,s__360563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360565),null);
}
} else
{var vec__360573 = cljs.core.first.call(null,s__360563__$2);var k = cljs.core.nth.call(null,vec__360573,0,null);var v = cljs.core.nth.call(null,vec__360573,1,null);return cljs.core.cons.call(null,k,iter__360562.call(null,cljs.core.rest.call(null,s__360563__$2)));
}
} else
{return null;
}
break;
}
});})(s__360561__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__360561__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__360560.call(null,cljs.core.rest.call(null,s__360561__$1)));
} else
{{
var G__360575 = cljs.core.rest.call(null,s__360561__$1);
s__360561__$1 = G__360575;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__360511_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__360511_SHARP_);
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