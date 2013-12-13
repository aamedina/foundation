// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.dataflow');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.dataflow.matching_path_QMARK_ = (function matching_path_QMARK_(path1,path2){return cljs.core._EQ_.call(null,(function (){var a = cljs.core.vec.call(null,cljs.core.flatten.call(null,path1));var b = cljs.core.vec.call(null,cljs.core.flatten.call(null,path2));while(true){
var ocr_36637 = cljs.core.first.call(null,a);var ocr_36638 = cljs.core.first.call(null,b);if((cljs.core.vector_QMARK_.call(null,ocr_36637)) && ((cljs.core.count.call(null,ocr_36637) === 0)))
{if((cljs.core.vector_QMARK_.call(null,ocr_36638)) && ((cljs.core.count.call(null,ocr_36638) === 0)))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((ocr_36637 === null))
{if((ocr_36638 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36645 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36646 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36645;
b = G__36646;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36647 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36648 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36647;
b = G__36648;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__36649 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36650 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36649;
b = G__36650;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36651 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36652 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36651;
b = G__36652;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36653 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36654 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36653;
b = G__36654;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__36655 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36656 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36655;
b = G__36656;
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
{if((ocr_36637 === null))
{if((ocr_36638 === null))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36657 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36658 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36657;
b = G__36658;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36659 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36660 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36659;
b = G__36660;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__36661 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36662 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36661;
b = G__36662;
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
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,a))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"**","**",1013905586)))
{if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.rest.call(null,b))))
{return new cljs.core.Keyword(null,"succeed","succeed",3441701300);
} else
{return new cljs.core.Keyword(null,"fail","fail",1017039504);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36637,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36663 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36664 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36663;
b = G__36664;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36638,new cljs.core.Keyword(null,"*","*",1013904284)))
{{
var G__36665 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36666 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36665;
b = G__36666;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,a),cljs.core.first.call(null,b)))
{{
var G__36667 = cljs.core.vec.call(null,cljs.core.rest.call(null,a));
var G__36668 = cljs.core.vec.call(null,cljs.core.rest.call(null,b));
a = G__36667;
b = G__36668;
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
foundation.app.dataflow.descendant_QMARK_ = (function descendant_QMARK_(path_a,path_b){var vec__36670 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__36670,0,null);var large = cljs.core.nth.call(null,vec__36670,1,null);return foundation.app.dataflow.matching_path_QMARK_.call(null,small,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,small),large)));
});
/**
* Returns a sequence of [path value] tuples
*/
foundation.app.dataflow.get_path = (function() {
var get_path = null;
var get_path__2 = (function (data,path){return get_path.call(null,data,cljs.core.PersistentVector.EMPTY,path);
});
var get_path__3 = (function (data,context,p__36672){var vec__36674 = p__36672;var x = cljs.core.nth.call(null,vec__36674,0,null);var xs = cljs.core.nthnext.call(null,vec__36674,1);if(cljs.core.truth_((function (){var and__13776__auto__ = x;if(cljs.core.truth_(and__13776__auto__))
{return cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992));
} else
{return and__13776__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"*","*",1013904284)))
{return cljs.core.mapcat.call(null,(function (p1__36671_SHARP_){return get_path.call(null,cljs.core.get.call(null,data,p1__36671_SHARP_),cljs.core.conj.call(null,context,p1__36671_SHARP_),xs);
}),cljs.core.keys.call(null,data));
} else
{return get_path.call(null,cljs.core.get.call(null,data,x,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)),cljs.core.conj.call(null,context,x),xs);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [context,data], null)], null);
}
});
get_path = function(data,context,p__36672){
switch(arguments.length){
case 2:
return get_path__2.call(this,data,context);
case 3:
return get_path__3.call(this,data,context,p__36672);
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
{return cljs.core.reduce.call(null,(function (a,p__36677){var vec__36678 = p__36677;var k = cljs.core.nth.call(null,vec__36678,0,null);var v = cljs.core.nth.call(null,vec__36678,1,null);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,k),new cljs.core.Keyword(null,"*","*",1013904284)))
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
var input_map__2 = (function (p__36679,arg_names){var map__36697 = p__36679;var map__36697__$1 = ((cljs.core.seq_QMARK_.call(null,map__36697))?cljs.core.apply.call(null,cljs.core.hash_map,map__36697):map__36697);var input_paths = cljs.core.get.call(null,map__36697__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var new_model = cljs.core.get.call(null,map__36697__$1,new cljs.core.Keyword(null,"new-model","new-model",3618698286));var v_type = value_types.call(null,arg_names);return cljs.core.reduce.call(null,(function (a,p__36698){var vec__36699 = p__36698;var k = cljs.core.nth.call(null,vec__36699,0,null);var v = cljs.core.nth.call(null,vec__36699,1,null);if(cljs.core._EQ_.call(null,v_type.call(null,k),new cljs.core.Keyword(null,"seq","seq",1014018001)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14481__auto__ = (function iter__36700(s__36701){return (new cljs.core.LazySeq(null,(function (){var s__36701__$1 = s__36701;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36701__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14477__auto__ = ((function (s__36701__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__36702(s__36703){return (new cljs.core.LazySeq(null,((function (s__36701__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__36703__$1 = s__36703;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36703__$1);if(temp__4092__auto____$1)
{var s__36703__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36703__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36703__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36705 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36704 = 0;while(true){
if((i__36704 < size__14480__auto__))
{var vec__36712 = cljs.core._nth.call(null,c__14479__auto__,i__36704);var k = cljs.core.nth.call(null,vec__36712,0,null);var v = cljs.core.nth.call(null,vec__36712,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__36705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null));
{
var G__36714 = (i__36704 + 1);
i__36704 = G__36714;
continue;
}
} else
{{
var G__36715 = (i__36704 + 1);
i__36704 = G__36715;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36705),iter__36702.call(null,cljs.core.chunk_rest.call(null,s__36703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36705),null);
}
} else
{var vec__36713 = cljs.core.first.call(null,s__36703__$2);var k = cljs.core.nth.call(null,vec__36713,0,null);var v = cljs.core.nth.call(null,vec__36713,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rekey.call(null,k,path,arg_names),v], null),iter__36702.call(null,cljs.core.rest.call(null,s__36703__$2)));
} else
{{
var G__36716 = cljs.core.rest.call(null,s__36703__$2);
s__36703__$1 = G__36716;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__36701__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__36701__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14478__auto__ = cljs.core.seq.call(null,iterys__14477__auto__.call(null,foundation.app.dataflow.get_path.call(null,new_model,path)));if(fs__14478__auto__)
{return cljs.core.concat.call(null,fs__14478__auto__,iter__36700.call(null,cljs.core.rest.call(null,s__36701__$1)));
} else
{{
var G__36717 = cljs.core.rest.call(null,s__36701__$1);
s__36701__$1 = G__36717;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,input_paths);
})());
});
input_map = function(p__36679,arg_names){
switch(arguments.length){
case 1:
return input_map__1.call(this,p__36679);
case 2:
return input_map__2.call(this,p__36679,arg_names);
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
foundation.app.dataflow.change_map = (function change_map(inputs,model_key,change_key){var vec__36733 = cljs.core.juxt.call(null,model_key,change_key).call(null,inputs);var model = cljs.core.nth.call(null,vec__36733,0,null);var change_paths = cljs.core.nth.call(null,vec__36733,1,null);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14481__auto__ = (function iter__36734(s__36735){return (new cljs.core.LazySeq(null,(function (){var s__36735__$1 = s__36735;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36735__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14477__auto__ = ((function (s__36735__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__36736(s__36737){return (new cljs.core.LazySeq(null,((function (s__36735__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__36737__$1 = s__36737;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36737__$1);if(temp__4092__auto____$1)
{var s__36737__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36737__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36737__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36739 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36738 = 0;while(true){
if((i__36738 < size__14480__auto__))
{var vec__36746 = cljs.core._nth.call(null,c__14479__auto__,i__36738);var k = cljs.core.nth.call(null,vec__36746,0,null);var v = cljs.core.nth.call(null,vec__36746,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{cljs.core.chunk_append.call(null,b__36739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36748 = (i__36738 + 1);
i__36738 = G__36748;
continue;
}
} else
{{
var G__36749 = (i__36738 + 1);
i__36738 = G__36749;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36739),iter__36736.call(null,cljs.core.chunk_rest.call(null,s__36737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36739),null);
}
} else
{var vec__36747 = cljs.core.first.call(null,s__36737__$2);var k = cljs.core.nth.call(null,vec__36747,0,null);var v = cljs.core.nth.call(null,vec__36747,1,null);if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("foundation.app.dataflow","nokey","foundation.app.dataflow/nokey",3150069992)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36736.call(null,cljs.core.rest.call(null,s__36737__$2)));
} else
{{
var G__36750 = cljs.core.rest.call(null,s__36737__$2);
s__36737__$1 = G__36750;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__36735__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__36735__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14478__auto__ = cljs.core.seq.call(null,iterys__14477__auto__.call(null,foundation.app.dataflow.get_path.call(null,model,path)));if(fs__14478__auto__)
{return cljs.core.concat.call(null,fs__14478__auto__,iter__36734.call(null,cljs.core.rest.call(null,s__36735__$1)));
} else
{{
var G__36751 = cljs.core.rest.call(null,s__36735__$1);
s__36735__$1 = G__36751;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,change_paths);
})());
});
foundation.app.dataflow.updated_map = (function updated_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"updated","updated",779473965));
});
foundation.app.dataflow.added_map = (function added_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"new-model","new-model",3618698286),new cljs.core.Keyword(null,"added","added",1106564210));
});
foundation.app.dataflow.removed_map = (function removed_map(inputs){return foundation.app.dataflow.change_map.call(null,inputs,new cljs.core.Keyword(null,"old-model","old-model",1443313525),new cljs.core.Keyword(null,"removed","removed",2105740242));
});
foundation.app.dataflow.changed_inputs = (function changed_inputs(inputs,f){var input_m = foundation.app.dataflow.input_map.call(null,inputs);var changed = cljs.core.keys.call(null,f.call(null,inputs));return cljs.core.reduce.call(null,(function (a,p__36755){var vec__36756 = p__36755;var k = cljs.core.nth.call(null,vec__36756,0,null);var v = cljs.core.nth.call(null,vec__36756,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__36752_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,k,p1__36752_SHARP_);
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
var actual_input_paths = (function actual_input_paths(p__36758){var map__36774 = p__36758;var map__36774__$1 = ((cljs.core.seq_QMARK_.call(null,map__36774))?cljs.core.apply.call(null,cljs.core.hash_map,map__36774):map__36774);var input_paths = cljs.core.get.call(null,map__36774__$1,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421));var old_model = cljs.core.get.call(null,map__36774__$1,new cljs.core.Keyword(null,"old-model","old-model",1443313525));var iter__14481__auto__ = (function iter__36775(s__36776){return (new cljs.core.LazySeq(null,(function (){var s__36776__$1 = s__36776;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36776__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var path = cljs.core.first.call(null,xs__4579__auto__);var iterys__14477__auto__ = ((function (s__36776__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function iter__36777(s__36778){return (new cljs.core.LazySeq(null,((function (s__36776__$1,path,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__36778__$1 = s__36778;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36778__$1);if(temp__4092__auto____$1)
{var s__36778__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36778__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36778__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36780 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36779 = 0;while(true){
if((i__36779 < size__14480__auto__))
{var vec__36787 = cljs.core._nth.call(null,c__14479__auto__,i__36779);var k = cljs.core.nth.call(null,vec__36787,0,null);var v = cljs.core.nth.call(null,vec__36787,1,null);cljs.core.chunk_append.call(null,b__36780,k);
{
var G__36789 = (i__36779 + 1);
i__36779 = G__36789;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36780),iter__36777.call(null,cljs.core.chunk_rest.call(null,s__36778__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36780),null);
}
} else
{var vec__36788 = cljs.core.first.call(null,s__36778__$2);var k = cljs.core.nth.call(null,vec__36788,0,null);var v = cljs.core.nth.call(null,vec__36788,1,null);return cljs.core.cons.call(null,k,iter__36777.call(null,cljs.core.rest.call(null,s__36778__$2)));
}
} else
{return null;
}
break;
}
});})(s__36776__$1,path,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__36776__$1,path,xs__4579__auto__,temp__4092__auto__))
;var fs__14478__auto__ = cljs.core.seq.call(null,iterys__14477__auto__.call(null,foundation.app.dataflow.get_path.call(null,old_model,path)));if(fs__14478__auto__)
{return cljs.core.concat.call(null,fs__14478__auto__,iter__36775.call(null,cljs.core.rest.call(null,s__36776__$1)));
} else
{{
var G__36790 = cljs.core.rest.call(null,s__36776__$1);
s__36776__$1 = G__36790;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,input_paths);
});
var removed = (function removed(input_paths,changed_paths,f){return cljs.core.reduce.call(null,(function (acc,path){return cljs.core.reduce.call(null,(function (a,cp){return f.call(null,a,path,cp);
}),acc,cljs.core.filter.call(null,(function (p1__36757_SHARP_){return foundation.app.dataflow.descendant_QMARK_.call(null,path,p1__36757_SHARP_);
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