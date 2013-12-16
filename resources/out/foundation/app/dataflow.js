// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_16919 = cljs.core.first.call(null,a);var ocr_16920 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_16919)) && ((cljs.core.count.call(null,ocr_16919) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_16920)) && ((cljs.core.count.call(null,ocr_16920) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_16919 === null))
{if((ocr_16920 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16927 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16928 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16927;
b = G__16928;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16929 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16930 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16929;
b = G__16930;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__16931 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16932 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16931;
b = G__16932;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16933 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16934 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16933;
b = G__16934;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16935 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16936 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16935;
b = G__16936;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__16937 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16938 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16937;
b = G__16938;
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
{if((ocr_16919 === null))
{if((ocr_16920 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16939 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16940 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16939;
b = G__16940;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16941 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16942 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16941;
b = G__16942;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__16943 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16944 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16943;
b = G__16944;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16919,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16945 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16946 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16945;
b = G__16946;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_16920,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__16947 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16948 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16947;
b = G__16948;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__16949 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__16950 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__16949;
b = G__16950;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__16952 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__16952,0,null);var large = cljs.core.nth.call(null,vec__16952,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__16954){var vec__16956 = p__16954;var x = cljs.core.nth.call(null,vec__16956,0,null);var xs = cljs.core.nthnext.call(null,vec__16956,1);if(cljs.core.truth_((function (){var and__13811__auto__ = x;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13811__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__16953_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__16953_SHARP_),cljs.core.conj.call(null,context,p1__16953_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__16954){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__16954);
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
{return cljs.core.reduce.call(null,(function (a,p__16959){var vec__16960 = p__16959;var k = cljs.core.nth.call(null,vec__16960,0,null);var v = cljs.core.nth.call(null,vec__16960,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__16961,arg_names){var map__16979 = p__16961;var map__16979__$1 = ((cljs.core.seq_QMARK_.call(null,map__16979))?cljs.core.apply.call(null,cljs.core.hash_map,map__16979):map__16979);var input_paths = cljs.core.get.call(null,map__16979__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__16979__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__16980){var vec__16981 = p__16980;var k = cljs.core.nth.call(null,vec__16981,0,null);var v = cljs.core.nth.call(null,vec__16981,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__16982(s__16983){return (new cljs.core.LazySeq(null,(function (){var s__16983__$1 = s__16983;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16983__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__16983__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__16984(s__16985){return (new cljs.core.LazySeq(null,((function (s__16983__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__16985__$1 = s__16985;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16985__$1);if(temp__4092__auto____$1)
{var s__16985__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16985__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16985__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16987 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16986 = 0;while(true){
if((i__16986 < size__14515__auto__))
{var vec__16994 = cljs.core._nth.call(null,c__14514__auto__,i__16986);var k = cljs.core.nth.call(null,vec__16994,0,null);var v = cljs.core.nth.call(null,vec__16994,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__16987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__16996 = (i__16986 + 1);
i__16986 = G__16996;
continue;
}
} else
{{
var G__16997 = (i__16986 + 1);
i__16986 = G__16997;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16987),iter__16984.call(null,cljs.core.chunk_rest.call(null,s__16985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16987),null);
}
} else
{var vec__16995 = cljs.core.first.call(null,s__16985__$2);var k = cljs.core.nth.call(null,vec__16995,0,null);var v = cljs.core.nth.call(null,vec__16995,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__16984.call(null,cljs.core.rest.call(null,s__16985__$2)));
} else
{{
var G__16998 = cljs.core.rest.call(null,s__16985__$2);
s__16985__$1 = G__16998;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__16983__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__16983__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__16982.call(null,cljs.core.rest.call(null,s__16983__$1)));
} else
{{
var G__16999 = cljs.core.rest.call(null,s__16983__$1);
s__16983__$1 = G__16999;
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
input_map = function(p__16961,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__16961);
case 2:
return input_map__2.call(this,p__16961,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__17015 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__17015,0,null);var change_paths = cljs.core.nth.call(null,vec__17015,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__17016(s__17017){return (new cljs.core.LazySeq(null,(function (){var s__17017__$1 = s__17017;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17017__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__17017__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__17018(s__17019){return (new cljs.core.LazySeq(null,((function (s__17017__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17019__$1 = s__17019;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17019__$1);if(temp__4092__auto____$1)
{var s__17019__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17019__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__17019__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__17021 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__17020 = 0;while(true){
if((i__17020 < size__14515__auto__))
{var vec__17028 = cljs.core._nth.call(null,c__14514__auto__,i__17020);var k = cljs.core.nth.call(null,vec__17028,0,null);var v = cljs.core.nth.call(null,vec__17028,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__17021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__17030 = (i__17020 + 1);
i__17020 = G__17030;
continue;
}
} else
{{
var G__17031 = (i__17020 + 1);
i__17020 = G__17031;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17021),iter__17018.call(null,cljs.core.chunk_rest.call(null,s__17019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17021),null);
}
} else
{var vec__17029 = cljs.core.first.call(null,s__17019__$2);var k = cljs.core.nth.call(null,vec__17029,0,null);var v = cljs.core.nth.call(null,vec__17029,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__17018.call(null,cljs.core.rest.call(null,s__17019__$2)));
} else
{{
var G__17032 = cljs.core.rest.call(null,s__17019__$2);
s__17019__$1 = G__17032;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__17017__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17017__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__17016.call(null,cljs.core.rest.call(null,s__17017__$1)));
} else
{{
var G__17033 = cljs.core.rest.call(null,s__17017__$1);
s__17017__$1 = G__17033;
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
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__17037){var vec__17038 = p__17037;var k = cljs.core.nth.call(null,vec__17038,0,null);var v = cljs.core.nth.call(null,vec__17038,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__17034_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__17034_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__17040){var map__17056 = p__17040;var map__17056__$1 = ((cljs.core.seq_QMARK_.call(null,map__17056))?cljs.core.apply.call(null,cljs.core.hash_map,map__17056):map__17056);var input_paths = cljs.core.get.call(null,map__17056__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__17056__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14516__auto__ = (function iter__17057(s__17058){return (new cljs.core.LazySeq(null,(function (){var s__17058__$1 = s__17058;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17058__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__17058__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__17059(s__17060){return (new cljs.core.LazySeq(null,((function (s__17058__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__17060__$1 = s__17060;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17060__$1);if(temp__4092__auto____$1)
{var s__17060__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17060__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__17060__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__17062 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__17061 = 0;while(true){
if((i__17061 < size__14515__auto__))
{var vec__17069 = cljs.core._nth.call(null,c__14514__auto__,i__17061);var k = cljs.core.nth.call(null,vec__17069,0,null);var v = cljs.core.nth.call(null,vec__17069,1,null);cljs.core.chunk_append.call(null,b__17062,k);
{
var G__17071 = (i__17061 + 1);
i__17061 = G__17071;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17062),iter__17059.call(null,cljs.core.chunk_rest.call(null,s__17060__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17062),null);
}
} else
{var vec__17070 = cljs.core.first.call(null,s__17060__$2);var k = cljs.core.nth.call(null,vec__17070,0,null);var v = cljs.core.nth.call(null,vec__17070,1,null);return cljs.core.cons.call(null,k,iter__17059.call(null,cljs.core.rest.call(null,s__17060__$2)));
}
} else
{return null;
}
break;
}
});})(s__17058__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__17058__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__17057.call(null,cljs.core.rest.call(null,s__17058__$1)));
} else
{{
var G__17072 = cljs.core.rest.call(null,s__17058__$1);
s__17058__$1 = G__17072;
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
}),acc,cljs.core.filter.call(null,(function (p1__17039_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__17039_SHARP_);
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