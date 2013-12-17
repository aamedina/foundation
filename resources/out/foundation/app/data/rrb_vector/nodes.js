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
var G__332744 = (i + 1);
var G__332745 = (r + step);
i = G__332744;
r = G__332745;
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
var G__332746 = (root.arr[(slc - 1)]);
var G__332747 = (shift - 5);
var G__332748 = (((rngs[31]) - (rngs[30])) + 32);
root = G__332746;
shift = G__332747;
cnt = G__332748;
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
var G__332749 = l;
var G__332750 = mid;
l = G__332749;
h = G__332750;
continue;
}
} else
{{
var G__332751 = (mid + 1);
var G__332752 = h;
l = G__332751;
h = G__332752;
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
var G__332753 = l;
var G__332754 = mid;
l = G__332753;
h = G__332754;
continue;
}
} else
{{
var G__332755 = (mid + 1);
var G__332756 = h;
l = G__332755;
h = G__332756;
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
{var rngs_332757 = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var rng0_332758 = (rngs_332757[0]);var new_rngs_332759 = (new Array(33));var lim_332760 = (rngs_332757[32]);cljs.core.array_copy.call(null,rngs_332757,1,new_rngs_332759,0,(lim_332760 - 1));
var i_332761 = 0;while(true){
if((i_332761 < lim_332760))
{(new_rngs_332759[i_332761] = ((new_rngs_332759[i_332761]) - rng0_332758));
{
var G__332762 = (i_332761 + 1);
i_332761 = G__332762;
continue;
}
} else
{}
break;
}
(new_rngs_332759[32] = ((rngs_332757[32]) - 1));
(new_rngs_332759[((rngs_332757[32]) - 1)] = 0);
(new_arr[32] = new_rngs_332759);
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
var i_332763 = 1;while(true){
if((i_332763 <= li))
{(new_rngs[i_332763] = ((new_rngs[(i_332763 - 1)]) + step));
{
var G__332764 = (i_332763 + 1);
i_332763 = G__332764;
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
var i_332765 = 0;while(true){
if((i_332765 <= li))
{(new_rngs[i_332765] = ((rngs[i_332765]) - d));
{
var G__332766 = (i_332765 + 1);
i_332765 = G__332766;
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
var j_332767 = 0;var r_332768 = step;while(true){
if((j_332767 <= i))
{(rngs[j_332767] = r_332768);
{
var G__332769 = (j_332767 + 1);
var G__332770 = (r_332768 + step);
j_332767 = G__332769;
r_332768 = G__332770;
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
foundation.app.data.rrb_vector.nodes.new_path_STAR_ = (function new_path_STAR_(shift,node){var reg_QMARK_ = (32 === node.arr.length);var len = ((reg_QMARK_)?32:33);var arr = (new Array(len));var rngs = ((!(reg_QMARK_))?(function (){var G__332772 = (new Array(33));(G__332772[0] = node.arr.length);
(G__332772[32] = 1);
return G__332772;
})():null);var ret = cljs.core.__GT_VectorNode.call(null,null,arr);var arr_332773__$1 = arr;var shift_332774__$1 = shift;while(true){
if((shift_332774__$1 === 5))
{if(!(reg_QMARK_))
{(arr_332773__$1[32] = rngs);
} else
{}
(arr_332773__$1[0] = node);
} else
{var a_332775 = (new Array(len));var e_332776 = cljs.core.__GT_VectorNode.call(null,null,a_332775);(arr_332773__$1[0] = e_332776);
if(!(reg_QMARK_))
{(arr_332773__$1[32] = rngs);
} else
{}
{
var G__332777 = a_332775;
var G__332778 = (shift_332774__$1 - 5);
arr_332773__$1 = G__332777;
shift_332774__$1 = G__332778;
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