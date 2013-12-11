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
dommy.core.text = (function text(elem){var or__15141__auto__ = elem.textContent;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
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
var append_BANG___2 = (function (parent,child){var G__35464 = dommy.template.__GT_node_like.call(null,parent);G__35464.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__35464;
});
var append_BANG___3 = (function() { 
var G__35469__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35465_35470 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35466_35471 = null;var count__35467_35472 = 0;var i__35468_35473 = 0;while(true){
if((i__35468_35473 < count__35467_35472))
{var c_35474 = cljs.core._nth.call(null,chunk__35466_35471,i__35468_35473);append_BANG_.call(null,parent__$1,c_35474);
{
var G__35475 = seq__35465_35470;
var G__35476 = chunk__35466_35471;
var G__35477 = count__35467_35472;
var G__35478 = (i__35468_35473 + 1);
seq__35465_35470 = G__35475;
chunk__35466_35471 = G__35476;
count__35467_35472 = G__35477;
i__35468_35473 = G__35478;
continue;
}
} else
{var temp__4098__auto___35479 = cljs.core.seq.call(null,seq__35465_35470);if(temp__4098__auto___35479)
{var seq__35465_35480__$1 = temp__4098__auto___35479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35465_35480__$1))
{var c__15865__auto___35481 = cljs.core.chunk_first.call(null,seq__35465_35480__$1);{
var G__35482 = cljs.core.chunk_rest.call(null,seq__35465_35480__$1);
var G__35483 = c__15865__auto___35481;
var G__35484 = cljs.core.count.call(null,c__15865__auto___35481);
var G__35485 = 0;
seq__35465_35470 = G__35482;
chunk__35466_35471 = G__35483;
count__35467_35472 = G__35484;
i__35468_35473 = G__35485;
continue;
}
} else
{var c_35486 = cljs.core.first.call(null,seq__35465_35480__$1);append_BANG_.call(null,parent__$1,c_35486);
{
var G__35487 = cljs.core.next.call(null,seq__35465_35480__$1);
var G__35488 = null;
var G__35489 = 0;
var G__35490 = 0;
seq__35465_35470 = G__35487;
chunk__35466_35471 = G__35488;
count__35467_35472 = G__35489;
i__35468_35473 = G__35490;
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
var G__35469 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35469__delegate.call(this,parent,child,more_children);};
G__35469.cljs$lang$maxFixedArity = 2;
G__35469.cljs$lang$applyTo = (function (arglist__35491){
var parent = cljs.core.first(arglist__35491);
arglist__35491 = cljs.core.next(arglist__35491);
var child = cljs.core.first(arglist__35491);
var more_children = cljs.core.rest(arglist__35491);
return G__35469__delegate(parent,child,more_children);
});
G__35469.cljs$core$IFn$_invoke$arity$variadic = G__35469__delegate;
return G__35469;
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
var G__35500__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35496_35501 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35497_35502 = null;var count__35498_35503 = 0;var i__35499_35504 = 0;while(true){
if((i__35499_35504 < count__35498_35503))
{var c_35505 = cljs.core._nth.call(null,chunk__35497_35502,i__35499_35504);prepend_BANG_.call(null,parent__$1,c_35505);
{
var G__35506 = seq__35496_35501;
var G__35507 = chunk__35497_35502;
var G__35508 = count__35498_35503;
var G__35509 = (i__35499_35504 + 1);
seq__35496_35501 = G__35506;
chunk__35497_35502 = G__35507;
count__35498_35503 = G__35508;
i__35499_35504 = G__35509;
continue;
}
} else
{var temp__4098__auto___35510 = cljs.core.seq.call(null,seq__35496_35501);if(temp__4098__auto___35510)
{var seq__35496_35511__$1 = temp__4098__auto___35510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35496_35511__$1))
{var c__15865__auto___35512 = cljs.core.chunk_first.call(null,seq__35496_35511__$1);{
var G__35513 = cljs.core.chunk_rest.call(null,seq__35496_35511__$1);
var G__35514 = c__15865__auto___35512;
var G__35515 = cljs.core.count.call(null,c__15865__auto___35512);
var G__35516 = 0;
seq__35496_35501 = G__35513;
chunk__35497_35502 = G__35514;
count__35498_35503 = G__35515;
i__35499_35504 = G__35516;
continue;
}
} else
{var c_35517 = cljs.core.first.call(null,seq__35496_35511__$1);prepend_BANG_.call(null,parent__$1,c_35517);
{
var G__35518 = cljs.core.next.call(null,seq__35496_35511__$1);
var G__35519 = null;
var G__35520 = 0;
var G__35521 = 0;
seq__35496_35501 = G__35518;
chunk__35497_35502 = G__35519;
count__35498_35503 = G__35520;
i__35499_35504 = G__35521;
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
var G__35500 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35500__delegate.call(this,parent,child,more_children);};
G__35500.cljs$lang$maxFixedArity = 2;
G__35500.cljs$lang$applyTo = (function (arglist__35522){
var parent = cljs.core.first(arglist__35522);
arglist__35522 = cljs.core.next(arglist__35522);
var child = cljs.core.first(arglist__35522);
var more_children = cljs.core.rest(arglist__35522);
return G__35500__delegate(parent,child,more_children);
});
G__35500.cljs$core$IFn$_invoke$arity$variadic = G__35500__delegate;
return G__35500;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4096__auto___35523 = other__$1.nextSibling;if(cljs.core.truth_(temp__4096__auto___35523))
{var next_35524 = temp__4096__auto___35523;parent.insertBefore(actual_node,next_35524);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__35526 = dommy.template.__GT_node_like.call(null,parent);G__35526.innerHTML = "";
dommy.core.append_BANG_.call(null,G__35526,node_like);
return G__35526;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__35528 = elem__$1.parentNode;G__35528.removeChild(elem__$1);
return G__35528;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35534){var vec__35535 = p__35534;var k = cljs.core.nth.call(null,vec__35535,0,null);var v = cljs.core.nth.call(null,vec__35535,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t35536 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t35536 = (function (v,k,vec__35535,p__35534,container,key_selectors_map,template,selector_map,meta35537){
this.v = v;
this.k = k;
this.vec__35535 = vec__35535;
this.p__35534 = p__35534;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta35537 = meta35537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t35536.cljs$lang$type = true;
dommy.core.t35536.cljs$lang$ctorStr = "dommy.core/t35536";
dommy.core.t35536.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"dommy.core/t35536");
});
dommy.core.t35536.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t35536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35538){var self__ = this;
var _35538__$1 = this;return self__.meta35537;
});
dommy.core.t35536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35538,meta35537__$1){var self__ = this;
var _35538__$1 = this;return (new dommy.core.t35536(self__.v,self__.k,self__.vec__35535,self__.p__35534,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta35537__$1));
});
dommy.core.__GT_t35536 = (function __GT_t35536(v__$1,k__$1,vec__35535__$1,p__35534__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35537){return (new dommy.core.t35536(v__$1,k__$1,vec__35535__$1,p__35534__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35537));
});
}
return (new dommy.core.t35536(v,k,vec__35535,p__35534,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__35539_SHARP_){return p1__35539_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__35540_SHARP_){return !((p1__35540_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35541){var vec__35542 = p__35541;var special_mouse_event = cljs.core.nth.call(null,vec__35542,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__35542,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__15141__auto__ = event.selectedTarget;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__15129__auto__ = related_target;if(cljs.core.truth_(and__15129__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__15129__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__15129__auto__ = selected_target;if(cljs.core.truth_(and__15129__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__15129__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__15141__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__35543){
var elem = cljs.core.first(arglist__35543);
arglist__35543 = cljs.core.next(arglist__35543);
var f = cljs.core.first(arglist__35543);
var args = cljs.core.rest(arglist__35543);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__35544_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__35544_SHARP_));
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
var vec__35568_35591 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35592 = cljs.core.nth.call(null,vec__35568_35591,0,null);var selector_35593 = cljs.core.nth.call(null,vec__35568_35591,1,null);var seq__35569_35594 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35576_35595 = null;var count__35577_35596 = 0;var i__35578_35597 = 0;while(true){
if((i__35578_35597 < count__35577_35596))
{var vec__35585_35598 = cljs.core._nth.call(null,chunk__35576_35595,i__35578_35597);var orig_type_35599 = cljs.core.nth.call(null,vec__35585_35598,0,null);var f_35600 = cljs.core.nth.call(null,vec__35585_35598,1,null);var seq__35579_35601 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35599,new cljs.core.PersistentArrayMap.fromArray([orig_type_35599,cljs.core.identity], true, false)));var chunk__35581_35602 = null;var count__35582_35603 = 0;var i__35583_35604 = 0;while(true){
if((i__35583_35604 < count__35582_35603))
{var vec__35586_35605 = cljs.core._nth.call(null,chunk__35581_35602,i__35583_35604);var actual_type_35606 = cljs.core.nth.call(null,vec__35586_35605,0,null);var factory_35607 = cljs.core.nth.call(null,vec__35586_35605,1,null);var canonical_f_35608 = (cljs.core.truth_(selector_35593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35592,selector_35593):cljs.core.identity).call(null,factory_35607.call(null,f_35600));dommy.core.update_event_listeners_BANG_.call(null,elem_35592,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35593,actual_type_35606,f_35600], null),canonical_f_35608);
if(cljs.core.truth_(elem_35592.addEventListener))
{elem_35592.addEventListener(cljs.core.name.call(null,actual_type_35606),canonical_f_35608);
} else
{elem_35592.attachEvent(cljs.core.name.call(null,actual_type_35606),canonical_f_35608);
}
{
var G__35609 = seq__35579_35601;
var G__35610 = chunk__35581_35602;
var G__35611 = count__35582_35603;
var G__35612 = (i__35583_35604 + 1);
seq__35579_35601 = G__35609;
chunk__35581_35602 = G__35610;
count__35582_35603 = G__35611;
i__35583_35604 = G__35612;
continue;
}
} else
{var temp__4098__auto___35613 = cljs.core.seq.call(null,seq__35579_35601);if(temp__4098__auto___35613)
{var seq__35579_35614__$1 = temp__4098__auto___35613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35579_35614__$1))
{var c__15865__auto___35615 = cljs.core.chunk_first.call(null,seq__35579_35614__$1);{
var G__35616 = cljs.core.chunk_rest.call(null,seq__35579_35614__$1);
var G__35617 = c__15865__auto___35615;
var G__35618 = cljs.core.count.call(null,c__15865__auto___35615);
var G__35619 = 0;
seq__35579_35601 = G__35616;
chunk__35581_35602 = G__35617;
count__35582_35603 = G__35618;
i__35583_35604 = G__35619;
continue;
}
} else
{var vec__35587_35620 = cljs.core.first.call(null,seq__35579_35614__$1);var actual_type_35621 = cljs.core.nth.call(null,vec__35587_35620,0,null);var factory_35622 = cljs.core.nth.call(null,vec__35587_35620,1,null);var canonical_f_35623 = (cljs.core.truth_(selector_35593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35592,selector_35593):cljs.core.identity).call(null,factory_35622.call(null,f_35600));dommy.core.update_event_listeners_BANG_.call(null,elem_35592,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35593,actual_type_35621,f_35600], null),canonical_f_35623);
if(cljs.core.truth_(elem_35592.addEventListener))
{elem_35592.addEventListener(cljs.core.name.call(null,actual_type_35621),canonical_f_35623);
} else
{elem_35592.attachEvent(cljs.core.name.call(null,actual_type_35621),canonical_f_35623);
}
{
var G__35624 = cljs.core.next.call(null,seq__35579_35614__$1);
var G__35625 = null;
var G__35626 = 0;
var G__35627 = 0;
seq__35579_35601 = G__35624;
chunk__35581_35602 = G__35625;
count__35582_35603 = G__35626;
i__35583_35604 = G__35627;
continue;
}
}
} else
{}
}
break;
}
{
var G__35628 = seq__35569_35594;
var G__35629 = chunk__35576_35595;
var G__35630 = count__35577_35596;
var G__35631 = (i__35578_35597 + 1);
seq__35569_35594 = G__35628;
chunk__35576_35595 = G__35629;
count__35577_35596 = G__35630;
i__35578_35597 = G__35631;
continue;
}
} else
{var temp__4098__auto___35632 = cljs.core.seq.call(null,seq__35569_35594);if(temp__4098__auto___35632)
{var seq__35569_35633__$1 = temp__4098__auto___35632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35569_35633__$1))
{var c__15865__auto___35634 = cljs.core.chunk_first.call(null,seq__35569_35633__$1);{
var G__35635 = cljs.core.chunk_rest.call(null,seq__35569_35633__$1);
var G__35636 = c__15865__auto___35634;
var G__35637 = cljs.core.count.call(null,c__15865__auto___35634);
var G__35638 = 0;
seq__35569_35594 = G__35635;
chunk__35576_35595 = G__35636;
count__35577_35596 = G__35637;
i__35578_35597 = G__35638;
continue;
}
} else
{var vec__35588_35639 = cljs.core.first.call(null,seq__35569_35633__$1);var orig_type_35640 = cljs.core.nth.call(null,vec__35588_35639,0,null);var f_35641 = cljs.core.nth.call(null,vec__35588_35639,1,null);var seq__35570_35642 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35640,new cljs.core.PersistentArrayMap.fromArray([orig_type_35640,cljs.core.identity], true, false)));var chunk__35572_35643 = null;var count__35573_35644 = 0;var i__35574_35645 = 0;while(true){
if((i__35574_35645 < count__35573_35644))
{var vec__35589_35646 = cljs.core._nth.call(null,chunk__35572_35643,i__35574_35645);var actual_type_35647 = cljs.core.nth.call(null,vec__35589_35646,0,null);var factory_35648 = cljs.core.nth.call(null,vec__35589_35646,1,null);var canonical_f_35649 = (cljs.core.truth_(selector_35593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35592,selector_35593):cljs.core.identity).call(null,factory_35648.call(null,f_35641));dommy.core.update_event_listeners_BANG_.call(null,elem_35592,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35593,actual_type_35647,f_35641], null),canonical_f_35649);
if(cljs.core.truth_(elem_35592.addEventListener))
{elem_35592.addEventListener(cljs.core.name.call(null,actual_type_35647),canonical_f_35649);
} else
{elem_35592.attachEvent(cljs.core.name.call(null,actual_type_35647),canonical_f_35649);
}
{
var G__35650 = seq__35570_35642;
var G__35651 = chunk__35572_35643;
var G__35652 = count__35573_35644;
var G__35653 = (i__35574_35645 + 1);
seq__35570_35642 = G__35650;
chunk__35572_35643 = G__35651;
count__35573_35644 = G__35652;
i__35574_35645 = G__35653;
continue;
}
} else
{var temp__4098__auto___35654__$1 = cljs.core.seq.call(null,seq__35570_35642);if(temp__4098__auto___35654__$1)
{var seq__35570_35655__$1 = temp__4098__auto___35654__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35570_35655__$1))
{var c__15865__auto___35656 = cljs.core.chunk_first.call(null,seq__35570_35655__$1);{
var G__35657 = cljs.core.chunk_rest.call(null,seq__35570_35655__$1);
var G__35658 = c__15865__auto___35656;
var G__35659 = cljs.core.count.call(null,c__15865__auto___35656);
var G__35660 = 0;
seq__35570_35642 = G__35657;
chunk__35572_35643 = G__35658;
count__35573_35644 = G__35659;
i__35574_35645 = G__35660;
continue;
}
} else
{var vec__35590_35661 = cljs.core.first.call(null,seq__35570_35655__$1);var actual_type_35662 = cljs.core.nth.call(null,vec__35590_35661,0,null);var factory_35663 = cljs.core.nth.call(null,vec__35590_35661,1,null);var canonical_f_35664 = (cljs.core.truth_(selector_35593)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35592,selector_35593):cljs.core.identity).call(null,factory_35663.call(null,f_35641));dommy.core.update_event_listeners_BANG_.call(null,elem_35592,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35593,actual_type_35662,f_35641], null),canonical_f_35664);
if(cljs.core.truth_(elem_35592.addEventListener))
{elem_35592.addEventListener(cljs.core.name.call(null,actual_type_35662),canonical_f_35664);
} else
{elem_35592.attachEvent(cljs.core.name.call(null,actual_type_35662),canonical_f_35664);
}
{
var G__35665 = cljs.core.next.call(null,seq__35570_35655__$1);
var G__35666 = null;
var G__35667 = 0;
var G__35668 = 0;
seq__35570_35642 = G__35665;
chunk__35572_35643 = G__35666;
count__35573_35644 = G__35667;
i__35574_35645 = G__35668;
continue;
}
}
} else
{}
}
break;
}
{
var G__35669 = cljs.core.next.call(null,seq__35569_35633__$1);
var G__35670 = null;
var G__35671 = 0;
var G__35672 = 0;
seq__35569_35594 = G__35669;
chunk__35576_35595 = G__35670;
count__35577_35596 = G__35671;
i__35578_35597 = G__35672;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__35673){
var elem_sel = cljs.core.first(arglist__35673);
var type_fs = cljs.core.rest(arglist__35673);
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
var vec__35697_35720 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35721 = cljs.core.nth.call(null,vec__35697_35720,0,null);var selector_35722 = cljs.core.nth.call(null,vec__35697_35720,1,null);var seq__35698_35723 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35705_35724 = null;var count__35706_35725 = 0;var i__35707_35726 = 0;while(true){
if((i__35707_35726 < count__35706_35725))
{var vec__35714_35727 = cljs.core._nth.call(null,chunk__35705_35724,i__35707_35726);var orig_type_35728 = cljs.core.nth.call(null,vec__35714_35727,0,null);var f_35729 = cljs.core.nth.call(null,vec__35714_35727,1,null);var seq__35708_35730 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35728,new cljs.core.PersistentArrayMap.fromArray([orig_type_35728,cljs.core.identity], true, false)));var chunk__35710_35731 = null;var count__35711_35732 = 0;var i__35712_35733 = 0;while(true){
if((i__35712_35733 < count__35711_35732))
{var vec__35715_35734 = cljs.core._nth.call(null,chunk__35710_35731,i__35712_35733);var actual_type_35735 = cljs.core.nth.call(null,vec__35715_35734,0,null);var __35736 = cljs.core.nth.call(null,vec__35715_35734,1,null);var keys_35737 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35722,actual_type_35735,f_35729], null);var canonical_f_35738 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35721),keys_35737);dommy.core.update_event_listeners_BANG_.call(null,elem_35721,dommy.utils.dissoc_in,keys_35737);
if(cljs.core.truth_(elem_35721.removeEventListener))
{elem_35721.removeEventListener(cljs.core.name.call(null,actual_type_35735),canonical_f_35738);
} else
{elem_35721.detachEvent(cljs.core.name.call(null,actual_type_35735),canonical_f_35738);
}
{
var G__35739 = seq__35708_35730;
var G__35740 = chunk__35710_35731;
var G__35741 = count__35711_35732;
var G__35742 = (i__35712_35733 + 1);
seq__35708_35730 = G__35739;
chunk__35710_35731 = G__35740;
count__35711_35732 = G__35741;
i__35712_35733 = G__35742;
continue;
}
} else
{var temp__4098__auto___35743 = cljs.core.seq.call(null,seq__35708_35730);if(temp__4098__auto___35743)
{var seq__35708_35744__$1 = temp__4098__auto___35743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35708_35744__$1))
{var c__15865__auto___35745 = cljs.core.chunk_first.call(null,seq__35708_35744__$1);{
var G__35746 = cljs.core.chunk_rest.call(null,seq__35708_35744__$1);
var G__35747 = c__15865__auto___35745;
var G__35748 = cljs.core.count.call(null,c__15865__auto___35745);
var G__35749 = 0;
seq__35708_35730 = G__35746;
chunk__35710_35731 = G__35747;
count__35711_35732 = G__35748;
i__35712_35733 = G__35749;
continue;
}
} else
{var vec__35716_35750 = cljs.core.first.call(null,seq__35708_35744__$1);var actual_type_35751 = cljs.core.nth.call(null,vec__35716_35750,0,null);var __35752 = cljs.core.nth.call(null,vec__35716_35750,1,null);var keys_35753 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35722,actual_type_35751,f_35729], null);var canonical_f_35754 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35721),keys_35753);dommy.core.update_event_listeners_BANG_.call(null,elem_35721,dommy.utils.dissoc_in,keys_35753);
if(cljs.core.truth_(elem_35721.removeEventListener))
{elem_35721.removeEventListener(cljs.core.name.call(null,actual_type_35751),canonical_f_35754);
} else
{elem_35721.detachEvent(cljs.core.name.call(null,actual_type_35751),canonical_f_35754);
}
{
var G__35755 = cljs.core.next.call(null,seq__35708_35744__$1);
var G__35756 = null;
var G__35757 = 0;
var G__35758 = 0;
seq__35708_35730 = G__35755;
chunk__35710_35731 = G__35756;
count__35711_35732 = G__35757;
i__35712_35733 = G__35758;
continue;
}
}
} else
{}
}
break;
}
{
var G__35759 = seq__35698_35723;
var G__35760 = chunk__35705_35724;
var G__35761 = count__35706_35725;
var G__35762 = (i__35707_35726 + 1);
seq__35698_35723 = G__35759;
chunk__35705_35724 = G__35760;
count__35706_35725 = G__35761;
i__35707_35726 = G__35762;
continue;
}
} else
{var temp__4098__auto___35763 = cljs.core.seq.call(null,seq__35698_35723);if(temp__4098__auto___35763)
{var seq__35698_35764__$1 = temp__4098__auto___35763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35698_35764__$1))
{var c__15865__auto___35765 = cljs.core.chunk_first.call(null,seq__35698_35764__$1);{
var G__35766 = cljs.core.chunk_rest.call(null,seq__35698_35764__$1);
var G__35767 = c__15865__auto___35765;
var G__35768 = cljs.core.count.call(null,c__15865__auto___35765);
var G__35769 = 0;
seq__35698_35723 = G__35766;
chunk__35705_35724 = G__35767;
count__35706_35725 = G__35768;
i__35707_35726 = G__35769;
continue;
}
} else
{var vec__35717_35770 = cljs.core.first.call(null,seq__35698_35764__$1);var orig_type_35771 = cljs.core.nth.call(null,vec__35717_35770,0,null);var f_35772 = cljs.core.nth.call(null,vec__35717_35770,1,null);var seq__35699_35773 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35771,new cljs.core.PersistentArrayMap.fromArray([orig_type_35771,cljs.core.identity], true, false)));var chunk__35701_35774 = null;var count__35702_35775 = 0;var i__35703_35776 = 0;while(true){
if((i__35703_35776 < count__35702_35775))
{var vec__35718_35777 = cljs.core._nth.call(null,chunk__35701_35774,i__35703_35776);var actual_type_35778 = cljs.core.nth.call(null,vec__35718_35777,0,null);var __35779 = cljs.core.nth.call(null,vec__35718_35777,1,null);var keys_35780 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35722,actual_type_35778,f_35772], null);var canonical_f_35781 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35721),keys_35780);dommy.core.update_event_listeners_BANG_.call(null,elem_35721,dommy.utils.dissoc_in,keys_35780);
if(cljs.core.truth_(elem_35721.removeEventListener))
{elem_35721.removeEventListener(cljs.core.name.call(null,actual_type_35778),canonical_f_35781);
} else
{elem_35721.detachEvent(cljs.core.name.call(null,actual_type_35778),canonical_f_35781);
}
{
var G__35782 = seq__35699_35773;
var G__35783 = chunk__35701_35774;
var G__35784 = count__35702_35775;
var G__35785 = (i__35703_35776 + 1);
seq__35699_35773 = G__35782;
chunk__35701_35774 = G__35783;
count__35702_35775 = G__35784;
i__35703_35776 = G__35785;
continue;
}
} else
{var temp__4098__auto___35786__$1 = cljs.core.seq.call(null,seq__35699_35773);if(temp__4098__auto___35786__$1)
{var seq__35699_35787__$1 = temp__4098__auto___35786__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35699_35787__$1))
{var c__15865__auto___35788 = cljs.core.chunk_first.call(null,seq__35699_35787__$1);{
var G__35789 = cljs.core.chunk_rest.call(null,seq__35699_35787__$1);
var G__35790 = c__15865__auto___35788;
var G__35791 = cljs.core.count.call(null,c__15865__auto___35788);
var G__35792 = 0;
seq__35699_35773 = G__35789;
chunk__35701_35774 = G__35790;
count__35702_35775 = G__35791;
i__35703_35776 = G__35792;
continue;
}
} else
{var vec__35719_35793 = cljs.core.first.call(null,seq__35699_35787__$1);var actual_type_35794 = cljs.core.nth.call(null,vec__35719_35793,0,null);var __35795 = cljs.core.nth.call(null,vec__35719_35793,1,null);var keys_35796 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35722,actual_type_35794,f_35772], null);var canonical_f_35797 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35721),keys_35796);dommy.core.update_event_listeners_BANG_.call(null,elem_35721,dommy.utils.dissoc_in,keys_35796);
if(cljs.core.truth_(elem_35721.removeEventListener))
{elem_35721.removeEventListener(cljs.core.name.call(null,actual_type_35794),canonical_f_35797);
} else
{elem_35721.detachEvent(cljs.core.name.call(null,actual_type_35794),canonical_f_35797);
}
{
var G__35798 = cljs.core.next.call(null,seq__35699_35787__$1);
var G__35799 = null;
var G__35800 = 0;
var G__35801 = 0;
seq__35699_35773 = G__35798;
chunk__35701_35774 = G__35799;
count__35702_35775 = G__35800;
i__35703_35776 = G__35801;
continue;
}
}
} else
{}
}
break;
}
{
var G__35802 = cljs.core.next.call(null,seq__35698_35764__$1);
var G__35803 = null;
var G__35804 = 0;
var G__35805 = 0;
seq__35698_35723 = G__35802;
chunk__35705_35724 = G__35803;
count__35706_35725 = G__35804;
i__35707_35726 = G__35805;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__35806){
var elem_sel = cljs.core.first(arglist__35806);
var type_fs = cljs.core.rest(arglist__35806);
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
var vec__35814_35821 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35822 = cljs.core.nth.call(null,vec__35814_35821,0,null);var selector_35823 = cljs.core.nth.call(null,vec__35814_35821,1,null);var seq__35815_35824 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35816_35825 = null;var count__35817_35826 = 0;var i__35818_35827 = 0;while(true){
if((i__35818_35827 < count__35817_35826))
{var vec__35819_35828 = cljs.core._nth.call(null,chunk__35816_35825,i__35818_35827);var type_35829 = cljs.core.nth.call(null,vec__35819_35828,0,null);var f_35830 = cljs.core.nth.call(null,vec__35819_35828,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35829,((function (seq__35815_35824,chunk__35816_35825,count__35817_35826,i__35818_35827,vec__35819_35828,type_35829,f_35830){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35829,this_fn);
return f_35830.call(null,e);
});})(seq__35815_35824,chunk__35816_35825,count__35817_35826,i__35818_35827,vec__35819_35828,type_35829,f_35830))
);
{
var G__35831 = seq__35815_35824;
var G__35832 = chunk__35816_35825;
var G__35833 = count__35817_35826;
var G__35834 = (i__35818_35827 + 1);
seq__35815_35824 = G__35831;
chunk__35816_35825 = G__35832;
count__35817_35826 = G__35833;
i__35818_35827 = G__35834;
continue;
}
} else
{var temp__4098__auto___35835 = cljs.core.seq.call(null,seq__35815_35824);if(temp__4098__auto___35835)
{var seq__35815_35836__$1 = temp__4098__auto___35835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35815_35836__$1))
{var c__15865__auto___35837 = cljs.core.chunk_first.call(null,seq__35815_35836__$1);{
var G__35838 = cljs.core.chunk_rest.call(null,seq__35815_35836__$1);
var G__35839 = c__15865__auto___35837;
var G__35840 = cljs.core.count.call(null,c__15865__auto___35837);
var G__35841 = 0;
seq__35815_35824 = G__35838;
chunk__35816_35825 = G__35839;
count__35817_35826 = G__35840;
i__35818_35827 = G__35841;
continue;
}
} else
{var vec__35820_35842 = cljs.core.first.call(null,seq__35815_35836__$1);var type_35843 = cljs.core.nth.call(null,vec__35820_35842,0,null);var f_35844 = cljs.core.nth.call(null,vec__35820_35842,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_35843,((function (seq__35815_35824,chunk__35816_35825,count__35817_35826,i__35818_35827,vec__35820_35842,type_35843,f_35844,seq__35815_35836__$1,temp__4098__auto___35835){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_35843,this_fn);
return f_35844.call(null,e);
});})(seq__35815_35824,chunk__35816_35825,count__35817_35826,i__35818_35827,vec__35820_35842,type_35843,f_35844,seq__35815_35836__$1,temp__4098__auto___35835))
);
{
var G__35845 = cljs.core.next.call(null,seq__35815_35836__$1);
var G__35846 = null;
var G__35847 = 0;
var G__35848 = 0;
seq__35815_35824 = G__35845;
chunk__35816_35825 = G__35846;
count__35817_35826 = G__35847;
i__35818_35827 = G__35848;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__35849){
var elem_sel = cljs.core.first(arglist__35849);
var type_fs = cljs.core.rest(arglist__35849);
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
var fire_BANG___delegate = function (node,event_type,p__35850){var vec__35852 = p__35850;var update_event_BANG_ = cljs.core.nth.call(null,vec__35852,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__15141__auto__ = update_event_BANG_;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
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
var p__35850 = null;if (arguments.length > 2) {
  p__35850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__35850);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__35853){
var node = cljs.core.first(arglist__35853);
arglist__35853 = cljs.core.next(arglist__35853);
var event_type = cljs.core.first(arglist__35853);
var p__35850 = cljs.core.rest(arglist__35853);
return fire_BANG___delegate(node,event_type,p__35850);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map