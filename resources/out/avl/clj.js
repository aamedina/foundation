// Compiled by ClojureScript 0.0-2080
goog.provide('avl.clj');
goog.require('cljs.core');

/**
* @constructor
*/
avl.clj.AVLNode = (function (edit,key,val,left,right,height,rank){
this.edit = edit;
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.height = height;
this.rank = rank;
})
avl.clj.AVLNode.cljs$lang$type = true;
avl.clj.AVLNode.cljs$lang$ctorStr = "avl.clj/AVLNode";
avl.clj.AVLNode.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLNode");
});
avl.clj.AVLNode.prototype.getRank = (function (){var self__ = this;
var this$ = this;return self__.rank;
});
avl.clj.AVLNode.prototype.getLeft = (function (){var self__ = this;
var this$ = this;return self__.left;
});
avl.clj.AVLNode.prototype.getKey = (function (){var self__ = this;
var this$ = this;return self__.key;
});
avl.clj.AVLNode.prototype.setHeight = (function (h){var self__ = this;
var this$ = this;self__.height = h;
return this$;
});
avl.clj.AVLNode.prototype.setRank = (function (r){var self__ = this;
var this$ = this;self__.rank = r;
return this$;
});
avl.clj.AVLNode.prototype.setVal = (function (v){var self__ = this;
var this$ = this;self__.val = v;
return this$;
});
avl.clj.AVLNode.prototype.setLeft = (function (l){var self__ = this;
var this$ = this;self__.left = l;
return this$;
});
avl.clj.AVLNode.prototype.getRight = (function (){var self__ = this;
var this$ = this;return self__.right;
});
avl.clj.AVLNode.prototype.setRight = (function (r){var self__ = this;
var this$ = this;self__.right = r;
return this$;
});
avl.clj.AVLNode.prototype.getVal = (function (){var self__ = this;
var this$ = this;return self__.val;
});
avl.clj.AVLNode.prototype.setKey = (function (k){var self__ = this;
var this$ = this;self__.key = k;
return this$;
});
avl.clj.AVLNode.prototype.getHeight = (function (){var self__ = this;
var this$ = this;return self__.height;
});
avl.clj.__GT_AVLNode = (function __GT_AVLNode(edit,key,val,left,right,height,rank){return (new avl.clj.AVLNode(edit,key,val,left,right,height,rank));
});
avl.clj.height = (function height(node){if((node == null))
{return 0;
} else
{return node.height;
}
});
avl.clj.ensure_editable = (function() {
var ensure_editable = null;
var ensure_editable__1 = (function (edit){if(cljs.core.not.call(null,edit))
{throw cljs.core.ex_info.call(null,"Transient used after persistent! call",cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
});
var ensure_editable__2 = (function (edit,node){if((edit === node.edit))
{return node;
} else
{return (new avl.clj.AVLNode(edit,node.getKey(),node.getVal(),node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
}
});
ensure_editable = function(edit,node){
switch(arguments.length){
case 1:
return ensure_editable__1.call(this,edit);
case 2:
return ensure_editable__2.call(this,edit,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ensure_editable.cljs$core$IFn$_invoke$arity$1 = ensure_editable__1;
ensure_editable.cljs$core$IFn$_invoke$arity$2 = ensure_editable__2;
return ensure_editable;
})()
;
avl.clj.height = (function height(node){if((node == null))
{return 0;
} else
{return node.getHeight();
}
});
avl.clj.rotate_left = (function rotate_left(node){var l = node.getLeft();var r = node.getRight();var rl = r.getLeft();var rr = r.getRight();var lh = avl.clj.height.call(null,l);var rlh = avl.clj.height.call(null,rl);var rrh = avl.clj.height.call(null,rr);var rnk = node.getRank();var rnkr = r.getRank();return (new avl.clj.AVLNode(null,r.getKey(),r.getVal(),(new avl.clj.AVLNode(null,node.getKey(),node.getVal(),l,rl,((function (){var x__14129__auto__ = lh;var y__14130__auto__ = rlh;return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),rnk)),rr,(function (){var x__14129__auto__ = (function (){var x__14129__auto__ = (lh + 2);var y__14130__auto__ = (rlh + 2);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();var y__14130__auto__ = (rrh + 1);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})(),((rnk + rnkr) + 1)));
});
avl.clj.rotate_left_BANG_ = (function rotate_left_BANG_(edit,node){var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var l = node__$1.getLeft();var r = avl.clj.ensure_editable.call(null,edit,node__$1.getRight());var rl = r.getLeft();var rr = r.getRight();var lh = avl.clj.height.call(null,l);var rlh = avl.clj.height.call(null,rl);var rrh = avl.clj.height.call(null,rr);var rnk = node__$1.getRank();var rnkr = r.getRank();r.setLeft(node__$1);
r.setHeight((function (){var x__14129__auto__ = (function (){var x__14129__auto__ = (lh + 2);var y__14130__auto__ = (rlh + 2);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();var y__14130__auto__ = (rrh + 1);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})());
r.setRank(((rnk + rnkr) + 1));
node__$1.setRight(rl);
node__$1.setHeight(((function (){var x__14129__auto__ = lh;var y__14130__auto__ = rlh;return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return r;
});
avl.clj.rotate_right = (function rotate_right(node){var r = node.getRight();var l = node.getLeft();var lr = l.getRight();var ll = l.getLeft();var rh = avl.clj.height.call(null,r);var lrh = avl.clj.height.call(null,lr);var llh = avl.clj.height.call(null,ll);var rnk = node.getRank();var rnkl = l.getRank();return (new avl.clj.AVLNode(null,l.getKey(),l.getVal(),ll,(new avl.clj.AVLNode(null,node.getKey(),node.getVal(),lr,r,((function (){var x__14129__auto__ = rh;var y__14130__auto__ = lrh;return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),((rnk - rnkl) - 1))),(function (){var x__14129__auto__ = (function (){var x__14129__auto__ = (rh + 2);var y__14130__auto__ = (lrh + 2);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();var y__14130__auto__ = (llh + 1);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})(),rnkl));
});
avl.clj.rotate_right_BANG_ = (function rotate_right_BANG_(edit,node){var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var r = node__$1.getRight();var l = avl.clj.ensure_editable.call(null,edit,node__$1.getLeft());var lr = l.getRight();var ll = l.getLeft();var rh = avl.clj.height.call(null,r);var lrh = avl.clj.height.call(null,lr);var llh = avl.clj.height.call(null,ll);var rnk = node__$1.getRank();var rnkl = l.getRank();l.setRight(node__$1);
l.setHeight((function (){var x__14129__auto__ = (function (){var x__14129__auto__ = (rh + 2);var y__14130__auto__ = (lrh + 2);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();var y__14130__auto__ = (llh + 1);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})());
node__$1.setLeft(lr);
node__$1.setHeight(((function (){var x__14129__auto__ = rh;var y__14130__auto__ = lrh;return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
node__$1.setRank(((rnk - rnkl) - 1));
return l;
});
avl.clj.lookup = (function lookup(comp,node,k){while(true){
if((node == null))
{return null;
} else
{var c = comp.call(null,k,node.getKey());if((c === 0))
{return node;
} else
{if((c < 0))
{{
var G__103867 = comp;
var G__103868 = node.getLeft();
var G__103869 = k;
comp = G__103867;
node = G__103868;
k = G__103869;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__103870 = comp;
var G__103871 = node.getRight();
var G__103872 = k;
comp = G__103870;
node = G__103871;
k = G__103872;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
avl.clj.select = (function select(node,rank){while(true){
if((node == null))
{throw cljs.core.ex_info.call(null,"nth indexed out of bounds in AVL tree",cljs.core.PersistentArrayMap.EMPTY);
} else
{var node_rank = node.getRank();if((node_rank === rank))
{return node;
} else
{if((node_rank < rank))
{{
var G__103873 = node.getRight();
var G__103874 = ((rank - node_rank) - 1);
node = G__103873;
rank = G__103874;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__103875 = node.getLeft();
var G__103876 = rank;
node = G__103875;
rank = G__103876;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
avl.clj.rank = (function rank(comp,node,k){while(true){
if((node == null))
{return -1;
} else
{var c = comp.call(null,k,node.getKey());if((c === 0))
{return node.getRank();
} else
{if((c < 0))
{{
var G__103877 = comp;
var G__103878 = node.getLeft();
var G__103879 = k;
comp = G__103877;
node = G__103878;
k = G__103879;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return ((node.getRank() + rank.call(null,comp,node.getRight(),k)) + 1);
} else
{return null;
}
}
}
}
break;
}
});
avl.clj.maybe_rebalance = (function maybe_rebalance(node){var l = node.getLeft();var r = node.getRight();var lh = avl.clj.height.call(null,l);var rh = avl.clj.height.call(null,r);var b = (lh - rh);if((b < -1))
{var rl = r.getLeft();var rr = r.getRight();var rlh = avl.clj.height.call(null,rl);var rrh = avl.clj.height.call(null,rr);if(((rlh - rrh) >= 2))
{var new_right = avl.clj.rotate_right.call(null,r);return avl.clj.rotate_left.call(null,(new avl.clj.AVLNode(null,node.getKey(),node.getVal(),node.getLeft(),new_right,((function (){var x__14129__auto__ = lh;var y__14130__auto__ = avl.clj.height.call(null,new_right);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),node.getRank())));
} else
{return avl.clj.rotate_left.call(null,node);
}
} else
{if((b > 1))
{var ll = l.getLeft();var lr = l.getRight();var llh = avl.clj.height.call(null,ll);var lrh = avl.clj.height.call(null,lr);if(((lrh - llh) >= 2))
{var new_left = avl.clj.rotate_left.call(null,l);return avl.clj.rotate_right.call(null,(new avl.clj.AVLNode(null,node.getKey(),node.getVal(),new_left,node.getRight(),((function (){var x__14129__auto__ = rh;var y__14130__auto__ = avl.clj.height.call(null,new_left);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),node.getRank())));
} else
{return avl.clj.rotate_right.call(null,node);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return node;
} else
{return null;
}
}
}
});
avl.clj.maybe_rebalance_BANG_ = (function maybe_rebalance_BANG_(edit,node){var l = node.getLeft();var r = node.getRight();var lh = avl.clj.height.call(null,l);var rh = avl.clj.height.call(null,r);var b = (lh - rh);if((b < -1))
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var rl = r.getLeft();var rr = r.getRight();var rlh = avl.clj.height.call(null,rl);var rrh = avl.clj.height.call(null,rr);if(((rlh - rrh) >= 2))
{var new_right = avl.clj.rotate_right_BANG_.call(null,edit,r);node__$1.setRight(new_right);
node__$1.setHeight(((function (){var x__14129__auto__ = lh;var y__14130__auto__ = avl.clj.height.call(null,new_right);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return avl.clj.rotate_left_BANG_.call(null,edit,node__$1);
} else
{return avl.clj.rotate_left_BANG_.call(null,edit,node__$1);
}
} else
{if((b > 1))
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var ll = l.getLeft();var lr = l.getRight();var llh = avl.clj.height.call(null,ll);var lrh = avl.clj.height.call(null,lr);if(((lrh - llh) >= 2))
{var new_left = avl.clj.rotate_left_BANG_.call(null,edit,l);node__$1.setLeft(new_left);
node__$1.setHeight(((function (){var x__14129__auto__ = rh;var y__14130__auto__ = avl.clj.height.call(null,new_left);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return avl.clj.rotate_right_BANG_.call(null,edit,node__$1);
} else
{return avl.clj.rotate_right_BANG_.call(null,edit,node__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return node;
} else
{return null;
}
}
}
});
avl.clj.insert = (function insert(comp,node,k,v,found_QMARK_){if((node == null))
{return (new avl.clj.AVLNode(null,k,v,null,null,1,0));
} else
{var nk = node.getKey();var c = comp.call(null,k,nk);if((c === 0))
{found_QMARK_.val = true;
return (new avl.clj.AVLNode(null,k,v,node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
} else
{if((c < 0))
{var new_child = insert.call(null,comp,node.getLeft(),k,v,found_QMARK_);return avl.clj.maybe_rebalance.call(null,(new avl.clj.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__14129__auto__ = new_child.getHeight();var y__14130__auto__ = avl.clj.height.call(null,node.getRight());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),(cljs.core.truth_(found_QMARK_.val)?node.getRank():(node.getRank() + 1)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_child = insert.call(null,comp,node.getRight(),k,v,found_QMARK_);return avl.clj.maybe_rebalance.call(null,(new avl.clj.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__14129__auto__ = new_child.getHeight();var y__14130__auto__ = avl.clj.height.call(null,node.getLeft());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),node.getRank())));
} else
{return null;
}
}
}
}
});
avl.clj.insert_BANG_ = (function insert_BANG_(edit,comp,node,k,v,found_QMARK_){if((node == null))
{return (new avl.clj.AVLNode(edit,k,v,null,null,1,0));
} else
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var nk = node__$1.getKey();var c = comp.call(null,k,nk);if((c === 0))
{found_QMARK_.val = true;
node__$1.setKey(k);
node__$1.setVal(v);
return node__$1;
} else
{if((c < 0))
{var new_child = insert_BANG_.call(null,edit,comp,node__$1.getLeft(),k,v,found_QMARK_);node__$1.setLeft(new_child);
node__$1.setHeight(((function (){var x__14129__auto__ = new_child.getHeight();var y__14130__auto__ = avl.clj.height.call(null,node__$1.getRight());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
if(cljs.core.not.call(null,found_QMARK_.val))
{node__$1.setRank((node__$1.getRank() + 1));
} else
{}
return avl.clj.maybe_rebalance_BANG_.call(null,edit,node__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_child = insert_BANG_.call(null,edit,comp,node__$1.getRight(),k,v,found_QMARK_);node__$1.setRight(new_child);
node__$1.setHeight(((function (){var x__14129__auto__ = new_child.getHeight();var y__14130__auto__ = avl.clj.height.call(null,node__$1.getLeft());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return avl.clj.maybe_rebalance_BANG_.call(null,edit,node__$1);
} else
{return null;
}
}
}
}
});
avl.clj.get_rightmost = (function get_rightmost(node){while(true){
var temp__4090__auto__ = node.getRight();if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;{
var G__103880 = r;
node = G__103880;
continue;
}
} else
{return node;
}
break;
}
});
avl.clj.delete_rightmost = (function delete_rightmost(node){var temp__4090__auto__ = node.getRight();if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var l = node.getLeft();var new_right = delete_rightmost.call(null,r);return (new avl.clj.AVLNode(null,node.getKey(),node.getVal(),l,new_right,((function (){var x__14129__auto__ = avl.clj.height.call(null,l);var y__14130__auto__ = avl.clj.height.call(null,new_right);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),node.getRank()));
} else
{return node.getLeft();
}
});
avl.clj.delete_rightmost_BANG_ = (function delete_rightmost_BANG_(edit,node){if(!((node == null)))
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var r = node__$1.getRight();if((r == null))
{var temp__4090__auto__ = node__$1.getLeft();if(cljs.core.truth_(temp__4090__auto__))
{var l = temp__4090__auto__;return avl.clj.ensure_editable.call(null,edit,l);
} else
{return null;
}
} else
{if((r.getRight() == null))
{node__$1.setRight(r.getLeft());
node__$1.setHeight(((function (){var x__14129__auto__ = avl.clj.height.call(null,node__$1.getLeft());var y__14130__auto__ = avl.clj.height.call(null,r.getLeft());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return node__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_right = delete_rightmost_BANG_.call(null,edit,r);node__$1.setRight(new_right);
node__$1.setHeight(((function (){var x__14129__auto__ = avl.clj.height.call(null,node__$1.getLeft());var y__14130__auto__ = avl.clj.height.call(null,new_right);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return node__$1;
} else
{return null;
}
}
}
} else
{return null;
}
});
avl.clj.delete$ = (function delete$(comp,node,k,found_QMARK_){if((node == null))
{return null;
} else
{var nk = node.getKey();var c = comp.call(null,k,nk);if((c === 0))
{var l = node.getLeft();var r = node.getRight();found_QMARK_.val = true;
if(cljs.core.truth_((function (){var and__13810__auto__ = l;if(cljs.core.truth_(and__13810__auto__))
{return r;
} else
{return and__13810__auto__;
}
})()))
{var p = avl.clj.get_rightmost.call(null,l);var l_SINGLEQUOTE_ = avl.clj.delete_rightmost.call(null,l);return (new avl.clj.AVLNode(null,p.getKey(),p.getVal(),l_SINGLEQUOTE_,r,((function (){var x__14129__auto__ = avl.clj.height.call(null,l_SINGLEQUOTE_);var y__14130__auto__ = avl.clj.height.call(null,r);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),(node.getRank() - 1)));
} else
{var or__13822__auto__ = l;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return r;
}
}
} else
{if((c < 0))
{var new_child = delete$.call(null,comp,node.getLeft(),k,found_QMARK_);if((new_child === node.getLeft()))
{return node;
} else
{return avl.clj.maybe_rebalance.call(null,(new avl.clj.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__14129__auto__ = avl.clj.height.call(null,new_child);var y__14130__auto__ = avl.clj.height.call(null,node.getRight());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),(cljs.core.truth_(found_QMARK_.val)?(node.getRank() - 1):node.getRank()))));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_child = delete$.call(null,comp,node.getRight(),k,found_QMARK_);if((new_child === node.getRight()))
{return node;
} else
{return avl.clj.maybe_rebalance.call(null,(new avl.clj.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__14129__auto__ = avl.clj.height.call(null,new_child);var y__14130__auto__ = avl.clj.height.call(null,node.getLeft());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1),node.getRank())));
}
} else
{return null;
}
}
}
}
});
avl.clj.delete_BANG_ = (function delete_BANG_(edit,comp,node,k,found_QMARK_){if((node == null))
{return null;
} else
{var nk = node.getKey();var c = comp.call(null,k,nk);if((c === 0))
{var l = node.getLeft();var r = node.getRight();found_QMARK_.val = true;
if(cljs.core.truth_((function (){var and__13810__auto__ = l;if(cljs.core.truth_(and__13810__auto__))
{return r;
} else
{return and__13810__auto__;
}
})()))
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);var p = avl.clj.get_rightmost.call(null,l);var l_SINGLEQUOTE_ = avl.clj.delete_rightmost_BANG_.call(null,edit,l);node__$1.setKey(p.getKey());
node__$1.setVal(p.getVal());
node__$1.setLeft(l_SINGLEQUOTE_);
node__$1.setHeight(((function (){var x__14129__auto__ = avl.clj.height.call(null,l_SINGLEQUOTE_);var y__14130__auto__ = avl.clj.height.call(null,r);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
node__$1.setRank((node__$1.getRank() - 1));
return node__$1;
} else
{if(cljs.core.truth_(l))
{return l;
} else
{if(cljs.core.truth_(r))
{return r;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
} else
{if((c < 0))
{var new_child = delete_BANG_.call(null,edit,comp,node.getLeft(),k,found_QMARK_);if((new_child === node.getLeft()))
{return node;
} else
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);node__$1.setLeft(new_child);
node__$1.setHeight(((function (){var x__14129__auto__ = avl.clj.height.call(null,new_child);var y__14130__auto__ = avl.clj.height.call(null,node__$1.getRight());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
if(cljs.core.truth_(found_QMARK_.val))
{node__$1.setRank((node__$1.getRank() - 1));
} else
{}
return avl.clj.maybe_rebalance_BANG_.call(null,edit,node__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_child = delete_BANG_.call(null,edit,comp,node.getRight(),k,found_QMARK_);if((new_child === node.getRight()))
{return node;
} else
{var node__$1 = avl.clj.ensure_editable.call(null,edit,node);node__$1.setRight(new_child);
node__$1.setHeight(((function (){var x__14129__auto__ = avl.clj.height.call(null,new_child);var y__14130__auto__ = avl.clj.height.call(null,node__$1.getLeft());return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})() + 1));
return avl.clj.maybe_rebalance_BANG_.call(null,edit,node__$1);
}
} else
{return null;
}
}
}
}
});
avl.clj.seq_push = (function seq_push(node,stack,ascending_QMARK_){var node__$1 = node;var stack__$1 = stack;while(true){
if((node__$1 == null))
{return stack__$1;
} else
{{
var G__103881 = (cljs.core.truth_(ascending_QMARK_)?node__$1.left:node__$1.right);
var G__103882 = cljs.core.conj.call(null,stack__$1,node__$1);
node__$1 = G__103881;
stack__$1 = G__103882;
continue;
}
}
break;
}
});
avl.clj.create_seq = (function create_seq(node,ascending_QMARK_,cnt){return avl.clj.__GT_AVLMapSeq.call(null,null,avl.clj.seq_push.call(null,node,null,ascending_QMARK_),ascending_QMARK_,cnt,null);
});
avl.clj.avl_map_kv_reduce = (function avl_map_kv_reduce(node,f,init){var init__$1 = (((node.getLeft() == null))?init:avl_map_kv_reduce.call(null,node.getLeft(),f,init));if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return init__$1;
} else
{var init__$2 = f.call(null,init__$1,node.getKey(),node.getVal());if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{var init__$3 = (((node.getRight() == null))?init__$2:avl_map_kv_reduce.call(null,node.getRight(),f,init__$2));return init__$3;
}
}
});

/**
* @constructor
*/
avl.clj.AVLMapSeq = (function (_meta,stack,ascending_QMARK_,cnt,_hash){
this._meta = _meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
avl.clj.AVLMapSeq.cljs$lang$type = true;
avl.clj.AVLMapSeq.cljs$lang$ctorStr = "avl.clj/AVLMapSeq";
avl.clj.AVLMapSeq.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLMapSeq");
});
avl.clj.AVLMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__14233__auto__ = self__._hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);self__._hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
avl.clj.AVLMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._seq.call(null,cljs.core._rest.call(null,this$__$1));
});
avl.clj.AVLMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,x,this$__$1);
});
avl.clj.AVLMapSeq.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
avl.clj.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.seq_reduce.call(null,f,this$__$1);
});
avl.clj.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){var self__ = this;
var this$__$1 = this;return cljs.core.seq_reduce.call(null,f,start,this$__$1);
});
avl.clj.AVLMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
avl.clj.AVLMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt < 0))
{return (cljs.core._count.call(null,cljs.core._next.call(null,this$__$1)) + 1);
} else
{return self__.cnt;
}
});
avl.clj.AVLMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = cljs.core.peek.call(null,self__.stack);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null);
});
avl.clj.AVLMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = cljs.core.first.call(null,self__.stack);var next_stack = avl.clj.seq_push.call(null,(cljs.core.truth_(self__.ascending_QMARK_)?node.right:node.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);if((next_stack == null))
{return cljs.core.List.EMPTY;
} else
{return (new avl.clj.AVLMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
}
});
avl.clj.AVLMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.equiv_sequential.call(null,this$__$1,that);
});
avl.clj.AVLMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLMapSeq(meta,self__.stack,self__.ascending_QMARK_,self__.cnt,self__._hash));
});
avl.clj.AVLMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
avl.clj.AVLMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
avl.clj.__GT_AVLMapSeq = (function __GT_AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash){return (new avl.clj.AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash));
});

/**
* @constructor
*/
avl.clj.AVLMap = (function (comp,tree,cnt,_meta,_hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this._meta = _meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 418776863;
})
avl.clj.AVLMap.cljs$lang$type = true;
avl.clj.AVLMap.cljs$lang$ctorStr = "avl.clj/AVLMap";
avl.clj.AVLMap.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLMap");
});
avl.clj.AVLMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return avl.clj.__GT_AVLTransientMap.call(null,(function (){var obj103885 = {};return obj103885;
})(),self__.comp,self__.tree,self__.cnt);
});
avl.clj.AVLMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__14233__auto__ = self__._hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__._hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
avl.clj.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
avl.clj.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var n = avl.clj.lookup.call(null,self__.comp,self__.tree,k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
avl.clj.AVLMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;var found_QMARK_ = (new cljs.core.Box(false));var new_tree = avl.clj.insert.call(null,self__.comp,self__.tree,k,v,found_QMARK_);return (new avl.clj.AVLMap(self__.comp,new_tree,(cljs.core.truth_(found_QMARK_.val)?self__.cnt:(self__.cnt + 1)),self__._meta,null));
});
avl.clj.AVLMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return !((this$__$1.entryAt(k) == null));
});
avl.clj.AVLMap.prototype.call = (function() {
var G__103886 = null;
var G__103886__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__103886__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__103886 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__103886__2.call(this,self__,k);
case 3:
return G__103886__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__103886;
})()
;
avl.clj.AVLMap.prototype.apply = (function (self__,args103883){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args103883)));
});
avl.clj.AVLMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
avl.clj.AVLMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
avl.clj.AVLMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){var self__ = this;
var this$__$1 = this;if((self__.tree == null))
{return init;
} else
{var init__$1 = avl.clj.avl_map_kv_reduce.call(null,self__.tree,f,init);if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{return init__$1;
}
}
});
avl.clj.AVLMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core.assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
avl.clj.AVLMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return avl.clj.create_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
avl.clj.AVLMap.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
avl.clj.AVLMap.prototype.getTree = (function (){var self__ = this;
var this$ = this;return self__.tree;
});
avl.clj.AVLMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return avl.clj.create_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
avl.clj.AVLMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);if((c === 0))
{return (new avl.clj.AVLMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__103887 = cljs.core.conj.call(null,stack,t);
var G__103888 = t.left;
stack = G__103887;
t = G__103888;
continue;
}
} else
{{
var G__103889 = stack;
var G__103890 = t.right;
stack = G__103889;
t = G__103890;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((c > 0))
{{
var G__103891 = cljs.core.conj.call(null,stack,t);
var G__103892 = t.right;
stack = G__103891;
t = G__103892;
continue;
}
} else
{{
var G__103893 = stack;
var G__103894 = t.left;
stack = G__103893;
t = G__103894;
continue;
}
}
} else
{return null;
}
}
}
} else
{if(!((stack == null)))
{return (new avl.clj.AVLMapSeq(null,stack,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
avl.clj.AVLMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return cljs.core.key.call(null,entry);
});
avl.clj.AVLMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.comp;
});
avl.clj.AVLMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return avl.clj.create_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
avl.clj.AVLMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.cnt;
});
avl.clj.AVLMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.equiv_map.call(null,this$__$1,that);
});
avl.clj.AVLMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLMap(self__.comp,self__.tree,self__.cnt,meta,self__._hash));
});
avl.clj.AVLMap.prototype.cljs$core$IMeta$meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
avl.clj.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,i,null);
});
avl.clj.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = avl.clj.select.call(null,self__.tree,i);if(cljs.core.truth_(temp__4090__auto__))
{var n = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n.getKey(),n.getVal()], null);
} else
{return not_found;
}
});
avl.clj.AVLMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLMap(self__.comp,null,0,self__._meta,0));
});
avl.clj.AVLMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;var found_QMARK_ = (new cljs.core.Box(false));var new_tree = avl.clj.delete$.call(null,self__.comp,self__.tree,k,found_QMARK_);if(cljs.core.truth_(found_QMARK_.val))
{return (new avl.clj.AVLMap(self__.comp,new_tree,(self__.cnt - 1),self__._meta,null));
} else
{return this$__$1;
}
});
avl.clj.__GT_AVLMap = (function __GT_AVLMap(comp,tree,cnt,_meta,_hash){return (new avl.clj.AVLMap(comp,tree,cnt,_meta,_hash));
});

/**
* @constructor
*/
avl.clj.AVLTransientMap = (function (edit,comp,tree,cnt){
this.edit = edit;
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 259;
})
avl.clj.AVLTransientMap.cljs$lang$type = true;
avl.clj.AVLTransientMap.cljs$lang$ctorStr = "avl.clj/AVLTransientMap";
avl.clj.AVLTransientMap.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLTransientMap");
});
avl.clj.AVLTransientMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;avl.clj.ensure_editable.call(null,self__.edit);
var found_QMARK_ = (new cljs.core.Box(false));var new_tree = avl.clj.delete_BANG_.call(null,self__.edit,self__.comp,self__.tree,k,found_QMARK_);if(cljs.core.truth_(found_QMARK_.val))
{self__.tree = new_tree;
self__.cnt = (self__.cnt - 1);
} else
{}
return this$__$1;
});
avl.clj.AVLTransientMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;avl.clj.ensure_editable.call(null,self__.edit);
var found_QMARK_ = (new cljs.core.Box(false));var new_tree = avl.clj.insert_BANG_.call(null,self__.edit,self__.comp,self__.tree,k,v,found_QMARK_);self__.tree = new_tree;
if(cljs.core.not.call(null,found_QMARK_.val))
{self__.cnt = (self__.cnt + 1);
} else
{}
return this$__$1;
});
avl.clj.AVLTransientMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core.assoc_BANG_.call(null,this$__$1,cljs.core.nth.call(null,entry,0),cljs.core.nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core.conj_BANG_,this$__$1,entry);
}
});
avl.clj.AVLTransientMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;avl.clj.ensure_editable.call(null,self__.edit);
self__.edit = null;
return (new avl.clj.AVLMap(self__.comp,self__.tree,self__.cnt,null,null));
});
avl.clj.AVLTransientMap.prototype.call = (function() {
var G__103896 = null;
var G__103896__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__103896__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__103896 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__103896__2.call(this,self__,k);
case 3:
return G__103896__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__103896;
})()
;
avl.clj.AVLTransientMap.prototype.apply = (function (self__,args103895){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args103895)));
});
avl.clj.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
avl.clj.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
avl.clj.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
avl.clj.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var n = avl.clj.lookup.call(null,self__.comp,self__.tree,k);if(!((n == null)))
{return n.getVal();
} else
{return not_found;
}
});
avl.clj.AVLTransientMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.cnt;
});
avl.clj.__GT_AVLTransientMap = (function __GT_AVLTransientMap(edit,comp,tree,cnt){return (new avl.clj.AVLTransientMap(edit,comp,tree,cnt));
});

/**
* @constructor
*/
avl.clj.AVLSet = (function (_meta,avl_map,_hash){
this._meta = _meta;
this.avl_map = avl_map;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 417730847;
})
avl.clj.AVLSet.cljs$lang$type = true;
avl.clj.AVLSet.cljs$lang$ctorStr = "avl.clj/AVLSet";
avl.clj.AVLSet.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLSet");
});
avl.clj.AVLSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return avl.clj.__GT_AVLTransientSet.call(null,cljs.core._as_transient.call(null,self__.avl_map));
});
avl.clj.AVLSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__14233__auto__ = self__._hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_iset.call(null,this$__$1);self__._hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
avl.clj.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,v,null);
});
avl.clj.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,v,not_found){var self__ = this;
var this$__$1 = this;var n = self__.avl_map.entryAt(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
avl.clj.AVLSet.prototype.call = (function() {
var G__103899 = null;
var G__103899__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__103899__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__103899 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__103899__2.call(this,self__,k);
case 3:
return G__103899__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__103899;
})()
;
avl.clj.AVLSet.prototype.apply = (function (self__,args103898){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args103898)));
});
avl.clj.AVLSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
avl.clj.AVLSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
avl.clj.AVLSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLSet(self__._meta,cljs.core.assoc.call(null,self__.avl_map,x,x),null));
});
avl.clj.AVLSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.avl_map));
});
avl.clj.AVLSet.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
avl.clj.AVLSet.prototype.getTree = (function (){var self__ = this;
var this$ = this;return self__.avl_map.tree;
});
avl.clj.AVLSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return cljs.core.keys.call(null,cljs.core._sorted_seq.call(null,self__.avl_map,ascending_QMARK_));
});
avl.clj.AVLSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return cljs.core.keys.call(null,cljs.core._sorted_seq_from.call(null,self__.avl_map,k,ascending_QMARK_));
});
avl.clj.AVLSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return entry;
});
avl.clj.AVLSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._comparator.call(null,self__.avl_map);
});
avl.clj.AVLSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.keys.call(null,self__.avl_map);
});
avl.clj.AVLSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLSet(self__._meta,cljs.core.dissoc.call(null,self__.avl_map,v),null));
});
avl.clj.AVLSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._count.call(null,self__.avl_map);
});
avl.clj.AVLSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return (cljs.core.set_QMARK_.call(null,that)) && ((cljs.core.count.call(null,this$__$1) === cljs.core.count.call(null,that))) && (cljs.core.every_QMARK_.call(null,(function (p1__103897_SHARP_){return cljs.core.contains_QMARK_.call(null,this$__$1,p1__103897_SHARP_);
}),that));
});
avl.clj.AVLSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLSet(meta,self__.avl_map,self__._hash));
});
avl.clj.AVLSet.prototype.cljs$core$IMeta$meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
avl.clj.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,i,null);
});
avl.clj.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = avl.clj.select.call(null,self__.avl_map.tree,i);if(cljs.core.truth_(temp__4090__auto__))
{var n = temp__4090__auto__;return n.getVal();
} else
{return not_found;
}
});
avl.clj.AVLSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new avl.clj.AVLSet(self__._meta,cljs.core.empty.call(null,self__.avl_map),0));
});
avl.clj.__GT_AVLSet = (function __GT_AVLSet(_meta,avl_map,_hash){return (new avl.clj.AVLSet(_meta,avl_map,_hash));
});

/**
* @constructor
*/
avl.clj.AVLTransientSet = (function (transient_avl_map){
this.transient_avl_map = transient_avl_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
avl.clj.AVLTransientSet.cljs$lang$type = true;
avl.clj.AVLTransientSet.cljs$lang$ctorStr = "avl.clj/AVLTransientSet";
avl.clj.AVLTransientSet.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"avl.clj/AVLTransientSet");
});
avl.clj.AVLTransientSet.prototype.call = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return cljs.core._lookup.call(null,self__.transient_avl_map,k);
});
avl.clj.AVLTransientSet.prototype.apply = (function (self__,args103900){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args103900)));
});
avl.clj.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return cljs.core._lookup.call(null,self__.transient_avl_map,k);
});
avl.clj.AVLTransientSet.prototype.call = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return cljs.core._lookup.call(null,self__.transient_avl_map,k,not_found);
});
avl.clj.AVLTransientSet.prototype.apply = (function (self__,args103901){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args103901)));
});
avl.clj.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return cljs.core._lookup.call(null,self__.transient_avl_map,k,not_found);
});
avl.clj.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
avl.clj.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if((cljs.core._lookup.call(null,self__.transient_avl_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
avl.clj.AVLTransientSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._count.call(null,self__.transient_avl_map);
});
avl.clj.AVLTransientSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.transient_avl_map = cljs.core._dissoc_BANG_.call(null,self__.transient_avl_map,k);
return this$__$1;
});
avl.clj.AVLTransientSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.transient_avl_map = cljs.core._assoc_BANG_.call(null,self__.transient_avl_map,k,k);
return this$__$1;
});
avl.clj.AVLTransientSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.transient_avl_map.edit == null))
{throw cljs.core.ex_info.call(null,"persistent! used twice",cljs.core.PersistentArrayMap.EMPTY);
} else
{return (new avl.clj.AVLSet(null,cljs.core._persistent_BANG_.call(null,self__.transient_avl_map),null));
}
});
avl.clj.__GT_AVLTransientSet = (function __GT_AVLTransientSet(transient_avl_map){return (new avl.clj.AVLTransientSet(transient_avl_map));
});
avl.clj.empty_map = (new avl.clj.AVLMap(cljs.core.compare,null,0,null,0));
avl.clj.empty_set = (new avl.clj.AVLSet(null,avl.clj.empty_map,0));
avl.clj.AVLSet.prototype.cljs$core$IPrintWithWriter$ = true;
avl.clj.AVLSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,this$__$1);
});
avl.clj.AVLMap.prototype.cljs$core$IPrintWithWriter$ = true;
avl.clj.AVLMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;var pr_pair = (function pr_pair(keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,this$__$1);
});
avl.clj.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
avl.clj.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});
/**
* keyval => key val
* Returns a new AVL map with supplied mappings.
* @param {...*} var_args
*/
avl.clj.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = cljs.core.transient$.call(null,avl.clj.empty_map);while(true){
if(in$)
{{
var G__103902 = cljs.core.nnext.call(null,in$);
var G__103903 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__103902;
out = G__103903;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__103904){
var keyvals = cljs.core.seq(arglist__103904);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied
* comparator.
* @param {...*} var_args
*/
avl.clj.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = (new avl.clj.AVLTransientMap((function (){var obj103908 = {};return obj103908;
})(),cljs.core.fn__GT_comparator.call(null,comparator),null,0));while(true){
if(in$)
{{
var G__103909 = cljs.core.nnext.call(null,in$);
var G__103910 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__103909;
out = G__103910;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__103911){
var comparator = cljs.core.first(arglist__103911);
var keyvals = cljs.core.rest(arglist__103911);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
avl.clj.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,cljs.core.transient$.call(null,avl.clj.empty_set),keys));
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__103912){
var keys = cljs.core.seq(arglist__103912);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
avl.clj.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,(new avl.clj.AVLTransientSet(cljs.core._as_transient.call(null,avl.clj.sorted_map_by.call(null,cljs.core.fn__GT_comparator.call(null,comparator))))),keys));
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__103913){
var comparator = cljs.core.first(arglist__103913);
var keys = cljs.core.rest(arglist__103913);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Returns the rank of x in coll or -1 if not present.
*/
avl.clj.rank_of = (function rank_of(coll,x){return avl.clj.rank.call(null,cljs.core._comparator.call(null,coll),coll.getTree(),x);
});

//# sourceMappingURL=clj.js.map