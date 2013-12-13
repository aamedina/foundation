// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_85343 = cljs.core.first.call(null,a);var ocr_85344 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_85343)) && ((cljs.core.count.call(null,ocr_85343) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_85344)) && ((cljs.core.count.call(null,ocr_85344) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_85343 === null))
{if((ocr_85344 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85351 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85352 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85351;
b = G__85352;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85353 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85354 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85353;
b = G__85354;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__85355 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85356 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85355;
b = G__85356;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85357 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85358 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85357;
b = G__85358;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85359 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85360 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85359;
b = G__85360;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__85361 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85362 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85361;
b = G__85362;
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
{if((ocr_85343 === null))
{if((ocr_85344 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85363 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85364 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85363;
b = G__85364;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85365 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85366 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85365;
b = G__85366;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__85367 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85368 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85367;
b = G__85368;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85343,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85369 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85370 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85369;
b = G__85370;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_85344,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__85371 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85372 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85371;
b = G__85372;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__85373 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__85374 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__85373;
b = G__85374;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__85376 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__85376,0,null);var large = cljs.core.nth.call(null,vec__85376,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__85378){var vec__85380 = p__85378;var x = cljs.core.nth.call(null,vec__85380,0,null);var xs = cljs.core.nthnext.call(null,vec__85380,1);if(cljs.core.truth_((function (){var and__13813__auto__ = x;if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13813__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__85377_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__85377_SHARP_),cljs.core.conj.call(null,context,p1__85377_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__85378){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__85378);
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
{return cljs.core.reduce.call(null,(function (a,p__85383){var vec__85384 = p__85383;var k = cljs.core.nth.call(null,vec__85384,0,null);var v = cljs.core.nth.call(null,vec__85384,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__85385,arg_names){var map__85403 = p__85385;var map__85403__$1 = ((cljs.core.seq_QMARK_.call(null,map__85403))?cljs.core.apply.call(null,cljs.core.hash_map,map__85403):map__85403);var input_paths = cljs.core.get.call(null,map__85403__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__85403__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__85404){var vec__85405 = p__85404;var k = cljs.core.nth.call(null,vec__85405,0,null);var v = cljs.core.nth.call(null,vec__85405,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = (function iter__85406(s__85407){return (new cljs.core.LazySeq(null,(function (){var s__85407__$1 = s__85407;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__85407__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14514__auto__ = ((function (s__85407__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__85408(s__85409){return (new cljs.core.LazySeq(null,((function (s__85407__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__85409__$1 = s__85409;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__85409__$1);if(temp__4092__auto____$1)
{var s__85409__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__85409__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__85409__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__85411 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__85410 = 0;while(true){
if((i__85410 < size__14517__auto__))
{var vec__85418 = cljs.core._nth.call(null,c__14516__auto__,i__85410);var k = cljs.core.nth.call(null,vec__85418,0,null);var v = cljs.core.nth.call(null,vec__85418,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__85411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__85420 = (i__85410 + 1);
i__85410 = G__85420;
continue;
}
} else
{{
var G__85421 = (i__85410 + 1);
i__85410 = G__85421;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85411),iter__85408.call(null,cljs.core.chunk_rest.call(null,s__85409__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85411),null);
}
} else
{var vec__85419 = cljs.core.first.call(null,s__85409__$2);var k = cljs.core.nth.call(null,vec__85419,0,null);var v = cljs.core.nth.call(null,vec__85419,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__85408.call(null,cljs.core.rest.call(null,s__85409__$2)));
} else
{{
var G__85422 = cljs.core.rest.call(null,s__85409__$2);
s__85409__$1 = G__85422;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__85407__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__85407__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14515__auto__ = cljs.core.seq.call(null,iterys__14514__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14515__auto__)
{return cljs.core.concat.call(null,fs__14515__auto__,iter__85406.call(null,cljs.core.rest.call(null,s__85407__$1)));
} else
{{
var G__85423 = cljs.core.rest.call(null,s__85407__$1);
s__85407__$1 = G__85423;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,input_paths);
})());
});
input_map = function(p__85385,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__85385);
case 2:
return input_map__2.call(this,p__85385,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__85439 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__85439,0,null);var change_paths = cljs.core.nth.call(null,vec__85439,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = (function iter__85440(s__85441){return (new cljs.core.LazySeq(null,(function (){var s__85441__$1 = s__85441;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__85441__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14514__auto__ = ((function (s__85441__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__85442(s__85443){return (new cljs.core.LazySeq(null,((function (s__85441__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__85443__$1 = s__85443;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__85443__$1);if(temp__4092__auto____$1)
{var s__85443__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__85443__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__85443__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__85445 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__85444 = 0;while(true){
if((i__85444 < size__14517__auto__))
{var vec__85452 = cljs.core._nth.call(null,c__14516__auto__,i__85444);var k = cljs.core.nth.call(null,vec__85452,0,null);var v = cljs.core.nth.call(null,vec__85452,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__85445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__85454 = (i__85444 + 1);
i__85444 = G__85454;
continue;
}
} else
{{
var G__85455 = (i__85444 + 1);
i__85444 = G__85455;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85445),iter__85442.call(null,cljs.core.chunk_rest.call(null,s__85443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85445),null);
}
} else
{var vec__85453 = cljs.core.first.call(null,s__85443__$2);var k = cljs.core.nth.call(null,vec__85453,0,null);var v = cljs.core.nth.call(null,vec__85453,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__85442.call(null,cljs.core.rest.call(null,s__85443__$2)));
} else
{{
var G__85456 = cljs.core.rest.call(null,s__85443__$2);
s__85443__$1 = G__85456;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__85441__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__85441__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14515__auto__ = cljs.core.seq.call(null,iterys__14514__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14515__auto__)
{return cljs.core.concat.call(null,fs__14515__auto__,iter__85440.call(null,cljs.core.rest.call(null,s__85441__$1)));
} else
{{
var G__85457 = cljs.core.rest.call(null,s__85441__$1);
s__85441__$1 = G__85457;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__85461){var vec__85462 = p__85461;var k = cljs.core.nth.call(null,vec__85462,0,null);var v = cljs.core.nth.call(null,vec__85462,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__85458_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__85458_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__85464){var map__85480 = p__85464;var map__85480__$1 = ((cljs.core.seq_QMARK_.call(null,map__85480))?cljs.core.apply.call(null,cljs.core.hash_map,map__85480):map__85480);var input_paths = cljs.core.get.call(null,map__85480__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__85480__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14518__auto__ = (function iter__85481(s__85482){return (new cljs.core.LazySeq(null,(function (){var s__85482__$1 = s__85482;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__85482__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14514__auto__ = ((function (s__85482__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__85483(s__85484){return (new cljs.core.LazySeq(null,((function (s__85482__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__85484__$1 = s__85484;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__85484__$1);if(temp__4092__auto____$1)
{var s__85484__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__85484__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__85484__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__85486 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__85485 = 0;while(true){
if((i__85485 < size__14517__auto__))
{var vec__85493 = cljs.core._nth.call(null,c__14516__auto__,i__85485);var k = cljs.core.nth.call(null,vec__85493,0,null);var v = cljs.core.nth.call(null,vec__85493,1,null);cljs.core.chunk_append.call(null,b__85486,k);
{
var G__85495 = (i__85485 + 1);
i__85485 = G__85495;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85486),iter__85483.call(null,cljs.core.chunk_rest.call(null,s__85484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85486),null);
}
} else
{var vec__85494 = cljs.core.first.call(null,s__85484__$2);var k = cljs.core.nth.call(null,vec__85494,0,null);var v = cljs.core.nth.call(null,vec__85494,1,null);return cljs.core.cons.call(null,k,iter__85483.call(null,cljs.core.rest.call(null,s__85484__$2)));
}
} else
{return null;
}
break;
}
});})(s__85482__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__85482__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14515__auto__ = cljs.core.seq.call(null,iterys__14514__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14515__auto__)
{return cljs.core.concat.call(null,fs__14515__auto__,iter__85481.call(null,cljs.core.rest.call(null,s__85482__$1)));
} else
{{
var G__85496 = cljs.core.rest.call(null,s__85482__$1);
s__85482__$1 = G__85496;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__85463_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__85463_SHARP_);
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