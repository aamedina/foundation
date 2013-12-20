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
var append_BANG___2 = (function (parent,child){var G__274619 = dommy.template.__GT_node_like.call(null,parent);G__274619.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__274619;
});
var append_BANG___3 = (function() { 
var G__274624__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__274620_274625 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__274621_274626 = null;var count__274622_274627 = 0;var i__274623_274628 = 0;while(true){
if((i__274623_274628 < count__274622_274627))
{var c_274629 = cljs.core._nth.call(null,chunk__274621_274626,i__274623_274628);append_BANG_.call(null,parent__$1,c_274629);
{
var G__274630 = seq__274620_274625;
var G__274631 = chunk__274621_274626;
var G__274632 = count__274622_274627;
var G__274633 = (i__274623_274628 + 1);
seq__274620_274625 = G__274630;
chunk__274621_274626 = G__274631;
count__274622_274627 = G__274632;
i__274623_274628 = G__274633;
continue;
}
} else
{var temp__4092__auto___274634 = cljs.core.seq.call(null,seq__274620_274625);if(temp__4092__auto___274634)
{var seq__274620_274635__$1 = temp__4092__auto___274634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274620_274635__$1))
{var c__8952__auto___274636 = cljs.core.chunk_first.call(null,seq__274620_274635__$1);{
var G__274637 = cljs.core.chunk_rest.call(null,seq__274620_274635__$1);
var G__274638 = c__8952__auto___274636;
var G__274639 = cljs.core.count.call(null,c__8952__auto___274636);
var G__274640 = 0;
seq__274620_274625 = G__274637;
chunk__274621_274626 = G__274638;
count__274622_274627 = G__274639;
i__274623_274628 = G__274640;
continue;
}
} else
{var c_274641 = cljs.core.first.call(null,seq__274620_274635__$1);append_BANG_.call(null,parent__$1,c_274641);
{
var G__274642 = cljs.core.next.call(null,seq__274620_274635__$1);
var G__274643 = null;
var G__274644 = 0;
var G__274645 = 0;
seq__274620_274625 = G__274642;
chunk__274621_274626 = G__274643;
count__274622_274627 = G__274644;
i__274623_274628 = G__274645;
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
var G__274624 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__274624__delegate.call(this,parent,child,more_children);};
G__274624.cljs$lang$maxFixedArity = 2;
G__274624.cljs$lang$applyTo = (function (arglist__274646){
var parent = cljs.core.first(arglist__274646);
arglist__274646 = cljs.core.next(arglist__274646);
var child = cljs.core.first(arglist__274646);
var more_children = cljs.core.rest(arglist__274646);
return G__274624__delegate(parent,child,more_children);
});
G__274624.cljs$core$IFn$_invoke$arity$variadic = G__274624__delegate;
return G__274624;
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
var G__274655__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__274651_274656 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__274652_274657 = null;var count__274653_274658 = 0;var i__274654_274659 = 0;while(true){
if((i__274654_274659 < count__274653_274658))
{var c_274660 = cljs.core._nth.call(null,chunk__274652_274657,i__274654_274659);prepend_BANG_.call(null,parent__$1,c_274660);
{
var G__274661 = seq__274651_274656;
var G__274662 = chunk__274652_274657;
var G__274663 = count__274653_274658;
var G__274664 = (i__274654_274659 + 1);
seq__274651_274656 = G__274661;
chunk__274652_274657 = G__274662;
count__274653_274658 = G__274663;
i__274654_274659 = G__274664;
continue;
}
} else
{var temp__4092__auto___274665 = cljs.core.seq.call(null,seq__274651_274656);if(temp__4092__auto___274665)
{var seq__274651_274666__$1 = temp__4092__auto___274665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274651_274666__$1))
{var c__8952__auto___274667 = cljs.core.chunk_first.call(null,seq__274651_274666__$1);{
var G__274668 = cljs.core.chunk_rest.call(null,seq__274651_274666__$1);
var G__274669 = c__8952__auto___274667;
var G__274670 = cljs.core.count.call(null,c__8952__auto___274667);
var G__274671 = 0;
seq__274651_274656 = G__274668;
chunk__274652_274657 = G__274669;
count__274653_274658 = G__274670;
i__274654_274659 = G__274671;
continue;
}
} else
{var c_274672 = cljs.core.first.call(null,seq__274651_274666__$1);prepend_BANG_.call(null,parent__$1,c_274672);
{
var G__274673 = cljs.core.next.call(null,seq__274651_274666__$1);
var G__274674 = null;
var G__274675 = 0;
var G__274676 = 0;
seq__274651_274656 = G__274673;
chunk__274652_274657 = G__274674;
count__274653_274658 = G__274675;
i__274654_274659 = G__274676;
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
var G__274655 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__274655__delegate.call(this,parent,child,more_children);};
G__274655.cljs$lang$maxFixedArity = 2;
G__274655.cljs$lang$applyTo = (function (arglist__274677){
var parent = cljs.core.first(arglist__274677);
arglist__274677 = cljs.core.next(arglist__274677);
var child = cljs.core.first(arglist__274677);
var more_children = cljs.core.rest(arglist__274677);
return G__274655__delegate(parent,child,more_children);
});
G__274655.cljs$core$IFn$_invoke$arity$variadic = G__274655__delegate;
return G__274655;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___274678 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___274678))
{var next_274679 = temp__4090__auto___274678;parent.insertBefore(actual_node,next_274679);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__274681 = dommy.template.__GT_node_like.call(null,parent);G__274681.innerHTML = "";
dommy.core.append_BANG_.call(null,G__274681,node_like);
return G__274681;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__274683 = elem__$1.parentNode;G__274683.removeChild(elem__$1);
return G__274683;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__274689){var vec__274690 = p__274689;var k = cljs.core.nth.call(null,vec__274690,0,null);var v = cljs.core.nth.call(null,vec__274690,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t274691 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t274691 = (function (v,k,vec__274690,p__274689,container,key_selectors_map,template,selector_map,meta274692){
this.v = v;
this.k = k;
this.vec__274690 = vec__274690;
this.p__274689 = p__274689;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta274692 = meta274692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t274691.cljs$lang$type = true;
dommy.core.t274691.cljs$lang$ctorStr = "dommy.core/t274691";
dommy.core.t274691.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"dommy.core/t274691");
});
dommy.core.t274691.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t274691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_274693){var self__ = this;
var _274693__$1 = this;return self__.meta274692;
});
dommy.core.t274691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_274693,meta274692__$1){var self__ = this;
var _274693__$1 = this;return (new dommy.core.t274691(self__.v,self__.k,self__.vec__274690,self__.p__274689,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta274692__$1));
});
dommy.core.__GT_t274691 = (function __GT_t274691(v__$1,k__$1,vec__274690__$1,p__274689__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta274692){return (new dommy.core.t274691(v__$1,k__$1,vec__274690__$1,p__274689__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta274692));
});
}
return (new dommy.core.t274691(v,k,vec__274690,p__274689,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__274694_SHARP_){return p1__274694_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__274695_SHARP_){return !((p1__274695_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__274696){var vec__274697 = p__274696;var special_mouse_event = cljs.core.nth.call(null,vec__274697,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__274697,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8223__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8223__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__274698){
var elem = cljs.core.first(arglist__274698);
arglist__274698 = cljs.core.next(arglist__274698);
var f = cljs.core.first(arglist__274698);
var args = cljs.core.rest(arglist__274698);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__274699_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__274699_SHARP_));
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
var vec__274723_274746 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_274747 = cljs.core.nth.call(null,vec__274723_274746,0,null);var selector_274748 = cljs.core.nth.call(null,vec__274723_274746,1,null);var seq__274724_274749 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__274731_274750 = null;var count__274732_274751 = 0;var i__274733_274752 = 0;while(true){
if((i__274733_274752 < count__274732_274751))
{var vec__274740_274753 = cljs.core._nth.call(null,chunk__274731_274750,i__274733_274752);var orig_type_274754 = cljs.core.nth.call(null,vec__274740_274753,0,null);var f_274755 = cljs.core.nth.call(null,vec__274740_274753,1,null);var seq__274734_274756 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_274754,new cljs.core.PersistentArrayMap.fromArray([orig_type_274754,cljs.core.identity], true, false)));var chunk__274736_274757 = null;var count__274737_274758 = 0;var i__274738_274759 = 0;while(true){
if((i__274738_274759 < count__274737_274758))
{var vec__274741_274760 = cljs.core._nth.call(null,chunk__274736_274757,i__274738_274759);var actual_type_274761 = cljs.core.nth.call(null,vec__274741_274760,0,null);var factory_274762 = cljs.core.nth.call(null,vec__274741_274760,1,null);var canonical_f_274763 = (cljs.core.truth_(selector_274748)?cljs.core.partial.call(null,dommy.core.live_listener,elem_274747,selector_274748):cljs.core.identity).call(null,factory_274762.call(null,f_274755));dommy.core.update_event_listeners_BANG_.call(null,elem_274747,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274748,actual_type_274761,f_274755], null),canonical_f_274763);
if(cljs.core.truth_(elem_274747.addEventListener))
{elem_274747.addEventListener(cljs.core.name.call(null,actual_type_274761),canonical_f_274763);
} else
{elem_274747.attachEvent(cljs.core.name.call(null,actual_type_274761),canonical_f_274763);
}
{
var G__274764 = seq__274734_274756;
var G__274765 = chunk__274736_274757;
var G__274766 = count__274737_274758;
var G__274767 = (i__274738_274759 + 1);
seq__274734_274756 = G__274764;
chunk__274736_274757 = G__274765;
count__274737_274758 = G__274766;
i__274738_274759 = G__274767;
continue;
}
} else
{var temp__4092__auto___274768 = cljs.core.seq.call(null,seq__274734_274756);if(temp__4092__auto___274768)
{var seq__274734_274769__$1 = temp__4092__auto___274768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274734_274769__$1))
{var c__8952__auto___274770 = cljs.core.chunk_first.call(null,seq__274734_274769__$1);{
var G__274771 = cljs.core.chunk_rest.call(null,seq__274734_274769__$1);
var G__274772 = c__8952__auto___274770;
var G__274773 = cljs.core.count.call(null,c__8952__auto___274770);
var G__274774 = 0;
seq__274734_274756 = G__274771;
chunk__274736_274757 = G__274772;
count__274737_274758 = G__274773;
i__274738_274759 = G__274774;
continue;
}
} else
{var vec__274742_274775 = cljs.core.first.call(null,seq__274734_274769__$1);var actual_type_274776 = cljs.core.nth.call(null,vec__274742_274775,0,null);var factory_274777 = cljs.core.nth.call(null,vec__274742_274775,1,null);var canonical_f_274778 = (cljs.core.truth_(selector_274748)?cljs.core.partial.call(null,dommy.core.live_listener,elem_274747,selector_274748):cljs.core.identity).call(null,factory_274777.call(null,f_274755));dommy.core.update_event_listeners_BANG_.call(null,elem_274747,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274748,actual_type_274776,f_274755], null),canonical_f_274778);
if(cljs.core.truth_(elem_274747.addEventListener))
{elem_274747.addEventListener(cljs.core.name.call(null,actual_type_274776),canonical_f_274778);
} else
{elem_274747.attachEvent(cljs.core.name.call(null,actual_type_274776),canonical_f_274778);
}
{
var G__274779 = cljs.core.next.call(null,seq__274734_274769__$1);
var G__274780 = null;
var G__274781 = 0;
var G__274782 = 0;
seq__274734_274756 = G__274779;
chunk__274736_274757 = G__274780;
count__274737_274758 = G__274781;
i__274738_274759 = G__274782;
continue;
}
}
} else
{}
}
break;
}
{
var G__274783 = seq__274724_274749;
var G__274784 = chunk__274731_274750;
var G__274785 = count__274732_274751;
var G__274786 = (i__274733_274752 + 1);
seq__274724_274749 = G__274783;
chunk__274731_274750 = G__274784;
count__274732_274751 = G__274785;
i__274733_274752 = G__274786;
continue;
}
} else
{var temp__4092__auto___274787 = cljs.core.seq.call(null,seq__274724_274749);if(temp__4092__auto___274787)
{var seq__274724_274788__$1 = temp__4092__auto___274787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274724_274788__$1))
{var c__8952__auto___274789 = cljs.core.chunk_first.call(null,seq__274724_274788__$1);{
var G__274790 = cljs.core.chunk_rest.call(null,seq__274724_274788__$1);
var G__274791 = c__8952__auto___274789;
var G__274792 = cljs.core.count.call(null,c__8952__auto___274789);
var G__274793 = 0;
seq__274724_274749 = G__274790;
chunk__274731_274750 = G__274791;
count__274732_274751 = G__274792;
i__274733_274752 = G__274793;
continue;
}
} else
{var vec__274743_274794 = cljs.core.first.call(null,seq__274724_274788__$1);var orig_type_274795 = cljs.core.nth.call(null,vec__274743_274794,0,null);var f_274796 = cljs.core.nth.call(null,vec__274743_274794,1,null);var seq__274725_274797 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_274795,new cljs.core.PersistentArrayMap.fromArray([orig_type_274795,cljs.core.identity], true, false)));var chunk__274727_274798 = null;var count__274728_274799 = 0;var i__274729_274800 = 0;while(true){
if((i__274729_274800 < count__274728_274799))
{var vec__274744_274801 = cljs.core._nth.call(null,chunk__274727_274798,i__274729_274800);var actual_type_274802 = cljs.core.nth.call(null,vec__274744_274801,0,null);var factory_274803 = cljs.core.nth.call(null,vec__274744_274801,1,null);var canonical_f_274804 = (cljs.core.truth_(selector_274748)?cljs.core.partial.call(null,dommy.core.live_listener,elem_274747,selector_274748):cljs.core.identity).call(null,factory_274803.call(null,f_274796));dommy.core.update_event_listeners_BANG_.call(null,elem_274747,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274748,actual_type_274802,f_274796], null),canonical_f_274804);
if(cljs.core.truth_(elem_274747.addEventListener))
{elem_274747.addEventListener(cljs.core.name.call(null,actual_type_274802),canonical_f_274804);
} else
{elem_274747.attachEvent(cljs.core.name.call(null,actual_type_274802),canonical_f_274804);
}
{
var G__274805 = seq__274725_274797;
var G__274806 = chunk__274727_274798;
var G__274807 = count__274728_274799;
var G__274808 = (i__274729_274800 + 1);
seq__274725_274797 = G__274805;
chunk__274727_274798 = G__274806;
count__274728_274799 = G__274807;
i__274729_274800 = G__274808;
continue;
}
} else
{var temp__4092__auto___274809__$1 = cljs.core.seq.call(null,seq__274725_274797);if(temp__4092__auto___274809__$1)
{var seq__274725_274810__$1 = temp__4092__auto___274809__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274725_274810__$1))
{var c__8952__auto___274811 = cljs.core.chunk_first.call(null,seq__274725_274810__$1);{
var G__274812 = cljs.core.chunk_rest.call(null,seq__274725_274810__$1);
var G__274813 = c__8952__auto___274811;
var G__274814 = cljs.core.count.call(null,c__8952__auto___274811);
var G__274815 = 0;
seq__274725_274797 = G__274812;
chunk__274727_274798 = G__274813;
count__274728_274799 = G__274814;
i__274729_274800 = G__274815;
continue;
}
} else
{var vec__274745_274816 = cljs.core.first.call(null,seq__274725_274810__$1);var actual_type_274817 = cljs.core.nth.call(null,vec__274745_274816,0,null);var factory_274818 = cljs.core.nth.call(null,vec__274745_274816,1,null);var canonical_f_274819 = (cljs.core.truth_(selector_274748)?cljs.core.partial.call(null,dommy.core.live_listener,elem_274747,selector_274748):cljs.core.identity).call(null,factory_274818.call(null,f_274796));dommy.core.update_event_listeners_BANG_.call(null,elem_274747,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274748,actual_type_274817,f_274796], null),canonical_f_274819);
if(cljs.core.truth_(elem_274747.addEventListener))
{elem_274747.addEventListener(cljs.core.name.call(null,actual_type_274817),canonical_f_274819);
} else
{elem_274747.attachEvent(cljs.core.name.call(null,actual_type_274817),canonical_f_274819);
}
{
var G__274820 = cljs.core.next.call(null,seq__274725_274810__$1);
var G__274821 = null;
var G__274822 = 0;
var G__274823 = 0;
seq__274725_274797 = G__274820;
chunk__274727_274798 = G__274821;
count__274728_274799 = G__274822;
i__274729_274800 = G__274823;
continue;
}
}
} else
{}
}
break;
}
{
var G__274824 = cljs.core.next.call(null,seq__274724_274788__$1);
var G__274825 = null;
var G__274826 = 0;
var G__274827 = 0;
seq__274724_274749 = G__274824;
chunk__274731_274750 = G__274825;
count__274732_274751 = G__274826;
i__274733_274752 = G__274827;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__274828){
var elem_sel = cljs.core.first(arglist__274828);
var type_fs = cljs.core.rest(arglist__274828);
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
var vec__274852_274875 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_274876 = cljs.core.nth.call(null,vec__274852_274875,0,null);var selector_274877 = cljs.core.nth.call(null,vec__274852_274875,1,null);var seq__274853_274878 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__274860_274879 = null;var count__274861_274880 = 0;var i__274862_274881 = 0;while(true){
if((i__274862_274881 < count__274861_274880))
{var vec__274869_274882 = cljs.core._nth.call(null,chunk__274860_274879,i__274862_274881);var orig_type_274883 = cljs.core.nth.call(null,vec__274869_274882,0,null);var f_274884 = cljs.core.nth.call(null,vec__274869_274882,1,null);var seq__274863_274885 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_274883,new cljs.core.PersistentArrayMap.fromArray([orig_type_274883,cljs.core.identity], true, false)));var chunk__274865_274886 = null;var count__274866_274887 = 0;var i__274867_274888 = 0;while(true){
if((i__274867_274888 < count__274866_274887))
{var vec__274870_274889 = cljs.core._nth.call(null,chunk__274865_274886,i__274867_274888);var actual_type_274890 = cljs.core.nth.call(null,vec__274870_274889,0,null);var __274891 = cljs.core.nth.call(null,vec__274870_274889,1,null);var keys_274892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274877,actual_type_274890,f_274884], null);var canonical_f_274893 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_274876),keys_274892);dommy.core.update_event_listeners_BANG_.call(null,elem_274876,dommy.utils.dissoc_in,keys_274892);
if(cljs.core.truth_(elem_274876.removeEventListener))
{elem_274876.removeEventListener(cljs.core.name.call(null,actual_type_274890),canonical_f_274893);
} else
{elem_274876.detachEvent(cljs.core.name.call(null,actual_type_274890),canonical_f_274893);
}
{
var G__274894 = seq__274863_274885;
var G__274895 = chunk__274865_274886;
var G__274896 = count__274866_274887;
var G__274897 = (i__274867_274888 + 1);
seq__274863_274885 = G__274894;
chunk__274865_274886 = G__274895;
count__274866_274887 = G__274896;
i__274867_274888 = G__274897;
continue;
}
} else
{var temp__4092__auto___274898 = cljs.core.seq.call(null,seq__274863_274885);if(temp__4092__auto___274898)
{var seq__274863_274899__$1 = temp__4092__auto___274898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274863_274899__$1))
{var c__8952__auto___274900 = cljs.core.chunk_first.call(null,seq__274863_274899__$1);{
var G__274901 = cljs.core.chunk_rest.call(null,seq__274863_274899__$1);
var G__274902 = c__8952__auto___274900;
var G__274903 = cljs.core.count.call(null,c__8952__auto___274900);
var G__274904 = 0;
seq__274863_274885 = G__274901;
chunk__274865_274886 = G__274902;
count__274866_274887 = G__274903;
i__274867_274888 = G__274904;
continue;
}
} else
{var vec__274871_274905 = cljs.core.first.call(null,seq__274863_274899__$1);var actual_type_274906 = cljs.core.nth.call(null,vec__274871_274905,0,null);var __274907 = cljs.core.nth.call(null,vec__274871_274905,1,null);var keys_274908 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274877,actual_type_274906,f_274884], null);var canonical_f_274909 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_274876),keys_274908);dommy.core.update_event_listeners_BANG_.call(null,elem_274876,dommy.utils.dissoc_in,keys_274908);
if(cljs.core.truth_(elem_274876.removeEventListener))
{elem_274876.removeEventListener(cljs.core.name.call(null,actual_type_274906),canonical_f_274909);
} else
{elem_274876.detachEvent(cljs.core.name.call(null,actual_type_274906),canonical_f_274909);
}
{
var G__274910 = cljs.core.next.call(null,seq__274863_274899__$1);
var G__274911 = null;
var G__274912 = 0;
var G__274913 = 0;
seq__274863_274885 = G__274910;
chunk__274865_274886 = G__274911;
count__274866_274887 = G__274912;
i__274867_274888 = G__274913;
continue;
}
}
} else
{}
}
break;
}
{
var G__274914 = seq__274853_274878;
var G__274915 = chunk__274860_274879;
var G__274916 = count__274861_274880;
var G__274917 = (i__274862_274881 + 1);
seq__274853_274878 = G__274914;
chunk__274860_274879 = G__274915;
count__274861_274880 = G__274916;
i__274862_274881 = G__274917;
continue;
}
} else
{var temp__4092__auto___274918 = cljs.core.seq.call(null,seq__274853_274878);if(temp__4092__auto___274918)
{var seq__274853_274919__$1 = temp__4092__auto___274918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274853_274919__$1))
{var c__8952__auto___274920 = cljs.core.chunk_first.call(null,seq__274853_274919__$1);{
var G__274921 = cljs.core.chunk_rest.call(null,seq__274853_274919__$1);
var G__274922 = c__8952__auto___274920;
var G__274923 = cljs.core.count.call(null,c__8952__auto___274920);
var G__274924 = 0;
seq__274853_274878 = G__274921;
chunk__274860_274879 = G__274922;
count__274861_274880 = G__274923;
i__274862_274881 = G__274924;
continue;
}
} else
{var vec__274872_274925 = cljs.core.first.call(null,seq__274853_274919__$1);var orig_type_274926 = cljs.core.nth.call(null,vec__274872_274925,0,null);var f_274927 = cljs.core.nth.call(null,vec__274872_274925,1,null);var seq__274854_274928 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_274926,new cljs.core.PersistentArrayMap.fromArray([orig_type_274926,cljs.core.identity], true, false)));var chunk__274856_274929 = null;var count__274857_274930 = 0;var i__274858_274931 = 0;while(true){
if((i__274858_274931 < count__274857_274930))
{var vec__274873_274932 = cljs.core._nth.call(null,chunk__274856_274929,i__274858_274931);var actual_type_274933 = cljs.core.nth.call(null,vec__274873_274932,0,null);var __274934 = cljs.core.nth.call(null,vec__274873_274932,1,null);var keys_274935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274877,actual_type_274933,f_274927], null);var canonical_f_274936 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_274876),keys_274935);dommy.core.update_event_listeners_BANG_.call(null,elem_274876,dommy.utils.dissoc_in,keys_274935);
if(cljs.core.truth_(elem_274876.removeEventListener))
{elem_274876.removeEventListener(cljs.core.name.call(null,actual_type_274933),canonical_f_274936);
} else
{elem_274876.detachEvent(cljs.core.name.call(null,actual_type_274933),canonical_f_274936);
}
{
var G__274937 = seq__274854_274928;
var G__274938 = chunk__274856_274929;
var G__274939 = count__274857_274930;
var G__274940 = (i__274858_274931 + 1);
seq__274854_274928 = G__274937;
chunk__274856_274929 = G__274938;
count__274857_274930 = G__274939;
i__274858_274931 = G__274940;
continue;
}
} else
{var temp__4092__auto___274941__$1 = cljs.core.seq.call(null,seq__274854_274928);if(temp__4092__auto___274941__$1)
{var seq__274854_274942__$1 = temp__4092__auto___274941__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274854_274942__$1))
{var c__8952__auto___274943 = cljs.core.chunk_first.call(null,seq__274854_274942__$1);{
var G__274944 = cljs.core.chunk_rest.call(null,seq__274854_274942__$1);
var G__274945 = c__8952__auto___274943;
var G__274946 = cljs.core.count.call(null,c__8952__auto___274943);
var G__274947 = 0;
seq__274854_274928 = G__274944;
chunk__274856_274929 = G__274945;
count__274857_274930 = G__274946;
i__274858_274931 = G__274947;
continue;
}
} else
{var vec__274874_274948 = cljs.core.first.call(null,seq__274854_274942__$1);var actual_type_274949 = cljs.core.nth.call(null,vec__274874_274948,0,null);var __274950 = cljs.core.nth.call(null,vec__274874_274948,1,null);var keys_274951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_274877,actual_type_274949,f_274927], null);var canonical_f_274952 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_274876),keys_274951);dommy.core.update_event_listeners_BANG_.call(null,elem_274876,dommy.utils.dissoc_in,keys_274951);
if(cljs.core.truth_(elem_274876.removeEventListener))
{elem_274876.removeEventListener(cljs.core.name.call(null,actual_type_274949),canonical_f_274952);
} else
{elem_274876.detachEvent(cljs.core.name.call(null,actual_type_274949),canonical_f_274952);
}
{
var G__274953 = cljs.core.next.call(null,seq__274854_274942__$1);
var G__274954 = null;
var G__274955 = 0;
var G__274956 = 0;
seq__274854_274928 = G__274953;
chunk__274856_274929 = G__274954;
count__274857_274930 = G__274955;
i__274858_274931 = G__274956;
continue;
}
}
} else
{}
}
break;
}
{
var G__274957 = cljs.core.next.call(null,seq__274853_274919__$1);
var G__274958 = null;
var G__274959 = 0;
var G__274960 = 0;
seq__274853_274878 = G__274957;
chunk__274860_274879 = G__274958;
count__274861_274880 = G__274959;
i__274862_274881 = G__274960;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__274961){
var elem_sel = cljs.core.first(arglist__274961);
var type_fs = cljs.core.rest(arglist__274961);
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
var vec__274969_274976 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_274977 = cljs.core.nth.call(null,vec__274969_274976,0,null);var selector_274978 = cljs.core.nth.call(null,vec__274969_274976,1,null);var seq__274970_274979 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__274971_274980 = null;var count__274972_274981 = 0;var i__274973_274982 = 0;while(true){
if((i__274973_274982 < count__274972_274981))
{var vec__274974_274983 = cljs.core._nth.call(null,chunk__274971_274980,i__274973_274982);var type_274984 = cljs.core.nth.call(null,vec__274974_274983,0,null);var f_274985 = cljs.core.nth.call(null,vec__274974_274983,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_274984,((function (seq__274970_274979,chunk__274971_274980,count__274972_274981,i__274973_274982,vec__274974_274983,type_274984,f_274985){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_274984,this_fn);
return f_274985.call(null,e);
});})(seq__274970_274979,chunk__274971_274980,count__274972_274981,i__274973_274982,vec__274974_274983,type_274984,f_274985))
);
{
var G__274986 = seq__274970_274979;
var G__274987 = chunk__274971_274980;
var G__274988 = count__274972_274981;
var G__274989 = (i__274973_274982 + 1);
seq__274970_274979 = G__274986;
chunk__274971_274980 = G__274987;
count__274972_274981 = G__274988;
i__274973_274982 = G__274989;
continue;
}
} else
{var temp__4092__auto___274990 = cljs.core.seq.call(null,seq__274970_274979);if(temp__4092__auto___274990)
{var seq__274970_274991__$1 = temp__4092__auto___274990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274970_274991__$1))
{var c__8952__auto___274992 = cljs.core.chunk_first.call(null,seq__274970_274991__$1);{
var G__274993 = cljs.core.chunk_rest.call(null,seq__274970_274991__$1);
var G__274994 = c__8952__auto___274992;
var G__274995 = cljs.core.count.call(null,c__8952__auto___274992);
var G__274996 = 0;
seq__274970_274979 = G__274993;
chunk__274971_274980 = G__274994;
count__274972_274981 = G__274995;
i__274973_274982 = G__274996;
continue;
}
} else
{var vec__274975_274997 = cljs.core.first.call(null,seq__274970_274991__$1);var type_274998 = cljs.core.nth.call(null,vec__274975_274997,0,null);var f_274999 = cljs.core.nth.call(null,vec__274975_274997,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_274998,((function (seq__274970_274979,chunk__274971_274980,count__274972_274981,i__274973_274982,vec__274975_274997,type_274998,f_274999,seq__274970_274991__$1,temp__4092__auto___274990){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_274998,this_fn);
return f_274999.call(null,e);
});})(seq__274970_274979,chunk__274971_274980,count__274972_274981,i__274973_274982,vec__274975_274997,type_274998,f_274999,seq__274970_274991__$1,temp__4092__auto___274990))
);
{
var G__275000 = cljs.core.next.call(null,seq__274970_274991__$1);
var G__275001 = null;
var G__275002 = 0;
var G__275003 = 0;
seq__274970_274979 = G__275000;
chunk__274971_274980 = G__275001;
count__274972_274981 = G__275002;
i__274973_274982 = G__275003;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__275004){
var elem_sel = cljs.core.first(arglist__275004);
var type_fs = cljs.core.rest(arglist__275004);
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
var fire_BANG___delegate = function (node,event_type,p__275005){var vec__275007 = p__275005;var update_event_BANG_ = cljs.core.nth.call(null,vec__275007,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__275005 = null;if (arguments.length > 2) {
  p__275005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__275005);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__275008){
var node = cljs.core.first(arglist__275008);
arglist__275008 = cljs.core.next(arglist__275008);
var event_type = cljs.core.first(arglist__275008);
var p__275005 = cljs.core.rest(arglist__275008);
return fire_BANG___delegate(node,event_type,p__275005);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map