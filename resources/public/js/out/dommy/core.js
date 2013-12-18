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
var append_BANG___2 = (function (parent,child){var G__84684 = dommy.template.__GT_node_like.call(null,parent);G__84684.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__84684;
});
var append_BANG___3 = (function() { 
var G__84689__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__84685_84690 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__84686_84691 = null;var count__84687_84692 = 0;var i__84688_84693 = 0;while(true){
if((i__84688_84693 < count__84687_84692))
{var c_84694 = cljs.core._nth.call(null,chunk__84686_84691,i__84688_84693);append_BANG_.call(null,parent__$1,c_84694);
{
var G__84695 = seq__84685_84690;
var G__84696 = chunk__84686_84691;
var G__84697 = count__84687_84692;
var G__84698 = (i__84688_84693 + 1);
seq__84685_84690 = G__84695;
chunk__84686_84691 = G__84696;
count__84687_84692 = G__84697;
i__84688_84693 = G__84698;
continue;
}
} else
{var temp__4092__auto___84699 = cljs.core.seq.call(null,seq__84685_84690);if(temp__4092__auto___84699)
{var seq__84685_84700__$1 = temp__4092__auto___84699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84685_84700__$1))
{var c__8957__auto___84701 = cljs.core.chunk_first.call(null,seq__84685_84700__$1);{
var G__84702 = cljs.core.chunk_rest.call(null,seq__84685_84700__$1);
var G__84703 = c__8957__auto___84701;
var G__84704 = cljs.core.count.call(null,c__8957__auto___84701);
var G__84705 = 0;
seq__84685_84690 = G__84702;
chunk__84686_84691 = G__84703;
count__84687_84692 = G__84704;
i__84688_84693 = G__84705;
continue;
}
} else
{var c_84706 = cljs.core.first.call(null,seq__84685_84700__$1);append_BANG_.call(null,parent__$1,c_84706);
{
var G__84707 = cljs.core.next.call(null,seq__84685_84700__$1);
var G__84708 = null;
var G__84709 = 0;
var G__84710 = 0;
seq__84685_84690 = G__84707;
chunk__84686_84691 = G__84708;
count__84687_84692 = G__84709;
i__84688_84693 = G__84710;
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
var G__84689 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84689__delegate.call(this,parent,child,more_children);};
G__84689.cljs$lang$maxFixedArity = 2;
G__84689.cljs$lang$applyTo = (function (arglist__84711){
var parent = cljs.core.first(arglist__84711);
arglist__84711 = cljs.core.next(arglist__84711);
var child = cljs.core.first(arglist__84711);
var more_children = cljs.core.rest(arglist__84711);
return G__84689__delegate(parent,child,more_children);
});
G__84689.cljs$core$IFn$_invoke$arity$variadic = G__84689__delegate;
return G__84689;
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
var G__84720__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__84716_84721 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__84717_84722 = null;var count__84718_84723 = 0;var i__84719_84724 = 0;while(true){
if((i__84719_84724 < count__84718_84723))
{var c_84725 = cljs.core._nth.call(null,chunk__84717_84722,i__84719_84724);prepend_BANG_.call(null,parent__$1,c_84725);
{
var G__84726 = seq__84716_84721;
var G__84727 = chunk__84717_84722;
var G__84728 = count__84718_84723;
var G__84729 = (i__84719_84724 + 1);
seq__84716_84721 = G__84726;
chunk__84717_84722 = G__84727;
count__84718_84723 = G__84728;
i__84719_84724 = G__84729;
continue;
}
} else
{var temp__4092__auto___84730 = cljs.core.seq.call(null,seq__84716_84721);if(temp__4092__auto___84730)
{var seq__84716_84731__$1 = temp__4092__auto___84730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84716_84731__$1))
{var c__8957__auto___84732 = cljs.core.chunk_first.call(null,seq__84716_84731__$1);{
var G__84733 = cljs.core.chunk_rest.call(null,seq__84716_84731__$1);
var G__84734 = c__8957__auto___84732;
var G__84735 = cljs.core.count.call(null,c__8957__auto___84732);
var G__84736 = 0;
seq__84716_84721 = G__84733;
chunk__84717_84722 = G__84734;
count__84718_84723 = G__84735;
i__84719_84724 = G__84736;
continue;
}
} else
{var c_84737 = cljs.core.first.call(null,seq__84716_84731__$1);prepend_BANG_.call(null,parent__$1,c_84737);
{
var G__84738 = cljs.core.next.call(null,seq__84716_84731__$1);
var G__84739 = null;
var G__84740 = 0;
var G__84741 = 0;
seq__84716_84721 = G__84738;
chunk__84717_84722 = G__84739;
count__84718_84723 = G__84740;
i__84719_84724 = G__84741;
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
var G__84720 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84720__delegate.call(this,parent,child,more_children);};
G__84720.cljs$lang$maxFixedArity = 2;
G__84720.cljs$lang$applyTo = (function (arglist__84742){
var parent = cljs.core.first(arglist__84742);
arglist__84742 = cljs.core.next(arglist__84742);
var child = cljs.core.first(arglist__84742);
var more_children = cljs.core.rest(arglist__84742);
return G__84720__delegate(parent,child,more_children);
});
G__84720.cljs$core$IFn$_invoke$arity$variadic = G__84720__delegate;
return G__84720;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___84743 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___84743))
{var next_84744 = temp__4090__auto___84743;parent.insertBefore(actual_node,next_84744);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__84746 = dommy.template.__GT_node_like.call(null,parent);G__84746.innerHTML = "";
dommy.core.append_BANG_.call(null,G__84746,node_like);
return G__84746;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__84748 = elem__$1.parentNode;G__84748.removeChild(elem__$1);
return G__84748;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__84754){var vec__84755 = p__84754;var k = cljs.core.nth.call(null,vec__84755,0,null);var v = cljs.core.nth.call(null,vec__84755,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t84756 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t84756 = (function (v,k,vec__84755,p__84754,container,key_selectors_map,template,selector_map,meta84757){
this.v = v;
this.k = k;
this.vec__84755 = vec__84755;
this.p__84754 = p__84754;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta84757 = meta84757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t84756.cljs$lang$type = true;
dommy.core.t84756.cljs$lang$ctorStr = "dommy.core/t84756";
dommy.core.t84756.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"dommy.core/t84756");
});
dommy.core.t84756.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t84756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84758){var self__ = this;
var _84758__$1 = this;return self__.meta84757;
});
dommy.core.t84756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84758,meta84757__$1){var self__ = this;
var _84758__$1 = this;return (new dommy.core.t84756(self__.v,self__.k,self__.vec__84755,self__.p__84754,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta84757__$1));
});
dommy.core.__GT_t84756 = (function __GT_t84756(v__$1,k__$1,vec__84755__$1,p__84754__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta84757){return (new dommy.core.t84756(v__$1,k__$1,vec__84755__$1,p__84754__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta84757));
});
}
return (new dommy.core.t84756(v,k,vec__84755,p__84754,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__84759_SHARP_){return p1__84759_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__84760_SHARP_){return !((p1__84760_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__84761){var vec__84762 = p__84761;var special_mouse_event = cljs.core.nth.call(null,vec__84762,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__84762,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8228__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8228__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__84763){
var elem = cljs.core.first(arglist__84763);
arglist__84763 = cljs.core.next(arglist__84763);
var f = cljs.core.first(arglist__84763);
var args = cljs.core.rest(arglist__84763);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__84764_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__84764_SHARP_));
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
var vec__84788_84811 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_84812 = cljs.core.nth.call(null,vec__84788_84811,0,null);var selector_84813 = cljs.core.nth.call(null,vec__84788_84811,1,null);var seq__84789_84814 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__84796_84815 = null;var count__84797_84816 = 0;var i__84798_84817 = 0;while(true){
if((i__84798_84817 < count__84797_84816))
{var vec__84805_84818 = cljs.core._nth.call(null,chunk__84796_84815,i__84798_84817);var orig_type_84819 = cljs.core.nth.call(null,vec__84805_84818,0,null);var f_84820 = cljs.core.nth.call(null,vec__84805_84818,1,null);var seq__84799_84821 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84819,new cljs.core.PersistentArrayMap.fromArray([orig_type_84819,cljs.core.identity], true, false)));var chunk__84801_84822 = null;var count__84802_84823 = 0;var i__84803_84824 = 0;while(true){
if((i__84803_84824 < count__84802_84823))
{var vec__84806_84825 = cljs.core._nth.call(null,chunk__84801_84822,i__84803_84824);var actual_type_84826 = cljs.core.nth.call(null,vec__84806_84825,0,null);var factory_84827 = cljs.core.nth.call(null,vec__84806_84825,1,null);var canonical_f_84828 = (cljs.core.truth_(selector_84813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84812,selector_84813):cljs.core.identity).call(null,factory_84827.call(null,f_84820));dommy.core.update_event_listeners_BANG_.call(null,elem_84812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84813,actual_type_84826,f_84820], null),canonical_f_84828);
if(cljs.core.truth_(elem_84812.addEventListener))
{elem_84812.addEventListener(cljs.core.name.call(null,actual_type_84826),canonical_f_84828);
} else
{elem_84812.attachEvent(cljs.core.name.call(null,actual_type_84826),canonical_f_84828);
}
{
var G__84829 = seq__84799_84821;
var G__84830 = chunk__84801_84822;
var G__84831 = count__84802_84823;
var G__84832 = (i__84803_84824 + 1);
seq__84799_84821 = G__84829;
chunk__84801_84822 = G__84830;
count__84802_84823 = G__84831;
i__84803_84824 = G__84832;
continue;
}
} else
{var temp__4092__auto___84833 = cljs.core.seq.call(null,seq__84799_84821);if(temp__4092__auto___84833)
{var seq__84799_84834__$1 = temp__4092__auto___84833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84799_84834__$1))
{var c__8957__auto___84835 = cljs.core.chunk_first.call(null,seq__84799_84834__$1);{
var G__84836 = cljs.core.chunk_rest.call(null,seq__84799_84834__$1);
var G__84837 = c__8957__auto___84835;
var G__84838 = cljs.core.count.call(null,c__8957__auto___84835);
var G__84839 = 0;
seq__84799_84821 = G__84836;
chunk__84801_84822 = G__84837;
count__84802_84823 = G__84838;
i__84803_84824 = G__84839;
continue;
}
} else
{var vec__84807_84840 = cljs.core.first.call(null,seq__84799_84834__$1);var actual_type_84841 = cljs.core.nth.call(null,vec__84807_84840,0,null);var factory_84842 = cljs.core.nth.call(null,vec__84807_84840,1,null);var canonical_f_84843 = (cljs.core.truth_(selector_84813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84812,selector_84813):cljs.core.identity).call(null,factory_84842.call(null,f_84820));dommy.core.update_event_listeners_BANG_.call(null,elem_84812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84813,actual_type_84841,f_84820], null),canonical_f_84843);
if(cljs.core.truth_(elem_84812.addEventListener))
{elem_84812.addEventListener(cljs.core.name.call(null,actual_type_84841),canonical_f_84843);
} else
{elem_84812.attachEvent(cljs.core.name.call(null,actual_type_84841),canonical_f_84843);
}
{
var G__84844 = cljs.core.next.call(null,seq__84799_84834__$1);
var G__84845 = null;
var G__84846 = 0;
var G__84847 = 0;
seq__84799_84821 = G__84844;
chunk__84801_84822 = G__84845;
count__84802_84823 = G__84846;
i__84803_84824 = G__84847;
continue;
}
}
} else
{}
}
break;
}
{
var G__84848 = seq__84789_84814;
var G__84849 = chunk__84796_84815;
var G__84850 = count__84797_84816;
var G__84851 = (i__84798_84817 + 1);
seq__84789_84814 = G__84848;
chunk__84796_84815 = G__84849;
count__84797_84816 = G__84850;
i__84798_84817 = G__84851;
continue;
}
} else
{var temp__4092__auto___84852 = cljs.core.seq.call(null,seq__84789_84814);if(temp__4092__auto___84852)
{var seq__84789_84853__$1 = temp__4092__auto___84852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84789_84853__$1))
{var c__8957__auto___84854 = cljs.core.chunk_first.call(null,seq__84789_84853__$1);{
var G__84855 = cljs.core.chunk_rest.call(null,seq__84789_84853__$1);
var G__84856 = c__8957__auto___84854;
var G__84857 = cljs.core.count.call(null,c__8957__auto___84854);
var G__84858 = 0;
seq__84789_84814 = G__84855;
chunk__84796_84815 = G__84856;
count__84797_84816 = G__84857;
i__84798_84817 = G__84858;
continue;
}
} else
{var vec__84808_84859 = cljs.core.first.call(null,seq__84789_84853__$1);var orig_type_84860 = cljs.core.nth.call(null,vec__84808_84859,0,null);var f_84861 = cljs.core.nth.call(null,vec__84808_84859,1,null);var seq__84790_84862 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84860,new cljs.core.PersistentArrayMap.fromArray([orig_type_84860,cljs.core.identity], true, false)));var chunk__84792_84863 = null;var count__84793_84864 = 0;var i__84794_84865 = 0;while(true){
if((i__84794_84865 < count__84793_84864))
{var vec__84809_84866 = cljs.core._nth.call(null,chunk__84792_84863,i__84794_84865);var actual_type_84867 = cljs.core.nth.call(null,vec__84809_84866,0,null);var factory_84868 = cljs.core.nth.call(null,vec__84809_84866,1,null);var canonical_f_84869 = (cljs.core.truth_(selector_84813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84812,selector_84813):cljs.core.identity).call(null,factory_84868.call(null,f_84861));dommy.core.update_event_listeners_BANG_.call(null,elem_84812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84813,actual_type_84867,f_84861], null),canonical_f_84869);
if(cljs.core.truth_(elem_84812.addEventListener))
{elem_84812.addEventListener(cljs.core.name.call(null,actual_type_84867),canonical_f_84869);
} else
{elem_84812.attachEvent(cljs.core.name.call(null,actual_type_84867),canonical_f_84869);
}
{
var G__84870 = seq__84790_84862;
var G__84871 = chunk__84792_84863;
var G__84872 = count__84793_84864;
var G__84873 = (i__84794_84865 + 1);
seq__84790_84862 = G__84870;
chunk__84792_84863 = G__84871;
count__84793_84864 = G__84872;
i__84794_84865 = G__84873;
continue;
}
} else
{var temp__4092__auto___84874__$1 = cljs.core.seq.call(null,seq__84790_84862);if(temp__4092__auto___84874__$1)
{var seq__84790_84875__$1 = temp__4092__auto___84874__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84790_84875__$1))
{var c__8957__auto___84876 = cljs.core.chunk_first.call(null,seq__84790_84875__$1);{
var G__84877 = cljs.core.chunk_rest.call(null,seq__84790_84875__$1);
var G__84878 = c__8957__auto___84876;
var G__84879 = cljs.core.count.call(null,c__8957__auto___84876);
var G__84880 = 0;
seq__84790_84862 = G__84877;
chunk__84792_84863 = G__84878;
count__84793_84864 = G__84879;
i__84794_84865 = G__84880;
continue;
}
} else
{var vec__84810_84881 = cljs.core.first.call(null,seq__84790_84875__$1);var actual_type_84882 = cljs.core.nth.call(null,vec__84810_84881,0,null);var factory_84883 = cljs.core.nth.call(null,vec__84810_84881,1,null);var canonical_f_84884 = (cljs.core.truth_(selector_84813)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84812,selector_84813):cljs.core.identity).call(null,factory_84883.call(null,f_84861));dommy.core.update_event_listeners_BANG_.call(null,elem_84812,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84813,actual_type_84882,f_84861], null),canonical_f_84884);
if(cljs.core.truth_(elem_84812.addEventListener))
{elem_84812.addEventListener(cljs.core.name.call(null,actual_type_84882),canonical_f_84884);
} else
{elem_84812.attachEvent(cljs.core.name.call(null,actual_type_84882),canonical_f_84884);
}
{
var G__84885 = cljs.core.next.call(null,seq__84790_84875__$1);
var G__84886 = null;
var G__84887 = 0;
var G__84888 = 0;
seq__84790_84862 = G__84885;
chunk__84792_84863 = G__84886;
count__84793_84864 = G__84887;
i__84794_84865 = G__84888;
continue;
}
}
} else
{}
}
break;
}
{
var G__84889 = cljs.core.next.call(null,seq__84789_84853__$1);
var G__84890 = null;
var G__84891 = 0;
var G__84892 = 0;
seq__84789_84814 = G__84889;
chunk__84796_84815 = G__84890;
count__84797_84816 = G__84891;
i__84798_84817 = G__84892;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__84893){
var elem_sel = cljs.core.first(arglist__84893);
var type_fs = cljs.core.rest(arglist__84893);
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
var vec__84917_84940 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_84941 = cljs.core.nth.call(null,vec__84917_84940,0,null);var selector_84942 = cljs.core.nth.call(null,vec__84917_84940,1,null);var seq__84918_84943 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__84925_84944 = null;var count__84926_84945 = 0;var i__84927_84946 = 0;while(true){
if((i__84927_84946 < count__84926_84945))
{var vec__84934_84947 = cljs.core._nth.call(null,chunk__84925_84944,i__84927_84946);var orig_type_84948 = cljs.core.nth.call(null,vec__84934_84947,0,null);var f_84949 = cljs.core.nth.call(null,vec__84934_84947,1,null);var seq__84928_84950 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84948,new cljs.core.PersistentArrayMap.fromArray([orig_type_84948,cljs.core.identity], true, false)));var chunk__84930_84951 = null;var count__84931_84952 = 0;var i__84932_84953 = 0;while(true){
if((i__84932_84953 < count__84931_84952))
{var vec__84935_84954 = cljs.core._nth.call(null,chunk__84930_84951,i__84932_84953);var actual_type_84955 = cljs.core.nth.call(null,vec__84935_84954,0,null);var __84956 = cljs.core.nth.call(null,vec__84935_84954,1,null);var keys_84957 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84942,actual_type_84955,f_84949], null);var canonical_f_84958 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84941),keys_84957);dommy.core.update_event_listeners_BANG_.call(null,elem_84941,dommy.utils.dissoc_in,keys_84957);
if(cljs.core.truth_(elem_84941.removeEventListener))
{elem_84941.removeEventListener(cljs.core.name.call(null,actual_type_84955),canonical_f_84958);
} else
{elem_84941.detachEvent(cljs.core.name.call(null,actual_type_84955),canonical_f_84958);
}
{
var G__84959 = seq__84928_84950;
var G__84960 = chunk__84930_84951;
var G__84961 = count__84931_84952;
var G__84962 = (i__84932_84953 + 1);
seq__84928_84950 = G__84959;
chunk__84930_84951 = G__84960;
count__84931_84952 = G__84961;
i__84932_84953 = G__84962;
continue;
}
} else
{var temp__4092__auto___84963 = cljs.core.seq.call(null,seq__84928_84950);if(temp__4092__auto___84963)
{var seq__84928_84964__$1 = temp__4092__auto___84963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84928_84964__$1))
{var c__8957__auto___84965 = cljs.core.chunk_first.call(null,seq__84928_84964__$1);{
var G__84966 = cljs.core.chunk_rest.call(null,seq__84928_84964__$1);
var G__84967 = c__8957__auto___84965;
var G__84968 = cljs.core.count.call(null,c__8957__auto___84965);
var G__84969 = 0;
seq__84928_84950 = G__84966;
chunk__84930_84951 = G__84967;
count__84931_84952 = G__84968;
i__84932_84953 = G__84969;
continue;
}
} else
{var vec__84936_84970 = cljs.core.first.call(null,seq__84928_84964__$1);var actual_type_84971 = cljs.core.nth.call(null,vec__84936_84970,0,null);var __84972 = cljs.core.nth.call(null,vec__84936_84970,1,null);var keys_84973 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84942,actual_type_84971,f_84949], null);var canonical_f_84974 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84941),keys_84973);dommy.core.update_event_listeners_BANG_.call(null,elem_84941,dommy.utils.dissoc_in,keys_84973);
if(cljs.core.truth_(elem_84941.removeEventListener))
{elem_84941.removeEventListener(cljs.core.name.call(null,actual_type_84971),canonical_f_84974);
} else
{elem_84941.detachEvent(cljs.core.name.call(null,actual_type_84971),canonical_f_84974);
}
{
var G__84975 = cljs.core.next.call(null,seq__84928_84964__$1);
var G__84976 = null;
var G__84977 = 0;
var G__84978 = 0;
seq__84928_84950 = G__84975;
chunk__84930_84951 = G__84976;
count__84931_84952 = G__84977;
i__84932_84953 = G__84978;
continue;
}
}
} else
{}
}
break;
}
{
var G__84979 = seq__84918_84943;
var G__84980 = chunk__84925_84944;
var G__84981 = count__84926_84945;
var G__84982 = (i__84927_84946 + 1);
seq__84918_84943 = G__84979;
chunk__84925_84944 = G__84980;
count__84926_84945 = G__84981;
i__84927_84946 = G__84982;
continue;
}
} else
{var temp__4092__auto___84983 = cljs.core.seq.call(null,seq__84918_84943);if(temp__4092__auto___84983)
{var seq__84918_84984__$1 = temp__4092__auto___84983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84918_84984__$1))
{var c__8957__auto___84985 = cljs.core.chunk_first.call(null,seq__84918_84984__$1);{
var G__84986 = cljs.core.chunk_rest.call(null,seq__84918_84984__$1);
var G__84987 = c__8957__auto___84985;
var G__84988 = cljs.core.count.call(null,c__8957__auto___84985);
var G__84989 = 0;
seq__84918_84943 = G__84986;
chunk__84925_84944 = G__84987;
count__84926_84945 = G__84988;
i__84927_84946 = G__84989;
continue;
}
} else
{var vec__84937_84990 = cljs.core.first.call(null,seq__84918_84984__$1);var orig_type_84991 = cljs.core.nth.call(null,vec__84937_84990,0,null);var f_84992 = cljs.core.nth.call(null,vec__84937_84990,1,null);var seq__84919_84993 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84991,new cljs.core.PersistentArrayMap.fromArray([orig_type_84991,cljs.core.identity], true, false)));var chunk__84921_84994 = null;var count__84922_84995 = 0;var i__84923_84996 = 0;while(true){
if((i__84923_84996 < count__84922_84995))
{var vec__84938_84997 = cljs.core._nth.call(null,chunk__84921_84994,i__84923_84996);var actual_type_84998 = cljs.core.nth.call(null,vec__84938_84997,0,null);var __84999 = cljs.core.nth.call(null,vec__84938_84997,1,null);var keys_85000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84942,actual_type_84998,f_84992], null);var canonical_f_85001 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84941),keys_85000);dommy.core.update_event_listeners_BANG_.call(null,elem_84941,dommy.utils.dissoc_in,keys_85000);
if(cljs.core.truth_(elem_84941.removeEventListener))
{elem_84941.removeEventListener(cljs.core.name.call(null,actual_type_84998),canonical_f_85001);
} else
{elem_84941.detachEvent(cljs.core.name.call(null,actual_type_84998),canonical_f_85001);
}
{
var G__85002 = seq__84919_84993;
var G__85003 = chunk__84921_84994;
var G__85004 = count__84922_84995;
var G__85005 = (i__84923_84996 + 1);
seq__84919_84993 = G__85002;
chunk__84921_84994 = G__85003;
count__84922_84995 = G__85004;
i__84923_84996 = G__85005;
continue;
}
} else
{var temp__4092__auto___85006__$1 = cljs.core.seq.call(null,seq__84919_84993);if(temp__4092__auto___85006__$1)
{var seq__84919_85007__$1 = temp__4092__auto___85006__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84919_85007__$1))
{var c__8957__auto___85008 = cljs.core.chunk_first.call(null,seq__84919_85007__$1);{
var G__85009 = cljs.core.chunk_rest.call(null,seq__84919_85007__$1);
var G__85010 = c__8957__auto___85008;
var G__85011 = cljs.core.count.call(null,c__8957__auto___85008);
var G__85012 = 0;
seq__84919_84993 = G__85009;
chunk__84921_84994 = G__85010;
count__84922_84995 = G__85011;
i__84923_84996 = G__85012;
continue;
}
} else
{var vec__84939_85013 = cljs.core.first.call(null,seq__84919_85007__$1);var actual_type_85014 = cljs.core.nth.call(null,vec__84939_85013,0,null);var __85015 = cljs.core.nth.call(null,vec__84939_85013,1,null);var keys_85016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84942,actual_type_85014,f_84992], null);var canonical_f_85017 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84941),keys_85016);dommy.core.update_event_listeners_BANG_.call(null,elem_84941,dommy.utils.dissoc_in,keys_85016);
if(cljs.core.truth_(elem_84941.removeEventListener))
{elem_84941.removeEventListener(cljs.core.name.call(null,actual_type_85014),canonical_f_85017);
} else
{elem_84941.detachEvent(cljs.core.name.call(null,actual_type_85014),canonical_f_85017);
}
{
var G__85018 = cljs.core.next.call(null,seq__84919_85007__$1);
var G__85019 = null;
var G__85020 = 0;
var G__85021 = 0;
seq__84919_84993 = G__85018;
chunk__84921_84994 = G__85019;
count__84922_84995 = G__85020;
i__84923_84996 = G__85021;
continue;
}
}
} else
{}
}
break;
}
{
var G__85022 = cljs.core.next.call(null,seq__84918_84984__$1);
var G__85023 = null;
var G__85024 = 0;
var G__85025 = 0;
seq__84918_84943 = G__85022;
chunk__84925_84944 = G__85023;
count__84926_84945 = G__85024;
i__84927_84946 = G__85025;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__85026){
var elem_sel = cljs.core.first(arglist__85026);
var type_fs = cljs.core.rest(arglist__85026);
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
var vec__85034_85041 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_85042 = cljs.core.nth.call(null,vec__85034_85041,0,null);var selector_85043 = cljs.core.nth.call(null,vec__85034_85041,1,null);var seq__85035_85044 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__85036_85045 = null;var count__85037_85046 = 0;var i__85038_85047 = 0;while(true){
if((i__85038_85047 < count__85037_85046))
{var vec__85039_85048 = cljs.core._nth.call(null,chunk__85036_85045,i__85038_85047);var type_85049 = cljs.core.nth.call(null,vec__85039_85048,0,null);var f_85050 = cljs.core.nth.call(null,vec__85039_85048,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_85049,((function (seq__85035_85044,chunk__85036_85045,count__85037_85046,i__85038_85047,vec__85039_85048,type_85049,f_85050){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_85049,this_fn);
return f_85050.call(null,e);
});})(seq__85035_85044,chunk__85036_85045,count__85037_85046,i__85038_85047,vec__85039_85048,type_85049,f_85050))
);
{
var G__85051 = seq__85035_85044;
var G__85052 = chunk__85036_85045;
var G__85053 = count__85037_85046;
var G__85054 = (i__85038_85047 + 1);
seq__85035_85044 = G__85051;
chunk__85036_85045 = G__85052;
count__85037_85046 = G__85053;
i__85038_85047 = G__85054;
continue;
}
} else
{var temp__4092__auto___85055 = cljs.core.seq.call(null,seq__85035_85044);if(temp__4092__auto___85055)
{var seq__85035_85056__$1 = temp__4092__auto___85055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85035_85056__$1))
{var c__8957__auto___85057 = cljs.core.chunk_first.call(null,seq__85035_85056__$1);{
var G__85058 = cljs.core.chunk_rest.call(null,seq__85035_85056__$1);
var G__85059 = c__8957__auto___85057;
var G__85060 = cljs.core.count.call(null,c__8957__auto___85057);
var G__85061 = 0;
seq__85035_85044 = G__85058;
chunk__85036_85045 = G__85059;
count__85037_85046 = G__85060;
i__85038_85047 = G__85061;
continue;
}
} else
{var vec__85040_85062 = cljs.core.first.call(null,seq__85035_85056__$1);var type_85063 = cljs.core.nth.call(null,vec__85040_85062,0,null);var f_85064 = cljs.core.nth.call(null,vec__85040_85062,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_85063,((function (seq__85035_85044,chunk__85036_85045,count__85037_85046,i__85038_85047,vec__85040_85062,type_85063,f_85064,seq__85035_85056__$1,temp__4092__auto___85055){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_85063,this_fn);
return f_85064.call(null,e);
});})(seq__85035_85044,chunk__85036_85045,count__85037_85046,i__85038_85047,vec__85040_85062,type_85063,f_85064,seq__85035_85056__$1,temp__4092__auto___85055))
);
{
var G__85065 = cljs.core.next.call(null,seq__85035_85056__$1);
var G__85066 = null;
var G__85067 = 0;
var G__85068 = 0;
seq__85035_85044 = G__85065;
chunk__85036_85045 = G__85066;
count__85037_85046 = G__85067;
i__85038_85047 = G__85068;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__85069){
var elem_sel = cljs.core.first(arglist__85069);
var type_fs = cljs.core.rest(arglist__85069);
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
var fire_BANG___delegate = function (node,event_type,p__85070){var vec__85072 = p__85070;var update_event_BANG_ = cljs.core.nth.call(null,vec__85072,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__85070 = null;if (arguments.length > 2) {
  p__85070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__85070);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__85073){
var node = cljs.core.first(arglist__85073);
arglist__85073 = cljs.core.next(arglist__85073);
var event_type = cljs.core.first(arglist__85073);
var p__85070 = cljs.core.rest(arglist__85073);
return fire_BANG___delegate(node,event_type,p__85070);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map