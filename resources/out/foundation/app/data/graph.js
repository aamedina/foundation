// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.graph');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
* @param {*} nodes
* @param {*} neighbors
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.data.graph.DirectedGraph = (function (nodes,neighbors,__meta,__extmap){
this.nodes = nodes;
this.neighbors = neighbors;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14380__auto__){var self__ = this;
var this__14380__auto____$1 = this;var h__14234__auto__ = self__.__hash;if(!((h__14234__auto__ == null)))
{return h__14234__auto__;
} else
{var h__14234__auto____$1 = cljs.core.hash_imap.call(null,this__14380__auto____$1);self__.__hash = h__14234__auto____$1;
return h__14234__auto____$1;
}
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14385__auto__,k__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;return cljs.core._lookup.call(null,this__14385__auto____$1,k__14386__auto__,null);
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k323534,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k323534,new cljs.core.Keyword(null,"nodes","nodes",1118897699)))
{return self__.nodes;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k323534,new cljs.core.Keyword(null,"neighbors","neighbors",1439078195)))
{return self__.neighbors;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k323534,else__14388__auto__);
} else
{return null;
}
}
}
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__323533){var self__ = this;
var this__14392__auto____$1 = this;var pred__323536 = cljs.core.keyword_identical_QMARK_;var expr__323537 = k__14393__auto__;if(cljs.core.truth_(pred__323536.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699),expr__323537)))
{return (new foundation.app.data.graph.DirectedGraph(G__323533,self__.neighbors,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__323536.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1439078195),expr__323537)))
{return (new foundation.app.data.graph.DirectedGraph(self__.nodes,G__323533,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.data.graph.DirectedGraph(self__.nodes,self__.neighbors,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__323533),null));
}
}
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14399__auto__,writer__14400__auto__,opts__14401__auto__){var self__ = this;
var this__14399__auto____$1 = this;var pr_pair__14402__auto__ = (function (keyval__14403__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,cljs.core.pr_writer,""," ","",opts__14401__auto__,keyval__14403__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,pr_pair__14402__auto__,"#foundation.app.data.graph.DirectedGraph{",", ","}",opts__14401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",1118897699),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"neighbors","neighbors",1439078195),self__.neighbors],null))], null),self__.__extmap));
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14390__auto__,entry__14391__auto__){var self__ = this;
var this__14390__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14391__auto__))
{return cljs.core._assoc.call(null,this__14390__auto____$1,cljs.core._nth.call(null,entry__14391__auto__,0),cljs.core._nth.call(null,entry__14391__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14390__auto____$1,entry__14391__auto__);
}
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14397__auto__){var self__ = this;
var this__14397__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",1118897699),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"neighbors","neighbors",1439078195),self__.neighbors],null))], null),self__.__extmap));
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14389__auto__){var self__ = this;
var this__14389__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14381__auto__,other__14382__auto__){var self__ = this;
var this__14381__auto____$1 = this;if(cljs.core.truth_((function (){var and__13811__auto__ = other__14382__auto__;if(cljs.core.truth_(and__13811__auto__))
{return ((this__14381__auto____$1.constructor === other__14382__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14381__auto____$1,other__14382__auto__));
} else
{return and__13811__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__323533){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.data.graph.DirectedGraph(self__.nodes,self__.neighbors,G__323533,self__.__extmap,self__.__hash));
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14383__auto__){var self__ = this;
var this__14383__auto____$1 = this;return self__.__meta;
});
foundation.app.data.graph.DirectedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14394__auto__,k__14395__auto__){var self__ = this;
var this__14394__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"neighbors","neighbors",1439078195),null,new cljs.core.Keyword(null,"nodes","nodes",1118897699),null], null), null),k__14395__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14394__auto____$1),self__.__meta),k__14395__auto__);
} else
{return (new foundation.app.data.graph.DirectedGraph(self__.nodes,self__.neighbors,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14395__auto__)),null));
}
});
foundation.app.data.graph.DirectedGraph.cljs$lang$type = true;
foundation.app.data.graph.DirectedGraph.cljs$lang$ctorPrSeq = (function (this__14419__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.data.graph/DirectedGraph");
});
foundation.app.data.graph.DirectedGraph.cljs$lang$ctorPrWriter = (function (this__14419__auto__,writer__14420__auto__){return cljs.core._write.call(null,writer__14420__auto__,"foundation.app.data.graph/DirectedGraph");
});
foundation.app.data.graph.__GT_DirectedGraph = (function __GT_DirectedGraph(nodes,neighbors){return (new foundation.app.data.graph.DirectedGraph(nodes,neighbors));
});
foundation.app.data.graph.map__GT_DirectedGraph = (function map__GT_DirectedGraph(G__323535){return (new foundation.app.data.graph.DirectedGraph(new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(G__323535),new cljs.core.Keyword(null,"neighbors","neighbors",1439078195).cljs$core$IFn$_invoke$arity$1(G__323535),null,cljs.core.dissoc.call(null,G__323535,new cljs.core.Keyword(null,"nodes","nodes",1118897699),new cljs.core.Keyword(null,"neighbors","neighbors",1439078195))));
});
/**
* Get the neighbors of a node.
*/
foundation.app.data.graph.get_neighbors = (function get_neighbors(g,n){return new cljs.core.Keyword(null,"neighbors","neighbors",1439078195).cljs$core$IFn$_invoke$arity$1(g).call(null,n);
});
/**
* Given a directed graph, return another directed graph with the
* order of the edges reversed.
*/
foundation.app.data.graph.reverse_graph = (function reverse_graph(g){var op = (function (rna,idx){var ns = foundation.app.data.graph.get_neighbors.call(null,g,idx);var am = ((function (ns){
return (function (m,val){return cljs.core.assoc.call(null,m,val,cljs.core.conj.call(null,cljs.core.get.call(null,m,val,cljs.core.PersistentHashSet.EMPTY),idx));
});})(ns))
;return cljs.core.reduce.call(null,am,rna,ns);
});var rn = cljs.core.reduce.call(null,op,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g));return (new foundation.app.data.graph.DirectedGraph(new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g),rn));
});
/**
* For each node n, add the edge n->n if not already present.
*/
foundation.app.data.graph.add_loops = (function add_loops(g){return (new foundation.app.data.graph.DirectedGraph(new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.conj.call(null,cljs.core.set.call(null,foundation.app.data.graph.get_neighbors.call(null,g,n)),n)], null);
}),new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g)))));
});
/**
* For each node n, remove any edges n->n.
*/
foundation.app.data.graph.remove_loops = (function remove_loops(g){return (new foundation.app.data.graph.DirectedGraph(new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.disj.call(null,cljs.core.set.call(null,foundation.app.data.graph.get_neighbors.call(null,g,n)),n)], null);
}),new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g)))));
});
/**
* Return a lazy sequence of the nodes of a graph starting a node n.
* Optionally,
* provide a set of visited notes (v) and a collection of nodes to
* visit (ns).
*/
foundation.app.data.graph.lazy_walk = (function() {
var lazy_walk = null;
var lazy_walk__2 = (function (g,n){return lazy_walk.call(null,g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.PersistentHashSet.EMPTY);
});
var lazy_walk__3 = (function (g,ns,v){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq.call(null,cljs.core.drop_while.call(null,v,ns));var n = cljs.core.first.call(null,s);var ns__$1 = cljs.core.rest.call(null,s);if(s)
{return cljs.core.cons.call(null,n,lazy_walk.call(null,g,cljs.core.concat.call(null,foundation.app.data.graph.get_neighbors.call(null,g,n),ns__$1),cljs.core.conj.call(null,v,n)));
} else
{return null;
}
}),null,null));
});
lazy_walk = function(g,ns,v){
switch(arguments.length){
case 2:
return lazy_walk__2.call(this,g,ns);
case 3:
return lazy_walk__3.call(this,g,ns,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_walk.cljs$core$IFn$_invoke$arity$2 = lazy_walk__2;
lazy_walk.cljs$core$IFn$_invoke$arity$3 = lazy_walk__3;
return lazy_walk;
})()
;
/**
* Returns the transitive closure of a graph.
* The neighbors are lazily computed.
* 
* Note: some version of this algorithm return all edges a->a
* regardless of whether such loops exist in the original graph.  This
* version does not.  Loops will be included only if produced by
* cycles in the graph.  If you have code that depends on such
* behavior, call (-> g transitive-closure add-loops)
*/
foundation.app.data.graph.transitive_closure = (function transitive_closure(g){var nns = (function (n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return foundation.app.data.graph.lazy_walk.call(null,g,foundation.app.data.graph.get_neighbors.call(null,g,n),cljs.core.PersistentHashSet.EMPTY);
})))], null);
});var nbs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,nns,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g)));return (new foundation.app.data.graph.DirectedGraph(new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g),(function (n){return cljs.core.force.call(null,nbs.call(null,n));
})));
});
/**
* Starting at node n, perform a post-ordered walk.
*/
foundation.app.data.graph.post_ordered_visit = (function post_ordered_visit(g,n,p__323539){var vec__323542 = p__323539;var visited = cljs.core.nth.call(null,vec__323542,0,null);var acc = cljs.core.nth.call(null,vec__323542,1,null);var state = vec__323542;if(cljs.core.truth_(visited.call(null,n)))
{return state;
} else
{var vec__323543 = cljs.core.reduce.call(null,(function (st,nd){return post_ordered_visit.call(null,g,nd,st);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,visited,n),acc], null),foundation.app.data.graph.get_neighbors.call(null,g,n));var v2 = cljs.core.nth.call(null,vec__323543,0,null);var acc2 = cljs.core.nth.call(null,vec__323543,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v2,cljs.core.conj.call(null,acc2,n)], null);
}
});
/**
* Return a sequence of indexes of a post-ordered walk of the graph.
*/
foundation.app.data.graph.post_ordered_nodes = (function post_ordered_nodes(g){return cljs.core.fnext.call(null,cljs.core.reduce.call(null,(function (p1__323545_SHARP_,p2__323544_SHARP_){return foundation.app.data.graph.post_ordered_visit.call(null,g,p2__323544_SHARP_,p1__323545_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g)));
});
/**
* Returns, as a sequence of sets, the strongly connected components
* of g.
*/
foundation.app.data.graph.scc = (function scc(g){var po = cljs.core.reverse.call(null,foundation.app.data.graph.post_ordered_nodes.call(null,g));var rev = foundation.app.data.graph.reverse_graph.call(null,g);var step = ((function (po,rev){
return (function (stack,visited,acc){while(true){
if(cljs.core.empty_QMARK_.call(null,stack))
{return acc;
} else
{var vec__323547 = foundation.app.data.graph.post_ordered_visit.call(null,rev,cljs.core.first.call(null,stack),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [visited,cljs.core.PersistentHashSet.EMPTY], null));var nv = cljs.core.nth.call(null,vec__323547,0,null);var comp = cljs.core.nth.call(null,vec__323547,1,null);var ns = cljs.core.remove.call(null,nv,stack);{
var G__323548 = ns;
var G__323549 = nv;
var G__323550 = cljs.core.conj.call(null,acc,comp);
stack = G__323548;
visited = G__323549;
acc = G__323550;
continue;
}
}
break;
}
});})(po,rev))
;return step.call(null,po,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
* Given a graph, perhaps with cycles, return a reduced graph that is acyclic.
* Each node in the new graph will be a set of nodes from the old.
* These sets are the strongly connected components.  Each edge will
* be the union of the corresponding edges of the prior graph.
*/
foundation.app.data.graph.component_graph = (function() {
var component_graph = null;
var component_graph__1 = (function (g){return component_graph.call(null,g,foundation.app.data.graph.scc.call(null,g));
});
var component_graph__2 = (function (g,sccs){var find_node_set = (function (n){return cljs.core.some.call(null,(function (p1__323551_SHARP_){if(cljs.core.truth_(p1__323551_SHARP_.call(null,n)))
{return p1__323551_SHARP_;
} else
{return null;
}
}),sccs);
});var find_neighbors = ((function (find_node_set){
return (function (ns){var nbs1 = cljs.core.map.call(null,cljs.core.partial.call(null,foundation.app.data.graph.get_neighbors,g),ns);var nbs2 = cljs.core.map.call(null,cljs.core.set,nbs1);var nbs3 = cljs.core.apply.call(null,clojure.set.union,nbs2);return cljs.core.set.call(null,cljs.core.map.call(null,find_node_set,nbs3));
});})(find_node_set))
;var nm = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (find_node_set,find_neighbors){
return (function (ns){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,find_neighbors.call(null,ns)], null);
});})(find_node_set,find_neighbors))
,sccs));return (new foundation.app.data.graph.DirectedGraph(cljs.core.set.call(null,sccs),nm));
});
component_graph = function(g,sccs){
switch(arguments.length){
case 1:
return component_graph__1.call(this,g);
case 2:
return component_graph__2.call(this,g,sccs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
component_graph.cljs$core$IFn$_invoke$arity$1 = component_graph__1;
component_graph.cljs$core$IFn$_invoke$arity$2 = component_graph__2;
return component_graph;
})()
;
/**
* Is the component (recieved from scc) self recursive?
*/
foundation.app.data.graph.recursive_component_QMARK_ = (function recursive_component_QMARK_(g,ns){var or__13823__auto__ = (cljs.core.count.call(null,ns) > 1);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var n = cljs.core.first.call(null,ns);return cljs.core.some.call(null,(function (p1__323552_SHARP_){return cljs.core._EQ_.call(null,p1__323552_SHARP_,n);
}),foundation.app.data.graph.get_neighbors.call(null,g,n));
}
});
/**
* Returns, as a sequence of sets, the components of a graph that are
* self-recursive.
*/
foundation.app.data.graph.self_recursive_sets = (function self_recursive_sets(g){return cljs.core.filter.call(null,cljs.core.partial.call(null,foundation.app.data.graph.recursive_component_QMARK_,g),foundation.app.data.graph.scc.call(null,g));
});
/**
* Repeatedly apply fun to data until (equal old-data new-data)
* returns true.  If max iterations occur, it will throw an
* exception.  Set max to nil for unlimited iterations.
*/
foundation.app.data.graph.fixed_point = (function fixed_point(data,fun,max,equal){var step = (function step(data__$1,idx){while(true){
if(cljs.core.truth_((function (){var and__13811__auto__ = idx;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core._EQ_.call(null,0,idx);
} else
{return and__13811__auto__;
}
})()))
{throw (new Error("Fixed point overflow"));
} else
{}
var new_data = fun.call(null,data__$1);if(cljs.core.truth_(equal.call(null,data__$1,new_data)))
{return new_data;
} else
{{
var G__323553 = new_data;
var G__323554 = (function (){var and__13811__auto__ = idx;if(cljs.core.truth_(and__13811__auto__))
{return (idx - 1);
} else
{return and__13811__auto__;
}
})();
data__$1 = G__323553;
idx = G__323554;
continue;
}
}
break;
}
});return step.call(null,data,max);
});
foundation.app.data.graph.fold_into_sets = (function fold_into_sets(priorities){var max = (cljs.core.apply.call(null,cljs.core.max,0,cljs.core.vals.call(null,priorities)) + 1);var step = ((function (max){
return (function (acc,p__323557){var vec__323558 = p__323557;var n = cljs.core.nth.call(null,vec__323558,0,null);var dep = cljs.core.nth.call(null,vec__323558,1,null);return cljs.core.assoc.call(null,acc,dep,cljs.core.conj.call(null,acc.call(null,dep),n));
});})(max))
;return cljs.core.reduce.call(null,step,cljs.core.vec.call(null,cljs.core.replicate.call(null,max,cljs.core.PersistentHashSet.EMPTY)),priorities);
});
/**
* Similar to a topological sort, this returns a vector of sets. The
* set of nodes at index 0 are independent.  The set at index 1 depend
* on index 0; those at 2 depend on 0 and 1, and so on.  Those withing
* a set have no mutual dependencies.  Assume the input graph (which
* much be acyclic) has an edge a->b when a depends on b.
*/
foundation.app.data.graph.dependency_list = (function dependency_list(g){var step = (function (d){var update = (function (n){return (cljs.core.apply.call(null,cljs.core.max,-1,cljs.core.map.call(null,d,foundation.app.data.graph.get_neighbors.call(null,g,n))) + 1);
});return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (update){
return (function (p__323561){var vec__323562 = p__323561;var k = cljs.core.nth.call(null,vec__323562,0,null);var v = cljs.core.nth.call(null,vec__323562,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update.call(null,k)], null);
});})(update))
,d));
});var counts = foundation.app.data.graph.fixed_point.call(null,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g),cljs.core.repeat.call(null,0)),step,(cljs.core.count.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g)) + 1),cljs.core._EQ_);return foundation.app.data.graph.fold_into_sets.call(null,counts);
});
/**
* Similar to dependency-list (see doc), except two graphs are
* provided.  The first is as dependency-list.  The second (which may
* have cycles) provides a partial-dependency relation.  If node a
* depends on node b (meaning an edge a->b exists) in the second
* graph, node a must be equal or later in the sequence.
*/
foundation.app.data.graph.stratification_list = (function stratification_list(g1,g2){if(cljs.core._EQ_.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g1)),cljs.core.set.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g2))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-1640530070,null),new cljs.core.Symbol(null,"g1","g1",-1640528285,null),new cljs.core.Keyword(null,"nodes","nodes",1118897699),new cljs.core.Symbol(null,"set","set",-1640417765,null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-1640530070,null),new cljs.core.Symbol(null,"g2","g2",-1640528284,null),new cljs.core.Keyword(null,"nodes","nodes",1118897699),new cljs.core.Symbol(null,"set","set",-1640417765,null)))))].join('')));
}
var step = (function (d){var update = (function (n){var x__14130__auto__ = (cljs.core.apply.call(null,cljs.core.max,-1,cljs.core.map.call(null,d,foundation.app.data.graph.get_neighbors.call(null,g1,n))) + 1);var y__14131__auto__ = cljs.core.apply.call(null,cljs.core.max,-1,cljs.core.map.call(null,d,foundation.app.data.graph.get_neighbors.call(null,g2,n)));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
});return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (update){
return (function (p__323565){var vec__323566 = p__323565;var k = cljs.core.nth.call(null,vec__323566,0,null);var v = cljs.core.nth.call(null,vec__323566,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,update.call(null,k)], null);
});})(update))
,d));
});var counts = foundation.app.data.graph.fixed_point.call(null,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g1),cljs.core.repeat.call(null,0)),step,(cljs.core.count.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(g1)) + 1),cljs.core._EQ_);return foundation.app.data.graph.fold_into_sets.call(null,counts);
});

//# sourceMappingURL=graph.js.map