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
dommy.core.text = (function text(elem){var or__13823__auto__ = elem.textContent;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var append_BANG___2 = (function (parent,child){var G__35467 = dommy.template.__GT_node_like.call(null,parent);G__35467.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__35467;
});
var append_BANG___3 = (function() { 
var G__35472__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35468_35473 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35469_35474 = null;var count__35470_35475 = 0;var i__35471_35476 = 0;while(true){
if((i__35471_35476 < count__35470_35475))
{var c_35477 = cljs.core._nth.call(null,chunk__35469_35474,i__35471_35476);append_BANG_.call(null,parent__$1,c_35477);
{
var G__35478 = seq__35468_35473;
var G__35479 = chunk__35469_35474;
var G__35480 = count__35470_35475;
var G__35481 = (i__35471_35476 + 1);
seq__35468_35473 = G__35478;
chunk__35469_35474 = G__35479;
count__35470_35475 = G__35480;
i__35471_35476 = G__35481;
continue;
}
} else
{var temp__4092__auto___35482 = cljs.core.seq.call(null,seq__35468_35473);if(temp__4092__auto___35482)
{var seq__35468_35483__$1 = temp__4092__auto___35482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35468_35483__$1))
{var c__14547__auto___35484 = cljs.core.chunk_first.call(null,seq__35468_35483__$1);{
var G__35485 = cljs.core.chunk_rest.call(null,seq__35468_35483__$1);
var G__35486 = c__14547__auto___35484;
var G__35487 = cljs.core.count.call(null,c__14547__auto___35484);
var G__35488 = 0;
seq__35468_35473 = G__35485;
chunk__35469_35474 = G__35486;
count__35470_35475 = G__35487;
i__35471_35476 = G__35488;
continue;
}
} else
{var c_35489 = cljs.core.first.call(null,seq__35468_35483__$1);append_BANG_.call(null,parent__$1,c_35489);
{
var G__35490 = cljs.core.next.call(null,seq__35468_35483__$1);
var G__35491 = null;
var G__35492 = 0;
var G__35493 = 0;
seq__35468_35473 = G__35490;
chunk__35469_35474 = G__35491;
count__35470_35475 = G__35492;
i__35471_35476 = G__35493;
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
var G__35472 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35472__delegate.call(this,parent,child,more_children);};
G__35472.cljs$lang$maxFixedArity = 2;
G__35472.cljs$lang$applyTo = (function (arglist__35494){
var parent = cljs.core.first(arglist__35494);
arglist__35494 = cljs.core.next(arglist__35494);
var child = cljs.core.first(arglist__35494);
var more_children = cljs.core.rest(arglist__35494);
return G__35472__delegate(parent,child,more_children);
});
G__35472.cljs$core$IFn$_invoke$arity$variadic = G__35472__delegate;
return G__35472;
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
var G__35503__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35499_35504 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35500_35505 = null;var count__35501_35506 = 0;var i__35502_35507 = 0;while(true){
if((i__35502_35507 < count__35501_35506))
{var c_35508 = cljs.core._nth.call(null,chunk__35500_35505,i__35502_35507);prepend_BANG_.call(null,parent__$1,c_35508);
{
var G__35509 = seq__35499_35504;
var G__35510 = chunk__35500_35505;
var G__35511 = count__35501_35506;
var G__35512 = (i__35502_35507 + 1);
seq__35499_35504 = G__35509;
chunk__35500_35505 = G__35510;
count__35501_35506 = G__35511;
i__35502_35507 = G__35512;
continue;
}
} else
{var temp__4092__auto___35513 = cljs.core.seq.call(null,seq__35499_35504);if(temp__4092__auto___35513)
{var seq__35499_35514__$1 = temp__4092__auto___35513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35499_35514__$1))
{var c__14547__auto___35515 = cljs.core.chunk_first.call(null,seq__35499_35514__$1);{
var G__35516 = cljs.core.chunk_rest.call(null,seq__35499_35514__$1);
var G__35517 = c__14547__auto___35515;
var G__35518 = cljs.core.count.call(null,c__14547__auto___35515);
var G__35519 = 0;
seq__35499_35504 = G__35516;
chunk__35500_35505 = G__35517;
count__35501_35506 = G__35518;
i__35502_35507 = G__35519;
continue;
}
} else
{var c_35520 = cljs.core.first.call(null,seq__35499_35514__$1);prepend_BANG_.call(null,parent__$1,c_35520);
{
var G__35521 = cljs.core.next.call(null,seq__35499_35514__$1);
var G__35522 = null;
var G__35523 = 0;
var G__35524 = 0;
seq__35499_35504 = G__35521;
chunk__35500_35505 = G__35522;
count__35501_35506 = G__35523;
i__35502_35507 = G__35524;
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
var G__35503 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35503__delegate.call(this,parent,child,more_children);};
G__35503.cljs$lang$maxFixedArity = 2;
G__35503.cljs$lang$applyTo = (function (arglist__35525){
var parent = cljs.core.first(arglist__35525);
arglist__35525 = cljs.core.next(arglist__35525);
var child = cljs.core.first(arglist__35525);
var more_children = cljs.core.rest(arglist__35525);
return G__35503__delegate(parent,child,more_children);
});
G__35503.cljs$core$IFn$_invoke$arity$variadic = G__35503__delegate;
return G__35503;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___35526 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___35526))
{var next_35527 = temp__4090__auto___35526;parent.insertBefore(actual_node,next_35527);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__35529 = dommy.template.__GT_node_like.call(null,parent);G__35529.innerHTML = "";
dommy.core.append_BANG_.call(null,G__35529,node_like);
return G__35529;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__35531 = elem__$1.parentNode;G__35531.removeChild(elem__$1);
return G__35531;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35537){var vec__35538 = p__35537;var k = cljs.core.nth.call(null,vec__35538,0,null);var v = cljs.core.nth.call(null,vec__35538,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t35539 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t35539 = (function (v,k,vec__35538,p__35537,container,key_selectors_map,template,selector_map,meta35540){
this.v = v;
this.k = k;
this.vec__35538 = vec__35538;
this.p__35537 = p__35537;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta35540 = meta35540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t35539.cljs$lang$type = true;
dommy.core.t35539.cljs$lang$ctorStr = "dommy.core/t35539";
dommy.core.t35539.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"dommy.core/t35539");
});
dommy.core.t35539.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t35539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35541){var self__ = this;
var _35541__$1 = this;return self__.meta35540;
});
dommy.core.t35539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35541,meta35540__$1){var self__ = this;
var _35541__$1 = this;return (new dommy.core.t35539(self__.v,self__.k,self__.vec__35538,self__.p__35537,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta35540__$1));
});
dommy.core.__GT_t35539 = (function __GT_t35539(v__$1,k__$1,vec__35538__$1,p__35537__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35540){return (new dommy.core.t35539(v__$1,k__$1,vec__35538__$1,p__35537__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35540));
});
}
return (new dommy.core.t35539(v,k,vec__35538,p__35537,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__35542_SHARP_){return p1__35542_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__35543_SHARP_){return !((p1__35543_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35544){var vec__35545 = p__35544;var special_mouse_event = cljs.core.nth.call(null,vec__35545,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__35545,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13823__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13811__auto__ = related_target;if(cljs.core.truth_(and__13811__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13811__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13811__auto__ = selected_target;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13811__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13823__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__35546){
var elem = cljs.core.first(arglist__35546);
arglist__35546 = cljs.core.next(arglist__35546);
var f = cljs.core.first(arglist__35546);
var args = cljs.core.rest(arglist__35546);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__35547_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__35547_SHARP_));
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
var vec__35571_35594 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35595 = cljs.core.nth.call(null,vec__35571_35594,0,null);var selector_35596 = cljs.core.nth.call(null,vec__35571_35594,1,null);var seq__35572_35597 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35579_35598 = null;var count__35580_35599 = 0;var i__35581_35600 = 0;while(true){
if((i__35581_35600 < count__35580_35599))
{var vec__35588_35601 = cljs.core._nth.call(null,chunk__35579_35598,i__35581_35600);var orig_type_35602 = cljs.core.nth.call(null,vec__35588_35601,0,null);var f_35603 = cljs.core.nth.call(null,vec__35588_35601,1,null);var seq__35582_35604 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35602,new cljs.core.PersistentArrayMap.fromArray([orig_type_35602,cljs.core.identity], true, false)));var chunk__35584_35605 = null;var count__35585_35606 = 0;var i__35586_35607 = 0;while(true){
if((i__35586_35607 < count__35585_35606))
{var vec__35589_35608 = cljs.core._nth.call(null,chunk__35584_35605,i__35586_35607);var actual_type_35609 = cljs.core.nth.call(null,vec__35589_35608,0,null);var factory_35610 = cljs.core.nth.call(null,vec__35589_35608,1,null);var canonical_f_35611 = (cljs.core.truth_(selector_35596)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35595,selector_35596):cljs.core.identity).call(null,factory_35610.call(null,f_35603));dommy.core.update_event_listeners_BANG_.call(null,elem_35595,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35609,f_35603], null),canonical_f_35611);
if(cljs.core.truth_(elem_35595.addEventListener))
{elem_35595.addEventListener(cljs.core.name.call(null,actual_type_35609),canonical_f_35611);
} else
{elem_35595.attachEvent(cljs.core.name.call(null,actual_type_35609),canonical_f_35611);
}
{
var G__35612 = seq__35582_35604;
var G__35613 = chunk__35584_35605;
var G__35614 = count__35585_35606;
var G__35615 = (i__35586_35607 + 1);
seq__35582_35604 = G__35612;
chunk__35584_35605 = G__35613;
count__35585_35606 = G__35614;
i__35586_35607 = G__35615;
continue;
}
} else
{var temp__4092__auto___35616 = cljs.core.seq.call(null,seq__35582_35604);if(temp__4092__auto___35616)
{var seq__35582_35617__$1 = temp__4092__auto___35616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35582_35617__$1))
{var c__14547__auto___35618 = cljs.core.chunk_first.call(null,seq__35582_35617__$1);{
var G__35619 = cljs.core.chunk_rest.call(null,seq__35582_35617__$1);
var G__35620 = c__14547__auto___35618;
var G__35621 = cljs.core.count.call(null,c__14547__auto___35618);
var G__35622 = 0;
seq__35582_35604 = G__35619;
chunk__35584_35605 = G__35620;
count__35585_35606 = G__35621;
i__35586_35607 = G__35622;
continue;
}
} else
{var vec__35590_35623 = cljs.core.first.call(null,seq__35582_35617__$1);var actual_type_35624 = cljs.core.nth.call(null,vec__35590_35623,0,null);var factory_35625 = cljs.core.nth.call(null,vec__35590_35623,1,null);var canonical_f_35626 = (cljs.core.truth_(selector_35596)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35595,selector_35596):cljs.core.identity).call(null,factory_35625.call(null,f_35603));dommy.core.update_event_listeners_BANG_.call(null,elem_35595,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35624,f_35603], null),canonical_f_35626);
if(cljs.core.truth_(elem_35595.addEventListener))
{elem_35595.addEventListener(cljs.core.name.call(null,actual_type_35624),canonical_f_35626);
} else
{elem_35595.attachEvent(cljs.core.name.call(null,actual_type_35624),canonical_f_35626);
}
{
var G__35627 = cljs.core.next.call(null,seq__35582_35617__$1);
var G__35628 = null;
var G__35629 = 0;
var G__35630 = 0;
seq__35582_35604 = G__35627;
chunk__35584_35605 = G__35628;
count__35585_35606 = G__35629;
i__35586_35607 = G__35630;
continue;
}
}
} else
{}
}
break;
}
{
var G__35631 = seq__35572_35597;
var G__35632 = chunk__35579_35598;
var G__35633 = count__35580_35599;
var G__35634 = (i__35581_35600 + 1);
seq__35572_35597 = G__35631;
chunk__35579_35598 = G__35632;
count__35580_35599 = G__35633;
i__35581_35600 = G__35634;
continue;
}
} else
{var temp__4092__auto___35635 = cljs.core.seq.call(null,seq__35572_35597);if(temp__4092__auto___35635)
{var seq__35572_35636__$1 = temp__4092__auto___35635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35572_35636__$1))
{var c__14547__auto___35637 = cljs.core.chunk_first.call(null,seq__35572_35636__$1);{
var G__35638 = cljs.core.chunk_rest.call(null,seq__35572_35636__$1);
var G__35639 = c__14547__auto___35637;
var G__35640 = cljs.core.count.call(null,c__14547__auto___35637);
var G__35641 = 0;
seq__35572_35597 = G__35638;
chunk__35579_35598 = G__35639;
count__35580_35599 = G__35640;
i__35581_35600 = G__35641;
continue;
}
} else
{var vec__35591_35642 = cljs.core.first.call(null,seq__35572_35636__$1);var orig_type_35643 = cljs.core.nth.call(null,vec__35591_35642,0,null);var f_35644 = cljs.core.nth.call(null,vec__35591_35642,1,null);var seq__35573_35645 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35643,new cljs.core.PersistentArrayMap.fromArray([orig_type_35643,cljs.core.identity], true, false)));var chunk__35575_35646 = null;var count__35576_35647 = 0;var i__35577_35648 = 0;while(true){
if((i__35577_35648 < count__35576_35647))
{var vec__35592_35649 = cljs.core._nth.call(null,chunk__35575_35646,i__35577_35648);var actual_type_35650 = cljs.core.nth.call(null,vec__35592_35649,0,null);var factory_35651 = cljs.core.nth.call(null,vec__35592_35649,1,null);var canonical_f_35652 = (cljs.core.truth_(selector_35596)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35595,selector_35596):cljs.core.identity).call(null,factory_35651.call(null,f_35644));dommy.core.update_event_listeners_BANG_.call(null,elem_35595,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35650,f_35644], null),canonical_f_35652);
if(cljs.core.truth_(elem_35595.addEventListener))
{elem_35595.addEventListener(cljs.core.name.call(null,actual_type_35650),canonical_f_35652);
} else
{elem_35595.attachEvent(cljs.core.name.call(null,actual_type_35650),canonical_f_35652);
}
{
var G__35653 = seq__35573_35645;
var G__35654 = chunk__35575_35646;
var G__35655 = count__35576_35647;
var G__35656 = (i__35577_35648 + 1);
seq__35573_35645 = G__35653;
chunk__35575_35646 = G__35654;
count__35576_35647 = G__35655;
i__35577_35648 = G__35656;
continue;
}
} else
{var temp__4092__auto___35657__$1 = cljs.core.seq.call(null,seq__35573_35645);if(temp__4092__auto___35657__$1)
{var seq__35573_35658__$1 = temp__4092__auto___35657__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35573_35658__$1))
{var c__14547__auto___35659 = cljs.core.chunk_first.call(null,seq__35573_35658__$1);{
var G__35660 = cljs.core.chunk_rest.call(null,seq__35573_35658__$1);
var G__35661 = c__14547__auto___35659;
var G__35662 = cljs.core.count.call(null,c__14547__auto___35659);
var G__35663 = 0;
seq__35573_35645 = G__35660;
chunk__35575_35646 = G__35661;
count__35576_35647 = G__35662;
i__35577_35648 = G__35663;
continue;
}
} else
{var vec__35593_35664 = cljs.core.first.call(null,seq__35573_35658__$1);var actual_type_35665 = cljs.core.nth.call(null,vec__35593_35664,0,null);var factory_35666 = cljs.core.nth.call(null,vec__35593_35664,1,null);var canonical_f_35667 = (cljs.core.truth_(selector_35596)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35595,selector_35596):cljs.core.identity).call(null,factory_35666.call(null,f_35644));dommy.core.update_event_listeners_BANG_.call(null,elem_35595,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35596,actual_type_35665,f_35644], null),canonical_f_35667);
if(cljs.core.truth_(elem_35595.addEventListener))
{elem_35595.addEventListener(cljs.core.name.call(null,actual_type_35665),canonical_f_35667);
} else
{elem_35595.attachEvent(cljs.core.name.call(null,actual_type_35665),canonical_f_35667);
}
{
var G__35668 = cljs.core.next.call(null,seq__35573_35658__$1);
var G__35669 = null;
var G__35670 = 0;
var G__35671 = 0;
seq__35573_35645 = G__35668;
chunk__35575_35646 = G__35669;
count__35576_35647 = G__35670;
i__35577_35648 = G__35671;
continue;
}
}
} else
{}
}
break;
}
{
var G__35672 = cljs.core.next.call(null,seq__35572_35636__$1);
var G__35673 = null;
var G__35674 = 0;
var G__35675 = 0;
seq__35572_35597 = G__35672;
chunk__35579_35598 = G__35673;
count__35580_35599 = G__35674;
i__35581_35600 = G__35675;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__35676){
var elem_sel = cljs.core.first(arglist__35676);
var type_fs = cljs.core.rest(arglist__35676);
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
var vec__35700_35723 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35724 = cljs.core.nth.call(null,vec__35700_35723,0,null);var selector_35725 = cljs.core.nth.call(null,vec__35700_35723,1,null);var seq__35701_35726 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35708_35727 = null;var count__35709_35728 = 0;var i__35710_35729 = 0;while(true){
if((i__35710_35729 < count__35709_35728))
{var vec__35717_35730 = cljs.core._nth.call(null,chunk__35708_35727,i__35710_35729);var orig_type_35731 = cljs.core.nth.call(null,vec__35717_35730,0,null);var f_35732 = cljs.core.nth.call(null,vec__35717_35730,1,null);var seq__35711_35733 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35731,new cljs.core.PersistentArrayMap.fromArray([orig_type_35731,cljs.core.identity], true, false)));var chunk__35713_35734 = null;var count__35714_35735 = 0;var i__35715_35736 = 0;while(true){
if((i__35715_35736 < count__35714_35735))
{var vec__35718_35737 = cljs.core._nth.call(null,chunk__35713_35734,i__35715_35736);var actual_type_35738 = cljs.core.nth.call(null,vec__35718_35737,0,null);var __35739 = cljs.core.nth.call(null,vec__35718_35737,1,null);var keys_35740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35725,actual_type_35738,f_35732], null);var canonical_f_35741 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35724),keys_35740);dommy.core.update_event_listeners_BANG_.call(null,elem_35724,dommy.utils.dissoc_in,keys_35740);
if(cljs.core.truth_(elem_35724.removeEventListener))
{elem_35724.removeEventListener(cljs.core.name.call(null,actual_type_35738),canonical_f_35741);
} else
{elem_35724.detachEvent(cljs.core.name.call(null,actual_type_35738),canonical_f_35741);
}
{
var G__35742 = seq__35711_35733;
var G__35743 = chunk__35713_35734;
var G__35744 = count__35714_35735;
var G__35745 = (i__35715_35736 + 1);
seq__35711_35733 = G__35742;
chunk__35713_35734 = G__35743;
count__35714_35735 = G__35744;
i__35715_35736 = G__35745;
continue;
}
} else
{var temp__4092__auto___35746 = cljs.core.seq.call(null,seq__35711_35733);if(temp__4092__auto___35746)
{var seq__35711_35747__$1 = temp__4092__auto___35746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35711_35747__$1))
{var c__14547__auto___35748 = cljs.core.chunk_first.call(null,seq__35711_35747__$1);{
var G__35749 = cljs.core.chunk_rest.call(null,seq__35711_35747__$1);
var G__35750 = c__14547__auto___35748;
var G__35751 = cljs.core.count.call(null,c__14547__auto___35748);
var G__35752 = 0;
seq__35711_35733 = G__35749;
chunk__35713_35734 = G__35750;
count__35714_35735 = G__35751;
i__35715_35736 = G__35752;
continue;
}
} else
{var vec__35719_35753 = cljs.core.first.call(null,seq__35711_35747__$1);var actual_type_35754 = cljs.core.nth.call(null,vec__35719_35753,0,null);var __35755 = cljs.core.nth.call(null,vec__35719_35753,1,null);var keys_35756 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35725,actual_type_35754,f_35732], null);var canonical_f_35757 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35724),keys_35756);dommy.core.update_event_listeners_BANG_.call(null,elem_35724,dommy.utils.dissoc_in,keys_35756);
if(cljs.core.truth_(elem_35724.removeEventListener))
{elem_35724.removeEventListener(cljs.core.name.call(null,actual_type_35754),canonical_f_35757);
} else
{elem_35724.detachEvent(cljs.core.name.call(null,actual_type_35754),canonical_f_35757);
}
{
var G__35758 = cljs.core.next.call(null,seq__35711_35747__$1);
var G__35759 = null;
var G__35760 = 0;
var G__35761 = 0;
seq__35711_35733 = G__35758;
chunk__35713_35734 = G__35759;
count__35714_35735 = G__35760;
i__35715_35736 = G__35761;
continue;
}
}
} else
{}
}
break;
}
{
var G__35762 = seq__35701_35726;
var G__35763 = chunk__35708_35727;
var G__35764 = count__35709_35728;
var G__35765 = (i__35710_35729 + 1);
seq__35701_35726 = G__35762;
chunk__35708_35727 = G__35763;
count__35709_35728 = G__35764;
i__35710_35729 = G__35765;
continue;
}
} else
{var temp__4092__auto___35766 = cljs.core.seq.call(null,seq__35701_35726);if(temp__4092__auto___35766)
{var seq__35701_35767__$1 = temp__4092__auto___35766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35701_35767__$1))
{var c__14547__auto___35768 = cljs.core.chunk_first.call(null,seq__35701_35767__$1);{
var G__35769 = cljs.core.chunk_rest.call(null,seq__35701_35767__$1);
var G__35770 = c__14547__auto___35768;
var G__35771 = cljs.core.count.call(null,c__14547__auto___35768);
var G__35772 = 0;
seq__35701_35726 = G__35769;
chunk__35708_35727 = G__35770;
count__35709_35728 = G__35771;
i__35710_35729 = G__35772;
continue;
}
} else
{var vec__35720_35773 = cljs.core.first.call(null,seq__35701_35767__$1);var orig_type_35774 = cljs.core.nth.call(null,vec__35720_35773,0,null);var f_35775 = cljs.core.nth.call(null,vec__35720_35773,1,null);var seq__35702_35776 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35774,new cljs.core.PersistentArrayMap.fromArray([orig_type_35774,cljs.core.identity], true, false)));var chunk__35704_35777 = null;var count__35705_35778 = 0;var i__35706_35779 = 0;while(true){
if((i__35706_35779 < count__35705_35778))
{var vec__35721_35780 = cljs.core._nth.call(null,chunk__35704_35777,i__35706_35779);var actual_type_35781 = cljs.core.nth.call(null,vec__35721_35780,0,null);var __35782 = cljs.core.nth.call(null,vec__35721_35780,1,null);var keys_35783 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35725,actual_type_35781,f_35775], null);var canonical_f_35784 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35724),keys_35783);dommy.core.update_event_listeners_BANG_.call(null,elem_35724,dommy.utils.dissoc_in,keys_35783);
if(cljs.core.truth_(elem_35724.removeEventListener))
{elem_35724.removeEventListener(cljs.core.name.call(null,actual_type_35781),canonical_f_35784);
} else
{elem_35724.detachEvent(cljs.core.name.call(null,actual_type_35781),canonical_f_35784);
}
{
var G__35785 = seq__35702_35776;
var G__35786 = chunk__35704_35777;
var G__35787 = count__35705_35778;
var G__35788 = (i__35706_35779 + 1);
seq__35702_35776 = G__35785;
chunk__35704_35777 = G__35786;
count__35705_35778 = G__35787;
i__35706_35779 = G__35788;
continue;
}
} else
{var temp__4092__auto___35789__$1 = cljs.core.seq.call(null,seq__35702_35776);if(temp__4092__auto___35789__$1)
{var seq__35702_35790__$1 = temp__4092__auto___35789__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35702_35790__$1))
{var c__14547__auto___35791 = cljs.core.chunk_first.call(null,seq__35702_35790__$1);{
var G__35792 = cljs.core.chunk_rest.call(null,seq__35702_35790__$1);
var G__35793 = c__14547__auto___35791;
var G__35794 = cljs.core.count.call(null,c__14547__auto___35791);
var G__35795 = 0;
seq__35702_35776 = G__35792;
chunk__35704_35777 = G__35793;
count__35705_35778 = G__35794;
i__35706_35779 = G__35795;
continue;
}
} else
{var vec__35722_35796 = cljs.core.first.call(null,seq__35702_35790__$1);var actual_type_35797 = cljs.core.nth.call(null,vec__35722_35796,0,null);var __35798 = cljs.core.nth.call(null,vec__35722_35796,1,null);var keys_35799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35725,actual_type_35797,f_35775], null);var canonical_f_35800 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35724),keys_35799);dommy.core.update_event_listeners_BANG_.call(null,elem_35724,dommy.utils.dissoc_in,keys_35799);
if(cljs.core.truth_(elem_35724.removeEventListener))
{elem_35724.removeEventListener(cljs.core.name.call(null,actual_type_35797),canonical_f_35800);
} else
{elem_35724.detachEvent(cljs.core.name.call(null,actual_type_35797),canonical_f_35800);
}
{
var G__35801 = cljs.core.next.call(null,seq__35702_35790__$1);
var G__35802 = null;
var G__35803 = 0;
var G__35804 = 0;
seq__35702_35776 = G__35801;
chunk__35704_35777 = G__35802;
count__35705_35778 = G__35803;
i__35706_35779 = G__35804;
continue;
}
}
} else
{}
}
break;
}
{
var G__35805 = cljs.core.next.call(null,seq__35701_35767__$1);
var G__35806 = null;
var G__35807 = 0;
var G__35808 = 0;
seq__35701_35726 = G__35805;
chunk__35708_35727 = G__35806;
count__35709_35728 = G__35807;
i__35710_35729 = G__35808;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__35809){
var elem_sel = cljs.core.first(arglist__35809);
var type_fs = cljs.core.rest(arglist__35809);
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
var vec__35817_35824 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35825 = cljs.core.nth.call(null,vec__35817_35824,0,null);var selector_35826 = cljs.core.nth.call(null,vec__35817_35824,1,null);var seq__35818_35827 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35819_35828 = null;var count__35820_35829 = 0;var i__35821_35830 = 0;while(true){
if((i__35821_35830 < count__35820_35829))
{var vec__35822_35831 = cljs.core._nth.call(null,chunk__35819_35828,i__35821_35830);var type_35832 = cljs.core.nth.call(null,vec__35822_35831,0,null);var f_35833 = cljs.core.nth.call(null,vec__35822_35831,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35832,((function (seq__35818_35827,chunk__35819_35828,count__35820_35829,i__35821_35830,vec__35822_35831,type_35832,f_35833){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35832,this_fn);
return f_35833.call(null,e);
});})(seq__35818_35827,chunk__35819_35828,count__35820_35829,i__35821_35830,vec__35822_35831,type_35832,f_35833))
);
{
var G__35834 = seq__35818_35827;
var G__35835 = chunk__35819_35828;
var G__35836 = count__35820_35829;
var G__35837 = (i__35821_35830 + 1);
seq__35818_35827 = G__35834;
chunk__35819_35828 = G__35835;
count__35820_35829 = G__35836;
i__35821_35830 = G__35837;
continue;
}
} else
{var temp__4092__auto___35838 = cljs.core.seq.call(null,seq__35818_35827);if(temp__4092__auto___35838)
{var seq__35818_35839__$1 = temp__4092__auto___35838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35818_35839__$1))
{var c__14547__auto___35840 = cljs.core.chunk_first.call(null,seq__35818_35839__$1);{
var G__35841 = cljs.core.chunk_rest.call(null,seq__35818_35839__$1);
var G__35842 = c__14547__auto___35840;
var G__35843 = cljs.core.count.call(null,c__14547__auto___35840);
var G__35844 = 0;
seq__35818_35827 = G__35841;
chunk__35819_35828 = G__35842;
count__35820_35829 = G__35843;
i__35821_35830 = G__35844;
continue;
}
} else
{var vec__35823_35845 = cljs.core.first.call(null,seq__35818_35839__$1);var type_35846 = cljs.core.nth.call(null,vec__35823_35845,0,null);var f_35847 = cljs.core.nth.call(null,vec__35823_35845,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35846,((function (seq__35818_35827,chunk__35819_35828,count__35820_35829,i__35821_35830,vec__35823_35845,type_35846,f_35847,seq__35818_35839__$1,temp__4092__auto___35838){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35846,this_fn);
return f_35847.call(null,e);
});})(seq__35818_35827,chunk__35819_35828,count__35820_35829,i__35821_35830,vec__35823_35845,type_35846,f_35847,seq__35818_35839__$1,temp__4092__auto___35838))
);
{
var G__35848 = cljs.core.next.call(null,seq__35818_35839__$1);
var G__35849 = null;
var G__35850 = 0;
var G__35851 = 0;
seq__35818_35827 = G__35848;
chunk__35819_35828 = G__35849;
count__35820_35829 = G__35850;
i__35821_35830 = G__35851;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__35852){
var elem_sel = cljs.core.first(arglist__35852);
var type_fs = cljs.core.rest(arglist__35852);
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
var fire_BANG___delegate = function (node,event_type,p__35853){var vec__35855 = p__35853;var update_event_BANG_ = cljs.core.nth.call(null,vec__35855,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13823__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var p__35853 = null;if (arguments.length > 2) {
  p__35853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__35853);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__35856){
var node = cljs.core.first(arglist__35856);
arglist__35856 = cljs.core.next(arglist__35856);
var event_type = cljs.core.first(arglist__35856);
var p__35853 = cljs.core.rest(arglist__35856);
return fire_BANG___delegate(node,event_type,p__35853);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map