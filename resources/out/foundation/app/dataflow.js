// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_378298 = cljs.core.first.call(null,a);var ocr_378299 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_378298)) && ((cljs.core.count.call(null,ocr_378298) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_378299)) && ((cljs.core.count.call(null,ocr_378299) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_378298 === null))
{if((ocr_378299 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378306 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378307 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378306;
b = G__378307;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378308 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378309 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378308;
b = G__378309;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__378310 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378311 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378310;
b = G__378311;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378312 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378313 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378312;
b = G__378313;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378314 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378315 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378314;
b = G__378315;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__378316 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378317 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378316;
b = G__378317;
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
{if((ocr_378298 === null))
{if((ocr_378299 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378318 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378319 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378318;
b = G__378319;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378320 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378321 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378320;
b = G__378321;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__378322 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378323 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378322;
b = G__378323;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378298,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378324 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378325 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378324;
b = G__378325;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_378299,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__378326 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378327 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378326;
b = G__378327;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__378328 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__378329 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__378328;
b = G__378329;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__378331 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__378331,0,null);var large = cljs.core.nth.call(null,vec__378331,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__378333){var vec__378335 = p__378333;var x = cljs.core.nth.call(null,vec__378335,0,null);var xs = cljs.core.nthnext.call(null,vec__378335,1);if(cljs.core.truth_((function (){var and__13967__auto__ = x;if(cljs.core.truth_(and__13967__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13967__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__378332_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__378332_SHARP_),cljs.core.conj.call(null,context,p1__378332_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__378333){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__378333);
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
{return cljs.core.reduce.call(null,(function (a,p__378342){var vec__378343 = p__378342;var k = cljs.core.nth.call(null,vec__378343,0,null);var v = cljs.core.nth.call(null,vec__378343,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__378344,arg_names){var map__378362 = p__378344;var map__378362__$1 = ((cljs.core.seq_QMARK_.call(null,map__378362))?cljs.core.apply.call(null,cljs.core.hash_map,map__378362):map__378362);var input_paths = cljs.core.get.call(null,map__378362__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__378362__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__378363){var vec__378364 = p__378363;var k = cljs.core.nth.call(null,vec__378364,0,null);var v = cljs.core.nth.call(null,vec__378364,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__378365(s__378366){return (new cljs.core.LazySeq(null,(function (){var s__378366__$1 = s__378366;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378366__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__378366__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__378367(s__378368){return (new cljs.core.LazySeq(null,((function (s__378366__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__378368__$1 = s__378368;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378368__$1);if(temp__4092__auto____$1)
{var s__378368__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378368__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378368__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378370 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378369 = 0;while(true){
if((i__378369 < size__14676__auto__))
{var vec__378377 = cljs.core._nth.call(null,c__14675__auto__,i__378369);var k = cljs.core.nth.call(null,vec__378377,0,null);var v = cljs.core.nth.call(null,vec__378377,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__378370,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__378379 = (i__378369 + 1);
i__378369 = G__378379;
continue;
}
} else
{{
var G__378380 = (i__378369 + 1);
i__378369 = G__378380;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378370),iter__378367.call(null,cljs.core.chunk_rest.call(null,s__378368__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378370),null);
}
} else
{var vec__378378 = cljs.core.first.call(null,s__378368__$2);var k = cljs.core.nth.call(null,vec__378378,0,null);var v = cljs.core.nth.call(null,vec__378378,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__378367.call(null,cljs.core.rest.call(null,s__378368__$2)));
} else
{{
var G__378381 = cljs.core.rest.call(null,s__378368__$2);
s__378368__$1 = G__378381;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__378366__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__378366__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__378365.call(null,cljs.core.rest.call(null,s__378366__$1)));
} else
{{
var G__378382 = cljs.core.rest.call(null,s__378366__$1);
s__378366__$1 = G__378382;
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
input_map = function(p__378344,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__378344);
case 2:
return input_map__2.call(this,p__378344,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__378398 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__378398,0,null);var change_paths = cljs.core.nth.call(null,vec__378398,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__378399(s__378400){return (new cljs.core.LazySeq(null,(function (){var s__378400__$1 = s__378400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378400__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__378400__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__378401(s__378402){return (new cljs.core.LazySeq(null,((function (s__378400__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__378402__$1 = s__378402;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378402__$1);if(temp__4092__auto____$1)
{var s__378402__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378402__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378402__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378404 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378403 = 0;while(true){
if((i__378403 < size__14676__auto__))
{var vec__378411 = cljs.core._nth.call(null,c__14675__auto__,i__378403);var k = cljs.core.nth.call(null,vec__378411,0,null);var v = cljs.core.nth.call(null,vec__378411,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__378404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__378413 = (i__378403 + 1);
i__378403 = G__378413;
continue;
}
} else
{{
var G__378414 = (i__378403 + 1);
i__378403 = G__378414;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378404),iter__378401.call(null,cljs.core.chunk_rest.call(null,s__378402__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378404),null);
}
} else
{var vec__378412 = cljs.core.first.call(null,s__378402__$2);var k = cljs.core.nth.call(null,vec__378412,0,null);var v = cljs.core.nth.call(null,vec__378412,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__378401.call(null,cljs.core.rest.call(null,s__378402__$2)));
} else
{{
var G__378415 = cljs.core.rest.call(null,s__378402__$2);
s__378402__$1 = G__378415;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__378400__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__378400__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__378399.call(null,cljs.core.rest.call(null,s__378400__$1)));
} else
{{
var G__378416 = cljs.core.rest.call(null,s__378400__$1);
s__378400__$1 = G__378416;
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
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__378420){var vec__378421 = p__378420;var k = cljs.core.nth.call(null,vec__378421,0,null);var v = cljs.core.nth.call(null,vec__378421,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__378417_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__378417_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__378454){var map__378470 = p__378454;var map__378470__$1 = ((cljs.core.seq_QMARK_.call(null,map__378470))?cljs.core.apply.call(null,cljs.core.hash_map,map__378470):map__378470);var input_paths = cljs.core.get.call(null,map__378470__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__378470__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14677__auto__ = (function iter__378471(s__378472){return (new cljs.core.LazySeq(null,(function (){var s__378472__$1 = s__378472;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378472__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14673__auto__ = ((function (s__378472__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__378473(s__378474){return (new cljs.core.LazySeq(null,((function (s__378472__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__378474__$1 = s__378474;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378474__$1);if(temp__4092__auto____$1)
{var s__378474__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378474__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378474__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378476 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378475 = 0;while(true){
if((i__378475 < size__14676__auto__))
{var vec__378483 = cljs.core._nth.call(null,c__14675__auto__,i__378475);var k = cljs.core.nth.call(null,vec__378483,0,null);var v = cljs.core.nth.call(null,vec__378483,1,null);cljs.core.chunk_append.call(null,b__378476,k);
{
var G__378485 = (i__378475 + 1);
i__378475 = G__378485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378476),iter__378473.call(null,cljs.core.chunk_rest.call(null,s__378474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378476),null);
}
} else
{var vec__378484 = cljs.core.first.call(null,s__378474__$2);var k = cljs.core.nth.call(null,vec__378484,0,null);var v = cljs.core.nth.call(null,vec__378484,1,null);return cljs.core.cons.call(null,k,iter__378473.call(null,cljs.core.rest.call(null,s__378474__$2)));
}
} else
{return null;
}
break;
}
});})(s__378472__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__378472__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14674__auto__ = cljs.core.seq.call(null,iterys__14673__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14674__auto__)
{return cljs.core.concat.call(null,fs__14674__auto__,iter__378471.call(null,cljs.core.rest.call(null,s__378472__$1)));
} else
{{
var G__378486 = cljs.core.rest.call(null,s__378472__$1);
s__378472__$1 = G__378486;
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
}),acc,cljs.core.filter.call(null,(function (p1__378422_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__378422_SHARP_);
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