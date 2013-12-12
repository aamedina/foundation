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
var G__28040 = (i + 1);
var G__28041 = (r + step);
i = G__28040;
r = G__28041;
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
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,root);var slc = (rngs[32]);var and__13809__auto__ = (slc === 32);if(and__13809__auto__)
{var or__13821__auto__ = (shift === 5);if(or__13821__auto__)
{return or__13821__auto__;
} else
{{
var G__28042 = (root.arr[(slc - 1)]);
var G__28043 = (shift - 5);
var G__28044 = (((rngs[31]) - (rngs[30])) + 32);
root = G__28042;
shift = G__28043;
cnt = G__28044;
continue;
}
}
} else
{return and__13809__auto__;
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
var G__28045 = l;
var G__28046 = mid;
l = G__28045;
h = G__28046;
continue;
}
} else
{{
var G__28047 = (mid + 1);
var G__28048 = h;
l = G__28047;
h = G__28048;
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
var G__28049 = l;
var G__28050 = mid;
l = G__28049;
h = G__28050;
continue;
}
} else
{{
var G__28051 = (mid + 1);
var G__28052 = h;
l = G__28051;
h = G__28052;
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
{var rngs_28053 = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var rng0_28054 = (rngs_28053[0]);var new_rngs_28055 = (new Array(33));var lim_28056 = (rngs_28053[32]);cljs.core.array_copy.call(null,rngs_28053,1,new_rngs_28055,0,(lim_28056 - 1));
var i_28057 = 0;while(true){
if((i_28057 < lim_28056))
{(new_rngs_28055[i_28057] = ((new_rngs_28055[i_28057]) - rng0_28054));
{
var G__28058 = (i_28057 + 1);
i_28057 = G__28058;
continue;
}
} else
{}
break;
}
(new_rngs_28055[32] = ((rngs_28053[32]) - 1));
(new_rngs_28055[((rngs_28053[32]) - 1)] = 0);
(new_arr[32] = new_rngs_28055);
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
var i_28059 = 1;while(true){
if((i_28059 <= li))
{(new_rngs[i_28059] = ((new_rngs[(i_28059 - 1)]) + step));
{
var G__28060 = (i_28059 + 1);
i_28059 = G__28060;
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
var i_28061 = 0;while(true){
if((i_28061 <= li))
{(new_rngs[i_28061] = ((rngs[i_28061]) - d));
{
var G__28062 = (i_28061 + 1);
i_28061 = G__28062;
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
var j_28063 = 0;var r_28064 = step;while(true){
if((j_28063 <= i))
{(rngs[j_28063] = r_28064);
{
var G__28065 = (j_28063 + 1);
var G__28066 = (r_28064 + step);
j_28063 = G__28065;
r_28064 = G__28066;
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
foundation.app.data.rrb_vector.nodes.new_path_STAR_ = (function new_path_STAR_(shift,node){var reg_QMARK_ = (32 === node.arr.length);var len = ((reg_QMARK_)?32:33);var arr = (new Array(len));var rngs = ((!(reg_QMARK_))?(function (){var G__28068 = (new Array(33));(G__28068[0] = node.arr.length);
(G__28068[32] = 1);
return G__28068;
})():null);var ret = cljs.core.__GT_VectorNode.call(null,null,arr);var arr_28069__$1 = arr;var shift_28070__$1 = shift;while(true){
if((shift_28070__$1 === 5))
{if(!(reg_QMARK_))
{(arr_28069__$1[32] = rngs);
} else
{}
(arr_28069__$1[0] = node);
} else
{var a_28071 = (new Array(len));var e_28072 = cljs.core.__GT_VectorNode.call(null,null,a_28071);(arr_28069__$1[0] = e_28072);
if(!(reg_QMARK_))
{(arr_28069__$1[32] = rngs);
} else
{}
{
var G__28073 = a_28071;
var G__28074 = (shift_28070__$1 - 5);
arr_28069__$1 = G__28073;
shift_28070__$1 = G__28074;
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