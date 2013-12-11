// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__15183__auto__ = elem.textContent;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__49609 = dommy.template.__GT_node_like.call(null,parent);G__49609.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__49609;
});
var append_BANG___3 = (function() { 
var G__49614__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__49610_49615 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__49611_49616 = null;var count__49612_49617 = 0;var i__49613_49618 = 0;while(true){
if((i__49613_49618 < count__49612_49617))
{var c_49619 = cljs.core._nth.call(null,chunk__49611_49616,i__49613_49618);append_BANG_.call(null,parent__$1,c_49619);
{
var G__49620 = seq__49610_49615;
var G__49621 = chunk__49611_49616;
var G__49622 = count__49612_49617;
var G__49623 = (i__49613_49618 + 1);
seq__49610_49615 = G__49620;
chunk__49611_49616 = G__49621;
count__49612_49617 = G__49622;
i__49613_49618 = G__49623;
continue;
}
} else
{var temp__4098__auto___49624 = cljs.core.seq.call(null,seq__49610_49615);if(temp__4098__auto___49624)
{var seq__49610_49625__$1 = temp__4098__auto___49624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49610_49625__$1))
{var c__15907__auto___49626 = cljs.core.chunk_first.call(null,seq__49610_49625__$1);{
var G__49627 = cljs.core.chunk_rest.call(null,seq__49610_49625__$1);
var G__49628 = c__15907__auto___49626;
var G__49629 = cljs.core.count.call(null,c__15907__auto___49626);
var G__49630 = 0;
seq__49610_49615 = G__49627;
chunk__49611_49616 = G__49628;
count__49612_49617 = G__49629;
i__49613_49618 = G__49630;
continue;
}
} else
{var c_49631 = cljs.core.first.call(null,seq__49610_49625__$1);append_BANG_.call(null,parent__$1,c_49631);
{
var G__49632 = cljs.core.next.call(null,seq__49610_49625__$1);
var G__49633 = null;
var G__49634 = 0;
var G__49635 = 0;
seq__49610_49615 = G__49632;
chunk__49611_49616 = G__49633;
count__49612_49617 = G__49634;
i__49613_49618 = G__49635;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__49614 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__49614__delegate.call(this,parent,child,more_children);};
G__49614.cljs$lang$maxFixedArity = 2;
G__49614.cljs$lang$applyTo = (function (arglist__49636){
var parent = cljs.core.first(arglist__49636);
arglist__49636 = cljs.core.next(arglist__49636);
var child = cljs.core.first(arglist__49636);
var more_children = cljs.core.rest(arglist__49636);
return G__49614__delegate(parent,child,more_children);
});
G__49614.cljs$core$IFn$_invoke$arity$variadic = G__49614__delegate;
return G__49614;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__49645__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__49641_49646 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__49642_49647 = null;var count__49643_49648 = 0;var i__49644_49649 = 0;while(true){
if((i__49644_49649 < count__49643_49648))
{var c_49650 = cljs.core._nth.call(null,chunk__49642_49647,i__49644_49649);prepend_BANG_.call(null,parent__$1,c_49650);
{
var G__49651 = seq__49641_49646;
var G__49652 = chunk__49642_49647;
var G__49653 = count__49643_49648;
var G__49654 = (i__49644_49649 + 1);
seq__49641_49646 = G__49651;
chunk__49642_49647 = G__49652;
count__49643_49648 = G__49653;
i__49644_49649 = G__49654;
continue;
}
} else
{var temp__4098__auto___49655 = cljs.core.seq.call(null,seq__49641_49646);if(temp__4098__auto___49655)
{var seq__49641_49656__$1 = temp__4098__auto___49655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49641_49656__$1))
{var c__15907__auto___49657 = cljs.core.chunk_first.call(null,seq__49641_49656__$1);{
var G__49658 = cljs.core.chunk_rest.call(null,seq__49641_49656__$1);
var G__49659 = c__15907__auto___49657;
var G__49660 = cljs.core.count.call(null,c__15907__auto___49657);
var G__49661 = 0;
seq__49641_49646 = G__49658;
chunk__49642_49647 = G__49659;
count__49643_49648 = G__49660;
i__49644_49649 = G__49661;
continue;
}
} else
{var c_49662 = cljs.core.first.call(null,seq__49641_49656__$1);prepend_BANG_.call(null,parent__$1,c_49662);
{
var G__49663 = cljs.core.next.call(null,seq__49641_49656__$1);
var G__49664 = null;
var G__49665 = 0;
var G__49666 = 0;
seq__49641_49646 = G__49663;
chunk__49642_49647 = G__49664;
count__49643_49648 = G__49665;
i__49644_49649 = G__49666;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__49645 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__49645__delegate.call(this,parent,child,more_children);};
G__49645.cljs$lang$maxFixedArity = 2;
G__49645.cljs$lang$applyTo = (function (arglist__49667){
var parent = cljs.core.first(arglist__49667);
arglist__49667 = cljs.core.next(arglist__49667);
var child = cljs.core.first(arglist__49667);
var more_children = cljs.core.rest(arglist__49667);
return G__49645__delegate(parent,child,more_children);
});
G__49645.cljs$core$IFn$_invoke$arity$variadic = G__49645__delegate;
return G__49645;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4096__auto___49668 = other__$1.nextSibling;if(cljs.core.truth_(temp__4096__auto___49668))
{var next_49669 = temp__4096__auto___49668;parent.insertBefore(actual_node,next_49669);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__49671 = dommy.template.__GT_node_like.call(null,parent);G__49671.innerHTML = "";
dommy.core.append_BANG_.call(null,G__49671,node_like);
return G__49671;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__49673 = elem__$1.parentNode;G__49673.removeChild(elem__$1);
return G__49673;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49679){var vec__49680 = p__49679;var k = cljs.core.nth.call(null,vec__49680,0,null);var v = cljs.core.nth.call(null,vec__49680,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t49681 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t49681 = (function (v,k,vec__49680,p__49679,container,key_selectors_map,template,selector_map,meta49682){
this.v = v;
this.k = k;
this.vec__49680 = vec__49680;
this.p__49679 = p__49679;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta49682 = meta49682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t49681.cljs$lang$type = true;
dommy.core.t49681.cljs$lang$ctorStr = "dommy.core/t49681";
dommy.core.t49681.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"dommy.core/t49681");
});
dommy.core.t49681.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t49681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49683){var self__ = this;
var _49683__$1 = this;return self__.meta49682;
});
dommy.core.t49681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49683,meta49682__$1){var self__ = this;
var _49683__$1 = this;return (new dommy.core.t49681(self__.v,self__.k,self__.vec__49680,self__.p__49679,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta49682__$1));
});
dommy.core.__GT_t49681 = (function __GT_t49681(v__$1,k__$1,vec__49680__$1,p__49679__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta49682){return (new dommy.core.t49681(v__$1,k__$1,vec__49680__$1,p__49679__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta49682));
});
}
return (new dommy.core.t49681(v,k,vec__49680,p__49679,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__49684_SHARP_){return p1__49684_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__49685_SHARP_){return !((p1__49685_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__49686){var vec__49687 = p__49686;var special_mouse_event = cljs.core.nth.call(null,vec__49687,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__49687,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__15183__auto__ = event.selectedTarget;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__15171__auto__ = related_target;if(cljs.core.truth_(and__15171__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__15171__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__15171__auto__ = selected_target;if(cljs.core.truth_(and__15171__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__15171__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__15183__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__49688){
var elem = cljs.core.first(arglist__49688);
arglist__49688 = cljs.core.next(arglist__49688);
var f = cljs.core.first(arglist__49688);
var args = cljs.core.rest(arglist__49688);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__49689_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__49689_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__49713_49736 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_49737 = cljs.core.nth.call(null,vec__49713_49736,0,null);var selector_49738 = cljs.core.nth.call(null,vec__49713_49736,1,null);var seq__49714_49739 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__49721_49740 = null;var count__49722_49741 = 0;var i__49723_49742 = 0;while(true){
if((i__49723_49742 < count__49722_49741))
{var vec__49730_49743 = cljs.core._nth.call(null,chunk__49721_49740,i__49723_49742);var orig_type_49744 = cljs.core.nth.call(null,vec__49730_49743,0,null);var f_49745 = cljs.core.nth.call(null,vec__49730_49743,1,null);var seq__49724_49746 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_49744,new cljs.core.PersistentArrayMap.fromArray([orig_type_49744,cljs.core.identity], true, false)));var chunk__49726_49747 = null;var count__49727_49748 = 0;var i__49728_49749 = 0;while(true){
if((i__49728_49749 < count__49727_49748))
{var vec__49731_49750 = cljs.core._nth.call(null,chunk__49726_49747,i__49728_49749);var actual_type_49751 = cljs.core.nth.call(null,vec__49731_49750,0,null);var factory_49752 = cljs.core.nth.call(null,vec__49731_49750,1,null);var canonical_f_49753 = (cljs.core.truth_(selector_49738)?cljs.core.partial.call(null,dommy.core.live_listener,elem_49737,selector_49738):cljs.core.identity).call(null,factory_49752.call(null,f_49745));dommy.core.update_event_listeners_BANG_.call(null,elem_49737,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49738,actual_type_49751,f_49745], null),canonical_f_49753);
if(cljs.core.truth_(elem_49737.addEventListener))
{elem_49737.addEventListener(cljs.core.name.call(null,actual_type_49751),canonical_f_49753);
} else
{elem_49737.attachEvent(cljs.core.name.call(null,actual_type_49751),canonical_f_49753);
}
{
var G__49754 = seq__49724_49746;
var G__49755 = chunk__49726_49747;
var G__49756 = count__49727_49748;
var G__49757 = (i__49728_49749 + 1);
seq__49724_49746 = G__49754;
chunk__49726_49747 = G__49755;
count__49727_49748 = G__49756;
i__49728_49749 = G__49757;
continue;
}
} else
{var temp__4098__auto___49758 = cljs.core.seq.call(null,seq__49724_49746);if(temp__4098__auto___49758)
{var seq__49724_49759__$1 = temp__4098__auto___49758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49724_49759__$1))
{var c__15907__auto___49760 = cljs.core.chunk_first.call(null,seq__49724_49759__$1);{
var G__49761 = cljs.core.chunk_rest.call(null,seq__49724_49759__$1);
var G__49762 = c__15907__auto___49760;
var G__49763 = cljs.core.count.call(null,c__15907__auto___49760);
var G__49764 = 0;
seq__49724_49746 = G__49761;
chunk__49726_49747 = G__49762;
count__49727_49748 = G__49763;
i__49728_49749 = G__49764;
continue;
}
} else
{var vec__49732_49765 = cljs.core.first.call(null,seq__49724_49759__$1);var actual_type_49766 = cljs.core.nth.call(null,vec__49732_49765,0,null);var factory_49767 = cljs.core.nth.call(null,vec__49732_49765,1,null);var canonical_f_49768 = (cljs.core.truth_(selector_49738)?cljs.core.partial.call(null,dommy.core.live_listener,elem_49737,selector_49738):cljs.core.identity).call(null,factory_49767.call(null,f_49745));dommy.core.update_event_listeners_BANG_.call(null,elem_49737,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49738,actual_type_49766,f_49745], null),canonical_f_49768);
if(cljs.core.truth_(elem_49737.addEventListener))
{elem_49737.addEventListener(cljs.core.name.call(null,actual_type_49766),canonical_f_49768);
} else
{elem_49737.attachEvent(cljs.core.name.call(null,actual_type_49766),canonical_f_49768);
}
{
var G__49769 = cljs.core.next.call(null,seq__49724_49759__$1);
var G__49770 = null;
var G__49771 = 0;
var G__49772 = 0;
seq__49724_49746 = G__49769;
chunk__49726_49747 = G__49770;
count__49727_49748 = G__49771;
i__49728_49749 = G__49772;
continue;
}
}
} else
{}
}
break;
}
{
var G__49773 = seq__49714_49739;
var G__49774 = chunk__49721_49740;
var G__49775 = count__49722_49741;
var G__49776 = (i__49723_49742 + 1);
seq__49714_49739 = G__49773;
chunk__49721_49740 = G__49774;
count__49722_49741 = G__49775;
i__49723_49742 = G__49776;
continue;
}
} else
{var temp__4098__auto___49777 = cljs.core.seq.call(null,seq__49714_49739);if(temp__4098__auto___49777)
{var seq__49714_49778__$1 = temp__4098__auto___49777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49714_49778__$1))
{var c__15907__auto___49779 = cljs.core.chunk_first.call(null,seq__49714_49778__$1);{
var G__49780 = cljs.core.chunk_rest.call(null,seq__49714_49778__$1);
var G__49781 = c__15907__auto___49779;
var G__49782 = cljs.core.count.call(null,c__15907__auto___49779);
var G__49783 = 0;
seq__49714_49739 = G__49780;
chunk__49721_49740 = G__49781;
count__49722_49741 = G__49782;
i__49723_49742 = G__49783;
continue;
}
} else
{var vec__49733_49784 = cljs.core.first.call(null,seq__49714_49778__$1);var orig_type_49785 = cljs.core.nth.call(null,vec__49733_49784,0,null);var f_49786 = cljs.core.nth.call(null,vec__49733_49784,1,null);var seq__49715_49787 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_49785,new cljs.core.PersistentArrayMap.fromArray([orig_type_49785,cljs.core.identity], true, false)));var chunk__49717_49788 = null;var count__49718_49789 = 0;var i__49719_49790 = 0;while(true){
if((i__49719_49790 < count__49718_49789))
{var vec__49734_49791 = cljs.core._nth.call(null,chunk__49717_49788,i__49719_49790);var actual_type_49792 = cljs.core.nth.call(null,vec__49734_49791,0,null);var factory_49793 = cljs.core.nth.call(null,vec__49734_49791,1,null);var canonical_f_49794 = (cljs.core.truth_(selector_49738)?cljs.core.partial.call(null,dommy.core.live_listener,elem_49737,selector_49738):cljs.core.identity).call(null,factory_49793.call(null,f_49786));dommy.core.update_event_listeners_BANG_.call(null,elem_49737,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49738,actual_type_49792,f_49786], null),canonical_f_49794);
if(cljs.core.truth_(elem_49737.addEventListener))
{elem_49737.addEventListener(cljs.core.name.call(null,actual_type_49792),canonical_f_49794);
} else
{elem_49737.attachEvent(cljs.core.name.call(null,actual_type_49792),canonical_f_49794);
}
{
var G__49795 = seq__49715_49787;
var G__49796 = chunk__49717_49788;
var G__49797 = count__49718_49789;
var G__49798 = (i__49719_49790 + 1);
seq__49715_49787 = G__49795;
chunk__49717_49788 = G__49796;
count__49718_49789 = G__49797;
i__49719_49790 = G__49798;
continue;
}
} else
{var temp__4098__auto___49799__$1 = cljs.core.seq.call(null,seq__49715_49787);if(temp__4098__auto___49799__$1)
{var seq__49715_49800__$1 = temp__4098__auto___49799__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49715_49800__$1))
{var c__15907__auto___49801 = cljs.core.chunk_first.call(null,seq__49715_49800__$1);{
var G__49802 = cljs.core.chunk_rest.call(null,seq__49715_49800__$1);
var G__49803 = c__15907__auto___49801;
var G__49804 = cljs.core.count.call(null,c__15907__auto___49801);
var G__49805 = 0;
seq__49715_49787 = G__49802;
chunk__49717_49788 = G__49803;
count__49718_49789 = G__49804;
i__49719_49790 = G__49805;
continue;
}
} else
{var vec__49735_49806 = cljs.core.first.call(null,seq__49715_49800__$1);var actual_type_49807 = cljs.core.nth.call(null,vec__49735_49806,0,null);var factory_49808 = cljs.core.nth.call(null,vec__49735_49806,1,null);var canonical_f_49809 = (cljs.core.truth_(selector_49738)?cljs.core.partial.call(null,dommy.core.live_listener,elem_49737,selector_49738):cljs.core.identity).call(null,factory_49808.call(null,f_49786));dommy.core.update_event_listeners_BANG_.call(null,elem_49737,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49738,actual_type_49807,f_49786], null),canonical_f_49809);
if(cljs.core.truth_(elem_49737.addEventListener))
{elem_49737.addEventListener(cljs.core.name.call(null,actual_type_49807),canonical_f_49809);
} else
{elem_49737.attachEvent(cljs.core.name.call(null,actual_type_49807),canonical_f_49809);
}
{
var G__49810 = cljs.core.next.call(null,seq__49715_49800__$1);
var G__49811 = null;
var G__49812 = 0;
var G__49813 = 0;
seq__49715_49787 = G__49810;
chunk__49717_49788 = G__49811;
count__49718_49789 = G__49812;
i__49719_49790 = G__49813;
continue;
}
}
} else
{}
}
break;
}
{
var G__49814 = cljs.core.next.call(null,seq__49714_49778__$1);
var G__49815 = null;
var G__49816 = 0;
var G__49817 = 0;
seq__49714_49739 = G__49814;
chunk__49721_49740 = G__49815;
count__49722_49741 = G__49816;
i__49723_49742 = G__49817;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__49818){
var elem_sel = cljs.core.first(arglist__49818);
var type_fs = cljs.core.rest(arglist__49818);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__49842_49865 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_49866 = cljs.core.nth.call(null,vec__49842_49865,0,null);var selector_49867 = cljs.core.nth.call(null,vec__49842_49865,1,null);var seq__49843_49868 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__49850_49869 = null;var count__49851_49870 = 0;var i__49852_49871 = 0;while(true){
if((i__49852_49871 < count__49851_49870))
{var vec__49859_49872 = cljs.core._nth.call(null,chunk__49850_49869,i__49852_49871);var orig_type_49873 = cljs.core.nth.call(null,vec__49859_49872,0,null);var f_49874 = cljs.core.nth.call(null,vec__49859_49872,1,null);var seq__49853_49875 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_49873,new cljs.core.PersistentArrayMap.fromArray([orig_type_49873,cljs.core.identity], true, false)));var chunk__49855_49876 = null;var count__49856_49877 = 0;var i__49857_49878 = 0;while(true){
if((i__49857_49878 < count__49856_49877))
{var vec__49860_49879 = cljs.core._nth.call(null,chunk__49855_49876,i__49857_49878);var actual_type_49880 = cljs.core.nth.call(null,vec__49860_49879,0,null);var __49881 = cljs.core.nth.call(null,vec__49860_49879,1,null);var keys_49882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49867,actual_type_49880,f_49874], null);var canonical_f_49883 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_49866),keys_49882);dommy.core.update_event_listeners_BANG_.call(null,elem_49866,dommy.utils.dissoc_in,keys_49882);
if(cljs.core.truth_(elem_49866.removeEventListener))
{elem_49866.removeEventListener(cljs.core.name.call(null,actual_type_49880),canonical_f_49883);
} else
{elem_49866.detachEvent(cljs.core.name.call(null,actual_type_49880),canonical_f_49883);
}
{
var G__49884 = seq__49853_49875;
var G__49885 = chunk__49855_49876;
var G__49886 = count__49856_49877;
var G__49887 = (i__49857_49878 + 1);
seq__49853_49875 = G__49884;
chunk__49855_49876 = G__49885;
count__49856_49877 = G__49886;
i__49857_49878 = G__49887;
continue;
}
} else
{var temp__4098__auto___49888 = cljs.core.seq.call(null,seq__49853_49875);if(temp__4098__auto___49888)
{var seq__49853_49889__$1 = temp__4098__auto___49888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49853_49889__$1))
{var c__15907__auto___49890 = cljs.core.chunk_first.call(null,seq__49853_49889__$1);{
var G__49891 = cljs.core.chunk_rest.call(null,seq__49853_49889__$1);
var G__49892 = c__15907__auto___49890;
var G__49893 = cljs.core.count.call(null,c__15907__auto___49890);
var G__49894 = 0;
seq__49853_49875 = G__49891;
chunk__49855_49876 = G__49892;
count__49856_49877 = G__49893;
i__49857_49878 = G__49894;
continue;
}
} else
{var vec__49861_49895 = cljs.core.first.call(null,seq__49853_49889__$1);var actual_type_49896 = cljs.core.nth.call(null,vec__49861_49895,0,null);var __49897 = cljs.core.nth.call(null,vec__49861_49895,1,null);var keys_49898 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49867,actual_type_49896,f_49874], null);var canonical_f_49899 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_49866),keys_49898);dommy.core.update_event_listeners_BANG_.call(null,elem_49866,dommy.utils.dissoc_in,keys_49898);
if(cljs.core.truth_(elem_49866.removeEventListener))
{elem_49866.removeEventListener(cljs.core.name.call(null,actual_type_49896),canonical_f_49899);
} else
{elem_49866.detachEvent(cljs.core.name.call(null,actual_type_49896),canonical_f_49899);
}
{
var G__49900 = cljs.core.next.call(null,seq__49853_49889__$1);
var G__49901 = null;
var G__49902 = 0;
var G__49903 = 0;
seq__49853_49875 = G__49900;
chunk__49855_49876 = G__49901;
count__49856_49877 = G__49902;
i__49857_49878 = G__49903;
continue;
}
}
} else
{}
}
break;
}
{
var G__49904 = seq__49843_49868;
var G__49905 = chunk__49850_49869;
var G__49906 = count__49851_49870;
var G__49907 = (i__49852_49871 + 1);
seq__49843_49868 = G__49904;
chunk__49850_49869 = G__49905;
count__49851_49870 = G__49906;
i__49852_49871 = G__49907;
continue;
}
} else
{var temp__4098__auto___49908 = cljs.core.seq.call(null,seq__49843_49868);if(temp__4098__auto___49908)
{var seq__49843_49909__$1 = temp__4098__auto___49908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49843_49909__$1))
{var c__15907__auto___49910 = cljs.core.chunk_first.call(null,seq__49843_49909__$1);{
var G__49911 = cljs.core.chunk_rest.call(null,seq__49843_49909__$1);
var G__49912 = c__15907__auto___49910;
var G__49913 = cljs.core.count.call(null,c__15907__auto___49910);
var G__49914 = 0;
seq__49843_49868 = G__49911;
chunk__49850_49869 = G__49912;
count__49851_49870 = G__49913;
i__49852_49871 = G__49914;
continue;
}
} else
{var vec__49862_49915 = cljs.core.first.call(null,seq__49843_49909__$1);var orig_type_49916 = cljs.core.nth.call(null,vec__49862_49915,0,null);var f_49917 = cljs.core.nth.call(null,vec__49862_49915,1,null);var seq__49844_49918 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_49916,new cljs.core.PersistentArrayMap.fromArray([orig_type_49916,cljs.core.identity], true, false)));var chunk__49846_49919 = null;var count__49847_49920 = 0;var i__49848_49921 = 0;while(true){
if((i__49848_49921 < count__49847_49920))
{var vec__49863_49922 = cljs.core._nth.call(null,chunk__49846_49919,i__49848_49921);var actual_type_49923 = cljs.core.nth.call(null,vec__49863_49922,0,null);var __49924 = cljs.core.nth.call(null,vec__49863_49922,1,null);var keys_49925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49867,actual_type_49923,f_49917], null);var canonical_f_49926 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_49866),keys_49925);dommy.core.update_event_listeners_BANG_.call(null,elem_49866,dommy.utils.dissoc_in,keys_49925);
if(cljs.core.truth_(elem_49866.removeEventListener))
{elem_49866.removeEventListener(cljs.core.name.call(null,actual_type_49923),canonical_f_49926);
} else
{elem_49866.detachEvent(cljs.core.name.call(null,actual_type_49923),canonical_f_49926);
}
{
var G__49927 = seq__49844_49918;
var G__49928 = chunk__49846_49919;
var G__49929 = count__49847_49920;
var G__49930 = (i__49848_49921 + 1);
seq__49844_49918 = G__49927;
chunk__49846_49919 = G__49928;
count__49847_49920 = G__49929;
i__49848_49921 = G__49930;
continue;
}
} else
{var temp__4098__auto___49931__$1 = cljs.core.seq.call(null,seq__49844_49918);if(temp__4098__auto___49931__$1)
{var seq__49844_49932__$1 = temp__4098__auto___49931__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49844_49932__$1))
{var c__15907__auto___49933 = cljs.core.chunk_first.call(null,seq__49844_49932__$1);{
var G__49934 = cljs.core.chunk_rest.call(null,seq__49844_49932__$1);
var G__49935 = c__15907__auto___49933;
var G__49936 = cljs.core.count.call(null,c__15907__auto___49933);
var G__49937 = 0;
seq__49844_49918 = G__49934;
chunk__49846_49919 = G__49935;
count__49847_49920 = G__49936;
i__49848_49921 = G__49937;
continue;
}
} else
{var vec__49864_49938 = cljs.core.first.call(null,seq__49844_49932__$1);var actual_type_49939 = cljs.core.nth.call(null,vec__49864_49938,0,null);var __49940 = cljs.core.nth.call(null,vec__49864_49938,1,null);var keys_49941 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_49867,actual_type_49939,f_49917], null);var canonical_f_49942 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_49866),keys_49941);dommy.core.update_event_listeners_BANG_.call(null,elem_49866,dommy.utils.dissoc_in,keys_49941);
if(cljs.core.truth_(elem_49866.removeEventListener))
{elem_49866.removeEventListener(cljs.core.name.call(null,actual_type_49939),canonical_f_49942);
} else
{elem_49866.detachEvent(cljs.core.name.call(null,actual_type_49939),canonical_f_49942);
}
{
var G__49943 = cljs.core.next.call(null,seq__49844_49932__$1);
var G__49944 = null;
var G__49945 = 0;
var G__49946 = 0;
seq__49844_49918 = G__49943;
chunk__49846_49919 = G__49944;
count__49847_49920 = G__49945;
i__49848_49921 = G__49946;
continue;
}
}
} else
{}
}
break;
}
{
var G__49947 = cljs.core.next.call(null,seq__49843_49909__$1);
var G__49948 = null;
var G__49949 = 0;
var G__49950 = 0;
seq__49843_49868 = G__49947;
chunk__49850_49869 = G__49948;
count__49851_49870 = G__49949;
i__49852_49871 = G__49950;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__49951){
var elem_sel = cljs.core.first(arglist__49951);
var type_fs = cljs.core.rest(arglist__49951);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__49959_49966 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_49967 = cljs.core.nth.call(null,vec__49959_49966,0,null);var selector_49968 = cljs.core.nth.call(null,vec__49959_49966,1,null);var seq__49960_49969 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__49961_49970 = null;var count__49962_49971 = 0;var i__49963_49972 = 0;while(true){
if((i__49963_49972 < count__49962_49971))
{var vec__49964_49973 = cljs.core._nth.call(null,chunk__49961_49970,i__49963_49972);var type_49974 = cljs.core.nth.call(null,vec__49964_49973,0,null);var f_49975 = cljs.core.nth.call(null,vec__49964_49973,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_49974,((function (seq__49960_49969,chunk__49961_49970,count__49962_49971,i__49963_49972,vec__49964_49973,type_49974,f_49975){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_49974,this_fn);
return f_49975.call(null,e);
});})(seq__49960_49969,chunk__49961_49970,count__49962_49971,i__49963_49972,vec__49964_49973,type_49974,f_49975))
);
{
var G__49976 = seq__49960_49969;
var G__49977 = chunk__49961_49970;
var G__49978 = count__49962_49971;
var G__49979 = (i__49963_49972 + 1);
seq__49960_49969 = G__49976;
chunk__49961_49970 = G__49977;
count__49962_49971 = G__49978;
i__49963_49972 = G__49979;
continue;
}
} else
{var temp__4098__auto___49980 = cljs.core.seq.call(null,seq__49960_49969);if(temp__4098__auto___49980)
{var seq__49960_49981__$1 = temp__4098__auto___49980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49960_49981__$1))
{var c__15907__auto___49982 = cljs.core.chunk_first.call(null,seq__49960_49981__$1);{
var G__49983 = cljs.core.chunk_rest.call(null,seq__49960_49981__$1);
var G__49984 = c__15907__auto___49982;
var G__49985 = cljs.core.count.call(null,c__15907__auto___49982);
var G__49986 = 0;
seq__49960_49969 = G__49983;
chunk__49961_49970 = G__49984;
count__49962_49971 = G__49985;
i__49963_49972 = G__49986;
continue;
}
} else
{var vec__49965_49987 = cljs.core.first.call(null,seq__49960_49981__$1);var type_49988 = cljs.core.nth.call(null,vec__49965_49987,0,null);var f_49989 = cljs.core.nth.call(null,vec__49965_49987,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_49988,((function (seq__49960_49969,chunk__49961_49970,count__49962_49971,i__49963_49972,vec__49965_49987,type_49988,f_49989,seq__49960_49981__$1,temp__4098__auto___49980){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_49988,this_fn);
return f_49989.call(null,e);
});})(seq__49960_49969,chunk__49961_49970,count__49962_49971,i__49963_49972,vec__49965_49987,type_49988,f_49989,seq__49960_49981__$1,temp__4098__auto___49980))
);
{
var G__49990 = cljs.core.next.call(null,seq__49960_49981__$1);
var G__49991 = null;
var G__49992 = 0;
var G__49993 = 0;
seq__49960_49969 = G__49990;
chunk__49961_49970 = G__49991;
count__49962_49971 = G__49992;
i__49963_49972 = G__49993;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__49994){
var elem_sel = cljs.core.first(arglist__49994);
var type_fs = cljs.core.rest(arglist__49994);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__49995){var vec__49997 = p__49995;var update_event_BANG_ = cljs.core.nth.call(null,vec__49997,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__15183__auto__ = update_event_BANG_;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__49995 = null;if (arguments.length > 2) {
  p__49995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__49995);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__49998){
var node = cljs.core.first(arglist__49998);
arglist__49998 = cljs.core.next(arglist__49998);
var event_type = cljs.core.first(arglist__49998);
var p__49995 = cljs.core.rest(arglist__49998);
return fire_BANG___delegate(node,event_type,p__49995);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map