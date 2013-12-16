// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.tree');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.tree._STAR_gc_deltas_STAR_ = true;
foundation.app.tree.inverse = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("inverse",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"node-create","node-create",4378585753),(function (p__28555){var vec__28556 = p__28555;var op = cljs.core.nth.call(null,vec__28556,0,null);var path = cljs.core.nth.call(null,vec__28556,1,null);var type = cljs.core.nth.call(null,vec__28556,2,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),path,type], null);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (p__28557){var vec__28558 = p__28557;var op = cljs.core.nth.call(null,vec__28558,0,null);var path = cljs.core.nth.call(null,vec__28558,1,null);var type = cljs.core.nth.call(null,vec__28558,2,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,type], null);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"value","value",1125876963),(function (p__28559){var vec__28560 = p__28559;var op = cljs.core.nth.call(null,vec__28560,0,null);var path = cljs.core.nth.call(null,vec__28560,1,null);var o = cljs.core.nth.call(null,vec__28560,2,null);var n = cljs.core.nth.call(null,vec__28560,3,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path,n,o], null);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (p__28561){var vec__28562 = p__28561;var op = cljs.core.nth.call(null,vec__28562,0,null);var path = cljs.core.nth.call(null,vec__28562,1,null);var k = cljs.core.nth.call(null,vec__28562,2,null);var o = cljs.core.nth.call(null,vec__28562,3,null);var n = cljs.core.nth.call(null,vec__28562,4,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path,k,n,o], null);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),(function (p__28563){var vec__28564 = p__28563;var op = cljs.core.nth.call(null,vec__28564,0,null);var path = cljs.core.nth.call(null,vec__28564,1,null);var transform_name = cljs.core.nth.call(null,vec__28564,2,null);var msgs = cljs.core.nth.call(null,vec__28564,3,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),path,transform_name,msgs], null);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),(function (p__28565){var vec__28566 = p__28565;var op = cljs.core.nth.call(null,vec__28566,0,null);var path = cljs.core.nth.call(null,vec__28566,1,null);var transform_name = cljs.core.nth.call(null,vec__28566,2,null);var msgs = cljs.core.nth.call(null,vec__28566,3,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),path,transform_name,msgs], null);
}));
foundation.app.tree.invert = (function invert(deltas){return cljs.core.mapv.call(null,foundation.app.tree.inverse,cljs.core.reverse.call(null,deltas));
});
foundation.app.tree.real_path = (function real_path(path){return cljs.core.vec.call(null,cljs.core.interpose.call(null,new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",1017472784)], null),path)));
});
foundation.app.tree.new_node = (function new_node(children){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),children], null);
});
foundation.app.tree.node_type = (function node_type(x){if(cljs.core.map_QMARK_.call(null,x))
{return new cljs.core.Keyword(null,"map","map",1014012110);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return new cljs.core.Keyword(null,"vector","vector",4488484021);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"unknown","unknown",729063356);
} else
{return null;
}
}
}
});
foundation.app.tree.existing_node_has_same_type_QMARK_ = (function existing_node_has_same_type_QMARK_(tree,r_path,type){var temp__4090__auto__ = cljs.core.get_in.call(null,tree,r_path);if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;return cljs.core._EQ_.call(null,foundation.app.tree.node_type.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(node)),type);
} else
{return true;
}
});
foundation.app.tree.node_exists_QMARK_ = (function node_exists_QMARK_(tree,path){var r_path = foundation.app.tree.real_path.call(null,path);return cljs.core.get_in.call(null,tree,r_path);
});
foundation.app.tree.parent_exists_QMARK_ = (function parent_exists_QMARK_(tree,path){if(cljs.core._EQ_.call(null,path,cljs.core.PersistentVector.EMPTY))
{return true;
} else
{var r_path = foundation.app.tree.real_path.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));return cljs.core.get_in.call(null,tree,r_path);
}
});
foundation.app.tree.apply_to_tree_dispatch = (function apply_to_tree_dispatch(_,delta){if(cljs.core.fn_QMARK_.call(null,delta))
{return new cljs.core.Keyword(null,"function","function",2394842954);
} else
{return cljs.core.first.call(null,delta);
}
});
foundation.app.tree.apply_to_tree = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("apply-to-tree",foundation.app.tree.apply_to_tree_dispatch,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"default","default",2558708147),(function (tree,_){return tree;
}));
foundation.app.tree.ensure_parents_exist = (function ensure_parents_exist(tree,path){if(cljs.core.truth_(foundation.app.tree.parent_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return foundation.app.tree.apply_to_tree.call(null,tree,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),new cljs.core.Keyword(null,"map","map",1014012110)], null));
}
});
foundation.app.tree.ensure_node_exists = (function ensure_node_exists(tree,path){if(cljs.core.truth_(foundation.app.tree.node_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return foundation.app.tree.apply_to_tree.call(null,tree,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,new cljs.core.Keyword(null,"map","map",1014012110)], null));
}
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"node-create","node-create",4378585753),(function (tree,delta){var vec__28567 = delta;var _ = cljs.core.nth.call(null,vec__28567,0,null);var path = cljs.core.nth.call(null,vec__28567,1,null);var type = cljs.core.nth.call(null,vec__28567,2,null);if(cljs.core.map_QMARK_.call(null,type))
{return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,foundation.app.tree.map__GT_deltas.call(null,type,path));
} else
{var type__$1 = (function (){var or__13823__auto__ = type;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return new cljs.core.Keyword(null,"map","map",1014012110);
}
})();var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,type__$1], null):delta);var r_path = foundation.app.tree.real_path.call(null,path);var children = (function (){var pred__28568 = cljs.core._EQ_;var expr__28569 = type__$1;if(cljs.core.truth_(pred__28568.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),expr__28569)))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core.truth_(pred__28568.call(null,new cljs.core.Keyword(null,"map","map",1014012110),expr__28569)))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28569)].join('')));
}
}
})();var tree__$1 = foundation.app.tree.ensure_parents_exist.call(null,tree,path);if(foundation.app.tree.existing_node_has_same_type_QMARK_.call(null,tree__$1,r_path,type__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.call(null,tree__$1,r_path)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"existing-node-has-same-type?","existing-node-has-same-type?",-641989933,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"r-path","r-path",1668183641,null),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,r_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,r_path,foundation.app.tree.new_node.call(null,children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,delta__$1);
}
}
}));
foundation.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){var vec__28572 = cljs.core.split_at.call(null,index,vector);var begin = cljs.core.nth.call(null,vec__28572,0,null);var end = cljs.core.nth.call(null,vec__28572,1,null);return cljs.core.into.call(null,cljs.core.vec.call(null,begin),cljs.core.rest.call(null,end));
});
foundation.app.tree.child_keys = (function child_keys(children){var pred__28576 = cljs.core._EQ_;var expr__28577 = foundation.app.tree.node_type.call(null,children);if(cljs.core.truth_(pred__28576.call(null,new cljs.core.Keyword(null,"map","map",1014012110),expr__28577)))
{return cljs.core.keys.call(null,children);
} else
{if(cljs.core.truth_(pred__28576.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),expr__28577)))
{return cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,children)));
} else
{if(cljs.core.truth_(pred__28576.call(null,new cljs.core.Keyword(null,"else","else",1017020587),expr__28577)))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28577)].join('')));
}
}
}
});
foundation.app.tree.remove_children = (function remove_children(tree,path,children){return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),cljs.core.conj.call(null,path,k)], null);
}),foundation.app.tree.child_keys.call(null,children)));
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (tree,delta){var vec__28579 = delta;var _ = cljs.core.nth.call(null,vec__28579,0,null);var path = cljs.core.nth.call(null,vec__28579,1,null);var type = cljs.core.nth.call(null,vec__28579,2,null);var r_path = foundation.app.tree.real_path.call(null,path);var containing_path = cljs.core.butlast.call(null,r_path);var node_to_remove = cljs.core.get_in.call(null,tree,r_path);var children = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(node_to_remove);var type__$1 = (function (){var or__13823__auto__ = type;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return foundation.app.tree.node_type.call(null,children);
}
})();var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.conj.call(null,delta,type__$1):delta);if(cljs.core._EQ_.call(null,foundation.app.tree.node_type.call(null,children),type__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.call(null,delta__$1))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"node-type","node-type",-1220874786,null),new cljs.core.Symbol(null,"children","children",18995128,null)),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
if(cljs.core.truth_(node_to_remove))
{var tree__$1 = ((!(cljs.core.empty_QMARK_.call(null,children)))?foundation.app.tree.remove_children.call(null,tree,path,children):tree);var tree__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(node_to_remove))?foundation.app.tree.apply_to_tree.call(null,tree__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),path,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(node_to_remove),null], null)):tree__$1);var tree__$3 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"transforms","transforms",3581801977).cljs$core$IFn$_invoke$arity$1(node_to_remove);if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree__$2,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2){
return (function (p__28580){var vec__28581 = p__28580;var k = cljs.core.nth.call(null,vec__28581,0,null);var v = cljs.core.nth.call(null,vec__28581,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),path,k], null);
});})(ks,temp__4090__auto__,tree__$1,tree__$2))
,ks));
} else
{return tree__$2;
}
})();var tree__$4 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(node_to_remove);if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree__$3,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3){
return (function (p__28582){var vec__28583 = p__28582;var k = cljs.core.nth.call(null,vec__28583,0,null);var v = cljs.core.nth.call(null,vec__28583,1,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),path,k,v,null], null);
});})(ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3))
,ks));
} else
{return tree__$3;
}
})();var new_tree = (((containing_path == null))?cljs.core.assoc.call(null,tree__$4,new cljs.core.Keyword(null,"tree","tree",1017472784),null):(function (){var last_path = cljs.core.last.call(null,r_path);var container = cljs.core.get_in.call(null,tree__$4,containing_path);if(cljs.core.map_QMARK_.call(null,container))
{return cljs.core.update_in.call(null,tree__$4,containing_path,cljs.core.dissoc,last_path);
} else
{return cljs.core.update_in.call(null,tree__$4,containing_path,foundation.app.tree.remove_index_from_vector,last_path);
}
})());return cljs.core.update_in.call(null,new_tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,delta__$1);
} else
{return tree;
}
}));
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"children-exit","children-exit",2219071390),(function (tree,delta){var vec__28584 = delta;var _ = cljs.core.nth.call(null,vec__28584,0,null);var path = cljs.core.nth.call(null,vec__28584,1,null);var r_path = foundation.app.tree.real_path.call(null,path);var c_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"children","children",2673430897));var children = cljs.core.get_in.call(null,tree,c_path);if(!(cljs.core.empty_QMARK_.call(null,children)))
{return foundation.app.tree.remove_children.call(null,tree,path,children);
} else
{return tree;
}
}));
foundation.app.tree.same_value_QMARK_ = (function same_value_QMARK_(tree,path,v){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),v);
});
foundation.app.tree.update_or_remove = (function update_or_remove(tree,path,v){if((v == null))
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
} else
{return cljs.core.assoc_in.call(null,tree,path,v);
}
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"value","value",1125876963),(function (tree,delta){var vec__28585 = delta;var op = cljs.core.nth.call(null,vec__28585,0,null);var path = cljs.core.nth.call(null,vec__28585,1,null);var o = cljs.core.nth.call(null,vec__28585,2,null);var n = cljs.core.nth.call(null,vec__28585,3,null);var r_path = foundation.app.tree.real_path.call(null,path);var v_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"value","value",1125876963));var old_value = cljs.core.get_in.call(null,tree,v_path);var vec__28586 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),4))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,n], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_value,o], null));var o__$1 = cljs.core.nth.call(null,vec__28586,0,null);var n__$1 = cljs.core.nth.call(null,vec__28586,1,null);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,foundation.app.tree.update_or_remove.call(null,tree__$1,v_path,n__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path,o__$1,n__$1], null));
}
}));
foundation.app.tree.remove_empty = (function remove_empty(tree,path){if(cljs.core.seq.call(null,cljs.core.get_in.call(null,tree,path)))
{return tree;
} else
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
}
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (tree,delta){var vec__28587 = delta;var op = cljs.core.nth.call(null,vec__28587,0,null);var path = cljs.core.nth.call(null,vec__28587,1,null);var k = cljs.core.nth.call(null,vec__28587,2,null);var o = cljs.core.nth.call(null,vec__28587,3,null);var n = cljs.core.nth.call(null,vec__28587,4,null);var r_path = foundation.app.tree.real_path.call(null,path);var a_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"attrs","attrs",1107056660),k);var old_value = cljs.core.get_in.call(null,tree,a_path);var vec__28588 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,n], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_value,o], null));var o__$1 = cljs.core.nth.call(null,vec__28588,0,null);var n__$1 = cljs.core.nth.call(null,vec__28588,1,null);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.call(null,delta)),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,foundation.app.tree.remove_empty.call(null,foundation.app.tree.update_or_remove.call(null,tree__$1,a_path,n__$1),cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"attrs","attrs",1107056660))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path,k,o__$1,n__$1], null));
}
}));
foundation.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),msgs);
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),(function (tree,delta){var vec__28589 = delta;var _ = cljs.core.nth.call(null,vec__28589,0,null);var path = cljs.core.nth.call(null,vec__28589,1,null);var k = cljs.core.nth.call(null,vec__28589,2,null);var msgs = cljs.core.nth.call(null,vec__28589,3,null);var r_path = foundation.app.tree.real_path.call(null,path);var e_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"transforms","transforms",3581801977),k);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if((cljs.core.not.call(null,cljs.core.get_in.call(null,tree__$1,e_path))) || (foundation.app.tree.same_transform_QMARK_.call(null,tree__$1,e_path,msgs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k),cljs.core.str(" at path "),cljs.core.str(path),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null))),cljs.core.list(new cljs.core.Symbol(null,"same-transform?","same-transform?",-319550509,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null),new cljs.core.Symbol(null,"msgs","msgs",-1637170485,null)))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,e_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,e_path,msgs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,delta);
}
}));
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),(function (tree,delta){var vec__28590 = delta;var _ = cljs.core.nth.call(null,vec__28590,0,null);var path = cljs.core.nth.call(null,vec__28590,1,null);var k = cljs.core.nth.call(null,vec__28590,2,null);var r_path = foundation.app.tree.real_path.call(null,path);var transforms_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var e_path = cljs.core.conj.call(null,transforms_path,k);if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path)))
{return foundation.app.tree.remove_empty.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.conj,cljs.core.conj.call(null,delta,cljs.core.get_in.call(null,tree,e_path))),transforms_path,cljs.core.dissoc,k),transforms_path);
} else
{return tree;
}
}));
foundation.app.tree.node_deltas = (function node_deltas(p__28591,path){var map__28598 = p__28591;var map__28598__$1 = ((cljs.core.seq_QMARK_.call(null,map__28598))?cljs.core.apply.call(null,cljs.core.hash_map,map__28598):map__28598);var attrs = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));var transforms = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var value = cljs.core.get.call(null,map__28598__$1,new cljs.core.Keyword(null,"value","value",1125876963));var G__28599 = cljs.core.PersistentVector.EMPTY;var G__28599__$1 = (cljs.core.truth_(value)?cljs.core.concat.call(null,G__28599,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),path,value], null)], null)):G__28599);var G__28599__$2 = (cljs.core.truth_(attrs)?cljs.core.concat.call(null,G__28599__$1,cljs.core.vec.call(null,cljs.core.map.call(null,((function (G__28599,G__28599__$1){
return (function (p__28600){var vec__28601 = p__28600;var k = cljs.core.nth.call(null,vec__28601,0,null);var v = cljs.core.nth.call(null,vec__28601,1,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),path,k,v], null);
});})(G__28599,G__28599__$1))
,attrs))):G__28599__$1);var G__28599__$3 = (cljs.core.truth_(transforms)?cljs.core.concat.call(null,G__28599__$2,cljs.core.vec.call(null,cljs.core.map.call(null,((function (G__28599,G__28599__$1,G__28599__$2){
return (function (p__28602){var vec__28603 = p__28602;var k = cljs.core.nth.call(null,vec__28603,0,null);var v = cljs.core.nth.call(null,vec__28603,1,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),path,k,v], null);
});})(G__28599,G__28599__$1,G__28599__$2))
,transforms))):G__28599__$2);return G__28599__$3;
});
foundation.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){var node_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"transforms","transforms",3581801977),null,new cljs.core.Keyword(null,"attrs","attrs",1107056660),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null);var node_QMARK_ = (function (){var and__13811__auto__ = cljs.core.map_QMARK_.call(null,tree);if(and__13811__auto__)
{return cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_).call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tree)),node_keys));
} else
{return and__13811__auto__;
}
})();var children = (cljs.core.truth_(node_QMARK_)?(function (){var or__13823__auto__ = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(tree);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})():tree);var children_type = foundation.app.tree.node_type.call(null,children);var node_deltas = (cljs.core.truth_(node_QMARK_)?foundation.app.tree.node_deltas.call(null,tree,path):null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,children_type], null)], null),node_deltas,cljs.core.mapcat.call(null,(function (k){return map__GT_deltas.call(null,cljs.core.get_in.call(null,tree,(cljs.core.truth_(node_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",2673430897),k], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))),cljs.core.conj.call(null,path,k));
}),((cljs.core._EQ_.call(null,children_type,new cljs.core.Keyword(null,"map","map",1014012110)))?cljs.core.keys.call(null,children):((cljs.core._EQ_.call(null,children_type,new cljs.core.Keyword(null,"vector","vector",4488484021)))?cljs.core.range.call(null,cljs.core.count.call(null,children)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.PersistentVector.EMPTY:null)))));
});
foundation.app.tree.expand_map = (function expand_map(delta){if(cljs.core.map_QMARK_.call(null,delta))
{return foundation.app.tree.map__GT_deltas.call(null,delta,cljs.core.PersistentVector.EMPTY);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta], null);
}
});
foundation.app.tree.expand_maps = (function expand_maps(deltas){return cljs.core.mapcat.call(null,foundation.app.tree.expand_map,deltas);
});
foundation.app.tree.update_tree = (function update_tree(tree,deltas){return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,deltas);
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"function","function",2394842954),(function (tree,f){var deltas = f.call(null,tree);return foundation.app.tree.update_tree.call(null,tree,deltas);
}));
foundation.app.tree.next_eid_atom = cljs.core.atom.call(null,0);
foundation.app.tree.next_eid = (function next_eid(){return cljs.core.swap_BANG_.call(null,foundation.app.tree.next_eid_atom,cljs.core.inc);
});
foundation.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){var transform_id = foundation.app.tree.next_eid.call(null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("t","id","t/id",1013914942),transform_id,new cljs.core.Keyword("t","transform-name","t/transform-name",3589571855),transform_name,new cljs.core.Keyword("t","node","t/node",1017298533),node_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","transform","t/transform",2066578415)], null)], null),cljs.core.map.call(null,(function (p1__28604_SHARP_){return cljs.core.merge.call(null,p1__28604_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("t","id","t/id",1013914942),foundation.app.tree.next_eid.call(null),new cljs.core.Keyword("t","transform","t/transform",2066578415),transform_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","message","t/message",1968836706)], null));
}),msgs));
});
foundation.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){return cljs.core.reduce.call(null,(function (p1__28605_SHARP_,p2__28606_SHARP_){return cljs.core.concat.call(null,p1__28605_SHARP_,foundation.app.tree.transform__GT_entities.call(null,cljs.core.first.call(null,p2__28606_SHARP_),cljs.core.second.call(null,p2__28606_SHARP_),node_id));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
foundation.app.tree.attrs__GT_entities = (function attrs__GT_entities(attrs,node_id){if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_).call(null,attrs)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("t","id","t/id",1013914942),foundation.app.tree.next_eid.call(null),new cljs.core.Keyword("t","node","t/node",1017298533),node_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","attrs","t/attrs",1107064005)], null))], null);
} else
{return null;
}
});
foundation.app.tree.node__GT_entities = (function node__GT_entities(node,path,parent_id,node_id){var map__28609 = node;var map__28609__$1 = ((cljs.core.seq_QMARK_.call(null,map__28609))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);var transforms = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var attrs = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));var value = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"value","value",1125876963));var node_e = (function (){var G__28610 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("t","id","t/id",1013914942),node_id,new cljs.core.Keyword("t","path","t/path",1017345096),path,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","node","t/node",1017298533),new cljs.core.Keyword("t","segment","t/segment",2987634742),cljs.core.last.call(null,path)], null);var G__28610__$1 = (cljs.core.truth_(parent_id)?cljs.core.assoc.call(null,G__28610,new cljs.core.Keyword("t","parent","t/parent",4313455021),parent_id):G__28610);var G__28610__$2 = (cljs.core.truth_(value)?cljs.core.assoc.call(null,G__28610__$1,new cljs.core.Keyword("t","value","t/value",1125884396),value):G__28610__$1);return G__28610__$2;
})();var attrs_es = foundation.app.tree.attrs__GT_entities.call(null,attrs,node_id);var transform_es = foundation.app.tree.transforms__GT_entities.call(null,transforms,node_id);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_e], null),attrs_es,transform_es);
});
foundation.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){var map__28612 = tree;var map__28612__$1 = ((cljs.core.seq_QMARK_.call(null,map__28612))?cljs.core.apply.call(null,cljs.core.hash_map,map__28612):map__28612);var children = cljs.core.get.call(null,map__28612__$1,new cljs.core.Keyword(null,"children","children",2673430897));var ks = foundation.app.tree.child_keys.call(null,children);var node_id = foundation.app.tree.next_eid.call(null);var node_tuples = foundation.app.tree.node__GT_entities.call(null,tree,path,parent_id,node_id);return cljs.core.concat.call(null,node_tuples,cljs.core.mapcat.call(null,(function (k){return tree__GT_entities.call(null,cljs.core.get_in.call(null,tree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",2673430897),k], null)),cljs.core.conj.call(null,path,k),node_id);
}),ks));
});
foundation.app.tree.entity__GT_tuples = (function entity__GT_tuples(ent){var id = new cljs.core.Keyword("t","id","t/id",1013914942).cljs$core$IFn$_invoke$arity$1(ent);return cljs.core.map.call(null,(function (p__28615){var vec__28616 = p__28615;var k = cljs.core.nth.call(null,vec__28616,0,null);var v = cljs.core.nth.call(null,vec__28616,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,v], null);
}),cljs.core.dissoc.call(null,ent,new cljs.core.Keyword("t","id","t/id",1013914942)));
});
foundation.app.tree.entities__GT_tuples = (function entities__GT_tuples(entities){return cljs.core.mapcat.call(null,foundation.app.tree.entity__GT_tuples,entities);
});
foundation.app.tree.tree__GT_tuples = (function tree__GT_tuples(tree){if(cljs.core.truth_(new cljs.core.Keyword(null,"tree","tree",1017472784).cljs$core$IFn$_invoke$arity$1(tree)))
{return foundation.app.tree.entities__GT_tuples.call(null,foundation.app.tree.tree__GT_entities.call(null,new cljs.core.Keyword(null,"tree","tree",1017472784).cljs$core$IFn$_invoke$arity$1(tree),cljs.core.PersistentVector.EMPTY,null));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
foundation.app.tree.delete_deltas = (function delete_deltas(t,deltas){return cljs.core.reduce.call(null,(function (d,k){if((k < t))
{return cljs.core.dissoc.call(null,d,k);
} else
{return d;
}
}),deltas,cljs.core.keys.call(null,deltas));
});
foundation.app.tree.gc = (function gc(state){if(cljs.core.truth_(foundation.app.tree._STAR_gc_deltas_STAR_))
{var t = new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(state);var delete_t = (t - 2);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deltas","deltas",3973426989)], null),(function (p1__28617_SHARP_){return foundation.app.tree.delete_deltas.call(null,delete_t,p1__28617_SHARP_);
}));
} else
{return state;
}
});
foundation.app.tree.apply_deltas = (function apply_deltas(old,deltas){var map__28620 = old;var map__28620__$1 = ((cljs.core.seq_QMARK_.call(null,map__28620))?cljs.core.apply.call(null,cljs.core.hash_map,map__28620):map__28620);var t = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"t","t",1013904358));var seq = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"seq","seq",1014018001));var deltas__$1 = foundation.app.tree.expand_maps.call(null,deltas);var map__28621 = foundation.app.tree.update_tree.call(null,old,deltas__$1);var map__28621__$1 = ((cljs.core.seq_QMARK_.call(null,map__28621))?cljs.core.apply.call(null,cljs.core.hash_map,map__28621):map__28621);var this_tx = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"this-tx","this-tx",3962990469));var tree = cljs.core.get.call(null,map__28621__$1,new cljs.core.Keyword(null,"tree","tree",1017472784));var deltas__$2 = cljs.core.map.call(null,((function (map__28620,map__28620__$1,t,seq,deltas__$1,map__28621,map__28621__$1,this_tx,tree){
return (function (d,s){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delta","delta",1109372714),d,new cljs.core.Keyword(null,"t","t",1013904358),t,new cljs.core.Keyword(null,"seq","seq",1014018001),s], null);
});})(map__28620,map__28620__$1,t,seq,deltas__$1,map__28621,map__28621__$1,this_tx,tree))
,this_tx,cljs.core.iterate.call(null,cljs.core.inc,seq));return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,old,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deltas","deltas",3973426989),t], null),deltas__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",1014018001)], null),cljs.core._PLUS_,cljs.core.count.call(null,deltas__$2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",1017472784)], null),tree),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",1013904358)], null),cljs.core.inc);
});
foundation.app.tree.value = (function value(tree,path){var r_path = foundation.app.tree.real_path.call(null,path);return cljs.core.get_in.call(null,tree,cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"value","value",1125876963)));
});
foundation.app.tree.new_app_model = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"deltas","deltas",3973426989),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"this-tx","this-tx",3962990469),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tree","tree",1017472784),null,new cljs.core.Keyword(null,"seq","seq",1014018001),0,new cljs.core.Keyword(null,"t","t",1013904358),0], null);
foundation.app.tree.t = (function t(tree){return new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(tree);
});
foundation.app.tree.since_t = (function since_t(tree,t){var ts = cljs.core.range.call(null,t,new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(tree));return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"delta","delta",1109372714),cljs.core.mapcat.call(null,(function (p1__28622_SHARP_){return cljs.core.get.call(null,new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(tree),p1__28622_SHARP_);
}),ts)));
});

//# sourceMappingURL=tree.js.map