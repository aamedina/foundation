// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_20201 = cljs.core.first.call(null,a);var ocr_20202 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_20201)) && ((cljs.core.count.call(null,ocr_20201) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_20202)) && ((cljs.core.count.call(null,ocr_20202) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_20201 === null))
{if((ocr_20202 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20209 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20210 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20209;
b = G__20210;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20211 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20212 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20211;
b = G__20212;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__20213 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20214 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20213;
b = G__20214;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20215 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20216 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20215;
b = G__20216;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20217 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20218 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20217;
b = G__20218;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__20219 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20220 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20219;
b = G__20220;
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
{if((ocr_20201 === null))
{if((ocr_20202 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20221 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20222 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20221;
b = G__20222;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20223 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20224 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20223;
b = G__20224;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__20225 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20226 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20225;
b = G__20226;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20201,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20227 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20228 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20227;
b = G__20228;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_20202,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__20229 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20230 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20229;
b = G__20230;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__20231 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__20232 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__20231;
b = G__20232;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__20234 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__20234,0,null);var large = cljs.core.nth.call(null,vec__20234,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__20236){var vec__20238 = p__20236;var x = cljs.core.nth.call(null,vec__20238,0,null);var xs = cljs.core.nthnext.call(null,vec__20238,1);if(cljs.core.truth_((function (){var and__7816__auto__ = x;if(cljs.core.truth_(and__7816__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__7816__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__20235_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__20235_SHARP_),cljs.core.conj.call(null,context,p1__20235_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__20236){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__20236);
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
{return cljs.core.reduce.call(null,(function (a,p__20241){var vec__20242 = p__20241;var k = cljs.core.nth.call(null,vec__20242,0,null);var v = cljs.core.nth.call(null,vec__20242,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__20243,arg_names){var map__20261 = p__20243;var map__20261__$1 = ((cljs.core.seq_QMARK_.call(null,map__20261))?cljs.core.apply.call(null,cljs.core.hash_map,map__20261):map__20261);var input_paths = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__20262){var vec__20263 = p__20262;var k = cljs.core.nth.call(null,vec__20263,0,null);var v = cljs.core.nth.call(null,vec__20263,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = (function iter__20264(s__20265){return (new cljs.core.LazySeq(null,(function (){var s__20265__$1 = s__20265;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20265__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8517__auto__ = ((function (s__20265__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__20266(s__20267){return (new cljs.core.LazySeq(null,((function (s__20265__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__20267__$1 = s__20267;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__20267__$1);if(temp__4092__auto____$1)
{var s__20267__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20267__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__20267__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__20269 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__20268 = 0;while(true){
if((i__20268 < size__8520__auto__))
{var vec__20276 = cljs.core._nth.call(null,c__8519__auto__,i__20268);var k = cljs.core.nth.call(null,vec__20276,0,null);var v = cljs.core.nth.call(null,vec__20276,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__20269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__20278 = (i__20268 + 1);
i__20268 = G__20278;
continue;
}
} else
{{
var G__20279 = (i__20268 + 1);
i__20268 = G__20279;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20269),iter__20266.call(null,cljs.core.chunk_rest.call(null,s__20267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20269),null);
}
} else
{var vec__20277 = cljs.core.first.call(null,s__20267__$2);var k = cljs.core.nth.call(null,vec__20277,0,null);var v = cljs.core.nth.call(null,vec__20277,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__20266.call(null,cljs.core.rest.call(null,s__20267__$2)));
} else
{{
var G__20280 = cljs.core.rest.call(null,s__20267__$2);
s__20267__$1 = G__20280;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__20265__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__20265__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8518__auto__ = cljs.core.seq.call(null,iterys__8517__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__8518__auto__)
{return cljs.core.concat.call(null,fs__8518__auto__,iter__20264.call(null,cljs.core.rest.call(null,s__20265__$1)));
} else
{{
var G__20281 = cljs.core.rest.call(null,s__20265__$1);
s__20265__$1 = G__20281;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,input_paths);
})());
});
input_map = function(p__20243,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__20243);
case 2:
return input_map__2.call(this,p__20243,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__20297 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__20297,0,null);var change_paths = cljs.core.nth.call(null,vec__20297,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = (function iter__20298(s__20299){return (new cljs.core.LazySeq(null,(function (){var s__20299__$1 = s__20299;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20299__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8517__auto__ = ((function (s__20299__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__20300(s__20301){return (new cljs.core.LazySeq(null,((function (s__20299__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__20301__$1 = s__20301;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__20301__$1);if(temp__4092__auto____$1)
{var s__20301__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20301__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__20301__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__20303 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__20302 = 0;while(true){
if((i__20302 < size__8520__auto__))
{var vec__20310 = cljs.core._nth.call(null,c__8519__auto__,i__20302);var k = cljs.core.nth.call(null,vec__20310,0,null);var v = cljs.core.nth.call(null,vec__20310,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__20303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20312 = (i__20302 + 1);
i__20302 = G__20312;
continue;
}
} else
{{
var G__20313 = (i__20302 + 1);
i__20302 = G__20313;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20303),iter__20300.call(null,cljs.core.chunk_rest.call(null,s__20301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20303),null);
}
} else
{var vec__20311 = cljs.core.first.call(null,s__20301__$2);var k = cljs.core.nth.call(null,vec__20311,0,null);var v = cljs.core.nth.call(null,vec__20311,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20300.call(null,cljs.core.rest.call(null,s__20301__$2)));
} else
{{
var G__20314 = cljs.core.rest.call(null,s__20301__$2);
s__20301__$1 = G__20314;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__20299__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__20299__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8518__auto__ = cljs.core.seq.call(null,iterys__8517__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__8518__auto__)
{return cljs.core.concat.call(null,fs__8518__auto__,iter__20298.call(null,cljs.core.rest.call(null,s__20299__$1)));
} else
{{
var G__20315 = cljs.core.rest.call(null,s__20299__$1);
s__20299__$1 = G__20315;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__20319){var vec__20320 = p__20319;var k = cljs.core.nth.call(null,vec__20320,0,null);var v = cljs.core.nth.call(null,vec__20320,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20316_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__20316_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__20322){var map__20338 = p__20322;var map__20338__$1 = ((cljs.core.seq_QMARK_.call(null,map__20338))?cljs.core.apply.call(null,cljs.core.hash_map,map__20338):map__20338);var input_paths = cljs.core.get.call(null,map__20338__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__20338__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__8521__auto__ = (function iter__20339(s__20340){return (new cljs.core.LazySeq(null,(function (){var s__20340__$1 = s__20340;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__20340__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__8517__auto__ = ((function (s__20340__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__20341(s__20342){return (new cljs.core.LazySeq(null,((function (s__20340__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__20342__$1 = s__20342;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__20342__$1);if(temp__4092__auto____$1)
{var s__20342__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20342__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__20342__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__20344 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__20343 = 0;while(true){
if((i__20343 < size__8520__auto__))
{var vec__20351 = cljs.core._nth.call(null,c__8519__auto__,i__20343);var k = cljs.core.nth.call(null,vec__20351,0,null);var v = cljs.core.nth.call(null,vec__20351,1,null);cljs.core.chunk_append.call(null,b__20344,k);
{
var G__20353 = (i__20343 + 1);
i__20343 = G__20353;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20344),iter__20341.call(null,cljs.core.chunk_rest.call(null,s__20342__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20344),null);
}
} else
{var vec__20352 = cljs.core.first.call(null,s__20342__$2);var k = cljs.core.nth.call(null,vec__20352,0,null);var v = cljs.core.nth.call(null,vec__20352,1,null);return cljs.core.cons.call(null,k,iter__20341.call(null,cljs.core.rest.call(null,s__20342__$2)));
}
} else
{return null;
}
break;
}
});})(s__20340__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__20340__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__8518__auto__ = cljs.core.seq.call(null,iterys__8517__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__8518__auto__)
{return cljs.core.concat.call(null,fs__8518__auto__,iter__20339.call(null,cljs.core.rest.call(null,s__20340__$1)));
} else
{{
var G__20354 = cljs.core.rest.call(null,s__20340__$1);
s__20340__$1 = G__20354;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__20321_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__20321_SHARP_);
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
