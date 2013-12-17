// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_323852 = cljs.core.first.call(null,a);var ocr_323853 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_323852)) && ((cljs.core.count.call(null,ocr_323852) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_323853)) && ((cljs.core.count.call(null,ocr_323853) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_323852 === null))
{if((ocr_323853 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323860 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323861 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323860;
b = G__323861;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323862 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323863 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323862;
b = G__323863;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__323864 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323865 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323864;
b = G__323865;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323866 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323867 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323866;
b = G__323867;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323868 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323869 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323868;
b = G__323869;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__323870 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323871 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323870;
b = G__323871;
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
{if((ocr_323852 === null))
{if((ocr_323853 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323872 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323873 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323872;
b = G__323873;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323874 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323875 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323874;
b = G__323875;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__323876 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323877 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323876;
b = G__323877;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323852,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323878 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323879 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323878;
b = G__323879;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_323853,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__323880 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323881 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323880;
b = G__323881;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__323882 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__323883 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__323882;
b = G__323883;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__323885 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__323885,0,null);var large = cljs.core.nth.call(null,vec__323885,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__323887){var vec__323889 = p__323887;var x = cljs.core.nth.call(null,vec__323889,0,null);var xs = cljs.core.nthnext.call(null,vec__323889,1);if(cljs.core.truth_((function (){var and__13811__auto__ = x;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13811__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__323886_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__323886_SHARP_),cljs.core.conj.call(null,context,p1__323886_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__323887){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__323887);
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
{return cljs.core.reduce.call(null,(function (a,p__323892){var vec__323893 = p__323892;var k = cljs.core.nth.call(null,vec__323893,0,null);var v = cljs.core.nth.call(null,vec__323893,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__323894,arg_names){var map__323912 = p__323894;var map__323912__$1 = ((cljs.core.seq_QMARK_.call(null,map__323912))?cljs.core.apply.call(null,cljs.core.hash_map,map__323912):map__323912);var input_paths = cljs.core.get.call(null,map__323912__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__323912__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__323913){var vec__323914 = p__323913;var k = cljs.core.nth.call(null,vec__323914,0,null);var v = cljs.core.nth.call(null,vec__323914,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__323915(s__323916){return (new cljs.core.LazySeq(null,(function (){var s__323916__$1 = s__323916;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323916__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__323916__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__323917(s__323918){return (new cljs.core.LazySeq(null,((function (s__323916__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__323918__$1 = s__323918;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323918__$1);if(temp__4092__auto____$1)
{var s__323918__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323918__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323918__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323920 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323919 = 0;while(true){
if((i__323919 < size__14515__auto__))
{var vec__323927 = cljs.core._nth.call(null,c__14514__auto__,i__323919);var k = cljs.core.nth.call(null,vec__323927,0,null);var v = cljs.core.nth.call(null,vec__323927,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__323920,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__323929 = (i__323919 + 1);
i__323919 = G__323929;
continue;
}
} else
{{
var G__323930 = (i__323919 + 1);
i__323919 = G__323930;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323920),iter__323917.call(null,cljs.core.chunk_rest.call(null,s__323918__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323920),null);
}
} else
{var vec__323928 = cljs.core.first.call(null,s__323918__$2);var k = cljs.core.nth.call(null,vec__323928,0,null);var v = cljs.core.nth.call(null,vec__323928,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__323917.call(null,cljs.core.rest.call(null,s__323918__$2)));
} else
{{
var G__323931 = cljs.core.rest.call(null,s__323918__$2);
s__323918__$1 = G__323931;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__323916__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__323916__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__323915.call(null,cljs.core.rest.call(null,s__323916__$1)));
} else
{{
var G__323932 = cljs.core.rest.call(null,s__323916__$1);
s__323916__$1 = G__323932;
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
input_map = function(p__323894,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__323894);
case 2:
return input_map__2.call(this,p__323894,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__323948 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__323948,0,null);var change_paths = cljs.core.nth.call(null,vec__323948,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__323949(s__323950){return (new cljs.core.LazySeq(null,(function (){var s__323950__$1 = s__323950;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323950__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__323950__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__323951(s__323952){return (new cljs.core.LazySeq(null,((function (s__323950__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__323952__$1 = s__323952;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323952__$1);if(temp__4092__auto____$1)
{var s__323952__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323952__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323952__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323954 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323953 = 0;while(true){
if((i__323953 < size__14515__auto__))
{var vec__323961 = cljs.core._nth.call(null,c__14514__auto__,i__323953);var k = cljs.core.nth.call(null,vec__323961,0,null);var v = cljs.core.nth.call(null,vec__323961,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__323954,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__323963 = (i__323953 + 1);
i__323953 = G__323963;
continue;
}
} else
{{
var G__323964 = (i__323953 + 1);
i__323953 = G__323964;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323954),iter__323951.call(null,cljs.core.chunk_rest.call(null,s__323952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323954),null);
}
} else
{var vec__323962 = cljs.core.first.call(null,s__323952__$2);var k = cljs.core.nth.call(null,vec__323962,0,null);var v = cljs.core.nth.call(null,vec__323962,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__323951.call(null,cljs.core.rest.call(null,s__323952__$2)));
} else
{{
var G__323965 = cljs.core.rest.call(null,s__323952__$2);
s__323952__$1 = G__323965;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__323950__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__323950__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__323949.call(null,cljs.core.rest.call(null,s__323950__$1)));
} else
{{
var G__323966 = cljs.core.rest.call(null,s__323950__$1);
s__323950__$1 = G__323966;
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
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__323970){var vec__323971 = p__323970;var k = cljs.core.nth.call(null,vec__323971,0,null);var v = cljs.core.nth.call(null,vec__323971,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__323967_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__323967_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__323973){var map__323989 = p__323973;var map__323989__$1 = ((cljs.core.seq_QMARK_.call(null,map__323989))?cljs.core.apply.call(null,cljs.core.hash_map,map__323989):map__323989);var input_paths = cljs.core.get.call(null,map__323989__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__323989__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14516__auto__ = (function iter__323990(s__323991){return (new cljs.core.LazySeq(null,(function (){var s__323991__$1 = s__323991;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323991__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14512__auto__ = ((function (s__323991__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__323992(s__323993){return (new cljs.core.LazySeq(null,((function (s__323991__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__323993__$1 = s__323993;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323993__$1);if(temp__4092__auto____$1)
{var s__323993__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323993__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323993__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323995 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323994 = 0;while(true){
if((i__323994 < size__14515__auto__))
{var vec__324002 = cljs.core._nth.call(null,c__14514__auto__,i__323994);var k = cljs.core.nth.call(null,vec__324002,0,null);var v = cljs.core.nth.call(null,vec__324002,1,null);cljs.core.chunk_append.call(null,b__323995,k);
{
var G__324004 = (i__323994 + 1);
i__323994 = G__324004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323995),iter__323992.call(null,cljs.core.chunk_rest.call(null,s__323993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323995),null);
}
} else
{var vec__324003 = cljs.core.first.call(null,s__323993__$2);var k = cljs.core.nth.call(null,vec__324003,0,null);var v = cljs.core.nth.call(null,vec__324003,1,null);return cljs.core.cons.call(null,k,iter__323992.call(null,cljs.core.rest.call(null,s__323993__$2)));
}
} else
{return null;
}
break;
}
});})(s__323991__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__323991__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14513__auto__ = cljs.core.seq.call(null,iterys__14512__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14513__auto__)
{return cljs.core.concat.call(null,fs__14513__auto__,iter__323990.call(null,cljs.core.rest.call(null,s__323991__$1)));
} else
{{
var G__324005 = cljs.core.rest.call(null,s__323991__$1);
s__323991__$1 = G__324005;
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
}),acc,cljs.core.filter.call(null,(function (p1__323972_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__323972_SHARP_);
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