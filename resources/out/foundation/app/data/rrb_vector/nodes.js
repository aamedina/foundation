// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.rrb_vector.nodes');
goog.require('cljs.core');
foundation.app.data.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
foundation.app.data.rrb_vector.nodes.clone = (function clone(shift,node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
foundation.app.data.rrb_vector.nodes.regular_QMARK_ = (function regular_QMARK_(node){return !((node.arr.length === 33));
});
foundation.app.data.rrb_vector.nodes.ranges = (function ranges(node){return (node.arr[32]);
});
foundation.app.data.rrb_vector.nodes.last_range = (function last_range(node){var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);var i = ((rngs[32]) - 1);return (rngs[i]);
});
foundation.app.data.rrb_vector.nodes.regular_ranges = (function regular_ranges(shift,cnt){var step = (1 << shift);var rngs = (new Array(33));var i = 0;var r = step;while(true){
if((r < cnt))
{(rngs[i] = r);
{
var G__323567 = (i + 1);
var G__323568 = (r + step);
i = G__323567;
r = G__323568;
continue;
}
} else
{(rngs[i] = cnt);
(rngs[32] = (i + 1));
return rngs;
}
break;
}
});
foundation.app.data.rrb_vector.nodes.overflow_QMARK_ = (function overflow_QMARK_(root,shift,cnt){while(true){
if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,root))
{return ((cnt >> 5) > (1 << shift));
} else
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,root);var slc = (rngs[32]);var and__13811__auto__ = (slc === 32);if(and__13811__auto__)
{var or__13823__auto__ = (shift === 5);if(or__13823__auto__)
{return or__13823__auto__;
} else
{{
var G__323569 = (root.arr[(slc - 1)]);
var G__323570 = (shift - 5);
var G__323571 = (((rngs[31]) - (rngs[30])) + 32);
root = G__323569;
shift = G__323570;
cnt = G__323571;
continue;
}
}
} else
{return and__13811__auto__;
}
}
break;
}
});
foundation.app.data.rrb_vector.nodes.index_of_0 = (function index_of_0(arr){var l = 0;var h = 31;while(true){
if((l >= (h - 1)))
{if((((arr[l]) | 0) === 0))
{return l;
} else
{if((((arr[h]) | 0) === 0))
{return h;
} else
{return 32;
}
}
} else
{var mid = (l + ((h - l) >> 1));if((((arr[mid]) | 0) === 0))
{{
var G__323572 = l;
var G__323573 = mid;
l = G__323572;
h = G__323573;
continue;
}
} else
{{
var G__323574 = (mid + 1);
var G__323575 = h;
l = G__323574;
h = G__323575;
continue;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.nodes.index_of_nil = (function index_of_nil(arr){var l = 0;var h = 31;while(true){
if((l >= (h - 1)))
{if(((arr[l]) == null))
{return l;
} else
{if(((arr[h]) == null))
{return h;
} else
{return 32;
}
}
} else
{var mid = (l + ((h - l) >> 1));if(((arr[mid]) == null))
{{
var G__323576 = l;
var G__323577 = mid;
l = G__323576;
h = G__323577;
continue;
}
} else
{{
var G__323578 = (mid + 1);
var G__323579 = h;
l = G__323578;
h = G__323579;
continue;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.nodes.first_child = (function first_child(node){return (node.arr[0]);
});
foundation.app.data.rrb_vector.nodes.last_child = (function last_child(node){var arr = node.arr;if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{return (arr[(foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr) - 1)]);
} else
{return (arr[((foundation.app.data.rrb_vector.nodes.ranges.call(null,node)[32]) - 1)]);
}
});
foundation.app.data.rrb_vector.nodes.remove_leftmost_child = (function remove_leftmost_child(shift,parent){var arr = parent.arr;if(((arr[1]) == null))
{return null;
} else
{var r_QMARK_ = foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,parent);var new_arr = (new Array(((r_QMARK_)?32:33)));cljs.core.array_copy.call(null,arr,1,new_arr,0,31);
if(!(r_QMARK_))
{var rngs_323580 = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var rng0_323581 = (rngs_323580[0]);var new_rngs_323582 = (new Array(33));var lim_323583 = (rngs_323580[32]);cljs.core.array_copy.call(null,rngs_323580,1,new_rngs_323582,0,(lim_323583 - 1));
var i_323584 = 0;while(true){
if((i_323584 < lim_323583))
{(new_rngs_323582[i_323584] = ((new_rngs_323582[i_323584]) - rng0_323581));
{
var G__323585 = (i_323584 + 1);
i_323584 = G__323585;
continue;
}
} else
{}
break;
}
(new_rngs_323582[32] = ((rngs_323580[32]) - 1));
(new_rngs_323582[((rngs_323580[32]) - 1)] = 0);
(new_arr[32] = new_rngs_323582);
} else
{}
return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
foundation.app.data.rrb_vector.nodes.replace_leftmost_child = (function replace_leftmost_child(shift,parent,pcnt,child,d){if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,parent))
{var step = (1 << shift);var rng0 = (step - d);var ncnt = (pcnt - d);var li = ((shift >> (pcnt - 1)) & 31);var arr = parent.arr;var new_arr = (new Array(33));var new_rngs = (new Array(33));(new_arr[0] = child);
cljs.core.array_copy.call(null,arr,1,new_arr,1,li);
(new_arr[32] = new_rngs);
(new_rngs[0] = rng0);
(new_rngs[li] = ncnt);
(new_rngs[32] = (li + 1));
var i_323586 = 1;while(true){
if((i_323586 <= li))
{(new_rngs[i_323586] = ((new_rngs[(i_323586 - 1)]) + step));
{
var G__323587 = (i_323586 + 1);
i_323586 = G__323587;
continue;
}
} else
{}
break;
}
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var new_arr = cljs.core.aclone.call(null,parent.arr);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var new_rngs = (new Array(33));var li = ((rngs[32]) - 1);(new_rngs[32] = (rngs[32]));
(new_arr[32] = new_rngs);
(new_arr[0] = child);
var i_323588 = 0;while(true){
if((i_323588 <= li))
{(new_rngs[i_323588] = ((rngs[i_323588]) - d));
{
var G__323589 = (i_323588 + 1);
i_323588 = G__323589;
continue;
}
} else
{}
break;
}
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
foundation.app.data.rrb_vector.nodes.replace_rightmost_child = (function replace_rightmost_child(shift,parent,child,d){if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,parent))
{var arr = parent.arr;var i = (foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr) - 1);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,child))
{var new_arr = cljs.core.aclone.call(null,arr);(new_arr[i] = child);
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var arr__$1 = parent.arr;var new_arr = (new Array(33));var step = (1 << shift);var rngs = (new Array(33));(rngs[32] = (i + 1));
(new_arr[32] = rngs);
cljs.core.array_copy.call(null,arr__$1,0,new_arr,0,i);
(new_arr[i] = child);
var j_323590 = 0;var r_323591 = step;while(true){
if((j_323590 <= i))
{(rngs[j_323590] = r_323591);
{
var G__323592 = (j_323590 + 1);
var G__323593 = (r_323591 + step);
j_323590 = G__323592;
r_323591 = G__323593;
continue;
}
} else
{}
break;
}
(rngs[i] = foundation.app.data.rrb_vector.nodes.last_range.call(null,child));
return cljs.core.__GT_VectorNode.call(null,null,arr__$1);
}
} else
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var new_rngs = cljs.core.aclone.call(null,rngs);var i = ((rngs[32]) - 1);var new_arr = cljs.core.aclone.call(null,parent.arr);(new_arr[i] = child);
(new_arr[32] = new_rngs);
(new_rngs[i] = ((rngs[i]) + d));
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
foundation.app.data.rrb_vector.nodes.new_path_STAR_ = (function new_path_STAR_(shift,node){var reg_QMARK_ = (32 === node.arr.length);var len = ((reg_QMARK_)?32:33);var arr = (new Array(len));var rngs = ((!(reg_QMARK_))?(function (){var G__323595 = (new Array(33));(G__323595[0] = node.arr.length);
(G__323595[32] = 1);
return G__323595;
})():null);var ret = cljs.core.__GT_VectorNode.call(null,null,arr);var arr_323596__$1 = arr;var shift_323597__$1 = shift;while(true){
if((shift_323597__$1 === 5))
{if(!(reg_QMARK_))
{(arr_323596__$1[32] = rngs);
} else
{}
(arr_323596__$1[0] = node);
} else
{var a_323598 = (new Array(len));var e_323599 = cljs.core.__GT_VectorNode.call(null,null,a_323598);(arr_323596__$1[0] = e_323599);
if(!(reg_QMARK_))
{(arr_323596__$1[32] = rngs);
} else
{}
{
var G__323600 = a_323598;
var G__323601 = (shift_323597__$1 - 5);
arr_323596__$1 = G__323600;
shift_323597__$1 = G__323601;
continue;
}
}
break;
}
return ret;
});
foundation.app.data.rrb_vector.nodes.fold_tail = (function fold_tail(node,shift,cnt,tail){var tlen = tail.length;var reg_QMARK_ = (foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node)) && ((tlen === 32));var arr = node.arr;var li = foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr);var new_arr = (new Array(((reg_QMARK_)?32:33)));var rngs = ((!(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node)))?foundation.app.data.rrb_vector.nodes.ranges.call(null,node):null);var cret = (((shift === 5))?cljs.core.__GT_VectorNode.call(null,null,tail):fold_tail.call(null,(arr[(li - 1)]),(shift - 5),((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,(1 << shift)):(function (){var li__$1 = ((rngs[32]) - 1);if((li__$1 > 0))
{return ((rngs[li__$1]) - (rngs[(li__$1 - 1)]));
} else
{return (rngs[0]);
}
})()),tail));var new_rngs = ((!(reg_QMARK_))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);if((((cret == null)) || ((shift === 5))) && ((li === 32)))
{return null;
} else
{cljs.core.array_copy.call(null,arr,0,new_arr,0,li);
if(reg_QMARK_)
{} else
{if(((cret == null)) || ((shift === 5)))
{(new_rngs[li] = ((((li > 0))?(new_rngs[(li - 1)]):(0 | 0)) + tlen));
(new_rngs[32] = (li + 1));
} else
{if((li > 0))
{(new_rngs[(li - 1)] = ((new_rngs[(li - 1)]) + tlen));
} else
{}
(new_rngs[32] = li);
}
}
if(!(reg_QMARK_))
{(new_arr[32] = new_rngs);
} else
{}
if((cret == null))
{(new_arr[li] = foundation.app.data.rrb_vector.nodes.new_path_STAR_.call(null,(shift - 5),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else
{(new_arr[(((shift === 5))?li:(li - 1))] = cret);
}
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});

//# sourceMappingURL=nodes.js.map