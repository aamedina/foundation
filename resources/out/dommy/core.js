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
var append_BANG___2 = (function (parent,child){var G__358362 = dommy.template.__GT_node_like.call(null,parent);G__358362.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__358362;
});
var append_BANG___3 = (function() { 
var G__358367__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__358363_358368 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__358364_358369 = null;var count__358365_358370 = 0;var i__358366_358371 = 0;while(true){
if((i__358366_358371 < count__358365_358370))
{var c_358372 = cljs.core._nth.call(null,chunk__358364_358369,i__358366_358371);append_BANG_.call(null,parent__$1,c_358372);
{
var G__358373 = seq__358363_358368;
var G__358374 = chunk__358364_358369;
var G__358375 = count__358365_358370;
var G__358376 = (i__358366_358371 + 1);
seq__358363_358368 = G__358373;
chunk__358364_358369 = G__358374;
count__358365_358370 = G__358375;
i__358366_358371 = G__358376;
continue;
}
} else
{var temp__4092__auto___358377 = cljs.core.seq.call(null,seq__358363_358368);if(temp__4092__auto___358377)
{var seq__358363_358378__$1 = temp__4092__auto___358377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358363_358378__$1))
{var c__14708__auto___358379 = cljs.core.chunk_first.call(null,seq__358363_358378__$1);{
var G__358380 = cljs.core.chunk_rest.call(null,seq__358363_358378__$1);
var G__358381 = c__14708__auto___358379;
var G__358382 = cljs.core.count.call(null,c__14708__auto___358379);
var G__358383 = 0;
seq__358363_358368 = G__358380;
chunk__358364_358369 = G__358381;
count__358365_358370 = G__358382;
i__358366_358371 = G__358383;
continue;
}
} else
{var c_358384 = cljs.core.first.call(null,seq__358363_358378__$1);append_BANG_.call(null,parent__$1,c_358384);
{
var G__358385 = cljs.core.next.call(null,seq__358363_358378__$1);
var G__358386 = null;
var G__358387 = 0;
var G__358388 = 0;
seq__358363_358368 = G__358385;
chunk__358364_358369 = G__358386;
count__358365_358370 = G__358387;
i__358366_358371 = G__358388;
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
var G__358367 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__358367__delegate.call(this,parent,child,more_children);};
G__358367.cljs$lang$maxFixedArity = 2;
G__358367.cljs$lang$applyTo = (function (arglist__358389){
var parent = cljs.core.first(arglist__358389);
arglist__358389 = cljs.core.next(arglist__358389);
var child = cljs.core.first(arglist__358389);
var more_children = cljs.core.rest(arglist__358389);
return G__358367__delegate(parent,child,more_children);
});
G__358367.cljs$core$IFn$_invoke$arity$variadic = G__358367__delegate;
return G__358367;
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
var G__358398__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__358394_358399 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__358395_358400 = null;var count__358396_358401 = 0;var i__358397_358402 = 0;while(true){
if((i__358397_358402 < count__358396_358401))
{var c_358403 = cljs.core._nth.call(null,chunk__358395_358400,i__358397_358402);prepend_BANG_.call(null,parent__$1,c_358403);
{
var G__358404 = seq__358394_358399;
var G__358405 = chunk__358395_358400;
var G__358406 = count__358396_358401;
var G__358407 = (i__358397_358402 + 1);
seq__358394_358399 = G__358404;
chunk__358395_358400 = G__358405;
count__358396_358401 = G__358406;
i__358397_358402 = G__358407;
continue;
}
} else
{var temp__4092__auto___358408 = cljs.core.seq.call(null,seq__358394_358399);if(temp__4092__auto___358408)
{var seq__358394_358409__$1 = temp__4092__auto___358408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358394_358409__$1))
{var c__14708__auto___358410 = cljs.core.chunk_first.call(null,seq__358394_358409__$1);{
var G__358411 = cljs.core.chunk_rest.call(null,seq__358394_358409__$1);
var G__358412 = c__14708__auto___358410;
var G__358413 = cljs.core.count.call(null,c__14708__auto___358410);
var G__358414 = 0;
seq__358394_358399 = G__358411;
chunk__358395_358400 = G__358412;
count__358396_358401 = G__358413;
i__358397_358402 = G__358414;
continue;
}
} else
{var c_358415 = cljs.core.first.call(null,seq__358394_358409__$1);prepend_BANG_.call(null,parent__$1,c_358415);
{
var G__358416 = cljs.core.next.call(null,seq__358394_358409__$1);
var G__358417 = null;
var G__358418 = 0;
var G__358419 = 0;
seq__358394_358399 = G__358416;
chunk__358395_358400 = G__358417;
count__358396_358401 = G__358418;
i__358397_358402 = G__358419;
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
var G__358398 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__358398__delegate.call(this,parent,child,more_children);};
G__358398.cljs$lang$maxFixedArity = 2;
G__358398.cljs$lang$applyTo = (function (arglist__358420){
var parent = cljs.core.first(arglist__358420);
arglist__358420 = cljs.core.next(arglist__358420);
var child = cljs.core.first(arglist__358420);
var more_children = cljs.core.rest(arglist__358420);
return G__358398__delegate(parent,child,more_children);
});
G__358398.cljs$core$IFn$_invoke$arity$variadic = G__358398__delegate;
return G__358398;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___358421 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___358421))
{var next_358422 = temp__4090__auto___358421;parent.insertBefore(actual_node,next_358422);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__358424 = dommy.template.__GT_node_like.call(null,parent);G__358424.innerHTML = "";
dommy.core.append_BANG_.call(null,G__358424,node_like);
return G__358424;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__358426 = elem__$1.parentNode;G__358426.removeChild(elem__$1);
return G__358426;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__358432){var vec__358433 = p__358432;var k = cljs.core.nth.call(null,vec__358433,0,null);var v = cljs.core.nth.call(null,vec__358433,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t358434 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t358434 = (function (v,k,vec__358433,p__358432,container,key_selectors_map,template,selector_map,meta358435){
this.v = v;
this.k = k;
this.vec__358433 = vec__358433;
this.p__358432 = p__358432;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta358435 = meta358435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t358434.cljs$lang$type = true;
dommy.core.t358434.cljs$lang$ctorStr = "dommy.core/t358434";
dommy.core.t358434.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"dommy.core/t358434");
});
dommy.core.t358434.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t358434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_358436){var self__ = this;
var _358436__$1 = this;return self__.meta358435;
});
dommy.core.t358434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_358436,meta358435__$1){var self__ = this;
var _358436__$1 = this;return (new dommy.core.t358434(self__.v,self__.k,self__.vec__358433,self__.p__358432,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta358435__$1));
});
dommy.core.__GT_t358434 = (function __GT_t358434(v__$1,k__$1,vec__358433__$1,p__358432__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta358435){return (new dommy.core.t358434(v__$1,k__$1,vec__358433__$1,p__358432__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta358435));
});
}
return (new dommy.core.t358434(v,k,vec__358433,p__358432,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__358437_SHARP_){return p1__358437_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__358438_SHARP_){return !((p1__358438_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__358439){var vec__358440 = p__358439;var special_mouse_event = cljs.core.nth.call(null,vec__358440,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__358440,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13979__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13979__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__358441){
var elem = cljs.core.first(arglist__358441);
arglist__358441 = cljs.core.next(arglist__358441);
var f = cljs.core.first(arglist__358441);
var args = cljs.core.rest(arglist__358441);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__358442_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__358442_SHARP_));
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
var vec__358466_358489 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_358490 = cljs.core.nth.call(null,vec__358466_358489,0,null);var selector_358491 = cljs.core.nth.call(null,vec__358466_358489,1,null);var seq__358467_358492 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__358474_358493 = null;var count__358475_358494 = 0;var i__358476_358495 = 0;while(true){
if((i__358476_358495 < count__358475_358494))
{var vec__358483_358496 = cljs.core._nth.call(null,chunk__358474_358493,i__358476_358495);var orig_type_358497 = cljs.core.nth.call(null,vec__358483_358496,0,null);var f_358498 = cljs.core.nth.call(null,vec__358483_358496,1,null);var seq__358477_358499 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_358497,new cljs.core.PersistentArrayMap.fromArray([orig_type_358497,cljs.core.identity], true, false)));var chunk__358479_358500 = null;var count__358480_358501 = 0;var i__358481_358502 = 0;while(true){
if((i__358481_358502 < count__358480_358501))
{var vec__358484_358503 = cljs.core._nth.call(null,chunk__358479_358500,i__358481_358502);var actual_type_358504 = cljs.core.nth.call(null,vec__358484_358503,0,null);var factory_358505 = cljs.core.nth.call(null,vec__358484_358503,1,null);var canonical_f_358506 = (cljs.core.truth_(selector_358491)?cljs.core.partial.call(null,dommy.core.live_listener,elem_358490,selector_358491):cljs.core.identity).call(null,factory_358505.call(null,f_358498));dommy.core.update_event_listeners_BANG_.call(null,elem_358490,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358491,actual_type_358504,f_358498], null),canonical_f_358506);
if(cljs.core.truth_(elem_358490.addEventListener))
{elem_358490.addEventListener(cljs.core.name.call(null,actual_type_358504),canonical_f_358506);
} else
{elem_358490.attachEvent(cljs.core.name.call(null,actual_type_358504),canonical_f_358506);
}
{
var G__358507 = seq__358477_358499;
var G__358508 = chunk__358479_358500;
var G__358509 = count__358480_358501;
var G__358510 = (i__358481_358502 + 1);
seq__358477_358499 = G__358507;
chunk__358479_358500 = G__358508;
count__358480_358501 = G__358509;
i__358481_358502 = G__358510;
continue;
}
} else
{var temp__4092__auto___358511 = cljs.core.seq.call(null,seq__358477_358499);if(temp__4092__auto___358511)
{var seq__358477_358512__$1 = temp__4092__auto___358511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358477_358512__$1))
{var c__14708__auto___358513 = cljs.core.chunk_first.call(null,seq__358477_358512__$1);{
var G__358514 = cljs.core.chunk_rest.call(null,seq__358477_358512__$1);
var G__358515 = c__14708__auto___358513;
var G__358516 = cljs.core.count.call(null,c__14708__auto___358513);
var G__358517 = 0;
seq__358477_358499 = G__358514;
chunk__358479_358500 = G__358515;
count__358480_358501 = G__358516;
i__358481_358502 = G__358517;
continue;
}
} else
{var vec__358485_358518 = cljs.core.first.call(null,seq__358477_358512__$1);var actual_type_358519 = cljs.core.nth.call(null,vec__358485_358518,0,null);var factory_358520 = cljs.core.nth.call(null,vec__358485_358518,1,null);var canonical_f_358521 = (cljs.core.truth_(selector_358491)?cljs.core.partial.call(null,dommy.core.live_listener,elem_358490,selector_358491):cljs.core.identity).call(null,factory_358520.call(null,f_358498));dommy.core.update_event_listeners_BANG_.call(null,elem_358490,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358491,actual_type_358519,f_358498], null),canonical_f_358521);
if(cljs.core.truth_(elem_358490.addEventListener))
{elem_358490.addEventListener(cljs.core.name.call(null,actual_type_358519),canonical_f_358521);
} else
{elem_358490.attachEvent(cljs.core.name.call(null,actual_type_358519),canonical_f_358521);
}
{
var G__358522 = cljs.core.next.call(null,seq__358477_358512__$1);
var G__358523 = null;
var G__358524 = 0;
var G__358525 = 0;
seq__358477_358499 = G__358522;
chunk__358479_358500 = G__358523;
count__358480_358501 = G__358524;
i__358481_358502 = G__358525;
continue;
}
}
} else
{}
}
break;
}
{
var G__358526 = seq__358467_358492;
var G__358527 = chunk__358474_358493;
var G__358528 = count__358475_358494;
var G__358529 = (i__358476_358495 + 1);
seq__358467_358492 = G__358526;
chunk__358474_358493 = G__358527;
count__358475_358494 = G__358528;
i__358476_358495 = G__358529;
continue;
}
} else
{var temp__4092__auto___358530 = cljs.core.seq.call(null,seq__358467_358492);if(temp__4092__auto___358530)
{var seq__358467_358531__$1 = temp__4092__auto___358530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358467_358531__$1))
{var c__14708__auto___358532 = cljs.core.chunk_first.call(null,seq__358467_358531__$1);{
var G__358533 = cljs.core.chunk_rest.call(null,seq__358467_358531__$1);
var G__358534 = c__14708__auto___358532;
var G__358535 = cljs.core.count.call(null,c__14708__auto___358532);
var G__358536 = 0;
seq__358467_358492 = G__358533;
chunk__358474_358493 = G__358534;
count__358475_358494 = G__358535;
i__358476_358495 = G__358536;
continue;
}
} else
{var vec__358486_358537 = cljs.core.first.call(null,seq__358467_358531__$1);var orig_type_358538 = cljs.core.nth.call(null,vec__358486_358537,0,null);var f_358539 = cljs.core.nth.call(null,vec__358486_358537,1,null);var seq__358468_358540 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_358538,new cljs.core.PersistentArrayMap.fromArray([orig_type_358538,cljs.core.identity], true, false)));var chunk__358470_358541 = null;var count__358471_358542 = 0;var i__358472_358543 = 0;while(true){
if((i__358472_358543 < count__358471_358542))
{var vec__358487_358544 = cljs.core._nth.call(null,chunk__358470_358541,i__358472_358543);var actual_type_358545 = cljs.core.nth.call(null,vec__358487_358544,0,null);var factory_358546 = cljs.core.nth.call(null,vec__358487_358544,1,null);var canonical_f_358547 = (cljs.core.truth_(selector_358491)?cljs.core.partial.call(null,dommy.core.live_listener,elem_358490,selector_358491):cljs.core.identity).call(null,factory_358546.call(null,f_358539));dommy.core.update_event_listeners_BANG_.call(null,elem_358490,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358491,actual_type_358545,f_358539], null),canonical_f_358547);
if(cljs.core.truth_(elem_358490.addEventListener))
{elem_358490.addEventListener(cljs.core.name.call(null,actual_type_358545),canonical_f_358547);
} else
{elem_358490.attachEvent(cljs.core.name.call(null,actual_type_358545),canonical_f_358547);
}
{
var G__358548 = seq__358468_358540;
var G__358549 = chunk__358470_358541;
var G__358550 = count__358471_358542;
var G__358551 = (i__358472_358543 + 1);
seq__358468_358540 = G__358548;
chunk__358470_358541 = G__358549;
count__358471_358542 = G__358550;
i__358472_358543 = G__358551;
continue;
}
} else
{var temp__4092__auto___358552__$1 = cljs.core.seq.call(null,seq__358468_358540);if(temp__4092__auto___358552__$1)
{var seq__358468_358553__$1 = temp__4092__auto___358552__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358468_358553__$1))
{var c__14708__auto___358554 = cljs.core.chunk_first.call(null,seq__358468_358553__$1);{
var G__358555 = cljs.core.chunk_rest.call(null,seq__358468_358553__$1);
var G__358556 = c__14708__auto___358554;
var G__358557 = cljs.core.count.call(null,c__14708__auto___358554);
var G__358558 = 0;
seq__358468_358540 = G__358555;
chunk__358470_358541 = G__358556;
count__358471_358542 = G__358557;
i__358472_358543 = G__358558;
continue;
}
} else
{var vec__358488_358559 = cljs.core.first.call(null,seq__358468_358553__$1);var actual_type_358560 = cljs.core.nth.call(null,vec__358488_358559,0,null);var factory_358561 = cljs.core.nth.call(null,vec__358488_358559,1,null);var canonical_f_358562 = (cljs.core.truth_(selector_358491)?cljs.core.partial.call(null,dommy.core.live_listener,elem_358490,selector_358491):cljs.core.identity).call(null,factory_358561.call(null,f_358539));dommy.core.update_event_listeners_BANG_.call(null,elem_358490,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358491,actual_type_358560,f_358539], null),canonical_f_358562);
if(cljs.core.truth_(elem_358490.addEventListener))
{elem_358490.addEventListener(cljs.core.name.call(null,actual_type_358560),canonical_f_358562);
} else
{elem_358490.attachEvent(cljs.core.name.call(null,actual_type_358560),canonical_f_358562);
}
{
var G__358563 = cljs.core.next.call(null,seq__358468_358553__$1);
var G__358564 = null;
var G__358565 = 0;
var G__358566 = 0;
seq__358468_358540 = G__358563;
chunk__358470_358541 = G__358564;
count__358471_358542 = G__358565;
i__358472_358543 = G__358566;
continue;
}
}
} else
{}
}
break;
}
{
var G__358567 = cljs.core.next.call(null,seq__358467_358531__$1);
var G__358568 = null;
var G__358569 = 0;
var G__358570 = 0;
seq__358467_358492 = G__358567;
chunk__358474_358493 = G__358568;
count__358475_358494 = G__358569;
i__358476_358495 = G__358570;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__358571){
var elem_sel = cljs.core.first(arglist__358571);
var type_fs = cljs.core.rest(arglist__358571);
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
var vec__358595_358618 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_358619 = cljs.core.nth.call(null,vec__358595_358618,0,null);var selector_358620 = cljs.core.nth.call(null,vec__358595_358618,1,null);var seq__358596_358621 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__358603_358622 = null;var count__358604_358623 = 0;var i__358605_358624 = 0;while(true){
if((i__358605_358624 < count__358604_358623))
{var vec__358612_358625 = cljs.core._nth.call(null,chunk__358603_358622,i__358605_358624);var orig_type_358626 = cljs.core.nth.call(null,vec__358612_358625,0,null);var f_358627 = cljs.core.nth.call(null,vec__358612_358625,1,null);var seq__358606_358628 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_358626,new cljs.core.PersistentArrayMap.fromArray([orig_type_358626,cljs.core.identity], true, false)));var chunk__358608_358629 = null;var count__358609_358630 = 0;var i__358610_358631 = 0;while(true){
if((i__358610_358631 < count__358609_358630))
{var vec__358613_358632 = cljs.core._nth.call(null,chunk__358608_358629,i__358610_358631);var actual_type_358633 = cljs.core.nth.call(null,vec__358613_358632,0,null);var __358634 = cljs.core.nth.call(null,vec__358613_358632,1,null);var keys_358635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358620,actual_type_358633,f_358627], null);var canonical_f_358636 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_358619),keys_358635);dommy.core.update_event_listeners_BANG_.call(null,elem_358619,dommy.utils.dissoc_in,keys_358635);
if(cljs.core.truth_(elem_358619.removeEventListener))
{elem_358619.removeEventListener(cljs.core.name.call(null,actual_type_358633),canonical_f_358636);
} else
{elem_358619.detachEvent(cljs.core.name.call(null,actual_type_358633),canonical_f_358636);
}
{
var G__358637 = seq__358606_358628;
var G__358638 = chunk__358608_358629;
var G__358639 = count__358609_358630;
var G__358640 = (i__358610_358631 + 1);
seq__358606_358628 = G__358637;
chunk__358608_358629 = G__358638;
count__358609_358630 = G__358639;
i__358610_358631 = G__358640;
continue;
}
} else
{var temp__4092__auto___358641 = cljs.core.seq.call(null,seq__358606_358628);if(temp__4092__auto___358641)
{var seq__358606_358642__$1 = temp__4092__auto___358641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358606_358642__$1))
{var c__14708__auto___358643 = cljs.core.chunk_first.call(null,seq__358606_358642__$1);{
var G__358644 = cljs.core.chunk_rest.call(null,seq__358606_358642__$1);
var G__358645 = c__14708__auto___358643;
var G__358646 = cljs.core.count.call(null,c__14708__auto___358643);
var G__358647 = 0;
seq__358606_358628 = G__358644;
chunk__358608_358629 = G__358645;
count__358609_358630 = G__358646;
i__358610_358631 = G__358647;
continue;
}
} else
{var vec__358614_358648 = cljs.core.first.call(null,seq__358606_358642__$1);var actual_type_358649 = cljs.core.nth.call(null,vec__358614_358648,0,null);var __358650 = cljs.core.nth.call(null,vec__358614_358648,1,null);var keys_358651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358620,actual_type_358649,f_358627], null);var canonical_f_358652 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_358619),keys_358651);dommy.core.update_event_listeners_BANG_.call(null,elem_358619,dommy.utils.dissoc_in,keys_358651);
if(cljs.core.truth_(elem_358619.removeEventListener))
{elem_358619.removeEventListener(cljs.core.name.call(null,actual_type_358649),canonical_f_358652);
} else
{elem_358619.detachEvent(cljs.core.name.call(null,actual_type_358649),canonical_f_358652);
}
{
var G__358653 = cljs.core.next.call(null,seq__358606_358642__$1);
var G__358654 = null;
var G__358655 = 0;
var G__358656 = 0;
seq__358606_358628 = G__358653;
chunk__358608_358629 = G__358654;
count__358609_358630 = G__358655;
i__358610_358631 = G__358656;
continue;
}
}
} else
{}
}
break;
}
{
var G__358657 = seq__358596_358621;
var G__358658 = chunk__358603_358622;
var G__358659 = count__358604_358623;
var G__358660 = (i__358605_358624 + 1);
seq__358596_358621 = G__358657;
chunk__358603_358622 = G__358658;
count__358604_358623 = G__358659;
i__358605_358624 = G__358660;
continue;
}
} else
{var temp__4092__auto___358661 = cljs.core.seq.call(null,seq__358596_358621);if(temp__4092__auto___358661)
{var seq__358596_358662__$1 = temp__4092__auto___358661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358596_358662__$1))
{var c__14708__auto___358663 = cljs.core.chunk_first.call(null,seq__358596_358662__$1);{
var G__358664 = cljs.core.chunk_rest.call(null,seq__358596_358662__$1);
var G__358665 = c__14708__auto___358663;
var G__358666 = cljs.core.count.call(null,c__14708__auto___358663);
var G__358667 = 0;
seq__358596_358621 = G__358664;
chunk__358603_358622 = G__358665;
count__358604_358623 = G__358666;
i__358605_358624 = G__358667;
continue;
}
} else
{var vec__358615_358668 = cljs.core.first.call(null,seq__358596_358662__$1);var orig_type_358669 = cljs.core.nth.call(null,vec__358615_358668,0,null);var f_358670 = cljs.core.nth.call(null,vec__358615_358668,1,null);var seq__358597_358671 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_358669,new cljs.core.PersistentArrayMap.fromArray([orig_type_358669,cljs.core.identity], true, false)));var chunk__358599_358672 = null;var count__358600_358673 = 0;var i__358601_358674 = 0;while(true){
if((i__358601_358674 < count__358600_358673))
{var vec__358616_358675 = cljs.core._nth.call(null,chunk__358599_358672,i__358601_358674);var actual_type_358676 = cljs.core.nth.call(null,vec__358616_358675,0,null);var __358677 = cljs.core.nth.call(null,vec__358616_358675,1,null);var keys_358678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358620,actual_type_358676,f_358670], null);var canonical_f_358679 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_358619),keys_358678);dommy.core.update_event_listeners_BANG_.call(null,elem_358619,dommy.utils.dissoc_in,keys_358678);
if(cljs.core.truth_(elem_358619.removeEventListener))
{elem_358619.removeEventListener(cljs.core.name.call(null,actual_type_358676),canonical_f_358679);
} else
{elem_358619.detachEvent(cljs.core.name.call(null,actual_type_358676),canonical_f_358679);
}
{
var G__358680 = seq__358597_358671;
var G__358681 = chunk__358599_358672;
var G__358682 = count__358600_358673;
var G__358683 = (i__358601_358674 + 1);
seq__358597_358671 = G__358680;
chunk__358599_358672 = G__358681;
count__358600_358673 = G__358682;
i__358601_358674 = G__358683;
continue;
}
} else
{var temp__4092__auto___358684__$1 = cljs.core.seq.call(null,seq__358597_358671);if(temp__4092__auto___358684__$1)
{var seq__358597_358685__$1 = temp__4092__auto___358684__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358597_358685__$1))
{var c__14708__auto___358686 = cljs.core.chunk_first.call(null,seq__358597_358685__$1);{
var G__358687 = cljs.core.chunk_rest.call(null,seq__358597_358685__$1);
var G__358688 = c__14708__auto___358686;
var G__358689 = cljs.core.count.call(null,c__14708__auto___358686);
var G__358690 = 0;
seq__358597_358671 = G__358687;
chunk__358599_358672 = G__358688;
count__358600_358673 = G__358689;
i__358601_358674 = G__358690;
continue;
}
} else
{var vec__358617_358691 = cljs.core.first.call(null,seq__358597_358685__$1);var actual_type_358692 = cljs.core.nth.call(null,vec__358617_358691,0,null);var __358693 = cljs.core.nth.call(null,vec__358617_358691,1,null);var keys_358694 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_358620,actual_type_358692,f_358670], null);var canonical_f_358695 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_358619),keys_358694);dommy.core.update_event_listeners_BANG_.call(null,elem_358619,dommy.utils.dissoc_in,keys_358694);
if(cljs.core.truth_(elem_358619.removeEventListener))
{elem_358619.removeEventListener(cljs.core.name.call(null,actual_type_358692),canonical_f_358695);
} else
{elem_358619.detachEvent(cljs.core.name.call(null,actual_type_358692),canonical_f_358695);
}
{
var G__358696 = cljs.core.next.call(null,seq__358597_358685__$1);
var G__358697 = null;
var G__358698 = 0;
var G__358699 = 0;
seq__358597_358671 = G__358696;
chunk__358599_358672 = G__358697;
count__358600_358673 = G__358698;
i__358601_358674 = G__358699;
continue;
}
}
} else
{}
}
break;
}
{
var G__358700 = cljs.core.next.call(null,seq__358596_358662__$1);
var G__358701 = null;
var G__358702 = 0;
var G__358703 = 0;
seq__358596_358621 = G__358700;
chunk__358603_358622 = G__358701;
count__358604_358623 = G__358702;
i__358605_358624 = G__358703;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__358704){
var elem_sel = cljs.core.first(arglist__358704);
var type_fs = cljs.core.rest(arglist__358704);
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
var vec__358712_358719 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_358720 = cljs.core.nth.call(null,vec__358712_358719,0,null);var selector_358721 = cljs.core.nth.call(null,vec__358712_358719,1,null);var seq__358713_358722 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__358714_358723 = null;var count__358715_358724 = 0;var i__358716_358725 = 0;while(true){
if((i__358716_358725 < count__358715_358724))
{var vec__358717_358726 = cljs.core._nth.call(null,chunk__358714_358723,i__358716_358725);var type_358727 = cljs.core.nth.call(null,vec__358717_358726,0,null);var f_358728 = cljs.core.nth.call(null,vec__358717_358726,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_358727,((function (seq__358713_358722,chunk__358714_358723,count__358715_358724,i__358716_358725,vec__358717_358726,type_358727,f_358728){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_358727,this_fn);
return f_358728.call(null,e);
});})(seq__358713_358722,chunk__358714_358723,count__358715_358724,i__358716_358725,vec__358717_358726,type_358727,f_358728))
);
{
var G__358729 = seq__358713_358722;
var G__358730 = chunk__358714_358723;
var G__358731 = count__358715_358724;
var G__358732 = (i__358716_358725 + 1);
seq__358713_358722 = G__358729;
chunk__358714_358723 = G__358730;
count__358715_358724 = G__358731;
i__358716_358725 = G__358732;
continue;
}
} else
{var temp__4092__auto___358733 = cljs.core.seq.call(null,seq__358713_358722);if(temp__4092__auto___358733)
{var seq__358713_358734__$1 = temp__4092__auto___358733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358713_358734__$1))
{var c__14708__auto___358735 = cljs.core.chunk_first.call(null,seq__358713_358734__$1);{
var G__358736 = cljs.core.chunk_rest.call(null,seq__358713_358734__$1);
var G__358737 = c__14708__auto___358735;
var G__358738 = cljs.core.count.call(null,c__14708__auto___358735);
var G__358739 = 0;
seq__358713_358722 = G__358736;
chunk__358714_358723 = G__358737;
count__358715_358724 = G__358738;
i__358716_358725 = G__358739;
continue;
}
} else
{var vec__358718_358740 = cljs.core.first.call(null,seq__358713_358734__$1);var type_358741 = cljs.core.nth.call(null,vec__358718_358740,0,null);var f_358742 = cljs.core.nth.call(null,vec__358718_358740,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_358741,((function (seq__358713_358722,chunk__358714_358723,count__358715_358724,i__358716_358725,vec__358718_358740,type_358741,f_358742,seq__358713_358734__$1,temp__4092__auto___358733){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_358741,this_fn);
return f_358742.call(null,e);
});})(seq__358713_358722,chunk__358714_358723,count__358715_358724,i__358716_358725,vec__358718_358740,type_358741,f_358742,seq__358713_358734__$1,temp__4092__auto___358733))
);
{
var G__358743 = cljs.core.next.call(null,seq__358713_358734__$1);
var G__358744 = null;
var G__358745 = 0;
var G__358746 = 0;
seq__358713_358722 = G__358743;
chunk__358714_358723 = G__358744;
count__358715_358724 = G__358745;
i__358716_358725 = G__358746;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__358747){
var elem_sel = cljs.core.first(arglist__358747);
var type_fs = cljs.core.rest(arglist__358747);
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
var fire_BANG___delegate = function (node,event_type,p__358748){var vec__358750 = p__358748;var update_event_BANG_ = cljs.core.nth.call(null,vec__358750,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__358748 = null;if (arguments.length > 2) {
  p__358748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__358748);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__358751){
var node = cljs.core.first(arglist__358751);
arglist__358751 = cljs.core.next(arglist__358751);
var event_type = cljs.core.first(arglist__358751);
var p__358748 = cljs.core.rest(arglist__358751);
return fire_BANG___delegate(node,event_type,p__358748);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map