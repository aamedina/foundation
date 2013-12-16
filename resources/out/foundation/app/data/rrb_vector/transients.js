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
foundation.app.data.rrb_vector.transients.editable_root = (function editable_root(root){return (new cljs.core.VectorNode((function (){var obj16786 = {};return obj16786;
})(),cljs.core.aclone.call(null,root.arr)));
});
foundation.app.data.rrb_vector.transients.editable_tail = (function editable_tail(tail){var ret = (new Array(32));cljs.core.array_copy.call(null,tail,0,ret,0,tail.length);
return ret;
});
foundation.app.data.rrb_vector.transients.push_tail_BANG_ = (function push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){var ret = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,ret))
{var n_16787 = ret;var shift_16788__$1 = shift;while(true){
var arr_16789 = n_16787.arr;var subidx_16790 = (((cnt - 1) >> shift_16788__$1) & 31);if((shift_16788__$1 === 5))
{(arr_16789[subidx_16790] = tail_node);
} else
{var child_16791 = (arr_16789[subidx_16790]);if((child_16791 == null))
{(arr_16789[subidx_16790] = foundation.app.data.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_16788__$1 - 5),tail_node));
} else
{var editable_child_16792 = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,child_16791);(arr_16789[subidx_16790] = editable_child_16792);
{
var G__16793 = editable_child_16792;
var G__16794 = (shift_16788__$1 - 5);
n_16787 = G__16793;
shift_16788__$1 = G__16794;
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
var G__16795 = (subidx__$1 + 1);
subidx__$1 = G__16795;
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
{var shift_16796__$1 = shift;var node_16797 = ret;while(true){
if((shift_16796__$1 === 0))
{var arr_16798 = node_16797.arr;(arr_16798[(i & 31)] = val);
} else
{var arr_16799 = node_16797.arr;var subidx_16800 = ((i >> shift_16796__$1) & 31);var child_16801 = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_16799[subidx_16800]));(arr_16799[subidx_16800] = child_16801);
{
var G__16802 = (shift_16796__$1 - 5);
var G__16803 = child_16801;
shift_16796__$1 = G__16802;
node_16797 = G__16803;
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
var G__16804 = (subidx__$1 + 1);
subidx__$1 = G__16804;
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