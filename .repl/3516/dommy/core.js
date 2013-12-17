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
var append_BANG___2 = (function (parent,child){var G__65356 = dommy.template.__GT_node_like.call(null,parent);G__65356.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__65356;
});
var append_BANG___3 = (function() { 
var G__65361__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__65357_65362 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__65358_65363 = null;var count__65359_65364 = 0;var i__65360_65365 = 0;while(true){
if((i__65360_65365 < count__65359_65364))
{var c_65366 = cljs.core._nth.call(null,chunk__65358_65363,i__65360_65365);append_BANG_.call(null,parent__$1,c_65366);
{
var G__65367 = seq__65357_65362;
var G__65368 = chunk__65358_65363;
var G__65369 = count__65359_65364;
var G__65370 = (i__65360_65365 + 1);
seq__65357_65362 = G__65367;
chunk__65358_65363 = G__65368;
count__65359_65364 = G__65369;
i__65360_65365 = G__65370;
continue;
}
} else
{var temp__4092__auto___65371 = cljs.core.seq.call(null,seq__65357_65362);if(temp__4092__auto___65371)
{var seq__65357_65372__$1 = temp__4092__auto___65371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65357_65372__$1))
{var c__8552__auto___65373 = cljs.core.chunk_first.call(null,seq__65357_65372__$1);{
var G__65374 = cljs.core.chunk_rest.call(null,seq__65357_65372__$1);
var G__65375 = c__8552__auto___65373;
var G__65376 = cljs.core.count.call(null,c__8552__auto___65373);
var G__65377 = 0;
seq__65357_65362 = G__65374;
chunk__65358_65363 = G__65375;
count__65359_65364 = G__65376;
i__65360_65365 = G__65377;
continue;
}
} else
{var c_65378 = cljs.core.first.call(null,seq__65357_65372__$1);append_BANG_.call(null,parent__$1,c_65378);
{
var G__65379 = cljs.core.next.call(null,seq__65357_65372__$1);
var G__65380 = null;
var G__65381 = 0;
var G__65382 = 0;
seq__65357_65362 = G__65379;
chunk__65358_65363 = G__65380;
count__65359_65364 = G__65381;
i__65360_65365 = G__65382;
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
var G__65361 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65361__delegate.call(this,parent,child,more_children);};
G__65361.cljs$lang$maxFixedArity = 2;
G__65361.cljs$lang$applyTo = (function (arglist__65383){
var parent = cljs.core.first(arglist__65383);
arglist__65383 = cljs.core.next(arglist__65383);
var child = cljs.core.first(arglist__65383);
var more_children = cljs.core.rest(arglist__65383);
return G__65361__delegate(parent,child,more_children);
});
G__65361.cljs$core$IFn$_invoke$arity$variadic = G__65361__delegate;
return G__65361;
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
var G__65392__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__65388_65393 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__65389_65394 = null;var count__65390_65395 = 0;var i__65391_65396 = 0;while(true){
if((i__65391_65396 < count__65390_65395))
{var c_65397 = cljs.core._nth.call(null,chunk__65389_65394,i__65391_65396);prepend_BANG_.call(null,parent__$1,c_65397);
{
var G__65398 = seq__65388_65393;
var G__65399 = chunk__65389_65394;
var G__65400 = count__65390_65395;
var G__65401 = (i__65391_65396 + 1);
seq__65388_65393 = G__65398;
chunk__65389_65394 = G__65399;
count__65390_65395 = G__65400;
i__65391_65396 = G__65401;
continue;
}
} else
{var temp__4092__auto___65402 = cljs.core.seq.call(null,seq__65388_65393);if(temp__4092__auto___65402)
{var seq__65388_65403__$1 = temp__4092__auto___65402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65388_65403__$1))
{var c__8552__auto___65404 = cljs.core.chunk_first.call(null,seq__65388_65403__$1);{
var G__65405 = cljs.core.chunk_rest.call(null,seq__65388_65403__$1);
var G__65406 = c__8552__auto___65404;
var G__65407 = cljs.core.count.call(null,c__8552__auto___65404);
var G__65408 = 0;
seq__65388_65393 = G__65405;
chunk__65389_65394 = G__65406;
count__65390_65395 = G__65407;
i__65391_65396 = G__65408;
continue;
}
} else
{var c_65409 = cljs.core.first.call(null,seq__65388_65403__$1);prepend_BANG_.call(null,parent__$1,c_65409);
{
var G__65410 = cljs.core.next.call(null,seq__65388_65403__$1);
var G__65411 = null;
var G__65412 = 0;
var G__65413 = 0;
seq__65388_65393 = G__65410;
chunk__65389_65394 = G__65411;
count__65390_65395 = G__65412;
i__65391_65396 = G__65413;
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
var G__65392 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65392__delegate.call(this,parent,child,more_children);};
G__65392.cljs$lang$maxFixedArity = 2;
G__65392.cljs$lang$applyTo = (function (arglist__65414){
var parent = cljs.core.first(arglist__65414);
arglist__65414 = cljs.core.next(arglist__65414);
var child = cljs.core.first(arglist__65414);
var more_children = cljs.core.rest(arglist__65414);
return G__65392__delegate(parent,child,more_children);
});
G__65392.cljs$core$IFn$_invoke$arity$variadic = G__65392__delegate;
return G__65392;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___65415 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___65415))
{var next_65416 = temp__4090__auto___65415;parent.insertBefore(actual_node,next_65416);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__65418 = dommy.template.__GT_node_like.call(null,parent);G__65418.innerHTML = "";
dommy.core.append_BANG_.call(null,G__65418,node_like);
return G__65418;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__65420 = elem__$1.parentNode;G__65420.removeChild(elem__$1);
return G__65420;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__65426){var vec__65427 = p__65426;var k = cljs.core.nth.call(null,vec__65427,0,null);var v = cljs.core.nth.call(null,vec__65427,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t65428 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t65428 = (function (v,k,vec__65427,p__65426,container,key_selectors_map,template,selector_map,meta65429){
this.v = v;
this.k = k;
this.vec__65427 = vec__65427;
this.p__65426 = p__65426;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta65429 = meta65429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t65428.cljs$lang$type = true;
dommy.core.t65428.cljs$lang$ctorStr = "dommy.core/t65428";
dommy.core.t65428.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t65428");
});
dommy.core.t65428.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t65428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65430){var self__ = this;
var _65430__$1 = this;return self__.meta65429;
});
dommy.core.t65428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65430,meta65429__$1){var self__ = this;
var _65430__$1 = this;return (new dommy.core.t65428(self__.v,self__.k,self__.vec__65427,self__.p__65426,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta65429__$1));
});
dommy.core.__GT_t65428 = (function __GT_t65428(v__$1,k__$1,vec__65427__$1,p__65426__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta65429){return (new dommy.core.t65428(v__$1,k__$1,vec__65427__$1,p__65426__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta65429));
});
}
return (new dommy.core.t65428(v,k,vec__65427,p__65426,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__65431_SHARP_){return p1__65431_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__65432_SHARP_){return !((p1__65432_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__65433){var vec__65434 = p__65433;var special_mouse_event = cljs.core.nth.call(null,vec__65434,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__65434,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__65435){
var elem = cljs.core.first(arglist__65435);
arglist__65435 = cljs.core.next(arglist__65435);
var f = cljs.core.first(arglist__65435);
var args = cljs.core.rest(arglist__65435);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__65436_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__65436_SHARP_));
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
var vec__65460_65483 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65484 = cljs.core.nth.call(null,vec__65460_65483,0,null);var selector_65485 = cljs.core.nth.call(null,vec__65460_65483,1,null);var seq__65461_65486 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65468_65487 = null;var count__65469_65488 = 0;var i__65470_65489 = 0;while(true){
if((i__65470_65489 < count__65469_65488))
{var vec__65477_65490 = cljs.core._nth.call(null,chunk__65468_65487,i__65470_65489);var orig_type_65491 = cljs.core.nth.call(null,vec__65477_65490,0,null);var f_65492 = cljs.core.nth.call(null,vec__65477_65490,1,null);var seq__65471_65493 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65491,new cljs.core.PersistentArrayMap.fromArray([orig_type_65491,cljs.core.identity], true, false)));var chunk__65473_65494 = null;var count__65474_65495 = 0;var i__65475_65496 = 0;while(true){
if((i__65475_65496 < count__65474_65495))
{var vec__65478_65497 = cljs.core._nth.call(null,chunk__65473_65494,i__65475_65496);var actual_type_65498 = cljs.core.nth.call(null,vec__65478_65497,0,null);var factory_65499 = cljs.core.nth.call(null,vec__65478_65497,1,null);var canonical_f_65500 = (cljs.core.truth_(selector_65485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65484,selector_65485):cljs.core.identity).call(null,factory_65499.call(null,f_65492));dommy.core.update_event_listeners_BANG_.call(null,elem_65484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65485,actual_type_65498,f_65492], null),canonical_f_65500);
if(cljs.core.truth_(elem_65484.addEventListener))
{elem_65484.addEventListener(cljs.core.name.call(null,actual_type_65498),canonical_f_65500);
} else
{elem_65484.attachEvent(cljs.core.name.call(null,actual_type_65498),canonical_f_65500);
}
{
var G__65501 = seq__65471_65493;
var G__65502 = chunk__65473_65494;
var G__65503 = count__65474_65495;
var G__65504 = (i__65475_65496 + 1);
seq__65471_65493 = G__65501;
chunk__65473_65494 = G__65502;
count__65474_65495 = G__65503;
i__65475_65496 = G__65504;
continue;
}
} else
{var temp__4092__auto___65505 = cljs.core.seq.call(null,seq__65471_65493);if(temp__4092__auto___65505)
{var seq__65471_65506__$1 = temp__4092__auto___65505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65471_65506__$1))
{var c__8552__auto___65507 = cljs.core.chunk_first.call(null,seq__65471_65506__$1);{
var G__65508 = cljs.core.chunk_rest.call(null,seq__65471_65506__$1);
var G__65509 = c__8552__auto___65507;
var G__65510 = cljs.core.count.call(null,c__8552__auto___65507);
var G__65511 = 0;
seq__65471_65493 = G__65508;
chunk__65473_65494 = G__65509;
count__65474_65495 = G__65510;
i__65475_65496 = G__65511;
continue;
}
} else
{var vec__65479_65512 = cljs.core.first.call(null,seq__65471_65506__$1);var actual_type_65513 = cljs.core.nth.call(null,vec__65479_65512,0,null);var factory_65514 = cljs.core.nth.call(null,vec__65479_65512,1,null);var canonical_f_65515 = (cljs.core.truth_(selector_65485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65484,selector_65485):cljs.core.identity).call(null,factory_65514.call(null,f_65492));dommy.core.update_event_listeners_BANG_.call(null,elem_65484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65485,actual_type_65513,f_65492], null),canonical_f_65515);
if(cljs.core.truth_(elem_65484.addEventListener))
{elem_65484.addEventListener(cljs.core.name.call(null,actual_type_65513),canonical_f_65515);
} else
{elem_65484.attachEvent(cljs.core.name.call(null,actual_type_65513),canonical_f_65515);
}
{
var G__65516 = cljs.core.next.call(null,seq__65471_65506__$1);
var G__65517 = null;
var G__65518 = 0;
var G__65519 = 0;
seq__65471_65493 = G__65516;
chunk__65473_65494 = G__65517;
count__65474_65495 = G__65518;
i__65475_65496 = G__65519;
continue;
}
}
} else
{}
}
break;
}
{
var G__65520 = seq__65461_65486;
var G__65521 = chunk__65468_65487;
var G__65522 = count__65469_65488;
var G__65523 = (i__65470_65489 + 1);
seq__65461_65486 = G__65520;
chunk__65468_65487 = G__65521;
count__65469_65488 = G__65522;
i__65470_65489 = G__65523;
continue;
}
} else
{var temp__4092__auto___65524 = cljs.core.seq.call(null,seq__65461_65486);if(temp__4092__auto___65524)
{var seq__65461_65525__$1 = temp__4092__auto___65524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65461_65525__$1))
{var c__8552__auto___65526 = cljs.core.chunk_first.call(null,seq__65461_65525__$1);{
var G__65527 = cljs.core.chunk_rest.call(null,seq__65461_65525__$1);
var G__65528 = c__8552__auto___65526;
var G__65529 = cljs.core.count.call(null,c__8552__auto___65526);
var G__65530 = 0;
seq__65461_65486 = G__65527;
chunk__65468_65487 = G__65528;
count__65469_65488 = G__65529;
i__65470_65489 = G__65530;
continue;
}
} else
{var vec__65480_65531 = cljs.core.first.call(null,seq__65461_65525__$1);var orig_type_65532 = cljs.core.nth.call(null,vec__65480_65531,0,null);var f_65533 = cljs.core.nth.call(null,vec__65480_65531,1,null);var seq__65462_65534 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65532,new cljs.core.PersistentArrayMap.fromArray([orig_type_65532,cljs.core.identity], true, false)));var chunk__65464_65535 = null;var count__65465_65536 = 0;var i__65466_65537 = 0;while(true){
if((i__65466_65537 < count__65465_65536))
{var vec__65481_65538 = cljs.core._nth.call(null,chunk__65464_65535,i__65466_65537);var actual_type_65539 = cljs.core.nth.call(null,vec__65481_65538,0,null);var factory_65540 = cljs.core.nth.call(null,vec__65481_65538,1,null);var canonical_f_65541 = (cljs.core.truth_(selector_65485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65484,selector_65485):cljs.core.identity).call(null,factory_65540.call(null,f_65533));dommy.core.update_event_listeners_BANG_.call(null,elem_65484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65485,actual_type_65539,f_65533], null),canonical_f_65541);
if(cljs.core.truth_(elem_65484.addEventListener))
{elem_65484.addEventListener(cljs.core.name.call(null,actual_type_65539),canonical_f_65541);
} else
{elem_65484.attachEvent(cljs.core.name.call(null,actual_type_65539),canonical_f_65541);
}
{
var G__65542 = seq__65462_65534;
var G__65543 = chunk__65464_65535;
var G__65544 = count__65465_65536;
var G__65545 = (i__65466_65537 + 1);
seq__65462_65534 = G__65542;
chunk__65464_65535 = G__65543;
count__65465_65536 = G__65544;
i__65466_65537 = G__65545;
continue;
}
} else
{var temp__4092__auto___65546__$1 = cljs.core.seq.call(null,seq__65462_65534);if(temp__4092__auto___65546__$1)
{var seq__65462_65547__$1 = temp__4092__auto___65546__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65462_65547__$1))
{var c__8552__auto___65548 = cljs.core.chunk_first.call(null,seq__65462_65547__$1);{
var G__65549 = cljs.core.chunk_rest.call(null,seq__65462_65547__$1);
var G__65550 = c__8552__auto___65548;
var G__65551 = cljs.core.count.call(null,c__8552__auto___65548);
var G__65552 = 0;
seq__65462_65534 = G__65549;
chunk__65464_65535 = G__65550;
count__65465_65536 = G__65551;
i__65466_65537 = G__65552;
continue;
}
} else
{var vec__65482_65553 = cljs.core.first.call(null,seq__65462_65547__$1);var actual_type_65554 = cljs.core.nth.call(null,vec__65482_65553,0,null);var factory_65555 = cljs.core.nth.call(null,vec__65482_65553,1,null);var canonical_f_65556 = (cljs.core.truth_(selector_65485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_65484,selector_65485):cljs.core.identity).call(null,factory_65555.call(null,f_65533));dommy.core.update_event_listeners_BANG_.call(null,elem_65484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65485,actual_type_65554,f_65533], null),canonical_f_65556);
if(cljs.core.truth_(elem_65484.addEventListener))
{elem_65484.addEventListener(cljs.core.name.call(null,actual_type_65554),canonical_f_65556);
} else
{elem_65484.attachEvent(cljs.core.name.call(null,actual_type_65554),canonical_f_65556);
}
{
var G__65557 = cljs.core.next.call(null,seq__65462_65547__$1);
var G__65558 = null;
var G__65559 = 0;
var G__65560 = 0;
seq__65462_65534 = G__65557;
chunk__65464_65535 = G__65558;
count__65465_65536 = G__65559;
i__65466_65537 = G__65560;
continue;
}
}
} else
{}
}
break;
}
{
var G__65561 = cljs.core.next.call(null,seq__65461_65525__$1);
var G__65562 = null;
var G__65563 = 0;
var G__65564 = 0;
seq__65461_65486 = G__65561;
chunk__65468_65487 = G__65562;
count__65469_65488 = G__65563;
i__65470_65489 = G__65564;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__65565){
var elem_sel = cljs.core.first(arglist__65565);
var type_fs = cljs.core.rest(arglist__65565);
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
var vec__65589_65612 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65613 = cljs.core.nth.call(null,vec__65589_65612,0,null);var selector_65614 = cljs.core.nth.call(null,vec__65589_65612,1,null);var seq__65590_65615 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65597_65616 = null;var count__65598_65617 = 0;var i__65599_65618 = 0;while(true){
if((i__65599_65618 < count__65598_65617))
{var vec__65606_65619 = cljs.core._nth.call(null,chunk__65597_65616,i__65599_65618);var orig_type_65620 = cljs.core.nth.call(null,vec__65606_65619,0,null);var f_65621 = cljs.core.nth.call(null,vec__65606_65619,1,null);var seq__65600_65622 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65620,new cljs.core.PersistentArrayMap.fromArray([orig_type_65620,cljs.core.identity], true, false)));var chunk__65602_65623 = null;var count__65603_65624 = 0;var i__65604_65625 = 0;while(true){
if((i__65604_65625 < count__65603_65624))
{var vec__65607_65626 = cljs.core._nth.call(null,chunk__65602_65623,i__65604_65625);var actual_type_65627 = cljs.core.nth.call(null,vec__65607_65626,0,null);var __65628 = cljs.core.nth.call(null,vec__65607_65626,1,null);var keys_65629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65614,actual_type_65627,f_65621], null);var canonical_f_65630 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65613),keys_65629);dommy.core.update_event_listeners_BANG_.call(null,elem_65613,dommy.utils.dissoc_in,keys_65629);
if(cljs.core.truth_(elem_65613.removeEventListener))
{elem_65613.removeEventListener(cljs.core.name.call(null,actual_type_65627),canonical_f_65630);
} else
{elem_65613.detachEvent(cljs.core.name.call(null,actual_type_65627),canonical_f_65630);
}
{
var G__65631 = seq__65600_65622;
var G__65632 = chunk__65602_65623;
var G__65633 = count__65603_65624;
var G__65634 = (i__65604_65625 + 1);
seq__65600_65622 = G__65631;
chunk__65602_65623 = G__65632;
count__65603_65624 = G__65633;
i__65604_65625 = G__65634;
continue;
}
} else
{var temp__4092__auto___65635 = cljs.core.seq.call(null,seq__65600_65622);if(temp__4092__auto___65635)
{var seq__65600_65636__$1 = temp__4092__auto___65635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65600_65636__$1))
{var c__8552__auto___65637 = cljs.core.chunk_first.call(null,seq__65600_65636__$1);{
var G__65638 = cljs.core.chunk_rest.call(null,seq__65600_65636__$1);
var G__65639 = c__8552__auto___65637;
var G__65640 = cljs.core.count.call(null,c__8552__auto___65637);
var G__65641 = 0;
seq__65600_65622 = G__65638;
chunk__65602_65623 = G__65639;
count__65603_65624 = G__65640;
i__65604_65625 = G__65641;
continue;
}
} else
{var vec__65608_65642 = cljs.core.first.call(null,seq__65600_65636__$1);var actual_type_65643 = cljs.core.nth.call(null,vec__65608_65642,0,null);var __65644 = cljs.core.nth.call(null,vec__65608_65642,1,null);var keys_65645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65614,actual_type_65643,f_65621], null);var canonical_f_65646 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65613),keys_65645);dommy.core.update_event_listeners_BANG_.call(null,elem_65613,dommy.utils.dissoc_in,keys_65645);
if(cljs.core.truth_(elem_65613.removeEventListener))
{elem_65613.removeEventListener(cljs.core.name.call(null,actual_type_65643),canonical_f_65646);
} else
{elem_65613.detachEvent(cljs.core.name.call(null,actual_type_65643),canonical_f_65646);
}
{
var G__65647 = cljs.core.next.call(null,seq__65600_65636__$1);
var G__65648 = null;
var G__65649 = 0;
var G__65650 = 0;
seq__65600_65622 = G__65647;
chunk__65602_65623 = G__65648;
count__65603_65624 = G__65649;
i__65604_65625 = G__65650;
continue;
}
}
} else
{}
}
break;
}
{
var G__65651 = seq__65590_65615;
var G__65652 = chunk__65597_65616;
var G__65653 = count__65598_65617;
var G__65654 = (i__65599_65618 + 1);
seq__65590_65615 = G__65651;
chunk__65597_65616 = G__65652;
count__65598_65617 = G__65653;
i__65599_65618 = G__65654;
continue;
}
} else
{var temp__4092__auto___65655 = cljs.core.seq.call(null,seq__65590_65615);if(temp__4092__auto___65655)
{var seq__65590_65656__$1 = temp__4092__auto___65655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65590_65656__$1))
{var c__8552__auto___65657 = cljs.core.chunk_first.call(null,seq__65590_65656__$1);{
var G__65658 = cljs.core.chunk_rest.call(null,seq__65590_65656__$1);
var G__65659 = c__8552__auto___65657;
var G__65660 = cljs.core.count.call(null,c__8552__auto___65657);
var G__65661 = 0;
seq__65590_65615 = G__65658;
chunk__65597_65616 = G__65659;
count__65598_65617 = G__65660;
i__65599_65618 = G__65661;
continue;
}
} else
{var vec__65609_65662 = cljs.core.first.call(null,seq__65590_65656__$1);var orig_type_65663 = cljs.core.nth.call(null,vec__65609_65662,0,null);var f_65664 = cljs.core.nth.call(null,vec__65609_65662,1,null);var seq__65591_65665 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_65663,new cljs.core.PersistentArrayMap.fromArray([orig_type_65663,cljs.core.identity], true, false)));var chunk__65593_65666 = null;var count__65594_65667 = 0;var i__65595_65668 = 0;while(true){
if((i__65595_65668 < count__65594_65667))
{var vec__65610_65669 = cljs.core._nth.call(null,chunk__65593_65666,i__65595_65668);var actual_type_65670 = cljs.core.nth.call(null,vec__65610_65669,0,null);var __65671 = cljs.core.nth.call(null,vec__65610_65669,1,null);var keys_65672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65614,actual_type_65670,f_65664], null);var canonical_f_65673 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65613),keys_65672);dommy.core.update_event_listeners_BANG_.call(null,elem_65613,dommy.utils.dissoc_in,keys_65672);
if(cljs.core.truth_(elem_65613.removeEventListener))
{elem_65613.removeEventListener(cljs.core.name.call(null,actual_type_65670),canonical_f_65673);
} else
{elem_65613.detachEvent(cljs.core.name.call(null,actual_type_65670),canonical_f_65673);
}
{
var G__65674 = seq__65591_65665;
var G__65675 = chunk__65593_65666;
var G__65676 = count__65594_65667;
var G__65677 = (i__65595_65668 + 1);
seq__65591_65665 = G__65674;
chunk__65593_65666 = G__65675;
count__65594_65667 = G__65676;
i__65595_65668 = G__65677;
continue;
}
} else
{var temp__4092__auto___65678__$1 = cljs.core.seq.call(null,seq__65591_65665);if(temp__4092__auto___65678__$1)
{var seq__65591_65679__$1 = temp__4092__auto___65678__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65591_65679__$1))
{var c__8552__auto___65680 = cljs.core.chunk_first.call(null,seq__65591_65679__$1);{
var G__65681 = cljs.core.chunk_rest.call(null,seq__65591_65679__$1);
var G__65682 = c__8552__auto___65680;
var G__65683 = cljs.core.count.call(null,c__8552__auto___65680);
var G__65684 = 0;
seq__65591_65665 = G__65681;
chunk__65593_65666 = G__65682;
count__65594_65667 = G__65683;
i__65595_65668 = G__65684;
continue;
}
} else
{var vec__65611_65685 = cljs.core.first.call(null,seq__65591_65679__$1);var actual_type_65686 = cljs.core.nth.call(null,vec__65611_65685,0,null);var __65687 = cljs.core.nth.call(null,vec__65611_65685,1,null);var keys_65688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_65614,actual_type_65686,f_65664], null);var canonical_f_65689 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_65613),keys_65688);dommy.core.update_event_listeners_BANG_.call(null,elem_65613,dommy.utils.dissoc_in,keys_65688);
if(cljs.core.truth_(elem_65613.removeEventListener))
{elem_65613.removeEventListener(cljs.core.name.call(null,actual_type_65686),canonical_f_65689);
} else
{elem_65613.detachEvent(cljs.core.name.call(null,actual_type_65686),canonical_f_65689);
}
{
var G__65690 = cljs.core.next.call(null,seq__65591_65679__$1);
var G__65691 = null;
var G__65692 = 0;
var G__65693 = 0;
seq__65591_65665 = G__65690;
chunk__65593_65666 = G__65691;
count__65594_65667 = G__65692;
i__65595_65668 = G__65693;
continue;
}
}
} else
{}
}
break;
}
{
var G__65694 = cljs.core.next.call(null,seq__65590_65656__$1);
var G__65695 = null;
var G__65696 = 0;
var G__65697 = 0;
seq__65590_65615 = G__65694;
chunk__65597_65616 = G__65695;
count__65598_65617 = G__65696;
i__65599_65618 = G__65697;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__65698){
var elem_sel = cljs.core.first(arglist__65698);
var type_fs = cljs.core.rest(arglist__65698);
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
var vec__65706_65713 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_65714 = cljs.core.nth.call(null,vec__65706_65713,0,null);var selector_65715 = cljs.core.nth.call(null,vec__65706_65713,1,null);var seq__65707_65716 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__65708_65717 = null;var count__65709_65718 = 0;var i__65710_65719 = 0;while(true){
if((i__65710_65719 < count__65709_65718))
{var vec__65711_65720 = cljs.core._nth.call(null,chunk__65708_65717,i__65710_65719);var type_65721 = cljs.core.nth.call(null,vec__65711_65720,0,null);var f_65722 = cljs.core.nth.call(null,vec__65711_65720,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_65721,((function (seq__65707_65716,chunk__65708_65717,count__65709_65718,i__65710_65719,vec__65711_65720,type_65721,f_65722){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_65721,this_fn);
return f_65722.call(null,e);
});})(seq__65707_65716,chunk__65708_65717,count__65709_65718,i__65710_65719,vec__65711_65720,type_65721,f_65722))
);
{
var G__65723 = seq__65707_65716;
var G__65724 = chunk__65708_65717;
var G__65725 = count__65709_65718;
var G__65726 = (i__65710_65719 + 1);
seq__65707_65716 = G__65723;
chunk__65708_65717 = G__65724;
count__65709_65718 = G__65725;
i__65710_65719 = G__65726;
continue;
}
} else
{var temp__4092__auto___65727 = cljs.core.seq.call(null,seq__65707_65716);if(temp__4092__auto___65727)
{var seq__65707_65728__$1 = temp__4092__auto___65727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65707_65728__$1))
{var c__8552__auto___65729 = cljs.core.chunk_first.call(null,seq__65707_65728__$1);{
var G__65730 = cljs.core.chunk_rest.call(null,seq__65707_65728__$1);
var G__65731 = c__8552__auto___65729;
var G__65732 = cljs.core.count.call(null,c__8552__auto___65729);
var G__65733 = 0;
seq__65707_65716 = G__65730;
chunk__65708_65717 = G__65731;
count__65709_65718 = G__65732;
i__65710_65719 = G__65733;
continue;
}
} else
{var vec__65712_65734 = cljs.core.first.call(null,seq__65707_65728__$1);var type_65735 = cljs.core.nth.call(null,vec__65712_65734,0,null);var f_65736 = cljs.core.nth.call(null,vec__65712_65734,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_65735,((function (seq__65707_65716,chunk__65708_65717,count__65709_65718,i__65710_65719,vec__65712_65734,type_65735,f_65736,seq__65707_65728__$1,temp__4092__auto___65727){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_65735,this_fn);
return f_65736.call(null,e);
});})(seq__65707_65716,chunk__65708_65717,count__65709_65718,i__65710_65719,vec__65712_65734,type_65735,f_65736,seq__65707_65728__$1,temp__4092__auto___65727))
);
{
var G__65737 = cljs.core.next.call(null,seq__65707_65728__$1);
var G__65738 = null;
var G__65739 = 0;
var G__65740 = 0;
seq__65707_65716 = G__65737;
chunk__65708_65717 = G__65738;
count__65709_65718 = G__65739;
i__65710_65719 = G__65740;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__65741){
var elem_sel = cljs.core.first(arglist__65741);
var type_fs = cljs.core.rest(arglist__65741);
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
var fire_BANG___delegate = function (node,event_type,p__65742){var vec__65744 = p__65742;var update_event_BANG_ = cljs.core.nth.call(null,vec__65744,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__65742 = null;if (arguments.length > 2) {
  p__65742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__65742);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__65745){
var node = cljs.core.first(arglist__65745);
arglist__65745 = cljs.core.next(arglist__65745);
var event_type = cljs.core.first(arglist__65745);
var p__65742 = cljs.core.rest(arglist__65745);
return fire_BANG___delegate(node,event_type,p__65742);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
