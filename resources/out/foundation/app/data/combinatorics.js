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
var G__84672 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__84673 = (j__$1 - 1);
c__$2 = G__84672;
j__$1 = G__84673;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14518__auto__ = (function iter__84668(s__84669){return (new cljs.core.LazySeq(null,(function (){var s__84669__$1 = s__84669;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84669__$1);if(temp__4092__auto__)
{var s__84669__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84669__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84669__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84671 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84670 = 0;while(true){
if((i__84670 < size__14517__auto__))
{var j = cljs.core._nth.call(null,c__14516__auto__,i__84670);cljs.core.chunk_append.call(null,b__84671,((j + cnt) + (- (n + 1))));
{
var G__84674 = (i__84670 + 1);
i__84670 = G__84674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84671),iter__84668.call(null,cljs.core.chunk_rest.call(null,s__84669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84671),null);
}
} else
{var j = cljs.core.first.call(null,s__84669__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__84668.call(null,cljs.core.rest.call(null,s__84669__$2)));
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
{return cljs.core.map.call(null,(function (p1__84675_SHARP_){return cljs.core.map.call(null,v_items,p1__84675_SHARP_);
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
var G__84676 = (i - 1);
var G__84677 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__84676;
v_seqs__$2 = G__84677;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__84678){
var seqs = cljs.core.seq(arglist__84678);
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
var G__84679 = (i - 1);
i = G__84679;
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
var G__84680 = (i - 1);
i = G__84680;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__84681 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__84682 = (k + 1);
var G__84683 = (l__$1 - 1);
v__$1 = G__84681;
k = G__84682;
l__$1 = G__84683;
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
return (function iter__84688(s__84689){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__84689__$1 = s__84689;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84689__$1);if(temp__4092__auto__)
{var s__84689__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84689__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84689__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84691 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84690 = 0;while(true){
if((i__84690 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__84690);cljs.core.chunk_append.call(null,b__84691,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__84692 = (i__84690 + 1);
i__84690 = G__84692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84691),iter__84688.call(null,cljs.core.chunk_rest.call(null,s__84689__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84691),null);
}
} else
{var i = cljs.core.first.call(null,s__84689__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__84688.call(null,cljs.core.rest.call(null,s__84689__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__84693_SHARP_){return cljs.core.map.call(null,v,p1__84693_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14518__auto__ = (function iter__84698(s__84699){return (new cljs.core.LazySeq(null,(function (){var s__84699__$1 = s__84699;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84699__$1);if(temp__4092__auto__)
{var s__84699__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84699__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84699__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84701 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84700 = 0;while(true){
if((i__84700 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__84700);cljs.core.chunk_append.call(null,b__84701,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})());
{
var G__84702 = (i__84700 + 1);
i__84700 = G__84702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84701),iter__84698.call(null,cljs.core.chunk_rest.call(null,s__84699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84701),null);
}
} else
{var i = cljs.core.first.call(null,s__84699__$2);return cljs.core.cons.call(null,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})(),iter__84698.call(null,cljs.core.rest.call(null,s__84699__$2)));
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
var G__84705 = (j - 1);
j = G__84705;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__84704 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__84706 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__84707 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__84708 = (i + 1);
var G__84709 = (function (){var x__14132__auto__ = current_max;var y__14133__auto__ = (new_a_i + 1);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})();
a__$2 = G__84706;
b__$1 = G__84707;
i = G__84708;
current_max = G__84709;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__84710 = cljs.core.assoc.call(null,a__$2,i,0);
var G__84711 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__84712 = (i + 1);
var G__84713 = current_max;
a__$2 = G__84710;
b__$1 = G__84711;
i = G__84712;
current_max = G__84713;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__84704,0,null);var b__$1 = cljs.core.nth.call(null,vec__84704,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__84714){var map__84720 = p__84714;var map__84720__$1 = ((cljs.core.seq_QMARK_.call(null,map__84720))?cljs.core.apply.call(null,cljs.core.hash_map,map__84720):map__84720);var from = cljs.core.get.call(null,map__84720__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__84720__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14518__auto__ = (function iter__84721(s__84722){return (new cljs.core.LazySeq(null,(function (){var s__84722__$1 = s__84722;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84722__$1);if(temp__4092__auto__)
{var s__84722__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84722__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84722__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84724 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84723 = 0;while(true){
if((i__84723 < size__14517__auto__))
{var growth_string = cljs.core._nth.call(null,c__14516__auto__,i__84723);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__84724,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__84725 = (i__84723 + 1);
i__84723 = G__84725;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84724),iter__84721.call(null,cljs.core.chunk_rest.call(null,s__84722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84724),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__84722__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__84721.call(null,cljs.core.rest.call(null,s__84722__$2)));
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
var p__84714 = null;if (arguments.length > 1) {
  p__84714 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__84714);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__84726){
var N = cljs.core.first(arglist__84726);
var p__84714 = cljs.core.rest(arglist__84726);
return lex_partitions_H__delegate(N,p__84714);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14518__auto__ = (function iter__84747(s__84748){return (new cljs.core.LazySeq(null,(function (){var s__84748__$1 = s__84748;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84748__$1);if(temp__4092__auto__)
{var s__84748__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84748__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84748__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84750 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84749 = 0;while(true){
if((i__84749 < size__14517__auto__))
{var parts = cljs.core._nth.call(null,c__14516__auto__,i__84749);cljs.core.chunk_append.call(null,b__84750,(function (){var iter__14518__auto__ = ((function (i__84749,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__){
return (function iter__84759(s__84760){return (new cljs.core.LazySeq(null,((function (i__84749,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__){
return (function (){var s__84760__$1 = s__84760;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84760__$1);if(temp__4092__auto____$1)
{var s__84760__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84760__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__84760__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__84762 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__84761 = 0;while(true){
if((i__84761 < size__14517__auto____$1))
{var part = cljs.core._nth.call(null,c__14516__auto____$1,i__84761);cljs.core.chunk_append.call(null,b__84762,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__84761,i__84749,part,c__14516__auto____$1,size__14517__auto____$1,b__84762,s__84760__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__84761,i__84749,part,c__14516__auto____$1,size__14517__auto____$1,b__84762,s__84760__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__84767 = (i__84761 + 1);
i__84761 = G__84767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84762),iter__84759.call(null,cljs.core.chunk_rest.call(null,s__84760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84762),null);
}
} else
{var part = cljs.core.first.call(null,s__84760__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__84749,part,s__84760__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__84749,part,s__84760__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__84759.call(null,cljs.core.rest.call(null,s__84760__$2)));
}
} else
{return null;
}
break;
}
});})(i__84749,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__))
,null,null));
});})(i__84749,parts,c__14516__auto__,size__14517__auto__,b__84750,s__84748__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})());
{
var G__84768 = (i__84749 + 1);
i__84749 = G__84768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84750),iter__84747.call(null,cljs.core.chunk_rest.call(null,s__84748__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84750),null);
}
} else
{var parts = cljs.core.first.call(null,s__84748__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (parts,s__84748__$2,temp__4092__auto__){
return (function iter__84763(s__84764){return (new cljs.core.LazySeq(null,((function (parts,s__84748__$2,temp__4092__auto__){
return (function (){var s__84764__$1 = s__84764;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84764__$1);if(temp__4092__auto____$1)
{var s__84764__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84764__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84764__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84766 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84765 = 0;while(true){
if((i__84765 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__84765);cljs.core.chunk_append.call(null,b__84766,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__84765,part,c__14516__auto__,size__14517__auto__,b__84766,s__84764__$2,temp__4092__auto____$1,parts,s__84748__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__84765,part,c__14516__auto__,size__14517__auto__,b__84766,s__84764__$2,temp__4092__auto____$1,parts,s__84748__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__84769 = (i__84765 + 1);
i__84765 = G__84769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84766),iter__84763.call(null,cljs.core.chunk_rest.call(null,s__84764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84766),null);
}
} else
{var part = cljs.core.first.call(null,s__84764__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__84764__$2,temp__4092__auto____$1,parts,s__84748__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__84764__$2,temp__4092__auto____$1,parts,s__84748__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__84763.call(null,cljs.core.rest.call(null,s__84764__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__84748__$2,temp__4092__auto__))
,null,null));
});})(parts,s__84748__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})(),iter__84747.call(null,cljs.core.rest.call(null,s__84748__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__84770){
var items = cljs.core.first(arglist__84770);
var args = cljs.core.rest(arglist__84770);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__84793 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__84815 = (j + 1);
var G__84816 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__84817 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__84818 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__84815;
c__$1 = G__84816;
u__$1 = G__84817;
v__$1 = G__84818;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__84793,0,null);var u__$1 = cljs.core.nth.call(null,vec__84793,1,null);var v__$1 = cljs.core.nth.call(null,vec__84793,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__84794 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__84819 = (j + 1);
var G__84820 = k;
var G__84821 = true;
var G__84822 = u__$2;
var G__84823 = v__$1;
var G__84824 = c__$1;
j = G__84819;
k = G__84820;
x = G__84821;
u__$1 = G__84822;
v__$1 = G__84823;
c__$1 = G__84824;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14139__auto__ = v__$1.call(null,j);var y__14140__auto__ = u__$2.call(null,k);return ((x__14139__auto__ < y__14140__auto__) ? x__14139__auto__ : y__14140__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__84825 = j__$1;
var G__84826 = k__$1;
var G__84827 = x__$1;
var G__84828 = u__$2;
var G__84829 = v__$2;
var G__84830 = c__$2;
j = G__84825;
k = G__84826;
x = G__84827;
u__$1 = G__84828;
v__$1 = G__84829;
c__$1 = G__84830;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__84831 = j__$1;
var G__84832 = k__$1;
var G__84833 = x;
var G__84834 = u__$2;
var G__84835 = v__$2;
var G__84836 = c__$2;
j = G__84831;
k = G__84832;
x = G__84833;
u__$1 = G__84834;
v__$1 = G__84835;
c__$1 = G__84836;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__84794,0,null);var v__$1 = cljs.core.nth.call(null,vec__84794,1,null);var c__$1 = cljs.core.nth.call(null,vec__84794,2,null);var j = cljs.core.nth.call(null,vec__84794,3,null);var k = cljs.core.nth.call(null,vec__84794,4,null);if(cljs.core.truth_((function (){var and__13813__auto__ = r;if(cljs.core.truth_(and__13813__auto__))
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
var G__84837 = n;
var G__84838 = m;
var G__84839 = f__$1;
var G__84840 = c__$1;
var G__84841 = u__$1;
var G__84842 = v__$1;
var G__84843 = a__$1;
var G__84844 = b__$1;
var G__84845 = l__$1;
var G__84846 = r;
var G__84847 = s;
n = G__84837;
m = G__84838;
f = G__84839;
c = G__84840;
u = G__84841;
v = G__84842;
a = G__84843;
b = G__84844;
l = G__84845;
r = G__84846;
s = G__84847;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__84795(s__84796){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__84796__$1 = s__84796;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84796__$1);if(temp__4092__auto__)
{var s__84796__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84796__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84796__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84798 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84797 = 0;while(true){
if((i__84797 < size__14517__auto__))
{var y = cljs.core._nth.call(null,c__14516__auto__,i__84797);cljs.core.chunk_append.call(null,b__84798,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (i__84797,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__84798,s__84796__$2,temp__4092__auto__){
return (function iter__84807(s__84808){return (new cljs.core.LazySeq(null,((function (i__84797,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__84798,s__84796__$2,temp__4092__auto__){
return (function (){var s__84808__$1 = s__84808;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84808__$1);if(temp__4092__auto____$1)
{var s__84808__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84808__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__84808__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__84810 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__84809 = 0;while(true){
if((i__84809 < size__14517__auto____$1))
{var z = cljs.core._nth.call(null,c__14516__auto____$1,i__84809);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__84810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__84848 = (i__84809 + 1);
i__84809 = G__84848;
continue;
}
} else
{{
var G__84849 = (i__84809 + 1);
i__84809 = G__84849;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84810),iter__84807.call(null,cljs.core.chunk_rest.call(null,s__84808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84810),null);
}
} else
{var z = cljs.core.first.call(null,s__84808__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__84807.call(null,cljs.core.rest.call(null,s__84808__$2)));
} else
{{
var G__84850 = cljs.core.rest.call(null,s__84808__$2);
s__84808__$1 = G__84850;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__84797,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__84798,s__84796__$2,temp__4092__auto__))
,null,null));
});})(i__84797,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__84798,s__84796__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__84851 = (i__84797 + 1);
i__84797 = G__84851;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84798),iter__84795.call(null,cljs.core.chunk_rest.call(null,s__84796__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84798),null);
}
} else
{var y = cljs.core.first.call(null,s__84796__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__84796__$2,temp__4092__auto__){
return (function iter__84811(s__84812){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__84796__$2,temp__4092__auto__){
return (function (){var s__84812__$1 = s__84812;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84812__$1);if(temp__4092__auto____$1)
{var s__84812__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84812__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84812__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84814 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84813 = 0;while(true){
if((i__84813 < size__14517__auto__))
{var z = cljs.core._nth.call(null,c__14516__auto__,i__84813);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__84814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__84852 = (i__84813 + 1);
i__84813 = G__84852;
continue;
}
} else
{{
var G__84853 = (i__84813 + 1);
i__84813 = G__84853;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84814),iter__84811.call(null,cljs.core.chunk_rest.call(null,s__84812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84814),null);
}
} else
{var z = cljs.core.first.call(null,s__84812__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__84811.call(null,cljs.core.rest.call(null,s__84812__$2)));
} else
{{
var G__84854 = cljs.core.rest.call(null,s__84812__$2);
s__84812__$1 = G__84854;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__84796__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__84796__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__84795.call(null,cljs.core.rest.call(null,s__84796__$2)));
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
var G__84863 = (j - 1);
j = G__84863;
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
return (function iter__84859(s__84860){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__84860__$1 = s__84860;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84860__$1);if(temp__4092__auto__)
{var s__84860__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84860__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84860__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84862 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84861 = 0;while(true){
if((i__84861 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__84861);cljs.core.chunk_append.call(null,b__84862,(u.call(null,i) - v__$1.call(null,i)));
{
var G__84864 = (i__84861 + 1);
i__84861 = G__84864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84862),iter__84859.call(null,cljs.core.chunk_rest.call(null,s__84860__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84862),null);
}
} else
{var i = cljs.core.first.call(null,s__84860__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__84859.call(null,cljs.core.rest.call(null,s__84860__$2)));
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
var G__84865 = cljs.core.rest.call(null,ks);
var G__84866 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__84865;
v__$2 = G__84866;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (min_partitions_after_this - diff_uv);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__84867 = (k_1 - 1);
var G__84868 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__84869 = (amount - vk);
k_1 = G__84867;
v__$3 = G__84868;
amount = G__84869;
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
var partitions_M__delegate = function (items,p__84870){var map__84928 = p__84870;var map__84928__$1 = ((cljs.core.seq_QMARK_.call(null,map__84928))?cljs.core.apply.call(null,cljs.core.hash_map,map__84928):map__84928);var from = cljs.core.get.call(null,map__84928__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__84928__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = (function iter__84929(s__84930){return (new cljs.core.LazySeq(null,(function (){var s__84930__$1 = s__84930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84930__$1);if(temp__4092__auto__)
{var s__84930__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84930__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84930__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84932 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84931 = 0;while(true){
if((i__84931 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__84931);var j = (i + 1);cljs.core.chunk_append.call(null,b__84932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__84985 = (i__84931 + 1);
i__84931 = G__84985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84932),iter__84929.call(null,cljs.core.chunk_rest.call(null,s__84930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84932),null);
}
} else
{var i = cljs.core.first.call(null,s__84930__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__84929.call(null,cljs.core.rest.call(null,s__84930__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14518__auto__ = (function iter__84933(s__84934){return (new cljs.core.LazySeq(null,(function (){var s__84934__$1 = s__84934;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__84934__$1);if(temp__4092__auto__)
{var s__84934__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84934__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84934__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84936 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84935 = 0;while(true){
if((i__84935 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__84935);cljs.core.chunk_append.call(null,b__84936,(function (){var iter__14518__auto__ = ((function (i__84935,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__){
return (function iter__84961(s__84962){return (new cljs.core.LazySeq(null,((function (i__84935,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__){
return (function (){var s__84962__$1 = s__84962;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84962__$1);if(temp__4092__auto____$1)
{var s__84962__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84962__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__84962__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__84964 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__84963 = 0;while(true){
if((i__84963 < size__14517__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14516__auto____$1,i__84963);cljs.core.chunk_append.call(null,b__84964,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__84963,i__84935,multiset,c__14516__auto____$1,size__14517__auto____$1,b__84964,s__84962__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__){
return (function (p__84969){var vec__84970 = p__84969;var index = cljs.core.nth.call(null,vec__84970,0,null);var numtimes = cljs.core.nth.call(null,vec__84970,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__84963,i__84935,multiset,c__14516__auto____$1,size__14517__auto____$1,b__84964,s__84962__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__))
,multiset)));
{
var G__84986 = (i__84963 + 1);
i__84963 = G__84986;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84964),iter__84961.call(null,cljs.core.chunk_rest.call(null,s__84962__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84964),null);
}
} else
{var multiset = cljs.core.first.call(null,s__84962__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__84935,multiset,s__84962__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__){
return (function (p__84971){var vec__84972 = p__84971;var index = cljs.core.nth.call(null,vec__84972,0,null);var numtimes = cljs.core.nth.call(null,vec__84972,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__84935,multiset,s__84962__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__))
,multiset)),iter__84961.call(null,cljs.core.rest.call(null,s__84962__$2)));
}
} else
{return null;
}
break;
}
});})(i__84935,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__))
,null,null));
});})(i__84935,part,c__14516__auto__,size__14517__auto__,b__84936,s__84934__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})());
{
var G__84987 = (i__84935 + 1);
i__84935 = G__84987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84936),iter__84933.call(null,cljs.core.chunk_rest.call(null,s__84934__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84936),null);
}
} else
{var part = cljs.core.first.call(null,s__84934__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (part,s__84934__$2,temp__4092__auto__){
return (function iter__84973(s__84974){return (new cljs.core.LazySeq(null,((function (part,s__84934__$2,temp__4092__auto__){
return (function (){var s__84974__$1 = s__84974;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__84974__$1);if(temp__4092__auto____$1)
{var s__84974__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__84974__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__84974__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__84976 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__84975 = 0;while(true){
if((i__84975 < size__14517__auto__))
{var multiset = cljs.core._nth.call(null,c__14516__auto__,i__84975);cljs.core.chunk_append.call(null,b__84976,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__84975,multiset,c__14516__auto__,size__14517__auto__,b__84976,s__84974__$2,temp__4092__auto____$1,part,s__84934__$2,temp__4092__auto__){
return (function (p__84981){var vec__84982 = p__84981;var index = cljs.core.nth.call(null,vec__84982,0,null);var numtimes = cljs.core.nth.call(null,vec__84982,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__84975,multiset,c__14516__auto__,size__14517__auto__,b__84976,s__84974__$2,temp__4092__auto____$1,part,s__84934__$2,temp__4092__auto__))
,multiset)));
{
var G__84988 = (i__84975 + 1);
i__84975 = G__84988;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84976),iter__84973.call(null,cljs.core.chunk_rest.call(null,s__84974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84976),null);
}
} else
{var multiset = cljs.core.first.call(null,s__84974__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__84974__$2,temp__4092__auto____$1,part,s__84934__$2,temp__4092__auto__){
return (function (p__84983){var vec__84984 = p__84983;var index = cljs.core.nth.call(null,vec__84984,0,null);var numtimes = cljs.core.nth.call(null,vec__84984,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__84974__$2,temp__4092__auto____$1,part,s__84934__$2,temp__4092__auto__))
,multiset)),iter__84973.call(null,cljs.core.rest.call(null,s__84974__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__84934__$2,temp__4092__auto__))
,null,null));
});})(part,s__84934__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})(),iter__84933.call(null,cljs.core.rest.call(null,s__84934__$2)));
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
var p__84870 = null;if (arguments.length > 1) {
  p__84870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__84870);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__84989){
var items = cljs.core.first(arglist__84989);
var p__84870 = cljs.core.rest(arglist__84989);
return partitions_M__delegate(items,p__84870);
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
partitions.cljs$lang$applyTo = (function (arglist__84990){
var items = cljs.core.first(arglist__84990);
var args = cljs.core.rest(arglist__84990);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map