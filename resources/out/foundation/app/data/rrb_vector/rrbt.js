// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('foundation.app.data.rrb_vector.protocols');
goog.require('foundation.app.data.rrb_vector.transients');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.transients');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.protocols');
foundation.app.data.rrb_vector.rrbt.rrbt_concat_threshold = 33;
foundation.app.data.rrb_vector.rrbt.max_extra_search_steps = 2;
foundation.app.data.rrb_vector.rrbt.AsRRBT = (function (){var obj37850 = {};return obj37850;
})();
foundation.app.data.rrb_vector.rrbt._as_rrbt = (function _as_rrbt(v){if((function (){var and__13942__auto__ = v;if(and__13942__auto__)
{return v.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1;
} else
{return and__13942__auto__;
}
})())
{return v.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else
{var x__14562__auto__ = (((v == null))?null:v);return (function (){var or__13954__auto__ = (foundation.app.data.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (foundation.app.data.rrb_vector.rrbt._as_rrbt["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
})().call(null,v);
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/RRBChunkedSeq";
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"foundation.app.data.rrb-vector.rrbt/RRBChunkedSeq");
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__14370__auto__ = self__.__hash;if(!((h__14370__auto__ == null)))
{return h__14370__auto__;
} else
{var h__14370__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__14370__auto____$1;
return h__14370__auto____$1;
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next.call(null,coll__$1);
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,clsj.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest.call(null,coll__$1);
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return null;
} else
{return s;
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
foundation.app.data.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function __GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});
foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq = (function() {
var rrb_chunked_seq = null;
var rrb_chunked_seq__3 = (function (vec,i,off){var cnt = vec.cnt;var shift = vec.shift;var root = vec.root;var tail = vec.tail;return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,foundation.app.data.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
});
var rrb_chunked_seq__4 = (function (vec,node,i,off){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});
var rrb_chunked_seq__5 = (function (vec,node,i,off,meta){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});
rrb_chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return rrb_chunked_seq__3.call(this,vec,node,i);
case 4:
return rrb_chunked_seq__4.call(this,vec,node,i,off);
case 5:
return rrb_chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = rrb_chunked_seq__3;
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = rrb_chunked_seq__4;
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = rrb_chunked_seq__5;
return rrb_chunked_seq;
})()
;
foundation.app.data.rrb_vector.rrbt.slice_right = (function slice_right(node,shift,end){if((shift === 0))
{var arr = node.arr;var new_arr = (new Array(end));cljs.core.array_copy.call(null,arr,0,new_arr,0,end);
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var reg_QMARK_ = foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node);var rngs = ((!(reg_QMARK_))?foundation.app.data.rrb_vector.nodes.ranges.call(null,node):null);var i = (((end - 1) >> shift) & 31);var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;while(true){
if((end <= (rngs[j])))
{return j;
} else
{{
var G__37851 = (j + 1);
j = G__37851;
continue;
}
}
break;
}
})());var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,(1 << shift));if((ce === 0))
{return (1 << shift);
} else
{return ce;
}
})():(((i__$1 > 0))?(end - (rngs[(i__$1 - 1)])):end));var arr = node.arr;var new_child = slice_right.call(null,(arr[i__$1]),(shift - 5),child_end);var regular_child_QMARK_ = (((shift === 5))?(32 === new_child.arr.length):foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,new_child));var new_arr = (new Array((((reg_QMARK_) && (regular_child_QMARK_))?32:33)));var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(((shift === 5))?new_child.arr.length:foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child)));cljs.core.array_copy.call(null,arr,0,new_arr,0,i__$1);
(new_arr[i__$1] = new_child);
if(!((reg_QMARK_) && (regular_child_QMARK_)))
{var new_rngs_37852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var step_37853 = (1 << shift);if(reg_QMARK_)
{var n__14782__auto___37854 = i__$1;var j_37855 = 0;while(true){
if((j_37855 < n__14782__auto___37854))
{(new_rngs_37852[j_37855] = ((j_37855 + 1) * step_37853));
{
var G__37856 = (j_37855 + 1);
j_37855 = G__37856;
continue;
}
} else
{}
break;
}
} else
{var n__14782__auto___37857 = i__$1;var j_37858 = 0;while(true){
if((j_37858 < n__14782__auto___37857))
{(new_rngs_37852[j_37858] = (rngs[j_37858]));
{
var G__37859 = (j_37858 + 1);
j_37858 = G__37859;
continue;
}
} else
{}
break;
}
}
(new_rngs_37852[i__$1] = ((((i__$1 > 0))?(new_rngs_37852[(i__$1 - 1)]):0) + new_child_rng));
(new_rngs_37852[32] = (i__$1 + 1));
(new_arr[32] = new_rngs_37852);
} else
{}
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
foundation.app.data.rrb_vector.rrbt.slice_left = (function slice_left(node,shift,start,end){if((shift === 0))
{var arr = node.arr;var new_len = (arr.length - start);var new_arr = (new Array(new_len));cljs.core.array_copy.call(null,arr,start,new_arr,0,new_len);
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var reg_QMARK_ = foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node);var arr = node.arr;var rngs = ((!(reg_QMARK_))?foundation.app.data.rrb_vector.nodes.ranges.call(null,node):null);var i = ((start >> shift) & 31);var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;while(true){
if((start < (rngs[j])))
{return j;
} else
{{
var G__37860 = (j + 1);
j = G__37860;
continue;
}
}
break;
}
})());var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;while(true){
if(((i__$2 === 32)) || (((arr[i__$2]) == null)))
{return i__$2;
} else
{{
var G__37861 = (i__$2 + 1);
i__$2 = G__37861;
continue;
}
}
break;
}
})():(rngs[32]));var child_start = (((i__$1 > 0))?(start - ((reg_QMARK_)?(i__$1 * (1 << shift)):(rngs[(i__$1 - 1)]))):start);var child_end = (function (){var x__14273__auto__ = (1 << shift);var y__14274__auto__ = (((i__$1 > 0))?(end - ((reg_QMARK_)?(i__$1 * (1 << shift)):(rngs[(i__$1 - 1)]))):end);return ((x__14273__auto__ < y__14274__auto__) ? x__14273__auto__ : y__14274__auto__);
})();var new_child = slice_left.call(null,(arr[i__$1]),(shift - 5),child_start,child_end);var new_len = (len - i__$1);var new_len__$1 = (((new_child == null))?(new_len - 1):new_len);if((new_len__$1 === 0))
{return null;
} else
{if(reg_QMARK_)
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var rng0 = ((((new_child == null)) || ((shift === 5)) || (foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,new_child)))?((1 << shift) - ((start >> (shift - 5)) & 31)):foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child));var step = (1 << shift);var j_37862 = 0;var r_37863 = rng0;while(true){
if((j_37862 < new_len__$1))
{(rngs__$1[j_37862] = r_37863);
{
var G__37864 = (j_37862 + 1);
var G__37865 = (r_37863 + step);
j_37862 = G__37864;
r_37863 = G__37865;
continue;
}
} else
{}
break;
}
(rngs__$1[(new_len__$1 - 1)] = (end - start));
(rngs__$1[32] = new_len__$1);
cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + 1):i__$1),new_arr,0,new_len__$1);
if(!((new_child == null)))
{(new_arr[0] = new_child);
} else
{}
(new_arr[32] = rngs__$1);
return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var j_37866 = 0;var i_37867__$2 = i__$1;while(true){
if((j_37866 < new_len__$1))
{(new_rngs[j_37866] = ((rngs[i_37867__$2]) - start));
{
var G__37868 = (j_37866 + 1);
var G__37869 = (i_37867__$2 + 1);
j_37866 = G__37868;
i_37867__$2 = G__37869;
continue;
}
} else
{}
break;
}
(new_rngs[32] = new_len__$1);
cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + 1):i__$1),new_arr,0,new_len__$1);
if(!((new_child == null)))
{(new_arr[0] = new_child);
} else
{}
(new_arr[32] = new_rngs);
return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else
{return null;
}
}
}
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 2052;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
})
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/Vector";
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"foundation.app.data.rrb-vector.rrbt/Vector");
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.data.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,foundation.app.data.rrb_vector.transients.editable_root.call(null,self__.root),foundation.app.data.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__14370__auto__ = self__.__hash;if(!((h__14370__auto__ == null)))
{return h__14370__auto__;
} else
{var h__14370__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);self__.__hash = h__14370__auto____$1;
return h__14370__auto____$1;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,k,null);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,k,not_found);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;return cljs.core._assoc_n.call(null,this$__$1,k,v);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__37874 = null;
var G__37874__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__37874__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__37874 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37874__2.call(this,self__,k);
case 3:
return G__37874__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__37874;
})()
;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args37870){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args37870)));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSpliceableVector$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return foundation.app.data.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,foundation.app.data.rrb_vector.rrbt._as_rrbt.call(null,that));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){var self__ = this;
var this$__$1 = this;var i = 0;var j = 0;var init__$1 = init;var arr = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);var lim = (arr.length - 1);var step = (lim + 1);while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{if((j < lim))
{{
var G__37875 = i;
var G__37876 = (j + 1);
var G__37877 = init__$2;
var G__37878 = arr;
var G__37879 = lim;
var G__37880 = step;
i = G__37875;
j = G__37876;
init__$1 = G__37877;
arr = G__37878;
lim = G__37879;
step = G__37880;
continue;
}
} else
{var i__$1 = (i + step);if((i__$1 < self__.cnt))
{var arr__$1 = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);var len = arr__$1.length;var lim__$1 = (len - 1);{
var G__37881 = i__$1;
var G__37882 = 0;
var G__37883 = init__$2;
var G__37884 = arr__$1;
var G__37885 = lim__$1;
var G__37886 = len;
i = G__37881;
j = G__37882;
init__$1 = G__37883;
arr = G__37884;
lim = G__37885;
step = G__37886;
continue;
}
} else
{return init__$2;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){var self__ = this;
var this$__$1 = this;if((self__.tail.length < 32))
{var tail_len = self__.tail.length;var new_tail = (new Array((tail_len + 1)));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,tail_len);
(new_tail[tail_len] = val);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),self__.shift,self__.root,new_tail,self__.meta,null));
} else
{var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);var new_tail = (function (){var new_arr = [null];(new_arr[0] = val);
return new_arr;
})();if(foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var G__37871_37887 = new_arr;(G__37871_37887[0] = self__.root);
(G__37871_37887[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),(self__.shift + 5),new_root,new_tail,self__.meta,null));
} else
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var root_total_range = (foundation.app.data.rrb_vector.nodes.ranges.call(null,self__.root)[31]);var G__37872_37888 = new_arr;(G__37872_37888[0] = self__.root);
(G__37872_37888[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
(G__37872_37888[32] = new_rngs);
var G__37873_37889 = new_rngs;(G__37873_37889[0] = root_total_range);
(G__37873_37889[1] = (root_total_range + 32));
(G__37873_37889[32] = 2);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),(self__.shift + 5),new_root,new_tail,self__.meta,null));
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),self__.shift,foundation.app.data.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return (new cljs.core.RSeq(this$__$1,(self__.cnt - 1),null));
} else
{return null;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,0);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,1);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSliceableVector$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){var self__ = this;
var this$__$1 = this;var new_cnt = (end - start);if(((start < 0)) || ((end > self__.cnt)))
{throw (new Error("vector index out of bounds"));
} else
{if((start === end))
{return cljs.core.empty.call(null,this$__$1);
} else
{if((start > end))
{throw (new Error("start index greater than end index"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tail_off = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);if((start >= tail_off))
{var new_tail = (new Array(new_cnt));cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,0,new_cnt);
return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,5,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{var tail_cut_QMARK_ = (end > tail_off);var new_root = ((tail_cut_QMARK_)?self__.root:foundation.app.data.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));var new_root__$1 = (((start === 0))?new_root:foundation.app.data.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__14273__auto__ = end;var y__14274__auto__ = tail_off;return ((x__14273__auto__ < y__14274__auto__) ? x__14273__auto__ : y__14274__auto__);
})()));var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);var new_tail = (new Array(new_len));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,new_len);
return new_tail;
})():foundation.app.data.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - 1)));var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:foundation.app.data.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));if((new_root__$2 == null))
{return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,5,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{var r = new_root__$2;var s = self__.shift;while(true){
if(((s > 5)) && (((r.arr[1]) == null)))
{{
var G__37890 = (r.arr[0]);
var G__37891 = (s - 5);
r = G__37890;
s = G__37891;
continue;
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.ci_reduce.call(null,this$__$1,f);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){var self__ = this;
var this$__$1 = this;return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt === 0))
{return null;
} else
{if((foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === 0))
{return cljs.core.array_seq.call(null,self__.tail);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,0,0);
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.cnt;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return cljs.core._nth.call(null,this$__$1,(self__.cnt - 1));
} else
{return null;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((self__.tail.length > 1))
{var new_tail = (new Array((self__.tail.length - 1)));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,new_tail.length);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,self__.root,new_tail,self__.meta,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - 2));var root_cnt = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);var new_root = foundation.app.data.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);if((new_root == null))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{if(((self__.shift > 5)) && (((new_root.arr[1]) == null)))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),(self__.shift - 5),(new_root.arr[0]),new_tail,self__.meta,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,new_root,new_tail,self__.meta,null));
} else
{return null;
}
}
}
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){var self__ = this;
var this$__$1 = this;if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);if((i >= tail_off))
{var new_tail = (new Array(self__.tail.length));var idx = (i - tail_off);cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,self__.tail.length);
(new_tail[idx] = val);
return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,foundation.app.data.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else
{if((i === self__.cnt))
{return cljs.core._conj.call(null,this$__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.equiv_sequential.call(null,this$__$1,that);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.compare_indexed.call(null,this$__$1,that);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = (self__.cnt - self__.tail.length);if((tail_off <= i))
{return (self__.tail[(i - tail_off)]);
} else
{var i__$1 = i;var node = self__.root;var shift__$1 = self__.shift;while(true){
if((shift__$1 === 0))
{var arr = node.arr;return (arr[((i__$1 >> shift__$1) & 31)]);
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{var arr = node.arr;var idx = ((i__$1 >> shift__$1) & 31);var i__$2 = i__$1;var node__$1 = (arr[idx]);var shift__$2 = (shift__$1 - 5);while(true){
var arr__$1 = node__$1.arr;var idx__$1 = ((i__$2 >> shift__$2) & 31);if((shift__$2 === 0))
{return (arr__$1[idx__$1]);
} else
{{
var G__37892 = i__$2;
var G__37893 = (arr__$1[idx__$1]);
var G__37894 = (shift__$2 - 5);
i__$2 = G__37892;
node__$1 = G__37893;
shift__$2 = G__37894;
continue;
}
}
break;
}
} else
{var arr = node.arr;var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);var idx = (function (){var j = ((i__$1 >> shift__$1) & 31);while(true){
if((i__$1 < (rngs[j])))
{return j;
} else
{{
var G__37895 = (j + 1);
j = G__37895;
continue;
}
}
break;
}
})();var i__$2 = (((idx === 0))?i__$1:(i__$1 - (rngs[(idx - 1)])));{
var G__37896 = i__$2;
var G__37897 = (arr[idx]);
var G__37898 = (shift__$1 - 5);
i__$1 = G__37896;
node = G__37897;
shift__$1 = G__37898;
continue;
}
}
}
break;
}
}
} else
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){var self__ = this;
var this$__$1 = this;if(((i >= 0)) && ((i < self__.cnt)))
{return cljs.core._nth.call(null,this$__$1,i);
} else
{return not_found;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
foundation.app.data.rrb_vector.rrbt.__GT_Vector = (function __GT_Vector(cnt,shift,root,tail,meta,__hash){return (new foundation.app.data.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});
cljs.core.Subvec.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
cljs.core.Subvec.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var this$__$1 = this;var v = this$__$1.v;var start = this$__$1.start;var end = this$__$1.end;return foundation.app.data.rrb_vector.protocols._slicev.call(null,foundation.app.data.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
});
cljs.core.PersistentVector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
cljs.core.PersistentVector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var this$__$1 = this;return (new foundation.app.data.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
});
foundation.app.data.rrb_vector.rrbt.shift_from_to = (function shift_from_to(node,from,to){while(true){
if((from === to))
{return node;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{{
var G__37905 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__37902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(G__37902[0] = node);
return G__37902;
})());
var G__37906 = (5 + from);
var G__37907 = to;
node = G__37905;
from = G__37906;
to = G__37907;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__37908 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__37903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(G__37903[0] = node);
(G__37903[32] = (function (){var G__37904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(G__37904[0] = foundation.app.data.rrb_vector.nodes.last_range.call(null,node));
(G__37904[32] = 1);
return G__37904;
})());
return G__37903;
})());
var G__37909 = (5 + from);
var G__37910 = to;
node = G__37908;
from = G__37909;
to = G__37910;
continue;
}
} else
{return null;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.rrbt.slot_count = (function slot_count(node,shift){var arr = node.arr;if((shift === 0))
{return arr.length;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{return foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr);
} else
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);return (rngs[32]);
}
}
});
foundation.app.data.rrb_vector.rrbt.subtree_branch_count = (function subtree_branch_count(node,shift){var arr = node.arr;var cs = (shift - 5);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{var i = 0;var sbc = 0;while(true){
if((i === 32))
{return sbc;
} else
{var temp__4090__auto__ = (arr[i]);if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__37911 = (i + 1);
var G__37912 = (sbc + foundation.app.data.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__37911;
sbc = G__37912;
continue;
}
} else
{return sbc;
}
}
break;
}
} else
{var lim = (foundation.app.data.rrb_vector.nodes.ranges.call(null,node)[32]);var i = 0;var sbc = 0;while(true){
if((i === lim))
{return sbc;
} else
{var child = (arr[i]);{
var G__37913 = (i + 1);
var G__37914 = (sbc + foundation.app.data.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__37913;
sbc = G__37914;
continue;
}
}
break;
}
}
});
foundation.app.data.rrb_vector.rrbt.leaf_seq = (function leaf_seq(arr){return cljs.core.mapcat.call(null,(function (p1__37915_SHARP_){return p1__37915_SHARP_.arr;
}),cljs.core.take.call(null,foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
foundation.app.data.rrb_vector.rrbt.rebalance_leaves = (function rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){var slc1 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n1,5);var slc2 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n2,5);var a = (slc1 + slc2);var sbc1 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n1,5);var sbc2 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n2,5);var p = (sbc1 + sbc2);var e = (a - (cljs.core.quot.call(null,(p - 1),32) + 1));if((e <= foundation.app.data.rrb_vector.rrbt.max_extra_search_steps))
{return [n1,n2];
} else
{if(((sbc1 + sbc2) <= 1024))
{var reg_QMARK_ = (cljs.core.mod.call(null,p,32) === 0);var new_arr = (new Array(((reg_QMARK_)?32:33)));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);var i_37916 = 0;var bs_37917 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));while(true){
var temp__4092__auto___37918 = cljs.core.seq.call(null,bs_37917);if(temp__4092__auto___37918)
{var xs__4579__auto___37919 = temp__4092__auto___37918;var block_37920 = cljs.core.first.call(null,xs__4579__auto___37919);var a_37921__$1 = (new Array(cljs.core.count.call(null,block_37920)));var i_37922__$1 = 0;var xs_37923 = cljs.core.seq.call(null,block_37920);while(true){
if(xs_37923)
{(a_37921__$1[i_37922__$1] = cljs.core.first.call(null,xs_37923));
{
var G__37924 = (i_37922__$1 + 1);
var G__37925 = cljs.core.next.call(null,xs_37923);
i_37922__$1 = G__37924;
xs_37923 = G__37925;
continue;
}
} else
{}
break;
}
(new_arr[i_37916] = cljs.core.__GT_VectorNode.call(null,null,a_37921__$1));
{
var G__37926 = (i_37916 + 1);
var G__37927 = cljs.core.next.call(null,bs_37917);
i_37916 = G__37926;
bs_37917 = G__37927;
continue;
}
} else
{}
break;
}
if(!(reg_QMARK_))
{(new_arr[32] = foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,5,p));
} else
{}
transferred_leaves.val = sbc2;
return [new_n1,null];
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var reg_QMARK_ = (cljs.core.mod.call(null,p,32) === 0);var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_arr2 = (new Array(((reg_QMARK_)?32:33)));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);var i_37928 = 0;var bs_37929 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n1))),foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n2)))));while(true){
var temp__4092__auto___37930 = cljs.core.seq.call(null,bs_37929);if(temp__4092__auto___37930)
{var xs__4579__auto___37931 = temp__4092__auto___37930;var block_37932 = cljs.core.first.call(null,xs__4579__auto___37931);var a_37933__$1 = (new Array(cljs.core.count.call(null,block_37932)));var i_37934__$1 = 0;var xs_37935 = cljs.core.seq.call(null,block_37932);while(true){
if(xs_37935)
{(a_37933__$1[i_37934__$1] = cljs.core.first.call(null,xs_37935));
{
var G__37936 = (i_37934__$1 + 1);
var G__37937 = cljs.core.next.call(null,xs_37935);
i_37934__$1 = G__37936;
xs_37935 = G__37937;
continue;
}
} else
{}
break;
}
if((i_37928 < 32))
{(new_arr1[i_37928] = cljs.core.__GT_VectorNode.call(null,null,a_37933__$1));
} else
{(new_arr2[(i_37928 - 32)] = cljs.core.__GT_VectorNode.call(null,null,a_37933__$1));
}
{
var G__37938 = (i_37928 + 1);
var G__37939 = cljs.core.next.call(null,bs_37929);
i_37928 = G__37938;
bs_37929 = G__37939;
continue;
}
} else
{}
break;
}
if(!(reg_QMARK_))
{(new_arr2[32] = foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,5,(p - 1024)));
} else
{}
transferred_leaves.val = (1024 - sbc1);
return [new_n1,new_n2];
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.child_seq = (function child_seq(node,shift,cnt){var arr = node.arr;var rngs = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):foundation.app.data.rrb_vector.nodes.ranges.call(null,node));var cs = (cljs.core.truth_(rngs)?(rngs[32]):foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr));var cseq = ((function (arr,rngs,cs){
return (function cseq(c,r){var arr__$1 = c.arr;var rngs__$1 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,c))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,(shift - 5),r):foundation.app.data.rrb_vector.nodes.ranges.call(null,c));var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[32]):foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr__$1));return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,0,rngs__$1))));
});})(arr,rngs,cs))
;return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,0,rngs))));
});
foundation.app.data.rrb_vector.rrbt.rebalance = (function rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){if((n2 == null))
{return [n1,null];
} else
{var slc1 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n1,shift);var slc2 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n2,shift);var a = (slc1 + slc2);var sbc1 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);var sbc2 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);var p = (sbc1 + sbc2);var e = (a - (cljs.core.quot.call(null,(p - 1),32) + 1));if((e <= foundation.app.data.rrb_vector.rrbt.max_extra_search_steps))
{return [n1,n2];
} else
{if(((sbc1 + sbc2) <= 1024))
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);var i_37944 = 0;var bs_37945 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));while(true){
var temp__4092__auto___37946 = cljs.core.seq.call(null,bs_37945);if(temp__4092__auto___37946)
{var xs__4579__auto___37947 = temp__4092__auto___37946;var block_37948 = cljs.core.first.call(null,xs__4579__auto___37947);var a_37949__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var r_37950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(a_37949__$1[32] = r_37950);
(r_37950[32] = cljs.core.count.call(null,block_37948));
var i_37951__$1 = 0;var o_37952 = 0;var gcs_37953 = cljs.core.seq.call(null,block_37948);while(true){
var temp__4092__auto___37954__$1 = cljs.core.seq.call(null,gcs_37953);if(temp__4092__auto___37954__$1)
{var xs__4579__auto___37955__$1 = temp__4092__auto___37954__$1;var vec__37942_37956 = cljs.core.first.call(null,xs__4579__auto___37955__$1);var gc_37957 = cljs.core.nth.call(null,vec__37942_37956,0,null);var gcr_37958 = cljs.core.nth.call(null,vec__37942_37956,1,null);(a_37949__$1[i_37951__$1] = gc_37957);
(r_37950[i_37951__$1] = (o_37952 + gcr_37958));
{
var G__37959 = (i_37951__$1 + 1);
var G__37960 = (o_37952 + gcr_37958);
var G__37961 = cljs.core.next.call(null,gcs_37953);
i_37951__$1 = G__37959;
o_37952 = G__37960;
gcs_37953 = G__37961;
continue;
}
} else
{}
break;
}
(new_arr[i_37944] = cljs.core.__GT_VectorNode.call(null,null,a_37949__$1));
(new_rngs[i_37944] = ((r_37950[((r_37950[32]) - 1)]) + (((i_37944 > 0))?(new_rngs[(i_37944 - 1)]):0)));
(new_rngs[32] = (i_37944 + 1));
{
var G__37962 = (i_37944 + 1);
var G__37963 = cljs.core.next.call(null,bs_37945);
i_37944 = G__37962;
bs_37945 = G__37963;
continue;
}
} else
{}
break;
}
(new_arr[32] = new_rngs);
transferred_leaves.val = cnt2;
return [new_n1,null];
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);var i_37964 = 0;var bs_37965 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));while(true){
var temp__4092__auto___37966 = cljs.core.seq.call(null,bs_37965);if(temp__4092__auto___37966)
{var xs__4579__auto___37967 = temp__4092__auto___37966;var block_37968 = cljs.core.first.call(null,xs__4579__auto___37967);var a_37969__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var r_37970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(a_37969__$1[32] = r_37970);
(r_37970[32] = cljs.core.count.call(null,block_37968));
var i_37971__$1 = 0;var o_37972 = 0;var gcs_37973 = cljs.core.seq.call(null,block_37968);while(true){
var temp__4092__auto___37974__$1 = cljs.core.seq.call(null,gcs_37973);if(temp__4092__auto___37974__$1)
{var xs__4579__auto___37975__$1 = temp__4092__auto___37974__$1;var vec__37943_37976 = cljs.core.first.call(null,xs__4579__auto___37975__$1);var gc_37977 = cljs.core.nth.call(null,vec__37943_37976,0,null);var gcr_37978 = cljs.core.nth.call(null,vec__37943_37976,1,null);(a_37969__$1[i_37971__$1] = gc_37977);
(r_37970[i_37971__$1] = (o_37972 + gcr_37978));
{
var G__37979 = (i_37971__$1 + 1);
var G__37980 = (o_37972 + gcr_37978);
var G__37981 = cljs.core.next.call(null,gcs_37973);
i_37971__$1 = G__37979;
o_37972 = G__37980;
gcs_37973 = G__37981;
continue;
}
} else
{}
break;
}
if(((i_37964 < 32)) && ((((i_37964 * 32) + cljs.core.count.call(null,block_37968)) > sbc1)))
{var tbs_37982 = (((i_37964 * 32) + cljs.core.count.call(null,block_37968)) - sbc1);var li_37983 = ((r_37970[32]) - 1);var d_37984 = (((tbs_37982 >= 32))?(r_37970[li_37983]):((r_37970[li_37983]) - (r_37970[(li_37983 - tbs_37982)])));transferred_leaves.val = (transferred_leaves.val + d_37984);
} else
{}
var new_arr_37985 = (((i_37964 < 32))?new_arr1:new_arr2);var new_rngs_37986 = (((i_37964 < 32))?new_rngs1:new_rngs2);var i_37987__$1 = cljs.core.mod.call(null,i_37964,32);(new_arr_37985[i_37987__$1] = cljs.core.__GT_VectorNode.call(null,null,a_37969__$1));
(new_rngs_37986[i_37987__$1] = ((r_37970[((r_37970[32]) - 1)]) + (((i_37987__$1 > 0))?(new_rngs_37986[(i_37987__$1 - 1)]):0)));
(new_rngs_37986[32] = (i_37987__$1 + 1));
{
var G__37988 = (i_37964 + 1);
var G__37989 = cljs.core.next.call(null,bs_37965);
i_37964 = G__37988;
bs_37965 = G__37989;
continue;
}
} else
{}
break;
}
(new_arr1[32] = new_rngs1);
(new_arr2[32] = new_rngs2);
return [new_n1,new_n2];
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.zippath = (function zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){if((shift === 5))
{return foundation.app.data.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else
{var c1 = foundation.app.data.rrb_vector.nodes.last_child.call(null,n1);var c2 = foundation.app.data.rrb_vector.nodes.first_child.call(null,n2);var ccnt1 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(function (){var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,n1);var i = ((rngs[32]) - 1);if((i === 0))
{return (rngs[0]);
} else
{return ((rngs[i]) - (rngs[(i - 1)]));
}
})());var ccnt2 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(foundation.app.data.rrb_vector.nodes.ranges.call(null,n2)[0]));var next_transferred_leaves = (new cljs.core.Box(0));var vec__37991 = zippath.call(null,(shift - 5),c1,ccnt1,c2,ccnt2,next_transferred_leaves);var new_c1 = cljs.core.nth.call(null,vec__37991,0,null);var new_c2 = cljs.core.nth.call(null,vec__37991,1,null);var d = next_transferred_leaves.val;transferred_leaves.val = (transferred_leaves.val + d);
return foundation.app.data.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:foundation.app.data.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:foundation.app.data.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):foundation.app.data.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
foundation.app.data.rrb_vector.rrbt.squash_nodes = (function squash_nodes(shift,n1,cnt1,n2,cnt2){var arr1 = n1.arr;var arr2 = n2.arr;var li1 = foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr1);var li2 = foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr2);var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));if((cljs.core.count.call(null,slots) > 32))
{return [n1,n2];
} else
{var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var rngs1 = cljs.core.take.call(null,li1,((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n1))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):foundation.app.data.rrb_vector.nodes.ranges.call(null,n1)));var rngs2 = cljs.core.take.call(null,li2,((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n2))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):foundation.app.data.rrb_vector.nodes.ranges.call(null,n2)));var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);return cljs.core.map.call(null,((function (r,new_rngs,new_arr,rngs1,rngs2){
return (function (p1__37992_SHARP_){return (p1__37992_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2))
,rngs2);
})();var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);(new_arr[32] = new_rngs);
var i_37993 = 0;var cs_37994 = cljs.core.seq.call(null,slots);while(true){
if(cs_37994)
{(new_arr[i_37993] = cljs.core.first.call(null,cs_37994));
{
var G__37995 = (i_37993 + 1);
var G__37996 = cljs.core.next.call(null,cs_37994);
i_37993 = G__37995;
cs_37994 = G__37996;
continue;
}
} else
{}
break;
}
var i_37997 = 0;var rngs_37998__$1 = cljs.core.seq.call(null,rngs);while(true){
if(rngs_37998__$1)
{(new_rngs[i_37997] = cljs.core.first.call(null,rngs_37998__$1));
{
var G__37999 = (i_37997 + 1);
var G__38000 = cljs.core.next.call(null,rngs_37998__$1);
i_37997 = G__37999;
rngs_37998__$1 = G__38000;
continue;
}
} else
{(new_rngs[32] = i_37997);
}
break;
}
return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
foundation.app.data.rrb_vector.rrbt.splice_rrbts = (function splice_rrbts(v1,v2){if((cljs.core.count.call(null,v1) === 0))
{return v2;
} else
{if((cljs.core.count.call(null,v2) < foundation.app.data.rrb_vector.rrbt.rrbt_concat_threshold))
{return cljs.core.into.call(null,v1,v2);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var s1 = v1.shift;var s2 = v2.shift;var r1 = v1.root;var o_QMARK_ = foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + (32 - v1.tail.length)));var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);var reg_QMARK_ = (foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,r1)) && ((tail.length === 32));var arr = (new Array(((reg_QMARK_)?32:33)));(arr[0] = r1);
(arr[1] = foundation.app.data.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));
if(!(reg_QMARK_))
{var rngs_38007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(rngs_38007[32] = 2);
(rngs_38007[0] = (cljs.core.count.call(null,v1) - tail.length));
(rngs_38007[1] = cljs.core.count.call(null,v1));
(arr[32] = rngs_38007);
} else
{}
return cljs.core.__GT_VectorNode.call(null,null,arr);
})():foundation.app.data.rrb_vector.nodes.fold_tail.call(null,r1,s1,foundation.app.data.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));var s1__$1 = ((o_QMARK_)?(s1 + 5):s1);var r2 = v2.root;var s = (function (){var x__14266__auto__ = s1__$1;var y__14267__auto__ = s2;return ((x__14266__auto__ > y__14267__auto__) ? x__14266__auto__ : y__14267__auto__);
})();var r1__$2 = foundation.app.data.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);var r2__$1 = foundation.app.data.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);var transferred_leaves = (new cljs.core.Box(0));var vec__38004 = foundation.app.data.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);var n1 = cljs.core.nth.call(null,vec__38004,0,null);var n2 = cljs.core.nth.call(null,vec__38004,1,null);var d = transferred_leaves.val;var ncnt1 = (cljs.core.count.call(null,v1) + d);var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);var vec__38005 = (((n2 === r2__$1))?foundation.app.data.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);var n1__$1 = cljs.core.nth.call(null,vec__38005,0,null);var n2__$1 = cljs.core.nth.call(null,vec__38005,1,null);var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:0);if(cljs.core.truth_(n2__$1))
{var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);(arr[0] = n1__$1);
(arr[1] = n2__$1);
(arr[32] = (function (){var G__38006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(G__38006[0] = ncnt1__$1);
(G__38006[1] = (ncnt1__$1 + ncnt2__$1));
(G__38006[32] = 2);
return G__38006;
})());
return (new foundation.app.data.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + 5),new_root,v2.tail,null,null));
} else
{var r = n1__$1;var s__$1 = s;while(true){
if(((s__$1 > 5)) && (((r.arr[1]) == null)))
{{
var G__38008 = (r.arr[0]);
var G__38009 = (s__$1 - 5);
r = G__38008;
s__$1 = G__38009;
continue;
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}
} else
{return null;
}
}
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/Transient";
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"foundation.app.data.rrb-vector.rrbt/Transient");
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = (self__.cnt - self__.tidx);if((tail_off <= i))
{(self__.tail[(i - tail_off)] = val);
return this$__$1;
} else
{self__.root = foundation.app.data.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val);
return this$__$1;
}
} else
{if((self__.cnt === self__.cnt))
{return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
self__.tidx = 0;
(self__.tail[0] = null);
return this$__$1;
} else
{if((self__.tidx > 1))
{self__.cnt = (self__.cnt - 1);
self__.tidx = (self__.tidx - 1);
(self__.tail[self__.tidx] = null);
return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail_base = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - 2));var new_tail = cljs.core.aclone.call(null,new_tail_base);var new_tidx = new_tail_base.length;var new_root = foundation.app.data.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);if((new_root == null))
{self__.cnt = (self__.cnt - 1);
self__.root = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,foundation.app.data.rrb_vector.nodes.empty_node);
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{if(((self__.shift > 5)) && (((new_root.arr[1]) == null)))
{self__.cnt = (self__.cnt - 1);
self__.shift = (self__.shift - 5);
self__.root = (new_root.arr[0]);
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{self__.cnt = (self__.cnt - 1);
self__.root = new_root;
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{return null;
}
}
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("count after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){var self__ = this;
var this$__$1 = this;return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if((self__.tidx < 32))
{(self__.tail[self__.tidx] = o);
self__.cnt = (self__.cnt + 1);
self__.tidx = (self__.tidx + 1);
return this$__$1;
} else
{var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[0] = o);
self__.tail = new_tail;
self__.tidx = 1;
if(foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var G__38010_38013 = new_arr;(G__38010_38013[0] = self__.root);
(G__38010_38013[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
self__.shift = (self__.shift + 5);
self__.cnt = (self__.cnt + 1);
return this$__$1;
} else
{var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var root_total_range = (foundation.app.data.rrb_vector.nodes.ranges.call(null,self__.root)[31]);var G__38011_38014 = new_arr;(G__38011_38014[0] = self__.root);
(G__38011_38014[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
(G__38011_38014[32] = new_rngs);
var G__38012_38015 = new_rngs;(G__38012_38015[0] = root_total_range);
(G__38012_38015[1] = (root_total_range + 32));
(G__38012_38015[32] = 2);
self__.root = new_root;
self__.shift = (self__.shift + 5);
self__.cnt = (self__.cnt + 1);
return this$__$1;
}
} else
{var new_root = foundation.app.data.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return this$__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var trimmed_tail = (new Array(self__.tidx));cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,self__.tidx);
return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else
{throw (new Error("persistent! called twice"));
}
});
foundation.app.data.rrb_vector.rrbt.__GT_Transient = (function __GT_Transient(cnt,shift,root,tail,tidx){return (new foundation.app.data.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

//# sourceMappingURL=rrbt.js.map