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
dommy.core.text = (function text(elem){var or__8198__auto__ = elem.textContent;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
var append_BANG___2 = (function (parent,child){var G__30662 = dommy.template.__GT_node_like.call(null,parent);G__30662.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__30662;
});
var append_BANG___3 = (function() { 
var G__30667__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__30663_30668 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__30664_30669 = null;var count__30665_30670 = 0;var i__30666_30671 = 0;while(true){
if((i__30666_30671 < count__30665_30670))
{var c_30672 = cljs.core._nth.call(null,chunk__30664_30669,i__30666_30671);append_BANG_.call(null,parent__$1,c_30672);
{
var G__30673 = seq__30663_30668;
var G__30674 = chunk__30664_30669;
var G__30675 = count__30665_30670;
var G__30676 = (i__30666_30671 + 1);
seq__30663_30668 = G__30673;
chunk__30664_30669 = G__30674;
count__30665_30670 = G__30675;
i__30666_30671 = G__30676;
continue;
}
} else
{var temp__4092__auto___30677 = cljs.core.seq.call(null,seq__30663_30668);if(temp__4092__auto___30677)
{var seq__30663_30678__$1 = temp__4092__auto___30677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30663_30678__$1))
{var c__8927__auto___30679 = cljs.core.chunk_first.call(null,seq__30663_30678__$1);{
var G__30680 = cljs.core.chunk_rest.call(null,seq__30663_30678__$1);
var G__30681 = c__8927__auto___30679;
var G__30682 = cljs.core.count.call(null,c__8927__auto___30679);
var G__30683 = 0;
seq__30663_30668 = G__30680;
chunk__30664_30669 = G__30681;
count__30665_30670 = G__30682;
i__30666_30671 = G__30683;
continue;
}
} else
{var c_30684 = cljs.core.first.call(null,seq__30663_30678__$1);append_BANG_.call(null,parent__$1,c_30684);
{
var G__30685 = cljs.core.next.call(null,seq__30663_30678__$1);
var G__30686 = null;
var G__30687 = 0;
var G__30688 = 0;
seq__30663_30668 = G__30685;
chunk__30664_30669 = G__30686;
count__30665_30670 = G__30687;
i__30666_30671 = G__30688;
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
var G__30667 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__30667__delegate.call(this,parent,child,more_children);};
G__30667.cljs$lang$maxFixedArity = 2;
G__30667.cljs$lang$applyTo = (function (arglist__30689){
var parent = cljs.core.first(arglist__30689);
arglist__30689 = cljs.core.next(arglist__30689);
var child = cljs.core.first(arglist__30689);
var more_children = cljs.core.rest(arglist__30689);
return G__30667__delegate(parent,child,more_children);
});
G__30667.cljs$core$IFn$_invoke$arity$variadic = G__30667__delegate;
return G__30667;
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
var G__30698__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__30694_30699 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__30695_30700 = null;var count__30696_30701 = 0;var i__30697_30702 = 0;while(true){
if((i__30697_30702 < count__30696_30701))
{var c_30703 = cljs.core._nth.call(null,chunk__30695_30700,i__30697_30702);prepend_BANG_.call(null,parent__$1,c_30703);
{
var G__30704 = seq__30694_30699;
var G__30705 = chunk__30695_30700;
var G__30706 = count__30696_30701;
var G__30707 = (i__30697_30702 + 1);
seq__30694_30699 = G__30704;
chunk__30695_30700 = G__30705;
count__30696_30701 = G__30706;
i__30697_30702 = G__30707;
continue;
}
} else
{var temp__4092__auto___30708 = cljs.core.seq.call(null,seq__30694_30699);if(temp__4092__auto___30708)
{var seq__30694_30709__$1 = temp__4092__auto___30708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30694_30709__$1))
{var c__8927__auto___30710 = cljs.core.chunk_first.call(null,seq__30694_30709__$1);{
var G__30711 = cljs.core.chunk_rest.call(null,seq__30694_30709__$1);
var G__30712 = c__8927__auto___30710;
var G__30713 = cljs.core.count.call(null,c__8927__auto___30710);
var G__30714 = 0;
seq__30694_30699 = G__30711;
chunk__30695_30700 = G__30712;
count__30696_30701 = G__30713;
i__30697_30702 = G__30714;
continue;
}
} else
{var c_30715 = cljs.core.first.call(null,seq__30694_30709__$1);prepend_BANG_.call(null,parent__$1,c_30715);
{
var G__30716 = cljs.core.next.call(null,seq__30694_30709__$1);
var G__30717 = null;
var G__30718 = 0;
var G__30719 = 0;
seq__30694_30699 = G__30716;
chunk__30695_30700 = G__30717;
count__30696_30701 = G__30718;
i__30697_30702 = G__30719;
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
var G__30698 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__30698__delegate.call(this,parent,child,more_children);};
G__30698.cljs$lang$maxFixedArity = 2;
G__30698.cljs$lang$applyTo = (function (arglist__30720){
var parent = cljs.core.first(arglist__30720);
arglist__30720 = cljs.core.next(arglist__30720);
var child = cljs.core.first(arglist__30720);
var more_children = cljs.core.rest(arglist__30720);
return G__30698__delegate(parent,child,more_children);
});
G__30698.cljs$core$IFn$_invoke$arity$variadic = G__30698__delegate;
return G__30698;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___30721 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___30721))
{var next_30722 = temp__4090__auto___30721;parent.insertBefore(actual_node,next_30722);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__30724 = dommy.template.__GT_node_like.call(null,parent);G__30724.innerHTML = "";
dommy.core.append_BANG_.call(null,G__30724,node_like);
return G__30724;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__30726 = elem__$1.parentNode;G__30726.removeChild(elem__$1);
return G__30726;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30732){var vec__30733 = p__30732;var k = cljs.core.nth.call(null,vec__30733,0,null);var v = cljs.core.nth.call(null,vec__30733,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t30734 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t30734 = (function (v,k,vec__30733,p__30732,container,key_selectors_map,template,selector_map,meta30735){
this.v = v;
this.k = k;
this.vec__30733 = vec__30733;
this.p__30732 = p__30732;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta30735 = meta30735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t30734.cljs$lang$type = true;
dommy.core.t30734.cljs$lang$ctorStr = "dommy.core/t30734";
dommy.core.t30734.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"dommy.core/t30734");
});
dommy.core.t30734.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t30734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30736){var self__ = this;
var _30736__$1 = this;return self__.meta30735;
});
dommy.core.t30734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30736,meta30735__$1){var self__ = this;
var _30736__$1 = this;return (new dommy.core.t30734(self__.v,self__.k,self__.vec__30733,self__.p__30732,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta30735__$1));
});
dommy.core.__GT_t30734 = (function __GT_t30734(v__$1,k__$1,vec__30733__$1,p__30732__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta30735){return (new dommy.core.t30734(v__$1,k__$1,vec__30733__$1,p__30732__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta30735));
});
}
return (new dommy.core.t30734(v,k,vec__30733,p__30732,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__30737_SHARP_){return p1__30737_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__30738_SHARP_){return !((p1__30738_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30739){var vec__30740 = p__30739;var special_mouse_event = cljs.core.nth.call(null,vec__30740,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__30740,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8198__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8186__auto__ = related_target;if(cljs.core.truth_(and__8186__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8186__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8186__auto__ = selected_target;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8186__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8198__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__30741){
var elem = cljs.core.first(arglist__30741);
arglist__30741 = cljs.core.next(arglist__30741);
var f = cljs.core.first(arglist__30741);
var args = cljs.core.rest(arglist__30741);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__30742_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__30742_SHARP_));
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
var vec__30766_30789 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_30790 = cljs.core.nth.call(null,vec__30766_30789,0,null);var selector_30791 = cljs.core.nth.call(null,vec__30766_30789,1,null);var seq__30767_30792 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__30774_30793 = null;var count__30775_30794 = 0;var i__30776_30795 = 0;while(true){
if((i__30776_30795 < count__30775_30794))
{var vec__30783_30796 = cljs.core._nth.call(null,chunk__30774_30793,i__30776_30795);var orig_type_30797 = cljs.core.nth.call(null,vec__30783_30796,0,null);var f_30798 = cljs.core.nth.call(null,vec__30783_30796,1,null);var seq__30777_30799 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30797,new cljs.core.PersistentArrayMap.fromArray([orig_type_30797,cljs.core.identity], true, false)));var chunk__30779_30800 = null;var count__30780_30801 = 0;var i__30781_30802 = 0;while(true){
if((i__30781_30802 < count__30780_30801))
{var vec__30784_30803 = cljs.core._nth.call(null,chunk__30779_30800,i__30781_30802);var actual_type_30804 = cljs.core.nth.call(null,vec__30784_30803,0,null);var factory_30805 = cljs.core.nth.call(null,vec__30784_30803,1,null);var canonical_f_30806 = (cljs.core.truth_(selector_30791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30790,selector_30791):cljs.core.identity).call(null,factory_30805.call(null,f_30798));dommy.core.update_event_listeners_BANG_.call(null,elem_30790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30791,actual_type_30804,f_30798], null),canonical_f_30806);
if(cljs.core.truth_(elem_30790.addEventListener))
{elem_30790.addEventListener(cljs.core.name.call(null,actual_type_30804),canonical_f_30806);
} else
{elem_30790.attachEvent(cljs.core.name.call(null,actual_type_30804),canonical_f_30806);
}
{
var G__30807 = seq__30777_30799;
var G__30808 = chunk__30779_30800;
var G__30809 = count__30780_30801;
var G__30810 = (i__30781_30802 + 1);
seq__30777_30799 = G__30807;
chunk__30779_30800 = G__30808;
count__30780_30801 = G__30809;
i__30781_30802 = G__30810;
continue;
}
} else
{var temp__4092__auto___30811 = cljs.core.seq.call(null,seq__30777_30799);if(temp__4092__auto___30811)
{var seq__30777_30812__$1 = temp__4092__auto___30811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30777_30812__$1))
{var c__8927__auto___30813 = cljs.core.chunk_first.call(null,seq__30777_30812__$1);{
var G__30814 = cljs.core.chunk_rest.call(null,seq__30777_30812__$1);
var G__30815 = c__8927__auto___30813;
var G__30816 = cljs.core.count.call(null,c__8927__auto___30813);
var G__30817 = 0;
seq__30777_30799 = G__30814;
chunk__30779_30800 = G__30815;
count__30780_30801 = G__30816;
i__30781_30802 = G__30817;
continue;
}
} else
{var vec__30785_30818 = cljs.core.first.call(null,seq__30777_30812__$1);var actual_type_30819 = cljs.core.nth.call(null,vec__30785_30818,0,null);var factory_30820 = cljs.core.nth.call(null,vec__30785_30818,1,null);var canonical_f_30821 = (cljs.core.truth_(selector_30791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30790,selector_30791):cljs.core.identity).call(null,factory_30820.call(null,f_30798));dommy.core.update_event_listeners_BANG_.call(null,elem_30790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30791,actual_type_30819,f_30798], null),canonical_f_30821);
if(cljs.core.truth_(elem_30790.addEventListener))
{elem_30790.addEventListener(cljs.core.name.call(null,actual_type_30819),canonical_f_30821);
} else
{elem_30790.attachEvent(cljs.core.name.call(null,actual_type_30819),canonical_f_30821);
}
{
var G__30822 = cljs.core.next.call(null,seq__30777_30812__$1);
var G__30823 = null;
var G__30824 = 0;
var G__30825 = 0;
seq__30777_30799 = G__30822;
chunk__30779_30800 = G__30823;
count__30780_30801 = G__30824;
i__30781_30802 = G__30825;
continue;
}
}
} else
{}
}
break;
}
{
var G__30826 = seq__30767_30792;
var G__30827 = chunk__30774_30793;
var G__30828 = count__30775_30794;
var G__30829 = (i__30776_30795 + 1);
seq__30767_30792 = G__30826;
chunk__30774_30793 = G__30827;
count__30775_30794 = G__30828;
i__30776_30795 = G__30829;
continue;
}
} else
{var temp__4092__auto___30830 = cljs.core.seq.call(null,seq__30767_30792);if(temp__4092__auto___30830)
{var seq__30767_30831__$1 = temp__4092__auto___30830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30767_30831__$1))
{var c__8927__auto___30832 = cljs.core.chunk_first.call(null,seq__30767_30831__$1);{
var G__30833 = cljs.core.chunk_rest.call(null,seq__30767_30831__$1);
var G__30834 = c__8927__auto___30832;
var G__30835 = cljs.core.count.call(null,c__8927__auto___30832);
var G__30836 = 0;
seq__30767_30792 = G__30833;
chunk__30774_30793 = G__30834;
count__30775_30794 = G__30835;
i__30776_30795 = G__30836;
continue;
}
} else
{var vec__30786_30837 = cljs.core.first.call(null,seq__30767_30831__$1);var orig_type_30838 = cljs.core.nth.call(null,vec__30786_30837,0,null);var f_30839 = cljs.core.nth.call(null,vec__30786_30837,1,null);var seq__30768_30840 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30838,new cljs.core.PersistentArrayMap.fromArray([orig_type_30838,cljs.core.identity], true, false)));var chunk__30770_30841 = null;var count__30771_30842 = 0;var i__30772_30843 = 0;while(true){
if((i__30772_30843 < count__30771_30842))
{var vec__30787_30844 = cljs.core._nth.call(null,chunk__30770_30841,i__30772_30843);var actual_type_30845 = cljs.core.nth.call(null,vec__30787_30844,0,null);var factory_30846 = cljs.core.nth.call(null,vec__30787_30844,1,null);var canonical_f_30847 = (cljs.core.truth_(selector_30791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30790,selector_30791):cljs.core.identity).call(null,factory_30846.call(null,f_30839));dommy.core.update_event_listeners_BANG_.call(null,elem_30790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30791,actual_type_30845,f_30839], null),canonical_f_30847);
if(cljs.core.truth_(elem_30790.addEventListener))
{elem_30790.addEventListener(cljs.core.name.call(null,actual_type_30845),canonical_f_30847);
} else
{elem_30790.attachEvent(cljs.core.name.call(null,actual_type_30845),canonical_f_30847);
}
{
var G__30848 = seq__30768_30840;
var G__30849 = chunk__30770_30841;
var G__30850 = count__30771_30842;
var G__30851 = (i__30772_30843 + 1);
seq__30768_30840 = G__30848;
chunk__30770_30841 = G__30849;
count__30771_30842 = G__30850;
i__30772_30843 = G__30851;
continue;
}
} else
{var temp__4092__auto___30852__$1 = cljs.core.seq.call(null,seq__30768_30840);if(temp__4092__auto___30852__$1)
{var seq__30768_30853__$1 = temp__4092__auto___30852__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30768_30853__$1))
{var c__8927__auto___30854 = cljs.core.chunk_first.call(null,seq__30768_30853__$1);{
var G__30855 = cljs.core.chunk_rest.call(null,seq__30768_30853__$1);
var G__30856 = c__8927__auto___30854;
var G__30857 = cljs.core.count.call(null,c__8927__auto___30854);
var G__30858 = 0;
seq__30768_30840 = G__30855;
chunk__30770_30841 = G__30856;
count__30771_30842 = G__30857;
i__30772_30843 = G__30858;
continue;
}
} else
{var vec__30788_30859 = cljs.core.first.call(null,seq__30768_30853__$1);var actual_type_30860 = cljs.core.nth.call(null,vec__30788_30859,0,null);var factory_30861 = cljs.core.nth.call(null,vec__30788_30859,1,null);var canonical_f_30862 = (cljs.core.truth_(selector_30791)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30790,selector_30791):cljs.core.identity).call(null,factory_30861.call(null,f_30839));dommy.core.update_event_listeners_BANG_.call(null,elem_30790,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30791,actual_type_30860,f_30839], null),canonical_f_30862);
if(cljs.core.truth_(elem_30790.addEventListener))
{elem_30790.addEventListener(cljs.core.name.call(null,actual_type_30860),canonical_f_30862);
} else
{elem_30790.attachEvent(cljs.core.name.call(null,actual_type_30860),canonical_f_30862);
}
{
var G__30863 = cljs.core.next.call(null,seq__30768_30853__$1);
var G__30864 = null;
var G__30865 = 0;
var G__30866 = 0;
seq__30768_30840 = G__30863;
chunk__30770_30841 = G__30864;
count__30771_30842 = G__30865;
i__30772_30843 = G__30866;
continue;
}
}
} else
{}
}
break;
}
{
var G__30867 = cljs.core.next.call(null,seq__30767_30831__$1);
var G__30868 = null;
var G__30869 = 0;
var G__30870 = 0;
seq__30767_30792 = G__30867;
chunk__30774_30793 = G__30868;
count__30775_30794 = G__30869;
i__30776_30795 = G__30870;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__30871){
var elem_sel = cljs.core.first(arglist__30871);
var type_fs = cljs.core.rest(arglist__30871);
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
var vec__30895_30918 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_30919 = cljs.core.nth.call(null,vec__30895_30918,0,null);var selector_30920 = cljs.core.nth.call(null,vec__30895_30918,1,null);var seq__30896_30921 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__30903_30922 = null;var count__30904_30923 = 0;var i__30905_30924 = 0;while(true){
if((i__30905_30924 < count__30904_30923))
{var vec__30912_30925 = cljs.core._nth.call(null,chunk__30903_30922,i__30905_30924);var orig_type_30926 = cljs.core.nth.call(null,vec__30912_30925,0,null);var f_30927 = cljs.core.nth.call(null,vec__30912_30925,1,null);var seq__30906_30928 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30926,new cljs.core.PersistentArrayMap.fromArray([orig_type_30926,cljs.core.identity], true, false)));var chunk__30908_30929 = null;var count__30909_30930 = 0;var i__30910_30931 = 0;while(true){
if((i__30910_30931 < count__30909_30930))
{var vec__30913_30932 = cljs.core._nth.call(null,chunk__30908_30929,i__30910_30931);var actual_type_30933 = cljs.core.nth.call(null,vec__30913_30932,0,null);var __30934 = cljs.core.nth.call(null,vec__30913_30932,1,null);var keys_30935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30920,actual_type_30933,f_30927], null);var canonical_f_30936 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30919),keys_30935);dommy.core.update_event_listeners_BANG_.call(null,elem_30919,dommy.utils.dissoc_in,keys_30935);
if(cljs.core.truth_(elem_30919.removeEventListener))
{elem_30919.removeEventListener(cljs.core.name.call(null,actual_type_30933),canonical_f_30936);
} else
{elem_30919.detachEvent(cljs.core.name.call(null,actual_type_30933),canonical_f_30936);
}
{
var G__30937 = seq__30906_30928;
var G__30938 = chunk__30908_30929;
var G__30939 = count__30909_30930;
var G__30940 = (i__30910_30931 + 1);
seq__30906_30928 = G__30937;
chunk__30908_30929 = G__30938;
count__30909_30930 = G__30939;
i__30910_30931 = G__30940;
continue;
}
} else
{var temp__4092__auto___30941 = cljs.core.seq.call(null,seq__30906_30928);if(temp__4092__auto___30941)
{var seq__30906_30942__$1 = temp__4092__auto___30941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30906_30942__$1))
{var c__8927__auto___30943 = cljs.core.chunk_first.call(null,seq__30906_30942__$1);{
var G__30944 = cljs.core.chunk_rest.call(null,seq__30906_30942__$1);
var G__30945 = c__8927__auto___30943;
var G__30946 = cljs.core.count.call(null,c__8927__auto___30943);
var G__30947 = 0;
seq__30906_30928 = G__30944;
chunk__30908_30929 = G__30945;
count__30909_30930 = G__30946;
i__30910_30931 = G__30947;
continue;
}
} else
{var vec__30914_30948 = cljs.core.first.call(null,seq__30906_30942__$1);var actual_type_30949 = cljs.core.nth.call(null,vec__30914_30948,0,null);var __30950 = cljs.core.nth.call(null,vec__30914_30948,1,null);var keys_30951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30920,actual_type_30949,f_30927], null);var canonical_f_30952 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30919),keys_30951);dommy.core.update_event_listeners_BANG_.call(null,elem_30919,dommy.utils.dissoc_in,keys_30951);
if(cljs.core.truth_(elem_30919.removeEventListener))
{elem_30919.removeEventListener(cljs.core.name.call(null,actual_type_30949),canonical_f_30952);
} else
{elem_30919.detachEvent(cljs.core.name.call(null,actual_type_30949),canonical_f_30952);
}
{
var G__30953 = cljs.core.next.call(null,seq__30906_30942__$1);
var G__30954 = null;
var G__30955 = 0;
var G__30956 = 0;
seq__30906_30928 = G__30953;
chunk__30908_30929 = G__30954;
count__30909_30930 = G__30955;
i__30910_30931 = G__30956;
continue;
}
}
} else
{}
}
break;
}
{
var G__30957 = seq__30896_30921;
var G__30958 = chunk__30903_30922;
var G__30959 = count__30904_30923;
var G__30960 = (i__30905_30924 + 1);
seq__30896_30921 = G__30957;
chunk__30903_30922 = G__30958;
count__30904_30923 = G__30959;
i__30905_30924 = G__30960;
continue;
}
} else
{var temp__4092__auto___30961 = cljs.core.seq.call(null,seq__30896_30921);if(temp__4092__auto___30961)
{var seq__30896_30962__$1 = temp__4092__auto___30961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30896_30962__$1))
{var c__8927__auto___30963 = cljs.core.chunk_first.call(null,seq__30896_30962__$1);{
var G__30964 = cljs.core.chunk_rest.call(null,seq__30896_30962__$1);
var G__30965 = c__8927__auto___30963;
var G__30966 = cljs.core.count.call(null,c__8927__auto___30963);
var G__30967 = 0;
seq__30896_30921 = G__30964;
chunk__30903_30922 = G__30965;
count__30904_30923 = G__30966;
i__30905_30924 = G__30967;
continue;
}
} else
{var vec__30915_30968 = cljs.core.first.call(null,seq__30896_30962__$1);var orig_type_30969 = cljs.core.nth.call(null,vec__30915_30968,0,null);var f_30970 = cljs.core.nth.call(null,vec__30915_30968,1,null);var seq__30897_30971 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30969,new cljs.core.PersistentArrayMap.fromArray([orig_type_30969,cljs.core.identity], true, false)));var chunk__30899_30972 = null;var count__30900_30973 = 0;var i__30901_30974 = 0;while(true){
if((i__30901_30974 < count__30900_30973))
{var vec__30916_30975 = cljs.core._nth.call(null,chunk__30899_30972,i__30901_30974);var actual_type_30976 = cljs.core.nth.call(null,vec__30916_30975,0,null);var __30977 = cljs.core.nth.call(null,vec__30916_30975,1,null);var keys_30978 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30920,actual_type_30976,f_30970], null);var canonical_f_30979 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30919),keys_30978);dommy.core.update_event_listeners_BANG_.call(null,elem_30919,dommy.utils.dissoc_in,keys_30978);
if(cljs.core.truth_(elem_30919.removeEventListener))
{elem_30919.removeEventListener(cljs.core.name.call(null,actual_type_30976),canonical_f_30979);
} else
{elem_30919.detachEvent(cljs.core.name.call(null,actual_type_30976),canonical_f_30979);
}
{
var G__30980 = seq__30897_30971;
var G__30981 = chunk__30899_30972;
var G__30982 = count__30900_30973;
var G__30983 = (i__30901_30974 + 1);
seq__30897_30971 = G__30980;
chunk__30899_30972 = G__30981;
count__30900_30973 = G__30982;
i__30901_30974 = G__30983;
continue;
}
} else
{var temp__4092__auto___30984__$1 = cljs.core.seq.call(null,seq__30897_30971);if(temp__4092__auto___30984__$1)
{var seq__30897_30985__$1 = temp__4092__auto___30984__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30897_30985__$1))
{var c__8927__auto___30986 = cljs.core.chunk_first.call(null,seq__30897_30985__$1);{
var G__30987 = cljs.core.chunk_rest.call(null,seq__30897_30985__$1);
var G__30988 = c__8927__auto___30986;
var G__30989 = cljs.core.count.call(null,c__8927__auto___30986);
var G__30990 = 0;
seq__30897_30971 = G__30987;
chunk__30899_30972 = G__30988;
count__30900_30973 = G__30989;
i__30901_30974 = G__30990;
continue;
}
} else
{var vec__30917_30991 = cljs.core.first.call(null,seq__30897_30985__$1);var actual_type_30992 = cljs.core.nth.call(null,vec__30917_30991,0,null);var __30993 = cljs.core.nth.call(null,vec__30917_30991,1,null);var keys_30994 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30920,actual_type_30992,f_30970], null);var canonical_f_30995 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30919),keys_30994);dommy.core.update_event_listeners_BANG_.call(null,elem_30919,dommy.utils.dissoc_in,keys_30994);
if(cljs.core.truth_(elem_30919.removeEventListener))
{elem_30919.removeEventListener(cljs.core.name.call(null,actual_type_30992),canonical_f_30995);
} else
{elem_30919.detachEvent(cljs.core.name.call(null,actual_type_30992),canonical_f_30995);
}
{
var G__30996 = cljs.core.next.call(null,seq__30897_30985__$1);
var G__30997 = null;
var G__30998 = 0;
var G__30999 = 0;
seq__30897_30971 = G__30996;
chunk__30899_30972 = G__30997;
count__30900_30973 = G__30998;
i__30901_30974 = G__30999;
continue;
}
}
} else
{}
}
break;
}
{
var G__31000 = cljs.core.next.call(null,seq__30896_30962__$1);
var G__31001 = null;
var G__31002 = 0;
var G__31003 = 0;
seq__30896_30921 = G__31000;
chunk__30903_30922 = G__31001;
count__30904_30923 = G__31002;
i__30905_30924 = G__31003;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__31004){
var elem_sel = cljs.core.first(arglist__31004);
var type_fs = cljs.core.rest(arglist__31004);
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
var vec__31012_31019 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_31020 = cljs.core.nth.call(null,vec__31012_31019,0,null);var selector_31021 = cljs.core.nth.call(null,vec__31012_31019,1,null);var seq__31013_31022 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__31014_31023 = null;var count__31015_31024 = 0;var i__31016_31025 = 0;while(true){
if((i__31016_31025 < count__31015_31024))
{var vec__31017_31026 = cljs.core._nth.call(null,chunk__31014_31023,i__31016_31025);var type_31027 = cljs.core.nth.call(null,vec__31017_31026,0,null);var f_31028 = cljs.core.nth.call(null,vec__31017_31026,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_31027,((function (seq__31013_31022,chunk__31014_31023,count__31015_31024,i__31016_31025,vec__31017_31026,type_31027,f_31028){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_31027,this_fn);
return f_31028.call(null,e);
});})(seq__31013_31022,chunk__31014_31023,count__31015_31024,i__31016_31025,vec__31017_31026,type_31027,f_31028))
);
{
var G__31029 = seq__31013_31022;
var G__31030 = chunk__31014_31023;
var G__31031 = count__31015_31024;
var G__31032 = (i__31016_31025 + 1);
seq__31013_31022 = G__31029;
chunk__31014_31023 = G__31030;
count__31015_31024 = G__31031;
i__31016_31025 = G__31032;
continue;
}
} else
{var temp__4092__auto___31033 = cljs.core.seq.call(null,seq__31013_31022);if(temp__4092__auto___31033)
{var seq__31013_31034__$1 = temp__4092__auto___31033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31013_31034__$1))
{var c__8927__auto___31035 = cljs.core.chunk_first.call(null,seq__31013_31034__$1);{
var G__31036 = cljs.core.chunk_rest.call(null,seq__31013_31034__$1);
var G__31037 = c__8927__auto___31035;
var G__31038 = cljs.core.count.call(null,c__8927__auto___31035);
var G__31039 = 0;
seq__31013_31022 = G__31036;
chunk__31014_31023 = G__31037;
count__31015_31024 = G__31038;
i__31016_31025 = G__31039;
continue;
}
} else
{var vec__31018_31040 = cljs.core.first.call(null,seq__31013_31034__$1);var type_31041 = cljs.core.nth.call(null,vec__31018_31040,0,null);var f_31042 = cljs.core.nth.call(null,vec__31018_31040,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_31041,((function (seq__31013_31022,chunk__31014_31023,count__31015_31024,i__31016_31025,vec__31018_31040,type_31041,f_31042,seq__31013_31034__$1,temp__4092__auto___31033){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_31041,this_fn);
return f_31042.call(null,e);
});})(seq__31013_31022,chunk__31014_31023,count__31015_31024,i__31016_31025,vec__31018_31040,type_31041,f_31042,seq__31013_31034__$1,temp__4092__auto___31033))
);
{
var G__31043 = cljs.core.next.call(null,seq__31013_31034__$1);
var G__31044 = null;
var G__31045 = 0;
var G__31046 = 0;
seq__31013_31022 = G__31043;
chunk__31014_31023 = G__31044;
count__31015_31024 = G__31045;
i__31016_31025 = G__31046;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__31047){
var elem_sel = cljs.core.first(arglist__31047);
var type_fs = cljs.core.rest(arglist__31047);
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
var fire_BANG___delegate = function (node,event_type,p__31048){var vec__31050 = p__31048;var update_event_BANG_ = cljs.core.nth.call(null,vec__31050,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8198__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
var p__31048 = null;if (arguments.length > 2) {
  p__31048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__31048);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__31051){
var node = cljs.core.first(arglist__31051);
arglist__31051 = cljs.core.next(arglist__31051);
var event_type = cljs.core.first(arglist__31051);
var p__31048 = cljs.core.rest(arglist__31051);
return fire_BANG___delegate(node,event_type,p__31048);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map