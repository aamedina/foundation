// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.query');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.query.tuplify = (function tuplify(m){var hashcode = cljs.core.hash.call(null,m);return cljs.core.mapv.call(null,(function (p1__32213_SHARP_){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[hashcode,p1__32213_SHARP_,cljs.core.get.call(null,m,p1__32213_SHARP_)],null));
}),cljs.core.keys.call(null,m));
});
foundation.app.query.TupleSource = (function (){var obj32215 = {};return obj32215;
})();
foundation.app.query.tuple_seq = (function tuple_seq(this$){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$query$TupleSource$tuple_seq$arity$1;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$query$TupleSource$tuple_seq$arity$1(this$);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.query.tuple_seq[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.query.tuple_seq["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"TupleSource.tuple-seq",this$);
}
}
})().call(null,this$);
}
});
cljs.core.PersistentVector.prototype.foundation$app$query$TupleSource$ = true;
cljs.core.PersistentVector.prototype.foundation$app$query$TupleSource$tuple_seq$arity$1 = (function (v){var v__$1 = this;if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,v__$1))
{return cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.query.tuplify,v__$1));
} else
{return null;
}
});
cljs.core.PersistentHashSet.prototype.foundation$app$query$TupleSource$ = true;
cljs.core.PersistentHashSet.prototype.foundation$app$query$TupleSource$tuple_seq$arity$1 = (function (s){var s__$1 = this;if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,s__$1))
{return cljs.core.vec.call(null,cljs.core.mapcat.call(null,foundation.app.query.tuplify,s__$1));
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.foundation$app$query$TupleSource$ = true;
cljs.core.PersistentHashMap.prototype.foundation$app$query$TupleSource$tuple_seq$arity$1 = (function (m){var m__$1 = this;return foundation.app.query.tuplify.call(null,m__$1);
});
foundation.app.query.logic_variable_QMARK_ = (function logic_variable_QMARK_(x){return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"?"));
});
foundation.app.query.datasource_QMARK_ = (function datasource_QMARK_(x){return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"$"));
});
foundation.app.query.unifier = (function unifier(bindings,clause,fact){return cljs.core.reduce.call(null,(function (a,p__32218){var vec__32219 = p__32218;var c = cljs.core.nth.call(null,vec__32219,0,null);var t = cljs.core.nth.call(null,vec__32219,1,null);var c__$1 = (((foundation.app.query.logic_variable_QMARK_.call(null,c)) && (cljs.core.contains_QMARK_.call(null,bindings,c)))?cljs.core.get.call(null,bindings,c):c);if(cljs.core.truth_(a))
{if(foundation.app.query.logic_variable_QMARK_.call(null,c__$1))
{return cljs.core.assoc.call(null,a,c__$1,t);
} else
{if(cljs.core._EQ_.call(null,c__$1,t))
{return a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,clause,fact)));
});
foundation.app.query.unifiers_for_clause = (function unifiers_for_clause(bindings,clause,facts){return cljs.core.keep.call(null,cljs.core.partial.call(null,foundation.app.query.unifier,bindings,clause),facts);
});
foundation.app.query.unifiers = (function unifiers(bindings,clauses,facts){return cljs.core.reduce.call(null,(function (a,x){return cljs.core.conj.call(null,a,foundation.app.query.unifiers_for_clause.call(null,bindings,x,facts));
}),cljs.core.PersistentVector.EMPTY,clauses);
});
foundation.app.query.combine_unifiers = (function combine_unifiers(head,tail){var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,head))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,tail))));if(cljs.core.empty_QMARK_.call(null,ks))
{return tail;
} else
{var iter__6997__auto__ = (function iter__32232(s__32233){return (new cljs.core.LazySeq(null,(function (){var s__32233__$1 = s__32233;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__32233__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var x = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__32233__$1,x,xs__4588__auto__,temp__4098__auto__){
return (function iter__32234(s__32235){return (new cljs.core.LazySeq(null,((function (s__32233__$1,x,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__32235__$1 = s__32235;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__32235__$1);if(temp__4098__auto____$1)
{var s__32235__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32235__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__32235__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__32237 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__32236 = 0;while(true){
if((i__32236 < size__6996__auto__))
{var y = cljs.core._nth.call(null,c__6995__auto__,i__32236);if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x,ks),cljs.core.select_keys.call(null,y,ks)))
{cljs.core.chunk_append.call(null,b__32237,cljs.core.merge.call(null,x,y));
{
var G__32238 = (i__32236 + 1);
i__32236 = G__32238;
continue;
}
} else
{{
var G__32239 = (i__32236 + 1);
i__32236 = G__32239;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32237),iter__32234.call(null,cljs.core.chunk_rest.call(null,s__32235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32237),null);
}
} else
{var y = cljs.core.first.call(null,s__32235__$2);if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x,ks),cljs.core.select_keys.call(null,y,ks)))
{return cljs.core.cons.call(null,cljs.core.merge.call(null,x,y),iter__32234.call(null,cljs.core.rest.call(null,s__32235__$2)));
} else
{{
var G__32242 = cljs.core.rest.call(null,s__32235__$2);
s__32235__$1 = G__32242;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__32233__$1,x,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__32233__$1,x,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,tail));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__32232.call(null,cljs.core.rest.call(null,s__32233__$1)));
} else
{{
var G__32245 = cljs.core.rest.call(null,s__32233__$1);
s__32233__$1 = G__32245;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6997__auto__.call(null,head);
}
});
foundation.app.query.fold = (function fold(unifiers){while(true){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.empty_QMARK_,unifiers)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else
{if((cljs.core.count.call(null,unifiers) < 1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,unifiers),1))
{return unifiers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var head = cljs.core.first.call(null,unifiers);var tail = cljs.core.rest.call(null,unifiers);{
var G__32248 = cljs.core.reduce.call(null,((function (unifiers){
return (function (a,b){return cljs.core.conj.call(null,a,foundation.app.query.combine_unifiers.call(null,head,b));
});})(unifiers))
,cljs.core.PersistentVector.EMPTY,tail);
unifiers = G__32248;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
foundation.app.query.__GT_tuples = (function __GT_tuples(data){if(cljs.core.vector_QMARK_.call(null,data))
{return data;
} else
{if((function (){var G__32250 = data;if(G__32250)
{var bit__6930__auto__ = null;if(cljs.core.truth_((function (){var or__6304__auto__ = bit__6930__auto__;if(cljs.core.truth_(or__6304__auto__))
{return or__6304__auto__;
} else
{return G__32250.foundation$app$query$TupleSource$;
}
})()))
{return true;
} else
{if((!G__32250.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.query.TupleSource,G__32250);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,foundation.app.query.TupleSource,G__32250);
}
})())
{return foundation.app.query.tuple_seq.call(null,data);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
});
foundation.app.query.produce = (function produce(bindings,clauses,facts){var unifiers = cljs.core.reduce.call(null,(function (a,k){return cljs.core.concat.call(null,a,foundation.app.query.unifiers.call(null,bindings,cljs.core.get.call(null,clauses,k),foundation.app.query.__GT_tuples.call(null,cljs.core.get.call(null,facts,k))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,clauses));return cljs.core.first.call(null,foundation.app.query.fold.call(null,unifiers));
});
foundation.app.query.parse_query = (function parse_query(query){return cljs.core.reduce.call(null,(function (a,x){if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",1013907607),null,new cljs.core.Keyword(null,"where","where",1127002201),null,new cljs.core.Keyword(null,"find","find",1017047339),null], null), null),x))
{return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"on","on",1013907793),x);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",1013907793).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"find","find",1017047339)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",1017047339)], null),cljs.core.conj,x);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",1013907793).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"in","in",1013907607)))
{if(cljs.core._EQ_.call(null,x,new cljs.core.Symbol(null,"$","$",-1640531491,null)))
{return a;
} else
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",1013907607)], null),cljs.core.conj,x);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on","on",1013907793).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"where","where",1127002201)))
{if(foundation.app.query.datasource_QMARK_.call(null,cljs.core.first.call(null,x)))
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1867584598),cljs.core.first.call(null,x)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,cljs.core.rest.call(null,x)));
} else
{return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1867584598),new cljs.core.Symbol(null,"$","$",-1640531491,null)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
}
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null)], null),new cljs.core.Keyword(null,"clauses","clauses",1867584598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1640531491,null),cljs.core.PersistentVector.EMPTY], null)], null),query);
});
/**
* @param {...*} var_args
*/
foundation.app.query.q = (function() { 
var q__delegate = function (query,sources){var map__32259 = foundation.app.query.parse_query.call(null,query);var map__32259__$1 = ((cljs.core.seq_QMARK_.call(null,map__32259))?cljs.core.apply.call(null,cljs.core.hash_map,map__32259):map__32259);var in$ = cljs.core.get.call(null,map__32259__$1,new cljs.core.Keyword(null,"in","in",1013907607));var find = cljs.core.get.call(null,map__32259__$1,new cljs.core.Keyword(null,"find","find",1017047339));var clauses = cljs.core.get.call(null,map__32259__$1,new cljs.core.Keyword(null,"clauses","clauses",1867584598));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sources),cljs.core.count.call(null,in$)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Datasource count does not match named input count."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"sources","sources",632558961,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"in","in",-1640528162,null)))))].join('')));
}
var source_map = cljs.core.zipmap.call(null,in$,sources);var parameters = cljs.core.remove.call(null,foundation.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map));var data_sources = cljs.core.filter.call(null,foundation.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map));var results = foundation.app.query.produce.call(null,cljs.core.select_keys.call(null,source_map,parameters),clauses,source_map);return cljs.core.reduce.call(null,(function (a,b){return cljs.core.conj.call(null,a,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__32257_SHARP_){return cljs.core.get.call(null,b,p1__32257_SHARP_);
}),find)));
}),cljs.core.PersistentVector.EMPTY,results);
};
var q = function (query,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,query,sources);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__32260){
var query = cljs.core.first(arglist__32260);
var sources = cljs.core.rest(arglist__32260);
return q__delegate(query,sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
