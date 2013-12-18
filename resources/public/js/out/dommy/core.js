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
var append_BANG___2 = (function (parent,child){var G__44859 = dommy.template.__GT_node_like.call(null,parent);G__44859.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__44859;
});
var append_BANG___3 = (function() { 
var G__44864__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__44860_44865 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__44861_44866 = null;var count__44862_44867 = 0;var i__44863_44868 = 0;while(true){
if((i__44863_44868 < count__44862_44867))
{var c_44869 = cljs.core._nth.call(null,chunk__44861_44866,i__44863_44868);append_BANG_.call(null,parent__$1,c_44869);
{
var G__44870 = seq__44860_44865;
var G__44871 = chunk__44861_44866;
var G__44872 = count__44862_44867;
var G__44873 = (i__44863_44868 + 1);
seq__44860_44865 = G__44870;
chunk__44861_44866 = G__44871;
count__44862_44867 = G__44872;
i__44863_44868 = G__44873;
continue;
}
} else
{var temp__4092__auto___44874 = cljs.core.seq.call(null,seq__44860_44865);if(temp__4092__auto___44874)
{var seq__44860_44875__$1 = temp__4092__auto___44874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44860_44875__$1))
{var c__8927__auto___44876 = cljs.core.chunk_first.call(null,seq__44860_44875__$1);{
var G__44877 = cljs.core.chunk_rest.call(null,seq__44860_44875__$1);
var G__44878 = c__8927__auto___44876;
var G__44879 = cljs.core.count.call(null,c__8927__auto___44876);
var G__44880 = 0;
seq__44860_44865 = G__44877;
chunk__44861_44866 = G__44878;
count__44862_44867 = G__44879;
i__44863_44868 = G__44880;
continue;
}
} else
{var c_44881 = cljs.core.first.call(null,seq__44860_44875__$1);append_BANG_.call(null,parent__$1,c_44881);
{
var G__44882 = cljs.core.next.call(null,seq__44860_44875__$1);
var G__44883 = null;
var G__44884 = 0;
var G__44885 = 0;
seq__44860_44865 = G__44882;
chunk__44861_44866 = G__44883;
count__44862_44867 = G__44884;
i__44863_44868 = G__44885;
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
var G__44864 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44864__delegate.call(this,parent,child,more_children);};
G__44864.cljs$lang$maxFixedArity = 2;
G__44864.cljs$lang$applyTo = (function (arglist__44886){
var parent = cljs.core.first(arglist__44886);
arglist__44886 = cljs.core.next(arglist__44886);
var child = cljs.core.first(arglist__44886);
var more_children = cljs.core.rest(arglist__44886);
return G__44864__delegate(parent,child,more_children);
});
G__44864.cljs$core$IFn$_invoke$arity$variadic = G__44864__delegate;
return G__44864;
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
var G__44895__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__44891_44896 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__44892_44897 = null;var count__44893_44898 = 0;var i__44894_44899 = 0;while(true){
if((i__44894_44899 < count__44893_44898))
{var c_44900 = cljs.core._nth.call(null,chunk__44892_44897,i__44894_44899);prepend_BANG_.call(null,parent__$1,c_44900);
{
var G__44901 = seq__44891_44896;
var G__44902 = chunk__44892_44897;
var G__44903 = count__44893_44898;
var G__44904 = (i__44894_44899 + 1);
seq__44891_44896 = G__44901;
chunk__44892_44897 = G__44902;
count__44893_44898 = G__44903;
i__44894_44899 = G__44904;
continue;
}
} else
{var temp__4092__auto___44905 = cljs.core.seq.call(null,seq__44891_44896);if(temp__4092__auto___44905)
{var seq__44891_44906__$1 = temp__4092__auto___44905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44891_44906__$1))
{var c__8927__auto___44907 = cljs.core.chunk_first.call(null,seq__44891_44906__$1);{
var G__44908 = cljs.core.chunk_rest.call(null,seq__44891_44906__$1);
var G__44909 = c__8927__auto___44907;
var G__44910 = cljs.core.count.call(null,c__8927__auto___44907);
var G__44911 = 0;
seq__44891_44896 = G__44908;
chunk__44892_44897 = G__44909;
count__44893_44898 = G__44910;
i__44894_44899 = G__44911;
continue;
}
} else
{var c_44912 = cljs.core.first.call(null,seq__44891_44906__$1);prepend_BANG_.call(null,parent__$1,c_44912);
{
var G__44913 = cljs.core.next.call(null,seq__44891_44906__$1);
var G__44914 = null;
var G__44915 = 0;
var G__44916 = 0;
seq__44891_44896 = G__44913;
chunk__44892_44897 = G__44914;
count__44893_44898 = G__44915;
i__44894_44899 = G__44916;
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
var G__44895 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44895__delegate.call(this,parent,child,more_children);};
G__44895.cljs$lang$maxFixedArity = 2;
G__44895.cljs$lang$applyTo = (function (arglist__44917){
var parent = cljs.core.first(arglist__44917);
arglist__44917 = cljs.core.next(arglist__44917);
var child = cljs.core.first(arglist__44917);
var more_children = cljs.core.rest(arglist__44917);
return G__44895__delegate(parent,child,more_children);
});
G__44895.cljs$core$IFn$_invoke$arity$variadic = G__44895__delegate;
return G__44895;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___44918 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___44918))
{var next_44919 = temp__4090__auto___44918;parent.insertBefore(actual_node,next_44919);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__44921 = dommy.template.__GT_node_like.call(null,parent);G__44921.innerHTML = "";
dommy.core.append_BANG_.call(null,G__44921,node_like);
return G__44921;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__44923 = elem__$1.parentNode;G__44923.removeChild(elem__$1);
return G__44923;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__44929){var vec__44930 = p__44929;var k = cljs.core.nth.call(null,vec__44930,0,null);var v = cljs.core.nth.call(null,vec__44930,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t44931 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t44931 = (function (v,k,vec__44930,p__44929,container,key_selectors_map,template,selector_map,meta44932){
this.v = v;
this.k = k;
this.vec__44930 = vec__44930;
this.p__44929 = p__44929;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta44932 = meta44932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t44931.cljs$lang$type = true;
dommy.core.t44931.cljs$lang$ctorStr = "dommy.core/t44931";
dommy.core.t44931.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"dommy.core/t44931");
});
dommy.core.t44931.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t44931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44933){var self__ = this;
var _44933__$1 = this;return self__.meta44932;
});
dommy.core.t44931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44933,meta44932__$1){var self__ = this;
var _44933__$1 = this;return (new dommy.core.t44931(self__.v,self__.k,self__.vec__44930,self__.p__44929,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta44932__$1));
});
dommy.core.__GT_t44931 = (function __GT_t44931(v__$1,k__$1,vec__44930__$1,p__44929__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta44932){return (new dommy.core.t44931(v__$1,k__$1,vec__44930__$1,p__44929__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta44932));
});
}
return (new dommy.core.t44931(v,k,vec__44930,p__44929,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__44934_SHARP_){return p1__44934_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__44935_SHARP_){return !((p1__44935_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__44936){var vec__44937 = p__44936;var special_mouse_event = cljs.core.nth.call(null,vec__44937,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__44937,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8198__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8198__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__44938){
var elem = cljs.core.first(arglist__44938);
arglist__44938 = cljs.core.next(arglist__44938);
var f = cljs.core.first(arglist__44938);
var args = cljs.core.rest(arglist__44938);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__44939_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__44939_SHARP_));
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
var vec__44963_44986 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_44987 = cljs.core.nth.call(null,vec__44963_44986,0,null);var selector_44988 = cljs.core.nth.call(null,vec__44963_44986,1,null);var seq__44964_44989 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__44971_44990 = null;var count__44972_44991 = 0;var i__44973_44992 = 0;while(true){
if((i__44973_44992 < count__44972_44991))
{var vec__44980_44993 = cljs.core._nth.call(null,chunk__44971_44990,i__44973_44992);var orig_type_44994 = cljs.core.nth.call(null,vec__44980_44993,0,null);var f_44995 = cljs.core.nth.call(null,vec__44980_44993,1,null);var seq__44974_44996 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_44994,new cljs.core.PersistentArrayMap.fromArray([orig_type_44994,cljs.core.identity], true, false)));var chunk__44976_44997 = null;var count__44977_44998 = 0;var i__44978_44999 = 0;while(true){
if((i__44978_44999 < count__44977_44998))
{var vec__44981_45000 = cljs.core._nth.call(null,chunk__44976_44997,i__44978_44999);var actual_type_45001 = cljs.core.nth.call(null,vec__44981_45000,0,null);var factory_45002 = cljs.core.nth.call(null,vec__44981_45000,1,null);var canonical_f_45003 = (cljs.core.truth_(selector_44988)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44987,selector_44988):cljs.core.identity).call(null,factory_45002.call(null,f_44995));dommy.core.update_event_listeners_BANG_.call(null,elem_44987,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44988,actual_type_45001,f_44995], null),canonical_f_45003);
if(cljs.core.truth_(elem_44987.addEventListener))
{elem_44987.addEventListener(cljs.core.name.call(null,actual_type_45001),canonical_f_45003);
} else
{elem_44987.attachEvent(cljs.core.name.call(null,actual_type_45001),canonical_f_45003);
}
{
var G__45004 = seq__44974_44996;
var G__45005 = chunk__44976_44997;
var G__45006 = count__44977_44998;
var G__45007 = (i__44978_44999 + 1);
seq__44974_44996 = G__45004;
chunk__44976_44997 = G__45005;
count__44977_44998 = G__45006;
i__44978_44999 = G__45007;
continue;
}
} else
{var temp__4092__auto___45008 = cljs.core.seq.call(null,seq__44974_44996);if(temp__4092__auto___45008)
{var seq__44974_45009__$1 = temp__4092__auto___45008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44974_45009__$1))
{var c__8927__auto___45010 = cljs.core.chunk_first.call(null,seq__44974_45009__$1);{
var G__45011 = cljs.core.chunk_rest.call(null,seq__44974_45009__$1);
var G__45012 = c__8927__auto___45010;
var G__45013 = cljs.core.count.call(null,c__8927__auto___45010);
var G__45014 = 0;
seq__44974_44996 = G__45011;
chunk__44976_44997 = G__45012;
count__44977_44998 = G__45013;
i__44978_44999 = G__45014;
continue;
}
} else
{var vec__44982_45015 = cljs.core.first.call(null,seq__44974_45009__$1);var actual_type_45016 = cljs.core.nth.call(null,vec__44982_45015,0,null);var factory_45017 = cljs.core.nth.call(null,vec__44982_45015,1,null);var canonical_f_45018 = (cljs.core.truth_(selector_44988)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44987,selector_44988):cljs.core.identity).call(null,factory_45017.call(null,f_44995));dommy.core.update_event_listeners_BANG_.call(null,elem_44987,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44988,actual_type_45016,f_44995], null),canonical_f_45018);
if(cljs.core.truth_(elem_44987.addEventListener))
{elem_44987.addEventListener(cljs.core.name.call(null,actual_type_45016),canonical_f_45018);
} else
{elem_44987.attachEvent(cljs.core.name.call(null,actual_type_45016),canonical_f_45018);
}
{
var G__45019 = cljs.core.next.call(null,seq__44974_45009__$1);
var G__45020 = null;
var G__45021 = 0;
var G__45022 = 0;
seq__44974_44996 = G__45019;
chunk__44976_44997 = G__45020;
count__44977_44998 = G__45021;
i__44978_44999 = G__45022;
continue;
}
}
} else
{}
}
break;
}
{
var G__45023 = seq__44964_44989;
var G__45024 = chunk__44971_44990;
var G__45025 = count__44972_44991;
var G__45026 = (i__44973_44992 + 1);
seq__44964_44989 = G__45023;
chunk__44971_44990 = G__45024;
count__44972_44991 = G__45025;
i__44973_44992 = G__45026;
continue;
}
} else
{var temp__4092__auto___45027 = cljs.core.seq.call(null,seq__44964_44989);if(temp__4092__auto___45027)
{var seq__44964_45028__$1 = temp__4092__auto___45027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44964_45028__$1))
{var c__8927__auto___45029 = cljs.core.chunk_first.call(null,seq__44964_45028__$1);{
var G__45030 = cljs.core.chunk_rest.call(null,seq__44964_45028__$1);
var G__45031 = c__8927__auto___45029;
var G__45032 = cljs.core.count.call(null,c__8927__auto___45029);
var G__45033 = 0;
seq__44964_44989 = G__45030;
chunk__44971_44990 = G__45031;
count__44972_44991 = G__45032;
i__44973_44992 = G__45033;
continue;
}
} else
{var vec__44983_45034 = cljs.core.first.call(null,seq__44964_45028__$1);var orig_type_45035 = cljs.core.nth.call(null,vec__44983_45034,0,null);var f_45036 = cljs.core.nth.call(null,vec__44983_45034,1,null);var seq__44965_45037 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45035,new cljs.core.PersistentArrayMap.fromArray([orig_type_45035,cljs.core.identity], true, false)));var chunk__44967_45038 = null;var count__44968_45039 = 0;var i__44969_45040 = 0;while(true){
if((i__44969_45040 < count__44968_45039))
{var vec__44984_45041 = cljs.core._nth.call(null,chunk__44967_45038,i__44969_45040);var actual_type_45042 = cljs.core.nth.call(null,vec__44984_45041,0,null);var factory_45043 = cljs.core.nth.call(null,vec__44984_45041,1,null);var canonical_f_45044 = (cljs.core.truth_(selector_44988)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44987,selector_44988):cljs.core.identity).call(null,factory_45043.call(null,f_45036));dommy.core.update_event_listeners_BANG_.call(null,elem_44987,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44988,actual_type_45042,f_45036], null),canonical_f_45044);
if(cljs.core.truth_(elem_44987.addEventListener))
{elem_44987.addEventListener(cljs.core.name.call(null,actual_type_45042),canonical_f_45044);
} else
{elem_44987.attachEvent(cljs.core.name.call(null,actual_type_45042),canonical_f_45044);
}
{
var G__45045 = seq__44965_45037;
var G__45046 = chunk__44967_45038;
var G__45047 = count__44968_45039;
var G__45048 = (i__44969_45040 + 1);
seq__44965_45037 = G__45045;
chunk__44967_45038 = G__45046;
count__44968_45039 = G__45047;
i__44969_45040 = G__45048;
continue;
}
} else
{var temp__4092__auto___45049__$1 = cljs.core.seq.call(null,seq__44965_45037);if(temp__4092__auto___45049__$1)
{var seq__44965_45050__$1 = temp__4092__auto___45049__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44965_45050__$1))
{var c__8927__auto___45051 = cljs.core.chunk_first.call(null,seq__44965_45050__$1);{
var G__45052 = cljs.core.chunk_rest.call(null,seq__44965_45050__$1);
var G__45053 = c__8927__auto___45051;
var G__45054 = cljs.core.count.call(null,c__8927__auto___45051);
var G__45055 = 0;
seq__44965_45037 = G__45052;
chunk__44967_45038 = G__45053;
count__44968_45039 = G__45054;
i__44969_45040 = G__45055;
continue;
}
} else
{var vec__44985_45056 = cljs.core.first.call(null,seq__44965_45050__$1);var actual_type_45057 = cljs.core.nth.call(null,vec__44985_45056,0,null);var factory_45058 = cljs.core.nth.call(null,vec__44985_45056,1,null);var canonical_f_45059 = (cljs.core.truth_(selector_44988)?cljs.core.partial.call(null,dommy.core.live_listener,elem_44987,selector_44988):cljs.core.identity).call(null,factory_45058.call(null,f_45036));dommy.core.update_event_listeners_BANG_.call(null,elem_44987,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_44988,actual_type_45057,f_45036], null),canonical_f_45059);
if(cljs.core.truth_(elem_44987.addEventListener))
{elem_44987.addEventListener(cljs.core.name.call(null,actual_type_45057),canonical_f_45059);
} else
{elem_44987.attachEvent(cljs.core.name.call(null,actual_type_45057),canonical_f_45059);
}
{
var G__45060 = cljs.core.next.call(null,seq__44965_45050__$1);
var G__45061 = null;
var G__45062 = 0;
var G__45063 = 0;
seq__44965_45037 = G__45060;
chunk__44967_45038 = G__45061;
count__44968_45039 = G__45062;
i__44969_45040 = G__45063;
continue;
}
}
} else
{}
}
break;
}
{
var G__45064 = cljs.core.next.call(null,seq__44964_45028__$1);
var G__45065 = null;
var G__45066 = 0;
var G__45067 = 0;
seq__44964_44989 = G__45064;
chunk__44971_44990 = G__45065;
count__44972_44991 = G__45066;
i__44973_44992 = G__45067;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__45068){
var elem_sel = cljs.core.first(arglist__45068);
var type_fs = cljs.core.rest(arglist__45068);
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
var vec__45092_45115 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45116 = cljs.core.nth.call(null,vec__45092_45115,0,null);var selector_45117 = cljs.core.nth.call(null,vec__45092_45115,1,null);var seq__45093_45118 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45100_45119 = null;var count__45101_45120 = 0;var i__45102_45121 = 0;while(true){
if((i__45102_45121 < count__45101_45120))
{var vec__45109_45122 = cljs.core._nth.call(null,chunk__45100_45119,i__45102_45121);var orig_type_45123 = cljs.core.nth.call(null,vec__45109_45122,0,null);var f_45124 = cljs.core.nth.call(null,vec__45109_45122,1,null);var seq__45103_45125 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45123,new cljs.core.PersistentArrayMap.fromArray([orig_type_45123,cljs.core.identity], true, false)));var chunk__45105_45126 = null;var count__45106_45127 = 0;var i__45107_45128 = 0;while(true){
if((i__45107_45128 < count__45106_45127))
{var vec__45110_45129 = cljs.core._nth.call(null,chunk__45105_45126,i__45107_45128);var actual_type_45130 = cljs.core.nth.call(null,vec__45110_45129,0,null);var __45131 = cljs.core.nth.call(null,vec__45110_45129,1,null);var keys_45132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45117,actual_type_45130,f_45124], null);var canonical_f_45133 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45116),keys_45132);dommy.core.update_event_listeners_BANG_.call(null,elem_45116,dommy.utils.dissoc_in,keys_45132);
if(cljs.core.truth_(elem_45116.removeEventListener))
{elem_45116.removeEventListener(cljs.core.name.call(null,actual_type_45130),canonical_f_45133);
} else
{elem_45116.detachEvent(cljs.core.name.call(null,actual_type_45130),canonical_f_45133);
}
{
var G__45134 = seq__45103_45125;
var G__45135 = chunk__45105_45126;
var G__45136 = count__45106_45127;
var G__45137 = (i__45107_45128 + 1);
seq__45103_45125 = G__45134;
chunk__45105_45126 = G__45135;
count__45106_45127 = G__45136;
i__45107_45128 = G__45137;
continue;
}
} else
{var temp__4092__auto___45138 = cljs.core.seq.call(null,seq__45103_45125);if(temp__4092__auto___45138)
{var seq__45103_45139__$1 = temp__4092__auto___45138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45103_45139__$1))
{var c__8927__auto___45140 = cljs.core.chunk_first.call(null,seq__45103_45139__$1);{
var G__45141 = cljs.core.chunk_rest.call(null,seq__45103_45139__$1);
var G__45142 = c__8927__auto___45140;
var G__45143 = cljs.core.count.call(null,c__8927__auto___45140);
var G__45144 = 0;
seq__45103_45125 = G__45141;
chunk__45105_45126 = G__45142;
count__45106_45127 = G__45143;
i__45107_45128 = G__45144;
continue;
}
} else
{var vec__45111_45145 = cljs.core.first.call(null,seq__45103_45139__$1);var actual_type_45146 = cljs.core.nth.call(null,vec__45111_45145,0,null);var __45147 = cljs.core.nth.call(null,vec__45111_45145,1,null);var keys_45148 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45117,actual_type_45146,f_45124], null);var canonical_f_45149 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45116),keys_45148);dommy.core.update_event_listeners_BANG_.call(null,elem_45116,dommy.utils.dissoc_in,keys_45148);
if(cljs.core.truth_(elem_45116.removeEventListener))
{elem_45116.removeEventListener(cljs.core.name.call(null,actual_type_45146),canonical_f_45149);
} else
{elem_45116.detachEvent(cljs.core.name.call(null,actual_type_45146),canonical_f_45149);
}
{
var G__45150 = cljs.core.next.call(null,seq__45103_45139__$1);
var G__45151 = null;
var G__45152 = 0;
var G__45153 = 0;
seq__45103_45125 = G__45150;
chunk__45105_45126 = G__45151;
count__45106_45127 = G__45152;
i__45107_45128 = G__45153;
continue;
}
}
} else
{}
}
break;
}
{
var G__45154 = seq__45093_45118;
var G__45155 = chunk__45100_45119;
var G__45156 = count__45101_45120;
var G__45157 = (i__45102_45121 + 1);
seq__45093_45118 = G__45154;
chunk__45100_45119 = G__45155;
count__45101_45120 = G__45156;
i__45102_45121 = G__45157;
continue;
}
} else
{var temp__4092__auto___45158 = cljs.core.seq.call(null,seq__45093_45118);if(temp__4092__auto___45158)
{var seq__45093_45159__$1 = temp__4092__auto___45158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45093_45159__$1))
{var c__8927__auto___45160 = cljs.core.chunk_first.call(null,seq__45093_45159__$1);{
var G__45161 = cljs.core.chunk_rest.call(null,seq__45093_45159__$1);
var G__45162 = c__8927__auto___45160;
var G__45163 = cljs.core.count.call(null,c__8927__auto___45160);
var G__45164 = 0;
seq__45093_45118 = G__45161;
chunk__45100_45119 = G__45162;
count__45101_45120 = G__45163;
i__45102_45121 = G__45164;
continue;
}
} else
{var vec__45112_45165 = cljs.core.first.call(null,seq__45093_45159__$1);var orig_type_45166 = cljs.core.nth.call(null,vec__45112_45165,0,null);var f_45167 = cljs.core.nth.call(null,vec__45112_45165,1,null);var seq__45094_45168 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45166,new cljs.core.PersistentArrayMap.fromArray([orig_type_45166,cljs.core.identity], true, false)));var chunk__45096_45169 = null;var count__45097_45170 = 0;var i__45098_45171 = 0;while(true){
if((i__45098_45171 < count__45097_45170))
{var vec__45113_45172 = cljs.core._nth.call(null,chunk__45096_45169,i__45098_45171);var actual_type_45173 = cljs.core.nth.call(null,vec__45113_45172,0,null);var __45174 = cljs.core.nth.call(null,vec__45113_45172,1,null);var keys_45175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45117,actual_type_45173,f_45167], null);var canonical_f_45176 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45116),keys_45175);dommy.core.update_event_listeners_BANG_.call(null,elem_45116,dommy.utils.dissoc_in,keys_45175);
if(cljs.core.truth_(elem_45116.removeEventListener))
{elem_45116.removeEventListener(cljs.core.name.call(null,actual_type_45173),canonical_f_45176);
} else
{elem_45116.detachEvent(cljs.core.name.call(null,actual_type_45173),canonical_f_45176);
}
{
var G__45177 = seq__45094_45168;
var G__45178 = chunk__45096_45169;
var G__45179 = count__45097_45170;
var G__45180 = (i__45098_45171 + 1);
seq__45094_45168 = G__45177;
chunk__45096_45169 = G__45178;
count__45097_45170 = G__45179;
i__45098_45171 = G__45180;
continue;
}
} else
{var temp__4092__auto___45181__$1 = cljs.core.seq.call(null,seq__45094_45168);if(temp__4092__auto___45181__$1)
{var seq__45094_45182__$1 = temp__4092__auto___45181__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45094_45182__$1))
{var c__8927__auto___45183 = cljs.core.chunk_first.call(null,seq__45094_45182__$1);{
var G__45184 = cljs.core.chunk_rest.call(null,seq__45094_45182__$1);
var G__45185 = c__8927__auto___45183;
var G__45186 = cljs.core.count.call(null,c__8927__auto___45183);
var G__45187 = 0;
seq__45094_45168 = G__45184;
chunk__45096_45169 = G__45185;
count__45097_45170 = G__45186;
i__45098_45171 = G__45187;
continue;
}
} else
{var vec__45114_45188 = cljs.core.first.call(null,seq__45094_45182__$1);var actual_type_45189 = cljs.core.nth.call(null,vec__45114_45188,0,null);var __45190 = cljs.core.nth.call(null,vec__45114_45188,1,null);var keys_45191 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45117,actual_type_45189,f_45167], null);var canonical_f_45192 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45116),keys_45191);dommy.core.update_event_listeners_BANG_.call(null,elem_45116,dommy.utils.dissoc_in,keys_45191);
if(cljs.core.truth_(elem_45116.removeEventListener))
{elem_45116.removeEventListener(cljs.core.name.call(null,actual_type_45189),canonical_f_45192);
} else
{elem_45116.detachEvent(cljs.core.name.call(null,actual_type_45189),canonical_f_45192);
}
{
var G__45193 = cljs.core.next.call(null,seq__45094_45182__$1);
var G__45194 = null;
var G__45195 = 0;
var G__45196 = 0;
seq__45094_45168 = G__45193;
chunk__45096_45169 = G__45194;
count__45097_45170 = G__45195;
i__45098_45171 = G__45196;
continue;
}
}
} else
{}
}
break;
}
{
var G__45197 = cljs.core.next.call(null,seq__45093_45159__$1);
var G__45198 = null;
var G__45199 = 0;
var G__45200 = 0;
seq__45093_45118 = G__45197;
chunk__45100_45119 = G__45198;
count__45101_45120 = G__45199;
i__45102_45121 = G__45200;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__45201){
var elem_sel = cljs.core.first(arglist__45201);
var type_fs = cljs.core.rest(arglist__45201);
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
var vec__45209_45216 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45217 = cljs.core.nth.call(null,vec__45209_45216,0,null);var selector_45218 = cljs.core.nth.call(null,vec__45209_45216,1,null);var seq__45210_45219 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45211_45220 = null;var count__45212_45221 = 0;var i__45213_45222 = 0;while(true){
if((i__45213_45222 < count__45212_45221))
{var vec__45214_45223 = cljs.core._nth.call(null,chunk__45211_45220,i__45213_45222);var type_45224 = cljs.core.nth.call(null,vec__45214_45223,0,null);var f_45225 = cljs.core.nth.call(null,vec__45214_45223,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45224,((function (seq__45210_45219,chunk__45211_45220,count__45212_45221,i__45213_45222,vec__45214_45223,type_45224,f_45225){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45224,this_fn);
return f_45225.call(null,e);
});})(seq__45210_45219,chunk__45211_45220,count__45212_45221,i__45213_45222,vec__45214_45223,type_45224,f_45225))
);
{
var G__45226 = seq__45210_45219;
var G__45227 = chunk__45211_45220;
var G__45228 = count__45212_45221;
var G__45229 = (i__45213_45222 + 1);
seq__45210_45219 = G__45226;
chunk__45211_45220 = G__45227;
count__45212_45221 = G__45228;
i__45213_45222 = G__45229;
continue;
}
} else
{var temp__4092__auto___45230 = cljs.core.seq.call(null,seq__45210_45219);if(temp__4092__auto___45230)
{var seq__45210_45231__$1 = temp__4092__auto___45230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45210_45231__$1))
{var c__8927__auto___45232 = cljs.core.chunk_first.call(null,seq__45210_45231__$1);{
var G__45233 = cljs.core.chunk_rest.call(null,seq__45210_45231__$1);
var G__45234 = c__8927__auto___45232;
var G__45235 = cljs.core.count.call(null,c__8927__auto___45232);
var G__45236 = 0;
seq__45210_45219 = G__45233;
chunk__45211_45220 = G__45234;
count__45212_45221 = G__45235;
i__45213_45222 = G__45236;
continue;
}
} else
{var vec__45215_45237 = cljs.core.first.call(null,seq__45210_45231__$1);var type_45238 = cljs.core.nth.call(null,vec__45215_45237,0,null);var f_45239 = cljs.core.nth.call(null,vec__45215_45237,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45238,((function (seq__45210_45219,chunk__45211_45220,count__45212_45221,i__45213_45222,vec__45215_45237,type_45238,f_45239,seq__45210_45231__$1,temp__4092__auto___45230){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45238,this_fn);
return f_45239.call(null,e);
});})(seq__45210_45219,chunk__45211_45220,count__45212_45221,i__45213_45222,vec__45215_45237,type_45238,f_45239,seq__45210_45231__$1,temp__4092__auto___45230))
);
{
var G__45240 = cljs.core.next.call(null,seq__45210_45231__$1);
var G__45241 = null;
var G__45242 = 0;
var G__45243 = 0;
seq__45210_45219 = G__45240;
chunk__45211_45220 = G__45241;
count__45212_45221 = G__45242;
i__45213_45222 = G__45243;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__45244){
var elem_sel = cljs.core.first(arglist__45244);
var type_fs = cljs.core.rest(arglist__45244);
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
var fire_BANG___delegate = function (node,event_type,p__45245){var vec__45247 = p__45245;var update_event_BANG_ = cljs.core.nth.call(null,vec__45247,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__45245 = null;if (arguments.length > 2) {
  p__45245 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__45245);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__45248){
var node = cljs.core.first(arglist__45248);
arglist__45248 = cljs.core.next(arglist__45248);
var event_type = cljs.core.first(arglist__45248);
var p__45245 = cljs.core.rest(arglist__45248);
return fire_BANG___delegate(node,event_type,p__45245);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map