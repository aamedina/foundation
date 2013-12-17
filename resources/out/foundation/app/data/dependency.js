// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.dependency');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.data.dependency.Number = Number;
foundation.app.data.dependency.DependencyGraph = (function (){var obj360047 = {};return obj360047;
})();
foundation.app.data.dependency.immediate_dependencies = (function immediate_dependencies(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraph$immediate_dependencies$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.immediate_dependencies[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.immediate_dependencies["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.immediate_dependents = (function immediate_dependents(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraph$immediate_dependents$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.immediate_dependents[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.immediate_dependents["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.transitive_dependencies = (function transitive_dependencies(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraph$transitive_dependencies$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.transitive_dependencies[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.transitive_dependencies["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.transitive_dependents = (function transitive_dependents(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraph$transitive_dependents$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.transitive_dependents[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.transitive_dependents["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.nodes = (function nodes(graph){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraph$nodes$arity$1;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraph$nodes$arity$1(graph);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.nodes[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.nodes["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
})().call(null,graph);
}
});
foundation.app.data.dependency.DependencyGraphUpdate = (function (){var obj360049 = {};return obj360049;
})();
foundation.app.data.dependency.depend = (function depend(graph,node,dep){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$depend$arity$3;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.depend[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.depend["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
})().call(null,graph,node,dep);
}
});
foundation.app.data.dependency.remove_edge = (function remove_edge(graph,node,dep){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_edge$arity$3;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.remove_edge[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.remove_edge["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
})().call(null,graph,node,dep);
}
});
foundation.app.data.dependency.remove_all = (function remove_all(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_all$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.remove_all[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.remove_all["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.remove_node = (function remove_node(graph,node){if((function (){var and__13967__auto__ = graph;if(and__13967__auto__)
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_node$arity$2;
} else
{return and__13967__auto__;
}
})())
{return graph.foundation$app$data$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else
{var x__14587__auto__ = (((graph == null))?null:graph);return (function (){var or__13979__auto__ = (foundation.app.data.dependency.remove_node[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.dependency.remove_node["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
})().call(null,graph,node);
}
});
foundation.app.data.dependency.remove_from_map = (function remove_from_map(amap,x){return cljs.core.reduce.call(null,(function (m,p__360052){var vec__360053 = p__360052;var k = cljs.core.nth.call(null,vec__360053,0,null);var vs = cljs.core.nth.call(null,vec__360053,1,null);return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
* Recursively expands the set of dependency relationships starting
* at (get m x)
*/
foundation.app.data.dependency.transitive = (function transitive(m,x){return cljs.core.reduce.call(null,(function (s,k){return clojure.set.union.call(null,s,transitive.call(null,m,k));
}),cljs.core.get.call(null,m,x),cljs.core.get.call(null,m,x));
});
foundation.app.data.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
*/
foundation.app.data.dependency.MapDependencyGraph = (function (dependencies,dependents){
this.dependencies = dependencies;
this.dependents = dependents;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
foundation.app.data.dependency.MapDependencyGraph.cljs$lang$type = true;
foundation.app.data.dependency.MapDependencyGraph.cljs$lang$ctorStr = "foundation.app.data.dependency/MapDependencyGraph";
foundation.app.data.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"foundation.app.data.dependency/MapDependencyGraph");
});
foundation.app.data.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,opts,writer){var self__ = this;
var x__$1 = this;return cljs.core._pr_writer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),x__$1.dependencies,new cljs.core.Keyword(null,"dependents","dependents",987613382),x__$1.dependents], null),opts,writer);
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraphUpdate$ = true;
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){var self__ = this;
var graph__$1 = this;if(cljs.core.truth_((function (){var or__13979__auto__ = cljs.core._EQ_.call(null,node,dep);if(or__13979__auto__)
{return or__13979__auto__;
} else
{return foundation.app.data.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})()))
{throw (new Error([cljs.core.str("Circular dependency between "),cljs.core.str(cljs.core.pr_str.call(null,node)),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.call(null,dep))].join('')));
} else
{}
return (new foundation.app.data.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),foundation.app.data.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),foundation.app.data.dependency.set_conj,node)));
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){var self__ = this;
var graph__$1 = this;return (new foundation.app.data.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node)));
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return (new foundation.app.data.dependency.MapDependencyGraph(foundation.app.data.dependency.remove_from_map.call(null,self__.dependencies,node),foundation.app.data.dependency.remove_from_map.call(null,self__.dependents,node)));
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return (new foundation.app.data.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents));
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$ = true;
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return foundation.app.data.dependency.transitive.call(null,self__.dependencies,node);
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){var self__ = this;
var graph__$1 = this;return foundation.app.data.dependency.transitive.call(null,self__.dependents,node);
});
foundation.app.data.dependency.MapDependencyGraph.prototype.foundation$app$data$dependency$DependencyGraph$nodes$arity$1 = (function (graph){var self__ = this;
var graph__$1 = this;return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
});
foundation.app.data.dependency.__GT_MapDependencyGraph = (function __GT_MapDependencyGraph(dependencies,dependents){return (new foundation.app.data.dependency.MapDependencyGraph(dependencies,dependents));
});
/**
* Returns a new, empty, dependency graph. A graph contains nodes,
* which may be any type which supports Clojure's equality semantics.
* Edges are represented as pairs of nodes. An edge between two nodes X
* and Y indicates that X depends on Y or, conversely, that Y is a
* dependent of X. A dependency graph may not have cycles.
*/
foundation.app.data.dependency.graph = (function graph(){return (new foundation.app.data.dependency.MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* True if x is directly or transitively dependent on y.
*/
foundation.app.data.dependency.depends_QMARK_ = (function depends_QMARK_(graph,x,y){return cljs.core.contains_QMARK_.call(null,foundation.app.data.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
* True if y is a direct or transitive dependent of x.
*/
foundation.app.data.dependency.dependent_QMARK_ = (function dependent_QMARK_(graph,x,y){return cljs.core.contains_QMARK_.call(null,foundation.app.data.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
* Returns a topologically-sorted list of nodes in graph.
*/
foundation.app.data.dependency.topo_sort = (function topo_sort(graph){var sorted = cljs.core.List.EMPTY;var g = graph;var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__360054_SHARP_){return cljs.core.empty_QMARK_.call(null,foundation.app.data.dependency.immediate_dependents.call(null,graph,p1__360054_SHARP_));
});})(sorted,g))
,foundation.app.data.dependency.nodes.call(null,graph)));while(true){
if(cljs.core.empty_QMARK_.call(null,todo))
{return sorted;
} else
{var vec__360057 = cljs.core.seq.call(null,todo);var node = cljs.core.nth.call(null,vec__360057,0,null);var more = cljs.core.nthnext.call(null,vec__360057,1);var deps = foundation.app.data.dependency.immediate_dependencies.call(null,g,node);var vec__360058 = (function (){var deps__$1 = deps;var g__$1 = g;var add = cljs.core.PersistentHashSet.EMPTY;while(true){
if(cljs.core.seq.call(null,deps__$1))
{var d = cljs.core.first.call(null,deps__$1);var g_SINGLEQUOTE_ = foundation.app.data.dependency.remove_edge.call(null,g__$1,node,d);if(cljs.core.empty_QMARK_.call(null,foundation.app.data.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d)))
{{
var G__360059 = cljs.core.rest.call(null,deps__$1);
var G__360060 = g_SINGLEQUOTE_;
var G__360061 = cljs.core.conj.call(null,add,d);
deps__$1 = G__360059;
g__$1 = G__360060;
add = G__360061;
continue;
}
} else
{{
var G__360062 = cljs.core.rest.call(null,deps__$1);
var G__360063 = g_SINGLEQUOTE_;
var G__360064 = add;
deps__$1 = G__360062;
g__$1 = G__360063;
add = G__360064;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();var add = cljs.core.nth.call(null,vec__360058,0,null);var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__360058,1,null);{
var G__360065 = cljs.core.cons.call(null,node,sorted);
var G__360066 = foundation.app.data.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__360067 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__360065;
g = G__360066;
todo = G__360067;
continue;
}
}
break;
}
});
/**
* Returns a comparator fn which produces a topological sort based on
* the dependencies in graph. Nodes not present in the graph will sort
* after nodes in the graph.
*/
foundation.app.data.dependency.topo_comparator = (function topo_comparator(graph){var pos = cljs.core.zipmap.call(null,foundation.app.data.dependency.topo_sort.call(null,graph),cljs.core.range.call(null));return (function (a,b){return cljs.core.compare.call(null,cljs.core.get.call(null,pos,a,Number.MAX_VALUE),cljs.core.get.call(null,pos,b,Number.MAX_VALUE));
});
});

//# sourceMappingURL=dependency.js.map