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
var append_BANG___2 = (function (parent,child){var G__86379 = dommy.template.__GT_node_like.call(null,parent);G__86379.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__86379;
});
var append_BANG___3 = (function() { 
var G__86384__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__86380_86385 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__86381_86386 = null;var count__86382_86387 = 0;var i__86383_86388 = 0;while(true){
if((i__86383_86388 < count__86382_86387))
{var c_86389 = cljs.core._nth.call(null,chunk__86381_86386,i__86383_86388);append_BANG_.call(null,parent__$1,c_86389);
{
var G__86390 = seq__86380_86385;
var G__86391 = chunk__86381_86386;
var G__86392 = count__86382_86387;
var G__86393 = (i__86383_86388 + 1);
seq__86380_86385 = G__86390;
chunk__86381_86386 = G__86391;
count__86382_86387 = G__86392;
i__86383_86388 = G__86393;
continue;
}
} else
{var temp__4092__auto___86394 = cljs.core.seq.call(null,seq__86380_86385);if(temp__4092__auto___86394)
{var seq__86380_86395__$1 = temp__4092__auto___86394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86380_86395__$1))
{var c__8552__auto___86396 = cljs.core.chunk_first.call(null,seq__86380_86395__$1);{
var G__86397 = cljs.core.chunk_rest.call(null,seq__86380_86395__$1);
var G__86398 = c__8552__auto___86396;
var G__86399 = cljs.core.count.call(null,c__8552__auto___86396);
var G__86400 = 0;
seq__86380_86385 = G__86397;
chunk__86381_86386 = G__86398;
count__86382_86387 = G__86399;
i__86383_86388 = G__86400;
continue;
}
} else
{var c_86401 = cljs.core.first.call(null,seq__86380_86395__$1);append_BANG_.call(null,parent__$1,c_86401);
{
var G__86402 = cljs.core.next.call(null,seq__86380_86395__$1);
var G__86403 = null;
var G__86404 = 0;
var G__86405 = 0;
seq__86380_86385 = G__86402;
chunk__86381_86386 = G__86403;
count__86382_86387 = G__86404;
i__86383_86388 = G__86405;
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
var G__86384 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__86384__delegate.call(this,parent,child,more_children);};
G__86384.cljs$lang$maxFixedArity = 2;
G__86384.cljs$lang$applyTo = (function (arglist__86406){
var parent = cljs.core.first(arglist__86406);
arglist__86406 = cljs.core.next(arglist__86406);
var child = cljs.core.first(arglist__86406);
var more_children = cljs.core.rest(arglist__86406);
return G__86384__delegate(parent,child,more_children);
});
G__86384.cljs$core$IFn$_invoke$arity$variadic = G__86384__delegate;
return G__86384;
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
var G__86415__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__86411_86416 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__86412_86417 = null;var count__86413_86418 = 0;var i__86414_86419 = 0;while(true){
if((i__86414_86419 < count__86413_86418))
{var c_86420 = cljs.core._nth.call(null,chunk__86412_86417,i__86414_86419);prepend_BANG_.call(null,parent__$1,c_86420);
{
var G__86421 = seq__86411_86416;
var G__86422 = chunk__86412_86417;
var G__86423 = count__86413_86418;
var G__86424 = (i__86414_86419 + 1);
seq__86411_86416 = G__86421;
chunk__86412_86417 = G__86422;
count__86413_86418 = G__86423;
i__86414_86419 = G__86424;
continue;
}
} else
{var temp__4092__auto___86425 = cljs.core.seq.call(null,seq__86411_86416);if(temp__4092__auto___86425)
{var seq__86411_86426__$1 = temp__4092__auto___86425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86411_86426__$1))
{var c__8552__auto___86427 = cljs.core.chunk_first.call(null,seq__86411_86426__$1);{
var G__86428 = cljs.core.chunk_rest.call(null,seq__86411_86426__$1);
var G__86429 = c__8552__auto___86427;
var G__86430 = cljs.core.count.call(null,c__8552__auto___86427);
var G__86431 = 0;
seq__86411_86416 = G__86428;
chunk__86412_86417 = G__86429;
count__86413_86418 = G__86430;
i__86414_86419 = G__86431;
continue;
}
} else
{var c_86432 = cljs.core.first.call(null,seq__86411_86426__$1);prepend_BANG_.call(null,parent__$1,c_86432);
{
var G__86433 = cljs.core.next.call(null,seq__86411_86426__$1);
var G__86434 = null;
var G__86435 = 0;
var G__86436 = 0;
seq__86411_86416 = G__86433;
chunk__86412_86417 = G__86434;
count__86413_86418 = G__86435;
i__86414_86419 = G__86436;
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
var G__86415 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__86415__delegate.call(this,parent,child,more_children);};
G__86415.cljs$lang$maxFixedArity = 2;
G__86415.cljs$lang$applyTo = (function (arglist__86437){
var parent = cljs.core.first(arglist__86437);
arglist__86437 = cljs.core.next(arglist__86437);
var child = cljs.core.first(arglist__86437);
var more_children = cljs.core.rest(arglist__86437);
return G__86415__delegate(parent,child,more_children);
});
G__86415.cljs$core$IFn$_invoke$arity$variadic = G__86415__delegate;
return G__86415;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___86438 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___86438))
{var next_86439 = temp__4090__auto___86438;parent.insertBefore(actual_node,next_86439);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__86441 = dommy.template.__GT_node_like.call(null,parent);G__86441.innerHTML = "";
dommy.core.append_BANG_.call(null,G__86441,node_like);
return G__86441;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__86443 = elem__$1.parentNode;G__86443.removeChild(elem__$1);
return G__86443;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__86449){var vec__86450 = p__86449;var k = cljs.core.nth.call(null,vec__86450,0,null);var v = cljs.core.nth.call(null,vec__86450,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t86451 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t86451 = (function (v,k,vec__86450,p__86449,container,key_selectors_map,template,selector_map,meta86452){
this.v = v;
this.k = k;
this.vec__86450 = vec__86450;
this.p__86449 = p__86449;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta86452 = meta86452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t86451.cljs$lang$type = true;
dommy.core.t86451.cljs$lang$ctorStr = "dommy.core/t86451";
dommy.core.t86451.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t86451");
});
dommy.core.t86451.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t86451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86453){var self__ = this;
var _86453__$1 = this;return self__.meta86452;
});
dommy.core.t86451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86453,meta86452__$1){var self__ = this;
var _86453__$1 = this;return (new dommy.core.t86451(self__.v,self__.k,self__.vec__86450,self__.p__86449,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta86452__$1));
});
dommy.core.__GT_t86451 = (function __GT_t86451(v__$1,k__$1,vec__86450__$1,p__86449__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta86452){return (new dommy.core.t86451(v__$1,k__$1,vec__86450__$1,p__86449__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta86452));
});
}
return (new dommy.core.t86451(v,k,vec__86450,p__86449,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__86454_SHARP_){return p1__86454_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__86455_SHARP_){return !((p1__86455_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__86456){var vec__86457 = p__86456;var special_mouse_event = cljs.core.nth.call(null,vec__86457,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__86457,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__86458){
var elem = cljs.core.first(arglist__86458);
arglist__86458 = cljs.core.next(arglist__86458);
var f = cljs.core.first(arglist__86458);
var args = cljs.core.rest(arglist__86458);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__86459_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__86459_SHARP_));
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
var vec__86483_86506 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_86507 = cljs.core.nth.call(null,vec__86483_86506,0,null);var selector_86508 = cljs.core.nth.call(null,vec__86483_86506,1,null);var seq__86484_86509 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__86491_86510 = null;var count__86492_86511 = 0;var i__86493_86512 = 0;while(true){
if((i__86493_86512 < count__86492_86511))
{var vec__86500_86513 = cljs.core._nth.call(null,chunk__86491_86510,i__86493_86512);var orig_type_86514 = cljs.core.nth.call(null,vec__86500_86513,0,null);var f_86515 = cljs.core.nth.call(null,vec__86500_86513,1,null);var seq__86494_86516 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_86514,new cljs.core.PersistentArrayMap.fromArray([orig_type_86514,cljs.core.identity], true, false)));var chunk__86496_86517 = null;var count__86497_86518 = 0;var i__86498_86519 = 0;while(true){
if((i__86498_86519 < count__86497_86518))
{var vec__86501_86520 = cljs.core._nth.call(null,chunk__86496_86517,i__86498_86519);var actual_type_86521 = cljs.core.nth.call(null,vec__86501_86520,0,null);var factory_86522 = cljs.core.nth.call(null,vec__86501_86520,1,null);var canonical_f_86523 = (cljs.core.truth_(selector_86508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_86507,selector_86508):cljs.core.identity).call(null,factory_86522.call(null,f_86515));dommy.core.update_event_listeners_BANG_.call(null,elem_86507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86508,actual_type_86521,f_86515], null),canonical_f_86523);
if(cljs.core.truth_(elem_86507.addEventListener))
{elem_86507.addEventListener(cljs.core.name.call(null,actual_type_86521),canonical_f_86523);
} else
{elem_86507.attachEvent(cljs.core.name.call(null,actual_type_86521),canonical_f_86523);
}
{
var G__86524 = seq__86494_86516;
var G__86525 = chunk__86496_86517;
var G__86526 = count__86497_86518;
var G__86527 = (i__86498_86519 + 1);
seq__86494_86516 = G__86524;
chunk__86496_86517 = G__86525;
count__86497_86518 = G__86526;
i__86498_86519 = G__86527;
continue;
}
} else
{var temp__4092__auto___86528 = cljs.core.seq.call(null,seq__86494_86516);if(temp__4092__auto___86528)
{var seq__86494_86529__$1 = temp__4092__auto___86528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86494_86529__$1))
{var c__8552__auto___86530 = cljs.core.chunk_first.call(null,seq__86494_86529__$1);{
var G__86531 = cljs.core.chunk_rest.call(null,seq__86494_86529__$1);
var G__86532 = c__8552__auto___86530;
var G__86533 = cljs.core.count.call(null,c__8552__auto___86530);
var G__86534 = 0;
seq__86494_86516 = G__86531;
chunk__86496_86517 = G__86532;
count__86497_86518 = G__86533;
i__86498_86519 = G__86534;
continue;
}
} else
{var vec__86502_86535 = cljs.core.first.call(null,seq__86494_86529__$1);var actual_type_86536 = cljs.core.nth.call(null,vec__86502_86535,0,null);var factory_86537 = cljs.core.nth.call(null,vec__86502_86535,1,null);var canonical_f_86538 = (cljs.core.truth_(selector_86508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_86507,selector_86508):cljs.core.identity).call(null,factory_86537.call(null,f_86515));dommy.core.update_event_listeners_BANG_.call(null,elem_86507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86508,actual_type_86536,f_86515], null),canonical_f_86538);
if(cljs.core.truth_(elem_86507.addEventListener))
{elem_86507.addEventListener(cljs.core.name.call(null,actual_type_86536),canonical_f_86538);
} else
{elem_86507.attachEvent(cljs.core.name.call(null,actual_type_86536),canonical_f_86538);
}
{
var G__86539 = cljs.core.next.call(null,seq__86494_86529__$1);
var G__86540 = null;
var G__86541 = 0;
var G__86542 = 0;
seq__86494_86516 = G__86539;
chunk__86496_86517 = G__86540;
count__86497_86518 = G__86541;
i__86498_86519 = G__86542;
continue;
}
}
} else
{}
}
break;
}
{
var G__86543 = seq__86484_86509;
var G__86544 = chunk__86491_86510;
var G__86545 = count__86492_86511;
var G__86546 = (i__86493_86512 + 1);
seq__86484_86509 = G__86543;
chunk__86491_86510 = G__86544;
count__86492_86511 = G__86545;
i__86493_86512 = G__86546;
continue;
}
} else
{var temp__4092__auto___86547 = cljs.core.seq.call(null,seq__86484_86509);if(temp__4092__auto___86547)
{var seq__86484_86548__$1 = temp__4092__auto___86547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86484_86548__$1))
{var c__8552__auto___86549 = cljs.core.chunk_first.call(null,seq__86484_86548__$1);{
var G__86550 = cljs.core.chunk_rest.call(null,seq__86484_86548__$1);
var G__86551 = c__8552__auto___86549;
var G__86552 = cljs.core.count.call(null,c__8552__auto___86549);
var G__86553 = 0;
seq__86484_86509 = G__86550;
chunk__86491_86510 = G__86551;
count__86492_86511 = G__86552;
i__86493_86512 = G__86553;
continue;
}
} else
{var vec__86503_86554 = cljs.core.first.call(null,seq__86484_86548__$1);var orig_type_86555 = cljs.core.nth.call(null,vec__86503_86554,0,null);var f_86556 = cljs.core.nth.call(null,vec__86503_86554,1,null);var seq__86485_86557 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_86555,new cljs.core.PersistentArrayMap.fromArray([orig_type_86555,cljs.core.identity], true, false)));var chunk__86487_86558 = null;var count__86488_86559 = 0;var i__86489_86560 = 0;while(true){
if((i__86489_86560 < count__86488_86559))
{var vec__86504_86561 = cljs.core._nth.call(null,chunk__86487_86558,i__86489_86560);var actual_type_86562 = cljs.core.nth.call(null,vec__86504_86561,0,null);var factory_86563 = cljs.core.nth.call(null,vec__86504_86561,1,null);var canonical_f_86564 = (cljs.core.truth_(selector_86508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_86507,selector_86508):cljs.core.identity).call(null,factory_86563.call(null,f_86556));dommy.core.update_event_listeners_BANG_.call(null,elem_86507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86508,actual_type_86562,f_86556], null),canonical_f_86564);
if(cljs.core.truth_(elem_86507.addEventListener))
{elem_86507.addEventListener(cljs.core.name.call(null,actual_type_86562),canonical_f_86564);
} else
{elem_86507.attachEvent(cljs.core.name.call(null,actual_type_86562),canonical_f_86564);
}
{
var G__86565 = seq__86485_86557;
var G__86566 = chunk__86487_86558;
var G__86567 = count__86488_86559;
var G__86568 = (i__86489_86560 + 1);
seq__86485_86557 = G__86565;
chunk__86487_86558 = G__86566;
count__86488_86559 = G__86567;
i__86489_86560 = G__86568;
continue;
}
} else
{var temp__4092__auto___86569__$1 = cljs.core.seq.call(null,seq__86485_86557);if(temp__4092__auto___86569__$1)
{var seq__86485_86570__$1 = temp__4092__auto___86569__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86485_86570__$1))
{var c__8552__auto___86571 = cljs.core.chunk_first.call(null,seq__86485_86570__$1);{
var G__86572 = cljs.core.chunk_rest.call(null,seq__86485_86570__$1);
var G__86573 = c__8552__auto___86571;
var G__86574 = cljs.core.count.call(null,c__8552__auto___86571);
var G__86575 = 0;
seq__86485_86557 = G__86572;
chunk__86487_86558 = G__86573;
count__86488_86559 = G__86574;
i__86489_86560 = G__86575;
continue;
}
} else
{var vec__86505_86576 = cljs.core.first.call(null,seq__86485_86570__$1);var actual_type_86577 = cljs.core.nth.call(null,vec__86505_86576,0,null);var factory_86578 = cljs.core.nth.call(null,vec__86505_86576,1,null);var canonical_f_86579 = (cljs.core.truth_(selector_86508)?cljs.core.partial.call(null,dommy.core.live_listener,elem_86507,selector_86508):cljs.core.identity).call(null,factory_86578.call(null,f_86556));dommy.core.update_event_listeners_BANG_.call(null,elem_86507,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86508,actual_type_86577,f_86556], null),canonical_f_86579);
if(cljs.core.truth_(elem_86507.addEventListener))
{elem_86507.addEventListener(cljs.core.name.call(null,actual_type_86577),canonical_f_86579);
} else
{elem_86507.attachEvent(cljs.core.name.call(null,actual_type_86577),canonical_f_86579);
}
{
var G__86580 = cljs.core.next.call(null,seq__86485_86570__$1);
var G__86581 = null;
var G__86582 = 0;
var G__86583 = 0;
seq__86485_86557 = G__86580;
chunk__86487_86558 = G__86581;
count__86488_86559 = G__86582;
i__86489_86560 = G__86583;
continue;
}
}
} else
{}
}
break;
}
{
var G__86584 = cljs.core.next.call(null,seq__86484_86548__$1);
var G__86585 = null;
var G__86586 = 0;
var G__86587 = 0;
seq__86484_86509 = G__86584;
chunk__86491_86510 = G__86585;
count__86492_86511 = G__86586;
i__86493_86512 = G__86587;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__86588){
var elem_sel = cljs.core.first(arglist__86588);
var type_fs = cljs.core.rest(arglist__86588);
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
var vec__86612_86635 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_86636 = cljs.core.nth.call(null,vec__86612_86635,0,null);var selector_86637 = cljs.core.nth.call(null,vec__86612_86635,1,null);var seq__86613_86638 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__86620_86639 = null;var count__86621_86640 = 0;var i__86622_86641 = 0;while(true){
if((i__86622_86641 < count__86621_86640))
{var vec__86629_86642 = cljs.core._nth.call(null,chunk__86620_86639,i__86622_86641);var orig_type_86643 = cljs.core.nth.call(null,vec__86629_86642,0,null);var f_86644 = cljs.core.nth.call(null,vec__86629_86642,1,null);var seq__86623_86645 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_86643,new cljs.core.PersistentArrayMap.fromArray([orig_type_86643,cljs.core.identity], true, false)));var chunk__86625_86646 = null;var count__86626_86647 = 0;var i__86627_86648 = 0;while(true){
if((i__86627_86648 < count__86626_86647))
{var vec__86630_86649 = cljs.core._nth.call(null,chunk__86625_86646,i__86627_86648);var actual_type_86650 = cljs.core.nth.call(null,vec__86630_86649,0,null);var __86651 = cljs.core.nth.call(null,vec__86630_86649,1,null);var keys_86652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86637,actual_type_86650,f_86644], null);var canonical_f_86653 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_86636),keys_86652);dommy.core.update_event_listeners_BANG_.call(null,elem_86636,dommy.utils.dissoc_in,keys_86652);
if(cljs.core.truth_(elem_86636.removeEventListener))
{elem_86636.removeEventListener(cljs.core.name.call(null,actual_type_86650),canonical_f_86653);
} else
{elem_86636.detachEvent(cljs.core.name.call(null,actual_type_86650),canonical_f_86653);
}
{
var G__86654 = seq__86623_86645;
var G__86655 = chunk__86625_86646;
var G__86656 = count__86626_86647;
var G__86657 = (i__86627_86648 + 1);
seq__86623_86645 = G__86654;
chunk__86625_86646 = G__86655;
count__86626_86647 = G__86656;
i__86627_86648 = G__86657;
continue;
}
} else
{var temp__4092__auto___86658 = cljs.core.seq.call(null,seq__86623_86645);if(temp__4092__auto___86658)
{var seq__86623_86659__$1 = temp__4092__auto___86658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86623_86659__$1))
{var c__8552__auto___86660 = cljs.core.chunk_first.call(null,seq__86623_86659__$1);{
var G__86661 = cljs.core.chunk_rest.call(null,seq__86623_86659__$1);
var G__86662 = c__8552__auto___86660;
var G__86663 = cljs.core.count.call(null,c__8552__auto___86660);
var G__86664 = 0;
seq__86623_86645 = G__86661;
chunk__86625_86646 = G__86662;
count__86626_86647 = G__86663;
i__86627_86648 = G__86664;
continue;
}
} else
{var vec__86631_86665 = cljs.core.first.call(null,seq__86623_86659__$1);var actual_type_86666 = cljs.core.nth.call(null,vec__86631_86665,0,null);var __86667 = cljs.core.nth.call(null,vec__86631_86665,1,null);var keys_86668 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86637,actual_type_86666,f_86644], null);var canonical_f_86669 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_86636),keys_86668);dommy.core.update_event_listeners_BANG_.call(null,elem_86636,dommy.utils.dissoc_in,keys_86668);
if(cljs.core.truth_(elem_86636.removeEventListener))
{elem_86636.removeEventListener(cljs.core.name.call(null,actual_type_86666),canonical_f_86669);
} else
{elem_86636.detachEvent(cljs.core.name.call(null,actual_type_86666),canonical_f_86669);
}
{
var G__86670 = cljs.core.next.call(null,seq__86623_86659__$1);
var G__86671 = null;
var G__86672 = 0;
var G__86673 = 0;
seq__86623_86645 = G__86670;
chunk__86625_86646 = G__86671;
count__86626_86647 = G__86672;
i__86627_86648 = G__86673;
continue;
}
}
} else
{}
}
break;
}
{
var G__86674 = seq__86613_86638;
var G__86675 = chunk__86620_86639;
var G__86676 = count__86621_86640;
var G__86677 = (i__86622_86641 + 1);
seq__86613_86638 = G__86674;
chunk__86620_86639 = G__86675;
count__86621_86640 = G__86676;
i__86622_86641 = G__86677;
continue;
}
} else
{var temp__4092__auto___86678 = cljs.core.seq.call(null,seq__86613_86638);if(temp__4092__auto___86678)
{var seq__86613_86679__$1 = temp__4092__auto___86678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86613_86679__$1))
{var c__8552__auto___86680 = cljs.core.chunk_first.call(null,seq__86613_86679__$1);{
var G__86681 = cljs.core.chunk_rest.call(null,seq__86613_86679__$1);
var G__86682 = c__8552__auto___86680;
var G__86683 = cljs.core.count.call(null,c__8552__auto___86680);
var G__86684 = 0;
seq__86613_86638 = G__86681;
chunk__86620_86639 = G__86682;
count__86621_86640 = G__86683;
i__86622_86641 = G__86684;
continue;
}
} else
{var vec__86632_86685 = cljs.core.first.call(null,seq__86613_86679__$1);var orig_type_86686 = cljs.core.nth.call(null,vec__86632_86685,0,null);var f_86687 = cljs.core.nth.call(null,vec__86632_86685,1,null);var seq__86614_86688 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_86686,new cljs.core.PersistentArrayMap.fromArray([orig_type_86686,cljs.core.identity], true, false)));var chunk__86616_86689 = null;var count__86617_86690 = 0;var i__86618_86691 = 0;while(true){
if((i__86618_86691 < count__86617_86690))
{var vec__86633_86692 = cljs.core._nth.call(null,chunk__86616_86689,i__86618_86691);var actual_type_86693 = cljs.core.nth.call(null,vec__86633_86692,0,null);var __86694 = cljs.core.nth.call(null,vec__86633_86692,1,null);var keys_86695 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86637,actual_type_86693,f_86687], null);var canonical_f_86696 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_86636),keys_86695);dommy.core.update_event_listeners_BANG_.call(null,elem_86636,dommy.utils.dissoc_in,keys_86695);
if(cljs.core.truth_(elem_86636.removeEventListener))
{elem_86636.removeEventListener(cljs.core.name.call(null,actual_type_86693),canonical_f_86696);
} else
{elem_86636.detachEvent(cljs.core.name.call(null,actual_type_86693),canonical_f_86696);
}
{
var G__86697 = seq__86614_86688;
var G__86698 = chunk__86616_86689;
var G__86699 = count__86617_86690;
var G__86700 = (i__86618_86691 + 1);
seq__86614_86688 = G__86697;
chunk__86616_86689 = G__86698;
count__86617_86690 = G__86699;
i__86618_86691 = G__86700;
continue;
}
} else
{var temp__4092__auto___86701__$1 = cljs.core.seq.call(null,seq__86614_86688);if(temp__4092__auto___86701__$1)
{var seq__86614_86702__$1 = temp__4092__auto___86701__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86614_86702__$1))
{var c__8552__auto___86703 = cljs.core.chunk_first.call(null,seq__86614_86702__$1);{
var G__86704 = cljs.core.chunk_rest.call(null,seq__86614_86702__$1);
var G__86705 = c__8552__auto___86703;
var G__86706 = cljs.core.count.call(null,c__8552__auto___86703);
var G__86707 = 0;
seq__86614_86688 = G__86704;
chunk__86616_86689 = G__86705;
count__86617_86690 = G__86706;
i__86618_86691 = G__86707;
continue;
}
} else
{var vec__86634_86708 = cljs.core.first.call(null,seq__86614_86702__$1);var actual_type_86709 = cljs.core.nth.call(null,vec__86634_86708,0,null);var __86710 = cljs.core.nth.call(null,vec__86634_86708,1,null);var keys_86711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_86637,actual_type_86709,f_86687], null);var canonical_f_86712 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_86636),keys_86711);dommy.core.update_event_listeners_BANG_.call(null,elem_86636,dommy.utils.dissoc_in,keys_86711);
if(cljs.core.truth_(elem_86636.removeEventListener))
{elem_86636.removeEventListener(cljs.core.name.call(null,actual_type_86709),canonical_f_86712);
} else
{elem_86636.detachEvent(cljs.core.name.call(null,actual_type_86709),canonical_f_86712);
}
{
var G__86713 = cljs.core.next.call(null,seq__86614_86702__$1);
var G__86714 = null;
var G__86715 = 0;
var G__86716 = 0;
seq__86614_86688 = G__86713;
chunk__86616_86689 = G__86714;
count__86617_86690 = G__86715;
i__86618_86691 = G__86716;
continue;
}
}
} else
{}
}
break;
}
{
var G__86717 = cljs.core.next.call(null,seq__86613_86679__$1);
var G__86718 = null;
var G__86719 = 0;
var G__86720 = 0;
seq__86613_86638 = G__86717;
chunk__86620_86639 = G__86718;
count__86621_86640 = G__86719;
i__86622_86641 = G__86720;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__86721){
var elem_sel = cljs.core.first(arglist__86721);
var type_fs = cljs.core.rest(arglist__86721);
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
var vec__86729_86736 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_86737 = cljs.core.nth.call(null,vec__86729_86736,0,null);var selector_86738 = cljs.core.nth.call(null,vec__86729_86736,1,null);var seq__86730_86739 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__86731_86740 = null;var count__86732_86741 = 0;var i__86733_86742 = 0;while(true){
if((i__86733_86742 < count__86732_86741))
{var vec__86734_86743 = cljs.core._nth.call(null,chunk__86731_86740,i__86733_86742);var type_86744 = cljs.core.nth.call(null,vec__86734_86743,0,null);var f_86745 = cljs.core.nth.call(null,vec__86734_86743,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_86744,((function (seq__86730_86739,chunk__86731_86740,count__86732_86741,i__86733_86742,vec__86734_86743,type_86744,f_86745){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_86744,this_fn);
return f_86745.call(null,e);
});})(seq__86730_86739,chunk__86731_86740,count__86732_86741,i__86733_86742,vec__86734_86743,type_86744,f_86745))
);
{
var G__86746 = seq__86730_86739;
var G__86747 = chunk__86731_86740;
var G__86748 = count__86732_86741;
var G__86749 = (i__86733_86742 + 1);
seq__86730_86739 = G__86746;
chunk__86731_86740 = G__86747;
count__86732_86741 = G__86748;
i__86733_86742 = G__86749;
continue;
}
} else
{var temp__4092__auto___86750 = cljs.core.seq.call(null,seq__86730_86739);if(temp__4092__auto___86750)
{var seq__86730_86751__$1 = temp__4092__auto___86750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86730_86751__$1))
{var c__8552__auto___86752 = cljs.core.chunk_first.call(null,seq__86730_86751__$1);{
var G__86753 = cljs.core.chunk_rest.call(null,seq__86730_86751__$1);
var G__86754 = c__8552__auto___86752;
var G__86755 = cljs.core.count.call(null,c__8552__auto___86752);
var G__86756 = 0;
seq__86730_86739 = G__86753;
chunk__86731_86740 = G__86754;
count__86732_86741 = G__86755;
i__86733_86742 = G__86756;
continue;
}
} else
{var vec__86735_86757 = cljs.core.first.call(null,seq__86730_86751__$1);var type_86758 = cljs.core.nth.call(null,vec__86735_86757,0,null);var f_86759 = cljs.core.nth.call(null,vec__86735_86757,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_86758,((function (seq__86730_86739,chunk__86731_86740,count__86732_86741,i__86733_86742,vec__86735_86757,type_86758,f_86759,seq__86730_86751__$1,temp__4092__auto___86750){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_86758,this_fn);
return f_86759.call(null,e);
});})(seq__86730_86739,chunk__86731_86740,count__86732_86741,i__86733_86742,vec__86735_86757,type_86758,f_86759,seq__86730_86751__$1,temp__4092__auto___86750))
);
{
var G__86760 = cljs.core.next.call(null,seq__86730_86751__$1);
var G__86761 = null;
var G__86762 = 0;
var G__86763 = 0;
seq__86730_86739 = G__86760;
chunk__86731_86740 = G__86761;
count__86732_86741 = G__86762;
i__86733_86742 = G__86763;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__86764){
var elem_sel = cljs.core.first(arglist__86764);
var type_fs = cljs.core.rest(arglist__86764);
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
var fire_BANG___delegate = function (node,event_type,p__86765){var vec__86767 = p__86765;var update_event_BANG_ = cljs.core.nth.call(null,vec__86767,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__86765 = null;if (arguments.length > 2) {
  p__86765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__86765);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__86768){
var node = cljs.core.first(arglist__86768);
arglist__86768 = cljs.core.next(arglist__86768);
var event_type = cljs.core.first(arglist__86768);
var p__86765 = cljs.core.rest(arglist__86768);
return fire_BANG___delegate(node,event_type,p__86765);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
