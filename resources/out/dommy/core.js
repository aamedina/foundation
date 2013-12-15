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
dommy.core.text = (function text(elem){var or__13825__auto__ = elem.textContent;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
var append_BANG___2 = (function (parent,child){var G__328401 = dommy.template.__GT_node_like.call(null,parent);G__328401.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__328401;
});
var append_BANG___3 = (function() { 
var G__328406__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__328402_328407 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__328403_328408 = null;var count__328404_328409 = 0;var i__328405_328410 = 0;while(true){
if((i__328405_328410 < count__328404_328409))
{var c_328411 = cljs.core._nth.call(null,chunk__328403_328408,i__328405_328410);append_BANG_.call(null,parent__$1,c_328411);
{
var G__328412 = seq__328402_328407;
var G__328413 = chunk__328403_328408;
var G__328414 = count__328404_328409;
var G__328415 = (i__328405_328410 + 1);
seq__328402_328407 = G__328412;
chunk__328403_328408 = G__328413;
count__328404_328409 = G__328414;
i__328405_328410 = G__328415;
continue;
}
} else
{var temp__4092__auto___328416 = cljs.core.seq.call(null,seq__328402_328407);if(temp__4092__auto___328416)
{var seq__328402_328417__$1 = temp__4092__auto___328416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328402_328417__$1))
{var c__14549__auto___328418 = cljs.core.chunk_first.call(null,seq__328402_328417__$1);{
var G__328419 = cljs.core.chunk_rest.call(null,seq__328402_328417__$1);
var G__328420 = c__14549__auto___328418;
var G__328421 = cljs.core.count.call(null,c__14549__auto___328418);
var G__328422 = 0;
seq__328402_328407 = G__328419;
chunk__328403_328408 = G__328420;
count__328404_328409 = G__328421;
i__328405_328410 = G__328422;
continue;
}
} else
{var c_328423 = cljs.core.first.call(null,seq__328402_328417__$1);append_BANG_.call(null,parent__$1,c_328423);
{
var G__328424 = cljs.core.next.call(null,seq__328402_328417__$1);
var G__328425 = null;
var G__328426 = 0;
var G__328427 = 0;
seq__328402_328407 = G__328424;
chunk__328403_328408 = G__328425;
count__328404_328409 = G__328426;
i__328405_328410 = G__328427;
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
var G__328406 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__328406__delegate.call(this,parent,child,more_children);};
G__328406.cljs$lang$maxFixedArity = 2;
G__328406.cljs$lang$applyTo = (function (arglist__328428){
var parent = cljs.core.first(arglist__328428);
arglist__328428 = cljs.core.next(arglist__328428);
var child = cljs.core.first(arglist__328428);
var more_children = cljs.core.rest(arglist__328428);
return G__328406__delegate(parent,child,more_children);
});
G__328406.cljs$core$IFn$_invoke$arity$variadic = G__328406__delegate;
return G__328406;
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
var G__328437__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__328433_328438 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__328434_328439 = null;var count__328435_328440 = 0;var i__328436_328441 = 0;while(true){
if((i__328436_328441 < count__328435_328440))
{var c_328442 = cljs.core._nth.call(null,chunk__328434_328439,i__328436_328441);prepend_BANG_.call(null,parent__$1,c_328442);
{
var G__328443 = seq__328433_328438;
var G__328444 = chunk__328434_328439;
var G__328445 = count__328435_328440;
var G__328446 = (i__328436_328441 + 1);
seq__328433_328438 = G__328443;
chunk__328434_328439 = G__328444;
count__328435_328440 = G__328445;
i__328436_328441 = G__328446;
continue;
}
} else
{var temp__4092__auto___328447 = cljs.core.seq.call(null,seq__328433_328438);if(temp__4092__auto___328447)
{var seq__328433_328448__$1 = temp__4092__auto___328447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328433_328448__$1))
{var c__14549__auto___328449 = cljs.core.chunk_first.call(null,seq__328433_328448__$1);{
var G__328450 = cljs.core.chunk_rest.call(null,seq__328433_328448__$1);
var G__328451 = c__14549__auto___328449;
var G__328452 = cljs.core.count.call(null,c__14549__auto___328449);
var G__328453 = 0;
seq__328433_328438 = G__328450;
chunk__328434_328439 = G__328451;
count__328435_328440 = G__328452;
i__328436_328441 = G__328453;
continue;
}
} else
{var c_328454 = cljs.core.first.call(null,seq__328433_328448__$1);prepend_BANG_.call(null,parent__$1,c_328454);
{
var G__328455 = cljs.core.next.call(null,seq__328433_328448__$1);
var G__328456 = null;
var G__328457 = 0;
var G__328458 = 0;
seq__328433_328438 = G__328455;
chunk__328434_328439 = G__328456;
count__328435_328440 = G__328457;
i__328436_328441 = G__328458;
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
var G__328437 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__328437__delegate.call(this,parent,child,more_children);};
G__328437.cljs$lang$maxFixedArity = 2;
G__328437.cljs$lang$applyTo = (function (arglist__328459){
var parent = cljs.core.first(arglist__328459);
arglist__328459 = cljs.core.next(arglist__328459);
var child = cljs.core.first(arglist__328459);
var more_children = cljs.core.rest(arglist__328459);
return G__328437__delegate(parent,child,more_children);
});
G__328437.cljs$core$IFn$_invoke$arity$variadic = G__328437__delegate;
return G__328437;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___328460 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___328460))
{var next_328461 = temp__4090__auto___328460;parent.insertBefore(actual_node,next_328461);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__328463 = dommy.template.__GT_node_like.call(null,parent);G__328463.innerHTML = "";
dommy.core.append_BANG_.call(null,G__328463,node_like);
return G__328463;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__328465 = elem__$1.parentNode;G__328465.removeChild(elem__$1);
return G__328465;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__328471){var vec__328472 = p__328471;var k = cljs.core.nth.call(null,vec__328472,0,null);var v = cljs.core.nth.call(null,vec__328472,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t328473 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t328473 = (function (v,k,vec__328472,p__328471,container,key_selectors_map,template,selector_map,meta328474){
this.v = v;
this.k = k;
this.vec__328472 = vec__328472;
this.p__328471 = p__328471;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta328474 = meta328474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t328473.cljs$lang$type = true;
dommy.core.t328473.cljs$lang$ctorStr = "dommy.core/t328473";
dommy.core.t328473.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"dommy.core/t328473");
});
dommy.core.t328473.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t328473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_328475){var self__ = this;
var _328475__$1 = this;return self__.meta328474;
});
dommy.core.t328473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_328475,meta328474__$1){var self__ = this;
var _328475__$1 = this;return (new dommy.core.t328473(self__.v,self__.k,self__.vec__328472,self__.p__328471,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta328474__$1));
});
dommy.core.__GT_t328473 = (function __GT_t328473(v__$1,k__$1,vec__328472__$1,p__328471__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta328474){return (new dommy.core.t328473(v__$1,k__$1,vec__328472__$1,p__328471__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta328474));
});
}
return (new dommy.core.t328473(v,k,vec__328472,p__328471,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__328476_SHARP_){return p1__328476_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__328477_SHARP_){return !((p1__328477_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__328478){var vec__328479 = p__328478;var special_mouse_event = cljs.core.nth.call(null,vec__328479,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__328479,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13825__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13813__auto__ = related_target;if(cljs.core.truth_(and__13813__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13813__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13813__auto__ = selected_target;if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13813__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13825__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__328480){
var elem = cljs.core.first(arglist__328480);
arglist__328480 = cljs.core.next(arglist__328480);
var f = cljs.core.first(arglist__328480);
var args = cljs.core.rest(arglist__328480);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__328481_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__328481_SHARP_));
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
var vec__328505_328528 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_328529 = cljs.core.nth.call(null,vec__328505_328528,0,null);var selector_328530 = cljs.core.nth.call(null,vec__328505_328528,1,null);var seq__328506_328531 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__328513_328532 = null;var count__328514_328533 = 0;var i__328515_328534 = 0;while(true){
if((i__328515_328534 < count__328514_328533))
{var vec__328522_328535 = cljs.core._nth.call(null,chunk__328513_328532,i__328515_328534);var orig_type_328536 = cljs.core.nth.call(null,vec__328522_328535,0,null);var f_328537 = cljs.core.nth.call(null,vec__328522_328535,1,null);var seq__328516_328538 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_328536,new cljs.core.PersistentArrayMap.fromArray([orig_type_328536,cljs.core.identity], true, false)));var chunk__328518_328539 = null;var count__328519_328540 = 0;var i__328520_328541 = 0;while(true){
if((i__328520_328541 < count__328519_328540))
{var vec__328523_328542 = cljs.core._nth.call(null,chunk__328518_328539,i__328520_328541);var actual_type_328543 = cljs.core.nth.call(null,vec__328523_328542,0,null);var factory_328544 = cljs.core.nth.call(null,vec__328523_328542,1,null);var canonical_f_328545 = (cljs.core.truth_(selector_328530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_328529,selector_328530):cljs.core.identity).call(null,factory_328544.call(null,f_328537));dommy.core.update_event_listeners_BANG_.call(null,elem_328529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328530,actual_type_328543,f_328537], null),canonical_f_328545);
if(cljs.core.truth_(elem_328529.addEventListener))
{elem_328529.addEventListener(cljs.core.name.call(null,actual_type_328543),canonical_f_328545);
} else
{elem_328529.attachEvent(cljs.core.name.call(null,actual_type_328543),canonical_f_328545);
}
{
var G__328546 = seq__328516_328538;
var G__328547 = chunk__328518_328539;
var G__328548 = count__328519_328540;
var G__328549 = (i__328520_328541 + 1);
seq__328516_328538 = G__328546;
chunk__328518_328539 = G__328547;
count__328519_328540 = G__328548;
i__328520_328541 = G__328549;
continue;
}
} else
{var temp__4092__auto___328550 = cljs.core.seq.call(null,seq__328516_328538);if(temp__4092__auto___328550)
{var seq__328516_328551__$1 = temp__4092__auto___328550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328516_328551__$1))
{var c__14549__auto___328552 = cljs.core.chunk_first.call(null,seq__328516_328551__$1);{
var G__328553 = cljs.core.chunk_rest.call(null,seq__328516_328551__$1);
var G__328554 = c__14549__auto___328552;
var G__328555 = cljs.core.count.call(null,c__14549__auto___328552);
var G__328556 = 0;
seq__328516_328538 = G__328553;
chunk__328518_328539 = G__328554;
count__328519_328540 = G__328555;
i__328520_328541 = G__328556;
continue;
}
} else
{var vec__328524_328557 = cljs.core.first.call(null,seq__328516_328551__$1);var actual_type_328558 = cljs.core.nth.call(null,vec__328524_328557,0,null);var factory_328559 = cljs.core.nth.call(null,vec__328524_328557,1,null);var canonical_f_328560 = (cljs.core.truth_(selector_328530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_328529,selector_328530):cljs.core.identity).call(null,factory_328559.call(null,f_328537));dommy.core.update_event_listeners_BANG_.call(null,elem_328529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328530,actual_type_328558,f_328537], null),canonical_f_328560);
if(cljs.core.truth_(elem_328529.addEventListener))
{elem_328529.addEventListener(cljs.core.name.call(null,actual_type_328558),canonical_f_328560);
} else
{elem_328529.attachEvent(cljs.core.name.call(null,actual_type_328558),canonical_f_328560);
}
{
var G__328561 = cljs.core.next.call(null,seq__328516_328551__$1);
var G__328562 = null;
var G__328563 = 0;
var G__328564 = 0;
seq__328516_328538 = G__328561;
chunk__328518_328539 = G__328562;
count__328519_328540 = G__328563;
i__328520_328541 = G__328564;
continue;
}
}
} else
{}
}
break;
}
{
var G__328565 = seq__328506_328531;
var G__328566 = chunk__328513_328532;
var G__328567 = count__328514_328533;
var G__328568 = (i__328515_328534 + 1);
seq__328506_328531 = G__328565;
chunk__328513_328532 = G__328566;
count__328514_328533 = G__328567;
i__328515_328534 = G__328568;
continue;
}
} else
{var temp__4092__auto___328569 = cljs.core.seq.call(null,seq__328506_328531);if(temp__4092__auto___328569)
{var seq__328506_328570__$1 = temp__4092__auto___328569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328506_328570__$1))
{var c__14549__auto___328571 = cljs.core.chunk_first.call(null,seq__328506_328570__$1);{
var G__328572 = cljs.core.chunk_rest.call(null,seq__328506_328570__$1);
var G__328573 = c__14549__auto___328571;
var G__328574 = cljs.core.count.call(null,c__14549__auto___328571);
var G__328575 = 0;
seq__328506_328531 = G__328572;
chunk__328513_328532 = G__328573;
count__328514_328533 = G__328574;
i__328515_328534 = G__328575;
continue;
}
} else
{var vec__328525_328576 = cljs.core.first.call(null,seq__328506_328570__$1);var orig_type_328577 = cljs.core.nth.call(null,vec__328525_328576,0,null);var f_328578 = cljs.core.nth.call(null,vec__328525_328576,1,null);var seq__328507_328579 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_328577,new cljs.core.PersistentArrayMap.fromArray([orig_type_328577,cljs.core.identity], true, false)));var chunk__328509_328580 = null;var count__328510_328581 = 0;var i__328511_328582 = 0;while(true){
if((i__328511_328582 < count__328510_328581))
{var vec__328526_328583 = cljs.core._nth.call(null,chunk__328509_328580,i__328511_328582);var actual_type_328584 = cljs.core.nth.call(null,vec__328526_328583,0,null);var factory_328585 = cljs.core.nth.call(null,vec__328526_328583,1,null);var canonical_f_328586 = (cljs.core.truth_(selector_328530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_328529,selector_328530):cljs.core.identity).call(null,factory_328585.call(null,f_328578));dommy.core.update_event_listeners_BANG_.call(null,elem_328529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328530,actual_type_328584,f_328578], null),canonical_f_328586);
if(cljs.core.truth_(elem_328529.addEventListener))
{elem_328529.addEventListener(cljs.core.name.call(null,actual_type_328584),canonical_f_328586);
} else
{elem_328529.attachEvent(cljs.core.name.call(null,actual_type_328584),canonical_f_328586);
}
{
var G__328587 = seq__328507_328579;
var G__328588 = chunk__328509_328580;
var G__328589 = count__328510_328581;
var G__328590 = (i__328511_328582 + 1);
seq__328507_328579 = G__328587;
chunk__328509_328580 = G__328588;
count__328510_328581 = G__328589;
i__328511_328582 = G__328590;
continue;
}
} else
{var temp__4092__auto___328591__$1 = cljs.core.seq.call(null,seq__328507_328579);if(temp__4092__auto___328591__$1)
{var seq__328507_328592__$1 = temp__4092__auto___328591__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328507_328592__$1))
{var c__14549__auto___328593 = cljs.core.chunk_first.call(null,seq__328507_328592__$1);{
var G__328594 = cljs.core.chunk_rest.call(null,seq__328507_328592__$1);
var G__328595 = c__14549__auto___328593;
var G__328596 = cljs.core.count.call(null,c__14549__auto___328593);
var G__328597 = 0;
seq__328507_328579 = G__328594;
chunk__328509_328580 = G__328595;
count__328510_328581 = G__328596;
i__328511_328582 = G__328597;
continue;
}
} else
{var vec__328527_328598 = cljs.core.first.call(null,seq__328507_328592__$1);var actual_type_328599 = cljs.core.nth.call(null,vec__328527_328598,0,null);var factory_328600 = cljs.core.nth.call(null,vec__328527_328598,1,null);var canonical_f_328601 = (cljs.core.truth_(selector_328530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_328529,selector_328530):cljs.core.identity).call(null,factory_328600.call(null,f_328578));dommy.core.update_event_listeners_BANG_.call(null,elem_328529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328530,actual_type_328599,f_328578], null),canonical_f_328601);
if(cljs.core.truth_(elem_328529.addEventListener))
{elem_328529.addEventListener(cljs.core.name.call(null,actual_type_328599),canonical_f_328601);
} else
{elem_328529.attachEvent(cljs.core.name.call(null,actual_type_328599),canonical_f_328601);
}
{
var G__328602 = cljs.core.next.call(null,seq__328507_328592__$1);
var G__328603 = null;
var G__328604 = 0;
var G__328605 = 0;
seq__328507_328579 = G__328602;
chunk__328509_328580 = G__328603;
count__328510_328581 = G__328604;
i__328511_328582 = G__328605;
continue;
}
}
} else
{}
}
break;
}
{
var G__328606 = cljs.core.next.call(null,seq__328506_328570__$1);
var G__328607 = null;
var G__328608 = 0;
var G__328609 = 0;
seq__328506_328531 = G__328606;
chunk__328513_328532 = G__328607;
count__328514_328533 = G__328608;
i__328515_328534 = G__328609;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__328610){
var elem_sel = cljs.core.first(arglist__328610);
var type_fs = cljs.core.rest(arglist__328610);
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
var vec__328634_328657 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_328658 = cljs.core.nth.call(null,vec__328634_328657,0,null);var selector_328659 = cljs.core.nth.call(null,vec__328634_328657,1,null);var seq__328635_328660 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__328642_328661 = null;var count__328643_328662 = 0;var i__328644_328663 = 0;while(true){
if((i__328644_328663 < count__328643_328662))
{var vec__328651_328664 = cljs.core._nth.call(null,chunk__328642_328661,i__328644_328663);var orig_type_328665 = cljs.core.nth.call(null,vec__328651_328664,0,null);var f_328666 = cljs.core.nth.call(null,vec__328651_328664,1,null);var seq__328645_328667 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_328665,new cljs.core.PersistentArrayMap.fromArray([orig_type_328665,cljs.core.identity], true, false)));var chunk__328647_328668 = null;var count__328648_328669 = 0;var i__328649_328670 = 0;while(true){
if((i__328649_328670 < count__328648_328669))
{var vec__328652_328671 = cljs.core._nth.call(null,chunk__328647_328668,i__328649_328670);var actual_type_328672 = cljs.core.nth.call(null,vec__328652_328671,0,null);var __328673 = cljs.core.nth.call(null,vec__328652_328671,1,null);var keys_328674 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328659,actual_type_328672,f_328666], null);var canonical_f_328675 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_328658),keys_328674);dommy.core.update_event_listeners_BANG_.call(null,elem_328658,dommy.utils.dissoc_in,keys_328674);
if(cljs.core.truth_(elem_328658.removeEventListener))
{elem_328658.removeEventListener(cljs.core.name.call(null,actual_type_328672),canonical_f_328675);
} else
{elem_328658.detachEvent(cljs.core.name.call(null,actual_type_328672),canonical_f_328675);
}
{
var G__328676 = seq__328645_328667;
var G__328677 = chunk__328647_328668;
var G__328678 = count__328648_328669;
var G__328679 = (i__328649_328670 + 1);
seq__328645_328667 = G__328676;
chunk__328647_328668 = G__328677;
count__328648_328669 = G__328678;
i__328649_328670 = G__328679;
continue;
}
} else
{var temp__4092__auto___328680 = cljs.core.seq.call(null,seq__328645_328667);if(temp__4092__auto___328680)
{var seq__328645_328681__$1 = temp__4092__auto___328680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328645_328681__$1))
{var c__14549__auto___328682 = cljs.core.chunk_first.call(null,seq__328645_328681__$1);{
var G__328683 = cljs.core.chunk_rest.call(null,seq__328645_328681__$1);
var G__328684 = c__14549__auto___328682;
var G__328685 = cljs.core.count.call(null,c__14549__auto___328682);
var G__328686 = 0;
seq__328645_328667 = G__328683;
chunk__328647_328668 = G__328684;
count__328648_328669 = G__328685;
i__328649_328670 = G__328686;
continue;
}
} else
{var vec__328653_328687 = cljs.core.first.call(null,seq__328645_328681__$1);var actual_type_328688 = cljs.core.nth.call(null,vec__328653_328687,0,null);var __328689 = cljs.core.nth.call(null,vec__328653_328687,1,null);var keys_328690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328659,actual_type_328688,f_328666], null);var canonical_f_328691 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_328658),keys_328690);dommy.core.update_event_listeners_BANG_.call(null,elem_328658,dommy.utils.dissoc_in,keys_328690);
if(cljs.core.truth_(elem_328658.removeEventListener))
{elem_328658.removeEventListener(cljs.core.name.call(null,actual_type_328688),canonical_f_328691);
} else
{elem_328658.detachEvent(cljs.core.name.call(null,actual_type_328688),canonical_f_328691);
}
{
var G__328692 = cljs.core.next.call(null,seq__328645_328681__$1);
var G__328693 = null;
var G__328694 = 0;
var G__328695 = 0;
seq__328645_328667 = G__328692;
chunk__328647_328668 = G__328693;
count__328648_328669 = G__328694;
i__328649_328670 = G__328695;
continue;
}
}
} else
{}
}
break;
}
{
var G__328696 = seq__328635_328660;
var G__328697 = chunk__328642_328661;
var G__328698 = count__328643_328662;
var G__328699 = (i__328644_328663 + 1);
seq__328635_328660 = G__328696;
chunk__328642_328661 = G__328697;
count__328643_328662 = G__328698;
i__328644_328663 = G__328699;
continue;
}
} else
{var temp__4092__auto___328700 = cljs.core.seq.call(null,seq__328635_328660);if(temp__4092__auto___328700)
{var seq__328635_328701__$1 = temp__4092__auto___328700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328635_328701__$1))
{var c__14549__auto___328702 = cljs.core.chunk_first.call(null,seq__328635_328701__$1);{
var G__328703 = cljs.core.chunk_rest.call(null,seq__328635_328701__$1);
var G__328704 = c__14549__auto___328702;
var G__328705 = cljs.core.count.call(null,c__14549__auto___328702);
var G__328706 = 0;
seq__328635_328660 = G__328703;
chunk__328642_328661 = G__328704;
count__328643_328662 = G__328705;
i__328644_328663 = G__328706;
continue;
}
} else
{var vec__328654_328707 = cljs.core.first.call(null,seq__328635_328701__$1);var orig_type_328708 = cljs.core.nth.call(null,vec__328654_328707,0,null);var f_328709 = cljs.core.nth.call(null,vec__328654_328707,1,null);var seq__328636_328710 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_328708,new cljs.core.PersistentArrayMap.fromArray([orig_type_328708,cljs.core.identity], true, false)));var chunk__328638_328711 = null;var count__328639_328712 = 0;var i__328640_328713 = 0;while(true){
if((i__328640_328713 < count__328639_328712))
{var vec__328655_328714 = cljs.core._nth.call(null,chunk__328638_328711,i__328640_328713);var actual_type_328715 = cljs.core.nth.call(null,vec__328655_328714,0,null);var __328716 = cljs.core.nth.call(null,vec__328655_328714,1,null);var keys_328717 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328659,actual_type_328715,f_328709], null);var canonical_f_328718 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_328658),keys_328717);dommy.core.update_event_listeners_BANG_.call(null,elem_328658,dommy.utils.dissoc_in,keys_328717);
if(cljs.core.truth_(elem_328658.removeEventListener))
{elem_328658.removeEventListener(cljs.core.name.call(null,actual_type_328715),canonical_f_328718);
} else
{elem_328658.detachEvent(cljs.core.name.call(null,actual_type_328715),canonical_f_328718);
}
{
var G__328719 = seq__328636_328710;
var G__328720 = chunk__328638_328711;
var G__328721 = count__328639_328712;
var G__328722 = (i__328640_328713 + 1);
seq__328636_328710 = G__328719;
chunk__328638_328711 = G__328720;
count__328639_328712 = G__328721;
i__328640_328713 = G__328722;
continue;
}
} else
{var temp__4092__auto___328723__$1 = cljs.core.seq.call(null,seq__328636_328710);if(temp__4092__auto___328723__$1)
{var seq__328636_328724__$1 = temp__4092__auto___328723__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328636_328724__$1))
{var c__14549__auto___328725 = cljs.core.chunk_first.call(null,seq__328636_328724__$1);{
var G__328726 = cljs.core.chunk_rest.call(null,seq__328636_328724__$1);
var G__328727 = c__14549__auto___328725;
var G__328728 = cljs.core.count.call(null,c__14549__auto___328725);
var G__328729 = 0;
seq__328636_328710 = G__328726;
chunk__328638_328711 = G__328727;
count__328639_328712 = G__328728;
i__328640_328713 = G__328729;
continue;
}
} else
{var vec__328656_328730 = cljs.core.first.call(null,seq__328636_328724__$1);var actual_type_328731 = cljs.core.nth.call(null,vec__328656_328730,0,null);var __328732 = cljs.core.nth.call(null,vec__328656_328730,1,null);var keys_328733 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_328659,actual_type_328731,f_328709], null);var canonical_f_328734 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_328658),keys_328733);dommy.core.update_event_listeners_BANG_.call(null,elem_328658,dommy.utils.dissoc_in,keys_328733);
if(cljs.core.truth_(elem_328658.removeEventListener))
{elem_328658.removeEventListener(cljs.core.name.call(null,actual_type_328731),canonical_f_328734);
} else
{elem_328658.detachEvent(cljs.core.name.call(null,actual_type_328731),canonical_f_328734);
}
{
var G__328735 = cljs.core.next.call(null,seq__328636_328724__$1);
var G__328736 = null;
var G__328737 = 0;
var G__328738 = 0;
seq__328636_328710 = G__328735;
chunk__328638_328711 = G__328736;
count__328639_328712 = G__328737;
i__328640_328713 = G__328738;
continue;
}
}
} else
{}
}
break;
}
{
var G__328739 = cljs.core.next.call(null,seq__328635_328701__$1);
var G__328740 = null;
var G__328741 = 0;
var G__328742 = 0;
seq__328635_328660 = G__328739;
chunk__328642_328661 = G__328740;
count__328643_328662 = G__328741;
i__328644_328663 = G__328742;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__328743){
var elem_sel = cljs.core.first(arglist__328743);
var type_fs = cljs.core.rest(arglist__328743);
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
var vec__328751_328758 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_328759 = cljs.core.nth.call(null,vec__328751_328758,0,null);var selector_328760 = cljs.core.nth.call(null,vec__328751_328758,1,null);var seq__328752_328761 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__328753_328762 = null;var count__328754_328763 = 0;var i__328755_328764 = 0;while(true){
if((i__328755_328764 < count__328754_328763))
{var vec__328756_328765 = cljs.core._nth.call(null,chunk__328753_328762,i__328755_328764);var type_328766 = cljs.core.nth.call(null,vec__328756_328765,0,null);var f_328767 = cljs.core.nth.call(null,vec__328756_328765,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_328766,((function (seq__328752_328761,chunk__328753_328762,count__328754_328763,i__328755_328764,vec__328756_328765,type_328766,f_328767){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_328766,this_fn);
return f_328767.call(null,e);
});})(seq__328752_328761,chunk__328753_328762,count__328754_328763,i__328755_328764,vec__328756_328765,type_328766,f_328767))
);
{
var G__328768 = seq__328752_328761;
var G__328769 = chunk__328753_328762;
var G__328770 = count__328754_328763;
var G__328771 = (i__328755_328764 + 1);
seq__328752_328761 = G__328768;
chunk__328753_328762 = G__328769;
count__328754_328763 = G__328770;
i__328755_328764 = G__328771;
continue;
}
} else
{var temp__4092__auto___328772 = cljs.core.seq.call(null,seq__328752_328761);if(temp__4092__auto___328772)
{var seq__328752_328773__$1 = temp__4092__auto___328772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328752_328773__$1))
{var c__14549__auto___328774 = cljs.core.chunk_first.call(null,seq__328752_328773__$1);{
var G__328775 = cljs.core.chunk_rest.call(null,seq__328752_328773__$1);
var G__328776 = c__14549__auto___328774;
var G__328777 = cljs.core.count.call(null,c__14549__auto___328774);
var G__328778 = 0;
seq__328752_328761 = G__328775;
chunk__328753_328762 = G__328776;
count__328754_328763 = G__328777;
i__328755_328764 = G__328778;
continue;
}
} else
{var vec__328757_328779 = cljs.core.first.call(null,seq__328752_328773__$1);var type_328780 = cljs.core.nth.call(null,vec__328757_328779,0,null);var f_328781 = cljs.core.nth.call(null,vec__328757_328779,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_328780,((function (seq__328752_328761,chunk__328753_328762,count__328754_328763,i__328755_328764,vec__328757_328779,type_328780,f_328781,seq__328752_328773__$1,temp__4092__auto___328772){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_328780,this_fn);
return f_328781.call(null,e);
});})(seq__328752_328761,chunk__328753_328762,count__328754_328763,i__328755_328764,vec__328757_328779,type_328780,f_328781,seq__328752_328773__$1,temp__4092__auto___328772))
);
{
var G__328782 = cljs.core.next.call(null,seq__328752_328773__$1);
var G__328783 = null;
var G__328784 = 0;
var G__328785 = 0;
seq__328752_328761 = G__328782;
chunk__328753_328762 = G__328783;
count__328754_328763 = G__328784;
i__328755_328764 = G__328785;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__328786){
var elem_sel = cljs.core.first(arglist__328786);
var type_fs = cljs.core.rest(arglist__328786);
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
var fire_BANG___delegate = function (node,event_type,p__328787){var vec__328789 = p__328787;var update_event_BANG_ = cljs.core.nth.call(null,vec__328789,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13825__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
var p__328787 = null;if (arguments.length > 2) {
  p__328787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__328787);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__328790){
var node = cljs.core.first(arglist__328790);
arglist__328790 = cljs.core.next(arglist__328790);
var event_type = cljs.core.first(arglist__328790);
var p__328787 = cljs.core.rest(arglist__328790);
return fire_BANG___delegate(node,event_type,p__328787);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map