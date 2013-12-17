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
var append_BANG___2 = (function (parent,child){var G__385381 = dommy.template.__GT_node_like.call(null,parent);G__385381.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__385381;
});
var append_BANG___3 = (function() { 
var G__385386__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__385382_385387 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__385383_385388 = null;var count__385384_385389 = 0;var i__385385_385390 = 0;while(true){
if((i__385385_385390 < count__385384_385389))
{var c_385391 = cljs.core._nth.call(null,chunk__385383_385388,i__385385_385390);append_BANG_.call(null,parent__$1,c_385391);
{
var G__385392 = seq__385382_385387;
var G__385393 = chunk__385383_385388;
var G__385394 = count__385384_385389;
var G__385395 = (i__385385_385390 + 1);
seq__385382_385387 = G__385392;
chunk__385383_385388 = G__385393;
count__385384_385389 = G__385394;
i__385385_385390 = G__385395;
continue;
}
} else
{var temp__4092__auto___385396 = cljs.core.seq.call(null,seq__385382_385387);if(temp__4092__auto___385396)
{var seq__385382_385397__$1 = temp__4092__auto___385396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385382_385397__$1))
{var c__14708__auto___385398 = cljs.core.chunk_first.call(null,seq__385382_385397__$1);{
var G__385399 = cljs.core.chunk_rest.call(null,seq__385382_385397__$1);
var G__385400 = c__14708__auto___385398;
var G__385401 = cljs.core.count.call(null,c__14708__auto___385398);
var G__385402 = 0;
seq__385382_385387 = G__385399;
chunk__385383_385388 = G__385400;
count__385384_385389 = G__385401;
i__385385_385390 = G__385402;
continue;
}
} else
{var c_385403 = cljs.core.first.call(null,seq__385382_385397__$1);append_BANG_.call(null,parent__$1,c_385403);
{
var G__385404 = cljs.core.next.call(null,seq__385382_385397__$1);
var G__385405 = null;
var G__385406 = 0;
var G__385407 = 0;
seq__385382_385387 = G__385404;
chunk__385383_385388 = G__385405;
count__385384_385389 = G__385406;
i__385385_385390 = G__385407;
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
var G__385386 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__385386__delegate.call(this,parent,child,more_children);};
G__385386.cljs$lang$maxFixedArity = 2;
G__385386.cljs$lang$applyTo = (function (arglist__385408){
var parent = cljs.core.first(arglist__385408);
arglist__385408 = cljs.core.next(arglist__385408);
var child = cljs.core.first(arglist__385408);
var more_children = cljs.core.rest(arglist__385408);
return G__385386__delegate(parent,child,more_children);
});
G__385386.cljs$core$IFn$_invoke$arity$variadic = G__385386__delegate;
return G__385386;
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
var G__385417__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__385413_385418 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__385414_385419 = null;var count__385415_385420 = 0;var i__385416_385421 = 0;while(true){
if((i__385416_385421 < count__385415_385420))
{var c_385422 = cljs.core._nth.call(null,chunk__385414_385419,i__385416_385421);prepend_BANG_.call(null,parent__$1,c_385422);
{
var G__385423 = seq__385413_385418;
var G__385424 = chunk__385414_385419;
var G__385425 = count__385415_385420;
var G__385426 = (i__385416_385421 + 1);
seq__385413_385418 = G__385423;
chunk__385414_385419 = G__385424;
count__385415_385420 = G__385425;
i__385416_385421 = G__385426;
continue;
}
} else
{var temp__4092__auto___385427 = cljs.core.seq.call(null,seq__385413_385418);if(temp__4092__auto___385427)
{var seq__385413_385428__$1 = temp__4092__auto___385427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385413_385428__$1))
{var c__14708__auto___385429 = cljs.core.chunk_first.call(null,seq__385413_385428__$1);{
var G__385430 = cljs.core.chunk_rest.call(null,seq__385413_385428__$1);
var G__385431 = c__14708__auto___385429;
var G__385432 = cljs.core.count.call(null,c__14708__auto___385429);
var G__385433 = 0;
seq__385413_385418 = G__385430;
chunk__385414_385419 = G__385431;
count__385415_385420 = G__385432;
i__385416_385421 = G__385433;
continue;
}
} else
{var c_385434 = cljs.core.first.call(null,seq__385413_385428__$1);prepend_BANG_.call(null,parent__$1,c_385434);
{
var G__385435 = cljs.core.next.call(null,seq__385413_385428__$1);
var G__385436 = null;
var G__385437 = 0;
var G__385438 = 0;
seq__385413_385418 = G__385435;
chunk__385414_385419 = G__385436;
count__385415_385420 = G__385437;
i__385416_385421 = G__385438;
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
var G__385417 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__385417__delegate.call(this,parent,child,more_children);};
G__385417.cljs$lang$maxFixedArity = 2;
G__385417.cljs$lang$applyTo = (function (arglist__385439){
var parent = cljs.core.first(arglist__385439);
arglist__385439 = cljs.core.next(arglist__385439);
var child = cljs.core.first(arglist__385439);
var more_children = cljs.core.rest(arglist__385439);
return G__385417__delegate(parent,child,more_children);
});
G__385417.cljs$core$IFn$_invoke$arity$variadic = G__385417__delegate;
return G__385417;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___385440 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___385440))
{var next_385441 = temp__4090__auto___385440;parent.insertBefore(actual_node,next_385441);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__385443 = dommy.template.__GT_node_like.call(null,parent);G__385443.innerHTML = "";
dommy.core.append_BANG_.call(null,G__385443,node_like);
return G__385443;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__385445 = elem__$1.parentNode;G__385445.removeChild(elem__$1);
return G__385445;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__385451){var vec__385452 = p__385451;var k = cljs.core.nth.call(null,vec__385452,0,null);var v = cljs.core.nth.call(null,vec__385452,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t385453 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t385453 = (function (v,k,vec__385452,p__385451,container,key_selectors_map,template,selector_map,meta385454){
this.v = v;
this.k = k;
this.vec__385452 = vec__385452;
this.p__385451 = p__385451;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta385454 = meta385454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t385453.cljs$lang$type = true;
dommy.core.t385453.cljs$lang$ctorStr = "dommy.core/t385453";
dommy.core.t385453.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"dommy.core/t385453");
});
dommy.core.t385453.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t385453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_385455){var self__ = this;
var _385455__$1 = this;return self__.meta385454;
});
dommy.core.t385453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_385455,meta385454__$1){var self__ = this;
var _385455__$1 = this;return (new dommy.core.t385453(self__.v,self__.k,self__.vec__385452,self__.p__385451,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta385454__$1));
});
dommy.core.__GT_t385453 = (function __GT_t385453(v__$1,k__$1,vec__385452__$1,p__385451__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta385454){return (new dommy.core.t385453(v__$1,k__$1,vec__385452__$1,p__385451__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta385454));
});
}
return (new dommy.core.t385453(v,k,vec__385452,p__385451,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__385456_SHARP_){return p1__385456_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__385457_SHARP_){return !((p1__385457_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__385458){var vec__385459 = p__385458;var special_mouse_event = cljs.core.nth.call(null,vec__385459,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__385459,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13979__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13979__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__385460){
var elem = cljs.core.first(arglist__385460);
arglist__385460 = cljs.core.next(arglist__385460);
var f = cljs.core.first(arglist__385460);
var args = cljs.core.rest(arglist__385460);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__385461_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__385461_SHARP_));
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
var vec__385485_385508 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_385509 = cljs.core.nth.call(null,vec__385485_385508,0,null);var selector_385510 = cljs.core.nth.call(null,vec__385485_385508,1,null);var seq__385486_385511 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__385493_385512 = null;var count__385494_385513 = 0;var i__385495_385514 = 0;while(true){
if((i__385495_385514 < count__385494_385513))
{var vec__385502_385515 = cljs.core._nth.call(null,chunk__385493_385512,i__385495_385514);var orig_type_385516 = cljs.core.nth.call(null,vec__385502_385515,0,null);var f_385517 = cljs.core.nth.call(null,vec__385502_385515,1,null);var seq__385496_385518 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_385516,new cljs.core.PersistentArrayMap.fromArray([orig_type_385516,cljs.core.identity], true, false)));var chunk__385498_385519 = null;var count__385499_385520 = 0;var i__385500_385521 = 0;while(true){
if((i__385500_385521 < count__385499_385520))
{var vec__385503_385522 = cljs.core._nth.call(null,chunk__385498_385519,i__385500_385521);var actual_type_385523 = cljs.core.nth.call(null,vec__385503_385522,0,null);var factory_385524 = cljs.core.nth.call(null,vec__385503_385522,1,null);var canonical_f_385525 = (cljs.core.truth_(selector_385510)?cljs.core.partial.call(null,dommy.core.live_listener,elem_385509,selector_385510):cljs.core.identity).call(null,factory_385524.call(null,f_385517));dommy.core.update_event_listeners_BANG_.call(null,elem_385509,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385510,actual_type_385523,f_385517], null),canonical_f_385525);
if(cljs.core.truth_(elem_385509.addEventListener))
{elem_385509.addEventListener(cljs.core.name.call(null,actual_type_385523),canonical_f_385525);
} else
{elem_385509.attachEvent(cljs.core.name.call(null,actual_type_385523),canonical_f_385525);
}
{
var G__385526 = seq__385496_385518;
var G__385527 = chunk__385498_385519;
var G__385528 = count__385499_385520;
var G__385529 = (i__385500_385521 + 1);
seq__385496_385518 = G__385526;
chunk__385498_385519 = G__385527;
count__385499_385520 = G__385528;
i__385500_385521 = G__385529;
continue;
}
} else
{var temp__4092__auto___385530 = cljs.core.seq.call(null,seq__385496_385518);if(temp__4092__auto___385530)
{var seq__385496_385531__$1 = temp__4092__auto___385530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385496_385531__$1))
{var c__14708__auto___385532 = cljs.core.chunk_first.call(null,seq__385496_385531__$1);{
var G__385533 = cljs.core.chunk_rest.call(null,seq__385496_385531__$1);
var G__385534 = c__14708__auto___385532;
var G__385535 = cljs.core.count.call(null,c__14708__auto___385532);
var G__385536 = 0;
seq__385496_385518 = G__385533;
chunk__385498_385519 = G__385534;
count__385499_385520 = G__385535;
i__385500_385521 = G__385536;
continue;
}
} else
{var vec__385504_385537 = cljs.core.first.call(null,seq__385496_385531__$1);var actual_type_385538 = cljs.core.nth.call(null,vec__385504_385537,0,null);var factory_385539 = cljs.core.nth.call(null,vec__385504_385537,1,null);var canonical_f_385540 = (cljs.core.truth_(selector_385510)?cljs.core.partial.call(null,dommy.core.live_listener,elem_385509,selector_385510):cljs.core.identity).call(null,factory_385539.call(null,f_385517));dommy.core.update_event_listeners_BANG_.call(null,elem_385509,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385510,actual_type_385538,f_385517], null),canonical_f_385540);
if(cljs.core.truth_(elem_385509.addEventListener))
{elem_385509.addEventListener(cljs.core.name.call(null,actual_type_385538),canonical_f_385540);
} else
{elem_385509.attachEvent(cljs.core.name.call(null,actual_type_385538),canonical_f_385540);
}
{
var G__385541 = cljs.core.next.call(null,seq__385496_385531__$1);
var G__385542 = null;
var G__385543 = 0;
var G__385544 = 0;
seq__385496_385518 = G__385541;
chunk__385498_385519 = G__385542;
count__385499_385520 = G__385543;
i__385500_385521 = G__385544;
continue;
}
}
} else
{}
}
break;
}
{
var G__385545 = seq__385486_385511;
var G__385546 = chunk__385493_385512;
var G__385547 = count__385494_385513;
var G__385548 = (i__385495_385514 + 1);
seq__385486_385511 = G__385545;
chunk__385493_385512 = G__385546;
count__385494_385513 = G__385547;
i__385495_385514 = G__385548;
continue;
}
} else
{var temp__4092__auto___385549 = cljs.core.seq.call(null,seq__385486_385511);if(temp__4092__auto___385549)
{var seq__385486_385550__$1 = temp__4092__auto___385549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385486_385550__$1))
{var c__14708__auto___385551 = cljs.core.chunk_first.call(null,seq__385486_385550__$1);{
var G__385552 = cljs.core.chunk_rest.call(null,seq__385486_385550__$1);
var G__385553 = c__14708__auto___385551;
var G__385554 = cljs.core.count.call(null,c__14708__auto___385551);
var G__385555 = 0;
seq__385486_385511 = G__385552;
chunk__385493_385512 = G__385553;
count__385494_385513 = G__385554;
i__385495_385514 = G__385555;
continue;
}
} else
{var vec__385505_385556 = cljs.core.first.call(null,seq__385486_385550__$1);var orig_type_385557 = cljs.core.nth.call(null,vec__385505_385556,0,null);var f_385558 = cljs.core.nth.call(null,vec__385505_385556,1,null);var seq__385487_385559 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_385557,new cljs.core.PersistentArrayMap.fromArray([orig_type_385557,cljs.core.identity], true, false)));var chunk__385489_385560 = null;var count__385490_385561 = 0;var i__385491_385562 = 0;while(true){
if((i__385491_385562 < count__385490_385561))
{var vec__385506_385563 = cljs.core._nth.call(null,chunk__385489_385560,i__385491_385562);var actual_type_385564 = cljs.core.nth.call(null,vec__385506_385563,0,null);var factory_385565 = cljs.core.nth.call(null,vec__385506_385563,1,null);var canonical_f_385566 = (cljs.core.truth_(selector_385510)?cljs.core.partial.call(null,dommy.core.live_listener,elem_385509,selector_385510):cljs.core.identity).call(null,factory_385565.call(null,f_385558));dommy.core.update_event_listeners_BANG_.call(null,elem_385509,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385510,actual_type_385564,f_385558], null),canonical_f_385566);
if(cljs.core.truth_(elem_385509.addEventListener))
{elem_385509.addEventListener(cljs.core.name.call(null,actual_type_385564),canonical_f_385566);
} else
{elem_385509.attachEvent(cljs.core.name.call(null,actual_type_385564),canonical_f_385566);
}
{
var G__385567 = seq__385487_385559;
var G__385568 = chunk__385489_385560;
var G__385569 = count__385490_385561;
var G__385570 = (i__385491_385562 + 1);
seq__385487_385559 = G__385567;
chunk__385489_385560 = G__385568;
count__385490_385561 = G__385569;
i__385491_385562 = G__385570;
continue;
}
} else
{var temp__4092__auto___385571__$1 = cljs.core.seq.call(null,seq__385487_385559);if(temp__4092__auto___385571__$1)
{var seq__385487_385572__$1 = temp__4092__auto___385571__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385487_385572__$1))
{var c__14708__auto___385573 = cljs.core.chunk_first.call(null,seq__385487_385572__$1);{
var G__385574 = cljs.core.chunk_rest.call(null,seq__385487_385572__$1);
var G__385575 = c__14708__auto___385573;
var G__385576 = cljs.core.count.call(null,c__14708__auto___385573);
var G__385577 = 0;
seq__385487_385559 = G__385574;
chunk__385489_385560 = G__385575;
count__385490_385561 = G__385576;
i__385491_385562 = G__385577;
continue;
}
} else
{var vec__385507_385578 = cljs.core.first.call(null,seq__385487_385572__$1);var actual_type_385579 = cljs.core.nth.call(null,vec__385507_385578,0,null);var factory_385580 = cljs.core.nth.call(null,vec__385507_385578,1,null);var canonical_f_385581 = (cljs.core.truth_(selector_385510)?cljs.core.partial.call(null,dommy.core.live_listener,elem_385509,selector_385510):cljs.core.identity).call(null,factory_385580.call(null,f_385558));dommy.core.update_event_listeners_BANG_.call(null,elem_385509,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385510,actual_type_385579,f_385558], null),canonical_f_385581);
if(cljs.core.truth_(elem_385509.addEventListener))
{elem_385509.addEventListener(cljs.core.name.call(null,actual_type_385579),canonical_f_385581);
} else
{elem_385509.attachEvent(cljs.core.name.call(null,actual_type_385579),canonical_f_385581);
}
{
var G__385582 = cljs.core.next.call(null,seq__385487_385572__$1);
var G__385583 = null;
var G__385584 = 0;
var G__385585 = 0;
seq__385487_385559 = G__385582;
chunk__385489_385560 = G__385583;
count__385490_385561 = G__385584;
i__385491_385562 = G__385585;
continue;
}
}
} else
{}
}
break;
}
{
var G__385586 = cljs.core.next.call(null,seq__385486_385550__$1);
var G__385587 = null;
var G__385588 = 0;
var G__385589 = 0;
seq__385486_385511 = G__385586;
chunk__385493_385512 = G__385587;
count__385494_385513 = G__385588;
i__385495_385514 = G__385589;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__385590){
var elem_sel = cljs.core.first(arglist__385590);
var type_fs = cljs.core.rest(arglist__385590);
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
var vec__385614_385637 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_385638 = cljs.core.nth.call(null,vec__385614_385637,0,null);var selector_385639 = cljs.core.nth.call(null,vec__385614_385637,1,null);var seq__385615_385640 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__385622_385641 = null;var count__385623_385642 = 0;var i__385624_385643 = 0;while(true){
if((i__385624_385643 < count__385623_385642))
{var vec__385631_385644 = cljs.core._nth.call(null,chunk__385622_385641,i__385624_385643);var orig_type_385645 = cljs.core.nth.call(null,vec__385631_385644,0,null);var f_385646 = cljs.core.nth.call(null,vec__385631_385644,1,null);var seq__385625_385647 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_385645,new cljs.core.PersistentArrayMap.fromArray([orig_type_385645,cljs.core.identity], true, false)));var chunk__385627_385648 = null;var count__385628_385649 = 0;var i__385629_385650 = 0;while(true){
if((i__385629_385650 < count__385628_385649))
{var vec__385632_385651 = cljs.core._nth.call(null,chunk__385627_385648,i__385629_385650);var actual_type_385652 = cljs.core.nth.call(null,vec__385632_385651,0,null);var __385653 = cljs.core.nth.call(null,vec__385632_385651,1,null);var keys_385654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385639,actual_type_385652,f_385646], null);var canonical_f_385655 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_385638),keys_385654);dommy.core.update_event_listeners_BANG_.call(null,elem_385638,dommy.utils.dissoc_in,keys_385654);
if(cljs.core.truth_(elem_385638.removeEventListener))
{elem_385638.removeEventListener(cljs.core.name.call(null,actual_type_385652),canonical_f_385655);
} else
{elem_385638.detachEvent(cljs.core.name.call(null,actual_type_385652),canonical_f_385655);
}
{
var G__385656 = seq__385625_385647;
var G__385657 = chunk__385627_385648;
var G__385658 = count__385628_385649;
var G__385659 = (i__385629_385650 + 1);
seq__385625_385647 = G__385656;
chunk__385627_385648 = G__385657;
count__385628_385649 = G__385658;
i__385629_385650 = G__385659;
continue;
}
} else
{var temp__4092__auto___385660 = cljs.core.seq.call(null,seq__385625_385647);if(temp__4092__auto___385660)
{var seq__385625_385661__$1 = temp__4092__auto___385660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385625_385661__$1))
{var c__14708__auto___385662 = cljs.core.chunk_first.call(null,seq__385625_385661__$1);{
var G__385663 = cljs.core.chunk_rest.call(null,seq__385625_385661__$1);
var G__385664 = c__14708__auto___385662;
var G__385665 = cljs.core.count.call(null,c__14708__auto___385662);
var G__385666 = 0;
seq__385625_385647 = G__385663;
chunk__385627_385648 = G__385664;
count__385628_385649 = G__385665;
i__385629_385650 = G__385666;
continue;
}
} else
{var vec__385633_385667 = cljs.core.first.call(null,seq__385625_385661__$1);var actual_type_385668 = cljs.core.nth.call(null,vec__385633_385667,0,null);var __385669 = cljs.core.nth.call(null,vec__385633_385667,1,null);var keys_385670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385639,actual_type_385668,f_385646], null);var canonical_f_385671 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_385638),keys_385670);dommy.core.update_event_listeners_BANG_.call(null,elem_385638,dommy.utils.dissoc_in,keys_385670);
if(cljs.core.truth_(elem_385638.removeEventListener))
{elem_385638.removeEventListener(cljs.core.name.call(null,actual_type_385668),canonical_f_385671);
} else
{elem_385638.detachEvent(cljs.core.name.call(null,actual_type_385668),canonical_f_385671);
}
{
var G__385672 = cljs.core.next.call(null,seq__385625_385661__$1);
var G__385673 = null;
var G__385674 = 0;
var G__385675 = 0;
seq__385625_385647 = G__385672;
chunk__385627_385648 = G__385673;
count__385628_385649 = G__385674;
i__385629_385650 = G__385675;
continue;
}
}
} else
{}
}
break;
}
{
var G__385676 = seq__385615_385640;
var G__385677 = chunk__385622_385641;
var G__385678 = count__385623_385642;
var G__385679 = (i__385624_385643 + 1);
seq__385615_385640 = G__385676;
chunk__385622_385641 = G__385677;
count__385623_385642 = G__385678;
i__385624_385643 = G__385679;
continue;
}
} else
{var temp__4092__auto___385680 = cljs.core.seq.call(null,seq__385615_385640);if(temp__4092__auto___385680)
{var seq__385615_385681__$1 = temp__4092__auto___385680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385615_385681__$1))
{var c__14708__auto___385682 = cljs.core.chunk_first.call(null,seq__385615_385681__$1);{
var G__385683 = cljs.core.chunk_rest.call(null,seq__385615_385681__$1);
var G__385684 = c__14708__auto___385682;
var G__385685 = cljs.core.count.call(null,c__14708__auto___385682);
var G__385686 = 0;
seq__385615_385640 = G__385683;
chunk__385622_385641 = G__385684;
count__385623_385642 = G__385685;
i__385624_385643 = G__385686;
continue;
}
} else
{var vec__385634_385687 = cljs.core.first.call(null,seq__385615_385681__$1);var orig_type_385688 = cljs.core.nth.call(null,vec__385634_385687,0,null);var f_385689 = cljs.core.nth.call(null,vec__385634_385687,1,null);var seq__385616_385690 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_385688,new cljs.core.PersistentArrayMap.fromArray([orig_type_385688,cljs.core.identity], true, false)));var chunk__385618_385691 = null;var count__385619_385692 = 0;var i__385620_385693 = 0;while(true){
if((i__385620_385693 < count__385619_385692))
{var vec__385635_385694 = cljs.core._nth.call(null,chunk__385618_385691,i__385620_385693);var actual_type_385695 = cljs.core.nth.call(null,vec__385635_385694,0,null);var __385696 = cljs.core.nth.call(null,vec__385635_385694,1,null);var keys_385697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385639,actual_type_385695,f_385689], null);var canonical_f_385698 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_385638),keys_385697);dommy.core.update_event_listeners_BANG_.call(null,elem_385638,dommy.utils.dissoc_in,keys_385697);
if(cljs.core.truth_(elem_385638.removeEventListener))
{elem_385638.removeEventListener(cljs.core.name.call(null,actual_type_385695),canonical_f_385698);
} else
{elem_385638.detachEvent(cljs.core.name.call(null,actual_type_385695),canonical_f_385698);
}
{
var G__385699 = seq__385616_385690;
var G__385700 = chunk__385618_385691;
var G__385701 = count__385619_385692;
var G__385702 = (i__385620_385693 + 1);
seq__385616_385690 = G__385699;
chunk__385618_385691 = G__385700;
count__385619_385692 = G__385701;
i__385620_385693 = G__385702;
continue;
}
} else
{var temp__4092__auto___385703__$1 = cljs.core.seq.call(null,seq__385616_385690);if(temp__4092__auto___385703__$1)
{var seq__385616_385704__$1 = temp__4092__auto___385703__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385616_385704__$1))
{var c__14708__auto___385705 = cljs.core.chunk_first.call(null,seq__385616_385704__$1);{
var G__385706 = cljs.core.chunk_rest.call(null,seq__385616_385704__$1);
var G__385707 = c__14708__auto___385705;
var G__385708 = cljs.core.count.call(null,c__14708__auto___385705);
var G__385709 = 0;
seq__385616_385690 = G__385706;
chunk__385618_385691 = G__385707;
count__385619_385692 = G__385708;
i__385620_385693 = G__385709;
continue;
}
} else
{var vec__385636_385710 = cljs.core.first.call(null,seq__385616_385704__$1);var actual_type_385711 = cljs.core.nth.call(null,vec__385636_385710,0,null);var __385712 = cljs.core.nth.call(null,vec__385636_385710,1,null);var keys_385713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_385639,actual_type_385711,f_385689], null);var canonical_f_385714 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_385638),keys_385713);dommy.core.update_event_listeners_BANG_.call(null,elem_385638,dommy.utils.dissoc_in,keys_385713);
if(cljs.core.truth_(elem_385638.removeEventListener))
{elem_385638.removeEventListener(cljs.core.name.call(null,actual_type_385711),canonical_f_385714);
} else
{elem_385638.detachEvent(cljs.core.name.call(null,actual_type_385711),canonical_f_385714);
}
{
var G__385715 = cljs.core.next.call(null,seq__385616_385704__$1);
var G__385716 = null;
var G__385717 = 0;
var G__385718 = 0;
seq__385616_385690 = G__385715;
chunk__385618_385691 = G__385716;
count__385619_385692 = G__385717;
i__385620_385693 = G__385718;
continue;
}
}
} else
{}
}
break;
}
{
var G__385719 = cljs.core.next.call(null,seq__385615_385681__$1);
var G__385720 = null;
var G__385721 = 0;
var G__385722 = 0;
seq__385615_385640 = G__385719;
chunk__385622_385641 = G__385720;
count__385623_385642 = G__385721;
i__385624_385643 = G__385722;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__385723){
var elem_sel = cljs.core.first(arglist__385723);
var type_fs = cljs.core.rest(arglist__385723);
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
var vec__385731_385738 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_385739 = cljs.core.nth.call(null,vec__385731_385738,0,null);var selector_385740 = cljs.core.nth.call(null,vec__385731_385738,1,null);var seq__385732_385741 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__385733_385742 = null;var count__385734_385743 = 0;var i__385735_385744 = 0;while(true){
if((i__385735_385744 < count__385734_385743))
{var vec__385736_385745 = cljs.core._nth.call(null,chunk__385733_385742,i__385735_385744);var type_385746 = cljs.core.nth.call(null,vec__385736_385745,0,null);var f_385747 = cljs.core.nth.call(null,vec__385736_385745,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_385746,((function (seq__385732_385741,chunk__385733_385742,count__385734_385743,i__385735_385744,vec__385736_385745,type_385746,f_385747){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_385746,this_fn);
return f_385747.call(null,e);
});})(seq__385732_385741,chunk__385733_385742,count__385734_385743,i__385735_385744,vec__385736_385745,type_385746,f_385747))
);
{
var G__385748 = seq__385732_385741;
var G__385749 = chunk__385733_385742;
var G__385750 = count__385734_385743;
var G__385751 = (i__385735_385744 + 1);
seq__385732_385741 = G__385748;
chunk__385733_385742 = G__385749;
count__385734_385743 = G__385750;
i__385735_385744 = G__385751;
continue;
}
} else
{var temp__4092__auto___385752 = cljs.core.seq.call(null,seq__385732_385741);if(temp__4092__auto___385752)
{var seq__385732_385753__$1 = temp__4092__auto___385752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385732_385753__$1))
{var c__14708__auto___385754 = cljs.core.chunk_first.call(null,seq__385732_385753__$1);{
var G__385755 = cljs.core.chunk_rest.call(null,seq__385732_385753__$1);
var G__385756 = c__14708__auto___385754;
var G__385757 = cljs.core.count.call(null,c__14708__auto___385754);
var G__385758 = 0;
seq__385732_385741 = G__385755;
chunk__385733_385742 = G__385756;
count__385734_385743 = G__385757;
i__385735_385744 = G__385758;
continue;
}
} else
{var vec__385737_385759 = cljs.core.first.call(null,seq__385732_385753__$1);var type_385760 = cljs.core.nth.call(null,vec__385737_385759,0,null);var f_385761 = cljs.core.nth.call(null,vec__385737_385759,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_385760,((function (seq__385732_385741,chunk__385733_385742,count__385734_385743,i__385735_385744,vec__385737_385759,type_385760,f_385761,seq__385732_385753__$1,temp__4092__auto___385752){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_385760,this_fn);
return f_385761.call(null,e);
});})(seq__385732_385741,chunk__385733_385742,count__385734_385743,i__385735_385744,vec__385737_385759,type_385760,f_385761,seq__385732_385753__$1,temp__4092__auto___385752))
);
{
var G__385762 = cljs.core.next.call(null,seq__385732_385753__$1);
var G__385763 = null;
var G__385764 = 0;
var G__385765 = 0;
seq__385732_385741 = G__385762;
chunk__385733_385742 = G__385763;
count__385734_385743 = G__385764;
i__385735_385744 = G__385765;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__385766){
var elem_sel = cljs.core.first(arglist__385766);
var type_fs = cljs.core.rest(arglist__385766);
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
var fire_BANG___delegate = function (node,event_type,p__385767){var vec__385769 = p__385767;var update_event_BANG_ = cljs.core.nth.call(null,vec__385769,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__385767 = null;if (arguments.length > 2) {
  p__385767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__385767);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__385770){
var node = cljs.core.first(arglist__385770);
arglist__385770 = cljs.core.next(arglist__385770);
var event_type = cljs.core.first(arglist__385770);
var p__385767 = cljs.core.rest(arglist__385770);
return fire_BANG___delegate(node,event_type,p__385767);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map