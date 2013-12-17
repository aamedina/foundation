// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_24311 = cljs.core.first.call(null,a);var ocr_24312 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_24311)) && ((cljs.core.count.call(null,ocr_24311) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_24312)) && ((cljs.core.count.call(null,ocr_24312) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_24311 === null))
{if((ocr_24312 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24319 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24320 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24319;
b = G__24320;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24321 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24322 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24321;
b = G__24322;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__24323 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24324 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24323;
b = G__24324;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24325 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24326 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24325;
b = G__24326;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24327 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24328 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24327;
b = G__24328;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__24329 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24330 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24329;
b = G__24330;
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
{if((ocr_24311 === null))
{if((ocr_24312 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24331 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24332 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24331;
b = G__24332;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24333 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24334 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24333;
b = G__24334;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__24335 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24336 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24335;
b = G__24336;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24311,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24337 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24338 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24337;
b = G__24338;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_24312,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__24339 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24340 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24339;
b = G__24340;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__24341 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__24342 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__24341;
b = G__24342;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__24344 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__24344,0,null);var large = cljs.core.nth.call(null,vec__24344,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__24346){var vec__24348 = p__24346;var x = cljs.core.nth.call(null,vec__24348,0,null);var xs = cljs.core.nthnext.call(null,vec__24348,1);if(cljs.core.truth_((function (){var and__7835__auto__ = x;if(cljs.core.truth_(and__7835__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__7835__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__24345_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__24345_SHARP_),cljs.core.conj.call(null,context,p1__24345_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__24346){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__24346);
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
{return cljs.core.reduce.call(null,(function (a,p__24351){var vec__24352 = p__24351;var k = cljs.core.nth.call(null,vec__24352,0,null);var v = cljs.core.nth.call(null,vec__24352,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__24353,arg_names){var map__24371 = p__24353;var map__24371__$1 = ((cljs.core.seq_QMARK_.call(null,map__24371))?cljs.core.apply.call(null,cljs.core.hash_map,map__24371):map__24371);var input_paths = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__24371__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__24372){var vec__24373 = p__24372;var k = cljs.core.nth.call(null,vec__24373,0,null);var v = cljs.core.nth.call(null,vec__24373,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8540__auto__ = (function iter__24374(s__24375){return (new cljs.core.LazySeq(null,(function (){var s__24375__$1 = s__24375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24375__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8536__auto__ = ((function (s__24375__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__24376(s__24377){return (new cljs.core.LazySeq(null,((function (s__24375__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__24377__$1 = s__24377;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__24377__$1);if(temp__4092__auto____$1)
{var s__24377__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24377__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__24377__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__24379 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__24378 = 0;while(true){
if((i__24378 < size__8539__auto__))
{var vec__24386 = cljs.core._nth.call(null,c__8538__auto__,i__24378);var k = cljs.core.nth.call(null,vec__24386,0,null);var v = cljs.core.nth.call(null,vec__24386,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__24379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__24388 = (i__24378 + 1);
i__24378 = G__24388;
continue;
}
} else
{{
var G__24389 = (i__24378 + 1);
i__24378 = G__24389;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24379),iter__24376.call(null,cljs.core.chunk_rest.call(null,s__24377__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24379),null);
}
} else
{var vec__24387 = cljs.core.first.call(null,s__24377__$2);var k = cljs.core.nth.call(null,vec__24387,0,null);var v = cljs.core.nth.call(null,vec__24387,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__24376.call(null,cljs.core.rest.call(null,s__24377__$2)));
} else
{{
var G__24390 = cljs.core.rest.call(null,s__24377__$2);
s__24377__$1 = G__24390;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__24375__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__24375__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8537__auto__ = cljs.core.seq.call(null,iterys__8536__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__8537__auto__)
{return cljs.core.concat.call(null,fs__8537__auto__,iter__24374.call(null,cljs.core.rest.call(null,s__24375__$1)));
} else
{{
var G__24391 = cljs.core.rest.call(null,s__24375__$1);
s__24375__$1 = G__24391;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,input_paths);
})());
});
input_map = function(p__24353,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__24353);
case 2:
return input_map__2.call(this,p__24353,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__24407 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__24407,0,null);var change_paths = cljs.core.nth.call(null,vec__24407,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8540__auto__ = (function iter__24408(s__24409){return (new cljs.core.LazySeq(null,(function (){var s__24409__$1 = s__24409;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24409__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8536__auto__ = ((function (s__24409__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__24410(s__24411){return (new cljs.core.LazySeq(null,((function (s__24409__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__24411__$1 = s__24411;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__24411__$1);if(temp__4092__auto____$1)
{var s__24411__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24411__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__24411__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__24413 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__24412 = 0;while(true){
if((i__24412 < size__8539__auto__))
{var vec__24420 = cljs.core._nth.call(null,c__8538__auto__,i__24412);var k = cljs.core.nth.call(null,vec__24420,0,null);var v = cljs.core.nth.call(null,vec__24420,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__24413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__24422 = (i__24412 + 1);
i__24412 = G__24422;
continue;
}
} else
{{
var G__24423 = (i__24412 + 1);
i__24412 = G__24423;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24413),iter__24410.call(null,cljs.core.chunk_rest.call(null,s__24411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24413),null);
}
} else
{var vec__24421 = cljs.core.first.call(null,s__24411__$2);var k = cljs.core.nth.call(null,vec__24421,0,null);var v = cljs.core.nth.call(null,vec__24421,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__24410.call(null,cljs.core.rest.call(null,s__24411__$2)));
} else
{{
var G__24424 = cljs.core.rest.call(null,s__24411__$2);
s__24411__$1 = G__24424;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__24409__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__24409__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8537__auto__ = cljs.core.seq.call(null,iterys__8536__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__8537__auto__)
{return cljs.core.concat.call(null,fs__8537__auto__,iter__24408.call(null,cljs.core.rest.call(null,s__24409__$1)));
} else
{{
var G__24425 = cljs.core.rest.call(null,s__24409__$1);
s__24409__$1 = G__24425;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__24429){var vec__24430 = p__24429;var k = cljs.core.nth.call(null,vec__24430,0,null);var v = cljs.core.nth.call(null,vec__24430,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__24426_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__24426_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__24432){var map__24448 = p__24432;var map__24448__$1 = ((cljs.core.seq_QMARK_.call(null,map__24448))?cljs.core.apply.call(null,cljs.core.hash_map,map__24448):map__24448);var input_paths = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__8540__auto__ = (function iter__24449(s__24450){return (new cljs.core.LazySeq(null,(function (){var s__24450__$1 = s__24450;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24450__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8536__auto__ = ((function (s__24450__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__24451(s__24452){return (new cljs.core.LazySeq(null,((function (s__24450__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__24452__$1 = s__24452;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__24452__$1);if(temp__4092__auto____$1)
{var s__24452__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24452__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__24452__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__24454 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__24453 = 0;while(true){
if((i__24453 < size__8539__auto__))
{var vec__24461 = cljs.core._nth.call(null,c__8538__auto__,i__24453);var k = cljs.core.nth.call(null,vec__24461,0,null);var v = cljs.core.nth.call(null,vec__24461,1,null);cljs.core.chunk_append.call(null,b__24454,k);
{
var G__24463 = (i__24453 + 1);
i__24453 = G__24463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24454),iter__24451.call(null,cljs.core.chunk_rest.call(null,s__24452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24454),null);
}
} else
{var vec__24462 = cljs.core.first.call(null,s__24452__$2);var k = cljs.core.nth.call(null,vec__24462,0,null);var v = cljs.core.nth.call(null,vec__24462,1,null);return cljs.core.cons.call(null,k,iter__24451.call(null,cljs.core.rest.call(null,s__24452__$2)));
}
} else
{return null;
}
break;
}
});})(s__24450__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__24450__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8537__auto__ = cljs.core.seq.call(null,iterys__8536__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__8537__auto__)
{return cljs.core.concat.call(null,fs__8537__auto__,iter__24449.call(null,cljs.core.rest.call(null,s__24450__$1)));
} else
{{
var G__24464 = cljs.core.rest.call(null,s__24450__$1);
s__24450__$1 = G__24464;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__24431_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__24431_SHARP_);
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
