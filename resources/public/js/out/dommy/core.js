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
dommy.core.text = (function text(elem){var or__8230__auto__ = elem.textContent;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
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
var append_BANG___2 = (function (parent,child){var G__25350 = dommy.template.__GT_node_like.call(null,parent);G__25350.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__25350;
});
var append_BANG___3 = (function() { 
var G__25355__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__25351_25356 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__25352_25357 = null;var count__25353_25358 = 0;var i__25354_25359 = 0;while(true){
if((i__25354_25359 < count__25353_25358))
{var c_25360 = cljs.core._nth.call(null,chunk__25352_25357,i__25354_25359);append_BANG_.call(null,parent__$1,c_25360);
{
var G__25361 = seq__25351_25356;
var G__25362 = chunk__25352_25357;
var G__25363 = count__25353_25358;
var G__25364 = (i__25354_25359 + 1);
seq__25351_25356 = G__25361;
chunk__25352_25357 = G__25362;
count__25353_25358 = G__25363;
i__25354_25359 = G__25364;
continue;
}
} else
{var temp__4092__auto___25365 = cljs.core.seq.call(null,seq__25351_25356);if(temp__4092__auto___25365)
{var seq__25351_25366__$1 = temp__4092__auto___25365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25351_25366__$1))
{var c__8959__auto___25367 = cljs.core.chunk_first.call(null,seq__25351_25366__$1);{
var G__25368 = cljs.core.chunk_rest.call(null,seq__25351_25366__$1);
var G__25369 = c__8959__auto___25367;
var G__25370 = cljs.core.count.call(null,c__8959__auto___25367);
var G__25371 = 0;
seq__25351_25356 = G__25368;
chunk__25352_25357 = G__25369;
count__25353_25358 = G__25370;
i__25354_25359 = G__25371;
continue;
}
} else
{var c_25372 = cljs.core.first.call(null,seq__25351_25366__$1);append_BANG_.call(null,parent__$1,c_25372);
{
var G__25373 = cljs.core.next.call(null,seq__25351_25366__$1);
var G__25374 = null;
var G__25375 = 0;
var G__25376 = 0;
seq__25351_25356 = G__25373;
chunk__25352_25357 = G__25374;
count__25353_25358 = G__25375;
i__25354_25359 = G__25376;
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
var G__25355 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25355__delegate.call(this,parent,child,more_children);};
G__25355.cljs$lang$maxFixedArity = 2;
G__25355.cljs$lang$applyTo = (function (arglist__25377){
var parent = cljs.core.first(arglist__25377);
arglist__25377 = cljs.core.next(arglist__25377);
var child = cljs.core.first(arglist__25377);
var more_children = cljs.core.rest(arglist__25377);
return G__25355__delegate(parent,child,more_children);
});
G__25355.cljs$core$IFn$_invoke$arity$variadic = G__25355__delegate;
return G__25355;
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
var G__25386__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__25382_25387 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__25383_25388 = null;var count__25384_25389 = 0;var i__25385_25390 = 0;while(true){
if((i__25385_25390 < count__25384_25389))
{var c_25391 = cljs.core._nth.call(null,chunk__25383_25388,i__25385_25390);prepend_BANG_.call(null,parent__$1,c_25391);
{
var G__25392 = seq__25382_25387;
var G__25393 = chunk__25383_25388;
var G__25394 = count__25384_25389;
var G__25395 = (i__25385_25390 + 1);
seq__25382_25387 = G__25392;
chunk__25383_25388 = G__25393;
count__25384_25389 = G__25394;
i__25385_25390 = G__25395;
continue;
}
} else
{var temp__4092__auto___25396 = cljs.core.seq.call(null,seq__25382_25387);if(temp__4092__auto___25396)
{var seq__25382_25397__$1 = temp__4092__auto___25396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25382_25397__$1))
{var c__8959__auto___25398 = cljs.core.chunk_first.call(null,seq__25382_25397__$1);{
var G__25399 = cljs.core.chunk_rest.call(null,seq__25382_25397__$1);
var G__25400 = c__8959__auto___25398;
var G__25401 = cljs.core.count.call(null,c__8959__auto___25398);
var G__25402 = 0;
seq__25382_25387 = G__25399;
chunk__25383_25388 = G__25400;
count__25384_25389 = G__25401;
i__25385_25390 = G__25402;
continue;
}
} else
{var c_25403 = cljs.core.first.call(null,seq__25382_25397__$1);prepend_BANG_.call(null,parent__$1,c_25403);
{
var G__25404 = cljs.core.next.call(null,seq__25382_25397__$1);
var G__25405 = null;
var G__25406 = 0;
var G__25407 = 0;
seq__25382_25387 = G__25404;
chunk__25383_25388 = G__25405;
count__25384_25389 = G__25406;
i__25385_25390 = G__25407;
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
var G__25386 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25386__delegate.call(this,parent,child,more_children);};
G__25386.cljs$lang$maxFixedArity = 2;
G__25386.cljs$lang$applyTo = (function (arglist__25408){
var parent = cljs.core.first(arglist__25408);
arglist__25408 = cljs.core.next(arglist__25408);
var child = cljs.core.first(arglist__25408);
var more_children = cljs.core.rest(arglist__25408);
return G__25386__delegate(parent,child,more_children);
});
G__25386.cljs$core$IFn$_invoke$arity$variadic = G__25386__delegate;
return G__25386;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___25409 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___25409))
{var next_25410 = temp__4090__auto___25409;parent.insertBefore(actual_node,next_25410);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__25412 = dommy.template.__GT_node_like.call(null,parent);G__25412.innerHTML = "";
dommy.core.append_BANG_.call(null,G__25412,node_like);
return G__25412;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__25414 = elem__$1.parentNode;G__25414.removeChild(elem__$1);
return G__25414;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25420){var vec__25421 = p__25420;var k = cljs.core.nth.call(null,vec__25421,0,null);var v = cljs.core.nth.call(null,vec__25421,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t25422 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t25422 = (function (v,k,vec__25421,p__25420,container,key_selectors_map,template,selector_map,meta25423){
this.v = v;
this.k = k;
this.vec__25421 = vec__25421;
this.p__25420 = p__25420;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta25423 = meta25423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t25422.cljs$lang$type = true;
dommy.core.t25422.cljs$lang$ctorStr = "dommy.core/t25422";
dommy.core.t25422.cljs$lang$ctorPrWriter = (function (this__8779__auto__,writer__8780__auto__,opt__8781__auto__){return cljs.core._write.call(null,writer__8780__auto__,"dommy.core/t25422");
});
dommy.core.t25422.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t25422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25424){var self__ = this;
var _25424__$1 = this;return self__.meta25423;
});
dommy.core.t25422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25424,meta25423__$1){var self__ = this;
var _25424__$1 = this;return (new dommy.core.t25422(self__.v,self__.k,self__.vec__25421,self__.p__25420,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta25423__$1));
});
dommy.core.__GT_t25422 = (function __GT_t25422(v__$1,k__$1,vec__25421__$1,p__25420__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta25423){return (new dommy.core.t25422(v__$1,k__$1,vec__25421__$1,p__25420__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta25423));
});
}
return (new dommy.core.t25422(v,k,vec__25421,p__25420,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__25425_SHARP_){return p1__25425_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__25426_SHARP_){return !((p1__25426_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25427){var vec__25428 = p__25427;var special_mouse_event = cljs.core.nth.call(null,vec__25428,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__25428,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8230__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8218__auto__ = related_target;if(cljs.core.truth_(and__8218__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8218__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8218__auto__ = selected_target;if(cljs.core.truth_(and__8218__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8218__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8230__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__25429){
var elem = cljs.core.first(arglist__25429);
arglist__25429 = cljs.core.next(arglist__25429);
var f = cljs.core.first(arglist__25429);
var args = cljs.core.rest(arglist__25429);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__25430_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__25430_SHARP_));
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
var vec__25454_25477 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25478 = cljs.core.nth.call(null,vec__25454_25477,0,null);var selector_25479 = cljs.core.nth.call(null,vec__25454_25477,1,null);var seq__25455_25480 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25462_25481 = null;var count__25463_25482 = 0;var i__25464_25483 = 0;while(true){
if((i__25464_25483 < count__25463_25482))
{var vec__25471_25484 = cljs.core._nth.call(null,chunk__25462_25481,i__25464_25483);var orig_type_25485 = cljs.core.nth.call(null,vec__25471_25484,0,null);var f_25486 = cljs.core.nth.call(null,vec__25471_25484,1,null);var seq__25465_25487 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25485,new cljs.core.PersistentArrayMap.fromArray([orig_type_25485,cljs.core.identity], true, false)));var chunk__25467_25488 = null;var count__25468_25489 = 0;var i__25469_25490 = 0;while(true){
if((i__25469_25490 < count__25468_25489))
{var vec__25472_25491 = cljs.core._nth.call(null,chunk__25467_25488,i__25469_25490);var actual_type_25492 = cljs.core.nth.call(null,vec__25472_25491,0,null);var factory_25493 = cljs.core.nth.call(null,vec__25472_25491,1,null);var canonical_f_25494 = (cljs.core.truth_(selector_25479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25478,selector_25479):cljs.core.identity).call(null,factory_25493.call(null,f_25486));dommy.core.update_event_listeners_BANG_.call(null,elem_25478,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25479,actual_type_25492,f_25486], null),canonical_f_25494);
if(cljs.core.truth_(elem_25478.addEventListener))
{elem_25478.addEventListener(cljs.core.name.call(null,actual_type_25492),canonical_f_25494);
} else
{elem_25478.attachEvent(cljs.core.name.call(null,actual_type_25492),canonical_f_25494);
}
{
var G__25495 = seq__25465_25487;
var G__25496 = chunk__25467_25488;
var G__25497 = count__25468_25489;
var G__25498 = (i__25469_25490 + 1);
seq__25465_25487 = G__25495;
chunk__25467_25488 = G__25496;
count__25468_25489 = G__25497;
i__25469_25490 = G__25498;
continue;
}
} else
{var temp__4092__auto___25499 = cljs.core.seq.call(null,seq__25465_25487);if(temp__4092__auto___25499)
{var seq__25465_25500__$1 = temp__4092__auto___25499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25465_25500__$1))
{var c__8959__auto___25501 = cljs.core.chunk_first.call(null,seq__25465_25500__$1);{
var G__25502 = cljs.core.chunk_rest.call(null,seq__25465_25500__$1);
var G__25503 = c__8959__auto___25501;
var G__25504 = cljs.core.count.call(null,c__8959__auto___25501);
var G__25505 = 0;
seq__25465_25487 = G__25502;
chunk__25467_25488 = G__25503;
count__25468_25489 = G__25504;
i__25469_25490 = G__25505;
continue;
}
} else
{var vec__25473_25506 = cljs.core.first.call(null,seq__25465_25500__$1);var actual_type_25507 = cljs.core.nth.call(null,vec__25473_25506,0,null);var factory_25508 = cljs.core.nth.call(null,vec__25473_25506,1,null);var canonical_f_25509 = (cljs.core.truth_(selector_25479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25478,selector_25479):cljs.core.identity).call(null,factory_25508.call(null,f_25486));dommy.core.update_event_listeners_BANG_.call(null,elem_25478,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25479,actual_type_25507,f_25486], null),canonical_f_25509);
if(cljs.core.truth_(elem_25478.addEventListener))
{elem_25478.addEventListener(cljs.core.name.call(null,actual_type_25507),canonical_f_25509);
} else
{elem_25478.attachEvent(cljs.core.name.call(null,actual_type_25507),canonical_f_25509);
}
{
var G__25510 = cljs.core.next.call(null,seq__25465_25500__$1);
var G__25511 = null;
var G__25512 = 0;
var G__25513 = 0;
seq__25465_25487 = G__25510;
chunk__25467_25488 = G__25511;
count__25468_25489 = G__25512;
i__25469_25490 = G__25513;
continue;
}
}
} else
{}
}
break;
}
{
var G__25514 = seq__25455_25480;
var G__25515 = chunk__25462_25481;
var G__25516 = count__25463_25482;
var G__25517 = (i__25464_25483 + 1);
seq__25455_25480 = G__25514;
chunk__25462_25481 = G__25515;
count__25463_25482 = G__25516;
i__25464_25483 = G__25517;
continue;
}
} else
{var temp__4092__auto___25518 = cljs.core.seq.call(null,seq__25455_25480);if(temp__4092__auto___25518)
{var seq__25455_25519__$1 = temp__4092__auto___25518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25455_25519__$1))
{var c__8959__auto___25520 = cljs.core.chunk_first.call(null,seq__25455_25519__$1);{
var G__25521 = cljs.core.chunk_rest.call(null,seq__25455_25519__$1);
var G__25522 = c__8959__auto___25520;
var G__25523 = cljs.core.count.call(null,c__8959__auto___25520);
var G__25524 = 0;
seq__25455_25480 = G__25521;
chunk__25462_25481 = G__25522;
count__25463_25482 = G__25523;
i__25464_25483 = G__25524;
continue;
}
} else
{var vec__25474_25525 = cljs.core.first.call(null,seq__25455_25519__$1);var orig_type_25526 = cljs.core.nth.call(null,vec__25474_25525,0,null);var f_25527 = cljs.core.nth.call(null,vec__25474_25525,1,null);var seq__25456_25528 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25526,new cljs.core.PersistentArrayMap.fromArray([orig_type_25526,cljs.core.identity], true, false)));var chunk__25458_25529 = null;var count__25459_25530 = 0;var i__25460_25531 = 0;while(true){
if((i__25460_25531 < count__25459_25530))
{var vec__25475_25532 = cljs.core._nth.call(null,chunk__25458_25529,i__25460_25531);var actual_type_25533 = cljs.core.nth.call(null,vec__25475_25532,0,null);var factory_25534 = cljs.core.nth.call(null,vec__25475_25532,1,null);var canonical_f_25535 = (cljs.core.truth_(selector_25479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25478,selector_25479):cljs.core.identity).call(null,factory_25534.call(null,f_25527));dommy.core.update_event_listeners_BANG_.call(null,elem_25478,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25479,actual_type_25533,f_25527], null),canonical_f_25535);
if(cljs.core.truth_(elem_25478.addEventListener))
{elem_25478.addEventListener(cljs.core.name.call(null,actual_type_25533),canonical_f_25535);
} else
{elem_25478.attachEvent(cljs.core.name.call(null,actual_type_25533),canonical_f_25535);
}
{
var G__25536 = seq__25456_25528;
var G__25537 = chunk__25458_25529;
var G__25538 = count__25459_25530;
var G__25539 = (i__25460_25531 + 1);
seq__25456_25528 = G__25536;
chunk__25458_25529 = G__25537;
count__25459_25530 = G__25538;
i__25460_25531 = G__25539;
continue;
}
} else
{var temp__4092__auto___25540__$1 = cljs.core.seq.call(null,seq__25456_25528);if(temp__4092__auto___25540__$1)
{var seq__25456_25541__$1 = temp__4092__auto___25540__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25456_25541__$1))
{var c__8959__auto___25542 = cljs.core.chunk_first.call(null,seq__25456_25541__$1);{
var G__25543 = cljs.core.chunk_rest.call(null,seq__25456_25541__$1);
var G__25544 = c__8959__auto___25542;
var G__25545 = cljs.core.count.call(null,c__8959__auto___25542);
var G__25546 = 0;
seq__25456_25528 = G__25543;
chunk__25458_25529 = G__25544;
count__25459_25530 = G__25545;
i__25460_25531 = G__25546;
continue;
}
} else
{var vec__25476_25547 = cljs.core.first.call(null,seq__25456_25541__$1);var actual_type_25548 = cljs.core.nth.call(null,vec__25476_25547,0,null);var factory_25549 = cljs.core.nth.call(null,vec__25476_25547,1,null);var canonical_f_25550 = (cljs.core.truth_(selector_25479)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25478,selector_25479):cljs.core.identity).call(null,factory_25549.call(null,f_25527));dommy.core.update_event_listeners_BANG_.call(null,elem_25478,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25479,actual_type_25548,f_25527], null),canonical_f_25550);
if(cljs.core.truth_(elem_25478.addEventListener))
{elem_25478.addEventListener(cljs.core.name.call(null,actual_type_25548),canonical_f_25550);
} else
{elem_25478.attachEvent(cljs.core.name.call(null,actual_type_25548),canonical_f_25550);
}
{
var G__25551 = cljs.core.next.call(null,seq__25456_25541__$1);
var G__25552 = null;
var G__25553 = 0;
var G__25554 = 0;
seq__25456_25528 = G__25551;
chunk__25458_25529 = G__25552;
count__25459_25530 = G__25553;
i__25460_25531 = G__25554;
continue;
}
}
} else
{}
}
break;
}
{
var G__25555 = cljs.core.next.call(null,seq__25455_25519__$1);
var G__25556 = null;
var G__25557 = 0;
var G__25558 = 0;
seq__25455_25480 = G__25555;
chunk__25462_25481 = G__25556;
count__25463_25482 = G__25557;
i__25464_25483 = G__25558;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__25559){
var elem_sel = cljs.core.first(arglist__25559);
var type_fs = cljs.core.rest(arglist__25559);
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
var vec__25583_25606 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25607 = cljs.core.nth.call(null,vec__25583_25606,0,null);var selector_25608 = cljs.core.nth.call(null,vec__25583_25606,1,null);var seq__25584_25609 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25591_25610 = null;var count__25592_25611 = 0;var i__25593_25612 = 0;while(true){
if((i__25593_25612 < count__25592_25611))
{var vec__25600_25613 = cljs.core._nth.call(null,chunk__25591_25610,i__25593_25612);var orig_type_25614 = cljs.core.nth.call(null,vec__25600_25613,0,null);var f_25615 = cljs.core.nth.call(null,vec__25600_25613,1,null);var seq__25594_25616 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25614,new cljs.core.PersistentArrayMap.fromArray([orig_type_25614,cljs.core.identity], true, false)));var chunk__25596_25617 = null;var count__25597_25618 = 0;var i__25598_25619 = 0;while(true){
if((i__25598_25619 < count__25597_25618))
{var vec__25601_25620 = cljs.core._nth.call(null,chunk__25596_25617,i__25598_25619);var actual_type_25621 = cljs.core.nth.call(null,vec__25601_25620,0,null);var __25622 = cljs.core.nth.call(null,vec__25601_25620,1,null);var keys_25623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25608,actual_type_25621,f_25615], null);var canonical_f_25624 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25607),keys_25623);dommy.core.update_event_listeners_BANG_.call(null,elem_25607,dommy.utils.dissoc_in,keys_25623);
if(cljs.core.truth_(elem_25607.removeEventListener))
{elem_25607.removeEventListener(cljs.core.name.call(null,actual_type_25621),canonical_f_25624);
} else
{elem_25607.detachEvent(cljs.core.name.call(null,actual_type_25621),canonical_f_25624);
}
{
var G__25625 = seq__25594_25616;
var G__25626 = chunk__25596_25617;
var G__25627 = count__25597_25618;
var G__25628 = (i__25598_25619 + 1);
seq__25594_25616 = G__25625;
chunk__25596_25617 = G__25626;
count__25597_25618 = G__25627;
i__25598_25619 = G__25628;
continue;
}
} else
{var temp__4092__auto___25629 = cljs.core.seq.call(null,seq__25594_25616);if(temp__4092__auto___25629)
{var seq__25594_25630__$1 = temp__4092__auto___25629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25594_25630__$1))
{var c__8959__auto___25631 = cljs.core.chunk_first.call(null,seq__25594_25630__$1);{
var G__25632 = cljs.core.chunk_rest.call(null,seq__25594_25630__$1);
var G__25633 = c__8959__auto___25631;
var G__25634 = cljs.core.count.call(null,c__8959__auto___25631);
var G__25635 = 0;
seq__25594_25616 = G__25632;
chunk__25596_25617 = G__25633;
count__25597_25618 = G__25634;
i__25598_25619 = G__25635;
continue;
}
} else
{var vec__25602_25636 = cljs.core.first.call(null,seq__25594_25630__$1);var actual_type_25637 = cljs.core.nth.call(null,vec__25602_25636,0,null);var __25638 = cljs.core.nth.call(null,vec__25602_25636,1,null);var keys_25639 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25608,actual_type_25637,f_25615], null);var canonical_f_25640 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25607),keys_25639);dommy.core.update_event_listeners_BANG_.call(null,elem_25607,dommy.utils.dissoc_in,keys_25639);
if(cljs.core.truth_(elem_25607.removeEventListener))
{elem_25607.removeEventListener(cljs.core.name.call(null,actual_type_25637),canonical_f_25640);
} else
{elem_25607.detachEvent(cljs.core.name.call(null,actual_type_25637),canonical_f_25640);
}
{
var G__25641 = cljs.core.next.call(null,seq__25594_25630__$1);
var G__25642 = null;
var G__25643 = 0;
var G__25644 = 0;
seq__25594_25616 = G__25641;
chunk__25596_25617 = G__25642;
count__25597_25618 = G__25643;
i__25598_25619 = G__25644;
continue;
}
}
} else
{}
}
break;
}
{
var G__25645 = seq__25584_25609;
var G__25646 = chunk__25591_25610;
var G__25647 = count__25592_25611;
var G__25648 = (i__25593_25612 + 1);
seq__25584_25609 = G__25645;
chunk__25591_25610 = G__25646;
count__25592_25611 = G__25647;
i__25593_25612 = G__25648;
continue;
}
} else
{var temp__4092__auto___25649 = cljs.core.seq.call(null,seq__25584_25609);if(temp__4092__auto___25649)
{var seq__25584_25650__$1 = temp__4092__auto___25649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25584_25650__$1))
{var c__8959__auto___25651 = cljs.core.chunk_first.call(null,seq__25584_25650__$1);{
var G__25652 = cljs.core.chunk_rest.call(null,seq__25584_25650__$1);
var G__25653 = c__8959__auto___25651;
var G__25654 = cljs.core.count.call(null,c__8959__auto___25651);
var G__25655 = 0;
seq__25584_25609 = G__25652;
chunk__25591_25610 = G__25653;
count__25592_25611 = G__25654;
i__25593_25612 = G__25655;
continue;
}
} else
{var vec__25603_25656 = cljs.core.first.call(null,seq__25584_25650__$1);var orig_type_25657 = cljs.core.nth.call(null,vec__25603_25656,0,null);var f_25658 = cljs.core.nth.call(null,vec__25603_25656,1,null);var seq__25585_25659 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25657,new cljs.core.PersistentArrayMap.fromArray([orig_type_25657,cljs.core.identity], true, false)));var chunk__25587_25660 = null;var count__25588_25661 = 0;var i__25589_25662 = 0;while(true){
if((i__25589_25662 < count__25588_25661))
{var vec__25604_25663 = cljs.core._nth.call(null,chunk__25587_25660,i__25589_25662);var actual_type_25664 = cljs.core.nth.call(null,vec__25604_25663,0,null);var __25665 = cljs.core.nth.call(null,vec__25604_25663,1,null);var keys_25666 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25608,actual_type_25664,f_25658], null);var canonical_f_25667 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25607),keys_25666);dommy.core.update_event_listeners_BANG_.call(null,elem_25607,dommy.utils.dissoc_in,keys_25666);
if(cljs.core.truth_(elem_25607.removeEventListener))
{elem_25607.removeEventListener(cljs.core.name.call(null,actual_type_25664),canonical_f_25667);
} else
{elem_25607.detachEvent(cljs.core.name.call(null,actual_type_25664),canonical_f_25667);
}
{
var G__25668 = seq__25585_25659;
var G__25669 = chunk__25587_25660;
var G__25670 = count__25588_25661;
var G__25671 = (i__25589_25662 + 1);
seq__25585_25659 = G__25668;
chunk__25587_25660 = G__25669;
count__25588_25661 = G__25670;
i__25589_25662 = G__25671;
continue;
}
} else
{var temp__4092__auto___25672__$1 = cljs.core.seq.call(null,seq__25585_25659);if(temp__4092__auto___25672__$1)
{var seq__25585_25673__$1 = temp__4092__auto___25672__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25585_25673__$1))
{var c__8959__auto___25674 = cljs.core.chunk_first.call(null,seq__25585_25673__$1);{
var G__25675 = cljs.core.chunk_rest.call(null,seq__25585_25673__$1);
var G__25676 = c__8959__auto___25674;
var G__25677 = cljs.core.count.call(null,c__8959__auto___25674);
var G__25678 = 0;
seq__25585_25659 = G__25675;
chunk__25587_25660 = G__25676;
count__25588_25661 = G__25677;
i__25589_25662 = G__25678;
continue;
}
} else
{var vec__25605_25679 = cljs.core.first.call(null,seq__25585_25673__$1);var actual_type_25680 = cljs.core.nth.call(null,vec__25605_25679,0,null);var __25681 = cljs.core.nth.call(null,vec__25605_25679,1,null);var keys_25682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25608,actual_type_25680,f_25658], null);var canonical_f_25683 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25607),keys_25682);dommy.core.update_event_listeners_BANG_.call(null,elem_25607,dommy.utils.dissoc_in,keys_25682);
if(cljs.core.truth_(elem_25607.removeEventListener))
{elem_25607.removeEventListener(cljs.core.name.call(null,actual_type_25680),canonical_f_25683);
} else
{elem_25607.detachEvent(cljs.core.name.call(null,actual_type_25680),canonical_f_25683);
}
{
var G__25684 = cljs.core.next.call(null,seq__25585_25673__$1);
var G__25685 = null;
var G__25686 = 0;
var G__25687 = 0;
seq__25585_25659 = G__25684;
chunk__25587_25660 = G__25685;
count__25588_25661 = G__25686;
i__25589_25662 = G__25687;
continue;
}
}
} else
{}
}
break;
}
{
var G__25688 = cljs.core.next.call(null,seq__25584_25650__$1);
var G__25689 = null;
var G__25690 = 0;
var G__25691 = 0;
seq__25584_25609 = G__25688;
chunk__25591_25610 = G__25689;
count__25592_25611 = G__25690;
i__25593_25612 = G__25691;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__25692){
var elem_sel = cljs.core.first(arglist__25692);
var type_fs = cljs.core.rest(arglist__25692);
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
var vec__25700_25707 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25708 = cljs.core.nth.call(null,vec__25700_25707,0,null);var selector_25709 = cljs.core.nth.call(null,vec__25700_25707,1,null);var seq__25701_25710 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25702_25711 = null;var count__25703_25712 = 0;var i__25704_25713 = 0;while(true){
if((i__25704_25713 < count__25703_25712))
{var vec__25705_25714 = cljs.core._nth.call(null,chunk__25702_25711,i__25704_25713);var type_25715 = cljs.core.nth.call(null,vec__25705_25714,0,null);var f_25716 = cljs.core.nth.call(null,vec__25705_25714,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25715,((function (seq__25701_25710,chunk__25702_25711,count__25703_25712,i__25704_25713,vec__25705_25714,type_25715,f_25716){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25715,this_fn);
return f_25716.call(null,e);
});})(seq__25701_25710,chunk__25702_25711,count__25703_25712,i__25704_25713,vec__25705_25714,type_25715,f_25716))
);
{
var G__25717 = seq__25701_25710;
var G__25718 = chunk__25702_25711;
var G__25719 = count__25703_25712;
var G__25720 = (i__25704_25713 + 1);
seq__25701_25710 = G__25717;
chunk__25702_25711 = G__25718;
count__25703_25712 = G__25719;
i__25704_25713 = G__25720;
continue;
}
} else
{var temp__4092__auto___25721 = cljs.core.seq.call(null,seq__25701_25710);if(temp__4092__auto___25721)
{var seq__25701_25722__$1 = temp__4092__auto___25721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25701_25722__$1))
{var c__8959__auto___25723 = cljs.core.chunk_first.call(null,seq__25701_25722__$1);{
var G__25724 = cljs.core.chunk_rest.call(null,seq__25701_25722__$1);
var G__25725 = c__8959__auto___25723;
var G__25726 = cljs.core.count.call(null,c__8959__auto___25723);
var G__25727 = 0;
seq__25701_25710 = G__25724;
chunk__25702_25711 = G__25725;
count__25703_25712 = G__25726;
i__25704_25713 = G__25727;
continue;
}
} else
{var vec__25706_25728 = cljs.core.first.call(null,seq__25701_25722__$1);var type_25729 = cljs.core.nth.call(null,vec__25706_25728,0,null);var f_25730 = cljs.core.nth.call(null,vec__25706_25728,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25729,((function (seq__25701_25710,chunk__25702_25711,count__25703_25712,i__25704_25713,vec__25706_25728,type_25729,f_25730,seq__25701_25722__$1,temp__4092__auto___25721){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25729,this_fn);
return f_25730.call(null,e);
});})(seq__25701_25710,chunk__25702_25711,count__25703_25712,i__25704_25713,vec__25706_25728,type_25729,f_25730,seq__25701_25722__$1,temp__4092__auto___25721))
);
{
var G__25731 = cljs.core.next.call(null,seq__25701_25722__$1);
var G__25732 = null;
var G__25733 = 0;
var G__25734 = 0;
seq__25701_25710 = G__25731;
chunk__25702_25711 = G__25732;
count__25703_25712 = G__25733;
i__25704_25713 = G__25734;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__25735){
var elem_sel = cljs.core.first(arglist__25735);
var type_fs = cljs.core.rest(arglist__25735);
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
var fire_BANG___delegate = function (node,event_type,p__25736){var vec__25738 = p__25736;var update_event_BANG_ = cljs.core.nth.call(null,vec__25738,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8230__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
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
var p__25736 = null;if (arguments.length > 2) {
  p__25736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__25736);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__25739){
var node = cljs.core.first(arglist__25739);
arglist__25739 = cljs.core.next(arglist__25739);
var event_type = cljs.core.first(arglist__25739);
var p__25736 = cljs.core.rest(arglist__25739);
return fire_BANG___delegate(node,event_type,p__25736);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map