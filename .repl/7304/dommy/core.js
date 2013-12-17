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
var append_BANG___2 = (function (parent,child){var G__20570 = dommy.template.__GT_node_like.call(null,parent);G__20570.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__20570;
});
var append_BANG___3 = (function() { 
var G__20575__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__20571_20576 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__20572_20577 = null;var count__20573_20578 = 0;var i__20574_20579 = 0;while(true){
if((i__20574_20579 < count__20573_20578))
{var c_20580 = cljs.core._nth.call(null,chunk__20572_20577,i__20574_20579);append_BANG_.call(null,parent__$1,c_20580);
{
var G__20581 = seq__20571_20576;
var G__20582 = chunk__20572_20577;
var G__20583 = count__20573_20578;
var G__20584 = (i__20574_20579 + 1);
seq__20571_20576 = G__20581;
chunk__20572_20577 = G__20582;
count__20573_20578 = G__20583;
i__20574_20579 = G__20584;
continue;
}
} else
{var temp__4092__auto___20585 = cljs.core.seq.call(null,seq__20571_20576);if(temp__4092__auto___20585)
{var seq__20571_20586__$1 = temp__4092__auto___20585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20571_20586__$1))
{var c__8552__auto___20587 = cljs.core.chunk_first.call(null,seq__20571_20586__$1);{
var G__20588 = cljs.core.chunk_rest.call(null,seq__20571_20586__$1);
var G__20589 = c__8552__auto___20587;
var G__20590 = cljs.core.count.call(null,c__8552__auto___20587);
var G__20591 = 0;
seq__20571_20576 = G__20588;
chunk__20572_20577 = G__20589;
count__20573_20578 = G__20590;
i__20574_20579 = G__20591;
continue;
}
} else
{var c_20592 = cljs.core.first.call(null,seq__20571_20586__$1);append_BANG_.call(null,parent__$1,c_20592);
{
var G__20593 = cljs.core.next.call(null,seq__20571_20586__$1);
var G__20594 = null;
var G__20595 = 0;
var G__20596 = 0;
seq__20571_20576 = G__20593;
chunk__20572_20577 = G__20594;
count__20573_20578 = G__20595;
i__20574_20579 = G__20596;
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
var G__20575 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20575__delegate.call(this,parent,child,more_children);};
G__20575.cljs$lang$maxFixedArity = 2;
G__20575.cljs$lang$applyTo = (function (arglist__20597){
var parent = cljs.core.first(arglist__20597);
arglist__20597 = cljs.core.next(arglist__20597);
var child = cljs.core.first(arglist__20597);
var more_children = cljs.core.rest(arglist__20597);
return G__20575__delegate(parent,child,more_children);
});
G__20575.cljs$core$IFn$_invoke$arity$variadic = G__20575__delegate;
return G__20575;
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
var G__20606__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__20602_20607 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__20603_20608 = null;var count__20604_20609 = 0;var i__20605_20610 = 0;while(true){
if((i__20605_20610 < count__20604_20609))
{var c_20611 = cljs.core._nth.call(null,chunk__20603_20608,i__20605_20610);prepend_BANG_.call(null,parent__$1,c_20611);
{
var G__20612 = seq__20602_20607;
var G__20613 = chunk__20603_20608;
var G__20614 = count__20604_20609;
var G__20615 = (i__20605_20610 + 1);
seq__20602_20607 = G__20612;
chunk__20603_20608 = G__20613;
count__20604_20609 = G__20614;
i__20605_20610 = G__20615;
continue;
}
} else
{var temp__4092__auto___20616 = cljs.core.seq.call(null,seq__20602_20607);if(temp__4092__auto___20616)
{var seq__20602_20617__$1 = temp__4092__auto___20616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20602_20617__$1))
{var c__8552__auto___20618 = cljs.core.chunk_first.call(null,seq__20602_20617__$1);{
var G__20619 = cljs.core.chunk_rest.call(null,seq__20602_20617__$1);
var G__20620 = c__8552__auto___20618;
var G__20621 = cljs.core.count.call(null,c__8552__auto___20618);
var G__20622 = 0;
seq__20602_20607 = G__20619;
chunk__20603_20608 = G__20620;
count__20604_20609 = G__20621;
i__20605_20610 = G__20622;
continue;
}
} else
{var c_20623 = cljs.core.first.call(null,seq__20602_20617__$1);prepend_BANG_.call(null,parent__$1,c_20623);
{
var G__20624 = cljs.core.next.call(null,seq__20602_20617__$1);
var G__20625 = null;
var G__20626 = 0;
var G__20627 = 0;
seq__20602_20607 = G__20624;
chunk__20603_20608 = G__20625;
count__20604_20609 = G__20626;
i__20605_20610 = G__20627;
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
var G__20606 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20606__delegate.call(this,parent,child,more_children);};
G__20606.cljs$lang$maxFixedArity = 2;
G__20606.cljs$lang$applyTo = (function (arglist__20628){
var parent = cljs.core.first(arglist__20628);
arglist__20628 = cljs.core.next(arglist__20628);
var child = cljs.core.first(arglist__20628);
var more_children = cljs.core.rest(arglist__20628);
return G__20606__delegate(parent,child,more_children);
});
G__20606.cljs$core$IFn$_invoke$arity$variadic = G__20606__delegate;
return G__20606;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___20629 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___20629))
{var next_20630 = temp__4090__auto___20629;parent.insertBefore(actual_node,next_20630);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__20632 = dommy.template.__GT_node_like.call(null,parent);G__20632.innerHTML = "";
dommy.core.append_BANG_.call(null,G__20632,node_like);
return G__20632;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__20634 = elem__$1.parentNode;G__20634.removeChild(elem__$1);
return G__20634;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20640){var vec__20641 = p__20640;var k = cljs.core.nth.call(null,vec__20641,0,null);var v = cljs.core.nth.call(null,vec__20641,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t20642 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t20642 = (function (v,k,vec__20641,p__20640,container,key_selectors_map,template,selector_map,meta20643){
this.v = v;
this.k = k;
this.vec__20641 = vec__20641;
this.p__20640 = p__20640;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta20643 = meta20643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t20642.cljs$lang$type = true;
dommy.core.t20642.cljs$lang$ctorStr = "dommy.core/t20642";
dommy.core.t20642.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t20642");
});
dommy.core.t20642.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t20642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20644){var self__ = this;
var _20644__$1 = this;return self__.meta20643;
});
dommy.core.t20642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20644,meta20643__$1){var self__ = this;
var _20644__$1 = this;return (new dommy.core.t20642(self__.v,self__.k,self__.vec__20641,self__.p__20640,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta20643__$1));
});
dommy.core.__GT_t20642 = (function __GT_t20642(v__$1,k__$1,vec__20641__$1,p__20640__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta20643){return (new dommy.core.t20642(v__$1,k__$1,vec__20641__$1,p__20640__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta20643));
});
}
return (new dommy.core.t20642(v,k,vec__20641,p__20640,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__20645_SHARP_){return p1__20645_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__20646_SHARP_){return !((p1__20646_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20647){var vec__20648 = p__20647;var special_mouse_event = cljs.core.nth.call(null,vec__20648,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__20648,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20649){
var elem = cljs.core.first(arglist__20649);
arglist__20649 = cljs.core.next(arglist__20649);
var f = cljs.core.first(arglist__20649);
var args = cljs.core.rest(arglist__20649);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__20650_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__20650_SHARP_));
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
var vec__20674_20697 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20698 = cljs.core.nth.call(null,vec__20674_20697,0,null);var selector_20699 = cljs.core.nth.call(null,vec__20674_20697,1,null);var seq__20675_20700 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20682_20701 = null;var count__20683_20702 = 0;var i__20684_20703 = 0;while(true){
if((i__20684_20703 < count__20683_20702))
{var vec__20691_20704 = cljs.core._nth.call(null,chunk__20682_20701,i__20684_20703);var orig_type_20705 = cljs.core.nth.call(null,vec__20691_20704,0,null);var f_20706 = cljs.core.nth.call(null,vec__20691_20704,1,null);var seq__20685_20707 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20705,new cljs.core.PersistentArrayMap.fromArray([orig_type_20705,cljs.core.identity], true, false)));var chunk__20687_20708 = null;var count__20688_20709 = 0;var i__20689_20710 = 0;while(true){
if((i__20689_20710 < count__20688_20709))
{var vec__20692_20711 = cljs.core._nth.call(null,chunk__20687_20708,i__20689_20710);var actual_type_20712 = cljs.core.nth.call(null,vec__20692_20711,0,null);var factory_20713 = cljs.core.nth.call(null,vec__20692_20711,1,null);var canonical_f_20714 = (cljs.core.truth_(selector_20699)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20698,selector_20699):cljs.core.identity).call(null,factory_20713.call(null,f_20706));dommy.core.update_event_listeners_BANG_.call(null,elem_20698,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20699,actual_type_20712,f_20706], null),canonical_f_20714);
if(cljs.core.truth_(elem_20698.addEventListener))
{elem_20698.addEventListener(cljs.core.name.call(null,actual_type_20712),canonical_f_20714);
} else
{elem_20698.attachEvent(cljs.core.name.call(null,actual_type_20712),canonical_f_20714);
}
{
var G__20715 = seq__20685_20707;
var G__20716 = chunk__20687_20708;
var G__20717 = count__20688_20709;
var G__20718 = (i__20689_20710 + 1);
seq__20685_20707 = G__20715;
chunk__20687_20708 = G__20716;
count__20688_20709 = G__20717;
i__20689_20710 = G__20718;
continue;
}
} else
{var temp__4092__auto___20719 = cljs.core.seq.call(null,seq__20685_20707);if(temp__4092__auto___20719)
{var seq__20685_20720__$1 = temp__4092__auto___20719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20685_20720__$1))
{var c__8552__auto___20721 = cljs.core.chunk_first.call(null,seq__20685_20720__$1);{
var G__20722 = cljs.core.chunk_rest.call(null,seq__20685_20720__$1);
var G__20723 = c__8552__auto___20721;
var G__20724 = cljs.core.count.call(null,c__8552__auto___20721);
var G__20725 = 0;
seq__20685_20707 = G__20722;
chunk__20687_20708 = G__20723;
count__20688_20709 = G__20724;
i__20689_20710 = G__20725;
continue;
}
} else
{var vec__20693_20726 = cljs.core.first.call(null,seq__20685_20720__$1);var actual_type_20727 = cljs.core.nth.call(null,vec__20693_20726,0,null);var factory_20728 = cljs.core.nth.call(null,vec__20693_20726,1,null);var canonical_f_20729 = (cljs.core.truth_(selector_20699)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20698,selector_20699):cljs.core.identity).call(null,factory_20728.call(null,f_20706));dommy.core.update_event_listeners_BANG_.call(null,elem_20698,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20699,actual_type_20727,f_20706], null),canonical_f_20729);
if(cljs.core.truth_(elem_20698.addEventListener))
{elem_20698.addEventListener(cljs.core.name.call(null,actual_type_20727),canonical_f_20729);
} else
{elem_20698.attachEvent(cljs.core.name.call(null,actual_type_20727),canonical_f_20729);
}
{
var G__20730 = cljs.core.next.call(null,seq__20685_20720__$1);
var G__20731 = null;
var G__20732 = 0;
var G__20733 = 0;
seq__20685_20707 = G__20730;
chunk__20687_20708 = G__20731;
count__20688_20709 = G__20732;
i__20689_20710 = G__20733;
continue;
}
}
} else
{}
}
break;
}
{
var G__20734 = seq__20675_20700;
var G__20735 = chunk__20682_20701;
var G__20736 = count__20683_20702;
var G__20737 = (i__20684_20703 + 1);
seq__20675_20700 = G__20734;
chunk__20682_20701 = G__20735;
count__20683_20702 = G__20736;
i__20684_20703 = G__20737;
continue;
}
} else
{var temp__4092__auto___20738 = cljs.core.seq.call(null,seq__20675_20700);if(temp__4092__auto___20738)
{var seq__20675_20739__$1 = temp__4092__auto___20738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20675_20739__$1))
{var c__8552__auto___20740 = cljs.core.chunk_first.call(null,seq__20675_20739__$1);{
var G__20741 = cljs.core.chunk_rest.call(null,seq__20675_20739__$1);
var G__20742 = c__8552__auto___20740;
var G__20743 = cljs.core.count.call(null,c__8552__auto___20740);
var G__20744 = 0;
seq__20675_20700 = G__20741;
chunk__20682_20701 = G__20742;
count__20683_20702 = G__20743;
i__20684_20703 = G__20744;
continue;
}
} else
{var vec__20694_20745 = cljs.core.first.call(null,seq__20675_20739__$1);var orig_type_20746 = cljs.core.nth.call(null,vec__20694_20745,0,null);var f_20747 = cljs.core.nth.call(null,vec__20694_20745,1,null);var seq__20676_20748 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20746,new cljs.core.PersistentArrayMap.fromArray([orig_type_20746,cljs.core.identity], true, false)));var chunk__20678_20749 = null;var count__20679_20750 = 0;var i__20680_20751 = 0;while(true){
if((i__20680_20751 < count__20679_20750))
{var vec__20695_20752 = cljs.core._nth.call(null,chunk__20678_20749,i__20680_20751);var actual_type_20753 = cljs.core.nth.call(null,vec__20695_20752,0,null);var factory_20754 = cljs.core.nth.call(null,vec__20695_20752,1,null);var canonical_f_20755 = (cljs.core.truth_(selector_20699)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20698,selector_20699):cljs.core.identity).call(null,factory_20754.call(null,f_20747));dommy.core.update_event_listeners_BANG_.call(null,elem_20698,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20699,actual_type_20753,f_20747], null),canonical_f_20755);
if(cljs.core.truth_(elem_20698.addEventListener))
{elem_20698.addEventListener(cljs.core.name.call(null,actual_type_20753),canonical_f_20755);
} else
{elem_20698.attachEvent(cljs.core.name.call(null,actual_type_20753),canonical_f_20755);
}
{
var G__20756 = seq__20676_20748;
var G__20757 = chunk__20678_20749;
var G__20758 = count__20679_20750;
var G__20759 = (i__20680_20751 + 1);
seq__20676_20748 = G__20756;
chunk__20678_20749 = G__20757;
count__20679_20750 = G__20758;
i__20680_20751 = G__20759;
continue;
}
} else
{var temp__4092__auto___20760__$1 = cljs.core.seq.call(null,seq__20676_20748);if(temp__4092__auto___20760__$1)
{var seq__20676_20761__$1 = temp__4092__auto___20760__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20676_20761__$1))
{var c__8552__auto___20762 = cljs.core.chunk_first.call(null,seq__20676_20761__$1);{
var G__20763 = cljs.core.chunk_rest.call(null,seq__20676_20761__$1);
var G__20764 = c__8552__auto___20762;
var G__20765 = cljs.core.count.call(null,c__8552__auto___20762);
var G__20766 = 0;
seq__20676_20748 = G__20763;
chunk__20678_20749 = G__20764;
count__20679_20750 = G__20765;
i__20680_20751 = G__20766;
continue;
}
} else
{var vec__20696_20767 = cljs.core.first.call(null,seq__20676_20761__$1);var actual_type_20768 = cljs.core.nth.call(null,vec__20696_20767,0,null);var factory_20769 = cljs.core.nth.call(null,vec__20696_20767,1,null);var canonical_f_20770 = (cljs.core.truth_(selector_20699)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20698,selector_20699):cljs.core.identity).call(null,factory_20769.call(null,f_20747));dommy.core.update_event_listeners_BANG_.call(null,elem_20698,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20699,actual_type_20768,f_20747], null),canonical_f_20770);
if(cljs.core.truth_(elem_20698.addEventListener))
{elem_20698.addEventListener(cljs.core.name.call(null,actual_type_20768),canonical_f_20770);
} else
{elem_20698.attachEvent(cljs.core.name.call(null,actual_type_20768),canonical_f_20770);
}
{
var G__20771 = cljs.core.next.call(null,seq__20676_20761__$1);
var G__20772 = null;
var G__20773 = 0;
var G__20774 = 0;
seq__20676_20748 = G__20771;
chunk__20678_20749 = G__20772;
count__20679_20750 = G__20773;
i__20680_20751 = G__20774;
continue;
}
}
} else
{}
}
break;
}
{
var G__20775 = cljs.core.next.call(null,seq__20675_20739__$1);
var G__20776 = null;
var G__20777 = 0;
var G__20778 = 0;
seq__20675_20700 = G__20775;
chunk__20682_20701 = G__20776;
count__20683_20702 = G__20777;
i__20684_20703 = G__20778;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__20779){
var elem_sel = cljs.core.first(arglist__20779);
var type_fs = cljs.core.rest(arglist__20779);
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
var vec__20803_20826 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20827 = cljs.core.nth.call(null,vec__20803_20826,0,null);var selector_20828 = cljs.core.nth.call(null,vec__20803_20826,1,null);var seq__20804_20829 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20811_20830 = null;var count__20812_20831 = 0;var i__20813_20832 = 0;while(true){
if((i__20813_20832 < count__20812_20831))
{var vec__20820_20833 = cljs.core._nth.call(null,chunk__20811_20830,i__20813_20832);var orig_type_20834 = cljs.core.nth.call(null,vec__20820_20833,0,null);var f_20835 = cljs.core.nth.call(null,vec__20820_20833,1,null);var seq__20814_20836 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20834,new cljs.core.PersistentArrayMap.fromArray([orig_type_20834,cljs.core.identity], true, false)));var chunk__20816_20837 = null;var count__20817_20838 = 0;var i__20818_20839 = 0;while(true){
if((i__20818_20839 < count__20817_20838))
{var vec__20821_20840 = cljs.core._nth.call(null,chunk__20816_20837,i__20818_20839);var actual_type_20841 = cljs.core.nth.call(null,vec__20821_20840,0,null);var __20842 = cljs.core.nth.call(null,vec__20821_20840,1,null);var keys_20843 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20828,actual_type_20841,f_20835], null);var canonical_f_20844 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20827),keys_20843);dommy.core.update_event_listeners_BANG_.call(null,elem_20827,dommy.utils.dissoc_in,keys_20843);
if(cljs.core.truth_(elem_20827.removeEventListener))
{elem_20827.removeEventListener(cljs.core.name.call(null,actual_type_20841),canonical_f_20844);
} else
{elem_20827.detachEvent(cljs.core.name.call(null,actual_type_20841),canonical_f_20844);
}
{
var G__20845 = seq__20814_20836;
var G__20846 = chunk__20816_20837;
var G__20847 = count__20817_20838;
var G__20848 = (i__20818_20839 + 1);
seq__20814_20836 = G__20845;
chunk__20816_20837 = G__20846;
count__20817_20838 = G__20847;
i__20818_20839 = G__20848;
continue;
}
} else
{var temp__4092__auto___20849 = cljs.core.seq.call(null,seq__20814_20836);if(temp__4092__auto___20849)
{var seq__20814_20850__$1 = temp__4092__auto___20849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20814_20850__$1))
{var c__8552__auto___20851 = cljs.core.chunk_first.call(null,seq__20814_20850__$1);{
var G__20852 = cljs.core.chunk_rest.call(null,seq__20814_20850__$1);
var G__20853 = c__8552__auto___20851;
var G__20854 = cljs.core.count.call(null,c__8552__auto___20851);
var G__20855 = 0;
seq__20814_20836 = G__20852;
chunk__20816_20837 = G__20853;
count__20817_20838 = G__20854;
i__20818_20839 = G__20855;
continue;
}
} else
{var vec__20822_20856 = cljs.core.first.call(null,seq__20814_20850__$1);var actual_type_20857 = cljs.core.nth.call(null,vec__20822_20856,0,null);var __20858 = cljs.core.nth.call(null,vec__20822_20856,1,null);var keys_20859 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20828,actual_type_20857,f_20835], null);var canonical_f_20860 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20827),keys_20859);dommy.core.update_event_listeners_BANG_.call(null,elem_20827,dommy.utils.dissoc_in,keys_20859);
if(cljs.core.truth_(elem_20827.removeEventListener))
{elem_20827.removeEventListener(cljs.core.name.call(null,actual_type_20857),canonical_f_20860);
} else
{elem_20827.detachEvent(cljs.core.name.call(null,actual_type_20857),canonical_f_20860);
}
{
var G__20861 = cljs.core.next.call(null,seq__20814_20850__$1);
var G__20862 = null;
var G__20863 = 0;
var G__20864 = 0;
seq__20814_20836 = G__20861;
chunk__20816_20837 = G__20862;
count__20817_20838 = G__20863;
i__20818_20839 = G__20864;
continue;
}
}
} else
{}
}
break;
}
{
var G__20865 = seq__20804_20829;
var G__20866 = chunk__20811_20830;
var G__20867 = count__20812_20831;
var G__20868 = (i__20813_20832 + 1);
seq__20804_20829 = G__20865;
chunk__20811_20830 = G__20866;
count__20812_20831 = G__20867;
i__20813_20832 = G__20868;
continue;
}
} else
{var temp__4092__auto___20869 = cljs.core.seq.call(null,seq__20804_20829);if(temp__4092__auto___20869)
{var seq__20804_20870__$1 = temp__4092__auto___20869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20804_20870__$1))
{var c__8552__auto___20871 = cljs.core.chunk_first.call(null,seq__20804_20870__$1);{
var G__20872 = cljs.core.chunk_rest.call(null,seq__20804_20870__$1);
var G__20873 = c__8552__auto___20871;
var G__20874 = cljs.core.count.call(null,c__8552__auto___20871);
var G__20875 = 0;
seq__20804_20829 = G__20872;
chunk__20811_20830 = G__20873;
count__20812_20831 = G__20874;
i__20813_20832 = G__20875;
continue;
}
} else
{var vec__20823_20876 = cljs.core.first.call(null,seq__20804_20870__$1);var orig_type_20877 = cljs.core.nth.call(null,vec__20823_20876,0,null);var f_20878 = cljs.core.nth.call(null,vec__20823_20876,1,null);var seq__20805_20879 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20877,new cljs.core.PersistentArrayMap.fromArray([orig_type_20877,cljs.core.identity], true, false)));var chunk__20807_20880 = null;var count__20808_20881 = 0;var i__20809_20882 = 0;while(true){
if((i__20809_20882 < count__20808_20881))
{var vec__20824_20883 = cljs.core._nth.call(null,chunk__20807_20880,i__20809_20882);var actual_type_20884 = cljs.core.nth.call(null,vec__20824_20883,0,null);var __20885 = cljs.core.nth.call(null,vec__20824_20883,1,null);var keys_20886 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20828,actual_type_20884,f_20878], null);var canonical_f_20887 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20827),keys_20886);dommy.core.update_event_listeners_BANG_.call(null,elem_20827,dommy.utils.dissoc_in,keys_20886);
if(cljs.core.truth_(elem_20827.removeEventListener))
{elem_20827.removeEventListener(cljs.core.name.call(null,actual_type_20884),canonical_f_20887);
} else
{elem_20827.detachEvent(cljs.core.name.call(null,actual_type_20884),canonical_f_20887);
}
{
var G__20888 = seq__20805_20879;
var G__20889 = chunk__20807_20880;
var G__20890 = count__20808_20881;
var G__20891 = (i__20809_20882 + 1);
seq__20805_20879 = G__20888;
chunk__20807_20880 = G__20889;
count__20808_20881 = G__20890;
i__20809_20882 = G__20891;
continue;
}
} else
{var temp__4092__auto___20892__$1 = cljs.core.seq.call(null,seq__20805_20879);if(temp__4092__auto___20892__$1)
{var seq__20805_20893__$1 = temp__4092__auto___20892__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20805_20893__$1))
{var c__8552__auto___20894 = cljs.core.chunk_first.call(null,seq__20805_20893__$1);{
var G__20895 = cljs.core.chunk_rest.call(null,seq__20805_20893__$1);
var G__20896 = c__8552__auto___20894;
var G__20897 = cljs.core.count.call(null,c__8552__auto___20894);
var G__20898 = 0;
seq__20805_20879 = G__20895;
chunk__20807_20880 = G__20896;
count__20808_20881 = G__20897;
i__20809_20882 = G__20898;
continue;
}
} else
{var vec__20825_20899 = cljs.core.first.call(null,seq__20805_20893__$1);var actual_type_20900 = cljs.core.nth.call(null,vec__20825_20899,0,null);var __20901 = cljs.core.nth.call(null,vec__20825_20899,1,null);var keys_20902 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20828,actual_type_20900,f_20878], null);var canonical_f_20903 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20827),keys_20902);dommy.core.update_event_listeners_BANG_.call(null,elem_20827,dommy.utils.dissoc_in,keys_20902);
if(cljs.core.truth_(elem_20827.removeEventListener))
{elem_20827.removeEventListener(cljs.core.name.call(null,actual_type_20900),canonical_f_20903);
} else
{elem_20827.detachEvent(cljs.core.name.call(null,actual_type_20900),canonical_f_20903);
}
{
var G__20904 = cljs.core.next.call(null,seq__20805_20893__$1);
var G__20905 = null;
var G__20906 = 0;
var G__20907 = 0;
seq__20805_20879 = G__20904;
chunk__20807_20880 = G__20905;
count__20808_20881 = G__20906;
i__20809_20882 = G__20907;
continue;
}
}
} else
{}
}
break;
}
{
var G__20908 = cljs.core.next.call(null,seq__20804_20870__$1);
var G__20909 = null;
var G__20910 = 0;
var G__20911 = 0;
seq__20804_20829 = G__20908;
chunk__20811_20830 = G__20909;
count__20812_20831 = G__20910;
i__20813_20832 = G__20911;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20912){
var elem_sel = cljs.core.first(arglist__20912);
var type_fs = cljs.core.rest(arglist__20912);
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
var vec__20920_20927 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_20928 = cljs.core.nth.call(null,vec__20920_20927,0,null);var selector_20929 = cljs.core.nth.call(null,vec__20920_20927,1,null);var seq__20921_20930 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__20922_20931 = null;var count__20923_20932 = 0;var i__20924_20933 = 0;while(true){
if((i__20924_20933 < count__20923_20932))
{var vec__20925_20934 = cljs.core._nth.call(null,chunk__20922_20931,i__20924_20933);var type_20935 = cljs.core.nth.call(null,vec__20925_20934,0,null);var f_20936 = cljs.core.nth.call(null,vec__20925_20934,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_20935,((function (seq__20921_20930,chunk__20922_20931,count__20923_20932,i__20924_20933,vec__20925_20934,type_20935,f_20936){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20935,this_fn);
return f_20936.call(null,e);
});})(seq__20921_20930,chunk__20922_20931,count__20923_20932,i__20924_20933,vec__20925_20934,type_20935,f_20936))
);
{
var G__20937 = seq__20921_20930;
var G__20938 = chunk__20922_20931;
var G__20939 = count__20923_20932;
var G__20940 = (i__20924_20933 + 1);
seq__20921_20930 = G__20937;
chunk__20922_20931 = G__20938;
count__20923_20932 = G__20939;
i__20924_20933 = G__20940;
continue;
}
} else
{var temp__4092__auto___20941 = cljs.core.seq.call(null,seq__20921_20930);if(temp__4092__auto___20941)
{var seq__20921_20942__$1 = temp__4092__auto___20941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20921_20942__$1))
{var c__8552__auto___20943 = cljs.core.chunk_first.call(null,seq__20921_20942__$1);{
var G__20944 = cljs.core.chunk_rest.call(null,seq__20921_20942__$1);
var G__20945 = c__8552__auto___20943;
var G__20946 = cljs.core.count.call(null,c__8552__auto___20943);
var G__20947 = 0;
seq__20921_20930 = G__20944;
chunk__20922_20931 = G__20945;
count__20923_20932 = G__20946;
i__20924_20933 = G__20947;
continue;
}
} else
{var vec__20926_20948 = cljs.core.first.call(null,seq__20921_20942__$1);var type_20949 = cljs.core.nth.call(null,vec__20926_20948,0,null);var f_20950 = cljs.core.nth.call(null,vec__20926_20948,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_20949,((function (seq__20921_20930,chunk__20922_20931,count__20923_20932,i__20924_20933,vec__20926_20948,type_20949,f_20950,seq__20921_20942__$1,temp__4092__auto___20941){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_20949,this_fn);
return f_20950.call(null,e);
});})(seq__20921_20930,chunk__20922_20931,count__20923_20932,i__20924_20933,vec__20926_20948,type_20949,f_20950,seq__20921_20942__$1,temp__4092__auto___20941))
);
{
var G__20951 = cljs.core.next.call(null,seq__20921_20942__$1);
var G__20952 = null;
var G__20953 = 0;
var G__20954 = 0;
seq__20921_20930 = G__20951;
chunk__20922_20931 = G__20952;
count__20923_20932 = G__20953;
i__20924_20933 = G__20954;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20955){
var elem_sel = cljs.core.first(arglist__20955);
var type_fs = cljs.core.rest(arglist__20955);
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
var fire_BANG___delegate = function (node,event_type,p__20956){var vec__20958 = p__20956;var update_event_BANG_ = cljs.core.nth.call(null,vec__20958,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__20956 = null;if (arguments.length > 2) {
  p__20956 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__20956);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__20959){
var node = cljs.core.first(arglist__20959);
arglist__20959 = cljs.core.next(arglist__20959);
var event_type = cljs.core.first(arglist__20959);
var p__20956 = cljs.core.rest(arglist__20959);
return fire_BANG___delegate(node,event_type,p__20956);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
