// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_38095 = cljs.core.first.call(null,a);var ocr_38096 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_38095)) && ((cljs.core.count.call(null,ocr_38095) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_38096)) && ((cljs.core.count.call(null,ocr_38096) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_38095 === null))
{if((ocr_38096 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38103 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38104 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38103;
b = G__38104;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38105 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38106 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38105;
b = G__38106;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__38107 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38108 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38107;
b = G__38108;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38109 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38110 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38109;
b = G__38110;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38111 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38112 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38111;
b = G__38112;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__38113 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38114 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38113;
b = G__38114;
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
{if((ocr_38095 === null))
{if((ocr_38096 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38115 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38116 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38115;
b = G__38116;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38117 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38118 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38117;
b = G__38118;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__38119 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38120 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38119;
b = G__38120;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38095,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38121 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38122 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38121;
b = G__38122;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_38096,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__38123 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38124 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38123;
b = G__38124;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__38125 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__38126 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__38125;
b = G__38126;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__38128 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__38128,0,null);var large = cljs.core.nth.call(null,vec__38128,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__38130){var vec__38132 = p__38130;var x = cljs.core.nth.call(null,vec__38132,0,null);var xs = cljs.core.nthnext.call(null,vec__38132,1);if(cljs.core.truth_((function (){var and__13942__auto__ = x;if(cljs.core.truth_(and__13942__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13942__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__38129_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__38129_SHARP_),cljs.core.conj.call(null,context,p1__38129_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__38130){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__38130);
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
{return cljs.core.reduce.call(null,(function (a,p__38139){var vec__38140 = p__38139;var k = cljs.core.nth.call(null,vec__38140,0,null);var v = cljs.core.nth.call(null,vec__38140,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__38141,arg_names){var map__38159 = p__38141;var map__38159__$1 = ((cljs.core.seq_QMARK_.call(null,map__38159))?cljs.core.apply.call(null,cljs.core.hash_map,map__38159):map__38159);var input_paths = cljs.core.get.call(null,map__38159__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__38159__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__38160){var vec__38161 = p__38160;var k = cljs.core.nth.call(null,vec__38161,0,null);var v = cljs.core.nth.call(null,vec__38161,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14652__auto__ = (function iter__38162(s__38163){return (new cljs.core.LazySeq(null,(function (){var s__38163__$1 = s__38163;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38163__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14648__auto__ = ((function (s__38163__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__38164(s__38165){return (new cljs.core.LazySeq(null,((function (s__38163__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__38165__$1 = s__38165;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__38165__$1);if(temp__4092__auto____$1)
{var s__38165__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38165__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__38165__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__38167 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__38166 = 0;while(true){
if((i__38166 < size__14651__auto__))
{var vec__38174 = cljs.core._nth.call(null,c__14650__auto__,i__38166);var k = cljs.core.nth.call(null,vec__38174,0,null);var v = cljs.core.nth.call(null,vec__38174,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__38167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__38176 = (i__38166 + 1);
i__38166 = G__38176;
continue;
}
} else
{{
var G__38177 = (i__38166 + 1);
i__38166 = G__38177;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38167),iter__38164.call(null,cljs.core.chunk_rest.call(null,s__38165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38167),null);
}
} else
{var vec__38175 = cljs.core.first.call(null,s__38165__$2);var k = cljs.core.nth.call(null,vec__38175,0,null);var v = cljs.core.nth.call(null,vec__38175,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__38164.call(null,cljs.core.rest.call(null,s__38165__$2)));
} else
{{
var G__38178 = cljs.core.rest.call(null,s__38165__$2);
s__38165__$1 = G__38178;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__38163__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__38163__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14649__auto__ = cljs.core.seq.call(null,iterys__14648__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14649__auto__)
{return cljs.core.concat.call(null,fs__14649__auto__,iter__38162.call(null,cljs.core.rest.call(null,s__38163__$1)));
} else
{{
var G__38179 = cljs.core.rest.call(null,s__38163__$1);
s__38163__$1 = G__38179;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,input_paths);
})());
});
input_map = function(p__38141,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__38141);
case 2:
return input_map__2.call(this,p__38141,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__38195 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__38195,0,null);var change_paths = cljs.core.nth.call(null,vec__38195,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14652__auto__ = (function iter__38196(s__38197){return (new cljs.core.LazySeq(null,(function (){var s__38197__$1 = s__38197;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38197__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14648__auto__ = ((function (s__38197__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__38198(s__38199){return (new cljs.core.LazySeq(null,((function (s__38197__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__38199__$1 = s__38199;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__38199__$1);if(temp__4092__auto____$1)
{var s__38199__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38199__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__38199__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__38201 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__38200 = 0;while(true){
if((i__38200 < size__14651__auto__))
{var vec__38208 = cljs.core._nth.call(null,c__14650__auto__,i__38200);var k = cljs.core.nth.call(null,vec__38208,0,null);var v = cljs.core.nth.call(null,vec__38208,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__38201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38210 = (i__38200 + 1);
i__38200 = G__38210;
continue;
}
} else
{{
var G__38211 = (i__38200 + 1);
i__38200 = G__38211;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38201),iter__38198.call(null,cljs.core.chunk_rest.call(null,s__38199__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38201),null);
}
} else
{var vec__38209 = cljs.core.first.call(null,s__38199__$2);var k = cljs.core.nth.call(null,vec__38209,0,null);var v = cljs.core.nth.call(null,vec__38209,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38198.call(null,cljs.core.rest.call(null,s__38199__$2)));
} else
{{
var G__38212 = cljs.core.rest.call(null,s__38199__$2);
s__38199__$1 = G__38212;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__38197__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__38197__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14649__auto__ = cljs.core.seq.call(null,iterys__14648__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14649__auto__)
{return cljs.core.concat.call(null,fs__14649__auto__,iter__38196.call(null,cljs.core.rest.call(null,s__38197__$1)));
} else
{{
var G__38213 = cljs.core.rest.call(null,s__38197__$1);
s__38197__$1 = G__38213;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__38217){var vec__38218 = p__38217;var k = cljs.core.nth.call(null,vec__38218,0,null);var v = cljs.core.nth.call(null,vec__38218,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__38214_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__38214_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__38251){var map__38267 = p__38251;var map__38267__$1 = ((cljs.core.seq_QMARK_.call(null,map__38267))?cljs.core.apply.call(null,cljs.core.hash_map,map__38267):map__38267);var input_paths = cljs.core.get.call(null,map__38267__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__38267__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14652__auto__ = (function iter__38268(s__38269){return (new cljs.core.LazySeq(null,(function (){var s__38269__$1 = s__38269;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38269__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14648__auto__ = ((function (s__38269__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__38270(s__38271){return (new cljs.core.LazySeq(null,((function (s__38269__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__38271__$1 = s__38271;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__38271__$1);if(temp__4092__auto____$1)
{var s__38271__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38271__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__38271__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__38273 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__38272 = 0;while(true){
if((i__38272 < size__14651__auto__))
{var vec__38280 = cljs.core._nth.call(null,c__14650__auto__,i__38272);var k = cljs.core.nth.call(null,vec__38280,0,null);var v = cljs.core.nth.call(null,vec__38280,1,null);cljs.core.chunk_append.call(null,b__38273,k);
{
var G__38282 = (i__38272 + 1);
i__38272 = G__38282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38273),iter__38270.call(null,cljs.core.chunk_rest.call(null,s__38271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38273),null);
}
} else
{var vec__38281 = cljs.core.first.call(null,s__38271__$2);var k = cljs.core.nth.call(null,vec__38281,0,null);var v = cljs.core.nth.call(null,vec__38281,1,null);return cljs.core.cons.call(null,k,iter__38270.call(null,cljs.core.rest.call(null,s__38271__$2)));
}
} else
{return null;
}
break;
}
});})(s__38269__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__38269__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14649__auto__ = cljs.core.seq.call(null,iterys__14648__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14649__auto__)
{return cljs.core.concat.call(null,fs__14649__auto__,iter__38268.call(null,cljs.core.rest.call(null,s__38269__$1)));
} else
{{
var G__38283 = cljs.core.rest.call(null,s__38269__$1);
s__38269__$1 = G__38283;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__38219_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__38219_SHARP_);
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