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
dommy.core.text = (function text(elem){var or__8245__auto__ = elem.textContent;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
var append_BANG___2 = (function (parent,child){var G__25367 = dommy.template.__GT_node_like.call(null,parent);G__25367.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__25367;
});
var append_BANG___3 = (function() { 
var G__25372__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__25368_25373 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__25369_25374 = null;var count__25370_25375 = 0;var i__25371_25376 = 0;while(true){
if((i__25371_25376 < count__25370_25375))
{var c_25377 = cljs.core._nth.call(null,chunk__25369_25374,i__25371_25376);append_BANG_.call(null,parent__$1,c_25377);
{
var G__25378 = seq__25368_25373;
var G__25379 = chunk__25369_25374;
var G__25380 = count__25370_25375;
var G__25381 = (i__25371_25376 + 1);
seq__25368_25373 = G__25378;
chunk__25369_25374 = G__25379;
count__25370_25375 = G__25380;
i__25371_25376 = G__25381;
continue;
}
} else
{var temp__4092__auto___25382 = cljs.core.seq.call(null,seq__25368_25373);if(temp__4092__auto___25382)
{var seq__25368_25383__$1 = temp__4092__auto___25382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25368_25383__$1))
{var c__8974__auto___25384 = cljs.core.chunk_first.call(null,seq__25368_25383__$1);{
var G__25385 = cljs.core.chunk_rest.call(null,seq__25368_25383__$1);
var G__25386 = c__8974__auto___25384;
var G__25387 = cljs.core.count.call(null,c__8974__auto___25384);
var G__25388 = 0;
seq__25368_25373 = G__25385;
chunk__25369_25374 = G__25386;
count__25370_25375 = G__25387;
i__25371_25376 = G__25388;
continue;
}
} else
{var c_25389 = cljs.core.first.call(null,seq__25368_25383__$1);append_BANG_.call(null,parent__$1,c_25389);
{
var G__25390 = cljs.core.next.call(null,seq__25368_25383__$1);
var G__25391 = null;
var G__25392 = 0;
var G__25393 = 0;
seq__25368_25373 = G__25390;
chunk__25369_25374 = G__25391;
count__25370_25375 = G__25392;
i__25371_25376 = G__25393;
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
var G__25372 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25372__delegate.call(this,parent,child,more_children);};
G__25372.cljs$lang$maxFixedArity = 2;
G__25372.cljs$lang$applyTo = (function (arglist__25394){
var parent = cljs.core.first(arglist__25394);
arglist__25394 = cljs.core.next(arglist__25394);
var child = cljs.core.first(arglist__25394);
var more_children = cljs.core.rest(arglist__25394);
return G__25372__delegate(parent,child,more_children);
});
G__25372.cljs$core$IFn$_invoke$arity$variadic = G__25372__delegate;
return G__25372;
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
var G__25403__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__25399_25404 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__25400_25405 = null;var count__25401_25406 = 0;var i__25402_25407 = 0;while(true){
if((i__25402_25407 < count__25401_25406))
{var c_25408 = cljs.core._nth.call(null,chunk__25400_25405,i__25402_25407);prepend_BANG_.call(null,parent__$1,c_25408);
{
var G__25409 = seq__25399_25404;
var G__25410 = chunk__25400_25405;
var G__25411 = count__25401_25406;
var G__25412 = (i__25402_25407 + 1);
seq__25399_25404 = G__25409;
chunk__25400_25405 = G__25410;
count__25401_25406 = G__25411;
i__25402_25407 = G__25412;
continue;
}
} else
{var temp__4092__auto___25413 = cljs.core.seq.call(null,seq__25399_25404);if(temp__4092__auto___25413)
{var seq__25399_25414__$1 = temp__4092__auto___25413;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25399_25414__$1))
{var c__8974__auto___25415 = cljs.core.chunk_first.call(null,seq__25399_25414__$1);{
var G__25416 = cljs.core.chunk_rest.call(null,seq__25399_25414__$1);
var G__25417 = c__8974__auto___25415;
var G__25418 = cljs.core.count.call(null,c__8974__auto___25415);
var G__25419 = 0;
seq__25399_25404 = G__25416;
chunk__25400_25405 = G__25417;
count__25401_25406 = G__25418;
i__25402_25407 = G__25419;
continue;
}
} else
{var c_25420 = cljs.core.first.call(null,seq__25399_25414__$1);prepend_BANG_.call(null,parent__$1,c_25420);
{
var G__25421 = cljs.core.next.call(null,seq__25399_25414__$1);
var G__25422 = null;
var G__25423 = 0;
var G__25424 = 0;
seq__25399_25404 = G__25421;
chunk__25400_25405 = G__25422;
count__25401_25406 = G__25423;
i__25402_25407 = G__25424;
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
var G__25403 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25403__delegate.call(this,parent,child,more_children);};
G__25403.cljs$lang$maxFixedArity = 2;
G__25403.cljs$lang$applyTo = (function (arglist__25425){
var parent = cljs.core.first(arglist__25425);
arglist__25425 = cljs.core.next(arglist__25425);
var child = cljs.core.first(arglist__25425);
var more_children = cljs.core.rest(arglist__25425);
return G__25403__delegate(parent,child,more_children);
});
G__25403.cljs$core$IFn$_invoke$arity$variadic = G__25403__delegate;
return G__25403;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___25426 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___25426))
{var next_25427 = temp__4090__auto___25426;parent.insertBefore(actual_node,next_25427);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__25429 = dommy.template.__GT_node_like.call(null,parent);G__25429.innerHTML = "";
dommy.core.append_BANG_.call(null,G__25429,node_like);
return G__25429;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__25431 = elem__$1.parentNode;G__25431.removeChild(elem__$1);
return G__25431;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25437){var vec__25438 = p__25437;var k = cljs.core.nth.call(null,vec__25438,0,null);var v = cljs.core.nth.call(null,vec__25438,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t25439 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t25439 = (function (v,k,vec__25438,p__25437,container,key_selectors_map,template,selector_map,meta25440){
this.v = v;
this.k = k;
this.vec__25438 = vec__25438;
this.p__25437 = p__25437;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta25440 = meta25440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t25439.cljs$lang$type = true;
dommy.core.t25439.cljs$lang$ctorStr = "dommy.core/t25439";
dommy.core.t25439.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"dommy.core/t25439");
});
dommy.core.t25439.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t25439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25441){var self__ = this;
var _25441__$1 = this;return self__.meta25440;
});
dommy.core.t25439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25441,meta25440__$1){var self__ = this;
var _25441__$1 = this;return (new dommy.core.t25439(self__.v,self__.k,self__.vec__25438,self__.p__25437,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta25440__$1));
});
dommy.core.__GT_t25439 = (function __GT_t25439(v__$1,k__$1,vec__25438__$1,p__25437__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta25440){return (new dommy.core.t25439(v__$1,k__$1,vec__25438__$1,p__25437__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta25440));
});
}
return (new dommy.core.t25439(v,k,vec__25438,p__25437,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__25442_SHARP_){return p1__25442_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__25443_SHARP_){return !((p1__25443_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25444){var vec__25445 = p__25444;var special_mouse_event = cljs.core.nth.call(null,vec__25445,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__25445,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8245__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8233__auto__ = related_target;if(cljs.core.truth_(and__8233__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8233__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8233__auto__ = selected_target;if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8233__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8245__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__25446){
var elem = cljs.core.first(arglist__25446);
arglist__25446 = cljs.core.next(arglist__25446);
var f = cljs.core.first(arglist__25446);
var args = cljs.core.rest(arglist__25446);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__25447_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__25447_SHARP_));
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
var vec__25471_25494 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25495 = cljs.core.nth.call(null,vec__25471_25494,0,null);var selector_25496 = cljs.core.nth.call(null,vec__25471_25494,1,null);var seq__25472_25497 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25479_25498 = null;var count__25480_25499 = 0;var i__25481_25500 = 0;while(true){
if((i__25481_25500 < count__25480_25499))
{var vec__25488_25501 = cljs.core._nth.call(null,chunk__25479_25498,i__25481_25500);var orig_type_25502 = cljs.core.nth.call(null,vec__25488_25501,0,null);var f_25503 = cljs.core.nth.call(null,vec__25488_25501,1,null);var seq__25482_25504 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25502,new cljs.core.PersistentArrayMap.fromArray([orig_type_25502,cljs.core.identity], true, false)));var chunk__25484_25505 = null;var count__25485_25506 = 0;var i__25486_25507 = 0;while(true){
if((i__25486_25507 < count__25485_25506))
{var vec__25489_25508 = cljs.core._nth.call(null,chunk__25484_25505,i__25486_25507);var actual_type_25509 = cljs.core.nth.call(null,vec__25489_25508,0,null);var factory_25510 = cljs.core.nth.call(null,vec__25489_25508,1,null);var canonical_f_25511 = (cljs.core.truth_(selector_25496)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25495,selector_25496):cljs.core.identity).call(null,factory_25510.call(null,f_25503));dommy.core.update_event_listeners_BANG_.call(null,elem_25495,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25496,actual_type_25509,f_25503], null),canonical_f_25511);
if(cljs.core.truth_(elem_25495.addEventListener))
{elem_25495.addEventListener(cljs.core.name.call(null,actual_type_25509),canonical_f_25511);
} else
{elem_25495.attachEvent(cljs.core.name.call(null,actual_type_25509),canonical_f_25511);
}
{
var G__25512 = seq__25482_25504;
var G__25513 = chunk__25484_25505;
var G__25514 = count__25485_25506;
var G__25515 = (i__25486_25507 + 1);
seq__25482_25504 = G__25512;
chunk__25484_25505 = G__25513;
count__25485_25506 = G__25514;
i__25486_25507 = G__25515;
continue;
}
} else
{var temp__4092__auto___25516 = cljs.core.seq.call(null,seq__25482_25504);if(temp__4092__auto___25516)
{var seq__25482_25517__$1 = temp__4092__auto___25516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25482_25517__$1))
{var c__8974__auto___25518 = cljs.core.chunk_first.call(null,seq__25482_25517__$1);{
var G__25519 = cljs.core.chunk_rest.call(null,seq__25482_25517__$1);
var G__25520 = c__8974__auto___25518;
var G__25521 = cljs.core.count.call(null,c__8974__auto___25518);
var G__25522 = 0;
seq__25482_25504 = G__25519;
chunk__25484_25505 = G__25520;
count__25485_25506 = G__25521;
i__25486_25507 = G__25522;
continue;
}
} else
{var vec__25490_25523 = cljs.core.first.call(null,seq__25482_25517__$1);var actual_type_25524 = cljs.core.nth.call(null,vec__25490_25523,0,null);var factory_25525 = cljs.core.nth.call(null,vec__25490_25523,1,null);var canonical_f_25526 = (cljs.core.truth_(selector_25496)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25495,selector_25496):cljs.core.identity).call(null,factory_25525.call(null,f_25503));dommy.core.update_event_listeners_BANG_.call(null,elem_25495,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25496,actual_type_25524,f_25503], null),canonical_f_25526);
if(cljs.core.truth_(elem_25495.addEventListener))
{elem_25495.addEventListener(cljs.core.name.call(null,actual_type_25524),canonical_f_25526);
} else
{elem_25495.attachEvent(cljs.core.name.call(null,actual_type_25524),canonical_f_25526);
}
{
var G__25527 = cljs.core.next.call(null,seq__25482_25517__$1);
var G__25528 = null;
var G__25529 = 0;
var G__25530 = 0;
seq__25482_25504 = G__25527;
chunk__25484_25505 = G__25528;
count__25485_25506 = G__25529;
i__25486_25507 = G__25530;
continue;
}
}
} else
{}
}
break;
}
{
var G__25531 = seq__25472_25497;
var G__25532 = chunk__25479_25498;
var G__25533 = count__25480_25499;
var G__25534 = (i__25481_25500 + 1);
seq__25472_25497 = G__25531;
chunk__25479_25498 = G__25532;
count__25480_25499 = G__25533;
i__25481_25500 = G__25534;
continue;
}
} else
{var temp__4092__auto___25535 = cljs.core.seq.call(null,seq__25472_25497);if(temp__4092__auto___25535)
{var seq__25472_25536__$1 = temp__4092__auto___25535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25472_25536__$1))
{var c__8974__auto___25537 = cljs.core.chunk_first.call(null,seq__25472_25536__$1);{
var G__25538 = cljs.core.chunk_rest.call(null,seq__25472_25536__$1);
var G__25539 = c__8974__auto___25537;
var G__25540 = cljs.core.count.call(null,c__8974__auto___25537);
var G__25541 = 0;
seq__25472_25497 = G__25538;
chunk__25479_25498 = G__25539;
count__25480_25499 = G__25540;
i__25481_25500 = G__25541;
continue;
}
} else
{var vec__25491_25542 = cljs.core.first.call(null,seq__25472_25536__$1);var orig_type_25543 = cljs.core.nth.call(null,vec__25491_25542,0,null);var f_25544 = cljs.core.nth.call(null,vec__25491_25542,1,null);var seq__25473_25545 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25543,new cljs.core.PersistentArrayMap.fromArray([orig_type_25543,cljs.core.identity], true, false)));var chunk__25475_25546 = null;var count__25476_25547 = 0;var i__25477_25548 = 0;while(true){
if((i__25477_25548 < count__25476_25547))
{var vec__25492_25549 = cljs.core._nth.call(null,chunk__25475_25546,i__25477_25548);var actual_type_25550 = cljs.core.nth.call(null,vec__25492_25549,0,null);var factory_25551 = cljs.core.nth.call(null,vec__25492_25549,1,null);var canonical_f_25552 = (cljs.core.truth_(selector_25496)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25495,selector_25496):cljs.core.identity).call(null,factory_25551.call(null,f_25544));dommy.core.update_event_listeners_BANG_.call(null,elem_25495,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25496,actual_type_25550,f_25544], null),canonical_f_25552);
if(cljs.core.truth_(elem_25495.addEventListener))
{elem_25495.addEventListener(cljs.core.name.call(null,actual_type_25550),canonical_f_25552);
} else
{elem_25495.attachEvent(cljs.core.name.call(null,actual_type_25550),canonical_f_25552);
}
{
var G__25553 = seq__25473_25545;
var G__25554 = chunk__25475_25546;
var G__25555 = count__25476_25547;
var G__25556 = (i__25477_25548 + 1);
seq__25473_25545 = G__25553;
chunk__25475_25546 = G__25554;
count__25476_25547 = G__25555;
i__25477_25548 = G__25556;
continue;
}
} else
{var temp__4092__auto___25557__$1 = cljs.core.seq.call(null,seq__25473_25545);if(temp__4092__auto___25557__$1)
{var seq__25473_25558__$1 = temp__4092__auto___25557__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25473_25558__$1))
{var c__8974__auto___25559 = cljs.core.chunk_first.call(null,seq__25473_25558__$1);{
var G__25560 = cljs.core.chunk_rest.call(null,seq__25473_25558__$1);
var G__25561 = c__8974__auto___25559;
var G__25562 = cljs.core.count.call(null,c__8974__auto___25559);
var G__25563 = 0;
seq__25473_25545 = G__25560;
chunk__25475_25546 = G__25561;
count__25476_25547 = G__25562;
i__25477_25548 = G__25563;
continue;
}
} else
{var vec__25493_25564 = cljs.core.first.call(null,seq__25473_25558__$1);var actual_type_25565 = cljs.core.nth.call(null,vec__25493_25564,0,null);var factory_25566 = cljs.core.nth.call(null,vec__25493_25564,1,null);var canonical_f_25567 = (cljs.core.truth_(selector_25496)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25495,selector_25496):cljs.core.identity).call(null,factory_25566.call(null,f_25544));dommy.core.update_event_listeners_BANG_.call(null,elem_25495,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25496,actual_type_25565,f_25544], null),canonical_f_25567);
if(cljs.core.truth_(elem_25495.addEventListener))
{elem_25495.addEventListener(cljs.core.name.call(null,actual_type_25565),canonical_f_25567);
} else
{elem_25495.attachEvent(cljs.core.name.call(null,actual_type_25565),canonical_f_25567);
}
{
var G__25568 = cljs.core.next.call(null,seq__25473_25558__$1);
var G__25569 = null;
var G__25570 = 0;
var G__25571 = 0;
seq__25473_25545 = G__25568;
chunk__25475_25546 = G__25569;
count__25476_25547 = G__25570;
i__25477_25548 = G__25571;
continue;
}
}
} else
{}
}
break;
}
{
var G__25572 = cljs.core.next.call(null,seq__25472_25536__$1);
var G__25573 = null;
var G__25574 = 0;
var G__25575 = 0;
seq__25472_25497 = G__25572;
chunk__25479_25498 = G__25573;
count__25480_25499 = G__25574;
i__25481_25500 = G__25575;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__25576){
var elem_sel = cljs.core.first(arglist__25576);
var type_fs = cljs.core.rest(arglist__25576);
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
var vec__25600_25623 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25624 = cljs.core.nth.call(null,vec__25600_25623,0,null);var selector_25625 = cljs.core.nth.call(null,vec__25600_25623,1,null);var seq__25601_25626 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25608_25627 = null;var count__25609_25628 = 0;var i__25610_25629 = 0;while(true){
if((i__25610_25629 < count__25609_25628))
{var vec__25617_25630 = cljs.core._nth.call(null,chunk__25608_25627,i__25610_25629);var orig_type_25631 = cljs.core.nth.call(null,vec__25617_25630,0,null);var f_25632 = cljs.core.nth.call(null,vec__25617_25630,1,null);var seq__25611_25633 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25631,new cljs.core.PersistentArrayMap.fromArray([orig_type_25631,cljs.core.identity], true, false)));var chunk__25613_25634 = null;var count__25614_25635 = 0;var i__25615_25636 = 0;while(true){
if((i__25615_25636 < count__25614_25635))
{var vec__25618_25637 = cljs.core._nth.call(null,chunk__25613_25634,i__25615_25636);var actual_type_25638 = cljs.core.nth.call(null,vec__25618_25637,0,null);var __25639 = cljs.core.nth.call(null,vec__25618_25637,1,null);var keys_25640 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25625,actual_type_25638,f_25632], null);var canonical_f_25641 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25624),keys_25640);dommy.core.update_event_listeners_BANG_.call(null,elem_25624,dommy.utils.dissoc_in,keys_25640);
if(cljs.core.truth_(elem_25624.removeEventListener))
{elem_25624.removeEventListener(cljs.core.name.call(null,actual_type_25638),canonical_f_25641);
} else
{elem_25624.detachEvent(cljs.core.name.call(null,actual_type_25638),canonical_f_25641);
}
{
var G__25642 = seq__25611_25633;
var G__25643 = chunk__25613_25634;
var G__25644 = count__25614_25635;
var G__25645 = (i__25615_25636 + 1);
seq__25611_25633 = G__25642;
chunk__25613_25634 = G__25643;
count__25614_25635 = G__25644;
i__25615_25636 = G__25645;
continue;
}
} else
{var temp__4092__auto___25646 = cljs.core.seq.call(null,seq__25611_25633);if(temp__4092__auto___25646)
{var seq__25611_25647__$1 = temp__4092__auto___25646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25611_25647__$1))
{var c__8974__auto___25648 = cljs.core.chunk_first.call(null,seq__25611_25647__$1);{
var G__25649 = cljs.core.chunk_rest.call(null,seq__25611_25647__$1);
var G__25650 = c__8974__auto___25648;
var G__25651 = cljs.core.count.call(null,c__8974__auto___25648);
var G__25652 = 0;
seq__25611_25633 = G__25649;
chunk__25613_25634 = G__25650;
count__25614_25635 = G__25651;
i__25615_25636 = G__25652;
continue;
}
} else
{var vec__25619_25653 = cljs.core.first.call(null,seq__25611_25647__$1);var actual_type_25654 = cljs.core.nth.call(null,vec__25619_25653,0,null);var __25655 = cljs.core.nth.call(null,vec__25619_25653,1,null);var keys_25656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25625,actual_type_25654,f_25632], null);var canonical_f_25657 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25624),keys_25656);dommy.core.update_event_listeners_BANG_.call(null,elem_25624,dommy.utils.dissoc_in,keys_25656);
if(cljs.core.truth_(elem_25624.removeEventListener))
{elem_25624.removeEventListener(cljs.core.name.call(null,actual_type_25654),canonical_f_25657);
} else
{elem_25624.detachEvent(cljs.core.name.call(null,actual_type_25654),canonical_f_25657);
}
{
var G__25658 = cljs.core.next.call(null,seq__25611_25647__$1);
var G__25659 = null;
var G__25660 = 0;
var G__25661 = 0;
seq__25611_25633 = G__25658;
chunk__25613_25634 = G__25659;
count__25614_25635 = G__25660;
i__25615_25636 = G__25661;
continue;
}
}
} else
{}
}
break;
}
{
var G__25662 = seq__25601_25626;
var G__25663 = chunk__25608_25627;
var G__25664 = count__25609_25628;
var G__25665 = (i__25610_25629 + 1);
seq__25601_25626 = G__25662;
chunk__25608_25627 = G__25663;
count__25609_25628 = G__25664;
i__25610_25629 = G__25665;
continue;
}
} else
{var temp__4092__auto___25666 = cljs.core.seq.call(null,seq__25601_25626);if(temp__4092__auto___25666)
{var seq__25601_25667__$1 = temp__4092__auto___25666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25601_25667__$1))
{var c__8974__auto___25668 = cljs.core.chunk_first.call(null,seq__25601_25667__$1);{
var G__25669 = cljs.core.chunk_rest.call(null,seq__25601_25667__$1);
var G__25670 = c__8974__auto___25668;
var G__25671 = cljs.core.count.call(null,c__8974__auto___25668);
var G__25672 = 0;
seq__25601_25626 = G__25669;
chunk__25608_25627 = G__25670;
count__25609_25628 = G__25671;
i__25610_25629 = G__25672;
continue;
}
} else
{var vec__25620_25673 = cljs.core.first.call(null,seq__25601_25667__$1);var orig_type_25674 = cljs.core.nth.call(null,vec__25620_25673,0,null);var f_25675 = cljs.core.nth.call(null,vec__25620_25673,1,null);var seq__25602_25676 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25674,new cljs.core.PersistentArrayMap.fromArray([orig_type_25674,cljs.core.identity], true, false)));var chunk__25604_25677 = null;var count__25605_25678 = 0;var i__25606_25679 = 0;while(true){
if((i__25606_25679 < count__25605_25678))
{var vec__25621_25680 = cljs.core._nth.call(null,chunk__25604_25677,i__25606_25679);var actual_type_25681 = cljs.core.nth.call(null,vec__25621_25680,0,null);var __25682 = cljs.core.nth.call(null,vec__25621_25680,1,null);var keys_25683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25625,actual_type_25681,f_25675], null);var canonical_f_25684 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25624),keys_25683);dommy.core.update_event_listeners_BANG_.call(null,elem_25624,dommy.utils.dissoc_in,keys_25683);
if(cljs.core.truth_(elem_25624.removeEventListener))
{elem_25624.removeEventListener(cljs.core.name.call(null,actual_type_25681),canonical_f_25684);
} else
{elem_25624.detachEvent(cljs.core.name.call(null,actual_type_25681),canonical_f_25684);
}
{
var G__25685 = seq__25602_25676;
var G__25686 = chunk__25604_25677;
var G__25687 = count__25605_25678;
var G__25688 = (i__25606_25679 + 1);
seq__25602_25676 = G__25685;
chunk__25604_25677 = G__25686;
count__25605_25678 = G__25687;
i__25606_25679 = G__25688;
continue;
}
} else
{var temp__4092__auto___25689__$1 = cljs.core.seq.call(null,seq__25602_25676);if(temp__4092__auto___25689__$1)
{var seq__25602_25690__$1 = temp__4092__auto___25689__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25602_25690__$1))
{var c__8974__auto___25691 = cljs.core.chunk_first.call(null,seq__25602_25690__$1);{
var G__25692 = cljs.core.chunk_rest.call(null,seq__25602_25690__$1);
var G__25693 = c__8974__auto___25691;
var G__25694 = cljs.core.count.call(null,c__8974__auto___25691);
var G__25695 = 0;
seq__25602_25676 = G__25692;
chunk__25604_25677 = G__25693;
count__25605_25678 = G__25694;
i__25606_25679 = G__25695;
continue;
}
} else
{var vec__25622_25696 = cljs.core.first.call(null,seq__25602_25690__$1);var actual_type_25697 = cljs.core.nth.call(null,vec__25622_25696,0,null);var __25698 = cljs.core.nth.call(null,vec__25622_25696,1,null);var keys_25699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25625,actual_type_25697,f_25675], null);var canonical_f_25700 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25624),keys_25699);dommy.core.update_event_listeners_BANG_.call(null,elem_25624,dommy.utils.dissoc_in,keys_25699);
if(cljs.core.truth_(elem_25624.removeEventListener))
{elem_25624.removeEventListener(cljs.core.name.call(null,actual_type_25697),canonical_f_25700);
} else
{elem_25624.detachEvent(cljs.core.name.call(null,actual_type_25697),canonical_f_25700);
}
{
var G__25701 = cljs.core.next.call(null,seq__25602_25690__$1);
var G__25702 = null;
var G__25703 = 0;
var G__25704 = 0;
seq__25602_25676 = G__25701;
chunk__25604_25677 = G__25702;
count__25605_25678 = G__25703;
i__25606_25679 = G__25704;
continue;
}
}
} else
{}
}
break;
}
{
var G__25705 = cljs.core.next.call(null,seq__25601_25667__$1);
var G__25706 = null;
var G__25707 = 0;
var G__25708 = 0;
seq__25601_25626 = G__25705;
chunk__25608_25627 = G__25706;
count__25609_25628 = G__25707;
i__25610_25629 = G__25708;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__25709){
var elem_sel = cljs.core.first(arglist__25709);
var type_fs = cljs.core.rest(arglist__25709);
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
var vec__25717_25724 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_25725 = cljs.core.nth.call(null,vec__25717_25724,0,null);var selector_25726 = cljs.core.nth.call(null,vec__25717_25724,1,null);var seq__25718_25727 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__25719_25728 = null;var count__25720_25729 = 0;var i__25721_25730 = 0;while(true){
if((i__25721_25730 < count__25720_25729))
{var vec__25722_25731 = cljs.core._nth.call(null,chunk__25719_25728,i__25721_25730);var type_25732 = cljs.core.nth.call(null,vec__25722_25731,0,null);var f_25733 = cljs.core.nth.call(null,vec__25722_25731,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25732,((function (seq__25718_25727,chunk__25719_25728,count__25720_25729,i__25721_25730,vec__25722_25731,type_25732,f_25733){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25732,this_fn);
return f_25733.call(null,e);
});})(seq__25718_25727,chunk__25719_25728,count__25720_25729,i__25721_25730,vec__25722_25731,type_25732,f_25733))
);
{
var G__25734 = seq__25718_25727;
var G__25735 = chunk__25719_25728;
var G__25736 = count__25720_25729;
var G__25737 = (i__25721_25730 + 1);
seq__25718_25727 = G__25734;
chunk__25719_25728 = G__25735;
count__25720_25729 = G__25736;
i__25721_25730 = G__25737;
continue;
}
} else
{var temp__4092__auto___25738 = cljs.core.seq.call(null,seq__25718_25727);if(temp__4092__auto___25738)
{var seq__25718_25739__$1 = temp__4092__auto___25738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25718_25739__$1))
{var c__8974__auto___25740 = cljs.core.chunk_first.call(null,seq__25718_25739__$1);{
var G__25741 = cljs.core.chunk_rest.call(null,seq__25718_25739__$1);
var G__25742 = c__8974__auto___25740;
var G__25743 = cljs.core.count.call(null,c__8974__auto___25740);
var G__25744 = 0;
seq__25718_25727 = G__25741;
chunk__25719_25728 = G__25742;
count__25720_25729 = G__25743;
i__25721_25730 = G__25744;
continue;
}
} else
{var vec__25723_25745 = cljs.core.first.call(null,seq__25718_25739__$1);var type_25746 = cljs.core.nth.call(null,vec__25723_25745,0,null);var f_25747 = cljs.core.nth.call(null,vec__25723_25745,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_25746,((function (seq__25718_25727,chunk__25719_25728,count__25720_25729,i__25721_25730,vec__25723_25745,type_25746,f_25747,seq__25718_25739__$1,temp__4092__auto___25738){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_25746,this_fn);
return f_25747.call(null,e);
});})(seq__25718_25727,chunk__25719_25728,count__25720_25729,i__25721_25730,vec__25723_25745,type_25746,f_25747,seq__25718_25739__$1,temp__4092__auto___25738))
);
{
var G__25748 = cljs.core.next.call(null,seq__25718_25739__$1);
var G__25749 = null;
var G__25750 = 0;
var G__25751 = 0;
seq__25718_25727 = G__25748;
chunk__25719_25728 = G__25749;
count__25720_25729 = G__25750;
i__25721_25730 = G__25751;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__25752){
var elem_sel = cljs.core.first(arglist__25752);
var type_fs = cljs.core.rest(arglist__25752);
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
var fire_BANG___delegate = function (node,event_type,p__25753){var vec__25755 = p__25753;var update_event_BANG_ = cljs.core.nth.call(null,vec__25755,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8245__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
var p__25753 = null;if (arguments.length > 2) {
  p__25753 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__25753);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__25756){
var node = cljs.core.first(arglist__25756);
arglist__25756 = cljs.core.next(arglist__25756);
var event_type = cljs.core.first(arglist__25756);
var p__25753 = cljs.core.rest(arglist__25756);
return fire_BANG___delegate(node,event_type,p__25753);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map