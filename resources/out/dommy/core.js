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
var append_BANG___2 = (function (parent,child){var G__35683 = dommy.template.__GT_node_like.call(null,parent);G__35683.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__35683;
});
var append_BANG___3 = (function() { 
var G__35688__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35684_35689 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35685_35690 = null;var count__35686_35691 = 0;var i__35687_35692 = 0;while(true){
if((i__35687_35692 < count__35686_35691))
{var c_35693 = cljs.core._nth.call(null,chunk__35685_35690,i__35687_35692);append_BANG_.call(null,parent__$1,c_35693);
{
var G__35694 = seq__35684_35689;
var G__35695 = chunk__35685_35690;
var G__35696 = count__35686_35691;
var G__35697 = (i__35687_35692 + 1);
seq__35684_35689 = G__35694;
chunk__35685_35690 = G__35695;
count__35686_35691 = G__35696;
i__35687_35692 = G__35697;
continue;
}
} else
{var temp__4092__auto___35698 = cljs.core.seq.call(null,seq__35684_35689);if(temp__4092__auto___35698)
{var seq__35684_35699__$1 = temp__4092__auto___35698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35684_35699__$1))
{var c__14547__auto___35700 = cljs.core.chunk_first.call(null,seq__35684_35699__$1);{
var G__35701 = cljs.core.chunk_rest.call(null,seq__35684_35699__$1);
var G__35702 = c__14547__auto___35700;
var G__35703 = cljs.core.count.call(null,c__14547__auto___35700);
var G__35704 = 0;
seq__35684_35689 = G__35701;
chunk__35685_35690 = G__35702;
count__35686_35691 = G__35703;
i__35687_35692 = G__35704;
continue;
}
} else
{var c_35705 = cljs.core.first.call(null,seq__35684_35699__$1);append_BANG_.call(null,parent__$1,c_35705);
{
var G__35706 = cljs.core.next.call(null,seq__35684_35699__$1);
var G__35707 = null;
var G__35708 = 0;
var G__35709 = 0;
seq__35684_35689 = G__35706;
chunk__35685_35690 = G__35707;
count__35686_35691 = G__35708;
i__35687_35692 = G__35709;
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
var G__35688 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35688__delegate.call(this,parent,child,more_children);};
G__35688.cljs$lang$maxFixedArity = 2;
G__35688.cljs$lang$applyTo = (function (arglist__35710){
var parent = cljs.core.first(arglist__35710);
arglist__35710 = cljs.core.next(arglist__35710);
var child = cljs.core.first(arglist__35710);
var more_children = cljs.core.rest(arglist__35710);
return G__35688__delegate(parent,child,more_children);
});
G__35688.cljs$core$IFn$_invoke$arity$variadic = G__35688__delegate;
return G__35688;
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
var G__35719__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__35715_35720 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__35716_35721 = null;var count__35717_35722 = 0;var i__35718_35723 = 0;while(true){
if((i__35718_35723 < count__35717_35722))
{var c_35724 = cljs.core._nth.call(null,chunk__35716_35721,i__35718_35723);prepend_BANG_.call(null,parent__$1,c_35724);
{
var G__35725 = seq__35715_35720;
var G__35726 = chunk__35716_35721;
var G__35727 = count__35717_35722;
var G__35728 = (i__35718_35723 + 1);
seq__35715_35720 = G__35725;
chunk__35716_35721 = G__35726;
count__35717_35722 = G__35727;
i__35718_35723 = G__35728;
continue;
}
} else
{var temp__4092__auto___35729 = cljs.core.seq.call(null,seq__35715_35720);if(temp__4092__auto___35729)
{var seq__35715_35730__$1 = temp__4092__auto___35729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35715_35730__$1))
{var c__14547__auto___35731 = cljs.core.chunk_first.call(null,seq__35715_35730__$1);{
var G__35732 = cljs.core.chunk_rest.call(null,seq__35715_35730__$1);
var G__35733 = c__14547__auto___35731;
var G__35734 = cljs.core.count.call(null,c__14547__auto___35731);
var G__35735 = 0;
seq__35715_35720 = G__35732;
chunk__35716_35721 = G__35733;
count__35717_35722 = G__35734;
i__35718_35723 = G__35735;
continue;
}
} else
{var c_35736 = cljs.core.first.call(null,seq__35715_35730__$1);prepend_BANG_.call(null,parent__$1,c_35736);
{
var G__35737 = cljs.core.next.call(null,seq__35715_35730__$1);
var G__35738 = null;
var G__35739 = 0;
var G__35740 = 0;
seq__35715_35720 = G__35737;
chunk__35716_35721 = G__35738;
count__35717_35722 = G__35739;
i__35718_35723 = G__35740;
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
var G__35719 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35719__delegate.call(this,parent,child,more_children);};
G__35719.cljs$lang$maxFixedArity = 2;
G__35719.cljs$lang$applyTo = (function (arglist__35741){
var parent = cljs.core.first(arglist__35741);
arglist__35741 = cljs.core.next(arglist__35741);
var child = cljs.core.first(arglist__35741);
var more_children = cljs.core.rest(arglist__35741);
return G__35719__delegate(parent,child,more_children);
});
G__35719.cljs$core$IFn$_invoke$arity$variadic = G__35719__delegate;
return G__35719;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___35742 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___35742))
{var next_35743 = temp__4090__auto___35742;parent.insertBefore(actual_node,next_35743);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__35745 = dommy.template.__GT_node_like.call(null,parent);G__35745.innerHTML = "";
dommy.core.append_BANG_.call(null,G__35745,node_like);
return G__35745;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__35747 = elem__$1.parentNode;G__35747.removeChild(elem__$1);
return G__35747;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35753){var vec__35754 = p__35753;var k = cljs.core.nth.call(null,vec__35754,0,null);var v = cljs.core.nth.call(null,vec__35754,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t35755 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t35755 = (function (v,k,vec__35754,p__35753,container,key_selectors_map,template,selector_map,meta35756){
this.v = v;
this.k = k;
this.vec__35754 = vec__35754;
this.p__35753 = p__35753;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta35756 = meta35756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t35755.cljs$lang$type = true;
dommy.core.t35755.cljs$lang$ctorStr = "dommy.core/t35755";
dommy.core.t35755.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"dommy.core/t35755");
});
dommy.core.t35755.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t35755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35757){var self__ = this;
var _35757__$1 = this;return self__.meta35756;
});
dommy.core.t35755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35757,meta35756__$1){var self__ = this;
var _35757__$1 = this;return (new dommy.core.t35755(self__.v,self__.k,self__.vec__35754,self__.p__35753,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta35756__$1));
});
dommy.core.__GT_t35755 = (function __GT_t35755(v__$1,k__$1,vec__35754__$1,p__35753__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35756){return (new dommy.core.t35755(v__$1,k__$1,vec__35754__$1,p__35753__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta35756));
});
}
return (new dommy.core.t35755(v,k,vec__35754,p__35753,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__35758_SHARP_){return p1__35758_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__35759_SHARP_){return !((p1__35759_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35760){var vec__35761 = p__35760;var special_mouse_event = cljs.core.nth.call(null,vec__35761,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__35761,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13823__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13823__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__35762){
var elem = cljs.core.first(arglist__35762);
arglist__35762 = cljs.core.next(arglist__35762);
var f = cljs.core.first(arglist__35762);
var args = cljs.core.rest(arglist__35762);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__35763_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__35763_SHARP_));
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
var vec__35787_35810 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35811 = cljs.core.nth.call(null,vec__35787_35810,0,null);var selector_35812 = cljs.core.nth.call(null,vec__35787_35810,1,null);var seq__35788_35813 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35795_35814 = null;var count__35796_35815 = 0;var i__35797_35816 = 0;while(true){
if((i__35797_35816 < count__35796_35815))
{var vec__35804_35817 = cljs.core._nth.call(null,chunk__35795_35814,i__35797_35816);var orig_type_35818 = cljs.core.nth.call(null,vec__35804_35817,0,null);var f_35819 = cljs.core.nth.call(null,vec__35804_35817,1,null);var seq__35798_35820 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35818,new cljs.core.PersistentArrayMap.fromArray([orig_type_35818,cljs.core.identity], true, false)));var chunk__35800_35821 = null;var count__35801_35822 = 0;var i__35802_35823 = 0;while(true){
if((i__35802_35823 < count__35801_35822))
{var vec__35805_35824 = cljs.core._nth.call(null,chunk__35800_35821,i__35802_35823);var actual_type_35825 = cljs.core.nth.call(null,vec__35805_35824,0,null);var factory_35826 = cljs.core.nth.call(null,vec__35805_35824,1,null);var canonical_f_35827 = (cljs.core.truth_(selector_35812)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35811,selector_35812):cljs.core.identity).call(null,factory_35826.call(null,f_35819));dommy.core.update_event_listeners_BANG_.call(null,elem_35811,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35812,actual_type_35825,f_35819], null),canonical_f_35827);
if(cljs.core.truth_(elem_35811.addEventListener))
{elem_35811.addEventListener(cljs.core.name.call(null,actual_type_35825),canonical_f_35827);
} else
{elem_35811.attachEvent(cljs.core.name.call(null,actual_type_35825),canonical_f_35827);
}
{
var G__35828 = seq__35798_35820;
var G__35829 = chunk__35800_35821;
var G__35830 = count__35801_35822;
var G__35831 = (i__35802_35823 + 1);
seq__35798_35820 = G__35828;
chunk__35800_35821 = G__35829;
count__35801_35822 = G__35830;
i__35802_35823 = G__35831;
continue;
}
} else
{var temp__4092__auto___35832 = cljs.core.seq.call(null,seq__35798_35820);if(temp__4092__auto___35832)
{var seq__35798_35833__$1 = temp__4092__auto___35832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35798_35833__$1))
{var c__14547__auto___35834 = cljs.core.chunk_first.call(null,seq__35798_35833__$1);{
var G__35835 = cljs.core.chunk_rest.call(null,seq__35798_35833__$1);
var G__35836 = c__14547__auto___35834;
var G__35837 = cljs.core.count.call(null,c__14547__auto___35834);
var G__35838 = 0;
seq__35798_35820 = G__35835;
chunk__35800_35821 = G__35836;
count__35801_35822 = G__35837;
i__35802_35823 = G__35838;
continue;
}
} else
{var vec__35806_35839 = cljs.core.first.call(null,seq__35798_35833__$1);var actual_type_35840 = cljs.core.nth.call(null,vec__35806_35839,0,null);var factory_35841 = cljs.core.nth.call(null,vec__35806_35839,1,null);var canonical_f_35842 = (cljs.core.truth_(selector_35812)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35811,selector_35812):cljs.core.identity).call(null,factory_35841.call(null,f_35819));dommy.core.update_event_listeners_BANG_.call(null,elem_35811,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35812,actual_type_35840,f_35819], null),canonical_f_35842);
if(cljs.core.truth_(elem_35811.addEventListener))
{elem_35811.addEventListener(cljs.core.name.call(null,actual_type_35840),canonical_f_35842);
} else
{elem_35811.attachEvent(cljs.core.name.call(null,actual_type_35840),canonical_f_35842);
}
{
var G__35843 = cljs.core.next.call(null,seq__35798_35833__$1);
var G__35844 = null;
var G__35845 = 0;
var G__35846 = 0;
seq__35798_35820 = G__35843;
chunk__35800_35821 = G__35844;
count__35801_35822 = G__35845;
i__35802_35823 = G__35846;
continue;
}
}
} else
{}
}
break;
}
{
var G__35847 = seq__35788_35813;
var G__35848 = chunk__35795_35814;
var G__35849 = count__35796_35815;
var G__35850 = (i__35797_35816 + 1);
seq__35788_35813 = G__35847;
chunk__35795_35814 = G__35848;
count__35796_35815 = G__35849;
i__35797_35816 = G__35850;
continue;
}
} else
{var temp__4092__auto___35851 = cljs.core.seq.call(null,seq__35788_35813);if(temp__4092__auto___35851)
{var seq__35788_35852__$1 = temp__4092__auto___35851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35788_35852__$1))
{var c__14547__auto___35853 = cljs.core.chunk_first.call(null,seq__35788_35852__$1);{
var G__35854 = cljs.core.chunk_rest.call(null,seq__35788_35852__$1);
var G__35855 = c__14547__auto___35853;
var G__35856 = cljs.core.count.call(null,c__14547__auto___35853);
var G__35857 = 0;
seq__35788_35813 = G__35854;
chunk__35795_35814 = G__35855;
count__35796_35815 = G__35856;
i__35797_35816 = G__35857;
continue;
}
} else
{var vec__35807_35858 = cljs.core.first.call(null,seq__35788_35852__$1);var orig_type_35859 = cljs.core.nth.call(null,vec__35807_35858,0,null);var f_35860 = cljs.core.nth.call(null,vec__35807_35858,1,null);var seq__35789_35861 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35859,new cljs.core.PersistentArrayMap.fromArray([orig_type_35859,cljs.core.identity], true, false)));var chunk__35791_35862 = null;var count__35792_35863 = 0;var i__35793_35864 = 0;while(true){
if((i__35793_35864 < count__35792_35863))
{var vec__35808_35865 = cljs.core._nth.call(null,chunk__35791_35862,i__35793_35864);var actual_type_35866 = cljs.core.nth.call(null,vec__35808_35865,0,null);var factory_35867 = cljs.core.nth.call(null,vec__35808_35865,1,null);var canonical_f_35868 = (cljs.core.truth_(selector_35812)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35811,selector_35812):cljs.core.identity).call(null,factory_35867.call(null,f_35860));dommy.core.update_event_listeners_BANG_.call(null,elem_35811,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35812,actual_type_35866,f_35860], null),canonical_f_35868);
if(cljs.core.truth_(elem_35811.addEventListener))
{elem_35811.addEventListener(cljs.core.name.call(null,actual_type_35866),canonical_f_35868);
} else
{elem_35811.attachEvent(cljs.core.name.call(null,actual_type_35866),canonical_f_35868);
}
{
var G__35869 = seq__35789_35861;
var G__35870 = chunk__35791_35862;
var G__35871 = count__35792_35863;
var G__35872 = (i__35793_35864 + 1);
seq__35789_35861 = G__35869;
chunk__35791_35862 = G__35870;
count__35792_35863 = G__35871;
i__35793_35864 = G__35872;
continue;
}
} else
{var temp__4092__auto___35873__$1 = cljs.core.seq.call(null,seq__35789_35861);if(temp__4092__auto___35873__$1)
{var seq__35789_35874__$1 = temp__4092__auto___35873__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35789_35874__$1))
{var c__14547__auto___35875 = cljs.core.chunk_first.call(null,seq__35789_35874__$1);{
var G__35876 = cljs.core.chunk_rest.call(null,seq__35789_35874__$1);
var G__35877 = c__14547__auto___35875;
var G__35878 = cljs.core.count.call(null,c__14547__auto___35875);
var G__35879 = 0;
seq__35789_35861 = G__35876;
chunk__35791_35862 = G__35877;
count__35792_35863 = G__35878;
i__35793_35864 = G__35879;
continue;
}
} else
{var vec__35809_35880 = cljs.core.first.call(null,seq__35789_35874__$1);var actual_type_35881 = cljs.core.nth.call(null,vec__35809_35880,0,null);var factory_35882 = cljs.core.nth.call(null,vec__35809_35880,1,null);var canonical_f_35883 = (cljs.core.truth_(selector_35812)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35811,selector_35812):cljs.core.identity).call(null,factory_35882.call(null,f_35860));dommy.core.update_event_listeners_BANG_.call(null,elem_35811,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35812,actual_type_35881,f_35860], null),canonical_f_35883);
if(cljs.core.truth_(elem_35811.addEventListener))
{elem_35811.addEventListener(cljs.core.name.call(null,actual_type_35881),canonical_f_35883);
} else
{elem_35811.attachEvent(cljs.core.name.call(null,actual_type_35881),canonical_f_35883);
}
{
var G__35884 = cljs.core.next.call(null,seq__35789_35874__$1);
var G__35885 = null;
var G__35886 = 0;
var G__35887 = 0;
seq__35789_35861 = G__35884;
chunk__35791_35862 = G__35885;
count__35792_35863 = G__35886;
i__35793_35864 = G__35887;
continue;
}
}
} else
{}
}
break;
}
{
var G__35888 = cljs.core.next.call(null,seq__35788_35852__$1);
var G__35889 = null;
var G__35890 = 0;
var G__35891 = 0;
seq__35788_35813 = G__35888;
chunk__35795_35814 = G__35889;
count__35796_35815 = G__35890;
i__35797_35816 = G__35891;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__35892){
var elem_sel = cljs.core.first(arglist__35892);
var type_fs = cljs.core.rest(arglist__35892);
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
var vec__35916_35939 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_35940 = cljs.core.nth.call(null,vec__35916_35939,0,null);var selector_35941 = cljs.core.nth.call(null,vec__35916_35939,1,null);var seq__35917_35942 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__35924_35943 = null;var count__35925_35944 = 0;var i__35926_35945 = 0;while(true){
if((i__35926_35945 < count__35925_35944))
{var vec__35933_35946 = cljs.core._nth.call(null,chunk__35924_35943,i__35926_35945);var orig_type_35947 = cljs.core.nth.call(null,vec__35933_35946,0,null);var f_35948 = cljs.core.nth.call(null,vec__35933_35946,1,null);var seq__35927_35949 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35947,new cljs.core.PersistentArrayMap.fromArray([orig_type_35947,cljs.core.identity], true, false)));var chunk__35929_35950 = null;var count__35930_35951 = 0;var i__35931_35952 = 0;while(true){
if((i__35931_35952 < count__35930_35951))
{var vec__35934_35953 = cljs.core._nth.call(null,chunk__35929_35950,i__35931_35952);var actual_type_35954 = cljs.core.nth.call(null,vec__35934_35953,0,null);var __35955 = cljs.core.nth.call(null,vec__35934_35953,1,null);var keys_35956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35941,actual_type_35954,f_35948], null);var canonical_f_35957 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35940),keys_35956);dommy.core.update_event_listeners_BANG_.call(null,elem_35940,dommy.utils.dissoc_in,keys_35956);
if(cljs.core.truth_(elem_35940.removeEventListener))
{elem_35940.removeEventListener(cljs.core.name.call(null,actual_type_35954),canonical_f_35957);
} else
{elem_35940.detachEvent(cljs.core.name.call(null,actual_type_35954),canonical_f_35957);
}
{
var G__35958 = seq__35927_35949;
var G__35959 = chunk__35929_35950;
var G__35960 = count__35930_35951;
var G__35961 = (i__35931_35952 + 1);
seq__35927_35949 = G__35958;
chunk__35929_35950 = G__35959;
count__35930_35951 = G__35960;
i__35931_35952 = G__35961;
continue;
}
} else
{var temp__4092__auto___35962 = cljs.core.seq.call(null,seq__35927_35949);if(temp__4092__auto___35962)
{var seq__35927_35963__$1 = temp__4092__auto___35962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35927_35963__$1))
{var c__14547__auto___35964 = cljs.core.chunk_first.call(null,seq__35927_35963__$1);{
var G__35965 = cljs.core.chunk_rest.call(null,seq__35927_35963__$1);
var G__35966 = c__14547__auto___35964;
var G__35967 = cljs.core.count.call(null,c__14547__auto___35964);
var G__35968 = 0;
seq__35927_35949 = G__35965;
chunk__35929_35950 = G__35966;
count__35930_35951 = G__35967;
i__35931_35952 = G__35968;
continue;
}
} else
{var vec__35935_35969 = cljs.core.first.call(null,seq__35927_35963__$1);var actual_type_35970 = cljs.core.nth.call(null,vec__35935_35969,0,null);var __35971 = cljs.core.nth.call(null,vec__35935_35969,1,null);var keys_35972 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35941,actual_type_35970,f_35948], null);var canonical_f_35973 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35940),keys_35972);dommy.core.update_event_listeners_BANG_.call(null,elem_35940,dommy.utils.dissoc_in,keys_35972);
if(cljs.core.truth_(elem_35940.removeEventListener))
{elem_35940.removeEventListener(cljs.core.name.call(null,actual_type_35970),canonical_f_35973);
} else
{elem_35940.detachEvent(cljs.core.name.call(null,actual_type_35970),canonical_f_35973);
}
{
var G__35974 = cljs.core.next.call(null,seq__35927_35963__$1);
var G__35975 = null;
var G__35976 = 0;
var G__35977 = 0;
seq__35927_35949 = G__35974;
chunk__35929_35950 = G__35975;
count__35930_35951 = G__35976;
i__35931_35952 = G__35977;
continue;
}
}
} else
{}
}
break;
}
{
var G__35978 = seq__35917_35942;
var G__35979 = chunk__35924_35943;
var G__35980 = count__35925_35944;
var G__35981 = (i__35926_35945 + 1);
seq__35917_35942 = G__35978;
chunk__35924_35943 = G__35979;
count__35925_35944 = G__35980;
i__35926_35945 = G__35981;
continue;
}
} else
{var temp__4092__auto___35982 = cljs.core.seq.call(null,seq__35917_35942);if(temp__4092__auto___35982)
{var seq__35917_35983__$1 = temp__4092__auto___35982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35917_35983__$1))
{var c__14547__auto___35984 = cljs.core.chunk_first.call(null,seq__35917_35983__$1);{
var G__35985 = cljs.core.chunk_rest.call(null,seq__35917_35983__$1);
var G__35986 = c__14547__auto___35984;
var G__35987 = cljs.core.count.call(null,c__14547__auto___35984);
var G__35988 = 0;
seq__35917_35942 = G__35985;
chunk__35924_35943 = G__35986;
count__35925_35944 = G__35987;
i__35926_35945 = G__35988;
continue;
}
} else
{var vec__35936_35989 = cljs.core.first.call(null,seq__35917_35983__$1);var orig_type_35990 = cljs.core.nth.call(null,vec__35936_35989,0,null);var f_35991 = cljs.core.nth.call(null,vec__35936_35989,1,null);var seq__35918_35992 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35990,new cljs.core.PersistentArrayMap.fromArray([orig_type_35990,cljs.core.identity], true, false)));var chunk__35920_35993 = null;var count__35921_35994 = 0;var i__35922_35995 = 0;while(true){
if((i__35922_35995 < count__35921_35994))
{var vec__35937_35996 = cljs.core._nth.call(null,chunk__35920_35993,i__35922_35995);var actual_type_35997 = cljs.core.nth.call(null,vec__35937_35996,0,null);var __35998 = cljs.core.nth.call(null,vec__35937_35996,1,null);var keys_35999 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35941,actual_type_35997,f_35991], null);var canonical_f_36000 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35940),keys_35999);dommy.core.update_event_listeners_BANG_.call(null,elem_35940,dommy.utils.dissoc_in,keys_35999);
if(cljs.core.truth_(elem_35940.removeEventListener))
{elem_35940.removeEventListener(cljs.core.name.call(null,actual_type_35997),canonical_f_36000);
} else
{elem_35940.detachEvent(cljs.core.name.call(null,actual_type_35997),canonical_f_36000);
}
{
var G__36001 = seq__35918_35992;
var G__36002 = chunk__35920_35993;
var G__36003 = count__35921_35994;
var G__36004 = (i__35922_35995 + 1);
seq__35918_35992 = G__36001;
chunk__35920_35993 = G__36002;
count__35921_35994 = G__36003;
i__35922_35995 = G__36004;
continue;
}
} else
{var temp__4092__auto___36005__$1 = cljs.core.seq.call(null,seq__35918_35992);if(temp__4092__auto___36005__$1)
{var seq__35918_36006__$1 = temp__4092__auto___36005__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35918_36006__$1))
{var c__14547__auto___36007 = cljs.core.chunk_first.call(null,seq__35918_36006__$1);{
var G__36008 = cljs.core.chunk_rest.call(null,seq__35918_36006__$1);
var G__36009 = c__14547__auto___36007;
var G__36010 = cljs.core.count.call(null,c__14547__auto___36007);
var G__36011 = 0;
seq__35918_35992 = G__36008;
chunk__35920_35993 = G__36009;
count__35921_35994 = G__36010;
i__35922_35995 = G__36011;
continue;
}
} else
{var vec__35938_36012 = cljs.core.first.call(null,seq__35918_36006__$1);var actual_type_36013 = cljs.core.nth.call(null,vec__35938_36012,0,null);var __36014 = cljs.core.nth.call(null,vec__35938_36012,1,null);var keys_36015 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35941,actual_type_36013,f_35991], null);var canonical_f_36016 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35940),keys_36015);dommy.core.update_event_listeners_BANG_.call(null,elem_35940,dommy.utils.dissoc_in,keys_36015);
if(cljs.core.truth_(elem_35940.removeEventListener))
{elem_35940.removeEventListener(cljs.core.name.call(null,actual_type_36013),canonical_f_36016);
} else
{elem_35940.detachEvent(cljs.core.name.call(null,actual_type_36013),canonical_f_36016);
}
{
var G__36017 = cljs.core.next.call(null,seq__35918_36006__$1);
var G__36018 = null;
var G__36019 = 0;
var G__36020 = 0;
seq__35918_35992 = G__36017;
chunk__35920_35993 = G__36018;
count__35921_35994 = G__36019;
i__35922_35995 = G__36020;
continue;
}
}
} else
{}
}
break;
}
{
var G__36021 = cljs.core.next.call(null,seq__35917_35983__$1);
var G__36022 = null;
var G__36023 = 0;
var G__36024 = 0;
seq__35917_35942 = G__36021;
chunk__35924_35943 = G__36022;
count__35925_35944 = G__36023;
i__35926_35945 = G__36024;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__36025){
var elem_sel = cljs.core.first(arglist__36025);
var type_fs = cljs.core.rest(arglist__36025);
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
var vec__36033_36040 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_36041 = cljs.core.nth.call(null,vec__36033_36040,0,null);var selector_36042 = cljs.core.nth.call(null,vec__36033_36040,1,null);var seq__36034_36043 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__36035_36044 = null;var count__36036_36045 = 0;var i__36037_36046 = 0;while(true){
if((i__36037_36046 < count__36036_36045))
{var vec__36038_36047 = cljs.core._nth.call(null,chunk__36035_36044,i__36037_36046);var type_36048 = cljs.core.nth.call(null,vec__36038_36047,0,null);var f_36049 = cljs.core.nth.call(null,vec__36038_36047,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_36048,((function (seq__36034_36043,chunk__36035_36044,count__36036_36045,i__36037_36046,vec__36038_36047,type_36048,f_36049){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_36048,this_fn);
return f_36049.call(null,e);
});})(seq__36034_36043,chunk__36035_36044,count__36036_36045,i__36037_36046,vec__36038_36047,type_36048,f_36049))
);
{
var G__36050 = seq__36034_36043;
var G__36051 = chunk__36035_36044;
var G__36052 = count__36036_36045;
var G__36053 = (i__36037_36046 + 1);
seq__36034_36043 = G__36050;
chunk__36035_36044 = G__36051;
count__36036_36045 = G__36052;
i__36037_36046 = G__36053;
continue;
}
} else
{var temp__4092__auto___36054 = cljs.core.seq.call(null,seq__36034_36043);if(temp__4092__auto___36054)
{var seq__36034_36055__$1 = temp__4092__auto___36054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36034_36055__$1))
{var c__14547__auto___36056 = cljs.core.chunk_first.call(null,seq__36034_36055__$1);{
var G__36057 = cljs.core.chunk_rest.call(null,seq__36034_36055__$1);
var G__36058 = c__14547__auto___36056;
var G__36059 = cljs.core.count.call(null,c__14547__auto___36056);
var G__36060 = 0;
seq__36034_36043 = G__36057;
chunk__36035_36044 = G__36058;
count__36036_36045 = G__36059;
i__36037_36046 = G__36060;
continue;
}
} else
{var vec__36039_36061 = cljs.core.first.call(null,seq__36034_36055__$1);var type_36062 = cljs.core.nth.call(null,vec__36039_36061,0,null);var f_36063 = cljs.core.nth.call(null,vec__36039_36061,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_36062,((function (seq__36034_36043,chunk__36035_36044,count__36036_36045,i__36037_36046,vec__36039_36061,type_36062,f_36063,seq__36034_36055__$1,temp__4092__auto___36054){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_36062,this_fn);
return f_36063.call(null,e);
});})(seq__36034_36043,chunk__36035_36044,count__36036_36045,i__36037_36046,vec__36039_36061,type_36062,f_36063,seq__36034_36055__$1,temp__4092__auto___36054))
);
{
var G__36064 = cljs.core.next.call(null,seq__36034_36055__$1);
var G__36065 = null;
var G__36066 = 0;
var G__36067 = 0;
seq__36034_36043 = G__36064;
chunk__36035_36044 = G__36065;
count__36036_36045 = G__36066;
i__36037_36046 = G__36067;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__36068){
var elem_sel = cljs.core.first(arglist__36068);
var type_fs = cljs.core.rest(arglist__36068);
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
var fire_BANG___delegate = function (node,event_type,p__36069){var vec__36071 = p__36069;var update_event_BANG_ = cljs.core.nth.call(null,vec__36071,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__36069 = null;if (arguments.length > 2) {
  p__36069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__36069);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__36072){
var node = cljs.core.first(arglist__36072);
arglist__36072 = cljs.core.next(arglist__36072);
var event_type = cljs.core.first(arglist__36072);
var p__36069 = cljs.core.rest(arglist__36072);
return fire_BANG___delegate(node,event_type,p__36069);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map