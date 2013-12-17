// Compiled by ClojureScript 0.0-2120
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
dommy.core.text = (function text(elem){var or__8198__auto__ = elem.textContent;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
var append_BANG___2 = (function (parent,child){var G__24666 = dommy.template.__GT_node_like.call(null,parent);G__24666.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__24666;
});
var append_BANG___3 = (function() { 
var G__24671__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24667_24672 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24668_24673 = null;var count__24669_24674 = 0;var i__24670_24675 = 0;while(true){
if((i__24670_24675 < count__24669_24674))
{var c_24676 = cljs.core._nth.call(null,chunk__24668_24673,i__24670_24675);append_BANG_.call(null,parent__$1,c_24676);
{
var G__24677 = seq__24667_24672;
var G__24678 = chunk__24668_24673;
var G__24679 = count__24669_24674;
var G__24680 = (i__24670_24675 + 1);
seq__24667_24672 = G__24677;
chunk__24668_24673 = G__24678;
count__24669_24674 = G__24679;
i__24670_24675 = G__24680;
continue;
}
} else
{var temp__4092__auto___24681 = cljs.core.seq.call(null,seq__24667_24672);if(temp__4092__auto___24681)
{var seq__24667_24682__$1 = temp__4092__auto___24681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24667_24682__$1))
{var c__8927__auto___24683 = cljs.core.chunk_first.call(null,seq__24667_24682__$1);{
var G__24684 = cljs.core.chunk_rest.call(null,seq__24667_24682__$1);
var G__24685 = c__8927__auto___24683;
var G__24686 = cljs.core.count.call(null,c__8927__auto___24683);
var G__24687 = 0;
seq__24667_24672 = G__24684;
chunk__24668_24673 = G__24685;
count__24669_24674 = G__24686;
i__24670_24675 = G__24687;
continue;
}
} else
{var c_24688 = cljs.core.first.call(null,seq__24667_24682__$1);append_BANG_.call(null,parent__$1,c_24688);
{
var G__24689 = cljs.core.next.call(null,seq__24667_24682__$1);
var G__24690 = null;
var G__24691 = 0;
var G__24692 = 0;
seq__24667_24672 = G__24689;
chunk__24668_24673 = G__24690;
count__24669_24674 = G__24691;
i__24670_24675 = G__24692;
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
var G__24671 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24671__delegate.call(this,parent,child,more_children);};
G__24671.cljs$lang$maxFixedArity = 2;
G__24671.cljs$lang$applyTo = (function (arglist__24693){
var parent = cljs.core.first(arglist__24693);
arglist__24693 = cljs.core.next(arglist__24693);
var child = cljs.core.first(arglist__24693);
var more_children = cljs.core.rest(arglist__24693);
return G__24671__delegate(parent,child,more_children);
});
G__24671.cljs$core$IFn$_invoke$arity$variadic = G__24671__delegate;
return G__24671;
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
var G__24702__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24698_24703 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24699_24704 = null;var count__24700_24705 = 0;var i__24701_24706 = 0;while(true){
if((i__24701_24706 < count__24700_24705))
{var c_24707 = cljs.core._nth.call(null,chunk__24699_24704,i__24701_24706);prepend_BANG_.call(null,parent__$1,c_24707);
{
var G__24708 = seq__24698_24703;
var G__24709 = chunk__24699_24704;
var G__24710 = count__24700_24705;
var G__24711 = (i__24701_24706 + 1);
seq__24698_24703 = G__24708;
chunk__24699_24704 = G__24709;
count__24700_24705 = G__24710;
i__24701_24706 = G__24711;
continue;
}
} else
{var temp__4092__auto___24712 = cljs.core.seq.call(null,seq__24698_24703);if(temp__4092__auto___24712)
{var seq__24698_24713__$1 = temp__4092__auto___24712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24698_24713__$1))
{var c__8927__auto___24714 = cljs.core.chunk_first.call(null,seq__24698_24713__$1);{
var G__24715 = cljs.core.chunk_rest.call(null,seq__24698_24713__$1);
var G__24716 = c__8927__auto___24714;
var G__24717 = cljs.core.count.call(null,c__8927__auto___24714);
var G__24718 = 0;
seq__24698_24703 = G__24715;
chunk__24699_24704 = G__24716;
count__24700_24705 = G__24717;
i__24701_24706 = G__24718;
continue;
}
} else
{var c_24719 = cljs.core.first.call(null,seq__24698_24713__$1);prepend_BANG_.call(null,parent__$1,c_24719);
{
var G__24720 = cljs.core.next.call(null,seq__24698_24713__$1);
var G__24721 = null;
var G__24722 = 0;
var G__24723 = 0;
seq__24698_24703 = G__24720;
chunk__24699_24704 = G__24721;
count__24700_24705 = G__24722;
i__24701_24706 = G__24723;
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
var G__24702 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24702__delegate.call(this,parent,child,more_children);};
G__24702.cljs$lang$maxFixedArity = 2;
G__24702.cljs$lang$applyTo = (function (arglist__24724){
var parent = cljs.core.first(arglist__24724);
arglist__24724 = cljs.core.next(arglist__24724);
var child = cljs.core.first(arglist__24724);
var more_children = cljs.core.rest(arglist__24724);
return G__24702__delegate(parent,child,more_children);
});
G__24702.cljs$core$IFn$_invoke$arity$variadic = G__24702__delegate;
return G__24702;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___24725 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___24725))
{var next_24726 = temp__4090__auto___24725;parent.insertBefore(actual_node,next_24726);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__24728 = dommy.template.__GT_node_like.call(null,parent);G__24728.innerHTML = "";
dommy.core.append_BANG_.call(null,G__24728,node_like);
return G__24728;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__24730 = elem__$1.parentNode;G__24730.removeChild(elem__$1);
return G__24730;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24736){var vec__24737 = p__24736;var k = cljs.core.nth.call(null,vec__24737,0,null);var v = cljs.core.nth.call(null,vec__24737,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t24738 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t24738 = (function (v,k,vec__24737,p__24736,container,key_selectors_map,template,selector_map,meta24739){
this.v = v;
this.k = k;
this.vec__24737 = vec__24737;
this.p__24736 = p__24736;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta24739 = meta24739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t24738.cljs$lang$type = true;
dommy.core.t24738.cljs$lang$ctorStr = "dommy.core/t24738";
dommy.core.t24738.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"dommy.core/t24738");
});
dommy.core.t24738.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t24738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24740){var self__ = this;
var _24740__$1 = this;return self__.meta24739;
});
dommy.core.t24738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24740,meta24739__$1){var self__ = this;
var _24740__$1 = this;return (new dommy.core.t24738(self__.v,self__.k,self__.vec__24737,self__.p__24736,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta24739__$1));
});
dommy.core.__GT_t24738 = (function __GT_t24738(v__$1,k__$1,vec__24737__$1,p__24736__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24739){return (new dommy.core.t24738(v__$1,k__$1,vec__24737__$1,p__24736__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24739));
});
}
return (new dommy.core.t24738(v,k,vec__24737,p__24736,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__24741_SHARP_){return p1__24741_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__24742_SHARP_){return !((p1__24742_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24743){var vec__24744 = p__24743;var special_mouse_event = cljs.core.nth.call(null,vec__24744,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__24744,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8198__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8186__auto__ = related_target;if(cljs.core.truth_(and__8186__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8186__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8186__auto__ = selected_target;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8186__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8198__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__24745){
var elem = cljs.core.first(arglist__24745);
arglist__24745 = cljs.core.next(arglist__24745);
var f = cljs.core.first(arglist__24745);
var args = cljs.core.rest(arglist__24745);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__24746_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__24746_SHARP_));
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
var vec__24770_24793 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24794 = cljs.core.nth.call(null,vec__24770_24793,0,null);var selector_24795 = cljs.core.nth.call(null,vec__24770_24793,1,null);var seq__24771_24796 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24778_24797 = null;var count__24779_24798 = 0;var i__24780_24799 = 0;while(true){
if((i__24780_24799 < count__24779_24798))
{var vec__24787_24800 = cljs.core._nth.call(null,chunk__24778_24797,i__24780_24799);var orig_type_24801 = cljs.core.nth.call(null,vec__24787_24800,0,null);var f_24802 = cljs.core.nth.call(null,vec__24787_24800,1,null);var seq__24781_24803 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24801,new cljs.core.PersistentArrayMap.fromArray([orig_type_24801,cljs.core.identity], true, false)));var chunk__24783_24804 = null;var count__24784_24805 = 0;var i__24785_24806 = 0;while(true){
if((i__24785_24806 < count__24784_24805))
{var vec__24788_24807 = cljs.core._nth.call(null,chunk__24783_24804,i__24785_24806);var actual_type_24808 = cljs.core.nth.call(null,vec__24788_24807,0,null);var factory_24809 = cljs.core.nth.call(null,vec__24788_24807,1,null);var canonical_f_24810 = (cljs.core.truth_(selector_24795)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24794,selector_24795):cljs.core.identity).call(null,factory_24809.call(null,f_24802));dommy.core.update_event_listeners_BANG_.call(null,elem_24794,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24795,actual_type_24808,f_24802], null),canonical_f_24810);
if(cljs.core.truth_(elem_24794.addEventListener))
{elem_24794.addEventListener(cljs.core.name.call(null,actual_type_24808),canonical_f_24810);
} else
{elem_24794.attachEvent(cljs.core.name.call(null,actual_type_24808),canonical_f_24810);
}
{
var G__24811 = seq__24781_24803;
var G__24812 = chunk__24783_24804;
var G__24813 = count__24784_24805;
var G__24814 = (i__24785_24806 + 1);
seq__24781_24803 = G__24811;
chunk__24783_24804 = G__24812;
count__24784_24805 = G__24813;
i__24785_24806 = G__24814;
continue;
}
} else
{var temp__4092__auto___24815 = cljs.core.seq.call(null,seq__24781_24803);if(temp__4092__auto___24815)
{var seq__24781_24816__$1 = temp__4092__auto___24815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24781_24816__$1))
{var c__8927__auto___24817 = cljs.core.chunk_first.call(null,seq__24781_24816__$1);{
var G__24818 = cljs.core.chunk_rest.call(null,seq__24781_24816__$1);
var G__24819 = c__8927__auto___24817;
var G__24820 = cljs.core.count.call(null,c__8927__auto___24817);
var G__24821 = 0;
seq__24781_24803 = G__24818;
chunk__24783_24804 = G__24819;
count__24784_24805 = G__24820;
i__24785_24806 = G__24821;
continue;
}
} else
{var vec__24789_24822 = cljs.core.first.call(null,seq__24781_24816__$1);var actual_type_24823 = cljs.core.nth.call(null,vec__24789_24822,0,null);var factory_24824 = cljs.core.nth.call(null,vec__24789_24822,1,null);var canonical_f_24825 = (cljs.core.truth_(selector_24795)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24794,selector_24795):cljs.core.identity).call(null,factory_24824.call(null,f_24802));dommy.core.update_event_listeners_BANG_.call(null,elem_24794,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24795,actual_type_24823,f_24802], null),canonical_f_24825);
if(cljs.core.truth_(elem_24794.addEventListener))
{elem_24794.addEventListener(cljs.core.name.call(null,actual_type_24823),canonical_f_24825);
} else
{elem_24794.attachEvent(cljs.core.name.call(null,actual_type_24823),canonical_f_24825);
}
{
var G__24826 = cljs.core.next.call(null,seq__24781_24816__$1);
var G__24827 = null;
var G__24828 = 0;
var G__24829 = 0;
seq__24781_24803 = G__24826;
chunk__24783_24804 = G__24827;
count__24784_24805 = G__24828;
i__24785_24806 = G__24829;
continue;
}
}
} else
{}
}
break;
}
{
var G__24830 = seq__24771_24796;
var G__24831 = chunk__24778_24797;
var G__24832 = count__24779_24798;
var G__24833 = (i__24780_24799 + 1);
seq__24771_24796 = G__24830;
chunk__24778_24797 = G__24831;
count__24779_24798 = G__24832;
i__24780_24799 = G__24833;
continue;
}
} else
{var temp__4092__auto___24834 = cljs.core.seq.call(null,seq__24771_24796);if(temp__4092__auto___24834)
{var seq__24771_24835__$1 = temp__4092__auto___24834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24771_24835__$1))
{var c__8927__auto___24836 = cljs.core.chunk_first.call(null,seq__24771_24835__$1);{
var G__24837 = cljs.core.chunk_rest.call(null,seq__24771_24835__$1);
var G__24838 = c__8927__auto___24836;
var G__24839 = cljs.core.count.call(null,c__8927__auto___24836);
var G__24840 = 0;
seq__24771_24796 = G__24837;
chunk__24778_24797 = G__24838;
count__24779_24798 = G__24839;
i__24780_24799 = G__24840;
continue;
}
} else
{var vec__24790_24841 = cljs.core.first.call(null,seq__24771_24835__$1);var orig_type_24842 = cljs.core.nth.call(null,vec__24790_24841,0,null);var f_24843 = cljs.core.nth.call(null,vec__24790_24841,1,null);var seq__24772_24844 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24842,new cljs.core.PersistentArrayMap.fromArray([orig_type_24842,cljs.core.identity], true, false)));var chunk__24774_24845 = null;var count__24775_24846 = 0;var i__24776_24847 = 0;while(true){
if((i__24776_24847 < count__24775_24846))
{var vec__24791_24848 = cljs.core._nth.call(null,chunk__24774_24845,i__24776_24847);var actual_type_24849 = cljs.core.nth.call(null,vec__24791_24848,0,null);var factory_24850 = cljs.core.nth.call(null,vec__24791_24848,1,null);var canonical_f_24851 = (cljs.core.truth_(selector_24795)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24794,selector_24795):cljs.core.identity).call(null,factory_24850.call(null,f_24843));dommy.core.update_event_listeners_BANG_.call(null,elem_24794,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24795,actual_type_24849,f_24843], null),canonical_f_24851);
if(cljs.core.truth_(elem_24794.addEventListener))
{elem_24794.addEventListener(cljs.core.name.call(null,actual_type_24849),canonical_f_24851);
} else
{elem_24794.attachEvent(cljs.core.name.call(null,actual_type_24849),canonical_f_24851);
}
{
var G__24852 = seq__24772_24844;
var G__24853 = chunk__24774_24845;
var G__24854 = count__24775_24846;
var G__24855 = (i__24776_24847 + 1);
seq__24772_24844 = G__24852;
chunk__24774_24845 = G__24853;
count__24775_24846 = G__24854;
i__24776_24847 = G__24855;
continue;
}
} else
{var temp__4092__auto___24856__$1 = cljs.core.seq.call(null,seq__24772_24844);if(temp__4092__auto___24856__$1)
{var seq__24772_24857__$1 = temp__4092__auto___24856__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24772_24857__$1))
{var c__8927__auto___24858 = cljs.core.chunk_first.call(null,seq__24772_24857__$1);{
var G__24859 = cljs.core.chunk_rest.call(null,seq__24772_24857__$1);
var G__24860 = c__8927__auto___24858;
var G__24861 = cljs.core.count.call(null,c__8927__auto___24858);
var G__24862 = 0;
seq__24772_24844 = G__24859;
chunk__24774_24845 = G__24860;
count__24775_24846 = G__24861;
i__24776_24847 = G__24862;
continue;
}
} else
{var vec__24792_24863 = cljs.core.first.call(null,seq__24772_24857__$1);var actual_type_24864 = cljs.core.nth.call(null,vec__24792_24863,0,null);var factory_24865 = cljs.core.nth.call(null,vec__24792_24863,1,null);var canonical_f_24866 = (cljs.core.truth_(selector_24795)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24794,selector_24795):cljs.core.identity).call(null,factory_24865.call(null,f_24843));dommy.core.update_event_listeners_BANG_.call(null,elem_24794,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24795,actual_type_24864,f_24843], null),canonical_f_24866);
if(cljs.core.truth_(elem_24794.addEventListener))
{elem_24794.addEventListener(cljs.core.name.call(null,actual_type_24864),canonical_f_24866);
} else
{elem_24794.attachEvent(cljs.core.name.call(null,actual_type_24864),canonical_f_24866);
}
{
var G__24867 = cljs.core.next.call(null,seq__24772_24857__$1);
var G__24868 = null;
var G__24869 = 0;
var G__24870 = 0;
seq__24772_24844 = G__24867;
chunk__24774_24845 = G__24868;
count__24775_24846 = G__24869;
i__24776_24847 = G__24870;
continue;
}
}
} else
{}
}
break;
}
{
var G__24871 = cljs.core.next.call(null,seq__24771_24835__$1);
var G__24872 = null;
var G__24873 = 0;
var G__24874 = 0;
seq__24771_24796 = G__24871;
chunk__24778_24797 = G__24872;
count__24779_24798 = G__24873;
i__24780_24799 = G__24874;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__24875){
var elem_sel = cljs.core.first(arglist__24875);
var type_fs = cljs.core.rest(arglist__24875);
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
var vec__24899_24922 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24923 = cljs.core.nth.call(null,vec__24899_24922,0,null);var selector_24924 = cljs.core.nth.call(null,vec__24899_24922,1,null);var seq__24900_24925 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24907_24926 = null;var count__24908_24927 = 0;var i__24909_24928 = 0;while(true){
if((i__24909_24928 < count__24908_24927))
{var vec__24916_24929 = cljs.core._nth.call(null,chunk__24907_24926,i__24909_24928);var orig_type_24930 = cljs.core.nth.call(null,vec__24916_24929,0,null);var f_24931 = cljs.core.nth.call(null,vec__24916_24929,1,null);var seq__24910_24932 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24930,new cljs.core.PersistentArrayMap.fromArray([orig_type_24930,cljs.core.identity], true, false)));var chunk__24912_24933 = null;var count__24913_24934 = 0;var i__24914_24935 = 0;while(true){
if((i__24914_24935 < count__24913_24934))
{var vec__24917_24936 = cljs.core._nth.call(null,chunk__24912_24933,i__24914_24935);var actual_type_24937 = cljs.core.nth.call(null,vec__24917_24936,0,null);var __24938 = cljs.core.nth.call(null,vec__24917_24936,1,null);var keys_24939 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24924,actual_type_24937,f_24931], null);var canonical_f_24940 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24923),keys_24939);dommy.core.update_event_listeners_BANG_.call(null,elem_24923,dommy.utils.dissoc_in,keys_24939);
if(cljs.core.truth_(elem_24923.removeEventListener))
{elem_24923.removeEventListener(cljs.core.name.call(null,actual_type_24937),canonical_f_24940);
} else
{elem_24923.detachEvent(cljs.core.name.call(null,actual_type_24937),canonical_f_24940);
}
{
var G__24941 = seq__24910_24932;
var G__24942 = chunk__24912_24933;
var G__24943 = count__24913_24934;
var G__24944 = (i__24914_24935 + 1);
seq__24910_24932 = G__24941;
chunk__24912_24933 = G__24942;
count__24913_24934 = G__24943;
i__24914_24935 = G__24944;
continue;
}
} else
{var temp__4092__auto___24945 = cljs.core.seq.call(null,seq__24910_24932);if(temp__4092__auto___24945)
{var seq__24910_24946__$1 = temp__4092__auto___24945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24910_24946__$1))
{var c__8927__auto___24947 = cljs.core.chunk_first.call(null,seq__24910_24946__$1);{
var G__24948 = cljs.core.chunk_rest.call(null,seq__24910_24946__$1);
var G__24949 = c__8927__auto___24947;
var G__24950 = cljs.core.count.call(null,c__8927__auto___24947);
var G__24951 = 0;
seq__24910_24932 = G__24948;
chunk__24912_24933 = G__24949;
count__24913_24934 = G__24950;
i__24914_24935 = G__24951;
continue;
}
} else
{var vec__24918_24952 = cljs.core.first.call(null,seq__24910_24946__$1);var actual_type_24953 = cljs.core.nth.call(null,vec__24918_24952,0,null);var __24954 = cljs.core.nth.call(null,vec__24918_24952,1,null);var keys_24955 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24924,actual_type_24953,f_24931], null);var canonical_f_24956 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24923),keys_24955);dommy.core.update_event_listeners_BANG_.call(null,elem_24923,dommy.utils.dissoc_in,keys_24955);
if(cljs.core.truth_(elem_24923.removeEventListener))
{elem_24923.removeEventListener(cljs.core.name.call(null,actual_type_24953),canonical_f_24956);
} else
{elem_24923.detachEvent(cljs.core.name.call(null,actual_type_24953),canonical_f_24956);
}
{
var G__24957 = cljs.core.next.call(null,seq__24910_24946__$1);
var G__24958 = null;
var G__24959 = 0;
var G__24960 = 0;
seq__24910_24932 = G__24957;
chunk__24912_24933 = G__24958;
count__24913_24934 = G__24959;
i__24914_24935 = G__24960;
continue;
}
}
} else
{}
}
break;
}
{
var G__24961 = seq__24900_24925;
var G__24962 = chunk__24907_24926;
var G__24963 = count__24908_24927;
var G__24964 = (i__24909_24928 + 1);
seq__24900_24925 = G__24961;
chunk__24907_24926 = G__24962;
count__24908_24927 = G__24963;
i__24909_24928 = G__24964;
continue;
}
} else
{var temp__4092__auto___24965 = cljs.core.seq.call(null,seq__24900_24925);if(temp__4092__auto___24965)
{var seq__24900_24966__$1 = temp__4092__auto___24965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24900_24966__$1))
{var c__8927__auto___24967 = cljs.core.chunk_first.call(null,seq__24900_24966__$1);{
var G__24968 = cljs.core.chunk_rest.call(null,seq__24900_24966__$1);
var G__24969 = c__8927__auto___24967;
var G__24970 = cljs.core.count.call(null,c__8927__auto___24967);
var G__24971 = 0;
seq__24900_24925 = G__24968;
chunk__24907_24926 = G__24969;
count__24908_24927 = G__24970;
i__24909_24928 = G__24971;
continue;
}
} else
{var vec__24919_24972 = cljs.core.first.call(null,seq__24900_24966__$1);var orig_type_24973 = cljs.core.nth.call(null,vec__24919_24972,0,null);var f_24974 = cljs.core.nth.call(null,vec__24919_24972,1,null);var seq__24901_24975 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24973,new cljs.core.PersistentArrayMap.fromArray([orig_type_24973,cljs.core.identity], true, false)));var chunk__24903_24976 = null;var count__24904_24977 = 0;var i__24905_24978 = 0;while(true){
if((i__24905_24978 < count__24904_24977))
{var vec__24920_24979 = cljs.core._nth.call(null,chunk__24903_24976,i__24905_24978);var actual_type_24980 = cljs.core.nth.call(null,vec__24920_24979,0,null);var __24981 = cljs.core.nth.call(null,vec__24920_24979,1,null);var keys_24982 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24924,actual_type_24980,f_24974], null);var canonical_f_24983 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24923),keys_24982);dommy.core.update_event_listeners_BANG_.call(null,elem_24923,dommy.utils.dissoc_in,keys_24982);
if(cljs.core.truth_(elem_24923.removeEventListener))
{elem_24923.removeEventListener(cljs.core.name.call(null,actual_type_24980),canonical_f_24983);
} else
{elem_24923.detachEvent(cljs.core.name.call(null,actual_type_24980),canonical_f_24983);
}
{
var G__24984 = seq__24901_24975;
var G__24985 = chunk__24903_24976;
var G__24986 = count__24904_24977;
var G__24987 = (i__24905_24978 + 1);
seq__24901_24975 = G__24984;
chunk__24903_24976 = G__24985;
count__24904_24977 = G__24986;
i__24905_24978 = G__24987;
continue;
}
} else
{var temp__4092__auto___24988__$1 = cljs.core.seq.call(null,seq__24901_24975);if(temp__4092__auto___24988__$1)
{var seq__24901_24989__$1 = temp__4092__auto___24988__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24901_24989__$1))
{var c__8927__auto___24990 = cljs.core.chunk_first.call(null,seq__24901_24989__$1);{
var G__24991 = cljs.core.chunk_rest.call(null,seq__24901_24989__$1);
var G__24992 = c__8927__auto___24990;
var G__24993 = cljs.core.count.call(null,c__8927__auto___24990);
var G__24994 = 0;
seq__24901_24975 = G__24991;
chunk__24903_24976 = G__24992;
count__24904_24977 = G__24993;
i__24905_24978 = G__24994;
continue;
}
} else
{var vec__24921_24995 = cljs.core.first.call(null,seq__24901_24989__$1);var actual_type_24996 = cljs.core.nth.call(null,vec__24921_24995,0,null);var __24997 = cljs.core.nth.call(null,vec__24921_24995,1,null);var keys_24998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24924,actual_type_24996,f_24974], null);var canonical_f_24999 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24923),keys_24998);dommy.core.update_event_listeners_BANG_.call(null,elem_24923,dommy.utils.dissoc_in,keys_24998);
if(cljs.core.truth_(elem_24923.removeEventListener))
{elem_24923.removeEventListener(cljs.core.name.call(null,actual_type_24996),canonical_f_24999);
} else
{elem_24923.detachEvent(cljs.core.name.call(null,actual_type_24996),canonical_f_24999);
}
{
var G__25000 = cljs.core.next.call(null,seq__24901_24989__$1);
var G__25001 = null;
var G__25002 = 0;
var G__25003 = 0;
seq__24901_24975 = G__25000;
chunk__24903_24976 = G__25001;
count__24904_24977 = G__25002;
i__24905_24978 = G__25003;
continue;
}
}
} else
{}
}
break;
}
{
var G__25004 = cljs.core.next.call(null,seq__24900_24966__$1);
var G__25005 = null;
var G__25006 = 0;
var G__25007 = 0;
seq__24900_24925 = G__25004;
chunk__24907_24926 = G__25005;
count__24908_24927 = G__25006;
i__24909_24928 = G__25007;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__25008){
var elem_sel = cljs.core.first(arglist__25008);
var type_fs = cljs.core.rest(arglist__25008);
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
var vec__25016_25023 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25024 = cljs.core.nth.call(null,vec__25016_25023,0,null);var selector_25025 = cljs.core.nth.call(null,vec__25016_25023,1,null);var seq__25017_25026 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25018_25027 = null;var count__25019_25028 = 0;var i__25020_25029 = 0;while(true){
if((i__25020_25029 < count__25019_25028))
{var vec__25021_25030 = cljs.core._nth.call(null,chunk__25018_25027,i__25020_25029);var type_25031 = cljs.core.nth.call(null,vec__25021_25030,0,null);var f_25032 = cljs.core.nth.call(null,vec__25021_25030,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25031,((function (seq__25017_25026,chunk__25018_25027,count__25019_25028,i__25020_25029,vec__25021_25030,type_25031,f_25032){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25031,this_fn);
return f_25032.call(null,e);
});})(seq__25017_25026,chunk__25018_25027,count__25019_25028,i__25020_25029,vec__25021_25030,type_25031,f_25032))
);
{
var G__25033 = seq__25017_25026;
var G__25034 = chunk__25018_25027;
var G__25035 = count__25019_25028;
var G__25036 = (i__25020_25029 + 1);
seq__25017_25026 = G__25033;
chunk__25018_25027 = G__25034;
count__25019_25028 = G__25035;
i__25020_25029 = G__25036;
continue;
}
} else
{var temp__4092__auto___25037 = cljs.core.seq.call(null,seq__25017_25026);if(temp__4092__auto___25037)
{var seq__25017_25038__$1 = temp__4092__auto___25037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25017_25038__$1))
{var c__8927__auto___25039 = cljs.core.chunk_first.call(null,seq__25017_25038__$1);{
var G__25040 = cljs.core.chunk_rest.call(null,seq__25017_25038__$1);
var G__25041 = c__8927__auto___25039;
var G__25042 = cljs.core.count.call(null,c__8927__auto___25039);
var G__25043 = 0;
seq__25017_25026 = G__25040;
chunk__25018_25027 = G__25041;
count__25019_25028 = G__25042;
i__25020_25029 = G__25043;
continue;
}
} else
{var vec__25022_25044 = cljs.core.first.call(null,seq__25017_25038__$1);var type_25045 = cljs.core.nth.call(null,vec__25022_25044,0,null);var f_25046 = cljs.core.nth.call(null,vec__25022_25044,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25045,((function (seq__25017_25026,chunk__25018_25027,count__25019_25028,i__25020_25029,vec__25022_25044,type_25045,f_25046,seq__25017_25038__$1,temp__4092__auto___25037){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25045,this_fn);
return f_25046.call(null,e);
});})(seq__25017_25026,chunk__25018_25027,count__25019_25028,i__25020_25029,vec__25022_25044,type_25045,f_25046,seq__25017_25038__$1,temp__4092__auto___25037))
);
{
var G__25047 = cljs.core.next.call(null,seq__25017_25038__$1);
var G__25048 = null;
var G__25049 = 0;
var G__25050 = 0;
seq__25017_25026 = G__25047;
chunk__25018_25027 = G__25048;
count__25019_25028 = G__25049;
i__25020_25029 = G__25050;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__25051){
var elem_sel = cljs.core.first(arglist__25051);
var type_fs = cljs.core.rest(arglist__25051);
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
var fire_BANG___delegate = function (node,event_type,p__25052){var vec__25054 = p__25052;var update_event_BANG_ = cljs.core.nth.call(null,vec__25054,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8198__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
var p__25052 = null;if (arguments.length > 2) {
  p__25052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__25052);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__25055){
var node = cljs.core.first(arglist__25055);
arglist__25055 = cljs.core.next(arglist__25055);
var event_type = cljs.core.first(arglist__25055);
var p__25052 = cljs.core.rest(arglist__25055);
return fire_BANG___delegate(node,event_type,p__25052);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map