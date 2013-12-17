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
dommy.core.text = (function text(elem){var or__7828__auto__ = elem.textContent;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
var append_BANG___2 = (function (parent,child){var G__24379 = dommy.template.__GT_node_like.call(null,parent);G__24379.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__24379;
});
var append_BANG___3 = (function() { 
var G__24384__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24380_24385 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24381_24386 = null;var count__24382_24387 = 0;var i__24383_24388 = 0;while(true){
if((i__24383_24388 < count__24382_24387))
{var c_24389 = cljs.core._nth.call(null,chunk__24381_24386,i__24383_24388);append_BANG_.call(null,parent__$1,c_24389);
{
var G__24390 = seq__24380_24385;
var G__24391 = chunk__24381_24386;
var G__24392 = count__24382_24387;
var G__24393 = (i__24383_24388 + 1);
seq__24380_24385 = G__24390;
chunk__24381_24386 = G__24391;
count__24382_24387 = G__24392;
i__24383_24388 = G__24393;
continue;
}
} else
{var temp__4092__auto___24394 = cljs.core.seq.call(null,seq__24380_24385);if(temp__4092__auto___24394)
{var seq__24380_24395__$1 = temp__4092__auto___24394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24380_24395__$1))
{var c__8552__auto___24396 = cljs.core.chunk_first.call(null,seq__24380_24395__$1);{
var G__24397 = cljs.core.chunk_rest.call(null,seq__24380_24395__$1);
var G__24398 = c__8552__auto___24396;
var G__24399 = cljs.core.count.call(null,c__8552__auto___24396);
var G__24400 = 0;
seq__24380_24385 = G__24397;
chunk__24381_24386 = G__24398;
count__24382_24387 = G__24399;
i__24383_24388 = G__24400;
continue;
}
} else
{var c_24401 = cljs.core.first.call(null,seq__24380_24395__$1);append_BANG_.call(null,parent__$1,c_24401);
{
var G__24402 = cljs.core.next.call(null,seq__24380_24395__$1);
var G__24403 = null;
var G__24404 = 0;
var G__24405 = 0;
seq__24380_24385 = G__24402;
chunk__24381_24386 = G__24403;
count__24382_24387 = G__24404;
i__24383_24388 = G__24405;
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
var G__24384 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24384__delegate.call(this,parent,child,more_children);};
G__24384.cljs$lang$maxFixedArity = 2;
G__24384.cljs$lang$applyTo = (function (arglist__24406){
var parent = cljs.core.first(arglist__24406);
arglist__24406 = cljs.core.next(arglist__24406);
var child = cljs.core.first(arglist__24406);
var more_children = cljs.core.rest(arglist__24406);
return G__24384__delegate(parent,child,more_children);
});
G__24384.cljs$core$IFn$_invoke$arity$variadic = G__24384__delegate;
return G__24384;
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
var G__24415__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24411_24416 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24412_24417 = null;var count__24413_24418 = 0;var i__24414_24419 = 0;while(true){
if((i__24414_24419 < count__24413_24418))
{var c_24420 = cljs.core._nth.call(null,chunk__24412_24417,i__24414_24419);prepend_BANG_.call(null,parent__$1,c_24420);
{
var G__24421 = seq__24411_24416;
var G__24422 = chunk__24412_24417;
var G__24423 = count__24413_24418;
var G__24424 = (i__24414_24419 + 1);
seq__24411_24416 = G__24421;
chunk__24412_24417 = G__24422;
count__24413_24418 = G__24423;
i__24414_24419 = G__24424;
continue;
}
} else
{var temp__4092__auto___24425 = cljs.core.seq.call(null,seq__24411_24416);if(temp__4092__auto___24425)
{var seq__24411_24426__$1 = temp__4092__auto___24425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24411_24426__$1))
{var c__8552__auto___24427 = cljs.core.chunk_first.call(null,seq__24411_24426__$1);{
var G__24428 = cljs.core.chunk_rest.call(null,seq__24411_24426__$1);
var G__24429 = c__8552__auto___24427;
var G__24430 = cljs.core.count.call(null,c__8552__auto___24427);
var G__24431 = 0;
seq__24411_24416 = G__24428;
chunk__24412_24417 = G__24429;
count__24413_24418 = G__24430;
i__24414_24419 = G__24431;
continue;
}
} else
{var c_24432 = cljs.core.first.call(null,seq__24411_24426__$1);prepend_BANG_.call(null,parent__$1,c_24432);
{
var G__24433 = cljs.core.next.call(null,seq__24411_24426__$1);
var G__24434 = null;
var G__24435 = 0;
var G__24436 = 0;
seq__24411_24416 = G__24433;
chunk__24412_24417 = G__24434;
count__24413_24418 = G__24435;
i__24414_24419 = G__24436;
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
var G__24415 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24415__delegate.call(this,parent,child,more_children);};
G__24415.cljs$lang$maxFixedArity = 2;
G__24415.cljs$lang$applyTo = (function (arglist__24437){
var parent = cljs.core.first(arglist__24437);
arglist__24437 = cljs.core.next(arglist__24437);
var child = cljs.core.first(arglist__24437);
var more_children = cljs.core.rest(arglist__24437);
return G__24415__delegate(parent,child,more_children);
});
G__24415.cljs$core$IFn$_invoke$arity$variadic = G__24415__delegate;
return G__24415;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___24438 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___24438))
{var next_24439 = temp__4090__auto___24438;parent.insertBefore(actual_node,next_24439);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__24441 = dommy.template.__GT_node_like.call(null,parent);G__24441.innerHTML = "";
dommy.core.append_BANG_.call(null,G__24441,node_like);
return G__24441;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__24443 = elem__$1.parentNode;G__24443.removeChild(elem__$1);
return G__24443;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24449){var vec__24450 = p__24449;var k = cljs.core.nth.call(null,vec__24450,0,null);var v = cljs.core.nth.call(null,vec__24450,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t24451 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t24451 = (function (v,k,vec__24450,p__24449,container,key_selectors_map,template,selector_map,meta24452){
this.v = v;
this.k = k;
this.vec__24450 = vec__24450;
this.p__24449 = p__24449;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta24452 = meta24452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t24451.cljs$lang$type = true;
dommy.core.t24451.cljs$lang$ctorStr = "dommy.core/t24451";
dommy.core.t24451.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t24451");
});
dommy.core.t24451.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t24451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24453){var self__ = this;
var _24453__$1 = this;return self__.meta24452;
});
dommy.core.t24451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24453,meta24452__$1){var self__ = this;
var _24453__$1 = this;return (new dommy.core.t24451(self__.v,self__.k,self__.vec__24450,self__.p__24449,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta24452__$1));
});
dommy.core.__GT_t24451 = (function __GT_t24451(v__$1,k__$1,vec__24450__$1,p__24449__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24452){return (new dommy.core.t24451(v__$1,k__$1,vec__24450__$1,p__24449__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24452));
});
}
return (new dommy.core.t24451(v,k,vec__24450,p__24449,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__24454_SHARP_){return p1__24454_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__24455_SHARP_){return !((p1__24455_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24456){var vec__24457 = p__24456;var special_mouse_event = cljs.core.nth.call(null,vec__24457,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__24457,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7816__auto__ = related_target;if(cljs.core.truth_(and__7816__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7816__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7816__auto__ = selected_target;if(cljs.core.truth_(and__7816__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__7816__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__7828__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__24458){
var elem = cljs.core.first(arglist__24458);
arglist__24458 = cljs.core.next(arglist__24458);
var f = cljs.core.first(arglist__24458);
var args = cljs.core.rest(arglist__24458);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__24459_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__24459_SHARP_));
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
var vec__24483_24506 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24507 = cljs.core.nth.call(null,vec__24483_24506,0,null);var selector_24508 = cljs.core.nth.call(null,vec__24483_24506,1,null);var seq__24484_24509 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24491_24510 = null;var count__24492_24511 = 0;var i__24493_24512 = 0;while(true){
if((i__24493_24512 < count__24492_24511))
{var vec__24500_24513 = cljs.core._nth.call(null,chunk__24491_24510,i__24493_24512);var orig_type_24514 = cljs.core.nth.call(null,vec__24500_24513,0,null);var f_24515 = cljs.core.nth.call(null,vec__24500_24513,1,null);var seq__24494_24516 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24514,new cljs.core.PersistentArrayMap.fromArray([orig_type_24514,cljs.core.identity], true, false)));var chunk__24496_24517 = null;var count__24497_24518 = 0;var i__24498_24519 = 0;while(true){
if((i__24498_24519 < count__24497_24518))
{var vec__24501_24520 = cljs.core._nth.call(null,chunk__24496_24517,i__24498_24519);var actual_type_24521 = cljs.core.nth.call(null,vec__24501_24520,0,null);var factory_24522 = cljs.core.nth.call(null,vec__24501_24520,1,null);var canonical_f_24523 = (cljs.core.truth_(selector_24508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24507,selector_24508):cljs.core.identity).call(null,factory_24522.call(null,f_24515));dommy.core.update_event_listeners_BANG_.call(null,elem_24507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24508,actual_type_24521,f_24515], null),canonical_f_24523);
if(cljs.core.truth_(elem_24507.addEventListener))
{elem_24507.addEventListener(cljs.core.name.call(null,actual_type_24521),canonical_f_24523);
} else
{elem_24507.attachEvent(cljs.core.name.call(null,actual_type_24521),canonical_f_24523);
}
{
var G__24524 = seq__24494_24516;
var G__24525 = chunk__24496_24517;
var G__24526 = count__24497_24518;
var G__24527 = (i__24498_24519 + 1);
seq__24494_24516 = G__24524;
chunk__24496_24517 = G__24525;
count__24497_24518 = G__24526;
i__24498_24519 = G__24527;
continue;
}
} else
{var temp__4092__auto___24528 = cljs.core.seq.call(null,seq__24494_24516);if(temp__4092__auto___24528)
{var seq__24494_24529__$1 = temp__4092__auto___24528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24494_24529__$1))
{var c__8552__auto___24530 = cljs.core.chunk_first.call(null,seq__24494_24529__$1);{
var G__24531 = cljs.core.chunk_rest.call(null,seq__24494_24529__$1);
var G__24532 = c__8552__auto___24530;
var G__24533 = cljs.core.count.call(null,c__8552__auto___24530);
var G__24534 = 0;
seq__24494_24516 = G__24531;
chunk__24496_24517 = G__24532;
count__24497_24518 = G__24533;
i__24498_24519 = G__24534;
continue;
}
} else
{var vec__24502_24535 = cljs.core.first.call(null,seq__24494_24529__$1);var actual_type_24536 = cljs.core.nth.call(null,vec__24502_24535,0,null);var factory_24537 = cljs.core.nth.call(null,vec__24502_24535,1,null);var canonical_f_24538 = (cljs.core.truth_(selector_24508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24507,selector_24508):cljs.core.identity).call(null,factory_24537.call(null,f_24515));dommy.core.update_event_listeners_BANG_.call(null,elem_24507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24508,actual_type_24536,f_24515], null),canonical_f_24538);
if(cljs.core.truth_(elem_24507.addEventListener))
{elem_24507.addEventListener(cljs.core.name.call(null,actual_type_24536),canonical_f_24538);
} else
{elem_24507.attachEvent(cljs.core.name.call(null,actual_type_24536),canonical_f_24538);
}
{
var G__24539 = cljs.core.next.call(null,seq__24494_24529__$1);
var G__24540 = null;
var G__24541 = 0;
var G__24542 = 0;
seq__24494_24516 = G__24539;
chunk__24496_24517 = G__24540;
count__24497_24518 = G__24541;
i__24498_24519 = G__24542;
continue;
}
}
} else
{}
}
break;
}
{
var G__24543 = seq__24484_24509;
var G__24544 = chunk__24491_24510;
var G__24545 = count__24492_24511;
var G__24546 = (i__24493_24512 + 1);
seq__24484_24509 = G__24543;
chunk__24491_24510 = G__24544;
count__24492_24511 = G__24545;
i__24493_24512 = G__24546;
continue;
}
} else
{var temp__4092__auto___24547 = cljs.core.seq.call(null,seq__24484_24509);if(temp__4092__auto___24547)
{var seq__24484_24548__$1 = temp__4092__auto___24547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24484_24548__$1))
{var c__8552__auto___24549 = cljs.core.chunk_first.call(null,seq__24484_24548__$1);{
var G__24550 = cljs.core.chunk_rest.call(null,seq__24484_24548__$1);
var G__24551 = c__8552__auto___24549;
var G__24552 = cljs.core.count.call(null,c__8552__auto___24549);
var G__24553 = 0;
seq__24484_24509 = G__24550;
chunk__24491_24510 = G__24551;
count__24492_24511 = G__24552;
i__24493_24512 = G__24553;
continue;
}
} else
{var vec__24503_24554 = cljs.core.first.call(null,seq__24484_24548__$1);var orig_type_24555 = cljs.core.nth.call(null,vec__24503_24554,0,null);var f_24556 = cljs.core.nth.call(null,vec__24503_24554,1,null);var seq__24485_24557 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24555,new cljs.core.PersistentArrayMap.fromArray([orig_type_24555,cljs.core.identity], true, false)));var chunk__24487_24558 = null;var count__24488_24559 = 0;var i__24489_24560 = 0;while(true){
if((i__24489_24560 < count__24488_24559))
{var vec__24504_24561 = cljs.core._nth.call(null,chunk__24487_24558,i__24489_24560);var actual_type_24562 = cljs.core.nth.call(null,vec__24504_24561,0,null);var factory_24563 = cljs.core.nth.call(null,vec__24504_24561,1,null);var canonical_f_24564 = (cljs.core.truth_(selector_24508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24507,selector_24508):cljs.core.identity).call(null,factory_24563.call(null,f_24556));dommy.core.update_event_listeners_BANG_.call(null,elem_24507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24508,actual_type_24562,f_24556], null),canonical_f_24564);
if(cljs.core.truth_(elem_24507.addEventListener))
{elem_24507.addEventListener(cljs.core.name.call(null,actual_type_24562),canonical_f_24564);
} else
{elem_24507.attachEvent(cljs.core.name.call(null,actual_type_24562),canonical_f_24564);
}
{
var G__24565 = seq__24485_24557;
var G__24566 = chunk__24487_24558;
var G__24567 = count__24488_24559;
var G__24568 = (i__24489_24560 + 1);
seq__24485_24557 = G__24565;
chunk__24487_24558 = G__24566;
count__24488_24559 = G__24567;
i__24489_24560 = G__24568;
continue;
}
} else
{var temp__4092__auto___24569__$1 = cljs.core.seq.call(null,seq__24485_24557);if(temp__4092__auto___24569__$1)
{var seq__24485_24570__$1 = temp__4092__auto___24569__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24485_24570__$1))
{var c__8552__auto___24571 = cljs.core.chunk_first.call(null,seq__24485_24570__$1);{
var G__24572 = cljs.core.chunk_rest.call(null,seq__24485_24570__$1);
var G__24573 = c__8552__auto___24571;
var G__24574 = cljs.core.count.call(null,c__8552__auto___24571);
var G__24575 = 0;
seq__24485_24557 = G__24572;
chunk__24487_24558 = G__24573;
count__24488_24559 = G__24574;
i__24489_24560 = G__24575;
continue;
}
} else
{var vec__24505_24576 = cljs.core.first.call(null,seq__24485_24570__$1);var actual_type_24577 = cljs.core.nth.call(null,vec__24505_24576,0,null);var factory_24578 = cljs.core.nth.call(null,vec__24505_24576,1,null);var canonical_f_24579 = (cljs.core.truth_(selector_24508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24507,selector_24508):cljs.core.identity).call(null,factory_24578.call(null,f_24556));dommy.core.update_event_listeners_BANG_.call(null,elem_24507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24508,actual_type_24577,f_24556], null),canonical_f_24579);
if(cljs.core.truth_(elem_24507.addEventListener))
{elem_24507.addEventListener(cljs.core.name.call(null,actual_type_24577),canonical_f_24579);
} else
{elem_24507.attachEvent(cljs.core.name.call(null,actual_type_24577),canonical_f_24579);
}
{
var G__24580 = cljs.core.next.call(null,seq__24485_24570__$1);
var G__24581 = null;
var G__24582 = 0;
var G__24583 = 0;
seq__24485_24557 = G__24580;
chunk__24487_24558 = G__24581;
count__24488_24559 = G__24582;
i__24489_24560 = G__24583;
continue;
}
}
} else
{}
}
break;
}
{
var G__24584 = cljs.core.next.call(null,seq__24484_24548__$1);
var G__24585 = null;
var G__24586 = 0;
var G__24587 = 0;
seq__24484_24509 = G__24584;
chunk__24491_24510 = G__24585;
count__24492_24511 = G__24586;
i__24493_24512 = G__24587;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__24588){
var elem_sel = cljs.core.first(arglist__24588);
var type_fs = cljs.core.rest(arglist__24588);
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
var vec__24612_24635 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24636 = cljs.core.nth.call(null,vec__24612_24635,0,null);var selector_24637 = cljs.core.nth.call(null,vec__24612_24635,1,null);var seq__24613_24638 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24620_24639 = null;var count__24621_24640 = 0;var i__24622_24641 = 0;while(true){
if((i__24622_24641 < count__24621_24640))
{var vec__24629_24642 = cljs.core._nth.call(null,chunk__24620_24639,i__24622_24641);var orig_type_24643 = cljs.core.nth.call(null,vec__24629_24642,0,null);var f_24644 = cljs.core.nth.call(null,vec__24629_24642,1,null);var seq__24623_24645 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24643,new cljs.core.PersistentArrayMap.fromArray([orig_type_24643,cljs.core.identity], true, false)));var chunk__24625_24646 = null;var count__24626_24647 = 0;var i__24627_24648 = 0;while(true){
if((i__24627_24648 < count__24626_24647))
{var vec__24630_24649 = cljs.core._nth.call(null,chunk__24625_24646,i__24627_24648);var actual_type_24650 = cljs.core.nth.call(null,vec__24630_24649,0,null);var __24651 = cljs.core.nth.call(null,vec__24630_24649,1,null);var keys_24652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24637,actual_type_24650,f_24644], null);var canonical_f_24653 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24636),keys_24652);dommy.core.update_event_listeners_BANG_.call(null,elem_24636,dommy.utils.dissoc_in,keys_24652);
if(cljs.core.truth_(elem_24636.removeEventListener))
{elem_24636.removeEventListener(cljs.core.name.call(null,actual_type_24650),canonical_f_24653);
} else
{elem_24636.detachEvent(cljs.core.name.call(null,actual_type_24650),canonical_f_24653);
}
{
var G__24654 = seq__24623_24645;
var G__24655 = chunk__24625_24646;
var G__24656 = count__24626_24647;
var G__24657 = (i__24627_24648 + 1);
seq__24623_24645 = G__24654;
chunk__24625_24646 = G__24655;
count__24626_24647 = G__24656;
i__24627_24648 = G__24657;
continue;
}
} else
{var temp__4092__auto___24658 = cljs.core.seq.call(null,seq__24623_24645);if(temp__4092__auto___24658)
{var seq__24623_24659__$1 = temp__4092__auto___24658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24623_24659__$1))
{var c__8552__auto___24660 = cljs.core.chunk_first.call(null,seq__24623_24659__$1);{
var G__24661 = cljs.core.chunk_rest.call(null,seq__24623_24659__$1);
var G__24662 = c__8552__auto___24660;
var G__24663 = cljs.core.count.call(null,c__8552__auto___24660);
var G__24664 = 0;
seq__24623_24645 = G__24661;
chunk__24625_24646 = G__24662;
count__24626_24647 = G__24663;
i__24627_24648 = G__24664;
continue;
}
} else
{var vec__24631_24665 = cljs.core.first.call(null,seq__24623_24659__$1);var actual_type_24666 = cljs.core.nth.call(null,vec__24631_24665,0,null);var __24667 = cljs.core.nth.call(null,vec__24631_24665,1,null);var keys_24668 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24637,actual_type_24666,f_24644], null);var canonical_f_24669 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24636),keys_24668);dommy.core.update_event_listeners_BANG_.call(null,elem_24636,dommy.utils.dissoc_in,keys_24668);
if(cljs.core.truth_(elem_24636.removeEventListener))
{elem_24636.removeEventListener(cljs.core.name.call(null,actual_type_24666),canonical_f_24669);
} else
{elem_24636.detachEvent(cljs.core.name.call(null,actual_type_24666),canonical_f_24669);
}
{
var G__24670 = cljs.core.next.call(null,seq__24623_24659__$1);
var G__24671 = null;
var G__24672 = 0;
var G__24673 = 0;
seq__24623_24645 = G__24670;
chunk__24625_24646 = G__24671;
count__24626_24647 = G__24672;
i__24627_24648 = G__24673;
continue;
}
}
} else
{}
}
break;
}
{
var G__24674 = seq__24613_24638;
var G__24675 = chunk__24620_24639;
var G__24676 = count__24621_24640;
var G__24677 = (i__24622_24641 + 1);
seq__24613_24638 = G__24674;
chunk__24620_24639 = G__24675;
count__24621_24640 = G__24676;
i__24622_24641 = G__24677;
continue;
}
} else
{var temp__4092__auto___24678 = cljs.core.seq.call(null,seq__24613_24638);if(temp__4092__auto___24678)
{var seq__24613_24679__$1 = temp__4092__auto___24678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24613_24679__$1))
{var c__8552__auto___24680 = cljs.core.chunk_first.call(null,seq__24613_24679__$1);{
var G__24681 = cljs.core.chunk_rest.call(null,seq__24613_24679__$1);
var G__24682 = c__8552__auto___24680;
var G__24683 = cljs.core.count.call(null,c__8552__auto___24680);
var G__24684 = 0;
seq__24613_24638 = G__24681;
chunk__24620_24639 = G__24682;
count__24621_24640 = G__24683;
i__24622_24641 = G__24684;
continue;
}
} else
{var vec__24632_24685 = cljs.core.first.call(null,seq__24613_24679__$1);var orig_type_24686 = cljs.core.nth.call(null,vec__24632_24685,0,null);var f_24687 = cljs.core.nth.call(null,vec__24632_24685,1,null);var seq__24614_24688 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24686,new cljs.core.PersistentArrayMap.fromArray([orig_type_24686,cljs.core.identity], true, false)));var chunk__24616_24689 = null;var count__24617_24690 = 0;var i__24618_24691 = 0;while(true){
if((i__24618_24691 < count__24617_24690))
{var vec__24633_24692 = cljs.core._nth.call(null,chunk__24616_24689,i__24618_24691);var actual_type_24693 = cljs.core.nth.call(null,vec__24633_24692,0,null);var __24694 = cljs.core.nth.call(null,vec__24633_24692,1,null);var keys_24695 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24637,actual_type_24693,f_24687], null);var canonical_f_24696 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24636),keys_24695);dommy.core.update_event_listeners_BANG_.call(null,elem_24636,dommy.utils.dissoc_in,keys_24695);
if(cljs.core.truth_(elem_24636.removeEventListener))
{elem_24636.removeEventListener(cljs.core.name.call(null,actual_type_24693),canonical_f_24696);
} else
{elem_24636.detachEvent(cljs.core.name.call(null,actual_type_24693),canonical_f_24696);
}
{
var G__24697 = seq__24614_24688;
var G__24698 = chunk__24616_24689;
var G__24699 = count__24617_24690;
var G__24700 = (i__24618_24691 + 1);
seq__24614_24688 = G__24697;
chunk__24616_24689 = G__24698;
count__24617_24690 = G__24699;
i__24618_24691 = G__24700;
continue;
}
} else
{var temp__4092__auto___24701__$1 = cljs.core.seq.call(null,seq__24614_24688);if(temp__4092__auto___24701__$1)
{var seq__24614_24702__$1 = temp__4092__auto___24701__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24614_24702__$1))
{var c__8552__auto___24703 = cljs.core.chunk_first.call(null,seq__24614_24702__$1);{
var G__24704 = cljs.core.chunk_rest.call(null,seq__24614_24702__$1);
var G__24705 = c__8552__auto___24703;
var G__24706 = cljs.core.count.call(null,c__8552__auto___24703);
var G__24707 = 0;
seq__24614_24688 = G__24704;
chunk__24616_24689 = G__24705;
count__24617_24690 = G__24706;
i__24618_24691 = G__24707;
continue;
}
} else
{var vec__24634_24708 = cljs.core.first.call(null,seq__24614_24702__$1);var actual_type_24709 = cljs.core.nth.call(null,vec__24634_24708,0,null);var __24710 = cljs.core.nth.call(null,vec__24634_24708,1,null);var keys_24711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24637,actual_type_24709,f_24687], null);var canonical_f_24712 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24636),keys_24711);dommy.core.update_event_listeners_BANG_.call(null,elem_24636,dommy.utils.dissoc_in,keys_24711);
if(cljs.core.truth_(elem_24636.removeEventListener))
{elem_24636.removeEventListener(cljs.core.name.call(null,actual_type_24709),canonical_f_24712);
} else
{elem_24636.detachEvent(cljs.core.name.call(null,actual_type_24709),canonical_f_24712);
}
{
var G__24713 = cljs.core.next.call(null,seq__24614_24702__$1);
var G__24714 = null;
var G__24715 = 0;
var G__24716 = 0;
seq__24614_24688 = G__24713;
chunk__24616_24689 = G__24714;
count__24617_24690 = G__24715;
i__24618_24691 = G__24716;
continue;
}
}
} else
{}
}
break;
}
{
var G__24717 = cljs.core.next.call(null,seq__24613_24679__$1);
var G__24718 = null;
var G__24719 = 0;
var G__24720 = 0;
seq__24613_24638 = G__24717;
chunk__24620_24639 = G__24718;
count__24621_24640 = G__24719;
i__24622_24641 = G__24720;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24721){
var elem_sel = cljs.core.first(arglist__24721);
var type_fs = cljs.core.rest(arglist__24721);
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
var vec__24729_24736 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24737 = cljs.core.nth.call(null,vec__24729_24736,0,null);var selector_24738 = cljs.core.nth.call(null,vec__24729_24736,1,null);var seq__24730_24739 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24731_24740 = null;var count__24732_24741 = 0;var i__24733_24742 = 0;while(true){
if((i__24733_24742 < count__24732_24741))
{var vec__24734_24743 = cljs.core._nth.call(null,chunk__24731_24740,i__24733_24742);var type_24744 = cljs.core.nth.call(null,vec__24734_24743,0,null);var f_24745 = cljs.core.nth.call(null,vec__24734_24743,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24744,((function (seq__24730_24739,chunk__24731_24740,count__24732_24741,i__24733_24742,vec__24734_24743,type_24744,f_24745){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24744,this_fn);
return f_24745.call(null,e);
});})(seq__24730_24739,chunk__24731_24740,count__24732_24741,i__24733_24742,vec__24734_24743,type_24744,f_24745))
);
{
var G__24746 = seq__24730_24739;
var G__24747 = chunk__24731_24740;
var G__24748 = count__24732_24741;
var G__24749 = (i__24733_24742 + 1);
seq__24730_24739 = G__24746;
chunk__24731_24740 = G__24747;
count__24732_24741 = G__24748;
i__24733_24742 = G__24749;
continue;
}
} else
{var temp__4092__auto___24750 = cljs.core.seq.call(null,seq__24730_24739);if(temp__4092__auto___24750)
{var seq__24730_24751__$1 = temp__4092__auto___24750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24730_24751__$1))
{var c__8552__auto___24752 = cljs.core.chunk_first.call(null,seq__24730_24751__$1);{
var G__24753 = cljs.core.chunk_rest.call(null,seq__24730_24751__$1);
var G__24754 = c__8552__auto___24752;
var G__24755 = cljs.core.count.call(null,c__8552__auto___24752);
var G__24756 = 0;
seq__24730_24739 = G__24753;
chunk__24731_24740 = G__24754;
count__24732_24741 = G__24755;
i__24733_24742 = G__24756;
continue;
}
} else
{var vec__24735_24757 = cljs.core.first.call(null,seq__24730_24751__$1);var type_24758 = cljs.core.nth.call(null,vec__24735_24757,0,null);var f_24759 = cljs.core.nth.call(null,vec__24735_24757,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24758,((function (seq__24730_24739,chunk__24731_24740,count__24732_24741,i__24733_24742,vec__24735_24757,type_24758,f_24759,seq__24730_24751__$1,temp__4092__auto___24750){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24758,this_fn);
return f_24759.call(null,e);
});})(seq__24730_24739,chunk__24731_24740,count__24732_24741,i__24733_24742,vec__24735_24757,type_24758,f_24759,seq__24730_24751__$1,temp__4092__auto___24750))
);
{
var G__24760 = cljs.core.next.call(null,seq__24730_24751__$1);
var G__24761 = null;
var G__24762 = 0;
var G__24763 = 0;
seq__24730_24739 = G__24760;
chunk__24731_24740 = G__24761;
count__24732_24741 = G__24762;
i__24733_24742 = G__24763;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24764){
var elem_sel = cljs.core.first(arglist__24764);
var type_fs = cljs.core.rest(arglist__24764);
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
var fire_BANG___delegate = function (node,event_type,p__24765){var vec__24767 = p__24765;var update_event_BANG_ = cljs.core.nth.call(null,vec__24767,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__7828__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
var p__24765 = null;if (arguments.length > 2) {
  p__24765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__24765);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__24768){
var node = cljs.core.first(arglist__24768);
arglist__24768 = cljs.core.next(arglist__24768);
var event_type = cljs.core.first(arglist__24768);
var p__24765 = cljs.core.rest(arglist__24768);
return fire_BANG___delegate(node,event_type,p__24765);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
