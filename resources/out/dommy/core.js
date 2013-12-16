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
dommy.core.text = (function text(elem){var or__13823__auto__ = elem.textContent;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var append_BANG___2 = (function (parent,child){var G__35688 = dommy.template.__GT_node_like.call(null,parent);G__35688.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__35688;
});
var append_BANG___3 = (function() { 
var G__35693__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35689_35694 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35690_35695 = null;var count__35691_35696 = 0;var i__35692_35697 = 0;while(true){
if((i__35692_35697 < count__35691_35696))
{var c_35698 = cljs.core._nth.call(null,chunk__35690_35695,i__35692_35697);append_BANG_.call(null,parent__$1,c_35698);
{
var G__35699 = seq__35689_35694;
var G__35700 = chunk__35690_35695;
var G__35701 = count__35691_35696;
var G__35702 = (i__35692_35697 + 1);
seq__35689_35694 = G__35699;
chunk__35690_35695 = G__35700;
count__35691_35696 = G__35701;
i__35692_35697 = G__35702;
continue;
}
} else
{var temp__4092__auto___35703 = cljs.core.seq.call(null,seq__35689_35694);if(temp__4092__auto___35703)
{var seq__35689_35704__$1 = temp__4092__auto___35703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35689_35704__$1))
{var c__14547__auto___35705 = cljs.core.chunk_first.call(null,seq__35689_35704__$1);{
var G__35706 = cljs.core.chunk_rest.call(null,seq__35689_35704__$1);
var G__35707 = c__14547__auto___35705;
var G__35708 = cljs.core.count.call(null,c__14547__auto___35705);
var G__35709 = 0;
seq__35689_35694 = G__35706;
chunk__35690_35695 = G__35707;
count__35691_35696 = G__35708;
i__35692_35697 = G__35709;
continue;
}
} else
{var c_35710 = cljs.core.first.call(null,seq__35689_35704__$1);append_BANG_.call(null,parent__$1,c_35710);
{
var G__35711 = cljs.core.next.call(null,seq__35689_35704__$1);
var G__35712 = null;
var G__35713 = 0;
var G__35714 = 0;
seq__35689_35694 = G__35711;
chunk__35690_35695 = G__35712;
count__35691_35696 = G__35713;
i__35692_35697 = G__35714;
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
var G__35693 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35693__delegate.call(this,parent,child,more_children);};
G__35693.cljs$lang$maxFixedArity = 2;
G__35693.cljs$lang$applyTo = (function (arglist__35715){
var parent = cljs.core.first(arglist__35715);
arglist__35715 = cljs.core.next(arglist__35715);
var child = cljs.core.first(arglist__35715);
var more_children = cljs.core.rest(arglist__35715);
return G__35693__delegate(parent,child,more_children);
});
G__35693.cljs$core$IFn$_invoke$arity$variadic = G__35693__delegate;
return G__35693;
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
var G__35724__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35720_35725 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35721_35726 = null;var count__35722_35727 = 0;var i__35723_35728 = 0;while(true){
if((i__35723_35728 < count__35722_35727))
{var c_35729 = cljs.core._nth.call(null,chunk__35721_35726,i__35723_35728);prepend_BANG_.call(null,parent__$1,c_35729);
{
var G__35730 = seq__35720_35725;
var G__35731 = chunk__35721_35726;
var G__35732 = count__35722_35727;
var G__35733 = (i__35723_35728 + 1);
seq__35720_35725 = G__35730;
chunk__35721_35726 = G__35731;
count__35722_35727 = G__35732;
i__35723_35728 = G__35733;
continue;
}
} else
{var temp__4092__auto___35734 = cljs.core.seq.call(null,seq__35720_35725);if(temp__4092__auto___35734)
{var seq__35720_35735__$1 = temp__4092__auto___35734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35720_35735__$1))
{var c__14547__auto___35736 = cljs.core.chunk_first.call(null,seq__35720_35735__$1);{
var G__35737 = cljs.core.chunk_rest.call(null,seq__35720_35735__$1);
var G__35738 = c__14547__auto___35736;
var G__35739 = cljs.core.count.call(null,c__14547__auto___35736);
var G__35740 = 0;
seq__35720_35725 = G__35737;
chunk__35721_35726 = G__35738;
count__35722_35727 = G__35739;
i__35723_35728 = G__35740;
continue;
}
} else
{var c_35741 = cljs.core.first.call(null,seq__35720_35735__$1);prepend_BANG_.call(null,parent__$1,c_35741);
{
var G__35742 = cljs.core.next.call(null,seq__35720_35735__$1);
var G__35743 = null;
var G__35744 = 0;
var G__35745 = 0;
seq__35720_35725 = G__35742;
chunk__35721_35726 = G__35743;
count__35722_35727 = G__35744;
i__35723_35728 = G__35745;
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
var G__35724 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35724__delegate.call(this,parent,child,more_children);};
G__35724.cljs$lang$maxFixedArity = 2;
G__35724.cljs$lang$applyTo = (function (arglist__35746){
var parent = cljs.core.first(arglist__35746);
arglist__35746 = cljs.core.next(arglist__35746);
var child = cljs.core.first(arglist__35746);
var more_children = cljs.core.rest(arglist__35746);
return G__35724__delegate(parent,child,more_children);
});
G__35724.cljs$core$IFn$_invoke$arity$variadic = G__35724__delegate;
return G__35724;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___35747 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___35747))
{var next_35748 = temp__4090__auto___35747;parent.insertBefore(actual_node,next_35748);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__35750 = dommy.template.__GT_node_like.call(null,parent);G__35750.innerHTML = "";
dommy.core.append_BANG_.call(null,G__35750,node_like);
return G__35750;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__35752 = elem__$1.parentNode;G__35752.removeChild(elem__$1);
return G__35752;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35758){var vec__35759 = p__35758;var k = cljs.core.nth.call(null,vec__35759,0,null);var v = cljs.core.nth.call(null,vec__35759,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t35760 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t35760 = (function (v,k,vec__35759,p__35758,container,key_selectors_map,template,selector_map,meta35761){
this.v = v;
this.k = k;
this.vec__35759 = vec__35759;
this.p__35758 = p__35758;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta35761 = meta35761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t35760.cljs$lang$type = true;
dommy.core.t35760.cljs$lang$ctorStr = "dommy.core/t35760";
dommy.core.t35760.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"dommy.core/t35760");
});
dommy.core.t35760.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t35760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35762){var self__ = this;
var _35762__$1 = this;return self__.meta35761;
});
dommy.core.t35760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35762,meta35761__$1){var self__ = this;
var _35762__$1 = this;return (new dommy.core.t35760(self__.v,self__.k,self__.vec__35759,self__.p__35758,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta35761__$1));
});
dommy.core.__GT_t35760 = (function __GT_t35760(v__$1,k__$1,vec__35759__$1,p__35758__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35761){return (new dommy.core.t35760(v__$1,k__$1,vec__35759__$1,p__35758__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35761));
});
}
return (new dommy.core.t35760(v,k,vec__35759,p__35758,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__35763_SHARP_){return p1__35763_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__35764_SHARP_){return !((p1__35764_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35765){var vec__35766 = p__35765;var special_mouse_event = cljs.core.nth.call(null,vec__35766,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__35766,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13823__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13811__auto__ = related_target;if(cljs.core.truth_(and__13811__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13811__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13811__auto__ = selected_target;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13811__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13823__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__35767){
var elem = cljs.core.first(arglist__35767);
arglist__35767 = cljs.core.next(arglist__35767);
var f = cljs.core.first(arglist__35767);
var args = cljs.core.rest(arglist__35767);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__35768_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__35768_SHARP_));
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
var vec__35792_35815 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35816 = cljs.core.nth.call(null,vec__35792_35815,0,null);var selector_35817 = cljs.core.nth.call(null,vec__35792_35815,1,null);var seq__35793_35818 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35800_35819 = null;var count__35801_35820 = 0;var i__35802_35821 = 0;while(true){
if((i__35802_35821 < count__35801_35820))
{var vec__35809_35822 = cljs.core._nth.call(null,chunk__35800_35819,i__35802_35821);var orig_type_35823 = cljs.core.nth.call(null,vec__35809_35822,0,null);var f_35824 = cljs.core.nth.call(null,vec__35809_35822,1,null);var seq__35803_35825 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35823,new cljs.core.PersistentArrayMap.fromArray([orig_type_35823,cljs.core.identity], true, false)));var chunk__35805_35826 = null;var count__35806_35827 = 0;var i__35807_35828 = 0;while(true){
if((i__35807_35828 < count__35806_35827))
{var vec__35810_35829 = cljs.core._nth.call(null,chunk__35805_35826,i__35807_35828);var actual_type_35830 = cljs.core.nth.call(null,vec__35810_35829,0,null);var factory_35831 = cljs.core.nth.call(null,vec__35810_35829,1,null);var canonical_f_35832 = (cljs.core.truth_(selector_35817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35816,selector_35817):cljs.core.identity).call(null,factory_35831.call(null,f_35824));dommy.core.update_event_listeners_BANG_.call(null,elem_35816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35817,actual_type_35830,f_35824], null),canonical_f_35832);
if(cljs.core.truth_(elem_35816.addEventListener))
{elem_35816.addEventListener(cljs.core.name.call(null,actual_type_35830),canonical_f_35832);
} else
{elem_35816.attachEvent(cljs.core.name.call(null,actual_type_35830),canonical_f_35832);
}
{
var G__35833 = seq__35803_35825;
var G__35834 = chunk__35805_35826;
var G__35835 = count__35806_35827;
var G__35836 = (i__35807_35828 + 1);
seq__35803_35825 = G__35833;
chunk__35805_35826 = G__35834;
count__35806_35827 = G__35835;
i__35807_35828 = G__35836;
continue;
}
} else
{var temp__4092__auto___35837 = cljs.core.seq.call(null,seq__35803_35825);if(temp__4092__auto___35837)
{var seq__35803_35838__$1 = temp__4092__auto___35837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35803_35838__$1))
{var c__14547__auto___35839 = cljs.core.chunk_first.call(null,seq__35803_35838__$1);{
var G__35840 = cljs.core.chunk_rest.call(null,seq__35803_35838__$1);
var G__35841 = c__14547__auto___35839;
var G__35842 = cljs.core.count.call(null,c__14547__auto___35839);
var G__35843 = 0;
seq__35803_35825 = G__35840;
chunk__35805_35826 = G__35841;
count__35806_35827 = G__35842;
i__35807_35828 = G__35843;
continue;
}
} else
{var vec__35811_35844 = cljs.core.first.call(null,seq__35803_35838__$1);var actual_type_35845 = cljs.core.nth.call(null,vec__35811_35844,0,null);var factory_35846 = cljs.core.nth.call(null,vec__35811_35844,1,null);var canonical_f_35847 = (cljs.core.truth_(selector_35817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35816,selector_35817):cljs.core.identity).call(null,factory_35846.call(null,f_35824));dommy.core.update_event_listeners_BANG_.call(null,elem_35816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35817,actual_type_35845,f_35824], null),canonical_f_35847);
if(cljs.core.truth_(elem_35816.addEventListener))
{elem_35816.addEventListener(cljs.core.name.call(null,actual_type_35845),canonical_f_35847);
} else
{elem_35816.attachEvent(cljs.core.name.call(null,actual_type_35845),canonical_f_35847);
}
{
var G__35848 = cljs.core.next.call(null,seq__35803_35838__$1);
var G__35849 = null;
var G__35850 = 0;
var G__35851 = 0;
seq__35803_35825 = G__35848;
chunk__35805_35826 = G__35849;
count__35806_35827 = G__35850;
i__35807_35828 = G__35851;
continue;
}
}
} else
{}
}
break;
}
{
var G__35852 = seq__35793_35818;
var G__35853 = chunk__35800_35819;
var G__35854 = count__35801_35820;
var G__35855 = (i__35802_35821 + 1);
seq__35793_35818 = G__35852;
chunk__35800_35819 = G__35853;
count__35801_35820 = G__35854;
i__35802_35821 = G__35855;
continue;
}
} else
{var temp__4092__auto___35856 = cljs.core.seq.call(null,seq__35793_35818);if(temp__4092__auto___35856)
{var seq__35793_35857__$1 = temp__4092__auto___35856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35793_35857__$1))
{var c__14547__auto___35858 = cljs.core.chunk_first.call(null,seq__35793_35857__$1);{
var G__35859 = cljs.core.chunk_rest.call(null,seq__35793_35857__$1);
var G__35860 = c__14547__auto___35858;
var G__35861 = cljs.core.count.call(null,c__14547__auto___35858);
var G__35862 = 0;
seq__35793_35818 = G__35859;
chunk__35800_35819 = G__35860;
count__35801_35820 = G__35861;
i__35802_35821 = G__35862;
continue;
}
} else
{var vec__35812_35863 = cljs.core.first.call(null,seq__35793_35857__$1);var orig_type_35864 = cljs.core.nth.call(null,vec__35812_35863,0,null);var f_35865 = cljs.core.nth.call(null,vec__35812_35863,1,null);var seq__35794_35866 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35864,new cljs.core.PersistentArrayMap.fromArray([orig_type_35864,cljs.core.identity], true, false)));var chunk__35796_35867 = null;var count__35797_35868 = 0;var i__35798_35869 = 0;while(true){
if((i__35798_35869 < count__35797_35868))
{var vec__35813_35870 = cljs.core._nth.call(null,chunk__35796_35867,i__35798_35869);var actual_type_35871 = cljs.core.nth.call(null,vec__35813_35870,0,null);var factory_35872 = cljs.core.nth.call(null,vec__35813_35870,1,null);var canonical_f_35873 = (cljs.core.truth_(selector_35817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35816,selector_35817):cljs.core.identity).call(null,factory_35872.call(null,f_35865));dommy.core.update_event_listeners_BANG_.call(null,elem_35816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35817,actual_type_35871,f_35865], null),canonical_f_35873);
if(cljs.core.truth_(elem_35816.addEventListener))
{elem_35816.addEventListener(cljs.core.name.call(null,actual_type_35871),canonical_f_35873);
} else
{elem_35816.attachEvent(cljs.core.name.call(null,actual_type_35871),canonical_f_35873);
}
{
var G__35874 = seq__35794_35866;
var G__35875 = chunk__35796_35867;
var G__35876 = count__35797_35868;
var G__35877 = (i__35798_35869 + 1);
seq__35794_35866 = G__35874;
chunk__35796_35867 = G__35875;
count__35797_35868 = G__35876;
i__35798_35869 = G__35877;
continue;
}
} else
{var temp__4092__auto___35878__$1 = cljs.core.seq.call(null,seq__35794_35866);if(temp__4092__auto___35878__$1)
{var seq__35794_35879__$1 = temp__4092__auto___35878__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35794_35879__$1))
{var c__14547__auto___35880 = cljs.core.chunk_first.call(null,seq__35794_35879__$1);{
var G__35881 = cljs.core.chunk_rest.call(null,seq__35794_35879__$1);
var G__35882 = c__14547__auto___35880;
var G__35883 = cljs.core.count.call(null,c__14547__auto___35880);
var G__35884 = 0;
seq__35794_35866 = G__35881;
chunk__35796_35867 = G__35882;
count__35797_35868 = G__35883;
i__35798_35869 = G__35884;
continue;
}
} else
{var vec__35814_35885 = cljs.core.first.call(null,seq__35794_35879__$1);var actual_type_35886 = cljs.core.nth.call(null,vec__35814_35885,0,null);var factory_35887 = cljs.core.nth.call(null,vec__35814_35885,1,null);var canonical_f_35888 = (cljs.core.truth_(selector_35817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35816,selector_35817):cljs.core.identity).call(null,factory_35887.call(null,f_35865));dommy.core.update_event_listeners_BANG_.call(null,elem_35816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35817,actual_type_35886,f_35865], null),canonical_f_35888);
if(cljs.core.truth_(elem_35816.addEventListener))
{elem_35816.addEventListener(cljs.core.name.call(null,actual_type_35886),canonical_f_35888);
} else
{elem_35816.attachEvent(cljs.core.name.call(null,actual_type_35886),canonical_f_35888);
}
{
var G__35889 = cljs.core.next.call(null,seq__35794_35879__$1);
var G__35890 = null;
var G__35891 = 0;
var G__35892 = 0;
seq__35794_35866 = G__35889;
chunk__35796_35867 = G__35890;
count__35797_35868 = G__35891;
i__35798_35869 = G__35892;
continue;
}
}
} else
{}
}
break;
}
{
var G__35893 = cljs.core.next.call(null,seq__35793_35857__$1);
var G__35894 = null;
var G__35895 = 0;
var G__35896 = 0;
seq__35793_35818 = G__35893;
chunk__35800_35819 = G__35894;
count__35801_35820 = G__35895;
i__35802_35821 = G__35896;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__35897){
var elem_sel = cljs.core.first(arglist__35897);
var type_fs = cljs.core.rest(arglist__35897);
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
var vec__35921_35944 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35945 = cljs.core.nth.call(null,vec__35921_35944,0,null);var selector_35946 = cljs.core.nth.call(null,vec__35921_35944,1,null);var seq__35922_35947 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35929_35948 = null;var count__35930_35949 = 0;var i__35931_35950 = 0;while(true){
if((i__35931_35950 < count__35930_35949))
{var vec__35938_35951 = cljs.core._nth.call(null,chunk__35929_35948,i__35931_35950);var orig_type_35952 = cljs.core.nth.call(null,vec__35938_35951,0,null);var f_35953 = cljs.core.nth.call(null,vec__35938_35951,1,null);var seq__35932_35954 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35952,new cljs.core.PersistentArrayMap.fromArray([orig_type_35952,cljs.core.identity], true, false)));var chunk__35934_35955 = null;var count__35935_35956 = 0;var i__35936_35957 = 0;while(true){
if((i__35936_35957 < count__35935_35956))
{var vec__35939_35958 = cljs.core._nth.call(null,chunk__35934_35955,i__35936_35957);var actual_type_35959 = cljs.core.nth.call(null,vec__35939_35958,0,null);var __35960 = cljs.core.nth.call(null,vec__35939_35958,1,null);var keys_35961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35946,actual_type_35959,f_35953], null);var canonical_f_35962 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35945),keys_35961);dommy.core.update_event_listeners_BANG_.call(null,elem_35945,dommy.utils.dissoc_in,keys_35961);
if(cljs.core.truth_(elem_35945.removeEventListener))
{elem_35945.removeEventListener(cljs.core.name.call(null,actual_type_35959),canonical_f_35962);
} else
{elem_35945.detachEvent(cljs.core.name.call(null,actual_type_35959),canonical_f_35962);
}
{
var G__35963 = seq__35932_35954;
var G__35964 = chunk__35934_35955;
var G__35965 = count__35935_35956;
var G__35966 = (i__35936_35957 + 1);
seq__35932_35954 = G__35963;
chunk__35934_35955 = G__35964;
count__35935_35956 = G__35965;
i__35936_35957 = G__35966;
continue;
}
} else
{var temp__4092__auto___35967 = cljs.core.seq.call(null,seq__35932_35954);if(temp__4092__auto___35967)
{var seq__35932_35968__$1 = temp__4092__auto___35967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35932_35968__$1))
{var c__14547__auto___35969 = cljs.core.chunk_first.call(null,seq__35932_35968__$1);{
var G__35970 = cljs.core.chunk_rest.call(null,seq__35932_35968__$1);
var G__35971 = c__14547__auto___35969;
var G__35972 = cljs.core.count.call(null,c__14547__auto___35969);
var G__35973 = 0;
seq__35932_35954 = G__35970;
chunk__35934_35955 = G__35971;
count__35935_35956 = G__35972;
i__35936_35957 = G__35973;
continue;
}
} else
{var vec__35940_35974 = cljs.core.first.call(null,seq__35932_35968__$1);var actual_type_35975 = cljs.core.nth.call(null,vec__35940_35974,0,null);var __35976 = cljs.core.nth.call(null,vec__35940_35974,1,null);var keys_35977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35946,actual_type_35975,f_35953], null);var canonical_f_35978 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35945),keys_35977);dommy.core.update_event_listeners_BANG_.call(null,elem_35945,dommy.utils.dissoc_in,keys_35977);
if(cljs.core.truth_(elem_35945.removeEventListener))
{elem_35945.removeEventListener(cljs.core.name.call(null,actual_type_35975),canonical_f_35978);
} else
{elem_35945.detachEvent(cljs.core.name.call(null,actual_type_35975),canonical_f_35978);
}
{
var G__35979 = cljs.core.next.call(null,seq__35932_35968__$1);
var G__35980 = null;
var G__35981 = 0;
var G__35982 = 0;
seq__35932_35954 = G__35979;
chunk__35934_35955 = G__35980;
count__35935_35956 = G__35981;
i__35936_35957 = G__35982;
continue;
}
}
} else
{}
}
break;
}
{
var G__35983 = seq__35922_35947;
var G__35984 = chunk__35929_35948;
var G__35985 = count__35930_35949;
var G__35986 = (i__35931_35950 + 1);
seq__35922_35947 = G__35983;
chunk__35929_35948 = G__35984;
count__35930_35949 = G__35985;
i__35931_35950 = G__35986;
continue;
}
} else
{var temp__4092__auto___35987 = cljs.core.seq.call(null,seq__35922_35947);if(temp__4092__auto___35987)
{var seq__35922_35988__$1 = temp__4092__auto___35987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35922_35988__$1))
{var c__14547__auto___35989 = cljs.core.chunk_first.call(null,seq__35922_35988__$1);{
var G__35990 = cljs.core.chunk_rest.call(null,seq__35922_35988__$1);
var G__35991 = c__14547__auto___35989;
var G__35992 = cljs.core.count.call(null,c__14547__auto___35989);
var G__35993 = 0;
seq__35922_35947 = G__35990;
chunk__35929_35948 = G__35991;
count__35930_35949 = G__35992;
i__35931_35950 = G__35993;
continue;
}
} else
{var vec__35941_35994 = cljs.core.first.call(null,seq__35922_35988__$1);var orig_type_35995 = cljs.core.nth.call(null,vec__35941_35994,0,null);var f_35996 = cljs.core.nth.call(null,vec__35941_35994,1,null);var seq__35923_35997 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35995,new cljs.core.PersistentArrayMap.fromArray([orig_type_35995,cljs.core.identity], true, false)));var chunk__35925_35998 = null;var count__35926_35999 = 0;var i__35927_36000 = 0;while(true){
if((i__35927_36000 < count__35926_35999))
{var vec__35942_36001 = cljs.core._nth.call(null,chunk__35925_35998,i__35927_36000);var actual_type_36002 = cljs.core.nth.call(null,vec__35942_36001,0,null);var __36003 = cljs.core.nth.call(null,vec__35942_36001,1,null);var keys_36004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35946,actual_type_36002,f_35996], null);var canonical_f_36005 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35945),keys_36004);dommy.core.update_event_listeners_BANG_.call(null,elem_35945,dommy.utils.dissoc_in,keys_36004);
if(cljs.core.truth_(elem_35945.removeEventListener))
{elem_35945.removeEventListener(cljs.core.name.call(null,actual_type_36002),canonical_f_36005);
} else
{elem_35945.detachEvent(cljs.core.name.call(null,actual_type_36002),canonical_f_36005);
}
{
var G__36006 = seq__35923_35997;
var G__36007 = chunk__35925_35998;
var G__36008 = count__35926_35999;
var G__36009 = (i__35927_36000 + 1);
seq__35923_35997 = G__36006;
chunk__35925_35998 = G__36007;
count__35926_35999 = G__36008;
i__35927_36000 = G__36009;
continue;
}
} else
{var temp__4092__auto___36010__$1 = cljs.core.seq.call(null,seq__35923_35997);if(temp__4092__auto___36010__$1)
{var seq__35923_36011__$1 = temp__4092__auto___36010__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35923_36011__$1))
{var c__14547__auto___36012 = cljs.core.chunk_first.call(null,seq__35923_36011__$1);{
var G__36013 = cljs.core.chunk_rest.call(null,seq__35923_36011__$1);
var G__36014 = c__14547__auto___36012;
var G__36015 = cljs.core.count.call(null,c__14547__auto___36012);
var G__36016 = 0;
seq__35923_35997 = G__36013;
chunk__35925_35998 = G__36014;
count__35926_35999 = G__36015;
i__35927_36000 = G__36016;
continue;
}
} else
{var vec__35943_36017 = cljs.core.first.call(null,seq__35923_36011__$1);var actual_type_36018 = cljs.core.nth.call(null,vec__35943_36017,0,null);var __36019 = cljs.core.nth.call(null,vec__35943_36017,1,null);var keys_36020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35946,actual_type_36018,f_35996], null);var canonical_f_36021 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35945),keys_36020);dommy.core.update_event_listeners_BANG_.call(null,elem_35945,dommy.utils.dissoc_in,keys_36020);
if(cljs.core.truth_(elem_35945.removeEventListener))
{elem_35945.removeEventListener(cljs.core.name.call(null,actual_type_36018),canonical_f_36021);
} else
{elem_35945.detachEvent(cljs.core.name.call(null,actual_type_36018),canonical_f_36021);
}
{
var G__36022 = cljs.core.next.call(null,seq__35923_36011__$1);
var G__36023 = null;
var G__36024 = 0;
var G__36025 = 0;
seq__35923_35997 = G__36022;
chunk__35925_35998 = G__36023;
count__35926_35999 = G__36024;
i__35927_36000 = G__36025;
continue;
}
}
} else
{}
}
break;
}
{
var G__36026 = cljs.core.next.call(null,seq__35922_35988__$1);
var G__36027 = null;
var G__36028 = 0;
var G__36029 = 0;
seq__35922_35947 = G__36026;
chunk__35929_35948 = G__36027;
count__35930_35949 = G__36028;
i__35931_35950 = G__36029;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__36030){
var elem_sel = cljs.core.first(arglist__36030);
var type_fs = cljs.core.rest(arglist__36030);
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
var vec__36038_36045 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_36046 = cljs.core.nth.call(null,vec__36038_36045,0,null);var selector_36047 = cljs.core.nth.call(null,vec__36038_36045,1,null);var seq__36039_36048 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__36040_36049 = null;var count__36041_36050 = 0;var i__36042_36051 = 0;while(true){
if((i__36042_36051 < count__36041_36050))
{var vec__36043_36052 = cljs.core._nth.call(null,chunk__36040_36049,i__36042_36051);var type_36053 = cljs.core.nth.call(null,vec__36043_36052,0,null);var f_36054 = cljs.core.nth.call(null,vec__36043_36052,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_36053,((function (seq__36039_36048,chunk__36040_36049,count__36041_36050,i__36042_36051,vec__36043_36052,type_36053,f_36054){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_36053,this_fn);
return f_36054.call(null,e);
});})(seq__36039_36048,chunk__36040_36049,count__36041_36050,i__36042_36051,vec__36043_36052,type_36053,f_36054))
);
{
var G__36055 = seq__36039_36048;
var G__36056 = chunk__36040_36049;
var G__36057 = count__36041_36050;
var G__36058 = (i__36042_36051 + 1);
seq__36039_36048 = G__36055;
chunk__36040_36049 = G__36056;
count__36041_36050 = G__36057;
i__36042_36051 = G__36058;
continue;
}
} else
{var temp__4092__auto___36059 = cljs.core.seq.call(null,seq__36039_36048);if(temp__4092__auto___36059)
{var seq__36039_36060__$1 = temp__4092__auto___36059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36039_36060__$1))
{var c__14547__auto___36061 = cljs.core.chunk_first.call(null,seq__36039_36060__$1);{
var G__36062 = cljs.core.chunk_rest.call(null,seq__36039_36060__$1);
var G__36063 = c__14547__auto___36061;
var G__36064 = cljs.core.count.call(null,c__14547__auto___36061);
var G__36065 = 0;
seq__36039_36048 = G__36062;
chunk__36040_36049 = G__36063;
count__36041_36050 = G__36064;
i__36042_36051 = G__36065;
continue;
}
} else
{var vec__36044_36066 = cljs.core.first.call(null,seq__36039_36060__$1);var type_36067 = cljs.core.nth.call(null,vec__36044_36066,0,null);var f_36068 = cljs.core.nth.call(null,vec__36044_36066,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_36067,((function (seq__36039_36048,chunk__36040_36049,count__36041_36050,i__36042_36051,vec__36044_36066,type_36067,f_36068,seq__36039_36060__$1,temp__4092__auto___36059){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_36067,this_fn);
return f_36068.call(null,e);
});})(seq__36039_36048,chunk__36040_36049,count__36041_36050,i__36042_36051,vec__36044_36066,type_36067,f_36068,seq__36039_36060__$1,temp__4092__auto___36059))
);
{
var G__36069 = cljs.core.next.call(null,seq__36039_36060__$1);
var G__36070 = null;
var G__36071 = 0;
var G__36072 = 0;
seq__36039_36048 = G__36069;
chunk__36040_36049 = G__36070;
count__36041_36050 = G__36071;
i__36042_36051 = G__36072;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__36073){
var elem_sel = cljs.core.first(arglist__36073);
var type_fs = cljs.core.rest(arglist__36073);
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
var fire_BANG___delegate = function (node,event_type,p__36074){var vec__36076 = p__36074;var update_event_BANG_ = cljs.core.nth.call(null,vec__36076,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13823__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var p__36074 = null;if (arguments.length > 2) {
  p__36074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__36074);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__36077){
var node = cljs.core.first(arglist__36077);
arglist__36077 = cljs.core.next(arglist__36077);
var event_type = cljs.core.first(arglist__36077);
var p__36074 = cljs.core.rest(arglist__36077);
return fire_BANG___delegate(node,event_type,p__36074);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map