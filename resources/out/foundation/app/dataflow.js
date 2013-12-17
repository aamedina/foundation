// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_333029 = cljs.core.first.call(null,a);var ocr_333030 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_333029)) && ((cljs.core.count.call(null,ocr_333029) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_333030)) && ((cljs.core.count.call(null,ocr_333030) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_333029 === null))
{if((ocr_333030 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333037 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333038 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333037;
b = G__333038;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333039 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333040 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333039;
b = G__333040;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__333041 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333042 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333041;
b = G__333042;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333043 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333044 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333043;
b = G__333044;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333045 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333046 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333045;
b = G__333046;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__333047 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333048 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333047;
b = G__333048;
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
{if((ocr_333029 === null))
{if((ocr_333030 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333049 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333050 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333049;
b = G__333050;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333051 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333052 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333051;
b = G__333052;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__333053 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333054 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333053;
b = G__333054;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333029,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333055 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333056 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333055;
b = G__333056;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_333030,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__333057 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333058 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333057;
b = G__333058;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__333059 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__333060 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__333059;
b = G__333060;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__333062 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__333062,0,null);var large = cljs.core.nth.call(null,vec__333062,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__333064){var vec__333066 = p__333064;var x = cljs.core.nth.call(null,vec__333066,0,null);var xs = cljs.core.nthnext.call(null,vec__333066,1);if(cljs.core.truth_((function (){var and__13811__auto__ = x;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13811__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__333063_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__333063_SHARP_),cljs.core.conj.call(null,context,p1__333063_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__333064){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__333064);
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
{return cljs.core.reduce.call(null,(function (a,p__333069){var vec__333070 = p__333069;var k = cljs.core.nth.call(null,vec__333070,0,null);var v = cljs.core.nth.call(null,vec__333070,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__333071,arg_names){var map__333089 = p__333071;var map__333089__$1 = ((cljs.core.seq_QMARK_.call(null,map__333089))?cljs.core.apply.call(null,cljs.core.hash_map,map__333089):map__333089);var input_paths = cljs.core.get.call(null,map__333089__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__333089__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__333090){var vec__333091 = p__333090;var k = cljs.core.nth.call(null,vec__333091,0,null);var v = cljs.core.nth.call(null,vec__333091,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__333092(s__333093){return (new cljs.core.LazySeq(null,(function (){var s__333093__$1 = s__333093;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__333093__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__333093__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__333094(s__333095){return (new cljs.core.LazySeq(null,((function (s__333093__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__333095__$1 = s__333095;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__333095__$1);if(temp__4092__auto____$1)
{var s__333095__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__333095__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__333095__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__333097 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__333096 = 0;while(true){
if((i__333096 < size__14515__auto__))
{var vec__333104 = cljs.core._nth.call(null,c__14514__auto__,i__333096);var k = cljs.core.nth.call(null,vec__333104,0,null);var v = cljs.core.nth.call(null,vec__333104,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__333097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__333106 = (i__333096 + 1);
i__333096 = G__333106;
continue;
}
} else
{{
var G__333107 = (i__333096 + 1);
i__333096 = G__333107;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333097),iter__333094.call(null,cljs.core.chunk_rest.call(null,s__333095__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333097),null);
}
} else
{var vec__333105 = cljs.core.first.call(null,s__333095__$2);var k = cljs.core.nth.call(null,vec__333105,0,null);var v = cljs.core.nth.call(null,vec__333105,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__333094.call(null,cljs.core.rest.call(null,s__333095__$2)));
} else
{{
var G__333108 = cljs.core.rest.call(null,s__333095__$2);
s__333095__$1 = G__333108;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__333093__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__333093__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__333092.call(null,cljs.core.rest.call(null,s__333093__$1)));
} else
{{
var G__333109 = cljs.core.rest.call(null,s__333093__$1);
s__333093__$1 = G__333109;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,input_paths);
})());
});
input_map = function(p__333071,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__333071);
case 2:
return input_map__2.call(this,p__333071,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__333125 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__333125,0,null);var change_paths = cljs.core.nth.call(null,vec__333125,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__333126(s__333127){return (new cljs.core.LazySeq(null,(function (){var s__333127__$1 = s__333127;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__333127__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__333127__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__333128(s__333129){return (new cljs.core.LazySeq(null,((function (s__333127__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__333129__$1 = s__333129;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__333129__$1);if(temp__4092__auto____$1)
{var s__333129__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__333129__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__333129__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__333131 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__333130 = 0;while(true){
if((i__333130 < size__14515__auto__))
{var vec__333138 = cljs.core._nth.call(null,c__14514__auto__,i__333130);var k = cljs.core.nth.call(null,vec__333138,0,null);var v = cljs.core.nth.call(null,vec__333138,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__333131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__333140 = (i__333130 + 1);
i__333130 = G__333140;
continue;
}
} else
{{
var G__333141 = (i__333130 + 1);
i__333130 = G__333141;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333131),iter__333128.call(null,cljs.core.chunk_rest.call(null,s__333129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333131),null);
}
} else
{var vec__333139 = cljs.core.first.call(null,s__333129__$2);var k = cljs.core.nth.call(null,vec__333139,0,null);var v = cljs.core.nth.call(null,vec__333139,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__333128.call(null,cljs.core.rest.call(null,s__333129__$2)));
} else
{{
var G__333142 = cljs.core.rest.call(null,s__333129__$2);
s__333129__$1 = G__333142;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__333127__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__333127__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__333126.call(null,cljs.core.rest.call(null,s__333127__$1)));
} else
{{
var G__333143 = cljs.core.rest.call(null,s__333127__$1);
s__333127__$1 = G__333143;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__333147){var vec__333148 = p__333147;var k = cljs.core.nth.call(null,vec__333148,0,null);var v = cljs.core.nth.call(null,vec__333148,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__333144_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__333144_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__333150){var map__333166 = p__333150;var map__333166__$1 = ((cljs.core.seq_QMARK_.call(null,map__333166))?cljs.core.apply.call(null,cljs.core.hash_map,map__333166):map__333166);var input_paths = cljs.core.get.call(null,map__333166__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__333166__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14516__auto__ = (function iter__333167(s__333168){return (new cljs.core.LazySeq(null,(function (){var s__333168__$1 = s__333168;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__333168__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__333168__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__333169(s__333170){return (new cljs.core.LazySeq(null,((function (s__333168__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__333170__$1 = s__333170;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__333170__$1);if(temp__4092__auto____$1)
{var s__333170__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__333170__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__333170__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__333172 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__333171 = 0;while(true){
if((i__333171 < size__14515__auto__))
{var vec__333179 = cljs.core._nth.call(null,c__14514__auto__,i__333171);var k = cljs.core.nth.call(null,vec__333179,0,null);var v = cljs.core.nth.call(null,vec__333179,1,null);cljs.core.chunk_append.call(null,b__333172,k);
{
var G__333181 = (i__333171 + 1);
i__333171 = G__333181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333172),iter__333169.call(null,cljs.core.chunk_rest.call(null,s__333170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333172),null);
}
} else
{var vec__333180 = cljs.core.first.call(null,s__333170__$2);var k = cljs.core.nth.call(null,vec__333180,0,null);var v = cljs.core.nth.call(null,vec__333180,1,null);return cljs.core.cons.call(null,k,iter__333169.call(null,cljs.core.rest.call(null,s__333170__$2)));
}
} else
{return null;
}
break;
}
});})(s__333168__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__333168__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__333167.call(null,cljs.core.rest.call(null,s__333168__$1)));
} else
{{
var G__333182 = cljs.core.rest.call(null,s__333168__$1);
s__333168__$1 = G__333182;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__333149_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__333149_SHARP_);
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