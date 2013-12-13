// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.rrb_vector.transients');
goog.require('cljs.core');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.nodes');
foundation.app.data.rrb_vector.transients.ensure_editable = (function ensure_editable(edit,node){if((node.edit === edit))
{return node;
} else
{var new_arr = cljs.core.aclone.call(null,node.arr);if((33 === new_arr.length))
{(new_arr[32] = cljs.core.aclone.call(null,(new_arr[32])));
} else
{}
return (new cljs.core.VectorNode(edit,new_arr));
}
});
foundation.app.data.rrb_vector.transients.editable_root = (function editable_root(root){return (new cljs.core.VectorNode((function (){var obj36561 = {};return obj36561;
})(),cljs.core.aclone.call(null,root.arr)));
});
foundation.app.data.rrb_vector.transients.editable_tail = (function editable_tail(tail){var ret = (new Array(32));cljs.core.array_copy.call(null,tail,0,ret,0,tail.length);
return ret;
});
foundation.app.data.rrb_vector.transients.push_tail_BANG_ = (function push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){var ret = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,ret))
{var n_36562 = ret;var shift_36563__$1 = shift;while(true){
var arr_36564 = n_36562.arr;var subidx_36565 = (((cnt - 1) >> shift_36563__$1) & 31);if((shift_36563__$1 === 5))
{(arr_36564[subidx_36565] = tail_node);
} else
{var child_36566 = (arr_36564[subidx_36565]);if((child_36566 == null))
{(arr_36564[subidx_36565] = foundation.app.data.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_36563__$1 - 5),tail_node));
} else
{var editable_child_36567 = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,child_36566);(arr_36564[subidx_36565] = editable_child_36567);
{
var G__36568 = editable_child_36567;
var G__36569 = (shift_36563__$1 - 5);
n_36562 = G__36568;
shift_36563__$1 = G__36569;
continue;
}
}
}
break;
}
return ret;
} else
{var arr = ret.arr;var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,ret);var li = ((rngs[32]) - 1);var cret = (((shift === 5))?null:(function (){var child = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr[li]));var ccnt = (((li > 0))?((rngs[li]) - (rngs[(li - 1)])):(rngs[0]));if(!((ccnt === (1 << shift))))
{return push_tail_BANG_.call(null,(shift - 5),(ccnt + 1),root_edit,child,tail_node);
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
foundation.app.data.rrb_vector.transients.pop_tail_BANG_ = (function pop_tail_BANG_(shift,cnt,root_edit,current_node){var ret = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,ret))
{var subidx = (((cnt - 1) >> shift) & 31);if((shift > 5))
{var child = pop_tail_BANG_.call(null,(shift - 5),cnt,root_edit,(ret.arr[subidx]));if(((child == null)) && ((subidx === 0)))
{return null;
} else
{var arr = ret.arr;(arr[subidx] = child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var arr = ret.arr;(arr[subidx] = null);
return ret;
} else
{return null;
}
}
}
} else
{var subidx = (((cnt - 1) >> shift) & 31);var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,ret);var subidx__$1 = (function (){var subidx__$1 = subidx;while(true){
if(((((rngs[(subidx__$1 + 1)]) | 0) === 0)) || ((subidx__$1 === 31)))
{return subidx__$1;
} else
{{
var G__36570 = (subidx__$1 + 1);
subidx__$1 = G__36570;
continue;
}
}
break;
}
})();if((shift > 5))
{var child = (ret.arr[subidx__$1]);var child_cnt = (((subidx__$1 === 0))?(rngs[0]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - 1)])));var new_child = pop_tail_BANG_.call(null,(shift - 5),child_cnt,root_edit,child);if(((new_child == null)) && ((subidx__$1 === 0)))
{return null;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,child))
{var arr = ret.arr;(rngs[subidx__$1] = ((rngs[subidx__$1]) - 32));
(arr[subidx__$1] = new_child);
if((new_child == null))
{(rngs[32] = ((rngs[32]) - 1));
} else
{}
return ret;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var rng = foundation.app.data.rrb_vector.nodes.last_range.call(null,child);var diff = (rng - (cljs.core.truth_(new_child)?foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child):0));var arr = ret.arr;(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));
(arr[subidx__$1] = new_child);
if((new_child == null))
{(rngs[32] = ((rngs[32]) - 1));
} else
{}
return ret;
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
{var arr = ret.arr;var child = (arr[subidx__$1]);(arr[subidx__$1] = null);
(rngs[subidx__$1] = 0);
(rngs[32] = ((rngs[32]) - 1));
return ret;
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.transients.do_assoc_BANG_ = (function do_assoc_BANG_(shift,root_edit,current_node,i,val){var ret = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,ret))
{var shift_36571__$1 = shift;var node_36572 = ret;while(true){
if((shift_36571__$1 === 0))
{var arr_36573 = node_36572.arr;(arr_36573[(i & 31)] = val);
} else
{var arr_36574 = node_36572.arr;var subidx_36575 = ((i >> shift_36571__$1) & 31);var child_36576 = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_36574[subidx_36575]));(arr_36574[subidx_36575] = child_36576);
{
var G__36577 = (shift_36571__$1 - 5);
var G__36578 = child_36576;
shift_36571__$1 = G__36577;
node_36572 = G__36578;
continue;
}
}
break;
}
return ret;
} else
{var arr = ret.arr;var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,ret);var subidx = ((i >> shift) & 31);var subidx__$1 = (function (){var subidx__$1 = subidx;while(true){
if(((((rngs[(subidx__$1 + 1)]) | 0) === 0)) || ((subidx__$1 === 31)))
{return subidx__$1;
} else
{{
var G__36579 = (subidx__$1 + 1);
subidx__$1 = G__36579;
continue;
}
}
break;
}
})();(arr[subidx__$1] = do_assoc_BANG_.call(null,(shift - 5),(arr[subidx__$1]),i,val));
return ret;
}
});

//# sourceMappingURL=transients.js.map