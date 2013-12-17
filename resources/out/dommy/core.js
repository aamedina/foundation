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
var append_BANG___2 = (function (parent,child){var G__376578 = dommy.template.__GT_node_like.call(null,parent);G__376578.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__376578;
});
var append_BANG___3 = (function() { 
var G__376583__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__376579_376584 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__376580_376585 = null;var count__376581_376586 = 0;var i__376582_376587 = 0;while(true){
if((i__376582_376587 < count__376581_376586))
{var c_376588 = cljs.core._nth.call(null,chunk__376580_376585,i__376582_376587);append_BANG_.call(null,parent__$1,c_376588);
{
var G__376589 = seq__376579_376584;
var G__376590 = chunk__376580_376585;
var G__376591 = count__376581_376586;
var G__376592 = (i__376582_376587 + 1);
seq__376579_376584 = G__376589;
chunk__376580_376585 = G__376590;
count__376581_376586 = G__376591;
i__376582_376587 = G__376592;
continue;
}
} else
{var temp__4092__auto___376593 = cljs.core.seq.call(null,seq__376579_376584);if(temp__4092__auto___376593)
{var seq__376579_376594__$1 = temp__4092__auto___376593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376579_376594__$1))
{var c__14708__auto___376595 = cljs.core.chunk_first.call(null,seq__376579_376594__$1);{
var G__376596 = cljs.core.chunk_rest.call(null,seq__376579_376594__$1);
var G__376597 = c__14708__auto___376595;
var G__376598 = cljs.core.count.call(null,c__14708__auto___376595);
var G__376599 = 0;
seq__376579_376584 = G__376596;
chunk__376580_376585 = G__376597;
count__376581_376586 = G__376598;
i__376582_376587 = G__376599;
continue;
}
} else
{var c_376600 = cljs.core.first.call(null,seq__376579_376594__$1);append_BANG_.call(null,parent__$1,c_376600);
{
var G__376601 = cljs.core.next.call(null,seq__376579_376594__$1);
var G__376602 = null;
var G__376603 = 0;
var G__376604 = 0;
seq__376579_376584 = G__376601;
chunk__376580_376585 = G__376602;
count__376581_376586 = G__376603;
i__376582_376587 = G__376604;
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
var G__376583 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__376583__delegate.call(this,parent,child,more_children);};
G__376583.cljs$lang$maxFixedArity = 2;
G__376583.cljs$lang$applyTo = (function (arglist__376605){
var parent = cljs.core.first(arglist__376605);
arglist__376605 = cljs.core.next(arglist__376605);
var child = cljs.core.first(arglist__376605);
var more_children = cljs.core.rest(arglist__376605);
return G__376583__delegate(parent,child,more_children);
});
G__376583.cljs$core$IFn$_invoke$arity$variadic = G__376583__delegate;
return G__376583;
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
var G__376614__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__376610_376615 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__376611_376616 = null;var count__376612_376617 = 0;var i__376613_376618 = 0;while(true){
if((i__376613_376618 < count__376612_376617))
{var c_376619 = cljs.core._nth.call(null,chunk__376611_376616,i__376613_376618);prepend_BANG_.call(null,parent__$1,c_376619);
{
var G__376620 = seq__376610_376615;
var G__376621 = chunk__376611_376616;
var G__376622 = count__376612_376617;
var G__376623 = (i__376613_376618 + 1);
seq__376610_376615 = G__376620;
chunk__376611_376616 = G__376621;
count__376612_376617 = G__376622;
i__376613_376618 = G__376623;
continue;
}
} else
{var temp__4092__auto___376624 = cljs.core.seq.call(null,seq__376610_376615);if(temp__4092__auto___376624)
{var seq__376610_376625__$1 = temp__4092__auto___376624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376610_376625__$1))
{var c__14708__auto___376626 = cljs.core.chunk_first.call(null,seq__376610_376625__$1);{
var G__376627 = cljs.core.chunk_rest.call(null,seq__376610_376625__$1);
var G__376628 = c__14708__auto___376626;
var G__376629 = cljs.core.count.call(null,c__14708__auto___376626);
var G__376630 = 0;
seq__376610_376615 = G__376627;
chunk__376611_376616 = G__376628;
count__376612_376617 = G__376629;
i__376613_376618 = G__376630;
continue;
}
} else
{var c_376631 = cljs.core.first.call(null,seq__376610_376625__$1);prepend_BANG_.call(null,parent__$1,c_376631);
{
var G__376632 = cljs.core.next.call(null,seq__376610_376625__$1);
var G__376633 = null;
var G__376634 = 0;
var G__376635 = 0;
seq__376610_376615 = G__376632;
chunk__376611_376616 = G__376633;
count__376612_376617 = G__376634;
i__376613_376618 = G__376635;
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
var G__376614 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__376614__delegate.call(this,parent,child,more_children);};
G__376614.cljs$lang$maxFixedArity = 2;
G__376614.cljs$lang$applyTo = (function (arglist__376636){
var parent = cljs.core.first(arglist__376636);
arglist__376636 = cljs.core.next(arglist__376636);
var child = cljs.core.first(arglist__376636);
var more_children = cljs.core.rest(arglist__376636);
return G__376614__delegate(parent,child,more_children);
});
G__376614.cljs$core$IFn$_invoke$arity$variadic = G__376614__delegate;
return G__376614;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___376637 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___376637))
{var next_376638 = temp__4090__auto___376637;parent.insertBefore(actual_node,next_376638);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__376640 = dommy.template.__GT_node_like.call(null,parent);G__376640.innerHTML = "";
dommy.core.append_BANG_.call(null,G__376640,node_like);
return G__376640;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__376642 = elem__$1.parentNode;G__376642.removeChild(elem__$1);
return G__376642;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__376648){var vec__376649 = p__376648;var k = cljs.core.nth.call(null,vec__376649,0,null);var v = cljs.core.nth.call(null,vec__376649,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t376650 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t376650 = (function (v,k,vec__376649,p__376648,container,key_selectors_map,template,selector_map,meta376651){
this.v = v;
this.k = k;
this.vec__376649 = vec__376649;
this.p__376648 = p__376648;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta376651 = meta376651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t376650.cljs$lang$type = true;
dommy.core.t376650.cljs$lang$ctorStr = "dommy.core/t376650";
dommy.core.t376650.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"dommy.core/t376650");
});
dommy.core.t376650.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t376650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_376652){var self__ = this;
var _376652__$1 = this;return self__.meta376651;
});
dommy.core.t376650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_376652,meta376651__$1){var self__ = this;
var _376652__$1 = this;return (new dommy.core.t376650(self__.v,self__.k,self__.vec__376649,self__.p__376648,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta376651__$1));
});
dommy.core.__GT_t376650 = (function __GT_t376650(v__$1,k__$1,vec__376649__$1,p__376648__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta376651){return (new dommy.core.t376650(v__$1,k__$1,vec__376649__$1,p__376648__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta376651));
});
}
return (new dommy.core.t376650(v,k,vec__376649,p__376648,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__376653_SHARP_){return p1__376653_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__376654_SHARP_){return !((p1__376654_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__376655){var vec__376656 = p__376655;var special_mouse_event = cljs.core.nth.call(null,vec__376656,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__376656,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13979__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13979__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__376657){
var elem = cljs.core.first(arglist__376657);
arglist__376657 = cljs.core.next(arglist__376657);
var f = cljs.core.first(arglist__376657);
var args = cljs.core.rest(arglist__376657);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__376658_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__376658_SHARP_));
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
var vec__376682_376705 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_376706 = cljs.core.nth.call(null,vec__376682_376705,0,null);var selector_376707 = cljs.core.nth.call(null,vec__376682_376705,1,null);var seq__376683_376708 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__376690_376709 = null;var count__376691_376710 = 0;var i__376692_376711 = 0;while(true){
if((i__376692_376711 < count__376691_376710))
{var vec__376699_376712 = cljs.core._nth.call(null,chunk__376690_376709,i__376692_376711);var orig_type_376713 = cljs.core.nth.call(null,vec__376699_376712,0,null);var f_376714 = cljs.core.nth.call(null,vec__376699_376712,1,null);var seq__376693_376715 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376713,new cljs.core.PersistentArrayMap.fromArray([orig_type_376713,cljs.core.identity], true, false)));var chunk__376695_376716 = null;var count__376696_376717 = 0;var i__376697_376718 = 0;while(true){
if((i__376697_376718 < count__376696_376717))
{var vec__376700_376719 = cljs.core._nth.call(null,chunk__376695_376716,i__376697_376718);var actual_type_376720 = cljs.core.nth.call(null,vec__376700_376719,0,null);var factory_376721 = cljs.core.nth.call(null,vec__376700_376719,1,null);var canonical_f_376722 = (cljs.core.truth_(selector_376707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376706,selector_376707):cljs.core.identity).call(null,factory_376721.call(null,f_376714));dommy.core.update_event_listeners_BANG_.call(null,elem_376706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376707,actual_type_376720,f_376714], null),canonical_f_376722);
if(cljs.core.truth_(elem_376706.addEventListener))
{elem_376706.addEventListener(cljs.core.name.call(null,actual_type_376720),canonical_f_376722);
} else
{elem_376706.attachEvent(cljs.core.name.call(null,actual_type_376720),canonical_f_376722);
}
{
var G__376723 = seq__376693_376715;
var G__376724 = chunk__376695_376716;
var G__376725 = count__376696_376717;
var G__376726 = (i__376697_376718 + 1);
seq__376693_376715 = G__376723;
chunk__376695_376716 = G__376724;
count__376696_376717 = G__376725;
i__376697_376718 = G__376726;
continue;
}
} else
{var temp__4092__auto___376727 = cljs.core.seq.call(null,seq__376693_376715);if(temp__4092__auto___376727)
{var seq__376693_376728__$1 = temp__4092__auto___376727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376693_376728__$1))
{var c__14708__auto___376729 = cljs.core.chunk_first.call(null,seq__376693_376728__$1);{
var G__376730 = cljs.core.chunk_rest.call(null,seq__376693_376728__$1);
var G__376731 = c__14708__auto___376729;
var G__376732 = cljs.core.count.call(null,c__14708__auto___376729);
var G__376733 = 0;
seq__376693_376715 = G__376730;
chunk__376695_376716 = G__376731;
count__376696_376717 = G__376732;
i__376697_376718 = G__376733;
continue;
}
} else
{var vec__376701_376734 = cljs.core.first.call(null,seq__376693_376728__$1);var actual_type_376735 = cljs.core.nth.call(null,vec__376701_376734,0,null);var factory_376736 = cljs.core.nth.call(null,vec__376701_376734,1,null);var canonical_f_376737 = (cljs.core.truth_(selector_376707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376706,selector_376707):cljs.core.identity).call(null,factory_376736.call(null,f_376714));dommy.core.update_event_listeners_BANG_.call(null,elem_376706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376707,actual_type_376735,f_376714], null),canonical_f_376737);
if(cljs.core.truth_(elem_376706.addEventListener))
{elem_376706.addEventListener(cljs.core.name.call(null,actual_type_376735),canonical_f_376737);
} else
{elem_376706.attachEvent(cljs.core.name.call(null,actual_type_376735),canonical_f_376737);
}
{
var G__376738 = cljs.core.next.call(null,seq__376693_376728__$1);
var G__376739 = null;
var G__376740 = 0;
var G__376741 = 0;
seq__376693_376715 = G__376738;
chunk__376695_376716 = G__376739;
count__376696_376717 = G__376740;
i__376697_376718 = G__376741;
continue;
}
}
} else
{}
}
break;
}
{
var G__376742 = seq__376683_376708;
var G__376743 = chunk__376690_376709;
var G__376744 = count__376691_376710;
var G__376745 = (i__376692_376711 + 1);
seq__376683_376708 = G__376742;
chunk__376690_376709 = G__376743;
count__376691_376710 = G__376744;
i__376692_376711 = G__376745;
continue;
}
} else
{var temp__4092__auto___376746 = cljs.core.seq.call(null,seq__376683_376708);if(temp__4092__auto___376746)
{var seq__376683_376747__$1 = temp__4092__auto___376746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376683_376747__$1))
{var c__14708__auto___376748 = cljs.core.chunk_first.call(null,seq__376683_376747__$1);{
var G__376749 = cljs.core.chunk_rest.call(null,seq__376683_376747__$1);
var G__376750 = c__14708__auto___376748;
var G__376751 = cljs.core.count.call(null,c__14708__auto___376748);
var G__376752 = 0;
seq__376683_376708 = G__376749;
chunk__376690_376709 = G__376750;
count__376691_376710 = G__376751;
i__376692_376711 = G__376752;
continue;
}
} else
{var vec__376702_376753 = cljs.core.first.call(null,seq__376683_376747__$1);var orig_type_376754 = cljs.core.nth.call(null,vec__376702_376753,0,null);var f_376755 = cljs.core.nth.call(null,vec__376702_376753,1,null);var seq__376684_376756 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376754,new cljs.core.PersistentArrayMap.fromArray([orig_type_376754,cljs.core.identity], true, false)));var chunk__376686_376757 = null;var count__376687_376758 = 0;var i__376688_376759 = 0;while(true){
if((i__376688_376759 < count__376687_376758))
{var vec__376703_376760 = cljs.core._nth.call(null,chunk__376686_376757,i__376688_376759);var actual_type_376761 = cljs.core.nth.call(null,vec__376703_376760,0,null);var factory_376762 = cljs.core.nth.call(null,vec__376703_376760,1,null);var canonical_f_376763 = (cljs.core.truth_(selector_376707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376706,selector_376707):cljs.core.identity).call(null,factory_376762.call(null,f_376755));dommy.core.update_event_listeners_BANG_.call(null,elem_376706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376707,actual_type_376761,f_376755], null),canonical_f_376763);
if(cljs.core.truth_(elem_376706.addEventListener))
{elem_376706.addEventListener(cljs.core.name.call(null,actual_type_376761),canonical_f_376763);
} else
{elem_376706.attachEvent(cljs.core.name.call(null,actual_type_376761),canonical_f_376763);
}
{
var G__376764 = seq__376684_376756;
var G__376765 = chunk__376686_376757;
var G__376766 = count__376687_376758;
var G__376767 = (i__376688_376759 + 1);
seq__376684_376756 = G__376764;
chunk__376686_376757 = G__376765;
count__376687_376758 = G__376766;
i__376688_376759 = G__376767;
continue;
}
} else
{var temp__4092__auto___376768__$1 = cljs.core.seq.call(null,seq__376684_376756);if(temp__4092__auto___376768__$1)
{var seq__376684_376769__$1 = temp__4092__auto___376768__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376684_376769__$1))
{var c__14708__auto___376770 = cljs.core.chunk_first.call(null,seq__376684_376769__$1);{
var G__376771 = cljs.core.chunk_rest.call(null,seq__376684_376769__$1);
var G__376772 = c__14708__auto___376770;
var G__376773 = cljs.core.count.call(null,c__14708__auto___376770);
var G__376774 = 0;
seq__376684_376756 = G__376771;
chunk__376686_376757 = G__376772;
count__376687_376758 = G__376773;
i__376688_376759 = G__376774;
continue;
}
} else
{var vec__376704_376775 = cljs.core.first.call(null,seq__376684_376769__$1);var actual_type_376776 = cljs.core.nth.call(null,vec__376704_376775,0,null);var factory_376777 = cljs.core.nth.call(null,vec__376704_376775,1,null);var canonical_f_376778 = (cljs.core.truth_(selector_376707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376706,selector_376707):cljs.core.identity).call(null,factory_376777.call(null,f_376755));dommy.core.update_event_listeners_BANG_.call(null,elem_376706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376707,actual_type_376776,f_376755], null),canonical_f_376778);
if(cljs.core.truth_(elem_376706.addEventListener))
{elem_376706.addEventListener(cljs.core.name.call(null,actual_type_376776),canonical_f_376778);
} else
{elem_376706.attachEvent(cljs.core.name.call(null,actual_type_376776),canonical_f_376778);
}
{
var G__376779 = cljs.core.next.call(null,seq__376684_376769__$1);
var G__376780 = null;
var G__376781 = 0;
var G__376782 = 0;
seq__376684_376756 = G__376779;
chunk__376686_376757 = G__376780;
count__376687_376758 = G__376781;
i__376688_376759 = G__376782;
continue;
}
}
} else
{}
}
break;
}
{
var G__376783 = cljs.core.next.call(null,seq__376683_376747__$1);
var G__376784 = null;
var G__376785 = 0;
var G__376786 = 0;
seq__376683_376708 = G__376783;
chunk__376690_376709 = G__376784;
count__376691_376710 = G__376785;
i__376692_376711 = G__376786;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__376787){
var elem_sel = cljs.core.first(arglist__376787);
var type_fs = cljs.core.rest(arglist__376787);
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
var vec__376811_376834 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_376835 = cljs.core.nth.call(null,vec__376811_376834,0,null);var selector_376836 = cljs.core.nth.call(null,vec__376811_376834,1,null);var seq__376812_376837 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__376819_376838 = null;var count__376820_376839 = 0;var i__376821_376840 = 0;while(true){
if((i__376821_376840 < count__376820_376839))
{var vec__376828_376841 = cljs.core._nth.call(null,chunk__376819_376838,i__376821_376840);var orig_type_376842 = cljs.core.nth.call(null,vec__376828_376841,0,null);var f_376843 = cljs.core.nth.call(null,vec__376828_376841,1,null);var seq__376822_376844 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376842,new cljs.core.PersistentArrayMap.fromArray([orig_type_376842,cljs.core.identity], true, false)));var chunk__376824_376845 = null;var count__376825_376846 = 0;var i__376826_376847 = 0;while(true){
if((i__376826_376847 < count__376825_376846))
{var vec__376829_376848 = cljs.core._nth.call(null,chunk__376824_376845,i__376826_376847);var actual_type_376849 = cljs.core.nth.call(null,vec__376829_376848,0,null);var __376850 = cljs.core.nth.call(null,vec__376829_376848,1,null);var keys_376851 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376836,actual_type_376849,f_376843], null);var canonical_f_376852 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376835),keys_376851);dommy.core.update_event_listeners_BANG_.call(null,elem_376835,dommy.utils.dissoc_in,keys_376851);
if(cljs.core.truth_(elem_376835.removeEventListener))
{elem_376835.removeEventListener(cljs.core.name.call(null,actual_type_376849),canonical_f_376852);
} else
{elem_376835.detachEvent(cljs.core.name.call(null,actual_type_376849),canonical_f_376852);
}
{
var G__376853 = seq__376822_376844;
var G__376854 = chunk__376824_376845;
var G__376855 = count__376825_376846;
var G__376856 = (i__376826_376847 + 1);
seq__376822_376844 = G__376853;
chunk__376824_376845 = G__376854;
count__376825_376846 = G__376855;
i__376826_376847 = G__376856;
continue;
}
} else
{var temp__4092__auto___376857 = cljs.core.seq.call(null,seq__376822_376844);if(temp__4092__auto___376857)
{var seq__376822_376858__$1 = temp__4092__auto___376857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376822_376858__$1))
{var c__14708__auto___376859 = cljs.core.chunk_first.call(null,seq__376822_376858__$1);{
var G__376860 = cljs.core.chunk_rest.call(null,seq__376822_376858__$1);
var G__376861 = c__14708__auto___376859;
var G__376862 = cljs.core.count.call(null,c__14708__auto___376859);
var G__376863 = 0;
seq__376822_376844 = G__376860;
chunk__376824_376845 = G__376861;
count__376825_376846 = G__376862;
i__376826_376847 = G__376863;
continue;
}
} else
{var vec__376830_376864 = cljs.core.first.call(null,seq__376822_376858__$1);var actual_type_376865 = cljs.core.nth.call(null,vec__376830_376864,0,null);var __376866 = cljs.core.nth.call(null,vec__376830_376864,1,null);var keys_376867 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376836,actual_type_376865,f_376843], null);var canonical_f_376868 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376835),keys_376867);dommy.core.update_event_listeners_BANG_.call(null,elem_376835,dommy.utils.dissoc_in,keys_376867);
if(cljs.core.truth_(elem_376835.removeEventListener))
{elem_376835.removeEventListener(cljs.core.name.call(null,actual_type_376865),canonical_f_376868);
} else
{elem_376835.detachEvent(cljs.core.name.call(null,actual_type_376865),canonical_f_376868);
}
{
var G__376869 = cljs.core.next.call(null,seq__376822_376858__$1);
var G__376870 = null;
var G__376871 = 0;
var G__376872 = 0;
seq__376822_376844 = G__376869;
chunk__376824_376845 = G__376870;
count__376825_376846 = G__376871;
i__376826_376847 = G__376872;
continue;
}
}
} else
{}
}
break;
}
{
var G__376873 = seq__376812_376837;
var G__376874 = chunk__376819_376838;
var G__376875 = count__376820_376839;
var G__376876 = (i__376821_376840 + 1);
seq__376812_376837 = G__376873;
chunk__376819_376838 = G__376874;
count__376820_376839 = G__376875;
i__376821_376840 = G__376876;
continue;
}
} else
{var temp__4092__auto___376877 = cljs.core.seq.call(null,seq__376812_376837);if(temp__4092__auto___376877)
{var seq__376812_376878__$1 = temp__4092__auto___376877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376812_376878__$1))
{var c__14708__auto___376879 = cljs.core.chunk_first.call(null,seq__376812_376878__$1);{
var G__376880 = cljs.core.chunk_rest.call(null,seq__376812_376878__$1);
var G__376881 = c__14708__auto___376879;
var G__376882 = cljs.core.count.call(null,c__14708__auto___376879);
var G__376883 = 0;
seq__376812_376837 = G__376880;
chunk__376819_376838 = G__376881;
count__376820_376839 = G__376882;
i__376821_376840 = G__376883;
continue;
}
} else
{var vec__376831_376884 = cljs.core.first.call(null,seq__376812_376878__$1);var orig_type_376885 = cljs.core.nth.call(null,vec__376831_376884,0,null);var f_376886 = cljs.core.nth.call(null,vec__376831_376884,1,null);var seq__376813_376887 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376885,new cljs.core.PersistentArrayMap.fromArray([orig_type_376885,cljs.core.identity], true, false)));var chunk__376815_376888 = null;var count__376816_376889 = 0;var i__376817_376890 = 0;while(true){
if((i__376817_376890 < count__376816_376889))
{var vec__376832_376891 = cljs.core._nth.call(null,chunk__376815_376888,i__376817_376890);var actual_type_376892 = cljs.core.nth.call(null,vec__376832_376891,0,null);var __376893 = cljs.core.nth.call(null,vec__376832_376891,1,null);var keys_376894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376836,actual_type_376892,f_376886], null);var canonical_f_376895 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376835),keys_376894);dommy.core.update_event_listeners_BANG_.call(null,elem_376835,dommy.utils.dissoc_in,keys_376894);
if(cljs.core.truth_(elem_376835.removeEventListener))
{elem_376835.removeEventListener(cljs.core.name.call(null,actual_type_376892),canonical_f_376895);
} else
{elem_376835.detachEvent(cljs.core.name.call(null,actual_type_376892),canonical_f_376895);
}
{
var G__376896 = seq__376813_376887;
var G__376897 = chunk__376815_376888;
var G__376898 = count__376816_376889;
var G__376899 = (i__376817_376890 + 1);
seq__376813_376887 = G__376896;
chunk__376815_376888 = G__376897;
count__376816_376889 = G__376898;
i__376817_376890 = G__376899;
continue;
}
} else
{var temp__4092__auto___376900__$1 = cljs.core.seq.call(null,seq__376813_376887);if(temp__4092__auto___376900__$1)
{var seq__376813_376901__$1 = temp__4092__auto___376900__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376813_376901__$1))
{var c__14708__auto___376902 = cljs.core.chunk_first.call(null,seq__376813_376901__$1);{
var G__376903 = cljs.core.chunk_rest.call(null,seq__376813_376901__$1);
var G__376904 = c__14708__auto___376902;
var G__376905 = cljs.core.count.call(null,c__14708__auto___376902);
var G__376906 = 0;
seq__376813_376887 = G__376903;
chunk__376815_376888 = G__376904;
count__376816_376889 = G__376905;
i__376817_376890 = G__376906;
continue;
}
} else
{var vec__376833_376907 = cljs.core.first.call(null,seq__376813_376901__$1);var actual_type_376908 = cljs.core.nth.call(null,vec__376833_376907,0,null);var __376909 = cljs.core.nth.call(null,vec__376833_376907,1,null);var keys_376910 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376836,actual_type_376908,f_376886], null);var canonical_f_376911 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376835),keys_376910);dommy.core.update_event_listeners_BANG_.call(null,elem_376835,dommy.utils.dissoc_in,keys_376910);
if(cljs.core.truth_(elem_376835.removeEventListener))
{elem_376835.removeEventListener(cljs.core.name.call(null,actual_type_376908),canonical_f_376911);
} else
{elem_376835.detachEvent(cljs.core.name.call(null,actual_type_376908),canonical_f_376911);
}
{
var G__376912 = cljs.core.next.call(null,seq__376813_376901__$1);
var G__376913 = null;
var G__376914 = 0;
var G__376915 = 0;
seq__376813_376887 = G__376912;
chunk__376815_376888 = G__376913;
count__376816_376889 = G__376914;
i__376817_376890 = G__376915;
continue;
}
}
} else
{}
}
break;
}
{
var G__376916 = cljs.core.next.call(null,seq__376812_376878__$1);
var G__376917 = null;
var G__376918 = 0;
var G__376919 = 0;
seq__376812_376837 = G__376916;
chunk__376819_376838 = G__376917;
count__376820_376839 = G__376918;
i__376821_376840 = G__376919;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__376920){
var elem_sel = cljs.core.first(arglist__376920);
var type_fs = cljs.core.rest(arglist__376920);
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
var vec__376928_376935 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_376936 = cljs.core.nth.call(null,vec__376928_376935,0,null);var selector_376937 = cljs.core.nth.call(null,vec__376928_376935,1,null);var seq__376929_376938 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__376930_376939 = null;var count__376931_376940 = 0;var i__376932_376941 = 0;while(true){
if((i__376932_376941 < count__376931_376940))
{var vec__376933_376942 = cljs.core._nth.call(null,chunk__376930_376939,i__376932_376941);var type_376943 = cljs.core.nth.call(null,vec__376933_376942,0,null);var f_376944 = cljs.core.nth.call(null,vec__376933_376942,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_376943,((function (seq__376929_376938,chunk__376930_376939,count__376931_376940,i__376932_376941,vec__376933_376942,type_376943,f_376944){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_376943,this_fn);
return f_376944.call(null,e);
});})(seq__376929_376938,chunk__376930_376939,count__376931_376940,i__376932_376941,vec__376933_376942,type_376943,f_376944))
);
{
var G__376945 = seq__376929_376938;
var G__376946 = chunk__376930_376939;
var G__376947 = count__376931_376940;
var G__376948 = (i__376932_376941 + 1);
seq__376929_376938 = G__376945;
chunk__376930_376939 = G__376946;
count__376931_376940 = G__376947;
i__376932_376941 = G__376948;
continue;
}
} else
{var temp__4092__auto___376949 = cljs.core.seq.call(null,seq__376929_376938);if(temp__4092__auto___376949)
{var seq__376929_376950__$1 = temp__4092__auto___376949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376929_376950__$1))
{var c__14708__auto___376951 = cljs.core.chunk_first.call(null,seq__376929_376950__$1);{
var G__376952 = cljs.core.chunk_rest.call(null,seq__376929_376950__$1);
var G__376953 = c__14708__auto___376951;
var G__376954 = cljs.core.count.call(null,c__14708__auto___376951);
var G__376955 = 0;
seq__376929_376938 = G__376952;
chunk__376930_376939 = G__376953;
count__376931_376940 = G__376954;
i__376932_376941 = G__376955;
continue;
}
} else
{var vec__376934_376956 = cljs.core.first.call(null,seq__376929_376950__$1);var type_376957 = cljs.core.nth.call(null,vec__376934_376956,0,null);var f_376958 = cljs.core.nth.call(null,vec__376934_376956,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_376957,((function (seq__376929_376938,chunk__376930_376939,count__376931_376940,i__376932_376941,vec__376934_376956,type_376957,f_376958,seq__376929_376950__$1,temp__4092__auto___376949){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_376957,this_fn);
return f_376958.call(null,e);
});})(seq__376929_376938,chunk__376930_376939,count__376931_376940,i__376932_376941,vec__376934_376956,type_376957,f_376958,seq__376929_376950__$1,temp__4092__auto___376949))
);
{
var G__376959 = cljs.core.next.call(null,seq__376929_376950__$1);
var G__376960 = null;
var G__376961 = 0;
var G__376962 = 0;
seq__376929_376938 = G__376959;
chunk__376930_376939 = G__376960;
count__376931_376940 = G__376961;
i__376932_376941 = G__376962;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__376963){
var elem_sel = cljs.core.first(arglist__376963);
var type_fs = cljs.core.rest(arglist__376963);
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
var fire_BANG___delegate = function (node,event_type,p__376964){var vec__376966 = p__376964;var update_event_BANG_ = cljs.core.nth.call(null,vec__376966,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__376964 = null;if (arguments.length > 2) {
  p__376964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__376964);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__376967){
var node = cljs.core.first(arglist__376967);
arglist__376967 = cljs.core.next(arglist__376967);
var event_type = cljs.core.first(arglist__376967);
var p__376964 = cljs.core.rest(arglist__376967);
return fire_BANG___delegate(node,event_type,p__376964);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map