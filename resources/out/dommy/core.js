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
dommy.core.text = (function text(elem){var or__13979__auto__ = elem.textContent;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
var append_BANG___2 = (function (parent,child){var G__367470 = dommy.template.__GT_node_like.call(null,parent);G__367470.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__367470;
});
var append_BANG___3 = (function() { 
var G__367475__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__367471_367476 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__367472_367477 = null;var count__367473_367478 = 0;var i__367474_367479 = 0;while(true){
if((i__367474_367479 < count__367473_367478))
{var c_367480 = cljs.core._nth.call(null,chunk__367472_367477,i__367474_367479);append_BANG_.call(null,parent__$1,c_367480);
{
var G__367481 = seq__367471_367476;
var G__367482 = chunk__367472_367477;
var G__367483 = count__367473_367478;
var G__367484 = (i__367474_367479 + 1);
seq__367471_367476 = G__367481;
chunk__367472_367477 = G__367482;
count__367473_367478 = G__367483;
i__367474_367479 = G__367484;
continue;
}
} else
{var temp__4092__auto___367485 = cljs.core.seq.call(null,seq__367471_367476);if(temp__4092__auto___367485)
{var seq__367471_367486__$1 = temp__4092__auto___367485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367471_367486__$1))
{var c__14708__auto___367487 = cljs.core.chunk_first.call(null,seq__367471_367486__$1);{
var G__367488 = cljs.core.chunk_rest.call(null,seq__367471_367486__$1);
var G__367489 = c__14708__auto___367487;
var G__367490 = cljs.core.count.call(null,c__14708__auto___367487);
var G__367491 = 0;
seq__367471_367476 = G__367488;
chunk__367472_367477 = G__367489;
count__367473_367478 = G__367490;
i__367474_367479 = G__367491;
continue;
}
} else
{var c_367492 = cljs.core.first.call(null,seq__367471_367486__$1);append_BANG_.call(null,parent__$1,c_367492);
{
var G__367493 = cljs.core.next.call(null,seq__367471_367486__$1);
var G__367494 = null;
var G__367495 = 0;
var G__367496 = 0;
seq__367471_367476 = G__367493;
chunk__367472_367477 = G__367494;
count__367473_367478 = G__367495;
i__367474_367479 = G__367496;
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
var G__367475 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__367475__delegate.call(this,parent,child,more_children);};
G__367475.cljs$lang$maxFixedArity = 2;
G__367475.cljs$lang$applyTo = (function (arglist__367497){
var parent = cljs.core.first(arglist__367497);
arglist__367497 = cljs.core.next(arglist__367497);
var child = cljs.core.first(arglist__367497);
var more_children = cljs.core.rest(arglist__367497);
return G__367475__delegate(parent,child,more_children);
});
G__367475.cljs$core$IFn$_invoke$arity$variadic = G__367475__delegate;
return G__367475;
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
var G__367506__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__367502_367507 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__367503_367508 = null;var count__367504_367509 = 0;var i__367505_367510 = 0;while(true){
if((i__367505_367510 < count__367504_367509))
{var c_367511 = cljs.core._nth.call(null,chunk__367503_367508,i__367505_367510);prepend_BANG_.call(null,parent__$1,c_367511);
{
var G__367512 = seq__367502_367507;
var G__367513 = chunk__367503_367508;
var G__367514 = count__367504_367509;
var G__367515 = (i__367505_367510 + 1);
seq__367502_367507 = G__367512;
chunk__367503_367508 = G__367513;
count__367504_367509 = G__367514;
i__367505_367510 = G__367515;
continue;
}
} else
{var temp__4092__auto___367516 = cljs.core.seq.call(null,seq__367502_367507);if(temp__4092__auto___367516)
{var seq__367502_367517__$1 = temp__4092__auto___367516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367502_367517__$1))
{var c__14708__auto___367518 = cljs.core.chunk_first.call(null,seq__367502_367517__$1);{
var G__367519 = cljs.core.chunk_rest.call(null,seq__367502_367517__$1);
var G__367520 = c__14708__auto___367518;
var G__367521 = cljs.core.count.call(null,c__14708__auto___367518);
var G__367522 = 0;
seq__367502_367507 = G__367519;
chunk__367503_367508 = G__367520;
count__367504_367509 = G__367521;
i__367505_367510 = G__367522;
continue;
}
} else
{var c_367523 = cljs.core.first.call(null,seq__367502_367517__$1);prepend_BANG_.call(null,parent__$1,c_367523);
{
var G__367524 = cljs.core.next.call(null,seq__367502_367517__$1);
var G__367525 = null;
var G__367526 = 0;
var G__367527 = 0;
seq__367502_367507 = G__367524;
chunk__367503_367508 = G__367525;
count__367504_367509 = G__367526;
i__367505_367510 = G__367527;
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
var G__367506 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__367506__delegate.call(this,parent,child,more_children);};
G__367506.cljs$lang$maxFixedArity = 2;
G__367506.cljs$lang$applyTo = (function (arglist__367528){
var parent = cljs.core.first(arglist__367528);
arglist__367528 = cljs.core.next(arglist__367528);
var child = cljs.core.first(arglist__367528);
var more_children = cljs.core.rest(arglist__367528);
return G__367506__delegate(parent,child,more_children);
});
G__367506.cljs$core$IFn$_invoke$arity$variadic = G__367506__delegate;
return G__367506;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___367529 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___367529))
{var next_367530 = temp__4090__auto___367529;parent.insertBefore(actual_node,next_367530);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__367532 = dommy.template.__GT_node_like.call(null,parent);G__367532.innerHTML = "";
dommy.core.append_BANG_.call(null,G__367532,node_like);
return G__367532;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__367534 = elem__$1.parentNode;G__367534.removeChild(elem__$1);
return G__367534;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__367540){var vec__367541 = p__367540;var k = cljs.core.nth.call(null,vec__367541,0,null);var v = cljs.core.nth.call(null,vec__367541,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t367542 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t367542 = (function (v,k,vec__367541,p__367540,container,key_selectors_map,template,selector_map,meta367543){
this.v = v;
this.k = k;
this.vec__367541 = vec__367541;
this.p__367540 = p__367540;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta367543 = meta367543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t367542.cljs$lang$type = true;
dommy.core.t367542.cljs$lang$ctorStr = "dommy.core/t367542";
dommy.core.t367542.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"dommy.core/t367542");
});
dommy.core.t367542.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t367542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_367544){var self__ = this;
var _367544__$1 = this;return self__.meta367543;
});
dommy.core.t367542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_367544,meta367543__$1){var self__ = this;
var _367544__$1 = this;return (new dommy.core.t367542(self__.v,self__.k,self__.vec__367541,self__.p__367540,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta367543__$1));
});
dommy.core.__GT_t367542 = (function __GT_t367542(v__$1,k__$1,vec__367541__$1,p__367540__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta367543){return (new dommy.core.t367542(v__$1,k__$1,vec__367541__$1,p__367540__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta367543));
});
}
return (new dommy.core.t367542(v,k,vec__367541,p__367540,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__367545_SHARP_){return p1__367545_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__367546_SHARP_){return !((p1__367546_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__367547){var vec__367548 = p__367547;var special_mouse_event = cljs.core.nth.call(null,vec__367548,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__367548,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13979__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13967__auto__ = related_target;if(cljs.core.truth_(and__13967__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13967__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13967__auto__ = selected_target;if(cljs.core.truth_(and__13967__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13967__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13979__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__367549){
var elem = cljs.core.first(arglist__367549);
arglist__367549 = cljs.core.next(arglist__367549);
var f = cljs.core.first(arglist__367549);
var args = cljs.core.rest(arglist__367549);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__367550_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__367550_SHARP_));
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
var vec__367574_367597 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_367598 = cljs.core.nth.call(null,vec__367574_367597,0,null);var selector_367599 = cljs.core.nth.call(null,vec__367574_367597,1,null);var seq__367575_367600 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__367582_367601 = null;var count__367583_367602 = 0;var i__367584_367603 = 0;while(true){
if((i__367584_367603 < count__367583_367602))
{var vec__367591_367604 = cljs.core._nth.call(null,chunk__367582_367601,i__367584_367603);var orig_type_367605 = cljs.core.nth.call(null,vec__367591_367604,0,null);var f_367606 = cljs.core.nth.call(null,vec__367591_367604,1,null);var seq__367585_367607 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_367605,new cljs.core.PersistentArrayMap.fromArray([orig_type_367605,cljs.core.identity], true, false)));var chunk__367587_367608 = null;var count__367588_367609 = 0;var i__367589_367610 = 0;while(true){
if((i__367589_367610 < count__367588_367609))
{var vec__367592_367611 = cljs.core._nth.call(null,chunk__367587_367608,i__367589_367610);var actual_type_367612 = cljs.core.nth.call(null,vec__367592_367611,0,null);var factory_367613 = cljs.core.nth.call(null,vec__367592_367611,1,null);var canonical_f_367614 = (cljs.core.truth_(selector_367599)?cljs.core.partial.call(null,dommy.core.live_listener,elem_367598,selector_367599):cljs.core.identity).call(null,factory_367613.call(null,f_367606));dommy.core.update_event_listeners_BANG_.call(null,elem_367598,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367599,actual_type_367612,f_367606], null),canonical_f_367614);
if(cljs.core.truth_(elem_367598.addEventListener))
{elem_367598.addEventListener(cljs.core.name.call(null,actual_type_367612),canonical_f_367614);
} else
{elem_367598.attachEvent(cljs.core.name.call(null,actual_type_367612),canonical_f_367614);
}
{
var G__367615 = seq__367585_367607;
var G__367616 = chunk__367587_367608;
var G__367617 = count__367588_367609;
var G__367618 = (i__367589_367610 + 1);
seq__367585_367607 = G__367615;
chunk__367587_367608 = G__367616;
count__367588_367609 = G__367617;
i__367589_367610 = G__367618;
continue;
}
} else
{var temp__4092__auto___367619 = cljs.core.seq.call(null,seq__367585_367607);if(temp__4092__auto___367619)
{var seq__367585_367620__$1 = temp__4092__auto___367619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367585_367620__$1))
{var c__14708__auto___367621 = cljs.core.chunk_first.call(null,seq__367585_367620__$1);{
var G__367622 = cljs.core.chunk_rest.call(null,seq__367585_367620__$1);
var G__367623 = c__14708__auto___367621;
var G__367624 = cljs.core.count.call(null,c__14708__auto___367621);
var G__367625 = 0;
seq__367585_367607 = G__367622;
chunk__367587_367608 = G__367623;
count__367588_367609 = G__367624;
i__367589_367610 = G__367625;
continue;
}
} else
{var vec__367593_367626 = cljs.core.first.call(null,seq__367585_367620__$1);var actual_type_367627 = cljs.core.nth.call(null,vec__367593_367626,0,null);var factory_367628 = cljs.core.nth.call(null,vec__367593_367626,1,null);var canonical_f_367629 = (cljs.core.truth_(selector_367599)?cljs.core.partial.call(null,dommy.core.live_listener,elem_367598,selector_367599):cljs.core.identity).call(null,factory_367628.call(null,f_367606));dommy.core.update_event_listeners_BANG_.call(null,elem_367598,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367599,actual_type_367627,f_367606], null),canonical_f_367629);
if(cljs.core.truth_(elem_367598.addEventListener))
{elem_367598.addEventListener(cljs.core.name.call(null,actual_type_367627),canonical_f_367629);
} else
{elem_367598.attachEvent(cljs.core.name.call(null,actual_type_367627),canonical_f_367629);
}
{
var G__367630 = cljs.core.next.call(null,seq__367585_367620__$1);
var G__367631 = null;
var G__367632 = 0;
var G__367633 = 0;
seq__367585_367607 = G__367630;
chunk__367587_367608 = G__367631;
count__367588_367609 = G__367632;
i__367589_367610 = G__367633;
continue;
}
}
} else
{}
}
break;
}
{
var G__367634 = seq__367575_367600;
var G__367635 = chunk__367582_367601;
var G__367636 = count__367583_367602;
var G__367637 = (i__367584_367603 + 1);
seq__367575_367600 = G__367634;
chunk__367582_367601 = G__367635;
count__367583_367602 = G__367636;
i__367584_367603 = G__367637;
continue;
}
} else
{var temp__4092__auto___367638 = cljs.core.seq.call(null,seq__367575_367600);if(temp__4092__auto___367638)
{var seq__367575_367639__$1 = temp__4092__auto___367638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367575_367639__$1))
{var c__14708__auto___367640 = cljs.core.chunk_first.call(null,seq__367575_367639__$1);{
var G__367641 = cljs.core.chunk_rest.call(null,seq__367575_367639__$1);
var G__367642 = c__14708__auto___367640;
var G__367643 = cljs.core.count.call(null,c__14708__auto___367640);
var G__367644 = 0;
seq__367575_367600 = G__367641;
chunk__367582_367601 = G__367642;
count__367583_367602 = G__367643;
i__367584_367603 = G__367644;
continue;
}
} else
{var vec__367594_367645 = cljs.core.first.call(null,seq__367575_367639__$1);var orig_type_367646 = cljs.core.nth.call(null,vec__367594_367645,0,null);var f_367647 = cljs.core.nth.call(null,vec__367594_367645,1,null);var seq__367576_367648 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_367646,new cljs.core.PersistentArrayMap.fromArray([orig_type_367646,cljs.core.identity], true, false)));var chunk__367578_367649 = null;var count__367579_367650 = 0;var i__367580_367651 = 0;while(true){
if((i__367580_367651 < count__367579_367650))
{var vec__367595_367652 = cljs.core._nth.call(null,chunk__367578_367649,i__367580_367651);var actual_type_367653 = cljs.core.nth.call(null,vec__367595_367652,0,null);var factory_367654 = cljs.core.nth.call(null,vec__367595_367652,1,null);var canonical_f_367655 = (cljs.core.truth_(selector_367599)?cljs.core.partial.call(null,dommy.core.live_listener,elem_367598,selector_367599):cljs.core.identity).call(null,factory_367654.call(null,f_367647));dommy.core.update_event_listeners_BANG_.call(null,elem_367598,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367599,actual_type_367653,f_367647], null),canonical_f_367655);
if(cljs.core.truth_(elem_367598.addEventListener))
{elem_367598.addEventListener(cljs.core.name.call(null,actual_type_367653),canonical_f_367655);
} else
{elem_367598.attachEvent(cljs.core.name.call(null,actual_type_367653),canonical_f_367655);
}
{
var G__367656 = seq__367576_367648;
var G__367657 = chunk__367578_367649;
var G__367658 = count__367579_367650;
var G__367659 = (i__367580_367651 + 1);
seq__367576_367648 = G__367656;
chunk__367578_367649 = G__367657;
count__367579_367650 = G__367658;
i__367580_367651 = G__367659;
continue;
}
} else
{var temp__4092__auto___367660__$1 = cljs.core.seq.call(null,seq__367576_367648);if(temp__4092__auto___367660__$1)
{var seq__367576_367661__$1 = temp__4092__auto___367660__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367576_367661__$1))
{var c__14708__auto___367662 = cljs.core.chunk_first.call(null,seq__367576_367661__$1);{
var G__367663 = cljs.core.chunk_rest.call(null,seq__367576_367661__$1);
var G__367664 = c__14708__auto___367662;
var G__367665 = cljs.core.count.call(null,c__14708__auto___367662);
var G__367666 = 0;
seq__367576_367648 = G__367663;
chunk__367578_367649 = G__367664;
count__367579_367650 = G__367665;
i__367580_367651 = G__367666;
continue;
}
} else
{var vec__367596_367667 = cljs.core.first.call(null,seq__367576_367661__$1);var actual_type_367668 = cljs.core.nth.call(null,vec__367596_367667,0,null);var factory_367669 = cljs.core.nth.call(null,vec__367596_367667,1,null);var canonical_f_367670 = (cljs.core.truth_(selector_367599)?cljs.core.partial.call(null,dommy.core.live_listener,elem_367598,selector_367599):cljs.core.identity).call(null,factory_367669.call(null,f_367647));dommy.core.update_event_listeners_BANG_.call(null,elem_367598,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367599,actual_type_367668,f_367647], null),canonical_f_367670);
if(cljs.core.truth_(elem_367598.addEventListener))
{elem_367598.addEventListener(cljs.core.name.call(null,actual_type_367668),canonical_f_367670);
} else
{elem_367598.attachEvent(cljs.core.name.call(null,actual_type_367668),canonical_f_367670);
}
{
var G__367671 = cljs.core.next.call(null,seq__367576_367661__$1);
var G__367672 = null;
var G__367673 = 0;
var G__367674 = 0;
seq__367576_367648 = G__367671;
chunk__367578_367649 = G__367672;
count__367579_367650 = G__367673;
i__367580_367651 = G__367674;
continue;
}
}
} else
{}
}
break;
}
{
var G__367675 = cljs.core.next.call(null,seq__367575_367639__$1);
var G__367676 = null;
var G__367677 = 0;
var G__367678 = 0;
seq__367575_367600 = G__367675;
chunk__367582_367601 = G__367676;
count__367583_367602 = G__367677;
i__367584_367603 = G__367678;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__367679){
var elem_sel = cljs.core.first(arglist__367679);
var type_fs = cljs.core.rest(arglist__367679);
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
var vec__367703_367726 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_367727 = cljs.core.nth.call(null,vec__367703_367726,0,null);var selector_367728 = cljs.core.nth.call(null,vec__367703_367726,1,null);var seq__367704_367729 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__367711_367730 = null;var count__367712_367731 = 0;var i__367713_367732 = 0;while(true){
if((i__367713_367732 < count__367712_367731))
{var vec__367720_367733 = cljs.core._nth.call(null,chunk__367711_367730,i__367713_367732);var orig_type_367734 = cljs.core.nth.call(null,vec__367720_367733,0,null);var f_367735 = cljs.core.nth.call(null,vec__367720_367733,1,null);var seq__367714_367736 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_367734,new cljs.core.PersistentArrayMap.fromArray([orig_type_367734,cljs.core.identity], true, false)));var chunk__367716_367737 = null;var count__367717_367738 = 0;var i__367718_367739 = 0;while(true){
if((i__367718_367739 < count__367717_367738))
{var vec__367721_367740 = cljs.core._nth.call(null,chunk__367716_367737,i__367718_367739);var actual_type_367741 = cljs.core.nth.call(null,vec__367721_367740,0,null);var __367742 = cljs.core.nth.call(null,vec__367721_367740,1,null);var keys_367743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367728,actual_type_367741,f_367735], null);var canonical_f_367744 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_367727),keys_367743);dommy.core.update_event_listeners_BANG_.call(null,elem_367727,dommy.utils.dissoc_in,keys_367743);
if(cljs.core.truth_(elem_367727.removeEventListener))
{elem_367727.removeEventListener(cljs.core.name.call(null,actual_type_367741),canonical_f_367744);
} else
{elem_367727.detachEvent(cljs.core.name.call(null,actual_type_367741),canonical_f_367744);
}
{
var G__367745 = seq__367714_367736;
var G__367746 = chunk__367716_367737;
var G__367747 = count__367717_367738;
var G__367748 = (i__367718_367739 + 1);
seq__367714_367736 = G__367745;
chunk__367716_367737 = G__367746;
count__367717_367738 = G__367747;
i__367718_367739 = G__367748;
continue;
}
} else
{var temp__4092__auto___367749 = cljs.core.seq.call(null,seq__367714_367736);if(temp__4092__auto___367749)
{var seq__367714_367750__$1 = temp__4092__auto___367749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367714_367750__$1))
{var c__14708__auto___367751 = cljs.core.chunk_first.call(null,seq__367714_367750__$1);{
var G__367752 = cljs.core.chunk_rest.call(null,seq__367714_367750__$1);
var G__367753 = c__14708__auto___367751;
var G__367754 = cljs.core.count.call(null,c__14708__auto___367751);
var G__367755 = 0;
seq__367714_367736 = G__367752;
chunk__367716_367737 = G__367753;
count__367717_367738 = G__367754;
i__367718_367739 = G__367755;
continue;
}
} else
{var vec__367722_367756 = cljs.core.first.call(null,seq__367714_367750__$1);var actual_type_367757 = cljs.core.nth.call(null,vec__367722_367756,0,null);var __367758 = cljs.core.nth.call(null,vec__367722_367756,1,null);var keys_367759 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367728,actual_type_367757,f_367735], null);var canonical_f_367760 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_367727),keys_367759);dommy.core.update_event_listeners_BANG_.call(null,elem_367727,dommy.utils.dissoc_in,keys_367759);
if(cljs.core.truth_(elem_367727.removeEventListener))
{elem_367727.removeEventListener(cljs.core.name.call(null,actual_type_367757),canonical_f_367760);
} else
{elem_367727.detachEvent(cljs.core.name.call(null,actual_type_367757),canonical_f_367760);
}
{
var G__367761 = cljs.core.next.call(null,seq__367714_367750__$1);
var G__367762 = null;
var G__367763 = 0;
var G__367764 = 0;
seq__367714_367736 = G__367761;
chunk__367716_367737 = G__367762;
count__367717_367738 = G__367763;
i__367718_367739 = G__367764;
continue;
}
}
} else
{}
}
break;
}
{
var G__367765 = seq__367704_367729;
var G__367766 = chunk__367711_367730;
var G__367767 = count__367712_367731;
var G__367768 = (i__367713_367732 + 1);
seq__367704_367729 = G__367765;
chunk__367711_367730 = G__367766;
count__367712_367731 = G__367767;
i__367713_367732 = G__367768;
continue;
}
} else
{var temp__4092__auto___367769 = cljs.core.seq.call(null,seq__367704_367729);if(temp__4092__auto___367769)
{var seq__367704_367770__$1 = temp__4092__auto___367769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367704_367770__$1))
{var c__14708__auto___367771 = cljs.core.chunk_first.call(null,seq__367704_367770__$1);{
var G__367772 = cljs.core.chunk_rest.call(null,seq__367704_367770__$1);
var G__367773 = c__14708__auto___367771;
var G__367774 = cljs.core.count.call(null,c__14708__auto___367771);
var G__367775 = 0;
seq__367704_367729 = G__367772;
chunk__367711_367730 = G__367773;
count__367712_367731 = G__367774;
i__367713_367732 = G__367775;
continue;
}
} else
{var vec__367723_367776 = cljs.core.first.call(null,seq__367704_367770__$1);var orig_type_367777 = cljs.core.nth.call(null,vec__367723_367776,0,null);var f_367778 = cljs.core.nth.call(null,vec__367723_367776,1,null);var seq__367705_367779 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_367777,new cljs.core.PersistentArrayMap.fromArray([orig_type_367777,cljs.core.identity], true, false)));var chunk__367707_367780 = null;var count__367708_367781 = 0;var i__367709_367782 = 0;while(true){
if((i__367709_367782 < count__367708_367781))
{var vec__367724_367783 = cljs.core._nth.call(null,chunk__367707_367780,i__367709_367782);var actual_type_367784 = cljs.core.nth.call(null,vec__367724_367783,0,null);var __367785 = cljs.core.nth.call(null,vec__367724_367783,1,null);var keys_367786 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367728,actual_type_367784,f_367778], null);var canonical_f_367787 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_367727),keys_367786);dommy.core.update_event_listeners_BANG_.call(null,elem_367727,dommy.utils.dissoc_in,keys_367786);
if(cljs.core.truth_(elem_367727.removeEventListener))
{elem_367727.removeEventListener(cljs.core.name.call(null,actual_type_367784),canonical_f_367787);
} else
{elem_367727.detachEvent(cljs.core.name.call(null,actual_type_367784),canonical_f_367787);
}
{
var G__367788 = seq__367705_367779;
var G__367789 = chunk__367707_367780;
var G__367790 = count__367708_367781;
var G__367791 = (i__367709_367782 + 1);
seq__367705_367779 = G__367788;
chunk__367707_367780 = G__367789;
count__367708_367781 = G__367790;
i__367709_367782 = G__367791;
continue;
}
} else
{var temp__4092__auto___367792__$1 = cljs.core.seq.call(null,seq__367705_367779);if(temp__4092__auto___367792__$1)
{var seq__367705_367793__$1 = temp__4092__auto___367792__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367705_367793__$1))
{var c__14708__auto___367794 = cljs.core.chunk_first.call(null,seq__367705_367793__$1);{
var G__367795 = cljs.core.chunk_rest.call(null,seq__367705_367793__$1);
var G__367796 = c__14708__auto___367794;
var G__367797 = cljs.core.count.call(null,c__14708__auto___367794);
var G__367798 = 0;
seq__367705_367779 = G__367795;
chunk__367707_367780 = G__367796;
count__367708_367781 = G__367797;
i__367709_367782 = G__367798;
continue;
}
} else
{var vec__367725_367799 = cljs.core.first.call(null,seq__367705_367793__$1);var actual_type_367800 = cljs.core.nth.call(null,vec__367725_367799,0,null);var __367801 = cljs.core.nth.call(null,vec__367725_367799,1,null);var keys_367802 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_367728,actual_type_367800,f_367778], null);var canonical_f_367803 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_367727),keys_367802);dommy.core.update_event_listeners_BANG_.call(null,elem_367727,dommy.utils.dissoc_in,keys_367802);
if(cljs.core.truth_(elem_367727.removeEventListener))
{elem_367727.removeEventListener(cljs.core.name.call(null,actual_type_367800),canonical_f_367803);
} else
{elem_367727.detachEvent(cljs.core.name.call(null,actual_type_367800),canonical_f_367803);
}
{
var G__367804 = cljs.core.next.call(null,seq__367705_367793__$1);
var G__367805 = null;
var G__367806 = 0;
var G__367807 = 0;
seq__367705_367779 = G__367804;
chunk__367707_367780 = G__367805;
count__367708_367781 = G__367806;
i__367709_367782 = G__367807;
continue;
}
}
} else
{}
}
break;
}
{
var G__367808 = cljs.core.next.call(null,seq__367704_367770__$1);
var G__367809 = null;
var G__367810 = 0;
var G__367811 = 0;
seq__367704_367729 = G__367808;
chunk__367711_367730 = G__367809;
count__367712_367731 = G__367810;
i__367713_367732 = G__367811;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__367812){
var elem_sel = cljs.core.first(arglist__367812);
var type_fs = cljs.core.rest(arglist__367812);
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
var vec__367820_367827 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_367828 = cljs.core.nth.call(null,vec__367820_367827,0,null);var selector_367829 = cljs.core.nth.call(null,vec__367820_367827,1,null);var seq__367821_367830 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__367822_367831 = null;var count__367823_367832 = 0;var i__367824_367833 = 0;while(true){
if((i__367824_367833 < count__367823_367832))
{var vec__367825_367834 = cljs.core._nth.call(null,chunk__367822_367831,i__367824_367833);var type_367835 = cljs.core.nth.call(null,vec__367825_367834,0,null);var f_367836 = cljs.core.nth.call(null,vec__367825_367834,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_367835,((function (seq__367821_367830,chunk__367822_367831,count__367823_367832,i__367824_367833,vec__367825_367834,type_367835,f_367836){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_367835,this_fn);
return f_367836.call(null,e);
});})(seq__367821_367830,chunk__367822_367831,count__367823_367832,i__367824_367833,vec__367825_367834,type_367835,f_367836))
);
{
var G__367837 = seq__367821_367830;
var G__367838 = chunk__367822_367831;
var G__367839 = count__367823_367832;
var G__367840 = (i__367824_367833 + 1);
seq__367821_367830 = G__367837;
chunk__367822_367831 = G__367838;
count__367823_367832 = G__367839;
i__367824_367833 = G__367840;
continue;
}
} else
{var temp__4092__auto___367841 = cljs.core.seq.call(null,seq__367821_367830);if(temp__4092__auto___367841)
{var seq__367821_367842__$1 = temp__4092__auto___367841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367821_367842__$1))
{var c__14708__auto___367843 = cljs.core.chunk_first.call(null,seq__367821_367842__$1);{
var G__367844 = cljs.core.chunk_rest.call(null,seq__367821_367842__$1);
var G__367845 = c__14708__auto___367843;
var G__367846 = cljs.core.count.call(null,c__14708__auto___367843);
var G__367847 = 0;
seq__367821_367830 = G__367844;
chunk__367822_367831 = G__367845;
count__367823_367832 = G__367846;
i__367824_367833 = G__367847;
continue;
}
} else
{var vec__367826_367848 = cljs.core.first.call(null,seq__367821_367842__$1);var type_367849 = cljs.core.nth.call(null,vec__367826_367848,0,null);var f_367850 = cljs.core.nth.call(null,vec__367826_367848,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_367849,((function (seq__367821_367830,chunk__367822_367831,count__367823_367832,i__367824_367833,vec__367826_367848,type_367849,f_367850,seq__367821_367842__$1,temp__4092__auto___367841){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_367849,this_fn);
return f_367850.call(null,e);
});})(seq__367821_367830,chunk__367822_367831,count__367823_367832,i__367824_367833,vec__367826_367848,type_367849,f_367850,seq__367821_367842__$1,temp__4092__auto___367841))
);
{
var G__367851 = cljs.core.next.call(null,seq__367821_367842__$1);
var G__367852 = null;
var G__367853 = 0;
var G__367854 = 0;
seq__367821_367830 = G__367851;
chunk__367822_367831 = G__367852;
count__367823_367832 = G__367853;
i__367824_367833 = G__367854;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__367855){
var elem_sel = cljs.core.first(arglist__367855);
var type_fs = cljs.core.rest(arglist__367855);
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
var fire_BANG___delegate = function (node,event_type,p__367856){var vec__367858 = p__367856;var update_event_BANG_ = cljs.core.nth.call(null,vec__367858,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13979__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
var p__367856 = null;if (arguments.length > 2) {
  p__367856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__367856);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__367859){
var node = cljs.core.first(arglist__367859);
arglist__367859 = cljs.core.next(arglist__367859);
var event_type = cljs.core.first(arglist__367859);
var p__367856 = cljs.core.rest(arglist__367859);
return fire_BANG___delegate(node,event_type,p__367856);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map