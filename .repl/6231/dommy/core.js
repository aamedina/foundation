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
var append_BANG___2 = (function (parent,child){var G__75780 = dommy.template.__GT_node_like.call(null,parent);G__75780.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__75780;
});
var append_BANG___3 = (function() { 
var G__75785__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__75781_75786 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__75782_75787 = null;var count__75783_75788 = 0;var i__75784_75789 = 0;while(true){
if((i__75784_75789 < count__75783_75788))
{var c_75790 = cljs.core._nth.call(null,chunk__75782_75787,i__75784_75789);append_BANG_.call(null,parent__$1,c_75790);
{
var G__75791 = seq__75781_75786;
var G__75792 = chunk__75782_75787;
var G__75793 = count__75783_75788;
var G__75794 = (i__75784_75789 + 1);
seq__75781_75786 = G__75791;
chunk__75782_75787 = G__75792;
count__75783_75788 = G__75793;
i__75784_75789 = G__75794;
continue;
}
} else
{var temp__4092__auto___75795 = cljs.core.seq.call(null,seq__75781_75786);if(temp__4092__auto___75795)
{var seq__75781_75796__$1 = temp__4092__auto___75795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75781_75796__$1))
{var c__8552__auto___75797 = cljs.core.chunk_first.call(null,seq__75781_75796__$1);{
var G__75798 = cljs.core.chunk_rest.call(null,seq__75781_75796__$1);
var G__75799 = c__8552__auto___75797;
var G__75800 = cljs.core.count.call(null,c__8552__auto___75797);
var G__75801 = 0;
seq__75781_75786 = G__75798;
chunk__75782_75787 = G__75799;
count__75783_75788 = G__75800;
i__75784_75789 = G__75801;
continue;
}
} else
{var c_75802 = cljs.core.first.call(null,seq__75781_75796__$1);append_BANG_.call(null,parent__$1,c_75802);
{
var G__75803 = cljs.core.next.call(null,seq__75781_75796__$1);
var G__75804 = null;
var G__75805 = 0;
var G__75806 = 0;
seq__75781_75786 = G__75803;
chunk__75782_75787 = G__75804;
count__75783_75788 = G__75805;
i__75784_75789 = G__75806;
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
var G__75785 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__75785__delegate.call(this,parent,child,more_children);};
G__75785.cljs$lang$maxFixedArity = 2;
G__75785.cljs$lang$applyTo = (function (arglist__75807){
var parent = cljs.core.first(arglist__75807);
arglist__75807 = cljs.core.next(arglist__75807);
var child = cljs.core.first(arglist__75807);
var more_children = cljs.core.rest(arglist__75807);
return G__75785__delegate(parent,child,more_children);
});
G__75785.cljs$core$IFn$_invoke$arity$variadic = G__75785__delegate;
return G__75785;
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
var G__75816__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__75812_75817 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__75813_75818 = null;var count__75814_75819 = 0;var i__75815_75820 = 0;while(true){
if((i__75815_75820 < count__75814_75819))
{var c_75821 = cljs.core._nth.call(null,chunk__75813_75818,i__75815_75820);prepend_BANG_.call(null,parent__$1,c_75821);
{
var G__75822 = seq__75812_75817;
var G__75823 = chunk__75813_75818;
var G__75824 = count__75814_75819;
var G__75825 = (i__75815_75820 + 1);
seq__75812_75817 = G__75822;
chunk__75813_75818 = G__75823;
count__75814_75819 = G__75824;
i__75815_75820 = G__75825;
continue;
}
} else
{var temp__4092__auto___75826 = cljs.core.seq.call(null,seq__75812_75817);if(temp__4092__auto___75826)
{var seq__75812_75827__$1 = temp__4092__auto___75826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75812_75827__$1))
{var c__8552__auto___75828 = cljs.core.chunk_first.call(null,seq__75812_75827__$1);{
var G__75829 = cljs.core.chunk_rest.call(null,seq__75812_75827__$1);
var G__75830 = c__8552__auto___75828;
var G__75831 = cljs.core.count.call(null,c__8552__auto___75828);
var G__75832 = 0;
seq__75812_75817 = G__75829;
chunk__75813_75818 = G__75830;
count__75814_75819 = G__75831;
i__75815_75820 = G__75832;
continue;
}
} else
{var c_75833 = cljs.core.first.call(null,seq__75812_75827__$1);prepend_BANG_.call(null,parent__$1,c_75833);
{
var G__75834 = cljs.core.next.call(null,seq__75812_75827__$1);
var G__75835 = null;
var G__75836 = 0;
var G__75837 = 0;
seq__75812_75817 = G__75834;
chunk__75813_75818 = G__75835;
count__75814_75819 = G__75836;
i__75815_75820 = G__75837;
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
var G__75816 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__75816__delegate.call(this,parent,child,more_children);};
G__75816.cljs$lang$maxFixedArity = 2;
G__75816.cljs$lang$applyTo = (function (arglist__75838){
var parent = cljs.core.first(arglist__75838);
arglist__75838 = cljs.core.next(arglist__75838);
var child = cljs.core.first(arglist__75838);
var more_children = cljs.core.rest(arglist__75838);
return G__75816__delegate(parent,child,more_children);
});
G__75816.cljs$core$IFn$_invoke$arity$variadic = G__75816__delegate;
return G__75816;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___75839 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___75839))
{var next_75840 = temp__4090__auto___75839;parent.insertBefore(actual_node,next_75840);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__75842 = dommy.template.__GT_node_like.call(null,parent);G__75842.innerHTML = "";
dommy.core.append_BANG_.call(null,G__75842,node_like);
return G__75842;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__75844 = elem__$1.parentNode;G__75844.removeChild(elem__$1);
return G__75844;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__75850){var vec__75851 = p__75850;var k = cljs.core.nth.call(null,vec__75851,0,null);var v = cljs.core.nth.call(null,vec__75851,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t75852 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t75852 = (function (v,k,vec__75851,p__75850,container,key_selectors_map,template,selector_map,meta75853){
this.v = v;
this.k = k;
this.vec__75851 = vec__75851;
this.p__75850 = p__75850;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta75853 = meta75853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t75852.cljs$lang$type = true;
dommy.core.t75852.cljs$lang$ctorStr = "dommy.core/t75852";
dommy.core.t75852.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t75852");
});
dommy.core.t75852.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t75852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75854){var self__ = this;
var _75854__$1 = this;return self__.meta75853;
});
dommy.core.t75852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75854,meta75853__$1){var self__ = this;
var _75854__$1 = this;return (new dommy.core.t75852(self__.v,self__.k,self__.vec__75851,self__.p__75850,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta75853__$1));
});
dommy.core.__GT_t75852 = (function __GT_t75852(v__$1,k__$1,vec__75851__$1,p__75850__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta75853){return (new dommy.core.t75852(v__$1,k__$1,vec__75851__$1,p__75850__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta75853));
});
}
return (new dommy.core.t75852(v,k,vec__75851,p__75850,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__75855_SHARP_){return p1__75855_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__75856_SHARP_){return !((p1__75856_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__75857){var vec__75858 = p__75857;var special_mouse_event = cljs.core.nth.call(null,vec__75858,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__75858,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__75859){
var elem = cljs.core.first(arglist__75859);
arglist__75859 = cljs.core.next(arglist__75859);
var f = cljs.core.first(arglist__75859);
var args = cljs.core.rest(arglist__75859);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__75860_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__75860_SHARP_));
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
var vec__75884_75907 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_75908 = cljs.core.nth.call(null,vec__75884_75907,0,null);var selector_75909 = cljs.core.nth.call(null,vec__75884_75907,1,null);var seq__75885_75910 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__75892_75911 = null;var count__75893_75912 = 0;var i__75894_75913 = 0;while(true){
if((i__75894_75913 < count__75893_75912))
{var vec__75901_75914 = cljs.core._nth.call(null,chunk__75892_75911,i__75894_75913);var orig_type_75915 = cljs.core.nth.call(null,vec__75901_75914,0,null);var f_75916 = cljs.core.nth.call(null,vec__75901_75914,1,null);var seq__75895_75917 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_75915,new cljs.core.PersistentArrayMap.fromArray([orig_type_75915,cljs.core.identity], true, false)));var chunk__75897_75918 = null;var count__75898_75919 = 0;var i__75899_75920 = 0;while(true){
if((i__75899_75920 < count__75898_75919))
{var vec__75902_75921 = cljs.core._nth.call(null,chunk__75897_75918,i__75899_75920);var actual_type_75922 = cljs.core.nth.call(null,vec__75902_75921,0,null);var factory_75923 = cljs.core.nth.call(null,vec__75902_75921,1,null);var canonical_f_75924 = (cljs.core.truth_(selector_75909)?cljs.core.partial.call(null,dommy.core.live_listener,elem_75908,selector_75909):cljs.core.identity).call(null,factory_75923.call(null,f_75916));dommy.core.update_event_listeners_BANG_.call(null,elem_75908,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_75909,actual_type_75922,f_75916], null),canonical_f_75924);
if(cljs.core.truth_(elem_75908.addEventListener))
{elem_75908.addEventListener(cljs.core.name.call(null,actual_type_75922),canonical_f_75924);
} else
{elem_75908.attachEvent(cljs.core.name.call(null,actual_type_75922),canonical_f_75924);
}
{
var G__75925 = seq__75895_75917;
var G__75926 = chunk__75897_75918;
var G__75927 = count__75898_75919;
var G__75928 = (i__75899_75920 + 1);
seq__75895_75917 = G__75925;
chunk__75897_75918 = G__75926;
count__75898_75919 = G__75927;
i__75899_75920 = G__75928;
continue;
}
} else
{var temp__4092__auto___75929 = cljs.core.seq.call(null,seq__75895_75917);if(temp__4092__auto___75929)
{var seq__75895_75930__$1 = temp__4092__auto___75929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75895_75930__$1))
{var c__8552__auto___75931 = cljs.core.chunk_first.call(null,seq__75895_75930__$1);{
var G__75932 = cljs.core.chunk_rest.call(null,seq__75895_75930__$1);
var G__75933 = c__8552__auto___75931;
var G__75934 = cljs.core.count.call(null,c__8552__auto___75931);
var G__75935 = 0;
seq__75895_75917 = G__75932;
chunk__75897_75918 = G__75933;
count__75898_75919 = G__75934;
i__75899_75920 = G__75935;
continue;
}
} else
{var vec__75903_75936 = cljs.core.first.call(null,seq__75895_75930__$1);var actual_type_75937 = cljs.core.nth.call(null,vec__75903_75936,0,null);var factory_75938 = cljs.core.nth.call(null,vec__75903_75936,1,null);var canonical_f_75939 = (cljs.core.truth_(selector_75909)?cljs.core.partial.call(null,dommy.core.live_listener,elem_75908,selector_75909):cljs.core.identity).call(null,factory_75938.call(null,f_75916));dommy.core.update_event_listeners_BANG_.call(null,elem_75908,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_75909,actual_type_75937,f_75916], null),canonical_f_75939);
if(cljs.core.truth_(elem_75908.addEventListener))
{elem_75908.addEventListener(cljs.core.name.call(null,actual_type_75937),canonical_f_75939);
} else
{elem_75908.attachEvent(cljs.core.name.call(null,actual_type_75937),canonical_f_75939);
}
{
var G__75940 = cljs.core.next.call(null,seq__75895_75930__$1);
var G__75941 = null;
var G__75942 = 0;
var G__75943 = 0;
seq__75895_75917 = G__75940;
chunk__75897_75918 = G__75941;
count__75898_75919 = G__75942;
i__75899_75920 = G__75943;
continue;
}
}
} else
{}
}
break;
}
{
var G__75944 = seq__75885_75910;
var G__75945 = chunk__75892_75911;
var G__75946 = count__75893_75912;
var G__75947 = (i__75894_75913 + 1);
seq__75885_75910 = G__75944;
chunk__75892_75911 = G__75945;
count__75893_75912 = G__75946;
i__75894_75913 = G__75947;
continue;
}
} else
{var temp__4092__auto___75948 = cljs.core.seq.call(null,seq__75885_75910);if(temp__4092__auto___75948)
{var seq__75885_75949__$1 = temp__4092__auto___75948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75885_75949__$1))
{var c__8552__auto___75950 = cljs.core.chunk_first.call(null,seq__75885_75949__$1);{
var G__75951 = cljs.core.chunk_rest.call(null,seq__75885_75949__$1);
var G__75952 = c__8552__auto___75950;
var G__75953 = cljs.core.count.call(null,c__8552__auto___75950);
var G__75954 = 0;
seq__75885_75910 = G__75951;
chunk__75892_75911 = G__75952;
count__75893_75912 = G__75953;
i__75894_75913 = G__75954;
continue;
}
} else
{var vec__75904_75955 = cljs.core.first.call(null,seq__75885_75949__$1);var orig_type_75956 = cljs.core.nth.call(null,vec__75904_75955,0,null);var f_75957 = cljs.core.nth.call(null,vec__75904_75955,1,null);var seq__75886_75958 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_75956,new cljs.core.PersistentArrayMap.fromArray([orig_type_75956,cljs.core.identity], true, false)));var chunk__75888_75959 = null;var count__75889_75960 = 0;var i__75890_75961 = 0;while(true){
if((i__75890_75961 < count__75889_75960))
{var vec__75905_75962 = cljs.core._nth.call(null,chunk__75888_75959,i__75890_75961);var actual_type_75963 = cljs.core.nth.call(null,vec__75905_75962,0,null);var factory_75964 = cljs.core.nth.call(null,vec__75905_75962,1,null);var canonical_f_75965 = (cljs.core.truth_(selector_75909)?cljs.core.partial.call(null,dommy.core.live_listener,elem_75908,selector_75909):cljs.core.identity).call(null,factory_75964.call(null,f_75957));dommy.core.update_event_listeners_BANG_.call(null,elem_75908,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_75909,actual_type_75963,f_75957], null),canonical_f_75965);
if(cljs.core.truth_(elem_75908.addEventListener))
{elem_75908.addEventListener(cljs.core.name.call(null,actual_type_75963),canonical_f_75965);
} else
{elem_75908.attachEvent(cljs.core.name.call(null,actual_type_75963),canonical_f_75965);
}
{
var G__75966 = seq__75886_75958;
var G__75967 = chunk__75888_75959;
var G__75968 = count__75889_75960;
var G__75969 = (i__75890_75961 + 1);
seq__75886_75958 = G__75966;
chunk__75888_75959 = G__75967;
count__75889_75960 = G__75968;
i__75890_75961 = G__75969;
continue;
}
} else
{var temp__4092__auto___75970__$1 = cljs.core.seq.call(null,seq__75886_75958);if(temp__4092__auto___75970__$1)
{var seq__75886_75971__$1 = temp__4092__auto___75970__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75886_75971__$1))
{var c__8552__auto___75972 = cljs.core.chunk_first.call(null,seq__75886_75971__$1);{
var G__75973 = cljs.core.chunk_rest.call(null,seq__75886_75971__$1);
var G__75974 = c__8552__auto___75972;
var G__75975 = cljs.core.count.call(null,c__8552__auto___75972);
var G__75976 = 0;
seq__75886_75958 = G__75973;
chunk__75888_75959 = G__75974;
count__75889_75960 = G__75975;
i__75890_75961 = G__75976;
continue;
}
} else
{var vec__75906_75977 = cljs.core.first.call(null,seq__75886_75971__$1);var actual_type_75978 = cljs.core.nth.call(null,vec__75906_75977,0,null);var factory_75979 = cljs.core.nth.call(null,vec__75906_75977,1,null);var canonical_f_75980 = (cljs.core.truth_(selector_75909)?cljs.core.partial.call(null,dommy.core.live_listener,elem_75908,selector_75909):cljs.core.identity).call(null,factory_75979.call(null,f_75957));dommy.core.update_event_listeners_BANG_.call(null,elem_75908,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_75909,actual_type_75978,f_75957], null),canonical_f_75980);
if(cljs.core.truth_(elem_75908.addEventListener))
{elem_75908.addEventListener(cljs.core.name.call(null,actual_type_75978),canonical_f_75980);
} else
{elem_75908.attachEvent(cljs.core.name.call(null,actual_type_75978),canonical_f_75980);
}
{
var G__75981 = cljs.core.next.call(null,seq__75886_75971__$1);
var G__75982 = null;
var G__75983 = 0;
var G__75984 = 0;
seq__75886_75958 = G__75981;
chunk__75888_75959 = G__75982;
count__75889_75960 = G__75983;
i__75890_75961 = G__75984;
continue;
}
}
} else
{}
}
break;
}
{
var G__75985 = cljs.core.next.call(null,seq__75885_75949__$1);
var G__75986 = null;
var G__75987 = 0;
var G__75988 = 0;
seq__75885_75910 = G__75985;
chunk__75892_75911 = G__75986;
count__75893_75912 = G__75987;
i__75894_75913 = G__75988;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__75989){
var elem_sel = cljs.core.first(arglist__75989);
var type_fs = cljs.core.rest(arglist__75989);
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
var vec__76013_76036 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_76037 = cljs.core.nth.call(null,vec__76013_76036,0,null);var selector_76038 = cljs.core.nth.call(null,vec__76013_76036,1,null);var seq__76014_76039 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__76021_76040 = null;var count__76022_76041 = 0;var i__76023_76042 = 0;while(true){
if((i__76023_76042 < count__76022_76041))
{var vec__76030_76043 = cljs.core._nth.call(null,chunk__76021_76040,i__76023_76042);var orig_type_76044 = cljs.core.nth.call(null,vec__76030_76043,0,null);var f_76045 = cljs.core.nth.call(null,vec__76030_76043,1,null);var seq__76024_76046 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_76044,new cljs.core.PersistentArrayMap.fromArray([orig_type_76044,cljs.core.identity], true, false)));var chunk__76026_76047 = null;var count__76027_76048 = 0;var i__76028_76049 = 0;while(true){
if((i__76028_76049 < count__76027_76048))
{var vec__76031_76050 = cljs.core._nth.call(null,chunk__76026_76047,i__76028_76049);var actual_type_76051 = cljs.core.nth.call(null,vec__76031_76050,0,null);var __76052 = cljs.core.nth.call(null,vec__76031_76050,1,null);var keys_76053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_76038,actual_type_76051,f_76045], null);var canonical_f_76054 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_76037),keys_76053);dommy.core.update_event_listeners_BANG_.call(null,elem_76037,dommy.utils.dissoc_in,keys_76053);
if(cljs.core.truth_(elem_76037.removeEventListener))
{elem_76037.removeEventListener(cljs.core.name.call(null,actual_type_76051),canonical_f_76054);
} else
{elem_76037.detachEvent(cljs.core.name.call(null,actual_type_76051),canonical_f_76054);
}
{
var G__76055 = seq__76024_76046;
var G__76056 = chunk__76026_76047;
var G__76057 = count__76027_76048;
var G__76058 = (i__76028_76049 + 1);
seq__76024_76046 = G__76055;
chunk__76026_76047 = G__76056;
count__76027_76048 = G__76057;
i__76028_76049 = G__76058;
continue;
}
} else
{var temp__4092__auto___76059 = cljs.core.seq.call(null,seq__76024_76046);if(temp__4092__auto___76059)
{var seq__76024_76060__$1 = temp__4092__auto___76059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76024_76060__$1))
{var c__8552__auto___76061 = cljs.core.chunk_first.call(null,seq__76024_76060__$1);{
var G__76062 = cljs.core.chunk_rest.call(null,seq__76024_76060__$1);
var G__76063 = c__8552__auto___76061;
var G__76064 = cljs.core.count.call(null,c__8552__auto___76061);
var G__76065 = 0;
seq__76024_76046 = G__76062;
chunk__76026_76047 = G__76063;
count__76027_76048 = G__76064;
i__76028_76049 = G__76065;
continue;
}
} else
{var vec__76032_76066 = cljs.core.first.call(null,seq__76024_76060__$1);var actual_type_76067 = cljs.core.nth.call(null,vec__76032_76066,0,null);var __76068 = cljs.core.nth.call(null,vec__76032_76066,1,null);var keys_76069 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_76038,actual_type_76067,f_76045], null);var canonical_f_76070 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_76037),keys_76069);dommy.core.update_event_listeners_BANG_.call(null,elem_76037,dommy.utils.dissoc_in,keys_76069);
if(cljs.core.truth_(elem_76037.removeEventListener))
{elem_76037.removeEventListener(cljs.core.name.call(null,actual_type_76067),canonical_f_76070);
} else
{elem_76037.detachEvent(cljs.core.name.call(null,actual_type_76067),canonical_f_76070);
}
{
var G__76071 = cljs.core.next.call(null,seq__76024_76060__$1);
var G__76072 = null;
var G__76073 = 0;
var G__76074 = 0;
seq__76024_76046 = G__76071;
chunk__76026_76047 = G__76072;
count__76027_76048 = G__76073;
i__76028_76049 = G__76074;
continue;
}
}
} else
{}
}
break;
}
{
var G__76075 = seq__76014_76039;
var G__76076 = chunk__76021_76040;
var G__76077 = count__76022_76041;
var G__76078 = (i__76023_76042 + 1);
seq__76014_76039 = G__76075;
chunk__76021_76040 = G__76076;
count__76022_76041 = G__76077;
i__76023_76042 = G__76078;
continue;
}
} else
{var temp__4092__auto___76079 = cljs.core.seq.call(null,seq__76014_76039);if(temp__4092__auto___76079)
{var seq__76014_76080__$1 = temp__4092__auto___76079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76014_76080__$1))
{var c__8552__auto___76081 = cljs.core.chunk_first.call(null,seq__76014_76080__$1);{
var G__76082 = cljs.core.chunk_rest.call(null,seq__76014_76080__$1);
var G__76083 = c__8552__auto___76081;
var G__76084 = cljs.core.count.call(null,c__8552__auto___76081);
var G__76085 = 0;
seq__76014_76039 = G__76082;
chunk__76021_76040 = G__76083;
count__76022_76041 = G__76084;
i__76023_76042 = G__76085;
continue;
}
} else
{var vec__76033_76086 = cljs.core.first.call(null,seq__76014_76080__$1);var orig_type_76087 = cljs.core.nth.call(null,vec__76033_76086,0,null);var f_76088 = cljs.core.nth.call(null,vec__76033_76086,1,null);var seq__76015_76089 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_76087,new cljs.core.PersistentArrayMap.fromArray([orig_type_76087,cljs.core.identity], true, false)));var chunk__76017_76090 = null;var count__76018_76091 = 0;var i__76019_76092 = 0;while(true){
if((i__76019_76092 < count__76018_76091))
{var vec__76034_76093 = cljs.core._nth.call(null,chunk__76017_76090,i__76019_76092);var actual_type_76094 = cljs.core.nth.call(null,vec__76034_76093,0,null);var __76095 = cljs.core.nth.call(null,vec__76034_76093,1,null);var keys_76096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_76038,actual_type_76094,f_76088], null);var canonical_f_76097 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_76037),keys_76096);dommy.core.update_event_listeners_BANG_.call(null,elem_76037,dommy.utils.dissoc_in,keys_76096);
if(cljs.core.truth_(elem_76037.removeEventListener))
{elem_76037.removeEventListener(cljs.core.name.call(null,actual_type_76094),canonical_f_76097);
} else
{elem_76037.detachEvent(cljs.core.name.call(null,actual_type_76094),canonical_f_76097);
}
{
var G__76098 = seq__76015_76089;
var G__76099 = chunk__76017_76090;
var G__76100 = count__76018_76091;
var G__76101 = (i__76019_76092 + 1);
seq__76015_76089 = G__76098;
chunk__76017_76090 = G__76099;
count__76018_76091 = G__76100;
i__76019_76092 = G__76101;
continue;
}
} else
{var temp__4092__auto___76102__$1 = cljs.core.seq.call(null,seq__76015_76089);if(temp__4092__auto___76102__$1)
{var seq__76015_76103__$1 = temp__4092__auto___76102__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76015_76103__$1))
{var c__8552__auto___76104 = cljs.core.chunk_first.call(null,seq__76015_76103__$1);{
var G__76105 = cljs.core.chunk_rest.call(null,seq__76015_76103__$1);
var G__76106 = c__8552__auto___76104;
var G__76107 = cljs.core.count.call(null,c__8552__auto___76104);
var G__76108 = 0;
seq__76015_76089 = G__76105;
chunk__76017_76090 = G__76106;
count__76018_76091 = G__76107;
i__76019_76092 = G__76108;
continue;
}
} else
{var vec__76035_76109 = cljs.core.first.call(null,seq__76015_76103__$1);var actual_type_76110 = cljs.core.nth.call(null,vec__76035_76109,0,null);var __76111 = cljs.core.nth.call(null,vec__76035_76109,1,null);var keys_76112 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_76038,actual_type_76110,f_76088], null);var canonical_f_76113 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_76037),keys_76112);dommy.core.update_event_listeners_BANG_.call(null,elem_76037,dommy.utils.dissoc_in,keys_76112);
if(cljs.core.truth_(elem_76037.removeEventListener))
{elem_76037.removeEventListener(cljs.core.name.call(null,actual_type_76110),canonical_f_76113);
} else
{elem_76037.detachEvent(cljs.core.name.call(null,actual_type_76110),canonical_f_76113);
}
{
var G__76114 = cljs.core.next.call(null,seq__76015_76103__$1);
var G__76115 = null;
var G__76116 = 0;
var G__76117 = 0;
seq__76015_76089 = G__76114;
chunk__76017_76090 = G__76115;
count__76018_76091 = G__76116;
i__76019_76092 = G__76117;
continue;
}
}
} else
{}
}
break;
}
{
var G__76118 = cljs.core.next.call(null,seq__76014_76080__$1);
var G__76119 = null;
var G__76120 = 0;
var G__76121 = 0;
seq__76014_76039 = G__76118;
chunk__76021_76040 = G__76119;
count__76022_76041 = G__76120;
i__76023_76042 = G__76121;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__76122){
var elem_sel = cljs.core.first(arglist__76122);
var type_fs = cljs.core.rest(arglist__76122);
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
var vec__76130_76137 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_76138 = cljs.core.nth.call(null,vec__76130_76137,0,null);var selector_76139 = cljs.core.nth.call(null,vec__76130_76137,1,null);var seq__76131_76140 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__76132_76141 = null;var count__76133_76142 = 0;var i__76134_76143 = 0;while(true){
if((i__76134_76143 < count__76133_76142))
{var vec__76135_76144 = cljs.core._nth.call(null,chunk__76132_76141,i__76134_76143);var type_76145 = cljs.core.nth.call(null,vec__76135_76144,0,null);var f_76146 = cljs.core.nth.call(null,vec__76135_76144,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_76145,((function (seq__76131_76140,chunk__76132_76141,count__76133_76142,i__76134_76143,vec__76135_76144,type_76145,f_76146){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_76145,this_fn);
return f_76146.call(null,e);
});})(seq__76131_76140,chunk__76132_76141,count__76133_76142,i__76134_76143,vec__76135_76144,type_76145,f_76146))
);
{
var G__76147 = seq__76131_76140;
var G__76148 = chunk__76132_76141;
var G__76149 = count__76133_76142;
var G__76150 = (i__76134_76143 + 1);
seq__76131_76140 = G__76147;
chunk__76132_76141 = G__76148;
count__76133_76142 = G__76149;
i__76134_76143 = G__76150;
continue;
}
} else
{var temp__4092__auto___76151 = cljs.core.seq.call(null,seq__76131_76140);if(temp__4092__auto___76151)
{var seq__76131_76152__$1 = temp__4092__auto___76151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76131_76152__$1))
{var c__8552__auto___76153 = cljs.core.chunk_first.call(null,seq__76131_76152__$1);{
var G__76154 = cljs.core.chunk_rest.call(null,seq__76131_76152__$1);
var G__76155 = c__8552__auto___76153;
var G__76156 = cljs.core.count.call(null,c__8552__auto___76153);
var G__76157 = 0;
seq__76131_76140 = G__76154;
chunk__76132_76141 = G__76155;
count__76133_76142 = G__76156;
i__76134_76143 = G__76157;
continue;
}
} else
{var vec__76136_76158 = cljs.core.first.call(null,seq__76131_76152__$1);var type_76159 = cljs.core.nth.call(null,vec__76136_76158,0,null);var f_76160 = cljs.core.nth.call(null,vec__76136_76158,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_76159,((function (seq__76131_76140,chunk__76132_76141,count__76133_76142,i__76134_76143,vec__76136_76158,type_76159,f_76160,seq__76131_76152__$1,temp__4092__auto___76151){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_76159,this_fn);
return f_76160.call(null,e);
});})(seq__76131_76140,chunk__76132_76141,count__76133_76142,i__76134_76143,vec__76136_76158,type_76159,f_76160,seq__76131_76152__$1,temp__4092__auto___76151))
);
{
var G__76161 = cljs.core.next.call(null,seq__76131_76152__$1);
var G__76162 = null;
var G__76163 = 0;
var G__76164 = 0;
seq__76131_76140 = G__76161;
chunk__76132_76141 = G__76162;
count__76133_76142 = G__76163;
i__76134_76143 = G__76164;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__76165){
var elem_sel = cljs.core.first(arglist__76165);
var type_fs = cljs.core.rest(arglist__76165);
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
var fire_BANG___delegate = function (node,event_type,p__76166){var vec__76168 = p__76166;var update_event_BANG_ = cljs.core.nth.call(null,vec__76168,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__76166 = null;if (arguments.length > 2) {
  p__76166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__76166);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__76169){
var node = cljs.core.first(arglist__76169);
arglist__76169 = cljs.core.next(arglist__76169);
var event_type = cljs.core.first(arglist__76169);
var p__76166 = cljs.core.rest(arglist__76169);
return fire_BANG___delegate(node,event_type,p__76166);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
