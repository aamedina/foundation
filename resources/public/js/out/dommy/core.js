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
dommy.core.text = (function text(elem){var or__8223__auto__ = elem.textContent;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
var append_BANG___2 = (function (parent,child){var G__405394 = dommy.template.__GT_node_like.call(null,parent);G__405394.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__405394;
});
var append_BANG___3 = (function() { 
var G__405399__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__405395_405400 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__405396_405401 = null;var count__405397_405402 = 0;var i__405398_405403 = 0;while(true){
if((i__405398_405403 < count__405397_405402))
{var c_405404 = cljs.core._nth.call(null,chunk__405396_405401,i__405398_405403);append_BANG_.call(null,parent__$1,c_405404);
{
var G__405405 = seq__405395_405400;
var G__405406 = chunk__405396_405401;
var G__405407 = count__405397_405402;
var G__405408 = (i__405398_405403 + 1);
seq__405395_405400 = G__405405;
chunk__405396_405401 = G__405406;
count__405397_405402 = G__405407;
i__405398_405403 = G__405408;
continue;
}
} else
{var temp__4092__auto___405409 = cljs.core.seq.call(null,seq__405395_405400);if(temp__4092__auto___405409)
{var seq__405395_405410__$1 = temp__4092__auto___405409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405395_405410__$1))
{var c__8952__auto___405411 = cljs.core.chunk_first.call(null,seq__405395_405410__$1);{
var G__405412 = cljs.core.chunk_rest.call(null,seq__405395_405410__$1);
var G__405413 = c__8952__auto___405411;
var G__405414 = cljs.core.count.call(null,c__8952__auto___405411);
var G__405415 = 0;
seq__405395_405400 = G__405412;
chunk__405396_405401 = G__405413;
count__405397_405402 = G__405414;
i__405398_405403 = G__405415;
continue;
}
} else
{var c_405416 = cljs.core.first.call(null,seq__405395_405410__$1);append_BANG_.call(null,parent__$1,c_405416);
{
var G__405417 = cljs.core.next.call(null,seq__405395_405410__$1);
var G__405418 = null;
var G__405419 = 0;
var G__405420 = 0;
seq__405395_405400 = G__405417;
chunk__405396_405401 = G__405418;
count__405397_405402 = G__405419;
i__405398_405403 = G__405420;
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
var G__405399 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__405399__delegate.call(this,parent,child,more_children);};
G__405399.cljs$lang$maxFixedArity = 2;
G__405399.cljs$lang$applyTo = (function (arglist__405421){
var parent = cljs.core.first(arglist__405421);
arglist__405421 = cljs.core.next(arglist__405421);
var child = cljs.core.first(arglist__405421);
var more_children = cljs.core.rest(arglist__405421);
return G__405399__delegate(parent,child,more_children);
});
G__405399.cljs$core$IFn$_invoke$arity$variadic = G__405399__delegate;
return G__405399;
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
var G__405430__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__405426_405431 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__405427_405432 = null;var count__405428_405433 = 0;var i__405429_405434 = 0;while(true){
if((i__405429_405434 < count__405428_405433))
{var c_405435 = cljs.core._nth.call(null,chunk__405427_405432,i__405429_405434);prepend_BANG_.call(null,parent__$1,c_405435);
{
var G__405436 = seq__405426_405431;
var G__405437 = chunk__405427_405432;
var G__405438 = count__405428_405433;
var G__405439 = (i__405429_405434 + 1);
seq__405426_405431 = G__405436;
chunk__405427_405432 = G__405437;
count__405428_405433 = G__405438;
i__405429_405434 = G__405439;
continue;
}
} else
{var temp__4092__auto___405440 = cljs.core.seq.call(null,seq__405426_405431);if(temp__4092__auto___405440)
{var seq__405426_405441__$1 = temp__4092__auto___405440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405426_405441__$1))
{var c__8952__auto___405442 = cljs.core.chunk_first.call(null,seq__405426_405441__$1);{
var G__405443 = cljs.core.chunk_rest.call(null,seq__405426_405441__$1);
var G__405444 = c__8952__auto___405442;
var G__405445 = cljs.core.count.call(null,c__8952__auto___405442);
var G__405446 = 0;
seq__405426_405431 = G__405443;
chunk__405427_405432 = G__405444;
count__405428_405433 = G__405445;
i__405429_405434 = G__405446;
continue;
}
} else
{var c_405447 = cljs.core.first.call(null,seq__405426_405441__$1);prepend_BANG_.call(null,parent__$1,c_405447);
{
var G__405448 = cljs.core.next.call(null,seq__405426_405441__$1);
var G__405449 = null;
var G__405450 = 0;
var G__405451 = 0;
seq__405426_405431 = G__405448;
chunk__405427_405432 = G__405449;
count__405428_405433 = G__405450;
i__405429_405434 = G__405451;
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
var G__405430 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__405430__delegate.call(this,parent,child,more_children);};
G__405430.cljs$lang$maxFixedArity = 2;
G__405430.cljs$lang$applyTo = (function (arglist__405452){
var parent = cljs.core.first(arglist__405452);
arglist__405452 = cljs.core.next(arglist__405452);
var child = cljs.core.first(arglist__405452);
var more_children = cljs.core.rest(arglist__405452);
return G__405430__delegate(parent,child,more_children);
});
G__405430.cljs$core$IFn$_invoke$arity$variadic = G__405430__delegate;
return G__405430;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___405453 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___405453))
{var next_405454 = temp__4090__auto___405453;parent.insertBefore(actual_node,next_405454);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__405456 = dommy.template.__GT_node_like.call(null,parent);G__405456.innerHTML = "";
dommy.core.append_BANG_.call(null,G__405456,node_like);
return G__405456;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__405458 = elem__$1.parentNode;G__405458.removeChild(elem__$1);
return G__405458;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__405464){var vec__405465 = p__405464;var k = cljs.core.nth.call(null,vec__405465,0,null);var v = cljs.core.nth.call(null,vec__405465,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t405466 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t405466 = (function (v,k,vec__405465,p__405464,container,key_selectors_map,template,selector_map,meta405467){
this.v = v;
this.k = k;
this.vec__405465 = vec__405465;
this.p__405464 = p__405464;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta405467 = meta405467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t405466.cljs$lang$type = true;
dommy.core.t405466.cljs$lang$ctorStr = "dommy.core/t405466";
dommy.core.t405466.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"dommy.core/t405466");
});
dommy.core.t405466.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t405466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_405468){var self__ = this;
var _405468__$1 = this;return self__.meta405467;
});
dommy.core.t405466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_405468,meta405467__$1){var self__ = this;
var _405468__$1 = this;return (new dommy.core.t405466(self__.v,self__.k,self__.vec__405465,self__.p__405464,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta405467__$1));
});
dommy.core.__GT_t405466 = (function __GT_t405466(v__$1,k__$1,vec__405465__$1,p__405464__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta405467){return (new dommy.core.t405466(v__$1,k__$1,vec__405465__$1,p__405464__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta405467));
});
}
return (new dommy.core.t405466(v,k,vec__405465,p__405464,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__405469_SHARP_){return p1__405469_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__405470_SHARP_){return !((p1__405470_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__405471){var vec__405472 = p__405471;var special_mouse_event = cljs.core.nth.call(null,vec__405472,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__405472,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8223__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8211__auto__ = related_target;if(cljs.core.truth_(and__8211__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8211__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8211__auto__ = selected_target;if(cljs.core.truth_(and__8211__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8211__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8223__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__405473){
var elem = cljs.core.first(arglist__405473);
arglist__405473 = cljs.core.next(arglist__405473);
var f = cljs.core.first(arglist__405473);
var args = cljs.core.rest(arglist__405473);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__405474_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__405474_SHARP_));
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
var vec__405498_405521 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_405522 = cljs.core.nth.call(null,vec__405498_405521,0,null);var selector_405523 = cljs.core.nth.call(null,vec__405498_405521,1,null);var seq__405499_405524 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__405506_405525 = null;var count__405507_405526 = 0;var i__405508_405527 = 0;while(true){
if((i__405508_405527 < count__405507_405526))
{var vec__405515_405528 = cljs.core._nth.call(null,chunk__405506_405525,i__405508_405527);var orig_type_405529 = cljs.core.nth.call(null,vec__405515_405528,0,null);var f_405530 = cljs.core.nth.call(null,vec__405515_405528,1,null);var seq__405509_405531 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_405529,new cljs.core.PersistentArrayMap.fromArray([orig_type_405529,cljs.core.identity], true, false)));var chunk__405511_405532 = null;var count__405512_405533 = 0;var i__405513_405534 = 0;while(true){
if((i__405513_405534 < count__405512_405533))
{var vec__405516_405535 = cljs.core._nth.call(null,chunk__405511_405532,i__405513_405534);var actual_type_405536 = cljs.core.nth.call(null,vec__405516_405535,0,null);var factory_405537 = cljs.core.nth.call(null,vec__405516_405535,1,null);var canonical_f_405538 = (cljs.core.truth_(selector_405523)?cljs.core.partial.call(null,dommy.core.live_listener,elem_405522,selector_405523):cljs.core.identity).call(null,factory_405537.call(null,f_405530));dommy.core.update_event_listeners_BANG_.call(null,elem_405522,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405523,actual_type_405536,f_405530], null),canonical_f_405538);
if(cljs.core.truth_(elem_405522.addEventListener))
{elem_405522.addEventListener(cljs.core.name.call(null,actual_type_405536),canonical_f_405538);
} else
{elem_405522.attachEvent(cljs.core.name.call(null,actual_type_405536),canonical_f_405538);
}
{
var G__405539 = seq__405509_405531;
var G__405540 = chunk__405511_405532;
var G__405541 = count__405512_405533;
var G__405542 = (i__405513_405534 + 1);
seq__405509_405531 = G__405539;
chunk__405511_405532 = G__405540;
count__405512_405533 = G__405541;
i__405513_405534 = G__405542;
continue;
}
} else
{var temp__4092__auto___405543 = cljs.core.seq.call(null,seq__405509_405531);if(temp__4092__auto___405543)
{var seq__405509_405544__$1 = temp__4092__auto___405543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405509_405544__$1))
{var c__8952__auto___405545 = cljs.core.chunk_first.call(null,seq__405509_405544__$1);{
var G__405546 = cljs.core.chunk_rest.call(null,seq__405509_405544__$1);
var G__405547 = c__8952__auto___405545;
var G__405548 = cljs.core.count.call(null,c__8952__auto___405545);
var G__405549 = 0;
seq__405509_405531 = G__405546;
chunk__405511_405532 = G__405547;
count__405512_405533 = G__405548;
i__405513_405534 = G__405549;
continue;
}
} else
{var vec__405517_405550 = cljs.core.first.call(null,seq__405509_405544__$1);var actual_type_405551 = cljs.core.nth.call(null,vec__405517_405550,0,null);var factory_405552 = cljs.core.nth.call(null,vec__405517_405550,1,null);var canonical_f_405553 = (cljs.core.truth_(selector_405523)?cljs.core.partial.call(null,dommy.core.live_listener,elem_405522,selector_405523):cljs.core.identity).call(null,factory_405552.call(null,f_405530));dommy.core.update_event_listeners_BANG_.call(null,elem_405522,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405523,actual_type_405551,f_405530], null),canonical_f_405553);
if(cljs.core.truth_(elem_405522.addEventListener))
{elem_405522.addEventListener(cljs.core.name.call(null,actual_type_405551),canonical_f_405553);
} else
{elem_405522.attachEvent(cljs.core.name.call(null,actual_type_405551),canonical_f_405553);
}
{
var G__405554 = cljs.core.next.call(null,seq__405509_405544__$1);
var G__405555 = null;
var G__405556 = 0;
var G__405557 = 0;
seq__405509_405531 = G__405554;
chunk__405511_405532 = G__405555;
count__405512_405533 = G__405556;
i__405513_405534 = G__405557;
continue;
}
}
} else
{}
}
break;
}
{
var G__405558 = seq__405499_405524;
var G__405559 = chunk__405506_405525;
var G__405560 = count__405507_405526;
var G__405561 = (i__405508_405527 + 1);
seq__405499_405524 = G__405558;
chunk__405506_405525 = G__405559;
count__405507_405526 = G__405560;
i__405508_405527 = G__405561;
continue;
}
} else
{var temp__4092__auto___405562 = cljs.core.seq.call(null,seq__405499_405524);if(temp__4092__auto___405562)
{var seq__405499_405563__$1 = temp__4092__auto___405562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405499_405563__$1))
{var c__8952__auto___405564 = cljs.core.chunk_first.call(null,seq__405499_405563__$1);{
var G__405565 = cljs.core.chunk_rest.call(null,seq__405499_405563__$1);
var G__405566 = c__8952__auto___405564;
var G__405567 = cljs.core.count.call(null,c__8952__auto___405564);
var G__405568 = 0;
seq__405499_405524 = G__405565;
chunk__405506_405525 = G__405566;
count__405507_405526 = G__405567;
i__405508_405527 = G__405568;
continue;
}
} else
{var vec__405518_405569 = cljs.core.first.call(null,seq__405499_405563__$1);var orig_type_405570 = cljs.core.nth.call(null,vec__405518_405569,0,null);var f_405571 = cljs.core.nth.call(null,vec__405518_405569,1,null);var seq__405500_405572 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_405570,new cljs.core.PersistentArrayMap.fromArray([orig_type_405570,cljs.core.identity], true, false)));var chunk__405502_405573 = null;var count__405503_405574 = 0;var i__405504_405575 = 0;while(true){
if((i__405504_405575 < count__405503_405574))
{var vec__405519_405576 = cljs.core._nth.call(null,chunk__405502_405573,i__405504_405575);var actual_type_405577 = cljs.core.nth.call(null,vec__405519_405576,0,null);var factory_405578 = cljs.core.nth.call(null,vec__405519_405576,1,null);var canonical_f_405579 = (cljs.core.truth_(selector_405523)?cljs.core.partial.call(null,dommy.core.live_listener,elem_405522,selector_405523):cljs.core.identity).call(null,factory_405578.call(null,f_405571));dommy.core.update_event_listeners_BANG_.call(null,elem_405522,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405523,actual_type_405577,f_405571], null),canonical_f_405579);
if(cljs.core.truth_(elem_405522.addEventListener))
{elem_405522.addEventListener(cljs.core.name.call(null,actual_type_405577),canonical_f_405579);
} else
{elem_405522.attachEvent(cljs.core.name.call(null,actual_type_405577),canonical_f_405579);
}
{
var G__405580 = seq__405500_405572;
var G__405581 = chunk__405502_405573;
var G__405582 = count__405503_405574;
var G__405583 = (i__405504_405575 + 1);
seq__405500_405572 = G__405580;
chunk__405502_405573 = G__405581;
count__405503_405574 = G__405582;
i__405504_405575 = G__405583;
continue;
}
} else
{var temp__4092__auto___405584__$1 = cljs.core.seq.call(null,seq__405500_405572);if(temp__4092__auto___405584__$1)
{var seq__405500_405585__$1 = temp__4092__auto___405584__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405500_405585__$1))
{var c__8952__auto___405586 = cljs.core.chunk_first.call(null,seq__405500_405585__$1);{
var G__405587 = cljs.core.chunk_rest.call(null,seq__405500_405585__$1);
var G__405588 = c__8952__auto___405586;
var G__405589 = cljs.core.count.call(null,c__8952__auto___405586);
var G__405590 = 0;
seq__405500_405572 = G__405587;
chunk__405502_405573 = G__405588;
count__405503_405574 = G__405589;
i__405504_405575 = G__405590;
continue;
}
} else
{var vec__405520_405591 = cljs.core.first.call(null,seq__405500_405585__$1);var actual_type_405592 = cljs.core.nth.call(null,vec__405520_405591,0,null);var factory_405593 = cljs.core.nth.call(null,vec__405520_405591,1,null);var canonical_f_405594 = (cljs.core.truth_(selector_405523)?cljs.core.partial.call(null,dommy.core.live_listener,elem_405522,selector_405523):cljs.core.identity).call(null,factory_405593.call(null,f_405571));dommy.core.update_event_listeners_BANG_.call(null,elem_405522,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405523,actual_type_405592,f_405571], null),canonical_f_405594);
if(cljs.core.truth_(elem_405522.addEventListener))
{elem_405522.addEventListener(cljs.core.name.call(null,actual_type_405592),canonical_f_405594);
} else
{elem_405522.attachEvent(cljs.core.name.call(null,actual_type_405592),canonical_f_405594);
}
{
var G__405595 = cljs.core.next.call(null,seq__405500_405585__$1);
var G__405596 = null;
var G__405597 = 0;
var G__405598 = 0;
seq__405500_405572 = G__405595;
chunk__405502_405573 = G__405596;
count__405503_405574 = G__405597;
i__405504_405575 = G__405598;
continue;
}
}
} else
{}
}
break;
}
{
var G__405599 = cljs.core.next.call(null,seq__405499_405563__$1);
var G__405600 = null;
var G__405601 = 0;
var G__405602 = 0;
seq__405499_405524 = G__405599;
chunk__405506_405525 = G__405600;
count__405507_405526 = G__405601;
i__405508_405527 = G__405602;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__405603){
var elem_sel = cljs.core.first(arglist__405603);
var type_fs = cljs.core.rest(arglist__405603);
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
var vec__405627_405650 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_405651 = cljs.core.nth.call(null,vec__405627_405650,0,null);var selector_405652 = cljs.core.nth.call(null,vec__405627_405650,1,null);var seq__405628_405653 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__405635_405654 = null;var count__405636_405655 = 0;var i__405637_405656 = 0;while(true){
if((i__405637_405656 < count__405636_405655))
{var vec__405644_405657 = cljs.core._nth.call(null,chunk__405635_405654,i__405637_405656);var orig_type_405658 = cljs.core.nth.call(null,vec__405644_405657,0,null);var f_405659 = cljs.core.nth.call(null,vec__405644_405657,1,null);var seq__405638_405660 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_405658,new cljs.core.PersistentArrayMap.fromArray([orig_type_405658,cljs.core.identity], true, false)));var chunk__405640_405661 = null;var count__405641_405662 = 0;var i__405642_405663 = 0;while(true){
if((i__405642_405663 < count__405641_405662))
{var vec__405645_405664 = cljs.core._nth.call(null,chunk__405640_405661,i__405642_405663);var actual_type_405665 = cljs.core.nth.call(null,vec__405645_405664,0,null);var __405666 = cljs.core.nth.call(null,vec__405645_405664,1,null);var keys_405667 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405652,actual_type_405665,f_405659], null);var canonical_f_405668 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_405651),keys_405667);dommy.core.update_event_listeners_BANG_.call(null,elem_405651,dommy.utils.dissoc_in,keys_405667);
if(cljs.core.truth_(elem_405651.removeEventListener))
{elem_405651.removeEventListener(cljs.core.name.call(null,actual_type_405665),canonical_f_405668);
} else
{elem_405651.detachEvent(cljs.core.name.call(null,actual_type_405665),canonical_f_405668);
}
{
var G__405669 = seq__405638_405660;
var G__405670 = chunk__405640_405661;
var G__405671 = count__405641_405662;
var G__405672 = (i__405642_405663 + 1);
seq__405638_405660 = G__405669;
chunk__405640_405661 = G__405670;
count__405641_405662 = G__405671;
i__405642_405663 = G__405672;
continue;
}
} else
{var temp__4092__auto___405673 = cljs.core.seq.call(null,seq__405638_405660);if(temp__4092__auto___405673)
{var seq__405638_405674__$1 = temp__4092__auto___405673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405638_405674__$1))
{var c__8952__auto___405675 = cljs.core.chunk_first.call(null,seq__405638_405674__$1);{
var G__405676 = cljs.core.chunk_rest.call(null,seq__405638_405674__$1);
var G__405677 = c__8952__auto___405675;
var G__405678 = cljs.core.count.call(null,c__8952__auto___405675);
var G__405679 = 0;
seq__405638_405660 = G__405676;
chunk__405640_405661 = G__405677;
count__405641_405662 = G__405678;
i__405642_405663 = G__405679;
continue;
}
} else
{var vec__405646_405680 = cljs.core.first.call(null,seq__405638_405674__$1);var actual_type_405681 = cljs.core.nth.call(null,vec__405646_405680,0,null);var __405682 = cljs.core.nth.call(null,vec__405646_405680,1,null);var keys_405683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405652,actual_type_405681,f_405659], null);var canonical_f_405684 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_405651),keys_405683);dommy.core.update_event_listeners_BANG_.call(null,elem_405651,dommy.utils.dissoc_in,keys_405683);
if(cljs.core.truth_(elem_405651.removeEventListener))
{elem_405651.removeEventListener(cljs.core.name.call(null,actual_type_405681),canonical_f_405684);
} else
{elem_405651.detachEvent(cljs.core.name.call(null,actual_type_405681),canonical_f_405684);
}
{
var G__405685 = cljs.core.next.call(null,seq__405638_405674__$1);
var G__405686 = null;
var G__405687 = 0;
var G__405688 = 0;
seq__405638_405660 = G__405685;
chunk__405640_405661 = G__405686;
count__405641_405662 = G__405687;
i__405642_405663 = G__405688;
continue;
}
}
} else
{}
}
break;
}
{
var G__405689 = seq__405628_405653;
var G__405690 = chunk__405635_405654;
var G__405691 = count__405636_405655;
var G__405692 = (i__405637_405656 + 1);
seq__405628_405653 = G__405689;
chunk__405635_405654 = G__405690;
count__405636_405655 = G__405691;
i__405637_405656 = G__405692;
continue;
}
} else
{var temp__4092__auto___405693 = cljs.core.seq.call(null,seq__405628_405653);if(temp__4092__auto___405693)
{var seq__405628_405694__$1 = temp__4092__auto___405693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405628_405694__$1))
{var c__8952__auto___405695 = cljs.core.chunk_first.call(null,seq__405628_405694__$1);{
var G__405696 = cljs.core.chunk_rest.call(null,seq__405628_405694__$1);
var G__405697 = c__8952__auto___405695;
var G__405698 = cljs.core.count.call(null,c__8952__auto___405695);
var G__405699 = 0;
seq__405628_405653 = G__405696;
chunk__405635_405654 = G__405697;
count__405636_405655 = G__405698;
i__405637_405656 = G__405699;
continue;
}
} else
{var vec__405647_405700 = cljs.core.first.call(null,seq__405628_405694__$1);var orig_type_405701 = cljs.core.nth.call(null,vec__405647_405700,0,null);var f_405702 = cljs.core.nth.call(null,vec__405647_405700,1,null);var seq__405629_405703 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_405701,new cljs.core.PersistentArrayMap.fromArray([orig_type_405701,cljs.core.identity], true, false)));var chunk__405631_405704 = null;var count__405632_405705 = 0;var i__405633_405706 = 0;while(true){
if((i__405633_405706 < count__405632_405705))
{var vec__405648_405707 = cljs.core._nth.call(null,chunk__405631_405704,i__405633_405706);var actual_type_405708 = cljs.core.nth.call(null,vec__405648_405707,0,null);var __405709 = cljs.core.nth.call(null,vec__405648_405707,1,null);var keys_405710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405652,actual_type_405708,f_405702], null);var canonical_f_405711 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_405651),keys_405710);dommy.core.update_event_listeners_BANG_.call(null,elem_405651,dommy.utils.dissoc_in,keys_405710);
if(cljs.core.truth_(elem_405651.removeEventListener))
{elem_405651.removeEventListener(cljs.core.name.call(null,actual_type_405708),canonical_f_405711);
} else
{elem_405651.detachEvent(cljs.core.name.call(null,actual_type_405708),canonical_f_405711);
}
{
var G__405712 = seq__405629_405703;
var G__405713 = chunk__405631_405704;
var G__405714 = count__405632_405705;
var G__405715 = (i__405633_405706 + 1);
seq__405629_405703 = G__405712;
chunk__405631_405704 = G__405713;
count__405632_405705 = G__405714;
i__405633_405706 = G__405715;
continue;
}
} else
{var temp__4092__auto___405716__$1 = cljs.core.seq.call(null,seq__405629_405703);if(temp__4092__auto___405716__$1)
{var seq__405629_405717__$1 = temp__4092__auto___405716__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405629_405717__$1))
{var c__8952__auto___405718 = cljs.core.chunk_first.call(null,seq__405629_405717__$1);{
var G__405719 = cljs.core.chunk_rest.call(null,seq__405629_405717__$1);
var G__405720 = c__8952__auto___405718;
var G__405721 = cljs.core.count.call(null,c__8952__auto___405718);
var G__405722 = 0;
seq__405629_405703 = G__405719;
chunk__405631_405704 = G__405720;
count__405632_405705 = G__405721;
i__405633_405706 = G__405722;
continue;
}
} else
{var vec__405649_405723 = cljs.core.first.call(null,seq__405629_405717__$1);var actual_type_405724 = cljs.core.nth.call(null,vec__405649_405723,0,null);var __405725 = cljs.core.nth.call(null,vec__405649_405723,1,null);var keys_405726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_405652,actual_type_405724,f_405702], null);var canonical_f_405727 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_405651),keys_405726);dommy.core.update_event_listeners_BANG_.call(null,elem_405651,dommy.utils.dissoc_in,keys_405726);
if(cljs.core.truth_(elem_405651.removeEventListener))
{elem_405651.removeEventListener(cljs.core.name.call(null,actual_type_405724),canonical_f_405727);
} else
{elem_405651.detachEvent(cljs.core.name.call(null,actual_type_405724),canonical_f_405727);
}
{
var G__405728 = cljs.core.next.call(null,seq__405629_405717__$1);
var G__405729 = null;
var G__405730 = 0;
var G__405731 = 0;
seq__405629_405703 = G__405728;
chunk__405631_405704 = G__405729;
count__405632_405705 = G__405730;
i__405633_405706 = G__405731;
continue;
}
}
} else
{}
}
break;
}
{
var G__405732 = cljs.core.next.call(null,seq__405628_405694__$1);
var G__405733 = null;
var G__405734 = 0;
var G__405735 = 0;
seq__405628_405653 = G__405732;
chunk__405635_405654 = G__405733;
count__405636_405655 = G__405734;
i__405637_405656 = G__405735;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__405736){
var elem_sel = cljs.core.first(arglist__405736);
var type_fs = cljs.core.rest(arglist__405736);
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
var vec__405744_405751 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_405752 = cljs.core.nth.call(null,vec__405744_405751,0,null);var selector_405753 = cljs.core.nth.call(null,vec__405744_405751,1,null);var seq__405745_405754 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__405746_405755 = null;var count__405747_405756 = 0;var i__405748_405757 = 0;while(true){
if((i__405748_405757 < count__405747_405756))
{var vec__405749_405758 = cljs.core._nth.call(null,chunk__405746_405755,i__405748_405757);var type_405759 = cljs.core.nth.call(null,vec__405749_405758,0,null);var f_405760 = cljs.core.nth.call(null,vec__405749_405758,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_405759,((function (seq__405745_405754,chunk__405746_405755,count__405747_405756,i__405748_405757,vec__405749_405758,type_405759,f_405760){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_405759,this_fn);
return f_405760.call(null,e);
});})(seq__405745_405754,chunk__405746_405755,count__405747_405756,i__405748_405757,vec__405749_405758,type_405759,f_405760))
);
{
var G__405761 = seq__405745_405754;
var G__405762 = chunk__405746_405755;
var G__405763 = count__405747_405756;
var G__405764 = (i__405748_405757 + 1);
seq__405745_405754 = G__405761;
chunk__405746_405755 = G__405762;
count__405747_405756 = G__405763;
i__405748_405757 = G__405764;
continue;
}
} else
{var temp__4092__auto___405765 = cljs.core.seq.call(null,seq__405745_405754);if(temp__4092__auto___405765)
{var seq__405745_405766__$1 = temp__4092__auto___405765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405745_405766__$1))
{var c__8952__auto___405767 = cljs.core.chunk_first.call(null,seq__405745_405766__$1);{
var G__405768 = cljs.core.chunk_rest.call(null,seq__405745_405766__$1);
var G__405769 = c__8952__auto___405767;
var G__405770 = cljs.core.count.call(null,c__8952__auto___405767);
var G__405771 = 0;
seq__405745_405754 = G__405768;
chunk__405746_405755 = G__405769;
count__405747_405756 = G__405770;
i__405748_405757 = G__405771;
continue;
}
} else
{var vec__405750_405772 = cljs.core.first.call(null,seq__405745_405766__$1);var type_405773 = cljs.core.nth.call(null,vec__405750_405772,0,null);var f_405774 = cljs.core.nth.call(null,vec__405750_405772,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_405773,((function (seq__405745_405754,chunk__405746_405755,count__405747_405756,i__405748_405757,vec__405750_405772,type_405773,f_405774,seq__405745_405766__$1,temp__4092__auto___405765){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_405773,this_fn);
return f_405774.call(null,e);
});})(seq__405745_405754,chunk__405746_405755,count__405747_405756,i__405748_405757,vec__405750_405772,type_405773,f_405774,seq__405745_405766__$1,temp__4092__auto___405765))
);
{
var G__405775 = cljs.core.next.call(null,seq__405745_405766__$1);
var G__405776 = null;
var G__405777 = 0;
var G__405778 = 0;
seq__405745_405754 = G__405775;
chunk__405746_405755 = G__405776;
count__405747_405756 = G__405777;
i__405748_405757 = G__405778;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__405779){
var elem_sel = cljs.core.first(arglist__405779);
var type_fs = cljs.core.rest(arglist__405779);
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
var fire_BANG___delegate = function (node,event_type,p__405780){var vec__405782 = p__405780;var update_event_BANG_ = cljs.core.nth.call(null,vec__405782,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8223__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
var p__405780 = null;if (arguments.length > 2) {
  p__405780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__405780);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__405783){
var node = cljs.core.first(arglist__405783);
arglist__405783 = cljs.core.next(arglist__405783);
var event_type = cljs.core.first(arglist__405783);
var p__405780 = cljs.core.rest(arglist__405783);
return fire_BANG___delegate(node,event_type,p__405780);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map