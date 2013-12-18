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
dommy.core.text = (function text(elem){var or__8228__auto__ = elem.textContent;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
var append_BANG___2 = (function (parent,child){var G__28345 = dommy.template.__GT_node_like.call(null,parent);G__28345.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__28345;
});
var append_BANG___3 = (function() { 
var G__28350__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28346_28351 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28347_28352 = null;var count__28348_28353 = 0;var i__28349_28354 = 0;while(true){
if((i__28349_28354 < count__28348_28353))
{var c_28355 = cljs.core._nth.call(null,chunk__28347_28352,i__28349_28354);append_BANG_.call(null,parent__$1,c_28355);
{
var G__28356 = seq__28346_28351;
var G__28357 = chunk__28347_28352;
var G__28358 = count__28348_28353;
var G__28359 = (i__28349_28354 + 1);
seq__28346_28351 = G__28356;
chunk__28347_28352 = G__28357;
count__28348_28353 = G__28358;
i__28349_28354 = G__28359;
continue;
}
} else
{var temp__4092__auto___28360 = cljs.core.seq.call(null,seq__28346_28351);if(temp__4092__auto___28360)
{var seq__28346_28361__$1 = temp__4092__auto___28360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28346_28361__$1))
{var c__8957__auto___28362 = cljs.core.chunk_first.call(null,seq__28346_28361__$1);{
var G__28363 = cljs.core.chunk_rest.call(null,seq__28346_28361__$1);
var G__28364 = c__8957__auto___28362;
var G__28365 = cljs.core.count.call(null,c__8957__auto___28362);
var G__28366 = 0;
seq__28346_28351 = G__28363;
chunk__28347_28352 = G__28364;
count__28348_28353 = G__28365;
i__28349_28354 = G__28366;
continue;
}
} else
{var c_28367 = cljs.core.first.call(null,seq__28346_28361__$1);append_BANG_.call(null,parent__$1,c_28367);
{
var G__28368 = cljs.core.next.call(null,seq__28346_28361__$1);
var G__28369 = null;
var G__28370 = 0;
var G__28371 = 0;
seq__28346_28351 = G__28368;
chunk__28347_28352 = G__28369;
count__28348_28353 = G__28370;
i__28349_28354 = G__28371;
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
var G__28350 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28350__delegate.call(this,parent,child,more_children);};
G__28350.cljs$lang$maxFixedArity = 2;
G__28350.cljs$lang$applyTo = (function (arglist__28372){
var parent = cljs.core.first(arglist__28372);
arglist__28372 = cljs.core.next(arglist__28372);
var child = cljs.core.first(arglist__28372);
var more_children = cljs.core.rest(arglist__28372);
return G__28350__delegate(parent,child,more_children);
});
G__28350.cljs$core$IFn$_invoke$arity$variadic = G__28350__delegate;
return G__28350;
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
var G__28381__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28377_28382 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28378_28383 = null;var count__28379_28384 = 0;var i__28380_28385 = 0;while(true){
if((i__28380_28385 < count__28379_28384))
{var c_28386 = cljs.core._nth.call(null,chunk__28378_28383,i__28380_28385);prepend_BANG_.call(null,parent__$1,c_28386);
{
var G__28387 = seq__28377_28382;
var G__28388 = chunk__28378_28383;
var G__28389 = count__28379_28384;
var G__28390 = (i__28380_28385 + 1);
seq__28377_28382 = G__28387;
chunk__28378_28383 = G__28388;
count__28379_28384 = G__28389;
i__28380_28385 = G__28390;
continue;
}
} else
{var temp__4092__auto___28391 = cljs.core.seq.call(null,seq__28377_28382);if(temp__4092__auto___28391)
{var seq__28377_28392__$1 = temp__4092__auto___28391;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28377_28392__$1))
{var c__8957__auto___28393 = cljs.core.chunk_first.call(null,seq__28377_28392__$1);{
var G__28394 = cljs.core.chunk_rest.call(null,seq__28377_28392__$1);
var G__28395 = c__8957__auto___28393;
var G__28396 = cljs.core.count.call(null,c__8957__auto___28393);
var G__28397 = 0;
seq__28377_28382 = G__28394;
chunk__28378_28383 = G__28395;
count__28379_28384 = G__28396;
i__28380_28385 = G__28397;
continue;
}
} else
{var c_28398 = cljs.core.first.call(null,seq__28377_28392__$1);prepend_BANG_.call(null,parent__$1,c_28398);
{
var G__28399 = cljs.core.next.call(null,seq__28377_28392__$1);
var G__28400 = null;
var G__28401 = 0;
var G__28402 = 0;
seq__28377_28382 = G__28399;
chunk__28378_28383 = G__28400;
count__28379_28384 = G__28401;
i__28380_28385 = G__28402;
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
var G__28381 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28381__delegate.call(this,parent,child,more_children);};
G__28381.cljs$lang$maxFixedArity = 2;
G__28381.cljs$lang$applyTo = (function (arglist__28403){
var parent = cljs.core.first(arglist__28403);
arglist__28403 = cljs.core.next(arglist__28403);
var child = cljs.core.first(arglist__28403);
var more_children = cljs.core.rest(arglist__28403);
return G__28381__delegate(parent,child,more_children);
});
G__28381.cljs$core$IFn$_invoke$arity$variadic = G__28381__delegate;
return G__28381;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___28404 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___28404))
{var next_28405 = temp__4090__auto___28404;parent.insertBefore(actual_node,next_28405);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__28407 = dommy.template.__GT_node_like.call(null,parent);G__28407.innerHTML = "";
dommy.core.append_BANG_.call(null,G__28407,node_like);
return G__28407;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__28409 = elem__$1.parentNode;G__28409.removeChild(elem__$1);
return G__28409;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28415){var vec__28416 = p__28415;var k = cljs.core.nth.call(null,vec__28416,0,null);var v = cljs.core.nth.call(null,vec__28416,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t28417 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t28417 = (function (v,k,vec__28416,p__28415,container,key_selectors_map,template,selector_map,meta28418){
this.v = v;
this.k = k;
this.vec__28416 = vec__28416;
this.p__28415 = p__28415;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28417.cljs$lang$type = true;
dommy.core.t28417.cljs$lang$ctorStr = "dommy.core/t28417";
dommy.core.t28417.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"dommy.core/t28417");
});
dommy.core.t28417.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t28417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28419){var self__ = this;
var _28419__$1 = this;return self__.meta28418;
});
dommy.core.t28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28419,meta28418__$1){var self__ = this;
var _28419__$1 = this;return (new dommy.core.t28417(self__.v,self__.k,self__.vec__28416,self__.p__28415,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28418__$1));
});
dommy.core.__GT_t28417 = (function __GT_t28417(v__$1,k__$1,vec__28416__$1,p__28415__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28418){return (new dommy.core.t28417(v__$1,k__$1,vec__28416__$1,p__28415__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28418));
});
}
return (new dommy.core.t28417(v,k,vec__28416,p__28415,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28420_SHARP_){return p1__28420_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__28421_SHARP_){return !((p1__28421_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28422){var vec__28423 = p__28422;var special_mouse_event = cljs.core.nth.call(null,vec__28423,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__28423,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8228__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8216__auto__ = related_target;if(cljs.core.truth_(and__8216__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8216__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8216__auto__ = selected_target;if(cljs.core.truth_(and__8216__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8216__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8228__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28424){
var elem = cljs.core.first(arglist__28424);
arglist__28424 = cljs.core.next(arglist__28424);
var f = cljs.core.first(arglist__28424);
var args = cljs.core.rest(arglist__28424);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__28425_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28425_SHARP_));
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
var vec__28449_28472 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28473 = cljs.core.nth.call(null,vec__28449_28472,0,null);var selector_28474 = cljs.core.nth.call(null,vec__28449_28472,1,null);var seq__28450_28475 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28457_28476 = null;var count__28458_28477 = 0;var i__28459_28478 = 0;while(true){
if((i__28459_28478 < count__28458_28477))
{var vec__28466_28479 = cljs.core._nth.call(null,chunk__28457_28476,i__28459_28478);var orig_type_28480 = cljs.core.nth.call(null,vec__28466_28479,0,null);var f_28481 = cljs.core.nth.call(null,vec__28466_28479,1,null);var seq__28460_28482 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28480,new cljs.core.PersistentArrayMap.fromArray([orig_type_28480,cljs.core.identity], true, false)));var chunk__28462_28483 = null;var count__28463_28484 = 0;var i__28464_28485 = 0;while(true){
if((i__28464_28485 < count__28463_28484))
{var vec__28467_28486 = cljs.core._nth.call(null,chunk__28462_28483,i__28464_28485);var actual_type_28487 = cljs.core.nth.call(null,vec__28467_28486,0,null);var factory_28488 = cljs.core.nth.call(null,vec__28467_28486,1,null);var canonical_f_28489 = (cljs.core.truth_(selector_28474)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28473,selector_28474):cljs.core.identity).call(null,factory_28488.call(null,f_28481));dommy.core.update_event_listeners_BANG_.call(null,elem_28473,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28474,actual_type_28487,f_28481], null),canonical_f_28489);
if(cljs.core.truth_(elem_28473.addEventListener))
{elem_28473.addEventListener(cljs.core.name.call(null,actual_type_28487),canonical_f_28489);
} else
{elem_28473.attachEvent(cljs.core.name.call(null,actual_type_28487),canonical_f_28489);
}
{
var G__28490 = seq__28460_28482;
var G__28491 = chunk__28462_28483;
var G__28492 = count__28463_28484;
var G__28493 = (i__28464_28485 + 1);
seq__28460_28482 = G__28490;
chunk__28462_28483 = G__28491;
count__28463_28484 = G__28492;
i__28464_28485 = G__28493;
continue;
}
} else
{var temp__4092__auto___28494 = cljs.core.seq.call(null,seq__28460_28482);if(temp__4092__auto___28494)
{var seq__28460_28495__$1 = temp__4092__auto___28494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28460_28495__$1))
{var c__8957__auto___28496 = cljs.core.chunk_first.call(null,seq__28460_28495__$1);{
var G__28497 = cljs.core.chunk_rest.call(null,seq__28460_28495__$1);
var G__28498 = c__8957__auto___28496;
var G__28499 = cljs.core.count.call(null,c__8957__auto___28496);
var G__28500 = 0;
seq__28460_28482 = G__28497;
chunk__28462_28483 = G__28498;
count__28463_28484 = G__28499;
i__28464_28485 = G__28500;
continue;
}
} else
{var vec__28468_28501 = cljs.core.first.call(null,seq__28460_28495__$1);var actual_type_28502 = cljs.core.nth.call(null,vec__28468_28501,0,null);var factory_28503 = cljs.core.nth.call(null,vec__28468_28501,1,null);var canonical_f_28504 = (cljs.core.truth_(selector_28474)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28473,selector_28474):cljs.core.identity).call(null,factory_28503.call(null,f_28481));dommy.core.update_event_listeners_BANG_.call(null,elem_28473,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28474,actual_type_28502,f_28481], null),canonical_f_28504);
if(cljs.core.truth_(elem_28473.addEventListener))
{elem_28473.addEventListener(cljs.core.name.call(null,actual_type_28502),canonical_f_28504);
} else
{elem_28473.attachEvent(cljs.core.name.call(null,actual_type_28502),canonical_f_28504);
}
{
var G__28505 = cljs.core.next.call(null,seq__28460_28495__$1);
var G__28506 = null;
var G__28507 = 0;
var G__28508 = 0;
seq__28460_28482 = G__28505;
chunk__28462_28483 = G__28506;
count__28463_28484 = G__28507;
i__28464_28485 = G__28508;
continue;
}
}
} else
{}
}
break;
}
{
var G__28509 = seq__28450_28475;
var G__28510 = chunk__28457_28476;
var G__28511 = count__28458_28477;
var G__28512 = (i__28459_28478 + 1);
seq__28450_28475 = G__28509;
chunk__28457_28476 = G__28510;
count__28458_28477 = G__28511;
i__28459_28478 = G__28512;
continue;
}
} else
{var temp__4092__auto___28513 = cljs.core.seq.call(null,seq__28450_28475);if(temp__4092__auto___28513)
{var seq__28450_28514__$1 = temp__4092__auto___28513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28450_28514__$1))
{var c__8957__auto___28515 = cljs.core.chunk_first.call(null,seq__28450_28514__$1);{
var G__28516 = cljs.core.chunk_rest.call(null,seq__28450_28514__$1);
var G__28517 = c__8957__auto___28515;
var G__28518 = cljs.core.count.call(null,c__8957__auto___28515);
var G__28519 = 0;
seq__28450_28475 = G__28516;
chunk__28457_28476 = G__28517;
count__28458_28477 = G__28518;
i__28459_28478 = G__28519;
continue;
}
} else
{var vec__28469_28520 = cljs.core.first.call(null,seq__28450_28514__$1);var orig_type_28521 = cljs.core.nth.call(null,vec__28469_28520,0,null);var f_28522 = cljs.core.nth.call(null,vec__28469_28520,1,null);var seq__28451_28523 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28521,new cljs.core.PersistentArrayMap.fromArray([orig_type_28521,cljs.core.identity], true, false)));var chunk__28453_28524 = null;var count__28454_28525 = 0;var i__28455_28526 = 0;while(true){
if((i__28455_28526 < count__28454_28525))
{var vec__28470_28527 = cljs.core._nth.call(null,chunk__28453_28524,i__28455_28526);var actual_type_28528 = cljs.core.nth.call(null,vec__28470_28527,0,null);var factory_28529 = cljs.core.nth.call(null,vec__28470_28527,1,null);var canonical_f_28530 = (cljs.core.truth_(selector_28474)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28473,selector_28474):cljs.core.identity).call(null,factory_28529.call(null,f_28522));dommy.core.update_event_listeners_BANG_.call(null,elem_28473,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28474,actual_type_28528,f_28522], null),canonical_f_28530);
if(cljs.core.truth_(elem_28473.addEventListener))
{elem_28473.addEventListener(cljs.core.name.call(null,actual_type_28528),canonical_f_28530);
} else
{elem_28473.attachEvent(cljs.core.name.call(null,actual_type_28528),canonical_f_28530);
}
{
var G__28531 = seq__28451_28523;
var G__28532 = chunk__28453_28524;
var G__28533 = count__28454_28525;
var G__28534 = (i__28455_28526 + 1);
seq__28451_28523 = G__28531;
chunk__28453_28524 = G__28532;
count__28454_28525 = G__28533;
i__28455_28526 = G__28534;
continue;
}
} else
{var temp__4092__auto___28535__$1 = cljs.core.seq.call(null,seq__28451_28523);if(temp__4092__auto___28535__$1)
{var seq__28451_28536__$1 = temp__4092__auto___28535__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28451_28536__$1))
{var c__8957__auto___28537 = cljs.core.chunk_first.call(null,seq__28451_28536__$1);{
var G__28538 = cljs.core.chunk_rest.call(null,seq__28451_28536__$1);
var G__28539 = c__8957__auto___28537;
var G__28540 = cljs.core.count.call(null,c__8957__auto___28537);
var G__28541 = 0;
seq__28451_28523 = G__28538;
chunk__28453_28524 = G__28539;
count__28454_28525 = G__28540;
i__28455_28526 = G__28541;
continue;
}
} else
{var vec__28471_28542 = cljs.core.first.call(null,seq__28451_28536__$1);var actual_type_28543 = cljs.core.nth.call(null,vec__28471_28542,0,null);var factory_28544 = cljs.core.nth.call(null,vec__28471_28542,1,null);var canonical_f_28545 = (cljs.core.truth_(selector_28474)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28473,selector_28474):cljs.core.identity).call(null,factory_28544.call(null,f_28522));dommy.core.update_event_listeners_BANG_.call(null,elem_28473,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28474,actual_type_28543,f_28522], null),canonical_f_28545);
if(cljs.core.truth_(elem_28473.addEventListener))
{elem_28473.addEventListener(cljs.core.name.call(null,actual_type_28543),canonical_f_28545);
} else
{elem_28473.attachEvent(cljs.core.name.call(null,actual_type_28543),canonical_f_28545);
}
{
var G__28546 = cljs.core.next.call(null,seq__28451_28536__$1);
var G__28547 = null;
var G__28548 = 0;
var G__28549 = 0;
seq__28451_28523 = G__28546;
chunk__28453_28524 = G__28547;
count__28454_28525 = G__28548;
i__28455_28526 = G__28549;
continue;
}
}
} else
{}
}
break;
}
{
var G__28550 = cljs.core.next.call(null,seq__28450_28514__$1);
var G__28551 = null;
var G__28552 = 0;
var G__28553 = 0;
seq__28450_28475 = G__28550;
chunk__28457_28476 = G__28551;
count__28458_28477 = G__28552;
i__28459_28478 = G__28553;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__28554){
var elem_sel = cljs.core.first(arglist__28554);
var type_fs = cljs.core.rest(arglist__28554);
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
var vec__28578_28601 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28602 = cljs.core.nth.call(null,vec__28578_28601,0,null);var selector_28603 = cljs.core.nth.call(null,vec__28578_28601,1,null);var seq__28579_28604 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28586_28605 = null;var count__28587_28606 = 0;var i__28588_28607 = 0;while(true){
if((i__28588_28607 < count__28587_28606))
{var vec__28595_28608 = cljs.core._nth.call(null,chunk__28586_28605,i__28588_28607);var orig_type_28609 = cljs.core.nth.call(null,vec__28595_28608,0,null);var f_28610 = cljs.core.nth.call(null,vec__28595_28608,1,null);var seq__28589_28611 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28609,new cljs.core.PersistentArrayMap.fromArray([orig_type_28609,cljs.core.identity], true, false)));var chunk__28591_28612 = null;var count__28592_28613 = 0;var i__28593_28614 = 0;while(true){
if((i__28593_28614 < count__28592_28613))
{var vec__28596_28615 = cljs.core._nth.call(null,chunk__28591_28612,i__28593_28614);var actual_type_28616 = cljs.core.nth.call(null,vec__28596_28615,0,null);var __28617 = cljs.core.nth.call(null,vec__28596_28615,1,null);var keys_28618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28603,actual_type_28616,f_28610], null);var canonical_f_28619 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28602),keys_28618);dommy.core.update_event_listeners_BANG_.call(null,elem_28602,dommy.utils.dissoc_in,keys_28618);
if(cljs.core.truth_(elem_28602.removeEventListener))
{elem_28602.removeEventListener(cljs.core.name.call(null,actual_type_28616),canonical_f_28619);
} else
{elem_28602.detachEvent(cljs.core.name.call(null,actual_type_28616),canonical_f_28619);
}
{
var G__28620 = seq__28589_28611;
var G__28621 = chunk__28591_28612;
var G__28622 = count__28592_28613;
var G__28623 = (i__28593_28614 + 1);
seq__28589_28611 = G__28620;
chunk__28591_28612 = G__28621;
count__28592_28613 = G__28622;
i__28593_28614 = G__28623;
continue;
}
} else
{var temp__4092__auto___28624 = cljs.core.seq.call(null,seq__28589_28611);if(temp__4092__auto___28624)
{var seq__28589_28625__$1 = temp__4092__auto___28624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28589_28625__$1))
{var c__8957__auto___28626 = cljs.core.chunk_first.call(null,seq__28589_28625__$1);{
var G__28627 = cljs.core.chunk_rest.call(null,seq__28589_28625__$1);
var G__28628 = c__8957__auto___28626;
var G__28629 = cljs.core.count.call(null,c__8957__auto___28626);
var G__28630 = 0;
seq__28589_28611 = G__28627;
chunk__28591_28612 = G__28628;
count__28592_28613 = G__28629;
i__28593_28614 = G__28630;
continue;
}
} else
{var vec__28597_28631 = cljs.core.first.call(null,seq__28589_28625__$1);var actual_type_28632 = cljs.core.nth.call(null,vec__28597_28631,0,null);var __28633 = cljs.core.nth.call(null,vec__28597_28631,1,null);var keys_28634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28603,actual_type_28632,f_28610], null);var canonical_f_28635 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28602),keys_28634);dommy.core.update_event_listeners_BANG_.call(null,elem_28602,dommy.utils.dissoc_in,keys_28634);
if(cljs.core.truth_(elem_28602.removeEventListener))
{elem_28602.removeEventListener(cljs.core.name.call(null,actual_type_28632),canonical_f_28635);
} else
{elem_28602.detachEvent(cljs.core.name.call(null,actual_type_28632),canonical_f_28635);
}
{
var G__28636 = cljs.core.next.call(null,seq__28589_28625__$1);
var G__28637 = null;
var G__28638 = 0;
var G__28639 = 0;
seq__28589_28611 = G__28636;
chunk__28591_28612 = G__28637;
count__28592_28613 = G__28638;
i__28593_28614 = G__28639;
continue;
}
}
} else
{}
}
break;
}
{
var G__28640 = seq__28579_28604;
var G__28641 = chunk__28586_28605;
var G__28642 = count__28587_28606;
var G__28643 = (i__28588_28607 + 1);
seq__28579_28604 = G__28640;
chunk__28586_28605 = G__28641;
count__28587_28606 = G__28642;
i__28588_28607 = G__28643;
continue;
}
} else
{var temp__4092__auto___28644 = cljs.core.seq.call(null,seq__28579_28604);if(temp__4092__auto___28644)
{var seq__28579_28645__$1 = temp__4092__auto___28644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28579_28645__$1))
{var c__8957__auto___28646 = cljs.core.chunk_first.call(null,seq__28579_28645__$1);{
var G__28647 = cljs.core.chunk_rest.call(null,seq__28579_28645__$1);
var G__28648 = c__8957__auto___28646;
var G__28649 = cljs.core.count.call(null,c__8957__auto___28646);
var G__28650 = 0;
seq__28579_28604 = G__28647;
chunk__28586_28605 = G__28648;
count__28587_28606 = G__28649;
i__28588_28607 = G__28650;
continue;
}
} else
{var vec__28598_28651 = cljs.core.first.call(null,seq__28579_28645__$1);var orig_type_28652 = cljs.core.nth.call(null,vec__28598_28651,0,null);var f_28653 = cljs.core.nth.call(null,vec__28598_28651,1,null);var seq__28580_28654 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28652,new cljs.core.PersistentArrayMap.fromArray([orig_type_28652,cljs.core.identity], true, false)));var chunk__28582_28655 = null;var count__28583_28656 = 0;var i__28584_28657 = 0;while(true){
if((i__28584_28657 < count__28583_28656))
{var vec__28599_28658 = cljs.core._nth.call(null,chunk__28582_28655,i__28584_28657);var actual_type_28659 = cljs.core.nth.call(null,vec__28599_28658,0,null);var __28660 = cljs.core.nth.call(null,vec__28599_28658,1,null);var keys_28661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28603,actual_type_28659,f_28653], null);var canonical_f_28662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28602),keys_28661);dommy.core.update_event_listeners_BANG_.call(null,elem_28602,dommy.utils.dissoc_in,keys_28661);
if(cljs.core.truth_(elem_28602.removeEventListener))
{elem_28602.removeEventListener(cljs.core.name.call(null,actual_type_28659),canonical_f_28662);
} else
{elem_28602.detachEvent(cljs.core.name.call(null,actual_type_28659),canonical_f_28662);
}
{
var G__28663 = seq__28580_28654;
var G__28664 = chunk__28582_28655;
var G__28665 = count__28583_28656;
var G__28666 = (i__28584_28657 + 1);
seq__28580_28654 = G__28663;
chunk__28582_28655 = G__28664;
count__28583_28656 = G__28665;
i__28584_28657 = G__28666;
continue;
}
} else
{var temp__4092__auto___28667__$1 = cljs.core.seq.call(null,seq__28580_28654);if(temp__4092__auto___28667__$1)
{var seq__28580_28668__$1 = temp__4092__auto___28667__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28580_28668__$1))
{var c__8957__auto___28669 = cljs.core.chunk_first.call(null,seq__28580_28668__$1);{
var G__28670 = cljs.core.chunk_rest.call(null,seq__28580_28668__$1);
var G__28671 = c__8957__auto___28669;
var G__28672 = cljs.core.count.call(null,c__8957__auto___28669);
var G__28673 = 0;
seq__28580_28654 = G__28670;
chunk__28582_28655 = G__28671;
count__28583_28656 = G__28672;
i__28584_28657 = G__28673;
continue;
}
} else
{var vec__28600_28674 = cljs.core.first.call(null,seq__28580_28668__$1);var actual_type_28675 = cljs.core.nth.call(null,vec__28600_28674,0,null);var __28676 = cljs.core.nth.call(null,vec__28600_28674,1,null);var keys_28677 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28603,actual_type_28675,f_28653], null);var canonical_f_28678 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28602),keys_28677);dommy.core.update_event_listeners_BANG_.call(null,elem_28602,dommy.utils.dissoc_in,keys_28677);
if(cljs.core.truth_(elem_28602.removeEventListener))
{elem_28602.removeEventListener(cljs.core.name.call(null,actual_type_28675),canonical_f_28678);
} else
{elem_28602.detachEvent(cljs.core.name.call(null,actual_type_28675),canonical_f_28678);
}
{
var G__28679 = cljs.core.next.call(null,seq__28580_28668__$1);
var G__28680 = null;
var G__28681 = 0;
var G__28682 = 0;
seq__28580_28654 = G__28679;
chunk__28582_28655 = G__28680;
count__28583_28656 = G__28681;
i__28584_28657 = G__28682;
continue;
}
}
} else
{}
}
break;
}
{
var G__28683 = cljs.core.next.call(null,seq__28579_28645__$1);
var G__28684 = null;
var G__28685 = 0;
var G__28686 = 0;
seq__28579_28604 = G__28683;
chunk__28586_28605 = G__28684;
count__28587_28606 = G__28685;
i__28588_28607 = G__28686;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__28687){
var elem_sel = cljs.core.first(arglist__28687);
var type_fs = cljs.core.rest(arglist__28687);
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
var vec__28695_28702 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28703 = cljs.core.nth.call(null,vec__28695_28702,0,null);var selector_28704 = cljs.core.nth.call(null,vec__28695_28702,1,null);var seq__28696_28705 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28697_28706 = null;var count__28698_28707 = 0;var i__28699_28708 = 0;while(true){
if((i__28699_28708 < count__28698_28707))
{var vec__28700_28709 = cljs.core._nth.call(null,chunk__28697_28706,i__28699_28708);var type_28710 = cljs.core.nth.call(null,vec__28700_28709,0,null);var f_28711 = cljs.core.nth.call(null,vec__28700_28709,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28710,((function (seq__28696_28705,chunk__28697_28706,count__28698_28707,i__28699_28708,vec__28700_28709,type_28710,f_28711){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28710,this_fn);
return f_28711.call(null,e);
});})(seq__28696_28705,chunk__28697_28706,count__28698_28707,i__28699_28708,vec__28700_28709,type_28710,f_28711))
);
{
var G__28712 = seq__28696_28705;
var G__28713 = chunk__28697_28706;
var G__28714 = count__28698_28707;
var G__28715 = (i__28699_28708 + 1);
seq__28696_28705 = G__28712;
chunk__28697_28706 = G__28713;
count__28698_28707 = G__28714;
i__28699_28708 = G__28715;
continue;
}
} else
{var temp__4092__auto___28716 = cljs.core.seq.call(null,seq__28696_28705);if(temp__4092__auto___28716)
{var seq__28696_28717__$1 = temp__4092__auto___28716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28696_28717__$1))
{var c__8957__auto___28718 = cljs.core.chunk_first.call(null,seq__28696_28717__$1);{
var G__28719 = cljs.core.chunk_rest.call(null,seq__28696_28717__$1);
var G__28720 = c__8957__auto___28718;
var G__28721 = cljs.core.count.call(null,c__8957__auto___28718);
var G__28722 = 0;
seq__28696_28705 = G__28719;
chunk__28697_28706 = G__28720;
count__28698_28707 = G__28721;
i__28699_28708 = G__28722;
continue;
}
} else
{var vec__28701_28723 = cljs.core.first.call(null,seq__28696_28717__$1);var type_28724 = cljs.core.nth.call(null,vec__28701_28723,0,null);var f_28725 = cljs.core.nth.call(null,vec__28701_28723,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28724,((function (seq__28696_28705,chunk__28697_28706,count__28698_28707,i__28699_28708,vec__28701_28723,type_28724,f_28725,seq__28696_28717__$1,temp__4092__auto___28716){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28724,this_fn);
return f_28725.call(null,e);
});})(seq__28696_28705,chunk__28697_28706,count__28698_28707,i__28699_28708,vec__28701_28723,type_28724,f_28725,seq__28696_28717__$1,temp__4092__auto___28716))
);
{
var G__28726 = cljs.core.next.call(null,seq__28696_28717__$1);
var G__28727 = null;
var G__28728 = 0;
var G__28729 = 0;
seq__28696_28705 = G__28726;
chunk__28697_28706 = G__28727;
count__28698_28707 = G__28728;
i__28699_28708 = G__28729;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__28730){
var elem_sel = cljs.core.first(arglist__28730);
var type_fs = cljs.core.rest(arglist__28730);
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
var fire_BANG___delegate = function (node,event_type,p__28731){var vec__28733 = p__28731;var update_event_BANG_ = cljs.core.nth.call(null,vec__28733,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8228__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
var p__28731 = null;if (arguments.length > 2) {
  p__28731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__28731);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__28734){
var node = cljs.core.first(arglist__28734);
arglist__28734 = cljs.core.next(arglist__28734);
var event_type = cljs.core.first(arglist__28734);
var p__28731 = cljs.core.rest(arglist__28734);
return fire_BANG___delegate(node,event_type,p__28731);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map