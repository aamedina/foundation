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
var append_BANG___2 = (function (parent,child){var G__28568 = dommy.template.__GT_node_like.call(null,parent);G__28568.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__28568;
});
var append_BANG___3 = (function() { 
var G__28573__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28569_28574 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28570_28575 = null;var count__28571_28576 = 0;var i__28572_28577 = 0;while(true){
if((i__28572_28577 < count__28571_28576))
{var c_28578 = cljs.core._nth.call(null,chunk__28570_28575,i__28572_28577);append_BANG_.call(null,parent__$1,c_28578);
{
var G__28579 = seq__28569_28574;
var G__28580 = chunk__28570_28575;
var G__28581 = count__28571_28576;
var G__28582 = (i__28572_28577 + 1);
seq__28569_28574 = G__28579;
chunk__28570_28575 = G__28580;
count__28571_28576 = G__28581;
i__28572_28577 = G__28582;
continue;
}
} else
{var temp__4092__auto___28583 = cljs.core.seq.call(null,seq__28569_28574);if(temp__4092__auto___28583)
{var seq__28569_28584__$1 = temp__4092__auto___28583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28569_28584__$1))
{var c__8952__auto___28585 = cljs.core.chunk_first.call(null,seq__28569_28584__$1);{
var G__28586 = cljs.core.chunk_rest.call(null,seq__28569_28584__$1);
var G__28587 = c__8952__auto___28585;
var G__28588 = cljs.core.count.call(null,c__8952__auto___28585);
var G__28589 = 0;
seq__28569_28574 = G__28586;
chunk__28570_28575 = G__28587;
count__28571_28576 = G__28588;
i__28572_28577 = G__28589;
continue;
}
} else
{var c_28590 = cljs.core.first.call(null,seq__28569_28584__$1);append_BANG_.call(null,parent__$1,c_28590);
{
var G__28591 = cljs.core.next.call(null,seq__28569_28584__$1);
var G__28592 = null;
var G__28593 = 0;
var G__28594 = 0;
seq__28569_28574 = G__28591;
chunk__28570_28575 = G__28592;
count__28571_28576 = G__28593;
i__28572_28577 = G__28594;
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
var G__28573 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28573__delegate.call(this,parent,child,more_children);};
G__28573.cljs$lang$maxFixedArity = 2;
G__28573.cljs$lang$applyTo = (function (arglist__28595){
var parent = cljs.core.first(arglist__28595);
arglist__28595 = cljs.core.next(arglist__28595);
var child = cljs.core.first(arglist__28595);
var more_children = cljs.core.rest(arglist__28595);
return G__28573__delegate(parent,child,more_children);
});
G__28573.cljs$core$IFn$_invoke$arity$variadic = G__28573__delegate;
return G__28573;
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
var G__28604__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28600_28605 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28601_28606 = null;var count__28602_28607 = 0;var i__28603_28608 = 0;while(true){
if((i__28603_28608 < count__28602_28607))
{var c_28609 = cljs.core._nth.call(null,chunk__28601_28606,i__28603_28608);prepend_BANG_.call(null,parent__$1,c_28609);
{
var G__28610 = seq__28600_28605;
var G__28611 = chunk__28601_28606;
var G__28612 = count__28602_28607;
var G__28613 = (i__28603_28608 + 1);
seq__28600_28605 = G__28610;
chunk__28601_28606 = G__28611;
count__28602_28607 = G__28612;
i__28603_28608 = G__28613;
continue;
}
} else
{var temp__4092__auto___28614 = cljs.core.seq.call(null,seq__28600_28605);if(temp__4092__auto___28614)
{var seq__28600_28615__$1 = temp__4092__auto___28614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28600_28615__$1))
{var c__8952__auto___28616 = cljs.core.chunk_first.call(null,seq__28600_28615__$1);{
var G__28617 = cljs.core.chunk_rest.call(null,seq__28600_28615__$1);
var G__28618 = c__8952__auto___28616;
var G__28619 = cljs.core.count.call(null,c__8952__auto___28616);
var G__28620 = 0;
seq__28600_28605 = G__28617;
chunk__28601_28606 = G__28618;
count__28602_28607 = G__28619;
i__28603_28608 = G__28620;
continue;
}
} else
{var c_28621 = cljs.core.first.call(null,seq__28600_28615__$1);prepend_BANG_.call(null,parent__$1,c_28621);
{
var G__28622 = cljs.core.next.call(null,seq__28600_28615__$1);
var G__28623 = null;
var G__28624 = 0;
var G__28625 = 0;
seq__28600_28605 = G__28622;
chunk__28601_28606 = G__28623;
count__28602_28607 = G__28624;
i__28603_28608 = G__28625;
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
var G__28604 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28604__delegate.call(this,parent,child,more_children);};
G__28604.cljs$lang$maxFixedArity = 2;
G__28604.cljs$lang$applyTo = (function (arglist__28626){
var parent = cljs.core.first(arglist__28626);
arglist__28626 = cljs.core.next(arglist__28626);
var child = cljs.core.first(arglist__28626);
var more_children = cljs.core.rest(arglist__28626);
return G__28604__delegate(parent,child,more_children);
});
G__28604.cljs$core$IFn$_invoke$arity$variadic = G__28604__delegate;
return G__28604;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___28627 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___28627))
{var next_28628 = temp__4090__auto___28627;parent.insertBefore(actual_node,next_28628);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__28630 = dommy.template.__GT_node_like.call(null,parent);G__28630.innerHTML = "";
dommy.core.append_BANG_.call(null,G__28630,node_like);
return G__28630;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__28632 = elem__$1.parentNode;G__28632.removeChild(elem__$1);
return G__28632;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28638){var vec__28639 = p__28638;var k = cljs.core.nth.call(null,vec__28639,0,null);var v = cljs.core.nth.call(null,vec__28639,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t28640 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t28640 = (function (v,k,vec__28639,p__28638,container,key_selectors_map,template,selector_map,meta28641){
this.v = v;
this.k = k;
this.vec__28639 = vec__28639;
this.p__28638 = p__28638;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28641 = meta28641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28640.cljs$lang$type = true;
dommy.core.t28640.cljs$lang$ctorStr = "dommy.core/t28640";
dommy.core.t28640.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"dommy.core/t28640");
});
dommy.core.t28640.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t28640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28642){var self__ = this;
var _28642__$1 = this;return self__.meta28641;
});
dommy.core.t28640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28642,meta28641__$1){var self__ = this;
var _28642__$1 = this;return (new dommy.core.t28640(self__.v,self__.k,self__.vec__28639,self__.p__28638,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28641__$1));
});
dommy.core.__GT_t28640 = (function __GT_t28640(v__$1,k__$1,vec__28639__$1,p__28638__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28641){return (new dommy.core.t28640(v__$1,k__$1,vec__28639__$1,p__28638__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28641));
});
}
return (new dommy.core.t28640(v,k,vec__28639,p__28638,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28643_SHARP_){return p1__28643_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__28644_SHARP_){return !((p1__28644_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28645){var vec__28646 = p__28645;var special_mouse_event = cljs.core.nth.call(null,vec__28646,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__28646,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8223__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8223__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28647){
var elem = cljs.core.first(arglist__28647);
arglist__28647 = cljs.core.next(arglist__28647);
var f = cljs.core.first(arglist__28647);
var args = cljs.core.rest(arglist__28647);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__28648_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28648_SHARP_));
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
var vec__28672_28695 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28696 = cljs.core.nth.call(null,vec__28672_28695,0,null);var selector_28697 = cljs.core.nth.call(null,vec__28672_28695,1,null);var seq__28673_28698 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28680_28699 = null;var count__28681_28700 = 0;var i__28682_28701 = 0;while(true){
if((i__28682_28701 < count__28681_28700))
{var vec__28689_28702 = cljs.core._nth.call(null,chunk__28680_28699,i__28682_28701);var orig_type_28703 = cljs.core.nth.call(null,vec__28689_28702,0,null);var f_28704 = cljs.core.nth.call(null,vec__28689_28702,1,null);var seq__28683_28705 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28703,new cljs.core.PersistentArrayMap.fromArray([orig_type_28703,cljs.core.identity], true, false)));var chunk__28685_28706 = null;var count__28686_28707 = 0;var i__28687_28708 = 0;while(true){
if((i__28687_28708 < count__28686_28707))
{var vec__28690_28709 = cljs.core._nth.call(null,chunk__28685_28706,i__28687_28708);var actual_type_28710 = cljs.core.nth.call(null,vec__28690_28709,0,null);var factory_28711 = cljs.core.nth.call(null,vec__28690_28709,1,null);var canonical_f_28712 = (cljs.core.truth_(selector_28697)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28696,selector_28697):cljs.core.identity).call(null,factory_28711.call(null,f_28704));dommy.core.update_event_listeners_BANG_.call(null,elem_28696,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28697,actual_type_28710,f_28704], null),canonical_f_28712);
if(cljs.core.truth_(elem_28696.addEventListener))
{elem_28696.addEventListener(cljs.core.name.call(null,actual_type_28710),canonical_f_28712);
} else
{elem_28696.attachEvent(cljs.core.name.call(null,actual_type_28710),canonical_f_28712);
}
{
var G__28713 = seq__28683_28705;
var G__28714 = chunk__28685_28706;
var G__28715 = count__28686_28707;
var G__28716 = (i__28687_28708 + 1);
seq__28683_28705 = G__28713;
chunk__28685_28706 = G__28714;
count__28686_28707 = G__28715;
i__28687_28708 = G__28716;
continue;
}
} else
{var temp__4092__auto___28717 = cljs.core.seq.call(null,seq__28683_28705);if(temp__4092__auto___28717)
{var seq__28683_28718__$1 = temp__4092__auto___28717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28683_28718__$1))
{var c__8952__auto___28719 = cljs.core.chunk_first.call(null,seq__28683_28718__$1);{
var G__28720 = cljs.core.chunk_rest.call(null,seq__28683_28718__$1);
var G__28721 = c__8952__auto___28719;
var G__28722 = cljs.core.count.call(null,c__8952__auto___28719);
var G__28723 = 0;
seq__28683_28705 = G__28720;
chunk__28685_28706 = G__28721;
count__28686_28707 = G__28722;
i__28687_28708 = G__28723;
continue;
}
} else
{var vec__28691_28724 = cljs.core.first.call(null,seq__28683_28718__$1);var actual_type_28725 = cljs.core.nth.call(null,vec__28691_28724,0,null);var factory_28726 = cljs.core.nth.call(null,vec__28691_28724,1,null);var canonical_f_28727 = (cljs.core.truth_(selector_28697)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28696,selector_28697):cljs.core.identity).call(null,factory_28726.call(null,f_28704));dommy.core.update_event_listeners_BANG_.call(null,elem_28696,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28697,actual_type_28725,f_28704], null),canonical_f_28727);
if(cljs.core.truth_(elem_28696.addEventListener))
{elem_28696.addEventListener(cljs.core.name.call(null,actual_type_28725),canonical_f_28727);
} else
{elem_28696.attachEvent(cljs.core.name.call(null,actual_type_28725),canonical_f_28727);
}
{
var G__28728 = cljs.core.next.call(null,seq__28683_28718__$1);
var G__28729 = null;
var G__28730 = 0;
var G__28731 = 0;
seq__28683_28705 = G__28728;
chunk__28685_28706 = G__28729;
count__28686_28707 = G__28730;
i__28687_28708 = G__28731;
continue;
}
}
} else
{}
}
break;
}
{
var G__28732 = seq__28673_28698;
var G__28733 = chunk__28680_28699;
var G__28734 = count__28681_28700;
var G__28735 = (i__28682_28701 + 1);
seq__28673_28698 = G__28732;
chunk__28680_28699 = G__28733;
count__28681_28700 = G__28734;
i__28682_28701 = G__28735;
continue;
}
} else
{var temp__4092__auto___28736 = cljs.core.seq.call(null,seq__28673_28698);if(temp__4092__auto___28736)
{var seq__28673_28737__$1 = temp__4092__auto___28736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28673_28737__$1))
{var c__8952__auto___28738 = cljs.core.chunk_first.call(null,seq__28673_28737__$1);{
var G__28739 = cljs.core.chunk_rest.call(null,seq__28673_28737__$1);
var G__28740 = c__8952__auto___28738;
var G__28741 = cljs.core.count.call(null,c__8952__auto___28738);
var G__28742 = 0;
seq__28673_28698 = G__28739;
chunk__28680_28699 = G__28740;
count__28681_28700 = G__28741;
i__28682_28701 = G__28742;
continue;
}
} else
{var vec__28692_28743 = cljs.core.first.call(null,seq__28673_28737__$1);var orig_type_28744 = cljs.core.nth.call(null,vec__28692_28743,0,null);var f_28745 = cljs.core.nth.call(null,vec__28692_28743,1,null);var seq__28674_28746 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28744,new cljs.core.PersistentArrayMap.fromArray([orig_type_28744,cljs.core.identity], true, false)));var chunk__28676_28747 = null;var count__28677_28748 = 0;var i__28678_28749 = 0;while(true){
if((i__28678_28749 < count__28677_28748))
{var vec__28693_28750 = cljs.core._nth.call(null,chunk__28676_28747,i__28678_28749);var actual_type_28751 = cljs.core.nth.call(null,vec__28693_28750,0,null);var factory_28752 = cljs.core.nth.call(null,vec__28693_28750,1,null);var canonical_f_28753 = (cljs.core.truth_(selector_28697)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28696,selector_28697):cljs.core.identity).call(null,factory_28752.call(null,f_28745));dommy.core.update_event_listeners_BANG_.call(null,elem_28696,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28697,actual_type_28751,f_28745], null),canonical_f_28753);
if(cljs.core.truth_(elem_28696.addEventListener))
{elem_28696.addEventListener(cljs.core.name.call(null,actual_type_28751),canonical_f_28753);
} else
{elem_28696.attachEvent(cljs.core.name.call(null,actual_type_28751),canonical_f_28753);
}
{
var G__28754 = seq__28674_28746;
var G__28755 = chunk__28676_28747;
var G__28756 = count__28677_28748;
var G__28757 = (i__28678_28749 + 1);
seq__28674_28746 = G__28754;
chunk__28676_28747 = G__28755;
count__28677_28748 = G__28756;
i__28678_28749 = G__28757;
continue;
}
} else
{var temp__4092__auto___28758__$1 = cljs.core.seq.call(null,seq__28674_28746);if(temp__4092__auto___28758__$1)
{var seq__28674_28759__$1 = temp__4092__auto___28758__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28674_28759__$1))
{var c__8952__auto___28760 = cljs.core.chunk_first.call(null,seq__28674_28759__$1);{
var G__28761 = cljs.core.chunk_rest.call(null,seq__28674_28759__$1);
var G__28762 = c__8952__auto___28760;
var G__28763 = cljs.core.count.call(null,c__8952__auto___28760);
var G__28764 = 0;
seq__28674_28746 = G__28761;
chunk__28676_28747 = G__28762;
count__28677_28748 = G__28763;
i__28678_28749 = G__28764;
continue;
}
} else
{var vec__28694_28765 = cljs.core.first.call(null,seq__28674_28759__$1);var actual_type_28766 = cljs.core.nth.call(null,vec__28694_28765,0,null);var factory_28767 = cljs.core.nth.call(null,vec__28694_28765,1,null);var canonical_f_28768 = (cljs.core.truth_(selector_28697)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28696,selector_28697):cljs.core.identity).call(null,factory_28767.call(null,f_28745));dommy.core.update_event_listeners_BANG_.call(null,elem_28696,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28697,actual_type_28766,f_28745], null),canonical_f_28768);
if(cljs.core.truth_(elem_28696.addEventListener))
{elem_28696.addEventListener(cljs.core.name.call(null,actual_type_28766),canonical_f_28768);
} else
{elem_28696.attachEvent(cljs.core.name.call(null,actual_type_28766),canonical_f_28768);
}
{
var G__28769 = cljs.core.next.call(null,seq__28674_28759__$1);
var G__28770 = null;
var G__28771 = 0;
var G__28772 = 0;
seq__28674_28746 = G__28769;
chunk__28676_28747 = G__28770;
count__28677_28748 = G__28771;
i__28678_28749 = G__28772;
continue;
}
}
} else
{}
}
break;
}
{
var G__28773 = cljs.core.next.call(null,seq__28673_28737__$1);
var G__28774 = null;
var G__28775 = 0;
var G__28776 = 0;
seq__28673_28698 = G__28773;
chunk__28680_28699 = G__28774;
count__28681_28700 = G__28775;
i__28682_28701 = G__28776;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__28777){
var elem_sel = cljs.core.first(arglist__28777);
var type_fs = cljs.core.rest(arglist__28777);
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
var vec__28801_28824 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28825 = cljs.core.nth.call(null,vec__28801_28824,0,null);var selector_28826 = cljs.core.nth.call(null,vec__28801_28824,1,null);var seq__28802_28827 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28809_28828 = null;var count__28810_28829 = 0;var i__28811_28830 = 0;while(true){
if((i__28811_28830 < count__28810_28829))
{var vec__28818_28831 = cljs.core._nth.call(null,chunk__28809_28828,i__28811_28830);var orig_type_28832 = cljs.core.nth.call(null,vec__28818_28831,0,null);var f_28833 = cljs.core.nth.call(null,vec__28818_28831,1,null);var seq__28812_28834 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28832,new cljs.core.PersistentArrayMap.fromArray([orig_type_28832,cljs.core.identity], true, false)));var chunk__28814_28835 = null;var count__28815_28836 = 0;var i__28816_28837 = 0;while(true){
if((i__28816_28837 < count__28815_28836))
{var vec__28819_28838 = cljs.core._nth.call(null,chunk__28814_28835,i__28816_28837);var actual_type_28839 = cljs.core.nth.call(null,vec__28819_28838,0,null);var __28840 = cljs.core.nth.call(null,vec__28819_28838,1,null);var keys_28841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28826,actual_type_28839,f_28833], null);var canonical_f_28842 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28825),keys_28841);dommy.core.update_event_listeners_BANG_.call(null,elem_28825,dommy.utils.dissoc_in,keys_28841);
if(cljs.core.truth_(elem_28825.removeEventListener))
{elem_28825.removeEventListener(cljs.core.name.call(null,actual_type_28839),canonical_f_28842);
} else
{elem_28825.detachEvent(cljs.core.name.call(null,actual_type_28839),canonical_f_28842);
}
{
var G__28843 = seq__28812_28834;
var G__28844 = chunk__28814_28835;
var G__28845 = count__28815_28836;
var G__28846 = (i__28816_28837 + 1);
seq__28812_28834 = G__28843;
chunk__28814_28835 = G__28844;
count__28815_28836 = G__28845;
i__28816_28837 = G__28846;
continue;
}
} else
{var temp__4092__auto___28847 = cljs.core.seq.call(null,seq__28812_28834);if(temp__4092__auto___28847)
{var seq__28812_28848__$1 = temp__4092__auto___28847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28812_28848__$1))
{var c__8952__auto___28849 = cljs.core.chunk_first.call(null,seq__28812_28848__$1);{
var G__28850 = cljs.core.chunk_rest.call(null,seq__28812_28848__$1);
var G__28851 = c__8952__auto___28849;
var G__28852 = cljs.core.count.call(null,c__8952__auto___28849);
var G__28853 = 0;
seq__28812_28834 = G__28850;
chunk__28814_28835 = G__28851;
count__28815_28836 = G__28852;
i__28816_28837 = G__28853;
continue;
}
} else
{var vec__28820_28854 = cljs.core.first.call(null,seq__28812_28848__$1);var actual_type_28855 = cljs.core.nth.call(null,vec__28820_28854,0,null);var __28856 = cljs.core.nth.call(null,vec__28820_28854,1,null);var keys_28857 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28826,actual_type_28855,f_28833], null);var canonical_f_28858 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28825),keys_28857);dommy.core.update_event_listeners_BANG_.call(null,elem_28825,dommy.utils.dissoc_in,keys_28857);
if(cljs.core.truth_(elem_28825.removeEventListener))
{elem_28825.removeEventListener(cljs.core.name.call(null,actual_type_28855),canonical_f_28858);
} else
{elem_28825.detachEvent(cljs.core.name.call(null,actual_type_28855),canonical_f_28858);
}
{
var G__28859 = cljs.core.next.call(null,seq__28812_28848__$1);
var G__28860 = null;
var G__28861 = 0;
var G__28862 = 0;
seq__28812_28834 = G__28859;
chunk__28814_28835 = G__28860;
count__28815_28836 = G__28861;
i__28816_28837 = G__28862;
continue;
}
}
} else
{}
}
break;
}
{
var G__28863 = seq__28802_28827;
var G__28864 = chunk__28809_28828;
var G__28865 = count__28810_28829;
var G__28866 = (i__28811_28830 + 1);
seq__28802_28827 = G__28863;
chunk__28809_28828 = G__28864;
count__28810_28829 = G__28865;
i__28811_28830 = G__28866;
continue;
}
} else
{var temp__4092__auto___28867 = cljs.core.seq.call(null,seq__28802_28827);if(temp__4092__auto___28867)
{var seq__28802_28868__$1 = temp__4092__auto___28867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28802_28868__$1))
{var c__8952__auto___28869 = cljs.core.chunk_first.call(null,seq__28802_28868__$1);{
var G__28870 = cljs.core.chunk_rest.call(null,seq__28802_28868__$1);
var G__28871 = c__8952__auto___28869;
var G__28872 = cljs.core.count.call(null,c__8952__auto___28869);
var G__28873 = 0;
seq__28802_28827 = G__28870;
chunk__28809_28828 = G__28871;
count__28810_28829 = G__28872;
i__28811_28830 = G__28873;
continue;
}
} else
{var vec__28821_28874 = cljs.core.first.call(null,seq__28802_28868__$1);var orig_type_28875 = cljs.core.nth.call(null,vec__28821_28874,0,null);var f_28876 = cljs.core.nth.call(null,vec__28821_28874,1,null);var seq__28803_28877 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28875,new cljs.core.PersistentArrayMap.fromArray([orig_type_28875,cljs.core.identity], true, false)));var chunk__28805_28878 = null;var count__28806_28879 = 0;var i__28807_28880 = 0;while(true){
if((i__28807_28880 < count__28806_28879))
{var vec__28822_28881 = cljs.core._nth.call(null,chunk__28805_28878,i__28807_28880);var actual_type_28882 = cljs.core.nth.call(null,vec__28822_28881,0,null);var __28883 = cljs.core.nth.call(null,vec__28822_28881,1,null);var keys_28884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28826,actual_type_28882,f_28876], null);var canonical_f_28885 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28825),keys_28884);dommy.core.update_event_listeners_BANG_.call(null,elem_28825,dommy.utils.dissoc_in,keys_28884);
if(cljs.core.truth_(elem_28825.removeEventListener))
{elem_28825.removeEventListener(cljs.core.name.call(null,actual_type_28882),canonical_f_28885);
} else
{elem_28825.detachEvent(cljs.core.name.call(null,actual_type_28882),canonical_f_28885);
}
{
var G__28886 = seq__28803_28877;
var G__28887 = chunk__28805_28878;
var G__28888 = count__28806_28879;
var G__28889 = (i__28807_28880 + 1);
seq__28803_28877 = G__28886;
chunk__28805_28878 = G__28887;
count__28806_28879 = G__28888;
i__28807_28880 = G__28889;
continue;
}
} else
{var temp__4092__auto___28890__$1 = cljs.core.seq.call(null,seq__28803_28877);if(temp__4092__auto___28890__$1)
{var seq__28803_28891__$1 = temp__4092__auto___28890__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28803_28891__$1))
{var c__8952__auto___28892 = cljs.core.chunk_first.call(null,seq__28803_28891__$1);{
var G__28893 = cljs.core.chunk_rest.call(null,seq__28803_28891__$1);
var G__28894 = c__8952__auto___28892;
var G__28895 = cljs.core.count.call(null,c__8952__auto___28892);
var G__28896 = 0;
seq__28803_28877 = G__28893;
chunk__28805_28878 = G__28894;
count__28806_28879 = G__28895;
i__28807_28880 = G__28896;
continue;
}
} else
{var vec__28823_28897 = cljs.core.first.call(null,seq__28803_28891__$1);var actual_type_28898 = cljs.core.nth.call(null,vec__28823_28897,0,null);var __28899 = cljs.core.nth.call(null,vec__28823_28897,1,null);var keys_28900 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28826,actual_type_28898,f_28876], null);var canonical_f_28901 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28825),keys_28900);dommy.core.update_event_listeners_BANG_.call(null,elem_28825,dommy.utils.dissoc_in,keys_28900);
if(cljs.core.truth_(elem_28825.removeEventListener))
{elem_28825.removeEventListener(cljs.core.name.call(null,actual_type_28898),canonical_f_28901);
} else
{elem_28825.detachEvent(cljs.core.name.call(null,actual_type_28898),canonical_f_28901);
}
{
var G__28902 = cljs.core.next.call(null,seq__28803_28891__$1);
var G__28903 = null;
var G__28904 = 0;
var G__28905 = 0;
seq__28803_28877 = G__28902;
chunk__28805_28878 = G__28903;
count__28806_28879 = G__28904;
i__28807_28880 = G__28905;
continue;
}
}
} else
{}
}
break;
}
{
var G__28906 = cljs.core.next.call(null,seq__28802_28868__$1);
var G__28907 = null;
var G__28908 = 0;
var G__28909 = 0;
seq__28802_28827 = G__28906;
chunk__28809_28828 = G__28907;
count__28810_28829 = G__28908;
i__28811_28830 = G__28909;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__28910){
var elem_sel = cljs.core.first(arglist__28910);
var type_fs = cljs.core.rest(arglist__28910);
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
var vec__28918_28925 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28926 = cljs.core.nth.call(null,vec__28918_28925,0,null);var selector_28927 = cljs.core.nth.call(null,vec__28918_28925,1,null);var seq__28919_28928 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28920_28929 = null;var count__28921_28930 = 0;var i__28922_28931 = 0;while(true){
if((i__28922_28931 < count__28921_28930))
{var vec__28923_28932 = cljs.core._nth.call(null,chunk__28920_28929,i__28922_28931);var type_28933 = cljs.core.nth.call(null,vec__28923_28932,0,null);var f_28934 = cljs.core.nth.call(null,vec__28923_28932,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28933,((function (seq__28919_28928,chunk__28920_28929,count__28921_28930,i__28922_28931,vec__28923_28932,type_28933,f_28934){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28933,this_fn);
return f_28934.call(null,e);
});})(seq__28919_28928,chunk__28920_28929,count__28921_28930,i__28922_28931,vec__28923_28932,type_28933,f_28934))
);
{
var G__28935 = seq__28919_28928;
var G__28936 = chunk__28920_28929;
var G__28937 = count__28921_28930;
var G__28938 = (i__28922_28931 + 1);
seq__28919_28928 = G__28935;
chunk__28920_28929 = G__28936;
count__28921_28930 = G__28937;
i__28922_28931 = G__28938;
continue;
}
} else
{var temp__4092__auto___28939 = cljs.core.seq.call(null,seq__28919_28928);if(temp__4092__auto___28939)
{var seq__28919_28940__$1 = temp__4092__auto___28939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28919_28940__$1))
{var c__8952__auto___28941 = cljs.core.chunk_first.call(null,seq__28919_28940__$1);{
var G__28942 = cljs.core.chunk_rest.call(null,seq__28919_28940__$1);
var G__28943 = c__8952__auto___28941;
var G__28944 = cljs.core.count.call(null,c__8952__auto___28941);
var G__28945 = 0;
seq__28919_28928 = G__28942;
chunk__28920_28929 = G__28943;
count__28921_28930 = G__28944;
i__28922_28931 = G__28945;
continue;
}
} else
{var vec__28924_28946 = cljs.core.first.call(null,seq__28919_28940__$1);var type_28947 = cljs.core.nth.call(null,vec__28924_28946,0,null);var f_28948 = cljs.core.nth.call(null,vec__28924_28946,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28947,((function (seq__28919_28928,chunk__28920_28929,count__28921_28930,i__28922_28931,vec__28924_28946,type_28947,f_28948,seq__28919_28940__$1,temp__4092__auto___28939){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28947,this_fn);
return f_28948.call(null,e);
});})(seq__28919_28928,chunk__28920_28929,count__28921_28930,i__28922_28931,vec__28924_28946,type_28947,f_28948,seq__28919_28940__$1,temp__4092__auto___28939))
);
{
var G__28949 = cljs.core.next.call(null,seq__28919_28940__$1);
var G__28950 = null;
var G__28951 = 0;
var G__28952 = 0;
seq__28919_28928 = G__28949;
chunk__28920_28929 = G__28950;
count__28921_28930 = G__28951;
i__28922_28931 = G__28952;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__28953){
var elem_sel = cljs.core.first(arglist__28953);
var type_fs = cljs.core.rest(arglist__28953);
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
var fire_BANG___delegate = function (node,event_type,p__28954){var vec__28956 = p__28954;var update_event_BANG_ = cljs.core.nth.call(null,vec__28956,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__28954 = null;if (arguments.length > 2) {
  p__28954 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__28954);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__28957){
var node = cljs.core.first(arglist__28957);
arglist__28957 = cljs.core.next(arglist__28957);
var event_type = cljs.core.first(arglist__28957);
var p__28954 = cljs.core.rest(arglist__28957);
return fire_BANG___delegate(node,event_type,p__28954);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map