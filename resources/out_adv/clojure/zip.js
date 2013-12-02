// Compiled by ClojureScript 0.0-2080
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$396,make_node,cljs.core.constant$keyword$397,children,cljs.core.constant$keyword$398,branch_QMARK_], null));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.constant$keyword$399),(function (node,children){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$399,(function (){var and__7718__auto__ = children;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else
{return and__7718__auto__;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(0) : loc.call(null,0));
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){return cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{return cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){return cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){return cljs.core.constant$keyword$400.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){return cljs.core.seq(cljs.core.constant$keyword$401.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){return cljs.core.constant$keyword$402.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc)))
{var vec__616799 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616799,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616799,1,null);var vec__616800 = clojure.zip.children(loc);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616800,0,null);var cnext = cljs.core.nthnext(vec__616800,1);var cs = vec__616800;if(cljs.core.truth_(cs))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$401,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$400,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$400.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.constant$keyword$403,path,cljs.core.constant$keyword$402,cnext], null)], null),cljs.core.meta(loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){var vec__616803 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616803,0,null);var map__616804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616803,1,null);var map__616804__$1 = ((cljs.core.seq_QMARK_(map__616804))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616804):map__616804);var path = map__616804__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616804__$1,cljs.core.constant$keyword$401);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616804__$1,cljs.core.constant$keyword$403);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616804__$1,cljs.core.constant$keyword$400);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616804__$1,cljs.core.constant$keyword$402);var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616804__$1,cljs.core.constant$keyword$404);if(cljs.core.truth_(pnodes))
{var pnode = cljs.core.peek(pnodes);return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__7718__auto__ = ppath;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$404,true);
} else
{return and__7718__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$405,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return clojure.zip.node(loc);
} else
{var p = clojure.zip.up(loc);if(cljs.core.truth_(p))
{{
var G__616805 = p;
loc = G__616805;
continue;
}
} else
{return clojure.zip.node(loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){var vec__616809 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616809,0,null);var map__616810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616809,1,null);var map__616810__$1 = ((cljs.core.seq_QMARK_(map__616810))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616810):map__616810);var path = map__616810__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616810__$1,cljs.core.constant$keyword$401);var vec__616811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616810__$1,cljs.core.constant$keyword$402);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616811,0,null);var rnext = cljs.core.nthnext(vec__616811,1);var rs = vec__616811;if(cljs.core.truth_((function (){var and__7718__auto__ = path;if(cljs.core.truth_(and__7718__auto__))
{return rs;
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.array_seq([cljs.core.constant$keyword$402,rnext], 0))], null),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){var vec__616814 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616814,0,null);var map__616815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616814,1,null);var map__616815__$1 = ((cljs.core.seq_QMARK_(map__616815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616815):map__616815);var path = map__616815__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616815__$1,cljs.core.constant$keyword$401);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616815__$1,cljs.core.constant$keyword$402);if(cljs.core.truth_((function (){var and__7718__auto__ = path;if(cljs.core.truth_(and__7718__auto__))
{return r;
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.array_seq([cljs.core.constant$keyword$402,null], 0))], null),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){var vec__616818 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616818,0,null);var map__616819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616818,1,null);var map__616819__$1 = ((cljs.core.seq_QMARK_(map__616819))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616819):map__616819);var path = map__616819__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616819__$1,cljs.core.constant$keyword$401);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616819__$1,cljs.core.constant$keyword$402);if(cljs.core.truth_((function (){var and__7718__auto__ = path;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.seq(l);
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$402,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){var vec__616822 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616822,0,null);var map__616823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616822,1,null);var map__616823__$1 = ((cljs.core.seq_QMARK_(map__616823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616823):map__616823);var path = map__616823__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616823__$1,cljs.core.constant$keyword$401);var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616823__$1,cljs.core.constant$keyword$402);if(cljs.core.truth_((function (){var and__7718__auto__ = path;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.seq(l);
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$402,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.array_seq([r], 0))], 0))], null),cljs.core.meta(loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){var vec__616826 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616826,0,null);var map__616827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616826,1,null);var map__616827__$1 = ((cljs.core.seq_QMARK_(map__616827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616827):map__616827);var path = map__616827__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616827__$1,cljs.core.constant$keyword$401);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.array_seq([cljs.core.constant$keyword$404,true], 0))], null),cljs.core.meta(loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){var vec__616830 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616830,0,null);var map__616831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616830,1,null);var map__616831__$1 = ((cljs.core.seq_QMARK_(map__616831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616831):map__616831);var path = map__616831__$1;var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616831__$1,cljs.core.constant$keyword$402);if((path == null))
{throw "Insert at top";
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$402,cljs.core.cons(item,r),cljs.core.array_seq([cljs.core.constant$keyword$404,true], 0))], null),cljs.core.meta(loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){var vec__616833 = loc;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616833,0,null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616833,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.constant$keyword$404,true)], null),cljs.core.meta(loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
};
var edit = function (loc,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return edit__delegate.call(this,loc,f,args);};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__616834){
var loc = cljs.core.first(arglist__616834);
arglist__616834 = cljs.core.next(arglist__616834);
var f = cljs.core.first(arglist__616834);
var args = cljs.core.rest(arglist__616834);
return edit__delegate(loc,f,args);
});
edit.cljs$core$IFn$_invoke$arity$variadic = edit__delegate;
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$405,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1))))
{return loc;
} else
{var or__7730__auto__ = (function (){var and__7718__auto__ = clojure.zip.branch_QMARK_(loc);if(cljs.core.truth_(and__7718__auto__))
{return clojure.zip.down(loc);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = clojure.zip.right(loc);if(cljs.core.truth_(or__7730__auto____$1))
{return or__7730__auto____$1;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up(p)))
{var or__7730__auto____$2 = clojure.zip.right(clojure.zip.up(p));if(cljs.core.truth_(or__7730__auto____$2))
{return or__7730__auto____$2;
} else
{{
var G__616835 = clojure.zip.up(p);
p = G__616835;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.constant$keyword$405], null);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){var temp__4096__auto__ = clojure.zip.left(loc);if(cljs.core.truth_(temp__4096__auto__))
{var lloc = temp__4096__auto__;var loc__$1 = lloc;while(true){
var temp__4096__auto____$1 = (function (){var and__7718__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__7718__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(temp__4096__auto____$1))
{var child = temp__4096__auto____$1;{
var G__616836 = clojure.zip.rightmost(child);
loc__$1 = G__616836;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return clojure.zip.up(loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$405,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(1) : loc.call(null,1)));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){var vec__616839 = loc;var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616839,0,null);var map__616840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__616839,1,null);var map__616840__$1 = ((cljs.core.seq_QMARK_(map__616840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__616840):map__616840);var path = map__616840__$1;var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616840__$1,cljs.core.constant$keyword$401);var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616840__$1,cljs.core.constant$keyword$403);var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616840__$1,cljs.core.constant$keyword$400);var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__616840__$1,cljs.core.constant$keyword$402);if((path == null))
{throw "Remove at top";
} else
{if((cljs.core.count(l) > 0))
{var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$401,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$404,true], 0))], null),cljs.core.meta(loc));while(true){
var temp__4096__auto__ = (function (){var and__7718__auto__ = clojure.zip.branch_QMARK_(loc__$1);if(cljs.core.truth_(and__7718__auto__))
{return clojure.zip.down(loc__$1);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(temp__4096__auto__))
{var child = temp__4096__auto__;{
var G__616841 = clojure.zip.rightmost(child);
loc__$1 = G__616841;
continue;
}
} else
{return loc__$1;
}
break;
}
} else
{return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__7718__auto__ = ppath;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$404,true);
} else
{return and__7718__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});
