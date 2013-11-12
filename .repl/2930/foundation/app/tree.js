// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.tree');
goog.require('cljs.core');
goog.require('foundation.app.query');
goog.require('foundation.app.query');
goog.require('foundation.app.log');
goog.require('foundation.app.log');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.tree._STAR_gc_deltas_STAR_ = true;
foundation.app.tree.inverse = (function (){var method_table__8238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8242__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("inverse",(function (delta){return cljs.core.first.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8242__auto__,method_table__8238__auto__,prefer_table__8239__auto__,method_cache__8240__auto__,cached_hierarchy__8241__auto__));
})();
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"node-create","node-create",4378585753),(function (p__48010){var vec__48011 = p__48010;var op = cljs.core.nth.call(null,vec__48011,0,null);var path = cljs.core.nth.call(null,vec__48011,1,null);var type = cljs.core.nth.call(null,vec__48011,2,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),path,type], true);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (p__48012){var vec__48013 = p__48012;var op = cljs.core.nth.call(null,vec__48013,0,null);var path = cljs.core.nth.call(null,vec__48013,1,null);var type = cljs.core.nth.call(null,vec__48013,2,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,type], true);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"value","value",1125876963),(function (p__48014){var vec__48015 = p__48014;var op = cljs.core.nth.call(null,vec__48015,0,null);var path = cljs.core.nth.call(null,vec__48015,1,null);var o = cljs.core.nth.call(null,vec__48015,2,null);var n = cljs.core.nth.call(null,vec__48015,3,null);return cljs.core.PersistentVector.fromArray([op,path,n,o], true);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (p__48016){var vec__48017 = p__48016;var op = cljs.core.nth.call(null,vec__48017,0,null);var path = cljs.core.nth.call(null,vec__48017,1,null);var k = cljs.core.nth.call(null,vec__48017,2,null);var o = cljs.core.nth.call(null,vec__48017,3,null);var n = cljs.core.nth.call(null,vec__48017,4,null);return cljs.core.PersistentVector.fromArray([op,path,k,n,o], true);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),(function (p__48018){var vec__48019 = p__48018;var op = cljs.core.nth.call(null,vec__48019,0,null);var path = cljs.core.nth.call(null,vec__48019,1,null);var transform_name = cljs.core.nth.call(null,vec__48019,2,null);var msgs = cljs.core.nth.call(null,vec__48019,3,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),path,transform_name,msgs], true);
}));
cljs.core._add_method.call(null,foundation.app.tree.inverse,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),(function (p__48020){var vec__48021 = p__48020;var op = cljs.core.nth.call(null,vec__48021,0,null);var path = cljs.core.nth.call(null,vec__48021,1,null);var transform_name = cljs.core.nth.call(null,vec__48021,2,null);var msgs = cljs.core.nth.call(null,vec__48021,3,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),path,transform_name,msgs], true);
}));
foundation.app.tree.invert = (function invert(deltas){return cljs.core.mapv.call(null,foundation.app.tree.inverse,cljs.core.reverse.call(null,deltas));
});
foundation.app.tree.real_path = (function real_path(path){return cljs.core.vec.call(null,cljs.core.interpose.call(null,new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tree","tree",1017472784)], true),path)));
});
foundation.app.tree.new_node = (function new_node(children){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"children","children",2673430897),children], true);
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
foundation.app.tree.apply_to_tree = (function (){var method_table__8238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8242__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("apply-to-tree",foundation.app.tree.apply_to_tree_dispatch,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8242__auto__,method_table__8238__auto__,prefer_table__8239__auto__,method_cache__8240__auto__,cached_hierarchy__8241__auto__));
})();
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"default","default",2558708147),(function (tree,_){return tree;
}));
/**
* Given a tree and a path, ensure that all the parent nodes in the
* tree exist.
*/
foundation.app.tree.ensure_parents_exist = (function ensure_parents_exist(tree,path){if(cljs.core.truth_(foundation.app.tree.parent_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return foundation.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.vec.call(null,cljs.core.butlast.call(null,path)),new cljs.core.Keyword(null,"map","map",1014012110)], true));
}
});
/**
* Given a tree and a path, create the node at path if it does not
* already exist.
*/
foundation.app.tree.ensure_node_exists = (function ensure_node_exists(tree,path){if(cljs.core.truth_(foundation.app.tree.node_exists_QMARK_.call(null,tree,path)))
{return tree;
} else
{return foundation.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,new cljs.core.Keyword(null,"map","map",1014012110)], true));
}
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"node-create","node-create",4378585753),(function (tree,delta){var vec__48022 = delta;var _ = cljs.core.nth.call(null,vec__48022,0,null);var path = cljs.core.nth.call(null,vec__48022,1,null);var type = cljs.core.nth.call(null,vec__48022,2,null);if(cljs.core.map_QMARK_.call(null,type))
{return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,foundation.app.tree.map__GT_deltas.call(null,type,path));
} else
{var type__$1 = (function (){var or__7439__auto__ = type;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return new cljs.core.Keyword(null,"map","map",1014012110);
}
})();var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,type__$1], true):delta);var r_path = foundation.app.tree.real_path.call(null,path);var children = (function (){var pred__48023 = cljs.core._EQ_;var expr__48024 = type__$1;if(pred__48023.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),expr__48024))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(pred__48023.call(null,new cljs.core.Keyword(null,"map","map",1014012110),expr__48024))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48024)].join('')));
}
}
})();var tree__$1 = foundation.app.tree.ensure_parents_exist.call(null,tree,path);if(cljs.core.truth_(foundation.app.tree.existing_node_has_same_type_QMARK_.call(null,tree__$1,r_path,type__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.call(null,tree__$1,r_path)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"existing-node-has-same-type?","existing-node-has-same-type?",-641989933,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"r-path","r-path",1668183641,null),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,r_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,r_path,foundation.app.tree.new_node.call(null,children)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,delta__$1);
}
}
}));
foundation.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){var vec__48027 = cljs.core.split_at.call(null,index,vector);var begin = cljs.core.nth.call(null,vec__48027,0,null);var end = cljs.core.nth.call(null,vec__48027,1,null);return cljs.core.into.call(null,cljs.core.vec.call(null,begin),cljs.core.rest.call(null,end));
});
foundation.app.tree.child_keys = (function child_keys(children){var pred__48031 = cljs.core._EQ_;var expr__48032 = foundation.app.tree.node_type.call(null,children);if(pred__48031.call(null,new cljs.core.Keyword(null,"map","map",1014012110),expr__48032))
{return cljs.core.keys.call(null,children);
} else
{if(pred__48031.call(null,new cljs.core.Keyword(null,"vector","vector",4488484021),expr__48032))
{return cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,children)));
} else
{if(pred__48031.call(null,new cljs.core.Keyword(null,"else","else",1017020587),expr__48032))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48032)].join('')));
}
}
}
});
foundation.app.tree.remove_children = (function remove_children(tree,path,children){return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,cljs.core.map.call(null,(function (k){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),cljs.core.conj.call(null,path,k)], true);
}),foundation.app.tree.child_keys.call(null,children)));
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (tree,delta){var vec__48034 = delta;var _ = cljs.core.nth.call(null,vec__48034,0,null);var path = cljs.core.nth.call(null,vec__48034,1,null);var type = cljs.core.nth.call(null,vec__48034,2,null);var r_path = foundation.app.tree.real_path.call(null,path);var containing_path = cljs.core.butlast.call(null,r_path);var node_to_remove = cljs.core.get_in.call(null,tree,r_path);var children = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(node_to_remove);var type__$1 = (function (){var or__7439__auto__ = type;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return foundation.app.tree.node_type.call(null,children);
}
})();var delta__$1 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.conj.call(null,delta,type__$1):delta);if(cljs.core.not.call(null,node_to_remove))
{return tree;
} else
{if(cljs.core._EQ_.call(null,foundation.app.tree.node_type.call(null,children),type__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.call(null,delta__$1))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"node-type","node-type",-1220874786,null),new cljs.core.Symbol(null,"children","children",18995128,null)),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
var tree__$1 = ((!(cljs.core.empty_QMARK_.call(null,children)))?foundation.app.tree.remove_children.call(null,tree,path,children):tree);var tree__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(node_to_remove))?foundation.app.tree.apply_to_tree.call(null,tree__$1,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),path,new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(node_to_remove),null], true)):tree__$1);var tree__$3 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"transforms","transforms",3581801977).cljs$core$IFn$_invoke$arity$1(node_to_remove);if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree__$2,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2){
return (function (p__48035){var vec__48036 = p__48035;var k = cljs.core.nth.call(null,vec__48036,0,null);var v = cljs.core.nth.call(null,vec__48036,1,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),path,k], true);
});})(ks,temp__4090__auto__,tree__$1,tree__$2))
,ks));
} else
{return tree__$2;
}
})();var tree__$4 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"attrs","attrs",1107056660).cljs$core$IFn$_invoke$arity$1(node_to_remove);if(cljs.core.truth_(temp__4090__auto__))
{var ks = temp__4090__auto__;return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree__$3,cljs.core.map.call(null,((function (ks,temp__4090__auto__,tree__$1,tree__$2,tree__$3){
return (function (p__48037){var vec__48038 = p__48037;var k = cljs.core.nth.call(null,vec__48038,0,null);var v = cljs.core.nth.call(null,vec__48038,1,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"attr","attr",1016909155),path,k,v,null], true);
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
})());return cljs.core.update_in.call(null,new_tree,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,delta__$1);
}
}));
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"children-exit","children-exit",2219071390),(function (tree,delta){var vec__48039 = delta;var _ = cljs.core.nth.call(null,vec__48039,0,null);var path = cljs.core.nth.call(null,vec__48039,1,null);var r_path = foundation.app.tree.real_path.call(null,path);var c_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"children","children",2673430897));var children = cljs.core.get_in.call(null,tree,c_path);if(!(cljs.core.empty_QMARK_.call(null,children)))
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
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"value","value",1125876963),(function (tree,delta){var vec__48040 = delta;var op = cljs.core.nth.call(null,vec__48040,0,null);var path = cljs.core.nth.call(null,vec__48040,1,null);var o = cljs.core.nth.call(null,vec__48040,2,null);var n = cljs.core.nth.call(null,vec__48040,3,null);var r_path = foundation.app.tree.real_path.call(null,path);var v_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"value","value",1125876963));var old_value = cljs.core.get_in.call(null,tree,v_path);var vec__48041 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),4))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));var o__$1 = cljs.core.nth.call(null,vec__48041,0,null);var n__$1 = cljs.core.nth.call(null,vec__48041,1,null);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,foundation.app.tree.update_or_remove.call(null,tree__$1,v_path,n__$1),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,o__$1,n__$1], true));
}
}));
foundation.app.tree.remove_empty = (function remove_empty(tree,path){if(cljs.core.seq.call(null,cljs.core.get_in.call(null,tree,path)))
{return tree;
} else
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
}
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (tree,delta){var vec__48042 = delta;var op = cljs.core.nth.call(null,vec__48042,0,null);var path = cljs.core.nth.call(null,vec__48042,1,null);var k = cljs.core.nth.call(null,vec__48042,2,null);var o = cljs.core.nth.call(null,vec__48042,3,null);var n = cljs.core.nth.call(null,vec__48042,4,null);var r_path = foundation.app.tree.real_path.call(null,path);var a_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"attrs","attrs",1107056660),k);var old_value = cljs.core.get_in.call(null,tree,a_path);var vec__48043 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),5))?cljs.core.PersistentVector.fromArray([o,n], true):cljs.core.PersistentVector.fromArray([old_value,o], true));var o__$1 = cljs.core.nth.call(null,vec__48043,0,null);var n__$1 = cljs.core.nth.call(null,vec__48043,1,null);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if(cljs.core._EQ_.call(null,o__$1,old_value))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.call(null,delta)),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k),cljs.core.str(" is "),cljs.core.str(old_value),cljs.core.str(" but was expected to be "),cljs.core.str(o__$1),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"o","o",-1640531416,null),new cljs.core.Symbol(null,"old-value","old-value",-1203219452,null))))].join('')));
}
if(cljs.core._EQ_.call(null,o__$1,n__$1))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,foundation.app.tree.remove_empty.call(null,foundation.app.tree.update_or_remove.call(null,tree__$1,a_path,n__$1),cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"attrs","attrs",1107056660))),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op,path,k,o__$1,n__$1], true));
}
}));
foundation.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),msgs);
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),(function (tree,delta){var vec__48044 = delta;var _ = cljs.core.nth.call(null,vec__48044,0,null);var path = cljs.core.nth.call(null,vec__48044,1,null);var k = cljs.core.nth.call(null,vec__48044,2,null);var msgs = cljs.core.nth.call(null,vec__48044,3,null);var r_path = foundation.app.tree.real_path.call(null,path);var e_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"transforms","transforms",3581801977),k);var tree__$1 = foundation.app.tree.ensure_node_exists.call(null,tree,path);if(cljs.core.truth_((function (){var or__7439__auto__ = cljs.core.not.call(null,cljs.core.get_in.call(null,tree__$1,e_path));if(or__7439__auto__)
{return or__7439__auto__;
} else
{return foundation.app.tree.same_transform_QMARK_.call(null,tree__$1,e_path,msgs);
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k),cljs.core.str(" at path "),cljs.core.str(path),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",1405049013,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null))),cljs.core.list(new cljs.core.Symbol(null,"same-transform?","same-transform?",-319550509,null),new cljs.core.Symbol(null,"tree","tree",-1636962985,null),new cljs.core.Symbol(null,"e-path","e-path",1296004678,null),new cljs.core.Symbol(null,"msgs","msgs",-1637170485,null)))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__$1,e_path)))
{return tree__$1;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__$1,e_path,msgs),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,delta);
}
}));
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),(function (tree,delta){var vec__48045 = delta;var _ = cljs.core.nth.call(null,vec__48045,0,null);var path = cljs.core.nth.call(null,vec__48045,1,null);var k = cljs.core.nth.call(null,vec__48045,2,null);var r_path = foundation.app.tree.real_path.call(null,path);var transforms_path = cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var e_path = cljs.core.conj.call(null,transforms_path,k);if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path)))
{return foundation.app.tree.remove_empty.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,tree,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.conj,cljs.core.conj.call(null,delta,cljs.core.get_in.call(null,tree,e_path))),transforms_path,cljs.core.dissoc,k),transforms_path);
} else
{return tree;
}
}));
foundation.app.tree.node_deltas = (function node_deltas(p__48046,path){var map__48052 = p__48046;var map__48052__$1 = ((cljs.core.seq_QMARK_.call(null,map__48052))?cljs.core.apply.call(null,cljs.core.hash_map,map__48052):map__48052);var attrs = cljs.core.get.call(null,map__48052__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));var transforms = cljs.core.get.call(null,map__48052__$1,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var value = cljs.core.get.call(null,map__48052__$1,new cljs.core.Keyword(null,"value","value",1125876963));return cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),path,value], true)], true):null),(cljs.core.truth_(attrs)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__48053){var vec__48054 = p__48053;var k = cljs.core.nth.call(null,vec__48054,0,null);var v = cljs.core.nth.call(null,vec__48054,1,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"attr","attr",1016909155),path,k,v], true);
}),attrs)):null),(cljs.core.truth_(transforms)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__48055){var vec__48056 = p__48055;var k = cljs.core.nth.call(null,vec__48056,0,null);var v = cljs.core.nth.call(null,vec__48056,1,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),path,k,v], true);
}),transforms)):null));
});
foundation.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){var node_keys = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"transforms","transforms",3581801977),null,new cljs.core.Keyword(null,"attrs","attrs",1107056660),null,new cljs.core.Keyword(null,"value","value",1125876963),null], true);var node_QMARK_ = (cljs.core.map_QMARK_.call(null,tree)) && (!(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tree)),node_keys))));var children = ((node_QMARK_)?(function (){var or__7439__auto__ = new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(tree);if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})():tree);var children_type = foundation.app.tree.node_type.call(null,children);var node_deltas = ((node_QMARK_)?foundation.app.tree.node_deltas.call(null,tree,path):null);return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),path,children_type], true)], true),node_deltas,cljs.core.mapcat.call(null,(function (k){return map__GT_deltas.call(null,cljs.core.get_in.call(null,tree,((node_QMARK_)?cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"children","children",2673430897),k], true):cljs.core.PersistentVector.fromArray([k], true))),cljs.core.conj.call(null,path,k));
}),((cljs.core._EQ_.call(null,children_type,new cljs.core.Keyword(null,"map","map",1014012110)))?cljs.core.keys.call(null,children):((cljs.core._EQ_.call(null,children_type,new cljs.core.Keyword(null,"vector","vector",4488484021)))?cljs.core.range.call(null,cljs.core.count.call(null,children)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.PersistentVector.EMPTY:null)))));
});
foundation.app.tree.expand_map = (function expand_map(delta){if(cljs.core.map_QMARK_.call(null,delta))
{return foundation.app.tree.map__GT_deltas.call(null,delta,cljs.core.PersistentVector.EMPTY);
} else
{return cljs.core.PersistentVector.fromArray([delta], true);
}
});
foundation.app.tree.expand_maps = (function expand_maps(deltas){return cljs.core.mapcat.call(null,foundation.app.tree.expand_map,deltas);
});
/**
* Update the tree and return the actual deltas which were used to
* update the tree. A single delta can be expanded into multiple
* deltas.
*/
foundation.app.tree.update_tree = (function update_tree(tree,deltas){return cljs.core.reduce.call(null,foundation.app.tree.apply_to_tree,tree,deltas);
});
cljs.core._add_method.call(null,foundation.app.tree.apply_to_tree,new cljs.core.Keyword(null,"function","function",2394842954),(function (tree,f){var deltas = f.call(null,tree);return foundation.app.tree.update_tree.call(null,tree,deltas);
}));
foundation.app.tree.next_eid_atom = cljs.core.atom.call(null,0);
foundation.app.tree.next_eid = (function next_eid(){return cljs.core.swap_BANG_.call(null,foundation.app.tree.next_eid_atom,cljs.core.inc);
});
foundation.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){var transform_id = foundation.app.tree.next_eid.call(null);return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("t","id","t/id",1013914942),transform_id,new cljs.core.Keyword("t","transform-name","t/transform-name",3589571855),transform_name,new cljs.core.Keyword("t","node","t/node",1017298533),node_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","transform","t/transform",2066578415)], true)], true),cljs.core.map.call(null,(function (m){return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("t","id","t/id",1013914942),foundation.app.tree.next_eid.call(null),new cljs.core.Keyword("t","transform","t/transform",2066578415),transform_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","message","t/message",1968836706)], true));
}),msgs));
});
foundation.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){return cljs.core.reduce.call(null,(function (acc,p__48059){var vec__48060 = p__48059;var transform_name = cljs.core.nth.call(null,vec__48060,0,null);var msgs = cljs.core.nth.call(null,vec__48060,1,null);return cljs.core.concat.call(null,acc,foundation.app.tree.transform__GT_entities.call(null,transform_name,msgs,node_id));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
foundation.app.tree.attrs__GT_entities = (function attrs__GT_entities(attrs,node_id){if(!(cljs.core.empty_QMARK_.call(null,attrs)))
{return cljs.core.PersistentVector.fromArray([cljs.core.merge.call(null,attrs,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("t","id","t/id",1013914942),foundation.app.tree.next_eid.call(null),new cljs.core.Keyword("t","node","t/node",1017298533),node_id,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","attrs","t/attrs",1107064005)], true))], true);
} else
{return null;
}
});
foundation.app.tree.node__GT_entities = (function node__GT_entities(node,path,parent_id,node_id){var map__48062 = node;var map__48062__$1 = ((cljs.core.seq_QMARK_.call(null,map__48062))?cljs.core.apply.call(null,cljs.core.hash_map,map__48062):map__48062);var transforms = cljs.core.get.call(null,map__48062__$1,new cljs.core.Keyword(null,"transforms","transforms",3581801977));var attrs = cljs.core.get.call(null,map__48062__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));var value = cljs.core.get.call(null,map__48062__$1,new cljs.core.Keyword(null,"value","value",1125876963));var node_e = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("t","id","t/id",1013914942),node_id,new cljs.core.Keyword("t","path","t/path",1017345096),path,new cljs.core.Keyword("t","type","t/type",1017487389),new cljs.core.Keyword("t","node","t/node",1017298533),new cljs.core.Keyword("t","segment","t/segment",2987634742),cljs.core.last.call(null,path)], true);var node_e__$1 = (cljs.core.truth_(parent_id)?cljs.core.assoc.call(null,node_e,new cljs.core.Keyword("t","parent","t/parent",4313455021),parent_id):node_e);var node_e__$2 = (cljs.core.truth_(value)?cljs.core.assoc.call(null,node_e__$1,new cljs.core.Keyword("t","value","t/value",1125884396),value):node_e__$1);var attrs_es = foundation.app.tree.attrs__GT_entities.call(null,attrs,node_id);var transform_es = foundation.app.tree.transforms__GT_entities.call(null,transforms,node_id);return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([node_e__$2], true),attrs_es,transform_es);
});
foundation.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){var map__48064 = tree;var map__48064__$1 = ((cljs.core.seq_QMARK_.call(null,map__48064))?cljs.core.apply.call(null,cljs.core.hash_map,map__48064):map__48064);var children = cljs.core.get.call(null,map__48064__$1,new cljs.core.Keyword(null,"children","children",2673430897));var ks = foundation.app.tree.child_keys.call(null,children);var node_id = foundation.app.tree.next_eid.call(null);var node_tuples = foundation.app.tree.node__GT_entities.call(null,tree,path,parent_id,node_id);return cljs.core.concat.call(null,node_tuples,cljs.core.mapcat.call(null,(function (k){return tree__GT_entities.call(null,cljs.core.get_in.call(null,tree,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"children","children",2673430897),k], true)),cljs.core.conj.call(null,path,k),node_id);
}),ks));
});
foundation.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){var id = new cljs.core.Keyword("t","id","t/id",1013914942).cljs$core$IFn$_invoke$arity$1(e);return cljs.core.map.call(null,(function (p__48067){var vec__48068 = p__48067;var k = cljs.core.nth.call(null,vec__48068,0,null);var v = cljs.core.nth.call(null,vec__48068,1,null);return cljs.core.PersistentVector.fromArray([id,k,v], true);
}),cljs.core.dissoc.call(null,e,new cljs.core.Keyword("t","id","t/id",1013914942)));
});
foundation.app.tree.entities__GT_tuples = (function entities__GT_tuples(entities){return cljs.core.mapcat.call(null,foundation.app.tree.entity__GT_tuples,entities);
});
foundation.app.tree.tree__GT_tuples = (function tree__GT_tuples(tree){if(cljs.core.truth_(new cljs.core.Keyword(null,"tree","tree",1017472784).cljs$core$IFn$_invoke$arity$1(tree)))
{return foundation.app.tree.entities__GT_tuples.call(null,foundation.app.tree.tree__GT_entities.call(null,new cljs.core.Keyword(null,"tree","tree",1017472784).cljs$core$IFn$_invoke$arity$1(tree),cljs.core.PersistentVector.EMPTY,null));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.tree.Tree = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7989__auto__){var self__ = this;
var this__7989__auto____$1 = this;var h__7843__auto__ = self__.__hash;if(!((h__7843__auto__ == null)))
{return h__7843__auto__;
} else
{var h__7843__auto____$1 = cljs.core.hash_imap.call(null,this__7989__auto____$1);self__.__hash = h__7843__auto____$1;
return h__7843__auto____$1;
}
});
foundation.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7994__auto__,k__7995__auto__){var self__ = this;
var this__7994__auto____$1 = this;return cljs.core._lookup.call(null,this__7994__auto____$1,k__7995__auto__,null);
});
foundation.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7996__auto__,k48070,else__7997__auto__){var self__ = this;
var this__7996__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k48070,else__7997__auto__);
} else
{return null;
}
});
foundation.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8001__auto__,k__8002__auto__,G__48069){var self__ = this;
var this__8001__auto____$1 = this;var pred__48072 = cljs.core.keyword_identical_QMARK_;var expr__48073 = k__8002__auto__;return (new foundation.app.tree.Tree(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8002__auto__,G__48069),null));
});
foundation.app.tree.Tree.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8008__auto__,writer__8009__auto__,opts__8010__auto__){var self__ = this;
var this__8008__auto____$1 = this;var pr_pair__8011__auto__ = (function (keyval__8012__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8009__auto__,cljs.core.pr_writer,""," ","",opts__8010__auto__,keyval__8012__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8009__auto__,pr_pair__8011__auto__,"#foundation.app.tree.Tree{",", ","}",opts__8010__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7999__auto__,entry__8000__auto__){var self__ = this;
var this__7999__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8000__auto__))
{return cljs.core._assoc.call(null,this__7999__auto____$1,cljs.core._nth.call(null,entry__8000__auto__,0),cljs.core._nth.call(null,entry__8000__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7999__auto____$1,entry__8000__auto__);
}
});
foundation.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8006__auto__){var self__ = this;
var this__8006__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7998__auto__){var self__ = this;
var this__7998__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7990__auto__,other__7991__auto__){var self__ = this;
var this__7990__auto____$1 = this;if(cljs.core.truth_((function (){var and__7430__auto__ = other__7991__auto__;if(cljs.core.truth_(and__7430__auto__))
{var and__7430__auto____$1 = (this__7990__auto____$1.constructor === other__7991__auto__.constructor);if(and__7430__auto____$1)
{return cljs.core.equiv_map.call(null,this__7990__auto____$1,other__7991__auto__);
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7993__auto__,G__48069){var self__ = this;
var this__7993__auto____$1 = this;return (new foundation.app.tree.Tree(G__48069,self__.__extmap,self__.__hash));
});
foundation.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7992__auto__){var self__ = this;
var this__7992__auto____$1 = this;return self__.__meta;
});
foundation.app.tree.Tree.prototype.foundation$app$query$TupleSource$ = true;
foundation.app.tree.Tree.prototype.foundation$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.tree.tree__GT_tuples.call(null,this$__$1);
});
foundation.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8003__auto__,k__8004__auto__){var self__ = this;
var this__8003__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8004__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8003__auto____$1),self__.__meta),k__8004__auto__);
} else
{return (new foundation.app.tree.Tree(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8004__auto__)),null));
}
});
foundation.app.tree.Tree.cljs$lang$type = true;
foundation.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__8028__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.tree/Tree");
});
foundation.app.tree.Tree.cljs$lang$ctorPrWriter = (function (this__8028__auto__,writer__8029__auto__){return cljs.core._write.call(null,writer__8029__auto__,"foundation.app.tree/Tree");
});
foundation.app.tree.__GT_Tree = (function __GT_Tree(){return (new foundation.app.tree.Tree());
});
foundation.app.tree.map__GT_Tree = (function map__GT_Tree(G__48071){return (new foundation.app.tree.Tree(null,cljs.core.dissoc.call(null,G__48071)));
});
foundation.app.tree.delete_deltas = (function delete_deltas(t,deltas){return cljs.core.reduce.call(null,(function (d,k){if((k < t))
{foundation.app.log.debug.call(null,new cljs.core.Keyword(null,"gc","gc",1013907534),[cljs.core.str("GC: Deleting "),cljs.core.str(cljs.core.count.call(null,cljs.core.get.call(null,d,k))),cljs.core.str(" deltas at time "),cljs.core.str(k)].join(''));
return cljs.core.dissoc.call(null,d,k);
} else
{return d;
}
}),deltas,cljs.core.keys.call(null,deltas));
});
foundation.app.tree.gc = (function gc(state){if(cljs.core.truth_(foundation.app.tree._STAR_gc_deltas_STAR_))
{foundation.app.log.debug.call(null,new cljs.core.Keyword(null,"gc","gc",1013907534),"GC: Running...");
var t = new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(state);var delete_t = (t - 2);foundation.app.log.debug.call(null,new cljs.core.Keyword(null,"gc","gc",1013907534),[cljs.core.str("GC: Deleting t < "),cljs.core.str(delete_t)].join(''));
foundation.app.log.debug.call(null,new cljs.core.Keyword(null,"gc","gc",1013907534),[cljs.core.str("GC: There are currently "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(state))))),cljs.core.str(" deltas.")].join(''));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"deltas","deltas",3973426989)], true),cljs.core.partial.call(null,foundation.app.tree.delete_deltas,delete_t));
} else
{foundation.app.log.debug.call(null,new cljs.core.Keyword(null,"gc","gc",1013907534),[cljs.core.str("GC is turned off. There are "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(state))))),cljs.core.str(" accumulated deltas")].join(''));
return state;
}
});
/**
* Given an old tree and a sequence of deltas, return an updated tree.
* The deltas can be a sequence of tuples or a map which can be
* expanded into a sequence of tuples.
* 
* The keyword :commit can be inserted into the stream of deltas to force
* a commit at a specific point.
*/
foundation.app.tree.apply_deltas = (function apply_deltas(old,deltas){var map__48077 = old;var map__48077__$1 = ((cljs.core.seq_QMARK_.call(null,map__48077))?cljs.core.apply.call(null,cljs.core.hash_map,map__48077):map__48077);var t = cljs.core.get.call(null,map__48077__$1,new cljs.core.Keyword(null,"t","t",1013904358));var seq = cljs.core.get.call(null,map__48077__$1,new cljs.core.Keyword(null,"seq","seq",1014018001));var deltas__$1 = foundation.app.tree.expand_maps.call(null,deltas);var map__48078 = foundation.app.tree.update_tree.call(null,old,deltas__$1);var map__48078__$1 = ((cljs.core.seq_QMARK_.call(null,map__48078))?cljs.core.apply.call(null,cljs.core.hash_map,map__48078):map__48078);var this_tx = cljs.core.get.call(null,map__48078__$1,new cljs.core.Keyword(null,"this-tx","this-tx",3962990469));var tree = cljs.core.get.call(null,map__48078__$1,new cljs.core.Keyword(null,"tree","tree",1017472784));var deltas__$2 = cljs.core.map.call(null,((function (map__48077,map__48077__$1,t,seq,deltas__$1,map__48078,map__48078__$1,this_tx,tree){
return (function (d,s){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"delta","delta",1109372714),d,new cljs.core.Keyword(null,"t","t",1013904358),t,new cljs.core.Keyword(null,"seq","seq",1014018001),s], true);
});})(map__48077,map__48077__$1,t,seq,deltas__$1,map__48078,map__48078__$1,this_tx,tree))
,this_tx,cljs.core.iterate.call(null,cljs.core.inc,seq));return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,old,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"deltas","deltas",3973426989),t], true),deltas__$2),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this-tx","this-tx",3962990469)], true),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"seq","seq",1014018001)], true),cljs.core._PLUS_,cljs.core.count.call(null,deltas__$2)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tree","tree",1017472784)], true),tree),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"t","t",1013904358)], true),cljs.core.inc);
});
foundation.app.tree.value = (function value(tree,path){var r_path = foundation.app.tree.real_path.call(null,path);return cljs.core.get_in.call(null,tree,cljs.core.conj.call(null,r_path,new cljs.core.Keyword(null,"value","value",1125876963)));
});
foundation.app.tree.new_app_model = foundation.app.tree.map__GT_Tree.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"deltas","deltas",3973426989),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"this-tx","this-tx",3962990469),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tree","tree",1017472784),null,new cljs.core.Keyword(null,"seq","seq",1014018001),0,new cljs.core.Keyword(null,"t","t",1013904358),0], true));
/**
* Get the current tree time value.
*/
foundation.app.tree.t = (function t(tree){return new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(tree);
});
/**
* Get all deltas since time t, inclusive.
*/
foundation.app.tree.since_t = (function since_t(tree,t){var ts = cljs.core.range.call(null,t,new cljs.core.Keyword(null,"t","t",1013904358).cljs$core$IFn$_invoke$arity$1(tree));return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"delta","delta",1109372714),cljs.core.mapcat.call(null,(function (p1__48079_SHARP_){return cljs.core.get.call(null,new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(tree),p1__48079_SHARP_);
}),ts)));
});
