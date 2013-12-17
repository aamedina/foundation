// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.rrb_vector.trees');
goog.require('cljs.core');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.nodes');
foundation.app.data.rrb_vector.trees.tail_offset = (function tail_offset(cnt,tail){return (cnt - tail.length);
});
foundation.app.data.rrb_vector.trees.array_for = (function array_for(cnt,shift,root,tail,i){if(((0 <= i)) && ((i < cnt)))
{if((i >= foundation.app.data.rrb_vector.trees.tail_offset.call(null,cnt,tail)))
{return tail;
} else
{var i__$1 = i;var node = root;var shift__$1 = shift;while(true){
if((shift__$1 === 0))
{return node.arr;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{var node__$1 = (node.arr[((i__$1 >> shift__$1) & 31)]);var shift__$2 = (shift__$1 - 5);while(true){
if((shift__$2 === 0))
{return node__$1.arr;
} else
{{
var G__351198 = (node__$1.arr[((i__$1 >> shift__$2) & 31)]);
var G__351199 = (shift__$2 - 5);
node__$1 = G__351198;
shift__$2 = G__351199;
continue;
}
}
break;
}
} else
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);var j = (function (){var j = ((i__$1 >> shift__$1) & 31);while(true){
if((i__$1 < (rngs[j])))
{return j;
} else
{{
var G__351200 = (j + 1);
j = G__351200;
continue;
}
}
break;
}
})();var i__$2 = (((j > 0))?(i__$1 - (rngs[(j - 1)])):i__$1);{
var G__351201 = i__$2;
var G__351202 = (node.arr[j]);
var G__351203 = (shift__$1 - 5);
i__$1 = G__351201;
node = G__351202;
shift__$1 = G__351203;
continue;
}
}
}
break;
}
}
} else
{return cljs.core.vector_index_out_of_bounds.call(null,i,cnt);
}
});
foundation.app.data.rrb_vector.trees.new_path = (function new_path(tail,edit,shift,current_node){if((tail.length === 32))
{var s = 0;var n = current_node;while(true){
if((s === shift))
{return n;
} else
{var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);(arr[0] = n);
{
var G__351204 = (s + 5);
var G__351205 = ret;
s = G__351204;
n = G__351205;
continue;
}
}
break;
}
} else
{var s = 0;var n = current_node;while(true){
if((s === shift))
{return n;
} else
{var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);(arr[0] = n);
(arr[32] = rngs);
{
var G__351206 = (s + 5);
var G__351207 = ret;
s = G__351206;
n = G__351207;
continue;
}
}
break;
}
}
});
foundation.app.data.rrb_vector.trees.push_tail = (function push_tail(shift,cnt,root_edit,current_node,tail_node){if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,current_node))
{var arr = cljs.core.aclone.call(null,current_node.arr);var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);var n_351208 = ret;var shift_351209__$1 = shift;while(true){
var arr_351210__$1 = n_351208.arr;var subidx_351211 = (((cnt - 1) >> shift_351209__$1) & 31);if((shift_351209__$1 === 5))
{(arr_351210__$1[subidx_351211] = tail_node);
} else
{var temp__4090__auto___351212 = (arr_351210__$1[subidx_351211]);if(cljs.core.truth_(temp__4090__auto___351212))
{var child_351213 = temp__4090__auto___351212;var new_carr_351214 = cljs.core.aclone.call(null,child_351213.arr);var new_child_351215 = cljs.core.__GT_VectorNode.call(null,root_edit,new_carr_351214);(arr_351210__$1[subidx_351211] = new_child_351215);
{
var G__351216 = new_child_351215;
var G__351217 = (shift_351209__$1 - 5);
n_351208 = G__351216;
shift_351209__$1 = G__351217;
continue;
}
} else
{(arr_351210__$1[subidx_351211] = foundation.app.data.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_351209__$1 - 5),tail_node));
}
}
break;
}
return ret;
} else
{var arr = cljs.core.aclone.call(null,current_node.arr);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,current_node);var li = ((rngs[32]) - 1);var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);var cret = (((shift === 5))?null:(function (){var child = (arr[li]);var ccnt = (((li > 0))?((rngs[li]) - (rngs[(li - 1)])):(rngs[0]));if(!((ccnt === (1 << shift))))
{return push_tail.call(null,(shift - 5),(ccnt + 1),root_edit,child,tail_node);
} else
{return null;
}
})());if(cljs.core.truth_(cret))
{(arr[li] = cret);
(rngs[li] = ((rngs[li]) + 32));
return ret;
} else
{(arr[(li + 1)] = foundation.app.data.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - 5),tail_node));
(rngs[(li + 1)] = ((rngs[li]) + 32));
(rngs[32] = ((rngs[32]) + 1));
return ret;
}
}
});
foundation.app.data.rrb_vector.trees.pop_tail = (function pop_tail(shift,cnt,root_edit,current_node){if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,current_node))
{var subidx = (((cnt - 1) >> shift) & 31);if((shift > 5))
{var new_child = pop_tail.call(null,(shift - 5),cnt,root_edit,(current_node.arr[subidx]));if(((new_child == null)) && ((subidx === 0)))
{return null;
} else
{var arr = cljs.core.aclone.call(null,current_node.arr);(arr[subidx] = new_child);
return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
}
} else
{if((subidx === 0))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var arr = cljs.core.aclone.call(null,current_node.arr);(arr[subidx] = null);
return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else
{return null;
}
}
}
} else
{var subidx = (((cnt - 1) >> shift) & 31);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,current_node);var subidx__$1 = (function (){var subidx__$1 = subidx;while(true){
if(((((rngs[(subidx__$1 + 1)]) | 0) === 0)) || ((subidx__$1 === 31)))
{return subidx__$1;
} else
{{
var G__351218 = (subidx__$1 + 1);
subidx__$1 = G__351218;
continue;
}
}
break;
}
})();var new_rngs = cljs.core.aclone.call(null,rngs);if((shift > 5))
{var child = (current_node.arr[subidx__$1]);var child_cnt = (((subidx__$1 === 0))?(rngs[0]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - 1)])));var new_child = pop_tail.call(null,(shift - 5),child_cnt,root_edit,child);if(((new_child == null)) && ((subidx__$1 === 0)))
{return null;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,child))
{var arr = cljs.core.aclone.call(null,current_node.arr);(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - 32));
(arr[subidx__$1] = new_child);
(arr[32] = new_rngs);
if((new_child == null))
{(new_rngs[32] = ((new_rngs[32]) - 1));
} else
{}
return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var rng = foundation.app.data.rrb_vector.nodes.last_range.call(null,child);var diff = (rng - (cljs.core.truth_(new_child)?foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child):0));var arr = cljs.core.aclone.call(null,current_node.arr);(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));
(arr[subidx__$1] = new_child);
(arr[32] = new_rngs);
if((new_child == null))
{(new_rngs[32] = ((new_rngs[32]) - 1));
} else
{}
return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else
{return null;
}
}
}
} else
{if((subidx__$1 === 0))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var arr = cljs.core.aclone.call(null,current_node.arr);var child = (arr[subidx__$1]);var new_rngs__$1 = cljs.core.aclone.call(null,rngs);(arr[subidx__$1] = null);
(arr[32] = new_rngs__$1);
(new_rngs__$1[subidx__$1] = 0);
(new_rngs__$1[32] = ((new_rngs__$1[32]) - 1));
return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.trees.do_assoc = (function do_assoc(shift,current_node,i,val){if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,current_node))
{var node = foundation.app.data.rrb_vector.nodes.clone.call(null,shift,current_node);var shift_351219__$1 = shift;var node_351220__$1 = node;while(true){
if((shift_351219__$1 === 0))
{var arr_351221 = node_351220__$1.arr;(arr_351221[(i & 31)] = val);
} else
{var arr_351222 = node_351220__$1.arr;var subidx_351223 = ((i >> shift_351219__$1) & 31);var child_351224 = foundation.app.data.rrb_vector.nodes.clone.call(null,shift_351219__$1,(arr_351222[subidx_351223]));(arr_351222[subidx_351223] = child_351224);
{
var G__351225 = (shift_351219__$1 - 5);
var G__351226 = child_351224;
shift_351219__$1 = G__351225;
node_351220__$1 = G__351226;
continue;
}
}
break;
}
return node;
} else
{if((shift === 0))
{var arr = cljs.core.aclone.call(null,current_node.arr);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,current_node);var i__$1 = (function (){var i__$1 = i;while(true){
if(((((rngs[(i__$1 + 1)]) | 0) === 0)) || ((i__$1 === 31)))
{return i__$1;
} else
{{
var G__351227 = (i__$1 + 1);
i__$1 = G__351227;
continue;
}
}
break;
}
})();(arr[(i__$1 & 31)] = val);
return cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
} else
{var arr = cljs.core.aclone.call(null,current_node.arr);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,current_node);var subidx = ((i >> shift) & 31);var subidx__$1 = (function (){var subidx__$1 = subidx;while(true){
if(((((rngs[(subidx__$1 + 1)]) | 0) === 0)) || ((subidx__$1 === 31)))
{return subidx__$1;
} else
{{
var G__351228 = (subidx__$1 + 1);
subidx__$1 = G__351228;
continue;
}
}
break;
}
})();(arr[subidx__$1] = do_assoc.call(null,(shift - 5),(arr[subidx__$1]),i,val));
return cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
}
}
});

//# sourceMappingURL=trees.js.map