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
var G__36352 = (i + 1);
var G__36353 = (r + step);
i = G__36352;
r = G__36353;
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
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,root);var slc = (rngs[32]);var and__13776__auto__ = (slc === 32);if(and__13776__auto__)
{var or__13788__auto__ = (shift === 5);if(or__13788__auto__)
{return or__13788__auto__;
} else
{{
var G__36354 = (root.arr[(slc - 1)]);
var G__36355 = (shift - 5);
var G__36356 = (((rngs[31]) - (rngs[30])) + 32);
root = G__36354;
shift = G__36355;
cnt = G__36356;
continue;
}
}
} else
{return and__13776__auto__;
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
var G__36357 = l;
var G__36358 = mid;
l = G__36357;
h = G__36358;
continue;
}
} else
{{
var G__36359 = (mid + 1);
var G__36360 = h;
l = G__36359;
h = G__36360;
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
var G__36361 = l;
var G__36362 = mid;
l = G__36361;
h = G__36362;
continue;
}
} else
{{
var G__36363 = (mid + 1);
var G__36364 = h;
l = G__36363;
h = G__36364;
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
{var rngs_36365 = foundation.app.data.rrb_vector.nodes.ranges.call(null,parent);var rng0_36366 = (rngs_36365[0]);var new_rngs_36367 = (new Array(33));var lim_36368 = (rngs_36365[32]);cljs.core.array_copy.call(null,rngs_36365,1,new_rngs_36367,0,(lim_36368 - 1));
var i_36369 = 0;while(true){
if((i_36369 < lim_36368))
{(new_rngs_36367[i_36369] = ((new_rngs_36367[i_36369]) - rng0_36366));
{
var G__36370 = (i_36369 + 1);
i_36369 = G__36370;
continue;
}
} else
{}
break;
}
(new_rngs_36367[32] = ((rngs_36365[32]) - 1));
(new_rngs_36367[((rngs_36365[32]) - 1)] = 0);
(new_arr[32] = new_rngs_36367);
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
var i_36371 = 1;while(true){
if((i_36371 <= li))
{(new_rngs[i_36371] = ((new_rngs[(i_36371 - 1)]) + step));
{
var G__36372 = (i_36371 + 1);
i_36371 = G__36372;
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
var i_36373 = 0;while(true){
if((i_36373 <= li))
{(new_rngs[i_36373] = ((rngs[i_36373]) - d));
{
var G__36374 = (i_36373 + 1);
i_36373 = G__36374;
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
var j_36375 = 0;var r_36376 = step;while(true){
if((j_36375 <= i))
{(rngs[j_36375] = r_36376);
{
var G__36377 = (j_36375 + 1);
var G__36378 = (r_36376 + step);
j_36375 = G__36377;
r_36376 = G__36378;
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
foundation.app.data.rrb_vector.nodes.new_path_STAR_ = (function new_path_STAR_(shift,node){var reg_QMARK_ = (32 === node.arr.length);var len = ((reg_QMARK_)?32:33);var arr = (new Array(len));var rngs = ((!(reg_QMARK_))?(function (){var G__36380 = (new Array(33));(G__36380[0] = node.arr.length);
(G__36380[32] = 1);
return G__36380;
})():null);var ret = cljs.core.__GT_VectorNode.call(null,null,arr);var arr_36381__$1 = arr;var shift_36382__$1 = shift;while(true){
if((shift_36382__$1 === 5))
{if(!(reg_QMARK_))
{(arr_36381__$1[32] = rngs);
} else
{}
(arr_36381__$1[0] = node);
} else
{var a_36383 = (new Array(len));var e_36384 = cljs.core.__GT_VectorNode.call(null,null,a_36383);(arr_36381__$1[0] = e_36384);
if(!(reg_QMARK_))
{(arr_36381__$1[32] = rngs);
} else
{}
{
var G__36385 = a_36383;
var G__36386 = (shift_36382__$1 - 5);
arr_36381__$1 = G__36385;
shift_36382__$1 = G__36386;
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