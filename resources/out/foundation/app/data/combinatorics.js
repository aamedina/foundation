// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.combinatorics');
goog.require('cljs.core');
foundation.app.data.combinatorics.index_combinations = (function index_combinations(n,cnt){var iter_comb = (function iter_comb(c,j){if((j > n))
{return null;
} else
{var c__$1 = cljs.core.assoc.call(null,c,j,(c.call(null,j) - 1));if((c__$1.call(null,j) < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,(j + 1)], null);
} else
{var c__$2 = c__$1;var j__$1 = j;while(true){
if(cljs.core._EQ_.call(null,j__$1,1))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,j__$1], null);
} else
{{
var G__293849 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__293850 = (j__$1 - 1);
c__$2 = G__293849;
j__$1 = G__293850;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14518__auto__ = (function iter__293845(s__293846){return (new cljs.core.LazySeq(null,(function (){var s__293846__$1 = s__293846;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293846__$1);if(temp__4092__auto__)
{var s__293846__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293846__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293846__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293848 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293847 = 0;while(true){
if((i__293847 < size__14517__auto__))
{var j = cljs.core._nth.call(null,c__14516__auto__,i__293847);cljs.core.chunk_append.call(null,b__293848,((j + cnt) + (- (n + 1))));
{
var G__293851 = (i__293847 + 1);
i__293847 = G__293851;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293848),iter__293845.call(null,cljs.core.chunk_rest.call(null,s__293846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293848),null);
}
} else
{var j = cljs.core.first.call(null,s__293846__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__293845.call(null,cljs.core.rest.call(null,s__293846__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})()));var step = ((function (c){
return (function step(c__$1,j){return cljs.core.cons.call(null,cljs.core.reverse.call(null,cljs.core.subvec.call(null,c__$1,1,(n + 1))),(new cljs.core.LazySeq(null,((function (c){
return (function (){var next_step = iter_comb.call(null,c__$1,j);if(cljs.core.truth_(next_step))
{return step.call(null,next_step.call(null,0),next_step.call(null,1));
} else
{return null;
}
});})(c))
,null,null)));
});})(c))
;return step.call(null,c,1);
}),null,null));
});
/**
* All the unique ways of taking n different elements from items
*/
foundation.app.data.combinatorics.combinations = (function combinations(items,n){var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));if((n === 0))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY);
} else
{var cnt = cljs.core.count.call(null,items);if((n > cnt))
{return null;
} else
{if(cljs.core._EQ_.call(null,n,cnt))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.seq.call(null,items));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map.call(null,(function (p1__293852_SHARP_){return cljs.core.map.call(null,v_items,p1__293852_SHARP_);
}),foundation.app.data.combinatorics.index_combinations.call(null,n,cnt));
} else
{return null;
}
}
}
}
});
/**
* All the subsets of items
*/
foundation.app.data.combinatorics.subsets = (function subsets(items){return cljs.core.mapcat.call(null,(function (n){return foundation.app.data.combinatorics.combinations.call(null,items,n);
}),cljs.core.range.call(null,(cljs.core.count.call(null,items) + 1)));
});
/**
* All the ways to take one item from each sequence
* @param {...*} var_args
*/
foundation.app.data.combinatorics.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec.call(null,seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count.call(null,v_seqs__$1) - 1);var v_seqs__$2 = v_seqs__$1;while(true){
if(cljs.core._EQ_.call(null,i,-1))
{return null;
} else
{var temp__4090__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4090__auto__)
{var rst = temp__4090__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__293853 = (i - 1);
var G__293854 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__293853;
v_seqs__$2 = G__293854;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs))
{return (new cljs.core.LazySeq(null,(function (){return step.call(null,v_original_seqs);
}),null,null));
} else
{return null;
}
};
var cartesian_product = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cartesian_product__delegate.call(this,seqs);};
cartesian_product.cljs$lang$maxFixedArity = 0;
cartesian_product.cljs$lang$applyTo = (function (arglist__293855){
var seqs = cljs.core.seq(arglist__293855);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
/**
* All the ways of taking n (possibly the same) elements from the sequence of items
*/
foundation.app.data.combinatorics.selections = (function selections(items,n){return cljs.core.apply.call(null,foundation.app.data.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
foundation.app.data.combinatorics.iter_perm = (function iter_perm(v){var len = cljs.core.count.call(null,v);var j = (function (){var i = (len - 2);while(true){
if(cljs.core._EQ_.call(null,i,-1))
{return null;
} else
{if((v.call(null,i) < v.call(null,(i + 1))))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__293856 = (i - 1);
i = G__293856;
continue;
}
} else
{return null;
}
}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = v.call(null,j);var l = (function (){var i = (len - 1);while(true){
if((vj < v.call(null,i)))
{return i;
} else
{{
var G__293857 = (i - 1);
i = G__293857;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__293858 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__293859 = (k + 1);
var G__293860 = (l__$1 - 1);
v__$1 = G__293858;
k = G__293859;
l__$1 = G__293860;
continue;
}
} else
{return v__$1;
}
break;
}
} else
{return null;
}
});
foundation.app.data.combinatorics.vec_lex_permutations = (function vec_lex_permutations(v){if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){return vec_lex_permutations.call(null,foundation.app.data.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else
{return null;
}
});
/**
* DEPRECATED as a public function.
* 
* In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
*/
foundation.app.data.combinatorics.lex_permutations = (function lex_permutations(c){return (new cljs.core.LazySeq(null,(function (){var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));if((cljs.core.count.call(null,vec_sorted) === 0))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY);
} else
{return foundation.app.data.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
* Returns true iff s is a sequence of numbers in non-decreasing order
*/
foundation.app.data.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){return (cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s)) && (cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core._LT__EQ_),cljs.core.partition.call(null,2,1,s)));
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14518__auto__ = ((function (f,v){
return (function iter__293865(s__293866){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__293866__$1 = s__293866;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293866__$1);if(temp__4092__auto__)
{var s__293866__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293866__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293866__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293868 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293867 = 0;while(true){
if((i__293867 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__293867);cljs.core.chunk_append.call(null,b__293868,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__293869 = (i__293867 + 1);
i__293867 = G__293869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293868),iter__293865.call(null,cljs.core.chunk_rest.call(null,s__293866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293868),null);
}
} else
{var i = cljs.core.first.call(null,s__293866__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__293865.call(null,cljs.core.rest.call(null,s__293866__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__293870_SHARP_){return cljs.core.map.call(null,v,p1__293870_SHARP_);
}),foundation.app.data.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.data.combinatorics.multi_perm.call(null,items);
} else
{return null;
}
}
}
});
foundation.app.data.combinatorics.update = (function update(vec,index,f){var item = vec.call(null,index);return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
foundation.app.data.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec.call(null,(function (){var iter__14518__auto__ = (function iter__293875(s__293876){return (new cljs.core.LazySeq(null,(function (){var s__293876__$1 = s__293876;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293876__$1);if(temp__4092__auto__)
{var s__293876__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293876__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293876__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293878 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293877 = 0;while(true){
if((i__293877 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__293877);cljs.core.chunk_append.call(null,b__293878,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})());
{
var G__293879 = (i__293877 + 1);
i__293877 = G__293879;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293878),iter__293875.call(null,cljs.core.chunk_rest.call(null,s__293876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293878),null);
}
} else
{var i = cljs.core.first.call(null,s__293876__$2);return cljs.core.cons.call(null,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})(),iter__293875.call(null,cljs.core.rest.call(null,s__293876__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13813__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13813__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13813__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13813__auto__ = (a.call(null,j) < b.call(null,j));if(and__13813__auto__)
{var and__13813__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13813__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
}
})())
{return j;
} else
{{
var G__293882 = (j - 1);
j = G__293882;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__293881 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13813__auto__ = s;if(cljs.core.truth_(and__13813__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13813__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__293883 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__293884 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__293885 = (i + 1);
var G__293886 = (function (){var x__14132__auto__ = current_max;var y__14133__auto__ = (new_a_i + 1);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})();
a__$2 = G__293883;
b__$1 = G__293884;
i = G__293885;
current_max = G__293886;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__293887 = cljs.core.assoc.call(null,a__$2,i,0);
var G__293888 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__293889 = (i + 1);
var G__293890 = current_max;
a__$2 = G__293887;
b__$1 = G__293888;
i = G__293889;
current_max = G__293890;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__293881,0,null);var b__$1 = cljs.core.nth.call(null,vec__293881,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});
growth_strings_H = function(n,a,b,r,s){
switch(arguments.length){
case 3:
return growth_strings_H__3.call(this,n,a,b);
case 5:
return growth_strings_H__5.call(this,n,a,b,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
growth_strings_H.cljs$core$IFn$_invoke$arity$3 = growth_strings_H__3;
growth_strings_H.cljs$core$IFn$_invoke$arity$5 = growth_strings_H__5;
return growth_strings_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.lex_partitions_H = (function() { 
var lex_partitions_H__delegate = function (N,p__293891){var map__293897 = p__293891;var map__293897__$1 = ((cljs.core.seq_QMARK_.call(null,map__293897))?cljs.core.apply.call(null,cljs.core.hash_map,map__293897):map__293897);var from = cljs.core.get.call(null,map__293897__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__293897__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13825__auto__ = from;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13825__auto__ = to;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = from;if(cljs.core.truth_(and__13813__auto__))
{return (from <= 1);
} else
{return and__13813__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = to;if(cljs.core.truth_(and__13813__auto__))
{return (to >= N);
} else
{return and__13813__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})() <= (function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})())) && (((function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,0))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null)));
} else
{if(cljs.core._EQ_.call(null,to__$1,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,31)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,32)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14518__auto__ = (function iter__293898(s__293899){return (new cljs.core.LazySeq(null,(function (){var s__293899__$1 = s__293899;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293899__$1);if(temp__4092__auto__)
{var s__293899__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293899__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293899__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293901 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293900 = 0;while(true){
if((i__293900 < size__14517__auto__))
{var growth_string = cljs.core._nth.call(null,c__14516__auto__,i__293900);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__293901,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__293902 = (i__293900 + 1);
i__293900 = G__293902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293901),iter__293898.call(null,cljs.core.chunk_rest.call(null,s__293899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293901),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__293899__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__293898.call(null,cljs.core.rest.call(null,s__293899__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,growth_strings);
} else
{return null;
}
}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__293891 = null;if (arguments.length > 1) {
  p__293891 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__293891);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__293903){
var N = cljs.core.first(arglist__293903);
var p__293891 = cljs.core.rest(arglist__293903);
return lex_partitions_H__delegate(N,p__293891);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14518__auto__ = (function iter__293924(s__293925){return (new cljs.core.LazySeq(null,(function (){var s__293925__$1 = s__293925;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293925__$1);if(temp__4092__auto__)
{var s__293925__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293925__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293925__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293927 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293926 = 0;while(true){
if((i__293926 < size__14517__auto__))
{var parts = cljs.core._nth.call(null,c__14516__auto__,i__293926);cljs.core.chunk_append.call(null,b__293927,(function (){var iter__14518__auto__ = ((function (i__293926,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__){
return (function iter__293936(s__293937){return (new cljs.core.LazySeq(null,((function (i__293926,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__){
return (function (){var s__293937__$1 = s__293937;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__293937__$1);if(temp__4092__auto____$1)
{var s__293937__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__293937__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__293937__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__293939 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__293938 = 0;while(true){
if((i__293938 < size__14517__auto____$1))
{var part = cljs.core._nth.call(null,c__14516__auto____$1,i__293938);cljs.core.chunk_append.call(null,b__293939,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__293938,i__293926,part,c__14516__auto____$1,size__14517__auto____$1,b__293939,s__293937__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__293938,i__293926,part,c__14516__auto____$1,size__14517__auto____$1,b__293939,s__293937__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__293944 = (i__293938 + 1);
i__293938 = G__293944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293939),iter__293936.call(null,cljs.core.chunk_rest.call(null,s__293937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293939),null);
}
} else
{var part = cljs.core.first.call(null,s__293937__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__293926,part,s__293937__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__293926,part,s__293937__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__293936.call(null,cljs.core.rest.call(null,s__293937__$2)));
}
} else
{return null;
}
break;
}
});})(i__293926,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__))
,null,null));
});})(i__293926,parts,c__14516__auto__,size__14517__auto__,b__293927,s__293925__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})());
{
var G__293945 = (i__293926 + 1);
i__293926 = G__293945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293927),iter__293924.call(null,cljs.core.chunk_rest.call(null,s__293925__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293927),null);
}
} else
{var parts = cljs.core.first.call(null,s__293925__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (parts,s__293925__$2,temp__4092__auto__){
return (function iter__293940(s__293941){return (new cljs.core.LazySeq(null,((function (parts,s__293925__$2,temp__4092__auto__){
return (function (){var s__293941__$1 = s__293941;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__293941__$1);if(temp__4092__auto____$1)
{var s__293941__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__293941__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293941__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293943 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293942 = 0;while(true){
if((i__293942 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__293942);cljs.core.chunk_append.call(null,b__293943,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__293942,part,c__14516__auto__,size__14517__auto__,b__293943,s__293941__$2,temp__4092__auto____$1,parts,s__293925__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__293942,part,c__14516__auto__,size__14517__auto__,b__293943,s__293941__$2,temp__4092__auto____$1,parts,s__293925__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__293946 = (i__293942 + 1);
i__293942 = G__293946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293943),iter__293940.call(null,cljs.core.chunk_rest.call(null,s__293941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293943),null);
}
} else
{var part = cljs.core.first.call(null,s__293941__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__293941__$2,temp__4092__auto____$1,parts,s__293925__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__293941__$2,temp__4092__auto____$1,parts,s__293925__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__293940.call(null,cljs.core.rest.call(null,s__293941__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__293925__$2,temp__4092__auto__))
,null,null));
});})(parts,s__293925__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})(),iter__293924.call(null,cljs.core.rest.call(null,s__293925__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__293947){
var items = cljs.core.first(arglist__293947);
var args = cljs.core.rest(arglist__293947);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__293970 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__293992 = (j + 1);
var G__293993 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__293994 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__293995 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__293992;
c__$1 = G__293993;
u__$1 = G__293994;
v__$1 = G__293995;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__293970,0,null);var u__$1 = cljs.core.nth.call(null,vec__293970,1,null);var v__$1 = cljs.core.nth.call(null,vec__293970,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__293971 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__293996 = (j + 1);
var G__293997 = k;
var G__293998 = true;
var G__293999 = u__$2;
var G__294000 = v__$1;
var G__294001 = c__$1;
j = G__293996;
k = G__293997;
x = G__293998;
u__$1 = G__293999;
v__$1 = G__294000;
c__$1 = G__294001;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14139__auto__ = v__$1.call(null,j);var y__14140__auto__ = u__$2.call(null,k);return ((x__14139__auto__ < y__14140__auto__) ? x__14139__auto__ : y__14140__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__294002 = j__$1;
var G__294003 = k__$1;
var G__294004 = x__$1;
var G__294005 = u__$2;
var G__294006 = v__$2;
var G__294007 = c__$2;
j = G__294002;
k = G__294003;
x = G__294004;
u__$1 = G__294005;
v__$1 = G__294006;
c__$1 = G__294007;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__294008 = j__$1;
var G__294009 = k__$1;
var G__294010 = x;
var G__294011 = u__$2;
var G__294012 = v__$2;
var G__294013 = c__$2;
j = G__294008;
k = G__294009;
x = G__294010;
u__$1 = G__294011;
v__$1 = G__294012;
c__$1 = G__294013;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__293971,0,null);var v__$1 = cljs.core.nth.call(null,vec__293971,1,null);var c__$1 = cljs.core.nth.call(null,vec__293971,2,null);var j = cljs.core.nth.call(null,vec__293971,3,null);var k = cljs.core.nth.call(null,vec__293971,4,null);if(cljs.core.truth_((function (){var and__13813__auto__ = r;if(cljs.core.truth_(and__13813__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13813__auto__ = s;if(cljs.core.truth_(and__13813__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__294014 = n;
var G__294015 = m;
var G__294016 = f__$1;
var G__294017 = c__$1;
var G__294018 = u__$1;
var G__294019 = v__$1;
var G__294020 = a__$1;
var G__294021 = b__$1;
var G__294022 = l__$1;
var G__294023 = r;
var G__294024 = s;
n = G__294014;
m = G__294015;
f = G__294016;
c = G__294017;
u = G__294018;
v = G__294019;
a = G__294020;
b = G__294021;
l = G__294022;
r = G__294023;
s = G__294024;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__293972(s__293973){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__293973__$1 = s__293973;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__293973__$1);if(temp__4092__auto__)
{var s__293973__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__293973__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293973__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293975 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293974 = 0;while(true){
if((i__293974 < size__14517__auto__))
{var y = cljs.core._nth.call(null,c__14516__auto__,i__293974);cljs.core.chunk_append.call(null,b__293975,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (i__293974,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__293975,s__293973__$2,temp__4092__auto__){
return (function iter__293984(s__293985){return (new cljs.core.LazySeq(null,((function (i__293974,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__293975,s__293973__$2,temp__4092__auto__){
return (function (){var s__293985__$1 = s__293985;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__293985__$1);if(temp__4092__auto____$1)
{var s__293985__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__293985__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__293985__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__293987 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__293986 = 0;while(true){
if((i__293986 < size__14517__auto____$1))
{var z = cljs.core._nth.call(null,c__14516__auto____$1,i__293986);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__293987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__294025 = (i__293986 + 1);
i__293986 = G__294025;
continue;
}
} else
{{
var G__294026 = (i__293986 + 1);
i__293986 = G__294026;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293987),iter__293984.call(null,cljs.core.chunk_rest.call(null,s__293985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293987),null);
}
} else
{var z = cljs.core.first.call(null,s__293985__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__293984.call(null,cljs.core.rest.call(null,s__293985__$2)));
} else
{{
var G__294027 = cljs.core.rest.call(null,s__293985__$2);
s__293985__$1 = G__294027;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__293974,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__293975,s__293973__$2,temp__4092__auto__))
,null,null));
});})(i__293974,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__293975,s__293973__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__294028 = (i__293974 + 1);
i__293974 = G__294028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293975),iter__293972.call(null,cljs.core.chunk_rest.call(null,s__293973__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293975),null);
}
} else
{var y = cljs.core.first.call(null,s__293973__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__293973__$2,temp__4092__auto__){
return (function iter__293988(s__293989){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__293973__$2,temp__4092__auto__){
return (function (){var s__293989__$1 = s__293989;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__293989__$1);if(temp__4092__auto____$1)
{var s__293989__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__293989__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__293989__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__293991 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__293990 = 0;while(true){
if((i__293990 < size__14517__auto__))
{var z = cljs.core._nth.call(null,c__14516__auto__,i__293990);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__293991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__294029 = (i__293990 + 1);
i__293990 = G__294029;
continue;
}
} else
{{
var G__294030 = (i__293990 + 1);
i__293990 = G__294030;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293991),iter__293988.call(null,cljs.core.chunk_rest.call(null,s__293989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293991),null);
}
} else
{var z = cljs.core.first.call(null,s__293989__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__293988.call(null,cljs.core.rest.call(null,s__293989__$2)));
} else
{{
var G__294031 = cljs.core.rest.call(null,s__293989__$2);
s__293989__$1 = G__294031;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__293973__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__293973__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__293972.call(null,cljs.core.rest.call(null,s__293973__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,(l + 1)));
})();return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null)));
} else
{return null;
}
}
}
}
break;
}
});
multiset_partitions_M = function(n,m,f,c,u,v,a,b,l,r,s){
switch(arguments.length){
case 3:
return multiset_partitions_M__3.call(this,n,m,f);
case 11:
return multiset_partitions_M__11.call(this,n,m,f,c,u,v,a,b,l,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = multiset_partitions_M__3;
multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = multiset_partitions_M__11;
return multiset_partitions_M;
})()
;
foundation.app.data.combinatorics.m5 = (function m5(n,m,f,c,u,v,a,b,l,r,s){var j = (function (){var j = (b - 1);while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),0))
{return j;
} else
{{
var G__294040 = (j - 1);
j = G__294040;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13813__auto__ = r;if(cljs.core.truth_(and__13813__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14518__auto__ = ((function (v__$1){
return (function iter__294036(s__294037){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__294037__$1 = s__294037;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__294037__$1);if(temp__4092__auto__)
{var s__294037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__294037__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__294037__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__294039 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__294038 = 0;while(true){
if((i__294038 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__294038);cljs.core.chunk_append.call(null,b__294039,(u.call(null,i) - v__$1.call(null,i)));
{
var G__294041 = (i__294038 + 1);
i__294038 = G__294041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294039),iter__294036.call(null,cljs.core.chunk_rest.call(null,s__294037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294039),null);
}
} else
{var i = cljs.core.first.call(null,s__294037__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__294036.call(null,cljs.core.rest.call(null,s__294037__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__294042 = cljs.core.rest.call(null,ks);
var G__294043 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__294042;
v__$2 = G__294043;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (min_partitions_after_this - diff_uv);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__294044 = (k_1 - 1);
var G__294045 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__294046 = (amount - vk);
k_1 = G__294044;
v__$3 = G__294045;
amount = G__294046;
continue;
}
} else
{return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());return foundation.app.data.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);
} else
{return null;
}
}
}
});
foundation.app.data.combinatorics.m6 = (function m6(n,m,f,c,u,v,a,b,l,r,s){if(cljs.core._EQ_.call(null,l,0))
{return cljs.core.List.EMPTY;
} else
{var l__$1 = (l - 1);var b__$1 = a;var a__$1 = f.call(null,l__$1);return foundation.app.data.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__294047){var map__294105 = p__294047;var map__294105__$1 = ((cljs.core.seq_QMARK_.call(null,map__294105))?cljs.core.apply.call(null,cljs.core.hash_map,map__294105):map__294105);var from = cljs.core.get.call(null,map__294105__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__294105__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13825__auto__ = from;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13825__auto__ = to;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = from;if(cljs.core.truth_(and__13813__auto__))
{return (from <= 1);
} else
{return and__13813__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = to;if(cljs.core.truth_(and__13813__auto__))
{return (to >= N);
} else
{return and__13813__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})() <= (function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})())) && (((function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,35)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = (function iter__294106(s__294107){return (new cljs.core.LazySeq(null,(function (){var s__294107__$1 = s__294107;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__294107__$1);if(temp__4092__auto__)
{var s__294107__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__294107__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__294107__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__294109 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__294108 = 0;while(true){
if((i__294108 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__294108);var j = (i + 1);cljs.core.chunk_append.call(null,b__294109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__294162 = (i__294108 + 1);
i__294108 = G__294162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294109),iter__294106.call(null,cljs.core.chunk_rest.call(null,s__294107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294109),null);
}
} else
{var i = cljs.core.first.call(null,s__294107__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__294106.call(null,cljs.core.rest.call(null,s__294107__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14518__auto__ = (function iter__294110(s__294111){return (new cljs.core.LazySeq(null,(function (){var s__294111__$1 = s__294111;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__294111__$1);if(temp__4092__auto__)
{var s__294111__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__294111__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__294111__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__294113 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__294112 = 0;while(true){
if((i__294112 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__294112);cljs.core.chunk_append.call(null,b__294113,(function (){var iter__14518__auto__ = ((function (i__294112,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__){
return (function iter__294138(s__294139){return (new cljs.core.LazySeq(null,((function (i__294112,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__){
return (function (){var s__294139__$1 = s__294139;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__294139__$1);if(temp__4092__auto____$1)
{var s__294139__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__294139__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__294139__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__294141 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__294140 = 0;while(true){
if((i__294140 < size__14517__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14516__auto____$1,i__294140);cljs.core.chunk_append.call(null,b__294141,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__294140,i__294112,multiset,c__14516__auto____$1,size__14517__auto____$1,b__294141,s__294139__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__){
return (function (p__294146){var vec__294147 = p__294146;var index = cljs.core.nth.call(null,vec__294147,0,null);var numtimes = cljs.core.nth.call(null,vec__294147,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__294140,i__294112,multiset,c__14516__auto____$1,size__14517__auto____$1,b__294141,s__294139__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__))
,multiset)));
{
var G__294163 = (i__294140 + 1);
i__294140 = G__294163;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294141),iter__294138.call(null,cljs.core.chunk_rest.call(null,s__294139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294141),null);
}
} else
{var multiset = cljs.core.first.call(null,s__294139__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__294112,multiset,s__294139__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__){
return (function (p__294148){var vec__294149 = p__294148;var index = cljs.core.nth.call(null,vec__294149,0,null);var numtimes = cljs.core.nth.call(null,vec__294149,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__294112,multiset,s__294139__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__))
,multiset)),iter__294138.call(null,cljs.core.rest.call(null,s__294139__$2)));
}
} else
{return null;
}
break;
}
});})(i__294112,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__))
,null,null));
});})(i__294112,part,c__14516__auto__,size__14517__auto__,b__294113,s__294111__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})());
{
var G__294164 = (i__294112 + 1);
i__294112 = G__294164;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294113),iter__294110.call(null,cljs.core.chunk_rest.call(null,s__294111__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294113),null);
}
} else
{var part = cljs.core.first.call(null,s__294111__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (part,s__294111__$2,temp__4092__auto__){
return (function iter__294150(s__294151){return (new cljs.core.LazySeq(null,((function (part,s__294111__$2,temp__4092__auto__){
return (function (){var s__294151__$1 = s__294151;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__294151__$1);if(temp__4092__auto____$1)
{var s__294151__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__294151__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__294151__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__294153 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__294152 = 0;while(true){
if((i__294152 < size__14517__auto__))
{var multiset = cljs.core._nth.call(null,c__14516__auto__,i__294152);cljs.core.chunk_append.call(null,b__294153,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__294152,multiset,c__14516__auto__,size__14517__auto__,b__294153,s__294151__$2,temp__4092__auto____$1,part,s__294111__$2,temp__4092__auto__){
return (function (p__294158){var vec__294159 = p__294158;var index = cljs.core.nth.call(null,vec__294159,0,null);var numtimes = cljs.core.nth.call(null,vec__294159,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__294152,multiset,c__14516__auto__,size__14517__auto__,b__294153,s__294151__$2,temp__4092__auto____$1,part,s__294111__$2,temp__4092__auto__))
,multiset)));
{
var G__294165 = (i__294152 + 1);
i__294152 = G__294165;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294153),iter__294150.call(null,cljs.core.chunk_rest.call(null,s__294151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__294153),null);
}
} else
{var multiset = cljs.core.first.call(null,s__294151__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__294151__$2,temp__4092__auto____$1,part,s__294111__$2,temp__4092__auto__){
return (function (p__294160){var vec__294161 = p__294160;var index = cljs.core.nth.call(null,vec__294161,0,null);var numtimes = cljs.core.nth.call(null,vec__294161,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__294151__$2,temp__4092__auto____$1,part,s__294111__$2,temp__4092__auto__))
,multiset)),iter__294150.call(null,cljs.core.rest.call(null,s__294151__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__294111__$2,temp__4092__auto__))
,null,null));
});})(part,s__294111__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})(),iter__294110.call(null,cljs.core.rest.call(null,s__294111__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__294047 = null;if (arguments.length > 1) {
  p__294047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__294047);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__294166){
var items = cljs.core.first(arglist__294166);
var p__294047 = cljs.core.rest(arglist__294166);
return partitions_M__delegate(items,p__294047);
});
partitions_M.cljs$core$IFn$_invoke$arity$variadic = partitions_M__delegate;
return partitions_M;
})()
;
/**
* All the lexicographic distinct partitions of items.
* Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions = (function() { 
var partitions__delegate = function (items,args){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_H,items,args);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_H,items,args);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_M,items,args);
} else
{return null;
}
}
}
};
var partitions = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions__delegate.call(this,items,args);};
partitions.cljs$lang$maxFixedArity = 1;
partitions.cljs$lang$applyTo = (function (arglist__294167){
var items = cljs.core.first(arglist__294167);
var args = cljs.core.rest(arglist__294167);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map